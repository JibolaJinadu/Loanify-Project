// import { BarChart } from 'recharts';
// import Piechart from './piechart';
import Diagram from './diagram';
import './reports.css';

export default function Top() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '40px',
        padding: '10px',
        margin: '0 10px',
      }}
    >
      <div className="sect bg">
        <div className="item">
          <p className="dark">Activities</p>
          <p className="base">Year</p>
        </div>
        <div className="item">
          <p className="base">Total number of loan application</p>
          <h4>182</h4>
        </div>
        <div className="item">
          <p className="base">Total value of all loan applications</p>
          <h4>NGN325,450,000'</h4>
        </div>
        <div className="left">{/* <Piechart /> */}</div>

        <div className="shift">
          <span className="dot"></span>
          <span className="dark">Default</span>
        </div>
        <div className="item">
          <p className="self">Total number of default</p>
          <h4 className="solo">8</h4>
        </div>
        <div className="item">
          <p className="base">Total number of defaulting payment</p>
          <h4>NGN5,102,740</h4>
        </div>
        <div className="item">
          <p className="base">Total value of disbursed loans</p>
          <h4>NGN98,952,700</h4>
        </div>
        <div className="item">
          <p className="base">Total value of loan repayment loan</p>
          <h4>NGN61,245,750</h4>
        </div>
      </div>

      <div className="sect bg">
        <div className="item">
          <p className="dark">Activities</p>
          <p className="base">Year</p>
        </div>
        <p className="hr"></p>

        <div className="gap item shift">
          <div>
            <h4>115</h4>
            <p>Total number of completed payments</p>
          </div>
          <div>
            <h4>NGN41,952,700</h4>
            <p>Total number of uncompleted payments</p>
          </div>
        </div>
        <p className="hr"></p>
        <div className="mid shift">
          <button className="button">Approved vs Pending</button>
        </div>
        <Diagram />
      </div>
    </div>
  );
}
