let Transition = React.addons.CSSTransitionGroup;

// Main app component
AppBody = React.createClass({
  getInitialState() {
    return {
      modal: false
    }
  },

  ionModal(job, content) {
    this.setState({
      modal: (
        <IonModal modalContent={content}>
          <div className="h1 title">{job}</div>
          <button onClick={ () => this.setState({modal:false}) } className="button button-icon icon ion-ios-close-empty">
          </button>
        </IonModal>
      )
    })
  },

  setModalState(status) {
    this.setState({
      modal: status
    });
  },

  render() {
    return (
      <div className="ionic-body">
        {this.state.modal ? <Backdrop /> : false}
        <Transition transitionName="modal">
          {this.state.modal}
        </Transition>

        <Header ionModal={this.ionModal} setModalState={this.setModalState} />
        <div className="view">
          <div className="scroll-content ionic-scroll">
            <div className="content overflow-scroll has-header">
              {this.props.content}
            </div>
          </div>
        </div>
      {this.props.tabs}
      </div>
    )
  }
});