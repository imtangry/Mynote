var Carousel=function(t){window.addEventListener("focus",function(){v(1,500)},!1),window.addEventListener("blur",function(){for(console.log("執行清除定時器方法");0<x.length;)clearInterval(x.pop())},!1);var n,e,a,s=t.getElementsByTagName("ul"),r=s[0],o=s[1],l=r.getElementsByTagName("li"),i=o.getElementsByTagName("li"),p=l.length,f=t.offsetWidth,m=0,u=p-1,c=1,x=[],y=[p-1,0,1];function v(t,n){for(console.log("添加了一个定时器");0<x.length;)clearInterval(x.pop());x.push(setInterval(function(){g(t,n)},2e3))}function g(t,n){l[y[1]].style.transitionDuration=n+"ms",l[y[1]].style.transform="translate("+-f*t+"px,0px)";var e=t+1,a=e+2*-t;l[y[e]].style.transitionDuration=n+"ms",l[y[e]].style.transform="translate(0px,0px)",y[a]=y[1],y[1]=y[e],i[y[a]].classList.remove("p_active"),i[y[1]].classList.add("p_active"),y[e]=y[e]+t,-1===y[e]&&(y[e]=p-1),y[e]===p&&(y[e]=0),l[y[e]].style.transitionDuration="0ms",l[y[e]].style.transform="translate("+f*t+"px,0px)",u=y[0],m=y[1],c=y[2]}!function(){for(var t=0;t<p;t++)l[t].style.left=-t*f+"px",l[t].style.transitionDuration="0ms",l[t].style.transform="translate("+-f+"px,0px)";l[u].style.transform="translate("+-f+"px,0px)",l[m].style.transform="translate(0px,0px)",l[c].style.transform="translate("+f+"px,0px)"}(),v(1,500),t.addEventListener("touchstart",function(t){for(n=t.targetTouches[0].clientX,t.stopPropagation();0<x.length;)clearInterval(x.pop())}),t.addEventListener("touchmove",function(t){t.preventDefault(),e=t.targetTouches[0].clientX,a=e-n,l[u].style.transitionDuration="0ms",l[m].style.transitionDuration="0ms",l[c].style.transitionDuration="0ms",l[u].style.transform="translate("+(-f+a)+"px,0px)",l[m].style.transform="translate("+a+"px,0px)",l[c].style.transform="translate("+(f+a)+"px,0px)",t.stopPropagation()}),t.addEventListener("touchend",function(t){Math.abs(a)>f/4?g(0<=a?-1:1,300):(l[u].style.transform="translate("+-f+"px,0px)",l[m].style.transform="translate(0px,0px)",l[c].style.transform="translate("+f+"px,0px)"),v(1,500),t.stopPropagation()})};