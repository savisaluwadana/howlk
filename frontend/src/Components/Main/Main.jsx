/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import Axios from "axios";

const Main = () => {
  const { loading, setLoading, BASE, status, setStatus } =
    useContext(UserContext);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  async function fetch() {
    try {
      setLoading(true);
      const response = await Axios.get(`${BASE}/mains`);
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (err) {
      if (err.status === 404) {
        setStatus("No results found!");
      } else {
        setStatus("Error!");
      }
    } finally {
      setLoading(false);
    }
  }

  async function fetch2() {
    try {
      setLoading(true);
      const response = await Axios.get(`${BASE}/mains/sides`);
      if (response.status === 200) {
        setData2(response.data);
      }
    } catch (err) {
      if (err.status === 404) {
        setStatus("No results found!");
      } else {
        setStatus("Error!");
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetch();
    fetch2();
  }, []);

  return (
    <div>
      <h1>Main</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className="featured">
            <h1>Featured</h1>
            {data && data.length ? JSON.stringify(data) : "No results found!"}
          </div>
          <div className="sides">
            <h1>Side Hustles</h1>
            {data2 && data2.length
              ? JSON.stringify(data2)
              : "No results found!"}
          </div>
        </div>
      )}
      <p>{status}</p>
    </div>
  );
};

export default Main;
