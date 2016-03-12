var myConfig = require('../config.json').google;
var GoogleDocToJSON = require('./../index');
var gDocToJSON = new GoogleDocToJSON(myConfig);

var options = {
    fileId: '1gTERIVPV_0yoMXc6mlBtBpNvaoH5pIU2IC-75V_Qcas',
    oAuthTokens: myConfig.oAuthTokens
};

gDocToJSON.getArchieML(options, function (err, aml) {
    console.log('## AML', err, aml);
});
