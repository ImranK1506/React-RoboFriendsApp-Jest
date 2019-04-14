import React from 'react';
import { shallow, mount, render } from 'enzyme/build';
import Card from './Card';

it('should render Card component', () => {
   expect(shallow(<Card />)).toMatchSnapshot();
});
