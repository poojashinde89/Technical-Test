import {
    GET_QUOTES,
    GET_ADDONS,
    SELECT_THIS_EXTRA,
    TOGGLE_PRICE_VIEW,
    REMOVE_EXTRA_ADDON
} from "../actions/actionTypes";

const initialState: any = {
    monthlyView: true
};

function insuranceReducer(insuranceList = initialState, action: { type: string, payload: any }) {
    const { type, payload } = action;

    // Function to get monthly and annual price after ADDON selected
    const calculatedAddonPrice = (quoteArray: any, selectedAddon: any) => {
        return quoteArray.map((quoteItem: any) => {
            quoteItem['monthlyPrice'] = quoteItem.monthlyPrice + selectedAddon.monthlyPrice
            quoteItem['annualPrice'] = quoteItem.annualPrice + selectedAddon.annualPrice
            quoteArray.splice(0, 1, quoteItem);
            return quoteArray
        });
    };

    // Function to get monthly and annual price after ADDON deselected
    const removeAddonPrice = (quoteArray: any, quoteToRemove: any) => {
        return quoteArray.map((quote_Item: any) => {
            quote_Item['monthlyPrice'] = quote_Item.monthlyPrice - quoteToRemove.monthlyPrice
            quote_Item['annualPrice'] = quote_Item.annualPrice - quoteToRemove.annualPrice
            quoteArray.splice(0, 1, quote_Item);
            return quoteArray
        });
    };

    switch (type) {
        case GET_QUOTES:
            return {
                ...insuranceList,
                quote: action.payload
            };

        case GET_ADDONS:
            return {
                ...insuranceList,
                addonDetails: action.payload
            };
        case TOGGLE_PRICE_VIEW:
            return {
                ...insuranceList,
                monthlyView: payload,
            }
        case SELECT_THIS_EXTRA:
            const newQuote = calculatedAddonPrice(insuranceList.quote, action.payload)
            console.log('action.payload', action.payload)
            return {
                ...insuranceList,
                quote: newQuote[0],
                addonDetails: [
                    ...insuranceList.addonDetails,
                    insuranceList.addonDetails.filter((x: any) =>
                    (x.title === action.payload.title) ? x.isSelected = true : null),
                ]
            }
        case REMOVE_EXTRA_ADDON:
            const refreshedQuote = removeAddonPrice(insuranceList.quote, action.payload)
            return {
                ...insuranceList,
                quote: refreshedQuote[0],
                addonDetails: [
                    ...insuranceList.addonDetails,
                    insuranceList.addonDetails.map((x: any) =>
                    (x.title === action.payload.title) ? delete x.isSelected : []),
                ]
            }
        default:
            return insuranceList;
    }
};

export default insuranceReducer;