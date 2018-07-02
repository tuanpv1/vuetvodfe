<template>
    <div class="slide">
        <span v-html="title"></span>
        <p>{{ user.first_name}}</p>
    </div>
</template>

<script>
    export default {
        name: 'slide',
//        data () {
//            return {
//                title: '<h1>PHAM VAN TUAN</h1>',
//                user: {
//                    first_name: 'Tuan',
//                    last_name: 'Van'
//                }
//            }
//        }
    }
</script>
