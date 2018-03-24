import React from 'react';
import PropTypes from 'prop-types';

import AgendaHeading from '../AgendaHeading/AgendaHeading';
import AgendaItems from '../AgendaItems/AgendaItems.js';

import MaterialPaper from 'material-ui/Paper';

const Agenda = ({heading, timeStart, timeFinish, agendaItems}) => (
	<div className="Agenda">
		<MaterialPaper
			elevation={4}
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
	</div>
);

Agenda.description = `
Agenda display component
`;

Agenda.propTypes = {
}

export default Agenda;
