import { useContext, CreateContext } from "react";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged} from "firebase/auth";
import { auth } from '../firebase';

const authContext = CreateContext ()

export const AuthContextProvider = ({children}) => {

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)

    }

    return (
        <AuthContext.Provider value={{ googleSignIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth =() => {
    return useContext(AuthContext)
}