// Импортируем модули
import './style.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import { fromLonLat } from 'ol/proj.js';
import { Stroke } from 'ol/style';

// Создаем карту с базовым слоем OSM
const mapWithTrees = new Map({
  target: 'map-with-trees',
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

// Создаем векторный слой с данными о кварталах речицы в формате GeoJSON
const vectorLayer = new VectorLayer({
  source: new VectorSource({
    url: 'quartals.json', // URL сервиса, который возвращает данные о кварталах речицы в формате GeoJSON
    format: new GeoJSON()
  })
});

// Добавляем векторный слой на карту
mapWithTrees.addLayer(vectorLayer);

// Создаем функцию, которая возвращает стиль для векторного слоя в зависимости от количества деревьев в квартале
const getStyle = (feature) => {
  // Получаем количество деревьев в квартале из свойства trees
  const trees = feature.get('trees');
  // Определяем цвет заливки квартала по шкале от светло-зеленого до темно-зеленого
  let colorWeight = () => {
    let colorNum = 255 - trees;
    if(colorNum <= 10){
      return 40;
    }
      return colorNum;
  }
  const color = `rgb(0, ${colorWeight()}, 0, 0.7)`;
  // Возвращаем стиль с заливкой квартала цветом color
  return new Style({
    stroke: new Stroke({
      color: 'green', // Цвет границы
      width: 1 // Толщина границы
    }),
    fill: new Fill({
      color: color,
    })
  });
};

// Устанавливаем стиль для векторного слоя с помощью функции getStyle
vectorLayer.setStyle(getStyle);

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

let buttonShowTrees = document.getElementById("showTrees");
let buttonShowMap = document.getElementById("showExploreQuartals");
let elMap = document.getElementById("map");
let elMapWithTrees = document.getElementById("map-with-trees");


buttonShowTrees.addEventListener("click", () => {
  elMap.style.display = "none";
  elMapWithTrees.style.display = "block";
  buttonShowTrees.classList.add('map-switcher__active-button');
  buttonShowTrees.classList.remove('map-switcher__inactive-button');
  buttonShowMap.classList.remove('map-switcher__active-button');
  buttonShowMap.classList.add('map-switcher__inactive-button');
})

buttonShowMap.addEventListener("click", () => {
  elMapWithTrees.style.display = "none";
  elMap.style.display = "block";
  buttonShowTrees.classList.remove('map-switcher__active-button');
  buttonShowTrees.classList.add('map-switcher__inactive-button');
  buttonShowMap.classList.add('map-switcher__active-button');
  buttonShowMap.classList.remove('map-switcher__inactive-button');
})