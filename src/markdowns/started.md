# 开始使用
请先[安装](#/doc/install)本组件库。

然后在你的项目代码中写入下面的代码，根据实际需求引入需要的组件：

```
import {Layout, Switch, Button, UInput, Tabs, Dialog, Message} from "concise-ui-vue3"
```

就可以使用本 UI 库提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
    <Switch></Switch>
  </div>
</template>
<script>
import { Button, Switch } from "concise-ui-vue3"
export default {
  components: { Button, Switch }
}
</script>
```
下一步，请阅读下方的组件列表文档，查看具体组件的使用和代码示例吧。

组件列表：[Switch组件](#/doc/switch)