const labels = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const data = {
  labels: labels,
  datasets: [
    {
      backgroundColor: [
        'hsl(10,79%,65%)',
        'hsl(10,79%,65%)',
        'hsl(186,34%,60%)',
        'hsl(10,79%,65%)',
        'hsl(10,79%,65%)',
        'hsl(10,79%,65%)',
        'hsl(10,79%,65%)',
      ],
      borderColor: 'rgb(255, 99, 132)',
      data: [17.45, 34.91, 52.36, 31.07, 23.29, 43.28, 25.48],
      borderRadius: 3,
    },
  ],
};

const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      x: {
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          font: {
              family: 'DM Sans', // Your font family
              size: 14,
          },
      },
      },
      y: {
        beginsAtZero: false,
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        displayColors: false,
        callbacks: {
          labelColor: function (context) {
            return {
              backgroundColor: 'rgb(255, 0, 0)',
              borderRadius: 2,
            };
          },
        },
      },
    },
  },
};

/* mobile responsiveness for chart*/
var chartEl = document.getElementById("myChart");
if(screen.width <= 480){
  chartEl.height = 150;
}

const myChart = new Chart(document.getElementById('myChart'), config);

console.log('hello');
