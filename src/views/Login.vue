<template>
  <div class="login">
    <div class="login__wrapper">
      <LogoIcon class="login__icon" />
      <label>Twitter'a giriş yap</label>
      <input
        type="text"
        placeholder="Telefon, e-posta veya kullanıcı adı"
        class="login__input"
        v-model="username"
      />
      <input
        type="text"
        placeholder="Parola"
        class="login__input"
        v-model="password"
      />
      <CustomButton class="login__button" @click="login"
        >Giriş Yap</CustomButton
      >
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import CustomButton from "../components/CustomButton.vue";
import LogoIcon from "../assets/LogoIcon.vue";
import { ref } from "@vue/reactivity";
export default {
  name: "Login",
  components: { LogoIcon, CustomButton },
  setup() {
    const store = useStore();
    const router = useRouter();

    const username = ref("");
    const password = ref("");

    function login() {
      store.commit("LOGIN", username.value);
      router.push({ name: "Home" });
    }

    return {
      username,
      password,
      login,
    };
  },
};
</script>

<style scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding-top: 20px;
}
.login__wrapper {
  width: 300px;
  display: flex;
  flex-direction: column;
}
.login__wrapper label {
  font-size: 1.7rem;
  font-weight: 600;
  margin-top: 20px;
}
.login__input {
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  background: transparent;
  border: 1px solid #fff;
  margin-top: 40px;
  padding: 25px 15px;
  border-radius: 5px;
  color: #fff;
}
.login__input:focus {
  outline: none;
  border: 1px solid #1fa1f1;
}
.login__input:focus::placeholder {
  color: #1fa1f1;
}
.login__icon {
  fill: #fff;
  width: 40px;
}
.login__button {
  width: 100%;
  margin-top: 50px;
}
</style>