class HTTPBaseError extends Error {
  constructor(httpStatusCode,httpMsg,errCode,msg) {
    super(`HTTP ERROR : ${msg}`)
    this.httpStatusCode = httpStatusCode
    this.httpMsg = httpMsg
    this.errCode = errCode
    this.msg = msg
  }
}

module.exports = HTTPBaseError

