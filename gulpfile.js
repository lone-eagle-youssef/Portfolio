const gulp = require('gulp');
const livereload = require('gulp-livereload');
const htmlmin = require('gulp-htmlmin');
const { parallel } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const notify = require('gulp-notify');
const zip = require('gulp-zip');
const minify = require('gulp-minify');



// HTML Task
function html() {
  return gulp.src('src/index.pug')
    .pipe(sourcemaps.init())
    .pipe(pug({pretty: true}))
    // .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build'))
    .pipe(notify("HTML Task is Done!"))
    .pipe(livereload());
}

// CSS Task
function css() {
  return gulp.src('src/css/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}  ))
    .pipe(autoprefixer("last 2 versions"))
    // .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/css'))
    .pipe(notify("CSS Task is Done!"))
    .pipe(livereload());
}

// Scripts Task
function scripts() {
  return gulp.src(['src/js/*.js', '!src/js/bootstrap.bundle.min.js'])
    .pipe(sourcemaps.init())
    .pipe(concat("main.js"))
    .pipe(minify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/js/'))
    .pipe(notify("JS Task is Done!"))
    .pipe(livereload());
}

// Compress Build Files
gulp.task("compressb", () => {
  return gulp.src('build/**/*.*')
    .pipe(zip('websitebuild.zip'))
    .pipe(gulp.dest('.'))
    .pipe(notify("Files has been Compressed!"))
})

// Compress src Files
gulp.task("compresss", () => {
  return gulp.src('src/**/*.*')
    .pipe(zip('websitesrc.zip'))
    .pipe(gulp.dest('.'))
    .pipe(notify("Files has been Compressed!"))
})

// Move Bootstrap 
gulp.task("movebootstrap", () => {
  return gulp.src('src/js/bootstrap.bundle.min.js')
    .pipe(gulp.dest("build/js/"))
})

// Move Media
gulp.task("movemedia", () => {
  return gulp.src("src/media/**/*.*")
    .pipe(gulp.dest("build/media"))
})

// Move Images
gulp.task("moveimgs", () => {
  return gulp.src("src/imgs/*.*")
    .pipe(gulp.dest("build/imgs"))
})

exports.default = () => {
  require("./server.js");
  
  gulp.watch(['src/**/*.pug'], html);
  gulp.watch(['src/css/**/*.scss'], css);
  gulp.watch(['src/css/*.scss'], css);
  gulp.watch(['src/js/*.js'], scripts);
  livereload.listen();
  // gulp.watch(['src/*html'], parallel(minifyhtml, movecss))
  // gulp.watch(['src/*html'], parallel(minifyhtml, movecss))
  // gulp.watch(['src/*html'], parallel(minifyhtml, movecss))
}