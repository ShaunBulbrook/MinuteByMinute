import { configure } from '@storybook/react';
import 'storybook-addon-material-ui';

const req = require.context('../src/components', true, /\.story\.js$/)

const loadStories = () => {
	req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
