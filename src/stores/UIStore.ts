import { defineStore } from 'pinia';

export const useUIStore = defineStore('UIStore', {
  state: () => ({
    tabMenu: 'mails',
  })
});
