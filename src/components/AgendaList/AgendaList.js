import React from 'react';
import PropTypes from 'prop-types';

import Agenda from '../Agenda/Agenda';

const AgendaList = ({items}) => {
	let agendas = items.map((agenda) => (
		<Agenda
			key={agenda.id}
			heading={agenda.heading}
			timeStart={agenda.timeStart}
			timeFinish={agenda.timeFinish}
			agendaItems={agenda.agendaItems}
		/>
	));
	return(
		<div className="AgendaList">
			{agendas}
		</div>
	);
};


AgendaList.description = `
AgendaList display component
`;

AgendaList.propTypes = {
	items: PropTypes.array,
};

export default AgendaList;
