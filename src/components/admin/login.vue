<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
                <div class="flex-grow-1"></div>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <!-- <v-btn
                      :href="source"
                      icon
                      large
                      target="_blank"
                      v-on="on"
                    >
                      <v-icon>mdi-code-tags</v-icon>
                    </v-btn>-->
                  </template>
                  <span>Source</span>
                </v-tooltip>
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      icon
                      large
                      href="https://codepen.io/johnjleider/pen/pMvGQO"
                      target="_blank"
                      v-on="on"
                    >
                      <v-icon>mdi-codepen</v-icon>
                    </v-btn>
                  </template>
                  <span>Codepen</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="username"
                    :counter="5"
                    :rules="usernameRules"
                    label="Login"
                    name="login"
                    prepend-icon="person"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="primary" @click="login()">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  // props: {
  //   source: String,
  // },
  data: () => ({
    drawer: null,
    username: null,
    usernameRules: [
      v => !!v || "username is required",
      v => (v && v.length <= 5) || "username must be less than 5 characters"
    ],
    passwordRules: [v => !!v || "password is required"],
    password: null
  }),
  methods: {
    async login() {
      try {
        await this.$store.dispatch("login", {
        username: this.username,
        password: this.password
      });
      } catch (error) {
        console.error(error)
        return
      }
      //成功后执行的代码，放在这里不好使，action里抛错误了，这里依旧会执行！！
      localStorage.setItem('admin', JSON.stringify({
        'username': this.username,
        'status': "Online"
      }));
      this.$router.push({ path: "/list" });
    }
  }
};
</script>
