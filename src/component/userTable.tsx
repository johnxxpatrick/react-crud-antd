import React from "react";
import { IUser } from "./interface";
import 'antd/dist/antd.css';
import { Table, Tag, Space, Button } from 'antd';

interface IProps {
  users: Array<IUser>;
  onEdit: (user: IUser) => void;
  onDelete: (user: IUser) => void;
}

const UserTable: React.FunctionComponent<IProps> = props => {
    // const columns = [
    //     {
    //       title: 'Name',
    //       dataIndex: 'name',
    //       key: 'name',
    //     //   render: text => <a>{text}</a>,
    //     },
    //     {
    //       title: 'Age',
    //       dataIndex: 'age',
    //       key: 'age',
    //     },
    //     {
    //       title: 'Address',
    //       dataIndex: 'address',
    //       key: 'address',
    //     },
    //     {
    //       title: 'Action',
    //       key: 'action',
    //       render: (text, record) => (
    //         <Space size="middle">
    //           <Button type="primary" onClick={() => props.onEdit(record)}>Edit</Button>
    //           <Button type="primary" danger onClick={() => props.onDelete(record)}>Delete</Button>
    //         </Space>
    //       ),
    //     },
    //   ];

  return (
    <div className="user-table">
      <h1>View Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.users.length > 0 ? (
            props.users.map(i => (
              <tr key={i.id}>
                <td>{i["name"]}</td>
                <td>{i["age"]}</td>
                <td>{i["address"]}</td>
                <td>
                  <button onClick={() => props.onEdit(i)}>edit</button>
                  <button onClick={() => props.onDelete(i)}>delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>no users</td>
            </tr>
          )}
        </tbody>
      </table>
      {/* <Table columns={columns} dataSource={props.users} /> */}
    </div>
  );
};
export default UserTable;
