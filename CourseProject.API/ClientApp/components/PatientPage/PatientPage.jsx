import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/es/Typography/Typography';
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import { CircularProgress } from 'material-ui/Progress';
import Grid from 'material-ui/Grid';
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table';

import Analyzes from './components/Analyzes/Analyzes';

import {loadPatientInfo} from '../../actions/patientActions';

class PatientPage extends React.Component {
    constructor(props) {
        super(props);

        this.infoGenerator = this.infoGenerator.bind(this);
    }

    componentWillMount() {
        const { loadPatientInfo, match } = this.props;
        loadPatientInfo(match.params.id);
    }

    infoGenerator(patient) {
        let patientInfo = { ...patient };
        delete patientInfo.avatar;
        delete patientInfo.deseases;
        delete patientInfo.medicalCaptures;
        delete patientInfo.analyzes;

        let body = [];

        Object.keys(patientInfo).forEach(key => {
            let row = (
                <TableRow key={key}>
                    <TableCell>{key}</TableCell>
                    <TableCell>{patientInfo[key]}</TableCell>
                </TableRow>
            );

            body.push(row);
        });

        return body;
    }

    render() {
        const { storePatient } = this.props;

        return (
            storePatient.isFetching ?
                <CircularProgress size={150} color="accent" thickness={1} /> :
                <Paper>
                    <Grid container spacing={8}>
                        <Grid item sm={12} lg={6}>
                            <Table>
                                <TableBody>
                                    {this.infoGenerator(storePatient.currentPatient)}
                                </TableBody>
                            </Table>
                        </Grid>
                        <Grid item sm={12} lg={6}>
                            Zdes budet photo!
                        </Grid>
                        <Grid item sm={12} lg={12}>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography type="title">Analyzes</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Analyzes patient={storePatient.currentPatient} />
                                    <Button fab color="primary" aria-label="add">
                                        <AddIcon />
                                    </Button>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography type="title">Deseases History</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Analyzes patient={storePatient.currentPatient} />
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Grid>
                    </Grid>
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
        loadPatientInfo: bindActionCreators(loadPatientInfo, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientPage);