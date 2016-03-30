#!/usr/bin/env node

var program = require('commander');
var fs = require('fs');
var GoogleDocToJSON = require('./../index');

program
    .arguments('<docId>')
    .option('-o, --output <output>', 'The output file')
    .option('-c, --credentials <credentials>', 'Your credentials file')
    .action(function(docId) {

        console.log('>>> docId: %s credentials: %s output: %s', docId, program.credentials, program.output);

        var credentialsFile = fs.readFileSync(program.credentials);
        var credentials = JSON.parse(credentialsFile);
        var gDocToJSON = new GoogleDocToJSON(credentials.google);

        var options = {fileId: docId, oAuthTokens: credentials.google.oAuthTokens};
        gDocToJSON.getArchieML(options, function (err, aml) {
            fs.writeFile(program.output, JSON.stringify(aml, null, '\t'));
        });

    }).parse(process.argv);