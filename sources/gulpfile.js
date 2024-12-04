import gulp from "gulp";
import browsersync from "browser-sync";

import "./gulp_tasks/clean.js";
import "./gulp_tasks/favicons.js";
import "./gulp_tasks/fonts.js";
import "./gulp_tasks/fresh.js";
import "./gulp_tasks/html_direct_copying.js";
import "./gulp_tasks/images.js";
import "./gulp_tasks/libs.js";
import "./gulp_tasks/pug.js";
import "./gulp_tasks/scripts.js";
import "./gulp_tasks/webpack.js";
import "./gulp_tasks/serve.js";
import "./gulp_tasks/sprite.js";
import "./gulp_tasks/styles.js";
import "./gulp_tasks/w3c_validator.js";
import "./gulp_tasks/watcher.js";

import { createRequire } from 'module'
const require = createRequire(import.meta.url);

global.$ = {
    browsersync: browsersync,
    packageJson: require('./package.json'),
    path: {
        dest: '../html/', // or just 'html/', 'dest/' — for current folder. WARNING: This directory will be cleaned at build!
        sources: 'sources/' // or '/' — for current folder
    },
    isUseWebpack: true, // false - for the old version of building scripts without support modules
    isUseTailwind: true, // true - if Tailwind CSS is used
};

// BUILD
gulp.task("build", gulp.series("clean", "sprite", "libs", "fonts", "images",
    gulp.parallel("pug", "favicons", $.isUseWebpack ? "webpack" : "scripts"),
    "styles",
    gulp.parallel("html_direct_copying", "validateHtml")
));
// BUILD minified
gulp.task("build_min", gulp.series("clean", "sprite", "libs", "fonts", "images",
    gulp.parallel("pug", "favicons", $.isUseWebpack ? "webpack" : "scripts_min"),
    "styles_min",
    gulp.parallel("html_direct_copying", "validateHtml")
));
// BUILD unminified
gulp.task("build_unmin", gulp.series("clean", "sprite", "libs", "fonts", "images",
    gulp.parallel("pug", "favicons", $.isUseWebpack ? "webpack_unmin" : "scripts_unmin"),
    "styles_unmin",
    gulp.parallel("html_direct_copying", "validateHtml")
));

// Watch
gulp.task("watch", gulp.parallel("watcher", "serve"));
// Watch minified
gulp.task("watch_min", gulp.parallel("watcher_min", "serve"));
// Watch unminified
gulp.task("watch_unmin", gulp.parallel("watcher_unmin", "serve"));

// Default
gulp.task("default", gulp.series("build", "watch"));

