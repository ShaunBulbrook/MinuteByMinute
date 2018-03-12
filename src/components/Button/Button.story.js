import React from 'react';
import {storiesOf, action, withInfo} from '../../stories';
import {muiTheme} from 'storybook-addon-material-ui';

import Button from './Button';

storiesOf('Button', module)
	.addDecorator((story, context) => withInfo(Button.description)(story)(context))
	.addDecorator(muiTheme())
	.add('Basic', () => (
		<Button onClick={action('onClick')}>
			Button Bop
		</Button>
	));
