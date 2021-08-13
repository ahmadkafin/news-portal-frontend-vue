<template>
  <Header />
  <SecondHeader />
  <ImageScroll />
  <CategoryHomeSection />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Home/content/Header";
import SecondHeader from "@/components/Home/content/SecondHeader";
import ImageScroll from "@/components/Home/content/ImageScroll";
import CategoryHomeSection from "@/components/Home/content/CategoryHomeSection";

export default {
  name: "Home",
  components: {
    Header,
    SecondHeader,
    ImageScroll,
    CategoryHomeSection,
  },
};
</script>
