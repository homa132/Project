import {ADD_CATEGORY,SET_FILTER_DATA,
  SET_RESERV_FILTER_DATA,NEW_DATA} from '../const';


export const addCategory = (category) => {
  return {
    type: ADD_CATEGORY,
    category
  }
}


export const filterData = (filterData) => {
  return {
    type: SET_FILTER_DATA,
    filterData
  }
}

export const setReservData = (filterData) => {
  return {
    type:SET_RESERV_FILTER_DATA,
    reservFilterData: filterData
  }
}

export const GetNewData = (datas) => {
  
  return {
    type: NEW_DATA,
    datas
  }
}