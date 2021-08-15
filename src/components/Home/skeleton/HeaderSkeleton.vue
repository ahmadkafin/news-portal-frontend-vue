<template>
  <div class="row">
    <div class="col-lg-6 col-md-12 col-sm-12 mb-2">
      <div class="card bg-dark text-white card-big">
        <div class="img-skeleton-big">&nbsp;</div>
        <div class="bottom-left">
          <h5 class="card-title">
            <div href="javascript:void(0)" class="text-link-skeleton">
              &nbsp;
            </div>
          </h5>
          <p class="card-text-skeleton">&nbsp;</p>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-md-12 col-sm-12">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 mb-2">
          <div class="card bg-dark text-white card-small">
            <div class="img-skeleton-small"></div>
            <div class="bottom-left">
              <h5 class="card-title">
                <div href="javascript:void(0)" class="text-link-skeleton">
                  &nbsp;
                </div>
              </h5>
              <p class="card-text-skeleton">&nbsp;</p>
            </div>
          </div>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 mb-2">
          <div class="card bg-dark text-white card-small">
            <div class="img-skeleton-small"></div>
            <div class="bottom-left">
              <h5 class="card-title">
                <div href="javascript:void(0)" class="text-link-skeleton">
                  &nbsp;
                </div>
              </h5>
              <p class="card-text-skeleton">&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderSkeleton",
};
</script>

<style>
.img-skeleton-big {
  height: 356px;
  background: rgb(241, 241, 241);
  animation: pulse-bg 1s infinite;
}
.img-skeleton-small {
  height: 174px;
  background: rgb(185, 185, 185);
  animation: pulse-bg 1s infinite;
}
.text-link-skeleton {
  width: 200px;
  background: whitesmoke;
  animation: pulse-bg 1s infinite;
}

.card-text-skeleton {
  width: 50px;
  background: whitesmoke;
  animation: pulse-bg 1s infinite;
}

@keyframes pulse-bg {
  0% {
    background-color: #ddd;
  }
  50% {
    background-color: #e2e2e2;
  }
  100% {
    background-color: #ddd;
  }
}
</style>
