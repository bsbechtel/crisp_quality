// Form for adding a new job
NewJobForm = React.createClass({
  getInitialState() {
  	return {
  		unit_name: "",
  		unit_type: ""
  	}
  },

  handleSubmit(name, type) {
  	event.preventDefault();

    // Insert task
    Jobs.insert({
      name: name,
      floorplan: type,
      score: 0,
      total: 0,
      walkthrough_status: false,
      touchup_notes: []
    });

    // Clear form
    ReactDOM.findDOMNode(this.refs.unitName).value = "";
    ReactDOM.findDOMNode(this.refs.unitType).value = "";

    this.props.setModalState(false);
  },

  handleChange(input, event) {
  	if (input === "name") {
  		this.setState({
  			unit_name: event.target.value
  		});
  	}
  	if (input === "type") {
  		this.setState({
  			unit_type: event.target.value
  		});
  	}
  },

	render() {
		var name = this.state.unit_name;
		var type = this.state.unit_type;

		return (
			<div>
			  <div className="list">
			    <label className="item item-input">
			      <span className="input-label">Unit Name</span>
			      <input 
			        type="text"
			        value={name}
			        ref="unitName"
			        onChange={this.handleChange.bind(this, "name")} />
			    </label>
			    <label className="item item-input">
			      <span className="input-label">Unit Type</span>
			      <input 
			        type="text"
			        value={type}
			        ref="unitType"
			        onChange={this.handleChange.bind(this, "type")} />
			    </label>
			  </div>
			  <div className="padding">
			    <button 
			      onClick={this.handleSubmit.bind(null, this.state.unit_name, this.state.unit_type)}
			      className="button button-block button-dark">Save Job</button>
			  </div>
			</div>
		)
	}
});