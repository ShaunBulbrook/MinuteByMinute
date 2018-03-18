/* global module */
import React from 'react';
import {storiesOf, action, withInfo} from '../../stories';

import TextArea from './TextArea';

storiesOf('TextArea', module)
	.addDecorator((story, context) => withInfo(TextArea.description)(story)(context))
	.add('basic', () => (
		<TextArea labelText="Example Label" onChange={action('onChange')} />
	));
