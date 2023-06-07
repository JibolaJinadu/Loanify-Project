import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown} from '@fortawesome/free-solid-svg-icons';
import { Circle } from 'rc-progress';



export default function ProfilePercentage(){
    return(
        <section className='profilPercentageWrapper '>
            <div className='box box1'>
                <p className=''>New clients</p>
                <div className='box1Percentage'>
                    <div>
                        <FontAwesomeIcon icon={faAngleUp} className='angleUp '></FontAwesomeIcon>
                        <span className=''>110%</span>
                    </div>
                    <div style={{ width: "2rem", position:"relative" }}>
                        <Circle
                            percent={45}
                            strokeWidth={8}
                            strokeColor="blue"
                            trailWidth={8}
                        />
                        <div className='circlePercent'>
                            <span className='circlePercentText'> 45 </span> 
                        </div>
                    </div>
                </div>
            </div>
            <div className='box box2'>
                <p className=''>Active Loans</p>
                <div className='box2Percentage'>
                    <div>
                        <FontAwesomeIcon icon={faAngleDown}  className='angleDown'></FontAwesomeIcon>
                        <span>50%</span>
                    </div>  
                    <div style={{ width: "2rem", position:"relative" }}>
                        <Circle
                            percent={60}
                            strokeWidth={8}
                            strokeColor="rgb(11, 168, 11)"
                            trailWidth={8}
                        />
                        <div className='circlePercent'>
                            60
                        </div>
                    </div>                         
                </div>
            </div>
            <div className='box box3'>
                <p className='text-gray-500 text-sm'>Extended Loans</p>
                <div className='box3Percentage'>
                    <div>
                        <FontAwesomeIcon icon={faAngleDown} className='angleDown'></FontAwesomeIcon>
                        <span>30%</span>
                    </div>
                    <div style={{ width: "2rem", position:"relative" }}>
                        <Circle
                            percent={20}
                            strokeWidth={8}
                            strokeColor="orange"
                            trailWidth={8}
                        />
                        <div className='circlePercent'>
                            20
                        </div>
                    </div>
                             
                </div>
            </div>
            <div className='box box4'>
                <p className=''> Overdue Payments</p>
                <div className='box4Percentage'>
                    <div>
                        <FontAwesomeIcon icon={faAngleDown} className='angleDown'></FontAwesomeIcon>
                        <span>30%</span>
                    </div>
                    <div style={{ width: "2rem", position:"relative" }}>
                        <Circle
                            percent={30}
                            strokeWidth={8}
                            strokeColor="rgb(211, 32, 32)"
                            trailWidth={8}
                        />
                        <div className='circlePercent'>
                            45
                        </div>
                    </div>
                </div>
            </div>
            <div className='box box4'>
                <p className=''>Defaulted Loans</p>
                <div className='box4Percentage'>
                    <div>
                        <FontAwesomeIcon icon={faAngleDown} className='angleDown'></FontAwesomeIcon>
                        <span>30%</span>
                    </div>
                    <div style={{ width: "2rem", position:"relative" }}>
                        <Circle
                            percent={30}
                            strokeWidth={8}
                            strokeColor="rgb(211, 32, 32)"
                            trailWidth={8}
                        />
                        <div className='circlePercent'>
                            30
                        </div>
                    </div>
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



            