<template>

  <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular
        indeterminate
        :size="150"
        :width="8"
        color="green">
      </v-progress-circular>
    </div>
  </v-container>

  <v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-flex xs4
        v-for="(item, index) in wholeResponse"
        :key="index"
        mb-2>
        <v-card>
          <v-img
            :src="item.pic_url"
            aspect-ratio="1"
          >
          <span class="my-span">
              {{item.post_type}}
            </span>
          </v-img>

          <v-card-title primary-title>
            <div>
              <h2>{{item.topic}}</h2>
              <div>Type: {{item.pet_type}}</div>
              <div>Gender: {{item.gender}}</div>
              <div>Province: {{item.province}}</div>
              <div>Missing/Found Date: {{item.missing_found_date}}</div>
            </div>
          </v-card-title>

          <v-card-actions class="justify-center">
            <v-btn flat
              color="green"
              @click="singleMovie(item.id)"
              >More Detail</v-btn>
          </v-card-actions>

        </v-card>
      </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      wholeResponse: [],
      loading: true
    }
  },
  mounted () {
  axios
    .get('http://127.0.0.1:5000/lost-found-pets')
    .then(response => {
      this.wholeResponse = response.data
      this.loading = false
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>

<style lang="scss" scoped>
  .my-span {
  background-color: blue;
  color: white;
  font-weight: bold;
  margin-right: 0;
  float: right;
}
</style>