//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";






function App() {

{/*TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.*/
}  const [homeScore, sethomeScore] = useState(32); 
const [awayScore, setawayScore] = useState(32); 

 function Sec1TopRowOfPage(){
return (
  <div className="topRow">
  <div className="home">
    <h2 className="home__name">Lions</h2>

   

    <div className="home__score">{homeScore}</div>
  </div>
  <div className="timer">00:03</div>
  <div className="away">
    <h2 className="away__name">Tigers</h2>
    <div className="away__score">{awayScore}</div>
  </div>
</div>
)
}

 function HomeTeamBtns(){
    return (
      <div className="homeButtons">
     
      <button className="homeButtons__touchdown" onClick={function(){sethomeScore(homeScore + 7)}}>Home Touchdown</button>
      <button className="homeButtons__fieldGoal" onClick={function(){sethomeScore(homeScore + 3)}}>Home Field Goal</button>
    </div>
    )
}

  
 
function AwayTeamBtns(){
      return (
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={function(){setawayScore(awayScore + 7)}}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={function(){setawayScore(awayScore + 3)}}>Away Field Goal</button>
        </div>
      )
}

  return (
    <div className="container">
      <section className="scoreboard">
       <Sec1TopRowOfPage /> {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
        <BottomRow />
      </section>
      <section className="buttons">
       <HomeTeamBtns /> {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        <AwayTeamBtns />
      </section>
    </div>
  );
}

export default App;
