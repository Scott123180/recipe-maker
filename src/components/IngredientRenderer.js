import React from 'react';
import reactDom from 'react-dom';

class RecipeInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            "data" : props.data,
            "searchInput" : null
        }
    }

    updateState = (key,value) => {
        this.setState({[[key]]: value});
    }

    /*
        Features
          - search and add ingredient
            - input form
            - name
            - preparation
            - amount
          - nutrition display
          - export as json

        -eventually upload from json so you can edit recipes

    */

    render() {
        const AllIngredients = this.state.data.allAllFoodDataCsv.nodes.map((node) => node.shrtDesc)

        return (
            <div>
                {AllIngredients}
            </div>

        );
    }
}

export default RecipeInput;