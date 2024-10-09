//khai báo
let promiseCallApi = new Promise(function(resolve, reject){
// Call API
// Ajax
resolve("CallApi success")
})

promiseCallApi.then(
    function (msg_resolve){
        console.log("xử lý nếu trả về Resolve");
        console.log(msg_resolve);
        
    },

    function (msg_reject){
        console.log("xử lý nếu trả về reject");
        console.log(msg_reject);
        
    }

    //   ) .then(
    
    //   ) .then(

    //   ) .then(


).catch(function(err){

}
)



