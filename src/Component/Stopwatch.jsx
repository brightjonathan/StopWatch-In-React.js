import { useState, useEffect } from "react"
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';

const Stopwatch = () => {

    //created a usestate for the variables
    const [hour, setHour] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setseconds] = useState(0)
    const [milliseconds, setmilliseconds] = useState(0)
    const [stop, setstop] = useState(true)



   //created a function for the clicked the button
    const on_start = () =>{

        //setting the start btn to false when clicked
        setstop(false)
        
    }

    const on_stop = () =>{

        //setting the stop btn to true when clicked
        setstop(true)
    }

    const on_restart = () => {
        setHour(0)
        setMinutes(0)
        setseconds(0)
        setmilliseconds(0)
    }


    //created a useEffect function that renders functions on the browser
    useEffect(() => {
        //created a variables
        let interval = null;

        //writting a  conditional statement saying if not stop,
        //RUN the following conditional statement
        if(!stop ){
            interval = setInterval(() => {
                if(minutes > 59){
                    setHour(hour + 1)
                    setMinutes(0)
                    clearInterval(interval)
                }
                if(seconds > 59){
                    setMinutes(minutes + 1)
                    setseconds(0)
                    clearInterval(interval)
                }
                if(milliseconds > 499){
                    setseconds(seconds + 1) 
                    setmilliseconds(0)
                    clearInterval(interval)
                }
                if(milliseconds <= 499){
                    setmilliseconds(milliseconds + 1)
                }
            }, 1);
        }
        else{
            clearInterval(interval)
        }
        return () =>{
            clearInterval(interval)
        }
        
    },)


    return (
        <div className="container">

           <h3 className="head" data-testid="heade_one">Stopwatch Program</h3>
            <div className="time">
            <h1>
                <span data-testid="hour">{hour}</span> 
                 <span>:</span>
                <span data-testid="mins">{minutes}</span > 
                <span>:</span>
                <span  data-testid="second">{seconds}</span>
                <span className="mili">:</span>
                <span className="mili" data-testid="milisec">{milliseconds}</span> 
             </h1>
           
            </div>
            <div className="btn">
            <button onClick={on_start} className="start" data-testid="start_btn"><PlayArrowIcon /></button>
            <button onClick={on_stop}  className="stop" data-testid="stop_btn">< StopIcon /></button>
            <button onClick={on_restart}  className="re-start" data-testid="restart_btn"><SettingsBackupRestoreIcon/></button>
            </div>
            
        </div>
    )
}

export default Stopwatch
