import React from 'react';
import { useState } from 'react';
import tableData from './tableData'

export default function ProfileTable(){
    const [data, setData] = useState(tableData)
    return(
        <section className='max-w-[60rem] w-full mx-auto mt-6'>
            <h3 className='font-bold underline'>All clients</h3>
            <table className='border-separate border-spacing-x-8 mt-5 max-width-[55rem] w-full'>
            <thead >
                <tr className='border-2 border-black'>
                    <th>
                        <input type="checkbox" name="" id="" />
                    </th>
                    <th className='text-left'>Case Number</th>
                    <th className='text-left'>First Name</th>
                    <th className='text-left'>Last Name</th>
                    <th className='text-left'>Application Date</th>
                    <th className='text-left'>Recent Update</th>
                    <th className='text-left'>Loan Status</th>
                </tr>
            </thead>
            <tbody>
                {data.map((rowData, index) => {
                    return(
                    <tr key={index}>
                        <td className='text-left'>
                            <input type="checkbox" name="" id="" />
                        </td>
                        <td className='text-left'>{rowData.caseNumber}</td>
                        <td className='text-left'>{rowData.firstName}</td>
                        <td className='text-left'>{rowData.lastName}</td>
                        <td className='text-left'>{rowData.applicationDate}</td>
                        <td className='text-left'>{rowData.recentUpdate}</td>
                        <td className='text-left'>{rowData.loanStatus}</td>
                    </tr>
                    )
                })}
            </tbody>
        </table>

        </section>
        
    )
}