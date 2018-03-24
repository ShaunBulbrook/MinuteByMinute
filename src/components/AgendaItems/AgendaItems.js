import React from 'react';
import PropTypes from 'prop-types';

import MaterialPaper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import CountDownButton from 'react-countdown-button';

import './AgendaItems.css';

const AgendaItems = ({items}) => {
	let agendaItems = items.map((agendaItem) => (
		<MaterialPaper className="AgendaItem"
			elevation={3}
			key={agendaItem.id}
		>
			<h3>{agendaItem.title}</h3>
			{agendaItem.notes}
			<Divider />
			<CountDownButton className="CountDownButton"
				propsCountdownTimeS={agendaItem.time}
			>

			</CountDownButton>
		</MaterialPaper>
	));
	return(
		<div className="AgendaItems">
			{agendaItems}
		</div>
	);
};


AgendaItems.description = `
AgendaItems display component
`;

AgendaItems.propTypes = {
	items: PropTypes.array,
};

export default AgendaItems;
