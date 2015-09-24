var Commands = require('./lib/commands');

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var util = require('gulp-util');

require('gulp-release-it')(gulp);

gulp.task('test', function () {
    return gulp.src(['test/**/*.js'], {read: false})
        .pipe(mocha({reporter: 'spec'}))
        .on('error', util.log);
});


