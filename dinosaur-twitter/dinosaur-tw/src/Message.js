import "./Message.css";

function Message(props) {
    let {author, content, likes, retweets, date} = props;
    
    return(
        <div className="MainInfo">
           <h1>{content}</h1>
        <h2 className="heading2">
           <li>{author}</li>
           </h2>
        
        
        <div className="bottomdata">
            <p>Likes:{likes}</p>
            <p>Retweets:{retweets}</p>
            <p>Date:{date}</p>
        </div>
           
        </div>
        
    )
}
export default Message;