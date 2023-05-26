import React from 'react';
import './UserPermission.css';

const UserPermission = () => {
  return (
    <div class="user-info">
      <table id="users">
        <thead>
          <tr>
            <th>
              <input type="checkBox"></input>
            </th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkBox"></input>
            </td>
            <td>Temidayo</td>
            <td>Adebayo</td>
            <td>atemidayo@xyz.com</td>
            <td>Loan Officer</td>
            <td>Employed</td>
            <td>
              <label htmlFor="permit">Choose</label>
              <select name="permit" id="permit">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkBox"></input>
            </td>
            <td>Temidayo</td>
            <td>Adebayo</td>
            <td>atemidayo@xyz.com</td>
            <td>Manager</td>
            <td>Employed</td>
            <td>
              <label htmlFor="permit">Choose</label>
              <select name="permit" id="permit">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkBox"></input>
            </td>
            <td>Temidayo</td>
            <td>Adebayo</td>
            <td>atemidayo@xyz.com</td>
            <td>Supervisor</td>
            <td>Employed</td>
            <td>
              <label htmlFor="permit">Choose</label>
              <select name="permit" id="permit">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkBox"></input>
            </td>
            <td>Temidayo</td>
            <td>Adebayo</td>
            <td>atemidayo@xyz.com</td>
            <td>Field Officer</td>
            <td>Employed</td>
            <td>
              <label htmlFor="permit">Choose</label>
              <select name="permit" id="permit">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkBox"></input>
            </td>
            <td>Temidayo</td>
            <td>Adebayo</td>
            <td>atemidayo@xyz.com</td>
            <td>Loan Officer</td>
            <td>Employed</td>
            <td>
              <label htmlFor="permit">Choose</label>
              <select name="permit" id="permit">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkBox"></input>
            </td>
            <td>Temidayo</td>
            <td>Adebayo</td>
            <td>atemidayo@xyz.com</td>
            <td>Manager</td>
            <td>Employed</td>
            <td>
              <label htmlFor="permit">Choose</label>
              <select name="permit" id="permit">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkBox"></input>
            </td>
            <td>Temidayo</td>
            <td>Adebayo</td>
            <td>atemidayo@xyz.com</td>
            <td>Supervisor</td>
            <td>Employed</td>
            <td>
              <label htmlFor="permit">Choose</label>
              <select name="permit" id="permit">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkBox"></input>
            </td>
            <td>Temidayo</td>
            <td>Adebayo</td>
            <td>atemidayo@xyz.com</td>
            <td>Field Officer</td>
            <td>Employed</td>
            <td>
              <label htmlFor="permit">Choose</label>
              <select name="permit" id="permit">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkBox"></input>
            </td>
            <td>Temidayo</td>
            <td>Adebayo</td>
            <td>atemidayo@xyz.com</td>
            <td>Loan Officer</td>
            <td>Employed</td>
            <td>
              <label htmlFor="permit">Choose</label>
              <select name="permit" id="permit">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserPermission;
