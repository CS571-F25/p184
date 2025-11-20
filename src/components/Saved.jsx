import { useSaved } from "./SavedContext";
import DestinationCard from "./DestinationCard";

export default function Saved() {
  const { savedList } = useSaved();

  return (
    <div>
      <h2>Saved Destinations</h2>

      {savedList.length === 0 && <p>No saved destinations yet.</p>}

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {savedList.map((item, index) => (
          <DestinationCard
            key={index}
            name={item.name}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

