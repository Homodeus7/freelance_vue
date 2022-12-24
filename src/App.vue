<template>
  <header class="navbar">
    <h3>Freelance</h3>
    <ul class="navbar-menu">
      <li>
        <router-link to="/">All list</router-link>
      </li>
      <li>
        <router-link to="/new">Create task</router-link>
      </li>
    </ul>
  </header>
  <div class="container with-nav">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style></style>
