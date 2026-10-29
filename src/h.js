import React,{useState} from 'react';
import htm from 'htm';
const h=(t,p,...c)=>{if(p&&typeof p.style==='string'){p={...p,style:Object.fromEntries(p.style.split(';').filter(s=>s.includes(':')).map(s=>{const i=s.indexOf(':');return [s.slice(0,i).trim().replace(/-([a-z])/g,(m,x)=>x.toUpperCase()),s.slice(i+1).trim()]}))}}return React.createElement(t,p,...c)};
export const html=htm.bind(h);
export const dn=s=>String(s).replace(/\d/g,d=>'०१२३४५६७८९'[d]);
export const fmt=n=>'₹'+dn(Number(n).toLocaleString('en-IN'));
/* Photos: paste your Unsplash (or own) image URLs here. Empty = illustrated placeholder. */
export const IMG={hero:'/images/hero.jpg',farm:'/images/farm.jpg',tree:'/images/tree.jpg'};
export const DISC='सर्व benefits, shares/equity, bonuses आणि अन्य commercial benefits हे लागू कायदे, regulatory requirements, plan terms आणि eligibility criteria यांच्या अधीन आहेत. Agriculture production आणि mango yield हवामान, नैसर्गिक परिस्थिती आणि farming conditions यावर अवलंबून असते. कोणतेही returns किंवा agricultural yield हमीशीर असल्याचे गृहीत धरू नये.';
export function Photo({k,alt,children}){const [bad,setBad]=useState(false);const src=IMG[k];
 return html`<div class="ph" role="img" aria-label=${alt}><svg viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><circle cx="310" cy="70" r="38" fill="#ffe9a8" opacity=".8"/><path d="M0 200Q120 150 240 190T400 170V320H0Z" fill="#2c6a3c" opacity=".7"/><g fill="#1f5a31"><circle cx="90" cy="170" r="52"/><circle cx="210" cy="150" r="60"/><circle cx="320" cy="175" r="50"/></g><g fill="#f2b632"><circle cx="75" cy="165" r="9"/><circle cx="205" cy="140" r="9"/><circle cx="230" cy="170" r="9"/><circle cx="315" cy="170" r="9"/></g><g fill="#6b4a2b"><rect x="84" y="210" width="12" height="110"/><rect x="204" y="200" width="12" height="120"/><rect x="314" y="215" width="12" height="105"/></g></svg>
 ${src&&!bad&&html`<img src=${src} alt=${alt} loading="lazy" onError=${()=>setBad(true)}/>`}${children}</div>`}
