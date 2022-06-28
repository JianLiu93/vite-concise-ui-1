# 开始使用
请先[安装](#/doc/install)本组件库。

然后在你的项目代码中写入下面的代码，根据实际需求引入需要的组件：

```
import {Layout, Switch, Button, Input, Tabs, Dialog, Message} from "concise-ui"
```

就可以使用本 UI 库提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs, Switch, Dialog} from "king-ui"
export default {
  components: {Button}
}
</script>
```
下一步，就去下方的组件列表文档，查看具体组件的使用和代码示例吧。

组件列表：[Switch组件](#/doc/switch)