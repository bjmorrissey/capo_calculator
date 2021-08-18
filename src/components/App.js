import React from 'react'
import ChordConversion from './ChordConversion'
// import ChordGraph from './ChordGraph'
import ShowChord from './ShowChord';
import {connect} from 'react-redux'


const App = (props) => {

   return (
    <div>
      <ChordConversion />
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