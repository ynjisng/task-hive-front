<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Pagina Inicial',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Usuario',
          to: '/usuario',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Papeis',
          to: '/papeis',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Projetos',
          to: '/projetos',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Tarefas',
          to: '/tarefas',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Arquivo',
          to: '/arquivo',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Lixeira',
          to: '/lixeira',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Relatórios',
          to: '/relatorios',
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'TASKHIVE - Gerenciador de Tarefas',
    }
  },
}
</script>
