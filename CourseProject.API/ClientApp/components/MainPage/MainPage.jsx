import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import AuthForm from '../AuthForm/AuthForm';
import PatientsList from '../PatientsList/PatientsList';

import * as userActions from '../../actions/userActions';

const styles = {
    root: {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
    }
};

class MainPage extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onLoginFormSubmit = this.onLoginFormSubmit.bind(this);
    }
    componentDidMount() {
        this.props.actions.authenticate();
    }

    onLoginFormSubmit(userLoginForm) {
        this.props.actions.login(userLoginForm);
    }

    render() {
        const { isFetching, isAuthenticate } = this.props.user;

        return (
            isFetching ?
            <CircularProgress size={150} color="accent" thickness={1} classes={{root: this.props.classes.root}} /> :
                (
                    isAuthenticate ? <PatientsList /> : <AuthForm onLoginCallback={this.onLoginFormSubmit} />
                )
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MainPage));