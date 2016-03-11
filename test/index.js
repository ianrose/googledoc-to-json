var myConfig = require('../config.json').google;
var gDocToArchie = require('./../index').config(myConfig);

var options = {
    fileId: '1gTERIVPV_0yoMXc6mlBtBpNvaoH5pIU2IC-75V_Qcas',
    oAuthTokens: myConfig.oAuthTokens
};

gDocToArchie.getArchieML(options, function (err, aml) {
    console.log('## AML', err, aml);
});