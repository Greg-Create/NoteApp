import React from "react";
import "./notes.css"
import { useState } from "react";
import { useEffect, useRef } from "react";
import {AiOutlineClose} from "react-icons/ai"
import { set } from "mongoose";
import {AiFillEdit} from "react-icons/ai"
import axios from "axios";




function Notes (props) {
    const ref = useRef()
    const [hover, setHover] = useState(false);
    const [count, setCount] = useState("");
    const [anim, setAnim] = useState(false);
    const [noteRemoved, setnoteRemoved] = useState(false);
   
   
    
    const mouseHover = () => {
        setHover(true)


    }

    const mouseLeave =()=> {
        setHover(false)
    }
    
    const deleteNote=()=>{
        axios.delete(`http://localhost:3001/note/${props.id}`).then(
            console.log("Succesfully Deleted")
        )

        .then(
            setHover(false),
            setnoteRemoved(true)
            
        )

        .then(
            props.callfunction
        )
    }

    const updateNote=()=>{
            props.updatetheNote(true)
            props.updatenoteid(`${props.id}`)
            props.updateNoteTrigger(true)
            setHover(false)
    }

   


    return(
        <div  onMouseEnter={mouseHover} onMouseLeave={mouseLeave} >
        <div className={`Notes_container ${hover? "clicked" : ""}  ${noteRemoved? "note-deleted" : ""} `}  ref={ref}>
        <h1>{props.title}</h1>
        <h4>{props.description}</h4>

        
        </div>
        {hover?
    <div className="buttons">
   <button  className="delete_Note" onClick={deleteNote}>  <AiOutlineClose className="icon" /> Delete Note</button>
    <button className="update_note" onClick={updateNote} ><AiFillEdit className="icon" />Update</button>
    </div>
    
    : ""

    }
        
       
 
        </div>
    )
}

export default Notes