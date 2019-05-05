import {SEARCH_CHANGE,GET_DATA,ADD_CATEGORY,PUSH_NEW_NEWS} from '../const';

const initState = {
    data: [],
    detailsId: '',
    category: ''
}

export default (state = initState, action) => { 
    switch (action.type) {
        case SEARCH_CHANGE: 
            return {...state, detailsId : action.detailsId}
            
        case GET_DATA :
            return {...state, data: action.data}

        case ADD_CATEGORY:
            return {...state,category:action.category}

        case PUSH_NEW_NEWS:
            return {...state,data: [...state.data, action.news]}


        
            default: return state
    }
}