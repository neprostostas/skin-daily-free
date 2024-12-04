import gulp from "gulp";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import { devConfig } from "./webpack.config.js"

gulp.task("serve", () =>
    new Promise((res, rej) => {
        $.browsersync.create();
        $.browsersync.init({
            server: "./"+$.path.dest,
            tunnel: false,
            port: 9000,
            middleware: $.isUseWebpack ? [
              webpackDevMiddleware(webpack(devConfig), {
                writeToDisk: true,
                stats: { 
                  colors: true
                }
              })
            ] : []
        });
        res();
    })
);