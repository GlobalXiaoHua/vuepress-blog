# Vue3笔记

## 【1】setup

setup 函数返回的对象中的内容，可直接在模板中使用。

setup中访问this是undefined。

setup函数会在beforeCreate之前调用，它是“领先”所有钩子执行的。

```vue
<template>
  <div class="person">
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">年龄+1</button>
    <button @click="showTel">点我查看联系方式</button>
  </div>
</template>

<script lang="ts">
  export default {
    name:'Person',
    setup(){
      // 数据，原来写在data中（注意：此时的name、age、tel数据都不是响应式数据）
      let name = '张三'
      let age = 18
      let tel = '13888888888'

      // 方法，原来写在methods中
      function changeName(){
        name = 'zhang-san' //注意：此时这么修改name页面是不变化的
        console.log(name)
      }
      function changeAge(){
        age += 1 //注意：此时这么修改age页面是不变化的
        console.log(age)
      }
      function showTel(){
        alert(tel)
      }

      // 返回一个对象，对象中的内容，模板中可以直接使用
      return {name,age,tel,changeName,changeAge,showTel}
    }
  }
</script>
```

## 【2】setup 返回值

若返回一个对象：则对象中的：属性、方法等，在模板中均可以直接使用（重点关注）。

若返回一个函数：则可以自定义渲染内容

```ts
setup(){
  return ()=> '你好啊！'
}
```

## 【3】setup 语法糖

```vue
<template>
  <div class="person">
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <button @click="changName">修改名字</button>
    <button @click="changAge">年龄+1</button>
    <button @click="showTel">点我查看联系方式</button>
  </div>
</template>

<script lang="ts">
  export default {
    name:'Person',
  }
</script>

<!-- 下面的写法是setup语法糖 -->
<script setup lang="ts"> 
  console.log(this) //undefined
  
  // 数据（注意：此时的name、age、tel都不是响应式数据）
  let name = '张三'
  let age = 18
  let tel = '13888888888'

  // 方法
  function changName(){
    name = '李四'//注意：此时这么修改name页面是不变化的
  }
  function changAge(){
    console.log(age)
    age += 1 //注意：此时这么修改age页面是不变化的
  }
  function showTel(){
    alert(tel)
  }
</script>
```

安装插件

```shell
npm i vite-plugin-vue-setup-extend -D
```

vite.config.ts 引入插件 

```ts
import { defineConfig } from 'vite'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

export default defineConfig({
  plugins: [ VueSetupExtend() ]
})
```

优化上述代码

```vue
<template>
	......
</template>

<script setup lang="ts" name="Person">
	......
</script>
```

## 【4】setup 与 vue2 的关系

vue2 的配置（data、methos......）中可以访问setup中的属性、方法。但在setup中不能访问到vue2的配置（data、methos......）。
如果与vue2冲突，则setup优先

## 【5】ref  - 创建基本类型的响应式数据

定义响应式变量。返回值一个RefImpl的实例对象，简称ref对象或ref。ref对象的value属性是响应式的。

```vue
<template>
  <div class="person">
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>地址：{{address}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {ref} from 'vue'

  // 数据，原来是写在data中的，此时的name、age、tel都不是响应式的数据
  let name = ref('张三')
  let age = ref(18)
  let tel = '13888888888'
  let address = '北京昌平区宏福苑·宏福科技园'

  // 方法
  function changeName() {
    name.value = 'zhang-san' // JS中操作ref对象时候需要.value
    console.log(name.value) 
  }
  function changeAge() {
    age.value += 1 
    console.log(age.value) // JS中操作ref对象时候需要.value
  }
  function showTel() {
    alert(tel)
  }
</script>
```

## 【6】reactive - 创建对象类型的响应式数据

定义一个响应式对象（基本类型不要用它，要用ref，否则报错）。返回值是一个Proxy的实例对象，简称：响应式对象。reactive定义的响应式数据是“深层次”的。

```vue
<template>
  <div class="person">
    <h2>汽车信息：一辆{{car.brand}}车，价值{{car.price}}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <br>
    <h2>游戏列表：</h2>
    <ul>
      <li v-for="g in games" :key="g.id">{{g.name}}</li>
    </ul>
    <button @click="changeFirstGame">修改第一个游戏的名字</button>
    <hr>
    <h2>测试：{{obj.a.b.c}}</h2>
    <button @click="changeObj">测试</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {reactive} from 'vue'

  // 数据
  let car = reactive({brand:'奔驰',price:100})
  let games = reactive([
    {id:'aysdytfsatr01',name:'王者荣耀'},
    {id:'aysdytfsatr02',name:'原神'},
    {id:'aysdytfsatr03',name:'三国志'}
  ])
  let obj = reactive({
    a:{
      b:{
        c:666
      }
    }
  })
  
  console.log(car)
  console.log(games)

  // 方法
  function changePrice(){
    car.price += 10
    console.log(car.price)
  }
  function changeFirstGame(){
    games[0].name = '流星蝴蝶剑'
  }
  function changeObj(){
    obj.a.b.c = 999
  }

</script>
```

## 【7】ref - 创建对象类型的响应式数据

ref接收的数据可以是：基本类型**、**对象类型。若ref接收的是对象类型，内部其实也是调用了reactive函数。

```vue
<template>
  <div class="person">
    <h2>汽车信息：一辆{{car.brand}}车，价值{{car.price}}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <br>
    <h2>游戏列表：</h2>
    <ul>
      <li v-for="g in games" :key="g.id">{{g.name}}</li>
    </ul>
    <button @click="changeFirstGame">修改第一个游戏的名字</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {ref,reactive} from 'vue'

  // 数据
  let car = ref({brand:'奔驰',price:100})
  let games = ref([
    {id:'aysdytfsatr01',name:'王者荣耀'},
    {id:'aysdytfsatr02',name:'原神'},
    {id:'aysdytfsatr03',name:'三国志'}
  ])
  let obj = reactive({x:999})

  console.log(car)
  console.log(obj)

  // 方法
  function changePrice(){
    car.value.price += 10
    console.log(car.value.price)
  }
  function changeFirstGame(){
    games.value[0].name = '流星蝴蝶剑'
  }

</script>
```

## 【8】ref  / reactive

[1] 使用原则

若需要一个基本类型的响应式数据，必须使用ref。

若需要一个响应式对象，层级不深，ref、reactive都可以。

若需要一个响应式对象，且层级较深，推荐使用reactive。

[2] 区别

ref创建的变量必须使用.value（可以使用volar插件自动添加.value）。

reactive重新分配一个新对象，会失去响应式（可以使用Object.assign去整体替换）

```vue
<template>
  <div class="person">
    <h2>汽车信息：一辆{{car.brand}}车，价值{{car.price}}万</h2>
    <button @click="changeBrand">修改汽车的品牌</button>
    <button @click="changePrice">修改汽车的价格</button>
    <button @click="changeCar">修改汽车</button>
    <hr>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="changeSum">点我sum+1</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {ref,reactive} from 'vue'

  // 数据
  let car = reactive({brand:'奔驰',price:100})
  let sum = ref(0)

  // 方法
  function changeBrand(){
    car.brand = '宝马'
  }
  function changePrice(){
    car.price += 10
  }
  function changeCar(){
    // car = {brand:'奥拓',price:1} //这么写页面不更新的
    // car = reactive({brand:'奥拓',price:1}) //这么写页面不更新的

    // 下面这个写法页面可以更新
    Object.assign(car,{brand:'奥拓',price:1})
  }
  function changeSum(){
    // sum = ref(9) //这么写页面不更新的
    sum.value += 1
  }
</script>
```

## 【9】toRefs / toRef

将一个响应式对象中的每一个属性，转换为ref对象。toRefs与toRef功能一致，但toRefs可以批量转换

```vue
<template>
  <div class="person">
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}，{{nl}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {reactive,toRefs,toRef} from 'vue'

  // 数据
  let person = reactive({
    name:'张三',
    age:18
  })

  // 使用toRefs从person这个响应式对象中，解构出name、age，且name和age依然是响应式的
  // name和age的值是ref类型，其value值指向的是person.name和person.age
  let {name,age} = toRefs(person)
  let nl = toRef(person,'age')
  
  console.log(nl.value)

  // 方法
  function changeName(){
    name.value += '~'
    console.log(name.value,person.name)
  }
  function changeAge(){
    age.value += 1
  }
</script>
```

## 【10】computed

根据已有数据计算出新数据（和Vue2中的computed作用一致）

