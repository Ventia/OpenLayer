var wms_layers = [];


        var lyr_SatelliteMap_0 = new ol.layer.Tile({
            'title': 'Satellite Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Navaids_20221209_1 = new ol.format.GeoJSON();
var features_Navaids_20221209_1 = format_Navaids_20221209_1.readFeatures(json_Navaids_20221209_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Navaids_20221209_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Navaids_20221209_1.addFeatures(features_Navaids_20221209_1);
var lyr_Navaids_20221209_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Navaids_20221209_1, 
                style: style_Navaids_20221209_1,
                interactive: true,
                title: '<img src="styles/legend/Navaids_20221209_1.png" /> Navaids_20221209'
            });

lyr_SatelliteMap_0.setVisible(true);lyr_Navaids_20221209_1.setVisible(true);
var layersList = [lyr_SatelliteMap_0,lyr_Navaids_20221209_1];
lyr_Navaids_20221209_1.set('fieldAliases', {'OID': 'OID', 'Asset_Number': 'Asset_Number', 'Location_Code': 'Location_Code', 'Location': 'Location', 'NavAid_Name': 'NavAid_Name', 'NavAid_Primary_Function': 'NavAid_Primary_Function', 'Status': 'Status', 'Northing': 'Northing', 'Easting': 'Easting', 'UTM_Zone': 'UTM_Zone', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Chart_Character': 'Chart_Character', 'Flash_Sequence': 'Flash_Sequence', 'Light_Range': 'Light_Range', 'Light_Colour': 'Light_Colour', 'Light_Model': 'Light_Model', 'Lead_Bearing': 'Lead_Bearing', 'Daymark': 'Daymark', 'Mark_Structure': 'Mark_Structure', 'Situation': 'Situation', 'Risk_Category': 'Risk_Category', 'Infrastructure_Subgroup_Code': 'Infrastructure_Subgroup_Code', 'Function_Code': 'Function_Code', 'Horizontal_Accuracy': 'Horizontal_Accuracy', 'Responsible_Agency': 'Responsible_Agency', 'Owner': 'Owner', 'NavAid_Shape': 'NavAid_Shape', 'NavAid_Colour': 'NavAid_Colour', 'AIS_Type': 'AIS_Type', 'MMSI_Number': 'MMSI_Number', });
lyr_Navaids_20221209_1.set('fieldImages', {'OID': 'Hidden', 'Asset_Number': 'Range', 'Location_Code': 'TextEdit', 'Location': 'TextEdit', 'NavAid_Name': 'TextEdit', 'NavAid_Primary_Function': 'Hidden', 'Status': 'TextEdit', 'Northing': 'TextEdit', 'Easting': 'TextEdit', 'UTM_Zone': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Chart_Character': 'TextEdit', 'Flash_Sequence': 'TextEdit', 'Light_Range': 'TextEdit', 'Light_Colour': 'TextEdit', 'Light_Model': 'TextEdit', 'Lead_Bearing': 'TextEdit', 'Daymark': 'TextEdit', 'Mark_Structure': 'Hidden', 'Situation': 'TextEdit', 'Risk_Category': 'Range', 'Infrastructure_Subgroup_Code': 'Hidden', 'Function_Code': 'Hidden', 'Horizontal_Accuracy': 'Hidden', 'Responsible_Agency': 'Hidden', 'Owner': 'Hidden', 'NavAid_Shape': 'Hidden', 'NavAid_Colour': 'TextEdit', 'AIS_Type': 'Hidden', 'MMSI_Number': 'Hidden', });
lyr_Navaids_20221209_1.set('fieldLabels', {'Asset_Number': 'inline label', 'Location_Code': 'inline label', 'Location': 'inline label', 'NavAid_Name': 'inline label', 'Status': 'inline label', 'Northing': 'inline label', 'Easting': 'inline label', 'UTM_Zone': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'Chart_Character': 'inline label', 'Flash_Sequence': 'inline label', 'Light_Range': 'inline label', 'Light_Colour': 'inline label', 'Light_Model': 'inline label', 'Lead_Bearing': 'inline label', 'Daymark': 'inline label', 'Situation': 'inline label', 'Risk_Category': 'inline label', 'NavAid_Colour': 'inline label', });
lyr_Navaids_20221209_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});