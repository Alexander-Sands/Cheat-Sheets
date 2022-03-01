// ========================================================================================== //
// --------------------------         Start Tutorials Gulp         -------------------------- //
// ========================================================================================== //
// Before Starting : Install Node.js
// -------------------------------------
// Command Line Information
// ------------------------------------
// (--help = -h),      (--version = -v),   (--tasks = -T), 
// (install = i),      (uninstall),        (--global = -g)
// (--save),           (--save-exact),     (--save-exact)

// node -h
// npm -h
// npx -h
// ruby -h
// gem -h
// gulp -h
// pug -h
// sass -h 

// node -v 
// npm -v
// npx -v
// ruby -v
// gem -v
// gulp -v
// pug -V
// sass -v 

// gulp -T 

// npm init
// ----------------------------- //                  
// = npm init -OR- npm init -y   //                                        
// ----------------------------- //                                
// Allarm                        //                                      
// 1.0                           //                                          
// My Gulp Tutorials             //                                      
// index.js                      //                                          
// Alexander Sands               //                                               
// ----------------------------- //  
// ========================================================================================== //
// Install: Gulp
// ------------------------
// npm i gulp -g
// npm i --save-dev gulp || npm i gulp@3.9.1 --save
// npm install --global gulp-cli
// ========================================================================================== //
// Name File: gulpfile.js
// ------------------------
// ========================================================================================== //
// Gulp: task, src, dest, pipe, series, parallel
// ----------------------------------------------------
// ========================================================================================== //
// Gulp 3.0
// -------------------------
// const gulp = require('gulp');
const {task, series} = require('gulp');

task('SayHello', function () {
    console.log('Hello World!');
});

// Commond: >>> gulp SayHello
// ========================================================================================== //
// Gulp 4.0
// -------------------------
// const gulp = require('gulp');
const {task} = require('gulp');

task('SayHello', function (cb) {
  console.log('Hello World!');
  cb();  
});

// Commond: >>> gulp SayHello
// ------------------------- //
const SayHello = (cb) => {
  console.log('Hello World!');
  cb();
}

// exports.SayHello = SayHello;

// Commond: >>> gulp SayHello 
// ------------------------- //
const SayHello1 = () => {
  return console.log('Hello World! 1');
}
const SayHello2 = () => {
  return console.log('Hello World! 1');
}

// exports.Hello2 = SayHello1;
// exports.Hello1 = SayHello2;

// exports.SayHello1 = SayHello1;
// exports.SayHello2 = SayHello2;

module.exports = {
  SayHello1,
  SayHello2
}

// Commond: >>> gulp Hello1
// Commond: >>> gulp SayHello1 
// ========================================================================================== //
// Default Exports
// ------------------------- //
const {task, series, parallel} = require('gulp');

task('SayHello', function (cb) {
  console.log('Hello World!');
  cb();  
});

task('default', series('SayHello'));

// Commond: >>> gulp
// ------------------------- //
const {series, parallel} = require('gulp');

const SayHello1 = () => {
  return console.log('Hello World! 1');
}
const SayHello2 = () => {
  return console.log('Hello World! 2');
}
const SayHello3 = () => {
  return console.log('Hello World! 3');
}

// exports.default = parallel(SayHello2, SayHello3);
// exports.default = series(SayHello2, SayHello3);

module.exports = {
  SayHello1,
  SayHello2,
  default: series(SayHello2, SayHello3)
}

// Commond: >>> gulp SayHello1 
// Commond: >>> gulp SayHello2 
// Commond: >>> gulp  
// ========================================================================================== //
// Gulp - Task - File Transfer
// ----------------------------------
// const gulp = require('gulp');
const {task, src, dest} = require('gulp');

task('TransferFile', function (cb) {
  // gulp.src('src/*.*').pipe(gulp.dest('dist/'));
  src(['src/**/*.html', 'src/**/*.css']).pipe(dest('dist/'));
  cb();  
});
// ------------------------- //
const TransferFile = (cb) => {
  src(['src/*.html', 'src/*.css']).pipe(dest('dist/'));
  cb();
}
exports.TransferFile = TransferFile;
// ========================================================================================== //
// Gulp Watch
// -------------------------------------------------
const {task, watch} = require('gulp');

const Wacher = (cb) => {
  // static-server (server.js)
  require('./server.js');
  // watch('src/*.html', ["TaskHTML"]); // Gulp 3.0
  // watch('src/**/*.css', ["TaskCSS, TaskCSS2"]); // Gulp 3.0
  watch(['src/**/*.html', 'src/**/*.pug'], series('html-task', 'pug-task'));
  watch('src/*.+(html|pug)', series('html-task', 'pug-task'));
  watch(['src/**/Testing-Tools/*', '!src/**/Testing-Tools/php-file'], series("testing-tools")); 
  cb();
}

