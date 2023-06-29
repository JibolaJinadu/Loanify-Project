import React from 'react';
import './Overview.css';
import Chart from './PieChart';
import Line_Chart from './LineChart';
import Barchart1 from './BarChart1';
import Barchart2 from './BarChart2';
import Barchart3 from './BarChart3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';


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
                  <FontAwesomeIcon className="drop-up drop1" icon={faChevronUp} /> 
                  <span className='lower-text-percent'>15%</span>
                  <span className="increase">Increase</span>
                </p>
              </div>
              <h2 className="item-right right1">1050</h2>
            </div>
            <div className="row-item2">
              <div className="item-left">
                <p className="upper-text">New Applications</p>
                <p className="lower-text">
                  <FontAwesomeIcon className="drop-up drop2" icon={faChevronUp} /> 
                  <span className='lower-text-percent'> 40%</span>
                  <span className="increase">Increase</span>
                </p>
              </div>
              <h2 className="item-right right2">35</h2>
            </div>
            <div className="row-item3">
              <div className="item-left">
                <p className="upper-text">Pending Loans</p>
                <p className="lower-text">
                  <FontAwesomeIcon className="drop-up drop3" icon={faChevronUp} /> 
                  <span className='lower-text-percent'>5%</span>
                  <span className="increase">Increase</span>
                </p>
              </div>
              <h2 className="item-right right3">30</h2>
            </div>
            <div className="row-item4">
              <div className="item-left">
                <p className="upper-text">Active Loans</p>
                <p className="lower-text">
                  <FontAwesomeIcon className="drop-up drop4" icon={faChevronUp} /> 
                  <span className='lower-text-percent'>12%</span>
                  <span className="increase">Increase</span>
                </p>
              </div>
              <h2 className="item-right right4">60</h2>
            </div>
          </div>

          <div className="overview-row1 pb-50">
            <div className="row-item5">
              <div className="item-left">
                <p className="upper-text">Due Loans</p>
                <p className="lower-text">
                  <FontAwesomeIcon className="drop-up drop5" icon={faChevronUp} /> 
                  <span className='lower-text-percent'>12%</span>
                  <span className="increase">Increase</span>
                </p>
              </div>
              <h2 className="item-right right5">30</h2>
            </div>
            <div className="row-item6">
              <div className="item-left">
                <p className="upper-text">Extended Loans</p>
                <p className="lower-text">
                  <FontAwesomeIcon className="drop-up drop6" icon={faChevronUp} /> 
                  <span className='lower-text-percent'>8%</span>
                  <span className="increase">Increase</span>
                </p>
              </div>
              <h2 className="item-right right6">35</h2>
            </div>
            <div className="row-item7">
              <div className="item-left">
                <p className="upper-text">Defaulted Loans</p>
                <p className="lower-text">
                  <FontAwesomeIcon className="drop-down drop7" icon={faChevronDown} /> 
                  <span className='lower-text-percent'>10%</span>
                  <span className="increase">Decrease</span>
                </p>
              </div>
              <h2 className="item-right right7">60</h2>
            </div>
            <div className="row-item8">
              <div className="item-left">
                <p className="upper-text">Closed Loans</p>
                <p className="lower-text">
                  <FontAwesomeIcon className="drop-up drop8" icon={faChevronUp} /> 
                  <span className='lower-text-percent'>12%</span>
                  <span className="increase">Increase</span>
                </p>
              </div>
              <h2 className="item-right right8">98</h2>
            </div>
          </div>
        </div>

        <div className="overview-2">
          <div className="pie-header"> Loan Application Chart</div>
          <div className="pie-label-container">
            <div>
              <Chart />
            </div>
            <div className="chart-label">
              <div>
                <div className="label-tabs">New Application</div>
                <div className="label-tabs2">Approved Loans</div>
                <div className="label-tabs3">Declined Loans</div>
                <div className="label-tabs4">Defaulted Loans</div>
              </div>
              <div>
                <div className="label-percentage">15%</div>
                <div className="label-percentage">50%</div>
                <div className="label-percentage">20%</div>
                <div className="label-percentage">15%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="overview-3">
          <Line_Chart/>
          <Barchart1/>
        </div>
        <div className="overview-3">
          <Barchart2/>
          <Barchart3/>
        </div>
      </div>
    </>
  );
};

export default OverviewPage;

