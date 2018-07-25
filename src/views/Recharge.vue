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

        <div class="bg-acc mt20">
            <div class="container acc-page">
                <h3>Nạp tiền</h3>
                <div class="container">
                    <div class="col-md-1"></div>
                    <div class="col-md-10 recharge-page">
                        <h6>Quý khách vui lòng lựa chọn hình thức nạp tiền và điền đầy đủ thông tin theo yêu cầu</h6>
                        <ul class="nav nav-tabs recharge-tab" role="tablist" id="myTab">
                            <li class="active">
                                <a href="#tab1" role="tab" data-toggle="tab">Thẻ cào TVoD</a>
                            </li>
                            <li>
                                <a href="#tab2" role="tab" data-toggle="tab">Thẻ cào điện thoại</a>
                            </li>
                            <li>
                                <a href="#tab3" role="tab" data-toggle="tab">Thẻ ATM</a>
                            </li>
                            <li>
                                <a href="#tab4" role="tab" data-toggle="tab">Thẻ thanh toán quốc tế</a>
                            </li>
                        </ul>
                        <div class="tab-content ">
                            <div class="tab-pane fade in active recharge-tab-content" id="tab1">
                                <div class="row">
                                    <div class="col-md-2"></div>
                                    <div class="col-md-8">
                                        <form>
                                            <span id="hiddenError" v-if="errors[0]" class="alert bg_red"><i
                                                    class="fa fa-times"></i>{{errors}}</span>
                                            <div class="form-group">
                                                <label for="tvod_code">Mã thẻ cào</label>
                                                <input type="text" class="form-control" id="tvod_code"
                                                       v-model="tvodCode"
                                                       placeholder="Nhập mã thẻ cào dịch vụ TVoD">
                                            </div>
                                            <div class="row the-tvod">
                                                <div class="col-md-4">
                                                    <img src="../../static/images/recharge/the-tvod-100.png"
                                                         class="img-responsive"/>
                                                </div>
                                                <div class="col-md-4">
                                                    <img src="../../static/images/recharge/the-tvod-200.png"
                                                         class="img-responsive"/>
                                                </div>
                                                <div class="col-md-4">
                                                    <img src="../../static/images/recharge/the-tvod-500.png"
                                                         class="img-responsive"/>
                                                </div>
                                            </div>
                                            <div class="btn-recharge">
                                                <button type="button" class="btn btn-primary"
                                                        v-on:click.prevent="processTvodCode(tvodCode)">Xác nhận
                                                </button>
                                                <button type="button" class="btn btn-secondary"> Hủy </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="col-md-2"></div>
                                </div>
                            </div>
                            <!-- /#tab1 -->
                            <div class="tab-pane fade recharge-tab-content" id="tab2">
                                <div class="row">
                                    <div class="col-md-2"></div>
                                    <div class="col-md-8">
                                        <form>
                                            <span class="alert bg_red"><i class="fa fa-times"></i>Số seri không hợp lệ, vui lòng nhập lại</span>
                                            <div class="form-group">
                                                <label>Chọn loại thẻ cào</label>
                                                <select class="form-control">
                                                    <option>Vinaphone</option>
                                                    <option>MobiFone</option>
                                                    <option>Viettel</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label>Nhập số seri:</label>
                                                <input type="text" class="form-control err_inp"
                                                       placeholder="Nhập số seri thẻ cào">
                                            </div>
                                            <div class="form-group">
                                                <label>Nhập mã thẻ:</label>
                                                <input type="text" class="form-control" placeholder="Nhập mã thẻ cào">
                                            </div>
                                        </form>
                                        <div class="btn-recharge">
                                            <button type="button" class="btn btn-primary">Xác nhận</button>
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-md-2"></div>
                                </div>
                            </div>
                            <!-- /#tab2 -->
                            <div class="tab-pane fade recharge-tab-content" id="tab3">
                                <div class="row">
                                    <div class="col-md-2"></div>
                                    <div class="col-md-8">
                                        <form>
                                            <p>Vui lòng lựa chọn ngân hàng bạn sử dụng.</p>
                                            <span class="alert bg_red"><i class="fa fa-times"></i>Bạn chưa chọn ngân hàng.</span>

                                            <div class="form-group">
                                                <label>Chọn số tiền nạp</label>
                                                <select class="form-control">
                                                    <option>500.000 VNĐ</option>
                                                    <option>300.000 VNĐ</option>
                                                    <option>100.000 VNĐ</option>
                                                </select>
                                            </div>
                                        </form>
                                        <div class="btn-recharge">
                                            <button type="button" class="btn btn-primary">Tiếp tục</button>
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-md-2"></div>
                                </div>
                            </div>
                            <!-- /#tab3 -->
                            <div class="tab-pane fade recharge-tab-content" id="tab4">

                                <div class="row">
                                    <div class="col-md-2"></div>
                                    <div class="col-md-8">
                                        <form>
                                            <p>Vui lòng lựa chọn thẻ thanh toán quốc tế.</p>

                                            <span class="alert bg_red"><i class="fa fa-times"></i>Bạn chưa chọn ngân hàng.</span>

                                            <div class="form-group">
                                                <label>Chọn số tiền nạp</label>
                                                <select class="form-control">
                                                    <option>500.000 VNĐ</option>
                                                    <option>300.000 VNĐ</option>
                                                    <option>100.000 VNĐ</option>
                                                </select>
                                            </div>
                                        </form>
                                        <div class="btn-recharge">
                                            <button type="button" class="btn btn-primary">Tiếp tục</button>
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-md-2"></div>
                                </div>
                            </div>
                            <!-- /#tab4 -->
                        </div>
                        <!-- /.tab-content -->
                    </div>
                    <div class="col-md-1"></div>

                </div>

            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue/dist/vue.js'
    import {mapGetters} from 'vuex'
    import {RECHARGE_TVOD} from '@/store/actions.type'

    export default {
        name: 'recharge',
        data () {
            return {
                tvodCode: '',
            }
        },
        method: {
            processTvodCode (tvodCode){
                this.$store
                    .dispatch(RECHARGE_TVOD, {tvodCode})
                    .then(
                        () => this.$router.push({name: 'home'})
                    )
            }
        },
        computed: {
            ...mapState({
                errors: state => state.auth.errors
            })
        }
    };
</script>