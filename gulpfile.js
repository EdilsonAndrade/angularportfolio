var gulp = require("gulp"),
    browserify = require("browserify"),
    source = require("vinyl-source-stream"),
    buffer = require("vinyl-buffer"),
    tslint = require("gulp-tslint"),
    tsc = require("gulp-typescript"),
    sourcemaps = require("gulp-sourcemaps"),
    uglify = require("gulp-uglify"),
    runSequence = require("run-sequence"),
    mocha = require("gulp-mocha"),
    istanbul = require("gulp-istanbul"),
    gulpLess = require("gulp-less"),
    path = require("path"),
    publish = require('gulp-publish'),
    useref = require('gulp-useref'),
    clean = require("gulp-clean"),
    file = require("gulp-file"),
    image = require("gulp-image"),
    browserSync = require('browser-sync').create();

var ghPages = require("gulp-gh-pages");
var config = require("./gulp.config")();


gulp.task('deploy',  function () {
    return gulp.src(config.deploy)
        .pipe(ghPages([{
            remoteUrl: "git@gh:EdilsonAndrade/angularportfolio.git"
        }
        ]));
});

gulp.task("less", ["clean-styles"], function () {
    return gulp.src(config.less)
        .pipe(gulpLess())
        .pipe(gulp.dest(path.join(config.dirName, "css")));

});

gulp.task("clean-styles", function () {
    
    return cleanWatch(config.css);

});

gulp.task("lint", function () {

    var config = { formatter: "verbose", emitError: (process.env.CI) ? true : false };

    return gulp.src([
        "app/**/**.ts",
        "test/**/**.test.ts"
    ])
        .pipe(tslint(config))
        .pipe(tslint.report());

});

var tsProject = tsc.createProject("tsconfig.json");
gulp.task("default", ["build-app"]);
gulp.task("clean", function () {
        return cleanWatch("./dist");
});
gulp.task("publish", ['clean'], function () {

    gulp.src(
        config.folders
    ).pipe(publish())
        .pipe(gulp.dest("./dist/app"));

    gulp.src(
        config.foldersNodeModule
    ).pipe(publish())
    .pipe(gulp.dest("./dist/node_modules"));

    gulp.src(
        config.rootIndex
    ).pipe(publish())
    .pipe(gulp.dest("./dist/"));

    gulp.src(
        config.bootstrapFolder
    ).pipe(publish())
    .pipe(gulp.dest("./dist/node_modules/bootstrap"));

    gulp.src(config.folderImages)
    .pipe(image({
        pngquant: false,
      optipng: false,
      zopflipng: false,
      jpegRecompress: false,
      jpegoptim: false,
      mozjpeg: false,
      guetzli: false,
      gifsicle: false,
      svgo: false,
      concurrent: 10
    }))
    .pipe(gulp.dest("./dist/app/assets/images"));
    //create tje .nojekyll empty file in root of dist to put in the gh-pages
    //this is need for gh-pages work with angularjs and recognize the node_modules and vendor folders
    return  file(".nojekyll","")
    .pipe(gulp.dest("./dist"));

});


gulp.task("build-app", ["lint", "less", "bundle"], function () {
    return gulp.src([
        "app/**/**.ts",
        "typings/main.d.ts/"
    ])
        .pipe(tsProject())
        .js.pipe(gulp.dest("app/"));
});


function cleanWatch(path){
     return gulp.src(path)
        .pipe(clean());
}
gulp.task("bundle", function () {

    var libraryName = "myapp";
    var mainTsFilePath = "./app/app.js";
    var outputFolder = "dist/";
    var outputFileName = libraryName + ".min.js";

    var bundler = browserify({
        debug: true,
        standalone: libraryName
    });

    return bundler.add(mainTsFilePath)
        .bundle()
        .pipe(source(outputFileName))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(outputFolder));
});

gulp.task("watch",  function () {

    browserSync.init({
        server: "."
    });
    
    gulp.watch(["app/**/**.ts", "test/**/*.ts", config.less], ["default", "less"]);
    gulp.watch("**/**.html").on('change', browserSync.reload);
});

gulp.task("istanbul:hook", function () {
    return gulp.src(['app/**/*.js'])
        // Covering files
        .pipe(istanbul())
        // Force `require` to return covered files
        .pipe(istanbul.hookRequire());
});

gulp.task("test", ["istanbul:hook"], function () {
    return gulp.src('test/**/*.test.js')
        .pipe(mocha({ ui: 'bdd' }))
        .pipe(istanbul.writeReports());
});