(window["webpackJsonpnetease-music"]=window["webpackJsonpnetease-music"]||[]).push([[4],{243:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return s}));var a=n(30),r=n(14);function i(){return Object(r.a)((function(){return Object(a.a)({method:"get",url:"/personalized",params:{t:Date.now()}})}),"/personalized")}function c(e){return Object(r.a)((function(){return Object(a.a)({method:"get",url:"/playlist/detail",params:{id:e,t:Date.now()}})}),"/playlist/detail".concat(Object(r.b)({id:e})))}function s(e){return Object(r.a)((function(){return Object(a.a)({method:"get",url:"/simi/playlist",params:{id:e,t:Date.now()}})}),"/simi/playlist".concat(Object(r.b)({id:e})))}},270:function(e,t,n){},271:function(e,t,n){},279:function(e,t,n){},280:function(e,t,n){},281:function(e,t,n){},290:function(e,t,n){},295:function(e,t,n){"use strict";n.r(t);n(263);var a=n(265),r=n.n(a),i=(n(266),n(268)),c=n.n(i),s=n(36),l=n(37),o=n(39),u=n(38),m=n(40),d=n(0),h=n.n(d),p=(n(248),n(250)),f=n.n(p),v=(n(93),n(65)),g=n.n(v),b=n(27),y=(n(270),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return h.a.createElement("div",{className:"topBar"},h.a.createElement(f.a,{mode:"light",icon:h.a.createElement(g.a,{type:"ellipsis"}),onLeftClick:function(){},rightContent:[h.a.createElement(g.a,{key:"0",type:"search",style:{marginRight:"16px"},onClick:function(){e.props.history.push("/search")}})]},"\u4e91\u97f3\u4e50"))}}]),t}(h.a.Component)),E=Object(b.f)(y),k=(n(271),n(272),n(274)),j=n.n(k),x=(n(254),n(255)),O=n.n(x),w=n(45),L=n.n(w),N=n(64),S=(n(279),n(280),n(243)),C=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={songList:[]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getSongList()}},{key:"songMenu",value:function(e){this.props.history.push("/songMenu/"+e.id)}},{key:"getSongList",value:function(){var e=Object(N.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(S.b)();case 3:t=e.sent,this.setState({songList:t.result}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return h.a.createElement("div",{className:"songList",ref:function(t){return e.recommend=t}},h.a.createElement("div",{className:"title"},"\u63a8\u8350\u6b4c\u5355"),h.a.createElement("div",null,h.a.createElement("ul",{className:"List"},this.state.songList.length>0&&this.state.songList.map((function(t,n){return h.a.createElement("li",{key:n,onClick:function(){return e.songMenu(t)}},h.a.createElement("div",{className:"imgBox"},h.a.createElement("img",{src:"",alt:"","data-url":t.picUrl})),h.a.createElement("div",{className:"text"},t.name),h.a.createElement("i",{className:"iconfont icon-kefu"}," ",Math.ceil(t.playCount/1e4),"\u4e07"))})))))}}]),t}(h.a.Component),M=Object(b.f)(C),A=n(30);var I=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={bannerList:null},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getBanners()}},{key:"getBanners",value:function(){var e=Object(N.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n={type:1},Object(A.a)({method:"get",url:"/banner",params:{type:n,t:Date.now()}});case 3:t=e.sent,this.setState({bannerList:t.banners}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}var n}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.bannerList;return h.a.createElement("div",{className:"recommend",id:"recommend",ref:function(t){return e.recommend=t}},h.a.createElement("div",null,h.a.createElement("div",{className:"bg"}),h.a.createElement("div",{className:"carousel",onTouchMove:function(e){return e.stopPropagation()}},h.a.createElement(j.a,null,t&&h.a.createElement(O.a,{autoplay:!0,infinite:!0},t.map((function(t,n){return h.a.createElement("div",{key:n,style:{display:"inline-block",width:"100%",height:"40vw"}},h.a.createElement("img",{src:t.imageUrl,alt:"",style:{width:"100%",height:"100%",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}))}))))),h.a.createElement("div",{className:"song-list"},h.a.createElement(M,{isLoad:this.props.isLoad}))))}}]),t}(h.a.Component),B=(n(244),n(245)),D=n.n(B),T=(n(281),n(96)),H=D.a.Item,F=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={index:null,letterIndex:null,data:[{name:"\u5165\u9a7b\u6b4c\u624b",index:5001},{name:"\u534e\u8bed\u7537\u6b4c\u624b",index:1001},{name:"\u534e\u8bed\u5973\u6b4c\u624b",index:1002},{name:"\u534e\u8bed\u7ec4\u5408",index:1003},{name:"\u6b27\u7f8e\u7537\u6b4c\u624b",index:2001},{name:"\u6b27\u7f8e\u5973\u6b4c\u624b",index:2002},{name:"\u6b27\u7f8e\u7ec4\u5408",index:2003},{name:"\u65e5\u672c\u7537\u6b4c\u624b",index:6001},{name:"\u65e5\u672c\u5973\u6b4c\u624b",index:6002},{name:"\u65e5\u672c\u7ec4\u5408",index:6003},{name:"\u97e9\u56fd\u7537\u6b4c\u624b",index:7001},{name:"\u97e9\u56fd\u5973\u6b4c\u624b",index:7002},{name:"\u97e9\u56fd\u7ec4\u5408",index:7003},{name:"\u5176\u4ed6\u7537\u6b4c\u624b",index:4001},{name:"\u5176\u4ed6\u5973\u6b4c\u624b",index:4002},{name:"\u5176\u4ed6\u7ec4\u5408",index:4003}],letter:"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),singerList:[]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"screen",value:function(e){this.setState({index:e}),this.loadList({cat:this.state.data[e].index,initial:null!==this.state.letterIndex?this.state.letter[this.state.letterIndex]:void 0},!0),this.setState({singerList:[]})}},{key:"letterScreen",value:function(e){this.setState({letterIndex:e}),this.loadList({cat:null!==this.state.index?this.state.data[this.state.index].index:void 0,initial:this.state.letter[e]},!0),this.setState({singerList:[]})}},{key:"componentDidMount",value:function(){var e=Object(N.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadList({cat:1001}),(t=document.getElementById("singer")).scrollTop=1,t.scrollTop=0;case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadList",value:function(){var e=Object(N.a)(L.a.mark((function e(t,n){var a,r,i;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.cat,r=t.initial,e.prev=1,e.next=4,Object(T.c)({cat:a,initial:r});case 4:i=e.sent,this.setState({singerList:i.artists},(function(){if(n){var e=document.getElementById("singer");e.scrollTop=1,e.scrollTop=0}})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return h.a.createElement("div",{className:"singer",ref:function(t){return e.singer=t}},h.a.createElement("div",{id:"classify",className:"classify",onTouchStart:function(e){return e.stopPropagation()}},h.a.createElement("ul",null,h.a.createElement("li",{className:"title"},"\u5206\u7c7b(\u9ed8\u8ba4\u70ed\u95e8):"),this.state.data.map((function(t,n){return h.a.createElement("li",{onClick:function(t){return e.screen(n)},key:n,className:n===e.state.index?"activate":""},t.name)})))),h.a.createElement("div",{className:"letter",id:"letter",onTouchStart:function(e){return e.stopPropagation()}},h.a.createElement("ul",null,h.a.createElement("li",{className:"title"},"\u9996\u5b57\u6bcd:"),this.state.letter.map((function(t,n){return h.a.createElement("li",{onClick:function(){return e.letterScreen(n)},key:n,className:n===e.state.letterIndex?"letter-activate":""},t)})))),h.a.createElement("div",{className:"list"},h.a.createElement(D.a,null,this.state.singerList.map((function(t,n){return h.a.createElement("div",{className:"item",key:n},h.a.createElement(H,{thumb:h.a.createElement("img",{src:"http://img4.imgtn.bdimg.com/it/u=891174751,554927679&fm=26&gp=0.jpg","data-url":t.picUrl,alt:""}),onClick:function(){e.props.history.push("/singerDetails/".concat(t.id))}},t.name))})))))}}]),t}(h.a.Component),U=Object(b.f)(F),P=(n(282),n(286)),R=n.n(P),z=(n(290),n(14));var q=D.a.Item,G=q.Brief,J=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:[1,2,3,4,5],authorityList:[],globalList:[]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getRanking()}},{key:"getRanking",value:function(){var e=Object(N.a)(L.a.mark((function e(){var t,n=this;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(z.a)((function(){return Object(A.a)({method:"get",url:"/toplist",params:{t:Date.now()}})}),"/toplist");case 3:t=e.sent,this.setState({authorityList:t.list.slice(0,4)},(function(){n.state.authorityList.forEach((function(e,t){n.getSongMenu(e.id,t)}))})),this.setState({globalList:t.list.slice(4,t.list.length)}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"getSongMenu",value:function(){var e=Object(N.a)(L.a.mark((function e(t,n){var a,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(S.a)(t);case 3:a=e.sent,(r=this.state.authorityList)[n].tags=a.playlist.tracks.slice(0,3),this.setState({authorityList:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"songMenu",value:function(e){this.props.history.push("/songMenu/"+e.id)}},{key:"render",value:function(){var e=this;return h.a.createElement("div",{className:"ranking"},h.a.createElement("div",{className:"box"},h.a.createElement("div",{className:"authority"},h.a.createElement("div",{className:"title"},"\u5b98\u65b9\u699c"),h.a.createElement(D.a,null,this.state.authorityList.map((function(t,n){return h.a.createElement(q,{key:n,thumb:h.a.createElement("img",{src:"",alt:"","data-url":t.coverImgUrl}),onClick:function(){e.songMenu(t)}},e.state.authorityList[n].tags.map((function(e,t){return h.a.createElement(G,{key:t},t+1,". ",e.name)})))})))),h.a.createElement("div",{className:"global"},h.a.createElement("div",{className:"title"},"\u5168\u7403\u699c"),h.a.createElement(R.a,{hasLine:!1,data:this.state.globalList,columnNum:3,renderItem:function(t){return h.a.createElement("div",{onClick:function(){e.songMenu(t)}},h.a.createElement("img",{src:"",style:{width:"100%",height:"100%",borderRadius:"5px"},"data-url":t.coverImgUrl,alt:""}),h.a.createElement("div",{style:{color:"#888",fontSize:"14px",marginTop:"12px"}},h.a.createElement("span",null,t.updateFrequency)))}}))))}}]),t}(h.a.Component),K=Object(b.f)(J),Q=n(86),W=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={placeholder:n.props.src||"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1897943806,295048940&fm=26&gp=0.jpg",windowHei:window.innerHeight+100},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.init()}},{key:"init",value:function(){var e=this.box.parentNode;this.getNodeLise(e)}},{key:"getNodeLise",value:function(){var e=Object(N.a)(L.a.mark((function e(t){var n,a,r=this;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.state.windowHei,0!==(a=t.querySelectorAll("[data-url]")).length){e.next=7;break}return e.next=5,setTimeout((function(){r.getNodeLise(t)}),500);case 5:e.next=10;break;case 7:this.isLoad(t,n),a.forEach((function(e){""===e.getAttribute("src")&&e.setAttribute("src",r.state.placeholder)})),t.addEventListener("scroll",(function(){Object(Q.a)(r.isLoad,200,t,n)}));case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"isLoad",value:function(e,t){e.querySelectorAll("[data-url]").forEach((function(e){e.y<t&&(e.setAttribute("src",e.getAttribute("data-url")),e.removeAttribute("data-url"))}))}},{key:"render",value:function(){var e=this;return h.a.createElement("div",{ref:function(t){return e.box=t}},this.props.children)}}]),t}(h.a.Component);n.d(t,"default",(function(){return _}));var Y=[{title:"\u63a8\u8350",sub:"1"},{title:"\u6b4c\u624b",sub:"2"},{title:"\u6392\u884c\u699c",sub:"3"}],_=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return h.a.createElement("div",{className:"home"},h.a.createElement(E,null),h.a.createElement(c.a,{tabs:Y,initialPage:0,tabBarBackgroundColor:"#d44439",tabBarInactiveTextColor:"#e4e4e4",tabBarActiveTextColor:"#f1f1f1",swipeable:!0,prerenderingSiblingsNumber:!1},h.a.createElement("div",{className:"tabBox"},h.a.createElement(W,null,h.a.createElement(I,null))),h.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",backgroundColor:"#f2f3f4"}},h.a.createElement("div",{className:"tabBox",id:"singer"},h.a.createElement(W,{src:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=891174751,554927679&fm=26&gp=0.jpg"},h.a.createElement(U,null)))),h.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",backgroundColor:"#f2f3f4"}},h.a.createElement("div",{className:"tabBox",ref:function(t){return e.ganking=t}},h.a.createElement(W,null,h.a.createElement(K,null))))),h.a.createElement(r.a,null))}}]),t}(h.a.Component)}}]);
//# sourceMappingURL=4.ce16f7ad.chunk.js.map