```vue
<template>
  <div class="person">
    姓：<input type="text" v-model="firstName"> <br>
    名：<input type="text" v-model="lastName"> <br>
    <button @click="changeFullName">将全名改为li-si</button> <br>
    全名：<span>{{fullName}}</span> <br>
    全名：<span>{{fullName}}</span> <br>
    全名：<span>{{fullName}}</span> <br>
    全名：<span>{{fullName}}</span> <br>
    全名：<span>{{fullName}}</span> <br>
    全名：<span>{{fullName}}</span> <br>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {ref,computed} from 'vue'

  let firstName = ref('zhang')
  let lastName = ref('san')

  // fullName是一个计算属性，且是只读的
  /* let fullName = computed(()=>{
    console.log(1)
    return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
  }) */

  // fullName是一个计算性，可属读可写
  let fullName = computed({
    // 当fullName被读取时，get调用
    get(){
      return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
    },
    // 当fullName被修改时，set调用，且会收到修改的值
    set(val){
      const [str1,str2] = val.split('-')
      firstName.value = str1
      lastName.value = str2
    }
  })

  function changeFullName(){
    fullName.value = 'li-si'
  }
</script>
```

## 【11】watch 特点

ref定义的数据。

reactive 定义的数据。

函数返回一个值（getter函数）。

一个包含上述内容的数组。

## 【12】watch - ref 基本类型数据

监视ref定义的基本类型数据，直接写数据名即可，监视的是其value值的改变

```vue
<template>
  <div class="person">
    <h1>情况一：监视【ref】定义的【基本类型】数据</h1>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="changeSum">点我sum+1</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {ref,watch} from 'vue'
  // 数据
  let sum = ref(0)
  // 方法
  function changeSum(){
    sum.value += 1
  }
  // 监视，情况一：监视【ref】定义的【基本类型】数据
  const stopWatch = watch(sum,(newValue,oldValue)=>{
    console.log('sum变化了',newValue,oldValue)
    if(newValue >= 10){
      stopWatch()
    }
  })
</script>
```

## 【13】watch - ref 对象类型数据

监视ref定义的对象类型数据，直接写数据名，监视的是对象的地址值，若想监视对象内部的数据，要手动开启深度监视。

若修改的是ref定义的对象中的属性，newValue和oldValue都是新值，因为它们是同一个对象。

若修改整个ref定义的对象，newValue是新值， oldValue是旧值，因为不是同一个对象了。

```vue
<template>
  <div class="person">
    <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {ref,watch} from 'vue'
  // 数据
  let person = ref({
    name:'张三',
    age:18
  })
  // 方法
  function changeName(){
    person.value.name += '~'
  }
  function changeAge(){
    person.value.age += 1
  }
  function changePerson(){
    person.value = {name:'李四',age:90}
  }
  /* 
    监视，情况一：监视【ref】定义的【对象类型】数据，监视的是对象的地址值，若想监视对象内部属性的变化，需要手动开启深度监视
    watch的第一个参数是：被监视的数据
    watch的第二个参数是：监视的回调
    watch的第三个参数是：配置对象（deep、immediate等等.....） 
  */
  watch(person,(newValue,oldValue)=>{
    console.log('person变化了',newValue,oldValue)
  },{deep:true})
  
</script>
```

## 【14】watch - reactive 对象类型数据

监视reactive定义的对象类型数据，且默认开启了深度监视。

```vue
<template>
  <div class="person">
    <h1>情况三：监视【reactive】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
    <hr>
    <h2>测试：{{obj.a.b.c}}</h2>
    <button @click="test">修改obj.a.b.c</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {reactive,watch} from 'vue'
  // 数据
  let person = reactive({
    name:'张三',
    age:18
  })
  let obj = reactive({
    a:{
      b:{
        c:666
      }
    }
  })
  // 方法
  function changeName(){
    person.name += '~'
  }
  function changeAge(){
    person.age += 1
  }
  function changePerson(){
    Object.assign(person,{name:'李四',age:80})
  }
  function test(){
    obj.a.b.c = 888
  }

  // 监视，情况三：监视【reactive】定义的【对象类型】数据，且默认是开启深度监视的
  watch(person,(newValue,oldValue)=>{
    console.log('person变化了',newValue,oldValue)
  })
  watch(obj,(newValue,oldValue)=>{
    console.log('Obj变化了',newValue,oldValue)
  })
  
</script>
```

## 【15】watch - getter函数

监视ref或reactive定义的对象类型数据中的某个属性，若该属性值不是对象类型，需要写成函数形式。

若该属性值是依然是对象类型，可直接编，也可写成函数，建议写成函数。

注意，对象监视的是地址值，如果要关注对象内部，需要手动开启深度监视。

```vue
<template>
  <div class="person">
    <h1>情况四：监视【ref】或【reactive】定义的【对象类型】数据中的某个属性</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改第一台车</button>
    <button @click="changeC2">修改第二台车</button>
    <button @click="changeCar">修改整个车</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {reactive,watch} from 'vue'

  // 数据
  let person = reactive({
    name:'张三',
    age:18,
    car:{
      c1:'奔驰',
      c2:'宝马'
    }
  })
  // 方法
  function changeName(){
    person.name += '~'
  }
  function changeAge(){
    person.age += 1
  }
  function changeC1(){
    person.car.c1 = '奥迪'
  }
  function changeC2(){
    person.car.c2 = '大众'
  }
  function changeCar(){
    person.car = {c1:'雅迪',c2:'爱玛'}
  }

  // 监视，情况四：监视响应式对象中的某个属性，且该属性是基本类型的，要写成函数式
  /* watch(()=> person.name,(newValue,oldValue)=>{
    console.log('person.name变化了',newValue,oldValue)
  }) */

  // 监视，情况四：监视响应式对象中的某个属性，且该属性是对象类型的，可以直接写，也能写函数，更推荐写函数
  watch(()=>person.car,(newValue,oldValue)=>{
    console.log('person.car变化了',newValue,oldValue)
  },{deep:true})

</script>
```

## 【16】watch - 数组

```vue
<template>
  <div class="person">
    <h1>情况五：监视上述的多个数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改第一台车</button>
    <button @click="changeC2">修改第二台车</button>
    <button @click="changeCar">修改整个车</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {reactive,watch} from 'vue'

  // 数据
  let person = reactive({
    name:'张三',
    age:18,
    car:{
      c1:'奔驰',
      c2:'宝马'
    }
  })
  // 方法
  function changeName(){
    person.name += '~'
  }
  function changeAge(){
    person.age += 1
  }
  function changeC1(){
    person.car.c1 = '奥迪'
  }
  function changeC2(){
    person.car.c2 = '大众'
  }
  function changeCar(){
    person.car = {c1:'雅迪',c2:'爱玛'}
  }

  // 监视，情况五：监视上述的多个数据
  watch([()=>person.name,person.car],(newValue,oldValue)=>{
    console.log('person.car变化了',newValue,oldValue)
  },{deep:true})

</script>
```

## 【17】watchEffect

立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行该函数

watch / watchEffect区别

​	都能监听响应式数据的变化，不同的是监听数据变化的方式不同

​	watch要明确指出监视的数据

​	watchEffect不用明确指出监视的数据（函数中用到哪些属性，那就监视哪些属性）。

```vue
<template>
  <div class="person">
    <h2>需求：当水温达到60度，或水位达到80cm时，给服务器发请求</h2>
    <h2>当前水温：{{temp}}℃</h2>
    <h2>当前水位：{{height}}cm</h2>
    <button @click="changeTemp">水温+10</button>
    <button @click="changeHeight">水位+10</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {ref,watch,watchEffect} from 'vue'

  // 数据
  let temp = ref(10)
  let height = ref(0)

  // 方法
  function changeTemp(){
    temp.value += 10
  }
  function changeHeight(){
    height.value += 10
  }

  // 监视 -- watch实现
  /* watch([temp,height],(value)=>{
    // 从value中获取最新的水温(newTemp)、最新的水位(newHeight)
    let [newTemp,newHeight] = value
    // 逻辑
    if(newTemp >= 60 || newHeight >= 80){
      console.log('给服务器发请求')
    }
  }) */

  // 监视 -- watchEffect实现
  watchEffect(()=>{
    if(temp.value >= 60 || height.value >= 80){
      console.log('给服务器发请求')
    }
  })

</script>
```

## 【18】ref  属性

