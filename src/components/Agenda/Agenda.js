import React from 'react';
import PropTypes from 'prop-types';

import AgendaHeading from '../AgendaHeading/AgendaHeading';
import AgendaItems from '../AgendaItems/AgendaItems.js';

import MaterialPaper from 'material-ui/Paper';

import './Agenda.css';

const Agenda = ({heading, timeStart, timeFinish, agendaItems}) => (
	<MaterialPaper className="Agenda"
		elevation={2}
	>
		<AgendaHeading
			heading={heading}
			timeStart={timeStart}
			timeFinish={timeFinish}
		/>
		<AgendaItems items={agendaItems} />
		//heading
		//agendaItems
		//-- agendaconent
		//-- agendatimee

		//agendaControls

	</MaterialPaper>
);

Agenda.description = `
Agenda display component
`;

Agenda.propTypes = {
}

export default Agenda;
