import React from 'react';
import {storiesOf, action, withInfo} from '../../stories';
import {muiTheme} from 'storybook-addon-material-ui';

import TextInput from './TextInput';

storiesOf('TextInput', (story, context) => withInfo(TextInput.description)(story)(context))
	.addDecorator(muiTheme())
	.add('basic', () => (
		<TextInput labelText="Example Label" onChange={action('onChange')} />
	));
