<template>
  <div class="index">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1"><h3>个人博客</h3></el-menu-item>
            <el-submenu index="2">
                <template slot="title">技术</template>
                <el-menu-item index="2-1">前端</el-menu-item>
                <el-menu-item index="2-2">后台</el-menu-item>
            </el-submenu>
            <el-submenu index="2-4">
                <template slot="title">八维</template>
                <el-menu-item index="2-4-1">网站</el-menu-item>
            </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
    .index{
        width: 1200px;
        margin: 0 auto;
    }
</style>
