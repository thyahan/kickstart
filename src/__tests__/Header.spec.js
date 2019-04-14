// import React from 'react';
// import { shallow, mount, render } from 'enzyme';
// import Header from '../components/Header';

// describe('<Header />', () => {
//   it('should render without throwing an error', () => {
//     const component = shallow(<Header />);
//     expect(
//       component.contains(
//         <div className="wrap-header">
//           <h1>Kickstart</h1>
//         </div>
//       )
//     ).toBe(true);
//   });

//   it('should mount in a full DOM', () => {
//     const component = mount(<Header />);
//     expect(component.find('.app').length).toBe(1);
//   });

//   it('should render to static HTML', () => {
//     const component = render(<Header />);
//     expect(component.text()).toEqual('Kickstart');
//   });
// });