task('default', series(Wacher));

// Commond : gulp
// ========================================================================================== //
// ---------------------------------- Install Plugins --------------------------------------//
// ========================================================================================== //
// Node.js - Plugins
// ------------------------------
// npm i --save-dev cli-color
  // -OR-
  // npm i --save-dev gulp-util
// npm i --save-dev node-notifier
// npm i --save-dev del
// npm i --save-dev cross-env

// Gulp.js - Plugins for General
// ------------------------------
// npm i --save-dev gulp-plumber
// npm i --save-dev gulp-sourcemaps
// npm i --save-dev gulp-if
// npm i --save-dev gulp-notify 
// npm i --save-dev gulp-size
// npm i --save-dev gulp-concat
// npm i --save-dev gulp-rename
// npm i --save-dev vinyl-ftp
// npm i --save-dev gulp-zip
// npm i --save-dev browser-sync
// -OR-
  // - npm i --save static-server
  // - npm i --save-dev gulp-livereload

// ## Just choose one ##
// --------------------------------
// npm i --save gulp-connect
// npm i --save static-server
// npm i --save gulp-webserver
// npm i --save gulp-live-server 
// npm i --save gulp-serve 

// Gulp.js - Plugins for HTML
// ------------------------------
// npm i --save-dev gulp-inject
// npm i --save-dev gulp-file-include
// npm i --save-dev gulp-webp-html-nosvg
  // -OR-
  // npm i --save-dev gulp-webp-in-html
// npm i --save-dev gulp-format-html 
// npm i --save-dev gulp-htmlmin

// npm i --save-dev gulp-replace
// npm i --save-dev gulp-version-number

// Gulp.js - Plugins for Pug
// ------------------------------
// npm i --save-dev gulp-pug

// Gulp.js - Plugins for CSS
// ------------------------------
// npm i --save-dev gulp-autoprefixer
// npm install --save-dev gulp-webpcss (Error: webp-converter/cwebp)
  // -With-
  // npm i webp-converter@2.2.3 --save-exact


// npm i --save-dev gulp-group-css-media-queries
// npm i --save-dev gulp-clean-css (Minify CSS)

// Gulp.js - Plugins for Sass
// ------------------------------
// npm install sass gulp-sass node-sass --save-dev

// Gulp.js - Plugins for JavaScript
// ------------------------------
// npm i --save-dev gulp-babel @babel/core @babel/preset-env
  // npm i --save-dev @babel/plugin-transform-runtime 
  // npm i --save @babel/runtime 
// npm i --save-dev gulp-uglify-es
// -OR-
  // npm i --save-dev gulp-uglify

// npm install --save-dev webpack-stream

// Gulp.js - Plugins for Images
// ------------------------------
// npm i --save-dev gulp-newer (Pass through newer source files only)
// npm i --save-dev gulp-imagemin@7.1.0 
  // npm i --save-dev gulp-imagemin 
// npm i --save-dev gulp-webp

// Gulp.js - Plugins for fonts
// ------------------------------
// npm i --save-dev gulp-fonter
// npm i --save-dev gulp-ttf2woff
// npm i --save-dev gulp-ttf2woff2


// Gulp.js - Plugins for SVGICONE
// ------------------------------
// npm uninstall --save-dev gulp-svg-sprite


// Gulp.js - Other Plugins
// ------------------------------
// npm i --save-dev gulp-ttf2eot
// npm i --save-dev gulp-uncss || (Remove unused CSS selectors)
// npm i --save-dev gulp-changed || (Only pass through changed files)
// npm i --save-dev gulp-load-plugins
// ========================================================================================== //
// HTML Task
// -------------------------------
// npm i --save-dev gulp-pug
// npm i --save-dev gulp-plumber
// npm i --save-dev gulp-notify 
// npm i --save-dev gulp-util
// npm i --save-dev gulp-webp-in-html
// npm i --save-dev gulp-format-html  
// npm i --save-dev gulp-size 

const {src, dest} = require('gulp')
const pug = require('gulp-pug')
const plumber = require('gulp-plumber')
const notify = require("gulp-notify")
const gutil = require("gulp-util")
// const GulpWebpHtml2 = require('gulp-webp-in-html')
const webphtml = require('gulp-webp-html-nosvg')
const formatHtml = require('gulp-format-html')
const size = require('gulp-size')

