import Highchart from "highcharts/highcharts";

Highchart.setOptions({
  lang: {
    resetZoom: "重置"
  },
  global: {
    useUTC: false
  }
});

Highchart.dateFormats = {
  W: function(timestamp) {
    var pad = function(num) {
      return ("0" + num).slice(-2);
    };

    var getTimeFromDate = function(timestamp) {
      var date = new Date(timestamp);
      var hours = date.getHours();
      // var minutes = date.getMinutes()
      // var seconds = date.getSeconds()
      // return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
      return pad(hours);
    };

    return getTimeFromDate(timestamp);
  }
};
