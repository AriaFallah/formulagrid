const AWS = require('aws-sdk')
const DOC = require('dynamodb-doc')
const dynamo = new DOC.DynamoDB()

exports.handler = function(event, context) {
  dynamo.getItem({
    TableName: 'formulas',
    Key: {
      username: 'default'
    }
  }, (err, data) => {
    if (err) {
      console.log('error on GetPetsInfo: ', err)
      context.done('Unable to retrieve pet information', null)
    } else {
      if (data.Item && data.Item.pets) {
        context.done(null, data.Item.pets)
      } else {
        context.done(null, {})
      }
    }
  })
}
