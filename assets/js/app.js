const hour = document.getElementById('hour')
const munite = document.getElementById('munite')
const second = document.getElementById('second')
const am_pm = document.getElementById('am_pm')
const svg_hour_two = document.querySelector('.svg_hour_two')
const svg_munite_two = document.querySelector('.svg_munite_two')
const svg_second_two = document.querySelector('.svg_second_two')
const dot_hour =document.querySelector('.dot_hour')
const dot_munite =document.querySelector('.dot_munite')
const dot_second =document.querySelector('.dot_second')


const time =()=>{
const date = new Date();

let h = date.getHours();
let m =  date.getMinutes();
let s = date.getSeconds();

if(h>=12){
    h = h-12;
}
const ampm = (h>12)? "am":"pm";

h = (h<10)? "0" + h :h;
m = (m<10)? "0" + m :m;
s = (s<10)? "0" + s :s;

hour.innerHTML=h;
munite.innerHTML=m;
second.innerHTML=s;
am_pm.innerHTML =ampm;
svg_hour_two.style.strokeDashoffset = 941-(941*h)/12;
svg_munite_two.style.strokeDashoffset = 1570-(1570*m)/60;
svg_second_two.style.strokeDashoffset = 2198-(2198*s)/60;
dot_hour.style.transform = `rotateZ(${h*30}deg)`
dot_munite.style.transform = `rotateZ(${m*6}deg)`
dot_second.style.transform = `rotateZ(${s*6}deg)`

}

setInterval(time,1000)