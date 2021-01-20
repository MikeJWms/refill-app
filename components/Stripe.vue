<template>
  <div id="payment">
    <div id="card-element"></div>
    <b-button @click="submit">submit</b-button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      cardElement: null
    }
  },
  mounted() {
    const elements = this.$stripe.elements();
    this.cardElement = elements.create("card", {});
    // Add an instance of the card Element into the `card-element` <div>
    this.cardElement.mount("#card-element");
  },
  methods: {
    async submit() {
      const { setupIntent, error } = await this.$stripe.confirmCardSetup(
        setupIntent.client_secret,
        {
          payment_method: {
            card: this.cardElement,
            billing_details: {
              name: "customer's name",
              email: "billing email"
            },
          },
        }
      );

      if (error) {
        // Display error.message in your UI.
      } else {
        if (setupIntent.status === "succeeded") {
          // The setup has succeeded. Display a success message. Send
          // setupIntent.payment_method to your server to save the card to a Customer
          console.log("Success new payment method: ",setupIntent.payment_method);
        }
      }
    },
  },
};
</script>

<style>
</style>