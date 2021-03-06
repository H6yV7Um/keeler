/**
 * @file gulpfile
 * @test
 */
const env = process.env.NODE_ENV || 'production';
console.log(env);

const webpackConfig = require('./webpack.config.js');
const gulp = require('gulp');
const webpack = require('webpack-stream');
const wk = require('webpack');
const sass = require('gulp-sass');

gulp.task('page', () => {
    gulp.src('src/page/**/*.*')
        .pipe(gulp.dest('./dist/'))
});

gulp.task('sass', () =>
    gulp.src('./src/scss/**/{*.scss,!_*.scss}')
    .pipe(sass({
        outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/static/css'))
);


if (env === 'development') {
    gulp.watch('src/page/**/*.*', ['page']);
    gulp.watch('src/scss/**/{*.scss,!_*.scss}', ['sass']);
}

gulp.task('default', ['page', 'sass']);