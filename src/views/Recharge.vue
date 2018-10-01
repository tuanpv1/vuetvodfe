<template>
    <div>
        <div>
            <div class="link_map">
                <div class="container">
                    <ol class="breadcrumb">
                        <li>
                            <router-link class="nav-link"
                                         exact
                                         :to="{ name: 'home' }">
                                <i class="ion-compose"></i>Trang chủ
                            </router-link>
                        </li>
                        <li>
                            <router-link class="nav-link"
                                         exact
                                         :to="{ name: 'info' }">
                                <i class="ion-compose"></i>Tài khoản
                            </router-link>
                        </li>
                        <li class="active">Nạp tiền</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue/dist/vue.js'
    import {mapGetters} from 'vuex'

    export default {
        name: 'RwvRecharge',
    };
</script>