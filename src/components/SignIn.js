import firebase from 'firebase/compat/app';

const auth = firebase.auth();

const SignIn = () => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    )
}

// export const SignOut = () => {
//     return auth.currentUser && (
//         <button onClick={() => auth.signOut()}>Sign Out</button>
//     )
// }

export default SignIn;
