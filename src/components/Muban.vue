<template>
    <div>
        <router-link to="/">返回</router-link>
        <div>
            {{ msg }}
            <p>Using mustaches:{{ rawHtml }}</p>
            <p v-html="rawHtml"></p>
            <div v-bind:class="color">
                test...
            </div>
            <p> {{ number }} + 1</p>
            <p> {{ 1 == 1 ? 'Yes' : 'No' }}</p>
            <p> {{ message.split('').reverse().join('') }}</p>
        </div>
        <div>
            <p v-if="seen">能看到</p>
            <a v-bind:href="url">链接</a>
            <div @click="click1">
                <div @click.stop="click2">
                    click me
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:'hi Vue',
            rawHtml:'<span style="color:red">this us should red</span>',
            color:'blue',
            number:10,
            ok:1,
            message:'vue',
            seen:true,
            url:"http://www.4399.com"
        }
    },
    methods:{
        click1:function(){
            console.log('click1..')
        },
        click2:function(){
            console.log('click2..')
        }
    }
}
</script>
<style>
    .red{color:red}
    .blue{color:blue;font-size:50px}
</style>