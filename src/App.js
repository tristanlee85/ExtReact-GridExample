import React, {Component} from 'react'
import Layout from './Layout';
import { createStore } from 'redux';
import { Provider} from 'react-redux';
import reducer from './reducer';
import generateData from './data'

const store = createStore(
    reducer,
    {
        store: new Ext
            .data
            .Store({
                fields: [
                    'name', 'email'
                ],
                data: generateData()
            }),
        record: null,
        isFormValid: true
    }
);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Layout />
            </Provider>
        );
    }
}

