import apiStoreService from '../api/apiServices';

export const initialState = [];

const SET_ALL = 'covid-19/SET_ALL';

export const countrieslistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL:
      return action.countries;
    default:
      return state;
  }
};

const refactorResponse = (response) => Object.values(response.data.dates['2022-04-12'].countries).filter(item => item.regions.length > 0);

export const setCountries = () => async (dispatch) => {
  const response = await apiStoreService.apiGetAll();
  const countries = refactorResponse(response);
  console.log('from reducer', countries);
  dispatch({ type: SET_ALL, countries });
};
