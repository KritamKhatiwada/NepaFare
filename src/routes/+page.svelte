

  <script>
  import { createSearchStore, searchHandler, goClickedHandler} from "$lib/stores/search.js";
  import { onDestroy } from "svelte";

          const routes= [
    {
      route_name: "Bhaktapur - Purano Thimi- Purano Buspark",
      stops: [
        "Bagbazar",
        "Maitighar",
        "Buddhanagar Stop",
        "Naya Baneshwar Bus Station",
        "Minbhawan Stop",
        "Shantinagar Stop",
        "Tinkune Stop",
        "Koteshwor Stop",
        "Jadibti Stop",
        "Pepsicola Stop",
        "Panika Stop",
        "Siddhikali Chowk Bus Stop",
        "Bahakha Bazar Bus Stop",
        "Radheradhe Chowk Bus Stop",
        "Hindunagar Chowk Bus Stop",
        "Dhungedhara Chowk Bus Stop",
        "Dudhpati Bus Stop"
      ]
    },
    {
      route_name: "Lagankhel - Naya Buspark (Ringroad)",
      stops: [
        "Lagankhel Stop",
        "Batuk Bhairav",
        "Lalitpur Industrial Estate",
        "Satdobato",
        "B & B Hospital/KCM stop",
        "Gwarko Chok",
        "Koteshwar Stop",
        "Gairigaun Stop",
        "Sinamangal Ring Road Stop",
        "Airport Bus Station",
        "Chabahil",
        "Gopi Krishna Stop",
        "Sukedhara Stop",
        "Chapal Karkhana stop",
        "Narayan Gopal Chok",
        "Basundhara",
        "Samakhusi Stop",
        "Gongabu Chok",
        "Naya Bus Park"
      ]
    },
    {
      route_name: "Purana Buspark - Chabahil",
      stops: [
        "Bhadrakali",
        "Singha Durbar West Stop",
        "Maitighar",
        "Buddhanagar Stop",
        "Naya Baneshwar Bus Station",
        "Minbhawan Stop",
        "Shantinagar Stop",
        "Tinkune Stop",
        "Gairigaun Stop",
        "Sinamangal Ring Road Stop",
        "Airport Bus Station",
        "Gaushala Chok Stop",
        "Chabahil",
        "Gopikrishna Stop",
        "Dhumbarahi Stop",
        "Chappalkarkhana Stop",
        "Maharajgunj Chowk"
      ]
    },
    {
      route_name: "Budhanilkantha School - Ratna Park",
      stops: [
        "Budhanilkantha School Blue Micro Stand",
        "Budhanilkantha Micro Stand",
        "Golfutar stop",
        "Bansbari stop",
        "Chakrapath Stop-- South",
        "Panipokhari stop",
        "Lazimpat stop",
        "Lainchaur stop",
        "Kantipath",
        "Ratna Park"
      ]
    },
    {
      route_name: "Kalanki - TIA Airport",
      stops: [
        "Kalanki Chowk",
        "Kalimati",
        "Tripureshwar",
        "Thapathali",
        "Maitighar Stop--South",
        "Maitighar",
        "Buddhanagar Stop",
        "Naya Baneshwar Bus Station",
        "Minbhawan Stop",
        "Shantinagar Stop",
        "Tinkune Stop",
        "Gairigaun",
        "Sinamangal Stop",
        "Airport Bus Station"
      ]
    },
    {
      route_name: "Chakrapath - Parikrama",
      stops: [
        "Gaushala Chowk Stop",
        "Gopi Krishna Stop",
        "Sukedharastop",
        "Dhumbarahi Stop",
        "Chappal Karkhana Stop",
        "Narayan Gopal Stop",
        "Basundhara Stop",
        "Samakhushi Stop",
        "Gongabu Stop",
        "Macchapokhari Stop",
        "Balaju stop",
        "Banasthali Stop",
        "Dhungedhara Stop",
        "Sano Bharyang",
        "Thulo Bharyang",
        "Swyambhu Stop",
        "Kalanki Chowk",
        "Khasibazaar",
        "Balkhu",
        "Sanepa Height",
        "Ekantakuna",
        "Satdobato Stop",
        "Gwarko Stop",
        "Koteshwor Stop",
        "Tinkune Stop",
        "Sinamangal Stop",
        "Pinglasthan",
        "Gaushala"
      ]
    },
    {
      route_name: "Gothatar - Purano Buspark",
      stops: [
        "Bagbazar",
        "Maitighar",
        "Buddhanagar Stop",
        "Naya Baneshwar Bus Station",
        "Minbhawan Stop",
        "Shantinagar Stop",
        "Tinkune Stop",
        "Koteshwor Stop",
        "Jadibti Stop",
        "Pepsicola Stop",
        "Khahare Chowk Bus Stop",
        "Gothatar Stop"
      ]
    },
    {
      route_name: "Kalanki - Pepsicola",
      stops: [
        "Kalanki Chowk",
        "Kalimati",
        "Tripureshwar",
        "Thapathali",
        "Maitighar Stop--South",
        "Maitighar",
        "Buddhanagar Stop",
        "Naya Baneshwar Bus Station",
        "Minbhawan Stop",
        "Shantinagar Stop",
        "Tinkune Stop",
        "Koteshwar Stop",
        "Jadibuti Stop",
        "Pepsicola Chowk Stop"
      ]
    },
    {
      route_name: "Kamalbinayak - Ratnapark",
      stops: [
        "Ratnapark",
        "Bhadrakali",
        "Singha Durbar West Stop",
        "Maitighar",
        "Buddhanagar Stop",
        "Naya Baneshwar Bus Station",
        "Minbhawan Stop",
        "Shantinagar Stop",
        "Tinkune Stop",
        "Koteshwor Stop",
        "Lokanthali Stop",
        "Gathaghar Stop",
        "Shrijananagar Stop",
        "Dudhpati",
        "Byasi",
        "Kamalbinayak Stop"
      ]
    },
    {
      route_name: "Purano Bus Park - Sakhu",
      stops: [
        "Purano Buspark",
        "Tundikhel",
        "Singha Durbar",
        "Maitighar Mandala",
        "Nayabaneshwor",
        "Minbhawan Stop",
        "Shentinagar Stop",
        "Tinkune Stop",
        "Gairigaun Stop",
        "Sinamangal Ring Road Stop",
        "Airport Bus Station",
        "Gaushala Chok Stop",
        "Chabahil",
        "Hyatt Regency",
        "Boudha",
        "Jorpati",
        "Narayantar Bridge",
        "Mulpani",
        "Thali",
        "Sakhu"
      ]
    },
    {
      route_name: "Ratnapark - Chyamasingh",
      stops: [
        "Bagbazar",
        "Bhadrakali",
        "Singha Durbar West Stop",
        "Maitighar",
        "Buddhanagar Stop",
        "Naya Baneshwar Bus Station",
        "Minbhawan Stop",
        "Shantinagar Stop",
        "Tinkune Stop",
        "Koteshwor Stop",
        "Lokanthali Stop",
        "Gathaghar Stop",
        "Shrijananagar Stop",
        "Sallaghari Stop",
        "Chunudevi",
        "Suotabinayak Stop",
        "Dholeshwor Mahadev Bus Stop",
        "Adarsha Bus Stop",
        "Jagati Bus Stop",
        "Chyamasing Bus Stop"
      ]
    },
    {
      route_name: "Kausaltar - Naikap",
      stops: [
        "Naikap",
        "Kalanki Chowk",
        "Kalimati",
        "Tripureshwor",
        "Thapathali",
        "Maitighar Stop--South",
        "Maitighar",
        "Buddhanagar Stop",
        "Naya Baneshwar Bus Station",
        "Minbhawan Stop",
        "Shantinagar Stop",
        "Tinkune Stop",
        "Koteshwar Stop",
        "Jadibuti",
        "Lokanthali",
        "Kausaltar"
      ]
    },
    {
      route_name: "Ratnapark - Changu",
      stops: [
        "Ratnapark",
        "Singha Durbar West Stop",
        "Maitighar",
        "Buddhanagar Stop",
        "Naya Baneshwar Bus Station",
        "Minbhawan Stop",
        "Shantinagar Stop",
        "Tinkune Stop",
        "Koteshwor Stop",
        "Lokanthali Stop",
        "Gathaghar Stop",
        "Gaushala Chok Stop",
        "Shrijananagar Stop",
        "Dudhpati",
        "Byasi",
        "Changunarayan Road",
        "Changunarayan Stop"
      ]
    },
    {
      route_name: "Ratnapark - Panauti",
      stops: [
        "Bhadrakali",
        "Singha Durbar West Stop",
        "Maitighar",
        "Buddhanagar Stop",
        "Naya Baneshwar Bus Station",
        "Minbhawan Stop",
        "Tinkune Stop",
        "Jadibuti",
        "Kausaltar",
        "Gathaghar",
        "Thimi",
        "Srijana nagar",
        "Tinkune Bhaktapur",
        "Sallaghari Stop",
        "Chunudevi",
        "Barahi Movies",
        "Suryabinayek",
        "Adarsha",
        "Jagati",
        "Sanga",
        "Bansdol",
        "Banepa Tindobato",
        "Khadpu",
        "Panauti"
      ]
    },
    {
      route_name: "Purano Bus Park - Budhanilkantha",
      stops: [
        "Purano Bus Park",
        "Deuba Chowk stop",
        "Kantipath",
        "Lainchaur stop",
        "Lazimpat stop",
        "Panipokhari stop",
        "Chakrapath Stop-- South",
        "Bansbari stop",
        "Golfutar stop",
        "Budhanilkantha Stop"
      ]
    },
    {
      route_name: "Jorpati - Purano Bus Park",
      stops: [
        "Jorpati",
        "Bouddha",
        "Chuchepati",
        "Chabahil",
        "Mitrapark",
        "Gaushala",
        "Battisputali",
        "Purano Baneshwor",
        "Setopul",
        "Dillibazar",
        "Putalisadak",
        "Bagbazar",
        "Purano Buspark"
      ]
    },
    {
      route_name: "Ratna Park - Sundarijal",
      stops: [
        "Ratnapark",
        "Singha Durbar West Stop",
        "Kamalpokhari",
        "Gyanehwor",
        "Ratopul",
        "Gaushala",
        "Mitrapark",
        "Chabahil",
        "Chuchepati",
        "Bouddha",
        "Jorpati",
        "Gokarneshwor Mahadev Temple",
        "Nayapati",
        "Sundarijal"
      ]
    },
    {
      route_name: "Gokarna - Chabahil - Naya Buspark - Kalanki",
      stops: [
        "Gokarna Bus Stop",
        "Jorpati",
        "Boudha",
        "Hyatt Regency",
        "Chabahil",
        "Gopi Krishna Stop",
        "Dhumbarahi",
        "Narayan Gopal Chok",
        "Samakhusi Stop",
        "Naya Bus Park",
        "Balaju",
        "Dhungedhara",
        "Kalanki Chowk"
      ]
    },
    {
      route_name: "Nepal Yatayat - Balkumari- Gopi Krishna",
      stops: [
        "Sukedhara Stop",
        "Dhumbarahi Stop",
        "Chappal Kerkhana",
        "Narayan Gopal Chowk",
        "Baluwatar Bus Stop",
        "Naxal Stop",
        "Mariott Stop",
        "Hattisar Stop",
        "Putali Sadak Stop",
        "New Plaza Bus Stop",
        "Ghattekulo Bus Stop",
        "Hanumansthan Bus Stop",
        "New Baneshwor",
        "Minbhawan Bus Stand",
        "Tinkune Bus Stand",
        "Koteshwor Bus Stand",
        "Balkumari Bus Stop"
      ]
    },
    {
      route_name: "Ratna Park - Daksinkali",
      stops: [
        "Ratnapark",
        "Kalimati",
        "Kuleshwor",
        "Balkhu",
        "Chobar",
        "Taudaha",
        "Chalnakhel Bus Stop",
        "Satikhel",
        "Bhanjyang Bus Stop",
        "Dollu Bus stop",
        "Satikhel Bus Stop",
        "Dakhinkali Temple"
      ]
    },
    {
      route_name: "Attarkhel - Purano Buspark",
      stops: [
        "Bhadrakali",
        "Singha Durbar West Stop",
        "Maitighar",
        "Buddhanagar Stop",
        "Naya Baneshwar Bus Station",
        "Minbhawan Stop",
        "Shantinagar Stop",
        "Tinkune Stop",
        "Gairigaun Stop",
        "Sinamangal Ring Road Stop",
        "Airport Bus Station",
        "Gaushala Chok Stop",
        "Chabahil",
        "Hyatt Regency",
        "Boudha",
        "Jorpati",
        "Attarkhel",
        "Purano Bus Park"
      ]
    },
    {
      route_name: "Kalanki - Balkumari",
      stops: [
        "Kalanki Chowk",
        "Kalimati",
        "Tripureshwar",
        "Thapathali",
        "Maitighar Stop--South",
        "Maitighar",
        "Buddhanagar Stop",
        "Naya Baneshwar Bus Station",
        "Minbhawan Stop",
        "Shantinagar Stop",
        "Tinkune Stop",
        "Koteshwar Stop",
        "Balkumari Stop"
      ]
    },
    {
      route_name: "Purano Buspark - Shivapuri",
      stops: [
        "Purano Bus Park",
        "Deuba Chowk stop",
        "Kantipath",
        "Lainchaur stop",
        "Lazimpat stop",
        "Panipokhari stop",
        "Chakrapath Stop-- South",
        "Bansbari stop",
        "Golfutar stop",
        "Budhanilkantha Micro Stand",
        "Shivapuri Park Stop"
      ]
    },
    {
      route_name: "Ratnapark - Dhulikhel",
      stops: [
        "Bhadrakali",
        "Singha Durbar West Stop",
        "Maitighar",
        "Buddhanagar Stop",
        "Naya Baneshwar Bus Station",
        "Minbhawan Stop",
        "Tinkune Stop",
        "Jadibuti",
        "Kausaltar",
        "Gathaghar",
        "Thimi",
        "Srijana nagar",
        "Tinkune Bhaktapur",
        "Sallaghari Stop",
        "Chunudevi",
        "Barahi Movies",
        "Suryabinayek",
        "Adarsha",
        "Jagati",
        "Sanga",
        "Bansdol",
        "Banepa Tindobato",
        "Budol BUs Station",
        "Basghari",
        "Dhulikhel Bus Station"
      ]
    },
    {
      route_name: "Bagbazar - Kamalbinayak",
      stops: [
        "Bagbazar",
        "Bhadrakali",
        "Singha Durbar West Stop",
        "Maitighar",
        "Buddhanagar Stop",
        "Naya Baneshwar Bus Station",
        "Minbhawan Stop",
        "Shantinagar Stop",
        "Tinkune Stop",
        "Koteshwor Stop",
        "Lokanthali Stop",
        "Gathaghar Stop",
        "Gaushala Chok Stop",
        "Shrijananagar Stop",
        "Dudhpati",
        "Byasi",
        "Kamalbinayak Stop"
      ]
    }
  ]

  const searchProducts = routes.map((route) => ({
    ...route,
    searchTerms: ` ${route.stops.join('')}`
  }));

  const searchStore = createSearchStore(searchProducts);
  const unsubscribe = searchStore.subscribe((model) => searchHandler(model));
  
  onDestroy(() => {
    unsubscribe();
  });

  function handleSubmit(event) {
    event.preventDefault();
    findTwoPlace();
  }

  let loading = false;
  let fareResults = [];
  let selectedRoute = null;

  function findTwoPlace() {
    loading = true;
    fareResults = [];
    
    try {
      // Get current store value
      let currentStore;
      searchStore.subscribe(value => {
        currentStore = value;
      })();

  
      const updatedStore = searchHandler(currentStore);
     
      searchStore.update(store => ({
        ...store,
        filtered: updatedStore.filtered
      }));

    
      if (updatedStore.filtered.length > 0) {
        fareResults = updatedStore.filtered.map(route => {
          const fare = calculateFareForRoute(route, currentStore.searchFrom, currentStore.searchTo);
          return {
            route: route,
            fare: fare
          };
        });
        

        selectedRoute = fareResults.find(result => result.fare.isValid) || fareResults[0];
        
        updateFareDisplay();
      }

    } catch (error) {
      console.error('Error in findTwoPlace:', error);
    } finally {
      loading = false;
    }
  }

  function calculateFareForRoute(route, fromStop, toStop) {
    const normalizeStop = (stop) => stop.toLowerCase().trim();
    
    const fromIndex = route.stops.findIndex(stop => 
      normalizeStop(stop).includes(normalizeStop(fromStop)) || 
      normalizeStop(fromStop).includes(normalizeStop(stop))
    );
    
    const toIndex = route.stops.findIndex(stop => 
      normalizeStop(stop).includes(normalizeStop(toStop)) || 
      normalizeStop(toStop).includes(normalizeStop(stop))
    );

    if (fromIndex === -1 || toIndex === -1) {
      return {
        isValid: false,
        fare: 0,
        distance: 0,
        message: "One or both stops not found in this route"
      };
    }

    const distance = Math.abs(toIndex - fromIndex);
    
    let fare = 0;
    if (distance <= 3) {
      fare = 25; // Base fare
    } else if (distance <= 6) {
      fare = 30;
    } else if (distance <= 10) {
      fare = 35;
    } else {
      fare = 40;
    }

    return {
      isValid: true,
      fare: fare,
      distance: distance,
      fromStop: route.stops[fromIndex],
      toStop: route.stops[toIndex],
      message: `${distance} stops apart`
    };
  }

