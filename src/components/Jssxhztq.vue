<template>
    <div>
        {{ message.split('').reverse().join('')}}
        <div>
            <p>Original message: "{{ message }}"</p>
             <p>Computed reversed message: "{{ reversedMessage }}"</p>
        </div>
        <div>
            <p>Reversed message: "{{ rM() }}"</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            message:'Hello'
        }
    },
    computed:{
        reversedMessage:function(){
            return this.message.split('').reverse().join('')
        }
      
    },
    methods: {
    rM: function () {
        return this.message.split('').reverse().join('')
    }
    }
}
</script>