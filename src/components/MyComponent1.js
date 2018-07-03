// @flow
import * as React from 'react';

import './styles.css';

type Props = {
  text1: string,
  text2?: string
};

class MyComponent1 extends React.Component<Props> {

  static defaultProps = {
    text2: 'Flow',
  };

  render() {
    return (
      <div className="MyComponent1">
        <span>Hello, {this.props.text1}</span>
        <span>Welcome to {this.props.text2}.</span>
      </div>
    );
  }

}

export default MyComponent1;
