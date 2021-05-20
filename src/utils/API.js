import React from 'react';
import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=50";

function API () {
  return axios.get(BASEURL);
}

export default API;

function API () {
const getEmployees = () => {
  axios.get('https://randomuser.me/api/?results=50')
    .then(res => {
      // console.log(res.data);
      console.log(res.data.results)
      let data = res.data.results;
      data.map(employee => {
        return console.log(employee.name.first);
      });
      // console.log(data);
      }
    )
    .catch(err => console.log(err));
  };
};
