import React, { useState } from 'react';
import { connect } from 'react-redux';
import { selectTuning } from '../actions'
import Select from 'react-select';


const TuningDropdown = (props) => {
  const tunings = props.tunings
  
  const guitarneck = document.querySelector('.guitarneck');
  const fretboard = document.querySelector('.fretboard');
  let frequencies = []

  let [tuningChoice, setTuningChoice] = useState({value:'Standard tuning', label: 'Standard tuning'});
  let [capoSpot, setCapoSpot] = useState({value: '0', label: '0'})

  //Create date for selection dropdown
    const renderDropdown = () => {
      return tunings.map(tuning => {
        return (
          {value: `${tuning.name}`, label: `${tuning.name}` }
        )
      })
    }
    const tuningNames = renderDropdown();
  
    //create loop to make capo position dropdown
    const capoSelect = []
    
    for (let i=0; i<12; i++) {
      capoSelect.push({ value: `${i}`, label: `${i}`})
    }
    
    //Pull note scale from reducers page
    const noteScale = []

    props.notesRun.forEach(note => {
      if (String(Object.values(note)).length > 1) {
        noteScale.push(String(Object.values(note)).slice(0,2))
      } else {
        noteScale.push(String(Object.values(note)))
      }
      
    })

    //check index against frets
    function indexCheck(num) {
  
      if (num > 35) {
        return num - 36;
      }else if (num > 23) {
        return num - 24;
      }else if (num > 11) {
        return num - 12;
      } else {
        return num;
      }
    }


    function capoLayout (tuning, placement) {
      
      const transcribedIndex = tuning.map(note => 
        indexCheck(noteScale.indexOf(note)+placement))
    
      const transcribedNotes = transcribedIndex.map(index => noteScale[index] )
   
      return transcribedNotes;

    }

    
//take array of frequencies, transpose accdly
  function freqCalc (freq, placement, i) {
    let mult = 1;
    let st = 0;
    i > 0 ? mult = 1.059463 ** i : mult = 1;
    placement > 0 ? st = 1.059463 ** placement : st = 1; 
    let start = freq.map(fr => +(fr * st).toFixed(2))
    let tempArr = start.map(fr => +(fr * mult).toFixed(2));
    return tempArr;
  } 


    let neck=[]
    let freq = []
    function neckRun(tuning, placement) {
      neck = []

      for (let i=0; i<=5; i++) {
        neck.push(capoLayout(tuning, placement+i))
        freq.push(freqCalc(frequencies, placement, i))
        
      }
      console.log(freq)
    }
    
    
    const tuningNotes = (tuningName) => {
      let tuneNotes = []
      props.tunings.forEach(tuning => {
        if(tuning.name == tuningName) {
          tuneNotes = tuning.notes
          frequencies = tuning.freq
        }
      })
      console.log(frequencies)
      return tuneNotes;
    }
    
    
    neckRun(tuningNotes(tuningChoice.label), Number(capoSpot.label))
   

    //functionality to show guitar neck
    
    const capoSuffix = (value) => {
      let number = Number(value);
      let suffix = ''

      if (value === '0') {
        suffix="No capo used"
      } else if (value === '1') {
        suffix= 'st'
      } else if (value === '2') {
        suffix = 'nd'
      } else if (value === '3') {
        suffix = 'rd'
      } else {
        suffix = 'th'
      }
      return suffix
    }

    
    const playSound = (freq) => {
      
      
      console.log(freq)
      
      soundPlay(freq, 'triangle', .5)
      soundPlay(freq, 'sine', .5)
    }


    
   const renderFret = () => {
     return(
      neck.map((notes, i) => {
        return (
          <div>
          <div className= {"fret fret" + i}>
          <ul>
            {notes.map((note, j) => {
              return (
                <li onClick={() => playSound(freq[i][j])} >{note.slice(0,1)}<span className="sharp">{note.slice(1)}</span></li>
              )
            })}
            
          </ul>
          </div>
          <div className="fretwire"></div>
          </div>
        )
      })

     )
   }


//Audio play for notes
let audioContext;

function soundPlay(freq, waveType, gain) {
  try {
    audioContext = new(window.AudioContext || window.webkitAudioContext)();
  } catch (error) {
    window.alert(
      `Sorry, but your browser doesn't support the Web Audio API!`
    );
  }
  
  if (audioContext !== undefined) {
    const osc = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    const CT = audioContext.currentTime;
    const noteLength = 1;
    

    osc.connect(gainNode)
    
    gainNode.connect(audioContext.destination);
    
    
    gainNode.gain.value = gain;
    
    osc.type = waveType;
    osc.frequency.setValueAtTime(freq, CT)
    // osc.detune.exponentialRampToValueAtTime(-100, CT+.25)
    gainNode.gain.exponentialRampToValueAtTime(0.001, CT + noteLength)
  
    osc.start();
    osc.stop(CT + noteLength);
    audioContext.resume();
      
  }


}
    
    
    
    
      return (
        <div className="dd-header">
        <p>Want to check the notes on  your guitar neck? First choose a tuning, then select where you'd like your capo to go.</p>
        <Select options={tuningNames} onChange={setTuningChoice} className="selectddown" />
        <p>Select your capo position:</p>
        <Select options={capoSelect} onChange={setCapoSpot} className="selectddown"/>
     

        <div className="notes">
          <div className="tuningname">
          {tuningChoice.label}
          </div>
          <div className="capoplacement">
          {capoSpot.label === '0' ? capoSuffix(capoSpot.label) : `Capo on ${capoSpot.label}${capoSuffix(capoSpot.label)} fret `}
          </div>
        </div>

        <div className="guitarneck">

            
            <div className="fretboard">
              {renderFret()}
            </div>

        </div>
      </div>
      
      )
    }  
  
    
    
    

const mapStateToProps = state => {
  // console.log(state)
  return {
    tunings: state.tunings,
    notesRun: state.notesRun     
    
    } 
}

export default connect(mapStateToProps, { selectTuning })(TuningDropdown);