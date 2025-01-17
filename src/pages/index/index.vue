<template>
  <!--导航栏-->
  <CustomNavbar></CustomNavbar>

  <scroll-view
    refresher-enabled
    :refresher-triggered="isTriggered"
    @refresherrefresh="onRefresherrefresh"
    @scrolltolower="onScrolltolower"
    class="scroll-view"
    scroll-y
  >
    <!--轮播-->
    <XtxSwiper :list="bannerList"></XtxSwiper>

    <!--分类面板-->
    <CategroyPanel :list="categoryList"></CategroyPanel>

    <!--热门推荐-->
    <HotPanel :list="hotList"></HotPanel>

    <!--猜你喜欢-->
    <XtxGuess ref="guessRef"></XtxGuess>
  </scroll-view>
</template>

<script setup lang="ts">
import { getHomeBannerAPI, getCategroyPanelAPI, getHotPanelAPI } from '@/services/home'

import CustomNavbar from './components/CustomNavbar.vue'
import CategroyPanel from './components/CategroyPanel.vue'
import HotPanel from './components/HotPanel.vue'

import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import type { XtxGuessInstance } from '@/components/components'

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

// 获取猜你喜欢组件实例
const guessRef = ref<XtxGuessInstance>()
// 滚动触底了
const onScrolltolower = () => {
  guessRef.value?.getMore()
}

const isTriggered = ref(false)
// 自定义下拉刷新被触发
const onRefresherrefresh = async () => {
  // 开始动画
  isTriggered.value = true

  // 加载数据
  guessRef.value?.resetData()
  await Promise.all([
    getHomeBannerData(),
    getCategroyPanelData(),
    getHotPanelData(),
    guessRef.value?.getMore(),
  ])
  // 关闭动画
  isTriggered.value = false
}
</script>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
