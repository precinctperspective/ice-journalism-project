function navigateToWebsite(dropdownId){
    const dropdown = document.getElementById(dropdownId);
    const url = dropdown.value;

    if(url){
        window.open(url, "_blank");
    } else {
        alert("Please select a source first.");
    }
}
