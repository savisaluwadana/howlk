import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./Starters.css"; // Import CSS file for component-specific styles

const Starters = () => {
  const { loading, setLoading, BASE, status, setStatus } =
    useContext(UserContext);
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await Axios.get(`${BASE}/starters`);
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setStatus("No results found!");
      } else {
        setStatus("Error!");
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="starters-container">
      <h1 className="starters-heading">Starters</h1>
      <Link to={"/addContent"} className="add-resources-link">
        Add Resources
      </Link>
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
                    <h3>{item.heading}</h3>
                    <h4>{item.category}</h4>
                    <p>{item.preDesc}</p>
                    <div className="content">
                      {item.content.map((iter, index) => (
                        <div key={index}>
                          <p>{iter}</p>
                        </div>
                      ))}
                    </div>
                    <p>{item.postDesc}</p>
                    <Link to={`/details/${item._id}`}>Read More</Link>
                  </div>
                ))
              ) : (
                <p>No results found!</p>
              )}
            </div>
          </div>
        </div>
      )}
      <p>{status}</p>
    </div>
  );
};

export default Starters;
