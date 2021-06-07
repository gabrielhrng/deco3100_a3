function make_plot(tweet_data, tsne_data) {
  let data = [{
    x: tsne_data.map(d => d.x),
    y: tsne_data.map(d => d.y),
    mode: 'markers',
    type: 'scatter',
    customdata: tweet_data.map(d => d.text),
    hovertemplate:
      "%{customdata}" +
      "<extra></extra>",
    marker: {
      size: 4,
      colorscale: 'Jet',
      color: tsne_data.map(d => d.cluster_id),
    }
  }];

  let layout = {
    hovermode: "closest",
    xaxis: {
      visible: false,
    },
    yaxis: {
      visible: false,
    }
  }

  Plotly.newPlot('plotDiv', data, layout);
}

Plotly.d3.csv("a3data\novtrumptweet.csv", (tweets) => {
  Plotly.d3.csv("a3data\tsnedata\novtrumpvectors.csv", (tnse_data) => {
    make_plot(tweets, tnse_data)
  });
});

