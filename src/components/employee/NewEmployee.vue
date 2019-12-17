<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <div class="form-section-title">
      Personal
    </div>
    <div class="form-section">
      <v-row dense>
        <v-col cols="12" sm="3">
          <v-text-field
            outlined
            v-model="firstName"
            :rules="rules.nameRules"
            label="First Name"
            clearable
            dense
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            outlined
            v-model="lastName"
            :rules="rules.nameRules"
            label="Last Name"
            required
            dense
            clearable
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            outlined
            v-model="nick"
            label="Preffered Name"
            clearable
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12" sm="3">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="dob"
                label="Birthday date"
                append-icon="event"
                readonly
                outlined
                dense
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              ref="picker"
              v-model="dob"
              :max="new Date().toISOString().substr(0, 10)"
              min="1950-01-01"
              @change="save"
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="12" sm="3">
          <v-select
            v-model="gender"
            :items="gender"
            :rules="rules.select"
            label="Gender"
            required
            dense
            outlined
          ></v-select>
        </v-col>
        <v-col cols="12" sm="3">
          <v-select
            v-model="maritalStatus"
            :items="marital"
            :rules="rules.select"
            label="Marital Status"
            required
            dense
            outlined
          ></v-select></v-col
      ></v-row>
      <v-row dense>
        <v-col cols="12" sm="3">
          <v-text-field
            outlined
            v-model="snn"
            :rules="rules.nameRules"
            label="SSN"
            clearable
            dense
          ></v-text-field></v-col
      ></v-row>
    </div>
    <hr />
    <div class="form-section-title">
      Address
    </div>
    <div class="form-section">
      <v-row dense>
        <v-col cols="12" sm="4">
          <v-text-field
            outlined
            v-model="form.address.street"
            :rules="rules.nameRules"
            label="Street"
            clearable
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            outlined
            v-model="form.address.city"
            :rules="rules.nameRules"
            label="City"
            clearable
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="2">
          <v-text-field
            outlined
            v-model="form.address.state"
            :rules="rules.nameRules"
            label="State"
            clearable
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="2">
          <v-text-field
            outlined
            v-model="form.address.zip"
            :rules="rules.nameRules"
            label="ZIP"
            clearable
            dense
          ></v-text-field> </v-col
      ></v-row>
    </div>

    <hr />
    <div class="form-section-title">
      Contact
    </div>
    <div class="form-section"></div>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      Validate
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset">
      Reset Form
    </v-btn>

    <v-btn color="warning" @click="resetValidation">
      Reset Validation
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: "NewEmployee",

  components: {},

  data() {
    const defaultForm = Object.freeze({
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      maritalStatus: "",
      address: {
        street: "",
        city: "",
        state: "",
        zip: ""
      }
    });

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        age: [val => val < 10 || `I don't believe you!`],
        select: [val => (val || "").length > 0 || "This field is required"],
        nameRules: [val => (val || "").length > 0 || "This field is required"]
      },
      gender: ["Male", "Female"],
      marital: ["Single", "Maried", "Divorsed"],
      defaultForm
    };
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  }
};
</script>

<style>
.new-employee {
  margin-top: 16px;
}
</style>
