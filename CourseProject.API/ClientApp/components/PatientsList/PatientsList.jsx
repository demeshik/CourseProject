import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import Table, {
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Tabs, { Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

const data = [
    {
        "image": "https://pp.userapi.com/c622418/v622418907/21ca9/aJST0VX6r2M.jpg",
        "id": 1,
        "name": "Demeshchik Alexander",
        "birth_date": "09-04-1997",
        "admission_date": "29-09-2017",
    },
    {
        "image": "https://pp.userapi.com/c639827/v639827880/118ed/cF0COFbU_j8.jpg",
        "id": 2,
        "name": "Koptevich Julia",
        "birth_date": "09-05-1997",
        "admission_date": "29-10-2017",
    },
    {
        "image": "https://musicpianoworld.files.wordpress.com/2011/12/eminem-rap1.jpg",
        "id": 3,
        "name": "Marshall Matters",
        "birth_date": "09-05-1979",
        "admission_date": "29-10-2016",
    }
];

export default class PatientsList extends React.Component {
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

        data.forEach((patient, index) => {
            let item = (
                <TableRow
                    hover
                    key={"patient-" + index}
                >
                    <TableCell>{patient.id}</TableCell>
                    <TableCell>
                        <Avatar alt={patient.name} src={patient.image}/>
                    </TableCell>
                    <TableCell>{patient.name}</TableCell>
                    <TableCell>{patient.birth_date}</TableCell>
                    <TableCell>{patient.admission_date}</TableCell>
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
                    <Paper>Hello, dear!</Paper>
                </SwipeableViews>

            </Paper>
        )
    }
}