标签的 ref 属性用于注册模板引用。用在组件标签上，获取的是组件实例对象。用在普通DOM标签上，获取的是DOM节点

App.vue

```vue
<template>
  <h2 ref="title2">你好</h2>
  <button @click="showLog">测试</button>
  <Person ref="ren"/>
</template>

<script lang="ts" setup name="App">
  import Person from './components/Person.vue'
  import {ref} from 'vue'

  let title2 = ref()
  let ren = ref()

  function showLog(){
    // console.log(title2.value)
    console.log(ren.value) // ren 内容根据子组件定义展示的内容 defineExpose()
  }
</script>
```

person.vue

```vue
<template>
  <div class="person">
    <h1>中国</h1>
    <h2 ref="title2">北京</h2>
    <h3>尚硅谷</h3>
    <button @click="showLog">点我输出h2这个元素</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {ref} from 'vue'

  // 创建一个title2，用于存储ref标记的内容
  let title2 = ref()
  let a = ref(0)
  let b = ref(1)
  let c = ref(2)

  function showLog(){
    console.log(title2.value)
  }

  defineExpose({a,b,c})
</script>
```

## 【19】props

types/index.ts

```ts
// 定义一个接口，用于限制person对象的具体属性
export interface PersonInter {
  id:string,
  name:string,
  age:number,
}

// 一个自定义类型
// export type Persons = Array<PersonInter>
export type Persons = PersonInter[]
```

App.vue

```vue
<template>
	<Person :list="persons"/>
</template>

<script lang="ts" setup name="App">
import Person from './components/Person.vue'
import {reactive} from 'vue'
import {type Persons} from './types'

let persons = reactive<Persons>([
 {id:'e98219e12',name:'张三',age:18},
 {id:'e98219e13',name:'李四',age:19},
 {id:'e98219e14',name:'王五',age:20}
])
</script>
```

Person.vue

```Vue
<template>
  <div class="person">
    <ul>
      <li v-for="p in list" :key="p.id">
        {{p.name}} -- {{p.age}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {withDefaults} from 'vue'
  import {type Persons} from '@/types'

  // 只接收list
  // defineProps(['list'])

  // 接收list + 限制类型
  // defineProps<{list:Persons}>()

  //  接收list + 限制类型 + 限制必要性 + 指定默认值
  withDefaults(defineProps<{list?:Persons}>(),{
    list:()=> [{id:'ausydgyu01',name:'康师傅·王麻子·特仑苏',age:19}]
  })


  // 接收list，同时将props保存起来
  /* let x = defineProps(['list'])
  console.log(x.list) */

</script>
```

## 【20】vue2生命周期

创建阶段：beforeCreate、created

挂载阶段：beforeMount、mounted

更新阶段：beforeUpdate、updated

销毁阶段：beforeDestroy、destroyed

## 【21】vue3生命周期

创建阶段：setup

挂载阶段：onBeforeMount、onMounted

更新阶段：onBeforeUpdate、onUpdated

卸载阶段：onBeforeUnmount、onUnmounted

## 【22】hook

本质是一个函数，把setup函数中使用的Composition API进行了封装，复用代码, 让setup中的逻辑更清楚易懂。类似于vue2.x中的 mixin

person.vue

```vue
<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}，放大10倍后：{{ bigSum }}</h2>
    <button @click="add">点我sum+1</button>
    <hr>
    <img v-for="(dog,index) in dogList" :src="dog" :key="index">
    <br>
    <button @click="getDog">再来一只小狗</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import useSum from '@/hooks/useSum'
  import useDog from '@/hooks/useDog'

  const {sum,add,bigSum} = useSum()
  const {dogList,getDog} = useDog()
</script>
```

hook/useDog.ts

```ts
import {reactive,onMounted} from 'vue'
import axios from 'axios'

export default function (){
  // 数据
  let dogList = reactive([
    'https://images.dog.ceo/breeds/pembroke/n02113023_4373.jpg'
  ])
  // 方法
  async function getDog(){
    try {
      let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
      dogList.push(result.data.message)
    } catch (error) {
      alert(error)
    }
  }
  // 钩子
  onMounted(()=>{
    getDog()
  })
  // 向外部提供东西
  return {dogList,getDog}
}
```

hook/useSum.ts

```ts
import { ref,onMounted,computed} from 'vue'

export default function () {
  // 数据
  let sum = ref(0)
  let bigSum = computed(()=>{
    return sum.value * 10
  })

  // 方法
  function add() {
    sum.value += 1
  }

  // 钩子
  onMounted(()=>{
    add()
  })

  // 给外部提供东西
  return {sum,add,bigSum}
}
```



## 【23】router

Vue3中要使用vue-router的最新版本，目前是4版本。

路由组件通常存放在pages或views文件夹，一般组件通常存放在components文件夹。

通过点击导航，视觉效果上“消失” 了的路由组件，默认是被卸载掉( onunmounted )的，需要的时候再去挂载(onmounted )。

router/index.ts

```ts
// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import {createRouter,createWebHistory} from 'vue-router'
// 引入一个一个可能要呈现组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'

// 第二步：创建路由器
const router = createRouter({
  history:createWebHistory(), //路由器的工作模式
  routes:[ //一个一个的路由规则
    {
      path:'/home',
      component:Home
    },
    {
      path:'/news',
      component:News
    },
    {
      path:'/about',
      component:About
    },
  ]
})

// 暴露出去router
export default router
```

main.ts

```ts
// 引入createApp用于创建应用
import {createApp} from 'vue'
// 引入App根组件
import App from './App.vue'
// 引入路由器
import router from './router'

// 创建一个应用
const app = createApp(App)
// 使用路由器
app.use(router)
// 挂载整个应用到app容器中
app.mount('#app')
```

App.vue

```vue
<template>
  <div class="app">
    <h2 class="title">Vue路由测试</h2>
    <!-- 导航区 -->
    <div class="navigate">
      <RouterLink to="/home" active-class="xiaozhupeiqi">首页</RouterLink>
      <RouterLink to="/news" active-class="xiaozhupeiqi">新闻</RouterLink>
      <RouterLink to="/about" active-class="xiaozhupeiqi">关于</RouterLink>
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup name="App">
  import {RouterView,RouterLink} from 'vue-router'
    
</script>
```

## 【24】router - history

```ts
const router = createRouter({
	history:createWebHistory(), //history模式
	/******/
})
```

## 【25】router - hash

```ts
const router = createRouter({
	history:createWebHashHistory(), //hash模式
	/******/
})
```

## 【26】router - to

router/index.ts

```ts
// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import {createRouter,createWebHistory,createWebHashHistory} from 'vue-router'
// 引入一个一个可能要呈现组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'

// 第二步：创建路由器
const router = createRouter({
  history:createWebHashHistory(), //路由器的工作模式（稍后讲解）
  routes:[ //一个一个的路由规则
    {
      name:'zhuye',
      path:'/home',
      component:Home
    },
    {
      name:'xinwen',
      path:'/news',
      component:News
    },
    {
      name:'guanyu',
      path:'/about',
      component:About
    },
  ]
})

// 暴露出去router
export default router
```

App.vue

```vue
<template>
  <div class="app">
    <Header/>
    <!-- 导航区 -->
    <div class="navigate">
      <RouterLink to="/home" active-class="active">首页</RouterLink>
      <RouterLink :to="{name:'xinwen'}" active-class="active">新闻</RouterLink>
      <RouterLink :to="{path:'/about'}" active-class="active">关于</RouterLink>
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup name="App">
  import {RouterView,RouterLink} from 'vue-router'
  import Header from './components/Header.vue'

</script>
```

## 【27】router - children 

router/index.ts

```ts
// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import {createRouter,createWebHistory,createWebHashHistory} from 'vue-router'
// 引入一个一个可能要呈现组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'

// 第二步：创建路由器
const router = createRouter({
  history:createWebHistory(), //路由器的工作模式（稍后讲解）
  routes:[ //一个一个的路由规则
    {
      name:'zhuye',
      path:'/home',
      component:Home
    },
    {
      name:'xinwen',
      path:'/news',
      component:News,
      children:[
        {
          path:'detail',
          component:Detail
        }
      ]
    },
    {
      name:'guanyu',
      path:'/about',
      component:About
    },
  ]
})

// 暴露出去router
export default router
```

news.vue

