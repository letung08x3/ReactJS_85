//khai báo
var promiseCallApi = new Promise(function (resolve, reject) {
    // Call API
    // Ajax
    resolve("CallApi success");
});
promiseCallApi.then(function (msg_resolve) {
    console.log("xử lý nếu trả về Resolve");
}, function (msg_reject) {
    console.log("xử lý nếu trả về reject");
});
