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
import Modify from 'ol/interaction/Modify';
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
        url: 'quartals.geojson'
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
    url: 'quartals.geojson', // URL сервиса, который возвращает данные о кварталах речицы в формате GeoJSON
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
    if (colorNum < 50) {
      return 50;
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
        url: 'quartals.geojson'
      }),
    }),
  ],
  view: new View({
    center: fromLonLat([23.650737, 52.101781]),
    zoom: 14
  })
});
///////////////////////////////////////////////////////////////////////////////

const mapWithGrooming = new Map({
  target: 'map-with-grooming',
  layers: [
    new TileLayer({
      source: new OSM()
    }),
    new VectorLayer({
      source: new VectorSource({
        format: new GeoJSON(),
        url: 'quartals.geojson'
      }),
    }),
  ],
  view: new View({
    center: fromLonLat([23.650737, 52.101781]),
    zoom: 14
  })
});

// Создаем векторный слой с данными о кварталах речицы в формате GeoJSON
const vectorLayerGrooming = new VectorLayer({
  source: new VectorSource({
    url: 'quartals1.geojson', // URL сервиса, который возвращает данные о кварталах речицы в формате GeoJSON
    format: new GeoJSON()
  })
});

// Добавляем векторный слой на карту
mapWithGrooming.addLayer(vectorLayerGrooming);

// Создаем функцию, которая возвращает стиль для векторного слоя в зависимости от количества деревьев в квартале
const getStyleGrooming = (feature) => {
  // Получаем количество деревьев в квартале из свойства trees
  const grooming = feature.get('grooming');
  // Определяем цвет заливки квартала по шкале от светло-зеленого до темно-зеленого
  let colorWeight = () => {
    let colorNum = 255 - grooming;
    if (colorNum < 50) {
      return 50;
    }
    return colorNum;
  }
  const color = `rgb(200, ${colorWeight()}, 0, 0.7)`;
  // Возвращаем стиль с заливкой квартала цветом color
  return new Style({
    stroke: new Stroke({
      color: 'orange', // Цвет границы
      width: 1 // Толщина границы
    }),
    fill: new Fill({
      color: color,
    })
  });
};

// Устанавливаем стиль для векторного слоя с помощью функции getStyle
vectorLayerGrooming.setStyle(getStyleGrooming);

/////////////////////////////////////////////////////////////////////////

const mapWithMed = new Map({
  target: 'map-with-med',
  layers: [
    new TileLayer({
      source: new OSM()
    }),
    new VectorLayer({
      source: new VectorSource({
        format: new GeoJSON(),
        url: 'quartals.geojson'
      }),
    }),
  ],
  view: new View({
    center: fromLonLat([23.650737, 52.101781]),
    zoom: 14
  })
});

// Создаем векторный слой с данными о кварталах речицы в формате GeoJSON
const vectorLayerMed = new VectorLayer({
  source: new VectorSource({
    url: 'quartals2.geojson', // URL сервиса, который возвращает данные о кварталах речицы в формате GeoJSON
    format: new GeoJSON()
  })
});

// Добавляем векторный слой на карту
mapWithMed.addLayer(vectorLayerMed);

// Создаем функцию, которая возвращает стиль для векторного слоя в зависимости от количества деревьев в квартале
const getStyleMed = (feature) => {
  // Получаем количество деревьев в квартале из свойства trees
  const med = feature.get('med');
  // Определяем цвет заливки квартала по шкале от светло-зеленого до темно-зеленого
  let color = "rgb(54, 54, 54, 0.7)";
  if (med) {
    color = "rgb(219, 86, 86, 0.7)";
  }
  // Возвращаем стиль с заливкой квартала цветом color
  return new Style({
    stroke: new Stroke({
      color: '#965353', // Цвет границы
      width: 1 // Толщина границы
    }),
    fill: new Fill({
      color: color,
    })
  });
};

// Устанавливаем стиль для векторного слоя с помощью функции getStyle
vectorLayerMed.setStyle(getStyleMed);





let buttonShowTrees = document.getElementById("showTrees");
let buttonShowMap = document.getElementById("showExploreQuartals");
let buttonShowGrooming = document.getElementById("showGrooming");
let buttonShowMed = document.getElementById("showMed");
let elMap = document.getElementById("map");
let elMapWithTrees = document.getElementById("map-with-trees");
let elMapWithGrooming = document.getElementById("map-with-grooming");
let elMapWithMed = document.getElementById("map-with-med");
let treesLegend = document.getElementById("trees-legend");
let groomingLegend = document.getElementById("grooming-legend");
let medLegend = document.getElementById("med-legend");


buttonShowTrees.addEventListener("click", () => {
  elMap.style.display = "none";
  elMapWithTrees.style.display = "block";
  elMapWithGrooming.style.display = "none";
  elMapWithMed.style.display = "none";
  treesLegend.style.display = "flex";
  groomingLegend.style.display = "none";
  medLegend.style.display = "none";
  buttonShowTrees.classList.add('map-switcher__active-button');
  buttonShowMap.classList.remove('map-switcher__active-button');
  buttonShowGrooming.classList.remove('map-switcher__active-button');
  buttonShowMed.classList.remove('map-switcher__active-button');
})

buttonShowMap.addEventListener("click", () => {
  elMap.style.display = "block";
  elMapWithTrees.style.display = "none";
  elMapWithGrooming.style.display = "none";
  elMapWithMed.style.display = "none";
  treesLegend.style.display = "none";
  groomingLegend.style.display = "none";
  medLegend.style.display = "none";
  buttonShowTrees.classList.remove('map-switcher__active-button');
  buttonShowMap.classList.add('map-switcher__active-button');
  buttonShowGrooming.classList.remove('map-switcher__active-button');
  buttonShowMed.classList.remove('map-switcher__active-button');
})

buttonShowGrooming.addEventListener("click", () => {
  elMap.style.display = "none";
  elMapWithTrees.style.display = "none";
  elMapWithGrooming.style.display = "block";
  elMapWithMed.style.display = "none";
  treesLegend.style.display = "none";
  groomingLegend.style.display = "flex";
  medLegend.style.display = "none";
  buttonShowTrees.classList.remove('map-switcher__active-button');
  buttonShowMap.classList.remove('map-switcher__active-button');
  buttonShowGrooming.classList.add('map-switcher__active-button');
  buttonShowMed.classList.remove('map-switcher__active-button');
})

buttonShowMed.addEventListener("click", () => {
  elMap.style.display = "none";
  elMapWithTrees.style.display = "none";
  elMapWithGrooming.style.display = "none";
  elMapWithMed.style.display = "block";
  treesLegend.style.display = "none";
  groomingLegend.style.display = "none";
  medLegend.style.display = "flex";
  buttonShowTrees.classList.remove('map-switcher__active-button');
  buttonShowMap.classList.remove('map-switcher__active-button');
  buttonShowGrooming.classList.remove('map-switcher__active-button');
  buttonShowMed.classList.add('map-switcher__active-button');
})

//////////////////////////////////////////

let burger = document.getElementById("burger");
let mapSwitcher = document.getElementById("map-switcher");
let burgerContainer = document.getElementById("burger-container");
let firstOn = true;
let on = true;

burgerContainer.addEventListener("click", () => {
  if (firstOn || !on) {
    mapSwitcher.style.display = "flex";
    firstOn = false;
    on = true;
  } else {
    mapSwitcher.style.display = "none";
    on = false;
  }
})

window.onresize = function() {
  if(window.innerWidth > 768){
    mapSwitcher.style.display = "flex";
    on = true;
    firstOn = false;
  } 
}
