var React = require('react')
var Components = require('./components.jsx')

React.render(Components.page({message: "test message works"}), document.getElementById('page-content'))