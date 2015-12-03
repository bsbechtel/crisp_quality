FinishedMessage = React.createClass({
	getInitialState() {
		return {
		  show: this.props.job.walkthrough_status === "Finished",
	  }
	},

	render() {
		var key = 0;

    if ('touchup_notes' in this.props.job) {
    	var notes = this.props.job.touchup_notes.map((note) => {
    		key++;
  	  	return (<li className="item" key={key} >Wall {note.wall}: {note.touchup_notes}</li>)
  	  })
      
      var message = this.props.job.touchup_notes.length === 0 ? "If you would like to repeat it, click below:" : "The following items need touched up:";
    }

		if (this.state.show) {
  		return (
        <div>
          <h5 className="directions">
            You completed this walkthrough! {message ? message : "If you would like to repeat it, click below:"}
          </h5>
          {notes ? notes : false}
          <button className="button button-dark button-block" onClick={() => this.props.resetWalkthrough()}>Restart Walkthrough</button>
        </div>
  		)			
		} else {
			return false;
		}
	}
});