import { Control } from 'ol/control.js';
import './style.css';
import {Map, View} from 'ol';
import Style from 'ol/style/Style.js';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj.js';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    }),
    new VectorLayer({
      source: new VectorSource({
        format: new GeoJSON(),
        url: 'quartals.json'
      }),
    }),
  ],
  view: new View({
    center: fromLonLat([23.650737, 52.101781]),
    zoom: 14
  })
});

var style = new Style({
  fillColor: "${getColor}",
  strokeColor: "#000000",
  strokeWidth: 2,
  fillOpacity: 0.5
}, {
  context: {
    getColor: function (feature) {
      var count = feature.attributes.count;
      var color = "rgb(" + Math.round(255 - count * 10) + ",0," + Math.round(count * 10) + ")";
      return color;
    }
  }
});

var layer = new VectorLayer( {
  styleMap: new Style({
    "default": style,
    "select": {
      fillColor: "#8aeeef",
      strokeColor: "#32a8a9"
    }
  })
});