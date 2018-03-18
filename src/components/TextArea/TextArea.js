import React from 'react';
import PropTypes from 'prop-types';
import inputIdGenerator from '../../utils/InputIdGenerator';

import MaterialTextField from 'material-ui/TextField';

const TextArea = ({id = inputIdGenerator.nextIndex, labelText, value, onChange}) => (
	<div className="TextArea">
		<MaterialTextField
			id={id}
			label={labelText}
			type="text"
			onChange={e => onChange(e.target.value)}
			value={value}
			margin="normal"
			multiline
		/>
	</div>
);

TextArea.description = `
Text area with a label
`;

TextArea.propTypes = {
	id: PropTypes.string,
	labelText: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	value: PropTypes.string,
};

export default TextArea;
