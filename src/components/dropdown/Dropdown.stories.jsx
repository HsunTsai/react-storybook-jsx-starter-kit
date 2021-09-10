import React from 'react';
import merge from 'lodash/merge';
import Dropdown from './Dropdown';

const codeGenTypes = {
	/* component argTypes */
	/* component argTypes */
};

export default {
	title: 'components/Dropdown',
	parameters: {
		notes: 'some documentation here',
		myAddon: {
			data: 'this data is passed to the addon',
		},
	},
	argTypes: merge(codeGenTypes, {
		backgroundColor: { control: 'color' },
	}),
};

export const Basic = () => <Dropdown>hello</Dropdown>;
