import { CHARACTER_LIST, SET_LOADING, CHARACTER_SEARCH_LIST } from '../Types';
import axios from 'axios';
import BadContext from './badContext';
import badReducer from './badReducer';

import React, { useReducer } from 'react';

const BadState = (props) => {
  const initialState = {
    loading: true,
    chars: null,
    items: null,
  };

  const [state, dispatch] = useReducer(badReducer, initialState);

  //functions (actions)
  const charFunction = async (id) => {
    setLoading();
    const res = await axios.get(
      `https://www.breakingbadapi.com/api/characters/${id}`
    );
    dispatch({
      type: CHARACTER_LIST,
      payload: res.data,
    });
  };

  const searchFunction = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://breakingbadapi.com/api/characters?name=${text}`
    );
    dispatch({
      type: CHARACTER_SEARCH_LIST,
      payload: res.data,
    });
  };
  const overallFunction = async () => {
    setLoading();
    const res = await axios.get(`https://breakingbadapi.com/api/characters`);
    dispatch({
      type: CHARACTER_SEARCH_LIST,
      payload: res.data,
    });
  };
  const setLoading = () => dispatch({ type: SET_LOADING });
  return (
    <BadContext.Provider
      value={{
        loading: state.loading,
        chars: state.chars,
        items: state.items,
        charFunction,
        searchFunction,
        overallFunction,
      }}
    >
      {props.children}
    </BadContext.Provider>
  );
};

export default BadState;
