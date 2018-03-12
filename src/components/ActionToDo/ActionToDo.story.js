/* global module */
import React from 'react';
import {storiesOf, withInfo} from '../../stories';
import {muiTheme} from 'storybook-addon-material-ui';

import ActionToDo from './ActionToDo';

storiesOf('ActionToDo', module)
	.addDecorator((story, context) => withInfo(ActionToDo.description)(story)(context))
	.addDecorator(muiTheme())
	.add('Basic', () => (
		<ActionToDo labels={['Blocker', 'P0', 'DROP EVERYTHING']}>
			Ipsum sit adipisicing commodo nulla cillum laboris ipsum voluptate dolore adipisicing aliqua excepteur do aliquip reprehenderit ut. Lorem sunt cillum do anim ipsum consequat magna excepteur anim deserunt qui mollit consectetur consectetur ea. Enim cillum ullamco quis dolor quis ullamco incididunt elit dolore aliquip duis et laborum voluptate ea ad. Anim id aliqua nostrud ea cillum aute aute reprehenderit proident officia ad exercitation do mollit. Nulla voluptate tempor consequat eu non laborum aliqua in anim minim sit mollit sint qui ea sit.
		</ActionToDo>
	));
