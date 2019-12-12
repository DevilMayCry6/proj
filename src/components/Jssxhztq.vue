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
        <div>
            <p>
                Ask a yes/no question:
                <input v-model="question">
            </p>
            <p>{{ answer }}</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            message:'Hello',

            firstName:"foo",
            lastName:"Bar",

            question:'',
            answer:"I cannot give you an answer until you ask a question!"
        }
    },

    watch:{
        question:function(newQuestion,oldQuestion){
            this.answer = 'Waiting for you to stop typing...'
            this.debouncedGetAnswer()
        }
    },
    created:function(){
        this.debouncedGetAnswer = _.debounde(this.getAnswer,500)
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
        },

        // getAnswer:function(){
        //     if(this.question.indexOf('Of')=== -1){
        //         this.answer ="'Questions usually contain a question mark. ;-"
        //         return
        //     }
        //     this.answer = "Thinking..."
        //     var vm = this
        //     axios.get('https://github.com/DevilMayCry6')
        //     .then(function(response))
        //     .catch(function(error){
        //         vm.answer = 'Error! Could not reach the API.' + error
        //     })
        // }
    }
}
</script>