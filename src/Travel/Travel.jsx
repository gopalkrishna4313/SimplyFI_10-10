import React, { useState, useEffect } from "react";

// List of available tickets
const tickets = [
  "Paris-Skopje",
  "Zurich-Amsterdam",
  "Prague-Zurich",
  "Barcelona-Berlin",
  "Kiev-Prague",
  "Skopje-Paris",
  "Amsterdam-Barcelona",
  "Berlin-Kiev",
  "Berlin-Amsterdam",
];


const findRoute = (startCity, tickets) => {
  let route = [startCity];
  let availableTickets = [...tickets];

  while (availableTickets.length > 0) {
    let foundNext = false;

    for (let i = 0; i < availableTickets.length; i++) {
      const [from, to] = availableTickets[i].split("-");

      if (route[route.length - 1] === from) {
        route.push(to);
        availableTickets.splice(i, 1);
        foundNext = true;
        break;
      }
    }

    if (!foundNext) break;
  }

  return route;
};

const Travel = () => {
  const [route, setRoute] = useState([]);

  // Find the route starting from 'Kiev'
  const handleFindRoute = () => {
    const routeFound = findRoute("Kiev", tickets);
    setRoute(routeFound);
  };

  return (
    <div style={{margin:"30px"}}>
      <h1>Find Your Son's Travel Route</h1>
      <button onClick={handleFindRoute}>Find Route</button>

      {route.length > 0 && (
        <div>
          <h2> son traveled through:</h2>
          <ol>
            {route.map((city, index) => (
              <li key={index}>{city}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default Travel;
