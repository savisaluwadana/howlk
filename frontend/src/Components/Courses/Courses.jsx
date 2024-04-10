/* eslint-disable no-unused-vars */
import Axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";

const Courses = () => {
  const { loading, setLoading, status, setStatus, BASE } =
    useContext(UserContext);
  const [resources, setResources] = useState([]);

  async function FetchCourses() {
    try {
      const outcome = await Axios.get(`${BASE}/courses`);
      if (outcome) {
        setResources(outcome.data);
      }
    } catch (err) {
      if (err.status === 404) {
        setStatus("No results found!");
      }
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Courses</h1>
      <div className="data">
        {resources && resources.length
          ? JSON.stringify(resources)
          : "No results found"}
      </div>
      <p>{status}</p>
      <Link to={"/addcourses"}>Add Courses</Link>
    </div>
  );
};

export default Courses;
