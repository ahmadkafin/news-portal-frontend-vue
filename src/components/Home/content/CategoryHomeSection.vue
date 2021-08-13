<template>
  <div class="container mb-4">
    <HeadCatTitle :cat="cat" />
  </div>
</template>

<script>
import HeadCatTitle from "@/components/Include/content/_HeadTitleCategoryHome";
import Repository from "@/repositories/RepositoryFactory";
const Cat = Repository.get("navbar");

export default {
  name: "CategoryHomeSection",
  components: {
    HeadCatTitle,
  },
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
