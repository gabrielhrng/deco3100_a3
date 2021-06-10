function make_plot7(tweet_data, tsne_data) {
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
        size: 16,
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
  
    Plotly.newPlot('julplotDiv', data, layout);
  }

  Plotly.d3.csv("a3data/jultrumptweet.csv", (tweets) => {
    Plotly.d3.csv("a3data/tsnedata/jultrumpvector.csv", (tnse_data) => {
      make_plot7(tweets, tnse_data)
    });
  });
  
  