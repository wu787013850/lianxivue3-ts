<template>
  <div>
    <div class="searchbox">
      <el-form :inline="true" :model="selectData" class="demo-form-inline">
        <el-form-item label="标题">
          <el-input v-model="selectData.title" placeholder="请输入商品名称" />
        </el-form-item>
        <el-form-item label="详情">
          <el-input v-model="selectData.introduce" placeholder="请输入商品名称" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="tablebox">
      <el-table :data="List" border style="width: 100%">
        <el-table-column prop="title" label="商品名称" width="180" />
        <el-table-column prop="introduce" label="商品详情" />
      </el-table>
      <el-pagination @size-change="changeSize" @current-change="changePage"  background layout="prev, pager, next" :total="goods.length" />
      <el-select v-model="pagesizelist" placeholder="please select your zone">
        <el-option label="10" value="10" />
      </el-select>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'
import { GetGoodsList } from '../request/api'
import { InitData } from '../type/goods'
export default defineComponent({
  setup () {
    const data = reactive(new InitData())
    GetGoodsList().then(res=>{
      console.log(res);
      data.goods = res.goods;
    })

    const List = computed(()=>{
      return data.goods.slice((data.selectData.page -1),(data.selectData.page +data.selectData.pagesize))
    })

    const pagesizelist = reactive([10,20,30]);

    function changeSize(){

    }
    function changePage(page:number){
      data.selectData.page = page;
    }

    return {
      ...toRefs(data),
      List,
      pagesizelist,
      changeSize,
      changePage
    }
  }
})
</script>

<style scoped>

</style>