```vue
<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <RouterLink to="/news/detail">{{news.title}}</RouterLink>
      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
  import {reactive} from 'vue'
  import {RouterView,RouterLink} from 'vue-router'

  const newsList = reactive([
    {id:'asfdtrfay01',title:'很好的抗癌食物',content:'西蓝花'},
    {id:'asfdtrfay02',title:'如何一夜暴富',content:'学IT'},
    {id:'asfdtrfay03',title:'震惊，万万没想到',content:'明天是周一'},
    {id:'asfdtrfay04',title:'好消息！好消息！',content:'快过年了'}
  ])

</script>
```

detail.vue

```vue
<template>
  <ul class="news-list">
    <li>编号：xxx</li>
    <li>标题：xxx</li>
    <li>内容：xxx</li>
  </ul>
</template>

<script setup lang="ts" name="About">

</script>
```

## 【28】router - query

router/index.ts

```ts
// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import {createRouter,createWebHistory,createWebHashHistory} from 'vue-router'
// 引入一个一个可能要呈现组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'

// 第二步：创建路由器
const router = createRouter({
  history:createWebHistory(), //路由器的工作模式（稍后讲解）
  routes:[ //一个一个的路由规则
    {
      name:'zhuye',
      path:'/home',
      component:Home
    },
    {
      name:'xinwen',
      path:'/news',
      component:News,
      children:[
        {
          name:'xiang',
          path:'detail',
          component:Detail
        }
      ]
    },
    {
      name:'guanyu',
      path:'/about',
      component:About
    }
  ]
})

// 暴露出去router
export default router
```

news.vue

```vue
<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <!-- 第一种写法 -->
        <!-- <RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`">{{news.title}}</RouterLink> -->

        <!-- 第二种写法 -->
        <RouterLink 
          :to="{
            name:'xiang',
            query:{
              id:news.id,
              title:news.title,
              content:news.content
            }
          }"
        >
          {{news.title}}
        </RouterLink>

      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
  import {reactive} from 'vue'
  import {RouterView,RouterLink} from 'vue-router'

  const newsList = reactive([
    {id:'asfdtrfay01',title:'很好的抗癌食物',content:'西蓝花'},
    {id:'asfdtrfay02',title:'如何一夜暴富',content:'学IT'},
    {id:'asfdtrfay03',title:'震惊，万万没想到',content:'明天是周一'},
    {id:'asfdtrfay04',title:'好消息！好消息！',content:'快过年了'}
  ])

</script>

```

## 【29】router - params

传递params参数时，若使用to的对象写法，必须使用name配置项，不能用path。

传递params参数时，需要提前在规则中占位。

router/index.ts

```ts
// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import {createRouter,createWebHistory,createWebHashHistory} from 'vue-router'
// 引入一个一个可能要呈现组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'

// 第二步：创建路由器
const router = createRouter({
  history:createWebHistory(), //路由器的工作模式（稍后讲解）
  routes:[ //一个一个的路由规则
    {
      name:'zhuye',
      path:'/home',
      component:Home
    },
    {
      name:'xinwen',
      path:'/news',
      component:News,
      children:[
        {
          name:'xiang',
          path:'detail/:id/:title/:content?',
          component:Detail
        }
      ]
    },
    {
      name:'guanyu',
      path:'/about',
      component:About
    }
  ]
})

// 暴露出去router
export default router
```

news.vue

```vue
<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <!-- 第一种写法 -->
        <!-- <RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`">{{news.title}}</RouterLink> -->

        <!-- 第二种写法 -->
        <RouterLink 
          :to="{
            name:'xiang',
            params:{
              id:news.id,
              title:news.title,
              content:news.content
            }
          }"
        >
          {{news.title}}
        </RouterLink>
      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
  import {reactive} from 'vue'
  import {RouterView,RouterLink} from 'vue-router'

  const newsList = reactive([
    {id:'asfdtrfay01',title:'很好的抗癌食物',content:'西蓝花'},
    {id:'asfdtrfay02',title:'如何一夜暴富',content:'学IT'},
    {id:'asfdtrfay03',title:'震惊，万万没想到',content:'明天是周一'},
    {id:'asfdtrfay04',title:'好消息！好消息！',content:'快过年了'}
  ])

</script>
```

## 【30】router - props

router/index.ts

```ts
// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import {createRouter,createWebHistory,createWebHashHistory} from 'vue-router'
// 引入一个一个可能要呈现组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'

// 第二步：创建路由器
const router = createRouter({
  history:createWebHistory(), //路由器的工作模式（稍后讲解）
  routes:[ //一个一个的路由规则
    {
      name:'zhuye',
      path:'/home',
      component:Home
    },
    {
      name:'xinwen',
      path:'/news',
      component:News,
      children:[
        {
          name:'xiang',
          path:'detail',
          component:Detail,

          // 第一种写法：将路由收到的所有params参数作为props传给路由组件
          // props:true,

          // 第二种写法：函数写法，可以自己决定将什么作为props给路由组件
          props(route){
            return route.query
          }

          // 第三种写法：对象写法，可以自己决定将什么作为props给路由组件
          /* props:{
            a:100,
            b:200,
            c:300
          } */
        }
      ]
    },
    {
      name:'guanyu',
      path:'/about',
      component:About
    }
  ]
})

// 暴露出去router
export default router
```

detail.vue

```vue
<template>
  <ul class="news-list">
    <li>编号：{{id}}</li>
    <li>标题：{{title}}</li>
    <li>内容：{{content}}</li>
  </ul>
</template>

<script setup lang="ts" name="About">
  defineProps(['id','title','content'])
</script>
```

## 【31】router - replace

控制路由跳转时操作浏览器历史记录的模式。浏览器的历史记录有两种写入方式：分别为push和replace。push是追加历史记录（默认值），replace是替换当前记录。

App.vue 开启

```vue
<template>
  <div class="app">
    <Header/>
    <!-- 导航区 -->
    <div class="navigate">
      <RouterLink replace to="/home" active-class="active">首页</RouterLink>
      <RouterLink replace :to="{name:'xinwen'}" active-class="active">新闻</RouterLink>
      <RouterLink replace :to="{path:'/about'}" active-class="active">关于</RouterLink>
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup name="App">
  import {RouterView,RouterLink} from 'vue-router'
  import Header from './components/Header.vue'

</script>
```

## 【32】router - 编程式

路由组件的两个重要的属性$route和$router变成了两个hooks

```vue
<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <button @click="showNewsDetail(news)">查看新闻</button>
        <RouterLink 
          :to="{
            name:'xiang',
            query:{
              id:news.id,
              title:news.title,
              content:news.content
            }
          }"
        >
          {{news.title}}
        </RouterLink>
      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
  import {reactive} from 'vue'
  import {RouterView,RouterLink,useRouter, useRoute} from 'vue-router'

  const newsList = reactive([
    {id:'asfdtrfay01',title:'很好的抗癌食物',content:'西蓝花'},
    {id:'asfdtrfay02',title:'如何一夜暴富',content:'学IT'},
    {id:'asfdtrfay03',title:'震惊，万万没想到',content:'明天是周一'},
    {id:'asfdtrfay04',title:'好消息！好消息！',content:'快过年了'}
  ])

  interface NewsInter {
    id:string,
    title:string,
    content:string
  }
    
  const route = useRoute()
  const router = useRouter()

  console.log(route.query)
  console.log(route.parmas)
  console.log(router.push)
  console.log(router.replace)

  function showNewsDetail(news:NewsInter){
    router.push({
      name:'xiang',
      query:{
        id:news.id,
        title:news.title,
        content:news.content
      }
    })
  }

</script>
```

## 【33】router - redirect

router/index.ts

```ts
// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import {createRouter,createWebHistory,createWebHashHistory} from 'vue-router'
// 引入一个一个可能要呈现组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'

// 第二步：创建路由器
const router = createRouter({
  history:createWebHistory(), //路由器的工作模式（稍后讲解）
  routes:[ //一个一个的路由规则
    {
      name:'zhuye',
      path:'/home',
      component:Home
    },
    {
      name:'xinwen',
      path:'/news',
      component:News,
      children:[
        {
          name:'xiang',
          path:'detail',
          component:Detail,

          // 第一种写法：将路由收到的所有params参数作为props传给路由组件
          // props:true,

          // 第二种写法：函数写法，可以自己决定将什么作为props给路由组件
          props(route){
            return route.query
          }

          // 第三种写法：对象写法，可以自己决定将什么作为props给路由组件
          /* props:{
            a:100,
            b:200,
            c:300
          } */
        }
      ]
    },
    {
      name:'guanyu',
      path:'/about',
      component:About
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})

// 暴露出去router
export default router
```

