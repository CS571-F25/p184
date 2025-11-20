import { useState } from "react";
import "./DestinationCard.css";
import { useSaved } from "./SavedContext";


export default function DestinationCard({ name, image, description }) {
  const [showMore, setShowMore] = useState(false);
  const [saveCount, setSaveCount] = useState(0);
  const { addToSaved } = useSaved();

  return (
    <div className="card-container">
      <img src={image} alt={name} className="card-image" />

      <h4>{name}</h4>

      {showMore && (
        <p className="card-description">
          {description}
        </p>
      )}

      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Hide" : "More"}
      </button>

        <button onClick={() => { 
        setSaveCount(saveCount + 1); 
        addToSaved({ name, image, description }); 
        }}>
        ❤️ Save ({saveCount})
        </button>


    </div>
  );
}
