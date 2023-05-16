// Trong js chưa thành 2 loại dữ liệu
// + Kiểu dữ liệu nguyên thuỷ(primitive value): String, Number, Boolean, Null, underfined
// + Kiểu dữ liệu object (reference values): array, object


// Ta copy giá trị của biến letters, Chúng ta sẽ có 2 biến độc lập với nhau, và mỗi biến đều lưu trữ giá trị "Hello"
let msg = "Hello";
let letters = msg;

// Khi một object được gán cho 1 biến, biến đó không được lưu trữ bản thân object này mà chỉ lưu trữ cái địa chỉ vùng nhớ chứa object đó. Nói 1 cách khác thì biến đó là tham chiếu đến object
let user = {
    name : "Alice"
};

// Khi ta copy một object, thì ta chỉ copy reference (tham chiếu tới vùng nhớ), còn bản thân object không được tạo mới
let admin = user;
admin.email = "ndhbang2017@gmail.com";

console.log(user);

// so sánh Object
let obj1 = {a: 1};
let obj2 = {a: 1};
// Khi ta thực hiên so sánh object là ta đang so sánh tham chiếu (địa chỉ vùng nhớ) của nó 
console.log("obj1 === obj2", obj1 === obj2);

let obj3 = obj1 // Cả 2 biến obj1 và obj3 cùng tham chiếu đến cùng 1 vùng nhớ
console.log("obj1 === obj3", obj1 === obj3);

// Clone (nhân bản) object
let student = {
    name: "Bod",
    age: 20
};


// dùng Object.assign tạo ra 1 object mới và kế thừa lại các thuộc tính  của object hiện tại
let clone = Object.assign({}, student);
clone.email = "bob@gmail.com";

console.log("Object student", student);
console.log("Object student", clone);

// Khai báo object bằng const
const staff = {
    name: "Max",
    age: 30,
    email: "max@gmail.com",
};


// Ta không thể  gán object mới cho 1 biến const
// staff = {name: "Mike"}

// Tuy nhiên ta vẫn có thể thay đổi các properties của object
staff.name = "Max dad";
staff.age = 28;

// NOTE: thông thường khi khai báo object, array, function ta hay dùng const

