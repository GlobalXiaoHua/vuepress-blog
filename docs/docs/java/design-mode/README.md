# Java设计模式

## 【-】概述

### 1、设计模式境界

境界大多是相通的

:person_fencing: 剑魔独孤求败的五层剑法境界

- :crossed_swords: **青钢利剑**：一招一式，极致招式
- :crossed_swords: **紫薇软剑**：招式变化，以柔克刚
- :crossed_swords: **玄铁重剑**：运劲法门，力度压制
- :crossed_swords: **木剑**：以快打慢，持强克弱
- :crossed_swords: **无剑**：内力外放，化气攻击

:book: 清代文学家王国维在《人间词话》提出的读书三层境界

- :city_sunrise: **昨夜西风凋碧树，独上高楼，望尽天涯路**
- :womans_clothes: **衣带渐宽终不悔，为伊消得人憔悴**
- :izakaya_lantern: **众里寻他千百度，蓦然回首，那人却在灯火阑珊处**



### 2、设计模式目的

:computer: 设计模式是为了让程序（软件），具有更好的

- :recycle: **可复用性**
- :book: **可读性**
- :link: **可扩展性**
- :policeman: **可靠性**
- :wrench: **可维护性**
- :snowboarder: **灵活性**
- :pushpin: **高内聚，低耦合**



### 3、设计模式七大原则

- :one: **单一职责原则**（Single Responsibility Principle）：一个类只负责一项职责
- :two: **接口隔离原则**（Interface Segregation Principle）：一个类对另一个类的依赖应该建立在最小的接口上
- :three: **依赖倒转原则**（Dependence Inversion Principle）：面向接口编程
- :four: **里氏替换原则**（Liskov Substitution Principle）：用聚合、组合代替继承
- :five: **开闭原则**（OCP，Open Closed Principle）：对扩展开放，对修改关闭
- :six: **迪米特法则**（Demeter Principle）：最少知道原则，只与直接的朋友通信
- :seven: **合成复用原则**（Composite Reuse Principle）：尽量使用合成/聚合的方式，而不是使用继承



### 4、UML 类图关系

- **依赖**（dependence）
- **泛化**（Generalization）：即继承
- **实现**（Implementation）
- **关联**（Association）：单向一对一关系；双向一对一关系
- **聚合**（Aggregation）
- **组合**（Composition）



### 4、设计模式分类（5 + 7 + 11）

- **创建型模式**（5种）：单例模式、工厂模式、抽象工厂模式、原型模式、建造者模式
- **结构型模式**（7种）：适配器模式、桥接模式、装饰模式、组合模式、外观模式、享元模式、代理模式
- **行为型模式**（11种）：模版方法模式、命令模式、访问者模式、迭代器模式、观察者模式、中介者模式、备忘录模式、解释器模式、状态模式、策略模式、职责链模式



### 5、23 种设计模式定义

1. **单例模式**（Single Pattern）：某个类只能存在一个对象实例
2. **工厂模式**（Factory Pattern）：由工厂对象决定创建出哪种产品类的实例
3. **原型模式**（Prototype Pattern）：用原型实例指定创建对象种类，并通过拷贝原型创建新的对象
4. **建造者模式 / 生成器模式**（Builder Pattern）：将复杂对象的建造过程抽象出来，使这个抽象过程的不同实现方法可以构造出不同表现（属性）的对象
5. **适配器模式**（Adapter Pattern）：将某个类的接口转换成客户端期望的另一个接口表示
6. **桥接模式**（Bridge Pattern）：将实现与抽象分离，放在两个不同的类层次中，可以独立改变
7. **装饰者模式**（Decorator Pattern）：动态地将新功能附加到对象上
8. **组合模式 / 部分整体模式**（Composite Pattern）：依据树形结构来组合对象，用来表示部分以及整体层次
9. **外观模式 / 过程模式**（Facade Pattern）：为调用端提供统一的调用接口
10. **享元模式 / 蝇量模式**（Flyweight Pattern）：运用共享技术有效地支持大量细粒度的对象
11. **代理模式**（Proxy Pattern）：通过代理对象访问目标对象
12. **模板模式 / 模板方法模式**（Template Method Pattern）：定义一个操作中的算法骨架，将一些步骤延迟到子类中
13. **命令模式**（Command Pattern）：将发起请求的对象与执行请求的对象解耦
14. **访问者模式**（Visitor Pattern）：将数据结构与数据操作分离
15. **迭代器模式**（Iterator Pattern）：提供一种遍历集合元素的统一接口，用一致的方法遍历集合元素
16. **观察者模式**（Observer Pattern）：对象之间多对一依赖的一种设计方案
17. **中介者模式**（Mediator Pattern）：用一个中介对象来封装一系列的对象交互
18. **备忘录模式**（Memento Pattern）：在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态
19. **解释器模式**（Interpreter Pattern）：给定一个语言并定义其文法表示，使用该解释器来解释语言中的句子
20. **状态模式**（State Pattern）：解决对象在多种状态转换时，需要对外输出不同的行为的问题
21. **策略模式**（Strategy Pattern）：定义算法族，分别封装起来，让他们之间可以互相替换
22. **职责链模式 / 责任链模式**（Chain of Responsibility Pattern）：为请求创建一个接收者对象的链



### 6、23种设计模式举例、源码及优缺点

| 分类   | 设计模式   | 举例             | 源码                                  | 优点               | 缺点                                       |
| :----- | :--------- | :--------------- | :------------------------------------ | :----------------- | ------------------------------------------ |
| 创建型 | 单例模式   | `Singleton`      | JDK 中`java.lang.Runtime`             | 节省资源，提高性能 |                                            |
| ~      | 工厂模式   | 披萨店           | JDK 中`Calendar`                      | 统一管理，便于维护 |                                            |
| ~      | 原型模式   | 克隆羊           | Spring 中`ApplicationContext`         | 简化过程，提高效率 | <font color='red'>复杂</font>；违背 OCP    |
| ~      | 建造者模式 | 盖房子           | JDK 中`StringBuilder`                 | 解耦创建过程       |                                            |
| 结构型 | 适配器模式 | 插座             | SpringMVC 中`HandlerAdapter`          | 兼容性             |                                            |
| ~      | 桥接模式   | 手机             | JDBC 中`Driver`                       | 分离抽象与实现     |                                            |
| ~      | 装饰者模式 | 星巴克咖啡       | JDK 中`FilterlnputStream`             | 动态扩展功能       |                                            |
| ~      | 组合模式   | 学校院系         | JDK 中`HashMap`                       | 明确部分与整体层次 |                                            |
| ~      | 外观模式   | 影院管理         | MyBatis 中`Configuration`             | 屏蔽细节，简化操作 | <font color='orange'>过多不利于维护</font> |
| ~      | 享元模式   | 网站展示         | JDK 中`Integer`                       | 降低内存，提高效率 | <font color='red'>复杂</font>              |
| ~      | 代理模式   | 教师教书         | JDK 中`Proxy`                         | 扩展功能，更加安全 |                                            |
| 行为型 | 模板模式   | 豆浆制作         | Spring 中`AbstractApplicationContext` | 统一算法，代码复用 | <font color='orange'>过多不利于维护</font> |
| ~      | 命令模式   | 智能生活         | Spring 中`JdbcTemplate`               | 解耦请求发起与执行 | <font color='red'>复杂</font>              |
| ~      | 访问者模式 | 测评系统         |                                       | 解耦数据结构与操作 | 违背迪米特、依赖倒转                       |
| ~      | 迭代器模式 | 学校院系         | JDK 中`ArrayList`                     | 统一遍历           | <font color='orange'>过多不利于维护</font> |
| ~      | 观察者模式 | 天气预报         | JDK 中`Observable`                    | 动态添加三方       |                                            |
| ~      | 中介者模式 | 智能家庭         |                                       | 封装交互           | <font color='red'>复杂</font>              |
| ~      | 备忘录模式 | 游戏角色状态恢复 |                                       | 方便恢复状态       | 占用资源，消耗内存                         |
| ~      | 解释器模式 | 四则运算         | Spring 中`SpelExpressionParser`       | 可扩展性           | 调试复杂；效率低                           |
| ~      | 状态模式   | APP 抽奖         | 借贷平台                              | 分离状态           | <font color='orange'>过多不利于维护</font> |
| ~      | 策略模式   | 鸭子             | JDK 中`Comparator`                    | 分离不变与变化     | <font color='orange'>过多不利于维护</font> |
| ~      | 职责链模式 | 采购审批         | SpringMVC 中`HandlerExecutionChain`   | 分离请求与处理     | 调试复杂；影响性能                         |

## 【-】简介

### 1、设计模式的重要性

1）软件工程中，设计模式（design pattern）是对软件设计中普遍存在（反复出现）的各种问题，所提出的解决方案。

这个术语是由埃里希.伽玛（Erich Gamma）等人在1990年代从建筑设计领域引入到计算机科学的

2）大厦VS简易房

![image-20210915185536693](images\简介\简介图1.png)

3）拿实际工作经历来说，当一个项目开发完后，如果客户提出增新功能，怎么办？

4）如果项目开发完后，原来程序员离职，你接手维护该项目怎么办？（维护性、可读性、规范性）

5）目前程序员门槛越来越高，一线 IT 公司（大厂），都会问你在实际项目中使用过什么设计模式，怎样使用的，解决了什么问题。

6）设计模式在软件中哪里？面向对象【OO】=》功能模块【设计模式 + 算法（数据结构）】=》框架【多种设计模式】=》架构【服务器集群】

7）如果想成为合格软件工程师，那就花时间来研究下设计模式是非常必要的



### 2、设计模式面试题

**原型设计模式**

- 1）有请使用 UML 类图画出原型模式核心角色

- 2）原型设计模式的深拷贝和浅拷贝是什么，并写出深拷贝的两种方式的源码（重写 clone 方法实现深拷贝、使用序列化来实现深拷贝）

- 3）在 Spring 框架中哪里使用到原型模式，并对源码进行分析

- 4）Spring 中原型 bean 的创建，就是原型模式的应用

- 5）代码分析 + Debug 源码

  ![image-20210913221302650](images\简介\简介图2.png)

**设计模式七大原则**

- 1）<mark>单一职责原则</mark>
- 2）<mark>接口隔离原则</mark>
- 3）<mark>依赖倒转原则</mark>
- 4）<mark>里氏替换原则</mark>
- 5）<mark>开闭原则（OCP）</mark>
- 6）<mark>迪米特法则</mark>
- 7）<mark>合成复用原则</mark>

要求：

- 1）七大设计原则核心思想
- 2）能够以类图的说明设计原则
- 3）在项目实际开发中，你在哪里使用到了 OCP 原则

**状态模式**

金融借贷平台项目：借贷平台的订单，有审核-发布-抢单等等步骤，随着操作的不同，会改变订单的状态，项目中的这个模块实现就会使用到状态模式，请你使用状态模式进行设计，并完成实际代码

问题分析：这类代码难以应对变化，在添加一种状态时，我们需要手动添加 if/else ，在添加一种功能时，要对所有的状态进行判断。因此代码会变得越来越臃肿，并且一旦没有处理某个状态，便会发生极其严重的BUG，难以维护

**解释器设计模式**

- 1）介绍解释器设计模式是什么？

- 2）画出解释器设计模式的 UML 类图，分析设计模式中的各个角色是什么？

  ![image-20210913223111095](images\简介\简介图3.png)

- 3）请说明 Spring 的框架中，哪里使用到了解释器设计模式，并做源码级别的分析

  ![](images\简介\简介图4.png)

**单例设计模式**

单例设计模式一共有几种实现方式？请分别用代码实现，并说明各个实现方式的优点和实点？

单例设计模式一共有8种写法，后面我们会依次讲到

- 1）<mark>饿汉式 两种</mark>
- 2）<mark>懒汉式 三种</mark>
- 3）<mark>双重检查</mark>
- 4）<mark>静态内部类</mark>
- 5）<mark>枚举</mark>

![image-20210913225416112](images\简介\简介图5.png)



### 3、设计模式七大原则

#### 设计模式目的

编写软件过程中，程序员面临着来自<mark>耦合性，内聚性以及可维护性，可扩展性，重用性，灵活性</mark>等多方面的挑战

设计模式是为了让程序（软件），具有更好的

- 1）<mark>可复用性</mark>（即：相同功能的代码，不用多次编写，也叫做代码重用性）
- 2）<mark>可读性</mark>（即：编程规范性，便于其他程序员的阅读和理解）
- 3）<mark>可扩展性</mark>（即：当需要增加新的功能时，非常的方便，也叫做可维护性）
- 4）<mark>可靠性</mark>（即：当我们增加新的功能后，对原来的功能没有影响）
- 5）使程序呈现<mark>高内聚，低耦合</mark>的特性

**分享金句**

设计模式包含了面向对象的精髓，“懂了设计模式，你就懂了面向对象分析和设计（OOA/D）的精要”

Scott Mavers 在其巨著《Effective C++》就曾经说过：C++ 老手和 C++ 新手的区别就是前者手背上有很多伤疤

#### 设计模式七大原则

设计模式原则，其实就是程序员在编程时，应当遵守的原则，也是各种设计模式的基础（即：设计模式为什么这样设计的依据）设计模式

常用的七大原则有：

- 1）<mark>单一职责原则</mark>
- 2）<mark>接口隔离原则</mark>
- 3）<mark>依赖倒转原则</mark>
- 4）<mark>里氏替换原则</mark>
- 5）<mark>开闭原则</mark>
- 6）<mark>迪米特法则</mark>
- 7）<mark>合成复用原则</mark>

#### 3.1、单一职责原则（Single Responsibility Principle）

**基本介绍**

对类来说的，即一个类应该只负责一项职责。如类A负责两个不同职责：职责1，职责2。当职责1需求变更而改变A时，可能造成职责2执行错误，所以需要将类A的粒度分解为A1，A2

**应用实例**

1）以交通工具案例讲解

2）看老师代码演示

3）方案1[分析说明]

```java
public class SingleResponsibility1 {
    public static void main(String[] args) {
        Vehicle vehicle = new Vehicle();
        vehicle.run("汽车");
        vehicle.run("轮船");
        vehicle.run("飞机");
    }
}

/**
 * 方式1的分析
 * 1.在方式1的run方法中，违反了单一职责原则
 * 2.解决的方案非常的简单，根据交通工具运行方法不同，分解成不同类即可
 */
class Vehicle{
    public void run(String type){
        if ("汽车".equals(type)) {
            System.out.println(type + "在公路上运行...");
        } else if ("轮船".equals(type)) {
            System.out.println(type + "在水面上运行...");
        } else if ("飞机".equals(type)) {
            System.out.println(type + "在天空上运行...");
        }
    }
}
```

4）方案2[分析说明]

```java
public class SingleResponsibility2 {
    public static void main(String[] args) {
        RoadVehicle roadVehicle = new RoadVehicle();
        roadVehicle.run("汽车");
        WaterVehicle waterVehicle = new WaterVehicle();
        waterVehicle.run("轮船");
        AirVehicle airVehicle = new AirVehicle();
        airVehicle.run("飞机");
    }
}

/**
 * 方案2的分析
 * 1.遵守单一职责原则
 * 2.但是这样做的改动很大，即将类分解，同时修改客户端
 * 3.改进：直接修改Vehicle类，改动的代码会比较少=>方案3
 */
class RoadVehicle{
    public void run(String type){
        System.out.println(type + "在公路上运行...");
    }
}
class WaterVehicle{
    public void run(String type){
        System.out.println(type + "在水面上运行...");
    }
}
class AirVehicle{
    public void run(String type){
        System.out.println(type + "在天空上运行...");
    }
}
```

- 5）方案3[分析说明]

```java
public class SingleResponsibility3 {
    public static void main(String[] args) {
        Vehicle2 vehicle = new Vehicle2();
        vehicle.run("汽车");
        vehicle.runWater("轮船");
        vehicle.runAir("飞机");
    }
}

/**
 * 方式3的分析
 * 1.这种修改方法没有对原来的类做大的修改，只是增加方法
 * 2.这里虽然没有在类这个级别上遵守单一职责原则，但是在方法级别上，仍然是遵守单一职责
 */
class Vehicle2{
    public void run(String type){
        System.out.println(type + "在公路上运行...");
    }
    public void runWater(String type){
        System.out.println(type + "在水面上运行...");
    }
    public void runAir(String type){
        System.out.println(type + "在天空上运行...");
    }
}
```

**总结**

- 类分解，可能成本较高
- 解决方案：不在类级别上“单一职责”，往下沉，在方法级别上“单一职责”

**注意事项和细节**

- 1）降低类的复杂度，<mark>一个类只负责一项职责</mark>
- 2）提高类的<mark>可读性，可维护性</mark>
- 3）降低变更引起的风险
- 4）通常情况下，我们应当遵守单一职责原则，只有逻辑足够简单，才可以在代码级违反单一职责原则；只有类中方法数量足够少，可以在方法级别保持单一职责原则

####  3.2、接口隔离原则（Interface Segregation Principle）

**基本介绍**

- 1）客户端不应该依赖它不需要的接口，即<mark>一个类对另一个类的依赖应该建立在最小的接口上</mark>
- 2）先看一张图

![image-20211010105008455](images\简介\简介图6.png)

- 3）类 A 通过接口 Interface1 依赖类 B，类 C 通过接口 Interface1 依赖类 D，如果接口 Interface1 对于类 A 和类 C 来说不是最小接口，那么类 B 和类 D 必须去实现他们不需要的方法
- 4）按隔离原则应当这样处理：将接口 Interface1 拆分为独立的几个接口，类 A 和类 C 分别与他们需要的接口建立依赖关系。也就是采用接口隔离原则

**应用实例**

- 1）类 A 通过接口 Interface1 依赖类 B，类 C 通过接口 Interface1 依赖类 D，请编写代码完成此应用实例
- 2）看老师代码

![image-20211010110122468](images\简介\简介图7.png)

```java
interface Interface1 {
    void operation1();

    void operation2();

    void operation3();

    void operation4();

    void operation5();
}

class B implements Interface1 {

    @Override
    public void operation1() {
        System.out.println("B 实现了 operation1");
    }

    @Override
    public void operation2() {
        System.out.println("B 实现了 operation2");
    }

    @Override
    public void operation3() {
        System.out.println("B 实现了 operation3");
    }

    @Override
    public void operation4() {
        System.out.println("B 实现了 operation4");
    }

    @Override
    public void operation5() {
        System.out.println("B 实现了 operation5");
    }
}

class D implements Interface1 {

    @Override
    public void operation1() {
        System.out.println("D 实现了 operation1");
    }

    @Override
    public void operation2() {
        System.out.println("D 实现了 operation2");
    }

    @Override
    public void operation3() {
        System.out.println("D 实现了 operation3");
    }

    @Override
    public void operation4() {
        System.out.println("D 实现了 operation4");
    }

    @Override
    public void operation5() {
        System.out.println("D 实现了 operation5");
    }
}

/**
 * A类通过接口Interface1依赖（使用）B类，但是只会用到1，2，3方法
 */
class A {
    public void depend1(Interface1 i) {
        i.operation1();
    }

    public void depend2(Interface1 i) {
        i.operation2();
    }

    public void depend3(Interface1 i) {
        i.operation3();
    }
}

/**
 * C类通过接口Interface1依赖（使用）D类，但是只会用到1，4，5方法
 */
class C {
    public void depend1(Interface1 i) {
        i.operation1();
    }

    public void depend4(Interface1 i) {
        i.operation4();
    }

    public void depend5(Interface1 i) {
        i.operation5();
    }
}
```

**问题与改进**

- 1）类 A 通过接口 Interface1 依赖类 B，类 C 通过接口 Interface1 依赖类 D，如果接口 Interface1 对于类 A 和类 C 来说不是最小接口，那么类 B 和类 D 必须去实现他们不需要的方法
- 2）将接口 Interface1 拆分为独立的几个接口，类 A 和类 C 分别与他们需要的接口建立依赖关系。也就是采用接口隔离原则
- 3）接口 Interface1 中出现的方法，根据实际情况拆分为三个接口 
- 4）代码实现

![image-20211010134926811](images\简介\简介图8.png)

```java
interface Interface1 {
    void operation1();
}

interface Interface2 {
    void operation2();

    void operation3();
}

interface Interface3 {
    void operation4();

    void operation5();
}

class B implements Interface1, Interface2 {

    @Override
    public void operation1() {
        System.out.println("B 实现了 operation1");
    }

    @Override
    public void operation2() {
        System.out.println("B 实现了 operation2");
    }

    @Override
    public void operation3() {
        System.out.println("B 实现了 operation3");
    }
}

class D implements Interface1, Interface3 {

    @Override
    public void operation1() {
        System.out.println("D 实现了 operation1");
    }

    @Override
    public void operation4() {
        System.out.println("D 实现了 operation4");
    }

    @Override
    public void operation5() {
        System.out.println("D 实现了 operation5");
    }
}

/**
 * A类通过接口Interface1,Interface2依赖（使用）B类，但是只会用到1，2，3方法
 */
class A {
    public void depend1(Interface1 i) {
        i.operation1();
    }

    public void depend2(Interface2 i) {
        i.operation2();
    }

    public void depend3(Interface2 i) {
        i.operation3();
    }
}

/**
 * C类通过接口Interface1,Interface3依赖（使用）D类，但是只会用到1，4，5方法
 */
class C {
    public void depend1(Interface1 i) {
        i.operation1();
    }

    public void depend4(Interface3 i) {
        i.operation4();
    }

    public void depend5(Interface3 i) {
        i.operation5();
    }
}
```

#### 3.3、依赖倒转原则（Dependence Inversion Principle）

**基本介绍**

- 1）<mark>高层模块不应该依赖低层模块，二者都应该依赖其抽象</mark>
- 2）抽象不应该依赖细节，<mark>细节应该依赖抽象</mark>
- 3）依赖倒转（倒置）的中心思想是<mark>面向接口编程</mark>
- 4）依赖倒转原则是基于这样的设计理念：相对于细节的多变性，抽象的东西要稳定的多。以抽象为基础搭建的架构比以细节为基础的架构要稳定的多。<mark>在java中，抽象指的是接口或抽象类，细节就是具体的实现类</mark>
- 5）使用接口或抽象类的目的是<mark>制定好规范</mark>，而不涉及任何具体的操作，把展现细节的任务交给他们的实现类去完成

**应用实例**

1）请编程完成 Person 接收消息的功能

2）实现方案 1 + 分析说明

```java
/**
 * 方式1分析
 * 1.简单，比较容易想到
 * 2.如果我们获取的对象是微信，短信等等，则新增类，同时 Peron也要增加相应的接收方法
 * 3.解决思路：
 * 引入一个抽象的接口IReceiver，表示接收者，这样Person类与接口IReceiver发生依赖
 * 因为Email，Weixin等等属于接收的范围，他们各自实现IReceiver接口就ok，这样我们就符号依赖倒转原则
 */
class Email {
    public String getInfo() {
        return "电子邮件信息：Hello World！";
    }
}

class Person {
    public void receive(Email email) {
        System.out.println(email.getInfo());
    }
}
```

3）实现方案 2 + 分析说明 

```java
interface IReceiver {
    String getInfo();
}

class Email implements IReceiver {
    @Override
    public String getInfo() {
        return "电子邮件信息：Hello World！";
    }
}

class Weixin implements IReceiver {
    @Override
    public String getInfo() {
        return "微信消息：Hello World！";
    }
}

class ShortMessage implements IReceiver {
    @Override
    public String getInfo() {
        return "短信信息：Hello World！";
    }
}

class Person {
    public void receive(IReceiver receiver) {
        System.out.println(receiver.getInfo());
    }
}
```

依赖关系传递的三种方式

**1）接口传递**

```java
//方式1：通过接口传递实现依赖
//开关的接口
interface IOpenAndClose {
    void open(ITV tv);//抽象方法，接收接口
}
//ITV接口
interface ITV {
    void play();
}
//实现接口
class OpenAndClose implements IOpenAndClose {
    public void open(ITV tv){
        tv.play();
    }
}
```

**2）构造方法传递**

```java
//方式2：通过构造函数实现依赖
//开关的接口
interface IOpenAndClose {
    void open();//抽象方法
}
//ITV接口
interface ITV {
    public void play();
}
//实现接口
class OpenAndClose implements IOpenAndClose {
    private ITV tv; // 成员
    
    public OpenAndClose(ITV tv){ // 构造器
        this.tv = tv;
    }
    
    public void open(){
        this.tv.play();
    }
}
```

**3）setter 方式传递**

```java
//方式3，通过setter方法传递
interface IOpenAndClose{
    void open();//抽象方法
    void setTv(ITV tv);
}
//ITV接口
interface ITV{
    void play();
}
//实现接口
class OpenAndClose implements IOpenAndClose{
    private ITV tv;
    public void setTv(ITV tv){
        this.tv=tv;
    }
    public void open(){
        this.tv.play();
    }
}
```

**注意事项和细节**

- 1）<mark>低层模块尽量都要有抽象类或接口</mark>，或者两者都有，程序稳定性更好
- 2）<mark>变量的声明类型尽量是抽象类或接口</mark>，这样我们的变量引用和实际对象间，就存在一个缓冲层，利于程序扩展和优化
- 3）<mark>继承时遵循里氏替换原则</mark>

#### 3.4、里氏替换原则（Liskov Substitution Principle）

**OO 中继承性的思考和说明**

- 1）继承包含这样一层含义：父类中凡是已经实现好的方法，实际上是在<mark>设定规范和契约</mark>，虽然它不强制要求所有的子类必须遵循这些契约，但是如果子类对这些已经实现的方法任意修改，就会对整个继承体系造成破坏
- 2）<mark>继承在给程序设计带来便利的同时，也带来了弊端。比如使用继承会给程序带来侵入性，程序的可移植性降低，增加对象间的耦合性</mark>，如果一个类被其他的类所继承，则当这个类需要修改时，必须考虑到所有的子类，并且父类修改后，所有涉及到子类的功能都有可能产生故障
- 3）问题提出：在编程中，<mark>如何正确使用继承？=>里氏替换原则</mark>

**基本介绍**

- 1）里氏替换原则在1988年，由麻省理工学院的以为姓里的女士提出的
- 2）如果对每个类型为 T1 的对象 o1，都有类型为 T2 的对象 o2，使得以 T1 定义的所有程序 P 在所有的对象 o1 都代换成 o2 时，程序 P 的行为没有发生变化，那么类型 T2 是类型 T1 的子类型。换句话说，<mark>所有引用基类的地方必须能透明地使用其子类的对象</mark>
- 3）在使用继承时，遵循里氏替换原则，<mark>在子类中尽量不要重写父类的方法</mark>
- 4）里氏替换原则告诉我们，继承实际上让两个类耦合性增强了，在适当的情况下，<mark>可以通过聚合、组合、依赖来解决问题</mark>

**一个程序引出的问题和思考**

先看个程序，思考下问题和解决思路

```java
public void test() {
    A a = new A();
    System.out.println("11-3=" + a.func1(11, 3));
    System.out.println("1-8=" + a.func1(1, 8));
    System.out.println("---------------------");

    B b = new B();
    System.out.println("11-3=" + b.func1(11, 3));
    System.out.println("1-8=" + b.func1(1, 8));
    System.out.println("11+3+9=" + b.func2(11, 3));
}

class A {
    //返回两个数的差
    public int func1(int num1, int num2) {
        return num1 - num2;
    }
}

class B extends A {
    @Override
    public int func1(int num1, int num2) {
        return num1 + num2;
    }

    //增加了一个新功能：完成两个数相加，然后和9求和
    public int func2(int num1, int num2) {
        return func1(num1, num2) + 9;
    }
}
```

**解决方法**

1）我们发现原来运行正常的相减功能发生了错误。原因就是类 B 无意中重写了父类的方法，造成原有功能出现错误。在实际编程中，我们常常会通过重写父类的方法完成新的功能，这样写起来虽然简单，但整个继承体系的复用性会比较差。特别是运行多态比较频繁的时候

2）通用的做法是：<mark>原来的父类和子类都继承一个更通俗的基类，原有的继承关系去掉，采用依赖、聚合、组合等关系代替</mark>

3）改进方案

![image-20211010151710127](images\简介\简介图9.png)

```java
//创建一个更加基础的基类
class Base {
    //将更基础的成员和方法写到Base类中
}

class A extends Base {
    //返回两个数的差
    public int func1(int num1, int num2) {
        return num1 - num2;
    }
}

class B extends Base {
    //如果B需要使用A类的方法，使用组合关系
    private A a;

    public int func1(int num1, int num2) {
        return num1 + num2;
    }

    //增加了一个新功能：完成两个数相加，然后和9求和
    public int func2(int num1, int num2) {
        return func1(num1, num2) + 9;
    }

    public int func3(int num1, int num2) {
        return this.a.func1(num1, num2);
    }
}
```

#### 3.5、开闭原则（Open Closed Principle）

**基本介绍**

- 1）开闭原则是编程中<mark>最基础、最重要</mark>的设计原则
- 2）一个软件实体如类、模块和函数应该<mark>对扩展开放（对提供者而言），对修改关闭（对使用者而言）</mark>。<mark>用抽象构建框架，用实现扩展细节</mark>
- 3）当软件需要变化时，尽量<mark>通过扩展软件实体的行为来实现变化，而不是通过修改已有的代码来实现变化</mark>
- 4）编程中遵循其它原则，以及使用<mark>设计模式的目的就是遵循开闭原则</mark>

**看一段代码**

一个画图形的功能，类图设计如下：

![image-20211010153848077](images\简介\简介图10.png)

```java
class GraphicEditor {
    public void drawShape(Shape s) {
        if (s.m_type == 1) {
            drawRectangle(s);
        } else if (s.m_type == 2) {
            drawCircle(s);

        } else if (s.m_type == 3) {
            drawTriangle(s);
        }
    }

    public void drawRectangle(Shape r) {
        System.out.println("矩形");
    }

    public void drawCircle(Shape r) {
        System.out.println("圆形");
    }

    public void drawTriangle(Shape r) {
        System.out.println("三角形");
    }
}

class Shape {
    public int m_type;
}

class RectangleShape extends Shape {
    RectangleShape() {
        m_type = 1;
    }
}

class CircleShape extends Shape {
    CircleShape() {
        m_type = 2;
    }
}

class TriangleShape extends Shape {
    TriangleShape() {
        m_type = 3;
    }
}
```

**方式 1 的优缺点**

- 1）优点是比较好理解，简单易操作
- 2）缺点是违反了设计模式的 OCP 原则，即对扩展开放（提供方），对修改关闭（使用方）。即当我们给类增加新功能的时喉，尽量不修改代码，或者尽可能少修改代码
- 3）比如我们这时要新增加一个图形种类，我们需要做如下修改，修改的地方较多4）代码演示

**方式 1 的改进的思路分析**

把创建 Shape 类做成抽象类，并提供一个抽象的 draw 方法，让子类去实现即可

这样我们有新的图形种类时，只需要让新的图形类继承 Shape，并实现 draw 方法即可

使用方的代码就不需要修改，满足了开闭原则

**方式 2 来解决**

1）方式 2 的设计方案：定义一个 Shape 抽象类

2）看代码示例

```java
class GraphicEditor {
    public void drawShape(Shape s) {
        s.draw();
    }
}

abstract class Shape {
    int m_type;

    public abstract void draw();
}

class RectangleShape extends Shape {
    RectangleShape() {
        m_type = 1;
    }

    @Override
    public void draw() {
        System.out.println("矩形");
    }
}

class CircleShape extends Shape {
    CircleShape() {
        m_type = 2;
    }

    @Override
    public void draw() {
        System.out.println("圆形");
    }
}

class TriangleShape extends Shape {
    TriangleShape() {
        m_type = 3;
    }

    @Override
    public void draw() {
        System.out.println("三角形");
    }
}
```

3）从方式 2 看，代码满足了 OCP 原则

#### 3.6、迪米特法则（Demeter Principle）

**基本介绍**

- 1）一个对象应该对其他对象保持最少的了解
- 2）类与类关系越密切，耦合度越大
- 3）迪米特法则又叫<mark>最少知道原则</mark>，即一个类对自己依赖的类知道的越少越好。也就是说，<mark>对于被依赖的类不管多么复杂，都尽量将逻辑封装在类的内部。对外除了提供的 public 方法，不对外泄露任何信息</mark>
- 4）迪米特法则还有个更简单的定义：只与直接的朋友通信
- 5）<mark>直接的朋友</mark>：每个对象都会与其他对象有耦合关系，只要两个对象之间有耦合关系，我们就说这两个对象之间是朋友关系。耦合的方式很多：依赖、关联、组合、聚合等。其中，我们称出现<mark>成员变量，方法参数，方法返回值中的类为直接的朋友，而出现在局部变量中的类不是直接的朋友</mark>。也就是说，<mark>陌生的类最好不要以局部变量的形式出现在类的内部</mark>

**应用实例**

1）有一个学校，下属有各个学院和总部，现要求打印出学校总部员工 ID 和学院员工的 id

2）编程实现上面的功能，看代码演示

