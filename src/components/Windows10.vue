<template>
    <div class='windows10'>
        <div :style='lineStyle' class='line'>
            <div :style='circleStyle' id='circle' class='circle'></div>
        </div>
        <div :style='lineStyle' class='line'>
            <div :style='circleStyle' id='circle' class='circle'></div>
        </div>
        <div :style='lineStyle' class='line'>
            <div :style='circleStyle' id='circle' class='circle'></div>
        </div>
        <div :style='lineStyle' class='line'>
            <div :style='circleStyle' id='circle' class='circle'></div>
        </div>
        <div :style='lineStyle' class='line'>
            <div :style='circleStyle' id='circle' class='circle'></div>
        </div>
        <div :style='lineStyle' class='line'>
            <div :style='circleStyle' id='circle' class='circle'></div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.windows10 .line {
    animation: rotate 3.5s linear infinite;
}

.windows10 .line:nth-of-type(1) {
    animation-delay: 0.15s;
}

.windows10 .line:nth-of-type(2) {
    animation-delay: 0.3s;
}

.windows10 .line:nth-child(3) {
    animation-delay: 0.45s;
}

.windows10 .line:nth-child(4) {
    animation-delay: 0.6s;
}

.windows10 .line:nth-child(5) {
    animation-delay: 0.75s;
}

.windows10 .line:nth-child(6) {
    animation-delay: 0.9s;
}

.windows10 .circle {
    position: relative;
    border-radius: 50%;
}

@keyframes rotate {
    30% {
        transform: rotate(220deg);
    }
    40% {
        transform: rotate(450deg);
    }
    75% {
        transform: rotate(720deg);
        opacity: 1;
    }
    76% {
        opacity: 0;
    }
    100% {
        opacity: 0;
        transform: rotate(0deg);
    }
}
</style>

<script>
export default {
    name: 'Windows10',
    props: {
        color: {
            type: String,
            default: '#41B883'
        },
        radius: {
            type: Number,
            default: 20
        },
        size: {
            type: Number,
            default: 5
        }
    },
    computed: {
        lineStyle() {
            return {
                height: this.radius + 'px',
                width: '1px',
                position: 'absolute'
            };
        },

        circleStyle() {
            return {
                height: this.size + 'px',
                width: this.size + 'px',
                top: this.radius + 'px',
                'background-color': this.color
            };
        }
    }
};
</script>
