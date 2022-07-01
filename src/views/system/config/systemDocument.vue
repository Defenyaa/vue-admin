<template>
    <iframe 
    :src="src" 
    frameborder="0"
    :style="{height: tableHeight+'px'}"
    class="ifram"
    ></iframe>
</template>

<script>
    export default {
        data(){
            return{
                src:"https://app.bythedu.com",
                tableHeight:0
            }
        },
        computed:{
            
        },
        mounted(){
            this.$nextTick(()=>{
                this.tableHeight = window.innerHeight;
            })
        }
    }
</script>

<style lang="scss" scoped>
.ifram{
    width: 100%;
}
</style>