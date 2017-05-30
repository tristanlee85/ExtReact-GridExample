import {SEARCH_FILTER, EDIT_RECORD, HIDE_DIALOG, VALIDATE_FORM} from './actions';

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_FILTER:
            const {store} = state;
            const {value} = action;

            store.clearFilter();
            store.filterBy((record) => {
                const name = record.get('name'),
                    email = record.get('email');

                return name.indexOf(value) > -1 || email.indexOf(value) > -1;
            });

            return state;
        case EDIT_RECORD:
            return {
                ...state,
                record: action.record,
            };

        case HIDE_DIALOG:
            return {
                ...state,
                record: null
            }
        case VALIDATE_FORM:
            return {
                ...state,
                isFormValid: action.isValid
            }
        default:
            return state;
    }
}