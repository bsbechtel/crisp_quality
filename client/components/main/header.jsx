// Header
Header = React.createClass({
  getHomeLink() {
    if (FlowRouter.getRouteName() === "Quality Audit") {
      return <a className="button ion-ios-arrow-left icon-left button-clear" href={FlowRouter.path("Home")}></a>      
    }
  },

  getModalButton() {
    if (FlowRouter.getRouteName() === "Home") {
      return <button className="button button-icon icon ion-ios-plus-empty" onClick={this.props.ionModal.bind(null, "New Job", <NewJobForm setModalState={this.props.setModalState} />)}></button>
    }
  },

	render() {
		return (
  		<div className="bar bar-header bar-dark">
        {this.getHomeLink()}
        <h1 className="title" style={{margin: 'auto'}}>Crisp Painting</h1>
        {this.getModalButton()}
      </div>
		)
	}
});