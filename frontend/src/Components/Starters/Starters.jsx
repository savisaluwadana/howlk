/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./Starters.css";

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
        console.log(response.data);
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
    <div style={{ margin: "40px" }}>
      <h1>Starters</h1>
      <Link to={"/addContent"}>Add Resources</Link>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className="featured">
            <h1>Featured</h1>
            {data && data.length
              ? data.map((x) => (
                  <div
                    key={x._id}
                    className=""
                    style={{
                      marginTop: "120px",
                      marginLeft: "40px",
                      marginBottom: "40px",
                    }}
                  >
                    <h1>{x.heading}</h1>
                    <h2>{x.category}</h2>
                    <p>{x.preDesc}</p>
                    <div className="content">
                      {x.content.map((iter, index) => (
                        <div key={index}>
                          <p>{iter}</p>
                        </div>
                      ))}
                    </div>
                    <p>{x.postDesc}</p>
                  </div>
                ))
              : "No results found!"}
          </div>
          {/* <p>{JSON.stringify(data)}</p> */}
        </div>
      )}
      <p>{status}</p>
    </div>
  );
};

export default Starters;
