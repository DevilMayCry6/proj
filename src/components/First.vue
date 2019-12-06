<template>
    <div>
        <div>
            {{ message }}
        </div>
        <div>
            <span v-bind:title="m1">
                鼠标悬停
            </span>
            <p v-if="seen">
                现在你看到我了
            </p>
            <ol>
                <li v-for="todo in todos">
                    {{todo.text}}
                </li>
            </ol>
        </div>
        <div>
             <p>{{m2}}</p>
            <button v-on:click="reverseMessage">反转消息</button>
            <p>{{m3}}</p>
            <input type="text" v-model="m3">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            message:"Hello Vue",
            m1:"页面加载于" + new Date().toLocaleString(),
            todos:[
                {text:"0"},
                {text:"1"},
                {text:"2"}
            ],
            m2:"Hello vue.js!",
            m3:"hello vue!"
        }
    },
     methods:{
        reverseMessage:function(){
            this.m2 = this.m2.split("").reverse().join("")
        }
    }
}
</script>