<template>
  <div class="enviroment-player-container">
    <TopBar :msg="$route.params.enviroment"/>
    <div class="content-wrapper">
      
      <!-- Contains timer and controls that emit prompts for the audio function -->
      <Stopwatch 
      v-on:startEnviroment="playEnviroment()" 
      v-on:stopEnviroment="stopEnviroment()"
      v-on:pauseEnviroment="pauseEnviroment()"
      v-on:resumeEnviroment="resumeEnviroment()"/>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import TopBar from '@/components/TopBar.vue'
  import Stopwatch from '@/components/Stopwatch.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'Home',
    computed: mapGetters(['allEnviroments']),
    components: {
      TopBar,
      Stopwatch
    },
    data() {
      return {
        audio: [],
        enviroment: {}
      }
    },
    methods: {
      playEnviroment() {
        for (let sound in this.audio) {
          this.audio[sound].play()
        }
      },
      pauseEnviroment() {
        for (let sound in this.audio) {
          this.audio[sound].pause();
        }
      },
      resumeEnviroment() {
        for (let sound in this.audio) {
          this.audio[sound].play();
        }
      },
      stopEnviroment() {
        for (let sound in this.audio) {
          this.audio[sound].pause();
          this.audio[sound].currentTime = 0;
        }
      }
    },
    created() {
      this.enviroment = this.allEnviroments[this.$route.params.index];
      for (let sound in this.enviroment.sounds) {
        sound = this.enviroment.sounds[sound];
        console.log(sound.name);
        let currentSound = new Audio();
        currentSound.src = sound.src;
        this.audio.push(currentSound);
      }
    }
  }
</script>

<style scoped>
  .content-wrapper {
    display: flex;
    justify-content: center;
  }
</style>