const HTML = () => {
  return src('src/pug/**/*.pug')

  .pipe(plumber())

  // .pipe(pug())
  .pipe(pug({pretty: true}))

  .pipe(webphtml())
  .pipe(formatHtml())
  
  .pipe(dest('dist/'))
  .pipe(size())  
  
  .pipe(notify({
    message: gutil.colors.green( "✔️  Template files were successfully compiled @ <%= options.date %>"),
    templateOptions: { date: new Date().toLocaleString() }
  }))  

}

exports.HTML = HTML;
// ========================================================================================== //
// HTML Task 2
// -------------------------------
// npm i --save-dev gulp-htmlmin
// npm i --save-dev gulp-plumber
// npm i --save-dev gulp-notify  

const {src, dest} = require('gulp')
const htmlmin = require('gulp-htmlmin')
const plumber = require('gulp-plumber')
const notify = require("gulp-notify")

const HTML = () => {
  return src('src/pug/**/*.pug')

  .pipe(plumber())

  .pipe(htmlmin({ collapseWhitespace: true }))

  .pipe(dest('dist/'))
  
  .pipe(notify({message: gutil.colors.green( "✔️  Template files were successfully compiled.")}))  
}

exports.HTML = HTML;
// ========================================================================================== //
// CSS Task
// -------------------------------
// npm install sass gulp-sass node-sass --save-dev
// npm install --save-dev gulp-webpcss
// npm i --save-dev gulp-group-css-media-queries
// npm i gulp-autoprefixer --save-dev
// npm i --save-dev gulp-clean-css

// npm i --save-dev gulp-plumber
// npm i --save-dev gulp-notify 
// npm i --save-dev gulp-util
// npm i --save-dev gulp-size 

const {src, dest} = require('gulp')
const plumber = require('gulp-plumber')

const sass = require('gulp-sass')(require('sass'))
sass.compiler = require("node-sass")

const webpcss = require("gulp-webpcss")
const gcmq = require('gulp-group-css-media-queries')
const prefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')

const CSS = () => {
  return src('src/Sass/**/*.+(css|scss|sass)')
  .pipe(plumber())

  // .pipe(sass())
  .pipe(sass({outputStyle: 'compressed'}))
  // .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))

  .pipe(webpcss())
  .pipe(gcmq())
  .pipe(prefixer('last 2 versions'))
  .pipe(rename({extname: ".min.css"}))
  // .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(dest('dist/CSS/'))
  .pipe(size())  
  .pipe(notify({
    message: gutil.colors.green( "✔️  Styles files were successfully compiled @ <%= options.date %>"),
    templateOptions: { date: new Date().toLocaleString() }
  }))  
}

exports.CSS = CSS;
// ========================================================================================== //
// CSS Task 2
// -------------------------------------------------
// npm i gulp-sourcemaps --save-dev 

const {src, dest} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
sass.compiler = require("node-sass")

const Sass = () => {
  return src('src/sass/**/*.+(sass|scss)')
  .pipe(sourcemaps.init())

  .pipe(sass({outputStyle: 'compressed'}))

  // .pipe(sourcemaps.write())
  // .pipe(sourcemaps.write('../Map/'))
  .pipe(sourcemaps.write('.'))

  .pipe(dest('dist/css/'));
}

exports.Sass = Sass;
// ========================================================================================== //
// ES6 → ES5 with babel 
// -------------------------------------------------
// npm i --save-dev gulp-babel @babel/core @babel/preset-env
// npm i --save-dev gulp-uglify
// npm i --save-dev gulp-uglify-es

const babel = require('gulp-babel')
const plumber = require('gulp-plumber')
const uglify = require("gulp-uglify-es").default

const JS = () => {
  return src('src/JS/**/*.js')
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(babel({presets: ["@babel/preset-env"]}))
  .pipe(uglify())
  .pipe(sourcemaps.write('./Map/'))
  .pipe(dest('dist/JS/'));
}

exports.JS = JS;
// ========================================================================================== //
// Image Task 
// -------------------------------------------------
// npm i --save-dev gulp-newer (Pass through newer source files only)
// npm i --save-dev gulp-imagemin@7.1.0 
  // npm i --save-dev gulp-imagemin 
// npm i --save-dev gulp-webp
const {src, dest, lastRun} = require('gulp')

const newer = require('gulp-newer')
const webp = require('gulp-webp')
const imagemin = require("gulp-imagemin")
// const imagemin = import("gulp-imagemin")

const notify = require("gulp-notify")
const size = require('gulp-size')
const browserSync = require("browser-sync").create()

