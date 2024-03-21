import { useEffect, useState } from "react";
import { Table } from "antd";

const Users = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "DOB",
      dataIndex: "dob",
      key: "dob",
    },
  ];

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/user/list")
      .then((res) => {
        res.json().then((data) => {
          return data.data;
        });
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);
  return (
    <div>
      <Table dataSource={users} columns={columns} />
    </div>
  );
};

export default Users;
