const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => {
  const production = env && env.production;
  return {
    mode: production ? "production" : "development",
    entry: "./src/index.ts",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "main.js"
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: production ? "Swing" : "Swing: DEV",
        template: "index.html"
      })
    ],
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx", ".js", ".jsx"]
    },

    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "ts-loader"
            }
          ]
        },
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader"
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, "./build"),
      compress: true,
      port: 3000
    }
  };
};
