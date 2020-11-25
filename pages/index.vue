<template>
<div class="container">
  <div class="films" >
    <ul>
      <li v-for="film in films" :key='actorLink(film)'>
        <a :href="actorLink(film)">
          {{film.data.title.Title}}
        </a>
      </li>
      <!--- <nuxt-link :to=`/films/${film.data.ref['@ref'].id}`  >
        {{film.data.title.Title}} <br>
      </nuxt-link>  --->
    </ul>
  </div>
</div>
</template>

<script>

export default {

    name: "app",
    methods: {
      actorLink(id) {
        // console.log('id :>> ', id.ref['@ref'].id);
        return `/films/${ id.ref['@ref'].id }`
      }
    },
    data() {
      return {
        films: [],
        id: ""
      };
    },

    async mounted() {
      const res = await fetch(
        "http://localhost:3000/api/actors/films"
      );
      const films = await res.json();
      this.films = films.data;
    },
    async getFilm(userId) {
      console.log(userId)
    }
   }

</script>

<style>

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
