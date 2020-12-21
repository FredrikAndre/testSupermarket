let gulp = require("gulp");
let sass = require("gulp-sass");
let csso = require("gulp-csso");
let rename = require("gulp-rename");
let minify = require("gulp-minify");

function scssTask() {
    return gulp
    .src("scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("css"))
    .pipe(csso())
    .pipe(rename({ suffix: ".min" })) // remname file with .min suffix
    .pipe(gulp.dest("dist/css")); // send minimised css to dist folder.
}

// function scripts() {​​​​
//     return gulp
//     .src("js/*.js")
//     .pipe(minify({​​​​ noSource: true }​​​​)) // minimise js file
//     .pipe(gulp.dest("dist/js")); // send minimised js files to dist folder. 
// }​​​​

function watch() {
    gulp.watch("scss/**/*.scss", scssTask)
    // gulp.watch("js/*.js", scripts)
}

gulp.task("default", gulp.series(scssTask, watch));