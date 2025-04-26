(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();document.addEventListener("DOMContentLoaded",async()=>{const p=document.getElementById("theme-toggle"),c=document.getElementById("theme-text"),r=document.getElementById("light-icon"),l=document.getElementById("dark-icon"),t=localStorage.getItem("theme")||"light";document.documentElement.setAttribute("data-theme",t),o(t),p.addEventListener("click",()=>{const e=document.documentElement.getAttribute("data-theme")==="light"?"dark":"light";document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e),o(e)});function o(e){e==="dark"?(r.style.display="inline-block",l.style.display="none",c.textContent="Change to light Theme"):(r.style.display="none",l.style.display="inline-block",c.textContent="Change to dark Theme")}const i=document.getElementById("title"),g=document.getElementById("description"),b=document.getElementById("addBtn"),v=document.getElementById("task-lists"),a=async e=>new Promise(n=>{localStorage.setItem("tasks",JSON.stringify(e)),n()});let s=await(async()=>new Promise(e=>{const n=JSON.parse(localStorage.getItem("tasks"))||[];e(n)}))();const m=async()=>{v.innerHTML="",s.forEach(e=>{const n=document.createElement("div");n.classList.add("mb-4","p-3","border","rounded","shadow","relative"),n.innerHTML=`
              <div class="${e.completed?"opacity-50":""}">
              <div class="gap-2 inline-flex mb-[20px]">
                        <h3 contenteditable="false" class="font-bold text-lg mt-2 mb-1 ${e.completed?"line-through":""}">${e.text}</h3>
                  <div>
                     <label class="inline-flex items-center gap-2 cursor-pointer pl-9 relative">
                      <input type="checkbox" ${e.completed?"checked":""} 
                          class="peer absolute opacity-0 h-0 w-0 cursor-pointer">
                      <span class="checkmark absolute top-1 left-0 h-6 w-6 border border-gray-300 ml-[20px] rounded peer-checked:bg-green-500"></span>
                  </label>
                  </div>
              </div>
              <div>
                  <p contenteditable="false" class="mb-2 ${e.completed?"line-through":""}">${e.desc}</p>
              </div>
              </div>
              <div class="flex items-center gap-2">
                  <button class="edit bg-blue-500 text-white px-3 py-1 rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-406.67v-66.66h293.33v66.66H160ZM160-570v-66.67h460V-570H160Zm0-163.33V-800h460v66.67H160ZM520-160v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8.67 9 12.83 20 4.17 11 4.17 22t-4.33 22.5q-4.34 11.5-13.28 20.5L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/></svg>
                  </button>
                  <button class="delete bg-red-500 text-white px-3 py-1 rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M267.33-120q-27.5 0-47.08-19.58-19.58-19.59-19.58-47.09V-740H160v-66.67h192V-840h256v33.33h192V-740h-40.67v553.33q0 27-19.83 46.84Q719.67-120 692.67-120H267.33Zm425.34-620H267.33v553.33h425.34V-740Zm-328 469.33h66.66v-386h-66.66v386Zm164 0h66.66v-386h-66.66v386ZM267.33-740v553.33V-740Z"/></svg>
                  </button>
               
              </div>
          `;const u=n.querySelector(".edit"),w=n.querySelector(".delete"),y=n.querySelector('input[type="checkbox"]'),d=n.querySelector("h3"),h=n.querySelector("p");y.addEventListener("change",async()=>{e.completed=y.checked,await a(s),await m()}),u.addEventListener("click",async()=>{d.contentEditable==="true"?(e.text=d.textContent,e.desc=h.textContent,await a(s),d.contentEditable="false",h.contentEditable="false"):(d.contentEditable="true",h.contentEditable="true",d.focus())}),w.addEventListener("click",async()=>{s=s.filter(f=>f.id!==e.id),await a(s),await m()}),v.appendChild(n)})};b.addEventListener("click",async()=>{const e=i.value.trim(),n=g.value.trim();if(!e||!n){alert("Please fill in both title and description");return}const u={id:Date.now(),text:e,desc:n,completed:!1};s.push(u),await a(s),i.value="",g.value="",await m()}),await m()});