```java
//总部员工
class Employee {
    private String id;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}

//学院员工
class CollegeEmployee {
    private String id;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}

//学院员工管理 类
class CollegeManager {
    public List<CollegeEmployee> getAllEmployee() {
        List<CollegeEmployee> list = new ArrayList<>();
        CollegeEmployee collegeEmployee;
        for (int i = 0; i < 10; i++) {
            collegeEmployee = new CollegeEmployee();
            collegeEmployee.setId("学院员工id=" + i);
            list.add(collegeEmployee);
        }
        return list;
    }
}

//总部员工管理类
class SchoolManager {
    public List<Employee> getAllEmployee() {
        List<Employee> list = new ArrayList<>();
        Employee employee;
        for (int i = 0; i < 5; i++) {
            employee = new Employee();
            employee.setId("总部员工id=" + i);
            list.add(employee);
        }
        return list;
    }

    public void printAllEmployee(CollegeManager sub) {
        System.out.println("--------------学院员工--------------");
        List<CollegeEmployee> list1 = sub.getAllEmployee();
        for (CollegeEmployee collegeEmployee : list1) {
            System.out.println(collegeEmployee.getId());
        }
        System.out.println("---------------总部员工-------------");
        List<Employee> list2 = this.getAllEmployee();
        for (Employee employee : list2) {
            System.out.println(employee.getId());
        }
    }
}
```

**应用实例改进**

- 1）前面设计的问题在于 SchoolManager 中，CollegeEmployee 类并不是 SchoolManager 类的直接朋友（分析）
- 2）按照迪米特法则，应该避免类中出现这样非直接朋友关系的耦合
- 3）对代码按照迪米特法则进行改进（看老师演示）

**注意事项和细节**

- 1）迪米特法则的核心是<mark>降低类之间的耦合</mark>
- 2）但是注意：由于每个类都减少了不必要的依赖，因此迪米特法则只是要求降低类间（对象间）耦合关系，并不是要求完全没有依赖关系

#### 3.7、合成复用原则（Composite Reuse Principle）

**基本介绍**

原则是<mark>尽量使用合成/聚合的方式，而不是使用继承</mark>

![image-20211010164923202](images\简介\简介图11.png)

#### 设计原则核心思想

- 1）找出应用中<mark>可能需要变化之处，把它们独立出来</mark>，不要和那些不需要变化的代码混在一起
- 2）<mark>针对接口编程</mark>，而不是针对实现编程
- 3）为了交互对象之间的<mark>松耦合</mark>设计而努力



### 4、UML 类图

#### UML 基本介绍

- 1）UML—-Unified modeling language UML（<mark>统一建模语言</mark>），是一种用于软件系统分析和设计的语言工具，它用于帮助软件开发人员进行思考和记录思路的结果

- 2）UML 本身是一套符号的规定，就像数学符号和化学符号一样，这些符号用于描述软件模型中的各个元素和他们之间的关系，比如类、接口、实现、泛化、依赖、组合、聚合等

![image-20211010170115892](images\简介\简介图12.png)

- 3）使用 UML 来建模，常用的工具有 Rational Rose，也可以使用一些插件来建模

![image-20211010165611560](images\简介\简介图13.png)

#### UML 图

画 UML 图与写文章差不多，都是把自己的思想描述给别人看，关键在于思路和条理，UML图分类：

- 1）<mark>用例图</mark>（use case）
- 2）<mark>静态结构图：**类图**、对象图、包图、组件图、部署图</mark>
- 3）<mark>动态行为图：交互图（时序图与协作图）、状态图、活动图</mark>

**说明**

- 1）类图是描述类与类之间的关系的，是 UML 图中最核心的
- 2）在讲解设计模式时，我们必然会使用类图，为了让学员们能够把设计模式学到位，需要先给大家讲解类图
- 3）温馨提示：如果已经掌握 UML 类图的学员，可以直接听设计模式的章节

#### UML 类图

- 1）用于描述系统中的类（对象）本身的组成和类（对象）之间的各种静态关系
- 2）类之间的关系：<mark>依赖、泛化（继承）、实现、关联、聚合与组合</mark>
- 3）类图简单举例

```java
public class Person {
    private Integer id;
    private String name;
    public void setName(String name){
        this.name = name;
    }
    public String getName(){
        return name;
    }
}
```

![image-20211010171055294](images\简介\简介图14.png)

#### 4.1、类图——依赖（dependence）

<mark>只要是在类中用到了对方，那么他们之间就存在依赖关系</mark>。如果没有对方，连编译都通过不了

```java
public class PersonServiceBean {
    // 类的成员属性
    private PersonDao personDao;

    // 方法接收的参数类型
    public void save(Person person) {
    }

    // 方法的返回类型
    public IDCard getIDCard(Integer personid) {
        return null;
    }

    // 方法中使用到
    public void modify() {
        Department department = new Department();
    }

}
```

**UML 类图**

![Package dependence](images\简介\简介图15.png)

**小结**

- 1）类中用到了对方
- 2）类的成员属性
- 3）方法的返回类型
- 4）方法接收的参数类型
- 5）方法中使用到

#### 4.2、类图——泛化（Generalization）

<mark>泛化关系实际上就是继承关系</mark>，它是依赖关系的特例

```java
public abstract class DaoSupport {
    public void save(Object entity) {
    }

    public void delete(Object id) {
    }
}
public class PersonServiceBean extends DaoSupport {
}
```

**UML 类图**

![Package generalization](images\简介\简介图16.png)

**小结**

- 1）泛化关系实际上就是继承关系
- 2）如果 A 类继承了 B 类，我们就说 A 和 B 存在泛化关系

#### 4.3、类图——实现（Implementation）

<mark>实现关系实际上就是 A 类实现 B 类</mark>，它是依赖关系的特例

```java
public interface PersonService {
    void delete(Integer id);
}
public class PersonServiceBean implements PersonService {
    @Override
    public void delete(Integer id) {
        System.out.println("delete...");
    }
}
```

**UML 类图**

![Package implementation](images\简介\简介图17.png)

#### 4.4、类图——关联（Association）

<mark>关联关系实际上就是类与类之间的联系</mark>，它是依赖关系的特例

- <mark>关联具有导航性</mark>：即双向关系或单向关系
- <mark>关系具有多重性</mark>：如“1”（表示有且仅有一个），“0...”（表示0个或者多个），“0，1”（表示0个或者一个），“n...m”（表示n到m个都可以），“m...*”（表示至少m个）

![image-20211011211125957](images\简介\简介图18.png)

##### 单向一对一关系

```java
public class Person {
	private IDCard card;
}
public class IDCard {}
```

**UML 类图**

![Package unidirectional121](images\简介\简介图19.png)

##### 双向一对一关系

```java
public class Person {
	private IDCard card;
}
public class IDCard {
	private Person person;
}
```

**UML 类图**

![Package bidirectional121](images\简介\简介图20.png)

#### 4.5、类图——聚合（Aggregation）

<mark>聚合关系表示的是整体和部分的关系，整体与部分可以分开</mark>。聚合关系是关联关系的特例，所以它具有关联的导航性与多重性

如：一台电脑由键盘（keyboard）、显示器（monitor），鼠标等组成；组成电脑的各个配件是可以从电脑上分离出来的，使用带空心菱形的实线来表示：

![image-20211011211749247](images\简介\简介图21.png)

```java
public class Mouse {}
public class Monitor {}
public class Computer {
    private Mouse mouse;
    private Monitor monitor;

    public void setMouse(Mouse mouse) {
        this.mouse = mouse;
    }

    public void setMonitor(Monitor monitor) {
        this.monitor = monitor;
    }
}
```

**UML 类图**

![Package aggregation](images\简介\简介图22.png)

#### 4.6、类图——组合（Composition）

<mark>组合关系也是整体与部分的关系，但是整体与部分不可以分开</mark>

如果我们认为 Mouse、Monitor 和 Computer 是不可分离的，则升级为组合关系

```java
public class Mouse {}
public class Monitor {}
public class Computer {
    private Mouse mouse = new Mouse();
    private Monitor monitor = new Monitor();
}
```

**UML 类图**

![composition](images\简介\简介图23.png)

再看一个案例，在程序中我们定义实体：Person 与 IDCard、Head，那么 Head 和 Person 就是组合，IDCard 和 Person 就是聚合

```java
public class IDCard{}
public class Head{}
public class Person{
    private IDCard card;
    private Head head = new Head();
}
```

**UML 类图**

![image-20211011215441995](images\简介\简介图24.png)

但是如果在程序中，Person 实体中定义了对 IDCard 进行级联删除，即删除 Person 时连同 IDCard 一起删除，那么 IDCard 和 Person 就是组合了



### 5、设计模式概述和分类

#### 5.1、设计模式层次

- 1）第1层：刚开始学编程不久，听说过什么是设计模式
- 2）第2层：有很长时间的编程经验，自己写了很多代码，其中用到了设计模式，但是自己却不知道
- 3）第3层：学习过了设计模式，发现自己已经在使用了，并且发现了一些新的模式挺好用的
- 4）第4层：阅读了很多别人写的源码和框架，在其中看到别人设计模式，并且能够领会设计模式的精妙和带来的好处
- 5）第5层：代码写着写着，自己都没有意识到使用了设计模式，并且熟练的写了出来

#### 5.2、设计模式介绍

- 1）设计模式是程序员在面对同类软件工程设计问题所总结出来的有用的经验。<mark>模式不是代码，而是某类问题的通用解决方案</mark>，设计模式（Design pattern）代表了<mark>最佳实践</mark>。这些解决方案是众多软件开发人员经过相当长的一段时间的试验和错误总结出来的
- 2）设计模式的本质<mark>提高软件的维护性、通用性和扩展性，并降低软件的复杂度</mark>
- 3）《设计模式》是经典的书，作者是 Erich Gamma、Richard Helm、Ralph Johnson 和 John Vlissides Design（俗称“四人组GOF”）
- 4）设计模式并不局限于某种语言，Java、PHP、C++ 都有设计模式

#### 5.3、设计模式类型

设计模式分为至种类型，共 23 种

- 1）**创建型模式**：<mark>单例模式</mark>、抽象工厂模式、原型模式、建造者模式、<mark>工厂模式</mark>
- 2）**结构型模式**：适配器模式、桥接模式、<mark>装饰模式</mark>、组合模式、外观模式、享元模式、<mark>代理模式</mark>
- 3）**行为型模式**：模版方法模式、命令模式、访问者模式、迭代器模式、<mark>观察者模式</mark>、中介者模式、备忘录模式、解释器模式（Interpreter 模式）、状态模式、策略模式、职责链模式（责任链模式）

注意：不同的书籍上对分类和名称略有差别



## 【1】单例模式

### 1、介绍

所谓类的单例设计模式，就是采取一定的方法保证在整个的软件系统中，对某个类<mark>只能存在一个对象实例</mark>，并且该类只提供一个取得其对象实例的方法（静态方法）

比如 Hibernate 的 SessionFactory，它充当数据存储源的代理，并负责创建 Session 对象。SessionFactory 并不是轻量级的，一般情况下，一个项目通常只需要一个 SessionFactory 就够，这是就会使用到单例模式



### 2、八种方式

- 1）<mark>饿汉式（静态常量）</mark>
- 2）<mark>饿汉式（静态代码块）</mark>
- 3）<mark>懒汉式（线程不安全）</mark>
- 4）<mark>懒汉式（线程安全，同步方法）</mark>
- 5）<mark>懒汉式（线程安全，同步代码块）</mark>
- 6）<mark>双重检查</mark>
- 7）<mark>静态内部类</mark>
- 8）<mark>枚举</mark>



#### 2.1、饿汉式（静态常量）

- 1）构造器私有化（防止外部 new）
- 2）类的内部创建对象
- 3）向外暴露一个静态的公共方法 getInstance

```java
public class Singleton {
    // 1、构造器私有化
    private Singleton() {
    }

    // 2、类的内部创建对象
    private static final Singleton instance = new Singleton();

    // 3、向外暴露一个静态的公共方法
    public static Singleton getInstance() {
        return instance;
    }
}
```

**优缺点**

- 1）优点：这种写法比较简单，就是在类装载的时候就完成实例化。<mark>避免了线程同步问题</mark>
- 2）缺点：在类装载的时候就完成实例化，<mark>没有达到 Lazy Loading 的效果</mark>。如果从始至终从未使用过这个实例，则会<mark>造成内存的浪费</mark>
- 3）这种方式基于 classloder 机制避免了多线程的同步问题。不过，instance 在类装载时就实例化，在单例模式中大多数都是调用getlnstance 方法，但是导致类装载的原因有很多种，因此不能确定有其他的方式（或者其他的静态方法）导致类装载，这时候初始化 instance 就没有达到 Lazy loading 的效果
- 4）结论：这种单例模式可用，可能造成内存浪费



#### 2.2、饿汉式（静态代码块）

- 1）构造器私有化
- 2）类的内部声明对象
- 3）在静态代码块中创建对象
- 4）向外暴露一个静态的公共方法

```java
public class Singleton {
    // 1、构造器私有化
    private Singleton() {
    }

    // 2、类的内部声明对象
    private static Singleton instance;

    // 3、在静态代码块中创建对象
    static {
        instance = new Singleton();
    }

    // 4、向外暴露一个静态的公共方法
    public static Singleton getInstance() {
        return instance;
    }
}
```

**优缺点**

- 1）这种方式和上面的方式其实类似，只不过将类实例化的过程放在了静态代码块中，也是在类装载的时候，就执行静态代码块中的代码，初始化类的实例。优缺点和上面是一样的。
- 2）结论：这种单例模式可用，但是可能造成内存浪费



#### 2.3、懒汉式（线程不安全）

- 1）构造器私有化
- 2）类的内部创建对象
- 3）向外暴露一个静态的公共方法，当使用到该方法时，才去创建 instance

```java
// 1、构造器私有化
private Singleton() {
}

// 2、类的内部声明对象
private static Singleton instance;

// 3、向外暴露一个静态的公共方法，当使用到该方法时，才去创建 instance
public static Singleton getInstance() {
    if (instance == null) {
        instance = new Singleton();
    }
    return instance;
}
```

**优缺点**

- 1）<mark>起到了 Lazy Loading 的效果，但是只能在单线程下使用</mark>
- 2）如果在多线程下，一个线程进入了判断语句块，还未来得及往下执行，另一个线程也通过了这个判断语句，这时便会产生多个实例
- 3）结论：在实际开发中，不要使用这种方式



#### 2.4、懒汉式（线程安全，同步方法）

- 1）构造器私有化
- 2）类的内部创建对象
- 3）向外暴露一个静态的公共方法，加入同步处理的代码，解决线程安全问题

```java
public class Singleton {
    // 1、构造器私有化
    private Singleton() {
    }

    // 2、类的内部声明对象
    private static Singleton instance;

    // 3、向外暴露一个静态的公共方法，加入同步处理的代码，解决线程安全问题
    public static synchronized Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```

**优缺点**

- 1）<mark>解决了线程不安全问题</mark>
- 2）<mark>效率太低</mark>了，每个线程在想获得类的实例时候，执行`getlnstance()`方法都要进行同步。而其实这个方法只执行一次实例化代码就够了，后面的想获得该类实例，直接`return`就行了。方法进行同步效率太低
- 3）结论：在实际开发中，不推荐使用这种方式



#### 2.5、懒汉式（线程不安全，同步代码块）

- 1）构造器私有化
- 2）类的内部创建对象
- 3）向外暴露一个静态的公共方法，加入同步处理的代码块

```java
public class Singleton {
    // 1、构造器私有化
    private Singleton() {
    }

    // 2、类的内部声明对象
    private static Singleton instance;

    // 3、向外暴露一个静态的公共方法，加入同步处理的代码，解决线程安全问题
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                instance = new Singleton();
            }
        }
        return instance;
    }
}
```

**优缺点**

- 1）这种方式，本意是想对第四种实现方式的改进，因为前面同步方法效率太低，改为同步产生实例化的的代码块
- 2）但是这种同步并<mark>不能起到线程同步的作用</mark>。跟第3种实现方式遇到的情形一致，假如一个线程进入了判断语句块，还未来得及往下执行，另一个线程也通过了这个判断语句，这时便会产生多个实例
- 3）结论：在实际开发中，不能使用这种方式



#### 2.6、双重检查

- 1）构造器私有化
- 2）类的内部创建对象，同时用`volatile`关键字修饰修饰
- 3）向外暴露一个静态的公共方法，加入同步处理的代码块，并进行双重判断，解决线程安全问题

```java
public class Singleton {
    // 1、构造器私有化
    private Singleton() {
    }

    // 2、类的内部声明对象，同时用`volatile`关键字修饰修饰
    private static volatile Singleton instance;

    // 3、向外暴露一个静态的公共方法，加入同步处理的代码块，并进行双重判断，解决线程安全问题
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}
```

**优缺点**

- 1）Double-Check 概念是多线程开发中常使用到的，我们进行了两次检查，这样就可以保证线程安全了
- 2）这样实例化代码只用执行一次，后面再次访问时直接 return 实例化对象，也避免的反复进行方法同步
- 3）<mark>线程安全；延迟加载；效率较高</mark>
- 4）结论：在实际开发中，推荐使用这种单例设计模式



#### 2.7、静态内部类

- 1）构造器私有化
- 2）定义一个静态内部类，内部定义当前类的静态属性
- 3）向外暴露一个静态的公共方法

```java
public class Singleton {
    // 1、构造器私有化
    private Singleton() {
    }

    // 2、定义一个静态内部类，内部定义当前类的静态属性
    private static class SingletonInstance {
        private static final Singleton instance = new Singleton();
    }

    // 3、向外暴露一个静态的公共方法
    public static Singleton getInstance() {
        return SingletonInstance.instance;
    }
}
```

**优缺点**

- 1）这种方式采用了类装载的机制，来保证初始化实例时只有一个线程
- 2）静态内部类方式在 Singleton 类被装载时并不会立即实例化，而是在需要实例化时，调用`getlnstance`方法，才会装载Singletonlnstance 类，从而完成 Singleton 的实例化
- 3）类的静态属性只会在第一次加载类的时候初始化，JVM帮助我们保证了线程的安全性，在类进行初始化时，别的线程是无法进入的
- 4）优点：<mark>避免了线程不安全</mark>，利用静态内部类特点实现<mark>延迟加载，效率高</mark>
- 5）结论：推荐使用



#### 2.8、枚举

```java
public enum Singleton {
    INSTANCE;

    public void sayHello() {
        System.out.println("Hello World");
    }
}
```

**优缺点**

- 1）这借助 JDK1.5 中添加的枚举来实现单例模式。不仅能<mark>避免多线程同步问题，而且还能防止反序列化重新创建新的对象</mark>
- 2）这种方式是 Effective Java 作者 Josh Bloch 提倡的方式
- 3）结论：推荐使用



### 3、JDK 源码分析

JDK中 java.lang.Runtime 就是经典的单例模式

![image-20211012225547978](images\单例模式\单例模式图1.png)



### 4、注意事项和细节说明

- 1）单例模式保证了系统内存中该类只存在一个对象，节省了系统资源，对于一些需要频繁创建销毁的对象，使用单例模式可以提高系统性能
- 2）当想实例化一个单例类的时候，必须要记住使用相应的获取对象的方法，而不是使用 new
- 3）单例模式使用的场景：<mark>需要频繁的进行创建和销毁的对象</mark>、<mark>创建对象时耗时过多或耗费资源过多但又经常用到的对象</mark>（即：重量级对象）、<mark>工具类对象</mark>、<mark>频繁访问数据库或文件的对象</mark>（比如数据源、session 工厂等）



### 5、小结

虽然上述提到的概念中，将<mark>双重检查、静态内部类、枚举</mark>三种方式的单例模式单独列举出来说明，但个人觉得本质也可以归类到饿汉式和懒汉式中；另外，同步代码块虽然上述中归类到线程安全，实际上并不是线程安全的

总结如下

- |——饿汉式：静态常量、静态代码块、枚举（本质就是静态常量）
- |——懒汉式
  - |——线程不安全：一次检查、同步代码块
  - |——线程安全：同步方法、双重检查、静态内部类

|  分类  | 方式       |       懒加载       |      线程安全      |        效率        |        内存        | 推荐指数（仅供参考） |
| :----: | :--------- | :----------------: | :----------------: | :----------------: | :----------------: | :------------------: |
| 饿汉式 | 静态变量   |        :x:         | :heavy_check_mark: | :heavy_check_mark: |        :x:         |     :star::star:     |
|   ~    | 静态代码块 |        :x:         | :heavy_check_mark: | :heavy_check_mark: |        :x:         |     :star::star:     |
|   ~    | 枚举       |        :x:         | :heavy_check_mark: | :heavy_check_mark: |        :x:         |  :star::star::star:  |
| 懒汉式 | 线程不安全 | :heavy_check_mark: |        :x:         | :heavy_check_mark: | :heavy_check_mark: |        :star:        |
|   ~    | 同步代码块 | :heavy_check_mark: |        :x:         | :heavy_check_mark: | :heavy_check_mark: |       不要使用       |
|   ~    | 同步方法   | :heavy_check_mark: | :heavy_check_mark: |        :x:         | :heavy_check_mark: |        :star:        |
|   ~    | 双重检查   | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |  :star::star::star:  |
|   ~    | 静态内部类 | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |  :star::star::star:  |

## 【2】工厂模式

**看一个具体的需求**

看一个披萨的项目：要便于披萨种类的扩展，要便于维护

- 1）披萨的种类很多（比如 GreekPizz、CheesePizz 等）
- 2）披萨的制作有 prepare、bake、cut、box
- 3）完成披萨店订购功能



**传统方式**

**UML 类图**

![image-20211013212910916](images\工厂模式\工厂模式图1.png)

**核心代码**

```java
public abstract class Pizza {
    protected String name;

    public void setName(String name) {
        this.name = name;
    }

    public abstract void prepare();

    public void bake() {
        System.out.println(name + " baking...");
    }

    public void cut() {
        System.out.println(name + " cutting...");
    }

    public void box() {
        System.out.println(name + " boxing...");
    }
}

//希腊风味披萨
public class GreekPizza extends Pizza {
    @Override
    public void prepare() {
        setName("GreekPizza");
        System.out.println(name + " preparing...");
    }
}

// 奶酪披萨
public class CheesePizza extends Pizza {
    @Override
    public void prepare() {
        setName("CheesePizza");
        System.out.println(name + " preparing...");
    }
}

public class OrderPizza {
    public OrderPizza() {
        Pizza pizza = null;
        String orderType;
        do {
            orderType = getType();
            if ("cheese".equals(orderType)) {
                pizza = new CheesePizza();
            } else if ("greek".equals(orderType)) {
                pizza = new GreekPizza();
            } else {
                System.out.println("输入类型错误，程序退出");
                break;
            }
            pizza.prepare();
            pizza.bake();
            pizza.cut();
            pizza.box();
        } while (true);
    }

    private String getType() {
        System.out.println("请输入披萨类型：");
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        try {
            return reader.readLine();
        } catch (IOException e) {
            e.printStackTrace();
            return "";
        }
    }
}

```

**传统方式优缺点**

- 1）优点是比较好理解，简单易操作
- 2）缺点是违反了设计模式的 OCP 原则，即对扩展开放，对修改关闭。即当我们给类增加新能的时候，尽量不修改代码，或者尽可能少修改代码
- 3）比如我们这时要新增加一个Pizza的种类（Cheese技萨），我们需要做如下修改

![image-20211013212910916](images\工厂模式\工厂模式图2.png)

```java
// 胡椒披萨
public class PepperPizza extends Pizza {
    @Override
    public void prepare() {
        setName("PepperPizza");
        System.out.println(name + " preparing...");
    }
}

public class OrderPizza {
    public OrderPizza() {
        // ...
        else if ("pepper".equals(orderType)) {
            pizza = new PepperPizza();
        } 
        // ...
    }
    // ...
}
```

**改进的思路分析**

- 分析：修改代码可以接受，但是如果我们在其它的地方也有创建 Pizza 的代码，就意味着也需要修改。而创建Pizza的代码，往往有多处
- 思路：把创建 Pizza 对象封装到一个类中，这样我们有新的 Pizza 种类时，只需要修改该类就可，其它有创建到 Pizza 对象的代码就不需要修改了 ==> 简单工厂模式



### 1、简单工厂模式

- 1）简单工厂模式是属于创建型模式，是工厂模式的一种。<mark>简单工厂模式是由一个工厂对象决定创建出哪一种产品类的实例</mark>。简单工厂模式是工厂模式家族中最简单实用的模式
- 2）简单工厂模式：定义了一个创建对象的类，由这个类来<mark>封装实例化对象的行为</mark>（代码）
- 3）在软件开发中，当我们会用到大量的创建某种、某类或者某批对象时，就会使用到工厂模式

**UML 类图**

![](images\工厂模式\工厂模式图3.png)

**核心代码**

```java
public class PizzaFactory {
    public Pizza createPizza(String orderType) {
        Pizza pizza = null;
        switch (orderType) {
            case "cheese":
                pizza = new CheesePizza();
                break;
            case "greek":
                pizza = new GreekPizza();
                break;
            case "pepper":
                pizza = new PepperPizza();
                break;
            default:
                break;
        }
        return pizza;
    }
}

public class OrderPizza {
    private PizzaFactory pizzaFactory;

    public OrderPizza(PizzaFactory pizzaFactory) {
        this.pizzaFactory = pizzaFactory;
        orderPizza();
    }

    public void orderPizza() {
        Pizza pizza = null;
        do {
            pizza = pizzaFactory.createPizza(getType());
            if (pizza == null) {
                System.out.println("Failed to Order Pizza");
            } else {
                pizza.prepare();
                pizza.bake();
                pizza.cut();
                pizza.box();
            }
        } while (true);
    }
    // ...
}
```



### 2、静态工厂模式

静态工厂模式也是简单工厂模式的一种，只是将工厂方法改为静态方法

**UML 类图**

![image-20211013221239242](images\工厂模式\工厂模式图4.png)

**核心代码**

```java
public class PizzaFactory {
    public static Pizza createPizza(String orderType) {
        // ...
    }
}

public class OrderPizza {
    public OrderPizza() {
        Pizza pizza;
        do {
            pizza = PizzaFactory.createPizza(getType());
            // ...
        } while (true);
    }
```



### 3、工厂方法模式

工厂方法模式设计方案：将披萨项目的实例化功能抽象成抽象方法，在不同的口味点餐子类中具体实现

工厂方法模式：定义了一个创建对象的抽象方法，由子类决定要实例化的类。工厂方法模式将<mark>对象的实例化推迟到子类</mark>

**看一个新的需求**

披萨项目新的需求：客户在点披萨时，可以点不同口味的披萨，比如北京的奶酪 Pizza、北京的胡椒 Pizza 或者是伦敦的奶酪 Pizza、伦敦的胡椒 Pizza

思路1：使用简单工厂模式，创建不同的简单工厂类，比如 BJPizzaFactory、LDPizzaFactory 等等。从当前这个案例来说，也是可以的，但是考虑到项目的规模，以及软件的可维护性、可扩展性并不是特别好

思路2：使用工厂方法模式

**UML 类图**

![](images\工厂模式\工厂模式图5.png)

**核心代码**

```java
public abstract class OrderPizza {

    public void orderPizza() {
        Pizza pizza = null;
        do {
            pizza = createPizza(getType());
            if (pizza == null) {
                System.out.println("Failed to Order Pizza");
            } else {
                pizza.prepare();
                pizza.bake();
                pizza.cut();
                pizza.box();
            }
        } while (true);
    }

    public abstract Pizza createPizza(String orderType);
     
    // ...
}

public class LDOrderPizza extends OrderPizza {
    @Override
    public Pizza createPizza(String orderType) {
        Pizza pizza = null;
        switch (orderType) {
            case "cheese":
                pizza = new LDCheesePizza();
                break;
            case "pepper":
                pizza = new LDPepperPizza();
                break;
            default:
                break;
        }
        return pizza;
    }
}

public class BJOrderPizza extends OrderPizza {
    @Override
    public Pizza createPizza(String orderType) {
        Pizza pizza = null;
        switch (orderType) {
            case "cheese":
                pizza = new BJCheesePizza();
                break;
            case "pepper":
                pizza = new BJPepperPizza();
                break;
            default:
                break;
        }
        return pizza;
    }
}
```



### 4、抽象工厂模式

- 1）抽象工厂模式：定义了一个 interface 用于创建相关或有依赖关系的对象簇，而无需指明具体的类
- 2）抽象工厂模式可以<mark>将简单工厂模式和工厂方法模式进行整合</mark>
- 3）从设计层面看，<mark>抽象工厂模式就是对简单工厂模式的改进（或者称为进一步的抽象）</mark>
- 4）将工厂抽象成两层，AbsFactory（抽象工厂）和具体实现的工厂子类。程序员可以根据创建对象类型使用对应的工厂子类。这样将单个的简单工厂类变成了工厂簇，更利于代码的维护和扩展

**UML 类图**

![image-20211015204527615](images\工厂模式\工厂模式图6.png)

**核心代码**

```java
public interface AbsPizzaFactory {
    Pizza createPizza(String orderType);
}

public class BJPizzaFactory implements AbsPizzaFactory {
    @Override
    public Pizza createPizza(String orderType) {
        Pizza pizza = null;
        switch (orderType) {
            case "cheese":
                pizza = new BJCheesePizza();
                
                break;
            case "pepper":
                pizza = new BJPepperPizza();
                break;
            default:
                break;
        }
        return pizza;
    }
}

public class LDPizzaFactory implements AbsPizzaFactory {
    @Override
    public Pizza createPizza(String orderType) {
        Pizza pizza = null;
        switch (orderType) {
            case "cheese":
                pizza = new LDCheesePizza();
                break;
            case "pepper":
                pizza = new LDPepperPizza();
                break;
            default:
                break;
        }
        return pizza;
    }
}
```



### 5、JDK 源码分析

JDK 中的 Calendar 类中，就使用了简单工厂模式

![image-20211015205449459](images\工厂模式\工厂模式图7.png)



### 6、小结

- 1）工厂模式的意义：将实例化对象的代码提取出来，放到一个类中统一管理和维护，达到和主项目的<mark>依赖关系的解耦</mark>。从而提高项目的扩展和维护性
- 2）三种工厂模式：简单工厂模式（静态工厂方法也是简单工厂模式的一种）、工厂方法模式、抽象工厂模式
- 3）设计模式的<mark>依赖抽象</mark>原则
  - 创建对象实例时，不要直接 new 类，而是把这个 new 类的动作放在一个工厂的方法中并返回。有的书上说，变量不要直接持有具体类的引用
  - 不要让类继承具体类，而是继承抽象类或者是实现 interface（接口）
  - 不要覆盖基类中已经实现的方法

## 【3】工厂模式进阶

### 1、工厂方法模式和抽象工厂模式的区别

这里为什么只介绍工厂方法模式和抽象工厂模式的区别？为什么不把简单工厂模式、静态工厂模式也放在一起比较呢？

- 首先，静态工厂模式也是简单工厂模式的一种，仅仅是方法被定义成静态方法与否以及使用时是否直接通过类调用方法的区别
- 其次，简单工厂模式过于简单，相对比较容易理解，个人觉得没必要再拿出来与稍复杂的工厂方法模式、抽象工厂模式进行比较讲解
- 另外，简单工厂模式不符合`单一职责原则`，一度怀疑是否应该放在设计模式中进行讲解
- 最后，因为很多讲解 23 种设计模式的教程中并没有包括`简单工厂模式`，而只有`工厂方法模式`和`抽象工厂模式`

无论怎样，这里只讲工厂方法模式和抽象工厂模式的区别 :laughing:

要想搞清楚工厂方法模式和抽象工厂模式的区别，首先需要了解一个概念：<mark><u>***产品族！！！***</u></mark>

首先看下，各大搜索引擎对这一概念的相关诠释（这里剔除了其他相关性较弱或无关的解释，只贴出相关性较强的内容）

> 百度百科/搜狗百科/360搜索：产品分族,也叫成组技术.一个公司的产品从市场的角度来看,也许成千上万,但是,如果从流程的角度出发,一 般都能被分为几大类,分类的依据一般是关键的机器设备,这样的类别,就是产品族.以关键设备为依据,对生产流程进行分类的过程就是产品分族

![img](images\工厂模式\进阶工厂模式图1.png)

不要灰心，官方的不行，找找技术贴

> 不同产品等级结构的一组产品组成产品族[^1]
>
> 产品族是指由同一个工厂生产的，位于不同产品等级结构中的一组产品[^2]

到这里，概念已经很清楚了：<mark>不同产品等级结构的一组产品</mark>

那什么又是产品等级结构呢？<mark>产品等级结构即产品的继承结构</mark>

`产品族`与`产品等级结构`的关系图如下

图一[^1]

![img](images\工厂模式\进阶工厂模式图2.png)

图二[^2]

![img](images\工厂模式\进阶工厂模式图3.png)

图三[^3]

![电器工厂的产品等级与产品族](images\工厂模式\进阶工厂模式图4.png)

