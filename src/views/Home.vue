<template>
  <div class="home">
    <el-container>
      <el-header height="80px">
        <el-row :gutter="20">
          <el-col :span="4" class="logo_div">
            <img class="logo" src="../assets/vue.svg" alt="">
          </el-col>
          <el-col :span="16">
            <h2 class="name">后台管理系统</h2>
          </el-col>
          <el-col :span="4">
            <span class="quit">退出登录</span>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="2"
            text-color="#fff" router >
            <el-menu-item :index="item.path" v-for="item in router" :key="item.path">
              <span>{{ item.meta.title }}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const router = useRouter().getRoutes().filter(r => r.meta.isShow);
    

    return {
      router
    }
  }
})
</script>

<style lang="scss" scoped>
.home {
  .el-header {
    height: 80px;
    background-color: #666;

    .logo_div {
      text-align: center;

      .logo {
        height: 80px;
      }
    }

    .name,
    .quit {
      color: #fff;
      line-height: 80px;
      height: 80px;
      text-align: center;
    }
  }
  .el-aside{
    .el-menu{
      height: calc(100vh - 80px);
    }
  }
}
</style>