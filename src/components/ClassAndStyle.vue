<template>
    <div>
        <div>
            <router-link to="/">返回</router-link>
        </div>
        <div
            class="test"
            v-bind:class="[ isActive ? 'active' : '', isGreen?'green':'']"
            style="width: 200px;height:200px;text-align:center;line-height:200px">
            hi Vue
        </div>
        <div
        :style="{color:color,fontsize:size,background:isRed ? '#FF0000':''}">
            hi vue
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isActive:true,
            isGreen:true,
            color:"#ffffff",
            size:'50px',
            isRed:true
        }
    }
}
</script>
<style>
    .test{font-size:30px}
    .green{color:#00FF00}
    .active{background: #ff0000}
</style>