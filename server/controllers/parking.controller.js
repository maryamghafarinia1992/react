var parkings = new Array(108).fill(0);
console.log("parking :" + parkings);

exports.create = function(req, res) {
  firstEmptySpace = parkings.indexOf(0);

  if (firstEmptySpace > -1) {
    parkings[firstEmptySpace] = 1;
  }
  console.log("parking :" + JSON.stringify(parkings));
  res.end(JSON.stringify(parkings));
};

exports.findAll = function(req, res) {
  console.log("--->Find All: \n" + JSON.stringify(parkings));
  res.end(JSON.stringify(parkings));
};

exports.update = function(req, res) {
  var key = parseInt(req.params.key);
  var updatedparking = req.body;
  if (parkings != null) {
    parkings[key] = updatedparking;

    console.log(
      "--->Update Successfully, parkings: \n" + JSON.stringify(parkings)
    );

    res.end(JSON.stringify(updatedparking));
  } else {
    res.end(JSON.stringify(updatedparking));
  }
};

exports.delete = function(req, res) {
  res.end(JSON.stringify(deleteparking));
};

function getNextId(obj) {
  return (
    Math.max.apply(
      Math,
      obj.map(function(o) {
        return o.key;
      })
    ) + 1
  );
}
