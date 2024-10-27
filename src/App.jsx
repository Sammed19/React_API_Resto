import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import RestaurantList from './components/RestaurantList';
import SearchFilter from './components/SearchFilter';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Example names and descriptions arrays
  const restaurantNames = [
    "Italian Bistro",
    "Sushi Haven",
    "Burger Joint",
    "Pizza Palace",
    "Manchurian Delight",
    "Kheer Corner",
    "Fried Rice Express",
    "Vada Pav Shop",
    "Italian Bistro",
    "Sushi Haven",
    "Burger Joint",
    "Pizza Palace",
  ];

  const restaurantDescriptions = [
    "-> Savor the flavors of Italy, one bite at a time.",
    " Savor the freshest sushi made by our expert chefs '.",
    "Home of the juiciest burgers in town.",
    "A corner shop specializing in delicious pizzas.",
    "Experience the spicy flavors of Manchurian cuisine.",
    "Indulge in our sweet and creamy Kheer dessert.",
    "Delicious fried rice with various options.",
    "A quick stop for the famous Vada Pav.",
    "Savor the flavors of Italy, one bite at a time",
    "Savor the freshest sushi made by our expert chefs.",
    "Home of the juiciest burgers in town.",
    "A corner shop specializing in delicious pizzas.",
    "Experience the spicy flavors of Manchurian cuisine.",
    "Indulge in our sweet and creamy Kheer dessert.",
    "Delicious fried rice with various options.",
    "A quick stop for the famous Vada Pav."
  ];

  const images = {
    1: "src/assets/pasta.jpg",
    2: "src/assets/sushi.jpg",
    3: "src/assets/burger.jpg",
    4: "src/assets/pizza.jpg",
    5: "src/assets/Manchurian.jpg",
    6: "src/assets/Kheer.jpg",
    7: "src/assets/friedrice.jpg",
    8: "src/assets/vadapav.jpg",
    9: "src/assets/pasta.jpg",
    10: "src/assets/sushi.jpg",
    11: "src/assets/burger.jpg",
    12: "src/assets/pizza.jpg",
    13: "src/assets/Manchurian.jpg",
    14: "src/assets/Kheer.jpg",
    15: "src/assets/friedrice.jpg",
    16: "src/assets/vadapav.jpg",
  };

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();

        const restaurantsWithImages = data.map((restaurant, index) => ({
          ...restaurant,
          title: restaurantNames[index] || restaurant.title,
          description: restaurantDescriptions[index] || "No description available.",
          image: images[restaurant.id] || "path/to/default-image.jpg"
        }));

        setRestaurants(restaurantsWithImages);
        setFilteredRestaurants(restaurantsWithImages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRestaurants();
  }, []);

  useEffect(() => {
    setFilteredRestaurants(
      restaurants.filter(restaurant =>
        restaurant.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, restaurants]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <RestaurantList restaurants={filteredRestaurants.slice(0, 12)} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
