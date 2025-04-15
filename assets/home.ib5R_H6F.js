import{o as R,p as T,_ as q,l as j,s as E,q as G,r as W,t as U,v as O,w as K,e as Q,f as X}from"./app.CTLe_U7z.js";import{f as b,P as l,O as s,S as i,W as P,L as z,R as p,r as y,d as N,V as w,N as x,a3 as M,Y as k,$ as F,u as _,F as Y,U as H,y as u,a2 as B,c as A,X as I,M as Z}from"./framework.B3-meWAy.js";import"./chunks/dayjs.Byk5cVHE.js";import{g as V}from"./animation.BmKSPrMr.js";import{a as J}from"./chunks/vue-router.BSZ6bPrh.js";import{_ as tt}from"./LinkInterceptor.CrAtuQAN.js";import"./chunks/vue-i18n.DYdeeex7.js";import"./chunks/pinia.CaogHvnm.js";import"./chunks/@vueuse/motion.jISeQ3Au.js";import"./chunks/nprogress.Cino7761.js";const et={class:"w-full px-4 flex-center"},nt={class:"yun-notice w-full"},st=["innerHTML"],ot=b({__name:"YunNotice",props:{content:{}},setup(d){return(t,e)=>(s(),l("div",et,[i("div",nt,[i("span",{innerHTML:t.content},null,8,st),P(t.$slots,"default")])]))}}),at={},rt={class:"grid-bg"};function it(d,t){return s(),l("div",rt,[p(" <YunAEFrame /> "),p(" <YunAERect /> ")])}const lt=z(at,[["render",it]]),ct={class:"say"},ut={key:0,class:"say-content animate-fade-in animate-iteration-1"},pt={key:1,class:"say-author"},_t={key:2,class:"say-from"},mt=b({__name:"YunSay",setup(d){const t=R(),e=y(""),n=y(""),o=y("");function m(){const a=t.value.say.hitokoto.enable?t.value.say.hitokoto.api:t.value.say.api;a&&fetch(a).then(c=>{if(c.ok)c.json().then(f=>{if(t.value.say.hitokoto.enable)e.value=f.hitokoto,n.value=f.from_who,o.value=f.from;else{const h=f[Math.floor(Math.random()*f.length)];h.content?(e.value=h.content,n.value=h.author,o.value=h.from):e.value=h}});else throw new Error(`${t.value.say.api}, HTTP error, status = ${c.status}`)}).catch(c=>{console.error(c.message)})}return N(()=>{m()}),(a,c)=>(s(),l("div",ct,[e.value?(s(),l("span",ut,w(e.value),1)):p("v-if",!0),n.value?(s(),l("span",pt,w(n.value),1)):p("v-if",!0),o.value?(s(),l("span",_t,w(o.value),1)):p("v-if",!0)]))}}),dt=b({__name:"YunSiteLinkItem",props:{page:{}},setup(d){const t=T();return(e,n)=>{const o=q;return s(),x(o,{class:"link-item inline-flex-center gap-2 transition rounded-lg text-xl p-2 md:text-lg md:p-2 lg:text-xl lg:p-3 text-$va-c-text",bg:"white/5 dark:black/5","inline-flex":"",to:e.page.url,title:e.page.name,style:F(`color:${e.page.color}`),hover:"bg-white/80 dark:bg-black/80",onClick:n[0]||(n[0]=m=>_(t).fullscreenMenu.isOpen=!1)},{default:M(()=>[i("div",{class:k([e.page.icon,"icon"])},null,2),i("span",null,w(e.page.name),1)]),_:1},8,["to","title","style"])}}}),ft={key:0,class:"site-description text-$va-c-text text-sm"},ht=b({__name:"YunSiteDescription",setup(d){const t=j();return(e,n)=>_(t).description?(s(),l("div",ft,w(_(t).description),1)):p("v-if",!0)}}),vt={key:0,class:"site-subtitle block text-$va-c-text op-80 font-medium",text:"sm"},yt=b({__name:"YunSiteSubtitle",setup(d){const t=j();return(e,n)=>_(t).subtitle?(s(),l("h4",vt,w(_(t).subtitle),1)):p("v-if",!0)}}),gt=b({__name:"YunAnimLineDraw",setup(d){const t=y(!1);return N(()=>{t.value=!0}),(e,n)=>(s(),l("div",{class:k(["line",{enter:t.value}])},null,2))}}),bt=z(gt,[["__scopeId","data-v-61df0b18"]]),wt={key:0,class:"site-author-intro",m:"t-0 b-4"},$t=b({__name:"YunAuthorIntro",setup(d){const t=j();return(e,n)=>_(t).author.intro?(s(),l("div",wt,w(_(t).author.intro),1)):p("v-if",!0)}}),xt={key:0,class:"line-burst-effects absolute"},kt=b({__name:"LineBurstEffects",props:{delay:{},duration:{}},setup(d){const t=d,e=y(!0);return N(async()=>{await E(t.delay),e.value=!1,await E(t.duration),e.value=!0}),(n,o)=>e.value?p("v-if",!0):(s(),l("div",xt,[(s(),l(Y,null,H(8,m=>i("div",{key:m,class:"line"},o[0]||(o[0]=[i("div",null,[i("span")],-1)]))),64))]))}}),Ct={flex:"~ col",class:"yun-square-container items-center justify-center text-center max-w-2xl"},Yt={flex:"~ col",class:"yun-square square-rotate z-1 bg-white/80"},St={class:"py-4 md:py-5 lg:pt-6"},It={flex:"~ col",class:"gap-2 items-center justify-center"},Mt={class:"scale-x--100 py-4 md:py-5 lg:pb-6"},Lt={class:"mt-4 flex-center w-72 md:w-150 m-auto gap-2",flex:"~ wrap"},At=b({__name:"YunPrologueSquare",setup(d){const t=R(),e=y(!1);return(n,o)=>{const m=kt,a=G,c=W,f=$t,h=bt,S=U,C=yt,g=ht,r=O,$=dt;return s(),l("div",Ct,[P(n.$slots,"default",{},void 0,!0),i("div",{flex:"~ col center",class:k(["info-with-avatar relative duration-800 transition-cubic-bezier-ease-in",{show:e.value}])},[u(B,{"enter-from-class":"enter-from","enter-to-class":"enter-to",appear:"",onAfterAppear:o[0]||(o[0]=v=>e.value=!0)},{default:M(()=>[i("div",Yt,[u(m,{class:"absolute top-0 left-0 right-0 bottom-0 size-full scale-200",delay:200,duration:400}),u(B,{"enter-from-class":"op-0","enter-to-class":"op-100","enter-active-class":"transition-400 delay-400",appear:""},{default:M(()=>[u(a)]),_:1})])]),_:1}),i("div",{class:k(["info",{show:e.value}])},[u(c,{class:"mt-3"}),u(f),i("div",St,[u(h)]),i("div",It,[u(S,{style:{color:"white"}}),u(C,{style:{color:"white"}}),u(g,{style:{color:"white"}})]),i("div",Mt,[u(h)]),u(r),i("div",Lt,[u($,{page:{name:"博客文章",icon:"i-ri-article-line",url:"/posts/"}}),P(n.$slots,"default",{},void 0,!0),(s(!0),l(Y,null,H(_(t).pages,(v,L)=>(s(),x($,{key:L,page:v},null,8,["page"]))),128))])],2)],2)])}}}),Nt=z(At,[["__scopeId","data-v-28fded2b"]]),Dt=b({__name:"YunGoDown",setup(d){return(t,e)=>(s(),l("button",{class:"go-down w-20 bottom-0 text-sm md:bottom-2 md:text-40px","aria-label":"go-down",onClick:e[0]||(e[0]=(...n)=>_(V)&&_(V)(...n))},e[1]||(e[1]=[i("div",{"i-ri-arrow-down-s-fill":"","inline-flex":""},null,-1)])))}}),Pt={class:"banner-char-container"},Bt={class:"char"},Et=b({__name:"YunBannerCharContainer",props:{title:{},chars:{}},setup(d){return(t,e)=>(s(),l("div",Pt,[(s(!0),l(Y,null,H(t.title,(n,o)=>(s(),l("div",{key:o,class:"char-box"},[i("span",{class:k([o%2!==0?"char-right":"char-left"]),style:F({"--banner-char-size":`${t.chars[o]}rem`})},[i("span",Bt,w(n),1)],6)]))),128))]))}});function Rt(d){const t=A(()=>{const n=[];for(let o=0;o<d.title.length;o++){const m=K(1.5,3.5);n.push(m)}return n}),e=A(()=>t.value.reduce((n,o)=>n+o,0));return{chars:t,totalCharHeight:e}}const zt={class:"banner-line-container"},Tt={class:"banner-line-container bottom"},jt=b({__name:"YunBanner",setup(d){const t=T(),e=R(),{totalCharHeight:n,chars:o}=Rt(e.value.banner),m=A(()=>{const h={"--total-char-height":`${n.value}rem`,"--banner-line-height":`calc(var(--banner-height, 100 * var(--vh)) / 2 - ${n.value/2}rem)`,"justify-content":"space-between"};return t.isStrato&&(h.borderBottom="1px solid var(--banner-line-color)"),h}),a=y("enter"),c=A(()=>a.value),f=y("banner");return N(async()=>{await E(500),a.value="active",t.isNimbo&&(await E(500),a.value="exit",f.value="prologue")}),(h,S)=>{const C=Et,g=Dt;return s(),l("div",{id:"yun-banner",border:"b-1px b-solid b-$banner-line-color",style:F(m.value)},[i("div",zt,[i("div",{class:k(["banner-line vertical-line-top",c.value])},null,2)]),_(t).isNimbo?(s(),l(Y,{key:0},[f.value==="banner"?(s(),x(C,{key:0,title:_(e).banner.title,chars:_(o)},null,8,["title","chars"])):p("v-if",!0)],64)):p("v-if",!0),_(t).isStrato?(s(),x(C,{key:1,title:_(e).banner.title,chars:_(o)},null,8,["title","chars"])):p("v-if",!0),i("div",Tt,[i("div",{class:k(["banner-line vertical-line-bottom",c.value])},null,2)]),u(g)],4)}}}),Ft=b({__name:"DomainCheck",setup(d){return N(()=>{const t="www.xscnas.top",e="https://www.xscnas.top",n=document.location.hostname;function o(m){const a=document.createElement("div");a.style.pointerEvents="none",a.style.position="fixed",a.style.top="0",a.style.left="0",a.style.width="100%",a.style.height="100%",a.style.zIndex="9999",a.style.opacity="0.1",a.style.background="transparent",a.style.overflow="hidden",a.style.display="flex",a.style.justifyContent="center",a.style.alignItems="center",a.style.flexWrap="wrap";const c=document.createElement("div");c.innerText=m,c.style.color="black",c.style.fontSize="30px",c.style.transform="rotate(-30deg)",c.style.whiteSpace="nowrap",c.style.margin="20px";for(let f=0;f<100;f++)a.appendChild(c.cloneNode(!0));document.body.appendChild(a)}if(n==="localhost"){console.log("Completely: 当前处于本地开发环境 (localhost)");return}else n==="xscnas.top"?(console.log("Completely: 已经跳转到官方域名 (www.xscnas.top)"),window.location.replace(e)):n==="github.xscnas.top"?(o(t),console.log("Completely: 当前访问的是 GitHub 镜像站 (github.xscnas.top)"),confirm("提示：您当前访问的是 GitHub 镜像站，建议您跳转至官网 (www.xscnas.top) 进行浏览！")&&window.location.replace(e)):n!==t&&(o(t),confirm("提示：您当前浏览的页面不是正版(或者站点已经迁移域名)，建议您跳转至官方(www.xscnas.top)进行浏览！如果不是博主的域名及时留言反馈，博主域名为：www.xscnas.top")&&window.location.replace(e))}),(t,e)=>p(" 这个组件不需要模板内容，因为它主要是通过脚本逻辑来操作DOM ")}}),Ht={key:0,class:"notice-bar"},Vt={class:"notice-content"},qt={key:0},Gt={key:1},Wt={class:"city"},Ut={class:"greeting"},Ot={class:"distance"},Kt={class:"distance"},Qt={class:"ip"},Xt=b({__name:"NoticeBar",setup(d){const t=y(""),e=y(""),n=y(""),o=y(""),m=y(""),a=y(!0),c=y(""),f=y(!0),h=async g=>{const v=await(await fetch(`https://wcode.net/api/ip/v3/info/free?ip=${g}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer sk-672.2AvhEhAQNUOGrZHWzUdPh7UPDoEegVIRIFhz8L7NiorIleQn"}})).json();return v.status==="success"&&v.data.extra_info.latitude&&v.data.extra_info.longitude?{lat:parseFloat(v.data.extra_info.latitude),lng:parseFloat(v.data.extra_info.longitude)}:(console.error("Failed to get city coordinates:",v),{lat:0,lng:0})};N(async()=>{try{const r=await(await fetch("https://ip.useragentinfo.com/json?ip=")).json();t.value=r.ip,e.value=`${r.short_name} ${r.country} ${r.province} ${r.city} ${r.area}`||"未知地区";const $=await h(r.ip);if($.lat===0&&$.lng===0)throw new Error("无法获取有效的经纬度信息");const v={lat:42.8943,lng:129.5217};n.value=S(v,$).toFixed(2);const L={lat:39.7461,lng:116.4991};o.value=S(L,$).toFixed(2);const D=new Date().getHours();m.value=D<12?"早上好，美好的一天又开始了😎":D<18?"下午好，累了就好好休息一下吧🎶":"晚上好，在属于自己的时间里好好放松吧😶‍🌫️"}catch(g){c.value="无法加载公告信息，请稍后重试。刷新后如果问题仍然存在，请通过Mete0r_xsc@hotmail.com联系我，也有可能是因为在IP检测部分遇到了障碍，系统监测不到您的IP对应的城市，所以返回了错误，不过这不耽误您对网站的浏览，如有兴趣，可检查自己的IP是否能查询到对应的城市,检测API： https://ip.useragentinfo.com/json?ip=",console.error("Error:",g)}finally{a.value=!1}});function S(g,r){const v=(r.lat-g.lat)*Math.PI/180,L=(r.lng-g.lng)*Math.PI/180,D=Math.sin(v/2)*Math.sin(v/2)+Math.cos(g.lat*Math.PI/180)*Math.cos(r.lat*Math.PI/180)*Math.sin(L/2)*Math.sin(L/2);return 6371*(2*Math.atan2(Math.sqrt(D),Math.sqrt(1-D)))}function C(){f.value=!1}return(g,r)=>(s(),x(B,{name:"slide"},{default:M(()=>[f.value?(s(),l("div",Ht,[i("div",Vt,[i("button",{class:"close-button",onClick:C},"×"),r[8]||(r[8]=i("h3",null,"公告",-1)),a.value?(s(),l("p",qt,"加载中...")):c.value?(s(),l("p",Gt,w(c.value),1)):(s(),l(Y,{key:2},[r[6]||(r[6]=i("p",null,[I("欢迎来到Mete0r的博客！有任何问题请联系邮箱: "),i("a",{href:"mailto:Mete0r_xsc@hotmail.com"},"Mete0r_xsc@hotmail.com")],-1)),r[7]||(r[7]=i("p",null,"🎉 欢迎信息 🎉",-1)),i("p",null,[r[0]||(r[0]=I("  欢迎来自 ")),i("span",Wt,w(e.value),1),r[1]||(r[1]=I(" 的小伙伴，")),i("span",Ut,w(m.value),1),r[2]||(r[2]=I("！您现在距离站长约 ")),i("span",Ot,w(n.value),1),r[3]||(r[3]=I(" 公里，距离博客服务器约 ")),i("span",Kt,w(o.value),1),r[4]||(r[4]=I(" 公里。当前的IP地址为： ")),i("span",Qt,w(t.value),1),r[5]||(r[5]=I("，祝您在我的博客里玩的开心！"))])],64))])])):p("v-if",!0)]),_:1}))}}),Zt=z(Xt,[["__scopeId","data-v-1cd88b5d"]]),Jt={class:"w-full"},te={class:"absolute top-0 left-5 right-5 bottom-0 flex-center"},ee={key:1,class:"h-$yun-nav-height"},me=b({__name:"home",setup(d){const t=T(),e=J(),n=R(),o=A(()=>e.path.startsWith("/page")),m=A(()=>{const a=n.value.notice;return a.enable&&(o.value?!a.hideInPages:!0)});return(a,c)=>{const f=jt,h=Nt,S=mt,C=lt,g=ot,r=Z("RouterView"),$=Q,v=X;return s(),l(Y,null,[u(Ft),p(" 使用DomainCheck "),u(Zt),p(" 使用NoticeBar "),u(tt),p(" 使用LinkInterceptor "),u($,{class:k(["items-center flex-col",{"mt-0!":!o.value}])},{default:M(()=>[_(n).banner.enable?(s(),l(Y,{key:0},[o.value?p("v-if",!0):(s(),l(Y,{key:0},[i("div",Jt,[u(f),_(t).isNimbo?(s(),x(B,{key:0,"enter-from-class":"scale-60","enter-to-class":"scale-100","enter-active-class":"transition-300 transition-cubic-bezier-ease-in-out delay-1000",appear:""},{default:M(()=>[i("div",te,[u(B,{"enter-from-class":"op-0","enter-to-class":"op-100","enter-active-class":"transition-800 delay-1000",appear:""},{default:M(()=>[u(h,{class:"z-1"})]),_:1})])]),_:1})):p("v-if",!0),_(n).say.enable?(s(),x(S,{key:1,w:"full"})):p("v-if",!0)]),_(t).isNimbo?(s(),x(C,{key:0,class:"absolute left-0 top-0 right-0 bottom-0"})):p("v-if",!0)],64))],64)):(s(),l("div",ee)),m.value?(s(),x(g,{key:2,class:k(["mb-2 md:mb-6",{"mt-4":!o.value}]),content:_(n).notice.content},null,8,["class","content"])):p("v-if",!0),P(a.$slots,"board"),P(a.$slots,"default",{},()=>[u(r)])]),_:3},8,["class"]),u(v)],64)}}});export{me as default};
