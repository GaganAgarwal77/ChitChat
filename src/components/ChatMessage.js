import React, { useRef, useState } from 'react';
import {useAuth} from '../contexts/AuthContext'
import './css/ChatRoom.css'
export default function ChatMessage(props) {
    const { text, uid, photoURL, displayName, createdAt } = props.message;
    const {currentUser} = useAuth()
    const messageClass = uid === currentUser.uid ? 'sent' : 'received';
    var date = "";
    if(createdAt === null)
      date = props.timeStamp.toDate().toLocaleDateString() + " " +props.timeStamp.toDate().toLocaleTimeString()
    else
     date = createdAt.toDate().toLocaleDateString() + " " +createdAt.toDate().toLocaleTimeString()
     var gravatar = false
    if(photoURL === null)
        gravatar = true
    return (<>
      <div className={`message ${messageClass}`}>
        {messageClass === 'sent' 
        ? <div className = "custom "><div style={{display:'inline-block', paddingBottom:'5px'}}>{currentUser.displayName}<img className="right"src={photoURL || `https://ui-avatars.com/api/?name=${currentUser.displayName}`} /></div><p>{text}</p>  <span class="time-right">{date}</span></div>
        : <div className="custom " ><div style={{display:'inline-block', paddingBottom:'5px'}}>{displayName}<img src={photoURL || `https://ui-avatars.com/api/?name=${displayName}`} /></div><p>{text}</p>  <span class="time-left">{date}</span></div >
        }

      </div>
    </>)
  }
  