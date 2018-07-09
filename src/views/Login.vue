<template>
    <div>
        <div class="link_map">
            <div class="container">
                <ol class="breadcrumb">
                    <li>
                        <router-link exact :to="{ name: 'home' }">Trang chủ </router-link>
                    </li>
                    <li class="active">Tài khoản</li>
                </ol>
            </div>
        </div>

        <div class="bg-acc mt20">
            <div class="container acc-page">
                <h3>Hệ thống nạp tiền TVoD</h3>
                <div class="container">
                    <div class="col-md-1"></div>
                    <div class="col-md-10">
                        <div class="container-fluid">
                            <div class="col-md-5">
                                <a href="" data-toggle="modal" data-target="#exampleModal"><img
                                        src="../../static/images/btn-thongtintk.png" class="img-responsive mb20"/></a>
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-5">
                                <a href="" data-toggle="modal" data-target="#exampleModal"><img
                                        src="../../static/images/btn-naptien.png" class="img-responsive mb20"/></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1"></div>
                </div>
            </div>
        </div>

        <div id="exampleModal" class="modal fade modalDA">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Nhập địa chỉ MAC</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>
                            Quý khách vui lòng nhập địa chỉ MAC của Smartbox đang sử dụng! <br/>
                            (Xem thông tin địa chỉ MAC trên vỏ thiết bị hoặc trên ứng dụng - Phần cài đặt)
                        </p>
                        <form>
                            <span id="hiddenError" v-if="errors[0]" class="alert bg_red"><i class="fa fa-times"></i>{{errors}}</span>
                            <div class="form-group">
                                <label for="MAC-name" class="form-control-label"></label>
                                <input v-on:change="removeErrors()" type="text" class="form-control" id="MAC-name" v-model="mac"
                                       placeholder="Nhập địa chỉ MAC">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" v-on:click.prevent="submitToServer(mac)">Xác nhận
                        </button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Quay lại</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    import {LOGIN} from '@/store/actions.type'

    export default {
        name: 'RwvLogin',
        data () {
            return {
//                loginSuccess:'<span class="alert bg_green"><i class="fa fa-check-circle" aria-hidden="true"></i>Quý khách đã đăng nhập thành công.</span>',
//                loginfailed:'<span class="alert bg_red"><i class="fa fa-times"></i>Địa chỉ MAC không đúng, quý khách vui lòng nhập lại !</span>',
                mac: '',
            }
        },
        methods: {
            submitToServer (mac) {
                this.$store
                    .dispatch(LOGIN, {mac})
                    .then(() => this.$router.push({name: 'home'}))
            },
            removeErrors: function(event){

            }
        },
        computed: {
            ...mapState({
                errors: state => state.auth.errors
            })
        }
    }
    
    function re() {
        
    }
</script>