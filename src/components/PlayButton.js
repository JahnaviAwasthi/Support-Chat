import './PlayButton.css';
import { useState } from 'react';
function PlayButton({children,onPlay,onPause})
{
    // let playing=false;
    const[playing,setPlaying]=useState(false);
    function handleClick(e)
    {
        // console.log(e);
        e.stopPropagation();
        if(playing)
        onPause();
        else
        onPlay();
        // playing=!playing;
        setPlaying(!playing);
    }
    return(
    <button onClick={handleClick}>{children} : {playing?'▶️':'⏸️'}</button>
    );

}
export default PlayButton;