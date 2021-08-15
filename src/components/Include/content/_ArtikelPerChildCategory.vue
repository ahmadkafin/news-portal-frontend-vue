<template>
  <div class="col-lg-12 col-sm-12 col-md-12 mb-4">
    <template v-for="(data, index) in artikel_child" :key="index">
      <template v-if="index >= 2">
        <template v-if="index === 2">
          <div class="card nun">
            <div class="img-frames" style="position: relative;">
              <img :src="data.image" class="card-img-top" :alt="data.title" />
              <div class="bottom-left hamus">
                <span :class="data.child_slugs"> {{ data.cat_child }}</span>
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
        </template>
      </template>
    </template>
  </div>
  <div class="col-lg-12 col-sm-12 col-md-12">
    <div class="row">
      <template v-for="(data, index) in artikel_child" :key="index">
        <template v-if="index >= 2">
          <template v-if="index !== 2">
            <div class="card nun mb-4 nins">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <div class="img-frumes">
                    <img :src="data.image" class="card-img" :alt="data.title" />
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
</template>

<script>
import Repository from "@/repositories/RepositoryFactory";
const SecondSection = Repository.get("secondsection");

export default {
  name: "ArtikelPerChildCategory",
  props: ["param"],
  data() {
    return {
      artikel_child: [],
    };
  },
  beforeMount() {
    this.getDataArtikel();
  },
  methods: {
    getDataArtikel: async function () {
      const { data } = await SecondSection.getChild(this.param);
      this.artikel_child = data.data;
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
.mks {
  max-height: 120px;
}

.nins {
  max-height: 100px;
}

.hamu {
  padding: 0px !important;
  background: transparent;
  bottom: 0px;
  top: 108px;
  left: 1px;
}
.nun {
  border: none;
}

.nan {
  padding: 0px;
}
.halal-food,
.halal-travel {
  border: 1px solid transparent;
  padding-left: 10px;
  padding-right: 10px;
}

.halal-food {
  background: rgb(0, 204, 255);
}

.halal-travel {
  background: rgb(0, 255, 191);
}

.img-frumes {
  overflow: hidden;
  height: 100px;
}

.img-frumes img {
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
}
</style>
