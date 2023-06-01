import React from 'react';
import './Client.css';


const Client = () => {
  return (
    <div className='client-info'>
        <table id='clients'>
            <thead id='client-title'>
            <tr>
                <th>
                    <input type="checkBox" disabled></input>
                </th>
                <th>Application Number</th>
                <th id='client-name'>Full Name</th>
                <th>Loan Status</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody id='client-data'>
                <tr>
                    <td>
                        <input type="checkBox" disabled></input>
                    </td>
                    <td>RRZU9D6BVG</td>
                    <td>Temidayo Adebayo</td>
                    <td id='clients-color'>&#x2022; Approved</td>
                    <td>20/03/2023</td>
                </tr>

                <tr>
                    <td>
                    <input type="checkBox" disabled></input>
                    </td>
                    <td>GR45467RBA</td>
                    <td>Justin Jude</td>
                    <td>&#x2022; Declined</td>
                    <td>18/03/2023</td>
                </tr>

                <tr>
                    <td>
                        <input type="checkBox" disabled></input>
                    </td>
                    <td>RRZU9D6BVG</td>
                    <td>Sharon Udoh</td>
                    <td>&#x2022; Pending Review</td>
                    <td>17/03/2023</td>
                </tr>

                <tr>
                    <td>
                        <input type="checkBox" disabled></input>
                    </td>
                    <td>GR45467RBA</td>
                    <td>Olufemi Ayo</td>
                    <td>&#x2022; Approved</td>
                    <td>18/03/2023</td>
                </tr>

                <tr>
                    <td>
                    <input type="checkBox" disabled></input>
                    </td>
                    <td>RRZU9D6BVG</td>
                    <td>Temidayo Adebayo</td>
                    <td>&#x2022; Approved</td>
                    <td>20/03/2023</td>
                </tr>

                <tr>
                    <td>
                    <input type="checkBox" disabled></input>
                    </td>
                    <td>GR45467RBA</td>
                    <td>Justin Jude</td>
                    <td>&#x2022; Declined</td>
                    <td>18/03/2023</td>
                </tr>

                <tr>
                    <td>
                    <input type="checkBox" disabled></input>
                    </td>
                    <td>RRZU9D6BVG</td>
                    <td>Sharon Udoh</td>
                    <td>&#x2022; Pending Review</td>
                    <td>17/03/2023</td>
                </tr>

                <tr>
                    <td>
                    <input type="checkBox" disabled></input>
                    </td>
                    <td>GR45467RBA</td>
                    <td>Olufemi Ayo</td>
                    <td>&#x2022; Approved</td>
                    <td>18/03/2023</td>
                </tr>

                <tr>
                    <td>
                        <input type="checkBox" disabled></input>
                    </td>
                    <td>RRZU9D6BVG</td>
                    <td>Temidayo Adebayo</td>
                    <td>&#x2022; Approved</td>
                    <td>20/03/2023</td>
                </tr>

                <tr>
                    <td>
                    <input type="checkBox" disabled></input>
                    </td>
                    <td>GR45467RBA</td>
                    <td>Justin Jude</td>
                    <td>&#x2022; Declined</td>
                    <td>18/03/2023</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Client