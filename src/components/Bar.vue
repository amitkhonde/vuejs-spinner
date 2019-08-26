<template>
    <div class='bars'>
        <div :style='barStyle' class='bar'></div>
        <div :style='barStyle' class='bar'></div>
        <div :style='barStyle' class='bar'></div>
    </div>
</template>

<style lang="css" scoped>
.bar {
    animation: load 1s infinite;
}

.bars .bar:nth-of-type(1) {
    animation-delay: 0s;
}

.bars .bar:nth-of-type(2) {
    animation-delay: 200ms;
}

.bars .bar:nth-of-type(3) {
    animation-delay: 400ms;
}

@keyframes load {
    0% {
        transform: scaleY(1);
    }

    50% {
        transform: scaleY(1.4);
    }

    100% {
        transform: scaleY(1);
    }
}
</style>

<script>
export default {
    name: 'Bar',
    props: {
        color: {
            type: String,
            default: '#41B883'
        },
        height: {
            type: Number,
            default: 20
        },
        width: {
            type: Number,
            default: 5
        }
    },
    computed: {
        barStyle() {
            return {
                'background-color': this.color,
                height: this.height + 'px',
                width: this.width + 'px',
                display: 'inline-block',
                margin: '3px'
            };
        }
    }
};
</script>
