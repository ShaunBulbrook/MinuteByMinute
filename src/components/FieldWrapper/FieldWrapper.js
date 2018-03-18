import React from 'react';
import PropTypes from 'prop-types';

import MaterialPaper from 'material-ui/Paper';

const FieldWrapper = ({children}) => (
	<div className="FieldWrapper">
		<MaterialPaper
			elevation={4}
		>
			{children}
		</MaterialPaper>
	</div>
);

FieldWrapper.description = `
Presentational element that functions in a similar manner to a traditional fieldset. \n
Can be used on multiple fields.
`;

FieldWrapper.propTypes = {
	children: PropTypes.object.isRequired,
};

export default FieldWrapper;
