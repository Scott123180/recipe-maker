import * as React from "react"
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";

import RecipeInput from "../components/IngredientRenderer";

const SecondPage = ({data}) => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <input type="text" onChange={event => this.updateInputBoxState(event.target.value)}/>
    <p>Welcome to page 2</p>
    {console.log(data.allAllFoodDataCsv)}
    <RecipeInput data={data} />

    <Link to="/">Go back to the homepage</Link>
  </Layout>

)

export const query = graphql`
  {
    allAllFoodDataCsv {
      nodes {
        ndbNo: NDB_No
        shrtDesc: Shrt_Desc
        energKcal: Energ_Kcal
        proteinG: Protein__g_
        carbG: Carbohydrt__g_
        fiberTdG: Fiber_TD__g_
        sugarTotG: Sugar_Tot__g_
        potassiumMg: Potassium__mg_
        sodiumMg: Sodium__mg_
        fatSatG: FA_Sat__g_
        fatMonoG: FA_Mono__g_
        fatPolyG: FA_Poly__g_
        cholestrlMg: Cholestrl__mg_
        gmWt1: GmWt_1
        gmWt1Desc: GmWt_Desc1
        gmWt2: GmWt_2
        gmWt2Desc: GmWt_Desc2
      }
    }
  }
`;

export default SecondPage;
