(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{645:function(s,e,a){"use strict";a.r(e);var n=a(24),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"java-8-optional"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-8-optional"}},[s._v("#")]),s._v(" Java 8 - Optional")]),s._v(" "),a("blockquote",[a("p",[s._v("从 Java 8 引入的一个很有趣的特性是 "),a("em",[s._v("Optional")]),s._v("  类。Optional 类主要解决的问题是臭名昭著的空指针异常（NullPointerException） —— 每个 Java 程序员都非常了解的异常。")])]),s._v(" "),a("blockquote",[a("p",[s._v("本质上，这是一个包含有可选值的包装类，这意味着 Optional 类既可以含有对象也可以为空。")])]),s._v(" "),a("blockquote",[a("p",[s._v("Optional 是 Java 实现函数式编程的强劲一步，并且帮助在范式中实现。但是 Optional 的意义显然不止于此。")])]),s._v(" "),a("p",[s._v("我们从一个简单的用例开始。在 Java 8 之前，任何访问对象方法或属性的调用都可能导致 "),a("em",[s._v("NullPointerException")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" isocode "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getAddress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getCountry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getIsocode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toUpperCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在这个小示例中，如果我们需要确保不触发异常，就得在访问每一个值之前对其进行明确地检查：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("if (user != null) {\n    Address address = user.getAddress();\n    if (address != null) {\n        Country country = address.getCountry();\n        if (country != null) {\n            String isocode = country.getIsocode();\n            if (isocode != null) {\n                isocode = isocode.toUpperCase();\n            }\n        }\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("你看到了，这很容易就变得冗长，难以维护。")]),s._v(" "),a("p",[s._v("为了简化这个过程，我们来看看用 "),a("em",[s._v("Optional")]),s._v("  类是怎么做的。从创建和验证实例，到使用其不同的方法，并与其它返回相同类型的方法相结合，下面是见证 "),a("em",[s._v("Optional")]),s._v("  奇迹的时刻。")]),s._v(" "),a("h2",{attrs:{id:"创建-optional-实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-optional-实例"}},[s._v("#")]),s._v(" "),a("strong",[s._v("创建 "),a("em",[s._v("Optional")]),s._v(" 实例")])]),s._v(" "),a("p",[s._v("重申一下，这个类型的对象可能包含值，也可能为空。你可以使用同名方法创建一个空的 Optional。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@Test(expected = NoSuchElementException.class)\npublic void whenCreateEmptyOptional_thenNull() {\n    Optional<User> emptyOpt = Optional.empty();\n    emptyOpt.get();\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("毫不奇怪，尝试访问 "),a("em",[s._v("emptyOpt")]),s._v(" 变量的值会导致 "),a("em",[s._v("NoSuchElementException")]),s._v("。")]),s._v(" "),a("p",[s._v("你可以使用  "),a("em",[s._v("of()")]),s._v(" 和 ofNullable() 方法创建包含值的 "),a("em",[s._v("Optional")]),s._v("。两个方法的不同之处在于如果你把 "),a("em",[s._v("null")]),s._v(" 值作为参数传递进去，"),a("em",[s._v("of()")]),s._v(" 方法会抛出 "),a("em",[s._v("NullPointerException")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@Test(expected = NullPointerException.class)\npublic void whenCreateOfEmptyOptional_thenNullPointerException() {\n    Optional<User> opt = Optional.of(user);\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("你看，我们并没有完全摆脱 "),a("em",[s._v("NullPointerException")]),s._v("。因此，你应该明确对象不为 "),a("em",[s._v("null")]),s._v("  的时候使用 "),a("em",[s._v("of()")]),s._v("。")]),s._v(" "),a("p",[s._v("如果对象即可能是 "),a("em",[s._v("null")]),s._v(" 也可能是非 null，你就应该使用 "),a("em",[s._v("ofNullable()")]),s._v(" 方法：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Optional<User> opt = Optional.ofNullable(user);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"访问-optional-对象的值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问-optional-对象的值"}},[s._v("#")]),s._v(" "),a("strong",[s._v("访问 "),a("em",[s._v("Optional")]),s._v(" 对象的值")])]),s._v(" "),a("p",[s._v("从 "),a("em",[s._v("Optional")]),s._v(" 实例中取回实际值对象的方法之一是使用 "),a("em",[s._v("get()")]),s._v(" 方法：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('@Test\npublic void whenCreateOfNullableOptional_thenOk() {\n    String name = "John";\n    Optional<String> opt = Optional.ofNullable(name);\n\n    assertEquals("John", opt.get());\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("不过，你看到了，这个方法会在值为 "),a("em",[s._v("null")]),s._v(" 的时候抛出异常。要避免异常，你可以选择首先验证是否有值：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('@Test\npublic void whenCheckIfPresent_thenOk() {\n    User user = new User("john@gmail.com", "1234");\n    Optional<User> opt = Optional.ofNullable(user);\n    assertTrue(opt.isPresent());\n\n    assertEquals(user.getEmail(), opt.get().getEmail());\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("检查是否有值的另一个选择是 "),a("em",[s._v("ifPresent()")]),s._v(" 方法。该方法除了执行检查，还接受一个"),a("em",[s._v("Consumer(消费者")]),s._v(") 参数，如果对象不是空的，就对执行传入的 Lambda 表达式：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("opt.ifPresent( u -> assertEquals(user.getEmail(), u.getEmail()));\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这个例子中，只有 user 用户不为 null 的时候才会执行断言。")]),s._v(" "),a("p",[s._v("接下来，我们来看看提供空值的方法。")]),s._v(" "),a("h2",{attrs:{id:"返回默认值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回默认值"}},[s._v("#")]),s._v(" "),a("strong",[s._v("返回默认值")])]),s._v(" "),a("p",[a("em",[s._v("Optional")]),s._v(" 类提供了 API 用以返回对象值，或者在对象为空的时候返回默认值。")]),s._v(" "),a("p",[s._v("这里你可以使用的第一个方法是 "),a("em",[s._v("orElse()")]),s._v("，它的工作方式非常直接，如果有值则返回该值，否则返回传递给它的参数值：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('@Test\npublic void whenEmptyValue_thenReturnDefault() {\n    User user = null;\n    User user2 = new User("anna@gmail.com", "1234");\n    User result = Optional.ofNullable(user).orElse(user2);\n\n    assertEquals(user2.getEmail(), result.getEmail());\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("这里 "),a("em",[s._v("user")]),s._v(" 对象是空的，所以返回了作为默认值的 "),a("em",[s._v("user2")]),s._v("。")]),s._v(" "),a("p",[s._v("如果对象的初始值不是 null，那么默认值会被忽略：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('@Test\npublic void whenValueNotNull_thenIgnoreDefault() {\n    User user = new User("john@gmail.com","1234");\n    User user2 = new User("anna@gmail.com", "1234");\n    User result = Optional.ofNullable(user).orElse(user2);\n\n    assertEquals("john@gmail.com", result.getEmail());\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("第二个同类型的 API 是 "),a("em",[s._v("orElseGet()")]),s._v(" —— 其行为略有不同。这个方法会在有值的时候返回值，如果没有值，它会执行作为参数传入的 "),a("em",[s._v("Supplier(供应者)")]),s._v(" 函数式接口，并将返回其执行结果：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("User result = Optional.ofNullable(user).orElseGet( () -> user2);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"orelse-和-orelseget-的不同之处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orelse-和-orelseget-的不同之处"}},[s._v("#")]),s._v(" "),a("strong",[a("em",[s._v("orElse()")]),s._v(" 和 "),a("em",[s._v("orElseGet()")]),s._v(" 的不同之处")])]),s._v(" "),a("p",[s._v("乍一看，这两种方法似乎起着同样的作用。然而事实并非如此。我们创建一些示例来突出二者行为上的异同。")]),s._v(" "),a("p",[s._v("我们先来看看对象为空时他们的行为：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('@Test\npublic void givenEmptyValue_whenCompare_thenOk() {\n    User user = null\n    logger.debug("Using orElse");\n    User result = Optional.ofNullable(user).orElse(createNewUser());\n    logger.debug("Using orElseGet");\n    User result2 = Optional.ofNullable(user).orElseGet(() -> createNewUser());\n}\n\nprivate User createNewUser() {\n    logger.debug("Creating New User");\n    return new User("extra@gmail.com", "1234");\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("上面的代码中，两种方法都调用了 "),a("em",[s._v("createNewUser()")]),s._v(" 方法，这个方法会记录一个消息并返回 "),a("em",[s._v("User")]),s._v(" 对象。")]),s._v(" "),a("p",[s._v("代码输出如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Using orElse\nCreating New User\nUsing orElseGet\nCreating New User\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("由此可见，当对象为空而返回默认对象时，行为并无差异。")]),s._v(" "),a("p",[s._v("我们接下来看一个类似的示例，但这里 "),a("em",[s._v("Optional")]),s._v("  不为空：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('@Test\npublic void givenPresentValue_whenCompare_thenOk() {\n    User user = new User("john@gmail.com", "1234");\n    logger.info("Using orElse");\n    User result = Optional.ofNullable(user).orElse(createNewUser());\n    logger.info("Using orElseGet");\n    User result2 = Optional.ofNullable(user).orElseGet(() -> createNewUser());\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("这次的输出：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Using orElse\nCreating New User\nUsing orElseGet\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("这个示例中，两个 "),a("em",[s._v("Optional")]),s._v("  对象都包含非空值，两个方法都会返回对应的非空值。不过，"),a("em",[s._v("orElse()")]),s._v(" 方法仍然创建了 "),a("em",[s._v("User")]),s._v(" 对象。"),a("strong",[s._v("与之相反，"),a("em",[s._v("orElseGet()")]),s._v(" 方法不创建 "),a("em",[s._v("User")]),s._v(" 对象。")])]),s._v(" "),a("p",[s._v("在执行较密集的调用时，比如调用 Web 服务或数据查询，"),a("strong",[s._v("这个差异会对性能产生重大影响")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"返回异常"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回异常"}},[s._v("#")]),s._v(" "),a("strong",[s._v("返回异常")])]),s._v(" "),a("p",[s._v("除了 "),a("em",[s._v("orElse()")]),s._v(" 和 "),a("em",[s._v("orElseGet()")]),s._v(" 方法，Optional 还定义了 "),a("em",[s._v("orElseThrow()")]),s._v(" API —— 它会在对象为空的时候抛出异常，而不是返回备选的值：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@Test(expected = IllegalArgumentException.class)\npublic void whenThrowException_thenOk() {\n    User result = Optional.ofNullable(user)\n      .orElseThrow( () -> new IllegalArgumentException());\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("这里，如果 "),a("em",[s._v("user")]),s._v(" 值为 null，会抛出 "),a("em",[s._v("IllegalArgumentException")]),s._v("。")]),s._v(" "),a("p",[s._v("这个方法让我们有更丰富的语义，可以决定抛出什么样的异常，而不总是抛出 "),a("em",[s._v("NullPointerException")]),s._v("。")]),s._v(" "),a("p",[s._v("现在我们已经很好地理解了如何使用 Optional，我们来看看其它可以对 "),a("em",[s._v("Optional")]),s._v(" 值进行转换和过滤的方法。")]),s._v(" "),a("h2",{attrs:{id:"转换值和过滤值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转换值和过滤值"}},[s._v("#")]),s._v(" "),a("strong",[s._v("转换值和过滤值")])]),s._v(" "),a("h3",{attrs:{id:"转换值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转换值"}},[s._v("#")]),s._v(" "),a("strong",[s._v("转换值")])]),s._v(" "),a("p",[s._v("有很多种方法可以转换 "),a("em",[s._v("Optional")]),s._v("  的值。我们从 "),a("em",[s._v("map()")]),s._v(" 和 "),a("em",[s._v("flatMap()")]),s._v(" 方法开始。")]),s._v(" "),a("p",[s._v("先来看一个使用 "),a("em",[s._v("map()")]),s._v(" API 的例子：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('@Test\npublic void whenMap_thenOk() {\n    User user = new User("anna@gmail.com", "1234");\n    String email = Optional.ofNullable(user)\n      .map(u -> u.getEmail()).orElse("default@gmail.com");\n\n    assertEquals(email, user.getEmail());\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("em",[a("em",[a("em",[s._v("map()")]),s._v(" 对值应用(调用)作为参数的")]),s._v("函数")]),s._v("，然后将返回的值包装在 "),a("em",[s._v("Optional")]),s._v(" 中。**这就使对返回值进行链试调用的操作成为可能 —— 这里的下一环就是 "),a("em",[s._v("orElse()")]),s._v("。")]),s._v(" "),a("p",[s._v("相比这下，"),a("em",[s._v("flatMap()")]),s._v(" 也需要"),a("em",[s._v("函数")]),s._v("作为参数，并对值调用这个函数，然后直接返回结果。")]),s._v(" "),a("p",[s._v("下面的操作中，我们给 "),a("em",[s._v("User")]),s._v(" 类添加了一个方法，用来返回 "),a("em",[s._v("Optional")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("public class User {\n    private String position;\n\n    public Optional<String> getPosition() {\n        return Optional.ofNullable(position);\n    }\n\n    //...\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("既然 getter 方法返回 String 值的 "),a("em",[s._v("Optional")]),s._v("，你可以在对 "),a("em",[s._v("User 的 Optional")]),s._v(" 对象调用 "),a("em",[s._v("flatMap()")]),s._v(" 时，用它作为参数。其返回的值是解除包装的 String 值：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('@Test\npublic void whenFlatMap_thenOk() {\n    User user = new User("anna@gmail.com", "1234");\n    user.setPosition("Developer");\n    String position = Optional.ofNullable(user)\n      .flatMap(u -> u.getPosition()).orElse("default");\n\n    assertEquals(position, user.getPosition().get());\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"过滤值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#过滤值"}},[s._v("#")]),s._v(" "),a("strong",[s._v("过滤值")])]),s._v(" "),a("p",[s._v("除了转换值之外，"),a("em",[s._v("Optional")]),s._v("  类也提供了按条件“过滤”值的方法。")]),s._v(" "),a("p",[a("strong",[a("em",[s._v("filter()")]),s._v(" 接受一个 "),a("em",[s._v("Predicate")]),s._v(" 参数")]),s._v("，返回测试结果为 true 的值。如果测试结果为 false，会返回一个空的 "),a("em",[s._v("Optional")]),s._v("。")]),s._v(" "),a("p",[s._v("来看一个根据基本的电子邮箱验证来决定接受或拒绝 "),a("em",[s._v("User(用户)")]),s._v(" 的示例：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('@Test\npublic void whenFilter_thenOk() {\n    User user = new User("anna@gmail.com", "1234");\n    Optional<User> result = Optional.ofNullable(user)\n      .filter(u -> u.getEmail() != null && u.getEmail().contains("@"));\n\n    assertTrue(result.isPresent());\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("如果通过过滤器测试，"),a("em",[s._v("result")]),s._v(" 对象会包含非空值。")]),s._v(" "),a("h2",{attrs:{id:"optional-类的链式方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optional-类的链式方法"}},[s._v("#")]),s._v(" Optional 类的链式方法")]),s._v(" "),a("p",[s._v("为了更充分的使用 "),a("em",[s._v("Optional")]),s._v("，你可以链接组合其大部分方法，因为它们都返回相同类似的对象。")]),s._v(" "),a("p",[s._v("我们使用 "),a("em",[s._v("Optional")]),s._v("  重写最早介绍的示例。")]),s._v(" "),a("p",[s._v("首先，重构类，使其 getter 方法返回 "),a("em",[s._v("Optional")]),s._v(" 引用：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("public class User {\n    private Address address;\n\n    public Optional<Address> getAddress() {\n        return Optional.ofNullable(address);\n    }\n\n    // ...\n}\npublic class Address {\n    private Country country;\n\n    public Optional<Country> getCountry() {\n        return Optional.ofNullable(country);\n    }\n\n    // ...\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("上面的嵌套结构可以用下面的图来表示：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://images2017.cnblogs.com/blog/782702/201709/782702-20170923094507806-345950041.png",alt:"https://images2017.cnblogs.com/blog/782702/201709/782702-20170923094507806-345950041.png"}})]),s._v(" "),a("p",[s._v("现在可以删除 "),a("em",[s._v("null")]),s._v(" 检查，替换为 "),a("em",[s._v("Optional")]),s._v(" 的方法：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('@Test\npublic void whenChaining_thenOk() {\n    User user = new User("anna@gmail.com", "1234");\n\n    String result = Optional.ofNullable(user)\n      .flatMap(u -> u.getAddress())\n      .flatMap(a -> a.getCountry())\n      .map(c -> c.getIsocode())\n      .orElse("default");\n\n    assertEquals(result, "default");\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("上面的代码可以通过方法引用进一步缩减：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('String result = Optional.ofNullable(user)\n  .flatMap(User::getAddress)\n  .flatMap(Address::getCountry)\n  .map(Country::getIsocode)\n  .orElse("default");\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("结果现在的代码看起来比之前采用条件分支的冗长代码简洁多了。")]),s._v(" "),a("h2",{attrs:{id:"java-9-增强"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-9-增强"}},[s._v("#")]),s._v(" "),a("strong",[s._v("Java 9 增强")])]),s._v(" "),a("p",[s._v("我们介绍了 Java 8 的特性，"),a("strong",[s._v("Java 9 为 Optional 类添加了三个方法："),a("em",[s._v("or()")]),s._v("、"),a("em",[s._v("ifPresentOrElse()")]),s._v(" 和 "),a("em",[s._v("stream()")]),s._v("。")])]),s._v(" "),a("p",[a("em",[s._v("or()")]),s._v(" 方法与 "),a("em",[s._v("orElse()")]),s._v(" 和 "),a("em",[s._v("orElseGet()")]),s._v(" 类似，它们都在对象为空的时候提供了替代情况。"),a("em",[s._v("or()")]),s._v(" 的返回值是由 "),a("em",[s._v("Supplier")]),s._v(" 参数产生的另一个 "),a("em",[s._v("Optional")]),s._v(" 对象。")]),s._v(" "),a("p",[s._v("如果对象包含值，则 Lambda 表达式不会执行：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('@Test\npublic void whenEmptyOptional_thenGetValueFromOr() {\n    User result = Optional.ofNullable(user)\n      .or( () -> Optional.of(new User("default","1234"))).get();\n\n    assertEquals(result.getEmail(), "default");\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("上面的示例中，如果 "),a("em",[s._v("user")]),s._v(" 变量是 null，它会返回一个 "),a("em",[s._v("Optional")]),s._v("，它所包含的 "),a("em",[s._v("User")]),s._v(" 对象，其电子邮件为 “default”。")]),s._v(" "),a("p",[a("em",[s._v("ifPresentOrElse()")]),s._v(" 方法需要两个参数：一个 "),a("em",[s._v("Consumer")]),s._v(" 和一个 "),a("em",[s._v("Runnable")]),s._v("。如果对象包含值，会执行 "),a("em",[s._v("Consumer")]),s._v(" 的动作，否则运行 "),a("em",[s._v("Runnable")]),s._v("。")]),s._v(" "),a("p",[s._v("如果你想在有值的时候执行某个动作，或者只是跟踪是否定义了某个值，那么这个方法非常有用：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('Optional.ofNullable(user).ifPresentOrElse( u -> logger.info("User is:" + u.getEmail()),\n  () -> logger.info("User not found"));\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("最后介绍的是新的 "),a("em",[s._v("stream()")]),s._v(" 方法，它**通过把实例转换为 "),a("em",[s._v("Stream")]),s._v(" 对象，**让你从广大的 "),a("em",[s._v("Stream")]),s._v(" API 中受益。如果没有值，它会得到空的 "),a("em",[s._v("Stream")]),s._v("；有值的情况下，"),a("em",[s._v("Stream")]),s._v(" 则会包含单一值。")]),s._v(" "),a("p",[s._v("我们来看一个把 "),a("em",[s._v("Optional")]),s._v(" 处理成 "),a("em",[s._v("Stream")]),s._v(" 的例子：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('@Test\npublic void whenGetStream_thenOk() {\n    User user = new User("john@gmail.com", "1234");\n    List<String> emails = Optional.ofNullable(user)\n      .stream()\n      .filter(u -> u.getEmail() != null && u.getEmail().contains("@"))\n      .map( u -> u.getEmail())\n      .collect(Collectors.toList());\n\n    assertTrue(emails.size() == 1);\n    assertEquals(emails.get(0), user.getEmail());\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("这里对 "),a("em",[s._v("Stream")]),s._v(" 的使用带来了其 "),a("em",[s._v("filter()、map()")]),s._v(" 和 "),a("em",[s._v("collect()")]),s._v(" 接口，以获取 "),a("em",[s._v("List")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"optional-应该怎样用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optional-应该怎样用"}},[s._v("#")]),s._v(" "),a("strong",[a("em",[s._v("Optional")]),s._v(" 应该怎样用？")])]),s._v(" "),a("p",[s._v("在使用 "),a("em",[s._v("Optional")]),s._v(" 的时候需要考虑一些事情，以决定什么时候怎样使用它。")]),s._v(" "),a("p",[s._v("重要的一点是 "),a("strong",[a("em",[s._v("Optional")]),s._v(" 不是 "),a("em",[s._v("Serializable")])]),s._v("。因此，它不应该用作类的字段。")]),s._v(" "),a("p",[s._v("如果你需要序列化的对象包含 "),a("em",[s._v("Optional")]),s._v(" 值，*"),a("a",{attrs:{href:"https://stackify.com/java-xml-jackson/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Jackson* 库"),a("OutboundLink")],1),s._v("支持把 "),a("em",[s._v("Optional")]),s._v(" 当作普通对象。也就是说，"),a("em",[s._v("Jackson")]),s._v(" 会把空对象看作 "),a("em",[s._v("null")]),s._v("，而有值的对象则把其值看作对应域的值。这个功能在 "),a("a",{attrs:{href:"https://github.com/FasterXML/jackson-modules-java8",target:"_blank",rel:"noopener noreferrer"}},[s._v("jackson-modules-java8"),a("OutboundLink")],1),s._v(" 项目中。")]),s._v(" "),a("p",[s._v("它在另一种情况下也并不怎么有用，就是在将其类型用作方法或构建方法的参数时。这样做会让代码变得复杂，完全没有必要：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('User user = new User("john@gmail.com", "1234", Optional.empty());\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("使用重载方法来处理非要的参数要容易得多。")]),s._v(" "),a("p",[s._v("**"),a("em",[s._v("Optional")]),s._v(" 主要用作返回类型。**在获取到这个类型的实例后，如果它有值，你可以取得这个值，否则可以进行一些替代行为。")]),s._v(" "),a("p",[a("em",[s._v("Optional")]),s._v(" 类有一个非常有用的用例，就是将其与流或其它返回 "),a("em",[s._v("Optional")]),s._v(" 的方法结合，以"),a("strong",[s._v("构建流畅的API")]),s._v("。")]),s._v(" "),a("p",[s._v("我们来看一个示例，使用 "),a("em",[s._v("Stream")]),s._v(" 返回 "),a("em",[s._v("Optional")]),s._v(" 对象的 "),a("em",[s._v("findFirst()")]),s._v(" 方法：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('@Test\npublic void whenEmptyStream_thenReturnDefaultOptional() {\n    List<User> users = new ArrayList<>();\n    User user = users.stream().findFirst().orElse(new User("default", "1234"));\n\n    assertEquals(user.getEmail(), "default");\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" "),a("strong",[s._v("总结")])]),s._v(" "),a("p",[a("em",[s._v("Optional")]),s._v(" 是 Java 语言的有益补充 —— 它旨在减少代码中的 "),a("em",[s._v("NullPointerExceptions")]),s._v("，虽然还不能完全消除这些异常。")]),s._v(" "),a("p",[s._v("它也是精心设计，自然融入 Java 8 函数式支持的功能。")]),s._v(" "),a("p",[s._v("总的来说，这个简单而强大的类有助于创建简单、可读性更强、比对应程序错误更少的程序。")])])}),[],!1,null,null,null);e.default=t.exports}}]);