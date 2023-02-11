function changeColor(module, color, allCells, i)
{
    if (allCells[i].innerText.includes(module)) {
        allCells[i].style.backgroundColor = color;
        allCells[i].style.borderColor= color;
        allCells[i].getElementsByTagName("h4")[0].style.backgroundColor = color;
    }
}

function myFunction() {
    var allCells = document.getElementsByClassName("appoint");
    for (var i = 0; i != allCells.length; i++) {
        changeColor("G0 - Free Coaching", "#FFC857", allCells, i);
        changeColor("B2 -", "#912F40", allCells, i);
        changeColor("Workshop", "#912F40", allCells, i);
        changeColor("G0 - Epitech", "#C4B7CB", allCells, i);
        changeColor("G0 - Promoting", "#C4B7CB", allCells, i);
        changeColor("B0 - English", "#C3DFE0", allCells, i);
        changeColor("B1 -", "#080705", allCells, i);
        changeColor("B0 - Hub", "#40434E", allCells, i);
        changeColor("G0 - Extra Curricular Engagement", "#702632", allCells, i);
    }
    setTimeout(myFunction, 2000);
}

setTimeout(myFunction, 1000);