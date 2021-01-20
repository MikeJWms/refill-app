<template>

<CenterMessage>
      <template v-slot:header>
        Well... this is awkward...
      </template>
      <template v-slot:sub-header>
        Suds direct isn't serving your location, yet!
      </template>
      <template v-slot:message>
        If you'd like to be notified when we start serving your area, add your email address here. We promise to respect your information, and never send spam.
      </template>
      <template v-slot:action>
        <b-field position="is-centered">
            <b-input placeholder="email address" type="email" maxlength="30">
            </b-input>
            <p class="control">
                <button class="button">Submit</button>
            </p>
        </b-field>
      </template>
    </CenterMessage>
</template>

<script>
export default {

}
</script>