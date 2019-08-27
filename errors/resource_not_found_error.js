const HTTPBaseError = require('./http_base_error')

const ERROR_CODE = 4040000;

class resourceNotFoundError extends HTTPBaseError{
  constructor(resourceName, desc , resourceId){
    super(404, `查询错误：${desc}`, ERROR_CODE , `${resourceName} not found : id [${resourceId}]` )
  }
}

module.exports = resourceNotFoundError;
