CardPage = React.createClass({
	getInitialState() {
		return {
		  show: this.props.job.walkthrough_status === "Started",
		  oldCard: true,
		  newCard: false
	  }
	},

  newCard() {
  	this.setState({
  		newCard: false,
  		oldCard: false
  	});

  	this.setState({
  		newCard: <Card job={this.props.job} newCard={this.newCard} ionModal={this.props.ionModal} setModalState={this.props.setModalState} />
  	});
  },

	render() {
    if (this.state.show) {
  		return (
  			<div>
  			  {this.state.oldCard ? <Card job={this.props.job} newCard={this.newCard} ionModal={this.props.ionModal} setModalState={this.props.setModalState} /> : false}
  			  {this.state.newCard}
    			<button className="button button-dark button-block" onClick={() => this.props.endWalkthrough()}>End Walkthrough</button>
  			</div>
  		)
    } else {
    	return false;
    }
	}
});

Card = React.createClass({
	getInitialState() {
		return {
			x: 0,
			y: 0,
			initialX: 0,
			intitialY: 0,
			dragging: "none",
			wall: this.props.job ? this.props.job.total + 1 : 1
		}
	},

	moveCardInit(e) {
    e.preventDefault();
    this.setState({
      initialX: e.touches[0].pageX,
      initialY: e.touches[0].pageY,
      dragging: "none"
    })
  },  

  moveCard(e) {
    e.preventDefault();
    deltaX = (e.touches[0].pageX - this.state.initialX)
    deltaY = (e.touches[0].pageY - this.state.initialY)
    this.setState({
      x: deltaX,
      y: deltaY
    })
  },  

  moveCardEnd(e) {
    e.preventDefault();
  	// Swipe left, fail
  	if (e.changedTouches[0].pageX < 50) {
  		this.setState({
  			x: -1000,
  			y: 0,
  			dragging: "all 0.5s ease"
  		})
      var wall = this.state.wall;
  		Jobs.update({_id: this.props.job._id}, {$set: {total: this.props.job.total + 1}});
      this.props.ionModal("Touchup Notes", <TouchupNotes job={this.props.job} setModalState={this.props.setModalState} currentWall={wall} />);
  		Meteor.setTimeout(() => this.props.newCard(), 300);
    // Swipe right, pass
  	} else if (e.changedTouches[0].pageX > (window.innerWidth - 50)) {
  		this.setState({
  			x: 1000,
  			y: 0,
  			dragging: "all 0.5s ease"
  		})
  		Jobs.update({_id: this.props.job._id}, {$set: {score: this.props.job.score + 1, total: this.props.job.total + 1}});
  		Meteor.setTimeout(() => this.props.newCard(), 300);
  	} else {
  		this.setState({
  			x: 0,
  			y: 0,
  			dragging: "all 0.5s ease"
  		})
  	}
  },

	render() {
	  let cardStyle = {
      transform: "translate(" + 
        this.state.x + "px," + 
        this.state.y + "px) " +
        "rotate("+this.state.x/10 + "deg)",
      transition: this.state.dragging,
      WebkitTransform: "translate(" +
        this.state.x + "px," +
        this.state.y + "px)" +
        " rotate("+this.state.x/10 + "deg)",
      WebkitTransition: this.state.dragging
    }

    return (
   		<div
 			  className="card"
 			  onTouchStart={this.moveCardInit}
 			  onTouchMove={this.moveCard}
 			  onTouchEnd={this.moveCardEnd}
 			  style={cardStyle} >
   	    <h5 className="job_name">{this.props.job.name}</h5>
   	    <h2 className="score">Score: {this.props.job.score}/{this.props.job.total}</h2>
 			  <div className="item item-text-wrap item-icon-left item-icon-right wall-number">
 			    <div className="button icon-left button-clear ion-arrow-left-a swipe-left button-dark">Fail</div>
   			  <span className="wall-text">Wall {this.state.wall}</span>
   			  <div className="button icon-right ion-arrow-right-a button-clear swipe-right button-dark">Pass</div>
   			</div>
 			</div>
    )
	}
});