<template>
    <div>
        <ul>
            <li v-for="item,index in items":key="index">
                {{ index }}:{{ item.message }}
            </li>
        </ul>
        <ul>
            <li v-for="value,key in object" :key="key">
                {{ key }}:{{ value }}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            items:[
                {message:'Foo'},
                {message:'Bor'}
            ],
            object:{
                title:'title11',
                a:'aaaa',
                b:'bbbb'
            }
        }
    }
}
</script>