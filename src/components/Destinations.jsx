import { useState } from "react";
import DestinationCard from "./DestinationCard";
import Pagination from "./Pagination";

const dummyData = [
  {
    name: "Location A",
    country: "Japan",
    image: "https://picsum.photos/200?1",
    description: "This is a beautiful place with amazing views."
  },
  {
    name: "Location B",
    country: "USA",
    image: "https://picsum.photos/200?2",
    description: "A wonderful destination with great food."
  },
  {
    name: "Location C",
    country: "Norway",
    image: "https://picsum.photos/200?3",
    description: "Perfect for hiking and outdoor activities."
  },
];

export default function Destinations() {
  const [keyword, setKeyword] = useState("");
  const [country, setCountry] = useState("");

  const filteredList = dummyData.filter((item) => {
    const matchName = item.name.toLowerCase().includes(keyword.toLowerCase());
    const matchCountry = item.country.toLowerCase().includes(country.toLowerCase());
    return matchName && matchCountry;
  });

  return (
    <div>
      <h2>Destinations Recommended</h2>

      <div style={{ marginBottom: "20px" }}>
        <label>
          Search by Keyword: 
          <input 
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            style={{ marginLeft: "10px", marginRight: "30px" }}
          />
        </label>

        <label>
          Search by Country:
          <input 
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            style={{ marginLeft: "10px" }}
          />
        </label>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredList.map((item, index) => (
          <DestinationCard
            key={index}
            name={item.name}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
      <Pagination currentPage={1} totalPages={30} />
    </div>
  );
}
