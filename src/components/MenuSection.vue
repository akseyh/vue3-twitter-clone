<template>
  <div class="menu-section">
    <div>
      <logo-icon class="menu-section__logo" />
      <div class="menu-section__items">
        <div class="menu-section__item">
          <HomeIcon class="icon" />
          <span>Anasayfa</span>
        </div>
        <div class="menu-section__item">
          <ExploreIcon class="icon" />
          <span>Keşfet</span>
        </div>
        <div class="menu-section__item">
          <BellIcon class="icon" />
          <span>Bildirimler</span>
        </div>
        <div class="menu-section__item">
          <MessageIcon class="icon" />
          <span>Mesajlar</span>
        </div>
        <div class="menu-section__item">
          <FlagIcon class="icon" />
          <span>Yer İşaretleri</span>
        </div>
        <div class="menu-section__item">
          <ListIcon class="icon" />
          <span>Listeler</span>
        </div>
        <div class="menu-section__item">
          <UserIcon class="icon" />
          <span>Profil</span>
        </div>
        <div class="menu-section__item">
          <MoreIcon class="icon" />
          <span>Daha Fazla</span>
        </div>
      </div>
      <button>Tweetle</button>
    </div>
  </div>
</template>

<script>
import LogoIcon from "../assets/LogoIcon.vue";
import HomeIcon from "../assets/Home.vue";
import ExploreIcon from "../assets/Explore.vue";
import BellIcon from "../assets/Bell.vue";
import MessageIcon from "../assets/Message.vue";
import FlagIcon from "../assets/Flag.vue";
import ListIcon from "../assets/List.vue";
import UserIcon from "../assets/User.vue";
import MoreIcon from "../assets/More.vue";
export default {
  name: "MenuSection",
  components: {
    LogoIcon,
    HomeIcon,
    ExploreIcon,
    BellIcon,
    MessageIcon,
    FlagIcon,
    ListIcon,
    UserIcon,
    MoreIcon,
  },
};
</script>

<style scoped>
.menu-section {
  width: 275px;
  min-width: 275px;
  height: 100vh;
  padding-top: 5px;
}

.menu-section__items {
  display: flex;
  flex-direction: column;
}

.menu-section__item {
  width: min-content;
  padding: 15px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s;
  margin-left: -15px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.menu-section__item:hover {
  background: rgba(29, 161, 242, 0.1);
  color: #1fa1f1;
  fill: #1fa1f1;
}

.menu-section__item span {
  width: max-content;
}

.menu-section__item .icon {
  fill: #fff;
  width: 30px;
  margin-right: 20px;
}

.menu-section__item:hover > .icon {
  fill: #1fa1f1;
}

.menu-section__logo {
  fill: #fff;
  width: 30px;
  border-radius: 100%;
  padding: 8px;
  margin-left: -8px;
  cursor: pointer;
  transition: all 0.2s;
}

.menu-section__logo:hover {
  background: rgba(29, 161, 242, 0.1);
}

@media only screen and (max-width: 1250px) {
  .menu-section {
    width: 90px;
    min-width: 90px;
  }
}
</style>