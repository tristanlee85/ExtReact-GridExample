export const SEARCH_FILTER = 'search-filter',
    EDIT_RECORD = 'edit-record',
    HIDE_DIALOG = 'hide-dialog',
    VALIDATE_FORM = 'validate-form';

export function filterGrid(value) {
    return {type: SEARCH_FILTER, value};
}

export function editRecord(record) {
    return {type: EDIT_RECORD, record}
}

export function hideDialog() {
    return {type: HIDE_DIALOG}
}

export function validateForm(form) {
    return {
        type: VALIDATE_FORM,
        isValid: !form ? true : form.isValid()
    }
}