import {
  GET_QUOTES,
  GET_ADDONS,
  SELECT_THIS_EXTRA,
  TOGGLE_PRICE_VIEW,
  REMOVE_EXTRA_ADDON
} from "./actionTypes";
import InsuranceDataService from "../services/InsuranceService";

export const getQuote: any = () => async (dispatch: any) => {
  try {
    const res = await InsuranceDataService.getQuote();

    dispatch({
      type: GET_QUOTES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAddons: any = () => async (dispatch: any) => {
  try {
    const res = await InsuranceDataService.getAddons();

    dispatch({
      type: GET_ADDONS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const selectExtraQuote: any = (data: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SELECT_THIS_EXTRA,
      payload: data,
    });
    // try {
    //    const res = await InsuranceDataService.selectExtraQuote(data.id,data); 
    //  return Promise.resolve(res.data);
    // } catch (err) {
    //     console.log(err);
    // return Promise.reject(err);
    // }
  }
};

export const removeExtraAddon: any = (addonToRemove: any) => {
  return (dispatch: any) => {
    dispatch({
      type: REMOVE_EXTRA_ADDON,
      payload: addonToRemove,
    });
  }
}

export const togglePriceView: any = (displayValue: boolean) => {
  return (dispatch: any) => {
    dispatch({
      type: TOGGLE_PRICE_VIEW,
      payload: displayValue,
    });
  };
}
