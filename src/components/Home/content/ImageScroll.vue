<template>
  <div class="container mt-5">
    <div class="row">
      <template v-if="loading === true">
        <ImageScrollSkeleton />
      </template>
      <template v-else>
        <template v-for="(item, index) in random" :key="index">
          <div class="col-lg-3 col-md-12 col-sm-12 mb-3 text-truncate">
            <div class="rect dune">
              <img
                :src="'http://127.0.0.1:8000/img/artikel/' + item.image"
                :alt="item.title"
                class="img-fluid"
              />
              <div class="bottom-left">
                <span
                  :class="
                    item.cat !== null
                      ? 'img-scroll ' + item.cat.slugs
                      : 'img-scroll bg-success'
                  "
                  >{{ item.cat !== null ? item.cat.name : "default" }}</span
                >
              </div>
            </div>
            <span style="text-align: center;">{{ item.title }}</span>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import Repository from "@/repositories/RepositoryFactory";
import ImageScrollSkeleton from "@/components/Home/skeleton/ImageScroll-Skeleton";
const SecondSection = Repository.get("secondsection");
const NavSecond = Repository.get("navbar");

export default {
  name: "ImageScroll",
  components: {
    ImageScrollSkeleton,
  },
  data() {
    return {
      loading: true,
      random: [],
    };
  },
  beforeMount() {
    this.getRandomData();
  },
  methods: {
    getRandomData: async function () {
      const { data } = await SecondSection.getrandom();
      this.random = data.data;
      this.loading = false;
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

.beauty {
  background: pink;
}
.lifestyle {
  background: rgb(106, 177, 0);
}
.edukasi {
  background: rgb(47, 179, 255);
}
.news {
  background: rgb(0, 165, 102);
}
.fesyen {
  background: rgb(212, 209, 0);
}
</style>