const imageminConfig = [
  // imagemin.gifsicle({interlaced: true}),
  imagemin.mozjpeg({quality: 75, progressive: true}),
  imagemin.optipng({optimizationLevel: 5}), // 0 to 7
  imagemin.svgo({ plugins: [{removeViewBox: false}]}),
  // imagemin.svgo({
  //   plugins: [ {removeViewBox: true}, {cleanupIDs: false}]
  // }),
]

const Images = async (cb) => {
  await new Promise((res,rej) => {
    src('src/images/**/*.*', {since: lastRun(Images)})
      .pipe(newer('dist/images/'))
      .pipe(webp({quality: 70}))
      .pipe(dest('dist/images/'))
      .pipe(size()) 
      .pipe(notify())

      .pipe(src('src/images/**/*.*', {since: lastRun(Images)}))
      .pipe(newer('dist/images/'))
      .pipe(imagemin(imagemin(imageminConfig, { verbose: true })))
      .pipe(dest('dist/images/'))
      .pipe(size()) 
      .pipe(notify())

      .pipe(browserSync.stream())
      .on("end", res)
    cb()
  })
}

module.exports = { Images }
// ========================================================================================== //
// Synchronization of multiple browsers & devices when creating websites (recipes).
// -----------------------------------------------------------------
// npm i browser-sync --save-dev

// Creat File : server.js
// -----------------------------------------------------------------
// const browserSync = require("browser-sync").create()
// const { browserSyncConfig } = require("../Config/pluginsConfig")

// const server = done => {
//   browserSync.inti({
//     server: {
//       baseDir: 'dist/'
//   }
// })
//   done()
// }

// const reload = done => {
//   browserSync.reload()
//   done()
// }

// module.exports = {
//   server,
//   reload
// }

// Commond : Node server.js
// -----------------------------------------------------------------
const browserSync = require('browser-sync').create()


const {src, dest} = require('gulp');
const {watch, series} = require("gulp")
const pug = require('gulp-pug'); 

const Pug = () => {
  return src('src/pug/**/*.pug')
  .pipe(pug({pretty: true}))
  .pipe(dest('dist/'))
  .pipe(browserSync.stream())
}

const watcher = cb => {
  watch('src/Pug/**/*.pug', series(Pug, reload))
  cb()
}

module.exports = {
  pug,
  watcher
}
// ========================================================================================== //
// Local Server - Gulp Reload 
// -------------------------------
// npm i gulp-livereload --save-dev

// ## Just choose one ##
// --------------------------------
// npm i gulp-connect --save
// npm i static-server --save
// npm i gulp-webserver --save
// npm i gulp-live-server --save
// npm i gulp-serve --save


// Creat File : server.js
// -----------------------------------------------------------------
// npm i --save-dev static-server 
// var StaticServer = require('static-server');

// var server = new StaticServer({
//   rootPath: './dist/', 
//   port: 8000
// });

// server.start(function () {
//   console.log('Server Stared At Port', server.port);
// });

// Commond : Node server.js
// -----------------------------------------------------------------

const {src, dest, task, watch, series} = require('gulp');
const pug = require('gulp-pug'); 
const livereload = require('gulp-livereload');

const Pug = () => {
  return src('src/pug/**/*.pug')
  .pipe(pug({pretty: true}))
  .pipe(dest('dist/'))
  .pipe(livereload());
}

// END ALL PUG OR HTML FILES : *.html || *.pug
// -----------------------------------------------------------------
// script(src="http://localhost:35729/livereload.js?snipver=1")
// -----------------------------------------------------------------

const watcher = (cb) => {
  // static-server (server.js)
  require('./server.js');
  livereload.listen();
  watch('src/**/*.pug', series(Pug));
  cb();
}

module.exports = {
  Pug,
  default: series(watcher)
}
// ========================================================================================== //
// IF, Else - Pugin
// -------------------------------------------------
// npm i --save-dev gulp-if

const {src, dest} = require('gulp');
const uglify = require('gulp-uglify');
const beautify = require('gulp-beautify');
const gulpif = require("gulp-if")

var condition = true;

task('taskIF', function() {
  return src('src/*.js')
  .pipe(gulpif(condition, uglify(), beautify()))
  .pipe(dest('dist/'));
});
// ========================================================================================== //
// Inject
// -------------------------------------------------
// npm i --save-dev gulp-inject

// index.html
// -------------------------------------------------------------------
// <!DOCTYPE html>
// <html>
// <head>
//   <title>My index</title>
//   <!-- inject:css -->
//   <!-- endinject -->
// </head>
// <body>
 
//   <!-- inject:js -->
//   <!-- endinject -->
// </body>
// </html>
// -------------------------------------------------------------------

