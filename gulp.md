```javascript
// 引入gulp
const gulp =require('gulp')
// 编译less的模块
const less =require('gulp-less')
// 压缩less的模块
const css = require('gulp-cssnano')
// 合并js的模块
const js = require('gulp-concat')
// 压缩js的模块
const ug = require('gulp-uglify')
// 压缩HTML的模块
const html = require('gulp-htmlmin')

gulp.task('myjob',function () {
    console.log("gulp测试测试测试");
})

gulp.task('copy',function () {
    gulp.src('./src/index.html').pipe(gulp.dest('./dist'));
})

gulp.task('less',function () {
    gulp.src('./src/css/*.less').pipe(less()).pipe(gulp.dest('./dist/css'));
})

gulp.task('css',function () {
    gulp.src('./dist/css/*.css').pipe(css()).pipe(gulp.dest('./dist/css'));
})
gulp.task('js',function () {
    gulp.src('./src/js/*.js').pipe(js('main.js')).pipe(ug()).pipe(gulp.dest('./dist/js'));
})
gulp.task('html',function () {
    gulp.src('./src/*.html').pipe(html({collapseWhitespace:true})).pipe(gulp.dest('./dist/html'));
})
```

node模块：http,url
```javascript
// 处理http请求的模块
const http = require('http');
// 解析request中的参数的模块
const url = require('url');
var server =http.createServer(function (req,resp) {
    if(req.url=='/favicon.ico'){
        return;
    }
    console.log('url路径：'+req.url);
    // 设置响应头
    resp.writeHeader(200,{"content-type":"text/html;charset=UTF-8"});
    // 写出信息
    resp.write("<h1>node服务器</h1>");
    
    // url.parse()第二个参数为true，query属性会生成一个对象，如果为false,则返回url对象上的query属性会是一个未解析，未解码的字符串，默认为false
    var obj = url.parse(req.url);
    // pathname会去除url中的参数
    console.log("pathname:"+obj.pathname);
    console.log(obj.query);
    // 响应结束,防止浏览器转圈圈
    resp.end("connected");
});
server.listen(80,'127.0.0.1');
```