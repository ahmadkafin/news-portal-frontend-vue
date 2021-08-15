<template>
  <div class="row mb-3">
    <div class="col-lg-10 col-md-12 col-sm-12">
      <div class="row">
        <template v-for="(data, index) in artikel" :key="index">
          <template v-if="data.child_slugs === null">
            <template v-if="index === 0">
              <div class="col-lg-6 col-sm-12 col-md-12">
                <div class="card nun non">
                  <div class="img-frames" style="position: relative;">
                    <img
                      :src="data.image"
                      class="card-img-top"
                      :alt="data.title"
                    />
                    <div class="bottom-left hamus">
                      <span :class="data.cat_slugs + '-s'">
                        {{ data.category }}</span
                      >
                    </div>
                  </div>
                  <div class="card-body nan mt-3">
                    <h5 class="card-title text-truncate">{{ data.title }}</h5>
                    <div class="card-text mks">
                      <span
                        v-html="truncate(data.body, 130)"
                        class="second-body-text sa"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </template>
          <template v-else>
            <template v-if="data.child_slugs">
              <template v-if="index < h.length">
                <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="row">
                    <ArtikelPerChildCategory :param="data.child_slugs" />
                  </div>
                </div>
              </template>
            </template>
          </template>
        </template>
        <div class="col-lg-6 col-md-12 col-sm-12 fux">
          <template v-for="(data, index) in artikel" :key="index">
            <template v-if="data.child_slugs === null">
              <template v-if="index !== 0">
                <div class="card nun mb-4 nin">
                  <div class="row no-gutters">
                    <div class="col-md-4">
                      <div class="img-frame">
                        <img
                          :src="data.image"
                          class="card-img"
                          :alt="data.title"
                        />
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body nan">
                        <h6 class="card-title">
                          {{ data.title }}
                        </h6>
                        <small>{{ data.created }}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </template>
          </template>
        </div>
      </div>
    </div>
    <div class="col-lg-2 col-md-12 col-sm-12">
      askjdhkajshdj
    </div>
  </div>
  <div class="grad-bar"></div>
</template>

<script>
import ArtikelPerChildCategory from "@/components/Include/content/_ArtikelPerChildCategory";
import Repository from "@/repositories/RepositoryFactory";
const SecondSection = Repository.get("secondsection");
const NavChild = Repository.get("navbar");

export default {
  name: "ArtikelPerCategory",
  components: {
    ArtikelPerChildCategory,
  },
  props: ["param"],
  data() {
    return {
      artikel: [],
      h: [],
    };
  },
  beforeMount() {
    this.getDataArtikel();
  },
  mounted() {
    this.getNavChild(this.param);
  },
  methods: {
    getDataArtikel: async function () {
      const { data } = await SecondSection.get(this.param);
      this.artikel = data.data;
    },
    getNavChild: async function () {
      const { data } = await NavChild.getChild(this.param);
      this.h = data.data;
    },
    truncate: function (data, num) {
      let reqdString = data.substring(num, length);
      reqdString = reqdString.replace(/.$/, "...");
      return reqdString;
    },
  },
};
</script>

<style>
.nin {
  max-height: 72px;
}
.non {
  min-height: 350px;
}

.img-frames {
  overflow: hidden;
  height: 269px;
}

.img-frames img {
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
}

.hamus {
  padding: 0px !important;
  background: transparent;
  bottom: 0px;
  top: 248px;
  left: 1px;
}
.fux {
  max-height: 370px;
  overflow-y: scroll;
}

.fux small {
  color: rgb(197, 197, 197);
}

/* Hide scrollbar for Chrome, Safari and Opera */
.fux::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.fux {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
