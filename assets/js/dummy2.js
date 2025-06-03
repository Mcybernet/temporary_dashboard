const hariMinggu = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
            
function generateView() {
  const hasil = [];
  for (let i = 0; i < 7; i++) {
    const nilai = Math.floor(Math.random() * 4000) + 100;
    hasil.push(nilai);
  }
  return hasil;
}

const opsiChartMingguan = {
  series: [{
    name: "Viewers",
    data: generateView()
  },
  {
    name: "Viewers",
    data: generateView()
  }
  ],
  chart: {
    type: 'bar',
    height: 430,
    toolbar: { show: false }, //Hilangkan tombol toolbar
    zoom: { enabled: false },
    foreColor: '#919191',
    animations: {
      enabled: !0,
      easing: "linear",
      dynamicAnimation: {
          speed: 2e3
      }
  },
  },
  colors: ['#6AD4EB','#F38C3C'],
  stroke: {
    width: 10,
    curve: 'smooth'
  },
  markers: {
  //   size: 4
  },
  xaxis: {
    categories: hariMinggu,
    axisBorder: { show: false },
    axisTicks: { show: false }
  },
  yaxis: {
    labels: {
      formatter: function(val) {
        return '' + val.toLocaleString('id-ID');
      }
    }
  },
  grid: {
    show: true,
    borderColor: '#424242',
    strokeDashArray: 0,
    xaxis: { lines: { show: true } },
    yaxis: { lines: { show: true } },
    position: 'back',
    padding: {
      top: 0,
      right: 10,
      bottom: 0,
      left: 10
    }
  },
  tooltip: {
    theme: 'false',
    y: {
      formatter: function(val) {
        return '' + val.toLocaleString('id-ID');
      }
    }
  },
  legend: {
    show: false
  }
};

const chartMingguan = new ApexCharts(
  document.querySelector("#dummytest"),
  opsiChartMingguan
);
chartMingguan.render();