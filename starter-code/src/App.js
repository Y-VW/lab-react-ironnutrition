import React, { Component } from 'react';
import './App.css';
import "bulma/css/bulma.css";
import foodslist from "./foods.json";
import FoodBox from "./components/FoodBox";
import ListToday from "./components/ListToday";

class App extends Component {
  state = {
    foods: foodslist
  }
  render() {
    return (
      <div className="App">
        <div>
          <h1>IronNutrition</h1>
        </div>
        <div className="lists">
          <div className="list">
            {this.state.foods.map((food, index) => (
              <FoodBox
                key={index}
                index={index}
                name={food.name}
                calories={food.calories}
                image={food.image}
              />
            ))}
          </div>
          <ListToday />
        </div>
      </div>
    );
  }
}

export default App;
