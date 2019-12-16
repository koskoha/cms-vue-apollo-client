<template>
  <div class="page-title">
    <v-icon class="page-icon" large left>{{icon}}</v-icon>
    <span class="title">{{label}}</span>
    <span v-if="data">({{data}})</span>
  </div>
</template>

<script>
export default {
  name: "PageHeader",

  props: ["icon", "label", "data"]
};
</script>

<style>
.page-icon {
  position: relative;
  top: -3px;
}
.page-title {
  padding: 15px 15px 0px 25px;
  color: #82af13;
  font-size: 25px;
}
</style>
