<template>
  <v-form v-model="valid" ref="form">
    <v-text-field
      label="Name"
      v-model="name"
      :rules="nameRules"x
      :counter="10"
      required
    ></v-text-field>
    <v-text-field
      label="E-mail"
      v-model="email"
      :rules="emailRules"
      required
    ></v-text-field>
    <v-select
      label="Item"
      v-model="select"
      :items="items"
      :rules="[(v) => !!v || 'Item is required']"
      required
    ></v-select>
    <v-checkbox
      label="Do you agree?"
      v-model="checkbox"
      :rules="[(v) => !!v || 'You must agree to continue!']"
      required
    ></v-checkbox>

    <v-btn @click="submit" :class="{ green: valid, red: !valid }">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
</template>

<script>
  export default {
    data () {
      return {
        valid: false,
        name: '',
        nameRules: [
          (v) => !!v || 'Name is required',
          (v) => v && v.length <= 10 || 'Name must be less than 10 characters'
        ],
        email: '',
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        select: null,
        items: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4'
        ],
        checkbox: false
      }
    },
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          this.$refs.form.$el.submit()
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }

  }
</script>