
/**
 * Expose modelType.
 */

module.exports = modelType;

/**
 * Add name/type of model as attribute.
 *
 * @param {Function} model
 * @api public
 */

function modelType(model){
  model.prototype.type = function(){
    return this.model.modelName.toLowerCase();
  };
};

