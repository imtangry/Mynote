var Carousel=function(t){window.addEventListener("focus",function(){f(1,500)},!1),window.addEventListener("blur",function(){for(console.log("執行清除定時器方法");0<v.length;)clearInterval(v.pop())},!1);var e,s,n,i=t.getElementsByTagName("ul"),a=i[0],r=i[1],o=a.getElementsByTagName("li"),l=r.getElementsByTagName("li"),p=o.length,g=t.offsetWidth,m=0,c=p-1,d=1,v=[],x=[p-1,0,1];function f(t,e){for(console.log("添加了一个定时器");0<v.length;)clearInterval(v.pop());v.push(setInterval(function(){u(t,e)},2e3))}function u(t,e){o[x[1]].style.transitionDuration=e+"ms",o[x[1]].style.transform="translate("+-g*t+"px,0px)";var s=t+1,n=s+2*-t;o[x[s]].style.transitionDuration=e+"ms",o[x[s]].style.transform="translate(0px,0px)",x[n]=x[1],x[1]=x[s],l[x[n]].classList.remove("p_active"),l[x[1]].classList.add("p_active"),x[s]=x[s]+t,-1===x[s]&&(x[s]=p-1),x[s]===p&&(x[s]=0),o[x[s]].style.transitionDuration="0ms",o[x[s]].style.transform="translate("+g*t+"px,0px)",c=x[0],m=x[1],d=x[2]}!function(){for(var t=0;t<p;t++)o[t].style.left=-t*g+"px",o[t].style.transitionDuration="0ms",o[t].style.transform="translate("+-g+"px,0px)";o[c].style.transform="translate("+-g+"px,0px)",o[m].style.transform="translate(0px,0px)",o[d].style.transform="translate("+g+"px,0px)"}(),f(1,500),t.addEventListener("touchstart",function(t){for(e=t.targetTouches[0].clientX,t.stopPropagation();0<v.length;)clearInterval(v.pop())}),t.addEventListener("touchmove",function(t){t.preventDefault(),s=t.targetTouches[0].clientX,n=s-e,o[c].style.transitionDuration="0ms",o[m].style.transitionDuration="0ms",o[d].style.transitionDuration="0ms",o[c].style.transform="translate("+(-g+n)+"px,0px)",o[m].style.transform="translate("+n+"px,0px)",o[d].style.transform="translate("+(g+n)+"px,0px)",t.stopPropagation()}),t.addEventListener("touchend",function(t){Math.abs(n)>g/4?u(0<=n?-1:1,300):(o[c].style.transform="translate("+-g+"px,0px)",o[m].style.transform="translate(0px,0px)",o[d].style.transform="translate("+g+"px,0px)"),f(1,500),t.stopPropagation()})},index_hot=[{desc:"TOP 1 迷人咬唇系列唇彩",img_level:"./img/t1.png",img_goods:"./img/i1.jpg"},{desc:"TOP 2 吹弹可破不可思议BB霜",img_level:"./img/t2.png",img_goods:"./img/i4.jpg"},{desc:"TOP 3 彩虹系列诱人七色眼影",img_level:"./img/t3.png",img_goods:"./img/i3.jpg"}],index_sales=[{title:"迷人睫毛膏魅力眼线膏",img:"./img/s1.jpg",link:"#"},{title:"诱人唇彩、肌活原生液",img:"./img/s2.jpg",link:"#"},{title:"年轻无瑕：持妆粉底液、小棕瓶修护精华",img:"./img/s3.jpg",link:"#"},{title:"眼部修复：肌透眼部精华霜、小棕瓶护眼精华",img:"./img/s2.jpg",link:"#"}],index_tutorial=[{title:"",video_src:"img/ex.mp4",img_src:"img/v.jpg"},{title:"",video_src:"img/ex.mp4",img_src:"img/v.jpg"},{title:"",video_src:"img/ex.mp4",img_src:"img/v.jpg"}];Vue.component("index_content_header",{props:["start","other","flag"],template:"<div class='header_c'><div class='title'><span class='big_font'>{{start}}</span>{{other}}</div><a href='#' v-if='flag'><i class='fa fa-chevron-right'></i><i class='fa fa-chevron-right'></i><span>more</span></a></div>"}),Vue.component("h5video",{props:["width","height","v_src","i_src"],template:'<div class="item_tutorial">\n                    <video muted :src="v_src" :width="width" :height="height" :poster="i_src" controls="controls">\n                        your browser does not support the video tag\n                    </video>\n                </div>'});var app_index=new Vue({el:"#index_content",data:{index_hot:index_hot,index_sales:index_sales,index_tutorial:index_tutorial}});