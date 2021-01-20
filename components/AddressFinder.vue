<template>
  <div class="is-width-100 px-4">
    <b-field label="">
      <b-autocomplete
        v-model="inputValue"
        placeholder="Enter your address"
        field="address"
        :data="possibleAddresses"
        :loading="isFetching"
        @typing="getAsyncData"
        @select="selectAddress"
        required
        class="is-width-100"
      >
        <template slot-scope="props">
          <div class="media">
            <div class="media-content">
              <div>
                <!-- {{ props.option.address }} -->
                {{ props.option.houseNumber }} {{ props.option.road }}
              </div>
              <div>
                {{ props.option.city }}, {{ props.option.state }}
                {{ props.option.zipcode }}
              </div>
            </div>
          </div>
        </template>
      </b-autocomplete>
      <p>
        <b-button class="button is-primary is-light" @click="submit"
          >{{ buttonText }}</b-button
        >
      </p>
    </b-field>
    <p>{{ inputMessage }}</p>
  </div>
</template>

<script>
import debounce from "lodash/debounce";

export default {
  data() {
    return {
      inputValue: "",
      possibleAddresses: [],
      selectedAddress: null,
      isFetching: false,
      inputMessage: "",
      buttonText: "Check Availability",
    };
  },
  computed: {
    filteredPossibleAddresses() {
      return this.possibleAddresses.map((option) => {
        console.log(option.address);
        return option.address.toString();
      });
    },
  },
  methods: {
    setInputMessage(){
      if(this.possibleAddresses.length < 1){
          this.inputMessage = "Please enter more of your address";
        }
      if(this.selectedAddress != null){
        this.inputMessage = "";
      }
    },
    getAsyncData: debounce(async function (payload) {
      if (!payload.length) {
        this.possibleAddresses = [];
        return;
      }
      this.isFetching = true;
      const reqConfig = {
        method: "get",
        url: "/api/v1/searchAddress",
        headers: {
          "Content-Type": "application/json",
        },
        params: { queryAddress: payload },
      };
      try {
        const response = await this.$axios(reqConfig);
        this.possibleAddresses = response.data;
        this.setInputMessage();
      } catch (error) {
        console.log(error);
      }
      this.isFetching = false;
    }, 500),
    selectAddress(option){
      this.selectedAddress = option;
      this.setInputMessage();
    },
    async checkServiceArea(payload){
      const reqConfig = {
        method: "get",
        url: "/api/v1/in-service-area",
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          lat: payload.coordinates.lat,
          lng: payload.coordinates.lng
          },
      };
      try {
        const response = await this.$axios(reqConfig);
        return response.data.inServiceArea
      } catch (error) {
        console.log(error);
      }
    },
    async submit() {
      console.group();
      console.log("Submit started");
      //if selected address null -> tell user to select an address from auto complete
      if (this.inputValue === null || this.inputValue === "") {
        this.inputMessage = "Please start entering your address and select the correct one from the dropdown";
        console.groupEnd();
        return;
      }
      if (this.inputValue !== null || this.inputValue !== "") {
        if(this.selectedAddress === null){
          console.log("caught")
          await this.getAsyncData(this.inputValue)
          this.setInputMessage();
          console.groupEnd();
          return;
        }
      }

      //if address is selected, add to store & make api call to see if it's in our service area
      this.$store.commit("signup/setDeliveryAddress", {field: "street1", value: `${this.selectedAddress.houseNumber} ${this.selectedAddress.road}`});
      this.$store.commit("signup/setDeliveryAddress", {field: "zip", value: this.selectedAddress.zipcode});
      this.$store.commit("signup/setDeliveryAddress", {field: "city", value: this.selectedAddress.city});
      this.$store.commit("signup/setDeliveryAddress", {field: "state", value: this.selectedAddress.state});
      
      //console.log(await this.checkServiceArea(this.selectedAddress))
      if( await this.checkServiceArea(this.selectedAddress) ){
        // if it's in service area -> redirect to
        console.log("in service area");
        this.$router.push({ path: "/inServiceArea" });
        console.groupEnd();
        return
      } else{
        console.log("Not in service area");
        // if not in service area, push their address to our api to put in a table of non-servicable addresses, then redirect to a page that notifies them as such, allows them to enter their email for updates, and post about us
        console.groupEnd();
        this.$router.push({ path: "/outOfServiceArea" });
      }
      console.groupEnd();
    },
  },
};
</script>