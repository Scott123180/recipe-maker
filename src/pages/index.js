import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import AllIngredients from "../queries/AllIngredients.js";
import { render } from "react-dom";

const myData = AllIngredients();

class IndexPage extends React.Component {

  render() {
    return (
    <Layout>
      <Seo title="Home" />
      <p>Recipe input site</p>
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
      </p>
      {myData}
    </Layout>
    );
  }
} 

export default IndexPage;