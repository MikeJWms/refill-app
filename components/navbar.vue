<template>
  <div>
    <b-navbar type="is-dark">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img src="~/assets/suds-direct.svg" alt="logo">
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                Our Mission
            </b-navbar-item>
            <b-navbar-item href="#">
                Product
            </b-navbar-item>
            <b-navbar-item href="#">
                How it works
            </b-navbar-item>
            <b-navbar-item href="#">
                Pricing
            </b-navbar-item>
            <b-navbar-item href="#">
                FAQ
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <!-- <a class="button is-light">
                        Log in
                    </a> -->
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>