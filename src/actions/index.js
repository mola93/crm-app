import firebase from 'firebase';


export const selectPerson  = (peopleId) => {

    return {
        type: 'SELECTED_PERSON',
        payload: peopleId,

    }
}

export const nonSelected  = () => {

    return {
        type: 'NONE_SELECTED',
        

    }
}

export const formUpdate = ({ prop, value }) => {
    return {
        type: 'FORM_UPDATE',
        payload: { prop, value },
    };
};

export const createNewContact = ({ first_name, last_name, phone, email, company, project, notes }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/people`)
        .push({ first_name, last_name, phone, email, company, project, notes })
        .then(() => {
            dispatch({ type: 'NEW_CONTACT' });
        });
    };
};

export const loadInitialContacts = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/people`)
        .on('value', snapshot => {
            dispatch({ type: 'INITIAL_FETCH', payload: snapshot.val() });
        });
    };
};

export const deleteContact = (uid) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/people/${uid}`)
        .remove()
        .then(() => {
            dispatch({ type: 'DELETE_CONTACT'});
        });
    };
};