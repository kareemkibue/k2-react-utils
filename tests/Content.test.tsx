import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Content } from '../src/Content';

test('renders', () => {
	// Act
	const component = renderer.create(
		<Content text="<a href='http://www.example.com'>Example</a>" />
	);

	// Assert
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
