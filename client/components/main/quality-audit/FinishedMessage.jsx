FinishedMessage = React.createClass({
	getInitialState() {
		return {
		  show: this.props.job.walkthrough_status === "Finished",
	  }
	},

	render() {
		if (this.state.show) {
  		return (
        <div>
          <h3 className="directions">
            You completed this walkthrough! If you would like to repeat it, click below:
          </h3>
          <button className="button button-dark button-block" onClick={() => this.props.resetWalkthrough()}>Restart Walkthrough</button>
        </div>
  		)			
		} else {
			return false;
		}
	}
});