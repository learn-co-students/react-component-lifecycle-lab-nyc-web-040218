import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);
    console.log("inside tweetwall", props.newTweets)
    this.state = {
      tweets: []
    };
  }

  componentWillMount() {
    this.setState({
      tweets: this.props.newTweets
    }, () => console.log(this.state.tweets));
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      tweets: nextProps.newTweets.concat(this.state.tweets)
    });
  }

  shouldComponentUpdate() {
    if(this.props.newTweets.length === 0) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
