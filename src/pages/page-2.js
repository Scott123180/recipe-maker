import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

class SecondPage extends React.Component {

  render({data}){

    return (
      <Layout>
        <Seo title="Page two" />
        <h1>Hi from the second page</h1>
        <input type="text"></input>
        <p>Welcome to page 2</p>
        {data}
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    );
  }

} 

export default SecondPage
