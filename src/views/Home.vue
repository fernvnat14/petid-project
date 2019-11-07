<template>
  <div class="home">
    <v-parallax dark height="470" src="../assets/cat.jpg" ></v-parallax>
    <Cover>
      <ListPet />
    </Cover>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Cover from "@/components/home/Cover.vue";
import ListPet from "@/components/home/ListPet.vue";

export default {
  name: "home",
  components: {
    // HelloWorld,
    Cover,
    ListPet
  }
};
</script>
