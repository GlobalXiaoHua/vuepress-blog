#　TS笔记

## 【1】概述

```tex
[1] 简介
TypeScript 由微软开发，是基于JavaScript的⼀个扩展语⾔。TypeScript包含了JavaScript 的所有内容，即：TypeScript是JavaScrip的超集。TypeScript 增加了：静态类型检查、接⼝、泛型等很多现代开发特性，更适合⼤型项⽬的开发。TypeScript 需要编译为 JavaScript ，然后交给浏览器或其他 JavaScript 运⾏环境执⾏

[2] 静态类型检查
在代码运⾏前进⾏检查，发现代码的错误或不合理之处，减⼩运⾏时出现异常的⼏率，此种检查叫『静态类型检查』，TypeScript 和核⼼就是『静态类型检查』，简⾔之就是把运⾏时的错误前置。同样的功能，TypeScript 的代码量要⼤于 JavaScript，但由于 TypeScript 的代码结构更加清晰，在后期代码的维护中 TypeScript 却胜于 JavaScript
```

## 【2】优势

1、js不清楚的数据类型

```javascript
let welcome = 'hello'
welcome() // 此⾏报错：TypeError: welcome is not a functio
```

2、js有漏洞的逻辑

```javascript
const str = Date.now() % 2 ? '奇数' : '偶数'
if (str !== '奇数') {
    alert('hello')
} else if (str === '偶数') {
    alert('world')
}
```

3、js访问不存在的属性

```javascript
const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth;
```

4、js低级的拼写错误

```javascript
const message = 'hello,world'
message.toUperCase()
```

## 【3】编译 TS

```shell
#　安装 ts
npm i typescript -g
＃ 手动编译 ts
tsc demo.ts  

# 自动编译 ts
# 创建 ts 编译控制⽂件, ⼯程中会⽣成⼀个　tsconfig.json 配置⽂件，其中包含着很多编译时的配置
# 观察发现，默认编译的JS版本是ES7，我们可以⼿动调整为其他版本
tsc --init
# 监视⽬录中的 .ts ⽂件变化
tsc --watch 或 tsc -w
# 优化: 当编译出错时不⽣成.js ⽂件
# 备注：当然也可以修改 tsconfig.json 中的 noEmitOnError 配置
tsc --noEmitOnError --watch
```

## 【4】类型声明

使⽤`:`来对变量或函数形参，进⾏类型声明。在`:`后也可以写字⾯量类型，不过实际开发中⽤的不多

```ts
let a: string //变量a只能存储字符串
let b: number //变量b只能存储数值
let c: boolean  //变量c只能存储布尔值
a = 'hello'
a = 100 //警告：不能将类型“number”分配给类型“string”
b = 666
b = '你好'//警告：不能将类型“string”分配给类型“number”
c = true
c = 666 //警告：不能将类型“number”分配给类型“boolean”
// 参数x必须是数字，参数y也必须是数字，函数返回值也必须是数字
function demo(x:number,y:number):number{
    return x + y
}
demo(100,'200') //警告：类型“string”的参数不能赋给类型“number”的参数
demo(100,200,300) //警告：应有 2 个参数，但获得 3 个
demo(100) //警告：应有 2 个参数，但获得 1 个

let a: '你好' //a的值只能为字符串“你好
let b: 100 //b的值只能为数字100
a = '欢迎'//警告：不能将类型“"欢迎"”分配给类型“"你好"”
b = 200   //警告：不能将类型“200”分配给类型“100”
```

## 【5】类型推断

TS  会根据我们的代码，进⾏类型推导，例如下⾯代码中的变量d ，只能存储数字。但要注意，类型推断不是万能的，⾯对复杂类型时推断容易出问题，所以尽量还是明确的编写类型声明

```ts
let d = -99 //TypeScript会推断出变量d的类型是数字
d = false //警告：不能将类型“boolean”分配给类型“number”
```

## 【6】类型总览

[1] 8个js类型
string、number、boolean、null、undefined、bigint、symbol、object（包含：Array、Function、Date、Error 等......）

[2] 6个新类型
any、unknown、never、void、tuple、enum

[3] 两个⽤于⾃定义类型的⽅式
type、interface

