import { tsConstructSignatureDeclaration } from '@babel/types';
import { combineReducers } from 'redux';

const tuningsReducer = () => {
  return [
    {
      id: 'standard',
      name: 'Standard tuning',
      notes: ['E', 'A', 'D', 'G', 'B', 'E'],
      freq: [82.41, 110, 146.84, 196, 246.96, 329.64]
    },
    {
      id: 'dadgad', 
      name: 'DADGAD tuning',
      notes: ['D', 'A', 'D', 'G', 'A', 'D'],
      freq: [73.42, 110, 146.84, 196, 220, 293.67]
    },
    {
      id: 'doubleD',
      name: 'Double D tuning',
      notes: ['D', 'A', 'D', 'G', 'B', 'D'],
      freq: [73.42, 110, 146.84, 196, 246.96, 293.67]
    },
    {
      id: 'openD',
      name: 'Open D tuning',
      notes: ['D', 'A', 'D', 'F#', 'A', 'D'],
      freq: [73.42, 110, 146.84, 185, 220, 293.67]
    },
    {
      id: 'openE',
      name: 'Open E tuning',
      notes: ['E', 'B', 'E', 'G#', 'B', 'E'],
      freq: [82.41, 123.47, 164.81, 207.65, 246.96, 329.64]
    },
    {
      id: 'openG',
      name: 'Open G tuning',
      notes: ['D', 'G', 'D', 'G', 'B', 'D'],
      freq: [73.42, 98, 146.84, 196, 246.95, 293.67]
      
    },
    {
      id: 'openA',
      name: 'Open A tuning',
      notes: ['E', 'A', 'E', 'A', 'C#', 'E'],
      freq: [82.41, 110, 164.81, 220, 277.18, 329.64]
    },
    {
      id: 'rainSong',
      name: 'Rain Song tuning',
      notes: ['D', 'G', 'C', 'G', 'C', 'D'],
      freq: [73.42, 98, 130.81, 196, 261.63, 293.67]
    },
    {
      id: 'openCsix',
      name: 'Open C6 tuning',
      notes: ['C', 'A', 'C', 'G', 'C', 'E'],
      freq: [65.41, 110, 130.81, 196, 261.63, 329.64]
    },
    {
      id: 'openC',
      name: 'Open C tuning',
      notes: ['C', 'G', 'C', 'G', 'C', 'E'],
      freq: [65.41, 98, 130.81, 196, 261.63, 329.64]
    },
  ]
};

const selectedTuningReducer = (selectedTuning=null, action) => {
  if(action.type === 'TUNING_SELECTION') {
    return action.payload;
  } 
  return selectedTuning;
}

const keysReducer =  
  [
    {
      name: 'Ab',
      tense: 'flat',
      chords : ['Ab', 'Bbm', 'Cm', 'Db', 'Eb', 'Fm', 'Gdim']
  },
  {
    name: 'A',
    tense: 'sharp',
    chords: ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#dim']
  },
  {
    name: 'A#',
    tense: 'sharp',
    chords: ['A#', 'Bm', 'Cm', 'D#', 'E', 'Fm', 'Bdim']
  },
  {
    name: 'Bb',
    tense: 'flat',
    chords: ['Bb', 'Cm', 'Dm', 'Eb', 'F', 'Gm', 'Adim']
  },
  {
    name: 'B',
    tense: 'sharp',
    chords: ['B', 'C#m', 'D#m', 'E', 'F#', 'G#m', 'A#dim']
  },
  {
    name: 'C',
    tense: 'sharp',
    chords: ['C', 'Dm', 'Ebm', 'F', 'G', 'Am', 'Bdim']
  },
  {
    name: 'C#',
    tense: 'sharp',
    chords: ['C#', 'D#m', 'Em', 'F#', 'G#', 'A#m', 'Bdim']
  },
  {
    name: 'Db',
    tense: 'flat',
    chords: ['Db', 'Ebm', 'Fm', 'Gb', 'Ab', 'Bbm', 'Cdim']
  },
  {
    name: 'D',
    tense: 'sharp',
    chords: ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#dim']
  },
  {
    name: 'D#',
    tense: 'sharp',
    chords: ['D#', 'Em', 'Fm', 'G#', 'A#', 'Bm', 'C#dim']
  },
  {
    name: 'Eb',
    tense: 'flat',
    chords: ['Eb', 'Fm', 'Gm', 'Ab', 'Bb', 'Cm', 'Ddim']
  },
  {
    name: 'E',
    tense: 'sharp',
    chords: ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#dim']
  },
  {
    name: 'F', 
    tense: 'flat',
    chords: ['F', 'Gm', 'Am', 'Bb', 'C', 'Dm', 'Edim']
  },
  {
    name: 'F#',
    tense: 'sharp',
    chords: ['F#', 'G#m', 'A#m', 'B', 'C#', 'D#m', 'Fdim']
  },
  {
    name: 'Gb',
    tense: 'flat',
    chords: ['Gb', 'Abm', 'Bbm', 'Cb', 'Db', 'Ebm', 'Fdim']
  },
  {
    name: 'G',
    tense: 'sharp',
    chords: ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#dim']
  },
  {
    name: 'G#',
    tense: 'sharp',
    chords: ['G#', 'A#m', 'Cm', 'Db', 'Eb', 'Fm', 'Gdim']
  }
]

