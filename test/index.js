var gDocToArchie = require('./../index');
var gConfig = require('../config.json').google;

var options = {
    fileId: '1gTERIVPV_0yoMXc6mlBtBpNvaoH5pIU2IC-75V_Qcas',
    oAuthTokens: gConfig.oAuthTokens
};

gDocToArchie.getArchieML(options, function (err, aml) {
    console.log('## AML', err, aml);
});