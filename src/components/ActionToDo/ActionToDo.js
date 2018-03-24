import React from 'react';
import PropTypes from 'prop-types';

import MaterialPaper from 'material-ui/Paper';
import MaterialChip from 'material-ui/Chip';

const ActionToDo = ({children, labels, onLabelDelete}) => {
	let labelItems = labels.map((label) =>
		<MaterialChip
			key={label}
			onDelete={onLabelDelete}
			label={label}
		>
		</MaterialChip>
	);
	return (
		<div className="ActionToDo">
			<MaterialPaper elevation={4}>
				{children}
				<br /><br />
				LABELS
				<div className="labels">{labelItems}</div>
			</MaterialPaper>
		</div>
	);
};

ActionToDo.description = `
A basic Action
`;

ActionToDo.propTypes = {
	children: PropTypes.string.isRequired,
	labels: PropTypes.array,
	onLabelDelete: PropTypes.func.isRequired,
};

export default ActionToDo;