const keyPicker = (selectedKey = null, action) => {
  if(action.type === 'KEY_SELECTION') {
    return action.payload;
  }
  return selectedKey;
}

const notesRunReducer = () => {
  return [
     {
       0: ['A']
     },
     {
       1: ['A#', 'Bb']
     },
     {
       2: ['B']
     },
     {
       3: ['C']
     },
     {
       4: ['C#', 'Db']
     },
     {
       5: ['D']
     },
     {
       6: ['D#', 'Eb']
     },
     {
       7: ['E']
     },
     {
       8: ['F']
     },
     {
       9: ['F#', 'Gb']
     },
     {
       10: ['G']
     },
     {
       11: ['G#', 'Ab']
     }
 ]
}
  
const chordLayouts = 
  
    [
    {
      name: "A",
      finger: [null, null, 2, 2, 2, null], strum: ['X','0', '2', '1', '3', '0']
    },
    {
      name: "Amaj7",
      finger: [null, null, 2, 1, 2, null], strum: ['X','0', '2', '1', '3', '0']
    },
    {
      name: "Am",
      finger: [null, null, 2, 2, 1, null], strum: ['X','0', '2', '3', '1', '0']
    },
    {
      name: "Am7",
      finger: [null, null, 2, null, 1, null], strum: ['X','0', '2', '0', '1', '0']
    },
    {
      name: 'A#',
      finger: [null, 1, 3, 3, 3, 1], 
      strum: ['X','1', '3', '3', '3', '1']
    },
    {
      name: "A#maj7",
      finger: [null, 1, 3, 2, 3, 1], strum: ['X','1', '3', '2', '4', '1']
    },
    {
      name: 'A#m',
      finger: [null, 1, 3, 3, 2, 1], 
      strum: ['X','1', '3', '4', '2', '1']
    },
    {
      name: "A#m7",
      finger: [null, 1, 3, 1, 2, 1], strum: ['X','1', '3', '1', '2', '1']
    },
    {
      name: "Bb",
      finger: [null, 1, 3, 3, 3, 1], 
      strum: ['X','1', '3', '3', '3', '1']
    },
    {
      name: "Bbm",
      finger: [null, 1, 3, 3, 2, 1], 
      strum: ['X','1', '3', '4', '2', '1']
    },
    {
      name: "Bbmaj7",
      finger: [null, 1, 3, 2, 3, 1], 
      strum: ['X','1', '3', '2', '4', '1']
    },
    {
      name: "Bbm7",
      finger: [null, 1, 3, 1, 2, 1], 
      strum: ['X','1', '3', '1', '2', '1']
    },
    {
      name: "B",
      finger: [null, 2, 4, 4, 4, 2], strum: ['X','1', '3', '3', '3', '1']
    },
    {
      name: "Bm",
      finger: [null, 2, 4, 4, 3, 2], 
      strum: ['X','1', '3', '4', '2', '1']
    },
    
    {
      name: "Bmaj7",
      finger: [null, 2, 4, 3, 4, 2], 
      strum: ['X','1', '3', '2', '4', '1']
    },
    {
      name: "Bm7",
      finger: [null, 2, 4, 2, 3, 2], 
      strum: ['X','1', '3', '1', '2', '1']
    },
    {
      name: "C",
      finger: [null, 3, 2, null, 1, null], strum: ['X','3', '2', '0', '1', '0']
    },
    {
      name: "Cm",
      finger: [null, 3, 5, 5, 4, 3], 
      strum: ['X','1', '3', '4', '2', '1']
    },
    {
      name: "Cmaj7",
      finger: [null, 3, 2, null, null, null], 
      strum: ['X','3', '2', '0', '0', '0']
    },
    {
      name: "Cm7",
      finger: [null, 3, 5, 3, 4, 3], 
      strum: ['X','1', '3', '1', '2', '1']
    },
    {
      name: 'C#',
      finger: [null, null, null, 1, 2, 1], 
      strum: ['X','X', 'X', '1', '3', '2']
    },
    {
      name: 'C#maj7',
      finger: [null, 4, 3, 1, 1, 1], 
      strum: ['X','4', '3', '1', '1', '1']
    },
    {
      name: 'C#m',
      finger: [null, null, null, 1, 2, null], 
      strum: ['X','X', 'X', '1', '3', '0']
    },
    {
      name: 'C#m7',
      finger: [null, 4, 2, 1, null, null], 
      strum: ['X','4', '2', '1', '0', '0']
    },

    {
      name: 'Db',
      finger: [null, null, null, 1, 2, 1], 
      strum: ['X','X', 'X', '1', '3', '2']
    },
    {
      name: 'Dbmaj7',
      finger: [null, 4, 3, 1, 1, 1], 
      strum: ['X','4', '3', '1', '1', '1']
    },
    {
      name: 'Dbm',
      finger: [null, null, null, 1, 2, null], 
      strum: ['X','X', 'X', '1', '3', '0']
    },
    {
      name: 'Dbm7',
      finger: [null, 4, 2, 1, null, null], 
      strum: ['X','4', '2', '1', '0', '0']
    },
    {
      name: "D", 
      finger: [null, null, null, 2, 3, 2],
      strum: ['X', 'X', '0', '1', '3', '2']
    },
    {
      name: "Dmaj7", 
      finger: [null, null, null, 2, 2, 2],
      strum: ['X', 'X', '0', '1', '1', '1']
    },
    {
      name: "Dm", 
      finger: [null, null, null, 2, 3, 1],
      strum: ['X', 'X', '0', '2', '3', '1']
    },
    {
      name: "Dm7", 
      finger: [null, null, null, 2, 1, 1],
      strum: ['X', 'X', '0', '2', '1', '1']
    },
    {
      name: 'D#', 
      finger: [null, null, 1, 3, 4, 3],
      strum: ['X', 'X', '1', '2', '4', '3']
    },
    {
      name: 'D#maj7', 
      finger: [null, null, 1, 3, 3, 3],
      strum: ['X', 'X', '1', '3', '3', '3']
    },
    {
      name: 'D#m7', 
      finger: [null, null, 1, 3, 2, 2],
      strum: ['X', 'X', '1', '4', '2', '3']
    },
    {
      name: 'Eb',
      finger: [null, null, 1, 3, 4, 3],
      strum: ['X', 'X', '1', '2', '4', '3']
    },
    
    {
      name: 'D#m', 
      finger: [null, null, 1, 3, 4, 2],
      strum: ['X', 'X', '1', '3', '4', '2']
    },
    {
      name: 'Ebm', 
      finger: [null, null, 1, 3, 4, 2],
      strum: ['X', 'X', '1', '3', '4', '2']
    },
    {
      name: 'Ebmaj7', 
      finger: [null, null, 1, 3, 3, 3],
      strum: ['X', 'X', '1', '3', '3', '3']
    },
    {
      name: 'Ebm7', 
      finger: [null, null, 1, 3, 2, 2],
      strum: ['X', 'X', '1', '4', '2', '3']
    },

    {
      name: "E", 
      finger: [null, 2, 2, 1, null, null],
      strum: ['0', '2', '3', '1', '0', '0']
    },
    {
      name: "Emaj7", 
      finger: [null, 2, 1, 1, null, null],
      strum: ['0', '3', '1', '2', '0', '0']
    },
    {
      name: "Em", 
      finger: [null, 2, 2, null, null, null],
      strum: ['0', '2', '3', '0', '0', '0']
    },
    {
      name: "Em7", 
      finger: [null, 2, null, null, null, null],
      strum: ['0', '2', '0', '0', '0', '0']
    },
    
    {
      name: "F", 
      finger: [1, 3, 3, 2, 1, 1],
      strum: ['1', '3', '4', '2', '1', '1']
    },
    {
      name: "Fmaj7", 
      finger: [1, null, 2, 2, 1, null],
      strum: ['1', 'X', '3', '4', '2', 'X']
    },
    {
      name: "Fm", 
      finger: [1, 3, 3, 1, 1, 1],
      strum: ['1', '3', '4', '1', '1', '1']
    },
    {
      name: "Fm7", 
      finger: [1, 3, 1, 1, 4, 1],
      strum: ['1', '3', '1', '1', '4', '1']
    },
    {
      name: 'F#', 
      finger: [2, 4, 4, 3, 2, 2],
      strum: ['1', '3', '4', '2', '1', '1']
    },
    {
      name: 'F#m',  
      finger: [2, 4, 4, 2, 2, 2],
      strum: ['1', '3', '4', '1', '1', '1']
    },
    {
      name: 'F#maj7', 
      finger: [null, null, 4, 3, 2, 1],
      strum: ['X', 'X', '4', '2', '1', '1']
    },
    {
      name: 'F#m7', 
      finger: [2, 4, 2, 2, 5, 2],
      strum: ['1', '3', '1', '1', '4', '1']
    },
    {
      name: 'Gb', 
      finger: [2, 4, 4, 3, 2, 2],
      strum: ['1', '3', '4', '2', '1', '1']
    },
    {
      name: 'Gbmaj7', 
      finger: [null, null, 4, 3, 2, 1],
      strum: ['X', 'X', '4', '2', '1', '1']
    },
    {
      name: 'Gbm7', 
      finger: [2, 4, 2, 2, 5, 2],
      strum: ['1', '3', '1', '1', '4', '1']
    },

    {
      name: 'Gbm', 
      finger: [2, 4, 4, 2, 2, 2],
      strum: ['1', '3', '4', '1', '1', '1']
    },
    {
      name: "G", 
      finger: [3, 2, null, null, 3, 3],
      strum: ['3', '2', '0', '0', '3', '3']
    },
    {
      name: "Gmaj7", 
      finger: [3, 2, null, null, null, 2],
      strum: ['3', '2', '0', '0', '0', '1']
    },
    {
      name: "Gm", 
      finger: [3, 5, 5, 3, 3, 3],
      strum: ['1', '3', '4', '1', '1', '1']
    },
    {
      name: "Gm7", 
      finger: [3, 5, 3, 3, 3, 3],
      strum: ['1', '3', '1', '1', '1', '1']
    },
    {
      name: "Ab", 
      finger: [null, null, 1, 1, 1, null],
      strum: ['X', 'X', '1', '1', '1', 'X']
    },
    {
      name: 'Abmaj7', 
      finger: [null, null, 1, 1, 1, 3],
      strum: ['X', 'X', '1', '1', '1', '4']
    },
    {
      name: 'G#', 
      finger: [null, null, 1, 1, 1, null],
      strum: ['X', 'X', '1', '1', '1', 'X']
    },
    {
      name: 'G#maj7', 
      finger: [null, null, 1, 1, 1, 3],
      strum: ['X', 'X', '1', '1', '1', '4']
    },
    {
      name: 'G#m7', 
      finger: [4, null, 4, 4, 4, null],
      strum: ['1', 'X', '2', '3', '4', 'X']
    },
    {
      name: "Abm", 
      finger: [null, null, 1, 1, null, null],
      strum: ['X', 'X', '2', '3', '0', 'X']
    },
    {
      name: 'Abm7', 
      finger: [4, null, 4, 4, 4, null],
      strum: ['1', 'X', '2', '3', '4', 'X']
    },
    {
      name: "G#m",
      finger: [null, null, 1, 1, null, null],
      strum: ['X', 'X', '2', '3', '0', 'X']
    },
   
  ]
  


