import { useState, useRef } from 'react'
import { Details } from '../loan/Details';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import './LoanHeader.css';
import ClientDialog from '../client/ClientDialog'
import { utils, write } from 'xlsx';
import { saveAs } from 'file-saver';

const initialTableData = [
  {
    caseNumber: '',
    firstName: '',
    lastName: '',
    applicationDate: '',
    recentDate:'',
    loanStatus:''
  },
];
 


const LoanHeader = () => {
  const [tableData, setTableData] = useState(initialTableData);
  const [records, setRecords] = useState({Details});

  function handleFilter(event) {
    const newData = records.filter(row => {
      return row.firstName.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setRecords(newData)
  }

  const handlePrint = () => {
    window.print();
  };

  const table = useRef(null);
  const exportToPDF = () => {
    html2pdf()
      .set({
        margin: 10,
        filename: 'tableData.pdf',
        jsPDF: { format: 'a4', orientation: 'portrait' },
      })
      .from(table.current)
      .save();
  };

  const generateCSVData = () => {
    const csvData = tableData.map((row) => Object.values(row));
    return csvData;
  };

  const exportToExcel = () => {
    console.log('exported!');
    const worksheet = utils.json_to_sheet(tableData);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    const excelBuffer = write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    saveAs(data, 'tableData.xlsx');
  };


  return (
    <div className="loan-header">
      <div className="loan-search">
      <SearchIcon sx={{color:'#bfbfbf'}} />
        <input
          type="text"
          placeholder="Search"
          className="search"
          onChange={handleFilter}
          />
       <FilterAltIcon sx={{color:'#bfbfbf'}}/>
        <input type="text" placeholder="Filter" className="filter" />
      </div>
     
      <div className="loan-print">
        <button className="print" onClick={handlePrint}>
          Print
        </button>
        <ClientDialog
                handleExcel={exportToExcel}
                handlePdf={exportToPDF}
                file={tableData.csv}
                data={generateCSVData()}
              />
      </div>
    </div>
  );
};

export default LoanHeader;
