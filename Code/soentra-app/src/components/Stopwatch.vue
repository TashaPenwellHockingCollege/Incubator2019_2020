<template>
    <div class="stopwatch-container">
        <h1 class="timer">{{ minutes }}:{{ seconds }}</h1>
        <span class="play-toggle" @click="playing = true, startWatch(), timerNew = false" v-if="timerNew">
            Start
        </span>
        <span class="play-toggle" @click="playing = !playing, $emit('pauseEnviroment')" v-if="playing">
            Pause
        </span>
        <span class="play-toggle" @click="playing = !playing, $emit('resumeEnviroment')" v-if="!playing && !timerNew">
            Resume
        </span>
        <span class="stop" @click="stopWatch()">
            Stop
        </span>
    </div>
</template>

<script>
    export default {
        name: 'Stopwatch',
        data() {
            return {
                timerNew: true,
                seconds: '00',
                minutesCounter: 0,
                minutes: '00',
                playing: false,
                watch: null
            }
        },
        methods: {
            startWatch() {
                let timing = 0;
                this.watch = setInterval(() => {
                    if (this.playing) {
                        timing++;
                        if (timing > 59) {
                            this.minutesCounting();
                            timing = 0;
                        }
                        this.seconds = this.secondsCounting(timing);
                    }
                }, 1000);
                this.$emit('startEnviroment');
            },

            secondsCounting(timing) {
                let timingString;
                timingString = timing.toString();
                if (timingString.length < 2) {
                    timingString = "0" + timingString;
                }
                return timingString;
            },

            minutesCounting() {
                let timingString;
                this.minutesCounter++;
                timingString = this.minutesCounter.toString();
                if (timingString.length < 2) {
                    timingString = "0" + timingString;
                }
                this.minutes = timingString;
            },

            stopWatch() {
                this.playing = false;
                this.timerNew = true;
                this.seconds = '00';
                this.minutes = '00';
                this.minutesCounter = 0;
                clearInterval(this.watch);
                this.$emit('stopEnviroment')
            }
        },
        beforeDestroy() {
            clearInterval(this.watch);
        }
    }
</script>
<style scoped>
    .stopwatch-container {
        display: grid;
        width: 70vw;
        max-width: 500px;
        height: 20vh;
        max-height: 300px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        background-color: black;
    }

    .timer {
        color: white;
        grid-column: 1/3;
        justify-self: center;
    }

    .stopwatch-container>span {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .play-toggle {
        background-color: orange;
    }

    .stop {
        background-color: brown;
    }
</style>