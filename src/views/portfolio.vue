<template>
  <div>
    <Nav/>
    <div class="container">
      <h5 class="article pb-2 my-5 text-center title_border">攝影作品</h5>
      <h3 class="pt-5">人像攝影</h3>
      <div class="row">
        <div class="col-md-4 py-2" v-for="(item) in img_person_List" :key="item.id">
          <img class="img-fluid" :src="item.img">
        </div>
      </div>
       <h3 class="pt-4">商業攝影</h3>
      <div class="row">
        <div class="col-md-4 py-2" v-for="(item) in img_business_List" :key="item.id">
          <img class="img-fluid" :src="item.img">
        </div>
      </div>
       <h3 class="pt-4">食品攝影</h3>
      <div class="row">
        <div class="col-md-4 py-2" v-for="(item) in img_food_List" :key="item.id">
          <img class="img-fluid" :src="item.img">
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>

import Nav from '../components/nav';
import Footer from '../components/footer';

export default {
  components:{
    Nav,
    Footer,
  },
  data(){
    return{
      img_person_List:[
        {img:require('../assets/carousel1.jpg')},
        {img:require('../assets/carousel1.jpg')},
        {img:require('../assets/carousel1.jpg')},
        {img:require('../assets/carousel1.jpg')},
        {img:require('../assets/carousel1.jpg')}
      ],
      img_business_List:[
        {img:require('../assets/carousel2.jpg')},
        {img:require('../assets/carousel2.jpg')},
        {img:require('../assets/carousel2.jpg')},
        {img:require('../assets/carousel2.jpg')},
        {img:require('../assets/carousel2.jpg')}
      ],
      img_food_List:[
        {img:require('../assets/carousel3.jpg')},
        {img:require('../assets/carousel3.jpg')},
        {img:require('../assets/carousel3.jpg')},
        {img:require('../assets/carousel3.jpg')},
        {img:require('../assets/carousel3.jpg')}
      ]
    }
  }
}
</script>