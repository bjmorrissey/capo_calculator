import React,  { useState } from 'react';
import {connect} from 'react-redux';
// import chordValidate from '../logic/chordValidate';
// import {keyValidate, keyLookup, keycheck} from '../logic/keyValidate';
import {chordsChosen, chordLookup} from "../actions"
import ChordGraph from './ChordGraph';
// import capoSuggest from '../logic/capoSuggest'


const ChordConversion = (props) => {
    const [enteredChords, setEnteredChords] = useState('')

  
    const chordchart = document.querySelector('.chordchart')
    // const chordQuery = () => {
    //   if (enteredChords === '') {
    //     return;
    //   }
    //   const correctChords = chordValidate(enteredChords, props.notesRun)
    //   const key = keyValidate(correctChords, props.keys)
    //   const keyLkup = keyLookup(key, props.keys)
    //   const keyck = keycheck(keyLkup, props.keys)
    //   setSuggestion(capoSuggest(keyLkup, correctChords, keyck, props.tunings))

         
    // }
    const RenderSuggest = () => {
      if (!props.convertedChords) {
        return;
      } else {
        return( 
          props.convertedChords.map(sugg => {
            if (Object.keys(sugg)) {
              let chords = String(Object.values(sugg)).split(',')
              let chords2 = chords.map(chord => 
                <div className="chord" onClick={() => props.chordLookup(chord)}>{chord}</div>
                )
    
              return (
                <div className="capoSelection">
                  <div className="fretnumber">{Object.keys(sugg)}</div>
                  <div className="chordchart">{chords2}</div>
                </div>
              )
            }
          })
          )
        }
    }

   
    return (
    <div className="chordcoversion">
      <h1>Capo Calculator</h1>

      <div className="intro">
          <p>What is a <a href="https://en.wikipedia.org/wiki/Capo">capo</a>? It's a common tool for guitarists to transpose and shorten the playable length of the strings - hence raising the pitch. Thanks Wikipedia!</p>
          <p>This tool was developed to help guitarists by entering a list of chords they could play at an open position. After conversion, you'll see a list spots you can place a capo and strum the respective chords to gain different voicings. Try it out!</p>
          <p>Once the chords are displayed, click on a chord to see the chord shape. </p>
      </div>

      <div className="chordinput">
        
        <input type="text" className="chordInput" value={enteredChords} onChange={e=> setEnteredChords(e.target.value)}/>
        <button className="chordConvert" onClick={() => props.chordsChosen(enteredChords)}>Convert Me!</button>
        
        <div className="chordexp">
                  <div className="capoChart">
                    <div className="charttitle">Conversion Chart</div>
                    <div className="capotitle">
                      <div className="capospot">Place capo on fret: </div>
                      <div className="chordtitle">Strum the following chords:</div>
                    </div>
                    <div className="chart">
                  
                      {RenderSuggest()}
                    </div>
                  </div>

                </div>
                <div className="chordchart">
                  { props.chordChart===null? '' : <ChordGraph name={props.chordChart[0].name} finger={props.chordChart[0].finger} strum={props.chordChart[0].strum} /> }      
                </div>
       
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    keys: state.keys, 
    notesRun: state.notesRun,  
    chordSelection: state.chordSelection,
    tunings: state.tunings,
    convertedChords: state.convertedChords,
    chordChart: state.chordChart
  }
}
 

export default connect(mapStateToProps, {chordsChosen, chordLookup})(ChordConversion);