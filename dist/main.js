!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var r=()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),o=t.querySelectorAll("ul>li"),r=()=>{t.classList.toggle("active-menu")};t.addEventListener("click",e=>{let t=e.target;t.classList.contains("close-btn")&&r(),o.forEach(e=>{t.parentNode===e&&r()})}),e.addEventListener("click",r)};var n=()=>{const e=document.querySelector(".popup");document.querySelectorAll(".popup-btn").forEach(t=>{t.addEventListener("click",()=>{e.style.display="block"})}),e.addEventListener("click",t=>{let o=t.target;o.classList.contains("popup-close")?e.style.display="none":(o=o.closest(".popup-content"))||(e.style.display="none")})};var c=()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",e=>{let r=e.target;(r=r.closest(".service-header-tab"))&&t.forEach((e,n)=>{e===r&&(e=>{for(let r=0;r<o.length;r++)e===r?(t[r].classList.add("active"),o[r].classList.remove("d-none")):(t[r].classList.remove("active"),o[r].classList.add("d-none"))})(n)})})};var l=()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=(document.querySelectorAll(".portfolio-btn"),document.querySelector(".portfolio-dots"));let r,n=0;const c=e=>{let t=document.createElement("li");t.classList.add("dot"),t.classList.add(e),o.append(t)};t.forEach((e,t)=>{c(0===t?"dot-active":"dot")});const l=document.querySelectorAll(".dot"),a=(e,t,o)=>{e[t].classList.remove(o)},s=(e,t,o)=>{e[t].classList.add(o)},u=()=>{a(t,n,"portfolio-item-active"),a(l,n,"dot-active"),++n>=t.length&&(n=0),s(t,n,"portfolio-item-active"),s(l,n,"dot-active")},i=(e=3e3)=>{r=setInterval(u,e)};e.addEventListener("click",e=>{e.preventDefault();let o=e.target;o.matches(".portfolio-btn, .dot")&&(a(t,n,"portfolio-item-active"),a(l,n,"dot-active"),o.matches("#arrow-right")?n++:o.matches("#arrow-left")?n--:o.matches(".dot")&&l.forEach((e,t)=>{e===o&&(n=t)}),n>=t.length&&(n=0),n<0&&(n=t.length-1),s(t,n,"portfolio-item-active"),s(l,n,"dot-active"))}),e.addEventListener("mouseover",e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(r)}),e.addEventListener("mouseout",e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&i()}),i(2e3)};var a=()=>{const e=document.querySelector(".command");let t;e.addEventListener("mouseover",e=>{let o=e.target;o.matches(".command__photo")&&(t=o.src,o.src=o.dataset.img)}),e.addEventListener("mouseout",e=>{let o=e.target;o.matches(".command__photo")&&(o.src=t)})};var s=(e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),n=document.querySelector(".calc-count"),c=document.querySelector(".calc-day"),l=document.getElementById("total");t.addEventListener("change",t=>{const a=t.target;(a.matches("select")||a.matches("input"))&&(()=>{let t=0,a=1,s=1;const u=o.options[o.selectedIndex].value,i=+r.value;n.value>1&&(a+=(n.value-1)/10),c.value&&c.value<5?s*=2:c.value&&c.value<10&&(s*=1.5),u&&i&&(t=e*u*i*a*s),l.textContent=t})()})};var u=()=>{const e=document.querySelectorAll(".form-phone"),t=document.querySelectorAll(".form-name");e.forEach(e=>{e.addEventListener("input",e=>{let t=e.target;t.value=t.value.replace(/\D/g,"")})}),t.forEach(e=>{e.addEventListener("input",e=>{let t=e.target;t.value=t.value.replace(/[a-zA-Z0-9]/g,"")})})};var i=()=>{const e=document.querySelectorAll("form"),t=document.createElement("h3");t.style.cssText="font-size: 2rem";const o=document.querySelectorAll("input");e.forEach(e=>{e.addEventListener("submit",n=>{n.preventDefault(),e.appendChild(t),t.textContent="Загрузка";const c=new FormData(e);let l={};c.forEach((e,t)=>{l[t]=e}),r(l,()=>{o.forEach(e=>{e.value=""}),t.textContent="Спасибо! Мы скоро с вами свяжемся"},e=>{o.forEach(e=>{e.value=""}),t.textContent="Что то пошло не так...",console.error(e)})})});const r=e=>{fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>{if(200!==e.status)throw"error";return e.json}).then(e=>{}).catch(e=>console.error(e))}};(e=>{let t=document.querySelector("#timer-day"),o=document.querySelector("#timer-hours"),r=document.querySelector("#timer-minutes"),n=document.querySelector("#timer-seconds");const c=()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3,o=Math.floor(t%60),r=Math.floor(t/60%60),n=Math.floor(t/60/60)%24;const c=e=>e>=0&&e<10?"0"+e:e;return{timeRemaining:t,day:c(Math.floor(t/60/60/24)),hours:c(n),minutes:c(r),seconds:c(o)}},l=setInterval(()=>{c().timeRemaining>0?(()=>{let e=c();t.textContent=e.day,o.textContent=e.hours,r.textContent=e.minutes,n.textContent=e.seconds})():clearInterval(l)},1e3)})("31 december 2019"),r(),n(),c(),l(),a(),s(100),u(),i()}]);