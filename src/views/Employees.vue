<template>
  <div>
    <page-title :icon="'group'" :label="'Employees'"></page-title>
    <router-view :employees="employees"></router-view>
  </div>
</template>

<script>
import pageTitle from "../components/shared/PageTitle";

export default {
  name: "Employees",

  components: {
    pageTitle
  },

  data() {
    return {
      employees: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        }
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
