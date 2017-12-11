import React from 'react';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';

import { uploadImage } from '../../utils/utils';

//TODO: dealing with uploading logic & defaultDate

export default class PatientCreationForm extends React.Component {
    constructor(props) {
        super(props);

        this.patient = {
            bornDate: null,
            deathDate: null,
        };

        this.state = {
            sex: "",
            url: null,
            loading: false,
        };

        this.sexHandler = this.sexHandler.bind(this);
        this.avatarHandler = this.avatarHandler.bind(this);
        this.dateHandler = this.dateHandler.bind(this);
    }

    sexHandler(event) {
        this.setState({
            sex: event.target.value,
        })
    }

    avatarHandler() {
        this.setState({
            loading: true,
        });

        let self = this;
        let file = document.getElementById("avatar-input").files[0];
        let reader = new FileReader();

        reader.onloadend = function () {
            uploadImage(reader.result)
                .then(url => {
                    self.setState({
                        url: url,
                        loading: false,
                    })
                });
        };

        reader.readAsDataURL(file);
    }

    dateHandler(event) {
        this.patient[event.target.id] = new Date(event.target.value);
    }

    render() {
        return (
            <Paper>
                <input
                    accept="image/*"
                    style={{display: 'none'}}
                    id="avatar-input"
                    onChange={this.avatarHandler}
                    type="file"
                />
                <label htmlFor="avatar-input">
                    <Button raised disabled={this.state.loading} component="span">
                        Upload an avatar
                    </Button>
                </label>

                {this.state.url && <Avatar alt="avatar" src={this.state.url} />}

                <Divider light />
                <TextField
                    id="name"
                    label="Name"
                />
                <Divider light />
                <TextField
                    id="surname"
                    label="Surname"
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
                />
                <Divider light />
                <TextField
                    id="phoneNumber"
                    label="Phone Number"
                />
                <Divider light />
                <TextField
                    id="citizenship"
                    label="Citizenship"
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
                />
                <Divider light />
            </Paper>
        )
    }
}