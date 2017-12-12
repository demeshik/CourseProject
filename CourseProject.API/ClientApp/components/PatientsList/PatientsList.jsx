import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Avatar from 'material-ui/Avatar';
import Table, {
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import PatientCreationForm from '../PatientCreationForm/PatientCreationForm';
import Tabs, { Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

class PatientsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tab: 0,
        };

        this.onViewChangeHandler = this.onViewChangeHandler.bind(this);
        this.onTabChangeHandler = this.onTabChangeHandler.bind(this);
    }

    onTabChangeHandler(event, value) {
        this.setState({
            tab: value,
        })
    }
    onViewChangeHandler(index) {
        this.setState({
            tab: index,
        })
    }

    get TableBody() {
        let array = [];

        const { storePatient } = this.props;

        storePatient.patients.forEach((patient, index) => {
            let item = (
                <TableRow
                    hover
                    key={"patient-" + index}
                >
                    <TableCell>{patient.id}</TableCell>
                    <TableCell>
                        <Avatar alt={patient.name} src={patient.avatar}/>
                    </TableCell>
                    <TableCell>{patient.name}</TableCell>
                    <TableCell>{patient.surname}</TableCell>
                    <TableCell>{patient.bornDate}</TableCell>
                    <TableCell>
                        <Link to={"/patients/" + patient.id} >
                            <Button color="primary">Open</Button>
                        </Link>
                    </TableCell>
                </TableRow>
            );

            array.push(item);
        });

        return array;
    }
    get Table() {
        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Avatar</TableCell>
                        <TableCell>Full Name</TableCell>
                        <TableCell>Birth Date</TableCell>
                        <TableCell>Last Admission</TableCell>
                        <TableCell/>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.TableBody}
                </TableBody>
            </Table>
        )
    }

    render() {
        return(
            <Paper>
                <Tabs
                    centered
                    value={this.state.tab}
                    onChange={this.onTabChangeHandler}
                >
                    <Tab label="List of patients" />
                    <Tab label="Create hospital card" />
                </Tabs>

                <SwipeableViews
                    axis='x'
                    index={this.state.tab}
                    onChangeIndex={this.onViewChangeHandler}
                >
                    {this.Table}
                    <PatientCreationForm />
                </SwipeableViews>
            </Paper>
        )
    }
}

function mapStateToProps(state) {
    return {
        storePatient: state.patient,
    };
}

export default connect(mapStateToProps, null)(PatientsList);