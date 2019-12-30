import React from 'react';
import { shallow } from 'enzyme';

import LoadingIndicator from '../LoadingIndicator';

describe('Testing LoadingIndicator Component', () => {
  let component;

  beforeAll(() => {
    component = shallow(<LoadingIndicator />);
  });

  afterAll(() => {
    component.unmount();
  });

  it('it should render component', () => {
    expect(component).toMatchSnapshot();
  });
});
