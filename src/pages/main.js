import React from "react";
import styles from "./main.module.css";
import { Navigate, useNavigate } from "react-router-dom";
import sample from './artificial intelligence.mp4'

const Main=()=>{

    const navigate = useNavigate();
  
    const coursesPage = () => {
        navigate("/final")
    }
    return (
        <div className={styles.main}>

        <div className="bg">
        <video playsinline autoplay muted loop className={styles.videoTag} autoPlay loop muted>
            <source src={sample} type='video/mp4' />
        </video>
        </div>


      <div className="container">
        <div className={styles.about2}>
          <div>
          <h1 className= {styles.heading}>Raahi </h1>
            <p className={styles.texzt}>
            <br></br>
            <br></br>
Raahi, the IoT solution for visually impaired people.            </p>


<br></br>
<div className = {styles.buttonDiv}>
<button onClick={coursesPage}>Start</button>
</div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<p className={styles.texzt}>
Made by
</p>
<br></br>

<br></br>



<div className = {styles.CardHolder}>



<div className= {styles.card}>
  <div class={styles.Container}>
    <h4><b>Aditya Kumar</b></h4>
    <p className= {styles.rollNumber}>2019UCO1557</p>
  </div>
</div>

<div className= {styles.card}>
  <div class={styles.Container}>
    <h4><b>Harmeet Singh</b></h4>
    <p className= {styles.rollNumber}>2019UCO1515</p>
  </div>
</div>

<div className= {styles.card}>
  <div class={styles.Container}>
    <h4><b>Chirag Prakash</b></h4>
    <p className= {styles.rollNumber}>2019UCO1539</p>
  </div>
</div>

</div>

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

          </div>
        </div>
      </div>



    </div>
    )
}

export default Main;