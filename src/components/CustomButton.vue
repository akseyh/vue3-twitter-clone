<template>
  <button
    class="custom-button"
    :class="{ 'custom-button--disabled': disabled }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.custom-button {
  background: #1fa1f1;
  border: 0;
  border-radius: 50px;
  padding: 10px 20px;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  margin-left: auto;
  cursor: pointer;
}
.custom-button--disabled {
  background: #1f618d;
  color: #8a8f94;
  cursor: default;
}
</style>