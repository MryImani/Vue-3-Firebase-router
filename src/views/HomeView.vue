<template>
  <div class="home">
    <Form>
      <h3 class="form__title">ورود</h3>
    <input
      class="form__input"
      type="text"
      name=""
      ref="userName"
      required
      placeholder="نام کاربری خود را وارد کنید" v-model="userName"
    />
    <button class="form__button" type="button" @click="login">ورود</button>
  </Form>
  <template v-if="showModal">
   <Modal @close="login">
      <p>نام کاربری مدیر سیستم به درستی وارد نشده است</p>
   </Modal>
  </template>
  </div>
</template>

<script>

import Form from '@/components/form-login.vue'
import Modal from '@/components/ModalContent.vue'

export default {
  name: 'HomeView',
  components: {
      Form,
      Modal
  },
    data(){
        return {
            userName : '',
            athenticated : false,
            showModal :false
        }
    },
    methods:{
        login(){
        const userToken=localStorage.getItem("userToken");
        if(userToken === this.userName)
         {
            this.athenticated = true;
            this.$router.push({name:'users',replace:true});
         }
         else{
          this.showModal = !this.showModal;
          this.$refs.userName.value= '';
         }
        }
    }
}
</script>
