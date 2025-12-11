import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import DestinationCard from "./DestinationCard";
import Pagination from "./Pagination";

const destinations = [
  {
    name: "Kyoto Temples",
    country: "Japan",
    image: "https://picsum.photos/300/200?1",
    description: "Ancient temples, quiet streets and beautiful cherry blossoms in spring."
  },
  {
    name: "New York City",
    country: "USA",
    image: "https://picsum.photos/300/200?2",
    description: "Skyscrapers, Broadway shows and endless food choices in a city that never sleeps."
  },
  {
    name: "Paris Getaway",
    country: "France",
    image: "https://picsum.photos/300/200?3",
    description: "Romantic river views, world-class museums and cozy street cafes along the Seine."
  },
  {
    name: "Sydney Coast",
    country: "Australia",
    image: "https://picsum.photos/300/200?4",
    description: "Sunny beaches, surfing spots and the iconic Sydney Opera House by the harbour."
  },
  {
    name: "Swiss Alps",
    country: "Switzerland",
    image: "https://picsum.photos/300/200?5",
    description: "Snowy mountains, skiing resorts and scenic train rides through alpine villages."
  },
  {
    name: "Bangkok Nightlife",
    country: "Thailand",
    image: "https://picsum.photos/300/200?6",
    description: "Street food stalls, colourful markets and lively night streets by the river."
  },
  {
    name: "Rome Classics",
    country: "Italy",
    image: "https://picsum.photos/300/200?7",
    description: "Ancient ruins, charming piazzas and creamy gelato on every corner."
  },
  {
    name: "Bali Beaches",
    country: "Indonesia",
    image: "https://picsum.photos/300/200?8",
    description: "Warm ocean water, rice terraces and sunset views from cliffside temples."
  },
  {
    name: "Iceland Ring Road",
    country: "Iceland",
    image: "https://picsum.photos/300/200?9",
    description: "Waterfalls, black-sand beaches and a chance to see the northern lights."
  },
  {
    name: "Barcelona Vibes",
    country: "Spain",
    image: "https://picsum.photos/300/200?10",
    description: "Gaudí architecture, tapas bars and long walks along the Mediterranean sea."
  },
  {
    name: "London Landmarks",
    country: "United Kingdom",
    image: "https://picsum.photos/300/200?11",
    description: "Historic palaces, modern galleries and cosy pubs on rainy afternoons."
  },
  {
    name: "Santorini Cliffs",
    country: "Greece",
    image: "https://picsum.photos/300/200?12",
    description: "White-washed houses, blue domes and sunsets over the caldera."
  },
  {
    name: "Vancouver Trails",
    country: "Canada",
    image: "https://picsum.photos/300/200?13",
    description: "Mountain trails, seaside parks and a relaxed outdoor-loving city lifestyle."
  },
  {
    name: "Dubai Skyline",
    country: "United Arab Emirates",
    image: "https://picsum.photos/300/200?14",
    description: "Futuristic towers, desert safaris and shopping malls with indoor attractions."
  },
  {
    name: "Cape Town Coast",
    country: "South Africa",
    image: "https://picsum.photos/300/200?15",
    description: "Table Mountain views, penguin beaches and colourful seaside neighbourhoods."
  },
  {
    name: "Tokyo Lights",
    country: "Japan",
    image: "https://picsum.photos/300/200?16",
    description: "Neon streets, quiet shrines and late-night ramen in tiny alley shops."
  },
  {
    name: "Prague Old Town",
    country: "Czech Republic",
    image: "https://picsum.photos/300/200?17",
    description: "Cobblestone streets, gothic towers and a famous bridge over the river."
  },
  {
    name: "Lisbon Hills",
    country: "Portugal",
    image: "https://picsum.photos/300/200?18",
    description: "Tram rides up steep hills, tiled buildings and viewpoints over the Atlantic."
  }
];

const ITEMS_PER_PAGE = 6;

export default function Destinations() {
  const [keyword, setKeyword] = useState("");
  const [country, setCountry] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredList = destinations.filter((item) => {
    const matchKeyword =
      item.name.toLowerCase().includes(keyword.toLowerCase()) ||
      item.description.toLowerCase().includes(keyword.toLowerCase());

    const matchCountry =
      item.country.toLowerCase().includes(country.toLowerCase());

    return matchKeyword && matchCountry;
  });

  const totalPages = Math.max(1, Math.ceil(filteredList.length / ITEMS_PER_PAGE));

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedList = filteredList.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
    setCurrentPage(1);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setCurrentPage(1);
  };

  return (
    <Container>
      <h1 className="mb-4">Popular Destinations</h1>

      <Form className="mb-4">
        <Row className="g-3">
          <Col md={6}>
            <Form.Group controlId="searchKeyword">
              <Form.Label>Search by keyword</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g. temple, beach..."
                value={keyword}
                onChange={handleKeywordChange}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="searchCountry">
              <Form.Label>Filter by country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Japan, USA, France..."
                value={country}
                onChange={handleCountryChange}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>

      <Row xs={1} sm={2} md={3} lg={3} className="g-4">
        {paginatedList.map((item, index) => (
          <Col key={index}>
            <DestinationCard
              name={item.name}
              image={item.image}
              description={item.description}
            />
          </Col>
        ))}
      </Row>

      <div className="d-flex justify-content-center mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </Container>
  );
}
