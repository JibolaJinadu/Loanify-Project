import ReportBarChart from './ReportBarChart';
import ReportPieChart from './ReportPieChart';
import './style.css';

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
      <div className="sect-top bg-report">
        <div className="report-item">
          <p className="report-dark">Activities</p>
          <p className="base-report">Year</p>
        </div>
        <div className="report-item">
          <p className="base-report">Total number of loan application</p>
          <h4>182</h4>
        </div>
        <div className="report-item">
          <p className="base-report">Total value of all loan applications</p>
          <h4>NGN325,450,000'</h4>
        </div>
        <div className="report-piechart">
          <ReportPieChart />
        </div>

        <div className="shift-report">
          <span className="dot-report">&nbsp;</span>
          <span className="report-dark">Default</span>
        </div>
        <div className="report-item">
          <p className="self-report">Total number of default</p>
          <h4 className="solo-report">8</h4>
        </div>
        <div className="report-item">
          <p className="base-report">Total number of defaulting payment</p>
          <h4>NGN5,102,740</h4>
        </div>
        <div className="report-item">
          <p className="base-report">Total value of disbursed loans</p>
          <h4>NGN98,952,700</h4>
        </div>
        <div className="report-item">
          <p className="base-report">Total value of loan repayment loan</p>
          <h4>NGN61,245,750</h4>
        </div>
      </div>

      <div className="sect-top bg">
        <div className="report-item">
          <p className="report-dark">Activities</p>
          <p className="base-report">Year</p>
        </div>
        <p className="hr-report"></p>

        <div className="gap-report report-item shift-report">
          <div>
            <h4>115</h4>
            <p>Total number of completed payments</p>
          </div>
          <div>
            <h4>NGN41,952,700</h4>
            <p>Total number of uncompleted payments</p>
          </div>
        </div>
        <p className="hr-report"></p>
        <div className="mid-report shift-report">
          <button className="button-report">Approved vs Pending</button>
        </div>
        <ReportBarChart />
      </div>
    </div>
  );
}
