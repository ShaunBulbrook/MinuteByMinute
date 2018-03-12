/* global module */
import React from 'react';
import {storiesOf, withInfo} from '../../stories';
import {muiTheme} from 'storybook-addon-material-ui';

import FieldWrapper from './FieldWrapper';
import TextInput from '../TextInput/TextInput';

storiesOf('FieldWrapper', module)
	.addDecorator((story, context) => withInfo(FieldWrapper.description)(story)(context))
	.addDecorator(muiTheme())
	.add('Basic', () => (
		<FieldWrapper>
			<TextInput labelText="Example Field" />
		</FieldWrapper>
	));
