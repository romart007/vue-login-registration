<template>
  <div class="bg-gray-500 px-10 py-4 text-white">
    <div>
      <ul class="space-x-4">
        <div class="flex w-full space-x-4 justify-between">
          <div class="flex w-full space-x-4 justify-end">
            <li v-if="!isLoggedIn" class="space-x-4 text-base">
              <router-link :to="{ name: 'Login' }">Login</router-link>
            </li>

            <li v-if="!isLoggedIn" class="space-x-4 text-base">
              <router-link :to="{ name: 'Register' }">Register</router-link>
            </li>

            <li
              v-if="isLoggedIn"
              class="space-x-4 text-base flex items-center space-x-4"
            >
              <div>
                Welcome<span class="ml-1 capitalize">{{ isUserName }}</span
                >!
              </div>
              <div @click="logout" class="cursor-pointer block">Logout</div>
            </li>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("auth", ["isLoggedIn", "isUserName"]),
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout").then(
        () => {
          localStorage.removeItem("token");
          this.$router.push("/login");
        },
        (error) => {
          console.log(error.response.data.message, "error");
        }
      );
    },
  },
  created() {
    if (!this.isLogin) {
      this.$router.push("/login").catch(() => {});
    }
  },
};
</script>