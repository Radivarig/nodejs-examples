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
	page: React.createFactory(page)
} 
