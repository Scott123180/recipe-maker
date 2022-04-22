//impossible since graph ql is at build time and we are trying to
//dynamically query data

// import React from "react"
// import { graphql } from "gatsby"

// const Ingredient = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

// const foodId = "01002"

// export const query = graphql`
//   query Ingredient ($foodId: String) {
//     allFoodDataCsv(NDB_No: {eq: $foodId}) {
//       ndbNo: NDB_No
//       shrtDesc: Shrt_Desc
//       energKcal: Energ_Kcal
//       proteinG: Protein__g_
//       carbG: Carbohydrt__g_
//       fiberTdG: Fiber_TD__g_
//       sugarTotG: Sugar_Tot__g_
//       potassiumMg: Potassium__mg_
//       sodiumMg: Sodium__mg_
//       fatSatG: FA_Sat__g_
//       fatMonoG: FA_Mono__g_
//       fatPolyG: FA_Poly__g_
//       cholestrlMg: Cholestrl__mg_
//       gmWt1: GmWt_1
//       gmWt1Desc: GmWt_Desc1
//       gmWt2: GmWt_2
//       gmWt2Desc: GmWt_Desc2
//     }
//   }
// `

// export default Ingredient
