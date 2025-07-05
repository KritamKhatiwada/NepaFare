import { writable } from "svelte/store"

// Declare all variables at the top of the file
let totalDistance = 0;
let totalFare = 0;
let loading = false;
let duration = '';

export const createSearchStore = (data) => {
    const {subscribe, set, update} = writable({
        data: data,
        filtered: data,
        searchFrom: '',
        searchTo: '',
    })
    return {
        subscribe,
        set, 
        update
    }
}

export const searchHandler = (store) => {
    const searchFromTerm = store.searchFrom.toLowerCase().trim();
    const searchToTerm = store.searchTo.toLowerCase().trim();
    
    // If both fields are empty, show all routes
    if (!searchFromTerm && !searchToTerm) {
        store.filtered = store.data;
        return;
    }

    store.filtered = store.data.filter((item) => {
        const stopsLower = item.searchTerms.toLowerCase();
        
        if (searchFromTerm && !searchToTerm) {
            return stopsLower.includes(searchFromTerm);
        }
        
        if (!searchFromTerm && searchToTerm) {
            return stopsLower.includes(searchToTerm);
        }
        return stopsLower.includes(searchFromTerm) && stopsLower.includes(searchToTerm);
    }) 
    return store;
}

export const placePairsStore = writable([])
function updateFareDisplay() {
    const fareElement = document.getElementById('fareId');
    if (fareElement) {
        fareElement.textContent = `Rs. ${totalFare}`;
        fareElement.style.color = '#10b981'; // Green color
        fareElement.style.fontSize = '1.5rem';
        fareElement.style.fontWeight = 'bold';
    }
}


async function geoCodePlace(placeName) {
    try {
        const response = await fetch(`/api/geocode?place=${encodeURIComponent(placeName)}`, {
            method: "GET",
            headers: {
                'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8'
            }
        });
        console.log('Geocoding response status:', response.status);
        
        if (response.ok) {
            const data = await response.json();
            console.log('Geocoding result:', data);
            
            // Extract coordinates from the response
            if (data.features && data.features.length > 0) {
                const coordinates = data.features[0].geometry.coordinates;
                return [coordinates[0], coordinates[1]]; // [longitude, latitude]
            } else {
                throw new Error(`No coordinates found for ${placeName}`);
            }
        } else {
            const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
            console.error('Geocoding error details:', errorData);
            throw new Error(`Geocoding failed for ${placeName}: ${response.status} - ${errorData.error || 'Unknown error'}`);
        }
    } catch (error) {
        console.error('Geocoding error for', placeName, ':', error);
        throw error;
    }
}

async function findDistance(place1, place2) {
    if (!place1.trim() || !place2.trim()) {
        console.log('Both places are required');
        return;
    }
    
    loading = true;
    
    try {
        console.log('Geocoding places...');
        console.log('Geocoding place1:', place1);
        const coord1 = await geoCodePlace(place1);
        console.log('Place1 coordinates:', coord1);
        
        console.log('Geocoding place2:', place2);
        const coord2 = await geoCodePlace(place2);
        console.log('Place2 coordinates:', coord2);
        
        console.log('Both coordinates obtained:', { place1: coord1, place2: coord2 });
        
        // Calculate distance
        console.log('Calculating distance...');
        const result = await calculateDistance(coord1, coord2);
        
        // Convert meters to kilometers and seconds to hours/minutes
        const distance = (result.distance / 1000).toFixed(2); // km
        const hours = Math.floor(result.duration / 3600);
        const minutes = Math.floor((result.duration % 3600) / 60);
        duration = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
        
        console.log('Distance calculated:', { distance, duration });
        
        totalDistance += Number(distance);
        
        // Calculate fare based on distance
        if (totalDistance <= 5) {
            totalFare = 18;
        } else if (totalDistance <= 10) {
            totalFare = 25;
        } else if (totalDistance <= 20) {
            totalFare = 35;
        } else {
            totalFare = 50;
        }
        
        console.log('Total distance:', totalDistance, 'km');
        console.log('Total fare:', totalFare);

        updateFareDisplay();
        
        return { distance, duration, totalDistance, totalFare };
        
    } catch (err) {
        console.error('Error in findDistance:', err);
        throw err;
    } finally {
        loading = false;
    }
}

async function calculateDistance(coord1, coord2) {
    try {
        const response = await fetch('/api/direction', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8',
                'Content-Type': 'application/json',
                'Authorization': "any"
            },
            body: JSON.stringify({
                coordinates: [coord1, coord2]
            })
        });
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
            throw new Error(`Distance calculation failed: ${response.status} - ${errorData.error || 'Unknown error'}`);
        }
        
        const data = await response.json();
        
        if (data.routes && data.routes.length > 0) {
            const route = data.routes[0];
            return {
                distance: route.summary.distance, // in meters
                duration: route.summary.duration  // in seconds
            };
        } else {
            throw new Error('No route found between the locations');
        }
    } catch (err) {
        console.error('Distance calculation error:', err);
        throw err;
    }
}

export const goClickedHandler = (store) => {
    console.log('Go button clicked! Processing routes...');
    
    // Reset totals when starting new calculation
    totalDistance = 0;
    totalFare = 0;
    
    // Loop through each filtered route and its stops
    store.filtered.forEach((route, routeIndex) => {
        console.log(`Route ${routeIndex + 1}: ${route.route_name}`);
        const routePlacePairs = [];
        
        for (let i = 0; i < route.stops.length - 1; i++) {
            const place1 = route.stops[i];     // Current stop
            const place2 = route.stops[i + 1]; // Next stop
            
            const placePair = {
                routeIndex: routeIndex + 1,
                routeName: route.route_name,
                segmentIndex: i + 1,
                place1: place1,
                place2: place2,
                pairId: `route-${routeIndex + 1}-segment-${i + 1}`
            };
            routePlacePairs.push(placePair);
            
            console.log(`  Segment ${i + 1}:`);
            console.log(`    Place1: ${place1}`);
            console.log(`    Place2: ${place2}`);
            
            // Call findDistance for each segment
            findDistance(place1, place2);
        }
    });
    
    return store.filtered;
}