## 【34】pinia - 存储/读取数据

安装pinia

```shell
npm install pinia
```

src/main.ts

```ts
import {createApp} from 'vue'
import App from './App.vue'
// 第一步：引入pinia
import {createPinia} from 'pinia'

const app = createApp(App)
// 第二步：创建pinia
const pinia = createPinia()
// 第三步：安装pinia
app.use(pinia)
app.mount('#app')
```

store/count.ts

```ts
import {defineStore} from 'pinia'

export const useCountStore = defineStore('count',{
  // 真正存储数据的地方
  state(){
    return {
      sum:6
    }
  }
})
```

store/loveTalk.ts

```ts
import {defineStore} from 'pinia'

export const useTalkStore = defineStore('talk',{
  // 真正存储数据的地方
  state(){
    return {
      talkList:[
        {id:'ftrfasdf01',title:'今天你有点怪，哪里怪？怪好看的！'},
        {id:'ftrfasdf02',title:'草莓、蓝莓、蔓越莓，今天想我了没？'},
        {id:'ftrfasdf03',title:'心里给你留了一块地，我的死心塌地'}
      ]
    }
  }
})
```

components/Count.vue

```vue
<template>
  <div class="count">
    <h2>当前求和为：{{ countStore.sum }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts" name="Count">
  import { ref,reactive } from "vue";
  import {useCountStore} from '@/store/count'
    
  // 数据
  let n = ref(1) // 用户选择的数字
  const countStore = useCountStore()
  // 以下两种方式都可以拿到state中的数据
  // console.log('@@@',countStore.sum)
  // console.log('@@@',countStore.$state.sum)

</script>
```

components/LoveTalk.vue

```vue
<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkStore.talkList" :key="talk.id">{{talk.title}}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
  import {useTalkStore} from '@/store/loveTalk'
    
  const talkStore = useTalkStore()
</script>
```

## 【35】pinia - 修改数据

components/Count.vue

```vue
<template>
  <div class="count">
    <h2>当前求和为：{{ countStore.sum }}</h2>
    <h3>欢迎来到:{{ countStore.school }}，坐落于：{{ countStore.address }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts" name="Count">
  import { ref,reactive } from "vue";
  // 引入useCountStore
  import {useCountStore} from '@/store/count'
  // 使用useCountStore，得到一个专门保存count相关的store
  const countStore = useCountStore()

  // 数据
  let n = ref(1) // 用户选择的数字
  // 方法
  function add(){
    // 第一种修改方式
    // countStore.sum += 1

    // 第二种修改方式
    /* countStore.$patch({
      sum:888,
      school:'尚硅谷',
      address:'北京'
    }) */

    // 第三种修改方式
    countStore.increment(n.value)
  }

</script>
```

store/count.ts

```ts
import {defineStore} from 'pinia'

export const useCountStore = defineStore('count',{
  // actions里面放置的是一个一个的方法，用于响应组件中的“动作”
  actions:{
    increment(value){
      console.log('increment被调用了',value)
      if( this.sum < 10){
        // 修改数据（this是当前的store）
        this.sum += value
      }
    }
  },
  // 真正存储数据的地方
  state(){
    return {
      sum:6,
      school:'atguigu',
      address:'宏福科技园'
    }
  }
})
```

components/LoveTalk.vue

```vue
<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkStore.talkList" :key="talk.id">{{talk.title}}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
  import {useTalkStore} from '@/store/loveTalk'

  const talkStore = useTalkStore()
  
  // 方法
  function getLoveTalk(){
    talkStore.getATalk()
  }
</script>
```

store/loveTalk.ts

```ts
import {defineStore} from 'pinia'
import axios from 'axios'
import {nanoid} from 'nanoid'

export const useTalkStore = defineStore('talk',{
  actions:{
    async getATalk(){
      // 发请求，下面这行的写法是：连续解构赋值+重命名
      let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
      // 把请求回来的字符串，包装成一个对象
      let obj = {id:nanoid(),title}
      // 放到数组中
      this.talkList.unshift(obj)
    }
  },
  // 真正存储数据的地方
  state(){
    return {
      talkList:[
        {id:'ftrfasdf01',title:'今天你有点怪，哪里怪？怪好看的！'},
        {id:'ftrfasdf02',title:'草莓、蓝莓、蔓越莓，今天想我了没？'},
        {id:'ftrfasdf03',title:'心里给你留了一块地，我的死心塌地'}
      ]
    }
  }
})
```

## 【36】pinia - storeToRefs

借助storeToRefs将store中的数据转为ref对象，方便在模板中使用。

pinia提供的storeToRefs只会将数据做转换，而Vue的toRefs会转换store中数据。

```vue
<template>
  <div class="count">
    <h2>当前求和为：{{ sum }}</h2>
    <h3>欢迎来到:{{ school }}，坐落于：{{ address }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts" name="Count">
  import { ref,reactive,toRefs } from "vue";
  import {storeToRefs} from 'pinia'
  // 引入useCountStore
  import {useCountStore} from '@/store/count'
  // 使用useCountStore，得到一个专门保存count相关的store
  const countStore = useCountStore()
  // storeToRefs只会关注sotre中数据，不会对方法进行ref包裹
  const {sum,school,address} = storeToRefs(countStore)
  // console.log('!!!!!',storeToRefs(countStore))
  // 数据
  let n = ref(1) // 用户选择的数字
</script>
```

## 【37】pinia - getters

当state中的数据，需要经过处理后再使用时，可以使用getters配置

store/count.ts

 ```ts
 import {defineStore} from 'pinia'
 
 export const useCountStore = defineStore('count',{
   // actions里面放置的是一个一个的方法，用于响应组件中的“动作”
   actions:{
     increment(value:number){
       console.log('increment被调用了',value)
       if( this.sum < 10){
         // 修改数据（this是当前的store）
         this.sum += value
       }
     }
   },
   // 真正存储数据的地方
   state(){
     return {
       sum:3,
       school:'atguigu',
       address:'宏福科技园'
     }
   },
   getters:{
     bigSum:state => state.sum * 10,
     upperSchool():string{
       return this.school.toUpperCase()
     }
   }
 })
 ```

components/Count.vue

```vue
<template>
  <div class="count">
    <h2>当前求和为：{{ sum }}，放大10倍后：{{ bigSum }}</h2>
    <h3>欢迎来到:{{ school }}，坐落于：{{ address }}，大写：{{ upperSchool }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts" name="Count">
  import { ref,reactive,toRefs } from "vue";
  import {storeToRefs} from 'pinia'
  // 引入useCountStore
  import {useCountStore} from '@/store/count'
  // 使用useCountStore，得到一个专门保存count相关的store
  const countStore = useCountStore()
  // storeToRefs只会关注sotre中数据，不会对方法进行ref包裹
  const {sum,school,address,bigSum,upperSchool} = storeToRefs(countStore)
  // console.log('!!!!!',storeToRefs(countStore))

  // 数据
  let n = ref(1) // 用户选择的数字
  // 方法
  function add(){
    countStore.increment(n.value)
  }
  function minus(){
    countStore.sum -= n.value
  }
</script>
```

## 【38】pinia - $subscribe

通过 store 的 $subscribe()方法侦听 state及其变化

store/loveTalk.ts

```ts
import {defineStore} from 'pinia'
import axios from 'axios'
import {nanoid} from 'nanoid'

export const useTalkStore = defineStore('talk',{
  actions:{
    async getATalk(){
      // 发请求，下面这行的写法是：连续解构赋值+重命名
      let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
      // 把请求回来的字符串，包装成一个对象
      let obj = {id:nanoid(),title}
      // 放到数组中
      this.talkList.unshift(obj)
    }
  },
  // 真正存储数据的地方
  state(){
    return {
      talkList:JSON.parse(localStorage.getItem('talkList') as string) || []
    }
  }
})
```

components/LoveTalk.vue

```vue
<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">{{talk.title}}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
  import {useTalkStore} from '@/store/loveTalk'
  import { storeToRefs } from "pinia";

  const talkStore = useTalkStore()
  const {talkList} = storeToRefs(talkStore)

  talkStore.$subscribe((mutate,state)=>{
    console.log('talkStore里面保存的数据发生了变化',mutate,state)
    localStorage.setItem('talkList',JSON.stringify(state.talkList))
  })
  
  // 方法
  function getLoveTalk(){
    talkStore.getATalk()
  }
</script>
```

