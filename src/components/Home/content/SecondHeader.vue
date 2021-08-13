<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light navbar-second">
      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12" style="padding-top: 10px;">
          <a href="javascript:void(0)">
            <span class="headertwo-title">
              Popular News | <span class="text-capitalize"> {{ title }}</span>
            </span>
          </a>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="navbar-text mx-auto">
            <button
              class="navbar-toggler navbar-toggler-second"
              type="button"
              @click="toggleMobileSecond()"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse second-nav"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav mr-auto">
                <template v-for="(item, index) in secondNav" :key="index">
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      :id="item.slugs"
                      :data-filter="item.slugs"
                      @click="getParam($event)"
                      :href="'#' + item.slugs"
                      >{{ item.name }}</a
                    >
                  </li>
                </template>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="grad-bar"></div>
    </nav>
  </div>
  <div class="container mt-3 mb-5">
    <div class="row mt-2">
      <template v-if="loading === true">
        <SecondHeaderSkeleton />
      </template>
      <template v-else>
        <div class="col-lg-8 col-md-12 col-sm-12">
          <template v-for="(item, index) in secondSect" :key="index">
            <template v-if="index <= 4">
              <div class="card float-right card-bottom my-3">
                <div class="row">
                  <div class="col-sm-5">
                    <div class="img-frame">
                      <img
                        class="d-block w-100"
                        :src="'http://127.0.0.1:8000/img/artikel/' + item.image"
                        :alt="item.title"
                      />
                    </div>
                  </div>
                  <div class="col-sm-7 px-4 mt-2">
                    <div class="card-block">
                      <h5>{{ item.title }}.</h5>
                      <span
                        v-html="truncate(item.body, 100)"
                        class="second-body-text"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </template>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12">
          <div class="row my-3">
            <div class="col-lg-12 col-md-12 col-sm-12 text-center">
              <div class="rect">
                <img
                  src="http://127.0.0.1:8000/img/artikel/TGFoaXJueWEgU2FuZyBMZWdlbmRhLCBDaHJpc3ll.png"
                  alt=""
                  class="img-fluid"
                />
              </div>
              <span>Responsive ads</span>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 mt-3">
              <a href="https://facebook.com" class="social-link">
                <div class="social facebook">
                  <i class="fab fa-facebook"></i> Follow us on Facebook
                </div>
              </a>
              <a href="https://instagram.com" class="social-link">
                <div class="social instagram">
                  <i class="fab fa-instagram"></i> Follow us on Instagram
                </div>
              </a>
              <a href="https://twitter.com" class="social-link">
                <div class="social twitter">
                  <i class="fab fa-twitter"></i> Follow us on Twitter
                </div>
              </a>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 mt-3">
              <label for="belowAds" class="text-uppercase font-weight-bold"
                >Recomended Artikel</label
              >
              <div class="row">
                <template v-for="(item, index) in random" :key="index">
                  <template v-if="index < 2">
                    <div
                      class="col-lg-6 col-md-12 col-sm-12 text-truncate text-center"
                    >
                      <div class="rect">
                        <img
                          :src="
                            'http://127.0.0.1:8000/img/artikel/' + item.image
                          "
                          class="img-fluid"
                          :alt="item.title"
                        />
                      </div>
                      <span
                        class="text-muted text-truncate text-center text-sm"
                        >{{ item.title }}</span
                      >
                    </div>
                  </template>
                </template>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Repository from "@/repositories/RepositoryFactory";
import SecondHeaderSkeleton from "@/components/Home/skeleton/SecomdHeader-skeleton";

