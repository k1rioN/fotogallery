<template>
  <div>
  <h1>{{ filmData }}</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        filmData: []
      }
    },
    async asyncData({params})  {
      const slug = params.slug 
      return { slug }
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify( this.slug )
      }
      const res = await fetch("http://localhost:3000/api/actors/currentfilm", this.requestOptions);
      filmData = await res.json();
    }
  }
</script>