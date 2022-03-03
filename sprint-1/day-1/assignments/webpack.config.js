const path= require('path')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle.js"
    },
    mode: "development",
    module: {
        rules: [{ test: /\.css$/, use: ["file-loader","style-loader","css-loader"]}]
    },
};