有了对上述概念的形象理解，借鉴[抽象工厂模式-与-工厂方法模式区别_wyxhd2008的专栏-CSDN博客_工厂模式和抽象工厂模式的区别](https://blog.csdn.net/wyxhd2008/article/details/5597975)，总结内容如下表格，仅供参考

|        | 工厂方法模式                           | 抽象工厂模式                       |
| :----- | :------------------------------------- | :--------------------------------- |
| 不同点 | 一个产品等级结构，产品分类单一         | 多个产品等级结构，产品分类多样     |
|        | 一个抽象工厂只生产一个抽象产品         | 一个抽象工厂可生产多个抽象产品     |
|        | 一个具体工厂只生产一个具体产品         | 一个具体工厂可生产多个具体产品     |
|        | 不同的工厂实例创建不同的产品实例       | 不同的工厂实例创建不同的产品族实例 |
| 相同点 | 一个抽象工厂可派生出多个具体工厂       | ~                                  |
|        | 一个抽象产品可派生出多个具体产品       | ~                                  |
|        | 都是创建型模式，关心的都是如何创建对象 | ~                                  |

不过说了那么多，到底什么时候该用工厂方法模式，什么时候又该用抽象工厂模式呢？

下面，我们通过一些实际例子，来循序渐进地理解抽象工厂模式和工厂方法模式的使用场景



### 2、老徐种菜

#### v1.0、老徐的菜地

最初，老徐有一块菜地，简单种了点大白菜、黄瓜和辣椒

```java
// 大白菜
public class ChineseCabbage {}
// 黄瓜
public class Cucumber {}
// 青椒
public class GreenPeper {}
```

但是，老徐也发现一些不足：容易受到病虫害的侵扰、天冷容易冻坏、大风大雨肥料容易流失等

#### v2.0、老徐的菜棚子

后来，老徐赚了点钱，搭了一个菜棚子，专门种植这些蔬菜

```java
public interface Vegetable {}
// 大白菜
public class ChineseCabbage implements Vegetable {}
// 黄瓜
public class Cucumber implements Vegetable {}
// 青椒
public class GreenPeper implements Vegetable {}
public enum VegetableType {
    大白菜, 黄瓜, 青椒
}
public class VegetableShed {
    public Vegetable plantVegetable(String type) {
        Vegetable vegetable = null;
        if (VegetableType.大白菜.name().equals(type)) {
            vegetable = new ChineseCabbage();
        } else if (VegetableType.黄瓜.name().equals(type)) {
            vegetable = new Cucumber();
        } else if (VegetableType.青椒.name().equals(type)) {
            vegetable = new GreenPeper();
        }
        return vegetable;
    }
}
```

在老徐的精心栽培下，种植出来的蔬菜不仅免除了病虫害的侵扰，天冷也不很少冻坏了，而且还减少了施肥的用量，产量也大大增加了

没过多久，老徐又种了新的菜品：萝卜和胡萝卜

```java
// 萝卜
public class Radish implements Vegetable{}
// 胡萝卜
public class Carrot implements Vegetable{}
public enum VegetableType {
    大白菜, 黄瓜, 青椒, 萝卜, 胡萝卜
}
public class VegetableShed {
    public Vegetable plantVegetable(String type) {
        Vegetable vegetable = null;
        if (VegetableType.大白菜.name().equals(type)) {
            vegetable = new ChineseCabbage();
        } else if (VegetableType.黄瓜.name().equals(type)) {
            vegetable = new Cucumber();
        } else if (VegetableType.青椒.name().equals(type)) {
            vegetable = new GreenPeper();
        } else if (VegetableType.萝卜.name().equals(type)) {
            vegetable = new Radish();
        } else if (VegetableType.胡萝卜.name().equals(type)) {
            vegetable = new Carrot();
        }
        return vegetable;
    }
}
```

不过随着蔬菜产量越来越多，一个菜棚子已经放不下了

#### v3.0、老徐的菜园子

于是，老徐搞了个大菜园子，然后给每种蔬菜都搭建了专门的菜棚子

```java
// 蔬菜棚子
public interface VegetableShed {
    Vegetable plantVegetable();
}
// 大白菜棚子
public class ChineseCabbageShed implements VegetableShed {
    @Override
    public ChineseCabbage plantVegetable() {
        return new ChineseCabbage();
    }
}
// 黄瓜棚子
public class CucumberShed implements VegetableShed {
    @Override
    public Cucumber plantVegetable() {
        return new Cucumber();
    }
}
// 青椒棚子
public class GreenPeperShed implements VegetableShed {
    @Override
    public GreenPeper plantVegetable() {
        return new GreenPeper();
    }
}
// 萝卜棚子
public class RadishShed implements VegetableShed {
    @Override
    public Radish plantVegetable() {
        return new Radish();
    }
}
// 胡萝卜棚子
public class CarrotShed implements VegetableShed{
    @Override
    public Carrot plantVegetable() {
        return new Carrot();
    }
}
```

没过多久，老徐又搞了点冬瓜和南瓜

```java
// 冬瓜
public class Waxgourd implements Vegetable {}
// 南瓜
public class Pumpkin implements Vegetable{}
// 冬瓜棚子
public class WaxgourdShed implements VegetableShed {
    @Override
    public Waxgourd plantVegetable() {
        return new Waxgourd();
    }
}
// 南瓜棚子
public class PumpkinShed implements VegetableShed {
    @Override
    public Pumpkin plantVegetable() {
        return new Pumpkin();
    }
}
```



### 3、小徐做手机

起初，小徐有了这个想法，于是便制定了一套标准

```java
// 电池
public interface Battery {}
// 摄像头
public interface Camera {}
// 芯片
public interface Chip {}
// 屏幕
public interface Screen {}
// 手机组件工厂
public abstract class PhoneComponentFactory {
    public abstract Chip productChip();
    public abstract Camera productCamera();
    public abstract Screen productScreen();
    public abstract Battery productBattery();
}
```

后来，小徐对手机的各个组件深入了解一番后，采购了一批手机组件，并准备生产一套手机，型号定为 X1

```java
// 镍铬电池
public class NickelCadmiumBattery implements Battery {}
// 单摄摄像头
public class SingleCamera implements Camera {}
// 麒麟芯片
public class KylinChip implements Chip {}
// OLED屏
public class OledScreen implements Screen {}
// X1 手机组件工厂
public class X1PhoneComponentFactory extends PhoneComponentFactory {
    @Override
    public Chip productChip() {
        return new KylinChip();
    }

    @Override
    public Camera productCamera() {
        return new SingleCamera();
    }

    @Override
    public Screen productScreen() {
        return new OledScreen();
    }

    @Override
    public Battery productBattery() {
        return new NickelCadmiumBattery();
    }
}
```

没想到，第一次做手机就很顺利，小徐决心做一套更好的出来，于是又采购了一套手机组件，并生产了 X2 手机

```java
// 锂离子电池
public class LithiumIonBattery implements Battery {}
// 双摄摄像头
public class DuoCamera implements Camera {}
// 骁龙芯片
public class SnapdragonChip implements Chip {}
// IPS屏
public class IpsScreen implements Screen {}
// X2 手机组件工厂
public class X2PhoneComponentFactory extends PhoneComponentFactory {
    @Override
    public Chip productChip() {
        return new SnapdragonChip();
    }

    @Override
    public Camera productCamera() {
        return new DuoCamera();
    }

    @Override
    public Screen productScreen() {
        return new IpsScreen();
    }

    @Override
    public Battery productBattery() {
        return new LithiumIonBattery();
    }
}
```

但因为成本和售价很高，小徐没有卖出多少部。于是小徐便多次进行组件搭配的调整，最终小徐找到了性价比最高的搭配方式，做出了 X3，销量遥遥领先

```java
public class X3PhoneComponentFactory extends PhoneComponentFactory {
    @Override
    public Chip productChip() {
        return new KylinChip();
    }

    @Override
    public Camera productCamera() {
        return new SingleCamera();
    }

    @Override
    public Screen productScreen() {
        return new IpsScreen();
    }

    @Override
    public Battery productBattery() {
        return new LithiumIonBattery();
    }
}
```



### 4、总结

通过上述例子，帮助我们体会到两者各自适用的使用场景，不难发现工厂方法模式和抽象工厂模式之间的区别

- 生产的产品种类只有一种，但是该产品种类会不断地扩展新的具体产品，同时需要添加对应的具体工厂，这时使用<mark>工厂方法模式</mark>更好
- 生产的产品种类会有多种，种类基本固定下来了，不会轻易更改或添加，但是每个种类的具体产品会不断扩展，并在具体工厂中形成新的组合，这时使用<mark>抽象工厂模式</mark>更好

试想一下，如果对上述种菜和做手机使用的工厂模式进行交换，即种菜使用抽象工厂模式、做手机使用工厂方法模式又会怎样？

不仅不合适，反而可能使得问题变得更加复杂化了，有可能得不偿失，所以选对设计模式也是很重要的一门学问



### 5、引用

[^1]:[产品族和产品等级结构 - 简书 (jianshu.com)](https://www.jianshu.com/p/f1e837cab952)
[^2]:[工厂三兄弟之抽象工厂模式（二）_刘伟技术博客-CSDN博客](https://blog.csdn.net/lovelion/article/details/9319323)

[^3]: [抽象工厂模式（详解版） (biancheng.net)](http://c.biancheng.net/view/1351.html)



## 【4】原型模式

### 1、克隆羊问题

现在有一只羊，姓名为 Tom，年龄为 1，颜色为白色，请编写程序创建和 Tom 羊属性完全相同的 10 只羊

**传统方法**

![image-20211015215334929](images\原型模式\原型模式图1.png)

```java
public class Sheep {
    private String name;
    private Integer age;

    public Sheep(String name, Integer age) {
        this.name = name;
        this.age = age;
    }
    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }
}

public class Client {
    public static void main(String[] args) {
        for (int i = 0; i < 10; i++) {
            Sheep sheep = new Sheep("Tom", 1, "白色");
            System.out.println(sheep);
        }
    }
}
```

**传统方法优缺点**

- 1）优点是比较好理解，简单易操作
- 2）在创建新的对象时，总是需要重新获取原始对象的属性，如果创建的对象比较复杂时，效率较低
- 3）总是需要重新初始化对象，而不是动态地获得对象运行时的状态，不够灵活

**改进的思路分析**

Java 中 Object 类是所有类的根类，Object 类提供了一个 clone 方法，该方法可以将一个 Java 对象复制一份，但是需要实现 clone 的 Java 类必须要实现一个接口 Cloneable，该接口表示该类能够复制且具有复制的能力 ==> 原型模式



### 2、基本介绍

- 1）原型模式（Prototype 模式）是指：<mark>用原型实例指定创建对象种类，并通过拷贝原型创建新的对象</mark>

- 2）原型模式是一种<mark>创建型设计模式</mark>，允许一个对象再创建另外一个可定制的对象，无需知道如何创建的细节

- 3）工作原理是：通过将一个原型对象传给那个要发动创建的对象，这个要发动创建的对象通过请求原型对象拷贝它们自己来实施创建，即`对象.clone()`

- 4）形象的理解：孙大圣拔出猴毛，变出其它孙大圣

  ![image-20211015213847067](images\原型模式\原型模式图2.png)



### 3、原理结构图（UML 类图）

![image-20211015214042060](images\原型模式\原型模式图3.png)

**原理结构图说明**

- 1）`Prototype`：原型类，声明一个克隆自己的接口
- 2）`ConcretePrototype`：具体的原型类，实现一个克隆自己的操作
- 3）`Client`：让一个原型对象克隆自己，创建一个新的对象（属性相同）



### 4、原型模式解决克隆羊问题

使用原型模式改进传统方式式，让程序具有更高的效率和扩展性

**UML 类图**

![image-20211015215241868](images\原型模式\原型模式图4.png)

**核心代码**

```java
public class Sheep implements Cloneable {
    private String name;
    private Integer age;
    private String color;

    public Sheep(String name, Integer age, String color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    @Override
    public String toString() {
        return "Sheep{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", color='" + color + '\'' +
                '}';
    }

    @Override
    protected Object clone() {
        Sheep sheep = null;
        try {
            sheep = (Sheep) super.clone();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return sheep;
    }
}

public class Client {
    public static void main(String[] args) {
        Sheep sheep = new Sheep("Tom", 1, "白色");
        for (int i = 0; i < 10; i++) {
            Sheep sheep1 = (Sheep) sheep.clone();
            System.out.println(sheep1);
        }
    }
}
```



### 5、JDK 源码分析

Spring 框架中，创建`ApplicationContext`时，使用的`getBean`方法中使用到了原型模式

![image-20211016112521113](images\原型模式\原型模式图5.png)



### 6、浅拷贝和深拷贝

#### 浅拷贝基本介绍

- 1）对于数据类型是<mark>基本数据类型的成员变量，浅拷贝会直接进行值传递</mark>，也就是将该属性值复制一份给新的对象
- 2）对于数据类型是<mark>引用数据类型的成员变量，比如说成员变量是某个数组、某个类的对象等，那么浅拷贝会进行引用传递</mark>，也就是只是将该成员变量的引用值（内存地址）复制一份给新的对象。因为实际上两个对象的该成员变量都指向同一个实例。在这种情况下，在一个对象中修改该成员变量会影响到另一个对象的该成员变量值
- 3）前面我们克隆羊就是浅拷贝
- 4）浅拷贝是<mark>使用默认的 clone 方法</mark>来实现：`sheep=(Sheep)super.clone();`

#### 深拷贝基本介绍

- 1）<mark>复制对象的所有基本数据类型的成员变量值</mark>
- 2）<mark>为所有引用数据类型的成员变量申请存储空间，并复制每个引用数据类型成员变量所引用的对象，直到该对象可达的所有对象</mark>。也就是说，对象进行深拷贝要对整个对象进行拷贝
- 3）深拷贝实现方式 1：<mark>重写 clone 方法来实现深拷贝</mark>
- 4）深拷贝实现方式 2：<mark>通过对象序列化实现深拷贝</mark>

**深拷贝方式 1**

```java
public class DeepClonableTarget implements Serializable, Cloneable {

    private String cloneName;
    private String cloneClass;

    public DeepClonableTarget(String cloneName, String cloneClass) {
        this.cloneName = cloneName;
        this.cloneClass = cloneClass;
    }

    public String getCloneName() {
        return cloneName;
    }

    public void setCloneName(String cloneName) {
        this.cloneName = cloneName;
    }

    public String getCloneClass() {
        return cloneClass;
    }

    public void setCloneClass(String cloneClass) {
        this.cloneClass = cloneClass;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}

public class DeepPrototype implements Serializable, Cloneable {
    private String name;
    private DeepClonableTarget deepClonableTarget;

    public DeepPrototype() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public DeepClonableTarget getDeepClonableTarget() {
        return deepClonableTarget;
    }

    public void setDeepClonableTarget(DeepClonableTarget deepClonableTarget) {
        this.deepClonableTarget = deepClonableTarget;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        //基本数据类型拷贝
        Object object = super.clone();
        //引用类型拷贝
        DeepPrototype deepPrototype = (DeepPrototype) object;
        deepPrototype.deepClonableTarget = (DeepClonableTarget) deepClonableTarget.clone();
        return object;
    }
}

public class DeepTest {
    public static void main(String[] args) throws CloneNotSupportedException {
        DeepPrototype prototype = new DeepPrototype();
        prototype.setName("宋江");
        prototype.setDeepClonableTarget(new DeepClonableTarget("及时雨", "及时雨的类"));

        DeepPrototype clone1 = (DeepPrototype) prototype.clone();
        DeepPrototype clone2 = (DeepPrototype) prototype.clone();
        DeepPrototype clone3 = (DeepPrototype) prototype.clone();
        DeepPrototype clone4 = (DeepPrototype) prototype.clone();
        DeepPrototype clone5 = (DeepPrototype) prototype.clone();
        
        System.out.println(prototype.getName() + ", " + prototype.getDeepClonableTarget().hashCode()); // 宋江, 1554874502
        System.out.println(clone1.getName() + ", " + clone1.getDeepClonableTarget().hashCode()); // 宋江, 1846274136
        System.out.println(clone2.getName() + ", " + clone2.getDeepClonableTarget().hashCode()); // 宋江, 1639705018
        System.out.println(clone3.getName() + ", " + clone3.getDeepClonableTarget().hashCode()); // 宋江, 1627674070
        System.out.println(clone4.getName() + ", " + clone4.getDeepClonableTarget().hashCode()); // 宋江, 1360875712
        System.out.println(clone5.getName() + ", " + clone5.getDeepClonableTarget().hashCode()); // 宋江, 1625635731
    }
}
```

**深拷贝方式 2**

```java
public class DeepClonableTarget implements Serializable, Cloneable {
    private String cloneName;
    private String cloneClass;

    public DeepClonableTarget(String cloneName, String cloneClass) {
        this.cloneName = cloneName;
        this.cloneClass = cloneClass;
    }

    public String getCloneName() {
        return cloneName;
    }

    public void setCloneName(String cloneName) {
        this.cloneName = cloneName;
    }

    public String getCloneClass() {
        return cloneClass;
    }

    public void setCloneClass(String cloneClass) {
        this.cloneClass = cloneClass;
    }
}

public class DeepPrototype implements Serializable, Cloneable {
    private String name;
    private DeepClonableTarget deepClonableTarget;

    public DeepPrototype() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public DeepClonableTarget getDeepClonableTarget() {
        return deepClonableTarget;
    }

    public void setDeepClonableTarget(DeepClonableTarget deepClonableTarget) {
        this.deepClonableTarget = deepClonableTarget;
    }

    public DeepPrototype deepClone() {
        ByteArrayOutputStream bos = null;
        ObjectOutputStream oos = null;
        ByteArrayInputStream bis = null;
        ObjectInputStream ois = null;
        try {
            // 序列化
            bos = new ByteArrayOutputStream();
            oos = new ObjectOutputStream(bos);
            oos.writeObject(this);
            // 反序列化
            bis = new ByteArrayInputStream(bos.toByteArray());
            ois = new ObjectInputStream(bis);
            return (DeepPrototype) ois.readObject();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        } finally {
            try {
                if (ois != null) {
                    ois.close();
                }
                if (bis != null) {
                    bis.close();
                }
                if (oos != null) {
                    oos.close();
                }
                if (bos != null) {
                    bos.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}

public class DeepTest {
    public static void main(String[] args) throws CloneNotSupportedException {
        DeepPrototype prototype = new DeepPrototype();
        prototype.setName("宋江");
        prototype.setDeepClonableTarget(new DeepClonableTarget("及时雨", "及时雨的类"));

        DeepPrototype clone1 = prototype.deepClone();
        DeepPrototype clone2 = prototype.deepClone();
        DeepPrototype clone3 = prototype.deepClone();
        DeepPrototype clone4 = prototype.deepClone();
        DeepPrototype clone5 = prototype.deepClone();

        System.out.println(prototype.getName() + ", " + prototype.getDeepClonableTarget().hashCode()); // 宋江, 644117698
        System.out.println(clone1.getName() + ", " + clone1.getDeepClonableTarget().hashCode()); // 宋江, 317574433
        System.out.println(clone2.getName() + ", " + clone2.getDeepClonableTarget().hashCode()); // 宋江, 885284298
        System.out.println(clone3.getName() + ", " + clone3.getDeepClonableTarget().hashCode()); // 宋江, 1389133897
        System.out.println(clone4.getName() + ", " + clone4.getDeepClonableTarget().hashCode()); // 宋江, 1534030866
        System.out.println(clone5.getName() + ", " + clone5.getDeepClonableTarget().hashCode()); // 宋江, 664223387
    }
}
```

**方式 1 和方式 2 对比**

- 在对象引用类型的成员属性较少时，方式 1 简单；在对象引用类型的成员属性较多时，方式 2 简单
- 在对象引用类型的成员属性经常发生变化时，方式 1 需要同步修改，方式 2 不用修改
- 推荐使用方式 2：耦合性低、可维护性强、扩展性高



### 7、注意事项和细节

- 1）**优点**：创建新的对象比较复杂时，可以利用<mark>原型模式简化对象的创建过程</mark>，同时也能够提高效率
- 2）**优点**：不用重新初始化对象，而是<mark>动态地获得对象运行时的状态</mark>
- 3）**优点**：<mark>如果原始对象发生变化（增加或者减少属性），其它克隆对象的也会发生相应的变化，无需修改代码</mark>
- 4）**缺点**：在实现深克隆的时候<mark>可能需要比较复杂的代码</mark>
- 5）**缺点**：需要为每一个类配备一个克隆方法，这对全新的类来说不是很难，但对已有的类进行改造时，需要修改其源代码，违背了OCP 原则，这点请同学们注意

## 【5】建造者模式

### 1、盖房项目需求

- 1）需要建房子：这一过程为打桩、砌墙、封顶
- 2）房子有各种各样的，比如普通房，高楼，别墅，各种房子的过程虽然一样，但是要求不要相同的
- 3）请编写程序，完成需求

**传统方式**

![image-20211016135817291](images\建造者模式\建造者模式图1.png)

```java
public abstract class AbsHouse {
    protected abstract void piling();

    protected abstract void walling();

    protected abstract void capping();

    public void build() {
        piling();
        walling();
        capping();
    }
}

public class NormalRoom extends AbsHouse {
    @Override
    protected void piling() {
        System.out.println("普通房打桩...");
    }

    @Override
    protected void walling() {
        System.out.println("普通房砌墙...");
    }

    @Override
    protected void capping() {
        System.out.println("普通房封顶...");
    }
}

public class HighRise extends AbsHouse {
    @Override
    protected void piling() {
        System.out.println("高楼打桩...");
    }

    @Override
    protected void walling() {
        System.out.println("高楼砌墙...");
    }

    @Override
    protected void capping() {
        System.out.println("高楼封顶...");
    }
}

public class Villa extends AbsHouse {
    @Override
    protected void piling() {
        System.out.println("别墅打桩...");
    }

    @Override
    protected void walling() {
        System.out.println("别墅砌墙...");
    }

    @Override
    protected void capping() {
        System.out.println("别墅封顶...");
    }
}
```

**问题分析**

- 1）优点是比较好理解，简单易操作
- 2）设计的程序结构，过于简单，<mark>没有设计缓存层对象，程序的扩展和维护不好</mark>。也就是说，这种设计方案把产品（即：房子）和创建产品的过程（即：建房子流程）封装在一起，耦合性增强了
- 3）解决方案：<mark>将产品和产品建造过程解耦 ==> 建造者模式</mark>



### 2、基本介绍

- 1）<mark>建造者模式</mark>（Builder Pattern）又叫<mark>生成器模式</mark>，是一种对象构建模式。它可以将复杂对象的建造过程抽象出来（抽象类别），使这个抽象过程的不同实现方法可以构造出不同表现（属性）的对象
- 2）建造者模式是一步一步创建一个复杂的对象，它允许用户只通过指定复杂对象的类型和内容就可以构建它们，用户不需要知道内部的具体构建细节

![image-20211016140232641](images\建造者模式\建造者模式图2.png)



### 3、建造者模式的四个角色

- 1）<mark>Product（产品角色）：一个具体的产品对象</mark>
- 2）<mark>Builder（抽象建造者）：可建一个 Product 对象的各个部件指定的接口 / 抽象类</mark>
- 3）<mark>ConcreteBuilder（具体建造者）：实现接口，构建和装配各个部件</mark>
- 4）<mark>Director（指挥者）：构建一个使用 Builder 接口的对象</mark>。它主要是用于创建一个复杂的对象。它主要有两个作用
  - 一是<mark>隔离了客户与对象的生产过程</mark>
  - 二是<mark>负责控制产品对象的生产过程</mark>



### 4、建造者模式原理类图

![image-20211016141000338](images\建造者模式\建造者模式图3.png)



### 5、建造者模式解决盖房需求

需要建房子：这一过程为打桩、砌墙、封顶。不管是普通房子也好，别墅也好都需要经历这些过程，下面我们使用建造者模式（Builder Pattern）来完成

**UML 类图**

![image-20211016142956537](images\建造者模式\建造者模式图4.png)

**核心代码**

```java
public class House {
    private String pile;
    private String wall;
    private String roof;

    public String getPile() {
        return pile;
    }

    public void setPile(String pile) {
        this.pile = pile;
    }

    public String getWall() {
        return wall;
    }

    public void setWall(String wall) {
        this.wall = wall;
    }

    public String getRoof() {
        return roof;
    }

    public void setRoof(String roof) {
        this.roof = roof;
    }
}

public abstract class HouseBuilder {
    private House house = new House();

    public abstract void piling();
    
    public abstract void walling();
    
    public abstract void capping();

    public House build() {
        return house;
    }
}

public class NormalRoomBuilder extends HouseBuilder {
    @Override
    public void piling() {
        System.out.println("普通房打桩...");
    }

    @Override
    public void walling() {
        System.out.println("普通房砌墙...");
    }

    @Override
    public void capping() {
        System.out.println("普通房封顶...");
    }
}

public class HighRiseBuilder extends HouseBuilder {
    @Override
    public void piling() {
        System.out.println("高楼打桩...");
    }

    @Override
    public void walling() {
        System.out.println("高楼砌墙...");
    }

    @Override
    public void capping() {
        System.out.println("高楼封顶...");
    }
}

public class VillaBuilder extends HouseBuilder {
    @Override
    public void piling() {
        System.out.println("别墅打桩...");
    }

    @Override
    public void walling() {
        System.out.println("别墅砌墙...");
    }

    @Override
    public void capping() {
        System.out.println("别墅封顶...");
    }
}

public class HouseDirector {
    private HouseBuilder houseBuilder;

    public HouseDirector() {
    }

    public void setHouseBuilder(HouseBuilder houseBuilder) {
        this.houseBuilder = houseBuilder;
    }

    public House buildHouse() {
        houseBuilder.piling();
        houseBuilder.walling();
        houseBuilder.capping();
        return houseBuilder.build();
    }
}

public class BuilderTest {
    public static void main(String[] args) {
        HouseDirector houseDirector = new HouseDirector();
        House house;

        houseDirector.setHouseBuilder(new NormalRoomBuilder());
        house = houseDirector.buildHouse();
        houseDirector.setHouseBuilder(new HighRiseBuilder());
        house = houseDirector.buildHouse();
        houseDirector.setHouseBuilder(new VillaBuilder());
        house = houseDirector.buildHouse();
    }
}
```



### 6、JDK 源码分析

java.lang.StringBuilder 中的建造者模式

![image-20211016144102204](images\建造者模式\建造者模式图5.png)

![image-20211016144830033](images\建造者模式\建造者模式图6.png)

![image-20211016144812174](images\建造者模式\建造者模式图7.png)

![image-20211016144738060](images\建造者模式\建造者模式图8.png)

角色分析

- `Appendable`接口定义了多个`append`方法（抽象方法），即`Appendable`为抽象建造者，定义了抽象方法
- `AbstractStringBuilder`实现了`Appendable`接口方法，这里的`AbstractStringBuilder`已经是建造者，只是不能实例化
- `StringBuilder`既充当了指挥者角色，又充当了具体的建造者，建造方法的实现是由`AbstractStringBuilder`完成，`StringBuilder`继承了`AbstractStringBuilder`



### 7、注意事项及细节

- 1）客户端（使用程序）<mark>不必知道产品内部组成的细节，将产品本身与产品的创建过程解耦</mark>，使得相同的创建过程可以创建不同的产品对象
- 2）<mark>每一个具体建造者都相对独立，而与其他的具体建造者无关</mark>，因此可以很方便地替换具体建造者或增加新的具体建造者，用户使用不同的具体建造者即可得到不同的产品对象
  3）<mark>可以更加精细地控制产品的创建过程</mark>。将复杂产品的创建步骤分解在不同的方法中，使得创建过程更加清晰，也更方便使用程序来控制创建过程
- 4）<mark>增加新的具体建造者无须修改原有类库的代码</mark>，指挥者类针对抽象建造者类编程，系统扩展方便，符合<mark>“开闭原则”</mark>
- 5）<mark>建造者模式所创建的产品一般具有较多的共同点，其组成部分相似</mark>，如果产品之间的差异性很大，则不适合使用建造者模式，因此其使用范围受到一定的限制
- 6）如果产品的内部变化复杂，可能会导致需要定义很多具体建造者类来实现这种变化，导致系统变得很庞大。因此在这种情况下，要考虑是否选择建造者模式



### 8、抽象工厂模式 VS 建造者模式

抽象工厂模式实现对产品家族的创建，一个产品家族是这样的一系列产品：具有不同分类维度的产品组合，采用抽象工厂模式不需要关心构建过程，只关心什么产品由什么工厂生产即可。

而建造者模式则是要求按照指定的蓝图建造产品，它的主要目的是通过组装零配件而产生一个新产品

## 【6】适配器模式

**泰国旅游使用插座问题**

现实生活中的适配器例子

泰国插座用的是两孔的（欧标），可以买个多功能转换插头（适配器），这样就可以使用了

![image-20211018194134795](images\适配器模式\适配器模式图1.png)



### 1、基本介绍

- 1）适配器模式（Adapter Pattern）将某个类的接口转换成客户端期望的另一个接口表示，主的目的是<mark>兼容性</mark>，让原本因接口不匹配不能一起工作的两个类可以协同工作。其别名为包装器（Wrapper）
- 2）适配器模式属于<mark>结构型模式</mark>
- 3）主要分为三类：<mark>类适配器模式、对象适配器模式、接口适配器模式</mark>



### 2、工作原理

- 1）适配器模式：将一个类的接口转换成另一种接口，让原本接口不兼容的类可以<mark>兼容</mark>
- 2）从用户的角度看不到被适配者，是<mark>解耦</mark>的
- 3）用户调用适配器转化出来的目标接口方法，适配器再调用被适配者的相关接口方法
- 4）用户收到反馈结果，感觉只是和目标接口交互，如图

![image-20211018195141624](images\适配器模式\适配器模式图2.png)



### 3、类适配器模式

**案例**

基本介绍：Adapter 类，通过继承 src 类，实现 dst 类接口，完成 src -> dst 的适配

以生活中充电器的例子来讲解适配器，充电器本身相当于 Adapter，220V 交流电相当于 src（即被适配者），我们的 dst（即目标）是 5V 直流电

![image-20211018195850891](images\适配器模式\适配器模式图3.png)

**UML 类图**

![image-20211018202103110](images\适配器模式\适配器模式图4.png)

**核心代码**

```java
// 被适配的类
public class Voltage220V {
    public Integer output220V() {
        int src = 220;
        System.out.println("电压=" + src + "伏");
        return src;
    }
}

// 适配接口
public interface IVoltage5V {
    Integer output5V();
}

// 适配器
public class VoltageAdapter extends Voltage220V implements IVoltage5V {
    @Override
    public Integer output5V() {
        int src = output220V();
        int dst = src / 44;
        System.out.println("电压=" + dst + "伏");
        return dst;
    }
}

// 使用适配器方法
public class Phone {
    public void charing(IVoltage5V iVoltage5V) {
        if (iVoltage5V.output5V() == 5) {
            System.out.println("电压=5伏，正在充电~");
        } else {
            System.out.println("电压!=5伏，无法充电~");
        }
    }
}

// 客户端
public class Client {
    public static void main(String[] args) {
        Phone phone = new Phone();
        phone.charing(new VoltageAdapter());
    }
}
```

**注意事项和细节**

- 1）Java 是<mark>单继承机制</mark>，所以类适配器需要继承 src 类这一点算是一个缺点，因为这要求 dst 必须是接口，有一定<mark>局限性</mark>
- 2）src 类的方法在 Adapter 中都会暴露出来，也<mark>增加了使用的成本</mark>
- 3）由于其继承了 src 类，所以它可以根据需求重写 src 类的方法，使得 Adapter 的<mark>灵活性增强</mark>了



### 4、对象适配器模式

- 1）基本思路和类的适配器模式相同，只是将 Adapter 类作修改，不是继承 src 类，而是持有 src 类的实例，以解决兼容性的问题。即：持有 src 类，实现 dst 类接口，完成 src->dst 的适配
- 2）根据“合成复用原则”，在系统中尽量使用关联关系来替代继承关系
- 3）<mark>对象适配器模式是适配器模式常用的一种</mark>

以生活中充电器的例子来讲解适配器，充电器本身相当于 Adapter，220V 交流电相当于 src（即被适配者），我们的 dst（即目标）是 5V 直流电，使用对象适配器模式完成

**UML 类图**

![image-20211018203522489](images\适配器模式\适配器模式图5.png)

**核心代码**

只需修改 Adapter 类即可

```java
public class VoltageAdapter implements IVoltage5V {
    private Voltage220V voltage220V;

    public VoltageAdapter(Voltage220V voltage220V) {
        this.voltage220V = voltage220V;
    }

    @Override
    public Integer output5V() {
        if (voltage220V == null) {
            return 0;
        }
        int src = voltage220V.output220V();
        int dst = src / 44;
        System.out.println("电压=" + dst + "伏");
        return dst;
    }
}

public class Client {
    public static void main(String[] args) {
        Phone phone = new Phone();
        phone.charing(new VoltageAdapter(new Voltage220V()));
    }
}
```

**注意事项和细节**

- 1）<mark>对象适配器和类适配器其实算是同一种思想，只不过实现方式不同</mark>。根据合成复用原则，使用组合替代继承，所以它解决了类适配器必须继承 src 的局限性问题，也不再要求 dst 必须是接口
- 2）<mark>使用成本更低，更灵活</mark>



### 5、接口适配器模式

- 1）一些书籍称为：<mark>适配器模式或缺省适配器模式（Default Adapter Pattern）</mark>
- 2）当不需要全部实现接口提供的方法时，可先设计一个抽象类实现接口，并为该接口中每个方法提供一个默认实现（空方法），那么该抽象类的子类可有选择地覆盖父类的某些方法来实现需求
- 3）适用于一个接口不想使用其所有的方法的情况

**实例**

1）Android 中的属性动画 ValueAnimator 类可以通过 addListener（AnimatorListener listener）方法添加监听器，那么常规写法如下

```java
ValueAnimator valueAnimator = ValueAnimator.ofInt(0, 100);
valueAnimator.addListener(new Animator.AnimatorListener() {
    @Override
    public void onAnimatorStart(Animator animation) {
    }

    @Override
    public void onAnimatorEnd(Animator animation) {
    }

    @Override
    public void onAnimatorCancel(Animator animation) {
    }

    @Override
    public void onAnimatorRepeat(Animator animation) {
    }
});
valueAnimator.start();
```

2）有时候我们不想实现 Animator.AnimatorListener 接口的全部方法，我们只想监听 onAnimationStart，写法如下

```java
ValueAnimator valueAnimator = ValueAnimator.ofInt(0, 100);
valueAnimator.addListener(new AnimatorListenerAdapter() {
    @Override
    public void onAnimatorStart(Animator animation) {
        // XXXX具体实现
    }
});
valueAnimator.start();
```

3）AnimatorListenerAdapter 类就是一个接口适配器，它空实现了 Animator.AnimatorListener 类（src）的所有方法

```java
public abstract class AnimatorListenerAdapter implements Animator.AnimatorListener, Animator.AnimatorPauseListener {
    @Override
    public void onAnimationCancel(Animator animation) {
    }

    @Override
    public void onAnimationEnd(Animator animation) {
    }

    @Override
    public void onAnimationRepeat(Animator animation) {
    }

    @Override
    public void onAnimationStart(Animator animation) {
    }

    @Override
    public void onAnimationPause(Animator animation) {
    }

    @Override
    public void onAnimationResume(Animator animation) {
    }
}
```

4）AnimatorListener 是一个接口

```java
public static interface AnimatorListener {
    void onAnimationStart(Animator animation);

    void onAnimationEnd(Animator animation);

    void onAnimationCancel(Animator animation);

    void onAnimationRepeat(Animator animation);
}
```

5）程序里的匿名内部类就是 Listener 具体实现类

```java
new AnimatorListenerAdapter() {
    @Override
    public void onAnimationStart(Animator animation){
        // xxxx具体实现
    }
}
```

现在我们按照上述步骤，自己去实现一下

**UML 类图**

![image-20211018210248150](images\适配器模式\适配器模式图6.png)

**核心代码**

```java
public interface Interface4 {
    void operation1();

    void operation2();

    void operation3();

    void operation4();
}

public abstract class AbsAdapter implements Interface4 {
    @Override
    public void operation1() {
    }

    @Override
    public void operation2() {
    }

    @Override
    public void operation3() {
    }

    @Override
    public void operation4() {
    }
}

public class Client {
    public static void main(String[] args) {
        AbsAdapter absAdapter = new AbsAdapter() {
            @Override
            public void operation1() {
                System.out.println("调用operation1方法");
            }
        };
        absAdapter.operation1();
    }
}
```



### 6、SpringMVC 框架源码分析

1）SpringMVC 中的 HandlerAdapter，就使用了适配器模式

2）SpringMVC 处理请求的流程回顾

![image-20211018210609609](images\适配器模式\适配器模式图7.png)

![image-20211018210912269](images\适配器模式\适配器模式图8.png)

3）使用 HandlerAdapter 的原因分析

在 DispatcherServlet 中，有一个 doDispatch 方法，其中便使用到了 HandlerAdapter 适配器

![image-20211018212840166](images\适配器模式\适配器模式图9.png)

通过 request 可以获得一个 Handler，再根据这个 Handler 获得不同的 HandlerAdapter 进行处理

![image-20211018212934518](images\适配器模式\适配器模式图10.png)

HandlerAdapter 本质上是一个适配器接口，具体的适配器实现类有多种，其中有我们较为熟悉的 HttpRequestHandlerAdapter 和 RequestMappingHandlerAdapter

![image-20211018213024886](images\适配器模式\适配器模式图11.png)

HandlerAdapter 的实现子类是的每一种 Controller 有一种对应的适配器实现类，每种 Controller 有不同的实现方式

言归正传，拿到 HandlerAdapter 适配器之后，便会调用其中的 handle 方法， 此方法便是具体的适配器实现类需要实现的方法

![image-20211018213942824](images\适配器模式\适配器模式图12.png)

可以看到处理器的类型不同，有多重实现方式，那么调用方式就不是确定的。如果需要直接调用 Controller 方法，需要调用的时候就得不断使用`if-else`来进行判断是哪一种子类然后执行。那么如果后面要扩展 Controller，就得修改原来的代码，这样违背了 OCP 原则

4）为了更深刻地理解其中运用的模式思想，我们自己动手写 SpringMVC，通过适配器设计模式获取到对应的 Controller 的源码



### 7、自己动手写 SpringMVC

**UML 类图**

![image-20211018221312147](images\适配器模式\适配器模式图13.png)

**核心代码**

```java
public interface Controller {
}

public class AnnotationController implements Controller {
    public void doAnnotationHandler() {
        System.out.println("annotation...");
    }
}

public class HttpController implements Controller {
    public void doHttpHandler() {
        System.out.println("http...");
    }
}

public class SimpleController implements Controller {
    public void doSimplerHandler() {
        System.out.println("simple...");
    }
}

//定义一个Adapter接口
public interface HandlerAdapter {
    boolean supports(Object handler);

    void handle(Object handler);
}

public class AnnotationHandlerAdapter implements HandlerAdapter {
    @Override
    public void handle(Object handler) {
        ((AnnotationController) handler).doAnnotationHandler();
    }

    @Override
    public boolean supports(Object handler) {
        return (handler instanceof AnnotationController);
    }
}

public class HttpHandlerAdapter implements HandlerAdapter {
    @Override
    public void handle(Object handler) {
        ((HttpController) handler).doHttpHandler();
    }

    @Override
    public boolean supports(Object handler) {
        return (handler instanceof HttpController);
    }
}

public class SimpleHandlerAdapter implements HandlerAdapter {
    @Override
    public void handle(Object handler) {
        ((SimpleController) handler).doSimplerHandler();
    }

    @Override
    public boolean supports(Object handler) {
        return (handler instanceof SimpleController);
    }
}

public class DispatchServlet {
    public static List<HandlerAdapter> handlerAdapters = new ArrayList<>();

    public DispatchServlet() {
        handlerAdapters.add(new AnnotationHandlerAdapter());
        handlerAdapters.add(new HttpHandlerAdapter());
        handlerAdapters.add(new SimpleHandlerAdapter());
    }

    public void doDispatch() {
        // 此处模拟 SpringMVC 从 request 取 handler 的对象，适配器可以获取到希望的 Controller
        //HttpController controller = new HttpController();
        SimpleController controller = new SimpleController();
        //AnnotationController controller = new AnnotationController();
        // 得到对应适配器
        HandlerAdapter adapter = getHandler(controller);
        //通过适配器执行对应的controller对应方法
        adapter.handle(controller);
    }

    public HandlerAdapter getHandler(Controller controller) {
        //遍历：根据得到的controller（handler），返回对应适配器
        for (HandlerAdapter adapter : this.handlerAdapters) {
            if (adapter.supports(controller)) {
                return adapter;
            }
        }
        return null;
    }
}
```

**说明**

- Spring 定义了一个适配接口，使得每一种 Controller 有一种对应的适配器实现类
- 适配器代替 Controller 执行相应的方法
- 扩展 Controller 时，只需要增加一个适配器类就完成了 SpringMVC 的扩展了
- 这就是设计模式的力量



### 8、注意事项和细节

- 1）三种命名方式，是根据 src 是以怎样的形式给到 Adapter（在Adapter里的形式）来命名的
- 2）三种适配器模式
  - 类适配器：以类给到，在 Adapter 里将 src 作为一个类，继承
  - 对象适配器：以对象给到，在Adapter 里将 src 作为一个对象，持有
  - 接口适配器：以接口给到，在 Adapter 里将 src 作为一个接口，实现
- 3）Adapter 模式最大的作用还是将原本不兼容的接口融合在一起工作
- 4）实际开发中，实现起来不拘泥于我们讲解的三种经典形式

## 【7】桥接模式

### 1、传统方式解决手机操作问题

现在对不同手机类型的不同品牌实现操作编程（比如：开机、关机、上网，打电话等），如图：

![image-20211020192526079](images\桥接模式\桥接模式图1.png)

**UML 类图**

![image-20211020192702004](images\桥接模式\桥接模式图2.png)

**问题分析**

1. **扩展性问题（类爆炸）**：如果我们再增加手机的样式（旋转式），就需要增加各个品牌手机的类；同样如果我们增加一个手机品牌，也要在各个手机样式类下增加
2. **违反了单一职责原则**：当我们增加手机样式时，要同时增加所有品牌的手机，这样增加了代码维护成本
3. 解决方案——**使用桥接模式**



### 2、桥接模式基本介绍

1. **桥接模式（Bridge模式）：**<mark>一种结构型设计模式</mark>：将实现与抽象放在两个不同的类层次中，使两个层次可以独立改变
2. Bridge模式基于<mark>类的最小设计原则</mark>，通过使用封装、聚合及继承等行为让不同的类承担不同的职责
3. 它的主要特点是把<mark>抽象（Abstraction）与行为实现（Implementation）分离开来</mark>，从而可以保持各部分的独立性以及应对他们的功能扩展

**原理类图**

![image-20211020193532371](images\桥接模式\桥接模式图3.png)

**原理类图说明**

- **Client**：桥接模式的调用者
- **Abstraction**：Abstraction 充当桥接类，维护了 Implementor，即 ConcreteImplementorA / ConcreteImplementorB
- **RefinedAbstraction**：Abstraction 抽象类的子类
- **Implementor**：行为实现类的接口
- **ConcreteImplementorA / ConcreteImplementorB**：行为的具体实现类
- 这里的抽象类和接口是聚合的关系，也是调用者和被调用者的关系



### 3、桥接模式解决手机操作问题

**UML 类图**

![image-20211020202203186](images\桥接模式\桥接模式图4.png)

**核心代码**

```java
// 行为接口——品牌接口
public interface Branch {
    void open();

    void call();

    void close();
}
// 行为实现类——华为品牌
public class Huawei implements Branch {
    @Override
    public void open() {
        System.out.println("华为手机开机");
    }

    @Override
    public void call() {
        System.out.println("华为手机打电话");
    }

    @Override
    public void close() {
        System.out.println("华为手机关机");
    }
}
// 行为实现类——小米品牌
public class Xiaomi implements Branch {
    @Override
    public void open() {
        System.out.println("小米手机开机");
    }

    @Override
    public void call() {
        System.out.println("小米手机打电话");
    }

    @Override
    public void close() {
        System.out.println("小米手机关机");
    }
}
// 行为实现类——苹果品牌
public class iPhone implements Branch {
    @Override
    public void open() {
        System.out.println("苹果手机开机");
    }

    @Override
    public void call() {
        System.out.println("苹果手机打电话");
    }

    @Override
    public void close() {
        System.out.println("苹果手机关机");
    }
}

// 桥接类——手机抽象类
public abstract class Phone {
    private Branch branch;

    public Phone(Branch branch) {
        this.branch = branch;
    }

    public void open() {
        branch.open();
    }

    public void call() {
        branch.call();
    }

    public void close() {
        branch.close();
    }
}
// 桥接子类——翻盖式手机
public class FlipPhone extends Phone {
    public FlipPhone(Branch branch) {
        super(branch);
        System.out.println("翻盖式手机");
    }

    @Override
    public void open() {
        super.open();
    }

    @Override
    public void call() {
        super.call();
    }

    @Override
    public void close() {
        super.close();
    }
}
// 桥接子类——滑盖式手机
public class SlidePhone extends Phone {
    public SlidePhone(Branch branch) {
        super(branch);
        System.out.println("滑盖式手机");
    }

    @Override
    public void open() {
        super.open();
    }

    @Override
    public void call() {
        super.call();
    }

    @Override
    public void close() {
        super.close();
    }
}
// 桥接子类——直立式手机
public class UprightPhone extends Phone {
    public UprightPhone(Branch branch) {
        super(branch);
        System.out.println("直立式手机");
    }

    @Override
    public void open() {
        super.open();
    }

    @Override
    public void call() {
        super.call();
    }

    @Override
    public void close() {
        super.close();
    }
}
```



### 4、JDK 源码分析

JDBC 的 Driver 接口：如果从桥接模式来看，Driver 就是一个接口，下面可以有 MySQL 的 Driver、Oracle 的 Driver，这些就可以当做实现接口类

![image-20211020203253562](images\桥接模式\桥接模式图5.png)

**Connection 继承体系**

![image-20211020205255371](images\桥接模式\桥接模式图6.png)

**Driver源码**

```java
public class Driver extends NonRegisteringDriver implements java.sql.Driver {
    static {
        try {
            java.sql.DriverManager.registerDriver(new Driver());
        } catch (SQLException E) {
            throw new RuntimeException("Can't register driver!");
        }
    }
    public Driver() throws SQLException {
        // Required for Class.forName().newInstance()
    }
}
```

**DriverManager 结构**

![image-20211020204343366](images\桥接模式\桥接模式图7.png)

**说明**

- MySQL 有自己的 Connectionlmpl 类，同样 Oracle 也有对应的实现类
- Driver 和 Connection 之间是通过 DriverManager 类进行桥连接的



### 5、注意事项和细节

1. <mark>实现了抽象和实现部分的分离</mark>，从而极大的提供了系统的灵活性，让抽象部分和实现部分独立开来。这有助于系统进行<mark>分层设计</mark>，从而产生更好的<mark>结构化系统</mark>
2. 对于系统的高层部分，只需要知道抽象部分和实现部分的接口就可以了，其它的部分由具体业务来完成
3. 桥接模式替代<mark>多层继承方案</mark>，可以减少子类的个数，降低系统的管理和维护成本
4. 桥接模式的引入增加了系统的理解和设计难度，由于聚合关联关系建立在抽象层，要求开发者针<mark>对抽象进行设计和编程</mark>
5. 桥接模式要求正确识别出系统中两个独立变化的维度，因此其使用范围有一定的后限性，即需要有这样的应用场景



### 6、桥接模式其他应用场景

对于那些不希望使用继承或因为多层次继承导致系统类的个数急剧增加的系统，桥接模式尤为适用

常见的应用场景

1. JDBC 驱动程序
2. 银行转账系统
   - 转账分类：网上转账、柜台转账、AMT 转账
   - 转账用户类型：普通用户、银卡用户、金卡用户
3. 消息管理
   - 消息类型：即时消息、延时消息
   - 消息分类：手机短信、邮件消息、QQ消息…





## 【8】装饰者模式

### 1、星巴克咖啡订单项目

星巴克咖啡订单项目（咖啡馆）：

- 1）咖啡种类/单品咖啡：Espresso（意大利浓咖）、ShortBlack、LongBlack（美式咖啡）、Decaf（无因咖啡）
- 2）调料：Mik、Soy（豆浆）、Chocolate
- 3）要求在扩展新的咖啡种类时，具有良好的扩展性、改动方便、维护方便
- 4）使用 OO 的来计算不同种类咖啡的费用：客户可以点单品咖啡，也可以单品咖啡+调料组合



### 2、方案 1-解决星巴克咖啡订单项目（较差的方案）

![image-20211023165815602](images\装饰者模式\装饰者模式图1.png)

**方案 1-解决星巴克咖啡订单问题分析**

- 1）Drink 是一个抽象类，表示饮料
- 2）description 就是对咖啡的描述，比如咖啡的名字
- 3）cost 方法就是计算费用，Drink 类中做成一个抽象方法
- 4）Decaf 就是单品咖啡，继承 Drink，并实现 cost
- 5）Espresso && Milk 就是单品咖啡+调料，这个组合很多
- 6）问题：这样设计，会有很多类。当我们增加一个单品咖啡，或者一个新的调料，类的数量就会倍增，出现类爆炸



### 3、方案 2-解决星巴克咖啡订单项目（好点的方案）

前面分析到方案 1 因为咖啡单品+调料组合会造成类的倍增，因此可以做改进，将调料内置到 Drink 类，这样就不会造成类数量过多。从而提高项目的维护性（如图）

![image-20211023170550925](images\装饰者模式\装饰者模式图2.png)

说明：Milk、Soy、Chocolate 可以设计为 Boolean，表示是否要添加相应的调料

**方案 2-解决星巴克咖啡订单问题分析**

- 1）方案 2 可以控制类的数量，不至于造成很多的类
- 2）在增加或者删除调料种类时，代码的维护量很大
- 3）考虑到用户可以添加多份调料时，可以将 hasMilk 返回一个对应 int
- 4）考虑使用装饰者模式



### 4、装饰者模式

**定义**

1）装饰者模式：<mark>动态地将新功能附加到对象上</mark>。在对象功能扩展方面，它比继承更有弹性，装饰者模式体现了<mark>开闭原则（OCP）</mark>

2）这里提到的动态的将新功能附加到对象和 OCP 原则，在后面的应用实例上会以代码的形式体现，请同学们注意体会

**原理**

- 1）装饰者模式就像打包一个快递
  - 主体：比如陶瓷、衣服（Component）
  - 包装：比如报纸填充、塑料泡沫、纸板、木板（Decorator）
- 2）主体（Component）：比如前面的 Drink
- 3）具体的主体（ConcreteComponent）：比如前面的各个单品咖啡
- 4）装饰者（Decorator）：比如各调料
- 4）Component 与 ConcreteComponent 之间，如果 ConcreteComponent 类很多，还可以设计一个缓冲层，将共有的部分提取出来，抽象成一个类

![image-20211023181332821](images\装饰者模式\装饰者模式图3.png)



### 5、装饰者模式解决星巴克咖啡订单项目

![image-20211023181701216](images\装饰者模式\装饰者模式图4.png)

**说明**

- 1）Drink 就是抽象类 Component
- 2）ShortBlack 单品咖啡就是具体的主体
- 3）Decorator 是一个装饰类，含有一个被装饰的对象（Drink）
- 4）Decorator 的 cost 方法进行一个费用的叠加，递归地计算价格

装饰者模式下的订单：2份巧克力 + 一份牛奶的 LongBlack

![image-20211023182107273](images\装饰者模式\装饰者模式图5.png)

**说明**

- 1）Milk 包含了 LongBlack
- 2）一份 Chocolate 包含了 Milk + LongBlack
- 3）一份 Chocolate 包含了 Chocolate + Milk + LongBlack
- 4）这样不管是什么形式的单品咖啡 + 调料组合，通过递归方式可以方便的组合和维护

**UML类图**

![image-20211023194905182](images\装饰者模式\装饰者模式图6.png)

**核心代码**

```java
// 抽象主体
public abstract class Drink {
    private String desc;
    private Float price;

    public String getDesc() {
        return desc;
    }

    protected void setDesc(String desc) {
        this.desc = desc;
    }

    public Float getPrice() {
        return price;
    }

    protected void setPrice(Float price) {
        this.price = price;
    }

    public abstract Float cost();
}
// 具体主体
public class Coffee extends Drink {

    @Override
    public Float cost() {
        return super.getPrice();
    }
}
public class Decaf extends Coffee {
    public Decaf() {
        setDesc("无因咖啡");
        setPrice(20.0f);
    }
}
public class Espresso extends Coffee {
    public Espresso() {
        setDesc("意大利浓咖");
        setPrice(30.0f);
    }
}
public class ShortBlack extends Coffee {
    public ShortBlack() {
        setDesc("短黑咖啡");
        setPrice(40.0f);
    }
}
public class LongBlack extends Coffee {
    public LongBlack() {
        setDesc("美式咖啡");
        setPrice(50.0f);
    }
}
//装饰者
public class Decorator extends Drink {
    private Drink drink;

    public Decorator(Drink drink) {
        this.drink = drink;
    }

    @Override
    public Float cost() {
        return super.getPrice() + drink.cost();
    }
}
public class Milk extends Decorator {
    public Milk(Drink drink) {
        super(drink);
        setDesc("牛奶");
        setPrice(3.0f);
    }
}
public class Soy extends Decorator {
    public Soy(Drink drink) {
        super(drink);
        setDesc("豆浆");
        setPrice(4.0f);
    }
}
public class Chocolate extends Decorator {
    public Chocolate(Drink drink) {
        super(drink);
        setDesc("巧克力");
        setPrice(5.0f);
    }
}
// 调用者
public class CoffeeBar {
    public static void main(String[] args) {
        Drink drink = new Espresso();
        System.out.println("意大利浓咖：" + drink.cost() + "美元"); // 意大利浓咖：30.0美元

        drink = new Milk(drink);
        System.out.println("意大利浓咖 + 1份牛奶：" + drink.cost() + "美元"); // 意大利浓咖 + 1份牛奶：33.0美元

        drink = new Chocolate(drink);
        System.out.println("意大利浓咖 + 1份牛奶 + 1份巧克力：" + drink.cost() + "美元"); // 意大利浓咖...：38.0美元

        drink = new Chocolate(drink);
        System.out.println("意大利浓咖 + 1份牛奶 + 2份巧克力：" + drink.cost() + "美元"); // 意大利浓咖...：43.0美元
    }
}
```



### 6、JDK 源码分析

Java 的 IO 结构，FilterlnputStream 就是一个装饰者

![image-20211023210853809](images\装饰者模式\装饰者模式图7.png)

**核心代码**

```java
// 是一个抽象类，即Component
public abstract class InputStream implements Closeable {} 
// 是一个装饰类，即Decorator
public class FilterInputStream extends InputStream { 
    protected volatile InputStream in;
    protected FilterInputStream(InputStream in) {
        this.in = in;
    }
}
// FilterInputStream子类，也继承了被装饰的对象 in
public class DataInputStream extends FilterInputStream implements DataInput { 
    public DataInputStream(InputStream in) {
        super(in);
    }
```

**分析**

- 1）InputStream 是抽象类，类似我们前面讲的 Drink
- 2）FileInputStream 是 InputStream 子类，类似我们前面的 DeCaf、LongBlack
- 3）FilterInputStream 是 InputStream 子类，类似我们前面的 Decorator，修饰者
- 4）DataInputStream 是 FilterInputStream 子类，类似前面的Milk，Soy等，具体的修饰者
- 5）FilterInputStream 类有`protected volatile InputStream in;`，即含被装饰者
- 6）分析得出在 JDK 的 IO 体系，就是使用装饰者模式

## 【9】组合模式

### 1、学校院系展示需求

编写程序展示一个学校院系结构：

需求是这样，要在一个页面中展示出学校的院系组成，一个学校有多个学院，一个学院有多个系。如图：

![image-20211023221436485](images\组合模式\组合模式图1.png)

**传统方式解决学校院系展示（类图）**

![image-20211023221531826](images\组合模式\组合模式图2.png)

**问题分析**

- 1）将学院看做是学校的子类，系是学院的子类，这样实际上是站在组织大小来进行分层次的
- 2）实际上我们的要求是：在一个页面中展示出学校的院系组成，一个学校有多个学院，一个学院有多个系。因此这种方案，不能很好实现的 *管理* 的操作，比如对学院、系的添加、删除、遍历等
- 3）解决方案：把学校、院、系都看做是组织结构，他们之间没有继承的关系，而是一个树形结构，可以更好的实现管理操作 ==> 组合模式



### 2、组合模式基本介绍

- 1）组合模式（Composite Pattern），又叫<mark>部分整体模式</mark>。它创建了对象组的树形结构，将对象组合成树状结构以表示“整体-部分”的层次关系
- 2）组合模式<mark>依据树形结构来组合对象</mark>，用来表示部分以及整体层次
- 3）这种类型的设计模式属于<mark>结构型模式</mark>
- 4）组合模式使得用户对单个对象和组合对象的访问具有一致性，即：组合能让客户以一致的方式处理个别对象以及组合对象

**原理类图**

![image](images\组合模式\组合模式图3.png)

**对原理结构图的说明一即组合模式的角色及职责**

- 1）`Component`：这是组合中对象声明接口。在适当情况下，实现所有类共有的接口默认行为，用于访问和管理 `Component`子部件。`Component`可以是抽象类或者接口
- 2）`Leaf`：在组合中表示叶子结点，叶子结点没有子节点
- 3）`Composite`：非叶子结点，用于存储子部件，在`Component`接口中实现子部件的相关操作。比如增加、删除 

**解决的问题**

组合模式解决这样的问题，当我们的要处理的对象可以生成一棵树形结构，而我们要对树上的节点和叶子进行操作时，它能够提供一致的方式，而不用考虑它是节点还是叶子

![image-20211023222839054](images\组合模式\组合模式图4.png)



### 3、组合模式解决学校院系展示

**UML 类图**

![image-20211023230113883](images\组合模式\组合模式图5.png)

**核心代码**

```java
// Component 抽象类
public abstract class OrganizationComponent {
    private String name;

    public OrganizationComponent(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void add(OrganizationComponent organizationComponent) {
        throw new UnsupportedOperationException();
    }

    public void remove(OrganizationComponent organizationComponent) {
        throw new UnsupportedOperationException();
    }

    public abstract void print();
}
// Composite 非叶子节点
public class University extends OrganizationComponent {
    List<OrganizationComponent> organizationComponentList = new ArrayList<>();

    public University(String name) {
        super(name);
    }

    @Override
    public void add(OrganizationComponent organizationComponent) {
        organizationComponentList.add(organizationComponent);
    }

    @Override
    public void remove(OrganizationComponent organizationComponent) {
        organizationComponent.remove(organizationComponent);
    }

    @Override
    public void print() {
        for (OrganizationComponent organizationComponent : organizationComponentList) {
            organizationComponent.print();
        }
    }
}
public class College extends OrganizationComponent {
    List<OrganizationComponent> organizationComponentList = new ArrayList<>();

    public College(String name) {
        super(name);
    }

    @Override
    public void add(OrganizationComponent organizationComponent) {
        organizationComponentList.add(organizationComponent);
    }

    @Override
    public void remove(OrganizationComponent organizationComponent) {
        organizationComponent.remove(organizationComponent);
    }

    @Override
    public void print() {
        System.out.println("=============" + getName() + "=============");
        for (OrganizationComponent organizationComponent : organizationComponentList) {
            organizationComponent.print();
        }
    }
}
// Leaf 叶子结点
public class Major extends OrganizationComponent {
    public Major(String name) {
        super(name);
    }

    @Override
    public void print() {
        System.out.println(getName());
    }
}
// 客户端
public class Client {
    public static void main(String[] args) {
        //大学
        OrganizationComponent university = new University("清华大学");
        //学院
        OrganizationComponent computerCollege = new College("计算机学院");
        OrganizationComponent infoEngineerCollege = new College("信息工程学院");
        //专业
        computerCollege.add(new Major("软件工程"));
        computerCollege.add(new Major("网络工程"));
        computerCollege.add(new Major("计算机科学与技术"));
        infoEngineerCollege.add(new Major("通信工程"));
        infoEngineerCollege.add(new Major("信息工程"));

        university.add(computerCollege);
        university.add(infoEngineerCollege);
        university.print();
        //=============计算机学院=============
        //软件工程
        //网络工程
        //计算机科学与技术
        //=============信息工程学院=============
        //通信工程
        //信息工程
    }
}
```



### 4、JDK 源码分析

Java 的集合类—— HashMap 就使用了组合模式

**UML 类图**

![image-20211024160404083](images\组合模式\组合模式图6.png)

**核心代码**

```java
// Component
public interface Map<K,V> {
    interface Entry<K,V> {}
}
public abstract class AbstractMap<K,V> implements Map<K,V> {}
// Composite
public class HashMap<K,V> extends AbstractMap<K,V> implements Map<K,V>, Cloneable, Serializable {
    // Leaf
    static class Node<K,V> implements Map.Entry<K,V> {}
}
```

**说明**

- 1）Map 就是一个抽象的构建，类似`Component`
- 2）HashMap 是一个中间的构建，类似`Composite`，实现 / 继承了相关方法 put、putAll
- 3）Node 是 HashMap 的静态内部类，类似`Leaf`叶子节点，这里就没有 put



### 5、注意事项和细节

- 1）<mark>简化客户端操作</mark>：客户端只需要面对一致的对象，而不用考虑整体部分或者节点叶子的问题
- 2）<mark>具有较强扩展性</mark>：当我们要更改组合对象时，我们只需要调整内部的层次关系，客户端不用做出任何改动
- 3）<mark>方便创建复杂的层次结构</mark>：客户端不用理会组合里面的组成细节，容易添加节点或者叶子，从而创建出复杂的树形结构
- 4）<mark>需要遍历组织机构，或者处理的对象具有树形结构时，非常适合使用组合模式</mark>
- 5）<mark>要求较高的抽象性，如果节点和叶子有很多差异性的话，比如很多方法和属性都不一样，不适合使用组合模式</mark>

## 【10】外观模式

### 1、影院管理项目

组建一个家庭影院：

DVD 播放器、投影仪、自动屏幕、环绕立体声、爆米花机，要求完成使用家庭影院的功能，其过程为：

- 直接用遥控器：统筹各设备开关
- 开爆米花机
- 放下屏幕
- 开投影仪
- 开音响
- 开DVD，选dvd
- 去拿爆米花
- 调暗灯光
- 播放
- 观影结束后，关闭各种设备

**传统方式解决影院管理**

![传统方式解决影院管理](images\外观模式\外观模式图1.png)

```java
ClientTest{
    public static void main(String[] args){
        // 1、创建相关的对象
        // 2、调用创建的各个对象的一系列方法
        // 3、调用DVDPlayer对象的play方法
    }
}
```

**传统方式解决影院管理问题分析**

- 1）在 ClientTest 的 main 方法中，创建各个子系统的对象，并直接去调用子系统（对象）相关方法，会造成调用过程混乱，没有清晰的过程
- 2）不利于在 ClientTest 中去维护对子系统的操作
- 3）解决思路：定义一个高层接口，给子系统中的一组接口提供一个<mark>一致的界面（比如在高层接口提供四个方法ready，play，pause，end）</mark>，用来访问子系统中的一群接口
- 4）也就是说就是通过定义一个一致的接口（界面类），用以屏蔽内部子系统的细节，使得调用端只需跟这个接口发生调用，而无需关心这个子系统的内部细节 ==》外观模式



### 2、外观模式基本介绍

外观模式（Facade），也叫<mark>过程模式</mark>

外观模式为子系统中的一组接口提供一个一致的界面，此模式定义了一个高层接口，用以屏蔽内部子系统的细节，使得调用端只需跟这个接口发生调用，而无需关心这个子系统的内部细节，这个接口使得这一子系统更加容易使用

**原理类图**

![外观模式原理类图](images\外观模式\外观模式图2.png)

**原理类图的说明（外观模式的角色）**

- 1）外观类（Facade）：为调用端提供统一的调用接口，外观类知道哪些子系统负责处理请求，从而将调用端的请求代理给适当子系统对象
- 2）调用者（Client）：外观接口的调用者
- 3）子系统的集合：指模块或者子系统，处理 Facade 对象指派的任务，是功能的实际提供者



### 3、外观模式解决影院管理

- 1）外观模式可以理解为转换一群接口，客户只要调用一个接口，而不用调用多个接口才能达到目的，比如：
  - 在 PC 上安装软件的时候经常有一键安装选项（省去选择安装目录、安装的组件等等）
  - 手机的重启功能（把关机和启动合为一个操作）
- 2）外观模式就是解决多个复杂接口带来的使用困难，起到简化用户操作的作用

![image-20211027210310018](images\外观模式\外观模式图3.png)

**使用外观模式来完成家庭影院项目**

![未命名文件 (2)](images\外观模式\外观模式图4.png)

**UML 类图**

![image-20211027224917586](images\外观模式\外观模式图5.png)

**核心代码**

【投影仪】

```java
public class Projector {
    private static Projector projector = new Projector();

    public static Projector getInstance() {
        return projector;
    }

    public void on() {
        System.out.println("打开投影仪...");
    }

    public void off() {
        System.out.println("关闭投影仪...");
    }

    public void focus() {
        System.out.println("投影仪聚焦...");
    }

    public void zoom() {
        System.out.println("投影仪放大...");
    }
}
```

【DVD 播放器】

```java
public class DVDPlayer {
    private static DVDPlayer player = new DVDPlayer();

    public static DVDPlayer getInstance() {
        return player;
    }

    public void on() {
        System.out.println("打开DVD播放器...");
    }

    public void off() {
        System.out.println("关闭DVD播放器...");
    }

    public void play() {
        System.out.println("播放DVD播放器...");
    }

    public void pause() {
        System.out.println("暂停DVD播放器...");
    }

    public void setDvd(String dvd) {
        System.out.println("选dvd：" + dvd + "...");
    }
}
```

【荧幕】

```java
public class Screen {
    private static Screen screen = new Screen();

    public static Screen getInstance() {
        return screen;
    }

    public void up() {
        System.out.println("升起荧幕...");
    }

    public void down() {
        System.out.println("拉下荧幕...");
    }
}
```

【立体声】

```java
public class Stereo {
    private static Stereo stereo = new Stereo();

    public static Stereo getInstance() {
        return stereo;
    }

    public void on() {
        System.out.println("打开立体声...");
    }

    public void off() {
        System.out.println("关闭立体声...");
    }

    public void setVolume(Integer volume) {
        System.out.println("立体声音量+" + volume + "...");
    }
}
```

【灯光】

```java
public class TheaterLights {
    private static TheaterLights lights = new TheaterLights();

    public static TheaterLights getInstance() {
        return lights;
    }

    public void on() {
        System.out.println("打开灯光...");
    }

    public void off() {
        System.out.println("关闭灯光...");
    }

    public void dim() {
        System.out.println("调暗灯光...");
    }

    public void bright() {
        System.out.println("调亮灯光...");
    }
}
```

【爆米花机器】

```java
public class Popcorn {
    private static Popcorn popcorn = new Popcorn();

    public static Popcorn getInstance() {
        return popcorn;
    }

    public void on() {
        System.out.println("打开爆米花机器...");
    }

    public void off() {
        System.out.println("关闭爆米花机器...");
    }

    public void pop() {
        System.out.println("取出爆米花...");
    }
}
```

【家庭影院 Facade】

```java
public class HomeTheaterFacade {
    private Popcorn popcorn;
    private Screen screen;
    private Stereo stereo;
    private TheaterLights lights;
    private Projector projector;
    private DVDPlayer player;

    public HomeTheaterFacade() {
        this.popcorn = Popcorn.getInstance();
        this.screen = Screen.getInstance();
        this.stereo = Stereo.getInstance();
        this.lights = TheaterLights.getInstance();
        this.projector = Projector.getInstance();
        this.player = DVDPlayer.getInstance();
    }

    public void ready() {
        lights.on(); // 打开灯光
        popcorn.on(); // 开爆米花机
        screen.down(); // 放下屏幕
        projector.on(); // 开投影仪
        projector.focus();
        projector.zoom();
        stereo.on(); // 开音响，设置音量
        stereo.setVolume(8);
        player.on(); // 开DVD，选dvd
        player.setDvd("坦塔尼克号");
        popcorn.pop(); // 去拿爆米花，关闭机器
        popcorn.off();
        lights.dim(); // 调暗灯光
    }

    public void play() {
        player.play();
    }

    public void pause() {
        player.pause();
    }

    public void end() {
        player.off();
        projector.off();
        stereo.off();
        lights.bright();
        screen.up();
    }
}
```

【客户端】

```java
public class Client {
    public static void main(String[] args) throws InterruptedException {
        HomeTheaterFacade homeTheaterFacade = new HomeTheaterFacade();
        System.out.println("===========家庭影院初始化============");
        homeTheaterFacade.ready();
        System.out.println("===========家庭影院沉浸式播放============");
        homeTheaterFacade.play();
        Thread.sleep(1000);
        System.out.println("===========家庭影院暂停============");
        homeTheaterFacade.pause();
        Thread.sleep(1000);
        System.out.println("===========家庭影院沉浸式播放============");
        homeTheaterFacade.play();
        Thread.sleep(1000);
        System.out.println("===========家庭影院结束============");
        homeTheaterFacade.end();
    }
}
```



### 4、MyBatis 框架源码分析

MyBatis 中 Configuration 去创建 MetaObject 对象时使用到了外观模式

**代码分析**

![image-20211204162630730](images\外观模式\外观模式图6.png)

![image-20211204162725272](images\外观模式\外观模式图7.png)

**示意图**

![image-20211204164131376](images\外观模式\外观模式图8.png)



### 5、外观模式的注意事项和细节

- 1）外观模式对外屏蔽了子系统的细节，因此外观模式降低了客户端对子系统使用的复杂性
- 2）外观模式对客户端与子系统的耦合关系，让子系统内部的模块更易维护和扩展
- 3）通过合理的使用外观模式，可以帮我们更好的划分访问的层次
- 4）当系统需要进行分层设计时，可以考虑使用 Facade 模式
- 5）在维护一个遗留的大型系统时，可能这个系统已经变得非常难以维护和扩展，此时可以考虑为新系统开发一个 Facade 类，来提供遗留系统的比较清晰简单的接口，让新系统与 Facade 类交互，提高复用性
- 6）不能过多的或者不合理的使用外观模式，使用外观模式好，还是直接调用模块好。要以让系统有层次，利于维护为目的

## 【11】享元模式

### 1、展示网站项目需求

小型的外包项目，给客户 A 做一个产品展示网站，客户 A 的朋友感觉效果不错，也希望做这样的产品展示网站，但是要求都有些不同：

- 1）有客户要求以新闻的形式发布
- 2）有客户人要求以博客的形式发布
- 3）有客户希望以微信公众号的形式发布

**传统方案解决网站展现项目**

- 1）直接复制粘贴一份，然后根据客户不同要求，进行定制修改
- 2）给每个网站租用一个空间
- 3）方案设计示意图

![image-20211203213310930](images\享元模式\享元模式图1.png)

**传统方案解决网站展现项目-问题分析**

- 1）需要的网站结构相似度很高，而且都不是高问量网站，如果分成多个虚拟空间来处理，相当于一个相同网站的实例对象很多，造成服务器的<mark>资源浪费</mark>
- 2）解决思路：<mark>整合到一个网站中，共享其相关的代码和数据</mark>，对于硬盘、内存、CPU、数据库空间等服务器资源都可以达成共享，减少服务器资源
- 3）对于代码来说，由于是一份实例，维护和扩展都更加容易
- 4）上面的解决思路就可以使用**享元模式**来解决



### 2、享元模式基本介绍

- 1）享元模式（Flyweight Pattern）也叫**蝇量模式**：<mark>运用共享技术有效地支持大量细粒度的对象</mark>
- 2）<mark>常用于系统底层开发，解决系统的性能问题</mark>。像数据库连接池，里面都是创建好的连接对象，在这些连接对象中有我们需要的则直接拿来用，避免重新创建，如果没有我们需要的，则创建一个
- 3）享元模式能够<mark>解决重复对象的内存浪费的问题</mark>。当系统中有大量相似对象，需要缓冲池时，不需总是创建新对象，可以从缓冲池里拿。这样可以<mark>降低系统内存，同时提高效率</mark>
- 4）<mark>享元模式经典的应用场景就是池技术了，String常量池、数据库连接池、缓冲池等等都是享元模式的应用</mark>，享元模式是池技术的重要实现方式

![image-20211203214444968](images\享元模式\享元模式图2.png)



### 3、享元模式的原理类图

![image-20211203215034074](images\享元模式\享元模式图3.png)

**对原理图的说明——即模式的角色和职责**

- 1）Flyweight：抽象的享元角色，是抽象的产品类，同时定义出对象的<mark>外部状态</mark>和<mark>内部状态</mark>的接口和实现
- 2）ConcreteFlyweight：具体的享元角色，是具体的产品类，实现抽象角色定义的相关业务
- 3）UnsharedConcreteFlyweight：不可共享的角色，一般不会出现在享元工厂中
- 4）FlyweightFactory：享元工厂类，用于构建一个池容器（集合），同时提供从池中获取对象的方法



### 4、内部状态和外部状态

比如围棋、五子棋、跳棋，它们都有大量的棋子对象，围棋和五子棋只有黑白两色，跳棋颜色多一点。所以棋子颜色就是棋子的内部状态；而各个棋子之间的差别就是位置的不同。当我们落子后，落子颜色是定的，但位置是变化的，所以棋子坐标就是棋子的外部状态

- 1）享元模式提出了两个要求：<mark>细粒度和共享对象</mark>。即将对象的信息分为两个部分：内部状态和外部状态
- 2）**内部状态**：指对象共享出来的信息，存储在享元对象内部且不会随环境的改变而改变
- 3）**外部状态**：指对象得以依赖的一个标记，是随环境改变而改变的、不可共享的状态

举个例子：围模理论上有 361 个空位可以放棋子，每盘棋都有可能有两三百个棋子对象产生。因为内存空间有限，一台服务器很难支持更多的玩家玩围模游戏。如果用享元模式来处理棋子，那么棋子对象就可以减少到只有两个实例，这样就很好的解决了对象的开销问题



### 5、享元模式解决网站展现项目

**原理类图**

![image-20211204200105089](images\享元模式\享元模式图4.png)

**UML 类图**

![image-20211204203743995](images\享元模式\享元模式图5.png)

**核心代码**

```java
/**
 * 内部状态，共享角色
 */
public enum Type {
    新闻,
    博客,
    微信公众号
}
/**
 * 外部状态，非共享角色
 */
public class User {
    private String name;

    public User(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
/**
 * 抽象的享元角色
 */
public abstract class Website {
    public abstract void use(User user);
}
/**
 * 具体的享元角色
 */
public class ConcreteWebsite extends Website {
    private Type type;

    public ConcreteWebsite(Type type) {
        this.type = type;
    }

    @Override
    public void use(User user) {
        System.out.println("网站正在使用中：类型为" + type.name() + "，使用者为" + user.getName());
    }
}
/**
 * 享元工厂类
 */
public class WebsiteFactory {
    private static Map<Type, Website> pool = new HashMap<>();

    public static Website getWebsiteCategory(Type type) {
        if (pool.get(type) == null) {
            pool.put(type, new ConcreteWebsite(type));
        }
        return pool.get(type);
    }

    public static Integer getSize() {
        return pool.size();
    }
}
```

**测试**

```java
Website newsWebsite = WebsiteFactory.getWebsiteCategory(Type.新闻);
newsWebsite.use(new User("Tom"));
Website blogWebsite1 = WebsiteFactory.getWebsiteCategory(Type.博客);
blogWebsite1.use(new User("Jerry"));
Website blogWebsite2 = WebsiteFactory.getWebsiteCategory(Type.博客);
blogWebsite2.use(new User("John"));
Website blogWebsite3 = WebsiteFactory.getWebsiteCategory(Type.博客);
blogWebsite3.use(new User("Smith"));
Website wxWebsite = WebsiteFactory.getWebsiteCategory(Type.微信公众号);
wxWebsite.use(new User("Mack"));
System.out.println(WebsiteFactory.getSize());
//网站正在使用中：类型为新闻，使用者为Tom
//网站正在使用中：类型为博客，使用者为Jerry
//网站正在使用中：类型为博客，使用者为John
//网站正在使用中：类型为博客，使用者为Smith
//网站正在使用中：类型为微信公众号，使用者为Mack
//3
```



### 6、Integer 源码分析

首先先看一段代码测试

```java
Integer x = Integer.valueOf(127);
Integer y = new Integer(127);
Integer z = Integer.valueOf(127);
Integer w = new Integer(127);
System.out.println(x.equals(y)); // true
System.out.println(x == y);      // false
System.out.println(x == z);      // true
System.out.println(w == x);      // false
System.out.println(w == y);      // false
```

我们知道：`equals`比较的是对象的内容，`==`比较的是对象的实例

- `x.equals(y)`结果为`true`：比较的是大小，所以结果为`true`
- `x == y`、`w == x`、`w == y`结果为`false`：由于 y 是 new 出来的，所以结果为`false`
- `x == z`结果为`true`：**这是为什么呢？？？**

我们追踪一下`Integer`对象的`valueOf`方法，看一下源码

![image-20211204215522874](images\享元模式\享元模式图6.png)

这里的`low`和`high`是多少呢？

![image-20211204215651116](images\享元模式\享元模式图7.png)

我们通过`IntegerCache`中源码大概基本分析出

- `low`为`-128`
- `high`为`127`

所以当`Integer`在`[-128, 127]`时，会返回`IntegerCache`的`cache[]`数组内容；否则，`valueOf`方法相当于`new Integer`了

也就是说，`Integer.valueOf(x)`方法使用的就是**享元模式** 

另外，我们也可以分析出：

- <mark>当数值范围在`[-128, 127]`时，使用`valueOf`方法执行速度比`new`更快</mark>



### 7、享元模式的注意事项和细节

- 1）在享元模式这样理解，<mark>“享”就表示共享，“元”表示对象</mark>
- 2）系统中有大量对象，这些对象消耗大量内存，并且对象的状态大部分可以外部化时，我们就可以考虑选用享元模式
- 3）用唯一标识码判断，如果在内存中有，则返回这个唯一标识码所标识的对象，用 HashMap/HashTable 存储
- 4）<mark>享元模式大大减少了对象的创建，降低了程序内存的占用，提高效率</mark>
- 5）<mark>享元模式提高了系统的复杂度，需要分离出内部状态和外部状态</mark>。而外部状态具有固化特性，不应该随着内部状态的改变而改变，这是我们使用享元模式需要注意的地方
- 6）使用享元模式时，注意划分内部状态和外部状态，并且需要有一个工厂类加以控制
- 7）<mark>享元模式经典的应用场景是需要缓冲池的场景</mark>，比如 String 常量池、数据库连接池

## 【12】代理模式

### 1、基本介绍

- 1）代理模式：为一个对象提供一个替身，以控制对这个对象的访问。即<mark>通过代理对象访问目标对象</mark>
- 2）这样做的好处是：可以在目标对象实现的基础上，增强额外的功能操作，即扩展目标对象的功能
- 3）被代理的对象可以是远程对象、创建开销大的对象或需要安全控制的对象
- 4）代理模式有不同的形式，主要有三种：
  - <mark>静态代理</mark>
  - <mark>动态代理</mark>：JDK 代理、接口代理
  - <mark>Cglib 代理</mark>：可以在内存动态的创建对象，而不需要实现接口，它是属于动态代理的范畴

![image-20211208201506612](images\代理模式\代理模式图1.png)



### 2、静态代理

#### 2.1、基本介绍

静态代理在使里时，需要定义接口或者父类，被代理对象（即目标对象）与代理对象一起实现租同的接口或者是继承和同父类—
应用实例

#### 2.2、应用实例

- 1）定义一个接口：`ITeacherDao`
- 2）目标对象`TeacherDAO`实现接口`ITeacherDAO`
- 3）使用静态代理方式，就需要在代理对象`TeacherDAOProxy`中也实现`ITeacherDAO`
- 4）调用的时候通过调用代理对象的方法来调用目标对象
- 5）**特别提醒**：代理对象与目标对象要实现相同的接口，然后通过调用相同的方法来调用目标对象的方法

**UML 类图**

![image-20211208211044367](images\代理模式\代理模式图2.png)

![image-20211208212227224](images\代理模式\代理模式图3.png)

**核心代码**

```java
/**
 * 代理接口
 */
public interface ITeacherDao {
    void teach();
}
/**
 * 被代理对象
 */
public class TeacherDao implements ITeacherDao {
    @Override
    public void teach() {
        System.out.println("老师授课中...");
    }
}
/**
 * 代理对象
 */
public class TeacherDaoProxy implements ITeacherDao {
    private ITeacherDao iTeacherDao;

    public TeacherDaoProxy(ITeacherDao iTeacherDao) {
        this.iTeacherDao = iTeacherDao;
    }

    @Override
    public void teach() {
        System.out.println("准备授课...");
        iTeacherDao.teach();
        System.out.println("结束授课...");
    }
}
```

**调用代理**

```java
//创建被代理对象
TeacherDao teacherDao = new TeacherDao();
//创建代理对象，聚合被代理对象
TeacherDaoProxy teacherDaoProxy = new TeacherDaoProxy(teacherDao);
//通过代理对象，调用被代理对象的方法
teacherDaoProxy.teach();
```

#### 2.3、静态代理优缺点

- 1）**优点**：在不修改目标对象的功能前提下，能通过代理对象对目标功能扩展
- 2）**缺点**：因为代理对象需要与目标对象实现一样的接口，所以会有很多代理类
- 3）**缺点**：一旦接口增加方法，目标对象与代理对象都要维护



### 3、动态代理

#### 3.1、基本介绍

- 1）代理对象不需要实现接口，但是目标对象要实现接口，否则不能用动态代理
- 2）代理对象的生成，是利用 JDK 的 APl，动态的在内存中构建代理对象
- 3）动态代理也叫做：<mark>JDK 代理、接口代理</mark>

#### 3.2、JDK 中生成代理对象的 API

- 1）代理类所在包：`java.lang.reflect.Proxy`

- 2）JDK 实现代理只需要使用`newProxyInstance`方法，但是该方法需要接收三个参数，完整的写法是：

  ```java
  static Object newProxylnstance(ClassLoader loader, Class<?>[] interfaces, InvocationHandler h)
  ```

**UML 类图**

![image-20211208214530692](images\代理模式\代理模式图4.png)

**核心代码**

```java
// ITeacherDao与TeacherDao同上
/**
 * 代理工厂
 */
public class TeacherFactory {
    /**
     * 目标对象
     */
    private Object target;

    public TeacherFactory(Object target) {
        this.target = target;
    }

    public Object newProxyInstance() {
        return Proxy.newProxyInstance(target.getClass().getClassLoader(), target.getClass().getInterfaces(), new InvocationHandler() {
            @Override
            public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
                System.out.println("JDK代理授课开始...");
                Object returnVal = method.invoke(target, args);
                System.out.println("JDK代理授课结束...");
                return returnVal;
            }
        });
    }
}
```

其中几个参数

- 1）`ClassLoader loader`：指定当前目标对象使用的类加载器，获取加载器的方法固定
- 2）`Class<?>[] interfaces`：目标对象实现的接口类型，使用泛型方法确认类型
- 3）`InvocationHandler h`：事情处理，执行目标对象的方法时触发事情处理器方法，把当前执行的目标对象方法作为参数传入



### 4、Cglib 代理

#### 4.1、基本介绍

- 1）静态代理和 JDK 代理模式都要求目标对象是实现一个接口，但是有时候目标对象只是一个单独的对象，并没有实现任何的接口，这个时候可使用目标对象子类来实现代理——这就是 Cglib 代理
- 2）<mark>Cglib 代理也叫作子类代理</mark>，它是在内存中构建一个子类对象从而实现对目标对象功能扩展，有些书也将 Cglib 代理归属到动态代理。
- 3）Cglib 是一个强大的高性能的代码生成包，它可以在运行期扩展 java 类与实现 java 接口。它广泛的被许多 AOP 的框架使用，例如 Spring AOP，实现方法拦截
- 4）在 AOP 编程中如何选择代理模式：
  - 目标对象需要实现接口，用 JDK 代理
  - 目标对象不需要实现接口，用 Cglib 代理
- 5）Cglib 包的底层是通过使用字节码处理框架 ASM 来转换字节码并生成新的类

#### 4.2、实现步骤

- 1）需要引入`cglib`的 jar 文件

  ![image-20211210213734267](images\代理模式\代理模式图5.png)

- 2）在内存中动态构建子类，注意代理的类不能为`final`，否则报错`java.lang.IllegalArgumentException`

- 3）目标对象的方法如果为`final`/`static`，那么就不会被拦截，即不会执行目标对象额外的业务方法

#### 4.3、应用实例

**UML 类图**

![image-20211210202524247](images\代理模式\代理模式图6.png)

![image-20211210223144446](images\代理模式\代理模式图7.png)

**核心代码**

```java
/**
 * 被代理对象
 */
public class TeacherDao {
    public String teach() {
        System.out.println("老师授课中...");
        return "Good";
    }
}

/**
 * 代理工厂类
 */
public class ProxyFactory implements MethodInterceptor {
    /**
     * 目标对象
     */
    private Object target;

    /**
     * 构造函数
     *
     * @param target
     */
    public ProxyFactory(Object target) {
        this.target = target;
    }

    /**
     * 返回代理对象
     *
     * @return
     */
    public Object getProxyInstance() {
        // 1、创建工具类
        Enhancer enhancer = new Enhancer();
        // 2、设置父类
        enhancer.setSuperclass(target.getClass());
        // 3、设置回调函数
        enhancer.setCallback(this);
        // 4、创建子类对象，即代理对象
        return enhancer.create();
    }

    @Override
    public Object intercept(Object o, Method method, Object[] args, MethodProxy methodProxy) throws Throwable {
        System.out.println("cglib代理开始...");
        Object retVal = method.invoke(target, args);
        System.out.println("cglib代理结束...");
        return retVal;
    }
}
```

**调用代理**

```java
//创建目标对象
TeacherDao teacherDao = new TeacherDao();
//通过代理工厂创建代理对象
TeacherDao proxyInstance = (TeacherDao) new ProxyFactory(teacherDao).getProxyInstance();
//通过代理对象调用目标对象方法
String retVal = proxyInstance.teach();
System.out.println("retVal=" + retVal);
```



### 5、代理模式的变体

几种常见的代理模式介绍一几种变体

- 1）**防火墙代理**：内网通过代理穿透防火墙，实现对公网的访问

- 2）**缓存代理**：比如：当请求图片文件等资源时，先到缓存代理取，如果取到资源则 ok；如果取不到资源，再到公网或者数据库取，然后缓存

- 3）**远程代理**：远程对象的本地代表，通过它可以把远程对象当本地对象来调用。远程代理通过网络和真正的远程对象沟通信息

  ![image-20211211095830914](images\代理模式\代理模式图8.png)

- 4）**同步代理**：主要使用在多线程编程中，完成多线程间同步工作

## 【13】模板模式

### 1、豆浆制作问题

编写制作豆浆的程序，说明如下：

- 1）制作豆浆的流程选材 ----> 添加配料 ----> 浸泡 ----> 放到豆浆机打碎
- 2）通过添加不同的配料，可以制作出不同口味的豆浆
- 3）选材、浸泡和放到豆浆机打碎这几个步骤对于制作每种口味的豆浆都是一样的
- 4）请使用<mark>模板方法模式</mark>完成

说明：因为模板方法模式比较简单，很容易就想到这个方案，因此就直接使用，不再使用传统的方案来引出模板方法模式



### 2、基本介绍

- 1）模板方法模式（Template Method Pattern），又叫模板模式（Template Pattern），在一个抽象类公开定义了执行它的方法的模板。它的子类可以按需要重写方法实现，但调用将以抽象类中定义的方式进行
- 2）简单说，<mark>模板方法模式定义一个操作中的算法的骨架</mark>，而将一些步骤延迟到子类中，使得子类可以不改变一个算法的结构，就可以重定义该算法的某些特定步骤
- 3）这种类型的设计模式属于<mark>行为型模式</mark>

**原理类图**

![image-20211211105144906](images\模板模式\模板模式图1.png)

**对原理类图的说明——即模板方法模式的角色和职责**

- `AbstractClass`抽象类中实现了模板方法，定义了算法的骨架，具体子类需要去实现其抽象方法或重写其中方法
- `ConcreteClass`实现了抽象方法，已完成算法中特定子类的步骤



### 3、模板模式解决豆浆制作问题

**UML 类图**

![image-20211211120150856](images\模板模式\模板模式图2.png)

**核心代码**

```java
/**
 * 抽象方法
 */
public abstract class SoyaMilk {
    /**
     * 模板方法，定义为final禁止覆写
     */
    public final void make() {
        System.out.println(">>>>>>豆浆制作开始<<<<<<");
        useSoyBean();
        addIngredients();
        soak();
        mash();
        System.out.println(">>>>>>豆浆制作结束<<<<<<");
    }

    protected void useSoyBean() {
        System.out.println("Step1. 选用上好的黄豆.");
    }

    protected abstract void addIngredients();

    protected void soak() {
        System.out.println("Step3. 对黄豆和配料进行水洗浸泡.");
    }

    protected void mash() {
        System.out.println("Step4. 将充分浸泡过的黄豆和配料放入豆浆机中，开始打豆浆.");
    }
}
/**
 * 花生豆浆
 */
public class PeanutSoyaMilk extends SoyaMilk {
    public PeanutSoyaMilk() {
        System.out.println("============花生豆浆============");
    }
    @Override
    protected void addIngredients() {
        System.out.println("Step2. 加入上好的花生.");
    }
}
/**
 * 红豆豆浆
 */
public class RedBeanSoyaMilk extends SoyaMilk {
    public RedBeanSoyaMilk() {
        System.out.println("============红豆豆浆============");
    }
    @Override
    protected void addIngredients() {
        System.out.println("Step2. 加入上好的红豆.");
    }
}
/**
 * 芝麻豆浆
 */
public class SesameSoyaMilk extends SoyaMilk {
        public SesameSoyaMilk() {
        System.out.println("============芝麻豆浆============");
    }
    @Override
    protected void addIngredients() {
        System.out.println("Step2. 加入上好的芝麻.");
    }
}
```

**调用模板方法**

```java
SoyaMilk peanutSoyaMilk = new PeanutSoyaMilk();
peanutSoyaMilk.make();
SoyaMilk redBeanSoyaMilk = new RedBeanSoyaMilk();
redBeanSoyaMilk.make();
SoyaMilk sesameSoyaMilk = new SesameSoyaMilk();
sesameSoyaMilk.make();
/*
============花生豆浆============
>>>>>>豆浆制作开始<<<<<<
Step1. 选用上好的黄豆.
Step2. 加入上好的花生.
Step3. 对黄豆和配料进行水洗浸泡.
Step4. 将充分浸泡过的黄豆和配料放入豆浆机中，开始打豆浆.
>>>>>>豆浆制作结束<<<<<<
============红豆豆浆============
>>>>>>豆浆制作开始<<<<<<
Step1. 选用上好的黄豆.
Step2. 加入上好的红豆.
Step3. 对黄豆和配料进行水洗浸泡.
Step4. 将充分浸泡过的黄豆和配料放入豆浆机中，开始打豆浆.
>>>>>>豆浆制作结束<<<<<<
============芝麻豆浆============
>>>>>>豆浆制作开始<<<<<<
Step1. 选用上好的黄豆.
Step2. 加入上好的芝麻.
Step3. 对黄豆和配料进行水洗浸泡.
Step4. 将充分浸泡过的黄豆和配料放入豆浆机中，开始打豆浆.
>>>>>>豆浆制作结束<<<<<<
*/
```



### 4、钩子方法

- 1）在模板方法模式的父类中，我们可以定义一个方法，它<mark>默认不做任何事，子类可以视情况要不要覆盖它</mark>，该方法称为“钩子”
- 2）还是用上面做豆浆的例子来讲解，比如，我们还希望制作纯豆浆，不添加任何的配料，请使用钩子方法对前面的模板方法进行改造

**核心代码**

```java
public abstract class SoyaMilk {
    public final void make() {
        // ...
        if (customAddIngredients()) {
            addIngredients();
        }
        // ...
    }
    // ...
}

/**
 * 纯豆浆
 */
public class PureSoyaMilk extends SoyaMilk {
    public PureSoyaMilk() {
        System.out.println("============纯豆浆============");
    }

    @Override
    protected void addIngredients() {
        // 空实现即可
    }

    @Override
    protected Boolean customAddIngredients() {
        return false;
    }
}
```

**测试钩子方法**

```java
SoyaMilk pureSoyaMilk = new PureSoyaMilk();
pureSoyaMilk.make();
/*
============纯豆浆============
>>>>>>豆浆制作开始<<<<<<
Step1. 选用上好的黄豆.
Step3. 对黄豆和配料进行水洗浸泡.
Step4. 将充分浸泡过的黄豆和配料放入豆浆机中，开始打豆浆.
>>>>>>豆浆制作结束<<<<<<
*/
```



### 5、Spring 框架源码分析

`AbstractApplicationContext.java`中有一个`refresh()`方法就是模板方法，其中定义了抽象方法和钩子方法

```java
// 模板方法
public void refresh() throws BeansException, IllegalStateException {
    synchronized (this.startupShutdownMonitor) {
        prepareRefresh();
        ConfigurableListableBeanFactory beanFactory = obtainFreshBeanFactory();
        prepareBeanFactory(beanFactory);
        try {
            postProcessBeanFactory(beanFactory); // 钩子方法
            invokeBeanFactoryPostProcessors(beanFactory);
            registerBeanPostProcessors(beanFactory);
            initMessageSource();
            initApplicationEventMulticaster();
            onRefresh(); // 钩子方法
            registerListeners();
            finishBeanFactoryInitialization(beanFactory);
            finishRefresh();
        }
        catch (BeansException ex) {
            if (logger.isWarnEnabled()) {
                logger.warn("Exception encountered during context initialization - " +
                            "cancelling refresh attempt: " + ex);
            }
            destroyBeans();
            cancelRefresh(ex);
            throw ex;
        }
        finally {
            resetCommonCaches();
        }
    }
}
protected ConfigurableListableBeanFactory obtainFreshBeanFactory() {
    refreshBeanFactory(); // 抽象方法
    ConfigurableListableBeanFactory beanFactory = getBeanFactory(); // 抽象方法
    if (logger.isDebugEnabled()) {
        logger.debug("Bean factory for " + getDisplayName() + ": " + beanFactory);
    }
    return beanFactory;
}
protected void postProcessBeanFactory(ConfigurableListableBeanFactory beanFactory) {
}
protected void onRefresh() throws BeansException {
    // For subclasses: do nothing by default.
}
```

**UML 类图**

![image-20211214211905994](images\模板模式\模板模式图3.png)



### 6、注意事项和细节

- 1）**基本思想**：算法只存在于一个地方，也就是在父类中，容易修改。需要修改算法时，只要修改父类的模板方法或者已经实现的某些步骤，子类就会继承这些修改
- 2）<mark>实现了最大化代码复用</mark>。父类的模板方法和已实现的某些步骤会被子类继承而直接使用
- 3）既统一了算法，也提供了很大的灵活性。父类的模板方法确保了算法的结构保持不变，同时由子类提供部分步骤的实现
- 4）**不足之处**：每一个不同的实现都需要一个子类实现，导致类的个数增加，使得系统更加庞大
- 5）一般模板方法都加上`final`关键字，防止子类重写模板方法
- 6）**使用场景**：当要完成在某个过程，该过程要执行一系列步骤，<mark>这一系列的步骤基本相同，但其个别步骤在实现时可能不同</mark>，通常考虑用模板方法模式来处理

## 【14】命令模式

### 1、智能生活项目需求

![image-20211217202526745](images\命令模式\命令模式图1.png)

- 1）我们买了一套智能家电，有照明灯、风扇、冰箱、洗衣机，只要在手机上安装 APP 就可以控制这些家电的工作
- 2）这些智能家电来自不同的厂家，我们不想针对每一种家电都安装一个 APP 分别控制，我们希望只要一个 APP 就可以控制全部智能家电
- 3）要实现一个 APP 控制所有智能家电的需要，则每个智能家电厂家都要提供一个统一的接口给 APP 调用，这时就可以考虑使用命令模式
- 4）<mark>命令模式可将“动作的请求者”从“动作的执行者”对象中解耦出来</mark>
- 5）在我们的例子中，动作的请求者是手机 APP，动作的执行者是每个厂商的一个家电产品



### 2、基本介绍

- 1）命令模式（Command Pattern）：在软件设计中，我们经常需要向某些对象发送请求，但是并不知道请求的接收者是谁，也不知道被请的操作是哪个，我们只需在程序运行时指定具体的请求接收者即可。此时可以使用命令模式来进行设计
- 2）命令模式使得请求发送者与请求接收者消除彼此之间的耦合，让对象之间的调用关系更加灵活，实现解耦
- 3）在命令模式中，会将一个请求封装为一个对象，以便使用不同参数来表示不同的请求（即命名），同时命令模式也支持可撤销的操作
- 4）通俗易懂的理解：将军发布命令，士兵去执行。其中有几个角色：
  - 将军（命令发布者）、士兵（命令的具体执行者）、命令（连接将军和士兵）
  - `Invoker`是调用者（将军），`Receiver`是被调用者（士兵），`MyCommand`是命令，实现了`Command`接口，持有接收对象

![image-20211217203724497](images\命令模式\命令模式图2.png)

**原理类图**

![](images\命令模式\命令模式图3.png)

**命令模式的角色及职责**

- `Invoker`调用者角色，只需要发布命令就可以控制接收者的行为
- `Receiver`接收者角色，知道如何实施或执行请求的相关操作
- `Command`命令角色，需要执行的所有命令都定义在这里，可以是接口或抽象类
- `ConcreteCommand`具体的命令角色，将一个接收者和一个动作绑定，调用接收者相应的操作，实现`execute`



### 3、命令模式解决智能生活项目

**UML 类图**

![image-20211219140719801](images\命令模式\命令模式图4.png)

![image-20211219150307716](images\命令模式\命令模式图5.png)

**核心代码**

```java
/**
 * 命令角色
 */
public interface Command {
    void execute();

    void undo();
}
/**
 * 空命令，什么也不干
 */
public class NonCommand implements Command {
    @Override
    public void execute() {

    }

    @Override
    public void undo() {

    }
}
/**
 * 调用者
 */
public class RemoteController {
    private Command[] onCommands;
    private Command[] offCommands;
    private Command restoreCommand;

    public RemoteController() {
        onCommands = new Command[5];
        offCommands = new Command[5];
        for (int i = 0; i < 5; i++) {
            onCommands[i] = new NonCommand();
            offCommands[i] = new NonCommand();
        }
    }

    public void setCommands(int no, Command onCommand, Command offCommand) {
        onCommands[no] = onCommand;
        offCommands[no] = offCommand;
    }

    public void onBtnCommand(int no) {
        restoreCommand = onCommands[no];
        restoreCommand.execute();
    }

    public void offBtnCommand(int no) {
        restoreCommand = offCommands[no];
        restoreCommand.execute();
    }

    public void undoBtnCommand() {
        restoreCommand.undo();
    }
}
/**
 * 接收者
 */
public class LightReceiver {
    public void on() {
        System.out.println("电灯打开了...");
    }

    public void off() {
        System.out.println("电灯关闭了...");
    }
}
public class TVReceiver {
    public void on() {
        System.out.println("电视打开了...");
    }

    public void off() {
        System.out.println("电视关闭了...");
    }
}
/**
 * 具体的命令角色
 */
public class LightOnCommand implements Command{
    private LightReceiver light;

    public LightOnCommand(LightReceiver light) {
        this.light = light;
    }

    @Override
    public void execute() {
        light.on();
    }

    @Override
    public void undo() {
        light.off();
    }
}
public class LightOffCommand implements Command {
    private LightReceiver light;

    public LightOffCommand(LightReceiver light) {
        this.light = light;
    }

    @Override
    public void execute() {
        light.off();
    }

    @Override
    public void undo() {
        light.on();
    }
}
public class TVOnCommand implements Command {
    private TVReceiver tv;

    public TVOnCommand(TVReceiver tv) {
        this.tv = tv;
    }

    @Override
    public void execute() {
        tv.on();
    }

    @Override
    public void undo() {
        tv.off();
    }
}
public class TVOffCommand implements Command {
    private TVReceiver tv;

    public TVOffCommand(TVReceiver tv) {
        this.tv = tv;
    }

    @Override
    public void execute() {
        tv.off();
    }

    @Override
    public void undo() {
        tv.on();
    }
}
```

**调用命令**

```java
// 初始化遥控器
RemoteController remoteController = new RemoteController();
// 操作电灯
int no = 0;
LightReceiver light = new LightReceiver();
remoteController.setCommands(no, new LightOnCommand(light), new LightOffCommand(light));
remoteController.onBtnCommand(no);
remoteController.offBtnCommand(no);
remoteController.undoBtnCommand();
// 操作电视
no = 1;
TVReceiver tv = new TVReceiver();
remoteController.setCommands(no, new TVOnCommand(tv), new TVOffCommand(tv));
remoteController.onBtnCommand(no);
remoteController.offBtnCommand(no);
remoteController.undoBtnCommand();
// 电灯打开了...
// 电灯关闭了...
// 电灯打开了...
// 电视打开了...
// 电视关闭了...
// 电视打开了...
```



### 4、Spring 框架 JdbcTemplate 源码分析

以`JdbcTemplate`类中`query()`方法中为例，我们可以发现其中定义了一个内部类`QueryStatementCallback`，而且`QueryStatementCallback`类实现了`StatementCallback`接口的`doInStatement`方法

![image-20211219153622738](images\命令模式\命令模式图6.png)

这就是命令模式在 Spring 框架 `JdbcTemplate`源码中的应用，其中，

- `StatementCallback`充当了`Command`命令，其下有多个实现

  ![image-20211219154235556](images\命令模式\命令模式图7.png)

- `QueryStatementCallback`充当了`ConcreteCommand`具体的命令角色

- `Statement`充当了`Receiver`接收者角色

- `JdbcTemplate`本身作为调用者



### 5、命令模式的注意事项和细节

- 1）<mark>将发起请求的对象与执行请求的对象解耦</mark>。发起请求的对象是调用者，调用者只要调用命令对象的`execute()`方法就可以让接收者工作，而不必知道具体的接收者对象是谁、是如何实现的，命令对象会负责让接收者执行请求的动作，也就是说：“请求发起者”和“请求执行者”之间的解耦是通过命令对象实现的，<mark>命令对象起到了纽带桥梁的作用</mark>
- 2）<mark>容易设计一个命令队列</mark>。只要把命令对象放到列队，就可以<mark>多线程的执行命令</mark>
- 3）<mark>容易实现对请求的撤销和重做</mark>
- 4）**不足**：可能导致某些系统有过多的具体命令类，<mark>增加了系统的复杂度</mark>，这点在使用的时候要注意
- 5）<mark>空命令也是一种设计模式，它为我们省去了判空的操作</mark>。在上面的实例中，如果没有用空命令，我们每按下一个按键都要判空，这给我们编码带来一定的麻烦
- 6）命令模式经典的应用场景：界面的一个按钮对应一条命令、模拟 CMD（DOS命令）订单的撤销/恢复、触发-反馈机制
## 【15】访问者模式

### 1、测评系统

**完成测评系统需求
- 1）将人、观众分为男人和女人，对歌手进行测评，当看完某个歌手表演后，得到他们对该歌手不同的评价（评价有不同的种类，比如成功、失败等）
- 2）传统方案

![image-20211220200401952](images\访问者模式\访问者模式图1.png)

**传统方式的问题分析**

- 1）如果系统比较小，还是 ok 的，但是考虑系统增加越来越多新的功能时，对代码改动较大，违反了 OCP 原则，不利于维护 
- 2）扩展性不好，比如增加了新的人员类型，或者管理方法，都不好做
- 3）引出我们会使用新的设计模式——访问者模式



### 2、基本介绍

- 1）访问者模式（Visitor Pattern），封装一些作用于某种数据结构的各元素的操作，它可以在不改变数据结构的前提下定义作用于这些元素的新的操作
- 2）主要将数据结构与数据操作分离，<mark>解决数据结构和操作耦合性问题</mark>
- 3）访问者模式的基本工作原理是：在被访问的类里面加一个对外提供接待访问者的接口
- 4）访问者模式主要应用场景是：需要对一个对象结构中的对象进行很多不同操作（这些操作彼此没有关联），同时需要避免让这些操作“污染“这些对象的类，可以选用访问者模式解决

**原理类图**

![image-20211220203453678](images\访问者模式\访问者模式图2.png)

**访问者角色及职责**

- `Visitor`抽象访问者：为该对象结构中每个`ConcreteElement`类声明一个`visit`操作
- `ConcreteVisitor`具体访问者：实现`Visitor`中声明的操作
- `ObjectStructure`对象结构：能枚举它的元素，提供一个高层接口，允许访问者访问元素
- `Element`抽象元素：定义一个`accept`方法，接受一个访问者对象
- `ConcreteElement`具体元素：实现了`accept`方法



### 3、访问者模式实现测评系统

**UML 类图**

![image-20211220222333874](images\访问者模式\访问者模式图3.png)

**核心代码**

```java
/**
 * 抽象访问者
 */
public abstract class Action {
    public abstract void getManResult(Man man);

    public abstract void getWomanResult(Woman woman);
}
/**
 * 具体访问者
 */
public class Success extends Action {
    @Override
    public void getManResult(Man man) {
        System.out.println("男生给了通过");
    }

    @Override
    public void getWomanResult(Woman woman) {
        System.out.println("女生给了通过");
    }
}
public class Fail extends Action {
    @Override
    public void getManResult(Man man) {
        System.out.println("男生给了不通过");
    }

    @Override
    public void getWomanResult(Woman woman) {
        System.out.println("女生给了不通过");
    }
}
public class Wait extends Action {
    @Override
    public void getManResult(Man man) {
        System.out.println("男生给了待定");
    }

    @Override
    public void getWomanResult(Woman woman) {
        System.out.println("女生给了待定");
    }
}
/**
 * 抽象元素
 */
public abstract class Person {
    public abstract void accept(Action action);
}
/**
 * 具体元素
 */
public class Man extends Person {
    @Override
    public void accept(Action action) {
        action.getManResult(this);
    }
}
public class Woman extends Person {
    @Override
    public void accept(Action action) {
        action.getWomanResult(this);
    }
}
/**
 * 对象结构
 */
public class ObjectStructure {
    private List<Person> personList = new ArrayList<>();

    public void attach(Person p) {
        personList.add(p);
    }

    public void detach(Person p) {
        personList.remove(p);
    }

    public void display(Action action) {
        for (Person person : personList) {
            person.accept(action);
        }
    }
}
```

**调用测试**

```java
ObjectStructure objectStructure = new ObjectStructure();
objectStructure.attach(new Man());
objectStructure.attach(new Woman());
objectStructure.display(new Success());
System.out.println("============");
objectStructure.display(new Fail());
System.out.println("============");
objectStructure.display(new Wait());
//男生给了通过
//女生给了通过
//============
//男生给了不通过
//女生给了不通过
//============
//男生给了待定
//女生给了待定
```



### 4、双分派

该例中我们使用到了双分派

- **第一次分派**：首先在客户端程序中，将具体状态作为参数传递`Woman`中
- **第二次分派**：然后`Woman`类调用作为参数的具体方法`getWomanResult`，同时将自己`this`作为参数传入

所谓双分派是指不管类怎么变化，我们都能找到期望的方法运行

双分派意味着得到执行的操作取决于请求的种类和两个接收者的类型

以上述实例为例，假设我们要添加一个`Wait`的状态类，考察`Man`类和`Woman`类的反应

由于使用了双分派，<mark>只需增加一个 Action 子类即可在客户端调用即可，不需要改动任何其他类的代码</mark>



### 5、访问者模式的注意事项和细节

**优点**

- 1）访问者模式符合<mark>单一职责</mark>原则、让程序具有优秀的<mark>扩展性、灵活性</mark>非常高
- 2）访问者模式可以对功能进行统一，可以做报表、UI、拦截器与过滤器，<mark>适用于数据结构相对稳定的系统</mark>

**缺点**

- 1）具体元素对访问者公布细节，也就是说访问者关注了其他类的内部细节，这是<mark>迪米特法则所不建议的</mark>，这样造成了具体元素变更比较困难
- 2）<mark>违背了依赖倒转原则</mark>。访问者依赖的是具体元素，而不是抽象元素
- 3）因此，如果一个系统有比较稳定的数据结构，又有经常变化的功能需求，那么访问者模式就是比较合适的
## 【16】迭代器模式

### 1、学校院系结构展示需求

编写程序展示一个学校院系结构，要在一个页面中展示出学校的院系组成，一个学校有多个学院，一个学院有多个系。如图：

![image-20211221210654924](images\迭代器模式\迭代器模式图1.png)

**传统方案分析**

- 1）将学院看做是学校的子类，系是学院的子类，这样实际上是站在组织大小来进行分层次的
- 2）实际上我们的要求是：在一个页面中展示出学校的院系组成，一个学校有多个学院，一个学院有多个系，因此这种方案，不能很好实现的遍历的操作
- 3）解决方案：<mark>迭代器模式</mark>



### 2、基本介绍

- 1）迭代器模式（lterator Pattern）是常用的设计模式，属于行为型模式
- 2）如果我们的集合元素是用不同方式实现的，有数组、集合或者其他方式。当客户端要遍历这些集合元素的时候就要使用多种遍历方式，而且还会暴露元素的内部结构，可以考虑使用迭代器模式解决
- 3）迭代器模式，提供一种遍历集合元素的统一接口，用一致的方法遍历集合元素，不需要知道集合对象的底层表示，即：不暴露其内部的结构

**原理类图**

![image-20211221220357064](images\迭代器模式\迭代器模式图2.png)

**迭代器模式的角色及职责**

- `Iterator`迭代器接口：系统提供，含有`hasNext`、`next`、`remove`
- `ConcreteIterator`具体的迭代器：管理相关的迭代
- `Aggregate`聚合接口：将客户端和具体的聚合解耦
- `ConcreteAggregate`具体的聚合类：提供一个方法，返回可以正确遍历集合的迭代器
- `Client`客户端：通过`Iterator`迭代器接口和`Aggregate`聚合接口依赖其具体的迭代器和聚合子类



### 3、迭代器完成学校院系结构展示需求

**UML 类图**

![image-20211231205759473](images\迭代器模式\迭代器模式图3.png)

**核心代码**

具体的迭代器

```java
/**
 * 计算机学院迭代器类
 */
public class ComputerCollegeIterator implements Iterator {
    private Department[] departments;
    private Integer position = -1;

    public ComputerCollegeIterator(Department[] departments) {
        this.departments = departments;
    }

    @Override
    public boolean hasNext() {
        return position + 1 < departments.length && departments[position + 1] != null;
    }

    @Override
    public Object next() {
        return departments[++position];
    }
}
/**
 * 信息学院迭代器类
 */
public class InfoCollegeIterator implements Iterator {
    private List<Department> departments;
    private Integer position = -1;

    public InfoCollegeIterator(List<Department> departments) {
        this.departments = departments;
    }

    @Override
    public boolean hasNext() {
        return position + 1 < departments.size();
    }

    @Override
    public Object next() {
        return departments.get(++position);
    }
}
```

聚合接口

```java
public interface College {
    String getName();
    
    Iterator<Department> createIterator();
}
```

具体的聚合类

```java
/**
 * 计算机学院
 */
public class ComputerCollege implements College {
    private Department[] departments;
    private Integer position = 0;

    public ComputerCollege() {
        departments = new Department[5];
        departments[position++] = new Department("Java专业");
        departments[position++] = new Department("PHP专业");
        departments[position++] = new Department("Python专业");
    }

    @Override
    public String getName() {
        return "计算机学院";
    }

    @Override
    public Iterator<Department> createIterator() {
        return new ComputerCollegeIterator(departments);
    }
}
/**
 * 信息学院
 */
public class InfoCollege implements College {
    private List<Department> departments;

    public InfoCollege() {
        departments = new ArrayList<>();
        departments.add(new Department("信息安全专业"));
        departments.add(new Department("网络安全专业"));
        departments.add(new Department("服务器安全专业"));
    }

    @Override
    public String getName() {
        return "信息学院";
    }

    @Override
    public Iterator<Department> createIterator() {
        return new InfoCollegeIterator(departments);
    }
}
```

输出类

```java
public class OutPutImpl {

    public OutPutImpl() {
    }

    public void printCollege(List<College> collegeList) {
        Iterator<College> iterator = collegeList.iterator();
        while (iterator.hasNext()) {
            College college = iterator.next();
            System.out.println("============" + college.getName() + "============");
            printDepartment(college);
        }
    }

    private void printDepartment(College college) {
        Iterator<Department> iterator = college.createIterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next().getName());
        }
    }
}
```

调用测试

```java
List<College> collegeList = new ArrayList<>();
collegeList.add(new ComputerCollege());
collegeList.add(new InfoCollege());
new OutPutImpl().printCollege(collegeList);
```

打印结果

```java
//============计算机学院============
//Java专业
//PHP专业
//Python专业
//============信息学院============
//信息安全专业
//网络安全专业
//服务器安全专业
```



### 4、ArrayList 集合源码分析

**UML 类图**

![image-20211231213127490](images\迭代器模式\迭代器模式图4.png)

**角色分析说明**

- `Iterator`迭代器接口：由系统提供，定义了`hasNext()`和`next()`等方法
- `Itr`具体的迭代器实现类：作为`ArrayList`的内部类存在，实现了`Iterator`接口的`hasNext()`和`next()`等方法
- `List`聚合接口：定义了`iterator()`方法，返回一个迭代器接口对象
- `ArrayList`具体的聚合类：实现了`iterator()`方法

迭代器模式提供了一个不同集合类型（如`ArrayList`、`LinkedList`等）的统一遍历解决方案



### 5、迭代器模式的注意事项和细节

#### 优点

- 1）<mark>提供一个统一的方法遍历对象</mark>，客户不用再考虑聚合的类型，使用一种方法就可以遍历对象了
- 2）<mark>隐藏了聚合的内部结构</mark>，客户端要遍历聚合的时候只能取到迭代器，而不会知道聚合的具体组成
- 3）提供了一种设计思想，就是一个类应该只有一个引起变化的原因（<mark>单一责任原则</mark>）。在聚合类中，我们把迭代器分开，就是要把管理对象集合和遍历对象集合的责任分开，这样一来集合改变的话，只影响到聚合对象。而如果遍历方式改变的话，只影响到了迭代器
- 4）当要展示一组相似对象，或者遍历一组相同对象时使用，适合使用迭代器模式

#### 缺点

- 每个聚合对象都要一个迭代器，会生成多个迭代器不好管理类

## 【17】观察者模式

### 1、天气预报需求

具体要求如下：

- 1）气象站可以将每天测量到的温度，湿度，气压等等以公告的形式发布出去（比如发布到自己的网站或第三方）
- 2）需要设计开放型 API，便于其他第三方也能接入气象站获取数据
- 3）提供温度、气压和湿度的接口
- 4）测量数据更新时，要能实时的通知给第三方

![image-20220101111937130](images\观察者模式\观察者模式图1.png)



### 2、天气预报需求方案之普通方案

**WeatherData类**

通过对气象站项目的分析，我们可以初步设计出一个`WeatherData`类

![image-20220101112334529](images\观察者模式\观察者模式图2.png)

- 1）通过`getXxx`方法，可以让第三方接入，并得到相关信息
- 2）当数据有更新时，气象站通过调用`dataChange()`去更新数据，当第三方再次获取时，就能得到最新数据，当然也可以<mark>推送</mark>

![image-20220101113240574](images\观察者模式\观察者模式图3.png)

`CurrentConditions`（当前的天气情况）可以理解成是我们气象局的网站

**核心代码**

气象网站类

```java
/**
 * 当前的天气情况：可以理解成是气象局的网站
 */
public class CurrentConditions {
    private Float temperature;
    private Float pressure;
    private Float humidity;

    /**
     * 更新天气情况，通过推送的方式，由 WeatherData 调用
     *
     * @param temperature
     * @param pressure
     * @param humidity
     */
    public void update(Float temperature, Float pressure, Float humidity) {
        // 更新最新天气数据
        this.temperature = temperature;
        this.pressure = pressure;
        this.humidity = humidity;
        // 展示最新天气数据
        display();
    }

    /**
     * 公告板展示天气情况
     */
    public void display() {
        System.out.println("============最新天气============");
        System.out.println("*** 当前温度：" + this.temperature + " ℃ ***");
        System.out.println("*** 当前气压：" + this.pressure + " kPa ***");
        System.out.println("*** 当前湿度：" + this.humidity + " %RH ***");
    }
}
```

气象数据类

```java
/**
 * 核心类
 * 1、包含最新的天气信息情况
 * 2、含有 CurrentConditions 对象
 * 3、当数据更新时，主动调用 CurrentConditions 的 update() 方法
 */
public class WeatherData {
    private Float temperature;
    private Float pressure;
    private Float humidity;
    private CurrentConditions conditions;

    /**
     * 传入 CurrentConditions 对象
     *
     * @param conditions
     */
    public WeatherData(CurrentConditions conditions) {
        this.conditions = conditions;
    }

    public Float getTemperature() {
        return temperature;
    }

    public Float getPressure() {
        return pressure;
    }

    public Float getHumidity() {
        return humidity;
    }

    /**
     * 推送天气数据到网站
     */
    public void dataChange() {
        conditions.update(getTemperature(), getPressure(), getHumidity());
    }

    /**
     * 当天气数据发生变化时进行更新
     *
     * @param temperature
     * @param pressure
     * @param humidity
     */
    public void setData(Float temperature, Float pressure, Float humidity) {
        this.temperature = temperature;
        this.pressure = pressure;
        this.humidity = humidity;
        dataChange();
    }
}
```

客户端调用

```java
// 创建气象网站对象
CurrentConditions currentConditions = new CurrentConditions();
// 创建气象数据对象，并传入气象网站对象
WeatherData weatherData = new WeatherData(currentConditions);
// 天气发生变化时，更新最新的气象数据
weatherData.setData(10f, 150f, 40f);
//weatherData.setData(15f, 130f, 60f);
//weatherData.setData(13f, 160f, 20f);
```

测试结果

```java
============最新天气============
*** 当前温度：10.0 ℃ ***
*** 当前气压：150.0 kPa ***
*** 当前湿度：40.0 %RH ***
============最新天气============
*** 当前温度：15.0 ℃ ***
*** 当前气压：130.0 kPa ***
*** 当前湿度：60.0 %RH ***
============最新天气============
*** 当前温度：13.0 ℃ ***
*** 当前气压：160.0 kPa ***
*** 当前湿度：20.0 %RH ***
```

**问题分析**

- 1）其他第三方接入气象站获取数据的问题
- 2）无法在运行时动态的添加第三方（新浪网站）
- 3）违反`OCP`原则 => 观察者模式

在`WeatherData`中增加第三方时，都需要创建对应的第三方公台板对象并加入到`dataChange()`方法中，既不是动态加入，也不利于维护



### 3、观察者模式原理

观察者模式类似订牛奶业务

- 1）奶站 / 气象局：`Subject`
- 2）用户 / 第三方网站：`Observer`

`Subject`：登记注册、移除和通知

![image-20220105195846946](images\观察者模式\观察者模式图4.png)

- 1）`registerObserver()`：注册
- 2）`removeObserver()`：移除
- 3）`notifyObservers()`：通知所有的注册的用户，根据不同需求，可以是更新数据，让用户来取，也可能是实施推送，看具体需求定

`Observer`：接收输入

![image-20220105200332286](images\观察者模式\观察者模式图5.png)

<mark>观察者模式</mark>：对象之间多对一依赖的一种设计方案，被依赖的对象为`Subject`，依赖的对象为`Observer`，`Subject`通知`Observer`变化，比如这里的奶站是`Subject`，是1的一方。用户是`Observer`，是多的一方



### 4、天气预报需求方案之观察者模式

**UML 类图**

![image-20220105201025534](images\观察者模式\观察者模式图6.png)

![image-20220105205002693](images\观察者模式\观察者模式图7.png)

**核心代码**

**观察者对象`Observer`**

```java
/**
 * 观察者接口
 */
public interface Observer {
    void update(Float temperature, Float pressure, Float humidity);
}
/**
 * 观察者实现
 */
public class CurrentConditions implements Observer {
    private Float temperature;
    private Float pressure;
    private Float humidity;

    @Override
    public void update(Float temperature, Float pressure, Float humidity) {
        // 更新最新天气数据
        this.temperature = temperature;
        this.pressure = pressure;
        this.humidity = humidity;
        // 展示最新天气数据
        display();
    }

    /**
     * 公告板展示天气情况
     */
    public void display() {
        System.out.println("============最新天气============");
        System.out.println("*** 当前温度：" + this.temperature + " ℃ ***");
        System.out.println("*** 当前气压：" + this.pressure + " kPa ***");
        System.out.println("*** 当前湿度：" + this.humidity + " %RH ***");
    }
}
```

**主体对象`Subject`**

```java
/**
 * 主体对象接口
 */
public interface Subject {
    void registerObserver(Observer o);

    void removeObserver(Observer o);

    void notifyObservers();
}
/**
 * 主体对象实现
 */
public class WeatherData implements Subject {
    private Float temperature;
    private Float pressure;
    private Float humidity;
    private List<Observer> observerList;

    public WeatherData() {
        observerList = new ArrayList<>();
    }

    public Float getTemperature() {
        return temperature;
    }

    public Float getPressure() {
        return pressure;
    }

    public Float getHumidity() {
        return humidity;
    }

    /**
     * 推送天气数据到网站
     */
    public void dataChange() {
        notifyObservers();
    }

    /**
     * 当天气数据发生变化时进行更新
     *
     * @param temperature
     * @param pressure
     * @param humidity
     */
    public void setData(Float temperature, Float pressure, Float humidity) {
        this.temperature = temperature;
        this.pressure = pressure;
        this.humidity = humidity;
        dataChange();
    }

    @Override
    public void registerObserver(Observer o) {
        observerList.add(o);
    }

    @Override
    public void removeObserver(Observer o) {
        if(o!= null && observerList.contains(o)) {
            observerList.remove(o);
        }
    }

    @Override
    public void notifyObservers() {
        for (Observer observer : observerList) {
            observer.update(temperature, pressure, humidity);
        }
    }
}
```

**观察者对象`Observer`**

```java
public interface Observer {
    void update(Float temperature, Float pressure, Float humidity);
}
```

**调用测试**

```java
// 创建气象网站对象
CurrentConditions currentConditions = new CurrentConditions();
// 创建气象数据对象
WeatherData weatherData = new WeatherData();
// 注册气象网站对象
weatherData.registerObserver(currentConditions);
// 天气发生变化时，更新最新的气象数据
weatherData.setData(10f, 150f, 40f);
//============最新天气============
//*** 当前温度：10.0 ℃ ***
//*** 当前气压：150.0 kPa ***
//*** 当前湿度：40.0 %RH ***
```

**观察者模式的好处**

- 1）观察者模式设计后，会以集合的方式来管理用户`Observer`，包括注册、移除和通知
- 2）这样，我们增加观察者（这里可以理解成一个新的公告板），就不需要去修改核心类`WeatherData`不会修改代码，遵守了`ocp`原则

例如，我们新增`SinaWebSite`和`BaiDuWebSite`两个三方网站，接口气象局。此时三方只需实现相应接口即可，`WeatherData`不需要有任何的改变

```java
/**
 * 新增的三方观察者对象——新浪网
 */
public class SinaWebSite implements Observer {
    private Float temperature;
    private Float pressure;
    private Float humidity;

    /**
     * 更新天气情况，通过推送的方式，由 WeatherData 调用
     *
     * @param temperature
     * @param pressure
     * @param humidity
     */
    @Override
    public void update(Float temperature, Float pressure, Float humidity) {
        // 更新最新天气数据
        this.temperature = temperature;
        this.pressure = pressure;
        this.humidity = humidity;
        // 展示最新天气数据
        display();
    }

    /**
     * 公告板展示天气情况
     */
    public void display() {
        System.out.println("============新浪网-最新天气============");
        System.out.println("*** 新浪网-当前温度：" + this.temperature + " ℃ ***");
        System.out.println("*** 新浪网-当前气压：" + this.pressure + " kPa ***");
        System.out.println("*** 新浪网-当前湿度：" + this.humidity + " %RH ***");
    }
}
/**
 * 新增的三方观察者对象——百度网
 */
public class BaiDuWebSite implements Observer {
    private Float temperature;
    private Float pressure;
    private Float humidity;

    /**
     * 更新天气情况，通过推送的方式，由 WeatherData 调用
     *
     * @param temperature
     * @param pressure
     * @param humidity
     */
    @Override
    public void update(Float temperature, Float pressure, Float humidity) {
        // 更新最新天气数据
        this.temperature = temperature;
        this.pressure = pressure;
        this.humidity = humidity;
        // 展示最新天气数据
        display();
    }

    /**
     * 公告板展示天气情况
     */
    public void display() {
        System.out.println("============百度网-最新天气============");
        System.out.println("*** 百度网-当前温度：" + this.temperature + " ℃ ***");
        System.out.println("*** 百度网-当前气压：" + this.pressure + " kPa ***");
        System.out.println("*** 百度网-当前湿度：" + this.humidity + " %RH ***");
    }
}
```

**调用测试**

```java
// 新增三方气象网站，只需注册即可
weatherData.registerObserver(new SinaWebSite());
weatherData.registerObserver(new BaiDuWebSite());
// 天气发生变化时，更新最新的气象数据
weatherData.setData(15f, 120f, 80f);
//============最新天气============
//*** 当前温度：15.0 ℃ ***
//*** 当前气压：120.0 kPa ***
//*** 当前湿度：80.0 %RH ***
//============新浪网-最新天气============
//*** 新浪网-当前温度：15.0 ℃ ***
//*** 新浪网-当前气压：120.0 kPa ***
//*** 新浪网-当前湿度：80.0 %RH ***
//============百度网-最新天气============
//*** 百度网-当前温度：15.0 ℃ ***
//*** 百度网-当前气压：120.0 kPa ***
//*** 百度网-当前湿度：80.0 %RH ***
```

当三方网站不再需要时，只要做相应的移除即可

```java
// 移除气象网站
weatherData.removeObserver(currentConditions);
weatherData.setData(20f, 160f, 30f);
//============新浪网-最新天气============
//*** 新浪网-当前温度：20.0 ℃ ***
//*** 新浪网-当前气压：160.0 kPa ***
//*** 新浪网-当前湿度：30.0 %RH ***
//============百度网-最新天气============
//*** 百度网-当前温度：20.0 ℃ ***
//*** 百度网-当前气压：160.0 kPa ***
//*** 百度网-当前湿度：30.0 %RH ***
```



### 5、JDK 源码分析

JDK 中的`Observable`就使用到了观察者模式

```java
public class Observable {
    private boolean changed = false;
    private Vector<Observer> obs = new Vector();

    public Observable() {
    }

    public synchronized void addObserver(Observer var1) {
        if (var1 == null) {
            throw new NullPointerException();
        } else {
            if (!this.obs.contains(var1)) {
                this.obs.addElement(var1);
            }

        }
    }

    public synchronized void deleteObserver(Observer var1) {
        this.obs.removeElement(var1);
    }

    public void notifyObservers() {
        this.notifyObservers((Object)null);
    }
    //...
}

public interface Observer {
    void update(Observable o, Object arg);
}
```

**角色分析和职责说明**

- 1）`Observable`即充当了`Subject`接口及其实现类，其中包括了`Observer`的集合，并且包括对观察者相关的注册、移除和通知等方法：`addObserver()`、`deleteObserver()`和`notifyObservers()`，这些方法就类似于我们上面例子中的`registerObserver()`、`removeObserver()`和`notifyObservers()`
- 2）`Observer`即观察者接口，具有`update()`方法

## 【18】中介者模式

### 1、智能家庭管理问题

智能家庭项目：

- 1）智能家庭包括各种设备，闹钟、咖啡机、电视机、窗帘等

- 2）主人要看电视时，各个设备可以协同工作，自动完成看电视的准备工作，比如流程为：

  闹铃响起 => 咖啡机开始做咖啡 => 窗帘自动落下 => 电视机开始播放

![image-20220110214230289](images\中介模式\中介模式图1.png)

传统方案解决智能家庭管理问题

![image-20220110214330697](images\中介模式\中介模式图2.png)

传统方式问题分析

- 1）当各电器对象有多种状态改变时，相互之间的调用关系会比较复杂
- 2）各个电器对象彼此联系，你中有我，我中有你，不利于松耦合
- 3）各个电器对象之间所传递的消息（参数），容易混乱
- 4）当系统增加一个新的电器对象时，或者执行流程改变时，代码的可维护性、扩展性都不理想→考虑中介者模式



### 2、中介者模式

- 1）中介者模式（`Mediator Pattern`），用一个中介对象来封装一系列的对象交互。中介者使各个对象不需要显式地相互引用，从而使其<mark>耦合松散</mark>，而且可以独立地改变它们之间的交互
- 2）中介者模式属于<mark>行为型模式</mark>，使代码易于维护
- 3）比如 MVC 模式，C（`Controller`控制器）是M（`Model`模型）和V（`View`视图）的中介者，在前后端交互时起到了中间人的作用

**原理类图**

![image-20220110215527517](images\中介模式\中介模式图3.png)

**中介者模式角色及职责**

- `Mediator`【抽象中介者】：定义了同事对象到中介者对象的接口
- `ConcreteMediator`【具体的中介者对象】：实现抽象中介者方法，需要知道所有具体的同事类，即以一个集合来管理`HashMap`，并接受某个同事对象消息，完成相应的任务
- `Colleague`【抽象同事类】
- `ConcreteColleague`【具体的同事类】：会有很多，只知道自己的行为，而不了解其他同事类的行为（方法），但他们都依赖中介者对象



### 3、中介者模式解决智能家庭管理问题

**UML 类图**

![image-20220111195745055](images\中介模式\中介模式图4.png)

![image-20220111213437160](images\中介模式\中介模式图5.png)

**智能家庭管理操作流程**

- 1）创建`ConcreMediator`对象
- 2）创建各个同事类对象，比如：`Alarm`、`CoffeeMachine`、`TV`...
- 3）在创建同事类对象时，直接通过构造器加入到`colleagueMap`
- 4）同事类对象可以调用`sendMessage`，最终会去调用`ConcreteMediator`的`getMessage`方法
- 5）`getMessage`会根据接收到的同事对象发出的消息，来协调调用其它的同事对象，完成任务
- 6）可以看到`getMessage`是核心方法，完成相应任务

**核心代码**

抽象中介者

```java
public abstract class Mediator {
    public abstract void registerColleague(Colleague colleague);

    public abstract void getMsg(Integer state, String name);

    public abstract void sendMsg();
}
```

具体中介者

```java
public class ConcreteMediator extends Mediator {
    private Map<String, Colleague> colleagueMap;

    public ConcreteMediator() {
        this.colleagueMap = new HashMap<>();
    }

    @Override
    public void registerColleague(Colleague colleague) {
        colleagueMap.put(colleague.getClass().getSimpleName(), colleague);
    }

    @Override
    public void getMsg(Integer state, String name) {
        Colleague colleague = colleagueMap.get(name);
        if (colleague instanceof Alarm) {
            dealAlarm(state);
        } else if (colleague instanceof CoffeeMachine) {
            dealCoffeeMachine(state);
        } else if (colleague instanceof Curtain) {
            dealCurtain(state);
        } else if (colleague instanceof TV) {
            dealTV(state);
        }
    }

    /**
     * 闹铃响起后操作
     *
     * @param state
     */
    private void dealAlarm(Integer state) {
        if (Integer.valueOf(1).equals(state)) {
            ((Alarm) colleagueMap.get(Alarm.class.getSimpleName())).closeAlarm();
            ((CoffeeMachine) colleagueMap.get(CoffeeMachine.class.getSimpleName())).makeCoffee();
        }
    }

    /**
     * 咖啡机煮咖啡完毕后操作
     *
     * @param state
     */
    private void dealCoffeeMachine(Integer state) {
        if (Integer.valueOf(1).equals(state)) {
            ((Curtain) colleagueMap.get(Curtain.class.getSimpleName())).downCurtain();
        }
    }

    /**
     * 窗帘落下后操作
     *
     * @param state
     */
    private void dealCurtain(Integer state) {
        if (Integer.valueOf(0).equals(state)) {
            TV tv = (TV) colleagueMap.get(TV.class.getSimpleName());
            tv.openTV();
            tv.switchChannel(101);
        }
    }

    /**
     * 电视关闭后操作
     *
     * @param state
     */
    private void dealTV(Integer state) {
        if (Integer.valueOf(0).equals(state)) {
            ((Curtain) colleagueMap.get(Curtain.class.getSimpleName())).upCurtain();
        }
    }

    @Override
    public void sendMsg() {
        // Do Nothing...
    }
}
```

抽象同事类

```java
public abstract class Colleague {
    private Mediator mediator;

    public Colleague(Mediator mediator) {
        this.mediator = mediator;
    }

    public Mediator getMediator() {
        return this.mediator;
    }

    public void sendMsg(Integer state) {
        this.getMediator().getMsg(state, this.getClass().getSimpleName());
    }
}
```

具体同事类

```java
/**
 * 闹钟
 */
public class Alarm extends Colleague {
    public Alarm(Mediator mediator) {
        super(mediator);
        this.getMediator().registerColleague(this);
    }

    /**
     * 闹铃响起
     */
    public void openAlarm() {
        System.out.println(">>>闹铃响起");
        try {
            //模拟闹铃耗时
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        sendMsg(1);
    }

    /**
     * 闹铃关闭
     */
    public void closeAlarm() {
        System.out.println(">>>闹铃关闭");
        sendMsg(0);
    }
}
/**
 * 咖啡机
 */
public class CoffeeMachine extends Colleague {
    public CoffeeMachine(Mediator mediator) {
        super(mediator);
        this.getMediator().registerColleague(this);
    }

    /**
     * 煮咖啡
     */
    public void makeCoffee() {
        System.out.println(">>>煮咖啡中...");
        sendMsg(0);
        try {
            //模拟煮咖啡耗时
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    /**
     * 煮咖啡完毕
     */
    public void completeCoffee() {
        System.out.println(">>>咖啡已煮好");
        sendMsg(1);
    }
}
/**
 * 窗帘
 */
public class Curtain extends Colleague {
    public Curtain(Mediator mediator) {
        super(mediator);
        this.getMediator().registerColleague(this);
    }

    /**
     * 拉起窗帘
     */
    public void upCurtain() {
        System.out.println(">>>拉起窗帘...");
        sendMsg(1);
        try {
            //模拟拉起窗帘耗时
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    /**
     * 拉下窗帘
     */
    public void downCurtain() {
        System.out.println(">>>拉下窗帘...");
        sendMsg(0);
        try {
            //模拟拉下窗帘耗时
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
/**
 * 电视机
 */
public class TV extends Colleague {
    public TV(Mediator mediator) {
        super(mediator);
        this.getMediator().registerColleague(this);
    }

    /**
     * 打开电视
     */
    public void openTV() {
        System.out.println(">>>打开电视...");
        sendMsg(1);
    }

    /**
     * 关闭电视
     */
    public void closeTV() {
        System.out.println(">>>关闭电视...");
        sendMsg(0);
    }

    /**
     * 切换频道
     */
    public void switchChannel(Integer state) {
        System.out.println(">>>切换频道：" + state);
        sendMsg(state);
        try {
            //模拟看电视耗时
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```

测试代码

```java
//创建中介者
Mediator mediator = new ConcreteMediator();

//创建各个同事类，并加入Mediator中介者的Map对象中
Alarm alarm = new Alarm(mediator);
CoffeeMachine coffeeMachine = new CoffeeMachine(mediator);
Curtain curtain = new Curtain(mediator);
TV tv = new TV(mediator);

//闹钟响起
alarm.openAlarm();
coffeeMachine.completeCoffee();
tv.closeTV();

//>>>闹铃响起
//>>>闹铃关闭
//>>>煮咖啡中...
//>>>咖啡已煮好
//>>>拉下窗帘...
//>>>打开电视...
//>>>切换频道：101
//>>>关闭电视...
//>>>拉起窗帘...
```



### 4、中介者模式的注意事项和细节

**优点**

- 1）多个类相互耦合，会形成网状结构，使用<mark>中介者模式将网状结构分离为星型结构，进行解耦</mark>

- 2）减少类间依赖，降低了耦合，<mark>符合迪米特原则</mark>

**缺点**

- 3）中介者承担了较多的责任，<mark>一旦中介者出现了问题，整个系统就会受到影响</mark>

- 4）<mark>如果设计不当，中介者对象本身变得过于复杂</mark>，这点在实际使用时，要特别注意**

## 【19】备忘录模式

### 1、游戏角色状态恢复问题

游戏鱼色有攻击力和防御力，在大战 Boss 前保存自身的状态（攻击力和防御力），当大战 Boss 后攻击力和防御万下降，从备忘录对象恢复到大战前的状态

**传统方案**

 ![image-20220112212748962](images\备忘录模式\备忘录模式图1.png)

**传统方案问题分析**

- 1）一个对象，就对应一个保存对象状态的对象。这样当我们游戏的对象很多时，不利于管理，开销也很大
- 2）传统的方式是简单地做备份，`new`出另外一个对象出来，再把需要备份的数据放到这个新对象，但这就暴露了对象内部的细节
- 3）解决方案：<mark>备忘录模式</mark>



### 2、备忘录模式基本介绍

- 1）备忘录模式（Memento Pattern）：在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态。这样以后就可将该对象恢复到原先保存的状态
- 2）可以这样理解备忘录模式：现实生活中的备忘录是用来记录某些要去做的事情，或者是记录已经达成的共同意见的事情，以防忘记了。而在软件层面，备忘录模式有着相同的含义，备忘录对象主要用来记录一个对象的某种状态，或者某些数据，当要做回退时，可以从备忘录对象里获取原来的数据进行恢复操作
- 3）<mark>备忘录模式属于行为型模式</mark>

**原理类图**

![image-20220112213832425](images\备忘录模式\备忘录模式图2.png)

![image-20220114223647227](images\备忘录模式\备忘录模式图3.png)

**示例代码**

```java
/**
 * 源对象
 */
public class Originator {
    private String state;

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public Memento createMementor() {
        return new Memento(state);
    }

    public void revertStateFromMementor(Memento memento) {
        this.state = memento.getState();
    }
}
/**
 * 备忘录对象
 */
public class Memento {
    private String state;

    public Memento(String state) {
        this.state = state;
    }

    public String getState() {
        return state;
    }
}
/**
 * 守护者对象
 */
public class Caretaker {
    private List<Memento> mementoList = new ArrayList<>();

    public void addMemento(Memento memento) {
        mementoList.add(memento);
    }

    public Memento getMemento(Integer index) {
        return mementoList.get(index);
    }
}
```

**测试代码**

```java
Originator originator = new Originator();
Caretaker caretaker = new Caretaker();
originator.setState("当前状态：" + " 状态#1 血量 100 ");
caretaker.addMemento(originator.createMementor());
System.out.println(originator.getState());
originator.setState("当前状态：" + " 状态#2 血量 80 ");
caretaker.addMemento(originator.createMementor());
System.out.println(originator.getState());
originator.setState("当前状态：" + " 状态#3 血量 60 ");
caretaker.addMemento(originator.createMementor());
System.out.println(originator.getState());

// 恢复到状态1
originator.revertStateFromMementor(caretaker.getMemento(0));
System.out.println("恢复状态：" + originator.getState());

//当前状态： 状态#1 血量 100
//当前状态： 状态#2 血量 80
//当前状态： 状态#3 血量 60
//恢复状态：当前状态： 状态#1 血量 100
```

**备忘录模式中的角色和职责**

- `Originator`源对象：需要保存状态的对象
- `Memento`备忘录对象：负责保存`Originator`内部状态
- `Caretaker`守护者对象：负责存放多个`Memento`对象，使用集合管理，提高效率
- 如果希望保存多个`Originator`对象的不同内部状态，也可以使用`Map<String, List<Memento>>`



### 3、备忘录模式解决游戏角色状态回复问题

**UML 类图**

![image-20220114223757035](images\备忘录模式\备忘录模式图4.png)

**备忘录对象**

```java
public class Memento {
    private Integer vit;
    private Integer def;

    public Memento(Integer vit, Integer def) {
        this.vit = vit;
        this.def = def;
    }

    public Integer getVit() {
        return vit;
    }

    public void setVit(Integer vit) {
        this.vit = vit;
    }

    public Integer getDef() {
        return def;
    }

    public void setDef(Integer def) {
        this.def = def;
    }
}
```

**守护者对象**

```java
public class Caretaker {
    private Memento memento;

    public Memento getMemento() {
        return memento;
    }

    public void setMemento(Memento memento) {
        this.memento = memento;
    }
}
```

**游戏角色对象**

```java
public class GameRole {
    private Integer vit;
    private Integer def;

    public Integer getVit() {
        return vit;
    }

    public void setVit(Integer vit) {
        this.vit = vit;
    }

    public Integer getDef() {
        return def;
    }

    public void setDef(Integer def) {
        this.def = def;
    }

    public Memento createMemento() {
        return new Memento(this.vit, this.def);
    }

    public void recoverMemento(Memento memento) {
        this.vit = memento.getVit();
        this.def = memento.getDef();
    }

    public void display() {
        System.out.println("游戏角色当前攻击力：" + this.vit + "，当前防御力：" + this.def);
    }
}
```

**测试代码**

```java
System.out.println("======大战前状态======");
GameRole gameRole = new GameRole();
gameRole.setVit(100);
gameRole.setDef(100);
Caretaker caretaker = new Caretaker();
caretaker.setMemento(gameRole.createMemento());
gameRole.display();

System.out.println("======大战后状态======");
gameRole.setVit(10);
gameRole.setDef(10);
gameRole.display();

System.out.println("======从备忘录对象恢复到大战前的状态======");
gameRole.recoverMemento(caretaker.getMemento());
gameRole.display();

//======大战前状态======
//游戏角色当前攻击力：100，当前防御力：100
//======大战后状态======
//游戏角色当前攻击力：10，当前防御力：10
//======从备忘录对象恢复到大战前的状态======
//游戏角色当前攻击力：100，当前防御力：100
```



### 4、备忘录模式的注意事项和细节

**优点**

- 1）给用户提供了一种可以恢复状态的机制，可以使用户能够比较方便地回到某个历史的状态
- 2）实现了信息的封装，使得用户不需要关心状态的保存细节

**缺点**

- 3）如果类的成员变量过多，势必会占用比较大的资源，而且每一次保存都会消耗一定的内存，这个需要注意

**其他**

- 4）适用的应用场景：
  1. 后悔药
  2. 打游戏时的存档
  3. `Windows`里的`ctrl+z`
  4. `IE`中的后退
  5. 数据库的事务管理
- 5）为了节约内存，备忘录模式可以和原型模式配合使用

## 【20】解释器模式

### 1、四则运算问题

通过解释器模式来实现四则运算，如计算`a + b - c`的值，具体要求

- 1）先输入表达式的形式，比如`a + b + c - d + e`，要求表达式的字母不能重复
- 2）在分别输入`a, b, c, d, e`的值
- 3）最后求出结果：如图

![image-20220115215331808](images\解释器模式\解释器模式图1.png)

**传统方案解决四则运算问题分析**

- 1）编写一个方法，接收表达式的形式，然后根据用户输入的数值进行解析，得到结果
- 2）问题分析：如果加入新的运算符，比如`* / (`等等，不利于扩展，另外让一个方法来解析会造成程序结构混乱，不够清晰
- 3）解决方案：可以考虑使用解释器模式，即：表达式 => 解释器（可以有多种） => 结果



### 2、解释器模式的基本介绍

- 1）在编译原理中，一个<mark>算术表达式</mark>通过<mark>词法分析器</mark>形成<mark>词法单元</mark>，而后这些<mark>词法单元</mark>再通过<mark>语法分析器</mark>构建<mark>语法分析树</mark>，最终形成一颗<mark>抽象的语法分析树</mark>。这里的<mark>词法分析器</mark>和<mark>语法分析器</mark>都可以看做是解释器
- 2）解释器模式（Interpreter Pattern）：是指给定一个语言（表达式），定义它的文法的一种表示，并定义一个解释器，使用该解释器来解释语言中的句子（表达式）
- 3）应用场景
  - 应用可以将一个需要解释执行的语言中的句子表示为一个抽象语法树
  - 一些重复出现的问题可以用一种简单的语言来表达
  - 一个简单语法需要解释的场景
- 4）这样的例子还有，比如<mark>编译器、运算表达式计算、正则表达式、机器人</mark>等

**原理类图**

![image-20220115220756742](images\解释器模式\解释器模式图2.png)

**解释器模式的角色及职责**

- `Context`环境角色：含有解释器之外的全局信息
- `AbstractExpression`抽象表达式：声明一个抽象的解释操作，该方法为抽象语法树中所有节点共享
- `TerminalExpression`终结符表达式：实现与文法中终结符相关的解释操作
- `NonTerminalExpression`非终结符表达式：实现与文法中非终结符相关的解释操作



### 3、解释器模式解决四则运算问题

**UML 类图**

![image-20220115221726269](images\解释器模式\解释器模式图3.png)

![image-20220115231901461](images\解释器模式\解释器模式图4.png)

**核心代码**

抽象表达式

```java
/**
 * 抽象表达式类
 */
public abstract class Expression {
    /**
     * a + b - c
     * 解释公式和数值，key就是公式（表达式）参数[a, b, c]，value就是具体值
     * HashMap{a=10, b=20}
     *
     * @param var
     * @return
     */
    public abstract int interpret(Map<String, Integer> var);
}
```

抽象运算符号解释器

```java

/**
 * 抽象运算符号解释器
 * 这里每个运算符号，都只和自己左右两个数字有关系，
 * 但左右两个数字有可能也是一个解析的结果，无论何种类型，都是Expression类的实现类
 */
public class SymbolExpression extends Expression {
    protected Expression left;
    protected Expression right;

    public SymbolExpression(Expression left, Expression right) {
        this.left = left;
        this.right = right;
    }

    /**
     * 因为SymbolExpression 是让其子类来实现，因此interpreter是一个默认实现
     *
     * @param var
     * @return
     */
    @Override
    public int interpret(Map<String, Integer> var) {
        return 0;
    }
}
```

加减解释器

```java
/**
 * 加法解释器
 */
public class AddExpression extends SymbolExpression {
    public AddExpression(Expression left, Expression right) {
        super(left, right);
    }

    /**
     * 处理相加
     *
     * @param var
     * @return
     */
    @Override
    public int interpret(Map<String, Integer> var) {
        return super.left.interpret(var) + super.right.interpret(var);
    }
}
/**
 * 减法解释器
 */
public class SubExpression extends SymbolExpression {
    public SubExpression(Expression left, Expression right) {
        super(left, right);
    }

    /**
     * 处理相减
     *
     * @param var
     * @return
     */
    @Override
    public int interpret(Map<String, Integer> var) {
        return super.left.interpret(var) - super.right.interpret(var);
    }
}
```

运算器类

```java
/**
 * 运算器类
 */
public class Calculator {
    /**
     * 定义表达式
     */
    private Expression expression;

    /**
     * 构造函数传递表达式并进行解析
     *
     * @param expStr
     */
    public Calculator(String expStr) { // expStr: a+b
        //栈对象存放变量表达式及运算得到的表达式
        Stack<Expression> stack = new Stack<>();
        //将表达式拆分成字符数组 [a,+,b]
        char[] charArr = expStr.toCharArray();

        Expression left;
        Expression right;
        // 遍历字符数组 [a,+,b]
        for (int i = 0; i < charArr.length; i++) {
            switch (charArr[i]) {
                case '+':
                    // 取出 a
                    left = stack.pop();
                    // 取出下一位变量，并创建`VarExpression`
                    right = new VarExpression(String.valueOf(charArr[++i]));
                    // 将left和right值作为参数，push到`Stack`中
                    stack.push(new AddExpression(left, right));
                    break;
                case '-':
                    left = stack.pop();
                    right = new VarExpression(String.valueOf(charArr[++i]));
                    stack.push(new SubExpression(left, right));
                    break;
                default:
                    // 如果不是加减等运算符，就创建`VarExpression`，并push到`Stack`中
                    stack.push(new VarExpression(String.valueOf(charArr[i])));
                    break;
            }
        }
        // 当遍历完整个`charArr`数组后，`stack`就得到了最终的`Expression`
        this.expression = stack.pop();
    }

    public int run(Map<String, Integer> var) {
        return this.expression.interpret(var);
    }
}
```

测试代码

```java
public static void main(String[] args) throws IOException {
    System.out.print("请输入表达式：");
    String expStr = getExpStr();
    Map<String, Integer> var = getValue(expStr);
    Calculator calculator = new Calculator(expStr);
    System.out.println("运算结果：" + expStr + "=" + calculator.run(var));
}

public static String getExpStr() throws IOException {
    return new BufferedReader(new InputStreamReader(System.in)).readLine();
}

public static Map<String, Integer> getValue(String expStr) throws IOException {
    Map<String, Integer> map = new HashMap<>();
    String s;
    for (char ch : expStr.toCharArray()) {
        s = String.valueOf(ch);
        if (ch == '+' || ch == '-' || map.containsKey(s)) {
            continue;
        }
        System.out.print("请输入" + s + "的值：");
        map.put(s, Integer.valueOf(getExpStr()));
    }
    return map;
}
```

测试结果

```java
//请输入表达式：a+b
//请输入a的值：10
//请输入b的值：20
//运算结果：a+b=30
```



### 4、解释器模式在 Spring 框架中的源码分析

`Spring`框架中`SpelExpressionParser`就使用到解释器模式

**示例代码**

```java
SpelExpressionParser spelExpressionParser = new SpelExpressionParser();
Expression expression = spelExpressionParser.parseExpression("10*(2+1)*1+66");
int result = (Integer) expression.getValue();
System.out.println(result);
```

**UML 类图**

![image-20220116140019280](images\解释器模式\解释器模式图5.png)

**角色及职责**

- `Expression`表达式接口

- 下面有不同表达式实现类，比如`SpelExpression`、`LiteralExpression`和`CompositeStringExpression`

- 使用时，根据创建解释器对象的不同，返回不同的`Expression`对象

  ```java
  public Expression parseExpression(String expressionString, ParserContext context) throws ParseException {
      if (context == null) {
          context = NON_TEMPLATE_PARSER_CONTEXT;
      }
  
      if (context.isTemplate()) {
          return parseTemplate(expressionString, context);
      }
      else {
          return doParseExpression(expressionString, context);
      }
  }
  ```

- 调用`parseExpression`方法得到`Expression`对象后，调用`getValue`解释执行表达式，得到最终结果



### 5、解释器模式的注意事项和细节

- 1）当有一个语言需要解释执行，可将该语言中的句子表示为一个抽象语法树，就可以考虑使用解释器模式，让程序具有良好的扩展性
- 2）应用场景：编译器、运算表达式计算、正则表达式、机器人等
- 3）使用解释器可能带来的问题：<mark>解释器模式会引起类膨胀、解释器模式采用递归调用方法，将会导致调试非常复杂、效率可能降低</mark>

## 【21】状态模式

### 1、APP 抽奖活动问题

请编写程序完成 APP 抽奖活动具体要求如下：

- 1）假如每参加一次这个活动要扣除用户 50 积分，中奖概率是 10%
- 2）奖品数量固定，抽完就不能抽奖
- 3）活动有四个状态：可以抽奖、不能抽奖、发放奖品和奖品领完
- 4）活动的四个状态转换关系图

![image-20220116204232790](images\状态模式\状态模式图1.png)



### 2、状态模式基本介绍

- 1）状态模式（State Pattern）：它主要用来解决对象在多种状态转换时，需要对外输出不同的行为的问题。状态和行为是一一对应的，状态之间可以相互转换
- 2）当一个对象的内在状态改变时，允许改变其行为，这个对象看起来像是改变了其类

**原理类图**

![image-20220116204946251](images\状态模式\状态模式图2.png)

**角色与职责**

- `Context`环境角色：维护一个`State`实例，这个实例定义了当前状态
- `State`抽象状态角色：定义一个接口，封装与`Context`的一个特点接口相关行为
- `ConcreteState`具体状态角色：实现一个与`Context`的一个状态相关行为

 

### 3、状态模式解决 APP 抽奖问题

- 1）应用实例要求完成 APP 抽奖活动项目，使用状态模式
- 2）思路分析和图解（类图）
  - 定义出一个接口叫状态接口，每个状态都实现它
  - 接口有扣除积分方法、抽奖方法、发放奖品方法

**UML 类图**

![image-20220116205856544](images\状态模式\状态模式图3.png)

![image-20220116215723106](images\状态模式\状态模式图4.png)

**核心代码**

抽象状态角色

```java
/**
 * 抽象状态角色
 */
public interface State {
    Boolean reduceMoney();

    Boolean raffle();

    Boolean dispensePrize();
}
```

不能抽奖状态类

```java
/**
 * 不能抽奖状态类
 */
public class NoRaffleState implements State {
    private RaffleActivity raffleActivity;
    // 模拟数据库积分值
    private int integral = 100;

    public NoRaffleState(RaffleActivity raffleActivity) {
        this.raffleActivity = raffleActivity;
    }

    @Override
    public Boolean reduceMoney() {
        if (integral < 50) {
            System.out.println("您的积分余额不足~");
            return false;
        }
        integral -= 50;
        raffleActivity.setCanRaffleState();
        System.out.println("已扣除50积分，可以进行抽奖啦~");
        return true;
    }

    @Override
    public Boolean raffle() {
        System.out.println("当前无法进行抽奖~");
        return false;
    }

    @Override
    public Boolean dispensePrize() {
        System.out.println("当前无法领取奖品~");
        return false;
    }
}
```

可以抽奖状态类

```java
/**
 * 可以抽奖状态类
 */
public class CanRaffleState implements State {
    private RaffleActivity raffleActivity;

    public CanRaffleState(RaffleActivity raffleActivity) {
        this.raffleActivity = raffleActivity;
    }

    @Override
    public Boolean reduceMoney() {
        System.out.println("已扣除50积分，可以进行抽奖啦~");
        return false;
    }

    @Override
    public Boolean raffle() {
        if (new Random().nextInt(10) == 0) {
            raffleActivity.setDispenseState();
            System.out.println("恭喜您，中奖了~");
            return true;
        }
        raffleActivity.setNoRaffleState();
        System.out.println("很遗憾，您没有中奖~");
        return false;
    }

    @Override
    public Boolean dispensePrize() {
        System.out.println("尚未进行抽奖，无法领取奖品！");
        return false;
    }
}
```

发放奖品状态类

```java
/**
 * 发放奖品状态类
 */
public class DispenseState implements State {
    private RaffleActivity raffleActivity;

    public DispenseState(RaffleActivity raffleActivity) {
        this.raffleActivity = raffleActivity;
    }

    @Override
    public Boolean reduceMoney() {
        System.out.println("已经进行过抽奖啦！");
        return false;
    }

    @Override
    public Boolean raffle() {
        System.out.println("已经进行过抽奖啦！");
        return false;
    }

    @Override
    public Boolean dispensePrize() {
        if (raffleActivity.getCount() <= 0) {
            raffleActivity.setDispenseOutState();
            System.out.println("今日奖品已领完，明天再来吧~");
            return false;
        }
        raffleActivity.setNoRaffleState();
        System.out.println("奖品领取成功~");
        return true;
    }
}
```

奖品领完状态类

```java
/**
 * 奖品领完状态类
 */
public class DispenseOutState implements State {
    private RaffleActivity raffleActivity;

    public DispenseOutState(RaffleActivity raffleActivity) {
        this.raffleActivity = raffleActivity;
    }

    @Override
    public Boolean reduceMoney() {
        System.out.println("今日奖品已领完，明天再来吧~");
        return false;
    }

    @Override
    public Boolean raffle() {
        System.out.println("今日奖品已领完，明天再来吧~");
        return false;
    }

    @Override
    public Boolean dispensePrize() {
        System.out.println("今日奖品已领完，明天再来吧~");
        return false;
    }
}
```

**测试代码**

```java
RaffleActivity raffleActivity = new RaffleActivity(2);
// 第一次抽奖
System.out.println("======第一次抽奖======");
raffleActivity.raffle();
// 第二次抽奖
System.out.println("======第二次抽奖======");
raffleActivity.raffle();
// 第三次抽奖
System.out.println("======第三次抽奖======");
raffleActivity.raffle();
//======第一次抽奖======
//已扣除50积分，可以进行抽奖啦~
//很遗憾，您没有中奖~
//======第二次抽奖======
//已扣除50积分，可以进行抽奖啦~
//恭喜您，中奖了~
//奖品领取成功~
//======第三次抽奖======
//您的积分余额不足~
```



### 4、状态模式在实际项目——借贷平台源码剖析

- 1）借贷平台的订单，有审核-发布-抢单等等步骤，随着操作的不同，会改变订单的状态，项目中的这个模块实现就会使用到状态模式

- 2）通常通过`if/else`判断订单的状态，从而实现不同的逻辑，伪代码如下

  ```java
  if(审核){
      //审核逻辑
  }else if(发布){
      //发布逻辑
  }else if(接单){
      //接单逻辑
  }
  ```

  **问题分析**：这类代码难以应对变化，在添加一种状态时，我们需要手动添加`if/else`，在添加一种功能时，要对所有的状态进行判断。因此代码会变得越来越臃肿，并且一旦没有处理某个状态，便会发生极其严重的 BUG，难以维护

- 3）使用状态模式完成借贷平台项目的审核模块 [设计+代码] 

#### 4.1、设计

**借贷平台—流程审批**

状态模式本质上是一种基于状态和事件的状态机，下面是<mark>订单流程的状态图</mark>

![image-20220116221307396](images\状态模式\状态模式图5.png)

通过状态图，我们再设计一张横纵坐标关系表来比较，如下图

| 状态 \ 事件                                         | 电审（1）                                           | 电审失败（2）                           | 定价发布（3）                                    | 接单（4）                                       | 接单失败（5）                           | 付款（6）                                         | 支付失效（7）                           | 反馈（8）                               |
| :-------------------------------------------------- | :-------------------------------------------------- | :-------------------------------------- | :----------------------------------------------- | :---------------------------------------------- | :-------------------------------------- | :------------------------------------------------ | :-------------------------------------- | :-------------------------------------- |
| 订单生成（1）                                       | <span style='background:yellow'>已审核（2）</span > | <font color='orange'>已完结（6）</font> |                                                  |                                                 |                                         |                                                   |                                         |                                         |
| <span style='background:yellow'>已审核（2）</span > |                                                     |                                         | <span style='background:blue'>已发布（3）</span> |                                                 |                                         |                                                   |                                         |                                         |
| <span style='background:blue'>已发布（3）</span>    |                                                     |                                         |                                                  | <span style='background:red'>待付款（4）</span> | <font color='orange'>已完结（6）</font> |                                                   |                                         |                                         |
| <span style='background:red'>待付款（4）</span>     |                                                     |                                         |                                                  |                                                 |                                         | <span style='background:green'>已付款（5）</span> | <font color='orange'>已完结（6）</font> |                                         |
| <span style='background:green'>已付款（5）</span>   |                                                     |                                         |                                                  |                                                 |                                         |                                                   |                                         | <font color='orange'>已完结（6）</font> |
| <font color='orange'>已完结（6）</font>             |                                                     |                                         |                                                  |                                                 |                                         |                                                   |                                         |                                         |

**UML 类图**

![image-20220116222801725](images\状态模式\状态模式图6.png)

![image-20220116232317071](images\状态模式\状态模式图7.png)

#### 4.2、代码

状态接口

```java
/**
 * 状态接口
 */
public interface State {
    /**
     * 电审
     *
     * @param context
     */
    void electronicAudit(Context context);

    /**
     * 电审失败
     *
     * @param context
     */
    void electronicAuditFail(Context context);

    /**
     * 定价发布
     *
     * @param context
     */
    void releasePricing(Context context);

    /**
     * 接单
     *
     * @param context
     */
    void acceptOrder(Context context);

    /**
     * 接单失败
     *
     * @param context
     */
    void acceptOrderFail(Context context);

    /**
     * 付款
     *
     * @param context
     */
    void payMoney(Context context);

    /**
     * 反馈【下款 或 拒贷】
     *
     * @param context
     */
    void feedback(Context context);

    String getCurrentState();
}
```

抽象状态类

```java
/**
 * 抽象状态类，默认实现
 */
public abstract class AbstractState implements State {
    private static final RuntimeException EXCEPTION = new RuntimeException("操作流程有误");

    @Override
    public void electronicAudit(Context context) {
        throw EXCEPTION;
    }

    @Override
    public void electronicAuditFail(Context context) {
        throw EXCEPTION;

    }

    @Override
    public void releasePricing(Context context) {
        throw EXCEPTION;
    }

    @Override
    public void acceptOrder(Context context) {
        throw EXCEPTION;
    }

    @Override
    public void acceptOrderFail(Context context) {
        throw EXCEPTION;
    }

    @Override
    public void payMoney(Context context) {
        throw EXCEPTION;
    }

    @Override
    public void feedback(Context context) {
        throw EXCEPTION;
    }
}
```

具体状态类

```java
/**
 * 订单生成状态类
 */
public class GeneratedState extends AbstractState {
    @Override
    public void electronicAudit(Context context) {
        context.setState(new AuditedState());
    }

    @Override
    public void electronicAuditFail(Context context) {
        context.setState(new FinishedState());
    }

    @Override
    public String getCurrentState() {
        return StateEnum.GENERATED.name();
    }
}
/**
 * 已审核状态类
 */
public class AuditedState extends AbstractState {
    @Override
    public void releasePricing(Context context) {
        context.setState(new PublishedState());
    }

    @Override
    public String getCurrentState() {
        return StateEnum.AUDITED.name();
    }
}
/**
 * 已发布状态类
 */
public class PublishedState extends AbstractState {
    @Override
    public void acceptOrder(Context context) {
        context.setState(new NotPaidState());
    }

    @Override
    public void acceptOrderFail(Context context) {
        context.setState(new FinishedState());
    }

    @Override
    public String getCurrentState() {
        return StateEnum.PUBLISHED.name();
    }
}
/**
 * 未付款状态类
 */
public class NotPaidState extends AbstractState {
    @Override
    public void payMoney(Context context) {
        context.setState(new PaidState());
    }

    @Override
    public void feedback(Context context) {
        context.setState(new FinishedState());
    }

    @Override
    public String getCurrentState() {
        return StateEnum.NOT_PAID.name();
    }
}
/**
 * 未付款状态类
 */
public class PaidState extends AbstractState {
    @Override
    public void feedback(Context context) {
        context.setState(new FinishedState());
    }

    @Override
    public String getCurrentState() {
        return StateEnum.PAID.name();
    }
}
/**
 * 未付款状态类
 */
public class FinishedState extends AbstractState {
    @Override
    public String getCurrentState() {
        return StateEnum.FINISHED.name();
    }
}
```

状态枚举类

```java
public enum StateEnum {
    GENERATED,
    AUDITED,
    PUBLISHED,
    NOT_PAID,
    PAID,
    FINISHED;
}
```

上下文环境类

```java
/**
 * 上下文环境类
 */
public class Context extends AbstractState {
    private State state;

    public Context() {
        state = new GeneratedState();
    }

    @Override
    public void electronicAudit(Context context) {
        state.electronicAudit(context);
        getCurrentState();
    }

    @Override
    public void electronicAuditFail(Context context) {
        state.electronicAuditFail(context);
        getCurrentState();
    }

    @Override
    public void releasePricing(Context context) {
        state.releasePricing(context);
        getCurrentState();
    }

    @Override
    public void acceptOrder(Context context) {
        state.acceptOrder(context);
        getCurrentState();
    }

    @Override
    public void acceptOrderFail(Context context) {
        state.acceptOrderFail(context);
        getCurrentState();
    }

    @Override
    public void payMoney(Context context) {
        state.payMoney(context);
        getCurrentState();
    }

    @Override
    public void feedback(Context context) {
        state.feedback(context);
        getCurrentState();
    }

    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }

    @Override
    public String getCurrentState() {
        System.out.println("当前状态：" + state.getCurrentState());
        return state.getCurrentState();
    }
}
```

测试代码

```java
Context context = new Context();
context.electronicAudit(context);
context.releasePricing(context);
context.acceptOrder(context);
context.payMoney(context);

context.electronicAuditFail(context);
context.acceptOrderFail(context);
//当前状态：AUDITED
//当前状态：PUBLISHED
//当前状态：NOT_PAID
//当前状态：PAID
//Exception in thread "main" java.lang.RuntimeException: 操作流程有误
//	at com.vectorx.pattern.t20_state.lendingplatform.AbstractState.<clinit>(AbstractState.java:7)
//	at com.vectorx.pattern.t20_state.lendingplatform.Client.main(Client.java:5)
```

 

### 5、状态模式的注意事项和细节

**优点**

- 1）<mark>代码有很强的可读性</mark>：状态模式将每个状态的行为封装到对应的一个类中
- 2）<mark>方便维护</mark>：将容易产生问题的`if-else`语句删除了，如果把每个状态的行为都放到一个类中，每次调用方法时都要判断当前是什么状态，不但会产出很多`if-else`语句，而且容易出错
- 3）符合<mark>开闭原则</mark>，容易增删状态

**缺点**

- 4）<mark>会产生很多类</mark>：每个状态都要一个对应的类，当状态过多时会产生很多类，加大维护难度

**应用场景**

- 5）<mark>当一个事件或者对象有很多种状态，状态之间会相互转换，对不同的状态要求有不同的行为时，可以考虑使用状态模式</mark>

## 【22】策略模式

### 1、鸭子问题

编写鸭子项目，具体要求如下：

- 1）有各鸭子（比如野鸭、北京鸭、水鸭等，鸭子有各种行为，比如叫、飞行等）
- 2）显示鸭子的信息



### 2、传统方案解决鸭子问题

**UML 类图**

![image-20220117194817264](images\策略模式\策略模式图1.png)

**核心代码**

```java
public abstract class Duck {
    public void quark() {
        System.out.println("鸭子嘎嘎叫~");
    }

    public void swim() {
        System.out.println("鸭子哗哗游~");
    }

    public void fly() {
        System.out.println("鸭子腾腾飞~");
    }

    public abstract void display();
}
public class WildDuck extends Duck {

    @Override
    public void display() {
        System.out.println("野鸭子");
    }
}
public class PekingDuck extends Duck {
    @Override
    public void display() {
        System.out.println("北京鸭~");
    }

    @Override
    public void fly() {
        System.out.println("北京鸭不会飞~");
    }
}
public class ToyDuck extends Duck {
    @Override
    public void display() {
        System.out.println("玩具鸭~");
    }

    @Override
    public void quark() {
        System.out.println("玩具鸭不会叫~");
    }

    @Override
    public void swim() {
        System.out.println("玩具鸭不会游~");
    }

    @Override
    public void fly() {
        System.out.println("玩具鸭不会飞~");
    }
}
```

**传统的方式实现的问题分析和解决方案**

- 1）其它鸭子，都继承了`Duck`类，所以`fly`让所有子类都会飞了，这是不正确的
- 2）上面说的问题，其实是继承带来的问题：对类的局部改动，尤其超类的局部改动，会影响其他部分，会有溢出效应
- 3）为了改进问题，我们可以通过覆盖`fly`方法来解决 => 覆盖解决
- 4）问题又来了，如果我们有一个玩具鸭子`ToyDuck`，这样就需要`ToyDuck`去覆盖`Duck`的所有实现的方法 => 解决思路：<mark>策略模式</mark>



### 3、策略模式基本介绍

- 1）策略模式（Strategy Pattern）中，定义算法族，分别封装起来，让他们之间可以互相替换。此模式让算法的变化独立于使用算法的客户
- 2）这算法体现了几个设计原则
  - 第一、<mark>把变化的代码从不变的代码中分离出来</mark>
  - 第二、<mark>针对接口编程而不是具体类</mark>（定义了策略接口）
  - 第三、<mark>多用组合/聚合，少用继承</mark>（客户通过组合方式使用策略）

**原理类图**

![image-20220117201025811](images\策略模式\策略模式图2.png)

说明：从上图可以看到，客户`Context`有成员变量`Strategy`或者其他的策略接口。至于需要使用到哪个策略，可以在构造器中指定



#### 4、策略模式解决鸭子问题

- 1）应用实例要求：编写程序完成前面的鸭子项目，要求使用策略模式
- 2）思路分析
  - 策略模式：分别封装行为接口，实现算法族，超类里放行为接口对象，在子类里具体设定行为对象
  - 原则就是：分离变化部分，封装接口，基于接口编程各种功能。此模式让行为的变化独立于算法的使用者
- 3）代码实现

**UML 类图**

![image-20220117201745236](images\策略模式\策略模式图3.png)

![image-20220117204110906](images\策略模式\策略模式图4.png)

**核心代码**

“叫”的行为

```java
/**
 * “叫”行为策略接口
 */
public interface QuarkBehavior {
    void quark();
}
/**
 * “不会叫”行为策略对象
 */
public class NoQuarkBehavior implements QuarkBehavior {
    @Override
    public void quark() {
        System.out.println("不会叫~");
    }
}
/**
 * “嘎嘎叫”行为策略对象
 */
public class GagaQuarkBehavior implements QuarkBehavior {
    @Override
    public void quark() {
        System.out.println("嘎嘎叫~");
    }
}
/**
 * “咯咯叫”行为策略对象
 */
public class GegeQuarkBehavior implements QuarkBehavior {
    @Override
    public void quark() {
        System.out.println("咯咯叫~");
    }
}
```

“游泳”的行为

```java
/**
 * ”游泳“行为策略接口
 */
public interface SwimBehavior {
    void swim();
}
/**
 * “不会游泳”行为策略对象
 */
public class NoSwimHehavior implements SwimBehavior {
    @Override
    public void swim() {
        System.out.println("不会游泳~");
    }
}
/**
 * “会游泳”行为策略对象
 */
public class CanSwimHehavior implements SwimBehavior {
    @Override
    public void swim() {
        System.out.println("会游泳~");
    }
}
```

“飞”的行为

```java
/**
 * “飞行”行为策略接口
 */
public interface FlyBehavior {
    void fly();
}
/**
 * “不会飞”行为策略对象
 */
public class NoFlyBehavior implements FlyBehavior {
    @Override
    public void fly() {
        System.out.println("不会飞~");
    }
}
/**
 * “不太会飞”行为策略对象
 */
public class BadFlyBehavior implements FlyBehavior {
    @Override
    public void fly() {
        System.out.println("不太会飞~");
    }
}
/**
 * “很会飞”行为策略对象
 */
public class GoodFlyBehavior implements FlyBehavior {
    @Override
    public void fly() {
        System.out.println("很会飞~");
    }
}
```

鸭子类

```java
/**
 * 抽象鸭子类
 */
public abstract class Duck {
    protected QuarkBehavior quarkBehavior;
    protected SwimBehavior swimBehavior;
    protected FlyBehavior flyBehavior;

    public Duck() {
        display();
    }

    public void quark() {
        if (quarkBehavior != null) {
            quarkBehavior.quark();
        }
    }

    public void swim() {
        if (swimBehavior != null) {
            swimBehavior.swim();
        }
    }

    public void fly() {
        if (flyBehavior != null) {
            flyBehavior.fly();
        }
    }

    public void setQuarkBehavior(QuarkBehavior quarkBehavior) {
        this.quarkBehavior = quarkBehavior;
    }

    public void setSwimBehavior(SwimBehavior swimBehavior) {
        this.swimBehavior = swimBehavior;
    }

    public void setFlyBehavior(FlyBehavior flyBehavior) {
        this.flyBehavior = flyBehavior;
    }

    public abstract void display();
}
/**
 * 野鸭子
 */
public class WildDuck extends Duck {
    public WildDuck() {
        super();
        quarkBehavior = new GegeQuarkBehavior();
        swimBehavior = new CanSwimHehavior();
        flyBehavior = new GoodFlyBehavior();
    }

    @Override
    public void display() {
        System.out.println("======野鸭子======");
    }
}
/**
 * 北京鸭
 */
public class PekingDuck extends Duck {
    public PekingDuck() {
        super();
        quarkBehavior = new GagaQuarkBehavior();
        swimBehavior = new CanSwimHehavior();
        flyBehavior = new BadFlyBehavior();
    }

    @Override
    public void display() {
        System.out.println("======北京鸭======");
    }
}
/**
 * 玩具鸭
 */
public class ToyDuck extends Duck {
    public ToyDuck() {
        super();
        quarkBehavior = new NoQuarkBehavior();
        swimBehavior = new NoSwimHehavior();
        flyBehavior = new NoFlyBehavior();
    }

    @Override
    public void display() {
        System.out.println("======玩具鸭======");
    }
}
```

测试代码

```java
Duck wildDuck = new WildDuck();
wildDuck.quark();
wildDuck.swim();
wildDuck.fly();

Duck pekingDuck = new PekingDuck();
pekingDuck.quark();
pekingDuck.swim();
pekingDuck.fly();
System.out.println("===改变策略===");
pekingDuck.setFlyBehavior(new NoFlyBehavior());
pekingDuck.fly();

Duck toyDuck = new ToyDuck();
toyDuck.quark();
toyDuck.swim();
toyDuck.fly();
```

测试结果

```java
//======野鸭子======
//咯咯叫~
//会游泳~
//很会飞~
//======北京鸭======
//嘎嘎叫~
//会游泳~
//不太会飞~
//===改变策略===
//不会飞~
//======玩具鸭======
//不会叫~
//不会游泳~
//不会飞~
```



### 5、策略模式在 JDK-Arrays 应用的源码分析

JDK 的`Arrays`的`Comparator`就使用了策略模式

- 匿名类对象`new Comparator<Integer>() {}`实现了`Comparator`接口（策略接口）
- `public int compare(Integer o1, Integer o2) {}`指定具体的处理方式

```java
Comparator<Integer> comparator = new Comparator<Integer>() {
    @Override
    public int compare(Integer o1, Integer o2) {
        return o1 > o2 ? 1 : -1;
    }
};
// 方式1
Arrays.sort(data, comparator);
System.out.println(Arrays.toString(data));
// [1, 2, 3, 4, 8, 9]

//方式2
Arrays.sort(data, (v1, v2) -> v1.compareTo(v2) > 0 ? -1 : 1);
System.out.println(Arrays.toString(data));
//[9, 8, 4, 3, 2, 1]
```



### 6、策略模式的注意事项和细节

- 1）策略模式的关键是：<mark>分析项目中变化部分与不变部分</mark>
- 2）策略模式的核心思想是：<mark>多用组合/聚合，少用继承</mark>；用行为类组合，而不是行为的继承，更有弹性
- 3）体现了<mark>“对修改关闭，对扩展开放”</mark>原则，客户端增加行为不用修改原有代码，只要添加一种策略（或者行为）即可，避免了使用多重转移语句（`if...else if...else`）
- 4）提供了可以替换继承关系的办法：策略模式将算法封装在独立的`Strategy`类中，使得你可以独立于其`Context`改变它，使它易于切换、易于理解、易于扩展
- 5）需要注意的是：每添加一个策略就要增加一个类，<mark>当策略过多是会导致类数目庞大</mark>

## 【23】职责链模式

### 1、OA系统的采购审批项目

学校 OA 系统的采购审批项目，需求是

- 1）采购员采购教学器材
- 2）如果金额小于等于 5000，由教学主任审批（0 < x ≤ 5000）
- 3）如果金额小于等于 10000，由院长审批（5000 < x ≤ 10000）
- 4）如果金额小于等于 30000，由副校长审批（10000< x ≤ 30000）
- 5）如果金额超过 30000 以上，有校长审批（30000  < x）

请设计程序完成采购审批项目 

**传统方案解决 OA 系统审批，传统的设计方案（类图）**

![image-20220117211918215](images\责任链模式\责任链模式图1.png)

**传统方案解决 OA 系统审批问题分析**

- 1）传统方式是：接收到一个采购请求后，根据采购金额来调用对应的`Approver`（审批人）完成审批
- 2）传统方式的问题分析：客户端这里会使用到分支判断（比如`switch`）来对不同的采购请求处理，这样就存在如下问题
  - （1）如果各个级别的人员审批金额发生变化，在客户端的也需要变化
  - （2）客户端必须明确的知道有多少个审批级别和访问
- 3）这样对一个采购请求进行处理和`Approver`（审批人）就存在强耦合关系，不利于代码的扩展和维护
- 4）解决方案 =》<mark>职责链模式</mark>



### 2、职责链模式基本介绍

- 1）职责链模式（Chain of Responsibility Pattern），又叫<mark>责任链模式</mark>：为请求创建了一个接收者对象的链（简单示意图）。

  ![image-20220117212306482](images\责任链模式\责任链模式图2.png)

  这种模式对请求的发送者和接收者进行解耦

- 2）职责链模式通常每个接收者都包含对另一个接收者的引用。如果一个对象不能处理该请求，那么它会把相同的请求传给下一个接收者，依此类推

- 3）这种类型的设计模式属于<mark>行为型模式</mark>

**原理类图**

![image-20220117212730422](images\责任链模式\责任链模式图3.png)

职责链模式使多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合关系

将这个对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理它为止

- `Handler`抽象处理者：定义了一个处理请求的方法，同时含有另外一个`Handler`
- `ConcreteHandler`具体处理者：处理自己负责的请求，同时可以访问它的后继者（即下一个处理者） ；如果可以处理请求，则进行处理，否则交给后继者去处理，从而形成一个职责链
- `Request`含有很多属性，表示一个请求



### 3、职责链模式解决 OA 系统采购审批项目

**UML 类图**

![image-20220117213428895](images\责任链模式\责任链模式图4.png)

**核心代码**

请求类

```java
/**
 * 采购申请类
 */
public class PurchaseRequest {
    private Integer id;
    private Float price;

    public PurchaseRequest(Integer id, Float price) {
        this.id = id;
        this.price = price;
    }

    public Integer getId() {
        return id;
    }

    public Float getPrice() {
        return price;
    }
}
```

抽象审批人对象

```java
/**
 * 抽象审批人对象
 */
public abstract class Approver {
    protected Approver nextApprover;
    protected String name;

    public Approver(String name) {
        this.name = name;
    }

    /**
     * 设置后继者
     *
     * @param nextApprover
     */
    public void setNextApprover(Approver nextApprover) {
        this.nextApprover = nextApprover;
    }

    /**
     * 处理请求的方法
     */
    public abstract void processRequest(PurchaseRequest purchaseRequest);
}
```

具体审批人对象

```java
/**
 * 教学主任审批人
 */
public class TeachDirectorApprover extends Approver {
    public TeachDirectorApprover(String name) {
        super(name);
    }

    @Override
    public void processRequest(PurchaseRequest purchaseRequest) {
        if (purchaseRequest.getPrice() <= 5000) {
            System.out.println("请求编号：" + purchaseRequest.getId() + "，处理人：" + this.name);
        } else {
            nextApprover.processRequest(purchaseRequest);
        }
    }
}
/**
 * 院长审批人
 */
public class DepartmentHeadApprover extends Approver {
    public DepartmentHeadApprover(String name) {
        super(name);
    }

    @Override
    public void processRequest(PurchaseRequest purchaseRequest) {
        if (purchaseRequest.getPrice() > 5000 && purchaseRequest.getPrice() <= 10000) {
            System.out.println("请求编号：" + purchaseRequest.getId() + "，处理人：" + this.name);
        } else {
            nextApprover.processRequest(purchaseRequest);
        }
    }
}
/**
 * 副校长审批人
 */
public class ViceChancellorApprover extends Approver {
    public ViceChancellorApprover(String name) {
        super(name);
    }

    @Override
    public void processRequest(PurchaseRequest purchaseRequest) {
        if (purchaseRequest.getPrice() > 10000 && purchaseRequest.getPrice() <= 30000) {
            System.out.println("请求编号：" + purchaseRequest.getId() + "，处理人：" + this.name);
        } else {
            nextApprover.processRequest(purchaseRequest);
        }
    }
}
/**
 * 副校长审批人
 */
public class ChancellorApprover extends Approver {
    public ChancellorApprover(String name) {
        super(name);
    }

    @Override
    public void processRequest(PurchaseRequest purchaseRequest) {
        if (purchaseRequest.getPrice() > 30000) {
            System.out.println("请求编号：" + purchaseRequest.getId() + "，处理人：" + this.name);
        } else {
            nextApprover.processRequest(purchaseRequest);
        }
    }
}
```

测试代码

```java
//创建一个请求
PurchaseRequest purchaseRequest = new PurchaseRequest(1, 31000.0f);

//创建相关的审批人
TeachDirectorApprover teachDirectorApprover = new TeachDirectorApprover("童主任");
DepartmentHeadApprover departmentHeadApprover = new DepartmentHeadApprover("王院长");
ViceChancellorApprover viceChancellorApprover = new ViceChancellorApprover("钱副校长");
ChancellorApprover chancellorApprover = new ChancellorApprover("郑校长");

//设置后继者（处理人形成环形）
teachDirectorApprover.setNextApprover(departmentHeadApprover);
departmentHeadApprover.setNextApprover(viceChancellorApprover);
viceChancellorApprover.setNextApprover(chancellorApprover);
chancellorApprover.setNextApprover(teachDirectorApprover);

//发起一个请求
teachDirectorApprover.processRequest(purchaseRequest); //请求编号：1，处理人：郑校长
```



### 4、职责链模式在 SpringMVC 框架应用的源码分析

`SpringMVC`中`HandlerExecutionChain`类就使用到了职责链模式

首先，需要了解下`SpringMVC`基本的请求流程，如下图所示

![image-20220118185936255](images\责任链模式\责任链模式图5.png)

首先，当用户会发起一个`request`请求到后台，这个`request`请求首先会经过`DispatcherServlet`，`DispatcherServlet`对象首先会遍历接收到的`HandlerMapping`集合，然后再找到对应的`HandlerMapping`集合，并得到`HandlerExecutionChain`对象。这个`HandlerExecutionChain`对象内部包含了一些拦截器。拿到`HandlerInterceptor`拦截器过后，有以下几个操作

- 首先会调用`HandlerInterceptor`中的`preHandle()`方法
- 然后会调用`HandlerInterceptor`中的`postHandle()`方法
- 最后会调用`HandlerInterceptor`中的`afterCompletion()`方法

现在对`SpringMVC `进行源码分析，首先需要引入`SpringMVC`相关依赖

```xml
<properties>
    <maven.compiler.source>8</maven.compiler.source>
    <maven.compiler.target>8</maven.compiler.target>
    <org.springframework.version>4.3.7.RELEASE</org.springframework.version>
</properties>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-core</artifactId>
    <version>${org.springframework.version}</version>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-beans</artifactId>
    <version>${org.springframework.version}</version>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>${org.springframework.version}</version>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-web</artifactId>
    <version>${org.springframework.version}</version>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-webmvc</artifactId>
    <version>${org.springframework.version}</version>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-expression</artifactId>
    <version>${org.springframework.version}</version>
</dependency>
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>servlet-api</artifactId>
    <version>2.5</version>
    <scope>provided</scope>
</dependency>
```

接下来，我们对其如何调用`HandlerInterceptor`拦截器中的这三个方法一探究竟吧

1）在`DispatcherServlet`中找到`doDispatch()`方法，发现该方法中定义了一个`HandlerExecutionChain`对象

![image-20220118193853864](images\责任链模式\责任链模式图6.png)

在后续的代码逻辑中，调用了`getHandler()`方法，接收一个`processedRequest`请求对象作为参数，得到初始化的`HandlerExecutionChain`对象

![image-20220118193939093](images\责任链模式\责任链模式图7.png)

直接对`mappedHandler`对象进行高亮，方便我们更加直观地看到`mappedHandler`是如何调用上述所说的`preHandle()`、`postHandle()`和`afterCompletion()`三个方法的

![image-20220118202141860](images\责任链模式\责任链模式图8.png)

最终，我们找到这样两段代码，很像上述所说的`preHandle()`和`postHandle()`两个方法

```java
if (!mappedHandler.applyPreHandle(processedRequest, response)) {
    return;
}

mappedHandler.applyPostHandle(processedRequest, response, mv);
```

首先会执行`mappedHandler`的`applyPreHandle()`方法：如果返回为`false`，则判断成立，后续代码不再执行；否则继续往下执行，调用`mappedHandler`的`applyPostHandle()`方法

我们对`applyPreHandle()`和`applyPostHandle()`方法进行源码追踪

2）先看下`applyPreHandle()`方法的源码

```java
boolean applyPreHandle(HttpServletRequest request, HttpServletResponse response) throws Exception {
    HandlerInterceptor[] interceptors = getInterceptors();
    if (!ObjectUtils.isEmpty(interceptors)) {
        for (int i = 0; i < interceptors.length; i++) {
            HandlerInterceptor interceptor = interceptors[i];
            if (!interceptor.preHandle(request, response, this.handler)) {
                triggerAfterCompletion(request, response, null);
                return false;
            }
            this.interceptorIndex = i;
        }
    }
    return true;
}
```

可以发现，`applyPreHandle`方法内部首先会拿到一组`interceptors`拦截器，当拦截器数组不为空时，进行如下处理：

- 首先对`interceptors`拦截器进行了`for`循环遍历，拿到每一个具体的`interceptor`拦截器
- 接着调用了`interceptor`的`preHandle()`方法，如果返回`false`，则执行`triggerAfterCompletion()`方法并进行`return`，此方法结束；否则继续执行相关处理

3）接着看下`triggerAfterCompletion()`方法的源码

```java
void triggerAfterCompletion(HttpServletRequest request, HttpServletResponse response, Exception ex)
    throws Exception {

    HandlerInterceptor[] interceptors = getInterceptors();
    if (!ObjectUtils.isEmpty(interceptors)) {
        for (int i = this.interceptorIndex; i >= 0; i--) {
            HandlerInterceptor interceptor = interceptors[i];
            try {
                interceptor.afterCompletion(request, response, this.handler, ex);
            }
            catch (Throwable ex2) {
                logger.error("HandlerInterceptor.afterCompletion threw exception", ex2);
            }
        }
    }
}
```

可以发现，其中逻辑跟`applyPreHandle()`方法很相似：先对一组`interceptors`拦截器进行遍历，再执行`interceptor`单个拦截器的`afterCompletion()`方法

4）最后看下`applyPostHandle()`方法的源码

```java
void applyPostHandle(HttpServletRequest request, HttpServletResponse response, ModelAndView mv) throws Exception {
    HandlerInterceptor[] interceptors = getInterceptors();
    if (!ObjectUtils.isEmpty(interceptors)) {
        for (int i = interceptors.length - 1; i >= 0; i--) {
            HandlerInterceptor interceptor = interceptors[i];
            interceptor.postHandle(request, response, this.handler, mv);
        }
    }
}
```

同样可以发现，其中逻辑跟上述方法也基本一致：先对一组`interceptors`拦截器进行遍历，再执行`interceptor`单个拦截器的`postHandle()`方法

通过对上述`SpringMVC`的源码分析，这里进行简单的梳理总结

- `SpringMVC`请求的流程图中，执行了拦截器相关方法，如`interceptor.preHandler()`
- 在处理`SpringMVC`请求时，使用到<mark>职责链模式和适配器模式</mark>
- `HandlerExecutionChain`：主要负责请求拦截器的执行和请求处理，但是本身不处理请求，只是将请求分配给 *链上注册处理器* 执行。这是职责链实现方式，<mark>减少职责链本身与处理逻辑之间的耦合，规范了处理流程</mark>
- `HandlerExecutionChain`：维护了`Handlerlnterceptor`的集合，可以向其中注册相应的拦截器



### 5、职责链模式的注意事项和细节

- 1）将请求和处理分开，实现解耦，提高系统的灵活性
- 2）简化了对象，使对象不需要知道链的结构
- 3）性能会受到影响，特别是在链比较长的时候，因此需控制链中最大节点数量，一般通过在`Handler`中设置一个最大节点数量，在`setNext()`方法中判断是否已经超过阀值，超过则不允许该链建立，避免出现超长链无意识地破坏系统性能
- 4）调试不方便。采用了类似递归的方式，调试时逻辑可能比较复杂
- 5）最佳应用场景：有多个对象可以处理同一个请求时，比如：多级请求、请假 / 加薪等审批流程、Java Web 中 Tomcat 对`Encoding`的处理、拦截器

## 【-】设计模式大杂烩

### 1、概念性知识

#### 设计模式终极目标（世界观）

- 高内聚、低耦合
- 易扩展、易维护

#### 设计模式核心思想（方法论）

- 组合聚合代替继承
- 面向接口编程

#### 颗粒度

- <mark>颗粒度</mark>：系统结构功能的分解细化程度、复杂对象的分解程度

#### 如何把握“度”

- <mark>权衡</mark>各种因素，适当颗粒化，使系统处于合适的颗粒度

#### 单一职责

要使得系统功能专业而单一，降低对象与对象之间、各个功能模块之间的依赖和耦合

- 软件的每一个操作过程不要太过复杂，否则不便于系统的维护和解耦
- 软件结构或操作过程不能太细化，否则造成系统各部件之间的频繁调用，运行效率降低

#### 无方法接口的作用

- 标示

#### 重构原则

- 抽象类应当拥有竟可能多的行为，应当拥有尽可能少的数据

#### “好莱坞”原则

> don‘t call us, we‘ll call you
>
> 不要打电话给我们，我们会打电话给你

这是著名的“好莱坞”原则。在好莱坞，把简历递交给演艺公司后就只有回家等待。由演艺公司对整个娱乐项的完全控制，演员只能被动式的接受公司的差使，在需要的环节中，完成自己的演出

**模板方法模式**充分的体现了“好莱坞”原则。`IOC`的原理就是基于好莱坞原则，所有的组件都是被动的，所有的组件初始化和调用都由容器负责

允许底层组件将自己挂钩到高层组件的算法过程中，什么时候调用，则是按照高层的处理逻辑决定，有效避免了系统环状依赖

#### 开闭原则如何实现？

- 面向抽象/接口编程：也是依赖倒转原则，多用抽象类和接口
- 封装变化部分

#### 符合设计原则的典型设计模式

- **单一职责原则**：状态模式
- **依赖倒转原则**：桥接模式
- **接口隔离原则**：备忘录模式
- **迪米特法则**：外观模式、中介者模式、命令模式



### 2、设计模式补充

#### 原型模式

- 实现`Cloneable`接口，重载`clone`方式产生新对象时，不会执行类的构造方法

#### 备忘录模式

- **白箱备忘录模式**：普通的方式，即只有一个备忘录具体类
- **黑箱备忘录模式**：定义一个备忘录窄接口，备忘录具体实现类作为私有内部类调用，并且备忘录类中所有属性和方法均私有化，不对外暴露；同时备忘录管理者只接收窄接口

#### 弥补老系统缺陷的设计模式

老系统代码，一般不轻易改动原代码，这时候需要对老系统做功能扩展，如下设计模式应运而生

- 适配器模式
- 外观模式
- 代理模式

#### 双向耦合的设计模式

你中有我、我中有你：即一个对象持有另一个对象，另一个对象也持有该对象的情况。当然，为了解耦，一般是接口或抽象类之间相互持有

- 中介者模式、观察者模式、访问者模式、状态模式

#### 常用的设计模式必知必会

- **创建型模式**：单例模式、工厂方法模式、抽象工厂模式
- **结构型模式**：外观模式、代理模式
- **行为型模式**：模板方法模式、状态模式、策略模式

## 【-】设计模式对比

### 1、抽象工厂模式 VS 建造者模式 VS 模板方法模式

首先，看下各个模式的定义

- **抽象工厂模式**：由工厂对象决定创建出哪种产品类的实例
- **建造者模式**：将复杂对象的建造过程抽象出来，使这个抽象过程的不同实现方法可以构造出不同表现（属性）的对象
- **模板方法模式**：定义一个操作中的算法骨架，将一些步骤延迟到子类中。分为类行为模式和对象行为模式，前者采用继承机制来在类间分派行为，后者采用组合或聚合在对象间分配行为

通过一张表格总结其区别

| 抽象工厂模式           | 建造者模式                                                   | 模板方法模式                                                 |
| :--------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| 创建型模式             | ~                                                            | 结构型模式                                                   |
| 关注的是对象的创建     | 关注的是对象的创建                                           | 关注的是对象的方法结构                                       |
| 关注的是具体产品的创建 | 关注的是复杂对象的建造过程                                   | 关注的是算法框架                                             |
| 产品之间一般无关系     | 建造过程有关系，这些建造过程都是为创建一个复杂对象服务的，最终要到指挥者中进行组装，生成一个对象 | 各个算法之间有关系，模板类中定义好了算法骨架，具体算法在子类中实现 |



### 2、适配器模式 VS 桥接模式

首先，看下两个设计模式的定义

- **适配器模式**：将一个类的接口转换成客户希望的另外一个接口，使得原本由于接口不兼容而不能一起工作的那些类能一起工作
- **桥接模式**：将抽象与实现分离，使它们可以独立变化

通过一张表格总结其区别

| 适配器模式               | 桥接模式                     |
| :----------------------- | :--------------------------- |
| 结构型模式               | ~                            |
| 一种接口转换成另一种接口 | 实现与接口分开，可以独立变化 |
| 基类继承+接口实现        | 接口组合                     |



### 3、外观模式 VS 代理模式 VS 命令模式

首先，看下各个设计模式的定义

- **外观模式**：通过为多个复杂的子系统提供一个一致的接口，而使这些子系统更加容易被访问
- **代理模式**：由于某些原因需要给某对象提供一个代理以控制对该对象的访问
- **命令模式**：将一个请求封装为一个对象，使发出请求的责任和执行请求的责任分割开

通过一张表格总结其区别

| 外观模式                               | 代理模式                                   | 命令模式                                             |
| :------------------------------------- | :----------------------------------------- | :--------------------------------------------------- |
| 结构型模式                             | ~                                          | 行为型模式                                           |
| 为子系统一组接口提供一个统一的高层接口 | 强调的是代替本人作业，减少对实际对象的操作 | 请求和执行分割开                                     |
| 通过组合聚合                           | 通过组合聚合+接口实现                      | 通过组合聚合                                         |
| 外观类不需要对被包装类中方法都使用到   | 代理类需要对被代理类中方法都实现           | 命令者不需要对接收者中方法都使用到                   |
| 外观类可以包装多个类                   | 代理类只代理一个类                         | 一个命令者只执行一个请求，一个接收者可对应多个命令者 |



### 4、观察者模式 VS 中介者模式

首先，看下两个设计模式的定义

- **观察者模式**：指多个对象间存在一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新
- **中介者模式**：定义一个中介对象来封装一系列对象之间的交互，使原有对象之间的耦合松散，且可以独立地改变它们之间的交互

通过一张表格总结其区别

| 观察者模式                 | 中介者模式               |
| :------------------------- | :----------------------- |
| 行为型模式                 | ~                        |
| 强调观察者改变时统一的通知 | 强调同事类之间的交互     |
| 观察者都会收到消息         | 同事类可以有选择进行交互 |
| 处理逻辑在发送方           | 处理逻辑在中介者         |
| 观察者和被观察者分离       | 同事类之间交互解耦       |



### 5、策略模式 VS 状态模式

首先，看下两个设计模式的定义

- **策略模式**：该模式定义了一系列算法，并将每个算法封装起来，使它们可以相互替换，且算法的变化不会影响使用算法的客户
- **状态模式**：对有状态的对象，把复杂的“判断逻辑”提取到不同的状态对象中，允许状态对象在其内部状态发生改变时改变其行为

通过一张表格总结其区别

| 策略模式                                             | 状态模式                                                   |
| :--------------------------------------------------- | :--------------------------------------------------------- |
| 行为型模式                                           | ~                                                          |
| 多个类区别不同的行为（算法）                         | 多个类区别不同的状态                                       |
| 一组方案或算法的相互替换，采取何种策略由外部条件决定 | 主要解决复杂逻辑处理的状态迁移，这个过程由对象内部条件决定 |
| 策略类不依赖上下文                                   | 状态类依赖上下文                                           |



### 6、策略模式 VS 模板方法模式

首先，看下两个设计模式的定义

- **策略模式**：该模式定义了一系列算法，并将每个算法封装起来，使它们可以相互替换，且算法的变化不会影响使用算法的客户
- **模板方法模式**：定义一个操作中的算法骨架，而将算法的一些步骤延迟到子类中，使得子类可以不改变该算法结构的情况下重定义该算法的某些特定步骤

通过一张表格总结其区别

| 策略模式                                         | 模板方法模式                                                 |
| :----------------------------------------------- | :----------------------------------------------------------- |
| 行为型模式                                       | ~                                                            |
| 采取何种策略由外部决定                           | 采用何种实现由外部决定                                       |
| 定义一系列算法并封装，可相互替换，独立于客户变化 | 定义算法骨架，将一些步骤延迟到子类实现                       |
| 利用多态                                         | 利用继承                                                     |
| 偏重于解决算法多样性对代码结构冲击的问题         | 侧重于业务流程复杂但稳定（整体算法结构不变），而其中某些步骤变化相对剧烈（一些步骤的具体实现不同） |