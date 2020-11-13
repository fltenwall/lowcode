# Low Code 

个人低代码（可能是伪低代码，毕竟不是很懂）的一个玩具

## 元素结构
> 使用JSON作为结构化的处理 是不是最终可以抛弃组件库的依赖 只需要做兼容性的 `代理组件`？

```TypeScript
// 分两种 用type作为区分
// 1. 功能元素（组件）
// 2. 容器元素（组件）
type Element = {
  // 唯一ID便于操作 一切以 id 为主
  id: string;
  // (功能 / 容器) 名称
  element: string;
  // 字面意思
  type: 'element' | 'container';
  // props 这里放元素（组件）的 参数
  props?: {
    // 这里由于其他一些问题暂时这样写了
    [key: string]: any;
    [key: number]: any;
  };
  // 容器组件 存放的子元素
  children?: LowElement[];
}
```

## 数据源结构

> 模型、类型 的值（默认值） 均为序列数据 需要反序列成对应类型数据

```TypeScript
/**
* 数据类型
*/
types = [
  {
    type: 'string',
    value: '""',
    label: "字符串"
  },
  {
    type: 'number',
    value: '0',
    label: "数字"
  },
  {
    type: 'boolean',
    value: 'false',
    label: "布尔"
  },
  {
    type: 'array',
    value: '[]',
    label: "数组"
  },
];
/**
* 模型
*/
models = [
  {
    name: "表单", // 数据源名称
    key: 'model_1a52926d55f3', // 绑定的字段 该字段创建的时候生成
    // 实体
    entitys: [
      {
        key: 'username', // 绑定的字段 输入
        name: "用户名", // 实体名称 输入
        type: 'string', // 数据类型 选择
        value: '""', // 默认值 输入
      },
      {
        key: 'password', // 绑定的字段 输入
        name: "密码", // 实体名称 输入
        type: 'string', // 数据类型 选择
        value: '""', // 默认值 输入
      },
      // ...more
    ]
  }
]

/**
* 数据 通过该 模型生成的结构体
*/
data = {
  model_1a52926d55f3: {
    username: '',
    password: ''
  }
}
```

## 操作方面

### FIRST 产生的一些问题/想法

采用拖拽的方式，非容器组件不能存在其他组件，指定组件只能存在指定组件中？  
点击元素进行一些数据关联、属性增删、事件监听？  

突然发现嵌套关系应该有祖先关系的 比如 `el-form-item` 只要在 `el-form` 的子孙就行  

固定画布元素避免匹配排序问题   

拖动节点的时候带走子孙节点 间接导致出现的问题

最终还是需要模版化才是最优的

历史栈/快照  

多Slot的情况  

实际上从待定组件列表中拖动到画布中的时候有些待定组件的属性应该去除或者更改  

必须有一个可以选择边距的元素才行  

### NEXT 产生的问题/想法

想这个的时候脑子爆栈了, 所以用笔辅助了一下，字很差，看个灵魂就好。
![models](./docs-assets/models.jpg)  

感觉操作逐渐复杂起来  

感觉还得有个替换父级的功能

## 进度

### ✅ FIRST 生成前端代码

目前正在做第一步，生成Vue代码。  
预计 `十月底` 完成。

> 目前进度：   
> 1. 拖拽使用`Vue.Draggable`库基本功能完善  
> 2. 丰富 `代理组件` 便于以后解耦  
> 3. JSON 转换成Vue + element 组件代码

### 🙆 NEXT ING

预计`十一月中旬`动工 （有些个人的事情要处理）

1. 数据源 （用于表单数据绑定）   
2. 事件  
3. 简单关联的接口
4. 权限
5. thinking