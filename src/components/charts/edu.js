import { Chart } from "react-google-charts";
import { moocs } from "../../script/scripts";

export function EduMoocTopicChart() {
  const copyData = [...moocs]
  let extractedData = {}
  copyData.forEach(data => {
    if (extractedData[data.topic]) extractedData[data.topic]++
    else extractedData[data.topic] = 1
  })

  let data = [["Topic", "Count"]];
  for (let i in extractedData) {
    data = [...data, [i, extractedData[i]]]
  }

  const options = {
    title: "Course Topics",
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

export function EduMoocProviderChart() {
  const copyData = [...moocs]
  let extractedData = {}
  copyData.forEach(data => {
    if (extractedData[data.provider]) extractedData[data.provider]++
    else extractedData[data.provider] = 1
  })

  let data = [["Provider", "Count"]];
  for (let i in extractedData) {
    data = [...data, [i, extractedData[i]]]
  }

  const options = {
    title: "Course Providers",
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

export function EduSchoolGPAChart() {
  const data = [
    [
      "Study Scope",
      "Credits in year 1",
      "Credits in year 2",
      "Credits in year 3",
      "Grade"
    ],
    ["Computer Science Studies", 15, 30, 24, 4.2],
    ["Computational Engineering Studies", 5, 5, 10, 4.5],
    ["Data Science Studies", 15, 13, 20, 4],
    ["Math & Other Studies", 30, 2, 11, 4.6],
  ];

  const options = {
    title: "Study Scope Progresses & Grades",
    hAxis: { title: "Study Scope" },
    seriesType: "bars",
    legend: {
      position: 'top'
    },
    series: {
      3: { type: 'line', pointSize: 6, targetAxisIndex: 2 }
    },
    vAxes: {
      1: {},
      2: {
        title:'Grade',
        baseline: 0,
        viewWindow: {
          max: 5,
        },
        textStyle: {color: 'black'}
      }
    }
  };

  return (
    <Chart
      chartType="ComboChart"
      width="100%"
      height="300px"
      data={data}
      options={options}
    />
  );
}
