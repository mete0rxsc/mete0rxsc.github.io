import{_ as p}from"./ValaxyMain.vue_vue_type_script_setup_true_lang.B7T0kWzG.js";import{f as h,g as y,h as f}from"./chunks/vue-router.CWHyo4u9.js";import{D as k,P as i,u as b,E as z,O as e,U as a,a0 as l,p as x}from"./framework.BJ_UGP-K.js";import"./app.C7s_ck_O.js";import"./chunks/dayjs.Byk5cVHE.js";import"./chunks/pinia.rdBI-am1.js";import"./chunks/vue-i18n.CWNv2zlx.js";import"./chunks/nprogress.Cino7761.js";const v=h("/posts/a6migration",async r=>JSON.parse('{"title":"最简单搭建MC服务器","description":"","frontmatter":{"title":"最简单搭建MC服务器","date":"2024-03-26","updated":"2024-03-26","categories":"学习笔记","cover":"https://koimg.cn-sy1.rains3.com/2024/08/28/526505.webp","excerpt":"这里还是有很多人问我，到底怎么开一个MC我的世界服务器，然后又想加MOD又想加插件什么什么的，接下来我会出一系列的详细解析！注意：全部内容仅供个人参考，有错误可以指出，全部都是以我当初萌新的视角去解析讲解，MC服务器核心分为很多种","tags":["服务器","我的世界","教程"]},"headers":[{"level":2,"title":"什么是服务器，客户端","slug":"什么是服务器-客户端","link":"#什么是服务器-客户端","children":[]},{"level":2,"title":"怎么选择服务器","slug":"怎么选择服务器","link":"#怎么选择服务器","children":[{"level":3,"title":"什么是动态计费？","slug":"什么是动态计费","link":"#什么是动态计费","children":[]},{"level":3,"title":"配置调整","slug":"配置调整","link":"#配置调整","children":[]}]},{"level":2,"title":"连接VPS(服务器)","slug":"连接vps-服务器","link":"#连接vps-服务器","children":[]},{"level":2,"title":"获取MC服务器核心","slug":"获取mc服务器核心","link":"#获取mc服务器核心","children":[]},{"level":2,"title":"运行MC服务器核心","slug":"运行mc服务器核心","link":"#运行mc服务器核心","children":[{"level":3,"title":"编写运行脚本","slug":"编写运行脚本","link":"#编写运行脚本","children":[]},{"level":3,"title":"运行服务器脚本","slug":"运行服务器脚本","link":"#运行服务器脚本","children":[]},{"level":3,"title":"关于插件和模组","slug":"关于插件和模组","link":"#关于插件和模组","children":[]}]}],"relativePath":"pages/posts/a6migration.md","lastUpdated":null}'),{lazy:(r,t)=>r.name===t.name}),U={__name:"a6migration",setup(r,{expose:t}){var g;const{data:o}=v(),d=f(),c=y(),s=Object.assign(c.meta.frontmatter||{},((g=o.value)==null?void 0:g.frontmatter)||{});return c.meta.frontmatter=s,d.currentRoute.value.data=o.value,x("valaxy:frontmatter",s),globalThis.$frontmatter=s,t({frontmatter:{title:"最简单搭建MC服务器",date:"2024-03-26",updated:"2024-03-26",categories:"学习笔记",cover:"https://koimg.cn-sy1.rains3.com/2024/08/28/526505.webp",excerpt:"这里还是有很多人问我，到底怎么开一个MC我的世界服务器，然后又想加MOD又想加插件什么什么的，接下来我会出一系列的详细解析！注意：全部内容仅供个人参考，有错误可以指出，全部都是以我当初萌新的视角去解析讲解，MC服务器核心分为很多种",tags:["服务器","我的世界","教程"]}}),(n,u)=>{const m=p;return z(),k(m,{frontmatter:b(s)},{"main-content-md":i(()=>u[0]||(u[0]=[a("p",null,"这里还是有很多人问我，到底怎么开一个MC我的世界服务器，然后又想加MOD又想加插件什么什么的，接下来我会出一系列的详细解析！",-1),a("blockquote",null,[a("p",null,"注意：全部内容仅供个人参考，有错误可以指出，全部都是以我当初萌新的视角去解析讲解")],-1),a("h1",{id:"须知",tabindex:"-1"},[l("须知 "),a("a",{class:"header-anchor",href:"#须知","aria-label":'Permalink to "须知"'},"​")],-1),a("h2",{id:"什么是服务器-客户端",tabindex:"-1"},[l("什么是服务器，客户端 "),a("a",{class:"header-anchor",href:"#什么是服务器-客户端","aria-label":'Permalink to "什么是服务器，客户端"'},"​")],-1),a("p",null,[l("可参考B站视频 "),a("a",{href:"https://www.bilibili.com/video/BV1dY411K7FM/?vd_source=ed4877746ccaa92a499576936b900df5",target:"_blank",rel:"noreferrer"},"客户端和服务器是什么？这期视频带你深入了解。（一）【Minecraft科普】_单机游戏热门视频 (bilibili.com)")],-1),a("h2",{id:"怎么选择服务器",tabindex:"-1"},[l("怎么选择服务器 "),a("a",{class:"header-anchor",href:"#怎么选择服务器","aria-label":'Permalink to "怎么选择服务器"'},"​")],-1),a("p",null,[l("这里使用的是 "),a("a",{href:"https://www.rainyun.com/",target:"_blank",rel:"noreferrer"},"雨云 - 新一代云服务提供商 (rainyun.com)"),l(" 提供的服务器为例子")],-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/nc40dc.png",alt:"image-20240326141103103",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("p",null,[l("进入官网："),a("a",{href:"https://www.rainyun.com/home",target:"_blank",rel:"noreferrer"},"雨云 - 新一代云服务提供商 (rainyun.com)"),l(" 进行注册，优惠码："),a("strong",null,"vip5r"),l("，然后进入首页进入游戏云开始选购服务器")],-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/ne3sut.png",alt:"image-20240326141417843",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/nejj4f.png",alt:"image-20240326141511146",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/nfuyt1.png",alt:"image-20240326141537883",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("p",null,"雨云支持的服务器配置还是很多的，截至到发布文章一共有6款机型，分别是：",-1),a("ul",null,[a("li",null,[a("h4",{id:"i9-14900kf",tabindex:"-1"},[l("i9 14900KF "),a("a",{class:"header-anchor",href:"#i9-14900kf","aria-label":'Permalink to "i9 14900KF"'},"​")])])],-1),a("blockquote",null,[a("p",null,"最新一代i9纯大核 适用于1.18+/模组/基岩/群组等高消耗场景")],-1),a("ul",null,[a("li",null,[a("h4",{id:"i9-13900kf",tabindex:"-1"},[l("i9 13900KF "),a("a",{class:"header-anchor",href:"#i9-13900kf","aria-label":'Permalink to "i9 13900KF"'},"​")])])],-1),a("blockquote",null,[a("p",null,"纯大核超频方案 适用于1.18+/模组/基岩/群组等高消耗场景")],-1),a("ul",null,[a("li",null,[a("h4",{id:"ryzen-7950x",tabindex:"-1"},[l("Ryzen 7950X "),a("a",{class:"header-anchor",href:"#ryzen-7950x","aria-label":'Permalink to "Ryzen 7950X"'},"​")])])],-1),a("blockquote",null,[a("p",null,"高主频的性价比之选 适用于1.18+/模组/基岩/群组等高消耗场景")],-1),a("ul",null,[a("li",null,[a("h4",{id:"ryzen-5900x",tabindex:"-1"},[l("Ryzen 5900X "),a("a",{class:"header-anchor",href:"#ryzen-5900x","aria-label":'Permalink to "Ryzen 5900X"'},"​")])])],-1),a("blockquote",null,[a("p",null,"强劲单核性能 适用于1.18+/模组/基岩/群组等高消耗场景")],-1),a("ul",null,[a("li",null,[a("h4",{id:"gold-6146",tabindex:"-1"},[l("Gold 6146 "),a("a",{class:"header-anchor",href:"#gold-6146","aria-label":'Permalink to "Gold 6146"'},"​")])])],-1),a("blockquote",null,[a("p",null,"中高性能，中小服的性价比之选 适用于1.16及以下纯净服务器")],-1),a("ul",null,[a("li",null,[a("h4",{id:"e5-2666v3",tabindex:"-1"},[l("E5 2666v3 "),a("a",{class:"header-anchor",href:"#e5-2666v3","aria-label":'Permalink to "E5 2666v3"'},"​")])])],-1),a("blockquote",null,[a("p",null,"中等性能，适合低版本纯净小服 适用于1.12.2及以下纯净服务器")],-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/nfo930.png",alt:"image-20240326141701309",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("p",null,[l("由于MC"),a("strong",null,"年代久远"),l("问题，导致MC非常吃的是CPU单核性能，如果服务器需求量真的很大，可以直接上i9的配置，如果不大，一般5900X的配置就足以了，如果只是和几个小伙伴玩E5足以！")],-1),a("h3",{id:"什么是动态计费",tabindex:"-1"},[l("什么是动态计费？ "),a("a",{class:"header-anchor",href:"#什么是动态计费","aria-label":'Permalink to "什么是动态计费？"'},"​")],-1),a("p",null,"可以看到，雨云是支持两种计费模式的",-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/nisuq4.png",alt:"image-20240326142223491",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("blockquote",null,[a("p",null,"那么，什么是动态计费，什么是固定计费呢？")],-1),a("p",null,"根据雨云官方说明：",-1),a("blockquote",null,[a("h2",{id:"就是一个帮你省钱的好东西-超低租金-每天根据cpu超额电量扣余额",tabindex:"-1"},[l("就是一个帮你省钱的好东西，超低租金，每天根据CPU超额电量扣余额 "),a("a",{class:"header-anchor",href:"#就是一个帮你省钱的好东西-超低租金-每天根据cpu超额电量扣余额","aria-label":'Permalink to "就是一个帮你省钱的好东西，超低租金，每天根据CPU超额电量扣余额"'},"​")]),a("p",null,[a("strong",null,[l("CPU使用率低于20%不耗电，高于20%的部分即认为是耗电部分****余额或者积分可以用于兑换CPU电量，电量不够就会扣除余额，"),a("strong",null,[a("strong",null,"余额不足就会进入限制，选择动态模式建议需要预存一点余额或者电量")]),l("假如觉得难以理解，可以直接选择传统的固定计费模式或者仔细阅读以下内容")])]),a("p",null,"以下为各种概念和计费机制的详细介绍")],-1),a("p",null,"动态计费是雨云为解决用户峰值期间突发性能需求和节省用户闲置期间费用开创的计费模式。 和固定计费(固定租金)套餐不同，动态计费套餐是在低价基础月/日租的基础上对产品每日的CPU超额使用率进行额外日结计费,也就是俗称的CPU电费 (内存等其他硬件不产生电费)",-1),a("p",null,[l("解释："),a("a",{href:"https://forum.rainyun.com/t/topic/648",target:"_blank",rel:"noreferrer"},"游戏云动态计费机制 - 新闻公告 / 政策条款 - 雨云论坛 (rainyun.com)")],-1),a("h3",{id:"配置调整",tabindex:"-1"},[l("配置调整 "),a("a",{class:"header-anchor",href:"#配置调整","aria-label":'Permalink to "配置调整"'},"​")],-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/njyvre.png",alt:"image-20240326142429009",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("p",null,[l("前面说过，MC是十分吃单核性能的，所以简单的可以理解为，核心再多，压力给到的其实基本上就给到一个核心，所以某些情况，1c都足以，但是很明显，1c不支持高内存，"),a("strong",null,"可以根据雨云官方给出的左图例子作为参考进行自己的个人调整配置需求")],-1),a("blockquote",null,[a("p",null,"其次，一般MC服务器只需要服务器分配10G就足以了，再多也是没什么提升(当然如果说你是生电服另说吧)，就好比MC客户端帧数再高，其实60FPS就已经是很好了")],-1),a("p",null,"独立IP可以根据个人需求进行选择，预算充足也可以上一个",-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/nmsgtk.png",alt:"image-20240326142857713",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("p",null,[l("操作系统就选择"),a("strong",null,"Windows Server 2019 64位"),l("即可，如果是低配置就选择"),a("strong",null,"Windows 2012 R2 数据中心版 64位"),l("，不过某些时候可能会出问题？某些服务器整合包或者是插件什么什么的会导致出现一些无法解决的问题，看个人需求吧，然后就可以进行 "),a("strong",null,"试用"),l(" 来进行测试看看自己服务器够不够配置，够不够需求，避免出现问题")],-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/nnlw98.png",alt:"image-20240326143034864",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("h1",{id:"使用服务器",tabindex:"-1"},[l("使用服务器 "),a("a",{class:"header-anchor",href:"#使用服务器","aria-label":'Permalink to "使用服务器"'},"​")],-1),a("p",null,"既然我们已经准备好服务器的运行环境了，那么接下来就可以进行下一步的操作了，开始建设MC服务器！",-1),a("h2",{id:"连接vps-服务器",tabindex:"-1"},[l("连接VPS(服务器) "),a("a",{class:"header-anchor",href:"#连接vps-服务器","aria-label":'Permalink to "连接VPS(服务器)"'},"​")],-1),a("p",null,"进入服务器管理面板",-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/npxz81.png",alt:"image-20240326143446734",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("p",null,"确保好开放端口有开放远程控制，没有的自己添加就行，内外端口填写3389就行，一般外网会自己生成一个给你，你也可以自己填写一个",-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/nql7wa.png",alt:"image-20240326143637757",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("p",null,[l("回到你的主机电脑，找到搜索框搜索"),a("strong",null,"远程桌面控制"),l("就可以找到win自带的远程控制软件")],-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/ns9iwg.png",alt:"image-20240326143755695",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("p",null,[l("如果说你电脑没有搜索框？也可以通过CMD进行操控，首先我们先按下键盘win+R打开运行"),a("strong",null,"mstsc"),l("，完事了")],-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/nt2ngu.png",alt:"image-20240326144000820",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("p",null,"然后打开软件后，填写你远程控制的地址进去，点击连接",-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/ntorg8.png",alt:"image-20240326144055995",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("p",null,"会弹出一个窗口，让我们填写用户名和密码，我们回到雨云管理面板，复制过去就行了",-1),a("blockquote",null,[a("p",null,"Ctrl+V粘贴 ; Ctrl+C复制")],-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/nul8ca.png",alt:"image-20240326144207859",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/nuqwkz.png",alt:"image-20240326144238030",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/nv5ne7.png",alt:"image-20240326144307389",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("h1",{id:"部署mc服务器",tabindex:"-1"},[l("部署MC服务器 "),a("a",{class:"header-anchor",href:"#部署mc服务器","aria-label":'Permalink to "部署MC服务器"'},"​")],-1),a("h2",{id:"获取mc服务器核心",tabindex:"-1"},[l("获取MC服务器核心 "),a("a",{class:"header-anchor",href:"#获取mc服务器核心","aria-label":'Permalink to "获取MC服务器核心"'},"​")],-1),a("p",null,"MC服务器核心分为很多种；",-1),a("ul",null,[a("li",null,"插件服：在服务端安装插件，玩家客户端不需要安装，这种的一般叫纯净服"),a("li",null,"模组服：在服务端和玩家客户端都需要安装模组，这种一般都需要指定的客户端才能玩"),a("li",null,"官服：由Mojang官方开发团队发布的核心，不能安装模组也不能安装插件"),a("li",null,"混合服：在服务器上同时安装插件和模组，相对的也是有很多缺点")],-1),a("p",null,[l("这里使用的是由："),a("a",{href:"https://mohistmc.com/",target:"_blank",rel:"noreferrer"},"MohistMC - 主页"),l(" 提供的混合服务器核心")],-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/nxjza4.png",alt:"image-20240326144703635",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/nxnib7.png",alt:"image-20240326144722919",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("p",null,"选择你想要的我的世界版本即可",-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/nxryb3.png",alt:"image-20240326144800459",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("p",null,"这里我们选择最最新版的，如果是生产环境，推荐使用稳定正式版，点击下载然后点击镜像下载即可直接下载，不过有时候可能会很慢",-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/nytv2f.png",alt:"image-20240326144948906",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("p",null,[l("在等待的期间，我们可以先提前准备其他素材，先部署好Java运行环境，这里使用的是"),a("a",{href:"https://www.azul.com/",target:"_blank",rel:"noreferrer"},"Azul | The Java Platform for the Modern Cloud Enterprise"),l("提供的Java环境程序，我们前往进行下载："),a("a",{href:"https://www.azul.com/downloads/?package=jdk#zulu",target:"_blank",rel:"noreferrer"},"Java 8, 11, 17, 21, 22 Download for Linux, Windows and macOS (azul.com)"),l("，进入网站后下拉找到适合的Java版本即可")],-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/o37nn1.png",alt:"image-20240326145548310",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("p",null,"可以进行快速筛选，然后下载模式就选择ZIP模式的，因为我发现有很多萌新下载msi一键安装，就不知道Java安装在哪里路径了，压缩包就可以和服务端文件丢一块了好找",-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/o3i4zj.png",alt:"image-20240326145650497",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("p",null,"下载好就是一个压缩包，我们按照正常复制文件一样，直接复制服务器里就行，win自带的远程可以支持这样传输文件，下载好核心也是一样同理传输，当然你也可以直接在服务器游览器上下载就行，别问我为什么我不一开始就这样，因为我忘记了…不过也算是顺便告诉萌新一个小小的冷知识了，这至少我的萌新朋友们一个都不知道",-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/ot9h47.png",alt:"image-20240326150037307",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("p",null,"然后解压好Java环境压缩包，删除压缩包(服务器储存文件夹不要用中文！！我只是例子要改的！)",-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/ow555g.png",alt:"image-20240326150514790",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("p",null,"便于分辨。。。",-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/owu7d0.png",alt:"image-20240326150631929",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("h2",{id:"运行mc服务器核心",tabindex:"-1"},[l("运行MC服务器核心 "),a("a",{class:"header-anchor",href:"#运行mc服务器核心","aria-label":'Permalink to "运行MC服务器核心"'},"​")],-1),a("h3",{id:"编写运行脚本",tabindex:"-1"},[l("编写运行脚本 "),a("a",{class:"header-anchor",href:"#编写运行脚本","aria-label":'Permalink to "编写运行脚本"'},"​")],-1),a("p",null,"很简单，创建一个新文本，然后打开",-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/oxiwcm.png",alt:"image-20240326150749194",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("p",null,"这里给大家一个启动脚本例子，大家可以自信寻找互联网上的一些其他优化脚本什么的，不过我个人更喜欢实际，升级服务器",-1),a("div",{class:"language- vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"}),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[a("code",{"v-pre":""},[a("span",{class:"line"},[a("span",null,'"C:\\Users\\Administrator\\Desktop\\111\\java17\\bin\\java.exe" -Xmx8G -Xms8G  -jar mohist-1.20.1-603-server.jar')]),l(`
`),a("span",{class:"line"},[a("span",null,"%0")])])]),a("button",{class:"collapse"})],-1),a("h5",{id:"解析脚本",tabindex:"-1"},[l("解析脚本 "),a("a",{class:"header-anchor",href:"#解析脚本","aria-label":'Permalink to "解析脚本"'},"​")],-1),a("h5",{id:"c-users-administrator-desktop-111-java17-bin-java-exe",tabindex:"-1"},[l('"C:\\Users\\Administrator\\Desktop\\111\\java17\\bin\\java.exe" '),a("a",{class:"header-anchor",href:"#c-users-administrator-desktop-111-java17-bin-java-exe","aria-label":'Permalink to ""C:\\\\Users\\\\Administrator\\\\Desktop\\\\111\\\\java17\\\\bin\\\\java.exe""'},"​")],-1),a("p",null,"就是Java环境处于的文件夹路径，一般处于bin文件夹，我们只需要填写到bin然后后面加java.exe即可",-1),a("h5",{id:"xmx8g-xms8g",tabindex:"-1"},[l("-Xmx8G -Xms8G "),a("a",{class:"header-anchor",href:"#xmx8g-xms8g","aria-label":'Permalink to "\\-Xmx8G -Xms8G"'},"​")],-1),a("p",null,"服务器最大和最小分配内存，一般一模一样最好",-1),a("h5",{id:"mohist-1-20-1-603-server-jar",tabindex:"-1"},[l("mohist-1.20.1-603-server.jar "),a("a",{class:"header-anchor",href:"#mohist-1-20-1-603-server-jar","aria-label":'Permalink to "mohist-1.20.1-603-server.jar"'},"​")],-1),a("p",null,"你的服务器核心名字，复制粘贴就行",-1),a("h5",{id:"_0",tabindex:"-1"},[l("%0 "),a("a",{class:"header-anchor",href:"#_0","aria-label":'Permalink to "%0"'},"​")],-1),a("p",null,"自动重启服务器脚本",-1),a("h3",{id:"运行服务器脚本",tabindex:"-1"},[l("运行服务器脚本 "),a("a",{class:"header-anchor",href:"#运行服务器脚本","aria-label":'Permalink to "运行服务器脚本"'},"​")],-1),a("p",null,"我们Ctrl+S保存编辑退出，把文件后缀改成**.bat**即可，如果没法看文件后缀自行查阅游览器资料如何打开显示",-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/p1gf08.png",alt:"image-20240326151408057",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("p",null,"双击运行脚本，然后等待他服务器文件下载即可",-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/p1o4do.png",alt:"image-20240326151443821",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("p",null,[l("输入"),a("strong",null,"true"),l("即可，后续也可以通过文件来修改")],-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/p28kow.png",alt:"image-20240326151540713",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/p2r6ob.png",alt:"image-20240326151627230",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("p",null,"出现以下提示说明正在加载服务器地图文件，如果长时间处于0%你可以直接X关闭重新运行一次，主要依据你的服务器配置来决定生成速度",-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/p3dzj1.png",alt:"image-20240326151733038",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("p",null,'在我重新运行了两次后，弹出类似于**Done (100.300s)! For help, type "help"**提示就说明已经开启了',-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/p5nhv5.png",alt:"image-20240326152113238",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("p",null,"这时候，MC服务器默认使用的是25565端口进行连接，我们回到雨云管理面板，添加开放端口就行",-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/p7dd5v.png",alt:"image-20240326152404658",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("p",null,"然后下载好我的世界游戏客户端，开始游戏进入多人游戏添加地址即可！",-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/pah006.png",alt:"image-20240326152922460",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/pbowzz.png",alt:"image-20240326153126924",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/pbuaik.png",alt:"image-20240326153157695",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/pc7ab5.png",alt:"image-20240326153213602",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/pcbct7.png",alt:"image-20240326153231928",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("blockquote",null,[a("p",null,"忘记关服务器正版验证了，也许有的人没买正版，可以通过修改文件来关闭，修改好重启"),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/pde28r.png",alt:"image-20240326153413103",loading:"lazy",decoding:"async",class:"lazy"})])],-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/pfrsc2.png",alt:"image-20240326153814380",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("h1",{id:"番外",tabindex:"-1"},[l("番外 "),a("a",{class:"header-anchor",href:"#番外","aria-label":'Permalink to "番外"'},"​")],-1),a("h3",{id:"关于插件和模组",tabindex:"-1"},[l("关于插件和模组 "),a("a",{class:"header-anchor",href:"#关于插件和模组","aria-label":'Permalink to "关于插件和模组"'},"​")],-1),a("h4",{id:"添加在哪里",tabindex:"-1"},[l("添加在哪里 "),a("a",{class:"header-anchor",href:"#添加在哪里","aria-label":'Permalink to "添加在哪里"'},"​")],-1),a("p",null,"因为我们选了一个混合核心，所以可以一起加，一般会生成两个专门放的文件夹",-1),a("h6",{id:"模组",tabindex:"-1"},[l("模组 "),a("a",{class:"header-anchor",href:"#模组","aria-label":'Permalink to "模组"'},"​")],-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/pe4qgi.png",alt:"image-20240326153533185",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("h6",{id:"插件",tabindex:"-1"},[l("插件 "),a("a",{class:"header-anchor",href:"#插件","aria-label":'Permalink to "插件"'},"​")],-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/pe8gou.png",alt:"image-20240326153553661",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("p",null,"一般插件作者都会说明使用教程，这里不多做解释，而且也很简单",-1),a("p",null,"如果是mod，服务器不能添加一些视角类的mod，比如地图，这些会导致服务器无法开启，类似于MC百科有写",-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/pfbuve.png",alt:"image-20240326153739473",loading:"lazy",decoding:"async",class:"lazy"})],-1),a("h1",{id:"tips",tabindex:"-1"},[l("tips： "),a("a",{class:"header-anchor",href:"#tips","aria-label":'Permalink to "tips："'},"​")],-1),a("p",null,"后续会出关于mod上的一些问题，不过一般来说一个个排查服务器无法使用的模组就可以解决很多问题了，这是最笨也是最有效的办法，因为没人会浪费自己时间去帮忙，有什么需要了解或者更正可以评论反馈留言",-1),a("figure",null,[a("img",{src:"https://imgse.koxiuqiu.cn/i/2024/03/26/phobtm.png",alt:"看完一定要收藏，邀顾客好评的话术_评价_xxxx_表情",loading:"lazy",decoding:"async",class:"lazy"})],-1)])),"main-header":i(()=>[e(n.$slots,"main-header")]),"main-header-after":i(()=>[e(n.$slots,"main-header-after")]),"main-nav":i(()=>[e(n.$slots,"main-nav")]),"main-content-before":i(()=>[e(n.$slots,"main-content-before")]),"main-content":i(()=>[e(n.$slots,"main-content")]),"main-content-after":i(()=>[e(n.$slots,"main-content-after")]),"main-nav-before":i(()=>[e(n.$slots,"main-nav-before")]),"main-nav-after":i(()=>[e(n.$slots,"main-nav-after")]),comment:i(()=>[e(n.$slots,"comment")]),footer:i(()=>[e(n.$slots,"footer")]),aside:i(()=>[e(n.$slots,"aside")]),"aside-custom":i(()=>[e(n.$slots,"aside-custom")]),default:i(()=>[e(n.$slots,"default")]),_:3},8,["frontmatter"])}}};export{U as default,v as usePageData};
