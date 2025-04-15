import{m as h,l as M,G as P,H as W,I as z,k as B}from"./app.CpaAY-ee.js";import{i as g,a as b}from"./index.C5okkQwF.js";import"./chunks/dayjs.Byk5cVHE.js";import{f as d,N as r,M as y,O as s,c as _,P as c,S as u,u as E,aj as I,ak as L,r as $,a8 as N,y as w,Y as x,V as C,a2 as R,a3 as k,a0 as D,a1 as U,F,U as G,L as H,R as m,W as q}from"./framework.B3-meWAy.js";import{a as J}from"./chunks/vue-router.DGuXB-T0.js";import{u as K}from"./chunks/vue-i18n.DYdeeex7.js";const Q=d({__name:"YunArtalk",setup(n){return g(b)||(void 0)(),(o,e)=>{const l=y("ArtalkClient");return s(),r(l)}}});function V(){const n=h();return _(()=>n.value.addons["valaxy-addon-twikoo"])}function T(n,o="latest"){const e=M(),l=_(()=>e.value.cdn.prefix),t=J(),{locale:a}=K();function i(p){if(!W)return;const f={el:".comment #tcomment",lang:a.value,path:t.path},v=Object.assign(f,p||{});return window.twikoo.init(v)}P(`${l.value}twikoo@${o}/dist/twikoo.all.min.js`,()=>{n.value&&i(n.value)})}function S(n="latest"){const o=V(),e=_(()=>o.value.options);T(e,n)}const X=Object.freeze(Object.defineProperty({__proto__:null,useAddonTwikoo:V,useTwikoo:T,useTwikooWithOptions:S},Symbol.toStringTag,{value:"Module"})),Z=d({__name:"YunTwikoo",setup(n){return g(X)||S(),(o,e)=>(s(),c("div",null,e[0]||(e[0]=[u("div",{id:"tcomment",w:"full"},null,-1)])))}}),ee=d({__name:"YunWaline",setup(n){if(g(b))throw new Error("Please install valaxy-addon-waline");const o=(void 0)();return(e,l)=>{const t=y("WalineClient");return s(),r(t,{w:"full",options:E(o).options||{serverURL:""}},null,8,["options"])}}}),te={"case-capital":"","op-90":""},oe={class:"shadow-lg select-options absolute translate-y-1 left-0 top-full w-full bg-$va-c-bg-light overflow-hidden rounded-1"},ne=["onClick"],ae=d({__name:"YunSelect",props:I({options:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const o=L(n,"modelValue"),e=$(!1);z("click",()=>{e.value=!1});function l(t){t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),e.value=!e.value}return(t,a)=>(s(),c("div",{class:"relative h-8 w-30 text-$va-c-text-2 z-$yun-z-select",onMousedown:a[0]||(a[0]=N(()=>{},["stop"]))},[u("button",{class:x(["flex h-full w-full px-2 items-center justify-between rounded transition",e.value?"border-$va-c-primary":""]),border:"~ gray op-30",onClick:l},[u("span",te,C(o.value),1),a[1]||(a[1]=u("div",{"inline-flex":"","i-ri-arrow-down-s-line":""},null,-1))],2),w(R,{persisted:""},{default:k(()=>[D(u("ul",oe,[(s(!0),c(F,null,G(t.options,i=>(s(),c("li",{key:i,class:x(["cursor-pointer list-none px-2 hover:bg-$va-c-primary-light hover:text-white case-capital",{"bg-$va-c-primary text-white":o.value===i}]),onClick:p=>o.value=i},C(i),11,ne))),128))],512),[[U,e.value]])]),_:1})],32))}}),se=H(ae,[["__scopeId","data-v-a0eb4571"]]),le={key:0,class:"flex justify-end w-full mb-2"},me=d({__name:"YunComment",setup(n){const o=h(),e=["valaxy-addon-waline","valaxy-addon-twikoo","valaxy-addon-artalk"],l=_(()=>e.filter(a=>o.value.addons[a]).map(a=>a.split("-")[2])),t=$(l.value[0]);return(a,i)=>{const p=se,f=ee,v=Z,Y=Q,O=y("ClientOnly"),A=B;return s(),r(A,{w:"full",p:"4",class:"comment yun-comment sm:p-6 lg:px-12 xl:px-16"},{default:k(()=>[w(O,null,{default:k(()=>[l.value.length>1?(s(),c("div",le,[w(p,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=j=>t.value=j),options:l.value},null,8,["modelValue","options"])])):m("v-if",!0),t.value==="waline"?(s(),r(f,{key:1})):m("v-if",!0),t.value==="twikoo"?(s(),r(v,{key:2})):m("v-if",!0),t.value==="artalk"?(s(),r(Y,{key:3})):m("v-if",!0),q(a.$slots,"default")]),_:3})]),_:3})}}});export{me as _};
