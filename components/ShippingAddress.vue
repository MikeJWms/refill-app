<template>
  <div>
    <b-field label="Street">
      <b-input :value="street1" @input="updateValue({field: 'street1', value: $event})"></b-input>
    </b-field>
    <b-field label="Apt / Unit /Suite / etc. (optional)">
      <b-input :value="street2" @input="updateValue({field: 'street2', value: $event})"></b-input>
    </b-field>
    <b-field label="City">
      <b-input :value="city" @input="updateValue({field: 'city', value: $event})"></b-input>
    </b-field>
    <b-field label="State">
      <b-input :value="state" @input="updateValue({field: 'state', value: $event})"></b-input>
    </b-field>
    <b-field label="Zip Code">
      <b-input :value="zip" @input="updateValue({field: 'zip', value: $event})"></b-input>
    </b-field>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      street1: state => state.signup.deliveryAddress.street1,
      street2: state => state.signup.deliveryAddress.street2,
      city: state => state.signup.deliveryAddress.city,
      state: state => state.signup.deliveryAddress.state,
      zip: state => state.signup.deliveryAddress.zip
    })
  },
  methods: {
    updateValue(payload){
      this.$store.commit("signup/setDeliveryAddress", payload);
    }
  }
};
</script>