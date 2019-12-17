<template>
  <div class="page-actions">
    <v-text-field
      class="search-input"
      v-model="searchInput"
      prepend-icon="search"
      label="Search employee"
      single-line
      hide-details
      clearable
      color="#82af13"
      @keyup="updateValue"
    >
      <template v-slot:append-outer>
        <v-btn
          small
          tile
          outlined
          color="#82af13"
          to="employees/new"
          class="add"
        >
          <v-icon left>add</v-icon>Add Employee
        </v-btn>
      </template>
    </v-text-field>
  </div>
</template>

<script>
export default {
  name: "EmployeesActionsBar",
  props: {
    search: String
  },
  data() {
    return {
      searchInput: this.search
    };
  },
  methods: {
    updateValue: function() {
      this.$emit("update:search", this.searchInput);
    }
  }
};
</script>