注意: 在JavaScript中的这些内置构造函数Number、String、Boolean。用于创建对应的包装对象，在⽇常开发时很少使⽤，在TypeScript中也是同理。所以
在TypeScript中进⾏类型声明时，通常都是⽤⼩写的number、string、boolean

```ts
let str1: string
str1 = 'hello'
str1 = new String('hello') // 报错

let str2: String
str2 = 'hello'
str2 = new String('hello')

console.log(typeof str1)
console.log(typeof str2)
```

## 【7】原始类型/包装对象

原始类型：如number、string、boolean，在JavaScript中是简单数据类型，它们在内存中占⽤空间少，处理速度快
包装对象：如Number对象、String对象、Boolean对象，是复杂类型，在内存中占⽤更多空间，在⽇常开发时很少由开发⼈员⾃⼰创建包装对象
⾃动装箱：JavaScript 在必要时会⾃动将原始类型包装成对象，以便调⽤⽅法或访问属性

```javascript
// 原始类型字符串
let str = 'hello';
// 当访问str.length时，JavaScript引擎做了以下⼯作：
let size = (function() {
// 1. ⾃动装箱：创建⼀个临时的String对象包装原始字符串
let tempStringObject = new String(str);
// 2. 访问String对象的length属性
let lengthValue = tempStringObject.length;
	return lengthValue;
})();
// 3. 销毁临时对象，返回⻓度值
// JavaScript引擎⾃动处理对象销毁，开发者⽆感知
console.log(size); // 输出 5
```

## 【8】any

any的含义是：任意类型。⼀旦将变量类型限制为any 那就意味着放弃了对该变量的类型检查

```ts
// 明确的表示a的类型是 any —— 【显式的any】
let a: any 
// 以下对a的赋值，均⽆警告
a= 100
a = '你好'
a = false
// 没有明确的表示b的类型是any，但TS主动推断出来b是any —— 隐式的any
let b
// 以下对b的赋值，均⽆警告
b = 100
b = '你好'
b = false
/* 注意点：any类型的变量，可以赋值给任意类型的变量 */
let c:any
c = 9
let x: string
x = c // ⽆警告
```

## 【9】unknown

unknown的含义是：未知类型。适⽤于起初不确定数据的具体类型，要后期才能确定

```ts
// 设置a的类型为unknown
let a: unknown
//以下对a的赋值，均符合规范
a = 100
a = false
a = '你好'
// 设置x的数据类型为string
let x: string
x = a //警告：不能将类型“unknown”分配给类型“string
```

强制开发者在使⽤之前进⾏类型检查，从⽽提供更强的类型安全性  

```ts
// 设置a的类型为unknown
let a: unknown
a = 'hello'
//第⼀种⽅式：加类型判断
if(typeof a === 'string'){
    x = a
    console.log(x)
}
//第⼆种⽅式：加断⾔
x = a as string
//第三种⽅式：加断⾔
x = <string>a
```

读取any类型数据的任何属性都不会报错，⽽unknown正好与之相反  

```ts
let str1: string
str1 = 'hello'
str1.toUpperCase() //⽆警告
let str2: any
str2 = 'hello'
str2.toUpperCase() //⽆警告
let str3: unknown
str3 = 'hello';
str3.toUpperCase() //警告：“str3”的类型为“未知”
// 使⽤断⾔强制指定str3的类型为string
(str3 as string).toUpperCase() //⽆警告
```

## 【10】never 

never 的含义是：任何值都不是，即：不能有值，例如 undefined、null、''、0 都不⾏！  ⼏乎不⽤never去直接限制变量，因为没有意义  

```ts
/* 指定a的类型为never，那就意味着a以后不能存任何的数据了 */
let a: never
// 以下对a的所有赋值都会有警告
a = 1
a = true
a = undefined
a = null
```

never⼀般是TS主动推断出来的  

```ts
// 指定a的类型为string
let a: string
// 给a设置⼀个值
a = 'hello'
if (typeof a === 'string') {
	console.log(a.toUpperCase())
} else {
	console.log(a) // TypeScript会推断出此处的a是never，因为没有任何⼀个值符合此处的逻辑
}
```

never也可⽤于限制函数的返回值  

