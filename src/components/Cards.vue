<template>
    <div>
    <section class="topbar">
        
    <div class="left-section">
    
        <div class="topdiv">
            
            <div class="cards">
                <p>Latest Stories</p>
                <p>Think</p>
                <p>Health</p>
            </div>

            <div>
                <img class="cardicons" :src="cardicons"/>
            </div>             
            </div>
       
         <!-- BLOGS -->

        <div class="image-card">
            <article v-for="blog in blogs" :key="blog" class="card-details">
                <img class="man-img" :src="blog.man" alt="">
                <div class="content">
                    <h1 class="text1">{{ blog.title }}</h1>
                    <p class="text2">{{ blog.content }}</p>
                    <div class="hero-down">
                        <p class="hours">{{ blog.time }}</p>
                        <p class="lucy">{{ blog.author}} | 4 min read</p>
                    </div>
                    <hr>
                    <div class="d-flex justify-content-center news-bottom" >
                        <img :src="like" alt=""><span class="txt">24</span>
                        <img :src="save" alt=""><span class="txt">72</span>
                        <img :src="share" alt="">
                    </div>
                </div>
            </article>
        </div>
        
                       <!-- MORE BUTTON -->
        
        <div class="moreBtn text-center">
            <p v-on:click.prevent="post">View more</p>
        </div>


    </div>


                     <!--HART MAN AND FORM -->

    <div class="right-section mx-5">
        <img class="right-section-image" src="../images/hatman.png">
        <!-- <p>Beloved Arizona coach loses battle with coronavirus</p> -->
        <h5 class="locationTitle">{{ Title }}</h5>
        <h6 class="locationNews">Location news</h6>
        <div class="locationWrapper px-3">  
            <p class="pt-4">Get Location specific News</p>
            <input class="input px-4" type="text" placeholder="Enter Your Location">
            <div class="btn-form mt-3">
                <button class="SubmitLocation" v-on:click="Submit" >Submit</button>
            </div>
        </div>
    </div>

                      <!--STAR IMG-->
    </section>
    <div class="editorand-starimage">
            <h6 class="editors-Picks">Editor’s Picks</h6><img class="star-icon" :src="starvector" />
    </div>

                   <!-- BLOG 2 -->

    <div class="bottomcontainer">
    <div v-for="item in items" :key="item" class="">
        <div class="coronaimage-texts">
        <img :src="item.corona" alt="coronaimage" />
        <div class="texts">
            <h6 class="headersix">{{item.title}}</h6>
            <p class="paragraph">{{item.content}}</p>
        </div>
        
        </div>
    </div>
    </div>
</div>
    
</template>

<script>
// import { title } from 'process';

export default {
    name: 'FigmaprojectCards',

    data() {
        return {
            manupvector2: require ('../images/manupvector2.png'), 
            manupvector: require ('../images/manupvector.png'),
            Checkbox:  require ('../images/Checkbox.png'),
            man: require ('../images/man.png'),
            like: require ('../images/lovevector.png'),
            share: require('../images/arrowup.png'),
            save: require('../images/arrowdown.png'),
            hatman: require ('../images/hatman.png'),
            horse: require ('../images/horse.png'),
            tornado: require ('../images/tornado.png'),
            computer: require ('../images/computer.png'),
            cardicons: require ('../images/cardicons.png'),
            Title: 'Beloved Arizona coach loses battle with coronavirus',
            starvector: require ('../images/starvector.png'),
            coronaimage: require ('../images/coronaimage.png'),
            footballaward: require ('../images/footballaward.png'),

            
           

            blogs:[
                {man: require ('../images/man.png'), title: 'John Lewis to make final journey across Edmund Pettus Bridge in procession', content: 'The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.', time: '2 hours ago', author: 'By Lucy Hiddleston'},
                {man: require ('../images/horse.png'), title: 'John Lewis, civil rights giant, crosses infamous Selma bridge one final time', content: 'TSolemn crowds watch as Lewis, who died earlier this month at the age of 80, is borne by caisson over Edmund Pettus Bridge', time: '2 hours ago', author: 'By Caroline Casey'},
                {man: require ('../images/tornado.png'), title: 'Tornado and tide warnings as Storm Hanna lashes Texas', content: 'The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.', time: '5 hours ago', author: 'By Lucy Hiddleston '},
                {man: require ('../images/computer.png'), title: '20 Years Ago, Steve Jobs Built the ‘Coolest Computer Ever.’ It Bombed', content: 'This month marks the 20th anniversary of the Power Mac G4 Cube, which debuted July 19, 2000. It also marks the 19th anniversary of Apple’s announcement that it was putting the Cube on ice.',time: '12 hours ago',  author: 'By Lucy Hiddleston '},
            ],
                items:[
                {corona: require ('../images/coronaimage.png'), title: 'Serological surveys are being conducted to test for coronavirus antibodies. How useful are they?', content: 'The authorities are hoping to find that a substantial proportion of the population has already been infected with the virus – and so is immune.'},

                {corona: require ('../images/footballaward.png'), title: 'Serological surveys are being conducted to test for coronavirus antibodies. How useful are they?', content: 'The authorities are hoping to find that a substantial proportion of the population has already been infected with the virus – and so is immune.'},
                ]

        };
    },
    

    mounted() {
        
    },

    methods: {
        post: function(){
            this.$http.post('https://jsonplaceholder.typicode.com/todos/1/posts' )
        }
    },
};
</script>

