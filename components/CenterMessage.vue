<template>
  <div class="section is-min-full-height has-text-centered">
    <div class="container">
      <h1>
        <slot name="header"> </slot>
      </h1>
      <br>
      <h3>
        <slot name="sub-header"> </slot>
      </h3>
      <p>
        <slot name="message"> </slot>
      </p>
      <br>
      <slot name="action"> </slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>