```ts
// 限制throwError函数不需要有任何返回值，任何值都不⾏，像undeifned、null都不⾏
function throwError(str: string): never {
	throw new Error('程序异常退出:' + str)
}
```

## 【11】void  

void的含义是：空，即：函数不返回任何值，调⽤者也不应依赖其返回值进⾏任何操作！通常⽤于函数返回值声明 

```ts
// ⽆警告
function logMessage(msg:string):void{
	console.log(msg)
}
// ⽆警告
function logMessage(msg:string):void{
	console.log(msg)
	return;
}
// ⽆警告
function logMessage(msg:string):void{
	console.log(msg)
	return undefined
}
```

void是⼀个⼴泛的概念，⽤来表达“空”，⽽undefined则是这种“空”的具体实现。因此可以说undefined是void能接受的⼀种“空”的状态。也可以理解为： void 包含 undefined，但 void 所表达的语义超越了 undefined, void 是⼀种意图上的约定，⽽不仅仅是特定值的限制 

```ts
function logMessage(msg:string):void{
	console.log(msg)
}
let result = logMessage('你好')
if(result){ // 此⾏报错：⽆法测试 "void" 类型的表达式的真实性
	console.log('logMessage有返回值')
}
```

```ts
function logMessage(msg:string):undefined{
	console.log(msg)
}
let result = logMessage('你好')
if(result){ // 此⾏⽆警告
	console.log('logMessage有返回值')
}
```

## 【12】object

object （小写）的含义是：所有非原始类型可存储：对象、函数、数组等，由于限制的范围比较宽泛，在实际开发中使用的相对较少

```ts
let a:object //a的值可以是任何【⾮原始类型】，包括：对象、函数、数组等
// 以下代码，是将【⾮原始类型】赋给a，所以均符合要求
a = {}
a = {name:'张三'}
a = [1,3,5,7,9]
a = function(){}
a = new String('123')
class Person {}
a = new Person()
// 以下代码，是将【原始类型】赋给a，有警告
a = 1 // 警告：不能将类型“number”分配给类型“object”
a = true // 警告：不能将类型“boolean”分配给类型“object”
a = '你好' // 警告：不能将类型“string”分配给类型“object”
a = null // 警告：不能将类型“null”分配给类型“object”
a = undefined // 警告：不能将类型“undefined”分配给类型“object”
```

Object（⼤写）的含义是：除了 undefined 和 null 的任何值 

```ts
let b:Object //b的值必须是Object的实例对象（除去undefined和null的任何值）
// 以下代码，均⽆警告，因为给a赋的值，都是Object的实例对象
b = {}
b = {name:'张三'}
b = [1,3,5,7,9]
b = function(){}
b = new String('123')
class Person {}
b = new Person()
b = 1 // 1不是Object的实例对象，但其包装对象是Object的实例
b = true // truue不是Object的实例对象，但其包装对象是Object的实例
b = '你好' // “你好”不是Object的实例对象，但其包装对象是Object的实例
// 以下代码均有警告
b = null // 警告：不能将类型“null”分配给类型“Object”
b = undefined // 警告：不能将类型“undefined”分配给类型“Object”
```

## 【13】object - 声明对象类型

```ts
// 限制person1对象必须有name属性，age为可选属性
let person1: { name: string, age?: number }
// 含义同上，也能⽤分号做分隔
let person2: { name: string; age?: number }
// 含义同上，也能⽤换⾏做分隔
let person3: {
    name: string
    age?: number
}
// 如下赋值均可以
person1 = {name:'李四',age:18}
person2 = {name:'张三'}
person3 = {name:'王五'}
// 如下赋值不合法，因为person3的类型限制中，没有对gender属性的说明
person3 = {name:'王五',gender:'男'}

// 限制person对象必须有name属性，可选age属性但值必须是数字，同时可以有任意数量、任意类型的其他属性
let person: {
    name: string
    age?: number
    [key: string]: any // 索引签名，完全可以不⽤key这个单词，换成其他的也可以
}
// 赋值合法
person = {
    name:'张三',
    age:18,
    gender:'男'
}
```

## 【14】object - 声明函数类型 

```ts
let count: (a: number, b: number) => number
count = function (x, y) {
	return x + y
}
```

## 【15】object - 声明数组类型

