const right = document.querySelector('.down');
const left = document.querySelector('.up');
const back = document.querySelector('.deep');
const text = document.querySelector('h1');

const town =['img/prague.jpg','img/madrid.jpg','img/manchester.jpg','img/newyork.jpg','img/turyn.jpg','img/sydney.jpg','img/tokio.jpg'];
const name =['Prague','Madrid','Manchester','New York','Turin','Sydney','Tokyo'];

let motion = 0;
const time = 5000;

function changeTown(){
    motion++;
    if(motion == town.length){
        motion = 0;
    }
    back.src = town[motion];
    text.textContent = name[motion];
}
setInterval(changeTown, time);