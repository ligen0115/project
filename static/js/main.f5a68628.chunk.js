(window["webpackJsonpnetease-music"]=window["webpackJsonpnetease-music"]||[]).push([[0],{138:function(t,e,n){t.exports=n(240)},14:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return s}));var a=n(34);function i(t,e){var n=a.a.setApi.getState();return e in n?Promise.resolve(n[e]):t()}function s(t){var e="";for(var n in t)"t"!==n&&(e+="/".concat(n,":").concat(JSON.stringify(t[n])));return e}},143:function(t,e,n){},187:function(t,e,n){},234:function(t,e,n){},240:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),s=n(8),r=n.n(s),c=(n(143),n(36)),o=n(37),l=n(39),u=n(38),m=n(40),h=n(94),f=n(27),p=(n(144),n(126)),d=n.n(p),y=(n(93),n(65)),g=n.n(y),v=n(45),b=n.n(v),w=n(64),E=(n(187),n(30)),S=n(14);function O(t){return Object(S.a)((function(){return Object(E.a)({method:"get",url:"/song/url",params:{id:t,t:Date.now()}})}),"/song/url".concat(Object(S.b)({id:t})))}function x(t){return Object(S.a)((function(){return Object(E.a)({method:"get",url:"/lyric",params:{id:t,t:Date.now()}})}),"/lyric".concat(Object(S.b)({id:t})))}var j=n(96);var N=n(87),k=n(34);var C=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3,n=arguments.length>2?arguments[2]:void 0,a=document.createElement("div");switch(a.innerText=t,document.body.append(a),a.style.position="fixed",a.style.opacity=0,a.style.left="50%",a.style.textAlign="center",n){case"top":a.style.top="-5%",a.style.transform="translateX(-50%)",setTimeout((function(){a.style.top="2%"}),0);break;case"bottom":a.style.top="110%",a.style.transform="translateX(-50%)",setTimeout((function(){a.style.top="90%"}),0);break;default:a.style.top="50%",a.style.transform="translateX(-50%) translateY(-50%)"}a.style.zIndex=99999999999,a.style.transition="all .5s",a.style.padding="8px 10px",a.style.backgroundColor="rgba(0,0,0,.7)",a.style.color="#fff",a.style.borderRadius="5px",setTimeout((function(){a.style.opacity=1}),0),setTimeout((function(){a.style.opacity=0}),e),setTimeout((function(){document.body.removeChild(a)}),e+500)},P=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(i)))).state={isPlay:!1,musicUrl:"",show:0,musicList:[],index:0,preIndex:null,picUrl:"",musicName:"",musicAr:"",playLength:{current:0,end:0},platPattern:"listCycle",lycArr:null,currentLyric:null,isShowLyc:!1,isShowAllTool:!1,popupShow:!1,isTouchDown:!1},n}return Object(m.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this;window.addEventListener("touchmove",(function(e){if(t.state.isTouchDown){var n=e.changedTouches[0].clientX-t.progressBox.offsetLeft;t.setProgress(n)}})),k.a.musicUrl.subscribe((function(){var e=k.a.musicUrl.getState();!function(t){var e=document.getElementById("root"),n=document.createElement("i");n.className="iconfont icon-yinle animation",n.style.top=t.pageY-5+"px",n.style.left=t.pageX-5+"px",e.append(n),setTimeout((function(){n.style.top=window.screen.height-45+"px",n.style.left="8%",n.style.fontSize="30px"}),0),setTimeout((function(){n.style.opacity=0}),1e3),setTimeout((function(){e.removeChild(n)}),2e3)}(e.even),t.setState({musicList:e.list},(function(){t.setState({index:e.index},(function(){t.setMusicUrl()}))}))}))}},{key:"lyricDispose",value:function(t){for(var e=t.split("\n"),n=[],a=0;a<e.length&&e[a];a++){var i=e[a].match(/\[.*\]/g)[0];i=i.substring(1,i.length-1);for(var s=e[a].replace(/\[.*\]/g,""),r=i.split("]["),c=0;c<r.length;c++)n.push({time:Number(r[c].split(":")[1])+60*Number(r[c].split(":")[0]),str:s})}return n.sort((function(t,e){return t.time-e.time}))}},{key:"setMusicUrl",value:function(){var t=Object(w.a)(b.a.mark((function t(){var e,n,a,i,s=this;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.state.index,n=!this.state.musicUrl,this.setState({musicUrl:""}),this.progress.style.width="",t.prev=4,t.next=7,O(this.state.musicList[e].id);case 7:if(null!==(a=t.sent).data[0].url){t.next=12;break}return C("\u6b4c\u66f2\u300a".concat(this.state.musicList[e].name,"\u300b\u6682\u65e0\u7248\u6743,\u64ad\u653e\u5931\u8d25!"),2e3),this.MusicChange(1),t.abrupt("return");case 12:return this.setState({musicUrl:a.data[0].url},(function(){n||s.audio.play(),0===s.state.show&&s.setState({show:"1.6rem"})})),this.getSingerDesc(this.state.musicList[e].artId),this.setState({musicName:this.state.musicList[e].name}),this.setState({musicAr:this.state.musicList[e].arName}),t.next=18,x(this.state.musicList[e].id);case 18:"lrc"in(i=t.sent)?this.setState({lycArr:this.lyricDispose(i.lrc.lyric)}):this.setState({lycArr:""}),t.next=25;break;case 22:t.prev=22,t.t0=t.catch(4),console.log(t.t0);case 25:case"end":return t.stop()}}),t,this,[[4,22]])})));return function(){return t.apply(this,arguments)}}()},{key:"Playing",value:function(t){var e=document.getElementById("audio");this.state.isPlay?e.pause():e.play()}},{key:"showAll",value:function(t){var e=this;t.setState({show:"100%"},(function(){setTimeout((function(){e.setState({isShowAllTool:!0},(function(){e.allLyc.style.paddingTop=e.allLyc.offsetHeight/2-40+"px";var t=e.lycBox.offsetHeight-90>window.innerWidth-60?window.innerWidth-60:e.lycBox.offsetHeight-90;e.plate.style.width=t+"px",e.plate.style.height=t+"px"}))}),600)})),document.getElementsByClassName("tool")[0].style.display="none"}},{key:"unShowAll",value:function(t){t.setState({show:"1.6rem",isShowAllTool:!1});var e=document.getElementsByClassName("tool")[0];e.style.display="flex",e.style.opacity=0,setTimeout((function(){e.style.opacity=1}),0)}},{key:"timeupdate",value:function(t){var e=document.getElementById("audio");if(e.ended&&"singleCycle"!==this.state.platPattern)this.MusicChange(1);else if(this.state.isShowAllTool){var n="0:00",a="0:00";if(e.currentTime>0){n=Math.floor(e.currentTime);var i=Math.floor(n/60).toString(),s=(n%60).toString();n="".concat(i,":").concat(s.padStart(2,"0"))}if(e.duration>0){a=Math.floor(e.duration);var r=Math.floor(a/60).toString(),c=(a%60).toString();a="".concat(r,":").concat(c.padStart(2,"0"))}if(t.setState({playLength:{current:n,end:a}}),!this.state.isTouchDown){var o=e.currentTime/e.duration;this.progress.style.width=o*this.progressBox.offsetWidth+"px"}if(this.state.lycArr){for(var l=e.currentTime+.3,u=this.state.lycArr.length-1;u>=0;u--)if(this.state.lycArr[u].time<l)return this.state.currentLyric!==u&&(this.lycBrief.innerText=this.state.lycArr[u].str,this.allLyc.style.top=50*-u*this.rem+"px"),void this.setState({currentLyric:u});this.setState({currentLyric:null}),this.allLyc.style.top=50*this.rem+"px"}}}},{key:"getSingerDesc",value:function(){var t=Object(w.a)(b.a.mark((function t(e){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(j.a)(e);case 3:n=t.sent,this.setState({picUrl:n.artist.picUrl}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},{key:"MusicChange",value:function(t){var e=this,n=null;switch(this.state.platPattern){case"listCycle":case"singleCycle":1===t&&(n=this.state.index!==this.state.musicList.length-1?this.state.index+1:0),-1===t&&(n=0!==this.state.index?this.state.index-1:this.state.musicList.length-1),this.setState({index:n},(function(){e.setMusicUrl()}));break;case"random":n=Math.floor(Math.random()*this.state.musicList.length),this.setState({index:n},(function(){e.setMusicUrl()}))}}},{key:"showPopup",value:function(){var t=this;this.setState({popupShow:!this.state.popupShow},(function(){setTimeout((function(){t.state.popupShow&&t.lengthList.scrollToRow(t.state.index)}),200)}))}},{key:"progressClick",value:function(t){this.setProgress(t-this.progressBox.offsetLeft)}},{key:"setProgress",value:function(t){this.progress.style.width=t+"px"}},{key:"setMucTiem",value:function(){if(this.state.isPlay){var t=this.progress.offsetWidth/this.progressBox.offsetWidth;t<.04&&(t=0),this.audio.currentTime=this.audio.duration*t}}},{key:"rowRenderer",value:function(t){var e=this,n=t.index,a=t.style,s=t.key,r=this.state.musicList[n];return i.a.createElement("div",{key:s,style:a,onClick:function(){return e.setState({index:n},(function(){e.setMusicUrl()}))},className:"content"},i.a.createElement("span",{style:{color:this.state.index===n?"#d4473e":"#a09191"}},i.a.createElement("i",{className:"iconfont icon-bofang",style:{opacity:this.state.index===n?1:0}}),r.name," - ",r.arName),i.a.createElement("div",{className:"ico"},i.a.createElement("i",{className:"iconfont icon-shoucang"}),i.a.createElement("i",{className:"iconfont icon-RectangleCopy"})))}},{key:"render",value:function(){var t=this,e=this.state,n=e.musicList,a=e.isShowAllTool;return i.a.createElement("div",{className:"playMusic",style:{bottom:this.state.show}},i.a.createElement("div",{className:"bg"},i.a.createElement("div",{className:"before",style:{backgroundImage:"url(".concat(this.state.picUrl,")")}})),i.a.createElement("div",{className:"tool"},i.a.createElement("div",{className:"item",onClick:function(){return t.showAll(t)},ref:function(e){return t.img=e}},i.a.createElement("div",{className:"img"},i.a.createElement("img",{src:this.state.picUrl,alt:""})),i.a.createElement("div",{className:"text"},i.a.createElement("p",null,this.state.musicName),i.a.createElement("div",null,this.state.musicAr))),i.a.createElement("div",{className:"btn"},i.a.createElement("i",{onClick:function(){return t.Playing(t)},className:this.state.isPlay?"iconfont icon-zanting":"iconfont icon-bofang"}),i.a.createElement("i",{className:"iconfont icon-yinleliebiao",onClick:function(){return t.showPopup()}}))),i.a.createElement("div",{className:"audio"},i.a.createElement("audio",{onTimeUpdate:function(){return t.timeupdate(t)},autoPlay:!0,controls:!0,src:this.state.musicUrl,id:"audio",loop:"singleCycle"===this.state.platPattern,ref:function(e){return t.audio=e},onPlaying:function(){t.setState({isPlay:!0})},onPause:function(){t.setState({isPlay:!1})}})),i.a.createElement("div",{className:"all"},i.a.createElement("div",{className:"toolBox",style:{opacity:a?1:0,transition:"all .5s"}},a&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"topBox"},i.a.createElement(g.a,{type:"down",onClick:function(){return t.unShowAll(t)}}),i.a.createElement("div",{className:"title"},this.state.musicName),i.a.createElement("div",{className:"singer"},this.state.musicAr)),i.a.createElement("div",{className:"lycBox",ref:function(e){return t.lycBox=e},onClick:function(){return t.setState({isShowLyc:!t.state.isShowLyc})}},i.a.createElement("div",{className:"plate",style:{opacity:this.state.isShowLyc?0:1},ref:function(e){return t.plate=e}},i.a.createElement("img",{src:this.state.picUrl,alt:""})),i.a.createElement("div",{className:"lycBrief",style:{opacity:this.state.isShowLyc?0:1}},i.a.createElement("p",{ref:function(e){return t.lycBrief=e}})),i.a.createElement("div",{className:"allLyc",style:{opacity:this.state.isShowLyc?1:0},ref:function(e){return t.allLyc=e}},this.state.lycArr&&this.state.lycArr.map((function(e,n){return i.a.createElement("p",{key:n,className:n===t.state.currentLyric?"current":""},e.str)}))))),i.a.createElement("div",{className:"allTool"},i.a.createElement("div",{className:"progressBar"},i.a.createElement("span",null,this.state.playLength.current),i.a.createElement("div",{className:"progressBox",onTouchStart:function(e){var n=e.changedTouches[0].clientX;t.setState({isTouchDown:!0},(function(){return t.progressClick(n)}))},onTouchEnd:function(){setTimeout((function(){t.setMucTiem(),t.setState({isTouchDown:!1})}),0)}},i.a.createElement("div",{ref:function(e){return t.progressBox=e}},i.a.createElement("div",{className:"progress",ref:function(e){return t.progress=e}}))),i.a.createElement("span",null,this.state.playLength.end)),i.a.createElement("div",{className:"control"},"listCycle"===this.state.platPattern&&i.a.createElement("i",{className:"iconfont icon-icon--",onClick:function(){t.setState({platPattern:"singleCycle"}),C("\u5355\u66f2\u5faa\u73af",2e3)}}),"singleCycle"===this.state.platPattern&&i.a.createElement("i",{className:"iconfont icon-danquxunhuan",onClick:function(){t.setState({platPattern:"random"}),C("\u968f\u673a\u64ad\u653e",2e3)}}),"random"===this.state.platPattern&&i.a.createElement("i",{className:"iconfont icon-suijibofang",onClick:function(){t.setState({platPattern:"listCycle"}),C("\u987a\u5e8f\u64ad\u653e",2e3)}}),i.a.createElement("i",{className:"iconfont icon-shangyishoushangyige",onClick:function(){return t.MusicChange(-1)}}),i.a.createElement("i",{onClick:function(){return t.Playing(t)},className:this.state.isPlay?"iconfont icon-zanting":"iconfont icon-bofang"}),i.a.createElement("i",{className:"iconfont icon-xiayigexiayishou",onClick:function(){return t.MusicChange(1)}}),i.a.createElement("i",{className:"iconfont icon-yinleliebiao",onClick:function(){return t.showPopup()}}))))),i.a.createElement(d.a,{popup:!0,visible:this.state.popupShow,onClose:function(){return t.showPopup()},animationType:"slide-up"},i.a.createElement("div",{className:"songListPopup"},i.a.createElement("div",{className:"box"},i.a.createElement("div",{className:"title"},i.a.createElement("div",{className:"left"},"listCycle"===this.state.platPattern&&i.a.createElement(i.a.Fragment,null,i.a.createElement("i",{className:"iconfont icon-icon--",onClick:function(){t.setState({platPattern:"singleCycle"})}}),"\u987a\u5e8f\u64ad\u653e"),"singleCycle"===this.state.platPattern&&i.a.createElement(i.a.Fragment,null,i.a.createElement("i",{className:"iconfont icon-danquxunhuan",onClick:function(){t.setState({platPattern:"random"})}}),"\u5355\u66f2\u5faa\u73af"),"random"===this.state.platPattern&&i.a.createElement(i.a.Fragment,null,i.a.createElement("i",{className:"iconfont icon-suijibofang",onClick:function(){t.setState({platPattern:"listCycle"})}}),"\u968f\u673a\u64ad\u653e")),i.a.createElement("i",{className:"iconfont icon-guanbi",onClick:function(){return t.showPopup()}})),n.length>0&&i.a.createElement(N.a,null,(function(e){var a=e.height,s=e.width;return i.a.createElement(N.b,{ref:function(e){return t.lengthList=e},width:s,height:a-40,rowCount:n.length,rowHeight:40,rowRenderer:t.rowRenderer.bind(t),scrollToAlignment:"start"})}))))))}}]),e}(i.a.Component),T=(n(234),n(86)),L=(n(235),n(89)),A=n.n(L),D=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(i)))).state={},n}return Object(m.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){A.a.loading("\u52a0\u8f7d\u4e2d...",30)}},{key:"componentWillUnmount",value:function(){A.a.hide()}},{key:"render",value:function(){return i.a.createElement("img",{src:"http://img4.imgtn.bdimg.com/it/u=2007870969,2735994731&fm=26&gp=0.jpg",width:"100vw",height:"100vh",alt:""})}}]),e}(i.a.Component),B=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,293))})),M=Object(a.lazy)((function(){return Promise.all([n.e(7),n.e(8)]).then(n.bind(null,294))})),U=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,296))})),I=Object(a.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,295))}));function _(){i.a.Component.prototype.$width=window.innerWidth}function W(){var t=document.getElementsByTagName("html")[0],e=window.innerWidth/10;e=e>50?50:e,t.style.fontSize=e+"px",i.a.Component.prototype.rem=parseFloat(e/37.5)}i.a.Component.prototype.$width=window.innerWidth,W(),window.addEventListener("resize",(function(){Object(T.a)(_,1e3),Object(T.a)(W,100)}));var z=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"box"},i.a.createElement(a.Suspense,{fallback:i.a.createElement(D,null)},i.a.createElement(h.a,null,i.a.createElement(f.a,{path:"/",component:I}),i.a.createElement(f.c,null,i.a.createElement(f.a,{path:"/songMenu/:id",component:B}),i.a.createElement(f.a,{path:"/singerDetails/:id",component:M}),i.a.createElement(f.a,{path:"/search",component:U})))),i.a.createElement(P,null))}}]),e}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(239);r.a.render(i.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},28:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return s}));var a="SET_MUC_DATA",i="SET_SEARCH_DATA",s="SET_API"},30:function(t,e,n){"use strict";var a=n(60),i=n(128),s=n.n(i),r=n(34),c=n(95),o=n(14),l=s.a.create({baseURL:"https://autumnfish.cn"});l.defaults.transformResponse=[function(t){return t}],l.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),l.interceptors.response.use((function(t){var e=JSON.parse(t.data),n=t.config.url.split("https://autumnfish.cn")[1];return n+=Object(o.b)(t.config.params),r.a.setApi.dispatch(Object(c.a)(Object(a.a)({},n,e))),e}),(function(t){return Promise.reject(t)})),e.a=l},34:function(t,e,n){"use strict";var a=n(29),i=n(63),s=n(60),r=n(28);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(n,!0).forEach((function(e){Object(s.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.b,u={musicUrl:Object(a.c)((function(t,e){switch(e.type){case r.b:return e.data;default:return t}}),l(Object(a.a)(i.a))),searchData:Object(a.c)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case r.c:return e.data;default:return t}}),l(Object(a.a)(i.a))),setApi:Object(a.c)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case r.a:var n=o({},t);return n=o({},n,{},e.data);default:return t}}),l(Object(a.a)(i.a)))};e.a=u},86:function(t,e,n){"use strict";e.a=function(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),i=2;i<n;i++)a[i-2]=arguments[i];t.itemID||(t.itemID=setTimeout((function(){clearInterval(t.itemID),t.itemID=null,t.apply(void 0,a)}),e))}},95:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return r}));var a=n(28),i=function(t){return{type:a.b,data:t}},s=function(t){return{type:a.c,data:t}},r=function(t){return{type:a.a,data:t}}},96:function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return c}));var a=n(30),i=n(14);function s(t){var e=t.cat,n=t.initial;return Object(i.a)((function(){return Object(a.a)({method:"get",url:"/artist/list",params:{cat:e,initial:n,t:Date.now()}})}),"/artist/list".concat(Object(i.b)({cat:e,initial:n})))}function r(t){var e=t.id;return Object(i.a)((function(){return Object(a.a)({method:"get",url:"/artists",params:{id:e,t:Date.now()}})}),"/artists".concat(Object(i.b)({id:e})))}function c(t){return Object(i.a)((function(){return Object(a.a)({method:"get",url:"/artist/album",params:{id:t,t:Date.now()}})}),"/artist/album".concat(Object(i.b)({id:t})))}}},[[138,1,2]]]);
//# sourceMappingURL=main.f5a68628.chunk.js.map