<style scoped>

.topdiv {

    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    margin-top: 15px;
    margin-bottom: 10px;
    height: 54px;
    
    
}
.image-card{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

}
.cards{
    display: flex;
    align-items: center;
    gap: 60px;
    align-items: center;
    padding: 1rem;
    margin-left: 1rem;  
    left: 292px;
    margin-top: 15px;
}

.man-img{
    width: 100%;
}

.text1 {
font-family: IBM Plex Serif;
font-size: 18px;
font-weight: 600;
line-height: 27px;
letter-spacing: 0em;
text-align: left;

}
.text2 {
font-family: Nunito Sans;
font-size: 15px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
}

.hero-down{
    display: flex;
    align-items: center;
    gap: 60px;
 
}
.hours{
width: 94px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 13px;
color: #2A2A2A;
}

.lucy{
width: 210px;
height: 20px;
left: 405px;
top: 1267px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 165%;
color: #2A2A2A;
opacity: 0.7;
}

.topbar{
    display: flex;
    gap: 74x;   

}

.left-section{
    flex: 2.5;
    padding-left: 50px;
}
.right-section{
    flex: 1;
}

.news-bottom{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
}

.love, .arrowup {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 25px;

}

.arrowdown{
    margin-top: -40px;
    display: flex;
    margin-bottom: -15px;
    
 }


.card-details{
    margin-bottom: 10px;
    box-shadow: 0px 2px 14px rgba(42, 42, 42, 0.24);
    border-radius: 3px;
    background-color: #FFFFFF;

}

.content{
    padding: 12px 24px;
    background-color: #FFFFFF;
}

.iconimage {
    height: 16px;
    width: 16px;
}

.txt{
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 16.5px;
margin-bottom: 0px;
}

.btn{
text-align: center;
font-family: Poppins;
font-size: 14px;
font-weight: 500;
line-height: 15px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 1.6px;
text-transform: uppercase;
letter-spacing: 1.600000023841858px;
text-align: center;
border: 1px solid red;
margin-top: 1.5rem;
}

.right-section-image{
    padding: 72px 24px;
    width: 290px;
    height: 378px;
    gap: 6px;
    margin-left:  35px;
}
.locationnews-image{
    font-family: Poppins;
font-size: 18px;
font-weight: 600;
line-height: 27px;
letter-spacing: 0em;
text-align: left;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 27px;
border: 10px;

left: 66.3%;
right: 14.43%;
top: 45.73%;
bottom: 46.08%;

background: #FFFFFF;
mix-blend-mode: normal;
border-radius: 2px;

}

.right-section{
    border-radius: 3px;
}

.moreBtn{
    
    width: 220px;
    height: 60px;
    /* opacity: 0.28; */
    border: 1px solid #C31815;
    border-radius: 2px;
    margin: 40px auto;
    cursor: pointer;
}

.moreBtn p{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 15px;
    /* display: flex;
    align-items: center;
    text-align: center; */
    margin: 25px auto;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: #C31815;
}

.locationWrapper{
    background: #FFFFFF;
    mix-blend-mode: normal;
    border-radius: 2px;
}

.locationWrapper input{
    mix-blend-mode: normal;
    opacity: 0.2;
    border: 1px solid #141414;
    border-radius: 2px;
    height: 60px;
    width: 330px;
    border-radius: 2px;

}

.SubmitLocation{
    background: #C31815;
    border-radius: 2px;
    height: 40px;
    width: 100px;
    left: 1293px;
    top: 1352px;
    border-radius: 2px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 15px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: #FFFFFF;
    border: none;
    margin-bottom: 10px;
}

.locationTitle{
    margin-top: -50px;
    font-family: 'IBM Plex Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    color: #2A2A2A;
}

.locationNews{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #2A2A2A;
}

.editors-Picks{
display: flex;
margin-top: 15px;
height: 27px;
width: 120px;
border-radius: nullpx;
font-family: Poppins;
font-size: 18px;
font-weight: 600;
line-height: 27px;
letter-spacing: 0em;
text-align: left;

}
.star-icon{
    width: 15.97px;
height: 15.99px;
width: 15.97px;
height: 15.99px;
margin-top: 25px;
}

.editorand-starimage {
    display: flex;
    padding: 45px;
}
.coronaimage-texts{
    display: flex;
    gap: 15px;
    padding: 45px;
    margin-top: -60px;
    
}
.texts{
    width: 300px;
     
}

.bottomcontainer{
    display: flex;
    align-items: center;
    width: 250px;
    
}
.headersix{ 
font-family: 'IBM Plex Serif';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 27px;
}
.paragraph{
font-family: 'Nunito Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 163.41%;
}

</style>