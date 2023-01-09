import { Chart } from "react-google-charts";
import { certified } from "../../script/scripts";

export function ProCertifiedTopicChart() {
  const copyData = [...certified]
  let extractedData = {}
  copyData.forEach(data => {
    if (extractedData[data.topic]) extractedData[data.topic]++
    else extractedData[data.topic] = 1
  })
  
  let data = [["Topics", "Count"]];
  for (let i in extractedData) {
    data = [...data, [i, extractedData[i]]]
  }

  const options = {
    title: "Exam Topics",
    is3D: false,
    pieHole: 0.5,
    pieSliceText: 'none',
    legend: {
      position: 'top'
    },
  };

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width="100%"
      height="160px"
    />
  );
}

export function ProCertifiedByChart() {
  const copyData = [...certified]
  let extractedData = {}
  copyData.forEach(data => {
    if (extractedData[data.by]) extractedData[data.by]++
    else extractedData[data.by] = 1
  })

  let data = [["By", "Count"]];
  for (let i in extractedData) {
    data = [...data, [i, extractedData[i]]]
  }

  const options = {
    title: "Exam Certified By",
    is3D: false,
    pieHole: 0.5,
    pieSliceText: 'none',
    legend: {
      position: 'top'
    },
  };

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width="100%"
      height="160px"
    />
  );
}