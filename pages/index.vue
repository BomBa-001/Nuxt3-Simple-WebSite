<template>
  <section class="content">
    <br />

    <div class="btn-group">
      <button
        class="btn btn-secondary btn-sm dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Small button
      </button>
      <ul class="dropdown-menu dropdown-menu-dark">
        <li><a class="dropdown-item active" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
      </ul>
    </div>

    <hr />

    <div class="card" style="width: 18rem">
      <img
        src="https://picsum.photos/1920/1080?random"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
//@ import Components:
</script>

<style lang="scss" scoped>
// @use "@/assets/sass/helpers/mixins" as *;
// @use "@/assets/sass/helpers/functions" as *;
</style>
