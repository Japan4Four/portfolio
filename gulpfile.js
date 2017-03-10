var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass',function(){
//compiling sass into assets folder
//* = grabbing everything within folder//
return gulp.src(['./source/scss/*.scss']) //takes the directory as the source
    // sass converts .scss files into css files
    .pipe(sass({ // pushes our source directory contents into a compressed file
      outputStyle:'compressed' //removes all spacing in our source content (minifies it)
    }))
    .pipe(gulp.dest('./assets/css')); // new destination for compressed source content
});
//WATCH
gulp.task('watch', function() {
  gulp.watch('./source/scss/*.scss', ['sass']);
});
gulp.task('default', ['sass','watch']); // 'default' is an already existant function in gulp that runs listed functions
