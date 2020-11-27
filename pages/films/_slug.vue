<template>
  <div>
  
  </div>
</template>

<script>
  export default {
    data() {
      return{
        filmData: []
      }
    },
    async asyncData({ params, $http }) {
      const post = await $http.$get(`http://localhost:3000/api/actors/currentfilm/${params.slug}`)
      return { post }
    }
  }
</script>