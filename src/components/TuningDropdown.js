import React from 'react';
import { connect } from 'react-redux';
import { selectTuning } from '../actions'
import './tuningdropdown.css'


class TuningDropdown extends React.Component {
 

  renderDropdown = () => {
      return this.props.tunings.map(tuning => {
        return (
          <li key={tuning.id} className="dd-list-item" onClick={(e) =>{ e.preventDefault();
            this.props.selectTuning(tuning)}} >{tuning.name}</li>
          
        )
      })
  }


  render() {
    

    return (
      <div className="tuning-dropdown-header" >
        {this.props.selectedTuning === null ? 'Select a tuning' : this.props.selectedTuning.name}
        {this.renderDropdown()}
      </div>
      
    )
  }
}  

    


const mapStateToProps = state => {
  console.log(state)
  return {tunings: state.tunings} 
}

export default connect(mapStateToProps, { selectTuning })(TuningDropdown);