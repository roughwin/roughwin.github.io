const minify = require("gulp-minifier");
const gulp = require("gulp")
gulp.task('mini', function() {
    gulp.src("./tracker/tracker.js")
        .pipe(minify({
            minify: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
            minifyJS: true,
            minifyCSS: true,
        }))
        .pipe(gulp.dest("./tracker/mini"))
})