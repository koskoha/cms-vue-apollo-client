<template>
  <div class="page-title">
    <v-icon class="page-icon" large left>{{ icon }}</v-icon>
    <span class="">{{ label }}</span>
    <span v-if="data">({{ data }})</span>
  </div>
</template>

<script>
export default {
  name: "PageHeader",

  props: ["icon", "label", "data"]
};
</script>

<style lang="postcss">
@import "../../scss/themes/variables";
.page-icon {
  position: relative;
  top: -3px;
}
.page-title {
  color: $color1;
  font-size: 2em;
  margin-bottom: 10px;
}
</style>
