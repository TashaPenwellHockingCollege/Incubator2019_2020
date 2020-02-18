<template>
    <div class="enviroments">
        <div class="enviroment-container">
            <ul class="enviroment-list">
                <!-- Enviroment Block -->
                <li v-for="(enviroment, index) in allEnviroments" :key="enviroment.id" class="enviroment">
                    <!-- Name and Carrot -->
                    <div class="enviroment-block" @click="enviroment.menuOpen = !enviroment.menuOpen">
                        <h2 class="enviroment-title">{{ enviroment.name }}</h2>
                        <span class="dropdown-arrow-container">
                            <svg :class="{ 'enviroment-options_active': enviroment.menuOpen}" class="enviroment-carrot"
                                viewBox="0 0 800 800" width="15" height="15" xmlns="http://www.w3.org/2000/svg"
                                fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">
                                <path d="M776 388a13 13 0 010 24L26 787a18 18 0 01-26-16V29a18 18 0 0126-16l750 375z" />
                            </svg>
                        </span>
                    </div>

                    <!-- Dropdown -->
                    <div class="enviroment-menu-wrapper" v-if="enviroment.menuOpen"
                        :class="{ 'enviroment-menu_show': enviroment.menuOpen}">
                        <span class="enviroment-delete">
                            <svg viewBox="0 0 800 800" width="30px" height="30px" xmlns="http://www.w3.org/2000/svg"
                                fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">
                                <path
                                    d="M133 711c0 49 40 89 89 89h356c49 0 89-40 89-89V178H133v533zM711 44H556L511 0H289l-45 44H89v89h622V44z" />
                            </svg>
                        </span>

                        <span class="enviroment-play" @click="linkToPlayer(index)">
                            <svg viewBox="0 0 800 800" width="30px" height="30px" xmlns="http://www.w3.org/2000/svg"
                                fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">
                                <path d="M800 400L0 800V0l800 400z" />
                            </svg>
                        </span>

                        <span class="enviroment-edit">
                            <svg viewBox="0 0 800 800" width="37px" height="37px" xmlns="http://www.w3.org/2000/svg"
                                fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">
                                <path
                                    d="M100 575v125h125l369-369-125-125-369 369zm590-340c13-13 13-34 0-47l-78-78a33 33 0 00-47 0l-61 61 125 125 61-61z"
                                    fill-rule="nonzero" />
                                <path fill="none" d="M0 0h800v800H0z" />
                            </svg>
                        </span>
                    </div>

                </li>

            </ul>
        </div>
        <button class="add-enviroment" @click="linkToAddEnviroment()">+</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
    export default {
        name: 'Enviroments',
        computed: mapGetters(['allEnviroments']),
        methods: {
            linkToPlayer(index) {
                this.$router.push({ path: `/player/${this.allEnviroments[index].name}/${index}` })
            },
            linkToAddEnviroment() {
                this.$router.push('add-enviroment')
            }
            //Mapping enviroment modules actions; would need imported with map getters
            // ...mapActions(["fetchEnviroments"])
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .enviroments {
        display: grid;
        grid-template-columns: 3vw 1fr 3vw;
        grid-template-rows: auto 60px;
        grid-row-gap: 20px;
    }

    .enviroment-container {
        grid-column: 2;
        padding-top: 5px;
    }

    .enviroment-list {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .enviroment {
        background-color: grey;        
        margin-top: 5px;
    }

    .enviroment-block {
        line-height: 7vh;
        display: grid;
        grid-template-columns: 1fr 20px;
        grid-template-rows: 7vh;
        /* gap between list items */
        cursor: pointer;
    }

    .enviroment-block>h2 {
        margin: 0;
        padding: 0;
        padding-left: 5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .dropdown-arrow-container {
        display: flex;
        align-items: center;
    }

    .enviroment-carrot {
        transform: rotate(0deg);
        transition: transform 0.1s linear;
    }


    /* Enviroment Menu */
    .enviroment-menu-wrapper {
        height: 0;
        grid-column: 1/3;
        background-color: white;
        display: grid;
        grid-template-columns: 1fr 2fr 2fr;
        transition: all 5s ease;
    }

    .enviroment-menu-wrapper>span {
        display: grid;
        height: 9vh;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .enviroment-delete {
        background-color: #bd2828;
    }

    .enviroment-play {
        background-color: #00c853;
    }

    .enviroment-edit {
        background-color: #29b6f6;
    }

    /* Button */
    .add-enviroment {
        width: 15vw;
        max-width: 100px;
        grid-column: 2;
        grid-row: 2;
        display: flex;
        justify-self: center;
        justify-content: center;
        align-items: center;
        border-style: none;
        border-radius: 30px;
        color: white;
        background-color: black;
        font-size: 2.6em;
        font-weight: 500;
    }

    /* Class bindings */
    .enviroment-options_active {
        transform: rotate(90deg);
        transition: transform 0.1s linear;
    }

    .enviroment-menu_show {
        height: 9vh;
        transition: all 1s ease;
    }

    /* css animations */
</style>