<template>
    <div class="hero">
        <div> 
            <img :src="image" alt="image" />
        </div>
        <div>
            <p>Trending</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'FigmaprojectTexts',

    data() {
        return {
            image: '../images/lemon.png',
       
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<!-- <style scoped>
.hero{
   
}
</style> -->