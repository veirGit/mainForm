module.exports = function() {
    $.gulp.task('libsJS:dev', () => {
        return $.gulp.src([
            'node_modules/svg4everybody/dist/svg4everybody.min.js',
            'node_modules/slick-carousel/slick/slick.min.js',
            'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
            'node_modules/jquery-gototop-plugin/jquery.gototop.min.js'
        ])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('./build/static/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('libsJS:build', () => {
        return $.gulp.src(['node_modules/svg4everybody/dist/svg4everybody.min.js',
            'node_modules/slick-carousel/slick/slick.min.js',
            'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
            'node_modules/jquery-gototop-plugin/jquery.gototop.min.js'])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gp.uglifyjs())
            .pipe($.gulp.dest('./build/static/js/'));
    });

    $.gulp.task('js:copy', () => {
        return $.gulp.src(['./dev/static/js/*.js',
                           '!./dev/static/js/libs.min.js'])
            .pipe($.gulp.dest('./build/static/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};
