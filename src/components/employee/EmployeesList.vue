<template>
  <v-content>
    <v-container>
      <employees-actions-bar :search.sync="search"></employees-actions-bar>
      <v-card>
        <v-data-table
          :headers="headers"
          :items="employees"
          :search="search"
        ></v-data-table>
      </v-card>
    </v-container>
  </v-content>
</template>

<script>
import employeesActionsBar from "../employee/EmployeesActionsBar";
export default {
  name: "EmployeeList",

  props: ["employees"],

  components: {
    employeesActionsBar
  },

  data() {
    return {
      search: "",
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "left",
          filterable: false,
          value: "name"
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" }
      ]
    };
  }
};
</script>

<style>
.page-actions {
  margin-bottom: 15px;
}
.add {
  margin-left: 30px;
  margin-right: 10px;
}
</style>
