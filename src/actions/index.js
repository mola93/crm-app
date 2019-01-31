export const selectPerson  = (peopleId) => {

    return {
        type: 'SELECTED_PERSON',
        selectedId: peopleId,

    }
}

export const nonePerson  = () => {

    return {
        type: 'NONE_SELECTED',
        

    }
}


