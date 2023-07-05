import './Video.css';

function Video({id, title, channel, views, time, verified,children}) {
    return ( 
    <> 
    <div className='container'>
        {/* This div added to manipulate the entire container using css*/}
        <div className='pic'>
            {/* This div added only for picture manipulation*/}
            <img src={`https://picsum.photos/id/${id}/160/90`} alt="Random Image"/>
        </div>
        <div className="title">{title}</div>
        <div className="channel">{channel} {verified?'✅':null}</div>
        <div className="views">{views} {' '}views {/*{' '} added for a whitespace between viewcount and view word*/}

            <span>.</span>{time}</div>
            <div>
                {children}
            </div>
    </div> 
    < />
    );
}
export default Video;