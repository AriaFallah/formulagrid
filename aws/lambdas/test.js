var AWS = require('aws-sdk');
var DOC = require('dynamodb-doc');
var dynamo = new DOC.DynamoDB();

exports.handler = function(event, context) {
  var cb = function(err, data) {
    if (err) {
      console.log('error on GetFormulasInfo: ', err);
      context.done('Unable to retrieve formula information', null);
    } else {
      if (data.Item && data.Item.pets) {
        context.done(null, data.Item.pets);
      } else {
        context.done(null, {});
      }
    }
  };

  dynamo.getItem({
    TableName: "formulas",
    Key: {
      username: "default"
    }
  }, cb);
};
