(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{708:function(s,n,a){s.exports=a.p+"assets/img/Untitled.a14a08ee.png"},826:function(s,n,a){"use strict";a.r(n);var e=a(24),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"typescript"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#typescript"}},[s._v("#")]),s._v(" TypeScript")]),s._v(" "),e("p",[e("img",{attrs:{src:a(708),alt:"Untitled.png"}})]),s._v(" "),e("h2",{attrs:{id:"一、多行字符串"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、多行字符串"}},[s._v("#")]),s._v(" "),e("strong",[s._v("一、多行字符串")])]),s._v(" "),e("blockquote",[e("p",[s._v("注意是Esc下面的符号")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var context = `aaa\nasdf\ndsaf`\n\n// ${param} 输出param变量 \nconsole.log(`hell ${context}`)\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h2",{attrs:{id:"二、字符串模板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、字符串模板"}},[s._v("#")]),s._v(" "),e("strong",[s._v("二、字符串模板")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("console.log(`<div>\n                <span>${context}</span>\n            <div/>`\n            )\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"三、自动拆分字符串"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、自动拆分字符串"}},[s._v("#")]),s._v(" "),e("strong",[s._v("三、自动拆分字符串")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('function test(template:any, name:string, age:Number){\n    console.log(template)\n    console.log(name)\n    console.log(age)\n}\nvar myName = "wo"\nvar getAge= function(){\n    return 12 \n}\ntest`hello my name is ${myName}, i\'m $${getAge}`\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("h2",{attrs:{id:"四、指定参数类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、指定参数类型"}},[s._v("#")]),s._v(" "),e("strong",[s._v("四、指定参数类型")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('var myName2:string = "guoyuhang"\nmyName2 = 2     //类型不同报错\nvar alias = "xixi"\nalias =12       //类型推断机制\nvar tex:any = "abc"\ntex = 12\n\nvar age2:Number = 12\nvar flag:boolean = true\nfunction te(x:Number):Number{\n    return 12\n}\nclass Person{\n}\nvar zhangsan:Person = new Person()\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("h2",{attrs:{id:"五、参数指定默认值-给方法变量指定默认值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、参数指定默认值-给方法变量指定默认值"}},[s._v("#")]),s._v(" "),e("strong",[s._v("五、参数指定默认值，给方法变量指定默认值")])]),s._v(" "),e("h3",{attrs:{id:"_1-默认值参数要放最后面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-默认值参数要放最后面"}},[s._v("#")]),s._v(" "),e("strong",[s._v("（1）默认值参数要放最后面")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('function test3(a:string,b:string,c:string="jojo"){\n    console.log(`${a}${b}${c}`)\n}\ntest3("xxx","yyy","zzz")\ntest3("xxx","yyy")\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"六、可选参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六、可选参数"}},[s._v("#")]),s._v(" "),e("strong",[s._v("六、可选参数")])]),s._v(" "),e("blockquote",[e("p",[s._v("要处理可选参数，不然会在方法体里报错")])]),s._v(" "),e("h3",{attrs:{id:"_1-可选参数必须放在必填参数后边"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-可选参数必须放在必填参数后边"}},[s._v("#")]),s._v(" "),e("strong",[s._v("（1）可选参数必须放在必填参数后边")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('function test4(a: string,b?: string,c: string="jojo"){\n    console.log(`${a}${b}${c}`)\n}\ntest4("xxx","yyy","zzz")\ntest4("xxx","yyy")\ntest4("xxx")\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h2",{attrs:{id:"七、函数新特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#七、函数新特性"}},[s._v("#")]),s._v(" "),e("strong",[s._v("七、函数新特性")])]),s._v(" "),e("h3",{attrs:{id:"_1、rest-and-spread"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、rest-and-spread"}},[s._v("#")]),s._v(" "),e("strong",[s._v("1、Rest and Spread：")])]),s._v(" "),e("h4",{attrs:{id:"_1-用来声明任意数量的方法参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-用来声明任意数量的方法参数"}},[s._v("#")]),s._v(" "),e("strong",[s._v("(1) 用来声明任意数量的方法参数")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("function argfun(...args:any) {\n    args.forEach(\n        function (arg:any){\n            console.log(arg)\n        }\n    );\n}\nargfun(1,3,4,5,6)\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h4",{attrs:{id:"_2-用来生命参数数量固定的方法-typescript还不支持-但是js支持-可运行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-用来生命参数数量固定的方法-typescript还不支持-但是js支持-可运行"}},[s._v("#")]),s._v(" "),e("strong",[s._v("(2) 用来生命参数数量固定的方法,typescript还不支持，但是JS支持,可运行")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("function argfun2(arg1:string,arg2:string) {\n    console.log(arg1)\n    console.log(arg2)\n}\nvar argArry = [1]\nvar argArry2 = [1,2]\nargfun2(...argArry)\nargfun2(...argArry2)\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h4",{attrs:{id:"_2、generator函数-控制函数执行过程-ts不支持-es支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、generator函数-控制函数执行过程-ts不支持-es支持"}},[s._v("#")]),s._v(" "),e("strong",[s._v("2、generator函数，控制函数执行过程，Ts不支持, Es支持")])]),s._v(" "),e("h3",{attrs:{id:"_1-简单"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-简单"}},[s._v("#")]),s._v(" "),e("strong",[s._v("(1) 简单")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("function* doSomething(){\n    console.log();\n    \n    yield;          // 控制\n\n    console.log();\n}\n\n//方法必须赋值给对象\nvar func1 = doSomething();\nfunc1.next();\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("h4",{attrs:{id:"_2-复杂"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-复杂"}},[s._v("#")]),s._v(" "),e("strong",[s._v("(2) 复杂")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('function* getStockPrice(stock){\n    while(true){\n        yield Math.random()*100;    // 控制\n    }\n}\nvar priceGenerator = getStockPrice("IBM");\nvar limit = 15;\nvar price = 100;\nwhile(price > limit){\n    price = priceGenerator.next().value;\n    console.log(`the generate return${price}`)\n}\nconsole.log(`buying stock at ${price}`)\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("h3",{attrs:{id:"_3、析构表达式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、析构表达式"}},[s._v("#")]),s._v(" "),e("strong",[s._v("3、析构表达式")])]),s._v(" "),e("blockquote",[e("p",[s._v("表达式将对象或数组拆解成任意数量的变量")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('function getStock(){\n    return{\n        code: "IBM",\n        price: {\n            price1: 100,\n            price2: 200\n        }\n    }\n}\n\n// ES5:分别赋值到本地2个变量上去\nvar stock = getStock()\nvar code = stock.code\nvar price = stock.price\n\n// ES6:把code属性放到codex变量里\nvar {code:codex,price: {price1}} = getStock()\nvar array1 = [1,2,3,4]\nvar [,,n1,n2] = array1\nvar [n1,n2,...args] = array1\nfunction doSome([nu1, nu2, ...others]){\n    console.log(nu1),\n    console.log(nu2),\n    console.log(others)\n}\ndoSome(array1)\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br")])]),e("h3",{attrs:{id:"_4、箭头表达式-解决this作用域范围预判的错误问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、箭头表达式-解决this作用域范围预判的错误问题"}},[s._v("#")]),s._v(" "),e("strong",[s._v("4、箭头表达式 : 解决this作用域范围预判的错误问题")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var sum = (args1:any,args2:Number) => args1+args2\nvar myArray = [1,2,3,45,6]\nconsole.log(myArray.filter(value => value%2 == 0 ))\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h3",{attrs:{id:"_5、for-of-循环"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、for-of-循环"}},[s._v("#")]),s._v(" "),e("strong",[s._v("5、for of 循环")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('var myArray = [1,2,3,4]\nmyArray.desc = "forc";//ts里不能给array指定属性，js可以\nmyArray.forEach(value => console.log(value))//不支持break，忽略掉属性值\n\nfor(var n in myArray){ //for in 数组下标和属性名字，任何属性都是键值对\n    console.log(n) //key\n    console.log(myArray[n]) //value\n}\n\nfor(var nn of myArray ){ //只循环数组,忽略属性，可以break,循环字符串会循环字符\n    if(nn > 2) break\n    console.log(nn)\n}\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("h3",{attrs:{id:"_6、类定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6、类定义"}},[s._v("#")]),s._v(" "),e("strong",[s._v("6、类定义")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('class Person2{\n    name:any;\n\n    eat(){\n        console.log("i\'m eating");\n    }\n\n    private s(){\n        //只能内部访问\n    }\n\n    protected a:any;//内部和子类可以访问\n\n    //构造函数：实例化调用1次\n    //public name2 是声明了1个属性，用this调用,否则不行\n    constructor(public name2:string){\n        //内部访问\n        //new 时调用1次\n        //初始化\n    }\n}\n\nvar p1 = new Person2("a")\np1.name = "superman"\np1.eat()\n\nvar p2 = new Person2("b")\np2.name = "superman2"\np2.eat()\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br")])]),e("h3",{attrs:{id:"_7、类继承-extends-继承关系-的-的关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7、类继承-extends-继承关系-的-的关系"}},[s._v("#")]),s._v(" "),e("strong",[s._v('7、类继承 extends : 继承关系，"的"的关系')])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('class Employee extends Person2{\n    //子类构造函数必须调用父类构造函数\n    constructor(name:string,code:string){\n        super(name)\n        this.code = code\n    }\n    \n    //指定新的属性和方法\n    code: string = "";\n    work(){\n        //super可以调父类其他方法\n        super.eat();\n        console.log("do work")\n    }\n\n    doWork(){\n        console.log("do work")\n    }\n}\n\nvar e1 = new Employee("b","")\ne1.eat()\ne1.work()\ne1.doWork()\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br")])]),e("h3",{attrs:{id:"_8、泛型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8、泛型"}},[s._v("#")]),s._v(" "),e("strong",[s._v("8、泛型")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('var work:Array<Person2> = []\nwork[0] = new Person2("")\nwork[1] = new Employee("","")\n\n//接口建立代码约定,interface生命，implements\ninterface IPerson{\n    name:string;\n    age:number;\n    eat():any;\n}\nclass Person3 implements IPerson{\n    //方法参数类型声明\n    constructor(public config:IPerson) {\n    }\n    name = "";\n    age =12;\n    eat(){\n        console.log()\n    }\n}\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br")])]),e("h3",{attrs:{id:"_9、模块-决定哪些资源让外部使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9、模块-决定哪些资源让外部使用"}},[s._v("#")]),s._v(" "),e("strong",[s._v("9、模块-决定哪些资源让外部使用")])]),s._v(" "),e("blockquote",[e("p",[s._v('创建b.ts文件在同一目录下 "export"关键字表示导出模块中元素')])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// b.ts  \nexport var pro:any;\nvar pro2:any;\nexport function a(){\n}\nfunction b(){\n}\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 导入b模块\nimport {a, pro} from './b';\nconsole.log(pro)\na()\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"_10、注解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10、注解"}},[s._v("#")]),s._v(" "),e("strong",[s._v("10、注解")])]),s._v(" "),e("blockquote",[e("p",[s._v("给程序元素加上更直观的说明，与逻辑无关，而是供给指定工具或框架使用 告诉框架，如何处理一下属性或或方法")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 如\n@action.object({ type: 'param' })\nexport class ActionInput {\n    @action.param({ type: 'String', required: true })\n    name: string\n\n    @action.param({ type: 'String', required: true })\n    description: string\n\n    @action.param({ type: 'String', required: true })\n    type: string\n}\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("h3",{attrs:{id:"_11、类型定义文件-d-ts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11、类型定义文件-d-ts"}},[s._v("#")]),s._v(" "),e("strong",[s._v("11、类型定义文件(*.d.ts)")])]),s._v(" "),e("blockquote",[e("p",[s._v("使用已有的javascript工具包")])])])}),[],!1,null,null,null);n.default=t.exports}}]);