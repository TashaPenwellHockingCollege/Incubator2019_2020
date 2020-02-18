const state = {
    enviroments: [
        //Initial Example Enviroment
        {
            name: 'Example Enviroment',
            menuOpen: false,
            sounds: [
                {
                    name: 'City Ambience 1',
                    type: 'Enviroment',
                    src: require('../../../public/assets/sounds/City+Ambience+2.59 (1)-1.mp3')
                },
                {
                    name: 'Female Yelling',
                    type: 'Talking',
                    src: require('../../../public/assets/sounds/Female+Exclamations+.22.mp3')
                }
            ]
        },
        {
            name: 'Test Enviroment',
            menuOpen: false,
            sounds: [
                {
                    name: 'Rifle Gun Shots',
                    type: 'Enviroment',
                    src: require('../../../public/assets/sounds/M1+Garand+Gun.mp3')
                },
                {
                    name: 'Male Yelling',
                    type: 'Talking',
                    src: require('../../../public/assets/sounds/Male+Exclamations+.12.mp3')
                },
                {
                    name: 'Male Suicide',
                    type: 'Talking',
                    src: require('../../../public/assets/sounds/Male+Suicide+1.20.mp3')
                }
            ]
        },
        {
            name: 'Another One',
            menuOpen: false,
            sounds: [
                {
                    name: 'Rifle Gun Shots',
                    type: 'Enviroment',
                    src: require('../../../public/assets/sounds/M1+Garand+Gun.mp3')
                },
                {
                    name: 'Male Yelling',
                    type: 'Talking',
                    src: require('../../../public/assets/sounds/Male+Exclamations+.12.mp3')
                },
                {
                    name: 'Male Suicide',
                    type: 'Talking',
                    src: require('../../../public/assets/sounds/Male+Suicide+1.20.mp3')
                }
            ]
        },
    ]
};

const getters = {
    allEnviroments: (state) => state.enviroments
};

const actions = {
    //Example action of axios api request
    // async fetchEnviroments({ commit }) {
    //     const response = await axios.get(
    //         'url'
    //     );
    //
    //  commit('setEnviroments', response.data)
    // }
};

const mutations = {
    //Example mutation setting the example action
    // setEnviroments: (state, enviroments) => (state.enviroments = enviroments)
};

export default {
    state,
    getters,
    actions,
    mutations
}