import './Feed.css'
import Message from './Message';

function Feed (props) {
    return (
    <div>
      {props.tweets.map((tweets, index) => {
        return <Message {...tweets} key= {index} />
      }
      )
      }
      
    </div>
    );
}
export default Feed;