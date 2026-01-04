import { createContext,  useEffect,  useRef, useState } from "react";
import { songsdata } from "../assets/assests";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef()
    const seekbg = useRef()
    const seekbar = useRef()

    const [track,setTrack]= useState(songsdata[0])
    const [playStatus ,setPlayStatus] = useState(false)


    const [time,setTime] = useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:{
            second:0,
            minute:0
        }

    })

     const play = () =>{
        audioRef.current.play()
        setPlayStatus(true)
    }
    const pause = () =>{
        audioRef.current.pause()
        setPlayStatus(false)
    }

    useEffect(()=>{
        audioRef.current.ontimeupdate =() =>{
            seekbar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%"
            setTime({
                currentTime:{
                    second:Math.floor(audioRef.current.currentTime % 60),
                    minute:Math.floor(audioRef.current.currentTime / 60)
                },
                totalTime:{
                    second:Math.floor(audioRef.current.duration % 60),
                    minute:Math.floor(audioRef.current.duration / 60)
                }
            })
        }
    })

    const playwithid = async(id)  =>{
        await setTrack(songsdata[id])
        await audioRef.current.play()
        setPlayStatus(true)
    }

    const previous = async() =>{
        if(track.id>0){
            await setTrack(songsdata[track.id -1])
            await audioRef.current.play();
            setPlayStatus(true)
        }
    }
    const next = async() =>{
        if(track.id<songsdata.length -1){
            await setTrack(songsdata[track.id +1])
            await audioRef.current.play();
            setPlayStatus(true)
        }
    }

    const seeksong = async(e) =>{
        console.log(e);
        audioRef.current.currentTime= ((e.nativeEvent.offsetX / seekbg.current.offsetWidth)*audioRef.current.duration)
        // ye sab console log krke nikala hai

    }

    const contextValue = {
        audioRef,
        seekbg,
        seekbar,
        track,
        setTrack,
        time,
        setTime,
        playStatus,
        setPlayStatus,
        play,
        pause,
        playwithid,
        previous,
        next,
        seeksong

    }
    return (
        <PlayerContext.Provider value = {contextValue}>
        {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider