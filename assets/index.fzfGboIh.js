import{_ as h}from"./ValaxyMain.vue_vue_type_style_index_0_lang.Baxj-E10.js";import{u as w}from"./chunks/@vueuse/motion.jISeQ3Au.js";import{o as B}from"./index.BrSYCNQw.js";import{f as g,r as L,P as k,O as f,$ as R,S as e,V as b,F as j,U as I,N as y,u as v,a3 as n,W as s,y as S,X as t,A as Y}from"./framework.B3-meWAy.js";import{E as z}from"./app.BQ406hGD.js";import"./chunks/dayjs.Byk5cVHE.js";import{f as N,a as T,u as V}from"./chunks/vue-router.DlZxEEZq.js";import"./YunComment.vue_vue_type_style_index_0_lang.Bj_qNr4u.js";import"./index.C5okkQwF.js";import"./chunks/vue-i18n.DYdeeex7.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.DexdN6If.js";import"./post.TY2Tostv.js";import"./animation.BmKSPrMr.js";import"./chunks/pinia.CaogHvnm.js";import"./chunks/nprogress.Cino7761.js";const q=["href","title"],C={class:"yun-link-left"},D={class:"yun-link-avatar size-16 overflow-hidden flex-center"},E=["src","alt"],F={class:"yun-link-info",m:"l-2"},M={class:"yun-link-blog",font:"serif black"},P={class:"yun-link-desc"},U=g({__name:"YunLinkItem",props:{i:{},errorImg:{},link:{}},setup(l){const i=l;function u(r){B(r,i.errorImg)}const d=L();return w(d,{initial:{opacity:0,translateY:40},enter:{opacity:1,translateY:0,transition:{type:"spring",duration:400,damping:8,delay:i.i*50}}}),(r,m)=>(f(),k("li",{ref_key:"itemRef",ref:d,class:"yun-link-item inline-flex",style:R({"--primary-color":r.link.color})},[e("a",{class:"yun-link-url",p:"x-4 y-2",href:r.link.url,title:r.link.name,alt:"portrait",rel:"friend",target:"_blank"},[e("div",C,[e("div",D,[e("img",{class:"size-full object-center object-cover m-0! max-w-unset!",loading:"lazy",src:r.link.avatar,alt:r.link.name,onError:u},null,40,E)])]),e("div",F,[e("div",M,b(r.link.blog),1),e("div",P,b(r.link.desc),1)])],8,q)],4))}}),O={class:"yun-links"},A={class:"yun-link-items",flex:"center wrap"},H=g({__name:"YunLinks",props:{links:{},random:{type:Boolean},errorImg:{}},setup(l){const i=l,{data:u}=z(i.links,i.random);return(d,r)=>{const m=U;return f(),k("div",O,[e("ul",A,[(f(!0),k(j,null,I(v(u),(p,c)=>(f(),y(m,{key:c,i:c,link:p,"error-img":d.errorImg},null,8,["i","link","error-img"]))),128))])])}}}),J=N("/links",async l=>JSON.parse('{"title":"我的小伙伴们","description":"小伙伴们","frontmatter":{"title":"我的小伙伴们","keywords":"链接","description":"小伙伴们","links":"/links.json","random":true},"headers":[],"relativePath":"pages/links/index.md","lastUpdated":1743336257000}'),{lazy:(l,i)=>l.name===i.name}),le={__name:"index",setup(l,{expose:i}){var c;const{data:u}=J(),d=V(),r=T(),m=Object.assign(r.meta.frontmatter||{},((c=u.value)==null?void 0:c.frontmatter)||{});r.meta.frontmatter=m,d.currentRoute.value.data=u.value,Y("valaxy:frontmatter",m),globalThis.$frontmatter=m;const p={title:"我的小伙伴们",keywords:"链接",description:"小伙伴们",links:"/links.json",random:!0};return i({frontmatter:p}),(o,a)=>{const $=H,_=h;return f(),y(_,{frontmatter:v(m)},{"main-content-md":n(()=>[S($,{links:p.links,random:p.random},null,8,["links","random"]),a[0]||(a[0]=e("p",null,[t("可以一起交换友链！"),e("br"),t(" 想交好多好多的博友们！")],-1)),a[1]||(a[1]=e("blockquote",null,[e("p",null,"我的友链:")],-1)),a[2]||(a[2]=e("ul",null,[e("li",null,[t('"url": "'),e("a",{href:"https://www.xscnas.top",target:"_blank",rel:"noreferrer"},"https://www.xscnas.top"),t('",'),e("br"),t(' "avatar": "'),e("a",{href:"https://imgse.koxiuqiu.cc/imgse/u/23/2025/03/11/67d050c041782.jpg",target:"_blank",rel:"noreferrer"},"https://imgse.koxiuqiu.cc/imgse/u/23/2025/03/11/67d050c041782.jpg"),t('",'),e("br"),t(' "name": "Mete0r’s Blog | 壹人小站",'),e("br"),t(' "blog": "Mete0r’s Blog | 壹人小站",'),e("br"),t(' "desc": "Trust the process.",'),e("br"),t(' "color": "#FFC0CB"')])],-1)),a[3]||(a[3]=e("blockquote",null,[e("p",null,"友链格式")],-1)),a[4]||(a[4]=e("ul",null,[e("li",null,[t('"url": "你的网站URL",'),e("br"),t(' "avatar": "你的头像URL",'),e("br"),t(' "name": "你的网站名称",'),e("br"),t(' "blog": "你的网站名称",'),e("br"),t(' "desc": "描述",'),e("br"),t(' "color": "你可以为自己选择一个颜色显示（默认#0078e7）"')])],-1)),a[5]||(a[5]=e("p",null,[t("如果我的网站有什么不好的地方，还请您多多担待啦，指出我的错误我会及时修改的~"),e("br"),t(" 友链要求："),e("br"),t(" 1.符合国家要求"),e("br"),t(" 2.无违法内容"),e("br"),t(" 3.网站运营状态正常"),e("br"),t(" 4.含我的友链"),e("br"),t(" 5.非盈利性站点"),e("br"),t(" 6.网站开启了安全的HTTPS协议"),e("br"),t(" 你准备好了吗，准备好了就在下方的评论区留言吧！"),e("br"),t(" 填写你的友链信息，我审核通过后会在网站展示你的友链~")],-1))]),"main-header":n(()=>[s(o.$slots,"main-header")]),"main-header-after":n(()=>[s(o.$slots,"main-header-after")]),"main-nav":n(()=>[s(o.$slots,"main-nav")]),"main-content-before":n(()=>[s(o.$slots,"main-content-before")]),"main-content":n(()=>[s(o.$slots,"main-content")]),"main-content-after":n(()=>[s(o.$slots,"main-content-after")]),"main-nav-before":n(()=>[s(o.$slots,"main-nav-before")]),"main-nav-after":n(()=>[s(o.$slots,"main-nav-after")]),comment:n(()=>[s(o.$slots,"comment")]),footer:n(()=>[s(o.$slots,"footer")]),aside:n(()=>[s(o.$slots,"aside")]),"aside-custom":n(()=>[s(o.$slots,"aside-custom")]),default:n(()=>[s(o.$slots,"default")]),_:3},8,["frontmatter"])}}};export{le as default,J as usePageData};
