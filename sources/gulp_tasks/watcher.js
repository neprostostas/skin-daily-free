import gulp from "gulp";
import watch from "gulp-watch";

let minState = '';

function runConditionWatchers() {
  const wp = $.isUseWebpack;
  const tw = $.isUseTailwind;
  if (wp && tw) { // Webpack + Tailwind
    watch(["./src/pug/**/*.pug"], gulp.series(["pug", "styles" + minState]));
    watch(["./src/js/**/*.{js,json}", "./tailwind.config.js"], gulp.series("styles" + minState)).on("change", () => $.browsersync.reload());
  } else if (wp) { // Only Webpack
    watch(["./src/pug/**/*.pug"], gulp.series("pug"));
    watch("./src/js/**/*.{js,json}").on("change", () => $.browsersync.reload());

  } else if (tw) { // Only Tailwind
    watch(["./src/pug/**/*.pug"], gulp.series(["pug", "styles" + minState]));
    watch(["./src/js/**/*.{js,json}", "./tailwind.config.js"], gulp.series("scripts"+minState));

  } else { // Default
    watch(["./src/pug/**/*.pug"], gulp.series("pug"));
    watch("./src/js/**/*.{js,json}", gulp.series("scripts"+minState));
  }
}

gulp.task("watcher", () =>
    new Promise((res, rej) => {
        runConditionWatchers();
        watch("./src/sass/**/*.{scss,sass}", gulp.series("styles"+minState));
        watch("./src/fonts/**/*", gulp.series("fonts"));
        watch(["./src/images/**/*", "!./src/images/sprite-*/**/*", "!./src/images/favicons/**/*"], gulp.series("images"));
        watch("./src/images/sprite-svg/*.svg", gulp.series("sprite"));
        watch("./src/html_direct_copying/**/*", gulp.series("html_direct_copying"));
        res();
    })
);

gulp.task("watcher_min", () => {
    minState = '_min';
    return gulp.series("watcher")();
});
gulp.task("watcher_unmin", () => {
    minState = '_unmin';
    return gulp.series("watcher")();
});