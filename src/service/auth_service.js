import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
    login(providerName) {
        // firebaseからどのproviderか判断する
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    };

    logout() {
        firebase.auth().signOut();
    }

    onAuthChange(onUserChanged) {
        firebase.auth().onAuthStateChanged((user) => {
            onUserChanged(user);
        })
    };
};

export default AuthService;