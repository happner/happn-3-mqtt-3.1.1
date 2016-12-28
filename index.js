var Promise = require('bluebird')
  ;

module.exports = ProtocolMQTT;

function ProtocolMQTT(opts) {
  if (!opts) opts = {};
  this.opts = opts;
}

ProtocolMQTT.prototype.transformIn = Promise.promisify(function(message, callback){

});

ProtocolMQTT.prototype.transformSystem = Promise.promisify(function(message, callback){

});

ProtocolMQTT.prototype.transformOut = Promise.promisify(function(message, callback){

});

ProtocolMQTT.prototype.__formatReturnItem = function (item) {

};

ProtocolMQTT.prototype.__formatReturnItems = function (items, local) {

};

ProtocolMQTT.prototype.__createResponse = function (e, message, response, opts) {

};

ProtocolMQTT.prototype.emit = Promise.promisify(function(message, session, callback){

});

ProtocolMQTT.prototype.__encryptMessage = function(response, secret){

};

ProtocolMQTT.prototype.__encryptLogin = function(request, response){

};

ProtocolMQTT.prototype.success = function(message, callback){

  var _this = this;

  callback(null, message);
};

ProtocolMQTT.prototype.fail = function(message, callback){

  var _this = this;

  callback(null, message);
};

