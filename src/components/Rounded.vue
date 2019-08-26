<template>
    <div class='rounded'>
        <div :style='cirlceStyle' class='circle'></div>
    </div>
</template>

<style lang='css' scoped>
.circle {
    animation: rotate 1s infinite linear;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>

<script>
export default {
    name: 'Rounded',
    props: {
        size: {
            type: Number,
            default: 5
        },
        radius: {
            type: Number,
            default: 20
        },
        color: {
            type: String,
            default: '#41B883'
        }
    },
    computed: {
        cirlceStyle() {
            return {
                height: this.radius + 'px',
                width: this.radius + 'px',
                border: this.size + 'px solid thistle',
                'border-top-color': this.color,
                'border-radius': '50%'
            };
        }
    }
};
</script>
