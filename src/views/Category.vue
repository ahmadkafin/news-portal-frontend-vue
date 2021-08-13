<template>
  {{ param }}
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      param: this.$route.params.slugs,
    };
  },
  watch: {
    $route(to, from) {
      document.title =
        `Indonesia Hijabfest | ${this.param}` || "Some Default Title";
      this.param;
    },
  },
};
</script>

<style></style>
