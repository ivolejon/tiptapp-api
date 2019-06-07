// jshint esversion:8

const Hapi = require('@hapi/hapi');
const routesTask = require('./routes/task');
const init = async () => {

    const server = Hapi.server({ port: 3000, host: 'localhost' });
    
    //Setting up routes
    routesTask.forEach((route)=>{
        server.route(route);
    });

    await server.start();
    console.log('Api running on %s', server.info.uri);
};

init();