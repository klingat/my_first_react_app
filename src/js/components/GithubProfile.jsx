var React = require('react');
var $ = require("jquery")

var GithubProfile = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired
    },
    getInitialState: function() {
        return ({});
    },
    fetchData: function() {
        var url = "https://api.github.com/users/" + this.props.username;
        var that = this; // has to be outside the function that we're using it in
        $.getJSON(url, function(result) {
            that.setState({
                user: result.login,
                avatarURL: result.avatar_url,
                bio: result.bio,
                name: result.name
            })
            // console.log(result);
        })
    },
    componentDidMount: function() {
        this.fetchData()
    },
    componentDidUpdate: function() {
        // console.log(this.props.username)
        
        if (this.props.username !== this.state.user) {
            this.fetchData();
        }
    },
    render: function() {
        if (!this.state.user) {
            return (
                <div>
                    <p>LOADING</p>
                </div>
                )
        }
        else {
        return (
            <div className="github-user">
              <img className="github-user__avatar" src={this.state.avatarURL}/>
              <div className="github-user__info">
                <p>{this.state.user} ({this.state.name})</p>
                <p>{this.state.bio}</p>
              </div> 
            </div>
        );
        }
    }
});

module.exports = GithubProfile;