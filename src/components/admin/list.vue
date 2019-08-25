<template>
  <div>
    <ul v-if="getList">
      <li v-for="item in getList" :key="item.ID">
          <router-link :to="{ path: 'listitem', query: { id: item.ID}}">
            {{item.title}}
          </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  mounted(){
    this.$store.dispatch('getList','JS')
  },
  methods: {
    changeData(value, render) {
      // console.log(render);
    },
    
  },
  computed: {
    getList() {
      return this.$store.state.list
    }
  }
};
</script>