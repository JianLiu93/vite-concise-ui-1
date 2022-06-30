<template>
  <div :style="{height:h+'px'}">
    <div class="top-and-banner">
      <Topnav />
      <div class="banner">
        <h1>Concise UI</h1>
        <h2>一款简洁美观的基于 vue 3 的 UI 框架</h2>
        <p class="actions">
          <a href="https://github.com/JianLiu93/vite-concise-ui-1" class="left">GitHub</a>
          <router-link to="/doc">开始使用</router-link>
        </p>
      </div>
    </div>
    <div class="features">
    <ul>
      <li>
			  <Icon name="icon-vue" size="60px" />
        <h3>基于 Vue 3</h3>
        <p>使用了 Vue 3 组合式 API</p>
      </li>
      <li>
			  <Icon name="icon-ts" size="60px" />
        <h3>基于 TypeScript </h3>
        <p>源代码采用 TypeScript 书写</p>
      </li>
      <li>
			  <Icon name="icon-concise" size="60px" />
        <h3>代码简洁易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>      
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'

export default {
	components: {Topnav},
  setup() {
    const h = document.documentElement.clientHeight;
    return { h }
  }
}
</script>

<style lang="scss" scoped>
$green: #41b883;
$border-radius: 4px;
$color: #1571d6;

.top-and-banner {
  background: linear-gradient(45deg, rgba(224,204,168, 1) 0%, rgba(30, 161, 189, 0.7) 70%, rgba(193, 229, 229, 1) 100%);
  clip-path: ellipse(80% 52% at 50% 40%);
}
.features {
  margin: 64px auto;
  width: 400px;

  @media (min-width: 800px) {
    width: 800px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
  }

  >ul {
    display: flex;
    flex-wrap: wrap;

    >li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      >h3 {
        grid-area: title;
        font-size: 28px;
      }

      >p {
        grid-area: text
      }
    }
  }
}

.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: $green;
      color: #fff;
      display: inline-block;
      $h: 28px;
      border-radius: 4px;
      padding: 8px 24px;

      &:hover {
        border: none;
      	box-shadow: 0 0 2px 1px rgba(21, 113, 214, 0.3);
        text-decoration: none;
      }
      &.left {
        color: #333;
        background: #eee;
      }
    }
  }
}
</style>