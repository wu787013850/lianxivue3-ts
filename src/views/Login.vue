
<template>
  <div class="login-box">
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="70px" class="demo-ruleForm" :size="formSize"
      status-icon>
      <h2 class="title">系统登陆</h2>
      <el-form-item label="账号" prop="username">
        <el-input v-model="ruleForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" type="password" />
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="submitForm(ruleFormRef)">
          登录
        </el-button>
        <el-button class="login-btn" @click="resetForm(ruleFormRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { LoginData } from '../type/login'
export default defineComponent({
  mounted() {
    console.log(this);
  },
  setup() {
    const data = reactive(new LoginData())
    const rules = {
      username: [
        { required: true, message: '请输入账号', trigger: 'blur' },
        { min: 3, max: 10, message: '账号长度为3-10位', trigger: 'blur' },
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 3, max: 10, message: '长度为3-10位', trigger: 'blur' },
      ],
    }

    return {
      ...toRefs(data),
      rules
    }
  }
})
</script>

<style lang="scss" scoped>
.login-box {
  width: 100%;
  height: 100%;
  background: url('../assets/bj.jpg');
  position: relative;
  padding: 1px;
  .demo-ruleForm {
    width: 500px;
    margin: 200px auto;
    padding: 30px;
    background-color: #fff;
    border-radius: 10px;
    .title {
      text-align: center;
      padding-bottom: 20px;
    }
    .login-btn{
      width: 48%;
    }
  }
}
</style>