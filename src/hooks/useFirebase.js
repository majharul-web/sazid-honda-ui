import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();
const useFirebase = () => {
    const auth = getAuth();

    // all state
    const [user, setUser] = useState({});
    // console.log(user);

    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);




    // google login 
    const singInWithGoogle = (location, history) => {
        setIsLoading(true);
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                setAuthError('');

                const user = result.user;
                // save user info into database
                userInfoSaveDB(user.email, user.displayName, "PUT");

                // page redirect
                const destination = location?.state?.from || '/';
                history.replace(destination);

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
                // save user info into database
                userInfoSaveDB(newUser?.email, newUser?.displayName, "POST")

                // update userName
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {
                        // form reset
                        reset();
                    }).catch((error) => {
                        console.log(error.message);
                    });

                history.replace('/');

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
    }, [auth]);


    // save user info into database
    const userInfoSaveDB = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('http://localhost:5000/addUser', {
            method: method,
            headers: {
                'content-type': 'application/json'
            }
            ,
            body: JSON.stringify(user)
        })
            .then()

    }

    // get admin
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user?.email])




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
        singInWithEmailPass,
        admin
    }
};

export default useFirebase;