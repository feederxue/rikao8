var gulp = require('gulp');
// console.log(gulp);
var server = require('gulp-webserver');

gulp.task('server', function() {
    return gulp.src('./src')
        .pipe(server({
            port: 9000,
            host: 'localhost',
            open: true,
            fallback: 'index.html'
        }))
})