#react
Library for building UI, uses virtual DOM and one-way data-flow 

* `react-example` folder is extended `webpack-example`
```
$ npm install  react --save
```
###jsx
xml-alike javascript
```
$ npm install  react jsx-loader --save
```
* add this to loaders item in `webpack.config.js`
```
{ test: /\.jsx$/,   loader: "jsx-loader" }
```
* create `components.jsx` and add
```
var React = require('react')
var page = React.createClass({
    render: function() {
        return(
            <div>
                <h1>{this.props.message}</h1>
            </div>
        )
    }
})
module.exports = {
	page: React.createFactory(require('page'))
}

```
* in `index.html` insert this to start of `body`
```
<div id="page-content"></div>
```
* replace `entry.js`with
```
var React = require('react')
var Components = require('./components.jsx')

React.render(Components.page({message: "test message works"}, document.getElementById('page-content'))
```
* run this and open `index.html`
```
$ npm run test
```
you will see passed message displaying.

* *note:* use `className` istead of 'class' and `htmlFor` instead of 'for'
* *tip:* to debug first look in terminal, then inspect page with F12 and go to `console`, if any errors click the file at the end of error line.  