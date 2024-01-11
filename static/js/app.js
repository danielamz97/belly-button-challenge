const samples_data = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';


d3.json(samples_data).then(function(data) {
    const namesArray = data.names;
    const dropdown = d3.select('#selDataset');

    dropdown
        .selectAll('option')
        .data(namesArray)
        .enter()
        .append('option')
        .text(function(d) { return d; });

    const top_tenDiv = d3.select('#bar') 
        .append('div')
        .attr('id', 'top_ten');

    let targetMetadata = data.metadata.filter(d => d.id === 940)[0];
    console.log(targetMetadata)

    let dataDiv = d3.select('#sample-metadata');
    
    dataDiv.selectAll('p').remove();
    dataDiv.append('p').text('id: ' + targetMetadata.id);
    dataDiv.append('p').text('ethnicity: ' + targetMetadata.ethnicity);
    dataDiv.append('p').text('gender: ' + targetMetadata.gender);
    dataDiv.append('p').text('age: ' + targetMetadata.age);
    dataDiv.append('p').text('location: ' + targetMetadata.location);
    dataDiv.append('p').text('bbtype: ' + targetMetadata.bbtype);
    dataDiv.append('p').text('wfreq: ' + targetMetadata.wfreq);

    let targetElement = data.samples.filter(d => d.id === "940")[0];
    console.log(targetElement);

    const sortedData = targetElement.sample_values.sort((a, b) => b - a);

    const xValues = sortedData.slice(0, 10);
    console.log(xValues);

    const yValues = targetElement.otu_ids.map(function(otuId) {
        return "OTU " + otuId;
    }).slice(0, 10);
    console.log(yValues);

    const trace_chart = {
        x : xValues.reverse(),
        y : yValues.reverse(),
        type : 'bar',
        orientation: 'h'
    };

    Plotly.newPlot('top_ten', [trace_chart]);

    const trace_bubble = {
        x: targetElement.otu_ids,
        y: targetElement.sample_values,
        mode: 'markers',
        marker: {
            size: targetElement.sample_values,
            color: targetElement.otu_ids,
            text: targetElement.otu_labels
        }
    };

    const layout_bubble = {
        height: 500,
        width: 1000,
    };

    Plotly.newPlot('bubble', [trace_bubble], layout_bubble);

})

function optionChanged(target_id) {
    d3.json(samples_data).then(function(data) {
        
        // get the demographic info
        const target_id_int = parseInt(target_id);
        const targetMetadata = data.metadata.filter(d => d.id === target_id_int)[0];
        console.log(targetMetadata);

        const dataDiv = d3.select('#sample-metadata');
        dataDiv.selectAll('p').remove();
        dataDiv.append('p').text('id: ' + targetMetadata.id);
        dataDiv.append('p').text('ethnicity: ' + targetMetadata.ethnicity);
        dataDiv.append('p').text('gender: ' + targetMetadata.gender);
        dataDiv.append('p').text('age: ' + targetMetadata.age);
        dataDiv.append('p').text('location: ' + targetMetadata.location);
        dataDiv.append('p').text('bbtype: ' + targetMetadata.bbtype);
        dataDiv.append('p').text('wfreq: ' + targetMetadata.wfreq);

        // get the data for the target id 
        const targetElement = data.samples.filter(d => d.id === target_id)[0];
        console.log(targetElement);

        // get the X and Y values for the bar plot
        const sortedData = targetElement.sample_values.sort((a, b) => b - a);

        const xValues = sortedData.slice(0, 10);
        console.log(xValues);

        const yValues = targetElement.otu_ids.map(function(otuId) {
            return "OTU " + otuId;
        }).slice(0, 10);
        console.log(yValues);

        // make the bar plot
        const trace_chart = {
            x : xValues.reverse(),
            y : yValues.reverse(),
            type : 'bar',
            orientation: 'h'
        };

        Plotly.newPlot('top_ten', [trace_chart]);

        //make the bubble plot
        const trace_bubble = {
            x: targetElement.otu_ids,
            y: targetElement.sample_values,
            mode: 'markers',
            marker: {
                size: targetElement.sample_values,
                color: targetElement.otu_ids,
                text: targetElement.otu_labels
            }
        };
        const layout_bubble = {
            height: 500,
            width: 1000,
        };

        Plotly.newPlot('bubble', [trace_bubble], layout_bubble);
    });
}
