import Vue from 'vue';

// Components
import Bar from './Bar.vue';
import Rounded from './Rounded.vue';
import Windows10 from './Windows10.vue';
import Windows8 from './Windows8.vue';
import CircleFlip from './CircleFlip.vue';

const Components = {
    Bar,
    Rounded,
    Windows10,
    Windows8,
    CircleFlip
};

Object.keys(Components).forEach(key => {
    Vue.component(key, Components[key]);
});

export default Components;