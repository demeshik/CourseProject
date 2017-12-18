import React from 'react';
import TextField from 'material-ui/TextField';
import Dialog, { DialogTitle, DialogActions, DialogContent } from 'material-ui/Dialog';
import Button from 'material-ui/Button';

export default class AddAnalyzeForm extends React.Component {
    render() {
        return (
            <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title">
                <DialogTitle id="simple-dialog-title">Add new analyze</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleClose} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}