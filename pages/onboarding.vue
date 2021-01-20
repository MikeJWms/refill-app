<template>
  <div
    id="onboarding"
    class="onboarding section container is-min-full-height"
    v-if="mounted === true"
  >
    <div>
      <b-steps v-model="stepIndex">
        <b-step-item label="Email" class="onboarding__step_item section">
          <p>
            Hi<span v-if="this.$store.state.signup.firstName">{{
              " " + this.$store.state.signup.firstName
            }}</span
            >, it's nice to meet you! Lets get started by getting your email
            address.
          </p>
          <br />
          <b-field>
            <b-input placeholder="Email" v-model="email" type="email">
            </b-input>
          </b-field>
        </b-step-item>

        <b-step-item label="Product Selection">
          <Product v-on:selectedProducts="products = $event" />
        </b-step-item>

        <b-step-item label="Shipping Address">
          <shipping-address class="mt-6 mb-6" />
        </b-step-item>

        <b-step-item label="Payment Info">
          <h1>Payment Info</h1>
          <Stripe />
        </b-step-item>

        <b-step-item label="order Confirmation">
          <h1>Order confirmation</h1>
        </b-step-item>

        <template slot="navigation" slot-scope="{ previous, next }">
          <b-button
            outlined
            type="is-danger"
            :disabled="previous.disabled"
            @click.prevent="previous.action"
          >
            Previous
          </b-button>

          <b-button
            outlined
            type="is-success"
            :disabled="next.disabled"
            @click.prevent="stepsHelpers[stepIndex].validator"
          >
            Next
          </b-button>
          <p>{{ helpMessage }}</p>
        </template>
      </b-steps>
    </div>
  </div>
</template>

<script>
import ShippingAddress from "~/components/ShippingAddress.vue";
export default {
  components: { ShippingAddress },
  name: "",

  data() {
    return {
      mounted: false,
      numberOfSteps: 0,
      stepIndex: 0,
      helpMessage: "",
      email: null,
      products: null,

      stepsHelpers: [
        {
          name: "email",
          validator: () => {
            if (this.validateEmail(this.email)) {
              this.helpMessage = "";
              this.incrementStepIndex();
            } else {
              this.helpMessage = "Please enter a valid email to continue";
            }
          },
        },
        {
          name: "products",
          validator: () => {
            if (this.products === null) {
              this.helpMessage = "Please select at least one product.";
              this.products = [];
            } else if (Array.isArray(this.products)) {
              this.helpMessage = "";
              this.incrementStepIndex();
            }
          },
        },
        {
          name: "address",
          validator: () => {
            this.incrementStepIndex();
          },
        },
        {
          name: "payment-info",
          validator: () => {
            this.incrementStepIndex();
          },
        },
        {
          name: "order-confirmation",
          validator: () => {
            //this.incrementStepIndex();
          },
        },
      ],
    };
  },
  mounted() {
    this.mounted = true;
    // this.stepIndex++;
    // this.stepIndex--;
    // console.log("number of steps: ", document.getElementsByClassName("step-items")[0].childElementCount);
    // this.numberOfSteps =  document.getElementsByClassName("step-items")[0].childElementCount;
  },
  watch: {
    stepIndex: function (newValue, oldValue) {
      if (newValue < 0) {
        this.stepIndex = 0;
      }
    },
  },
  methods: {
    incrementStepIndex() {
      this.stepIndex++;
    },
    decrementStepIndex() {
      this.stepIndex--;
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      console.log(re.test(email));
      return re.test(email);
    },
  },
};
</script>

<style lang="scss">
// .onboarding{
//   padding-top: 5rem;
// }
</style>