// chart1 (랜덤 값 변화)
var options1 = {
  series: [30], // 초기값
  chart: {
    height: 280,
    type: "radialBar",
    offsetY: 0,
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      hollow: {
        size: "70%",
      },
      track: {
        background: "#45474A",
        strokeWidth: "100%",
      },
      dataLabels: {
        show: false,
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      shadeIntensity: 0.15,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
      gradientToColors: ["#fff"],
      colorStops: [
        {
          offset: 0,
          color: "#11E490",
          opacity: 1,
        },
        {
          offset: 100,
          color: "#fff",
          opacity: 1,
        },
      ],
    },
  },
  stroke: {
    lineCap: "square",
    width: 4,
  },
};

// 차트 초기 렌더링
var chart1 = new ApexCharts(document.querySelector("#chart1"), options1);
chart1.render();

// 값 업데이트 함수
function updateValue(newValue) {
  document.querySelector(".chart-custom-label .value").innerHTML = `${newValue}<span>%</span>`;
}

// 랜덤 값 생성 및 차트 업데이트
function updateChart() {
  let newValue = Math.floor(Math.random() * 100) + 1;

  options1.series = [newValue];
  chart1.updateSeries([newValue]);
  updateValue(newValue);
}

setInterval(updateChart, 4000);
updateValue(options1.series[0]);

// chart2 (출입 통계 그래프)
var options2 = {
  series: [
    {
      data: [2300, 3100, 2800, 3300, 4500, 3900, 4850, 3100, 2900, 3200, 1800, 2600],
    },
  ],
  chart: {
    height: 200,
    type: "bar",
    toolbar: { show: false },
  },
  plotOptions: {
    bar: {
      columnWidth: "35%",
      distributed: true,
      borderRadius: 2,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      gradientToColors: ["#4630EA"],
      stops: [0, 50, 100],
      colorStops: [
        {
          offset: 0,
          color: "#B4E52C",
          opacity: 1,
        },
        {
          offset: 50,
          color: "#2CE5BA",
          opacity: 1,
        },
        {
          offset: 100,
          color: "#4630EA",
          opacity: 1,
        },
      ],
    },
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    theme: "dark",
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      let monthYear = w.globals.labels[dataPointIndex];
      let value = series[seriesIndex][dataPointIndex].toLocaleString();
      return `
            <div class="g-tooltip">
                <span>${monthYear}</span>
                <p>${value} 명</p>
            </div>
        `;
    },
  },

  xaxis: {
    categories: ["JAN", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    labels: {
      style: {
        colors: "#5C606F",
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return val / 1000 + "k";
      },
      style: {
        colors: "#5C606F",
        fontSize: "14px",
      },
    },
  },
  grid: {
    borderColor: "#5C606F",
    strokeDashArray: 4, 
    position: "back",
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    show: false,
  },
};


var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
chart2.render();
