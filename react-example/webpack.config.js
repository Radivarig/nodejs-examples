module.exports = {
    entry: "./entry.js",
    output: {
        path: "./",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: "jsx-loader" },
            { test: /\.css$/, loader: "style!css" },
        ]
    }
}