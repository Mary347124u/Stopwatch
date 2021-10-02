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
    clearInterval(cron);
}

function stop(){
    clearInterval(cron);
    hr = 0;
    mn = 0;
    ss = 0;
}

function timer (){
    
    document.getElementById('counter').innerText = 'teste';

}
