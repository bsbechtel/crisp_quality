IonModal = React.createClass({
  render() {
    return (
      <div className="modal-backdrop">
        <div className="modal-wrapper">
          <div className="modal">
            <div className="bar bar-dark bar-header">
              {this.props.children}
            </div>
            <div className="content overflow-scroll has-header">
              <div className="padding-vertical">
                {this.props.modalContent}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

Backdrop = React.createClass({
  render() {
    return (
      <div className="modal-backdrop active"></div>
    )
  }
})