## 【39】pinia - 组合式写法

store/loveTalk.ts

```ts
import {defineStore} from 'pinia'
import axios from 'axios'
import {nanoid} from 'nanoid'

/* export const useTalkStore = defineStore('talk',{
  actions:{
    async getATalk(){
      // 发请求，下面这行的写法是：连续解构赋值+重命名
      let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
      // 把请求回来的字符串，包装成一个对象
      let obj = {id:nanoid(),title}
      // 放到数组中
      this.talkList.unshift(obj)
    }
  },
  // 真正存储数据的地方
  state(){
    return {
      talkList:JSON.parse(localStorage.getItem('talkList') as string) || []
    }
  }
})
 */

import {reactive} from 'vue'
export const useTalkStore = defineStore('talk',()=>{
  // talkList就是state
  const talkList = reactive(
    JSON.parse(localStorage.getItem('talkList') as string) || []
  )
  

  // getATalk函数相当于action
  async function getATalk(){
    // 发请求，下面这行的写法是：连续解构赋值+重命名
    let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    // 把请求回来的字符串，包装成一个对象
    let obj = {id:nanoid(),title}
    // 放到数组中
    talkList.unshift(obj)
  }
    
  // getter 
  // 状态
  const count = ref(0)

  // getter
  const doubleCount = computed(() => count.value * 2)
  
  return {talkList,getATalk, doubleCount}
})
```

## 【40】组件通信 - props

props是使用频率最高的一种通信方式，常用与 ：父 ↔ 子。

若父传子，属性值是非函数。若子传父，属性值是函数。

```vue
<template>
  <div class="father">
    <h3>父组件</h3>
		<h4>汽车：{{ car }}</h4>
		<h4 v-show="toy">子给的玩具：{{ toy }}</h4>
		<Child :car="car" :sendToy="getToy"/>
  </div>
</template>

<script setup lang="ts" name="Father">
	import Child from './Child.vue'
	import {ref} from 'vue'
	// 数据
	let car = ref('奔驰')
	let toy = ref('')
	// 方法
	function getToy(value:string){
		toy.value = value
	}
</script>
```

```vue
<template>
  <div class="child">
    <h3>子组件</h3>
		<h4>玩具：{{ toy }}</h4>
		<h4>父给的车：{{ car }}</h4>
		<button @click="sendToy(toy)">把玩具给父亲</button>
  </div>
</template>

<script setup lang="ts" name="Child">
	import {ref} from 'vue'
	// 数据
	let toy = ref('奥特曼')
	// 声明接收props
	defineProps(['car','sendToy'])
</script>
```

## 【41】组件通信 - defineEmits

自定义事件常用于：子 => 父。

```vue
<template>
  <div class="father">
    <h3>父组件</h3>
		<h4 v-show="toy">子给的玩具：{{ toy }}</h4>
		<!-- 给子组件Child绑定事件 -->
    <Child @send-toy="saveToy"/>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child from './Child.vue'
	import { ref } from "vue";
	// 数据
	let toy = ref('')
	// 用于保存传递过来的玩具
	function saveToy(value:string){
		console.log('saveToy',value)
		toy.value = value
	}
</script>
```

```vue
<template>
  <div class="child">
    <h3>子组件</h3>
		<h4>玩具：{{ toy }}</h4>
		<button @click="emit('send-toy',toy)">测试</button>
  </div>
</template>

<script setup lang="ts" name="Child">
	import { ref } from "vue";
	// 数据
	let toy = ref('奥特曼')
	// 声明事件
	const emit =  defineEmits(['send-toy'])
</script>
```

## 【42】组件通信 - mitt

可以实现任意组件间通信

安装 mitt

```shell
npm i mitt
```

utils\emitter.ts

```ts
// 引入mitt
import mitt from 'mitt'

// 调用mitt得到emitter，emitter能：绑定事件、触发事件
const emitter = mitt()

/* // 绑定事件
emitter.on('test1',()=>{
  console.log('test1被调用了')
})
emitter.on('test2',()=>{
  console.log('test2被调用了')
})

// 触发事件
setInterval(() => {
  emitter.emit('test1')
  emitter.emit('test2')
}, 1000);

setTimeout(() => {
  // emitter.off('test1')
  // emitter.off('test2')
  emitter.all.clear()
}, 3000); */


// 暴露emitter
export default emitter
```

子组件1

```vue
<template>
  <div class="child1">
    <h3>子组件1</h3>
		<h4>玩具：{{ toy }}</h4>
		<button @click="emitter.emit('send-toy',toy)">玩具给弟弟</button>
  </div>
</template>

<script setup lang="ts" name="Child1">
	import {ref} from 'vue'
	import emitter from '@/utils/emitter';

	// 数据
	let toy = ref('奥特曼')
</script>
```

子组件2

```vue
<template>
  <div class="child2">
    <h3>子组件2</h3>
		<h4>电脑：{{ computer }}</h4>
		<h4>哥哥给的玩具：{{ toy }}</h4>
  </div>
</template>

<script setup lang="ts" name="Child2">
	import {ref,onUnmounted} from 'vue'
	import emitter from '@/utils/emitter';
	// 数据
	let computer = ref('联想')
	let toy = ref('')

	// 给emitter绑定send-toy事件
	emitter.on('send-toy',(value:any)=>{
		toy.value = value
	})
	// 在组件卸载时解绑send-toy事件
	onUnmounted(()=>{
		emitter.off('send-toy')
	})
</script>
```

## 【43】组件通信 -  v-model原理

[1] $event

对于原生事件，$event 就是事件对象，可以 $event.target

对于自定义事件，$event 就是数据，不可以 $event.target

```vue
<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>{{ username }}</h4>
    <h4>{{ password }}</h4>
    <!-- v-model用在html标签上 -->
    <!-- <input type="text" v-model="username"> -->
    <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->

    <!-- v-model用在组件标签上 -->
    <!-- <AtguiguInput v-model="username"/> -->
    <!-- <AtguiguInput 
      :modelValue="username" 
      @update:modelValue="username = $event"
    /> -->

    <!-- 修改modelValue -->
    <AtguiguInput v-model:ming="username" v-model:mima="password"/>
  </div>
</template>

<script setup lang="ts" name="Father">
  import { ref } from "vue";
  import AtguiguInput from './AtguiguInput.vue'
  // 数据
  let username = ref('zhansgan')
  let password = ref('123456')
</script>
```

```vue
<template>
  <input 
    type="text" 
    :value="ming"
    @input="emit('update:ming',(<HTMLInputElement>$event.target).value)"
  >
  <br>
  <input 
    type="text" 
    :value="mima"
    @input="emit('update:mima',(<HTMLInputElement>$event.target).value)"
  >
</template>

<script setup lang="ts" name="AtguiguInput">
  defineProps(['ming','mima'])
  const emit = defineEmits(['update:ming','update:mima'])
</script>
```

## 【44】组件通信 - $attr

用于实现当前组件的父组件，向当前组件的子组件通信（祖→孙）

$attrs是一个对象，包含所有父组件传入的标签属性

$attrs会自动排除props中声明的属性(可以认为声明过的 props 被子组件自己“消费”了)

父组件

```vue
<template>
  <div class="father">
    <h3>父组件</h3>
		<h4>a：{{a}}</h4>
		<h4>b：{{b}}</h4>
		<h4>c：{{c}}</h4>
		<h4>d：{{d}}</h4>
		<Child :a="a" :b="b" :c="c" :d="d" v-bind="{x:100,y:200}" :updateA="updateA"/>
  </div>
</template>

<script setup lang="ts" name="Father">
	import Child from './Child.vue'
	import {ref} from 'vue'

	let a = ref(1)
	let b = ref(2)
	let c = ref(3)
	let d = ref(4)

	function updateA(value:number){
		a.value += value
	}
</script>
```

子组件

```vue
<template>
	<div class="child">
		<h3>子组件</h3>
		<GrandChild v-bind="$attrs"/>
	</div>
</template>

<script setup lang="ts" name="Child">
	import GrandChild from './GrandChild.vue'
</script>
```

孙组件

```vue
<template>
	<div class="grand-child">
		<h3>孙组件</h3>
		<h4>a：{{ a }}</h4>
		<h4>b：{{ b }}</h4>
		<h4>c：{{ c }}</h4>
		<h4>d：{{ d }}</h4>
		<h4>x：{{ x }}</h4>
		<h4>y：{{ y }}</h4>
		<button @click="updateA(6)">点我将爷爷那的a更新</button>
	</div>
</template>

<script setup lang="ts" name="GrandChild">
	defineProps(['a','b','c','d','x','y','updateA'])
</script>
```

