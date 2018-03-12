import React from 'react';
import {storiesOf, action, withInfo} from '../../stories';

import FieldWrapper from './FieldWrapper';
import TextInput from '../TextInput/TextInput';

storiesOf('FieldWrapper')
	.addDecorator((story, context) =>
		withInfo(FieldWrapper.description)(story)(context))
		.add('Basic', () => (
			<FieldWrapper>
				<TextInput labelText="Example Field" />	
			</FieldWrapper>
		)
	)
