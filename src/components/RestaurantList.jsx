import React from 'react';
import './RestaurantList.css'; // Import your CSS file

const RestaurantList = ({ restaurants }) => {
  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant) => (
        <div className="card" key={restaurant.id}>
          <img src={restaurant.image} alt={restaurant.title} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{restaurant.title}</h5>
            <p className="card-text">{restaurant.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
