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
            <ol>
                <todo-item></todo-item>
            </ol>
        </div>
        <div>
            {{a}}
        </div>
        <router-link to="muban">模板语法</router-link><br>
        <router-link to="jssxhztq">计算属性和侦听器</router-link><br>
        <router-link to="classandstyle">Class 与 Style</router-link>
        <br>
        <router-link to="tjxr">条件渲染</router-link>
    </div>
</template>
<script>
export default {
    data(){ //data是一个函数
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
    components:{
        template: '<li>这是个待办项</li>'
    },
     methods:{
        reverseMessage:function(){
            this.m2 = this.m2.split("").reverse().join("")
            this.a="test"
        },
    },

    watch:{
        message:function(val,oldVal){
            console.log('new:%s,old:%s',val,oldVal)
        }
    },

    beforeCreate:function(){
        console.log("beforeCreate")
    },
    created:function(){
        console.log("created")
    },
    beforeMount:function(){
        console.log("beforeMount")
    },
    mounted:function(){
        console.log("mounted")
    },
    beforeUpdate:function(){
        console.log('beforeUpdate')
    },
    updated:function(){
        console.log('updated')
    },
    beforeDestroy:function(){
        console.log('beforeDestroy')
    },
    destroyed:function(){
        console.log('destroyed')
    }
}
</script>