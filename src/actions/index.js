
export const selectTuning = (tuning) => {
  return {
    type: 'TUNING_SELECTION',
    payload: tuning

  }
}

export const chordLookup = (chord) => {
  return {
    type: 'CHORD_SELECTION',
    payload: chord
  }
}

export const chordsChosen = (chords) => {
  return {
    type: 'CHORDS_CHOSEN', 
    payload: chords
  }
}
