import React, { useEffect, useState } from "react";
import "./Note_page_body.css"
import {AiOutlinePlus} from "react-icons/ai"
import Newnote from "../newNote/Newnote"
import axios from "axios";
import Notes from "../../Components/note/Notes"


function Body (){



    useEffect(() =>{
       getNotes()
    }, [])




    const getNotes = () => {
        axios.get('http://localhost:3001/note/notes')
        
        .then((response) =>{
            const data = response.data;
            setPost(data)
            console.log("Data has been recieved")
            
        })

        .catch((err) => {
            console.error("there has been an error retrieving data:", err)
        })


    }



    const [modal, openmodal] = useState(false)

    const [post, setPost] = useState(null)

    const [note, updateNote] =useState(false)

    const [updateNoteId, setupdateNoteId] = useState(null)

    
  const newNote = () =>{
    openmodal(true)
  }
    
    return(
        <div className='noteapp_notes__container section__padding' id="header_container">
            <h2 className="notes_container_title">Create a new note</h2>
            

           

            <div className="outer-border">
            <div className="notes_container__button" onClick={newNote}>
                <AiOutlinePlus className="plus" />
                <h6> New note</h6>
            </div>
            </div>
            


            { (!post) ? "" : (
                post.map((item,index) =>(
                    <Notes id={item._id} title={item.title} description={item.description} key={index} callfunction={getNotes} updatetheNote={updateNote} updatenoteid={setupdateNoteId} updateNoteTrigger={openmodal}/>
                    
                ))
            )
                

                  }

<Newnote trigger={modal} setTrigger={openmodal}  function={getNotes} />


{
    note?
    
    <Newnote id={updateNoteId} trigger={modal} setTrigger={openmodal}  function={getNotes} type={note} deactivateEdit={updateNote}/> :
    ""
}
        </div>
    )
}

export default Body