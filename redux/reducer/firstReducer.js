import {GET_DATA,ADD_CATEGORY,PUSH_NEW_NEWS,SET_FILTER_DATA,
    SET_RESERV_FILTER_DATA} from '../const';

const initState = {
    data: false,
    detailsId: '',
    category: '',
    filterData: [],
    reservFilterData: []
}

export default (state = initState, action) => { 
    switch (action.type) {
        case GET_DATA :
            return {...state, data: action.data}

        case ADD_CATEGORY:
            return {...state,category:action.category}

        case PUSH_NEW_NEWS:
            return {...state,data: [...state.data, action.news]}
        case SET_FILTER_DATA:
            return {...state,filterData:action.filterData}
        case SET_RESERV_FILTER_DATA: 
            return {...state,reservFilterData: action.reservFilterData}
            
        
            default: return state
    }
}