<template>
  <div class="sidebar">
    <SearchBar />
    <div class="sidebar__agenda">
      <div class="sidebar__title">Türkiye gündemleri</div>
      <div class="divider"></div>
      <template v-for="(agenda, index) in agendas" :key="agenda.id">
        <div class="subject">
          <span class="subtitle">{{ index + 1 }} * Gündemdekiler</span>
          <span class="title">{{ agenda.title }}</span>
          <span class="count">{{ agenda.count }}</span>
        </div>
        <div class="divider"></div>
      </template>
      <div class="sidebar__more">Daha fazla göster</div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import SearchBar from "./SearchBar.vue";
export default {
  name: "Sidebar",
  components: { SearchBar },
  setup() {
    const store = useStore();

    const agendas = computed(() => store.state.agendas.slice(0, 5));

    return {
      agendas,
    };
  },
};
</script>

<style scoped>
.sidebar {
  width: 350px;
  min-width: 350px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px 20px;
  box-sizing: border-box;
}

.divider {
  width: 100%;
  border-bottom: 1px solid gray;
}

.sidebar__agenda {
  width: 100%;
  height: 500px;
  border-radius: 20px;
  background: #192834;
  margin-top: 20px;
}

.sidebar__agenda .sidebar__title {
  margin: 15px 20px;
  font-weight: 600;
  font-size: 1.2rem;
}

.sidebar__agenda .subject {
  padding: 10px 15px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
}

.sidebar__agenda .subject:hover {
  background: #1f3141;
}

.sidebar__agenda .subject .subtitle {
  font-size: 0.8rem;
  color: gray;
}

.sidebar__agenda .subject .title {
  font-size: 1rem;
  color: #fff;
}

.sidebar__agenda .subject .count {
  font-size: 0.8rem;
  color: gray;
}

.sidebar__more {
  color: #1fa1f1;
  margin: 10px;
  cursor: pointer;
}

@media only screen and (max-width: 1100px) {
  .sidebar {
    display: none;
  }
}
</style>