```ts
let arr1: string[]
let arr2: Array<string>
arr1 = ['a','b','c']
arr2 = ['hello','world']
```

## 【16】tuple

元组 (Tuple) 是⼀种特殊的数组类型，可以存储固定数量的元素，并且每个元素的类型是已知的且可以不同。元组⽤于精确描述⼀组值的类型， ? 表示可选元素  

```ts
// 第⼀个元素必须是 string 类型，第⼆个元素必须是 number 类型。
let arr1: [string,number]
// 第⼀个元素必须是 number 类型，第⼆个元素是可选的，如果存在，必须是 boolean 类型。
let arr2: [number,boolean?]
// 第⼀个元素必须是 number 类型，后⾯的元素可以是任意数量的 string 类型
let arr3: [number,...string[]]
// 可以赋值
arr1 = ['hello',123]
arr2 = [100,false]
arr2 = [200]
arr3 = [100,'hello','world']
arr3 = [100]
// 不可以赋值，arr1声明时是两个元素，赋值的是三个
arr1 = ['hello',123,false]
```

## 【17】enum

枚举（ enum ）可以定义⼀组命名常量，它能增强代码的可读性，也让代码更好维护。调用函数时传参时没有任何提示，编码者很容易写错字符串内容。并且⽤于判断逻辑的是连续且相关的⼀组值，那此时就特别适合使用枚举

```ts
function walk(str:string) {
    if (str === 'up') {
    	console.log("向【上】⾛");
    } else if (str === 'down') {
   		console.log("向【下】⾛");
    } else if (str === 'left') {
    	console.log("向【左】⾛");
    } else if (str === 'right') {
    	console.log("向【右】⾛");
    } else {
    	console.log("未知⽅向");
    }
}
walk('up')
walk('down')
walk('left')
walk('right')
```

```
enum Direction {
    Up,
    Down,
    Left,
    Right,
}
function walk(n: Direction) {
    if (n === Direction.Up) {
        console.log("向【上】⾛");
    } else if (n === Direction.Down) {
    	console.log("向【下】⾛");
    } else if (n === Direction.Left) {
    	console.log("向【左】⾛");
    } else if (n === Direction.Right) {
    	console.log("向【右】⾛");
    }
}
walk(Direction.Up)
walk(Direction.Down)
```

## 【18】enum - 数字枚举  

数字枚举⼀种最常⻅的枚举类型，其成员的值会⾃动递增，且数字枚举还具备反向映射的特点 

```ts
// 定义⼀个描述【上下左右】⽅向的枚举Direction
enum Direction {
    Up,
    Down,
    Left,
    Right
}
console.log(Direction) // 打印Direction会看到如下内容
/*
    {
        0:'Up',
        1:'Down',
        2:'Left',
        3:'Right',
        Up:0,
        Down:1,
        Left:2,
        Right:3
    }
*/
// 反向映射
console.log(Direction.Up)
console.log(Direction[0])
// 此⾏代码报错，枚举中的属性是只读的
Direction.Up = 'shang'
```

指定枚举成员的初始值，其后的成员值会⾃动递增  

```ts
enum Direction {
    Up = 6,
    Down,
    Left,
    Right
}
console.log(Direction.Up); // 输出: 6
console.log(Direction.Down); // 输出: 7
```

## 【19】enum - 字符串枚举  

```ts
enum Direction {
    Up = "up",
    Down = "down",
    Left = "left",
    Right = "right"
}
let dir: Direction = Direction.Up;
console.log(dir); // 输出: "up"
```

## 【20】enum - 常量枚举

常量枚举是⼀种特殊枚举类型，它使⽤ const 关键字定义，在编译时会被内联，避免⽣成⼀些额外的代码。何为编译时内联？所谓“内联”其实就是 TypeScript 在编译时，会将枚举成员引⽤替换为它们的实际值，⽽不是⽣成额外的枚举对象。这可以减少⽣成的 JavaScript 代码量，并提⾼运⾏时性能

```ts
// 普通枚举
enum Directions {
    Up,
    Down,
    Left,
    Right
}
let x = Directions.Up;
// 编译后
"use strict";
var Directions;
(function (Directions) {
Directions[Directions["Up"] = 0] = "Up";
Directions[Directions["Down"] = 1] = "Down";
Directions[Directions["Left"] = 2] = "Left";
Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
let x = Directions.Up;
```

