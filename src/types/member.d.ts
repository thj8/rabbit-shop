/** 用户基础信息 */
type BaseProfile = {
  /** 用户ID */
  id: number
  /** 头像 */
  avatar: string
  /** 昵称 */
  nickname: string | null
  /** 账号名称 */
  account: string
}

/** 小程序登录 登录用户信息 */
export type LoginResult = BaseProfile & {
  /** 手机号 */
  mobile: string
  /** 登录凭证 */
  token: string
}

export type Gender = '男' | '女'

/** 用户个人信息 */
export type ProfileDetail = BaseProfile & {
  /** 性别 */
  gender: Gender
  /** 生日 */
  birthday: string | null
  /** 省市区 */
  fullLocation: string
  /** 职业 */
  profession: string | null
}
