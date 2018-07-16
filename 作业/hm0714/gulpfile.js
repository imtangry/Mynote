// 引入gulp
const gulp =require('gulp');
// 压缩css的模块
const css = require('gulp-cssnano');
// 合并js的模块
const js = require('gulp-concat');
// 压缩js的模块
const ug = require('gulp-uglify');
// 压缩HTML的模块
const html = require('gulp-htmlmin');

gulp.task('css',function () {
    gulp.src('./css/*.css').pipe(css()).pipe(gulp.dest('./src/css'));
});
gulp.task('js',function () {
    gulp.src('./js/*.js').pipe(js('./app.js')).pipe(ug()).pipe(gulp.dest('./src/js'));
});
gulp.task('html',function () {
    gulp.src('./*.html').pipe(html({collapseWhitespace:true})).pipe(gulp.dest('./src'));
});
gulp.task('watchcss',function(){
    gulp.watch('./css/*.css',['css']);
})
