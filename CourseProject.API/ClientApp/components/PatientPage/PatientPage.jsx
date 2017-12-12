import React from 'react';
import Paper from 'material-ui/Paper';

export default class PatientPage extends React.Component {
    render() {
        return <div>{this.props.match.params.id}</div>
    }
}