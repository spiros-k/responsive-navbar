const listOfItems = document.getElementById("items-list");


document.addEventListener("DOMContentLoaded", () => {
    listOfItems.style.display = "none";
    document.getElementById("x-button").classList.add("hidden");
})

document.getElementById("button").addEventListener("click", () => {
    
    document.getElementById("x-button").classList.remove("hidden");
    document.getElementById("button").classList.add("hidden");

    if((listOfItems.style.display === "none")) {
        listOfItems.style.display = "block";
    } else {
        listOfItems.style.display = "none";
    }
})

document.getElementById("x-button").addEventListener("click", () => {

    document.getElementById("x-button").classList.add("hidden");
    document.getElementById("button").classList.remove("hidden");

    if((listOfItems.style.display === "none")) {
        listOfItems.style.display = "block";
    } else {
        listOfItems.style.display = "none";
    }
})




