# version-diff

版本对比工具，升级到2.0、已支持web环境

[1.x](https://github.com/8696/version-diff/tree/1.x)

#### 安装

##### (c)npm install version-diff -D

#### 使用

##### node

```javascript
const versionDiff = require('version-diff');
```

##### Browser

```javascript
<script src="lib/browser.js"></script>
```

##### ES6

```javascript
import versionDiff from 'version-diff/lib/browser.js';
```

#### 接口

- versionDiff: Function
    - param
        + rangeV: Array\<min: String, max: String\> 版本范围，例如 ['0.0.1', '1.0.0'] 表示从0.0.1至1.0.0之间可匹配。包含0.0.1、但不包括1.0.0
        + diffV: String 被对比版本
    - return
        + Boolean

- versionDiff.main: Function
    - param
        + v1: String | 比较的版本
        + v2: String | 被比较的版本
    - return
        + String | '<': v1 小于 v2 、'=': v1 等于 v2 、'>': v1 大于 v2

##### 例子

- 基础比较

```javascript
console.log(versionDiff(['1','2'], '1.2'));             // true
console.log(versionDiff(['1.0','2.0'], '1.2.345'));     // true
console.log(versionDiff(['1.0.0', '2.0.0'], '1.0.2'));  // true
console.log(versionDiff(['1.0.0', '2.0.0'], '0.0.12')); // false
// 包括 1.0.0
console.log(versionDiff(['1.0.0', '2.0.0'], '1.0.0'));  // true
// 不包括 2.0.0
console.log(versionDiff(['1.0.0', '2.0.0'], '2.0.0'));  // false
```

- 向下比较

```javascript
console.log(versionDiff(['*', '2.0.0'], '1.0.2')); // true
console.log(versionDiff(['*', '2.0.0'], '2.0.0')); // false
```

- 向上比较

```javascript
console.log(diff(['1.0.0', '*'], '1.0.2')); // true
console.log(diff(['1.0.0', '*'], '0.2.0')); // false
```

- 其他

```javascript
console.log(versionDiff(['*'], '1.0.2'));                   // true
console.log(versionDiff(['*','*'], '1.0.2'));               // true
console.log(versionDiff(['1.0','2.0'], '1.234'));           // true
console.log(versionDiff(['1.0.0.0','2.0.0.0'], '1'));       // true
console.log(versionDiff(['1.0.0.0','2.0.0.0'], '1.6.7.8')); // true
console.log(versionDiff(['1.0.0.0','2.0.0.0'], '2'));       // false
console.log(versionDiff(['1.0.0.0','1'], '1'));             // true
```

- versionDiff.main

```javascript
console.log(versionDiff.main('1.0', '1.1'));             // <
console.log(versionDiff.main('2.0', '1.1'));             // >
console.log(versionDiff.main('2.0', '2.0'));             // =
console.log(versionDiff.main('2', '2.0.0.0'));           // =
console.log(versionDiff.main('2.0.0.1.0.1', '2.0.0.1')); // >
```

#### 使用实例
[链接](http://www.icode.link/article/523)
