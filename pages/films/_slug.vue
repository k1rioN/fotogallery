<template>
  <div>
  <h1>{{ filmData }}</h1>
  </div>
</template>

<script>
  export default {
    async asyncData({params})  {
      const slug = params.slug 
      return { 
        slug,
         filmData: [],
      }
      const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify( this.slug )
    }
      const res = await fetch("http://localhost:3000/api/actors/currentfilm", this.requestOptions);
      const filmData = await res.json();
      this.filmData = filmData;
    }
  }
</script>