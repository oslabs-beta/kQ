import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import ConsumerMetrics from '../app/components/containers/ConsumerMetrics.jsx';

configure({ adapter: new Adapter() });

describe('ConsumerMetrics component', () => {
  let wrapper;

  const props = {
    dataSize: {
      sum: 100,
      numOfDataPoints: 10,
      smallest: 5,
      largest: 15,
    },
    processingTimeInMilliseconds: {
      sum: 100,
      numOfDataPoints: 10,
      smallest: 5,
      largest: 15,
    },
    pendingDuration: {
      sum: 100,
      numOfDataPoints: 10,
      smallest: 5,
      largest: 15,
    },
  };

  beforeAll(() => {
    wrapper = shallow(<ConsumerMetrics {...props} />);
  });

  it('should render a dashboard div and a metrics-container div', () => {
    expect(wrapper.find('div.dashboard')).toHaveLength(1);
    expect(wrapper.find('div.metrics-container')).toHaveLength(1);
  });

  it('should render the correct title', () => {
    expect(wrapper.find('h1.metric-heading').text()).toMatch(
      'Consumer Metrics'
    );
  });
});
