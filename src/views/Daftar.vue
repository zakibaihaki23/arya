<template>
    <v-form>
      <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col
          v-for="n in 1 "
          :key="n"
          cols="12"
          sm="20"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
          <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
          ></v-text-field>

          <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
          ></v-text-field>

          <Formcompo></Formcompo>

          <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
          ></v-checkbox>

          <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
          >
          Validate
          </v-btn>

          <v-btn
          color="error"
          class="mr-4"
          @click="reset"
          >
          Reset Form
          </v-btn>

          <v-btn
          color="warning"
          @click="resetValidation"
          >
          Reset Validation
          </v-btn>
          </v-card>
        </v-col>
      </v-row>
      </v-container>
    </v-form>
</template>

<script>
import Formcompo from '../components/Formcompo.vue';
  
export default {
    
  components: {
    Formcompo,
  },

  data: () => ({

    valid: true,
     name: '',
     nameRules: [
       v => !!v || 'Name is required',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>