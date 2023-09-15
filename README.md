# smile-vue3-communication

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

# 组件通信方式

### **1、使用props实现父子组件通信**

### **2、使用自定义事件实现父子组件通信**

在vue2当中，这种父子组件自定义事件，可以通过.native修饰符变为原生DOM事件

```vue
<template>
  <div id="even-father">
    <Even1 @click="handler1(1, 2, 3, event)"></Even1>
  </div>
</template>
```

在vue3中，这种写法就是原生DOM事件了，相当于给组件的根节点绑定了事件。

**子组件**

```js
<template>
  <div id="even-son1">
    <el-button type="primary" plain @click="sendMessage">发送事件</el-button>
  </div>
</template>

<script setup>
const $emit = defineEmits(["eventMessage"]);
const sendMessage = () => {
  // 第一个参数是事件名称，后面的参数是注入的参数
  $emit("eventMessage", 1, 2, 3, 4, 5);
};
</script>
```

**父组件**

```js
<template>
  <div id="even-father">
    <Even1 @eventMessage="handler"></Even1>
  </div>
</template>

<script setup>
import Even1 from "./Even1.vue";
const handler = (...args) => {
  console.log(args);		//[1, 2, 3, 4, 5]
};
</script>
```

这样就实现了子组件给父组件传递数据。

### **3、全局事件总线**

先引入mitt

```js
import mitt from "mitt"
const $bus = mitt()
export default $bus
```

**Father.vue**

```js
<template>
  <div id="bus-father">
    This is Father
    <div class="busInfo">
      <Son1></Son1>
      <Son2></Son2>
    </div>
  </div>
</template>

<script setup>
import Son1 from "./Son1.vue";
import Son2 from "./Son2.vue";
</script>
```

**Son1.vue**

```js
<template>
  <div id="bus-son1">
    <span>{{ car.car }}</span>
  </div>
</template>

<script setup>
import $bus from "../../bus";
import { onMounted, ref } from "vue";

const car = ref({});
onMounted(() => {
  $bus.on("car", (value) => {
    car.value = value;
  });
});
</script>
```

**Son2.vue**

```js
<template>
  <div id="bus-son2">
    <el-button type="primary" @click="handler">给兄弟送一个法拉利</el-button>
  </div>
</template>

<script setup>
import  $bus  from "../../bus/index";
import { ref } from "vue";

const car = ref({
  car: "法拉利",
});
const handler = () => {
  $bus.emit("car", car.value);
};
</script>

```

### 4、v-model父子组件通信（Element原理）

**Father.vue**

```js
<div class="info">
      <Son1 :moneys="money" @toFather="handler"></Son1>
      <Son2 v-model:username="username" v-model:password="password"></Son2>
</div>


<script setup>
        import Son1 from "./Son1.vue";
        import Son2 from "./Son2.vue";

        import { ref } from "vue";
        const money = ref(10000);
        const username = ref("Smile_C");
        const password = ref("dadada");
        const handler = (value) => {
          money.value = value;
        };
</script>
```

**Son1.vue**

```js
<div id="model-son">
    儿子的钱:{{ moneys }}
    <el-button type="success" @click="handler">给父亲打钱</el-button>
</div>

<script setup>
    const props = defineProps(["moneys"]);
    const emits = defineEmits(["toFather"]);

    const handler = () => {
      emits("toFather", props.moneys + 1000);
    };
</script>
```

**Son2.vue**

```js
<template>
  <div id="model-son2">
    <div>
      {{ usernam}}<el-button type="primary" @click="changeUsername">点击修改</el-button>
    </div>
    <div>
      {{ password}}<el-button type="primary" @click="changePassword">点击修改</el-button>
    </div>
  </div>
</template>

<script setup>
        const props = defineProps(["username", "password"]);
        const emits = defineEmits(["update:username", "update:password"]);

        const changeUsername = () => {
          emits("update:username", "JackMa");
        };
        const changePassword = () => {
          emits("update:password", "HAHAHAHA");
        };
</script>
```

总结一下：

```js
 <Son1 :moneys="money" @toFather="handler"></Son1>
 <Son2 v-model:username="username" v-model:password="password"></Son2>
```

下面的写法就是上面写法的语法糖形式。在Element-plus中大多数是这样用的。这里注意一下：给emits命名的时候，必须得是"update:xxxx"。

### 5、useAttrs(Vue3)

vue3新增的

这个方法可以获取到组件标签身上的属性和属性值，还有事件也可以接收。使用useAttrs接收了标签的属性，props就接收不到了，如果props接受了，useAttrs接收不到了。（props优先级高）

Father.vue

```js
<Son1 type="primary"></Son1>
```

Son.vue

```js
<template>
  <div id="useAttr-son1">
    <el-button :="$attrs">我是Son</el-button>
		//这里就相当于 v-bind="{type:'primary'}"
  </div>
</template>

<script setup>
import { useAttrs } from "vue";
let $attrs = useAttrs();
console.log($attrs);
</script>
```

