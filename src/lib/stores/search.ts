import { writable } from "svelte/store"

export const createSearchStore=(data)=>{
    const {subscribe, set , update}=writable({
        data:data,
        filtered: data,
        searchFrom:'',
        searchTo:'',
    })
    return{
        subscribe,
        set, 
        update
    }
}
export const searchHandler =(store) =>{

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
export const placePairsStore =writable([])
export const goClickedHandler = (store) => {
    console.log('Go button clicked! Processing routes...');
    const allPlacePairs: any[] = [];
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
              findDistance(place1,place2);
            
        }

        let distance = null;
        let duration = null;
        let loading = false;

        async function geoCodePlace(placeName){
    try{
        const response = await fetch(`/api/geocode?place=${encodeURIComponent(placeName)}`,{
            method: "GET",
             headers: {
            'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8'
            }
        });
        if(!response.ok){
            throw new Error(`Geocoding Failed: ${response.status}`)
        }
        const data = await response.json();
        if (data.features && data.features.length >0){
            const coordinates= data.features[0].geometry.coordinates;
            return coordinates;
        } else{
            throw new Error (`No results found for "${placeName}"`);
        }}
        catch(err){
            console.error("Geocoding Error",err);
            throw err;
        }

  }
   let totalDistance=0;
   let totalFare=0;
  
        async function findDistance(place1,place2) {
    
    if (!place1.trim() || !place2.trim()) {
      return;
    }


    try {
      console.log('Geocoding places...');
      const [coord1, coord2] = await Promise.all([
        geoCodePlace(place1),
        geoCodePlace(place2)
      ]);

      console.log('Coordinates:', { place1: coord1, place2: coord2 });

      // Step 2: Calculate distance
      console.log('Calculating distance...');
      const result = await calculateDistance(coord1, coord2);

      // Convert meters to kilometers and seconds to hours/minutes
     const distance = (result.distance / 1000).toFixed(2); // km
      const hours = Math.floor(result.duration / 3600);
      const minutes = Math.floor((result.duration % 3600) / 60);
      duration = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;

      console.log('Distance calculated:', { distance, duration });
     
      totalDistance+=Number(distance)
      
    //   if(totalDistance<=5){
    //     totalFare=18
    //   }elseif(

    //   )
      console.log(totalDistance)
      
    } catch (err) {
      console.error('Error:', err);
    } finally {
      loading = false;
    }
         }
        
    async function calculateDistance(coord1, coord2) {
    try {
      const response = await fetch(
        '/api/direction',
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8',
            'Content-Type': 'application/json',
            'Authorization': "any"
          },
          body: JSON.stringify({
            coordinates: [coord1, coord2]
          })
        }
      );
      if (!response.ok) {
        throw new Error(`Distance calculation failed: ${response.status}`);
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

    });
    return store.filtered;
}
