const del = require('del');
const gulp = require('gulp');
const less = require('gulp-less');
const babel = require('gulp-babel');
const debug = require('gulp-debug');
const concat = require('gulp-concat');
const copy = require('gulp-copy');
const through = require('through2');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const fileinclude = require('gulp-file-include');
const sass = require('gulp-sass');

const SRC = './src';
const BUILD = './build';
const PUBLIC = './public';
const paths = {
    build: {
        root: `${BUILD}/`,
        css: `${BUILD}/css/`,
        img: `${BUILD}/img/`,
        js: `${BUILD}/js/`,
        html: `${BUILD}/`
    },
    src: {
        scss: `${SRC}/scss/main.scss`,
        js: `${SRC}/js/index.js`,
        img: `${SRC}/img/**/*`,
        public: `${PUBLIC}/**/*`,
    },
    compileWatch: {
        scss: `${SRC}/scss/**/*.scss`,
        js: `${SRC}/js/**/*.js`,
        img: `${SRC}/img/**/*`,
        html: `${SRC}/html/*.html`,
    },
    reloadWatch: {
        css: `${BUILD}/**/*.css`,
        js: `${BUILD}/**/*.js`,
        img: `${BUILD}/img/**/*`,
        html: `${BUILD}/*.html`,
    },
};

const verify = () => {
    const write = (file, enc, cb) => {
        console.log('file', file.path);
        cb(null, file);
    };

    const end = cb => {
        console.log('done');
        cb();
    };

    return through({ objectMode: true }, write, end);
};

const styles = (paths, outputFilename, outputPath) => {
    return gulp
        .src(paths)
        .pipe(sass().on('error', sass.logError))
        .pipe(debug({ title: 'scss:' }))
        .pipe(concat(outputFilename))
        .pipe(gulp.dest(outputPath));
};

const scripts = (paths, outputFilename, outputPath) => {
    return gulp
        .src(paths)
        .pipe(debug({ title: 'js:' }))
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(concat(outputFilename))
        .pipe(debug({ title: 'jsconcat:' }))
        .pipe(gulp.dest(outputPath));
};

gulp.task('clean', () => del([paths.build.root], { dot: true }));

gulp.task('copy', () => {
    return gulp
        .src(paths.src.public)
        .pipe(copy(paths.build.root, { prefix: 1 }))
        .pipe(verify());
});

gulp.task('styles', callback => {
    styles([paths.src.scss], 'styles.css', paths.build.css);
    callback();
});

gulp.task('scripts', callback => {
    scripts([paths.src.js], 'index.js', paths.build.js, false);
    callback();
});

gulp.task('img', () => {
    return gulp.src(paths.src.img, { since: gulp.lastRun('img') }).pipe(gulp.dest(paths.build.img));
});

gulp.task('fileinclude', callback => {
    gulp.src([SRC + '/html/index.html'])
      .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
      }))
      .pipe(gulp.dest(BUILD));

    callback();
});

gulp.task('build', gulp.series('clean', 'fileinclude', gulp.parallel('copy', 'styles', 'img', 'scripts')));

gulp.task('watch', () => {
    gulp.watch(paths.compileWatch.html, gulp.series('fileinclude'));
    gulp.watch(paths.compileWatch.scss, gulp.series('styles'));
    gulp.watch(paths.compileWatch.js, gulp.series('scripts'));
    gulp.watch(paths.compileWatch.img, gulp.series('img'));
});

gulp.task('serve', () => {
    browserSync.init({
        server: {
            baseDir: './build/',
        },
    });

    browserSync.watch(paths.reloadWatch.css).on('change', reload);
    browserSync.watch(paths.reloadWatch.js).on('change', reload);
    browserSync.watch(paths.reloadWatch.img).on('change', reload);
    browserSync.watch(paths.reloadWatch.html).on('change', reload);
});

gulp.task('default', gulp.series('build', gulp.parallel('watch', 'serve')));
