import React from 'react';
import Paper from 'material-ui/Paper';
import Table, { TableBody, TableHead, TableCell, TableRow } from 'material-ui/Table';

export default class Analyzes extends React.Component {
    constructor(props) {
        super(props);
    }

    get TableHead() {
        return (
            <TableRow>
                <TableCell>
                    Name
                </TableCell>
                <TableCell>
                    Total Result
                </TableCell>
                <TableCell>
                    Explanation
                </TableCell>
            </TableRow>
        );
    }
    get TableData() {
        const { patient } = this.props;
        if (patient && patient.analyzes.length > 0) {
            let tableBody = [];

            patient.analyzes.forEach((item) => {
                let row = (
                    <TableRow>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.totalResult}</TableCell>
                        <TableCell>{item.explanation}</TableCell>
                    </TableRow>
                );

                tableBody.push(row);
            });

            return tableBody;
        }

        return '';
    }

    render() {
        return (
            <Paper>
                <Table>
                    <TableHead>
                        {this.TableHead}
                    </TableHead>

                    <TableBody>
                        {this.TableData}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}