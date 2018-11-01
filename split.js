const audio = new Audio('data/effect.mp3');

function compare() {

    let string1 = document.getElementById("first").value;

    let string2 = document.getElementById("second").value;

    let arr1 = string1.split('\n');

    let arr2 = string2.split('\n');

    let res = arr2.filter(function (n) {
        return !this.has(n)
    }, new Set(arr1));

    localStorage.setItem('storedData', JSON.stringify(res));

   let storing =  localStorage.getItem('storedData');

   let printing =  JSON.parse(storing);

    document.getElementById("aqa").style.display =
        "block";

    document.getElementById("resCount").innerHTML =
        ("We found   " +
            "\xa0" +
            printing.length +
            "\xa0" +
            "differences, here are they:");

    document.getElementById("results").innerHTML =
        printing.map((entry) => {
            return "<p>" +
                "<input type=\"checkbox\" class=\"custom-control-input\">" +
                "&nbsp" +
                entry.replace(/&/g, "&amp;").replace(/</g, "&lt;")
                + "</p>"

        }).join("");
    audio.play();
}

function previous (){

    document.getElementById("compareButton").disabled = true;

    document.getElementById("aqa").style.display =
        "block";

    let stored = localStorage.getItem('storedData');

    let printing =  JSON.parse(stored);

    document.getElementById("resCount").innerHTML =
        (
            "We found  " +
            "\xa0" +
            printing.length +
            "\xa0" +
            "differences, here are they:");

    document.getElementById("results").innerHTML =
        printing.map((entry) => {
            return "<p>" +
                "<input type=\"checkbox\" class=\"custom-control-input\">" +
                "&nbsp" +
                entry.replace(/&/g, "&amp;").replace(/</g, "&lt;")
                + "</p>"

        }).join("");

    audio.play();
}

