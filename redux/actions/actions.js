import {SEARCH_CHANGE,GET_DATA,ADD_CATEGORY,PUSH_NEW_NEWS} from '../const';

export const getDetailsId = (id) => {
    return {
      type: SEARCH_CHANGE,
      detailsId:id
    }
  }

export const getData =  () => {
 return async dispatch => {
   try{
    let data  = await fetch('https://project-63826.firebaseio.com/data.json');
    let dataJson = await data.json();
    dispatch({
      type: GET_DATA,
      data: dataJson
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