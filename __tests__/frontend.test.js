import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import Metric from '../app/components/Metric.jsx';

configure({ adapter: new Adapter() });

describe('React unit tests', () => {
  describe('Metric component', () => {
    let wrapper;
    const props = {
      title: 'Data Size',
      data: {
        sum: 50,
        numOfDataPoints: 10,
        smallest: 4,
        largest: 16,
      },
    };

    beforeAll(() => {
      wrapper = shallow(<Metric {...props} />);
    });

    it('should render the correct title', () => {
      expect(wrapper.find('h2.metric-title').text()).toMatch('Data Size');
    });

    it('should render 3 labels', () => {
      expect(wrapper.find('p.metrics')).toHaveLength(3);
    });

    it('should render average, smallest, and largest', () => {
      // const labels = wrapper.find('p.metrics');
      const expectedLabels = ['Average', 'Smallest', 'Largest'];

      // let currLabel;
      // let expectedLabel;
      // for (let i = 0; i < labels.length; i += 1) {
      //   currLabel = labels[i];
      //   expectedLabel = expectedLabels[i];
      //   expect(currLabel.text().toMatch(expectedLabel));
      // }

      wrapper.find('p.metrics').forEach((label, idx) => {
        expect(label.text()).toMatch(expectedLabels[idx]);
      });
    });
  });
});
