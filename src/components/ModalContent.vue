<template>
  <div class="backdrop">
    <div class="modal" :class="{ dark: theme === 'dark' }">
      <span @click="closeModal">X</span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "description", "content", "theme"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
}
.modal {
  font-family: "Kalame_SemiBold";
  font-weight: 600;
  margin: 100px auto;
  padding: 10px;
  width: 369px;
  height: 58px;
  background-color: rgb(226, 65, 65);
  border-radius: 10px;
  position: relative;
  color: #fff;
}

.modal span {
  position: absolute;
  left: 12px;
  cursor: pointer;
}
</style>

