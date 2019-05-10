import {GET_DATA,ADD_CATEGORY,PUSH_NEW_NEWS,SET_FILTER_DATA,
  SET_RESERV_FILTER_DATA} from '../const';

export const getData =  () => {
 return async dispatch => {
   try{
    let data  = await fetch('https://project-63826.firebaseio.com/data.json');
    let dataJson = await data.json();
    let ArrayData = [];
    Object.keys(dataJson).forEach((key)=>ArrayData.push(dataJson[key]));
    dispatch({
      type: GET_DATA,
      data: ArrayData
    })
   }catch(error){
     console.log(error)
   }
  
 }
}

export const addCategory = (category) => {
  return {
    type: ADD_CATEGORY,
    category
  }
}

export const pushNewNews = (news) => {
  return async dispatch => {
    try{
       await fetch('https://project-63826.firebaseio.com/data.json',{
        method: 'POST',
        body: JSON.stringify(news)
      });
      dispatch({
        type: PUSH_NEW_NEWS,
        news
      })
    }catch(error){
      console.log(error)
    } 
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