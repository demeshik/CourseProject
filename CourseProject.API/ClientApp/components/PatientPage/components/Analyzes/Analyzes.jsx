import React from 'react';
import Paper from 'material-ui/Paper';
import Table, { TableBody, TableHead, TableCell, TableRow } from 'material-ui/Table';

export default class Analyzes extends React.Component {
    constructor(props) {
        super(props);
    }

    get TableHead() {
        const { analyzes } = this.props;
        if (analyzes.length > 0) {
            const sample = analyzes[0];
            const header = [];

            Object.keys(sample).forEach(key => {
                header.push(<TableCell key={`analyzes-header-${key}`}>{key}</TableCell>);
            });

            return header;
        }

        return '';
    }

    render() {
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>{this.TableHead}</TableRow>
                    </TableHead>
                </Table>
            </Paper>
        )
    }
}