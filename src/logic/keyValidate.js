
export const keyValidate = (chords, keys) => {

  let sharpCount = 0;
  let flatCount = 0;

  chords.forEach(chord => {
    if (chord.includes('#')) {
      sharpCount++
    } if (chord.includes('b')) {
      flatCount++
    }
  })

  if (sharpCount > 0 && flatCount > 0) {
    console.log('Please check your key, you have both sharps and flats')
    return 'Please check your key, you have both sharps and flats';
  } else {

  
  return chords;
  }
}
// looking up a key? 
  export const keyLookup =(chords, keys) => {
  
  let keyarr = []
  let keyobj = {};  
  let songkey;
  let chordLength = chords.length
  //check chord for in each key, return keys that specific chord is in
  if (chordLength === 1) 
  {
    songkey = chords[0]
    return songkey
  } 
  
  else if (chordLength > 1) 
  {
    for (let i = 0; i < chordLength-1; i++) {
      if (chords[i] === chords[i+1]) {
        songkey = chords[i]
        return songkey
      }
      else
      {
    
        chords.forEach((chord, i) => {
          for (const [songkey, value] of Object.entries(keys)) {
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
          return songkey
        }
    }
  } 
  }
    
 

  // Validating if there's a flat or sharp? 
  export const keycheck = (key, keys) => {
    let notes = [];
    let tense = ''

    for (const [keynote, values] of Object.entries(keys)) {
      if (values.name === key) {
        tense = values.tense
     }
    }

    if (tense  === 'sharp') {
      notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#',  'G', 'G#']
    } else {
      notes = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab']
    }
    return notes
   
  }