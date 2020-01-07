'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

 
sass.compiler = require('node-sass');
 //sass
gulp.task('sass', function () {
  return gulp.src('./sass/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    //autoprefixer
    .pipe(autoprefixer({cascade: false}))
    .pipe(gulp.dest('./css'));
    
});
//pug


gulp.task('default', function() {
    gulp.watch('./sass/*.sass', gulp.series('sass'));
});

 
