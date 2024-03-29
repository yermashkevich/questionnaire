const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const rename = require('gulp-rename');


function watch(){
	browserSync.init({
        server: {
            baseDir: "./"
        }
    });
	gulp.watch('scss/**/*.scss', styles);
	gulp.watch('./*.html').on('change', browserSync.reload);
}

function styles(){
	return gulp.src('scss/**/*.scss')
			.pipe(plumber())
			.pipe(sass())
			.pipe(autoprefixer({
	            browsers: ['last 2 versions'],
	            cascade: false
        	}))
			.pipe(gulp.dest('css/'))
			.pipe(browserSync.stream());
}

gulp.task('watch', watch);
