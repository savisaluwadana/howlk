import { useContext, useState } from "react";
import { UserContext } from "../../../App";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

/* eslint-disable no-unused-vars */
const AddCourses = () => {
  const { loading, setLoading, status, setStatus, BASE } =
    useContext(UserContext);
  const [courseRelated, setCourseRelated] = useState({
    title: "",
    courses: "",
    videoUrl: "",
  });

  const navigator = useNavigate();

  async function AddCourses(e) {
    e.preventDefault();
    try {
      const response = await Axios.post(`${BASE}/courses`, courseRelated);
      if (response.status === 200) {
        setStatus("Added Resource!");
        setTimeout(() => {
          navigator("/");
        }, 2000);
      }
    } catch (err) {
      if (err.status === 403) {
        setStatus("Error while adding!");
      } else {
        setStatus("Error!");
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const handleChange = (e) => {
    setCourseRelated({ ...courseRelated, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Add Courses</h1>
      <form onSubmit={AddCourses}>
        <input onChange={handleChange} name="title" placeholder="text"></input>
        <input
          onChange={handleChange}
          name="courses"
          placeholder="text"
        ></input>
        {/* <input
          onChange={handleChange}
          name="videoUrl"
          type="file"
          placeholder="text"
        ></input> */}
        <button type="submit" disabled={loading}>
          Add Resource!
        </button>
      </form>
      <Link to={"/courses"}>Back to courses</Link>
    </div>
  );
};

export default AddCourses;
