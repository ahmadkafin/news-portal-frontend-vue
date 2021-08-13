<template>
  <ul>
    <template v-for="(data, index) in artikel" :key="index">
      <li>
        {{ data.title }}
      </li>
    </template>
  </ul>
</template>

<script>
import Repository from "@/repositories/RepositoryFactory";

const SecondSection = Repository.get("secondsection");

export default {
  name: "ArtikelPerCategory",
  props: ["params"],
  data() {
    return {
      artikel: [],
    };
  },
  beforeMount() {
    this.getDataArtikel();
  },
  methods: {
    getDataArtikel: async function () {
      const { data } = await SecondSection.get(this.params);
      this.artikel = data.data;
    },
  },
};
</script>

<style></style>
