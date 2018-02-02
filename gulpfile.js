//引入guld
//模块：函数|对象

//引入本地安装的gulp
var gulp = require('gulp');//得到一个对象
var sass = require('gulp-sass');

//编译sass文件
// gulp的使用——gulp api
// 相关知识点：
// .. :上层目录
// .  :当前目录

//创建一个gulp任务：编译sass
//compileSass为任务名
gulp.task('compileSass',function(){
    //查找sass文件
    gulp.src('./src/sass/*.scss')//得到文件流（文件在内存中的状态）

    //通过管道传输，编译scss
    .pipe(sass({outputStyle:'compact'}))         //编译后的文件流css

    //输出到硬盘
    .pipe(gulp.dest('./src/css/'))
})

//创建文件监听任务： 文件有修改，则自动编译
gulp.task('jtSass',function(){
    //当文件有修改，则执行compileSass任务
    gulp.watch('./src/sass/*.scss',['compileSass'])
})

//自动刷新页面
var browserSync =  require('browser-sync');

gulp.task('server',function(){
    //创建一个静态服务器
    browserSync({
        server:'./src'
    })
})