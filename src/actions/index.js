export const selectPerson  = (peopleId) => {

    return {
        type: 'SELECTED_PERSON',
        selectedId: peopleId,

    }
}

export const noneSelected  = () => {

    return {
        type: 'NONE_SELECTED',
        

    }
}


