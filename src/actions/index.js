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


