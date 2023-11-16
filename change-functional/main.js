const map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([23.650737, 52.101781]),
        zoom: 14
    })
});

// Создаем векторный слой с geojson файлом
const vectorLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        url: 'quartals.geojson', // здесь указываем путь к вашему geojson файлу
        format: new ol.format.GeoJSON({
            dataProjection: 'EPSG:32634'
            // featureProjection: 'EPSG:4326',
            // dataProjection: 'EPSG:32634'
        })
    }),
    style: new ol.style.Style({ // здесь можно задать стиль для векторного слоя
        fill: new ol.style.Fill({
            color: 'rgba(255, 255, 255, 0.6)'
        }),
        stroke: new ol.style.Stroke({
            color: '#319FD3',
            width: 1
        }),
        image: new ol.style.Circle({
            radius: 5,
            fill: new ol.style.Fill({
                color: '#ffcc33'
            })
        })
    })
});

// Добавляем векторный слой на карту
map.addLayer(vectorLayer);

// Создаем объекты для редактирования векторного слоя
const modify = new ol.interaction.Modify({ source: vectorLayer.getSource() });
map.addInteraction(modify);

const draw = new ol.interaction.Draw({
    source: vectorLayer.getSource(),
    type: 'Polygon'
});
map.addInteraction(draw);

const snap = new ol.interaction.Snap({ source: vectorLayer.getSource() });
map.addInteraction(snap);

// Создаем функцию для отправки измененного geojson файла на сервер
function sendGeoJSON() {
    // Получаем geojson объект из векторного слоя
    const geojson = new ol.format.GeoJSON().writeFeaturesObject(vectorLayer.getSource().getFeatures());
    // Преобразуем geojson объект в строку
    const geojsonString = JSON.stringify(geojson);
    $.ajax({
        url: 'save.php',
        method: 'post',
        dataType: 'json',
        data: {
            "geojson": geojsonString
        },
    })
}

// Находим кнопку на странице и добавляем ей обработчик клика
const button = document.getElementById('send-button');
button.addEventListener('click', sendGeoJSON);