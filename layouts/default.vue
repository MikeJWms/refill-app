<template>
  <div>
    <navbar />

    <nuxt style="min-height: 100vh" />

    <foot />
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  mounted: function(){
    this.$buefy.notification.open({
      message: "Welcome to Suds Direct!",
      type: "is-success",
      position: "is-bottom-left",
      duration: 5000
    });
  }
}
</script>

<style lang="scss">
  @import '~assets/styles/main.scss';
</style>
