var React = require('react');

//GITHUB SEARCH FORM!

var GithubSearchForm = React.createClass({
    propTypes: {
        onSearch: React.PropTypes.func //step 5
    },
    _handleSubmit: function(event) {
        event.preventDefault();
        this.props.onSearch(this.refs.userInput.value); //step 5
    },
    render: function() {
        console.log('props', this.props);
        return (
            <form onSubmit={this._handleSubmit}>
                <p>Enter a GitHub username:</p>
                <input ref="userInput" type="text" />
                <button>Go!</button>
            </form>
        );
    }
});

module.exports = GithubSearchForm;