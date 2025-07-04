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
    // const searchTerm= store.search.toLowerCase() || "";
    // store.filtered=store.data.filter((item)=>{
        
    //     return item.searchTerms.toLowerCase().includes(searchTerm)
    // })

    const searchFromTerm = store.searchFrom.toLowerCase().trim();
    const searchToTerm = store.searchTo.toLowerCase().trim();
    
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
})}