export const state = () => ({
  zipcode: "",
  email: "",
  firstName: "",
  LastName: "",
  deliveryAddress: {
    street1: "",
    street2: "",
    zip: "",
    city: "",
    state: "Oregon"
  },
  phoneNumber: "",
  sms: false,
  customerId: null
})

export const mutations = {
  setFirstName (state, payload) { //payload = {field , value}
    state.firstName = payload;
  },
  setLasttName (state, payload) { //payload = {field , value}
    state.lasttName = payload;
  },
  setZipcode (state, payload) { //payload = {field , value}
    state.zipcode = payload;
  },
  setEmail (state, payload) { //payload = {field , value}
    state.email = payload;
  },
  setFirstName (state, payload) { //payload = {field , value}
    state.firstName = payload;
  },
  setDeliveryAddress (state, payload) { //payload = {field , value}
    console.log("field: ", payload.field);
    console.log("value: ", payload.value);
    state.deliveryAddress[payload.field] = payload.value;
  },
  setPhoneNumber (state, payload) { //payload = {field , value}
    state.phoneNumber = payload;
  },
  setSms (state, payload) { //payload = {field , value}
    if(payload != true | false) return;
    state.sms = payload;
  }
}
