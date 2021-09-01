import React from 'react'
import ChordConversion from './ChordConversion'
import ShowChord from './ShowChord';
import Navbar from './Navbar';
import {connect} from 'react-redux';
import TuningDropdown from './TuningDropdown';


const showCalc = () => {
  if (window.location.pathname === '/capo_calculator') {
    return <ChordConversion />
  }
}

const showChord = () => {
  if (window.location.pathname === '/show_chord') {
    return <ShowChord />
  }
}


const capoCheck = () => {
  if (window.location.pathname === '/capo_check') {
    return <TuningDropdown />
  }
}


const App = (props) => {

   return (
    <div>
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