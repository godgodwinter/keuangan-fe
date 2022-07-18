import { defineStore } from 'pinia'

export const useStoreDataLanding = defineStore({
  id: 'storeDataLanding',
  state: () => ({
    dataProfile: []
  }),
  getters: {
    getDataProfile: (state) => state.dataProfile
  },
  actions: {
    setDataProfile(dataProfile): void {
      this.dataProfile = dataProfile;
    },
  }
})
