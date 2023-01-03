// import { Chart } from "react-google-charts";
// import { experiences } from "../../script/scripts";

// export default function ExpChart() {
//     const options = {
//         title: "Hourly rate vs. Length of work comparison",
//         hAxis: { title: "Companies" },
//         vAxis: { title: "Months", viewWindow: { min: 0, max: 15 } },
//         legend: "none"
//       };
      
//       const data = [['Companies', 'Months'], ...experiences.map(exp => [exp.id, exp.length])];
    
//     return <Chart
//                 chartType="LineChart"
//                 data={data}
//                 options={options}
//                 width="100%"
//                 height="400px"
//                 legendToggle
//             />
// }