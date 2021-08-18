
function capoSuggest(key, chords, scale, tunings) {
  
  //find index in notesRun to calc
  let capoOneRec;
  let capoTwoRec;
  let capoThreeRec;
  let capoFourRec;
  const openStringSix = tunings[0].notes[0]
  const openStringFive = tunings[0].notes[1]
  const openStringFour = tunings[0].notes[2]
  const openStringSixIndex = scale.indexOf(openStringSix)
  const openStringFiveIndex = scale.indexOf(openStringFive)
  const openStringFourIndex = scale.indexOf(openStringFour)
  const sixthStringNotes = stringRun(openStringSixIndex, scale)
  const fifthStringNotes = stringRun(openStringFiveIndex, scale)
  const fourthStringNotes = stringRun(openStringFourIndex, scale)

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
  

  console.log(key)
  console.log(sixthStringNotes.indexOf(key))
  console.log(fifthStringNotes.indexOf(key))
  console.log(fourthStringNotes.indexOf(key))

  if (sixthStringNotes.indexOf(key) < fifthStringNotes.indexOf(key)) {
    capoTwoRec = sixthStringNotes.indexOf(key)
    capoThreeRec = fifthStringNotes.indexOf(key)-5
    capoFourRec= fifthStringNotes.indexOf(key) - 3
    capoOneRec = fourthStringNotes.indexOf(key)-3
   } else {
    capoOneRec = fifthStringNotes.indexOf(key)
    capoTwoRec = sixthStringNotes.indexOf(key)- 3
    capoFourRec = fourthStringNotes.indexOf(key)
    capoThreeRec = sixthStringNotes.indexOf(key) 
   }


  //  console.log(`Capo 1: ${capoOneRec}`)
  //  console.log(`Capo 2: ${capoTwoRec}`)
  //  console.log(`Capo 3: ${capoThreeRec}`)
  //  console.log(`Capo 4: ${capoFourRec}`)
   


 function chordChange(capo) {
  const chordIndx = chords.map(chord => {
    if (chord.slice(1,2) === '#' || chord.slice(1,2) === 'b') {
      
      return scale.indexOf(chord.slice(0,2))
    }else {
      
    return scale.indexOf(chord[0])
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

  const newChords = chords.map((chord, i) => {
    return scale[comboChordIndx[i]]+(chord.slice(1,2) && chord.slice(1,2) !== '#' && chord.slice(1,2) !== 'b' ? chord.slice(1) : '')
  })

  return newChords
  }

let capoObj = [
  {[capoOneRec]: chordChange(capoOneRec)},
  {[capoTwoRec]: chordChange(capoTwoRec)},
  {[capoThreeRec]: chordChange(capoThreeRec)},
  {[capoFourRec]: chordChange(capoFourRec)}
]


 capoObj = capoObj.filter(entry => 
   Object.keys(entry) > 0 )


return capoObj;

}

export default capoSuggest;