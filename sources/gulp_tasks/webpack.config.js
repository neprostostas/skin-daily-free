import path from "path";
import { fileURLToPath } from "url";
import { merge } from "webpack-merge";
import TerserPlugin from "terser-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mainConfig = {
  entry: {
    main: "./main.js",
    //optional: "./optional.js" // if need more one js file
  },
  output: {
    filename: "./[name].min.js",
    path: path.resolve(__dirname, "../../html/js"),
    publicPath: "/",
  },
  context: path.resolve(__dirname, "../src/js"),
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".mjs", ".jsx", ".json"],
  },
};

export const devConfig = merge(mainConfig, {
  mode: "development",
  devtool: 'eval-cheap-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
});

export const prodUnminConfig = merge(mainConfig, {
  mode: "none",
});

export const prodConfig = merge(mainConfig, {
  mode: "production",
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
    ],
  }
});
