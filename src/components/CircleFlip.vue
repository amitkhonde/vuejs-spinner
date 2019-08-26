<template>
    <div class='circle-flip'>
        <div :style='circleStyle' class='circle'></div>
    </div>
</template>

<style lang="css" scoped>
.circle {
    animation: spin 1s infinite linear;
}

@keyframes spin {
    0% {
        transform: rotateY(0deg);
    }

    100% {
        transform: rotateY(360deg);
    }
}
</style>

<script>
export default {
    name: 'CircleFlip',
    props: {
        color: {
            type: String,
            default: '#41B883'
        },
        size: {
            type: Number,
            default: 20
        }
    },
    computed: {
        circleStyle() {
            return {
                'background-color': this.color,
                height: this.size + 'px',
                width: this.size + 'px',
                'border-radius': '50%'
            };
        }
    }
};
</script>
