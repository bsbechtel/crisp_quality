// List of Current Jobs
JobsList = React.createClass({
  mixins: [ReactMeteorData],
  
  getMeteorData() {
    return {
      jobs: Jobs.find().fetch()
    }
  },

	render() {
    let list = this.data.jobs.map(function(job) {
      return (
        <a className="item" key={job._id} href={FlowRouter.path("Quality Audit", {job: job._id})} >
          <h2>{job.name} - {job.floorplan}</h2>
          <span>{job.walkthrough_status && job.total !== 0 ? + parseInt(job.score/job.total*100, 10).toFixed(0) + "%" : false}</span>
          <span> ({job.score}/{job.total}) - {job.walkthrough_status ? job.walkthrough_status : "Not Started"}</span>
        </a>
      )
    })

		return (
      <div className="list">
        {list}
      </div>
		)
	}
});