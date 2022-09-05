import axios from 'axios'
import { defineStore } from 'pinia'
import { useNotificationStore } from '@/stores/notification'
import { handleError } from '@/helpers/error-handling'

export const useUsersStore = (useWindow = false) => {
  const defineStoreFunc = useWindow ? window.pinia.defineStore : defineStore
  const { global } = window.i18n

  return defineStoreFunc({
    id: 'users',
    state: () => ({
        roles: [],
        users: [],
        totalUsers: 0,
        currentUser: null,
        selectAllField: false,
        selectedUsers: [],
        customerList: [],
        userList: [],

        userData: {
          name: '',
          email: '',
          password: null,
          phone: null,
          companies: [],
        },
    }),

    actions: {

    }
  })()

}
