<template>
    <div class="h-full">
        <NotificationRoot />

        <SiteHeader />

        <SiteSidebar />

        <ExchangeRateBulkUpdateModal />

        <main class="h-screen h-screen-ios overflow-y-auto md:pl-56 xl:pl-64 min-h-0">
            <div class="pt-16 pb-16">
                <router-view />
            </div>
    </main>
</div>

</template>

<script setup>
    import { useI18n } from 'vue-i18n';
    // import { useGlobalStore } from '@/admin/stores/global';
    import { onMounted, computed } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    // import { useUserStore } from '@/admin/stores/user';
    import { useModalStore } from '@/stores/modal';

    import SiteHeader from '@/admin/layouts/partials/TheSiteHeader.vue';
    import SiteSidebar from '@/admin/layouts/partials/TheSiteSidebar.vue';
    import NotificationRoot from '@/components/notifications/NotificationRoot.vue';

    // const globalStore = useGlobalStore()
    const route = useRoute()
    // const userStore = useUserStore()
    const router = useRouter()
    const modalStore = useModalStore()
    const { t } = useI18n()
    // const exchangeRateStore = useExchangeRateStore()
    // const companyStore = useCompanyStore()

</script>
