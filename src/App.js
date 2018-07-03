// @flow
import * as React from 'react';

import Mycomponent1 from './components/MyComponent1';

type Props = {};

class App extends React.Component<Props> {
  render() {
    return (
      <React.Fragment>
        <Mycomponent1 text1="World!" />
      </React.Fragment>
    );
  }
}

export default App;
