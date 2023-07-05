import "./App.css"
import Video from "./components/Video.js";
import videosDB from "./Data/Data.js"
import PlayButton from "./components/PlayButton.js";
import Counter from "./components/Counter.js"
import {useState} from "react";
import AddVideo from "./components/AddVideo.js"
import SupportEngine from "./SupportEngine";

function App() {
   const [videos,setVideos]=useState(videosDB);
   function addVideo(video)
   {
    setVideos([...videos,
    {...video, id:videos.length+1}]);
   }
    
    return (
        <div className="App" onClick={()=>console.log("App")}>
          <AddVideo sV={addVideo}></AddVideo>
            {
              videos.map(video=><Video
                key={video.id}
                title={video.title}
                views={video.views}
                time={video.time}
                channel={video.channel}
                verified={video.verified}
                id={video.id}>

                <PlayButton onPlay={()=> console.log("Playing",video.title)} 
                onPause={()=> console.log("Pausing",video.title)}>{video.title}</PlayButton>

                </Video>)
            }
            <div style={{clear:'both'}}>
            {/* <PlayButton onPlay={()=> console.log("Playyyy")} onPause={()=> console.log("Pauseee")}>Play</PlayButton> */}
            {/* <PlayButton onClick2={()=> alert("Pauseeee")}>Pause</PlayButton> */}

            </div>
            <Counter></Counter>
            <SupportEngine/>
        </div>
    )

}
export default App;