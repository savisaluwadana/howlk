import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { UserContext } from "../../App";

const DetailsPage = () => {
  const { id } = useParams(); // Get the item ID from the URL
  const [item, setItem] = useState(null);
  const { BASE, setLoading, setStatus } = useContext(UserContext);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        setLoading(true);
        const response = await Axios.get(`${BASE}/starters/${id}`);
        if (response.status === 200) {
          setItem(response.data);
        } else {
          setStatus("Item not found!");
        }
      } catch (error) {
        setStatus("Error fetching item details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchItemDetails();
  }, [id, BASE, setLoading, setStatus]);

  if (!item) {
    return <p>Loading item details...</p>;
  }

  return (
    <div className="details-container">
      <h1>{item.heading}</h1>
      <h2>{item.category}</h2>
      <p>{item.preDesc}</p>
      {item.content &&
        item.content.map((content, index) => (
          <div key={index} className="item-content">
            <p>{content}</p>
          </div>
        ))}
      <p>{item.postDesc}</p>
    </div>
  );
};

export default DetailsPage;
