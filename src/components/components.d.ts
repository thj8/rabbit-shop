import type XtxGuess from './XtxGuess.vue'
import XtxSwiper from './XtxSwiper.vue'

declare module 'vue' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
    XtxGuess: typeof XtxGuess
  }
}
