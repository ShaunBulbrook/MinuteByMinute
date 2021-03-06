import React from 'react';
import PropTypes from 'prop-types';
import inputIdGenerator from '../../utils/InputIdGenerator';

import MaterialTextField from 'material-ui/TextField';

const TextInput = ({id = inputIdGenerator.nextIndex, labelText, value, onChange}) => (
	<div className="TextInput">
		<MaterialTextField
			id={id}
			label={labelText}
			type="text"
			onChange={e => onChange(e.target.value)}
			value={value}
			margin="normal"
		/>
	</div>
);

TextInput.description = `
TextInput with a label
`;

TextInput.propTypes = {
	id: PropTypes.string,
	labelText: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	value: PropTypes.string,
};

export default TextInput;
