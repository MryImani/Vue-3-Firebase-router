<template>
  <form class="form">
    <slot></slot>
  </form>
</template>

<script>
export default {};
</script>

<style>
@font-face {
  font-family: "Kalame_Bold";
  font-weight: 700;
  src: url(@/assets/fonts/Kalameh-Bold.ttf);
}

@font-face {
  font-family: "Kalame_SemiBold";
  font-weight: 600;
  src: url(@/assets/fonts/Kalameh-SemiBold.ttf);
}

@font-face {
  font-family: "Kalame_Regular";
  font-weight: 400;
  src: url(@/assets/fonts/Kalameh-Regular.ttf);
}
.form {
  width: 20%;
  margin: 200px auto;
  background: #fafbfc;
  box-shadow: 0px 8px 16px rgba(32, 48, 64, 0.15);
  border-radius: 12px;
  padding: 3.187rem 3.687rem;
}
.form .form__title {
  font-family: "Kalame_SemiBold";
  font-weight: 700;
  color: #243447;
  text-align: center;
}

.form .form__input {
  font-family: "Kalame_Regular";
  font-weight: 400;
  font-size: 0.9rem;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 2px 0px #406080;
  border-radius: 2px;
  padding: 7px 15px;
  width: 100%;
  color: #243447;
  display: block;
  box-sizing: border-box;
  text-align: right;
}
.form .form__button {
  font-family: "Kalame_SemiBold";
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.5rem 1.5rem;
  width: 10.43rem;
  height: 2.87rem;
  background: #208bee;
  border-radius: 0.25rem;
  margin: 2.25rem 0 0;
  border: none;
  cursor: pointer;
  color: #fff;
}
</style>