#webpack
Module bundler (many modules `=>`single file.js)

```
$ npm install webpack --save
```


* create `webpack.config.js`
```
module.exports = {
    entry: "./entry.js,"
    output: {
        path: "./",
        filename: "bundle.js"
    }
}
```
    * only **entry.js** module is executed on startup
    * **bundle.js** will contain all dependency modules that were required in entry.js

* create `index.html` which is the main .html
```
<html><head><meta charset="utf-8"></head><body>
    <script type="text/javascript" src="bundle.js" charset="utf-8"></script>
</body></html>
```
    * only script we have to include is bundle.js
* create `entry.js`
```
document.write("webpack watches this file in realtime and recompiles on change")
```

* create `package.json`, defaults will do
```
$ npm init
```
add item scripts to it
```
"scripts": { "test": "./node_modules/webpack/bin/webpack.js --progress --colors --watch" }
```
    *`--watch` watches for entry.js and its dependency files, recompiles if they change
* run webpack
```
$ npm start test
```
    * open index.html
    * open, edit and save entry.js
    * refresh index.html

###loaders


* add to `webpack.config.js`
```
,module: {
	loaders: [
		{ test: /\.css$/, loader: "style!css" }
	]
}
```
* install loaders over `npm` and save to `package.json`
```
$ npm install style-loader css-loader --save 
```

* now you can add to `entry.js`

```
require('your.css')
```
