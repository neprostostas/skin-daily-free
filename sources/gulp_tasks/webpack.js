import gulp from "gulp";
import webpack from "webpack";
import { prodConfig, prodUnminConfig } from "./webpack.config.js";

gulp.task("webpack", () => 
  new Promise((res, rej) => {
    webpack(prodConfig, (err, stats) => {
      if (err) console.log("Webpack", err);
      console.log(stats.toString());
      res();
    });
  }) 
);

gulp.task("webpack_unmin", () => 
  new Promise((res, rej) => {
    webpack(prodUnminConfig, (err, stats) => {
      if (err) console.log("Webpack", err);
      console.log(stats.toString());
      res();
    });
  }) 
);
