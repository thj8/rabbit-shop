<script setup lang="ts">
import { getHomeBannerAPI, getCategroyPanelAPI, getHotPanelAPI } from '@/services/home'

import CustomNavbar from './components/CustomNavbar.vue'
import CategroyPanel from './components/CategroyPanel.vue'
import HotPanel from './components/HotPanel.vue'

import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'

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

// 获取热门推荐
const hotList = ref<HotItem[]>()
const getHotPanelData = async () => {
  const res = await getHotPanelAPI()
  hotList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
  getCategroyPanelData()
  getHotPanelData()
})
</script>

<template>
  <!--导航栏-->
  <CustomNavbar></CustomNavbar>

  <!--轮播-->
  <XtxSwiper :list="bannerList"></XtxSwiper>

  <!--分类面板-->
  <CategroyPanel :list="categoryList"></CategroyPanel>

  <!--热门推荐-->
  <HotPanel :list="hotList"></HotPanel>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