```ts
// 常量枚举
const enum Directions {
    Up,
    Down,
    Left,
    Right
}
let x = Directions.Up;
// 编译后
"use strict";
let x = 0 /* Directions.Up */;
```

## 【21】type

type 可以为任意类型创建别名，让代码更简洁、可读性更强，同时能更⽅便地进⾏类型复⽤和扩展

```ts
type num = number;
let price: num
price = 100
```

## 【22】type - 联合类型

联合类型是⼀种⾼级类型，它表示⼀个值可以是⼏种不同类型之⼀  

```ts
type Status = number | string
type Gender = '男' | '⼥'
function printStatus(status: Status) {
	console.log(status);
}
function logGender(str:Gender){
	console.log(str)
}
printStatus(404);
printStatus('200');
printStatus('501');
logGender('男')
logGender('⼥')
```

## 【23】type - 交叉类型

交叉类型（Intersection Types）允许将多个类型合并为⼀个类型。合并后的类型将拥有所有被合并类型的成员。交叉类型通常⽤于对象类型

```ts
//⾯积
type Area = {
    height: number; //⾼
    width: number; //宽
};
//地址
type Address = {
    num: number; //楼号
    cell: number; //单元号
    room: string; //房间号
};
// 定义类型House，且House是Area和Address组成的交叉类型
type House = Area & Address;
const house: House = {
    height: 180,
    width: 75,
    num: 6,
    cell: 3,
    room: '702'
};
```

## 【24】type - 类型声明

使用类型声明限制函数返回值为 void 时， TypeScript 并不会严格要求函数返回空

```ts
type LogFunc = () => void
const f1: LogFunc = () => {
    return 100; // 允许返回⾮空值
};
const f2: LogFunc = () => 200; // 允许返回⾮空值
const f3: LogFunc = function () {
    return 300; // 允许返回⾮空值
}
```

## 【】abstract  

抽象类是⼀种⽆法被实例化的类，专⻔⽤来定义类的结构和⾏为。抽象类不能实例化，其意义是可以被继承，抽象类⾥可以有普通⽅法、也可以有抽象⽅法。

我们定义⼀个抽象类 Package ，表示所有包裹的基本结构，任何包裹都有重量属性 weight，包裹都需要计算运费。但不同类型的包裹（如：标准速度、特快专递）都有不同的运费计算⽅式，因此⽤于计算运费的 calculate ⽅法是⼀个抽象⽅法，必须由具体的⼦类来实现

```ts
abstract class Package {
	constructor(public weight: number) { }
    // 抽象⽅法：⽤来计算运费，不同类型包裹有不同的计算⽅式
    abstract calculate(): number
    // 通⽤⽅法：打印包裹详情
    printPackage() {
    	console.log(`包裹重量为: ${this.weight}kg，运费为: ${this.calculate()}元`);
    }
}
```

```ts
class StandardPackage extends Package {
    constructor(
        weight: number,
        public unitPrice: number // 每公⽄的固定费率
    ) { 
    	super(weight)
    }
    // 实现抽象⽅法：计算运费
    calculate(): number {
    	return this.weight * this.unitPrice;
    }
}
// 创建标准包裹实例
const s1 = new StandardPackage(10,5)
s1.printPackage()
```

```ts
class ExpressPackage extends Package {
    constructor(
    	weight: number,
    	private unitPrice: number, // 每公⽄的固定费率（快速包裹更⾼）
    	private additional: number // 超出10kg以后的附加费
    ) { 
            super(weight)
    }
    // 实现抽象⽅法：计算运费
    calculate(): number {
        if(this.weight > 10){
            // 超出10kg的部分，每公⽄多收additional对应的价格
            return 10 * this.unitPrice + (this.weight - 10) * this.additional
        }else {
            return this.weight * this.unitPrice;
        }
    }
}
// 创建特快包裹实例
const e1 = new ExpressPackage(13,8,2)
e1.printPackage()
```



## 【】interface - 定义类结构  

一、interface 是⼀种定义结构的⽅式，主要作⽤是为：类、对象、函数等规定⼀种契约，这样可以确保代码的⼀致性和类型安全，但要注意 interface 只能定义格式，不能包含任何实现

