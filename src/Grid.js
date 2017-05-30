import React from 'react';
import {
    Grid,
    Column,
    Toolbar,
    TextField
} from '@extjs/ext-react';
import {filterGrid, editRecord} from './actions';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

function GridCmp ({store, dispatch, history}) {
    return (
        <Grid title="Employees" store={store} onItemDoubleTap={(grid, index, target, record) => dispatch(editRecord(record))}>
            <Toolbar docked="top">
                <TextField placeholder="Search" flex={1} onChange={(field, value) => dispatch(filterGrid(value))}/>
            </Toolbar>
            <Column text="Name" dataIndex="name" flex={1}/>
            <Column text="E-mail" dataIndex="email" flex={1}/>
        </Grid>
    )
}

export default connect((state) => { return {...state}})(GridCmp);