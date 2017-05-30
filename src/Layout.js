import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    TitleBar,
    Column,
    TextField,
    Toolbar,
    FormPanel,
    EmailField,
    Dialog,
    Button
} from '@extjs/ext-react';
import Form from './Form';
import Grid from './Grid';
import { connect } from 'react-redux';
import {  BrowserRouter as Router, Switch, Route, Redirect, withRouter} from 'react-router-dom';

class Layout extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired,
        record: PropTypes.object,
        isFormValid: PropTypes.bool
    }

    render() {
        const {store, record, showDialog, isFormValid, dispatch} = this.props;
        let form = this.form;

        return (
            <Container fullscreen layout="fit">
                <Grid/>
                <Form/>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {...state}
}
export default connect(mapStateToProps)(Layout);