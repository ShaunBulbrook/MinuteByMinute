import React from 'react';
import PropTypes from 'prop-types';

const FieldWrapper = ({children}) => (
	<div className="FieldWrapper">
		{children}
	</div>
)

FieldWrapper.description = `
Presentational element that functions in a similar manner to a traditional fieldset. \n
Can be used on multiple fields.
`;

FieldWrapper.propTypes = {
	children: PropTypes.string.isRequired,
}

export default FieldWrapper;
