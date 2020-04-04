import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCountry } from '../../actions/covidTracker';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// react-simple-maps
import {
    ComposableMap,
    Geographies,
    Geography,
    Sphere,
    Graticule
  } from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import ReactTooltip from "react-tooltip";
import missingGeoMamesList from './missingGeoNamesList';
// Material ui
import { IconButton, Paper, Hidden, Divider, Grid, makeStyles } from '@material-ui/core';
import { ZoomIn, ZoomOut } from '@material-ui/icons';

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json';

const colorScale = value => {
  const color = scaleLinear()
  .domain([0, 100, 1000, 3000, 10000, 50000, 80000])
  .range([
    "#FFC0A8",
    "#FFAB8C",
    "#F26149",
    "#C73B29",
    "#9D0B0B",
    "#740000",
    "#3f0000"
  ]);
  return color(value);
}

const Map = ({ data, setToolTipContent }) => {
  const dispatch = useDispatch();
  return (
  <>
    <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
    <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
      {data && (
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
          geographies.map(geo => {
            let d = data.find(countryData => countryData.Country === geo.properties.NAME);
            if(!d) {
              d = data.find(countryData => countryData.Country === missingGeoMamesList[geo.properties.ISO_A3]);
            }
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={d ? colorScale(d.TotalConfirmed) : "lightgray"}
                strokeWidth={0.3}
                data-tip={d ? `${d.Country}: ${d.TotalConfirmed} cases` : ''}
                onMouseEnter={() => {
                  d ? setToolTipContent(`${d.Country}: ${d.TotalConfirmed} cases`) : setToolTipContent("");
                }}
                onMouseLeave={() => {
                  setToolTipContent("");
                }}
                onDoubleClick={d && (() => dispatch(selectCountry(d)))}
                style={{
                  default: {
                    outline: "none"
                  },
                  hover: {
                    fill: d ? "#F53" : 'lightgray',
                    outline: "none",
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none"
                  }
                }}
              />
            );
          })
        }
      </Geographies>
    )}
  </>
)}

const useStyles = makeStyles(theme => ({
  map: {
    border: 'solid 1px',
    borderColor: theme.palette.secondary.light,
    boxShadow: '0px 1px 10px 0px rgba(0,0,0,0.12)',
    borderRadius: '15px',
    margin: theme.spacing(2),
    overflow: 'hidden'
  }
}))

const MapChart = () => {
  const data = useSelector(state => state.data.Countries);
  const [toolTipContent, setToolTipContent] = useState('');
  const { map } = useStyles();
  useEffect(() => {
    ReactTooltip.rebuild();
  }, [toolTipContent]);

  return (
    <Grid container justify='center'>
      <Grid container item xs={12} md={9} justify='center'>
        <TransformWrapper 
        doubleClick={{ disabled: true }} >
        {({ zoomIn, zoomOut }) => 
          <div style={{ position: 'relative' }}  className={map}>
            <TransformComponent >
              <ComposableMap height={400} cursor={'grab'}
                projectionConfig={{
                  scale: 147,
                  rotation: [-11, 0, 0],
                }}
                style={{
                    width: "1000px",
                    maxWidth: "100%"
                }}
              >
                <Map data={data} setToolTipContent={setToolTipContent} />  
              </ComposableMap> 
            </TransformComponent>

            {/* Zoom buttons */}
            <Hidden mdDown>
              <Paper style={{display: 'flex', position: 'absolute', bottom: '1%', right: '2%'}}>
                <IconButton onClick={zoomIn}>
                  <ZoomIn />
                </IconButton>
                <IconButton onClick={zoomOut}>
                  <ZoomOut />
                </IconButton>
              </Paper>
            </Hidden>
          </div>
        } 
        </TransformWrapper>
        <ReactTooltip place='bottom' />
      </Grid>
    </Grid>
  )
};

export default MapChart
