<template>
  <div>
    aa
    <ul v-if="getList">
      <li v-for="item in getList" :key="item.ID">
        {{item.title}}
        <p>{{item.content}}</p>
      </li>
    </ul>
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