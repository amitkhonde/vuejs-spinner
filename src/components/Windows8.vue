<template>
    <div class='windows8'>
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
.windows8 {
    width: 100%;
}

.windows8 .line {
    animation: slide 3s infinite;
}

.windows8 .circle {
    background-color: #0078d7;
}

.windows8 .line:nth-of-type(1) {
    animation-delay: 0.15s;
}

.windows8 .line:nth-of-type(2) {
    animation-delay: 0.3s;
}

.windows8 .line:nth-of-type(3) {
    animation-delay: 0.45s;
}

.windows8 .line:nth-of-type(4) {
    animation-delay: 0.6s;
}

@keyframes slide {
    0% {
        transform: translateX(-1%);
    }

    49% {
        transform: translateX(49%);
    }

    50% {
        transform: translateX(50%);
    }

    51% {
        transform: translateX(51%);
    }

    52% {
        transform: translateX(52%);
    }

    53% {
        transform: translateX(53%);
    }

    54% {
        transform: translateX(54%);
    }

    100% {
        transform: translateX(110%);
    }
}
</style>

<script>
export default {
    name: 'Windows8',
    props: {
        color: {
            type: String,
            default: '#41B883'
        },
        size: {
            type: Number,
            default: 5
        }
    },
    computed: {
        lineStyle() {
            return {
                height: '10px',
                width: '100%',
                position: 'absolute'
            };
        },

        circleStyle() {
            return {
                height: this.size + 'px',
                width: this.size + 'px',
                'background-color': this.color,
                position: 'relative',
                borderRadius: '50%'
            };
        }
    }
};
</script>
