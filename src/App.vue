<template>
    <div id="app">
        <rwv-header></rwv-header>
        <router-view></router-view>
        <rwv-footer></rwv-footer>
    </div>
</template>

<script>
    import RwvHeader from '@/components/Header'
    import RwvFooter from '@/components/Footer'
    export default {
        name: 'App',
        components: {
            RwvHeader,
            RwvFooter
        }
    }
</script>
