<template>
    <div>
        <header>
            <div>
            <img src="../images/NBCLOGO.png" alt='nbclogo'/>
            </div>
            
           
            <ul id="navbar">             
                <li class="corodaupdate"><img class="checkboximg" src="../images/Checkbox.png" alt='Checkbox'/>corona update</li>
                <li>politics</li>
                <li>sport</li>
                <li>entertainment</li>
                <li>business</li>                           
            </ul>
           

            <div class="icons">
                <img v-bind:src="search" alt='search'/>
                <img v-bind:src="averter" alt='averter'/>
                <img v-bind:src="handbugger" alt='handbugger'/>
            </div>
        </header>
    </div>
</template>

<script>
import checkbox from '../images/averter.png';
import averter from '../images/averter.png';
import doublefoward from '../images/doublefoward.png';
import search from '../images/search.png';
import handbugger from '../images/handbugger.png'

export default {
    name: 'FigmaprojectNavigationbar',

    data() {
        return {
            checkbox,
            averter,
            doublefoward,
            search,
            handbugger
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>
  
<style scoped>

.checkboximg{
    padding-right: 4px;
}
   header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2.5rem;
    padding-top: 14px;
    backdrop-filter: blur(14px);
    margin-bottom: 10px;
    

   }
   #navbar {
    display: flex;
    gap: 90.6px;
    list-style: none;
    flex: 1.5;
    justify-content: center;
   
   }
   .topbar {
    display: flex;
   }
   .icons {
    display: flex;
    align-items: center;
    gap: 40px;
   }
   #navbar li{
    text-decoration: none;
    text-transform: capitalize;
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    backdrop-filter: blur(14px); 
   }
   
</style>