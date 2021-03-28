/* eslint-disable no-undef */

import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter(), disableLifecycleMethods: true });

describe('HeaderTitle', () => {
  it('renders title inside HeaderTitle component', () => {
    const htmlEl = document.createElement('h1');
    ReactDOM.render(
      'Patrik Duch',
      htmlEl
    );

    expect(htmlEl.firstChild?.textContent).toBe('Patrik Duch');

    ReactDOM.unmountComponentAtNode(htmlEl);
  });
});