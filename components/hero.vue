<template>
  <section class="hero is-medium is-primary is-bold" id="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-half">
              <h1 class="title">Soap Delivered the Right Way</h1>
              <h2 class="subtitle">
                Our hastle-free refill system makes it super easy to buy soap
                and minimize single use plastic in your household.
              </h2>
            </div>
            <div class="column is-half is-vcentered is-flex is-justify-content-center">
              <b-field>
                <b-input
                  placeholder="Email"
                  v-model="email"
                  type="email"
                  icon="email"
                  message="hello"
                />
                <p class="control">
                  <b-button class="button is-primary is-light">Get Started</b-button>
                </p>
              </b-field>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>