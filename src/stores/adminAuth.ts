import { defineStore } from "pinia";
interface IMeState {
  id: null | number;
  name: null | string;
}
interface IAuthState {
  token: null | string;
  isLogin: null | boolean | string;
  me: IMeState;
}

export const useStoreAdminAuth = defineStore({
  id: "storeAdminAuth",
  state: (): IAuthState => ({
    token: localStorage.getItem("token") ? localStorage.getItem("token") : "",
    isLogin: localStorage.getItem("isLogin")
      ? localStorage.getItem("isLogin")
      : false,
    me: {
      id: 0,
      name: "",
    },
  }),
  getters: {
    getToken: (state) => state.token,
    getIsLogin: (state) => state.isLogin,
    getMe: (state) => state.me,
  },
  actions: {
    setToken(token: string): void {
      this.token = token;
    },
    setIsLogin(isLogin: boolean): void {
      this.isLogin = isLogin;
    },
    setMe(me: IMeState): void {
      this.me = me;
    },
  },
});
