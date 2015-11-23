Directions = React.createClass({
	getInitialState() {
		return {
		  show: !this.props.job.walkthrough_status
	  }
	},

	render() {
		if (this.state.show) {
    	return (
    		<div>
      		<h3 className="directions">
      		  You are doing a walkthrough for apartment {this.props.job.name}. Swipe right for each wall that is painted correctly. Swipe left for each wall that needs touched up.
    	  	</h3>
    	  	<button className="button button-dark button-block" onClick={() => this.props.startWalkthrough()} >Begin</button>
    	  </div>
    	)
    } else {
    	return false;
    }
	}
});