import {ADD_CATEGORY,SET_FILTER_DATA,
    SET_RESERV_FILTER_DATA,NEW_DATA} from '../const';

const initState = {
    detailsId: '',
    category: '',
    filterData: [],
    reservFilterData: [],
    newData: false
}

export default (state = initState, action) => {
    switch (action.type) {

        case ADD_CATEGORY:
            return {...state,category:action.category}
        case SET_FILTER_DATA:
            return {...state,filterData:action.filterData}
        case SET_RESERV_FILTER_DATA: 
            return {...state,reservFilterData: action.reservFilterData}
        case NEW_DATA:
            return {...state,newData: action.datas}
        
        default: return state
    }
}