const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 5 };

const labels = [
  "Frontend",
  "Mobile",
  "Cloud computing",
  "Agile project management",
  "DB & ORM",
  "Backend",
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My Stack",
      data: [5, 4, 3, 4, 2.5, 2.5],
      borderColor: "#538135",
      backgroundColor: "rgba(130,214,40,0.2)",
    },
    {
      label: "skip",
      data: [0, 5, 5, 0, 3, 5],
      borderColor: "rgba(130,214,40,0)",
      backgroundColor: "rgba(130,214,40,0)",
    },
  ],
};

const config = {
  type: "radar",
  data: data,
  scaleOverride: true,
  scaleSteps: 1,
  
  scaleStartValue: 0,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Skills Radar",
      },
    },
    
  },
};
export { config };
