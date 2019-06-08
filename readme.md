# Todo API Coding Challenge
Hi, this is my example of a simple API. I also choose Hapi.js as framework and mongoose.js to connect to MongoDb. You can find the server at https://ivo-tiptapp-api.herokuapp.com and the git repository at https://github.com/ivolejon/tiptapp-api

## Create an HTTP API that has the following functionality
- Add todos to a list, */api/v1/tasks [POST]*
- Remove todos from from the list, */api/v1/task/{id} [DELETE]*
- Mark todos as done, */api/v1/task/{id}/done [PUT]*
- Unmark todos as done */api/v1/task/{id}/active [PUT]*,
- Retrieve all events associated with a list of todos (think CRUD events,) */api/v1/task/{id}/events [GET]*
- The API should not loose any data if restarted. *Check*

### Endpoints ###
- [GET] https://ivo-tiptapp-api.herokuapp.com/api/v1/tasks
- [POST] https://ivo-tiptapp-api.herokuapp.com/api/v1/tasks
- [GET] https://ivo-tiptapp-api.herokuapp.com/api/v1/task/5cfbcb9c33982b96a2d97bbc
- [PUT] https://ivo-tiptapp-api.herokuapp.com/api/v1/task/5cfbcb9c33982b96a2d97bbc/done
- [PUT] https://ivo-tiptapp-api.herokuapp.com/api/v1/task/5cfbcb9c33982b96a2d97bbc/active
- [DELETE] https://ivo-tiptapp-api.herokuapp.com/api/v1/task/5cfbcb9c33982b96a2d97bbc
- [GET] https://ivo-tiptapp-api.herokuapp.com/api/v1/task/5cfbcb9c33982b96a2d97bbc/events

You can import tipTapp.postman_collection.json to Postman and run through the different endpoint 

### Final thoughts ###
A fun little exercise :-).
I haven't implemented any exception handling but hapi.js doing it ok out of the box.
When it comes to 'Thought experiments and possible extensions', multiple list can be implemented through binding list to a specific user id (user collection in db). Validation can be handle by Joi or implemented through javascript Proxy-object (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy). And when it comes to deploying it, severel options... maybe docker and kubernetes ?

// Ivo Lejon



