import React, { useEffect, useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

import TableComponent from "../../components/Table";
import "./style.scss";
import api from "../../utils/api";

const Dashboard = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([
    { name: "Registration No", dataIndex: "reg_no" },
    { name: "Student Name", dataIndex: "student_name" },
    { name: "Class", dataIndex: "class_name" },
  ]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await api.getAllStudents();
      setData(response?.students);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (row, index) => {
    navigate("/user/reg", { state: { isEdit: true, editData: row } });
  };

  const handleAdd = () => {
    navigate("/user/reg", { state: { isEdit: false, editData: {} } });
  };

  return (
    <div className="mainCont">
      <div className="title">Dashboard</div>
      <TableComponent columns={columns} data={data} handleEdit={handleEdit} />
      <div onClick={handleAdd} className="addIcon">
        <AddIcon />
      </div>
    </div>
  );
};

export default Dashboard;
