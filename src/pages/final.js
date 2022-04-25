import React, {  useEffect,useState } from "react";
import Webcam from "react-webcam";
import firebase from 'firebase';
import styles from './final.module.css'
import { useSpeechSynthesis } from "react-speech-kit";

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

const Final=()=>{
    const [dist,setDist]=useState(100);
  const [url,setUrl]=useState("");
  const [b,setB]=useState(0);
  const { speak } = useSpeechSynthesis();
  useEffect(()=>{
    setInterval(()=>{
        fetch("https://iotarduinoraahi.herokuapp.com/ultra").then((res)=>res.json()).then((res)=>{
           setDist(res.distance);
           console.log(res.distance)
        })
    },3000)

},[])
const webcamRef = React.useRef(null);
  const capture = React.useCallback(
    async() => {
      const imageSrc = webcamRef.current.getScreenshot();
      console.log(imageSrc);
      const storageRef =await  firebase.storage().ref(`image`);
       await storageRef.putString(imageSrc,'data_url');
       await storageRef.getDownloadURL().then(async(res)=>{
         await setUrl(res);
         console.log(url);
       })
       .catch((error) => { throw error });
       
    },
    [webcamRef]
  );
  useEffect(()=>{
    if(dist<20 && b===0){
      console.log(b);
      speak({text:"Object Detected, Slow Down"});
      capture();
    }
  },[dist]);
  
  useEffect(()=>{
    
    if(url!==""){
      setB(1);
    fetch(`https://raahi-iot.herokuapp.com/save?url=${url}`).then((res)=>res.json()).then((res)=>{
      speak({text:`Take a ${res.result} Turn`});
      console.log(res)
      setB(0);
    }).catch((err)=>{
      console.log(err);
      setB(0);
    })    
    }
  },[url]);
  return (
    <>
    <div className={styles.about2}>
        <h1 className={styles.heading}>
        Raahi
        </h1>
    </div>

    <div className={styles.about2}>
        <p>
            Nearest detected object is : {dist}

        </p>
    </div>

    <div className={styles.Container} >
    
    <div>
    <Webcam
        audio={false}
        height={400}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={600}
        videoConstraints={videoConstraints}
      />
    </div>

    </div>
    </>
  );
}

export default Final;