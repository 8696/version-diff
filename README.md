# version-diff

版本对比工具

#### 安装

##### (c)npm install version-diff -D

#### 使用

```javascript
const versionDiff = require('version-diff');
```
#### 接口

- versionDiff：Function
    - param
        + rangeV: Array\<min: String, Max: String\> 版本范围，例如 ['0.0.1', '1.0.0'] 表示从0.0.1至1.0.0之间可匹配。包含0.0.1、但不包括1.0.0
        + diffV: String 被对比版本
    - return
        + Boolean

###### 例子

- 基础比较

```javascript
console.log(diff(['1.0.0', '2.0.0'], '1.0.2')); // true
console.log(diff(['1.0.0', '2.0.0'], '0.0.12')); // false
// 包括 1.0.0
console.log(diff(['1.0.0', '2.0.0'], '1.0.0'));  // true
// 不包括 2.0.0
console.log(diff(['1.0.0', '2.0.0'], '2.0.0'));  // false
```

- 向下比较

```javascript
console.log(diff(['*', '2.0.0'], '1.0.2')); // true
console.log(diff(['*', '2.0.0'], '2.0.0')); // false
```

- 向上比较

```javascript
console.log(diff(['1.0.0', '*'], '1.0.2')); // true
console.log(diff(['1.0.0', '*'], '0.2.0')); // false
```

- 其他

```javascript
console.log(diff(['*'], '1.0.2')); // true
```
