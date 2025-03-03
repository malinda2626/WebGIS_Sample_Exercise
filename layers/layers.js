var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_ffr_1 = new ol.format.GeoJSON();
var features_ffr_1 = format_ffr_1.readFeatures(json_ffr_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ffr_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ffr_1.addFeatures(features_ffr_1);
var lyr_ffr_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ffr_1, 
                style: style_ffr_1,
                popuplayertitle: "ffr",
                interactive: true,
    title: 'ffr<br />\
    <img src="styles/legend/ffr_1_0.png" /> Colombo<br />\
    <img src="styles/legend/ffr_1_1.png" /> Dehiwala<br />\
    <img src="styles/legend/ffr_1_2.png" /> Homagama<br />\
    <img src="styles/legend/ffr_1_3.png" /> Kaduwela<br />\
    <img src="styles/legend/ffr_1_4.png" /> Kesbewa<br />\
    <img src="styles/legend/ffr_1_5.png" /> Kolonnawa<br />\
    <img src="styles/legend/ffr_1_6.png" /> Maharagama<br />\
    <img src="styles/legend/ffr_1_7.png" /> Moratuwa<br />\
    <img src="styles/legend/ffr_1_8.png" /> Padukka<br />\
    <img src="styles/legend/ffr_1_9.png" /> Rathmalana<br />\
    <img src="styles/legend/ffr_1_10.png" /> Seethawaka<br />\
    <img src="styles/legend/ffr_1_11.png" /> Sri Jayawardanapura Kotte<br />\
    <img src="styles/legend/ffr_1_12.png" /> Thimbirigasyaya<br />\
    <img src="styles/legend/ffr_1_13.png" /> <br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_ffr_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_ffr_1];
lyr_ffr_1.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DISTRICT_N': 'DISTRICT_N', 'DSD_N': 'DSD_N', 'DSD_C': 'DSD_C', 'GND_N': 'GND_N', 'GND_NO': 'GND_NO', 'GND_C': 'GND_C', 'PROVINCE_C': 'PROVINCE_C', 'DISTRICT_C': 'DISTRICT_C', 'GN_UID': 'GN_UID', 'OID_': 'OID_', 'UID_DIST_D': 'UID_DIST_D', 'TOT_POP': 'TOT_POP', 'RANK_POP': 'RANK_POP', 'MALE': 'MALE', 'FEMALE': 'FEMALE', 'RATIOSEX': 'RATIOSEX', 'RANK_SR': 'RANK_SR', '0TO14': '0TO14', '15TO59': '15TO59', 'OVER60': 'OVER60', 'RATIODEPEN': 'RATIODEPEN', 'RANK_DR': 'RANK_DR', 'BUDDHIST': 'BUDDHIST', 'HINDU': 'HINDU', 'ISLAM': 'ISLAM', 'ROMANCATHO': 'ROMANCATHO', 'OTHERCHRIS': 'OTHERCHRIS', 'OTHERELIGI': 'OTHERELIGI', 'SINHALESE': 'SINHALESE', 'SRILANKATA': 'SRILANKATA', 'INDIANTAMI': 'INDIANTAMI', 'SRILANKAMO': 'SRILANKAMO', 'OTHERETHGR': 'OTHERETHGR', 'NAME_DIST_': 'NAME_DIST_', 'NUM_GN': 'NUM_GN', 'Area': 'Area', });
lyr_ffr_1.set('fieldImages', {'PROVINCE_N': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'DSD_N': 'TextEdit', 'DSD_C': 'TextEdit', 'GND_N': 'TextEdit', 'GND_NO': 'TextEdit', 'GND_C': 'TextEdit', 'PROVINCE_C': 'TextEdit', 'DISTRICT_C': 'TextEdit', 'GN_UID': 'TextEdit', 'OID_': 'Range', 'UID_DIST_D': 'TextEdit', 'TOT_POP': 'Range', 'RANK_POP': 'Range', 'MALE': 'Range', 'FEMALE': 'Range', 'RATIOSEX': 'TextEdit', 'RANK_SR': 'TextEdit', '0TO14': 'Range', '15TO59': 'Range', 'OVER60': 'Range', 'RATIODEPEN': 'TextEdit', 'RANK_DR': 'TextEdit', 'BUDDHIST': 'Range', 'HINDU': 'Range', 'ISLAM': 'Range', 'ROMANCATHO': 'Range', 'OTHERCHRIS': 'Range', 'OTHERELIGI': 'Range', 'SINHALESE': 'Range', 'SRILANKATA': 'Range', 'INDIANTAMI': 'Range', 'SRILANKAMO': 'Range', 'OTHERETHGR': 'Range', 'NAME_DIST_': 'TextEdit', 'NUM_GN': 'TextEdit', 'Area': 'TextEdit', });
lyr_ffr_1.set('fieldLabels', {'PROVINCE_N': 'no label', 'DISTRICT_N': 'no label', 'DSD_N': 'no label', 'DSD_C': 'no label', 'GND_N': 'no label', 'GND_NO': 'no label', 'GND_C': 'no label', 'PROVINCE_C': 'no label', 'DISTRICT_C': 'no label', 'GN_UID': 'no label', 'OID_': 'no label', 'UID_DIST_D': 'no label', 'TOT_POP': 'no label', 'RANK_POP': 'no label', 'MALE': 'no label', 'FEMALE': 'no label', 'RATIOSEX': 'no label', 'RANK_SR': 'no label', '0TO14': 'no label', '15TO59': 'no label', 'OVER60': 'no label', 'RATIODEPEN': 'no label', 'RANK_DR': 'no label', 'BUDDHIST': 'no label', 'HINDU': 'no label', 'ISLAM': 'no label', 'ROMANCATHO': 'no label', 'OTHERCHRIS': 'no label', 'OTHERELIGI': 'no label', 'SINHALESE': 'no label', 'SRILANKATA': 'no label', 'INDIANTAMI': 'no label', 'SRILANKAMO': 'no label', 'OTHERETHGR': 'no label', 'NAME_DIST_': 'no label', 'NUM_GN': 'no label', 'Area': 'no label', });
lyr_ffr_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});