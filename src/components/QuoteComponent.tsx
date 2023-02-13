import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuote, togglePriceView } from "../actions/insuranceActions";

const QuoteComponent: any = () => {
  const quoteDetails = useSelector((state: any) => state.insuranceList);
  const dispatch = useDispatch();
  const [time, setTime] = useState(0);

  useEffect(() => {
    dispatch(getQuote());
  }, []);

  const updateView = (viewValue: boolean) => {
    dispatch(togglePriceView(viewValue));
  }

  return (
    <div>
      {quoteDetails.quote && quoteDetails.quote.map((quote: any, index:number) =>
        <div className="row" key={index}>
          <div className="col-5">
            <div className="content-col">
             <h2>Hey {quote.firstName},</h2>
             <p>Here is your quote for Royal & Sun Alliance, St. Marks Court, Chart Way</p>
             <p>Quote reference: MTH00044898200Q</p>
             <p>Covers starts on {quote.startDate}</p>

            </div>
          </div>
          <div className="col-7">
            <div className="content-col">
              <div className="row gx-5">
                <div className="col">
                  <div className="p-3 border bg-white">
                    <div className="row">
                      {quoteDetails.monthlyView === true &&
                        <div className="col-12"><h3>£{quote.monthlyPrice} per month</h3></div>
                      }
                      {quoteDetails.monthlyView === false &&
                        <div className="col-12"><h3>£{quote.annualPrice} per year</h3></div>
                      }
                    </div>
                    <div className="row">
                      <div className="col-12">This price includes Insurance Premium Tax at the
                        current rate. No charge for paying monthly</div>
                    </div>
                    <div className="row">
                      <div className="col-12 p-3">
                        {quoteDetails.monthlyView === true &&
                          <button type="submit" className="btn btn-secondary float-end" onClick={() => updateView(false)}>Switch to Annual</button>
                        }
                        {quoteDetails.monthlyView === false &&
                          <button type="submit" className="btn btn-secondary float-end" onClick={() => updateView(true)}>Switch to Month</button>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuoteComponent;