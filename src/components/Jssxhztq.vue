<template>
    <div>
        {{ message.split('').reverse().join('')}}
        <div>
            <p>Original message: "{{ message }}"</p>
             <p>Computed reversed message: "{{ reversedMessage }}"</p>
        </div>
        <div>
            <p>Reversed message: "{{ rM() }}"</p>
            <div>{{ fullName }}</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            message:'Hello',

            firstName:"foo",
            lastName:"Bar"
        }
    },
    computed:{
        reversedMessage:function(){
            return this.message.split('').reverse().join('')
        },
        now:function(){
            return Data.now()
        },

        fullName:{
            get:function(){
                return this.firstName + ' ' + this.lastName
            },
            set:function(newValue){
                var names = newvalue.split('')
                this.firstName = names[0]
                this.lastName = names[name.length -1]
            }
        },

        fullName:function(){
            return this.firstName +'' + this.lastName
        }
    },
    methods: {
        rM: function () {
            return this.message.split('').reverse().join('')
        }
    }
}
</script>