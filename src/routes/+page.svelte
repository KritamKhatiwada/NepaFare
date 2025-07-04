<script>
  import { createSearchStore, searchHandler } from "$lib/stores/search.js";
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
    const searchProducts = routes.map((route)=>({
        ...route,
        searchTerms :` ${route.stops.join('')}`
    }));

    const searchStore=createSearchStore(searchProducts)
    const unsubscribe= searchStore.subscribe((model)=> searchHandler(model))
    
    onDestroy(()=>{
        unsubscribe();
    })
    function calculate(){
        console.log("CLICKED")
    }
</script>
<div class="flex flex-col items-center justify-center min-h-screen bg-gray-50">
  <div class=" ">

    <div class="bg-white p-6 rounded-2xl shadow-lg w-full max-w-5xl flex flex-row gap-8 items-center">
        <div class="flex flex-row gap-4 items-center flex-1">
            <p class="text-xl font-bold">From</p>
            <input
                bind:value={$searchStore.searchFrom}
                type="text"
                placeholder="ie: Budhanilkatha Bus Stop"
                class="text-xl px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition w-64"
            />
            <p class="text-xl font-bold">To</p>
            <input 
                bind:value={$searchStore.searchTo}
                type="text"
                placeholder="ie: Thapathali"
                class="text-xl px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition w-64"
            />
            <button on:click={calculate}
                class="text-2xl font-semibold bg-blue-600 hover:cursor-pointer text-white py-4 px-8 rounded-xl hover:bg-blue-700 transition"
            >
                Go
            </button>
        </div>
    </div>
    
  </div>
    <div class="flex flex-col gap-2 mt-10">
        <h1 class="text-3xl font-bold text-gray-800">Estimated Fare:</h1>
        <h1 class="text-2xl font-semibold text-gray-600">average fare</h1>
    </div>
    <div class="w-screen mt-10 flex flex-row flex-wrap justify-center items-center gap-6">
        {#each $searchStore.filtered as routes}
            <div class=" rounded-lg border-2 w-120 h-80 p-2">
                <p class="text-2xl font-bold">{routes.route_name}</p>
                <br>
                <p class="flex">{routes.stops}</p>
            </div>
        {/each}
    </div>
</div>