<template>
  <div>
    in analysis

    请选择银行
    <bank-chooser></bank-chooser>
    <button>确认</button>

  </div>
</template>

<script>

  export default {
    data() {
      return {
        buyNum: 0,
        buyType: {},
        versions: [],
        period: {},
      }
    }
  }
</script>

<style>


</style scoped>
