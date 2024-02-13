<template>
    <v-sheet class="bg-regular pa-12" rounded>
      <v-card class="mx-auto px-6 py-8" max-width="344">
        <v-form
          v-model="form"
          @submit.prevent="onSubmit"
        >


        <v-select
            v-model="lsection"
            :rules="[required]"
            :loading="loading"
            class="mb-2"
            label="Session section"
            :items="items"
            item-title="state"
            item-value="abbr"

          ></v-select>

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
  
          <v-btn
            :disabled="!form"
            :loading="loading"
            block
            color="vs"
            size="large"
            type="submit"
            variant="elevated"
            @click="$router.push('/'+lsection)"
          >
          <!-- lsection - почемц мы может вот так по-простому везде это использовать? потому что v-model?  -->
 Sign In as: {{login}}
          </v-btn>
          <br>
  
  <v-btn
    block
    color=""
    size="large"
    type="submit"
    variant="plain"
    @click="$router.push('/registration')"
  >
    Registration
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
    Forgot password
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