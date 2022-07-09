<template>
  <div
      v-if="movie"
      class="movie-detail"
  >
    <h2>{{movie.Title}}</h2>
    <p>{{ movie.Year }}</p>
    <img :src="movie.Poster" alt="Movie Poster" class="featured-img" />
    <p>{{ movie.Plot }}</p>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router/dist/vue-router";

export default {
  name: "MovieDetails",
  setup() {
    const movie = ref(null);
    const route = useRoute();

    onMounted(() => {
      fetch(`http://www.omdbapi.com/?apikey=b4ae785f&i=${route.params.id}&plot=full`)
          .then(response => response.json())
          .then(data => {
            movie.value = data;
          });
    })

    return {
      movie
    }
  }
}
</script>

<style lang="scss">
.movie-detail {
  padding: 16px;
  h2 {
    color: #FFF;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 16px;
  }
  .featured-img {
    display: block;
    max-width: 200px;
    margin-bottom: 16px;
  }
  p {
    color: #FFF;
    font-size: 18px;
    line-height: 1.4;
  }
}
</style>