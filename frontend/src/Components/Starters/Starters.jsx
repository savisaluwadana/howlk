/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import Axios from "axios";

const Starters = () => {
  const { loading, setLoading, BASE, status, setStatus } =
    useContext(UserContext);
  const [data, setData] = useState([]);

  async function fetch() {
    try {
      setLoading(true);
      const response = await Axios.get(`${BASE}/starters`);
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

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <h1>Starters</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className="featured">
            <h1>Featured</h1>
            {data && data.length ? JSON.stringify(data) : "No results found!"}
          </div>
        </div>
      )}
      <p>{status}</p>
    </div>
  );
};

export default Starters;
