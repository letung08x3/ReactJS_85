var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var student1 = {
    id: 1,
    name: "lê tùng",
    age: 34,
};
// let v_id = student1.id
// let v_name = student1.name
// let v_age = student1.age
// Destructuring
// let {id: v_id} = student1
// let {name: v_name} = student1
// let {age: v_age} = student1
var v_id = student1.id, v_name = student1.name, v_age = student1.age;
// đối với mảng
var Ra85 = ["Min", "Ki", "Tin"];
var v_name1 = Ra85[0], v_name2 = Ra85[1], v_name3 = Ra85[2];
console.log("name 1: ".concat(v_name1));
console.log("name 2: ".concat(v_name2));
console.log("name 3: ".concat(v_name3));
// let student1 = {
//     id: 1,
//     name: "lê tùng",
//     age: 34,
//     }
var student2 = __assign(__assign({}, student1), { address: "HN", gender: true, class: "Ra85" });
var Ra85_update = __spreadArray(__spreadArray([], Ra85, true), ["A", "B"], false);
console.log(Ra85_update);
