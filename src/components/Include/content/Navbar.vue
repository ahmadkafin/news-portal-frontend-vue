<template>
  <template v-if="loading === true">
    <NavbarSkeleton />
  </template>
  <template v-else>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link :tag="a" class="navbar-brand" to="/">
          <img src="../../../assets/ihf_logo.png" alt="" width="150" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleMobile()"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <template v-for="(item, index) in navbar" :key="index">
              <template v-if="item.childs == ''">
                <li class="nav-item">
                  <a class="nav-link" href="#">{{ item.name }}</a>
                </li>
              </template>
              <template v-else>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="showDropdown(item.slugs)"
                  >
                    {{ item.name }}
                  </a>
                  <div
                    :class="'dropdown-menu ' + item.slugs"
                    aria-labelledby="navbarDropdown"
                  >
                    <template
                      v-for="(child, index) in item.childs"
                      :key="index"
                    >
                      <a class="dropdown-item" href="#">{{ child.name }}</a>
                    </template>
                  </div>
                </li>
              </template>
            </template>
          </ul>
        </div>
        <span class="navbar-text mx-auto">
          <a href="#"><i class="fab fa-facebook mx-2"></i></a>
          <a href="#"><i class="fab fa-twitter mx-2"></i></a>
          <a href="#"><i class="fab fa-instagram mx-2"></i></a>
          <a href="#"><i class="fab fa-google-plus mx-2"></i></a>
        </span>
      </nav>
    </div>
  </template>
  <div class="grad-bar"></div>
</template>

<script>
import NavbarSkeleton from "@/components/Include/skeleton/NavbarSkeleton";
import Repository from "@/repositories/RepositoryFactory";
const Navbar = Repository.get("navbar");

export default {
  name: "Navbar",
  components: {
    NavbarSkeleton,
  },
  data() {
    return {
      loading: true,
      navbar: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    toggleSearch: function () {
      if (this.loading === false) {
        const nav = document.getElementsByClassName("nav");
        const searchInput = document.getElementsByClassName("search-input");
        if (nav[0].getAttribute("class") == "nav no-search") {
          nav[0].classList.remove("no-search");
          nav[0].classList.add("search");
        } else {
          nav[0].classList.remove("search");
          nav[0].classList.add("no-search");
        }
        searchInput[0].classList.toggle("search-active");
      }
    },
    toggleMobile: function () {
      const nav = document.getElementsByClassName("collapse");
      nav[0].classList.toggle("show");
    },
    showDropdown: function (slugs) {
      const drop = document.getElementsByClassName(slugs);
      for (var item of drop) {
        item.classList.toggle("show");
      }
    },
    changeClass: function (active) {
      if (active) {
        return `active`;
      } else {
        return ``;
      }
    },
    changeClassChild: function (active) {
      if (active) {
        return `dropdown-item active`;
      } else {
        return `dropdown-item`;
      }
    },
    getData: async function () {
      const { data } = await Navbar.get();
      this.navbar = data.data;
      this.loading = false;
    },
  },
};
</script>

<style>
/* BASIC SETUP */

nav.navbar {
  font-weight: 600;
  font-size: 0.9rem;
}

.grad-bar {
  width: 100%;
  height: 5px;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  -webkit-animation: gradbar 15s ease infinite;
  -moz-animation: gradbar 15s ease infinite;
  animation: gradbar 15s ease infinite;
}

.navbar-text a {
  font-size: 1rem;
}
.nav-item:hover a.nav-link,
.navbar-text a:hover {
  color: #e73c7e !important;
}

@media only screen and (max-width: 720px) {
  .navbar-collapse {
    margin-top: 20px;
    transition: 0.5s ease-in;
  }
}
</style>
