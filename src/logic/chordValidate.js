
const chordValidate = (chords, notesRun) => {
  //break up input into array
  let validator = chords.replaceAll(',', '').replaceAll(',','').split(' ')
  let capValidator = [];

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
  
  const notesRefined = notesRun.map(group => Object.values(group).join(','))

  const allNotes = notesRefined.join(',').split(',');

  const checkedChords = capValidator.filter(chord => allNotes.includes(chord[0]))

 

  const completeChords = checkedChords.filter(chord => chord.length === 1 || chord.slice(1, 2).includes('m') || chord.slice(1, 4).includes('dim') || chord.slice(1, 2).includes('7') || chord.slice(1, 2).includes('#') || chord.slice(1, 2).includes('b'))

  return completeChords

}


export default chordValidate;