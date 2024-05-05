import constants from "./constants";
import axios from "./axios";

const api = {};

//Students
api.getStudentById = function (body) {
  const url = `${constants.SERVER_BASE_URL}/student/get/by-id`;
  return axios.get(url, body);
};
api.getAllStudents = function (body) {
  const url = `${constants.SERVER_BASE_URL}/students/get/all`;
  return axios.get(url, body);
};
api.createStudent = function (body) {
  const url = `${constants.SERVER_BASE_URL}/students/create`;
  return axios.post(url, body);
};
api.deleteStudent = function (body) {
  const url = `${constants.SERVER_BASE_URL}/student/delete`;
  return axios.patch(url, body);
};
api.editStudent = function (body) {
  const url = `${constants.SERVER_BASE_URL}/student/update`;
  return axios.patch(url, body);
};

//Student Classes
api.getStudentClassById = function (body) {
  const url = `${constants.SERVER_BASE_URL}/student-class/get/by-id`;
  return axios.get(url, body);
};
api.getAllStudentsClasses = function (body) {
  const url = `${constants.SERVER_BASE_URL}/students-class/get/all`;
  return axios.get(url, body);
};
api.createStudentClass = function (body) {
  const url = `${constants.SERVER_BASE_URL}/students-class/create`;
  return axios.post(url, body);
};
api.deleteStudentClass = function (body) {
  const url = `${constants.SERVER_BASE_URL}/student-class/delete`;
  return axios.patch(url, body);
};
api.editStudentClass = function (body) {
  const url = `${constants.SERVER_BASE_URL}/student-class/update`;
  return axios.patch(url, body);
};

export default api;
