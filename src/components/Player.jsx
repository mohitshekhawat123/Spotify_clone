import React from "react";
import { PlayerContext } from "../context/PlayerContext";
import { useContext } from "react";
import { assets } from "../assets/assests";

const Player = () => {

    const {seeksong,previous,next, time ,seekbar , seekbg , playStatus ,  play, pause ,track} = useContext(PlayerContext)

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="songs_image" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc}</p>
        </div>
      </div>
      <div className="flex flex-col items-center m-auto gap-1">
        <div className="flex gap-4">
          {/* arrow button */}
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="shuffle_icon" />
          <img onClick={()=>previous()} className="w-4 cursor-pointer" src={assets.previous_icon} alt="previcon" />
          {playStatus ?
           <img onClick={pause} className="w-4 cursor-pointer" src={assets.pause_icon} alt="pause_icon" /> : 
           <img onClick={play} className="w-4 cursor-pointer" src={assets.play_icon} alt="play_icon" />
          }
          
          
          
          <img onClick={()=>next()} className="w-4 cursor-pointer" src={assets.next_icon} alt="next_icon" />
          <img className="w-4 cursor-pointer" src={assets.repeat_icon} alt="loop_icon" />
        </div>
        <div className="flex items-center gap-5">
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div ref={seekbg} onClick={seeksong} className="w-[60vw] max-w-125 bg-gray-300 rounded-full cursor-pointer">
            <hr ref={seekbar} className="h-1 border-none w-0 bg-green-800 rounded-full" />
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4" src={assets.play_icon} alt="icons_play" />
        <img className="w-4" src={assets.mic_icon} alt="icons_mic" />
        <img className="w-4" src={assets.queue_icon} alt="icons_queue" />
        <img className="w-4" src={assets.speaker_icon} alt="icons_speaker" />
        <img className="w-4" src={assets.volume_icon} alt="icons_volumes" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img className="w-4" src={assets.mini_player_icon} alt="icons_mini_player" />
        <img className="w-4" src={assets.fullscreen_icon} alt="icons_zoom_icon" />
      </div>
    </div>
  );
};

export default Player;
