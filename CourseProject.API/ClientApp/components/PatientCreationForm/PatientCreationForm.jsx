import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import { CircularProgress } from 'material-ui/Progress';
import Select from 'material-ui/Select';
import Snackbar from 'material-ui/Snackbar';

import { uploadImage, patientFormValidator } from '../../utils/utils';
import { createPatient } from '../../actions/patientActions';

//TODO: dealing with uploading logic & defaultDate

const styles = {
    root: {
        position: 'relative'
    }
};

class PatientCreationForm extends React.Component {
    constructor(props) {
        super(props);

        this.patient = {
            name: null,
            surname: null,
            bornDate: null,
            deathDate: null,
            address: null,
            phoneNumber: null,
            citizenship: null,
            age: null,
        };

        this.state = {
            sex: "",
            avatar: null,
            avatarUploading: false,
            errorShowing: false,
        };

        this.sexHandler = this.sexHandler.bind(this);
        this.avatarHandler = this.avatarHandler.bind(this);
        this.dateHandler = this.dateHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.dataHandler = this.dataHandler.bind(this);
    }

    dataHandler(event) {
        this.patient[event.target.id] = event.target.value;
    }

    sexHandler(event) {
        this.setState({
            sex: event.target.value,
        })
    }

    avatarHandler() {
        this.setState({
            avatarUploading: true,
        });

        let self = this;
        let file = document.getElementById("avatar-input").files[0];
        let reader = new FileReader();

        reader.onloadend = function () {
            uploadImage(reader.result)
                .then(url => {
                    self.setState({
                        avatar: url,
                        avatarUploading: false,
                    })
                });
        };

        reader.readAsDataURL(file);
    }

    dateHandler(event) {
        this.patient[event.target.id] = new Date(event.target.value);
    }

    onSubmitHandler() {
        let patient = { ...this.patient, sex: this.state.sex, avatar: this.state.avatar };

        //patientFormValidator(patient) ?
            //this.setState({ errorShowing: true }) :
            this.props.actions(patient);
    }

    render() {
        const { classes } = this.props;
        const { storePatient } = this.props;
        return (
            storePatient.isFetching
            ?   <CircularProgress size={150} color="accent" thickness={1} />
            :   <Paper>
                    <input
                        accept="image/*"
                        style={{display: 'none'}}
                        id="avatar-input"
                        onChange={this.avatarHandler}
                        type="file"
                    />
                    <label htmlFor="avatar-input">
                        <Button raised disabled={this.state.avatarUploading} component="span">
                            Upload an avatar
                        </Button>
                    </label>

                    {this.state.avatar && <Avatar alt="avatar" src={this.state.avatar} />}

                    <Divider light />
                    <TextField
                        id="name"
                        label="Name"
                        onChange={this.dataHandler}
                    />
                    <Divider light />
                    <TextField
                        id="surname"
                        label="Surname"
                        onChange={this.dataHandler}
                    />
                    <Divider light />
                    <TextField
                        id="bornDate"
                        type="date"
                        defaultValue="2017-12-11"
                        onChange={this.dateHandler}
                        label="Date of born"
                    />
                    <Divider light />
                    <TextField
                        id="deathDate"
                        type="date"
                        onChange={this.dateHandler}
                        label="Date of death"
                    />
                    <Divider light />
                    <TextField
                        id="address"
                        label="Address"
                        onChange={this.dataHandler}
                    />
                    <Divider light />
                    <TextField
                        id="phoneNumber"
                        label="Phone Number"
                        onChange={this.dataHandler}
                    />
                    <Divider light />
                    <TextField
                        id="citizenship"
                        label="Citizenship"
                        onChange={this.dataHandler}
                    />
                    <Divider light />
                    <FormControl>
                        <InputLabel htmlFor="sex">Sex</InputLabel>
                        <Select
                            value={this.state.sex}
                            onChange={this.sexHandler}
                            input={<Input name="sex" id="sex" />}
                        >
                            <MenuItem value="Male">Male</MenuItem>
                            <MenuItem value="Female">Female</MenuItem>
                        </Select>
                    </FormControl>
                    <Divider light />
                    <TextField
                        id="age"
                        label="Age"
                        onChange={this.dataHandler}
                    />
                    <Divider light />

                    <Button raised color="accent" onClick={this.onSubmitHandler}>Create card</Button>

                    <Snackbar
                        open={this.state.errorShowing}
                        autoHideDuration={4000}
                        SnackbarContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        classes={{root: classes.root}}
                        message={<span id="message-id">Please, fill all required fields before submitting card!</span>}
                    />
                </Paper>
        )
    }
}

function mapStateToProps(state) {
    return {
        storePatient: state.patient,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(createPatient, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PatientCreationForm));