FlowRouter.route('/', {
	name: "Home",
	action() {
		ReactLayout.render(AppBody, {
			content: <JobsList />,
		})
	}
});

FlowRouter.route('/quality-audit/:job', {
	name: "Quality Audit",
	action(params) {
		ReactLayout.render(AppBody, {
			content: <QualityAudit job={params.job} />
		})
	}
});