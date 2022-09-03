<template>
  <div class="profile" v-if="user">
    <Sidebar>
      <sidebar-logo>
       <img :src="require('../../assets/admin.png')" alt="" srcset="" />
        <p>{{ user.firstName + " " + user.lastName }}</p>
        <p class="description">
          {{ user.position }}
        </p>
      </sidebar-logo>
      <sidebar-content>
        <ul class="menu">
          <Item class="is-active">
            <i class="far fa-address-card"></i> اطلاعات فردی
          </Item>
          <Item> <i class="fas fa-sitemap"></i> اطلاعات سازمانی </Item>
        </ul>
      </sidebar-content>
    </Sidebar>
    <Content>
      <template v-slot:profile>
        <nav>
          <router-link to="/">خانه</router-link>
          <i class="fa fa-angle-left" aria-hidden="true"></i>
          <router-link to="/users">کاربران</router-link>
          <i class="fa fa-angle-left" aria-hidden="true"></i>
          <router-link
            :to="{ name: 'profile', params: { id: $route.params.id } }"
            >{{ user.firstName + " " + user.lastName }}</router-link
          >
        </nav>
      </template>
      <div class="userInfo">
        <div>
          <label for="userName" style="margin-left: 5px">نام</label>
          <input
            type="text"
            name=""
            id="userName"
            v-model="userName"
            disabled=""
          />
        </div>
        <div>
          <label for="userFamily" style="margin-left: 5px">نام خانوادگی</label>
          <input
            type="text"
            name=""
            id="userFamily"
            v-model="userFamily"
            disabled=""
          />
        </div>
        <div>
          <label for="userAge" style="margin-left: 5px">سن</label>
          <input
            type="text"
            name=""
            id="userAge"
            v-model="userAge"
            disabled=""
          />
        </div>
        <div>
          <label for="userPosition" style="margin-left: 5px">سمت</label>
          <input
            type="text"
            name=""
            id="userPosition"
            v-model="userPosition"
            disabled=""
          />
        </div>
      </div>
    </Content>
  </div>
</template>

<script>
import Sidebar from "../../components/SidebarArticle.vue";
import Item from "../../components/MenuItem.vue";
import SidebarLogo from "@/components/SidebarLogo.vue";
import SidebarContent from "@/components/SidebarContent.vue";
import Content from "@/components/ContentArticle.vue";
export default {
  data() {
    return {
      user: null,
      userName: "",
      userFamily: "",
      userAge: "",
      userPosition: "",
    };
  },
  // props:['id','name','family','age','position'],
  components: {
    Sidebar,
    Item,
    SidebarLogo,
    SidebarContent,
    Content,
  },
  methods: {},
  mounted() {
    fetch("http://localhost:3000/users/" + this.$route.params.id)
      .then((res) => res.json())
      .then((data) => (this.user = data))
      .then(() => {
        this.userName = this.user.firstName;
        this.userFamily = this.user.lastName;
        this.userAge = this.user.age;
        this.userPosition = this.user.position;
      })
      .catch((error) => console.log(error.message));
  },
};
</script>

<style>
.profile {
  display: flex;
  height: 100vh;
}
.profile .content {
  width: 85%;
  padding: 20px 50px;
}
.profile .sidebar {
  width: 15%;
  box-shadow: 0px 10px 30px rgb(17 38 146 / 5%);
}
.profile .sidebar .sidebar__logo {
  font-family: "Kalame_SemiBold";
  font-weight: 600;
  margin-top: 20px;
}
.profile .sidebar img {
 width: 5rem;
    height: 5rem;
}
.profile .content .title {
  font-family: "Kalame_Bold";
  font-weight: 700;
  font-size: 2rem;
  margin: 0px;
  text-align: right;
}
.sidebar .description {
  font-family: "Kalame_Regular";
  font-weight: 400;
  color: rgb(138, 146, 166);
}
.userInfo {
  display: flex;
  margin-top: 87px;
  text-align: right;
}
.userInfo label {
  margin: 5px;
  font-family: "Kalame_Regular";
  font-weight: 600;
}
.userInfo input {
  font-family: "Kalame_Regular";
  font-weight: 400;
  border: 1px solid #b1b1b1;
  width: 80%;
  height: 44px;
  border-radius: 10px;
  padding: 5px;
  margin: 20px 0px 20px 20px;
}
</style>