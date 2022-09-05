<template>
    <header
    class="
      fixed
      top-0
      left-0
      z-20
      flex
      items-center
      justify-between
      w-full
      px-4
      py-3
      md:h-16 md:px-8
      bg-gradient-to-r
      from-primary-500
      to-primary-400
    "
  >
  <router-link
      to="/admin/dashboard"
      class="
        float-none
        text-lg
        not-italic
        font-black
        tracking-wider
        text-white
        brand-main
        md:float-left
        font-base
        hidden
        md:block
      "
    >
        <MainLogo class="h-6" light-color="white" dark-color="white" />
    </router-link>

    <!-- toggle button-->
    <div
        :class="{ 'is-active': globalStore.isSidebarOpen }"
        class="
            flex
            float-left
            p-1
            overflow-visible
            text-sm
            ease-linear
            bg-white
            border-0
            rounded
            cursor-pointer
            md:hidden md:ml-0
            hover:bg-gray-100
        "
        @click.prevent="onToggle"
    >
        <BaseIcon name="MenuIcon" class="!w-6 !h-6 text-gray-500" />
    </div>

    <ul class="flex float-right h-8 m-0 list-none md:h-9">
        <li
            v-if="hasCreateAbilities"
            class="relative hidden float-left m-0 md:block"
        >
            <BaseDropdown width-class="w-48">
                <template #activator>
                    <div
                        class="
                            flex
                            items-center
                            justify-center
                            w-8
                            h-8
                            ml-2
                            text-sm text-black
                            bg-white
                            rounded
                            md:h-9 md:w-9
                        "
                    >
                        <BaseIcon name="PlusIcon" class="w-5 h-5 text-gray-600" />
                    </div>
                </template>
            </BaseDropdown>
        </li>

        <li class="ml-2">
            <GlobalSearchBar />
      </li>

      <!-- User Dropdown-->
      <li class="relative block float-left ml-2">
        <BaseDropdown width-class="w-48">
            <template #activator>
                <img
                :src="previewAvatar"
                class="block w-8 h-8 rounded md:h-9 md:w-9"
                />
            </template>

            <router-link to="/admin/settings/account-settings">
                <BaseDropdownItem>
                    <BaseIcon
                        name="CogIcon"
                        class="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                    />
                    {{ $t('navigation.settings') }}
                </BaseDropdownItem>
            </router-link>

            <BaseDropdownItem @click="logout">
                <BaseIcon
                    name="LogoutIcon"
                    class="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                />
                {{ $t('navigation.logout') }}
            </BaseDropdownItem>
        </BaseDropdown>
      </li>
    </ul>
  </header>
</template>

<script setup>
    import { useAuthStore } from '@/admin/stores/auth';
    import { useRouter } from 'vue-router';
    import { computed } from 'vue';
    import { useGlobalStore } from '@/admin/stores/global';

    import GlobalSearchBar from '@/components/GlobalSearchBar.vue'
    import MainLogo from '@/components/icons/MainLogo.vue';

    import abilities from '@/admin/stub/abilities';

    const authStore = useAuthStore();
    const globalStore = useGlobalStore();
    const router = useRouter();

    const previewAvatar = computed(() => {
        return getDefaultAvatar()
    })

    function getDefaultAvatar() {
        const imgUrl = new URL('/img/default-avatar.jpg', import.meta.url)
        return imgUrl
    }


    function hasCreateAbilities() {
        return userStore.hasAbilities([

        ]);
    }
    async function logout() {
        await authStore.logout()
        router.push('/login')
    }

    function onToggle() {
        globalStore.setSidebarVisibility(true)
    }
</script>
