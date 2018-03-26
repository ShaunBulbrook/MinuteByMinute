import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AgendaList from '../../components/AgendaList/AgendaList';

const mapStateToProps = state => ({
	items: state.Agendas,
});

class ConnectedAgendaList extends React.Component {
	static get propTypes () {
		return {
			items: PropTypes.array,
		};
	}

	constructor (props) {
		super(props);
		console.log(props);
		const {items} = props;
		this.state = {items};
	}

	render () {
		console.log('osidfj');
		console.log(this.state);
		const {items} = this.state;
		return (
			<AgendaList
				items={items}
			/>
		);
	}
}

export default connect(mapStateToProps)(ConnectedAgendaList);
