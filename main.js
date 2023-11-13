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
        url: 'quartals11131852.geojson'
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
    url: 'quartals11131852.geojson', // URL сервиса, который возвращает данные о кварталах речицы в формате GeoJSON
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
        url: 'quartals11131852.geojson'
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
        url: 'quartals11131852.geojson'
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
    url: 'quartals11131852.geojson', // URL сервиса, который возвращает данные о кварталах речицы в формате GeoJSON
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
        url: 'quartals11131852.geojson'
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
    url: 'quartals11131852.geojson', // URL сервиса, который возвращает данные о кварталах речицы в формате GeoJSON
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
  if (med === 1) {
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

/////////////////////////////////////////////////////////////////////////

const mapWithAge = new Map({
  target: 'map-with-age',
  layers: [
    new TileLayer({
      source: new OSM()
    }),
    new VectorLayer({
      source: new VectorSource({
        format: new GeoJSON(),
        url: 'quartals11131852.geojson'
      }),
    }),
  ],
  view: new View({
    center: fromLonLat([23.650737, 52.101781]),
    zoom: 14
  })
});

// Создаем векторный слой с данными о кварталах речицы в формате GeoJSON
const vectorLayerAge = new VectorLayer({
  source: new VectorSource({
    url: 'quartals11131852.geojson', // URL сервиса, который возвращает данные о кварталах речицы в формате GeoJSON
    format: new GeoJSON()
  })
});

// Добавляем векторный слой на карту
mapWithAge.addLayer(vectorLayerAge);

// Создаем функцию, которая возвращает стиль для векторного слоя в зависимости от количества деревьев в квартале
const getStyleAge = (feature) => {
  // Получаем количество деревьев в квартале из свойства trees
  const age = feature.get('age');
  // Определяем цвет заливки квартала по шкале от светло-зеленого до темно-зеленого
  let color;
  if (age === "young") {
    color = "rgb(0, 230, 211, 0.7)";
  }
  if (age === "medium") {
    color = "rgb(0, 143, 131, 0.7)";
  }
  if (age === "old") {
    color = "rgb(0, 66, 61, 0.7)";
  }
  // Возвращаем стиль с заливкой квартала цветом color
  return new Style({
    stroke: new Stroke({
      color: '#0d2927', // Цвет границы
      width: 1 // Толщина границы
    }),
    fill: new Fill({
      color: color,
    })
  });
};

// Устанавливаем стиль для векторного слоя с помощью функции getStyle
vectorLayerAge.setStyle(getStyleAge);


/////////////////////////////////////////////////////////////////////


const mapWithDom = new Map({
  target: 'map-with-dom',
  layers: [
    new TileLayer({
      source: new OSM()
    }),
    new VectorLayer({
      source: new VectorSource({
        format: new GeoJSON(),
        url: 'quartals11131852.geojson'
      }),
    }),
  ],
  view: new View({
    center: fromLonLat([23.650737, 52.101781]),
    zoom: 14
  })
});

// Создаем векторный слой с данными о кварталах речицы в формате GeoJSON
const vectorLayerDom = new VectorLayer({
  source: new VectorSource({
    url: 'quartals11131852.geojson', // URL сервиса, который возвращает данные о кварталах речицы в формате GeoJSON
    format: new GeoJSON()
  })
});

// Добавляем векторный слой на карту
mapWithDom.addLayer(vectorLayerDom);

// Создаем функцию, которая возвращает стиль для векторного слоя в зависимости от количества деревьев в квартале
const getStyleDom = (feature) => {
  // Получаем количество деревьев в квартале из свойства trees
  const dom = feature.get('dom');
  // Определяем цвет заливки квартала по шкале от светло-зеленого до темно-зеленого
  let color;
  if (dom === "bereza") {
    color = "rgba(2, 243, 223, 0.7)";
  }
  if (dom === "klen") {
    color = "rgba(225, 119, 27, 0.7)";
  }
  if (dom === "topol") {
    color = "rgba(47, 186, 22, 0.7)";
  }
  if (dom === "und") {
    color = "rgba(100, 100, 100, 0.7)";
  }
  // Возвращаем стиль с заливкой квартала цветом color
  return new Style({
    stroke: new Stroke({
      color: 'rgba(0, 0, 0, 0.1)', // Цвет границы
      width: 1 // Толщина границы
    }),
    fill: new Fill({
      color: color,
    })
  });
};

// Устанавливаем стиль для векторного слоя с помощью функции getStyle
vectorLayerDom.setStyle(getStyleDom);


////////////////////////////////////////////////////////////////

const mapWithSubdom = new Map({
  target: 'map-with-subdom',
  layers: [
    new TileLayer({
      source: new OSM()
    }),
    new VectorLayer({
      source: new VectorSource({
        format: new GeoJSON(),
        url: 'quartals11131852.geojson'
      }),
    }),
  ],
  view: new View({
    center: fromLonLat([23.650737, 52.101781]),
    zoom: 14
  })
});

// Создаем векторный слой с данными о кварталах речицы в формате GeoJSON
const vectorLayerSubdom = new VectorLayer({
  source: new VectorSource({
    url: 'quartals11131852.geojson', // URL сервиса, который возвращает данные о кварталах речицы в формате GeoJSON
    format: new GeoJSON()
  })
});

// Добавляем векторный слой на карту
mapWithSubdom.addLayer(vectorLayerSubdom);

// Создаем функцию, которая возвращает стиль для векторного слоя в зависимости от количества деревьев в квартале
const getStyleSubdom = (feature) => {
  // Получаем количество деревьев в квартале из свойства trees
  const subdom = feature.get('subdom');
  // Определяем цвет заливки квартала по шкале от светло-зеленого до темно-зеленого
  let color;
  if (subdom === "osina") {
    color = "rgba(2, 243, 223, 0.7)";
  }
  if (subdom === "klen") {
    color = "rgba(225, 119, 27, 0.7)";
  }
  if (subdom === "iva") {
    color = "rgba(47, 186, 22, 0.7)";
  }
  // Возвращаем стиль с заливкой квартала цветом color
  return new Style({
    stroke: new Stroke({
      color: 'rgba(0, 0, 0, 0.1)', // Цвет границы
      width: 1 // Толщина границы
    }),
    fill: new Fill({
      color: color,
    })
  });
};

// Устанавливаем стиль для векторного слоя с помощью функции getStyle
vectorLayerSubdom.setStyle(getStyleSubdom);



let buttonShowTrees = document.getElementById("showTrees");
let buttonShowMap = document.getElementById("showExploreQuartals");
let buttonShowGrooming = document.getElementById("showGrooming");
let buttonShowMed = document.getElementById("showMed");
let buttonShowAge = document.getElementById("showAge");
let buttonShowDom = document.getElementById("showDom");
let buttonShowSubdom = document.getElementById("showSubdom");

let elMap = document.getElementById("map");
let elMapWithTrees = document.getElementById("map-with-trees");
let elMapWithGrooming = document.getElementById("map-with-grooming");
let elMapWithMed = document.getElementById("map-with-med");
let elMapWithAge = document.getElementById("map-with-age");
let elMapWithDom = document.getElementById("map-with-dom");
let elMapWithSubdom = document.getElementById("map-with-subdom");

let treesLegend = document.getElementById("trees-legend");
let groomingLegend = document.getElementById("grooming-legend");
let medLegend = document.getElementById("med-legend");
let ageLegend = document.getElementById("age-legend");
let domLegend = document.getElementById("dom-legend");
let subdomLegend = document.getElementById("subdom-legend");

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

  elMapWithAge.style.display = "none";
  buttonShowAge.classList.remove('map-switcher__active-button');
  ageLegend.style.display = "none";

  elMapWithDom.style.display = "none";
  buttonShowDom.classList.remove('map-switcher__active-button');
  domLegend.style.display = "none";

  elMapWithSubdom.style.display = "none";
  buttonShowSubdom.classList.remove('map-switcher__active-button');
  subdomLegend.style.display = "none";
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

  elMapWithAge.style.display = "none";
  buttonShowAge.classList.remove('map-switcher__active-button');
  ageLegend.style.display = "none";

  elMapWithDom.style.display = "none";
  buttonShowDom.classList.remove('map-switcher__active-button');
  domLegend.style.display = "none";

  elMapWithSubdom.style.display = "none";
  buttonShowSubdom.classList.remove('map-switcher__active-button');
  subdomLegend.style.display = "none";
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

  elMapWithAge.style.display = "none";
  buttonShowAge.classList.remove('map-switcher__active-button');
  ageLegend.style.display = "none";

  elMapWithDom.style.display = "none";
  buttonShowDom.classList.remove('map-switcher__active-button');
  domLegend.style.display = "none";

  elMapWithSubdom.style.display = "none";
  buttonShowSubdom.classList.remove('map-switcher__active-button');
  subdomLegend.style.display = "none";
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

  elMapWithAge.style.display = "none";
  buttonShowAge.classList.remove('map-switcher__active-button');
  ageLegend.style.display = "none";

  elMapWithDom.style.display = "none";
  buttonShowDom.classList.remove('map-switcher__active-button');
  domLegend.style.display = "none";

  elMapWithSubdom.style.display = "none";
  buttonShowSubdom.classList.remove('map-switcher__active-button');
  subdomLegend.style.display = "none";
})

