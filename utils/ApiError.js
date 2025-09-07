class ApiError{
    constructor(
        statusode,
        message="something went wrong",
        error=[],
        stack=""
    ){
        super(message)
        this.statusode=statusode
        this.data=null
        this.error=error
        this.succes=false
        if (stack) {
            this.stack=stack
            
        }else{
            Error.captureStackTrace(this,this.constructor);
        }
    }
}
export {ApiError}