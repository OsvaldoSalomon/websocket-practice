import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import ChatRoom from "./components/ChatRoom";
import SignIn from "./components/SignIn";

firebase.initializeApp({
    apiKey: "AIzaSyDapjrhg-zrQvp06kdnsG22G--nIYRuJ-A",
    authDomain: "websockets-demo.firebaseapp.com",
    projectId: "websockets-demo",
    storageBucket: "websockets-demo.appspot.com",
    messagingSenderId: "638006963491",
    appId: "1:638006963491:web:ed1bc4100cdfdb7efa7096",
    measurementId: "G-83H3W9WS34"
})

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
    const [user] = useAuthState(auth);
    return (
        <div className="App">
            <header className="App-header">
            </header>
            <section>
                {user ? <ChatRoom /> : <SignIn />}
            </section>
        </div>
    );
}

export default App;
