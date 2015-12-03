QualityAudit = React.createClass({
  mixins: [ReactMeteorData],
  
  getMeteorData() {
    return {
      job: Jobs.findOne({_id: this.props.job})
    }
  },

  startWalkthrough() {
		Jobs.update({_id: this.data.job._id}, {$set: {walkthrough_status: "Started"}});
  },

  endWalkthrough() {
		Jobs.update({_id: this.data.job._id}, {$set: {walkthrough_status: "Finished"}});
    FlowRouter.go("Home");
  },

  resetWalkthrough() {
  	Jobs.update({_id: this.data.job._id}, {$set: {score: 0, total: 0, walkthrough_status: false, touchup_notes: []}});
  },

	render() {
    if (!this.data) {
      return <div>Loading...</div>
    }

		return (
			<div className="row">
			  <div className="col">
			    {this.data.job.walkthrough_status === false ? <Directions job={this.data.job} startWalkthrough={this.startWalkthrough} /> : false}
    			{this.data.job.walkthrough_status === "Started" ? <CardPage job={this.data.job} endWalkthrough={this.endWalkthrough} ionModal={this.props.ionModal} setModalState={this.props.setModalState} /> : false}
          {this.data.job.walkthrough_status === "Finished" ? <FinishedMessage job={this.data.job} resetWalkthrough={this.resetWalkthrough} /> : false}
  			</div>
			</div>
		)
	}
});