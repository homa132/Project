import {SEARCH_CHANGE,GET_DATA,ADD_CATEGORY,PUSH_NEW_NEWS} from '../const';
import data from '../../src/data/data'

export const getDetailsId = (id) => {
    return {
      type: SEARCH_CHANGE,
      detailsId:id
    }
  }

_staticGetData =() => {
    return data
  }

export const getData = () => {
 const data = _staticGetData();
  return {
    type: GET_DATA,
    data
  }
}

export const addCategory = (category) => {
  return {
    type: ADD_CATEGORY,
    category
  }
}

export const pushNewNews = (news) => {
  return {
    type: PUSH_NEW_NEWS,
    news
  }
}