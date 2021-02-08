// Get the checkbox
let checkBox = document.getElementById("mycheck");
let bulbON = document.getElementById("web");
let bulbOFF = document.getElementById("serv");

bulbON.style.color = "transparent";
bulbON.style.textShadow = "0 0 WHITE";
bulbOFF.style.color = "transparent";
bulbOFF.style.textShadow = "0 0 BLACK";

let paths = document.querySelectorAll("path, text");
let circles = document.querySelectorAll("circle");
let rondSlider = document.querySelectorAll(".slider");

document.getElementById('mycheck').addEventListener("click", switchbtn);

function switchbtn() {

    // On passe en theme sombre
    if (checkBox.checked) {
        darkTheme()
    }

    // On passe en theme lumineux
    else {
        lightTheme()
    }
}

function darkTheme(){
    for(let i=0;i<paths.length;i++){
        paths[i].style.setProperty("stroke", "white");
    }
    for(let i=0;i<circles.length;i++){
        circles[i].style.setProperty("fill", "white");
    }
    rondSlider[0].style.backgroundColor = 'orange';
    document.getElementById('body').style.backgroundImage = "url('img/backgroundDark.jpg')";
    document.getElementById("ADR_img_EMT1").setAttribute('xlink:href', 'img/android_moyenneEmt_dark1.jpg')
    document.getElementById("ADR_img_WD1").setAttribute('xlink:href', 'img/android_wdid2.jpg')
}

function lightTheme() {
    for(let i=0;i<paths.length;i++){
        paths[i].style.setProperty("stroke", "black");
    }
    for(let i=0;i<circles.length;i++){
        circles[i].style.setProperty("fill", "black");
    }
    rondSlider[0].style.backgroundColor = 'cyan';
    document.getElementById('body').style.backgroundImage = "url('img/background.jpg')";
    document.getElementById("ADR_img_EMT1").setAttribute('xlink:href', 'img/android_moyenneEmt1.jpg')
    document.getElementById("ADR_img_WD1").setAttribute('xlink:href', 'img/android_wdid2_white.jpg')


}