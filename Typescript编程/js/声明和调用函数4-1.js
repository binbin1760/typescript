/** 4.1 函数声明 **/
function add(a, b) {
    // 上述中 a  b表示参数的数据类型--number
    // add(....):number 表示函数返回值为number
    return a + b;
}
// console.log(add(1,2))
/********************************************************************************************* */
// 4.1.1 可选参数与默认参数
function login(message, userId) {
    // message:string  表示该参数必选
    // userId?:string  表示该参数可选
    let time = new Date().toLocaleString();
    console.log(time, message, userId || "not signed in");
}
// login("测试","测试")
// 设置参数默认值
function login1(message, userId = "not signed in") {
    let time = new Date().toLocaleString();
    console.log(time, message, userId);
}
function login2(message, context) {
    let time = new Date().toISOString();
    console.log(time, message, context);
}
/*login2("测试没有userId")
login2("测试","我是userid")*/
/*******************************************************************************************************/
// 4.1.2 剩余参数
function sum(numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
// console.log(sum([1,2,3]));
// arguments 参数转
function sumVariadic() {
    return Array
        .from(arguments)
        .reduce((total, n) => total + n, 0);
}
/*console.log(sumVariadic(1,2,3));//报错，因为arguments不安全，ts自动推导n和total类型为any*/
// 使用剩余参数
function sumVariadic1(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
/***********************************************************************************************************/
// 4.1.3 call apply bind --------->P66  作者几句话就说清楚了三者的区别和用法非常不错
function add1(a, b) {
    console.log(a + b);
}
// add1(10,20)
// add1.apply(null,[10,20])
// add1.call(null,10,20)
// add1.bind(null,10,20)()
// 以上输出都是30
// 在ts中为了安全使用apply  call  bind 可以在config中开启strictBindCallApply 或者使用严格模式来进行限制
/*************************************************************************************************************/
// 4.1.4 注解this的类型 ---------->P66 作者解释了this的缺点值得记录
function Thistype() {
    return `${this.getDate()}`;
}
// console.log(Thistype.call(new Date))
/****************************************************************************************************************/
//4.1.5 生成器函数-------------------->第一次接触这玩意得好好记录下
/*
    生成器函数（生成器）是生成一系列值的便利方式。
    生成器的使用方可以精确控制生成什么值
    生成器是惰性的，只有在使用方调用的时候才会计算下一个值
    调用生成器返回一个可迭代的迭代器
*/
function* creatUnknowData() {
    let a = 0;
    let b = 1;
    while (true) { //执行条件
        yield a; // yield 关键字， 生成器使用yield 关键字产出值。 当使用方让生成器提供下一个值的时候，yield将结果发给使用方。然后停止直到使用方再要求提供下一个值为止
        [a, b] = [b, a + b];
    }
}
//  let a=creatUnknowData()
//  console.log(a.next());// {value: 0, done: false}
//  console.log(a.next());//{value: 1, done: false}
//  console.log(a.next());//{value: 1, done: false}
//  对生成器 进行显示注解
function* creatUnknowData1() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
let newlog = (message, userId = "测试") => {
    let time = new Date().toISOString();
    console.log(time, message, userId);
};
/*******************************************************************************************/
//4.1.8 上下文类型推导
/*******************************************************************************************/
