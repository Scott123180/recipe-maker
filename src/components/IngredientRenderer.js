import React from 'react';

class IngredientRenderer extends React.Component {
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

    render() {
        const AllIngredients = this.state.data.allAllFoodDataCsv.nodes.map((node) => console.log(node.shrtDesc));

        return (
            <div>
                {AllIngredients}
            </div>

        );
    }
}

export default IngredientRenderer;