二、何时使⽤ interface？

1. 定义对象的格式： 描述数据模型、API 响应格式、配置对象........等等，是开发中⽤的最多
   的场景
2. 类的契约：规定⼀个类需要实现哪些属性和⽅法
3. 扩展已有接⼝：⼀般⽤于扩展第三⽅库的类型， 这种特性在⼤型项⽬中可能会⽤到

```   ts
// PersonInterface接⼝，⽤与限制Person类的格式
interface PersonInterface {
    name: string
    age: number
    speak(n: number): void
}
// 定义⼀个类 Person，实现 PersonInterface 接⼝
class Person implements PersonInterface {
    constructor(
        public name: string,
        public age: number
	) { }
	// 实现接⼝中的 speak ⽅法
    speak(n: number): void {
        for (let i = 0; i < n; i++) {
            // 打印出包含名字和年龄的问候语句
            console.log(`你好，我叫${this.name}，我的年龄是${this.age}`);
        }
    }
}
// 创建⼀个 Person 类的实例 p1，传⼊名字 'tom' 和年龄 18
const p1 = new Person('tom', 18);
p1.speak(3)
```

## 【】interface - 定义对象结构 

```ts
interface UserInterface {
    name: string
    readonly gender: string // 只读属性
    age?: number // 可选属性
    run: (n: number) => void
}

const user: UserInterface = {
    name: "张三",
    gender: '男',
    age: 18,
    run(n) {
        console.log(`奔跑了${n}⽶`)
    }
};
```

## 【】interface - 定义函数结构  

```ts
interface CountInterface {
	(a: number, b: number): number;
}

const count: CountInterface = (x, y) => {
    return x + y
}
```

## 【】interface - 继承

⼀个 interface 继承另⼀个 interface ，从⽽实现代码的复⽤  

```ts
interface PersonInterface {
    name: string // 姓名
    age: number // 年龄
}
interface StudentInterface extends PersonInterface {
    grade: string // 年级
}
const stu: StudentInterface = {
    name: "张三",
    age: 25,
    grade: '⾼三',
}
```

接口⼝⾃动合并（可重复定义）  

```ts
interface PersonInterface {
    // 属性声明
    name: string
    age: number
}
// 给PersonInterface接⼝添加新属性
interface PersonInterface {
    // ⽅法声明
    speak(): void
}
// Person类实现PersonInterface
class Person implements PersonInterface {
    name: string
    age: number
    // 构造器
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
	}
    // ⽅法
    speak() {
    	console.log('你好！我是⽼师:', this.name)
    }
}
```

## 【】interface / type 区别

相同点：

 interface 和 type 都可以⽤于定义对象结构，在定义对象结构时两者可以互换。

不同点：

interface 更专注于定义对象和类的结构，⽀持继承、合并。

type 可以定义类型别名、联合类型、交叉类型，但不⽀持继承和⾃动合并。



interface 和 type 都可以定义对象结构  

```ts
// 使⽤ interface 定义 Person 对象
interface PersonInterface {
    name: string;
    age: number;
    speak(): void;
}
// 使⽤ type 定义 Person 对象
type PersonType = {
    name: string;
    age: number;
    speak(): void;
};
// 使⽤PersonInterface
let person1: PersonInterface = {
    name:'张三',
    age:18,
    speak(){
		console.log(`我叫：${this.name}，年龄：${this.age}`)
    }
}
// 使⽤PersonType
let person2: PersonType = {
    name:'张三',
    age:18,
    speak(){
    	console.log(`我叫：${this.name}，年龄：${this.age}`)
    }
}
```

interface 可以继承、合并  

```ts
interface PersonInterface {
    name: string // 姓名
    age: number // 年龄
}
interface PersonInterface {
    speak: () => void
}
interface StudentInterface extends PersonInterface {
    grade: string // 年级
}
const student: StudentInterface = {
    name: '李四',
    age: 18,
    grade: '⾼⼆',
    speak() {
    	console.log(this.name,this.age,this.grade)
    }
}
```

type 的交叉类型

