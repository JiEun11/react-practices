import React, { Component } from 'react'
import FoodListItem from './FoodListItem';

export default class FoodList extends Component {
  render(){
    return(
      <ul>
        <FoodListItem name="Egg" quantity="10" />
        <FoodListItem name="Milk" quantity="4" />
        <FoodListItem name="bread" quantity="2" />
      </ul>
    );
  }
};