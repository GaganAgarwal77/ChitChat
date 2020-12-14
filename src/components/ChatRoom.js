import React, { useRef, useState, useEffect } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage'
import app from '../firebase'
import firebase from 'firebase/app'
import {firestore, auth} from '../firebase'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faSignOutAlt,
  faUser,
  faPaperPlane,
  faComments
} from '@fortawesome/free-solid-svg-icons';
import './css/ChatRoom.css'
export default function ChatRoom() {


    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
  
    const [messages] = useCollectionData(query, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');
  
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid, photoURL, displayName } = auth.currentUser;
  
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL,
        displayName
      })
  
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
    useEffect(() => {   
      dummy.current.scrollIntoView({ behavior: 'smooth' });
   });
    return (<>
    <div className="room">
    <header>
        <h3>Start Chit Chatting! <FontAwesomeIcon icon={faComments} /></h3 >
        <Link to = '/'>  <FontAwesomeIcon icon={faHome} />Home</Link>
        </header>
    <section>
      <main>
  
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} timeStamp={firebase.firestore.Timestamp.now()}/>)}
  
        <span ref={dummy}></span>
  
      </main>
  
      <form onSubmit={sendMessage}>
  
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
  
        <button type="submit" disabled={!formValue}>Send  <FontAwesomeIcon icon={faPaperPlane} /></button>
  
      </form>
      </section>
      </div>
    </>)
  }
