import React from 'react';
import { shallow } from 'enzyme';

import Message from '../Message';

describe('Testing Message Component', () => {
  let component;

  beforeAll(() => {
    component = shallow(<Message title="sample" />);
  });

  afterAll(() => {
    component.unmount();
  });

  it('it should render component', () => {
    expect(component).toMatchSnapshot();
  });
});