function updateFareDisplay() {
    const fareElement = document.getElementById('fareId');
    if (fareElement && selectedRoute) {
      if (selectedRoute.fare.isValid) {
        fareElement.innerHTML = `
          <div class="mt-4 p-4 bg-neutral-800 rounded-lg">
            <div class="text-3xl font-bold text-green-400">Rs. ${selectedRoute.fare.fare}</div>
            <div class="text-sm text-neutral-400 mt-2">
              Route: ${selectedRoute.route.route_name}<br>
              ${selectedRoute.fare.fromStop} → ${selectedRoute.fare.toStop}<br>
              ${selectedRoute.fare.message}
            </div>
            <button id="reportBtn" class="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 mt-3">Report</button>
            
            <!-- Hidden Report Form -->
            <div id="reportForm" class="hidden mt-4 p-4 bg-neutral-700 rounded-lg border border-neutral-600">
              <h3 class="text-lg font-semibold text-white mb-4">Report Issue</h3>
              <form id="reportFormElement" class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-neutral-300 mb-1" for="firstName">
                      First Name <span class="text-red-400">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      required 
                      class="w-full px-3 py-2 bg-neutral-600 border border-neutral-500 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Enter first name"
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-neutral-300 mb-1" for="lastName">
                      Last Name <span class="text-red-400">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName" 
                      required 
                      class="w-full px-3 py-2 bg-neutral-600 border border-neutral-500 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Enter last name"
                    >
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-neutral-300 mb-1" for="phoneNumber">
                    Phone Number <span class="text-red-400">*</span>
                  </label>
                  <input 
                    type="tel" 
                    id="phoneNumber" 
                    name="phoneNumber" 
                    required 
                    class="w-full px-3 py-2 bg-neutral-600 border border-neutral-500 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter phone number"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-neutral-300 mb-1" for="plateNumber">
                    Vehicle Plate Number <span class="text-red-400">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="plateNumber" 
                    name="plateNumber" 
                    required 
                    class="w-full px-3 py-2 bg-neutral-600 border border-neutral-500 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter vehicle plate number"
                  >
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-neutral-300 mb-1" for="fromStop">
                      From Stop
                    </label>
                    <textarea 
                      id="fromStop" 
                      name="fromStop" 
                      rows="2"
                      readonly
                      class="w-full px-3 py-2 bg-neutral-600 border border-neutral-500 rounded-md text-white resize-none focus:outline-none cursor-not-allowed"
                    >${selectedRoute.fare.fromStop}</textarea>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-neutral-300 mb-1" for="toStop">
                      To Stop
                    </label>
                    <textarea 
                      id="toStop" 
                      name="toStop" 
                      rows="2"
                      readonly
                      class="w-full px-3 py-2 bg-neutral-600 border border-neutral-500 rounded-md text-white resize-none focus:outline-none cursor-not-allowed"
                    >${selectedRoute.fare.toStop}</textarea>
                  </div>
                </div>
                <div class="flex gap-3 pt-2">
                  <button 
                    type="submit" 
                    class="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    Submit Report
                  </button>
                  <button 
                    type="button" 
                    id="cancelBtn"
                    class="bg-neutral-600 text-white px-4 py-2 rounded hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        `;
        
        // Add event listeners after DOM is updated
        setTimeout(() => {
          const reportBtn = document.getElementById('reportBtn');
          const cancelBtn = document.getElementById('cancelBtn');
          const reportFormElement = document.getElementById('reportFormElement');
          
          if (reportBtn) {
            reportBtn.addEventListener('click', toggleReportForm);
          }
          if (cancelBtn) {
            cancelBtn.addEventListener('click', toggleReportForm);
          }
          if (reportFormElement) {
            reportFormElement.addEventListener('submit', function(e) {
              e.preventDefault();
              
              // Get form data
              const formData = new FormData(reportFormElement);
              const reportData = {
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                phoneNumber: formData.get('phoneNumber'),
                plateNumber: formData.get('plateNumber'),
                fromStop: formData.get('fromStop'),
                toStop: formData.get('toStop'),
                route: selectedRoute.route.route_name,
                fare: selectedRoute.fare.fare
              };
              
              // Option 1: Open email client with pre-filled data
              const subject = encodeURIComponent(`Bus Fare Report - Route: ${reportData.route}`);
              const body = encodeURIComponent(`
Dear Nepal Police,

I would like to report an issue with bus fare:

Reporter Information:
- Name: ${reportData.firstName} ${reportData.lastName}
- Phone: ${reportData.phoneNumber}

Route Details:
- Route: ${reportData.route}
- From: ${reportData.fromStop}
- To: ${reportData.toStop}
- Fare: Rs. ${reportData.fare}
- Vehicle Plate: ${reportData.plateNumber}

Please investigate this matter.

Thank you.
              `);
              
              const mailtoLink = `mailto:nepalpolice@gmail.com?subject=${subject}&body=${body}`;
              window.open(mailtoLink, '_blank');
              
              
              // Show success message
              alert('Email client opened with report details. Please send the email to complete your report.');
              
              // Hide the form
              toggleReportForm();
            });
          }
        }, 0);
      } else {
        fareElement.innerHTML = `
          <div class="mt-4 p-4 bg-red-900 rounded-lg">
            <div class="text-xl font-bold text-red-400">Route Not Found</div>
            <div class="text-sm text-neutral-400 mt-2">${selectedRoute.fare.message}</div>
          </div>
        `;
      }
    }
  }

  // Toggle function for showing/hiding the report form
  function toggleReportForm() {
    const reportForm = document.getElementById('reportForm');
    if (reportForm) {
      reportForm.classList.toggle('hidden');
    }
  }

  function selectRoute(routeResult) {
    selectedRoute = routeResult;
    updateFareDisplay();
  }

