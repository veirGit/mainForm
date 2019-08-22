module.exports = function() {
    $.gulp.task('img:dev', () => {
        return $.gulp.src('./dev/img/**/*.{png,jpg,gif}')
            .pipe($.gulp.dest('./build/img/'));
    });

    $.gulp.task('img:build', () => {
        return $.gulp.src('./dev/img/**/*.{png,jpg,gif}')
            // .pipe($.gp.tinypng('xG8kZKOO94WDThO85mKLOtnGDZj5ZxrJ'))
            .pipe($.gulp.dest('./build/img/'));
    });


    $.gulp.task('svg:copy', () => {
        return $.gulp.src('./dev/img/general/*.svg')
            .pipe($.gulp.dest('./build/img/general/'));
    });
};