const chordSelectionReducer = (selectedChord=null, action) => {
  if (action.type === 'CHORDS_CHOSEN') {
    
      //break up input into array
      // let validator = action.payload.replaceAll(',', '').replaceAll(',','').split(' ')
      let validator = action.payload.replaceAll(', ', ' ').replaceAll(',',' ').split(' ')
      let capValidator = [];
      let notesRun = notesRunReducer()
      
    
      //check array items to remove anything not in notesRun
      validator.forEach(chord => {
        if (chord[0]) {
          if (chord[0] === chord[0].toUpperCase()) {
            capValidator.push(chord)
           
          } else {
            capValidator.push(chord[0].toUpperCase()+chord.slice(1))
          }
        }
       
      })
      const notesRefined = notesRun.map(group => Object.values(group).join(',')).join(',').split(',')
      const checkedChords = capValidator.filter(chord => notesRefined.includes(chord[0]))
      
      // console.log(checkedChords)
     
      const completeChords = checkedChords.filter(chord => chord.length === 1 || chord.slice(1, 2).includes('m') || chord.slice(1, 4).includes('dim') || chord.slice(1, 2).includes('7') || chord.slice(1, 2).includes('#') || chord.slice(1, 2).includes('b') || chord[1].includes('a'))

      // console.log(completeChords)

      const complete2 = completeChords.map(chord => {
        if (chord.includes('minor')) {
          return chord.replaceAll('minor','m')
        }
        if (chord.includes('diminished')) {
          return chord.replaceAll('diminished','dim')
        }
        if (chord.includes('augmented')) {
          return chord.replaceAll('augmented','aug')
        }
        if (chord.length > 2) {
          if (chord[2] === 'm' || chord[2] === 'd') {
            return chord
          }
          return chord.slice(0,2)
        }
       
          return chord
        })
        
      

      // this is the second portion to checking the keys
      
      let keyarr = []
      let keyobj = {};  
      let songkey;
      let chordLength = completeChords.length
      
        //check chord for in each key, return keys that specific chord is in
      if (chordLength === 1) 
      {
        songkey = complete2[0]
        keyarr.push(complete2[0])
        keyobj.key = complete2[0]
        
        
      } 
      else if (chordLength > 1) 
      {
        for (let i = 0; i < chordLength-1; i++) {
          if (complete2[i] === complete2[i+1]) {
            songkey = complete2[i]
          }
            else
          {
            complete2.forEach((chord, i) => {
              for (const [songkey, value] of Object.entries(keysReducer)) {
                if (value.chords.includes(chord)) {
                  keyarr.push(value.name)
                }
              }
            })
          
            for (let i = 0; i < keyarr.length; i++) {
              let key = keyarr[i];
              keyobj[key] = keyobj[key] ? keyobj[key] + 1 : 1;
              }
              songkey = (Object.keys(keyobj).reduce((a, b) => { return keyobj[a] > keyobj[b] ? a : b }))
              
            }
        }
      } 
          
      //  console.log(songkey)
      //  console.log(keyobj)
      //  console.log(keyarr)
      
        // Validating if there's a flat or sharp? 
        let notes = [];
        let tense = ''
      
        for (const [keynote, values] of Object.entries(keysReducer)) {
          if (values.name === songkey) {
            // console.log(values.name)
            // console.log(values.tense)
            tense = values.tense
          }
        }
      
        if (tense  === 'sharp') {
          notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#',  'G', 'G#']
        } else {
          notes = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab']
        }
        
        console.log(songkey)
        console.log(tense)
       
        let standardTuning = tuningsReducer()[0];


        // find index in notesRun to calc
        let capoOneRec;
        let capoTwoRec;
        let capoThreeRec;
        let capoFourRec;
        const openStringSix = standardTuning.notes[0]
        const openStringFive = standardTuning.notes[1]
        const openStringFour = standardTuning.notes[2]
        const openStringSixIndex = notes.indexOf(openStringSix)
        const openStringFiveIndex = notes.indexOf(openStringFive)
        const openStringFourIndex = notes.indexOf(openStringFour)
        const sixthStringNotes = stringRun(openStringSixIndex, notes)
        const fifthStringNotes = stringRun(openStringFiveIndex, notes)
        const fourthStringNotes = stringRun(openStringFourIndex, notes)
        
        function stringRun(stringIndex, scale) {
          let stringNotes = [];
          for (let i = stringIndex; i < 12; i++) {
            stringNotes.push(scale[i])
          }
          for (let i = 0; i < stringIndex; i++) {
            stringNotes.push(scale[i])
          }
          return stringNotes;
        }
          
        if (sixthStringNotes.indexOf(songkey) < fifthStringNotes.indexOf(songkey)) {
          capoTwoRec = sixthStringNotes.indexOf(songkey)
          capoThreeRec = fifthStringNotes.indexOf(songkey)-5
          capoFourRec= fifthStringNotes.indexOf(songkey) - 3
          capoOneRec = fourthStringNotes.indexOf(songkey)-3
        } else {
          capoOneRec = fifthStringNotes.indexOf(songkey)
          capoTwoRec = sixthStringNotes.indexOf(songkey)- 3
          capoFourRec = fourthStringNotes.indexOf(songkey)
          capoThreeRec = sixthStringNotes.indexOf(songkey) 
        }
        
         function chordChange(capo) {
          const chordIndx = complete2.map(chord => {
            if (chord.slice(1,2) === '#' || chord.slice(1,2) === 'b') {
              return notes.indexOf(chord.slice(0,2))
            }else {
              
            return notes.indexOf(chord.slice(0,1))
            }
          })
          
          const newChordIndx = chordIndx.map(indx => {
            return indx - capo
          })
        
          const comboChordIndx = newChordIndx.map(indx => {
            if (indx < 0) {
              return 12 + indx
            } else {
              return indx
            }
          })
          console.log(capoOneRec)
          console.log(capoTwoRec)
          console.log(chordIndx)
          console.log(newChordIndx)
          console.log(comboChordIndx)
          console.log(completeChords)
          console.log(complete2)
          console.log(notes)
        
          const newChords = complete2.map((chord, i) => {
            // console.log(notes[12])
            return notes[comboChordIndx[i]] + (chord.slice(1, 2) !== "#" && chord.slice(1,2) !== 'b' ? chord.slice(1) : chord.slice(2))
            
          })
          console.log(newChords)
          return newChords
          }
          

        let capoObj = [
          {[capoOneRec]: chordChange(capoOneRec)},
          {[capoTwoRec]: chordChange(capoTwoRec)},
          {[capoThreeRec]: chordChange(capoThreeRec)},
          {[capoFourRec]: chordChange(capoFourRec)}
        ]
        
        console.log(capoObj)
         capoObj = capoObj.filter(entry => 
           Object.keys(entry) > 0 )
        
        return capoObj;
   
    
  } else {
    return selectedChord
  }

}

//To display correct data for chord chart
const chordChartSelectionReducer = (selectedChord=null, action) => {
  
  if (action.type === 'CHORD_SELECTION') {
    const result = chordLayouts.filter(chord => chord.name === action.payload)
    
    if (result) {

      return result;
    } else {
      return selectedChord;
    }
    
   

    
  } else {
    return selectedChord;
  }
}

export default combineReducers({
  tunings: tuningsReducer,
  selectedTuning: selectedTuningReducer,
  keys: keysReducer,
  keyPicker: keyPicker, 
  notesRun: notesRunReducer,
  chordLayouts: chordLayouts,
  convertedChords: chordSelectionReducer,
  chordChart: chordChartSelectionReducer
  
 })