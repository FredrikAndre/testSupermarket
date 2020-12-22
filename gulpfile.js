let gulp = require("gulp");
let sass = require("gulp-sass");
let csso = require("gulp-csso");
let rename = require("gulp-rename");

function scssTask() {
    return gulp
    .src("scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("css"))
    .pipe(csso())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("dist/css"));
}

function watch() {
    gulp.watch("scss/**/*.scss", scssTask)
}

gulp.task("default", gulp.series(scssTask, watch));