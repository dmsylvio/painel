import axios from 'axios'
import { defineStore } from 'pinia'
import { useNotificationStore } from '@/stores/notification'
import { handleError } from '@/helpers/error-handling'


export const useUserStore = (useWindow = false) => {
    const defineStoreFunc = useWindow ? window.pinia.defineStore : defineStore
    const { global } = window.i18n

    return defineStoreFunc({
        id: 'user',

        state: () => ({
            currentUser: null,
            currentAbilities: [],
            currentUserSettings: {},

            userForm: {
              name: '',
              email: '',
              password: '',
              confirm_password: '',
              language: '',
            },
        }),

        getters: {
            currentAbilitiesCount: (state) => state.currentAbilities.length,
        },

        actions: {

            hasAbilities(abilities) {

            },

            hasAllAbilities(abilities) {
                let isAvailable = true
            }
        }
    })()
}
