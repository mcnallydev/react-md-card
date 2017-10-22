import React, { Component } from 'react';
import Card from '../dist';

class App extends Component {
  render() {
    return (
      <div>
        <Card>
          Demo
        </Card>

        <Card noPadding={true}>
          Demo
        </Card>

        <Card noMargin={true}>
          Demo
        </Card>

        <Card full={true}>
          Demo
        </Card>
      </div>
    );
  }
}
export default App;
