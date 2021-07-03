<template>
  <div class="menu-section">
    <div>
      <div>Logo</div>
      <div class="menu-section__items">
        <span>Anasayfa</span>
        <span>Anasayfa</span>
        <span>Anasayfa</span>
        <span>Anasayfa</span>
      </div>
      <button>Tweetle</button>
    </div>
  </div>
</template>

<style scoped>
.menu-section {
  width: 275px;
  min-width: 275px;
  height: 100vh;
}

.menu-section__items {
  display: flex;
  flex-direction: column;
}

@media only screen and (max-width: 1250px) {
  .menu-section {
    width: 90px;
    min-width: 90px;
  }
}
</style>