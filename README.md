# Low Code 

个人低代码（可能是伪低代码，毕竟不是很懂）的一个玩具

## 写这个东西时候的一些想法

### 元素结构
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

### 操作方面

采用拖拽的方式，非容器组件不能存在其他组件，指定组件只能存在指定组件中？  
点击元素进行一些数据关联、属性增删、事件监听？  

突然发现嵌套关系应该有祖先关系的 比如 `el-form-item` 只要在 `el-form` 的子孙就行  

拖动节点的时候带走子孙节点 间接导致出现的问题 

## 进度

### 🙆 FIRST 生成前端代码

目前正在做第一步，生成Vue代码。  
预计 `十月底` 完成。

> 目前进度：   
> 1. 拖拽使用`Vue.Draggable`库基本功能完善  
> 2. 丰富 `代理组件` 便于以后解耦  
> 3. JSON 转换成Vue + element 组件代码

### 😪 NEXT

预计`十一月中旬`动工 （有些个人的事情要处理）

1. 数据源 （用于表单数据绑定）   
2. 事件  
3. 简单关联的接口
4. 权限
5. thinking