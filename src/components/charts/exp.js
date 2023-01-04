import { Chart } from "react-google-charts";
import { experiences } from "../../script/scripts";

// Timeline chart
export function ExpTimelineChart() {
  const expCopy = [...experiences]
  const columns = [
    { type: "string", id: "Type" },
    { type: "string", id: "Company" },
    { type: "date", id: "Start" },
    { type: "date", id: "End" },
  ];

  const rows = [...expCopy.map(exp => ['Company', exp.id, exp.from, exp.to])]

  const data = [columns, ...rows];

  return <Chart 
            chartType="Timeline" 
            data={data} 
            width="100%"
            height="110px"/>;
}

// Commitment chart
export function ExpTimeChart() {
    const expCopy = [...experiences].reverse()
    const data = [
        ['Company', 'Time (months)'],
        ...expCopy.map(exp => [exp.id, exp.length])
    ];
    const options = {
        title: "Length of work (months) chronologically",
        pointSize: 6,
        colors: ['purple']
    }
    return (
        <Chart
        chartType="LineChart"
        data={data}
        options={options}
        width="100%"
        height="180px"
        />
    );
}

// Pay rate chart
export function ExpRateChart() {
  const expCopy = [...experiences]
  const extractedData = expCopy.map(exp => [exp.id.split(' ')[0], (exp.rate/exp.avgRate), exp.benefit, exp.type, exp.size])
  const data = [
    ["ID", "Hourly rate / local average rate", "Monthly benefit value (USD)", "Type of employment", "Company size"],
    ...extractedData
  ];
  
  const maxZoomScale = 1.2
  const minZoomScale = 3
  let hAxisMax = 0
  let vAxisMax = 0

  let hAxisMin = extractedData[0][1]
  let vAxisMin = extractedData[0][2]

  extractedData.forEach(data => {
    if (data[1] > hAxisMax) hAxisMax = data[1]
    if (data[2] > vAxisMax) vAxisMax = data[2]

    if (data[1] < hAxisMin) hAxisMin = data[1]
    if (data[2] < vAxisMin) vAxisMin = data[2]
  })

  const options = {
    title: "Correlation between company renumeration and company size",
    hAxis: { 
      title: "Hourly Rate / Local Average Rate",
      viewWindow: {
        max: hAxisMax * maxZoomScale,
        min: hAxisMin - hAxisMax / minZoomScale
      }
    },
    vAxis: { 
      title: "Monthly benefit value (USD)",
      viewWindow: {
        max: vAxisMax * maxZoomScale,
        min: vAxisMin - vAxisMax / minZoomScale
      }
    },
    sizeAxis: {
      maxSize: 35,
      minSize: 10,
    }
  };

  return (
    <Chart
      chartType="BubbleChart"
      data={data}
      options={options}
      width="100%"
      height="200px"
    />
  );
}