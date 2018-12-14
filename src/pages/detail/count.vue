<template>
  <div>
    in count
    {{ username }}
  </div>
</template>

<script>

  export default {
    date() {
      return {
        username: ''
      }
    },
    beforeMount:function(){
      this.username = sessionStorage.username;
    }
  }
</script>

<style>


</style scoped>
