import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./Main.css"; // Import CSS file for component-specific styles

const Main = () => {
  const { loading, setLoading, BASE, setStatus } = useContext(UserContext);
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
    <div className="main-container">
      {" "}
      {/* Apply container styles */}
      <h1 className="main-heading">Welcome to How.LK</h1>{" "}
      {/* Apply heading styles */}
      <div className="main-content">
        {" "}
        {/* Apply content styles */}
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <div className="featured">
              <h2>Featured</h2>
              <div className="card-container">
                {data && data.length ? (
                  data.map((item) => (
                    <div key={item._id} className="card">
                      {" "}
                      {/* Apply card styles */}
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <Link
                        to={`/details/${item._id}`}
                        className="details-link"
                      >
                        Details
                      </Link>{" "}
                      {/* Apply link styles */}
                    </div>
                  ))
                ) : (
                  <p>No results found!</p>
                )}
              </div>
            </div>
            <div className="sides">
              <h2>Side Hustles</h2>
              <div className="card-container">
                {data2 && data2.length ? (
                  data2.map((item) => (
                    <div key={item._id} className="card">
                      {" "}
                      {/* Apply card styles */}
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <Link
                        to={`/details/${item._id}`}
                        className="details-link"
                      >
                        Details
                      </Link>{" "}
                      {/* Apply link styles */}
                    </div>
                  ))
                ) : (
                  <p>No results found!</p>
                )}
              </div>
            </div>
          </div>
        )}
        {/* <p>{status}</p> */}
        <Link to={"/addContent"} className="add-content-link">
          Add Resources
        </Link>{" "}
        {/* Apply link styles */}
      </div>
    </div>
  );
};

export default Main;
