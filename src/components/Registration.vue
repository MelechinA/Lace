<template>
    <v-sheet class="bg-green pa-12" rounded>
      <v-card class="mx-auto px-6 py-8" max-width="344">
        <v-form
          v-model="form"
          @submit.prevent="onSubmit"
        >

          <v-text-field
            v-model="login"
            :readonly="loading"
            :rules="[required]"
            class="mb-2"
            clearable
            label="Login"
          ></v-text-field>
  
          <v-text-field
            v-model="password"
            :readonly="loading"
            :rules="[required]"
            clearable
            label="Password"
            placeholder="Enter your password"
          ></v-text-field>

          <v-text-field
        v-model="flname"
        :readonly="loading"
            :rules="[required]"
                label="First and Last name"
                placeholder="Enter your First and Last name"
      ></v-text-field>

      <v-text-field
        v-model="email"
        :readonly="loading"
            :rules="[required]"
        label="Email"
        placeholder="Enter your email"
      ></v-text-field>



  
          <v-btn
            :disabled="!form"
            :loading="loading"
            block
            color="pink"
            size="large"
            type="submit"
            variant="elevated"
            @click="$router.push('/login')"
          >
 Register as: {{login}}
          </v-btn>
          <br>
  
  <v-btn
    block
    color=""
    size="large"
    type="submit"
    variant="plain"
    @click="$router.push('/contacts')"
  >
    Any questions
  </v-btn>

 
        </v-form>
      </v-card>
    </v-sheet>
  </template>
  <script>
    export default {
      data: () => ({
        form: false,
        login: null,
        password: null,
        email: null,
        flname: null,
        loading: false,

        lsection: { state: null, abbr: null },
        items: [
          { state: 'Lichens', abbr: 'lichens' },
          { state: 'Cyano', abbr: 'cyano' },
          { state: 'Hepatics', abbr: 'hepatics' },
          { state: 'Moss', abbr: 'moss' },
          { state: 'Fish', abbr: 'fish' },
        ],


        gotousersection: null,
      }),
  
      methods: {
        onSubmit () {
          if (!this.form) return
  
          this.loading = true
  
          setTimeout(() => (this.loading = false), 2000)
        },
        required (v) {
          return !!v || 'Field is required'
        },
/*        userSettings(lsection){
            this.login = login;
            this.lsection = lsection;
            this.gotousersection = $router.push('/lichens');
            return gotousersection;
            */
            // чет я туплю - где и как активировать userSettings и как login передать дальше?
            // lsection - получить из таблицы Юзеры (по имени юзера).
            //надо их засунуть в vuex, чтобы не пробрасывать потом по всем компонентам
 //       }
      },
    }
  </script>