buttonShowAge.addEventListener("click", () => {
  elMap.style.display = "none";
  elMapWithTrees.style.display = "none";
  elMapWithGrooming.style.display = "none";
  elMapWithMed.style.display = "none";
  treesLegend.style.display = "none";
  groomingLegend.style.display = "none";
  medLegend.style.display = "none";
  buttonShowTrees.classList.remove('map-switcher__active-button');
  buttonShowMap.classList.remove('map-switcher__active-button');
  buttonShowGrooming.classList.remove('map-switcher__active-button');
  buttonShowMed.classList.remove('map-switcher__active-button');

  elMapWithAge.style.display = "block";
  buttonShowAge.classList.add('map-switcher__active-button');
  ageLegend.style.display = "flex";

  elMapWithDom.style.display = "none";
  buttonShowDom.classList.remove('map-switcher__active-button');
  domLegend.style.display = "none";

  elMapWithSubdom.style.display = "none";
  buttonShowSubdom.classList.remove('map-switcher__active-button');
  subdomLegend.style.display = "none";
})

buttonShowDom.addEventListener("click", () => {
  elMap.style.display = "none";
  elMapWithTrees.style.display = "none";
  elMapWithGrooming.style.display = "none";
  elMapWithMed.style.display = "none";
  treesLegend.style.display = "none";
  groomingLegend.style.display = "none";
  medLegend.style.display = "none";
  buttonShowTrees.classList.remove('map-switcher__active-button');
  buttonShowMap.classList.remove('map-switcher__active-button');
  buttonShowGrooming.classList.remove('map-switcher__active-button');
  buttonShowMed.classList.remove('map-switcher__active-button');

  elMapWithAge.style.display = "none";
  buttonShowAge.classList.remove('map-switcher__active-button');
  ageLegend.style.display = "none";

  elMapWithDom.style.display = "block";
  buttonShowDom.classList.add('map-switcher__active-button');
  domLegend.style.display = "flex";

  elMapWithSubdom.style.display = "none";
  buttonShowSubdom.classList.remove('map-switcher__active-button');
  subdomLegend.style.display = "none";
})

buttonShowSubdom.addEventListener("click", () => {
  elMap.style.display = "none";
  elMapWithTrees.style.display = "none";
  elMapWithGrooming.style.display = "none";
  elMapWithMed.style.display = "none";
  treesLegend.style.display = "none";
  groomingLegend.style.display = "none";
  medLegend.style.display = "none";
  buttonShowTrees.classList.remove('map-switcher__active-button');
  buttonShowMap.classList.remove('map-switcher__active-button');
  buttonShowGrooming.classList.remove('map-switcher__active-button');
  buttonShowMed.classList.remove('map-switcher__active-button');

  elMapWithAge.style.display = "none";
  buttonShowAge.classList.remove('map-switcher__active-button');
  ageLegend.style.display = "none";

  elMapWithDom.style.display = "none";
  buttonShowDom.classList.remove('map-switcher__active-button');
  domLegend.style.display = "none";

  elMapWithSubdom.style.display = "block";
  buttonShowSubdom.classList.add('map-switcher__active-button');
  subdomLegend.style.display = "flex";
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
