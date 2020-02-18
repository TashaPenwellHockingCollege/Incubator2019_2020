<template>
    <div class="add-enviroment-container">
        <TopBar msg="Add Sounds" />
        <SoundList/>
    </div>
</template>

<script>
    import TopBar from '@/components/TopBar.vue'
    import SoundList from '@/components/SoundList.vue'
    export default {
        name: 'AddEnviroment',
        components: {
            TopBar,
            SoundList
        },
        data() {
            let enviromentScaffold = {
                name: '',
                menuOpen: false,
                sounds: [{
                    name: '',
                    type: '',
                    src: null
                }]
            }
            return {
                enviromentScaffold
            }
        }
    }
</script>