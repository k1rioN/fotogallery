<template>
  <div>
    {{ films }}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  // eslint-disable-next-line require-await
  async asyncData({ params }) {
    const slug = params.slug
    return {
      slug,
      films: [],
    }
  },
  async created() {
    const response = await axios.post(
      'http://localhost:3000/api/actors/current_film',
      this.slug
    )
    this.films = response
  },
}
</script>
