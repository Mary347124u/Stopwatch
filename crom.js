"use strict"

var hr = 0;
var mn = 0;
var ss = 0;

var tempo = 1000;
var cron;

function start(){

   cron= setInterval(()=>{ timer();}, tempo);
}

function pause(){

}

function stop(){

}

function timer (){
    document.getElementById('counter').innerText = 'teste';
}
