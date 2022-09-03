<template>
  <div class="users">
    <Sidebar>
      <sidebar-logo>
          <img :src="require('../../assets/users.png')" alt="" srcset="" />
        <p>مدیر سیستم</p>
      </sidebar-logo>
      <sidebar-content>
        <ul class="menu">
          <Item class="is-active">
            <i class="fas fa-users"></i>پروفایل کاربران
          </Item>
          <Item> <i class="fas fa-user-edit"></i>درخواست های کاربران </Item>
        </ul>
      </sidebar-content>
    </Sidebar>
    <Content>
      <template v-slot:users>
        <nav>
          <router-link to="/">خانه</router-link
          ><i class="fa fa-angle-left" aria-hidden="true"></i>
          <router-link to="/users">کاربران</router-link>
        </nav>
      </template>
      <p class="title">پروفایل کاربران</p>
      <p class="description">
        پروفایل تمامی کاربران سیستم در این قسمت قابل مشاهده است
      </p>

      <table id="usersTables" class="table dataTable" cellspacing="0">
        <thead id="usersTablesHeader">
          <tr>
            <th>نام و نام خانوادگی</th>
            <th>سمت</th>
            <th>پروفایل</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.firstName + " " + user.lastName }}</td>
            <td>{{ user.position }}</td>
            <td>
              <router-link
                :to="{
                  name: 'profile',
                  params: {
                    id: user.id,
                    name: user.firstName,
                    family: user.lastName,
                    age: user.age,
                    position: user.position,
                  },
                }"
              >
                <span
                  class="showProfile"
                  :usr_uid="user.id"
                  :position="user.position"
                  :fullname="user.firstName + ' ' + user.lastName"
                  :age="user.age"
                  >مشاهده</span
                >
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
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
      users: [],
    };
  },
  components: {
    Sidebar,
    Item,
    SidebarLogo,
    SidebarContent,
    Content,
  },
  mounted(){
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(data => this.users = data)
    .catch(error => console.log(error.message))
  }
};
</script>

<style>
.users {
  display: flex;
  height: 100vh;
}
.users .content {
  width: 85%;
  padding: 20px 50px;
}
.users .sidebar {
  width: 15%;
  box-shadow: 0px 10px 30px rgb(17 38 146 / 5%);
}
.users .sidebar .sidebar__logo {
  font-family: "Kalame_SemiBold";
  font-weight: 600;
  margin-top: 20px;
}
.users .content .title {
  font-family: "Kalame_Bold";
  font-weight: 700;
  font-size: 2rem;
  margin: 0px;
  text-align: right;
}
.users .content .description {
  font-family: "Kalame_Regular";
  font-weight: 400;
  color: rgb(138, 146, 166);
  text-align: right;
}
.menu {
  list-style: none;
  text-align: right;
  padding: 15px;
}
.menu .menu__item {
  font-family: "Kalame_SemiBold";
  font-weight: 600;
  color: #474747;
  margin: 20px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.menu .menu__item.is-active {
  background-color: #1e3e6f;
  border-radius: 5px;
  padding: 10px;
  color: #fff;
}
.menu .menu__item .fa-users,
.menu .menu__item .fa-user-edit,
.menu .menu__item .fa-address-card,
.menu .menu__item .fa-sitemap {
  font-size: 36px;
  margin-left: 15px;
}
#usersTables {
  width: 100%;
  border: 1px solid rgba(228, 228, 228, 0.43);
  background-color: #fff;
  box-shadow: 0px 10px 13px rgb(17 38 146 / 5%);
  border-radius: 8px;
  margin-top: 50px;
}
#usersTablesHeader {
  font-family: "Kalame_Bold";
  font-weight: 700;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: rgba(228, 228, 228, 0.43);
  height: 45px;
  color: #fff;
}
#usersTablesHeader th {
  font-weight: 800;
  color: rgb(71, 71, 71);
  width: 106px;
}
tbody td {
  font-family: "Kalame_Regular";
  font-weight: 400;
  font-weight: 500;
  height: 5px !important;
  padding: 22px 5px;
  text-align: center;
}
tbody td a {
  text-decoration: none;
}
tbody tr:nth-child(even) {
  background-color: rgba(228, 228, 228, 0.43);
}

.showProfile {
  background: #096dd9;
  border-radius: 10px;
  color: #fff;
  padding: 5px 13px;
  cursor: pointer;
}

</style>