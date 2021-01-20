<template>
  <CenterMessage>
    <template v-slot:header> Woohoo! Suds direct is in your area. </template>
    <template v-slot:message>
      We're a little company with a big mission - to eliminate single use plastics from the household soap and cleaner industry. If you believe in minimizing or eliminating single use plastics, consider becoming a Suds Direct member.
    </template>
    <template v-slot:action>
      <p>To get started, enter your first name:</p>
      <br>
      <b-field position="is-centered" message="We promise to respect and protect your information.">
        <b-input placeholder="First name" v-on:keyup.enter.native="submit" v-model="firstName" type="text">
        </b-input>
        <p class="control">
          <button class="button" @click="submit">Continue ></button>
        </p>
      </b-field>
    </template>
  </CenterMessage>
</template>

<script>
export default {
  data(){
    return {
      firstName: ""
    }
  },
  methods: {
    submit() {
      if(this.firstName.trim() === ""){
        this.firstName = null;
      }
      this.$store.commit("signup/setFirstName", this.firstName);
      this.$router.push({ path: "/onboarding" });
    },
  },
};
</script>

<style>
</style>