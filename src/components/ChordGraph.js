import React from 'react'

const ChordGraph = (props) => {

  if (!props) {
    return <div>Type in a chord</div>
  }
  console.log(props)
  
  //neck size controlled by vPHeight. Only edit that!
  const vpHeight = 200
  const vPwidth = vpHeight * .7
  const neckHeight = vpHeight * .7
  const neckWidth = vPwidth* .8
  const neckPad = neckWidth / 20;
  const stringSpace = (neckWidth-(neckPad*2)) / 5
  let topPad = Number;
  const neckPlacementX = vPwidth * .05
  const neckPlacementY = vpHeight * .15
  const fretCount = 5
  const fontSz = vpHeight / 18

  //Creating dots on the fretboard
  const RenderNote = (str, fret) => {
    const strNum = str;
    const fretNum = fret-1;
    const CX = (neckPlacementX + neckPad) + ( stringSpace* strNum)
    const CY = neckPlacementY + topPad + ((neckHeight / fretCount) * fretNum)
   
    return(
      <circle 
      cx={CX} 
      cy={CY} 
      r={neckHeight/ 20} 
      style={{stroke: 'black'}} />
    )
  }

  const RenderChordNotes = (fing) => {

    if (!fing) {
      return
    }

    let noteObj = Object.assign({}, fing)
    for (let i = 0; i<fing.length; i++){
      if (noteObj[i] === null) {
        delete noteObj[i]
      }
    }
    const note = Object.entries(noteObj).map(note => RenderNote(note[0], note[1]))

    return note;
  }
  
  //Rendering the strings
  const RenderStrings = (n) => {
    return (
      <line x1={neckPlacementX+ neckPad+ (stringSpace * n)} y1={neckPlacementY} x2={neckPlacementX+ neckPad+ (stringSpace * n)} y2={neckPlacementY+ neckHeight} style={{stroke:'black', strokeWidth:`${neckWidth * .005}`}} /> 

    )
  }
  //Rendering the nut
  const RenderNut = () => {
    const nutWidth = neckHeight * .05
    topPad = nutWidth + (neckHeight * 0.05)
    
    return(
      <line x1={neckPlacementX-1} y1={neckPlacementY } x2={neckWidth+neckPlacementX+1} y2={neckPlacementY } style={{stroke:'black', strokeWidth:`${nutWidth}`}} />
      )
  }

  //Rendering frets
  const RenderFret = (n, fretcount) => {
    return(
        <line x1={neckWidth-neckWidth+neckPlacementX} y1={neckPlacementY + ((neckHeight /  fretcount) * n)  } x2={neckWidth+neckPlacementX} 
        y2={neckPlacementY + ((neckHeight /  fretcount) * n)  }  style={{stroke:'black', strokeWidth:`${neckWidth * .015}` }} />
      )
    }

    // Creating cancelled strings
  const strumCancel = (str, X) => {
    return (
      <text x={neckPad+(stringSpace*str)+fontSz/3} y={fontSz * 2} fill='white' style={{fontFamily: "Verdana", fontSize: `${fontSz}`, color: 'white'}}>{X}</text> 
      )
  }

  const RenderStrum = () => {
    if (!props.strum){
     return;
    }

    let strumObj = Object.assign({}, props.strum)
      
    for (let i = 0; i<props.strum.length; i++){
      if (strumObj[i] != 'X' && strumObj[i]) {
        delete strumObj[i]
      }
    }
    const strummer = Object.entries(strumObj).map(note => strumCancel(note[0], note[1]))

    return strummer;
  }
  //Render fingers for playing

  const StringsToStrum = (str, X) => {
    return (
      <text x={neckPad+(stringSpace*str)+fontSz/3} y={neckPlacementY+ neckHeight +fontSz * 2} fill='white' style={{fontFamily: "Verdana", fontSize: `${fontSz}`, color: 'white'}}>{X}</text> 
      )
  }

  const fingerNumbers = () => {
    if (!props.strum){
      return;
     }
    let strumObj = Object.assign({}, props.strum)
      
    for (let i = 0; i<props.strum.length; i++){
      if (strumObj[i] == 'X' && strumObj[i]) {
        delete strumObj[i]
      }
    }
    
    const strummer = Object.entries(strumObj).map(note => StringsToStrum(note[0], note[1]))

    return strummer;
    
  }
    
  
  

 return(
  //  <div className="chordgraph">
    
   <svg width={vPwidth} height={vpHeight}>
      <g>
        <rect width={vPwidth} height={vpHeight} style={{fill: 'grey', strokeWidth:2, }} /> 
        <text x={neckWidth / 2} y= {fontSz*1.2} fill='white' style={{fontFamily: "Verdana", fontSize: `${fontSz * 1.2}`, color: 'white'}}>{props.name}</text>
        <rect width={neckWidth} height={neckHeight} x={neckPlacementX} y={neckPlacementY} style={{fill: 'white', }} /> 
        {RenderStrum()}
        {RenderNut()}
        {RenderStrings(0)}
        {RenderStrings(1)}
        {RenderStrings(2)}
        {RenderStrings(3)}
        {RenderStrings(4)}
        {RenderStrings(5)}
        {RenderFret(1, fretCount)}
        {RenderFret(2, fretCount)} 
        {RenderFret(3, fretCount)} 
        {RenderFret(4, fretCount)}  
        {RenderFret(5, fretCount)}  
        {fingerNumbers()}
        
        
        {RenderChordNotes(props.finger)}


      </g>
       
   </svg>
  //  </div>
 )
}



export default ChordGraph;