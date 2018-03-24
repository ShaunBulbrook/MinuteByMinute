/* global module */
import React from 'react';
import {storiesOf, action, withInfo} from '../../stories';

import Agenda from './Agenda'

storiesOf('Agenda', module)
	.addDecorator((story, context) => withInfo(Agenda.description)(story)(context))
	.add('Basic', () => (
		<Agenda
			heading='Example Agenda Heading'
			timeStart={3}
			timeFinish={8}
			agendaItems={[
				{
					title: 'Some agenda item',
					notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					time: 30,
				},
				{
					title: 'Some agenda item',
					notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					time: 30,
				},
			]}
		>
		</Agenda>
	));
