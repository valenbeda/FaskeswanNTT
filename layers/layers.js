var wms_layers = [];


        var lyr_SATELIT_0 = new ol.layer.Tile({
            'title': 'SATELIT',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_PUSKESWAN_1 = new ol.format.GeoJSON();
var features_PUSKESWAN_1 = format_PUSKESWAN_1.readFeatures(json_PUSKESWAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUSKESWAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUSKESWAN_1.addFeatures(features_PUSKESWAN_1);
var lyr_PUSKESWAN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUSKESWAN_1, 
                style: style_PUSKESWAN_1,
                popuplayertitle: 'PUSKESWAN',
                interactive: true,
                title: '<img src="styles/legend/PUSKESWAN_1.png" /> PUSKESWAN'
            });

lyr_SATELIT_0.setVisible(true);lyr_PUSKESWAN_1.setVisible(true);
var layersList = [lyr_SATELIT_0,lyr_PUSKESWAN_1];
lyr_PUSKESWAN_1.set('fieldAliases', {'PopupInfo': 'PopupInfo', 'No': 'No', 'Nama': 'Nama', 'Lokasi': 'Lokasi', 'Kecamatan': 'Kecamatan', 'Desa': 'Desa', 'Wilker 1': 'Wilker 1', 'Wilker 2': 'Wilker 2', 'Wilker 3': 'Wilker 3', 'Karesnak 1': 'Karesnak 1', 'Karesnak 2': 'Karesnak 2', 'Karesnak 3': 'Karesnak 3', 'No HP 1': 'No HP 1', 'No HP 2': 'No HP 2', 'No HP 3': 'No HP 3', });
lyr_PUSKESWAN_1.set('fieldImages', {'PopupInfo': 'TextEdit', 'No': 'TextEdit', 'Nama': '', 'Lokasi': 'TextEdit', 'Kecamatan': 'TextEdit', 'Desa': 'TextEdit', 'Wilker 1': 'TextEdit', 'Wilker 2': 'TextEdit', 'Wilker 3': 'TextEdit', 'Karesnak 1': 'TextEdit', 'Karesnak 2': 'TextEdit', 'Karesnak 3': 'TextEdit', 'No HP 1': 'TextEdit', 'No HP 2': 'TextEdit', 'No HP 3': 'TextEdit', });
lyr_PUSKESWAN_1.set('fieldLabels', {'PopupInfo': 'hidden field', 'No': 'hidden field', 'Nama': 'inline label - visible with data', 'Lokasi': 'inline label - visible with data', 'Kecamatan': 'inline label - visible with data', 'Desa': 'inline label - visible with data', 'Wilker 1': 'inline label - visible with data', 'Wilker 2': 'inline label - visible with data', 'Wilker 3': 'inline label - visible with data', 'Karesnak 1': 'inline label - visible with data', 'Karesnak 2': 'inline label - visible with data', 'Karesnak 3': 'inline label - visible with data', 'No HP 1': 'inline label - visible with data', 'No HP 2': 'inline label - visible with data', 'No HP 3': 'inline label - visible with data', });
lyr_PUSKESWAN_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});