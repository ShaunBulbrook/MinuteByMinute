import React from 'react';
import PropTypes from 'prop-types';

import MaterialPaper from 'material-ui/Paper';
import MaterialButton from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import CountDownButton from 'react-countdown-button';

const AgendaItems = ({items}) => {
	let agendaItems = items.map((agendaItem) => (
		<MaterialPaper
			elevation={5}
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
	)
};


AgendaItems.description = `
AgendaItems display component
`;

AgendaItems.propTypes = {
	children: PropTypes.string.isRequired,
}

export default AgendaItems;
