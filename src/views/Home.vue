<template>
  <Header />
  <SecondHeader />
  <SectionPerCategory />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Home/content/Header";
import SecondHeader from "@/components/Home/content/SecondHeader";
import SectionPerCategory from "@/components/Home/content/SectionPerCategory";

export default {
  name: "Home",
  components: {
    Header,
    SecondHeader,
    SectionPerCategory,
  },
};
</script>
