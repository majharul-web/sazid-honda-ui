import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();
const useFirebase = () => {
    const auth = getAuth();

    // all state
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    // google login 
    const singInWithGoogle = (location, history) => {
        setIsLoading(true);
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                setAuthError('');

                // page redirect
                const destination = location?.state?.from || '/';
                history.replace(destination);

                const user = result.user;
                console.log(user);
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // user register
    const userRegister = (name, email, password, history, reset) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');

                // set displayName
                const newUser = { email, displayName: name }
                setUser(newUser)

                // update userName
                updateProfile(auth.currentUser, {
                    displayName: name
                }
                ).then(() => {
                    // form reset
                    reset();

                }).catch((error) => {
                    console.log(error.message);
                });

                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));

    }

    // manual login
    const singInWithEmailPass = (email, password, location, history, reset) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');

                // form reset
                reset();

                // redirect
                const destination = location?.state?.from || '/';
                history.replace(destination)

                const user = userCredential.user;
                console.log(user);

            })
            .catch((error) => {
                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));
    }

    // observe user
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    // logout
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {

            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setIsLoading(false))
    };

    return {
        isLoading,
        user,
        singInWithGoogle,
        logOut,
        authError,
        userRegister,
        singInWithEmailPass
    }
};

export default useFirebase;