var gulp = require("gulp");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');
var Builder =require('systemjs-builder');


var paths = {
  scripts: ['./node_modules/core-js/client/shim.min.js', './node_modules/systemjs/dist/system.js'],
  destino: './bundles'
};


var config = {
    baseURL: './',
    map: {
        "jquery": "./node_modules/jquery/dist/jquery.min.js",
        "css": "./node_modules/systemjs-plugin-css/css.js",
        "bootstrap": "./node_modules/bootstrap/dist"
    },
    meta: {
        "*.css": { loader: "css" }
    },
    packages: {
        "./": {
            defaultExtension: "js"
        },
        "app": {
            defaultExtension: "js",
            main:"main"
        },
        "bootstrap": {"main": "js/bootstrap.min.js"}
    }
};

gulp.task('clean', function() {
  return del(paths.destino);
});

gulp.task('bundles',['clean'], function() {
   gulp.src(paths.scripts)
            .pipe(uglify())
            .pipe(concat('polyfills.min.js'))
            .pipe(gulp.dest(paths.destino));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['bundles']);
});


gulp.task('bundle-tareas',function(cb){

  var builder = new Builder(config);

  builder.bundle('./app/main - ./app/vendor','./bundles/tareas-bundle.js',{minify: false, sourceMaps: false})
        .then(function(){cb();})
        .catch(function(err){cb(err);});
});

gulp.task('bundle-vendor',function(cb){

  var builder = new Builder(config);
  builder.bundle('./app/vendor','./bundles/vendor-bundle.js',{minify: false, sourceMaps: false})
        .then(function(){cb();})
        .catch(function(err){cb(err);});
});

gulp.task('default',['watch', 'bundles']);