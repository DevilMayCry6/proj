<template>
    <div>
        <router-link to="/">返回</router-link>
        <div v-if="type === 'A'">
            A
        </div>
        <div v-else-if="type === 'B'">
            B
        </div>
        <div v-else-if="type ==='C'">
            C
        </div>
        <div v-else>
            Not A/B/C
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            type:"D"
        }
    }
}
</script>