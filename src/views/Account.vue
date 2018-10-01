<template>
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
                    <li class="active">Thông tin tài khoản</li>
                </ol>
            </div>
        </div>

        <div class="bg-acc mt20">
            <div class="container acc-page">
                <h3>Thông tin tài khoản</h3>
                <div class="container">
                    <div class="col-md-3"></div>
                    <div class="col-md-6">
                        <table class="table table-striped table-acc">
                            <tr>
                                <td class="text-bold">Họ và tên:</td>
                                <td v-if="currentUser.full_name">{{ currentUser.full_name }}</td>
                                <td v-else>Chưa cập nhật</td>
                            </tr>
                            <tr>
                                <td class="text-bold">Số điện thoại:</td>
                                <td v-if="currentUser.phone">{{ currentUser.phone }}</td>
                                <td v-else>Chưa cập nhật</td>
                            </tr>
                            <tr>
                                <td class="text-bold">Email:</td>
                                <td v-if="currentUser.email">{{ currentUser.email }}</td>
                                <td v-else>Chưa cập nhật</td>
                            </tr>
                            <tr>
                                <td class="text-bold">Địa chỉ:</td>
                                <td v-if="currentUser.address">{{ currentUser.address }}</td>
                                <td v-else>Chưa cập nhật</td>
                            </tr>
                            <tr>
                                <td class="text-bold">Địa chỉ MAC:</td>
                                <td v-if="currentUser.mac_address">{{ currentUser.mac_address }}</td>
                                <td v-else>Chưa cập nhật</td>
                            </tr>
                            <tr>
                                <td class="text-bold">Ví của bạn:</td>
                                <td v-if="currentUser.balance">{{ currentUser.balance }} Coin</td>
                                <td v-else>Chưa cập nhật</td>
                            </tr>
                        </table>
                    </div>
                    <div class="col-md-3"></div>

                </div>
                <p style="text-align: center;">
                    <a class="btn btn-primary btn-ok" v-on:click="goToRecharge()">OK</a>
                    <a class="btn btn-danger btn-ok" v-on:click="logOutAccount()">Đăng xuất</a>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import {LOGOUT} from '@/store/actions.type'

    export default {
        name: 'account',
        computed: {
            ...mapGetters([
                'currentUser',
                'isAuthenticated'
            ])
        },
        methods: {
            logOutAccount(){
                this.$store
                    .dispatch(LOGOUT)
                    .then(() => this.$router.push({name: 'home'}))
            },
            goToRecharge(){
                this.$router.push({name: 'recharge'})
            }
        }
    }
</script>