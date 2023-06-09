import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Circle } from 'rc-progress';

export default function ProfilePercentage() {
  return (
    <section className="profilPercentageWrapper ">
      <div className="box box1">
        <p className="">New clients</p>
        <div className="box1Percentage">
          <div>
            <FontAwesomeIcon
              icon={faAngleUp}
              className="angleUp "
            ></FontAwesomeIcon>
            <span className="">110%</span>
          </div>
          <div style={{ width: '2rem', position: 'relative' }}>
            <Circle
              percent={45}
              strokeWidth={8}
              strokeColor="blue"
              trailWidth={8}
            />
            <div className="circlePercent">
              <span className="circlePercentText"> 45 </span>
            </div>
          </div>
        </div>
      </div>
      <div className="box box2">
        <p className="">Active Loans</p>
        <div className="box2Percentage">
          <div>
            <FontAwesomeIcon
              icon={faAngleDown}
              className="angleDown"
            ></FontAwesomeIcon>
            <span>50%</span>
          </div>
          <div style={{ width: '2rem', position: 'relative' }}>
            <Circle
              percent={60}
              strokeWidth={8}
              strokeColor="rgb(11, 168, 11)"
              trailWidth={8}
            />
            <div className="circlePercent">60</div>
          </div>
        </div>
      </div>
      <div className="box box3">
        <p className="text-gray-500 text-sm">Extended Loans</p>
        <div className="box3Percentage">
          <div>
            <FontAwesomeIcon
              icon={faAngleDown}
              className="angleDown"
            ></FontAwesomeIcon>
            <span>30%</span>
          </div>
          <div style={{ width: '2rem', position: 'relative' }}>
            <Circle
              percent={20}
              strokeWidth={8}
              strokeColor="orange"
              trailWidth={8}
            />
            <div className="circlePercent">20</div>
          </div>
        </div>
      </div>
      <div className="box box4">
        <p className=""> Overdue Payments</p>
        <div className="box4Percentage">
          <div>
            <FontAwesomeIcon
              icon={faAngleDown}
              className="angleDown"
            ></FontAwesomeIcon>
            <span>30%</span>
          </div>
          <div style={{ width: '2rem', position: 'relative' }}>
            <Circle
              percent={30}
              strokeWidth={8}
              strokeColor="rgb(211, 32, 32)"
              trailWidth={8}
            />
            <div className="circlePercent">45</div>
          </div>
        </div>
      </div>
      <div className="box box4">
        <p className="">Defaulted Loans</p>
        <div className="box4Percentage">
          <div>
            <FontAwesomeIcon
              icon={faAngleDown}
              className="angleDown"
            ></FontAwesomeIcon>
            <span>30%</span>
          </div>
          <div style={{ width: '2rem', position: 'relative' }}>
            <Circle
              percent={30}
              strokeWidth={8}
              strokeColor="rgb(211, 32, 32)"
              trailWidth={8}
            />
            <div className="circlePercent">30</div>
          </div>
        </div>
      </div>
    </section>
  );
}
