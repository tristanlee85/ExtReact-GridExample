import React, {Component} from 'react'
import {
    TextField,
    Toolbar,
    FormPanel,
    EmailField,
    Dialog,
    Button
} from '@extjs/ext-react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {hideDialog, validateForm} from './actions';

class Form extends Component {
    onFieldChange = () => {
        this.props.dispatch(validateForm(this.form));
    }

    onOk = () => {
        const {store, record, dispatch} = this.props;
        const values = this.form.getValues();

        record.set(values);
        dispatch(hideDialog());
    }

    render() {
        const {isFormValid, record, dispatch} = this.props;
        const fieldProps = {
            onChange: this.onFieldChange.bind(this)
        }

        return (
            <Dialog
                displayed={!!record}
                title="Edit Record"
                closable
                closeAction="hide"
                bodyPadding="20"
                width="500"
                defaultFocus="#ok"
                onHide={() => dispatch(hideDialog())}>
                <FormPanel
                    ref={(form) => { this.form = form; }}

                    layout="vbox"
                    record={record}>
                    <TextField label="Name" name="name" required {...fieldProps}/>
                    <EmailField label="E-mail" name="email" required {...fieldProps}/>
                    <Toolbar
                        docke="bottom"
                        shadow={false}
                        layout={{
                        type: 'hbox',
                        pack: 'right'
                    }}>
                        <Button text="Cancel" handler={() => dispatch(hideDialog())}/>
                        <Button
                            itemId="ok"
                            text="OK"
                            handler={this.onOk.bind(this)}
                            disabled={!isFormValid}/>
                    </Toolbar>
                </FormPanel>
            </Dialog>
        )
    }
}

Form.propTypes = {
    showDialog: PropTypes.bool
}

export default connect((state) => {return {...state}})(Form);