## 【45】组件通信 - $refs / $parent

$refs用于父→子

$parent用于：子→父。

父组件

```vue
<template>
	<div class="father">
		<h3>父组件</h3>
		<h4>房产：{{ house }}</h4>
		<button @click="changeToy">修改Child1的玩具</button>
		<button @click="changeComputer">修改Child2的电脑</button>
		<button @click="getAllChild($refs)">让所有孩子的书变多</button>
		<Child1 ref="c1"/>
		<Child2 ref="c2"/>
	</div>
</template>

<script setup lang="ts" name="Father">
	import Child1 from './Child1.vue'
	import Child2 from './Child2.vue'
	import { ref,reactive } from "vue";
	let c1 = ref()
	let c2 = ref()

	// 数据
	let house = ref(4)
	// 方法
	function changeToy(){
		c1.value.toy = '小猪佩奇'
	}
	function changeComputer(){
		c2.value.computer = '华为'
	}
	function getAllChild(refs:{[key:string]:any}){
		console.log(refs)
		for (let key in refs){
			refs[key].book += 3
		}
	}
	// 向外部提供数据
	defineExpose({house})
</script>
```

子组件1 

```vue
<template>
  <div class="child1">
    <h3>子组件1</h3>
		<h4>玩具：{{ toy }}</h4>
		<h4>书籍：{{ book }} 本</h4>
		<button @click="minusHouse($parent)">干掉父亲的一套房产</button>
  </div>
</template>

<script setup lang="ts" name="Child1">
	import { ref } from "vue";
	// 数据
	let toy = ref('奥特曼')
	let book = ref(3)

	// 方法
	function minusHouse(parent:any){
		parent.house -= 1
	}

	// 把数据交给外部
	defineExpose({toy,book})

</script>
```

子组件2

```vue
<template>
  <div class="child2">
    <h3>子组件2</h3>
		<h4>电脑：{{ computer }}</h4>
		<h4>书籍：{{ book }} 本</h4>
  </div>
</template>

<script setup lang="ts" name="Child2">
		import { ref } from "vue";
		// 数据
		let computer = ref('联想')
		let book = ref(6)
		// 把数据交给外部
		defineExpose({computer,book})
</script>
```

## 【46】组件通信 - provide / inject

实现祖孙组件直接通信

父组件

```vue
<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>银子：{{ money }}万元</h4>
    <h4>车子：一辆{{car.brand}}车，价值{{car.price}}万元</h4>
    <Child/>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child from './Child.vue'
  import {ref,reactive,provide} from 'vue'

  let money = ref(100)
  let car = reactive({
    brand:'奔驰',
    price:100
  })
  function updateMoney(value:number){
    money.value -= value
  }

  // 向后代提供数据
  provide('moneyContext',{money,updateMoney})
  provide('car',car)

</script>
```

孙组件

```vue
<template>
  <div class="grand-child">
    <h3>我是孙组件</h3>
    <h4>银子：{{ money }}</h4>
    <h4>车子：一辆{{car.brand}}车，价值{{car.price}}万元</h4>
    <button @click="updateMoney(6)">花爷爷的钱</button>
  </div>
</template>

<script setup lang="ts" name="GrandChild">
  import { inject } from "vue";

  let {money,updateMoney} = inject('moneyContext',{money:0,updateMoney:(param:number)=>{}})
  let car = inject('car',{brand:'未知',price:0})
</script>
```

## 【47】组件通信 - 默认插槽

默认插槽的name为default

父组件

```vue
<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Category title="热门游戏列表">
        <ul>
          <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>
      </Category>
      <Category title="今日美食城市">
        <img :src="imgUrl" alt="">
      </Category>
      <Category title="今日影视推荐">
        <video :src="videoUrl" controls></video>
      </Category>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Category from './Category.vue'
  import { ref,reactive } from "vue";

  let games = reactive([
    {id:'asgytdfats01',name:'英雄联盟'},
    {id:'asgytdfats02',name:'王者农药'},
    {id:'asgytdfats03',name:'红色警戒'},
    {id:'asgytdfats04',name:'斗罗大陆'}
  ])
  let imgUrl = ref('https://z1.ax1x.com/2023/11/19/piNxLo4.jpg')
  let videoUrl = ref('http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4')

</script>
```

子组件

```vue
<template>
  <div class="category">
    <h2>{{title}}</h2>
    <slot>默认内容</slot>
  </div>
</template>

<script setup lang="ts" name="Category">
  defineProps(['title'])
</script>
```

## 【48】组件通信 - 具名插槽

父组件

```vue
<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Category>
        <template v-slot:s2>
          <ul>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
          </ul>
        </template>
        <template v-slot:s1>
          <h2>热门游戏列表</h2>
        </template>
      </Category>

      <Category>
        <template v-slot:s2>
          <img :src="imgUrl" alt="">
        </template>
        <template v-slot:s1>
          <h2>今日美食城市</h2>
        </template>
      </Category>
	<!-- 简写 -->
      <Category>
        <template #s2>
          <video video :src="videoUrl" controls></video>
        </template>
        <template #s1>
          <h2>今日影视推荐</h2>
        </template>
      </Category>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Category from './Category.vue'
  import { ref,reactive } from "vue";

  let games = reactive([
    {id:'asgytdfats01',name:'英雄联盟'},
    {id:'asgytdfats02',name:'王者农药'},
    {id:'asgytdfats03',name:'红色警戒'},
    {id:'asgytdfats04',name:'斗罗大陆'}
  ])
  let imgUrl = ref('https://z1.ax1x.com/2023/11/19/piNxLo4.jpg')
  let videoUrl = ref('http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4')

</script>
```

子组件

```vue
<template>
  <div class="category">
    <slot name="s1">默认内容1</slot>
    <slot name="s2">默认内容2</slot>
  </div>
</template>

<script setup lang="ts" name="Category">
  
</script>
```

## 【49】组件通信 -  作用域插槽

数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定

父组件 

```vue
<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Game>
        <template v-slot="params">
          <ul>
            <li v-for="y in params.youxi" :key="y.id">
              {{ y.name }}
            </li>
          </ul>
        </template>
      </Game>

      <Game>
        <template v-slot="params">
          <ol>
            <li v-for="item in params.youxi" :key="item.id">
              {{ item.name }}
            </li>
          </ol>
        </template>
      </Game>

      <Game>
        <template #default="{youxi}">
          <h3 v-for="g in youxi" :key="g.id">{{ g.name }}</h3>
        </template>
      </Game>

    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Game from './Game.vue'
</script>
```

子组件

```vue
<template>
  <div class="game">
    <h2>游戏列表</h2>
    <slot :youxi="games" x="哈哈" y="你好"></slot>
  </div>
</template>

<script setup lang="ts" name="Game">
  import {reactive} from 'vue'
  let games = reactive([
    {id:'asgytdfats01',name:'英雄联盟'},
    {id:'asgytdfats02',name:'王者农药'},
    {id:'asgytdfats03',name:'红色警戒'},
    {id:'asgytdfats04',name:'斗罗大陆'}
  ])
</script>
```

## 【50】shallowRef  / shallowReactive

[1] 作用

通过使用 shallowRef 和 shallowReactive 来绕开深度响应。浅层式 API 创建的状态只在其顶层是响应式的，对所有深层的对象不会做任何处理，避免了对每一个内部属性做响应式所带来的性能成本，这使得属性的访问变得更快，可提升性能。

[2] shallowRef

创建一个响应式数据，但只对顶层属性进行响应式处理。只跟踪引用值的变化，不关心值内部的属性变化

[3] shallowReactive

创建一个浅层响应式对象，只会使对象的最顶层属性变成响应式的，对象内部的嵌套属性则不会变成响应式的。对象的顶层属性是响应式的，但嵌套对象的属性不是。

