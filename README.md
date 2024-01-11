# Bellybutton Biodiversity Dashboard

## Overview
This interactive web dashboard allows users to explore the Bellybutton Biodiversity dataset through visualizations. The dataset includes information about different test subjects, their demographic information, and bacterial sample data.

## Features
- **Test Subject Selection:** Use the dropdown menu to select a test subject ID and view corresponding demographic information.
- **Bar Chart:** Displays the top 10 bacterial species (OTUs) for the selected test subject.
- **Bubble Chart:** Visualizes the distribution of bacterial species based on OTU IDs and sample values.
- **Demographic Info:** Shows additional demographic details of the selected test subject.

## Instructions
1. Open `index.html` in a web browser.
2. Explore demographic information:
   - Use the dropdown menu to select a test subject ID.
   - Demographic information will be displayed in the "Demographic Info" panel.
3. View the bar chart:
   - The top 10 bacterial species for the selected test subject are displayed in the "Bar Chart" section.
4. Explore the bubble chart:
   - The "Bubble Chart" section visualizes the distribution of bacterial species based on OTU IDs and sample values.

## Technologies Used
- D3.js: A JavaScript library for creating interactive data visualizations.
- Plotly: A charting library for creating interactive and dynamic charts.

## Dependencies
- Bootstrap: CSS framework for responsive design.

## File Structure
- `index.html`: Main HTML file for the web dashboard.
- `app.js`: JavaScript file containing the code for data loading and visualization.
- `static/`: Folder containing static assets such as scripts.

## How to Run Locally
1. Clone the repository: `git clone <repository-url>`
2. Open `index.html` in a web browser.

## Credits
- Data Source: [Link to the dataset](https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json)



