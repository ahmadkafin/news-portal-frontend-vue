<template>
  <nav class="navbar navbar-expand-lg navbar-light navbar-second">
    <div class="row">
      <div class="col-lg-6 col-md-12 col-sm-12" style="padding-top: 10px;">
        <a href="javascript:void(0)">
          <span class="headertwo-title">{{ title }}</span>
        </a>
      </div>
    </div>
    <div class="grad-bar"></div>
  </nav>
</template>

<script>
export default {
  name: "_HeadCatTitle",
  props: ["title"],
  data() {
    return {
      artikel: [],
    };
  },
};
</script>

<style></style>