```ts
// 使⽤ type 定义 Person 类型，并通过交叉类型实现属性的合并
type PersonType = {
    name: string; // 姓名
    age: number; // 年龄
} & {
    speak: () => void;
};
// 使⽤ type 定义 Student 类型，并通过交叉类型继承 PersonType
type StudentType = PersonType & {
    grade: string; // 年级
};
const student: StudentType = {
    name: '李四',
    age: 18,
    grade: '⾼⼆',
    speak() {
    	console.log(this.name, this.age, this.grade);
    }
};
```

## 【】interface 与 抽象类的区别

相同点：都能定义⼀个类的格式（定义类应遵循的契约）

不同点：

接⼝只能描述结构，不能有任何实现代码，⼀个类可以实现多个接⼝。

抽象类既可以包含抽象⽅法，也可以包含具体⽅法， ⼀个类只能继承⼀个抽象类。



⼀个类可以实现多个接⼝

```  ts
// FlyInterface 接⼝
interface FlyInterface {
	fly(): void;
}
// 定义 SwimInterface 接⼝
interface SwimInterface {
	swim(): void;
}
// Duck 类实现了 FlyInterface 和 SwimInterface 两个接⼝
class Duck implements FlyInterface, SwimInterface {
    fly(): void {
    	console.log('鸭⼦可以⻜');
    }
    swim(): void {
    	console.log('鸭⼦可以游泳');
    }
}
// 创建⼀个 Duck 实例
const duck = new Duck();
duck.fly(); // 输出: 鸭⼦可以⻜
duck.swim(); // 输出: 鸭⼦可以游泳
```

## 【】泛型 - 函数 

泛型允许我们在定义函数、类或接⼝时，使⽤类型参数来表示未指定的类型，这些参数在具体使⽤时，才被指定具体的类型，泛型能让同⼀段代码适⽤于多种类型，同时仍然保持类型的安全性

```ts
function logData<T>(data: T): T {
    console.log(data)
    return data
}
logData<number>(100)
logData<string>('hello')
```

泛型可以有多个  

```ts
function logData<T, U>(data1: T, data2: U): T | U {
    console.log(data1,data2)
    return Date.now() % 2 ? data1 : data2
}
logData<number, string>(100, 'hello')
logData<string, boolean>('ok', false)
```

## 【】泛型 - 接口

```ts
interface PersonInterface<T> {
    name: string,
    age: number,
    extraInfo: T
}
let p1: PersonInterface<string>
let p2: PersonInterface<number>
p1 = { name: '张三', age: 18, extraInfo: '⼀个好⼈' }
p2 = { name: '李四', age: 18, extraInfo: 250 }
```

## 【】泛型 - 约束

```ts
interface LengthInterface {
    length: number
}
// 约束规则是：传⼊的类型T必须具有 length 属性
function logPerson<T extends LengthInterface>(data: T): void {
    console.log(data.length)
}
logPerson<string>('hello')
// 报错：因为number不具备length属性
// logPerson<number>(100)
```

## 【】泛型 - 类

```ts
class Person<T> {
    constructor(
        public name: string,
        public age: number,
        public extraInfo: T
    ) { }
    speak() {
        console.log(`我叫${this.name}今年${this.age}岁了`)
        console.log(this.extraInfo)
    }
}
// 测试代码1
const p1 = new Person<number>("tom", 30, 250);
// 测试代码2
type JobInfo = {
    title: string;
    company: string;
}
const p2 = new Person<JobInfo>("tom", 30, { title: '研发总监', company: '发发发科技公司' });
```

## 【】 类型声明⽂件 - .d.ts 

类型声明⽂件是 TypeScript 中的⼀种特殊⽂件，通常以 .d.ts 作为扩展名。它的主要作⽤是为现有的 JavaScript 代码提供类型信息，使得 TypeScript 能够在使⽤这些 JavaScript 库或模块时进⾏类型检查和提示

```js
// demo.js
export function add(a, b) {
	return a + b;
}
export function mul(a, b) {
	return a * b;
}
```

```ts
// demo.d.ts
declare function add(a: number, b: number): number;
declare function mul(a: number, b: number): number;
export { add, mul };
```

```ts
// example.ts
import { add, mul } from "./demo.js";
const x = add(2, 3); // x 类型为 number
const y = mul(4, 5); // y 类型为 number
console.log(x,y)
```
