import React from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import SwipeableViews from 'react-swipeable-views';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

function LoginForm(props) {
    let login = "", password = "";

    const classes = {
        marginTop: "50px",
        width: "400px"
    };

    let changeValue = newValue => {
        login = newValue;
    };

    let showValues = (e) => {
        alert(login + " " + password)
    };

    return (
        <Paper style={classes}>
            <Typography component="div">
                <TextField
                    style={{width: "100%"}}
                    required
                    id="login"
                    label="Login"
                    onChange={changeValue}
                    margin="normal"
                />
                <TextField
                    required
                    style={{width: "100%"}}
                    id="password"
                    label="Password"
                    onChange={changeValue}
                    type="password"
                    margin="normal"
                />

                <input id="login-submit" type="submit" style={{display: 'none'}} />

                <label htmlFor="login-submit">
                    <Button onClick={showValues}>
                        Log in
                    </Button>
                </label>


            </Typography>
        </Paper>
    )
}

function RegistrationForm(props) {
    return (
        <Paper>
            <Typography component="div">
                This is registration form
            </Typography>
        </Paper>
    )
}

export default class AuthForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
        };

        this.onTabChangeHandler = this.onTabChangeHandler.bind(this);
        this.onViewChangeHandler = this.onViewChangeHandler(this);
    }

    onTabChangeHandler(event, value) {
        this.setState({value});
    }

    onViewChangeHandler(index) {
        this.setState({value: index});
    }

    render() {
        const { value } = this.state;

        return (
            <div>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.onTabChangeHandler}>
                        <Tab label="Login" />
                        <Tab label="Registration" />
                    </Tabs>
                </AppBar>

                <SwipeableViews
                    axis="x"
                    index={value}
                    onChangeIndex={this.onViewChangeHandler}
                >
                    <LoginForm/>
                    <RegistrationForm/>
                </SwipeableViews>
            </div>
        )
    }
}