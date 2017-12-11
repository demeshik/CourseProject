import React from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import { indigo } from 'material-ui/colors';
import SwipeableViews from 'react-swipeable-views';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';

const styles = {
    tabsContainer: {
        width: '50%',
        marginTop: '200px',
        marginLeft: '25%',
    },
    bar: {
        background: indigo[900],
    }
};

//TODO: Add validation

class LoginForm extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            rememberMe: 0,
        };

        this.loginForm = {
            username: null,
            password: null,
        };

        this.changeValueHandler = this.changeValueHandler.bind(this);
        this.checkerHandler = this.checkerHandler.bind(this);
        this.login = this.login.bind(this);
    }

    login() {
        this.props.loginCallback({...this.loginForm, rememberMe: this.state.rememberMe});
    }

    changeValueHandler(e) {
        this.loginForm[e.target.id] = e.target.value;
    };

    checkerHandler(e) {
        this.setState({
            rememberMe: e.target.checked,
        });
    };

    render() {
        const classes = {
            marginTop: "50px",
            width: "400px"
        };

        return (
            <Paper style={classes}>
                <Typography component="div">
                    <TextField
                        style={{width: "100%"}}
                        required
                        id="username"
                        label="Username"
                        onChange={this.changeValueHandler}
                        margin="normal"
                    />
                    <TextField
                        required
                        style={{width: "100%"}}
                        id="password"
                        label="Password"
                        onChange={this.changeValueHandler}
                        type="password"
                        margin="normal"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.rememberMe}
                                onChange={this.checkerHandler}
                                value="rememberMe"
                            />
                        }
                        label="Remember Me"
                    />
                    <br />
                    <Button onClick={this.login}>
                        Log in
                    </Button>
                </Typography>
            </Paper>
        )
    }
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

class AuthForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
        };

        this.onTabChangeHandler = this.onTabChangeHandler.bind(this);
        this.onViewChangeHandler = this.onViewChangeHandler.bind(this);
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
            <div className={this.props.classes.tabsContainer}>
                <AppBar position="static">
                    <Tabs centered value={value} className={this.props.classes.bar} onChange={this.onTabChangeHandler}>
                        <Tab label="Login" />
                        <Tab label="Registration" />
                    </Tabs>
                </AppBar>

                <SwipeableViews
                    axis="x"
                    index={value}
                    onChangeIndex={this.onViewChangeHandler}
                >
                    <LoginForm loginCallback={this.props.onLoginCallback} />
                    <RegistrationForm />
                </SwipeableViews>
            </div>
        )
    }
}

export default withStyles(styles)(AuthForm);