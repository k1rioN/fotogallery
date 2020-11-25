<template>
  <div>
  <h1>{{ filmData }}</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        filmData: [],
      };
    },
    async oneFilm({params}) {
      const slug = params.slug
      const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug })
    };
      const res = await fetch("http://localhost:3000/api/actors/currentfilm", requestOptions)
      const filmData = await res.json();
      this.filmData = filmData;
    }
  }
</script>