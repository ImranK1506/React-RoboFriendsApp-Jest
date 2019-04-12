import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CardList from './CardList';

it('should render CardList component', () => {
   const mockRobots = [
      {
         id: 1,
         name: 'Edward Snowden',
         userName: 'Eddy',
         email: 'edward@kgb.com'
      }
   ]
   expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
