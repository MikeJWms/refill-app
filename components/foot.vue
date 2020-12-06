<template>
  <footer class="footer" id="foot">
    <div class="content has-text-centered">
      <p>
        <strong>Suds.direct</strong> has been made with love in Portland Oregon, USA. All rights reserved | ©{{currentYear}}
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  computed:{
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style>

</style>