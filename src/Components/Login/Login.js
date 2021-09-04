import React, { useContext } from 'react';
import firebase from 'firebase';
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
if (firebase) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {

                console.log('result', result.user);
                const user = result.user;
                setLoggedInUser(user)
                history.replace(from);
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);

            });
    }


    return (
        <div style={{ marginTop: '20%' }} className="text-center">
            <button className="btn btn-primary" onClick={googleSignIn} > <i class="bi bi-google"></i>  Sign In With Google</button>
        </div>
    );
};

export default Login;