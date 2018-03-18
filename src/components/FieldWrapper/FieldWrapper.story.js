/* global module */
import React from 'react';
import {storiesOf, withInfo} from '../../stories';

import FieldWrapper from './FieldWrapper';
import TextInput from '../TextInput/TextInput';

storiesOf('FieldWrapper', module)
	.addDecorator((story, context) => withInfo(FieldWrapper.description)(story)(context))
	.add('Basic', () => (
		<FieldWrapper>
			<TextInput labelText="Example Field" />
		</FieldWrapper>
	));
