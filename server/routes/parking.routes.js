module.exports = function(app) {
  var parkings = require("../controllers/parking.controller.js");

  // Create a new parking
  app.post("/api/parkings", parkings.create);

  // Retrieve all parking
  app.get("/api/parkings", parkings.findAll);

  // Update a parking with Id
  app.put("/api/parkings/:key", parkings.update);

  // Delete a parking with Id
  app.delete("/api/parkings/:key", parkings.delete);
};
