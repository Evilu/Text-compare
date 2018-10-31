let audio = new Audio('data/effect.mp3');


function compare() {


    let string1 = document.getElementById("first").value;
    let string2 = document.getElementById("second").value;

    let arr1 = string1.split('\n');
    let arr2 = string2.split('\n');


    let res = arr2.filter(function (n) {
        return !this.has(n)
    }, new Set(arr1));


    document.getElementById("aqa").style.display = "block";
    document.getElementById("resCount").innerHTML = ("We found : " + "\xa0" + res.length + "\xa0" + "differences, here are they:");

    document.getElementById("results").innerHTML = res.map((entry) => {
        return  "<p>" + "<input type=\"checkbox\" class=\"custom-control-input\">"+"&nbsp"
            + entry.replace(/&/g, "&amp;").replace(/</g, "&lt;")
            + "</p>"

    }).join("");

    audio.play();

}
