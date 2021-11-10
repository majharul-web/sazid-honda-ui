import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();
const useFirebase = () => {
    const auth = getAuth();

    // all state
    const [user, setUser] = useState({});

    // google login 
    const singInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                console.log(error.message);
            });
    }

    // observe user
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }

        });
        return () => unsubscribed;
    }, []);

    // logout
    const logOut = () => {
        signOut(auth)
            .then(() => {

            })
            .catch((error) => {
                console.log(error);
            })
    };

    return {
        user,
        singInWithGoogle,
        logOut
    }
};

export default useFirebase;