<template>
  <div class="menu-section">
    <div class="menu-section__wrapper">
      <logo-icon class="menu-section__logo" />
      <div class="menu-section__items">
        <div class="menu-section__item menu-section__item--active">
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
      <button class="menu-section__button">
        <span class="menu-section__button--lg">Tweetle</span>
        <span class="menu-section__button--sm">
          <NewTweetIcon class="menu-section__button-icon" />
        </span>
      </button>
    </div>
    <div class="menu-section__user">
      <div class="menu-section__user-icon"></div>
      <div class="menu-section__user-info">
        <input class="name user-input" v-model="name" />
        <input class="username user-input" v-model="username" />
      </div>
      <div class="menu-section__more"></div>
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
import NewTweetIcon from "../assets/NewTweet.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
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
    NewTweetIcon,
  },
  setup() {
    const store = useStore();

    const name = computed({
      get: () => store.state.user.name,
      set: (val) => {
        store.commit("SET_NAME", val);
      },
    });

    const username = computed({
      get: () => "@" + store.state.user.username,
      set: (val) => {
        store.commit("SET_USERNAME", val.substring(1));
      },
    });

    return {
      name,
      username,
    };
  },
};
</script>

<style scoped>
.menu-section {
  box-sizing: border-box;
  width: 275px;
  min-width: 275px;
  height: 100vh;
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.menu-section__items {
  display: flex;
  flex-direction: column;
}

.menu-section__item {
  width: min-content;
  padding: 10px 15px;
  margin: 5px 0 0 -15px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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

.menu-section__item--active {
  color: #1fa1f1;
}

.menu-section__item--active .icon {
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

.menu-section__button {
  width: 250px;
  padding: 15px 20px;
  background: #1fa1f1;
  border-radius: 50px;
  border: 0;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.2s;
}

.menu-section__button:hover {
  background: #097fc9;
}

.menu-section__button--sm {
  display: none;
}

.menu-section__user {
  width: 90%;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 50px;
  margin-bottom: 10px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
}

.menu-section__user:hover {
  background: rgba(29, 161, 242, 0.1);
}

.menu-section__user-icon {
  margin-right: 10px;
  width: 50px;
  min-width: 50px;
  height: 50px;
  min-height: 50px;
  border-radius: 100%;
  background: gray;
}

.menu-section__user-info {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  font-size: 1rem;
}

.menu-section__user-info .name {
  font-weight: 600;
  font-size: 1rem;
  color: #fff;
}

.menu-section__user-info .username {
  font-weight: 100;
  color: gray;
  font-size: 0.8rem;
}

.menu-section__user-info .user-input {
  background: transparent;
  border: 0;
}

.menu-section__user-info .user-input:focus {
  outline: none;
}

@media only screen and (max-width: 1250px) {
  .menu-section {
    width: 70px;
    min-width: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .menu-section__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .menu-section__items {
    align-items: center;
  }

  .menu-section__item {
    padding: 10px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu-section__item .icon {
    margin: 0;
  }

  .menu-section__item span {
    display: none;
  }

  .menu-section__button {
    width: 50px;
    height: 50px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
  }

  .menu-section__button:hover {
    background: rgba(29, 161, 242, 0.1);
  }

  .menu-section__button-icon {
    fill: #fff;
    width: 20px;
  }

  .menu-section__button--lg {
    display: none;
  }

  .menu-section__button--sm {
    display: flex;
  }

  .menu-section__user {
    padding: 0;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
  }

  .menu-section__user-info {
    display: none;
  }
  .menu-section__more {
    display: none;
  }

  .menu-section__user-icon {
    margin: 0;
    width: 40px;
    height: 40px;
  }
}
</style>