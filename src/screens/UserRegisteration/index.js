import { ArrowBackIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

import "./style.scss";
import InputComponent from "../../components/Input";
import DropdownComponent from "../../components/Dropdown";
import api from "../../utils/api";

const UserRegisteration = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { editData = {}, isEdit = false } = state || {};
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
    if (isEdit) {
      setData(editData);
    }
  }, []);

  const handleSave = async () => {
    try {
      setLoading(true);

      if (!data.reg_no || !data.student_name || !data.class_id) {
        alert("Please fill all the fields");
        return;
      }

      if (isEdit) {
        await api.editStudent(data);
      } else {
        await api.createStudent(data);
      }
      navigate(-1);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchClasses = async () => {
    try {
      setLoading(true);
      const response = await api.getAllStudentsClasses();
      setClasses(response?.studentClasses);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDel = async () => {
    try {
      setLoading(true);
      const response = await api.deleteStudent({ id: data.id });
      navigate(-1);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const onChangeText = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onChangeDropdown = (e) => {
    const { value } = e.target;
    setData({ ...data, class_id: value });
  };

  return (
    <div className="mainCont">
      <div className="title">Student Management</div>

      <div className="formCont">
        <div className="formGroup">
          <InputComponent
            name={"reg_no"}
            onChange={onChangeText}
            value={data.reg_no}
            label={"Registeration Number"}
          />
        </div>
        <div className="formGroup">
          <InputComponent
            name={"student_name"}
            onChange={onChangeText}
            value={data.student_name}
            label={"Name"}
          />
        </div>
        <div className="formGroup">
          <DropdownComponent
            onChange={onChangeDropdown}
            value={data.class_id}
            options={classes}
            label={"Class"}
          />
        </div>
      </div>

      <div className="buttonCont">
        <Button className="btn" onClick={handleSave} colorScheme="blue">
          Save
        </Button>

        <Button className="btn" onClick={handleCancel} colorScheme="red">
          Cancel
        </Button>

        {{ isEdit } && (
          <Button className="btn" onClick={handleDel} colorScheme="red">
            Delete
          </Button>
        )}
      </div>

      <div className="backIcon">
        <ArrowBackIcon onClick={handleBack} />
      </div>

    </div>
  );
};

export default UserRegisteration;
