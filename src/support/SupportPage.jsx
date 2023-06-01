import React from "react";
import './Support.css'


const SupportPage = () => {
  return (
    <>
    
      <div className="overall">
        <div className="section-1">
          <div className="section-1-text">
            <p className="section-1-p1">Chatbox</p>
            <p>Quick and efficient solutions to your queries 24/7</p>
          </div>

        {/* Link to Chatbox */}
          <div>
            <button className="section-1-button">Go</button>  
          </div>
        </div>

        {/* Links to multiple pages */}
        <div className="section-2">
            <select className="section-2-select">
              <option className="option" value="" hidden selected>FAQ </option>
              <option className="option" value="1" >What are the factors to consider when making decision to approve or decline a loan application? </option>
              <option className="option" value="2">How effective is the use of the information provide by clients in the determination of the status? </option>
              <option className="option" value="4">what is Credit worthiness? </option>
              <option className="option" value="4">Why should i choose Loanify? </option>
              <option className="option" value="5">Is Loanify affliated to any other financial institution? </option> 
              <option className="option" value="6">What is the maximum amount a client can apply for with Loanify? </option>
            </select>
        </div>

        {/* Link to call centre */}
        <div className="section-3">
            <p className="p1">Toll free call</p>
            <p>Talk to a Support Officer at any time</p>
        </div>

        {/* Link to send to complaints */}
        <div className="section-4">
            <p>Report an issue</p>
        </div>
      </div>
    </>
  );
};

export default SupportPage;