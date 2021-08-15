<template>
  <div class="container mt-5">
    <div class="grad-bar"></div>

    <template v-for="(item, index) in navbar" :key="index">
      <template v-if="item.name != 'News'">
        <div class="row my-5">
          <ImageScroll :param="item.slugs" />
          <ArticleListSection :title="item.name" :param="item.slugs" />
        </div>
      </template>
    </template>
    <div class="row"></div>
  </div>
</template>

<script>
import Repository from "@/repositories/RepositoryFactory";
import ArticleListSection from "@/components/Include/content/_ArticleListSection";
import ImageScroll from "@/components/Include/content/_ImageScroll";

const Navbar = Repository.get("navbar");

export default {
  name: "FashionImageScroll",
  components: {
    ArticleListSection,
    ImageScroll,
  },
  data() {
    return {
      navbar: [],
    };
  },
  beforeMount() {
    this.getData();
  },
  methods: {
    getData: async function () {
      const { data } = await Navbar.get();
      this.navbar = data.data;
    },
  },
};
</script>

<style>
.dune {
  position: relative;
}
.img-scroll {
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 3px;
  padding-top: 3px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.beauty-s {
  background: pink;
}
.lifestyle-s {
  background: rgb(106, 177, 0);
}
.edukasi-s {
  background: rgb(47, 179, 255);
}
.news-s {
  background: rgb(0, 165, 102);
}
.fesyen-s {
  background: rgb(212, 209, 0);
}
</style>
