import React from 'react'
import ChordConversion from './ChordConversion'
import ShowChord from './ShowChord';
import Navbar from './Navbar';
import {connect} from 'react-redux';
import TuningDropdown from './TuningDropdown';
import { BrowserRouter, Route } from 'react-router-dom';

const showCalc = () => {
    return <ChordConversion />
  
  }


const showChord = () => {
  if (window.location.pathname === '/show_chord') {
    return <ShowChord />
  }
}


const capoCheck = () => {
  if (window.location.pathname === '/capo_calculator/capo_check') {
    return <TuningDropdown />
  }
}

const App = (props) => {
  
  console.log(capoCheck)
   return (
    <div>
    <div>
      <BrowserRouter>
      <Route path="/" exact component={showCalc} />
      <Route path="/capo_calculator" exact component={showCalc} />
      <Route path="/capo_check" exact component={showCalc} />

      </BrowserRouter> 
    </div>

        <Navbar />
         {showCalc()}
        {/* {showChord()} */}
        {capoCheck()} 
      {/* <ShowChord  /> */}
      {/* {chordShower()} */}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    keys: state.keys, 
    notesRun: state.notesRun,  
    tunings: state.tunings,
    chords: state.chordLayouts
  }
}



export default connect(mapStateToProps)(App);