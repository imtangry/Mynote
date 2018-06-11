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