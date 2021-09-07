import React, {useState} from 'react';
import {connect} from 'react-redux';
import {chordLookup} from '../actions'
import ChordGraph from './ChordGraph';

const ShowChord = (props) => {

  const [chord, setChord] = useState('')

  // const chordCheck = (chord) => {

  //   if (chord !== props.chordchart[0].name) {
  //     return 'This chord is not in our system (yet). Sorry!'
  //   } else {
  //     <ChordGraph name={props.chordChart[0].name} finger={props.chordChart[0].finger} strum={props.chordChart[0].strum} />
  //   }
     
  // }

  // }
  return (
    <div className="showChord">
      <h1>Type in a chord and you'll see a pic of how to play it!</h1>
    <br />
      <input type='text' fontSize="25px" className="chord" value={chord} onChange={e=> setChord(e.target.value)}></input>
      <br />
      <button className="chordConvert" onClick={ () => props.chordLookup(chord) }>Lookup</button><br />
      
      
      { props.chordChart===null || props.chordChart[0].name === undefined ? '' :  <ChordGraph name={props.chordChart[0].name} finger={props.chordChart[0].finger} strum={props.chordChart[0].strum} /> }
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return ({
    chords: state.chordLayouts,
    chordChart: state.chordChart
  })
}

export default connect(mapStateToProps, {chordLookup})(ShowChord);