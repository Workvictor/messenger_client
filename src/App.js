import React        from 'react';
import { Provider } from 'react-redux';
import { store }    from './store';
import {
	Switch,
	Route,
	BrowserRouter
}                   from 'react-router-dom';
import styled       from 'styled-components'
import { routes }   from './router';

const Wrapper=styled.div`
  background-color: #211E27;
`;

class App extends React.Component{
	render(){
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Wrapper>
						<Switch>
							<Route exact path={routes.home} component={Home}/>
							<Route exact path={routes.chats} component={Chats}/>
							<Route path={routes.signin} component={SignIn}/>
							<Route path={routes.signun} component={SignUn}/>
							<Route component={NoMatch}/>
						</Switch>
					</Wrapper>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
