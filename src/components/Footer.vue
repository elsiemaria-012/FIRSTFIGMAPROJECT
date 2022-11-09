<template>
    <div>
        <footer>
           <div class="footerdetails">
            <div>
                <ul>
                   <l1 class="copyrightAndtext">
                      <img class="icon-logo" :src="whitelogo"/>
                      <h1 class="copyright">{{ copyright }}</h1>
                   </l1>
                </ul>
            </div>
               
            <div>
                <ul>
                   <li>
                       <div class="paragraph">
                         <li >Privacy Policy</li>
                         <li>Do not sell my personal info</li>
                         <li> Terms of Service nbcnews.com Site Map</li>
                       </div>
                    </li>
                </ul>
            </div>
                
            <div>
                <ul class="About">
                    <li>About</li> 
                    <li>Contact</li> 
                    <li>Careers</li> 
                    <li>Coupons</li>               
                </ul>
            </div>

            <div class="footer-img">
                 <img v-bind:src="footerimg" alt="social media icon">
                </div>
              
           </div>
        </footer>
    </div>
</template>

<script>
import footerimg from '../images/footerimg.png';
export default {
    name: 'FigmaprojectFooter',

    data() {
        return {
            whitelogo: require ('../images/whitelogo.png'), 
            copyright: 'copyright &copy; 2020  | NBC NEWS',
            footerimg
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
    footer{
    background: #0E1E32;
    padding: 6px;
    }

    .paragraph{
    margin-top: 80px;
    width: 221px;
    height: 116px;
    left: 772px;
    top: 2467px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 31px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    list-style: none;
    }

    .copyright{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    letter-spacing: 0.02em;
    color: #FFFFFF;

    }
    .icon-logo {  
     padding-top: 79px;
     padding-right: 448px;
     padding-right: 131;
    }

    .logoandcopyright {
    margin-left: 140px;
    margin-top: 50px;
    }
    .footerdetails{
        display: flex;
    }
    .About{
    margin-top: 80px;
    color: #FFFFFF;
    display: flex;
    font-family: Poppins;
    font-size: 15px;
    font-weight: 500;
    line-height: 31px;
    letter-spacing: 0.02em;
    text-align: center;
    list-style: none;
    gap: 30px;
    padding-left: 250px;
    }


.footer-img{
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-left: -18rem;
}


</style>