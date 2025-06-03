document.addEventListener("DOMContentLoaded", function () {
    const categories = ['Technology', 'Design', 'Health', 'Travel', 'Education', 'Business', 'Lifestyle', 'Finance', 'Food', 'Entertainment'];
    const views = [540, 320, 230, 150, 100, 90, 80, 70, 60, 50];

    const options = {
        chart: {
            type: 'pie',
            height: "100%",
        },
        series: views,
        labels: categories,
        colors: ['#F39C12', '#2980B9', '#2ECC71', '#9B59B6', '#E74C3C', '#1ABC9C', '#E67E22', '#34495E', '#95A5A6', '#7F8C8D'],
        stroke: {
            width: 0,
            colors: ['transparent']
        },
        legend: {
            position: 'left',
            horizontalAlign: 'center',
            // fontSize: '1000px',
            fontWeight: 100,
            itemMargin: {
                vertical: 6,
            },
            markers: {
                radius: 3,
            },
            show: true,
            formatter: function(seriesName, opts) {
                return seriesName;
            }
        },
        dataLabels: {
            enabled: false
        },
        tooltip: {
            y: {
                formatter: val => val + " views"
            }
        }
    };

    const chart = new ApexCharts(document.querySelector("#dummy-pie"), options);
    chart.render();
});
