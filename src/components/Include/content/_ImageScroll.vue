<template>
  <div class="row">
    <template v-if="loading === true">
      <ImageScrollSkeleton />
    </template>
    <template v-else>
      <template v-for="(item, index) in artikel_baru" :key="index">
        <template v-if="index < 4">
          <div class="col-lg-3 col-md-12 col-sm-12 text-truncate">
            <div class="rect dune">
              <img :src="item.image" :alt="item.title" class="img-fluid" />
              <div class="bottom-left">
                <span
                  :class="
                    item.cat !== null
                      ? 'img-scroll ' + item.cat_slugs + '-s'
                      : 'img-scroll bg-success'
                  "
                  >{{ item.category }}</span
                >
              </div>
            </div>
            <span style="text-align: center;">{{ item.title }}</span>
          </div>
        </template>
      </template>
    </template>
  </div>
</template>

<script>
import Repository from "@/repositories/RepositoryFactory";
import ImageScrollSkeleton from "@/components/Home/skeleton/ImageScroll-Skeleton";

const SecondSection = Repository.get("secondsection");
export default {
  name: "ImageScroll",
  props: ["param"],
  components: {
    ImageScrollSkeleton,
  },
  data() {
    return {
      loading: true,
      artikel_baru: [],
    };
  },
  beforeMount() {
    this.getArtikelTerbaru();
  },
  methods: {
    getArtikelTerbaru: async function () {
      const { data } = await SecondSection.getImageScroll(this.param);
      this.artikel_baru = data.data;
      this.loading = false;
    },
  },
};
</script>

<style></style>
