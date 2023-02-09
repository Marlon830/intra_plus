function myFunction() {
    var allCells = document.getElementsByClassName("appoint");
    for (var i = 0; i != allCells.length; i++) {
        if (allCells[i].innerText.includes("Kernighan")) {
            allCells[i].style.backgroundColor = "#FFC857";
            allCells[i].style.borderColor= "#FFC857";
            allCells[i].getElementsByTagName("h4")[0].style.backgroundColor = "#FFC857";
        }
        if (allCells[i].innerText.includes("Innovation") || allCells[i].innerText.includes("Workshop")) {
            allCells[i].style.backgroundColor = "#912F40";
            allCells[i].style.borderColor= "#912F40";
            allCells[i].getElementsByTagName("h4")[0].style.backgroundColor = "#912F40";
        }
        if (allCells[i].innerText.includes("Foyer")) {
            allCells[i].style.backgroundColor = "#702632";
            allCells[i].style.borderColor= "#702632";
            allCells[i].getElementsByTagName("h4")[0].style.backgroundColor = "#702632";
        }
        if (allCells[i].innerText.includes("Meetup")) {
            allCells[i].style.backgroundColor = "#40434E";
            allCells[i].style.borderColor= "#40434E";
            allCells[i].getElementsByTagName("h4")[0].style.backgroundColor = "#40434E";
        }
        if (allCells[i].innerText.includes("John Carmack")) {
            allCells[i].style.backgroundColor = "#080705";
            allCells[i].style.borderColor= "#080705";
            allCells[i].getElementsByTagName("h4")[0].style.backgroundColor = "#080705";
        }
        if (allCells[i].innerText.includes("Isefac")) {
            allCells[i].style.backgroundColor = "#C3DFE0";
            allCells[i].style.borderColor= "#C3DFE0";
            allCells[i].getElementsByTagName("h4")[0].style.backgroundColor = "#C3DFE0";
        }
        if (allCells[i].innerText.includes("Coaching") || allCells[i].innerText.includes("Exterieur") || allCells[i].innerText.includes("Pas de") || allCells[i].innerText.includes("réunion")) {
            allCells[i].style.backgroundColor = "#C4B7CB";
            allCells[i].style.borderColor= "#C4B7CB";
            allCells[i].getElementsByTagName("h4")[0].style.backgroundColor = "#C4B7CB";
        }
    }
    setTimeout(myFunction, 2000);
}

setTimeout(myFunction, 1000);