var gulp = require('gulp');
var inject = require('gulp-inject');
 
gulp.task('index', function () {
  var target = gulp.src('./src/index.html');
  var sources = gulp.src(['./src/**/*.js', './src/**/*.css'], {read: false});
 
  return target.pipe(inject(sources))
    .pipe(gulp.dest('./src'));
});
// ========================================================================================== //
// gulp file include
// -------------------------------------------------
// npm i gulp-file-include --save-dev

// index.html
// --------------------------------------------------------------------------
// <!DOCTYPE html>
// <html>
//   <body>
//   @@include('./view.html')
//   @@include('./var.html', {
//     "name": "haoxin",
//     "age": 12345,
//     "socials": {
//       "fb": "facebook.com/include",
//       "tw": "twitter.com/include"
//     }
//   })
//   </body>
// </html>
// --------------------------------------------------------------------------

// view.html
// --------------------------------------------------------------------------
// <h1>view</h1>
// --------------------------------------------------------------------------

// var.html
// --------------------------------------------------------------------------
// <label>@@name</label>
// <label>@@age</label>
// <strong>@@socials.fb</strong>
// <strong>@@socials.tw</strong>
// --------------------------------------------------------------------------

const fileinclude = require('gulp-file-include');
const gulp = require('gulp');

gulp.task('fileinclude', function() {
  gulp.src(['index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});

// result:
// --------------------------------------------------------------------------
// <!DOCTYPE html>
// <html>
//   <body>
//   <h1>view</h1>
//   <label>haoxin</label>
// <label>12345</label>
// <strong>facebook.com/include</strong>
// <strong>twitter.com/include</strong>
//   </body>
// </html>
// --------------------------------------------------------------------------
// ========================================================================================== //
// File collection
// -------------------------------
// npm i gulp-concat --save-dev

const {task, src, dest} = require('gulp');
const concat = require('gulp-concat');

const ConnectCSS = () => {
  return gulp.src('src/*.css')
  .pipe(concat('main.css'))
  .pipe(gulp.dest('dist/'));
}

exports.ConnectCSS = ConnectCSS;
// ========================================================================================== //
// Delete files/folders using globs.
// -------------------------------------------------
// npm i --save-dev del
// npm i --save-dev node-notifier  
// npm i --save-dev gulp-util

const del = require("del")
const notifier = require("node-notifier")
const gutil = require("gulp-util")

const cleanup = async cb => {
   
  // const deletedPaths = await del(['tmp', dist], {dryRun: true})
  const deletedPaths = await del(['tmp', dist])

  notifier.notify("Folders were successfully deleted ✔️")

  gutil.log(
    gutil.colors.bgRed("⚠️  directories that would be deleted. \n"),
    gutil.colors.bgBlue("✨ Starting Gulp in Development mode. \n"),
    gutil.colors.red("✨ Starting Gulp in Development mode. \n")
  )

  cb()
}

exports.cleanup = cleanup;
// ========================================================================================== //
// Notifications & actions settings (SnoreToast) Windows
// -------------------------------------------------
// npm i gulp-notify --save-dev    

const {src, dest} = require('gulp');
const pug = require('gulp-pug'); 
const notify = require("gulp-notify");

const Pug = () => {
  return src('src/pug/**/*.pug')
  .pipe(pug({pretty: true}))
  .pipe(dest('dist/'))
  .pipe(notify("Pug Task Is Done"))
}

exports.Pug = Pug;
// ========================================================================================== //
// Compress Dist Files 
// -------------------------------------------------
// npm i --save-dev gulp-zip

const {src, dest} = require('gulp');
const notify = require("gulp-notify");
const zip = require('gulp-zip');

const Compress = () => { 
    return src('dist/**/*.*')
      .pipe(zip('dist-Files.zip'))
      .pipe(dest('.'))
      .pipe(notify("Files Is Compressed"));
}

exports.Compress = Compress;
// ========================================================================================== //
// Upload Files [FTP]  
// -------------------------------------------------
// npm i vinyl-ftp --save-dev

const {src, dest} = require('gulp');
const livereload = require('gulp-livereload');
const ftp = require('vinyl-ftp');

task( 'deploy', function () {
   var conn = ftp.create( {
       host:     'allarm.net',
       user:     '',
       password: '',
       parallel: 10
   } );

   return src(['dist/**/*.*'], { base: '.', buffer: false } )
       .pipe( conn.newer( '/public_html') ) 
       .pipe( conn.dest( '/public_html' ) )
       .pipe(livereload());
} );
// ========================================================================================== //
// ========================================================================================== //