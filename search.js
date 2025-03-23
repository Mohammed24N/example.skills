function searchFunction() {
    let query = document.getElementById("search").value.toLowerCase().trim();
    console.log(query);  // Debugging: Check if the function runs and captures input

    let pages = {
        "overview": "overview.html",
        "PS3 Hard Drive Structure": "PS3-Hard-Drive-Structure.html",
        "system files": "system-files.html",
        "ps3 data acquisition": "PS3-Data-Acquisition.html",
        "artifacts found on a ps3": "Artifacts-found-on-a-PS3.html"
    };

    if (pages[query]) {
        window.location.href = pages[query];
    } else {
        alert("Page not found. Please search for: Overview, Game Data, System Files, PS3 Data Acquisition, or Artifacts.");
    }
}
