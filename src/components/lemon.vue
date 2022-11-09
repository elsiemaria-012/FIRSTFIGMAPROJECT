<template>
    <div>
        <div class="hero">
           <div>
              <img v-bind:src="image2" alt="">
           </div>
          <div>
            <div class="trend">
                <h1 class="trending">Trending</h1>
                 <div class="vectors d-flex">
            
                    <!--<img src="../images/whitelove.jpg" alt='love'/>-->
                    <img v-bind:src="like" alt='like'/>
          
          
                    <img src="../images/arrowup.png" alt='up'/>
           
                    <img src="../images/arrowdown.png" alt='down'/>
                </div>
            </div>
            <div>
              <h2>Cake meme reflects coronavirus absurdity in a world where nothing is what it seems</h2>
              <p class="head-text">Earlier this month, a viral video depicting hyper-realistic cakes as everyday items had folks on social media double-guessing every other post, and sometimes even their own realities, effectively launching the next meme : “Is this real or is this cake?”</p>
            </div>

            <div class="hero-down">
                <p>2 hours ago</p>
                <p>By Lucy Hiddleston  |  4min read</p>
            </div>   
          </div>  
      </div>
      <div class="redline">
        <p class="break">Breaking News</p>
        <p class="kanye">Kanye West says he's running for president in 2020.</p>
      </div>
    </div>
   
</template>

<script>
import lemon from '../images/lemon.png'

export default {
    name: 'FigmaprojectLemon',

    data() {
        return {
           image2: lemon,
           like: require('../images/like.jpg'), 
           vector2: require('../images/arrowup.png'), 
           vector3: require('../images/arrowdown.png'), 
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
.hero{
    padding: 2rem 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    
}

.hero-section{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
}

.trending{
    margin-left: -61px;
    color: #C31518;
}

.trend{
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 60px;
    
}

h2{
    font-family: 'IBM Plex Serif';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    Size: 32px;
    Line-height: 41.6px;

color: #2A2A2A;
}

.head-text{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    

color: #2A2A2A;

}

.hero-down{
    display: flex;
    align-items: center;
    gap: 60px;

}

.redline {
    background-color: #C31518;
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 1rem;
    gap: 30px;
    width: 90%;
    margin-left: 3rem;

}

.break{
    color: #C31518;
    background-color: #fff;
    padding: 1rem;
}
.kanye{
    color: #fff;
}

.vector-icons{
    height: 16px;
width: 18px;
left: 1561px;
top: 204px;
border-radius: 0px;
gap: 40px;



}

.vectors img{
    display: flex;
    margin: 0 15px;
}

</style>