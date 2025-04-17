function searchFunction() {
    let query = document.getElementById("search").value.toLowerCase().trim();
    console.log(query);  

    let pages = {
        "overview": "overview.html",
        "PS3 Hard Drive Structure": "PS3-Hard-Drive-Structure.html",
        "data that can be found": "Data-that-can-be-found.html",
        "ps3 data acquisition": "PS3-Data-Acquisition.html",
        "ps3 encryption": "PS3-Encryption.html"
    };

    if (pages[query]) {
        window.location.href = pages[query];
    } else {
        alert("Page not found. Please search for: Overview, Game Data, System Files, PS3 Data Acquisition, or Artifacts.");
    }
}
