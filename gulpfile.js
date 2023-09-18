var gulp = require('gulp')
var browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
var rename = require("gulp-rename");

gulp.task('sass', function(done) {
    gulp.src("sass/main.sass")
      .pipe( sass().on( 'error', function( error )
      
        {
          console.log( error );
        } )
      )
      .pipe(sass({
        outputStyle: 'compressed' 
    }))
    .pipe(rename('main.min.css'))
      .pipe( gulp.dest( 'css/' ) )
      .pipe(gulp.dest("css"))
      .pipe(browserSync.stream());


    done();
});

gulp.task('serve', function(done) {

    browserSync.init({
        server: ""
    });

    gulp.watch("sass/**/*.sass", gulp.series('sass'));
    gulp.watch("*.html").on('change', () => {
        browserSync.reload();
        done();
    });


    done();
});
gulp.task('default', gulp.series('sass', 'serve'));
