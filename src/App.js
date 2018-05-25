import React        from 'react';
import { Provider } from 'react-redux';
import { store }    from './store';
import {
	Switch,
	Route,
	BrowserRouter
}                   from 'react-router-dom';
import { routes }   from './router';
import {
	Home,
	Chats,
	SignIn,
	SignUp,
	NoMatch,
	MainWrapper,
}                   from './components';
import './vendor/animateCss.css';
import './index.css';

class App extends React.Component{
	render(){
		return (
			<Provider store={store}>
				<BrowserRouter>
					<MainWrapper>
						<Switch>
							<Route exact path={routes.home} component={Home}/>
							<Route path={routes.chats_id} component={Chats}/>
							<Route path={routes.chats} component={Chats}/>
							<Route path={routes.signin} component={SignIn}/>
							<Route path={routes.signup} component={SignUp}/>
							<Route component={NoMatch}/>
						</Switch>
					</MainWrapper>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
