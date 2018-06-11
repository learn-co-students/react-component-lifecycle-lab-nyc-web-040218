import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  componentWillMount(){
    this.setState({
      tweets: this.props.newTweets
    })
  }

  componentWillReceiveProps(newProps){

    this.setState({
      tweets: ( newProps.newTweets + "," + this.state.tweets ).split(',')
    })
  }

  // TODO: shouldComponentUpdate()
  shouldComponentUpdate(nextProps){
    return (this.props.tweets !== nextProps.tweets)
  }
  // TODO: componentWillReceiveProps()

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
