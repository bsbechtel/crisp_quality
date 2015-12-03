if (Meteor.users.find().count() === 0) {
  var user = Accounts.createUser({
  	email: "brandon@crisppainting.com",
  	password: 'password',
  	profile: {
  		name: {first: "Brandon" ,last: "Bechtel"}
  	}
  });

  for (var i=0; i<3; i++) {
		Jobs.insert({
			name: "Job " + i,
			floorplan: i + " Bedrooms",
      score: 0,
      total: 0,
      walkthrough_status: false,
      touchup_notes: []
		});
	}

  Jobs.insert({
    name: "Job without notes",
    floorplan: "2 Bedrooms",
    score: 0,
    total: 0,
    walkthrough_status: false,
  });
}