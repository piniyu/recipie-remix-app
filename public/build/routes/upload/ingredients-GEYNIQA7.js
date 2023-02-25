import{e as i,f as m}from"/build/_shared/chunk-K546PQX6.js";import{i as s,t as r}from"/build/_shared/chunk-ZFWZJZG4.js";import{e as l}from"/build/_shared/chunk-ADMCF34Z.js";var e=l(r()),u=()=>{let{register:o,control:p}=m({defaultValues:{serving:1,ingredients:[{name:"",qty:""}]}}),{fields:a,append:d,remove:c}=i({control:p,name:"ingredients"});return(0,e.jsxs)("div",{className:"space-y-12",children:[(0,e.jsx)("h3",{className:"font-medium text-black",children:"Ingredients"}),(0,e.jsxs)("form",{className:"flex flex-col space-y-12",children:[(0,e.jsxs)("label",{children:[(0,e.jsx)("p",{className:"label-required",children:"Default serving"}),(0,e.jsx)("input",{...o("serving"),type:"number",placeholder:"1",className:"input w-12 text-right",min:1}),(0,e.jsx)("span",{className:"ml-2",children:"serving"})]}),(0,e.jsxs)("label",{children:[(0,e.jsx)("p",{className:"label-required",children:"Ingredients list"}),(0,e.jsxs)("ul",{className:"space-y-4",children:[a.map((t,n)=>(0,e.jsxs)("div",{className:"flex gap-4",children:[(0,e.jsx)("input",{...t,name:`ingredients.${n}.name`,className:"input flex-1",placeholder:"Name"}),(0,e.jsx)("input",{...t,name:`ingredients.${n}.qty`,className:"input w-20",placeholder:"QTY"}),(0,e.jsx)("button",{className:"btn-sm btn-ghost",type:"button",onClick:()=>{c(n)},disabled:a.length===1,children:"Delet"})]},t.id)),(0,e.jsx)("button",{className:"btn-sm btn-border",type:"button",onClick:()=>{d({name:"",qty:""})},children:"Add a ingredient"})]})]})]}),(0,e.jsxs)("div",{className:"flex gap-4",children:[(0,e.jsx)(s,{to:"./details",className:"btn-sm btn-gray",children:"Previous"}),(0,e.jsx)(s,{to:"../1",className:"btn-sm btn-primary",children:"Next"})]})]})};export{u as default};