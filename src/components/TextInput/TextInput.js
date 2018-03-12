import React from 'react';
import PropTypes from 'prop-types';
import inputIdGenerator from '../../utils/InputIdGenerator';

const TextInput = ({id = inputIdGenerator.nextIndex, labelText, value, onChange}) => (
	<div className="TextInput">
		<label htmlFor={id}>
			{labelText}
		</label>
		<input
			id={id}
			type="text"
			onChange={e => onChange(e.target.value)}
			value={value}
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
