<template>
  <div class="container mt-5">
    <div class="my-3">
      <div class="ribbon">Top Stories</div>
    </div>

    <template v-if="loadingState === true">
      <HeaderSkeleton />
    </template>
    <template v-else>
      <div class="row">
        <div class="col-lg-8 col-md-12 col-sm-12 mb-2">
          <template v-for="(item, index) in header.mostview" :key="index">
            <div class="card text-white card-big">
              <img
                class="card-img"
                :src="'http://127.0.0.1:8000/img/artikel/' + item.image"
                alt="Card image"
              />
              <div class="bottom-left">
                <h5 class="card-title">
                  <a href="javascript:void(0)" class="text-link">
                    {{ item.title }}
                  </a>
                </h5>
                <p class="card-text">Last updated 3 mins ago</p>
              </div>
            </div>
          </template>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12">
          <div class="row">
            <template v-for="(item, index) in header.mosttwo" :key="index">
              <div class="col-lg-12 col-md-12 col-sm-12 mb-2">
                <div class="card bg-dark text-white card-small">
                  <img
                    class="img-fluid"
                    :src="'http://127.0.0.1:8000/img/artikel/' + item.image"
                    alt="Card image"
                  />
                  <div class="bottom-left">
                    <h5 class="card-title">
                      <a href="javascript:void(0)" class="text-link">
                        {{ item.title }}
                      </a>
                    </h5>
                    <p class="card-text">Last updated 3 mins ago</p>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import HeaderSkeleton from "@/components/Home/skeleton/HeaderSkeleton";
import Repository from "@/repositories/RepositoryFactory";
const Header = Repository.get("header");
export default {
  name: "Header",
  components: {
    HeaderSkeleton,
  },
  data() {
    return {
      header: [],
      loadingState: true,
    };
  },
  beforeMount() {
    this.getHeader();
  },
  methods: {
    getHeader: async function () {
      const { data } = await Header.get();
      this.header = data;
      this.loadingState = false;
    },
    truncate: function (data, num) {
      const regex = /(<([^>]+)>)/gi;
      let { reqdString } = data.substring(num, length);
      reqdString = reqdString.replace(regex, "\n");
      return reqdString;
    },
  },
};
</script>

<style>
.card-big,
.card-small {
  border: none;
}
.ribbon {
  background: #e73c7e;
  height: 56px;
  width: auto;
  display: inline-block;
  padding: 0 40px 0 0;
  margin: auto;
  position: relative;
  color: #fff;
  line-height: 60px;
  font-size: 26px;
  text-align: center;
  z-index: 1;
}
.ribbon:before {
  content: "";
  border: 28px solid #e73c7e;
  border-left-color: transparent;
  border-left-width: 12px;
  position: absolute;
  top: 0;
  left: -39px;
}
.ribbon:after {
  content: "";
  border: 28px solid transparent;
  border-left-color: #e73c7e;
  border-left-width: 12px;
  position: absolute;
  top: 0;
  right: -39px;
}

.bottom-left {
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgb(0, 0, 0));
  color: white;
  width: 100%;
  position: absolute;
  bottom: 0px;
  padding-left: 20px;
  padding-bottom: 10px;
}

.container {
  position: relative;
  z-index: 1;
}

.card-small {
  min-height: 175px;
  overflow: hidden;
}

.card-big {
  overflow: hidden;
}

.card-small > img {
  object-fit: cover;
  width: 100%;
}

.card img {
  transition: transform 1s;
}

.card:hover img {
  transform: scale(1.2);
}

.text-link {
  text-decoration: none;
  font-weight: 600;
  color: white;
  cursor: pointer;
}

.text-link:hover {
  color: #e73c7e;
  transition: 0.5s ease-in;
}

@media only screen and (max-width: 720px) {
}
</style>
