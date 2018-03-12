import React from 'react';
import {storiesOf, action, withInfo} from '../../stories';

import Button from './Button';

storiesOf('Button')
	.addDecorator((story, context) =>
	withInfo(Button.description)(story)(context))
	.add('Basic', () => (
		<Button onClick={action('onClick')}>
			Button
		</Button>
	));
