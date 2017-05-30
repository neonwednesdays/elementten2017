import React from 'react';
import { CONSTANTS } from '../constants';
import ProjectsDetails from '../ProjectsDetails';

/* pages */
import Page from '../Pages/Page';
import ProjectList from '../Pages/ProjectList';

/*
	page for general projects
*/
export default class ProjectPage extends Page {
	static defaultProps = {
		page: CONSTANTS.PAGE.PROJECTS,
		pageName: 'projects',
	};

	renderPageInner() {
		const { pageName } = this.props;

		const data = ProjectsDetails().filter((item) => { return item.category === pageName });

		return (
			<ProjectList
				data={ data }
			/>
		);
	}
}