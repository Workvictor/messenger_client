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
import {
	Home,
	Chats,
	SignIn,
	SignUp,
	NoMatch,
}                   from './components'

const Main=styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #211E27;
`;

const Wrapper=styled.div`
  background: linear-gradient(180deg, rgba(31, 26, 39, 0.83) 33.41%, #211E27 113.97%);
  color: #fff;
  position: fixed;
  width: 100%;
  height: 100%;
`;

class App extends React.Component{
	render(){
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Main>
						<Wrapper>
							<Switch>
								<Route exact path={routes.home} component={Home}/>
								<Route path={routes.chats_id} component={Chats}/>
								<Route path={routes.chats} component={Chats}/>
								<Route path={routes.signin} component={SignIn}/>
								<Route path={routes.signup} component={SignUp}/>
								<Route component={NoMatch}/>
							</Switch>
						</Wrapper>
					</Main>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
