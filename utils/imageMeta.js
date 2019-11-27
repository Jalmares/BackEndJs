'use strict';
const ExifImage = require('exif').ExifImage;

const getCoordinates = (imgFile) => { // imgFile = full path to uploaded image
    return new Promise((resolve, reject) => {
        try {
            // TODO: Use node-exif to get longitude and latitude from imgFile
            // coordinates below should be an array [longitude, latitude]
            new ExifImage({ image : imgFile }, (error, exifData) => {
                if (error) {
                    console.log('Error: ' + error.message);
                    reject(error);
                } else {
                    const longitude = gpsToDecimal(exifData.gps.GPSLongitude, exifData.gps.GPSLongitudeRef);
                    const latitude = gpsToDecimal(exifData.gps.GPSLatitude, exifData.gps.GPSLatitudeRef);
                    const coords = [longitude, latitude];
                    resolve(coords);
                }
            });
        }
        catch (error) {
            reject(error);
        }
    });
};

// convert GPS coordinates to decimal format
// for longitude, send exifData.gps.GPSLongitude, exifData.gps.GPSLongitudeRef
// for latitude, send exifData.gps.GPSLatitude, exifData.gps.GPSLatitudeRef
const gpsToDecimal = (gpsData, hem) => {
    let d = parseFloat(gpsData[0]) + parseFloat(gpsData[1] / 60) +
        parseFloat(gpsData[2] / 3600);
    return (hem === 'S' || hem === 'W') ? d *= -1 : d;
};

module.exports = {
    getCoordinates,
};