```vue
<template>
	<div class="app">
		<h2>求和为：{{ sum }}</h2>
		<h2>名字为：{{ person.name }}</h2>
		<h2>年龄为：{{ person.age }}</h2>
		<h2>汽车为：{{ car }}</h2>
		<button @click="changeSum">sum+1</button>
		<button @click="changeName">修改名字</button>
		<button @click="changeAge">修改年龄</button>
		<button @click="changePerson">修改整个人</button>
		<span>|</span>
		<button @click="changeBrand">修改品牌</button>
		<button @click="changeColor">修改颜色</button>
		<button @click="changeEngine">修改发动机</button>
	</div>
</template>

<script setup lang="ts" name="App">
	import { ref,reactive,shallowRef,shallowReactive } from 'vue'

	let sum = shallowRef(0)
	let person = shallowRef({
		name:'张三',
		age:18
	})
	let car = shallowReactive({
		barnd:'奔驰',
		options:{
			color:'红色',
			engine:'V8'
		}
	})

	function changeSum (){
		sum.value += 1
	}
	function changeName (){
		person.value.name = '李四'
	}
	function changeAge (){
		person.value.age += 1
	}
	function changePerson (){
		person.value = {name:'tony',age:100}
	}
	/* ****************** */
	function changeBrand(){
		car.barnd = '宝马'
	}
	function changeColor(){
		car.options.color = '紫色'
	}
	function changeEngine(){
		car.options.engine = 'V12'
	}

</script>
```

## 【51】readonly / shallowReadonly

readonly

用于创建一个对象的深只读副本。对象的所有嵌套属性都将变为只读。任何尝试修改这个对象的操作都会被阻止（在开发模式下，还会在控制台中发出警告）。用于创建不可变的状态快照或保护全局状态或配置不被修改。

shallowReadonly

与 readonly类似，但只作用于对象的顶层属性。只将对象的顶层属性设置为只读，对象内部的嵌套属性仍然是可变的。适用于只需保护对象顶层属性的场景。

```vue
<template>
	<div class="app">
		<h2>当前sum1为：{{ sum1 }}</h2>
		<h2>当前sum2为：{{ sum2 }}</h2>
		<h2>当前car1为：{{ car1 }}</h2>
		<h2>当前car2为：{{ car2 }}</h2>
		<button @click="changeSum1">点我sum1+1</button>
		<button @click="changeSum2">点我sum2+1</button>
		<button @click="changeBrand2">修改品牌(car2)</button>
		<button @click="changeColor2">修改颜色(car2)</button>
		<button @click="changePrice2">修改价格(car2)</button>
	</div>
</template>

<script setup lang="ts" name="App">
	import { ref,reactive,readonly,shallowReadonly } from "vue";

	let sum1 = ref(0)
	let sum2 = readonly(sum1)
	let car1 = reactive({
		brand:'奔驰',
		options:{
			color:'红色',
			price:100
		}
	})
	let car2 = shallowReadonly(car1)

	function changeSum1(){
		sum1.value += 1
	}
	function changeSum2(){
		sum2.value += 1 //sum2是不能修改的
	}

	function changeBrand2(){
		car2.brand = '宝马'
	}
	function changeColor2(){
		car2.options.color = '绿色'
	}
	function changePrice2(){
		car2.options.price += 10
	}
</script>
```

## 【52】 toRaw / markRaw

toRaw

用于获取一个响应式对象的原始对象， toRaw 返回的对象不再是响应式的，不会触发视图更新。在需要将响应式对象传递给非 Vue的库或外部系统时，使用 toRaw可以确保它们收到的是普通对象

markRaw

标记一个对象，使其永远不会变成响应式的。例如使用mockjs时，为了防止误把mockjs变为响应式对象，可以使用 markRaw 去标记mockjs

```vue
<template>
	<div class="app">
		<h2>姓名：{{ person.name }}</h2>
		<h2>年龄：{{ person.age }}</h2>
		<button @click="person.age += 1">修改年龄</button>
		<hr>
		<h2>{{ car2 }}</h2>
		<button @click="car2.price += 10">点我价格+10</button>
	</div>
</template>

<script setup lang="ts" name="App">
	import { reactive,toRaw,markRaw } from "vue";
	import mockjs from 'mockjs'

	/* toRaw */
	let person = reactive({
		name:'tony',
		age:18
	})
	// 用于获取一个响应式对象的原始对象
	let rawPerson = toRaw(person)
	// console.log('响应式对象',person)
	// console.log('原始对象',rawPerson)


	/* markRaw */
	let car = markRaw({brand:'奔驰',price:100})
	let car2 = reactive(car)

	console.log(car)
	console.log(car2)

	let mockJs = markRaw(mockjs)


</script>
```

## 【53】customRef

创建一个自定义的ref，并对其依赖项跟踪和更新触发进行逻辑控制。常用于实现防抖效果

hook/useMsgRef.ts

```ts
import { customRef } from "vue";

export default function(initValue:string,delay:number){
  // 使用Vue提供的customRef定义响应式数据
  let timer:number
  // track(跟踪)、trigger(触发)
  let msg = customRef((track,trigger)=>{
    return {
      // get何时调用？—— msg被读取时
      get(){
        track() //告诉Vue数据msg很重要，你要对msg进行持续关注，一旦msg变化就去更新
        return initValue
      },
      // set何时调用？—— msg被修改时
      set(value){
        clearTimeout(timer)
        timer = setTimeout(() => {
          initValue = value
          trigger() //通知Vue一下数据msg变化了
        }, delay);
      }
    }
  })
  return {msg}
}
```

vue组件

```vue
<template>
	<div class="app">
		<h2>{{ msg }}</h2>
		<input type="text" v-model="msg">
	</div>
</template>

<script setup lang="ts" name="App">
	import {ref} from 'vue'
	import useMsgRef from './useMsgRef'

	// 使用Vue提供的默认ref定义响应式数据，数据一变，页面就更新
	// let msg = ref('你好')

	// 使用useMsgRef来定义一个响应式数据且有延迟效果
	let {msg} = useMsgRef('你好',2000)

</script>
```

## 【54】Teleport

将组件html结构移动到指定位置的技术

```vue
<template>
  <div class="outer">
    <h2>我是App组件</h2>
    <img src="http://www.atguigu.com/images/index_new/logo.png" alt="">
    <br>
    <Modal/>
  </div>
</template>

<script setup lang="ts" name="App">
  import Modal from "./Modal.vue";
</script>

<style>
  .outer{
    background-color: #ddd;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 0 0 10px;
    width: 400px;
    height: 400px;
    filter: saturate(200%);
  }
  img {
    width: 270px;
  }
</style>
```

```vue
<template>
  <button @click="isShow = true">展示弹窗</button>
  <teleport to='body'>
    <div class="modal" v-show="isShow">
      <h2>我是弹窗的标题</h2>
      <p>我是弹窗的内容</p>
      <button @click="isShow = false">关闭弹窗</button>
    </div>
  </teleport>
</template>

<script setup lang="ts" name="Modal">
  import {ref} from 'vue'
  let isShow = ref(false)
</script>

<style scoped>
  .modal {
    width: 200px;
    height: 150px;
    background-color: skyblue;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 0 0 5px;
    text-align: center;
    position: fixed;
    left: 50%;
    top: 20px;
    margin-left: -100px;
  }
</style>
```

## 【55】Suspense

等待异步组件时渲染一些额外内容，让应用有更好的用户体验

```vue
<template>
    <div class="app">
        <h3>我是App组件</h3>
        <Suspense>
          <template v-slot:default>
            <Child/>
          </template>
          <template v-slot:fallback>
            <h3>加载中.......</h3>
          </template>
        </Suspense>
    </div>
</template>
<script setup lang="ts" name="App">
    import { defineAsyncComponent,Suspense } from "vue";
    const Child = defineAsyncComponent(()=>import('./Child.vue'))
</script>
```

## 【56】全局API转移到应用对象

app.component/app.config/app.directive/app.mount/app.unmount/app.use

main.ts

```ts
import {createApp} from 'vue'
import App from './App.vue'
import Hello from './Hello.vue'

// 创建应用
const app = createApp(App)

app.component('Hello',Hello)
app.config.globalProperties.x = 99

declare module 'vue' {
  interface ComponentCustomProperties {
    x:number
  }
}
app.directive('beauty',(element,{value})=>{
  element.innerText += value
  element.style.color = 'green'
  element.style.backgroundColor = 'yellow'
})

// 挂载应用
app.mount('#app')

setTimeout(() => {
  app.unmount()
}, 2000);
```

组件

```vue
<template>
  <div class="child">
    <h2>我是Child组件{{ x }}</h2>
    <h3>当前求和为：{{ sum }}</h3>
    <h4 v-beauty="sum">好开心</h4>
    <Hello/>
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'

  let sum = ref(1)

</script>
```