<template>
  <div class="card">
    <div v-if="cardImage" class="card-image">
      <figure class="image">
        <img :src="cardImage" :alt="cardImageAlt">
      </figure>
    </div>
    <div class="card-content">
      <div v-if="cardMedia || cardTitle || cardSubTitle" class="media">
        <div v-if="cardMedia" class="media-left">
          <figure class="image">
            <img :src="cardMedia" :alt="cardMediaAlt">
          </figure>
        </div>
        <div v-if="cardTitle || cardSubTitle" class="media-content">
          <p v-if="cardTitle" class="title is-4">{{ cardTitle }}</p>
          <p v-if="cardSubTitle" class="subtitle is-6">{{ cardSubTitle }}</p>
        </div>
      </div>

      <div v-if="cardContent" class="content">
        {{ cardContent }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    cardImage: {
      type: String,
    },
    cardMedia: {
      type: String,
    },
    cardTitle: {
      type: String,
    },
    cardSubTitle: {
      type: String,
    },
    cardContent: {
      type: String,
    },
  }
}
</script>
