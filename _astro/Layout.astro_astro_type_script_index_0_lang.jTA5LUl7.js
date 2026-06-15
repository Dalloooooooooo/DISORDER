import{g as a}from"./index.CzGW6FVa.js";
function o(){a.killTweensOf("body"),document.body&&(document.body.style.opacity="1")}
window.addEventListener("pageshow",o);
window.addEventListener("popstate",o);
o();
a.to("body",{opacity:1,duration:.55,ease:"power2.out"});
document.addEventListener("click",t=>{
  const e=t.target?.closest("a[href]");
  if(!e)return;
  const r=e.getAttribute("href");
  r&&e.target!=="_blank"&&(e.hasAttribute("download")||r.startsWith("http")||r.startsWith("mailto:")||r.startsWith("tel:")||r.startsWith("#")||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||(t.preventDefault(),a.to("body",{opacity:0,duration:.35,ease:"power2.in",onComplete:()=>{window.location.href=r}})))
});
