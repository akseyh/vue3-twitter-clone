<template>
  <div class="sidebar">
    <div>Gündem</div>
    <div>Gündem</div>
    <div>Gündem</div>
  </div>
</template>

<style scoped>
.sidebar {
  width: 350px;
  min-width: 350px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

@media only screen and (max-width: 1100px) {
  .sidebar {
    display: none;
  }
}
</style>