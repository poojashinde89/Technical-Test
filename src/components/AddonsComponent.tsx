import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getAddons,
    removeExtraAddon,
    selectExtraQuote
} from "../actions/insuranceActions";

const AddonsComponent: any = () => {
    const addonList = useSelector((state: any) => state.insuranceList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAddons());
    }, []);

    const updatePrice = (title: any) => {
        const currentAddon: any = addonList.addonDetails.filter((x: any) => x.title === title);

        dispatch(selectExtraQuote(currentAddon[0]));
    };

    const removeAddon = (title: any) => {
        const currentAddon: any = addonList.addonDetails.filter((x: any) => x.title === title);

        dispatch(removeExtraAddon(currentAddon[0]));
    };

    return (
        <div className="row">
            {addonList.addonDetails && addonList.addonDetails.map((addon: any, index: number) => (
                <div className="col-6" key={index}>
                    <div className="content-col">
                        <div className="row gx-5">
                            <div className="col">
                                <div className="p-3 border bg-white">
                                    <div className="row">
                                        <div className="col-8"><h5>{addon.title}</h5></div>
                                        {addonList.monthlyView === true &&
                                            <div className="col-4">£{addon.monthlyPrice} per month</div>
                                        }
                                        {addonList.monthlyView === false &&
                                            <div className="col-4">£{addon.annualPrice} per year</div>
                                        }
                                    </div>
                                    <div className="row">
                                        <div className="col-12">{addon.text}</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 p-3">
                                            {!addon.hasOwnProperty('isSelected') &&
                                                <button type="submit" className="btn btn-secondary float-end" onClick={updatePrice.bind(this, addon.title)}>Select this extra</button>
                                            }
                                            {addon.hasOwnProperty('isSelected') &&
                                                <button type="submit" className="btn btn-secondary float-end" onClick={removeAddon.bind(this, addon.title)}>Remove this extra</button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AddonsComponent;