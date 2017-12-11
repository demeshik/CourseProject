import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../Header/Header';
import AuthForm from '../AuthForm/AuthForm';
import PatientsList from '../PatientsList/PatientsList';
import PatientPage from '../PatientPage/PatientPage';

import '../../grid.css';
import '../../main.css';

const App = () => {

    return (
		<div className="app">
              <Header />
              <main className="container">
                <Switch>
                    <Route exact path="/" component={PatientsList} />
                      <Route path="/patients/:id" component={PatientPage} />
                      <Route path="/account" component={AuthForm} />
					  <Route path="/auth" component={AuthForm} />
                  </Switch>
              </main>
		</div>
	);
};

export default App;