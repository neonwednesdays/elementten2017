import React, { Component } from 'react';
import cx from 'classnames';

/* components */
import ProjectItem from '../Components/ProjectItem';

/* styles */
import '../Styles/project-list.css';

/*
	ProjectList
	generic page that creates a list
*/
export default class ProjectList extends Component {
	static defaultProps = {
		wrapperCls: '',
		data: [],
    	selectedIdx: undefined,
    };

	render(){
		const { data, selectedIdx, wrapperCls } = this.props;
		
		const shouldRenderExtra = selectedIdx && selectedIdx % 2;
		const itemCount = data.length;

		// render all items normally
		let renderedProjects = [];
		data.forEach((project, idx) => {
			renderedProjects.push(
				<ProjectItem 
					key={ `project-item-${idx}-key` }
					ref={ `project-item-${idx}-ref` }
					onClick={ this.handleItemOnClick }
					index={ idx }
					active={ selectedIdx === idx }
					data={ project }
					isDisplayNone={ shouldRenderExtra && selectedIdx-1 === idx }
				/>
			);
		});

		// add a duplicate fake item one if selecting on right column
		if (shouldRenderExtra && itemCount > 2 && selectedIdx > 0) {
			const extraIndex = selectedIdx - 1;
			const newIndex = selectedIdx + 1;
			const extraData = data[extraIndex];
			renderedProjects.splice(newIndex, 0, 
				<ProjectItem 
					key={ `extra-project-item-${extraIndex}-key` }
					onClick={ this.handleItemOnClick }
					index={ extraIndex }
					data={ extraData }
					isExtra
				/>
			);
		}

		// add an empty item for odd numbered lists
		if (selectedIdx !== undefined && renderedProjects && itemCount % 2 === 0) {
			renderedProjects.push(
				<ProjectItem 
					key={ `pseudo-item-${itemCount}-key` }
					index={ -1 }
					isInvisible
				/>
			);
		}

		return (
			<div className={ cx('et-list-container', wrapperCls) }>
				<ul className='et-project-list'>
					{ renderedProjects }
				</ul>
			</div>
		);
	}

	handleItemOnClick = (idx) => {
		const { onSelectedChange } = this.props;
		onSelectedChange(this.refs[`project-item-${idx}-ref`], idx);
	}
}