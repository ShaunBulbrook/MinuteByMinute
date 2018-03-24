import React from 'react';
import PropTypes from 'prop-types';

const AgendaHeading = ({heading, timeStart, timeFinish}) => (
	<div className="AgendaHeading">
		<h1>{heading}</h1>
		Time: {timeStart}
		Duration: {timeFinish - timeStart}
	</div>
);

AgendaHeading.description = `
AgendaHeading display component
`;

AgendaHeading.propTypes = {
	heading: PropTypes.string.isRequired,
	timeStart: PropTypes.number,
	timeFinish: PropTypes.number,
};

export default AgendaHeading;
