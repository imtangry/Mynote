var index_hot = [
        {desc: "TOP 1 迷人咬唇系列唇彩", img_level: "./img/t1.png", img_goods: "./img/i1.jpg"},
        {desc: "TOP 2 吹弹可破不可思议BB霜", img_level: "./img/t2.png", img_goods: "./img/i4.jpg"},
        {desc: "TOP 3 彩虹系列诱人七色眼影", img_level: "./img/t3.png", img_goods: "./img/i3.jpg"}
    ],
    index_sales = [{title: "迷人睫毛膏魅力眼线膏", img: "./img/s1.jpg", link: "#"},
        {title: "诱人唇彩、肌活原生液", img: "./img/s2.jpg", link: "#"},
        {title: "年轻无瑕：持妆粉底液、小棕瓶修护精华", img: "./img/s3.jpg", link: "#"},
        {title: "眼部修复：肌透眼部精华霜、小棕瓶护眼精华", img: "./img/s2.jpg", link: "#"}],
    index_tutorial = [{title: "", video_src: "img/ex.mp4", img_src: "img/v.jpg"},
        {title: "", video_src: "img/ex.mp4", img_src: "img/v.jpg"},
        {title: "", video_src: "img/ex.mp4", img_src: "img/v.jpg"}];
// 全局注册
Vue.component('index_content_header', {
    props: ['start', 'other', 'flag'],
    template: "<div class='header_c'>" +
    "<div class='title'><span class='big_font'>{{start}}</span>{{other}}</div>" +
    "<a href='#' v-if='flag'><i class='fa fa-chevron-right'></i><i class='fa fa-chevron-right'></i><span>more</span></a>" +
    "</div>"
});
Vue.component('h5video', {
    props: ['width', 'height', "v_src", "i_src"],
    template: "<div class=\"item_tutorial\">\n" +
    "                    <video muted :src=\"v_src\" :width=\"width\" :height=\"height\" :poster=\"i_src\" controls=\"controls\">\n" +
    "                        your browser does not support the video tag\n" +
    "                    </video>\n" +
    "                </div>"
});
var app_index = new Vue({
    el: "#index_content",
    data: {
        index_hot: index_hot,
        index_sales: index_sales,
        index_tutorial: index_tutorial
    }
});