const NavSecond = Repository.get("navbar");
const SecondSection = Repository.get("secondsection");
export default {
  name: "SecondHeader",
  components: {
    SecondHeaderSkeleton,
  },
  watch: {
    $route(to, from) {
      this.getSecond(this.attribute);
    },
  },
  data() {
    return {
      secondNav: [],
      secondSect: [],
      random: [],
      attribute: "beauty",
      title: "beauty",
      loading: true,
    };
  },
  beforeMount() {
    this.getData();
    this.getSecond(this.attribute);
    this.getRand();
  },
  methods: {
    getData: async function () {
      const { data } = await NavSecond.get();
      this.secondNav = data.data;
    },
    getSecond: async function (param) {
      const { data } = await SecondSection.get(param);
      this.secondSect = data.data;
      this.loading = false;
    },
    getRand: async function () {
      const { data } = await SecondSection.getrandom();
      this.random = data.data;
    },
    getParam: function (param) {
      this.attribute = param.target.dataset.filter;
      this.title = this.attribute;
    },
    toggleMobileSecond: function () {
      const nav = document.getElementsByClassName("second-nav");
      nav[0].classList.toggle("show");
    },
    collapse: function () {
      const collaps = document.getElementsByClassName("collapse");
      for (var item of collaps) {
        item.classList.toggle("show");
      }
    },
    truncate: function (data, num) {
      let reqdString = data.substring(num, length);
      reqdString = reqdString.replace(/.$/, ".....");
      return reqdString;
    },
  },
};
</script>

<style>
.rect {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
}

.text-sm {
  font-size: 0.7rem;
  font-weight: 600;
}

a.social-link {
  text-decoration: none;
}

a.social-link:hover .social {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  -webkit-animation: gradbar 15s ease infinite;
  animation: gradbar 15s ease infinite;
}

.social {
  width: 100%;
  border: 1px solid transparent;
  text-align: center;
  margin-bottom: 15px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}

.facebook {
  color: white;
  background: #1f8cb4;
}

.instagram {
  color: white;
  background: #e73c7e;
}

.twitter {
  color: white;
  background: #3cbfe7;
}

.rect img {
  object-fit: contain;
}

.headertwo-title {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  -webkit-animation: gradbar 15s ease infinite;
  animation: gradbar 15s ease infinite;
  height: 46px;
  width: auto;
  display: inline-block;
  padding: 0 40px 0 40px;
  margin: auto;
  position: relative;
  color: #fff;
  line-height: 45px;
  font-size: 18px;
  text-align: center;
}

.btn-gradient {
  background: #e73c7e;
  background-size: 400% 400%;
  color: white;
}
.btn-gradient:hover {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  -webkit-animation: gradbar 15s ease infinite;
  animation: gradbar 15s ease infinite;
  border: 0px solid transparent;
  color: white;
}

.position-right {
  position: absolute;
  right: 75px;
}

.active-nav {
  color: #e73c7e !important;
}

.nav-second-header {
  color: black;
  font-weight: 500;
  margin-left: 20px;
  text-decoration: none;
}

.img-frame {
  overflow: hidden;
  height: 130px;
}

.img-frame img {
  object-fit: cover;
  width: 100%;
}

.navbar-second {
  display: block;
}

.second-nav ul {
  margin-left: auto;
  order: 2;
}

span.second-body-text p {
  margin-bottom: 0em !important;
  font-size: 0.9rem;
  text-align: justify;
}

.nav-second-header:hover {
  color: #e73c7e;
  transition: color 0.3s ease-out;
}

span.text-cap {
  text-transform: capitalize;
}

.card-bottom {
  max-height: 150px;
}

@media only screen and (max-width: 720px) {
  .position-right {
    position: relative;
    overflow-x: scroll;
    right: 0px;
  }
  .headertwo-title {
    width: 100%;
  }
  .btn-header-two {
    width: 100%;
  }
  .navbar-toggler-second {
    width: 100%;
  }
  .navbar-second {
    justify-content: center;
  }
  .nav-second-header {
    color: black;
    font-weight: 500;
    margin-left: 20px;
  }

  .second-nav {
    position: relative;
    left: 0em;
  }

  .card-bottom {
    max-height: 280px;
    padding-bottom: 10px;
  }
}
</style>
