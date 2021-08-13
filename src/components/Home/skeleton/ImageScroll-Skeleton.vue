<template>
  <div class="col-lg-3 col-md-12 col-sm-12 mb-3 text-center">
    <div class="rect skeleton-img-scroll">
      <div class="img-scroll-skeleton-img">
        &nbsp;
      </div>
      <span class="skeleton-img-scroll-title">&nbsp;</span>
    </div>
  </div>
  <div class="col-lg-3 col-md-12 col-sm-12 mb-3 text-center">
    <div class="rect skeleton-img-scroll">
      <div class="img-scroll-skeleton-img">
        &nbsp;
      </div>
      <span class="skeleton-img-scroll-title">&nbsp;</span>
    </div>
  </div>
  <div class="col-lg-3 col-md-12 col-sm-12 mb-3 text-center">
    <div class="rect skeleton-img-scroll">
      <div class="img-scroll-skeleton-img">
        &nbsp;
      </div>
      <span class="skeleton-img-scroll-title">&nbsp;</span>
    </div>
  </div>
  <div class="col-lg-3 col-md-12 col-sm-12 mb-3 text-center">
    <div class="rect skeleton-img-scroll">
      <div class="img-scroll-skeleton-img">
        &nbsp;
      </div>
      <span class="skeleton-img-scroll-title">&nbsp;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageScrollSkeleton",
};
</script>

<style>
.skeleton-img-scroll {
  background: whitesmoke;
  animation: pulse-bg 1s infinite;
}
.img-scroll-skeleton-img {
  min-height: 165px;
}
</style>
