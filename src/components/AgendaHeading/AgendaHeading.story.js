/* global module */
import React from 'react';
import {storiesOf, withInfo} from '../../stories';

import AgendaHeading from './AgendaHeading';

storiesOf('AgendaHeading', module)
	.addDecorator((story, context) => withInfo(AgendaHeading.description)(story)(context))
	.add('Basic', () => (
		<AgendaHeading
			heading={'An Example Agenda Heading'}
			timeStart={3}
			timeFinish={5}
		/>
	));
