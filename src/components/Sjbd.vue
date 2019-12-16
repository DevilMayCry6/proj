<template>
    <div>
        <button v-on:click="counter += 1">
            数值：{{ counter }}
        </button><br>
        <button v-on:dblclick="greet('abc',$event)">
            Greet
        </button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            counter:0,
            name:"Vue"
        }
    },
    methods:{
        greet:function(str,e){
            alert(str);
            console.log(e)
        }
    }
}
</script>