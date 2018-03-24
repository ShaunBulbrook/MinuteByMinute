import React from 'react';
import PropTypes from 'prop-types';

import MaterialButton from 'material-ui/Button';

const AgendaHeading = ({heading, timeStart, timeFinish, startMeeting}) => (
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
	children: PropTypes.string.isRequired,
}

export default AgendaHeading;
