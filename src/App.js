import React        from 'react';
import { Provider } from 'react-redux';
import { store }    from './store';
import {
  actions,
  types
}                   from './store';


class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <div>
          test
        </div>
      </Provider>
    );
  }
}

export default App;
