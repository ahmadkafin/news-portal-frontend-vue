<template>
  <template v-for="(item, index) in cat" :key="index">
    <nav class="navbar navbar-expand-lg navbar-light navbar-second">
      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12" style="padding-top: 10px;">
          <a href="javascript:void(0)">
            <span class="headertwo-title">
              {{ item.name }}
            </span>
          </a>
        </div>
      </div>
      <div class="grad-bar"></div>
    </nav>
    <ArtikelPerCategory :params="item.slugs" />
  </template>
</template>

<script>
import ArtikelPerCategory from "@/components/Include/content/_ArtikelPerCategory";
export default {
  name: "_HeadCatTitle",
  components: {
    ArtikelPerCategory,
  },
  props: ["cat"],
  data() {
    return {
      artikel: [],
    };
  },
};
</script>

<style></style>
