import "./App.css";
import React, { Component } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui' //main importing part
import 'firebaseui/dist/firebaseui.css'
import TodoList from './TodoList';


firebase.initializeApp({
  apiKey: "AIzaSyDH0wlLijau6UafxoiRV_wOQqex6w662rU",
  authDomain: "fr-2-f5e02.firebaseapp.com",
  projectId: "fr-2-f5e02",
  storageBucket: "fr-2-f5e02.appspot.com",
  messagingSenderId: "790807060993",
  appId: "1:790807060993:web:3d410e57a82dddeb939600"
});

class App extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      //firebase.auth.GithubAuthProvider.PROVIDER_ID,
      //firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  singOutfromapp =() => {
    localStorage.setItem('todos', '');

    firebase.auth().signOut();
    
  }

  render() {
    
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <span>
            <div className="singin_div">
            <div>You are already sign in</div>
            <button onClick={this.singOutfromapp  } className="signout_btn">Sign out</button>
            </div>
            {/* <h3>Welcome, {firebase.auth().currentUser.displayName}</h3> */}
            <TodoList />
           
            
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    )
  }
}

 export default App

