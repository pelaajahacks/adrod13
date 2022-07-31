var Body = document.getElementById ('Body');
var Hdr = document.getElementById ('Nav');
var AbtMe = document.getElementById ('AbtMe');

window.onscroll = function () {ScrollFn ()};

function ScrollFn () {
    if (Body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        Hdr.style.top = "-50px";
    } else {
        Hdr.style.top = "0px";
    }
}

var pocoguy = document.getElementById ('credits');
var excel = document.getElementById ('mycredits')

pocoguy.onclick = function () {
    location.assign ('https://tiktok.com/@pocoguy.exe');
}

excel.onclick = function () {
    location.assign ('https://tiktok.com/@byexcel')
}


window.onload = function () {
    Hdr.style.top = "0px";
    pocoguy.style.cursor = "pointer";
    excel.style.cursor = "pointer";
}

AbtMe.onclick = function () {
    window.location.assign ('https://linktr.ee/ItzzExcel');
}


var installbtn = document.getElementById ('installbtn');

installbtn.onclick = function (params) {
    location.assign ('phonbricked.html');
}

// This page is the worst front-end attempt of my whole life haha
// Developed by https://tiktok.com/@byexcel

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    let title = document.getElementById ('title');
    title.innerHTML = "rip bozo 💀💀💀";
   }