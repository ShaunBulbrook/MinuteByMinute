import React from 'react';
import PropTypes from 'prop-types';

const ActionToDo = ({children, labels}) => {
	let labelItems = labels.map((label) =>
		<li key={label}>
			{label}
		</li>
	);
	return (
		<div className="ActionToDo">
			{children}
			<br /><br />
			LABELS
			<ul>{labelItems}</ul>
		</div>
	)
};

ActionToDo.description = `
A basic Action
`;

ActionToDo.propTypes = {
	children: PropTypes.string.isRequired,
	labels: PropTypes.array,
};

export default ActionToDo;
