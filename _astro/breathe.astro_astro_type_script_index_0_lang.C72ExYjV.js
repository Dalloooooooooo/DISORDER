import{g as o}from"./index.CzGW6FVa.js";
const t=document.querySelector(".br-text"),e=()=>{window.location.replace("/disorder/video-gallery/")};
window.addEventListener("pageshow",r=>{r.persisted&&e()});
t&&(o.set(t,{opacity:0}),o.timeline({onComplete:e}).to(t,{opacity:1,duration:.7,ease:"power2.out"}).to(t,{opacity:0,duration:.7,ease:"power2.in"},"+=1.2"));
