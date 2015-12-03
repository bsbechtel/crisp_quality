// Form for adding touchup notes
TouchupNotes = React.createClass({
  getInitialState() {
  	return {
  		notes: ""
  	}
  },

  handleSubmit(event) {
  	event.preventDefault();

    Jobs.update({_id: this.props.job._id}, {
      $addToSet: {
      	touchup_notes: {
          wall: this.props.currentWall,
          touchup_notes: this.state.notes
      	}
      }
    });

    this.props.setModalState(false);
  },

  handleChange(event) {
		this.setState({
			notes: event.target.value
		});
  },

	render() {
		var notes = this.state.notes;

		return (
			<div>
			  <div className="list">
			    <label className="item item-input">
			      <span className="input-label">Notes on wall {this.props.currentWall}</span>
			      <input 
			        type="text"
			        value={notes}
			        ref="notes"
			        onChange={this.handleChange} />
			    </label>
			  </div>
			  <div className="padding">
			    <button 
			      onClick={this.handleSubmit}
			      className="button button-block button-dark">Add Notes</button>
			  </div>
			</div>
		)
	}
});