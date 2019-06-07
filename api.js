// jshint esversion:8

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({ port: 3000, host: 'localhost' });
    await server.start();
    console.log('Api running on %s', server.info.uri);
};

init();