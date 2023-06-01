import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown} from '@fortawesome/free-solid-svg-icons';



export default function ProfilePercentage(){
    return(
        <section className='flex flex-wrap max-w-[60rem] w-full mx-auto mt-6'>
            <div className='bg-slate-200 w-[10rem] pt-2 pl-2 p-5 border-b-4 border-blue-500 mr-8'>
                <p className='text-gray-500 text-sm'>New clients</p>
                <div className='flex justify-between mt-2'>
                    <div>
                        <FontAwesomeIcon icon={faAngleUp}   className='text-sm mt-1 pr-1 text-green-500'></FontAwesomeIcon>
                        <span className=''>110%</span>
                    </div>
                    <p className='border-2 border-blue-500 rounded-full p-1 text-xs '>45</p>
                </div>
            </div>
            <div className='bg-slate-200 w-[10rem] pt-2 pl-2 p-5 border-b-4 border-green-500 mr-8'>
                <p className='text-gray-500 text-sm'>Active Loans</p>
                <div className='flex justify-between mt-2'>
                    <div>
                        <FontAwesomeIcon icon={faAngleDown}  className='text-sm mt-1 pr-1 text-green-500'></FontAwesomeIcon>
                        <span>50%</span>
                    </div>  
                    <p className='border-2 border-green-500 rounded-full p-1 text-xs '>60</p>                 
                </div>
            </div>
            <div className='bg-slate-200 w-[10rem] pt-2 pl-2 p-5 border-b-4 border-orange-500 mr-8'>
                <p className='text-gray-500 text-sm'>Extended Loans</p>
                <div className='flex justify-between mt-2'>
                    <div>
                        <FontAwesomeIcon icon={faAngleDown} className='text-sm mt-1 pr-1 text-orange-500'></    FontAwesomeIcon>
                        <span>30%</span>
                    </div>
                    <p className='border-2 border-orange-500 rounded-full p-1 text-xs '>20</p>                   
                </div>
            </div>
            <div className='bg-slate-200 w-[10rem] pt-2 pl-2 p-5 border-b-4 border-red-500 mr-8'>
                <p className='text-gray-500 text-sm'> Overdue Payments</p>
                <div className='flex justify-between mt-2'>
                    <div>
                        <FontAwesomeIcon icon={faAngleDown} className='text-sm mt-1 pr-1 text-red-500'></FontAwesomeIcon>
                        <span>30%</span>
                    </div>
                    <p className='border-2 border-red-500 rounded-full p-1 text-xs '>18</p>
                </div>
            </div>
            <div className='bg-slate-200 w-[10rem] pt-2 pl-2 p-5 border-b-4 border-red-500 '>
                <p className='text-gray-500 text-sm'>Defaulted Loans</p>
                <div className='flex justify-between mt-2'>
                    <div>
                        <FontAwesomeIcon icon={faAngleDown} className='text-sm mt-1 pr-1 text-red-500'></FontAwesomeIcon>
                        <span>30%</span>
                    </div>
                    <p className='border-2 border-red-500 rounded-full p-1 text-xs '>18</p>
                </div>
            </div>

        </section>
    )
}


        








// import { useEffect, useState } from 'react';
// import { percentageData } from './PercentageData';

// const ProfilePercentage = () => {
//   const [newClients, setNewClients] = useState(0);
//   const [activeLoans, setActiveLoans] = useState(0);
//   const [overdueLoans, setOverdueLoans] = useState(0);
//   const [newClientsGrowth, setNewClientsGrowth] = useState(0);
//   const [activeLoansGrowth, setActiveLoansGrowth] = useState(0);
//   const [overdueLoansGrowth, setOverdueLoansGrowth] = useState(0);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     // Simulate the response from API
//     const response = {
//       newClients: 100,
//       activeLoans: 500,
//       overdueLoans: 50,
//     };

//     const { newClients, activeLoans, overdueLoans } = response;

//     // Calculate the growth percentages based on fixed percentage data
//     const newClientsGrowth = calculateGrowthPercentage(newClients, percentageData.newClients);
//     const activeLoansGrowth = calculateGrowthPercentage(activeLoans, percentageData.activeLoans);
//     const overdueLoansGrowth = calculateGrowthPercentage(overdueLoans, percentageData.overdueLoans);

//     // Update the state with the fetched data and growth percentages
//     setNewClients(newClients);
//     setActiveLoans(activeLoans);
//     setOverdueLoans(overdueLoans);
//     setNewClientsGrowth(newClientsGrowth);
//     setActiveLoansGrowth(activeLoansGrowth);
//     setOverdueLoansGrowth(overdueLoansGrowth);
//   };

//   const calculateGrowthPercentage = (currentValue, fixedPercentage) => {
//     const previousValue = currentValue / (1 + fixedPercentage);
//     const growthPercentage = ((currentValue - previousValue) / previousValue) * 100;

//     return growthPercentage.toFixed(2);
//   };

//   const getCircleStyle = (percentage) => {
//     const circumference = 2 * Math.PI * 50; // Assuming a circle radius of 50px
//     const offset = circumference - (percentage / 100) * circumference;

//     return {
//       strokeDashoffset: offset,
//     };
//   };

//   return (
//     <div className="container mx-auto">
//       <h1 className="text-3xl font-bold mb-4">Loan Portfolio</h1>

//       <div className="grid grid-cols-3 gap-4">
//         <div className="p-4 bg-gray-100 rounded">
//           <h2 className="text-lg font-bold mb-2">New Clients</h2>
//           <svg className="w-20 h-20">
//             <circle
//               className="stroke-current text-green-500"
//               style={getCircleStyle(newClientsGrowth)}
//               cx="50"
//               cy="50"
//               r="45"
//               strokeWidth="10"
//               fill="none"
//             />
//             <text className="text-2xl text-center" x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
//               {newClients}
//             </text>
//           </svg>
//           <p className="text-green-500">{newClientsGrowth}% Growth</p>
//         </div>

//         <div className="p-4 bg-gray-100 rounded">
//         <h2 className="text-lg font-bold mb-2">Active Loans</h2>
//           <svg className="w-20 h-20">
//             <circle
//               className="stroke-current text-green-500"
//               style={getCircleStyle(activeLoansGrowth)}
//               cx="50"
//               cy="50"
//               r="45"
//               strokeWidth="10"
//               fill="none"
//             />
//             <text className="text-2xl text-center" x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
//               {activeLoans}
//             </text>
//           </svg>
//           <p className="text-green-500">{activeLoansGrowth}% Growth</p>
//         </div>

//         <div className="p-4 bg-gray-100 rounded">
//           <h2 className="text-lg font-bold mb-2">Overdue Loans</h2>
//           <svg className="w-20 h-20">
//             <circle
//               className="stroke-current text-red-500"
//               style={getCircleStyle(overdueLoansGrowth)}
//               cx="50"
//               cy="50"
//               r="45"
//               strokeWidth="10"
//               fill="none"
//             />
//             <text className="text-2xl text-center" x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
//               {overdueLoans}
//             </text>
//           </svg>
//           <p className="text-red-500">{overdueLoansGrowth}% Growth</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePercentage;



            