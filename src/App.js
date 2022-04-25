import React, {  useEffect,useState } from "react";
import Webcam from "react-webcam"
import firebase from 'firebase';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import MainPage from "./pages/main";
import FinalPage from "./pages/final"
const firebaseConfig = {
  apiKey: "AIzaSyDMnAn794XWSptIJ8EGKbm_V-3I5oEf3Ho",
  authDomain: "raahi-iot.firebaseapp.com",
  projectId: "raahi-iot",
  storageBucket: "raahi-iot.appspot.com",
  messagingSenderId: "279021006362",
  appId: "1:279021006362:web:553d6cc39597c9baa6aba3",
  measurementId: "G-QX5QJSFXE6"
};
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();

function App(props) {
    
    // const FinalPage = React.lazy(() =>
    //     import('./pages/final'))

        return (
          <BrowserRouter>
  
             
                  <div className="App">
                                   
  
                                          <Routes>
                                              <Route path="/"  element ={<MainPage />} />
                                              <Route path="/final" element ={<FinalPage />} />
                          
                                          </Routes>
                  </div>
              
  
          </BrowserRouter>
      );
}

export default App;
