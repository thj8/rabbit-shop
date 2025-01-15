<script setup lang="ts">
import { getHomeBannerAPI, getCategroyPanelAPI } from '@/services/home'
import CustomNavbar from './components/CustomNavbar.vue'
import CategroyPanel from './components/CategroyPanel.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem } from '@/types/home'

// 获取轮播数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 获取前台分类数据
const categoryList = ref<CategoryItem[]>()
const getCategroyPanelData = async () => {
  const res = await getCategroyPanelAPI()
  categoryList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
  getCategroyPanelData()
})
</script>

<template>
  <CustomNavbar></CustomNavbar>
  <XtxSwiper :list="bannerList"></XtxSwiper>
  <CategroyPanel :list="categoryList"></CategroyPanel>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
