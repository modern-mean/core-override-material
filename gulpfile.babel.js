'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import coveralls from 'gulp-coveralls';
import debug from 'gulp-debug';
import eslint from 'gulp-eslint';
import templateCache from 'gulp-angular-templatecache';
import del from 'del';
import { Server as KarmaServer } from 'karma';
import istanbul from 'gulp-istanbul';
import mocha from 'gulp-mocha';

var isparta = require('isparta');

function clean() {
  return del([
    './dist',
    'tests/.coverage'
  ]);
}
clean.displayName = 'clean';
gulp.task(clean);

function lint() {
  return gulp.src(['./client/**/*.js', './test/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}
lint.displayName = 'lint';

function templates() {
  return gulp.src(['./client/**/*.html'])
    .pipe(templateCache({
      root: 'core-override-material',
      module: 'override'
    }))
    .pipe(gulp.dest('./dist/client'));
}
templates.displayName = 'templates';
gulp.task(templates);

function client() {
  return gulp.src(['./client/**/*.module.js', './client/**/!(*module).js'])
    .pipe(concat('application.js'))
    .pipe(gulp.dest('./dist/client'));
}
client.displayName = 'client';
gulp.task(client);


function testClientSingle(done) {
  process.env.NODE_ENV = 'test';
  new KarmaServer({
    configFile: process.cwd() + '/tests/karma.conf.js',
    singleRun: true
  }, done).start();
}
testClientSingle.displayName = 'test:client';
gulp.task(testClientSingle);

function sendCoveralls() {
  return gulp.src('tests/.coverage/**/lcov.info')
    .pipe(debug())
    .pipe(concat('lcov.info'))
    .pipe(coveralls());
}
sendCoveralls.displayName = 'coveralls';
gulp.task(sendCoveralls);


//Gulp Default
var defaultTask = gulp.series(clean, gulp.parallel(templates, client));
defaultTask.displayName = 'default';
gulp.task(defaultTask);

//Lint test
var lint = gulp.series(lint);
lint.displayName = 'lint';
gulp.task(lint);

//Gulp Test
var testTask = gulp.series(clean, defaultTask, lint, testClientSingle);
testTask.displayName = 'test';
gulp.task(testTask);
