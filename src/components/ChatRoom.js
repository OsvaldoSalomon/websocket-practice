import ChatMessage from "./ChatMessage";
import firebase from 'firebase/compat/app';
import { useCollectionData } from "react-firebase-hooks/firestore";

const firestore = firebase.firestore();

const ChatRoom = () => {
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, { idField: 'id' });

    return (
        <>
            <div>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
            </div>
        </>
    )
}

export default ChatRoom;