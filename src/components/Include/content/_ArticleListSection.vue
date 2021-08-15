<template>
  <HeadCatTitle :title="title" />
  <ArtikelPerCategory :param="param" />
</template>

<script>
import HeadCatTitle from "@/components/Include/content/_HeadTitleCategoryHome";
import ArtikelPerCategory from "@/components/Include/content/_ArtikelPerCategory";

import Repository from "@/repositories/RepositoryFactory";
const Cat = Repository.get("navbar");

export default {
  name: "CategoryHomeSection",
  components: {
    HeadCatTitle,
    ArtikelPerCategory,
  },
  props: ["title", "param"],
  data() {
    return {
      cat: [],
    };
  },
  beforeMount() {
    this.getCategory();
  },
  methods: {
    getCategory: async function () {
      const { data } = await Cat.get();
      this.cat = data.data;
    },
  },
};
</script>

<style></style>
