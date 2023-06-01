import React from 'react'
import './Overview.css'
import Chart from './PieChart';


const OverviewPage = () => {
  return (
    <>
      <div className="overview-container">
        <div className="overview-1">
          <div className="overview-row1">
            <div className="row-item1">
              <div className="item-left">
                <p className="upper-text">All Loans</p>
                <p className="lower-text">
                  <span className="drop-sign">^ </span>15%
                </p>
              </div>
              <h2 className="item-right">250M</h2>
            </div>
            <div className="row-item2">
              <div className="item-left">
                <p className="upper-text">New Applications</p>
                <p className="lower-text">
                  <span className="drop-sign">^ </span>40%
                </p>
              </div>
              <h2 className="item-right right2">35</h2>
            </div>
            <div className="row-item3">
              <div className="item-left">
                <p className="upper-text">Pending Loans</p>
                <p className="lower-text">
                  <sup className="drop-sign">v </sup>5%
                </p>
              </div>
              <h2 className="item-right right3">30</h2>
            </div>
            <div className="row-item4">
              <div className="item-left">
                <p className="upper-text">Active Loans</p>
                <p className="lower-text">
                  <span className="drop-sign">^ </span>12%
                </p>
              </div>
              <h2 className="item-right right4">60</h2>
            </div>
          </div>

          <div className="overview-row1">
            <div className="row-item5">
              <div className="item-left">
                <p className="upper-text">Due Loans</p>
                <p className="lower-text">
                  <span className="drop-sign">^ </span>5%
                </p>
              </div>
              <h2 className="item-right right5">75M</h2>
            </div>
            <div className="row-item6">
              <div className="item-left">
                <p className="upper-text">Extended Loans</p>
                <p className="lower-text">
                  <span className="drop-sign">^ </span>8%
                </p>
              </div>
              <h2 className="item-right right6">22M</h2>
            </div>
            <div className="row-item7">
              <div className="item-left">
                <p className="upper-text">Defaulted Loans</p>
                <p className="lower-text">
                  <sup className="drop-sign">v </sup>10%
                </p>
              </div>
              <h2 className="item-right right7">35M</h2>
            </div>
            <div className="row-item8">
              <div className="item-left">
                <p className="upper-text">Closed Loans</p>
                <p className="lower-text">
                  <span className="drop-sign">^ </span>45%
                </p>
              </div>
              <h2 className="item-right right8">98M</h2>
            </div>
          </div>
        </div>


        <div className="overview-2">
          <div className="pie-header"> Loan Application Chart</div>
          <div className='pie-label-container'>
            <div><Chart/></div>
            <div className='chart-label'>
              <div>
                <div className='new-application label-tabs'>New Application</div>
                <div className='approved-loans label-tabs2'>Approved Loans</div>
                <div className='declined-loans label-tabs3'>Declined Loans</div>
                <div className='defaulted-loans label-tabs4'>Defaulted Loans</div>
              </div>
              <div>
                <div className='label-percentage'>15%</div>
                <div className='label-percentage'>50%</div>
                <div className='label-percentage'>20%</div>
                <div className='label-percentage'>15%</div>
              </div>
            </div>
          </div>
        </div>



        <div className="overview-3"></div>
        <div className="overview-4"></div>
      </div>
    </>
  );
};

export default OverviewPage;