import e,{useState as o}from"react";const t=({defaultValue:t})=>{const[l,r]=o(t||"hi");return e.createElement("div",null,"Editor 에요 ",l)},l=e=>{console.log(`Bye, ${e}`)},r=e=>{console.log(`Hi, ${e}`)};export{t as default,l as sayBye,r as sayHi};