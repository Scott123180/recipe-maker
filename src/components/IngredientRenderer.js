import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

class RecipeInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            "data" : props.data,
            "searchInput" : null,
            "ingredients" : []
        }
    }

    updateState = (key,value) => {
        this.setState({[[key]]: value});
    }

    addIngredient = (value) => {

        const nbdNoLookup = "";


        this.setState((prevState, nbdNoLookup) => {
            recipes: prevState.recipes.push(nbdNoLookup);
        })
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
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={AllIngredients}
                    sx={{ width: 300 }}
                    onChange={(event) => this.addIngredient(event.target.value)}
                />

                {this.state.ingredients}
            </div>

        );
    }
}

export default RecipeInput;