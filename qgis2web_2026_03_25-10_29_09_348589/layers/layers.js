var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Casakmz_1 = new ol.format.GeoJSON();
var features_Casakmz_1 = format_Casakmz_1.readFeatures(json_Casakmz_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Casakmz_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casakmz_1.addFeatures(features_Casakmz_1);
var lyr_Casakmz_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Casakmz_1, 
                style: style_Casakmz_1,
                popuplayertitle: 'Casa.kmz',
                interactive: true,
                title: 'Casa.kmz'
            });
var format_Casaytabla_2 = new ol.format.GeoJSON();
var features_Casaytabla_2 = format_Casaytabla_2.readFeatures(json_Casaytabla_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Casaytabla_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casaytabla_2.addFeatures(features_Casaytabla_2);
var lyr_Casaytabla_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Casaytabla_2, 
                style: style_Casaytabla_2,
                popuplayertitle: 'Casa y tabla',
                interactive: true,
                title: '<img src="styles/legend/Casaytabla_2.png" /> Casa y tabla'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_Casakmz_1.setVisible(true);lyr_Casaytabla_2.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Casakmz_1,lyr_Casaytabla_2];
lyr_Casakmz_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Casaytabla_2.set('fieldAliases', {'id': 'id', 'T_pregunt': 'T_pregunt', 'Porc_Corr': 'Porc_Corr', 'Porc_Inc': 'Porc_Inc', 'Preg_Incor': 'Preg_Incor', 'Porc_Total': 'Porc_Total', 'Nombre': 'Nombre', 'N_Preg_Cor': 'N_Preg_Cor', 'N_Preg_Inc': 'N_Preg_Inc', 'Video': 'Video', });
lyr_Casakmz_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Casaytabla_2.set('fieldImages', {'id': 'TextEdit', 'T_pregunt': 'TextEdit', 'Porc_Corr': 'TextEdit', 'Porc_Inc': 'TextEdit', 'Preg_Incor': 'TextEdit', 'Porc_Total': 'TextEdit', 'Nombre': 'TextEdit', 'N_Preg_Cor': 'TextEdit', 'N_Preg_Inc': 'TextEdit', 'Video': 'TextEdit', });
lyr_Casakmz_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Casaytabla_2.set('fieldLabels', {'id': 'no label', 'T_pregunt': 'inline label - always visible', 'Porc_Corr': 'inline label - always visible', 'Porc_Inc': 'inline label - always visible', 'Preg_Incor': 'inline label - always visible', 'Porc_Total': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'N_Preg_Cor': 'inline label - always visible', 'N_Preg_Inc': 'inline label - always visible', 'Video': 'inline label - always visible', });
lyr_Casaytabla_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});