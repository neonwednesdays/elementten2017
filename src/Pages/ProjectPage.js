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
		data: ProjectsDetails().filter((item) => { return item.category === CONSTANTS.CATEGORY.PROJECTS }),
	};

	state = {
		selectedIdx: undefined,
	}

	renderPageInner() {
		const { data } = this.props;
		const { selectedIdx } = this.state;

		return (
			<ProjectList
				wrapperCls="et-page__content-container"
				selectedIdx={ selectedIdx }
				data={ data }
				onSelectedChange={ this.handleOnSelect }
			/>
		);
	}

	handleOnSelect = (item, idx) => {
		this.handleIndexChange(idx);
		this.scrollToItem(idx);
	}
}