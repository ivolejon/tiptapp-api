const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return { msg: 'Todo API Coding Challenge' };
    }
  },
  {
    method: "GET",
    path: "/api/v1",
    handler: (request, h) => {
      return { success: true };
    }
  }
];

module.exports = routes;
