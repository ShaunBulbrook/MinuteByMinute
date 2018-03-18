import React from 'react';
import PropTypes from 'prop-types';

import MaterialButton from 'material-ui/Button';

const Button = ({children, onClick}) => (
	<MaterialButton
		variant="raised"
		onClick={onClick}
	>
		{children}
	</MaterialButton>
);

Button.description = `
Basic button
`;

Button.propTypes = {
	children: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default Button;