</script>

<div class="min-h-screen w-full bg-neutral-950 text-neutral-100 flex flex-col items-center py-12">
  <div class="w-full max-w-3xl mx-auto bg-neutral-900 rounded-xl shadow-lg p-8 mt-12">
    <form on:submit={handleSubmit} class="flex flex-col gap-8">
      <div class="flex flex-col md:flex-row gap-8">
        <div class="flex-1 flex flex-col gap-6">
          <label class="text-lg font-medium text-neutral-200" for="from">From</label>
          <input
            id="from"
            bind:value={$searchStore.searchFrom}
            type="text"
            placeholder="e.g. Budhanilkantha Bus Stop"
            class="h-12 rounded-md bg-neutral-800 px-4 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-400 transition text-neutral-100 placeholder-neutral-400"
            disabled={loading}
            autocomplete="off"
          />
          <label class="text-lg font-medium text-neutral-200 mt-2" for="to">To</label>
          <input 
            id="to"
            bind:value={$searchStore.searchTo}
            type="text"
            placeholder="e.g. Thapathali"
            class="h-12 rounded-md bg-neutral-800 px-4 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-400 transition text-neutral-100 placeholder-neutral-400"
            disabled={loading}
            autocomplete="off"
          />
        </div>
        <div class="flex items-end">
          <button
            class="h-12 px-8 rounded-md bg-neutral-700 text-neutral-100 font-semibold text-lg hover:bg-neutral-600 transition disabled:opacity-60 disabled:cursor-not-allowed"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Calculating...' : 'Calculate Distance'}
          </button>
        </div>
      </div>
    </form>
    
    <div class="mt-10 flex flex-col gap-2">
      <h2 class="text-2xl font-bold text-neutral-200">Estimated Fare:</h2>
      <span id="fareId"></span>
      
      <!-- Show multiple fare  -->
      {#if fareResults.length > 1}
        <div class="mt-6">
          <h3 class="text-lg font-semibold text-neutral-300 mb-3">Alternative Routes:</h3>
          <div class="flex flex-col gap-2">
            {#each fareResults as routeResult, index}
              <button
                class="p-3 rounded-lg border border-neutral-700 hover:border-neutral-500 transition text-left {selectedRoute === routeResult ? 'bg-neutral-700 border-neutral-500' : 'bg-neutral-800'}"
                on:click={() => selectRoute(routeResult)}
              >
                <div class="flex justify-between items-center">
                  <div>
                    <div class="font-medium text-neutral-200">{routeResult.route.route_name}</div>
                    {#if routeResult.fare.isValid}
                      <div class="text-sm text-neutral-400">{routeResult.fare.message}</div>
                    {:else}
                      <div class="text-sm text-red-400">{routeResult.fare.message}</div>
                    {/if}
                  </div>
                  {#if routeResult.fare.isValid}
                    <div class="text-xl font-bold text-green-400">Rs. {routeResult.fare.fare}</div>
                  {:else}
                    <div class="text-sm text-red-400">N/A</div>
                  {/if}
                </div>
              </button>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </div>
  
  <div class="w-full max-w-6xl mt-12 flex flex-wrap justify-center gap-6">
    {#each $searchStore.filtered as routes}
      <div class="rounded-lg border border-neutral-800 bg-neutral-900 w-80 min-h-56 p-6 flex flex-col gap-2 shadow transition hover:border-neutral-600">
        <p class="text-xl font-semibold text-neutral-100">{routes.route_name}</p>
        <div class="flex flex-wrap gap-1 mt-2 text-neutral-400 text-sm">
          {#each routes.stops as stop, i}
            <span>{stop}{i < routes.stops.length - 1 ? ',' : ''}</span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>