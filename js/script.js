var app = new Vue({
  el: "#root",
  data:{
      title : "Vue Slider",
      imageIndex : 0,
      images: [
          {
              src: "https://images.pexels.com/photos/258109/pexels-photo-258109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              alt: "Tramonto",
              color: "color: #2F235E"
          },
          {
            src: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            alt: "Montagne",
            color: "color: #609CC0"
          },
          {
            src: "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            alt: "Lavanda",
            color: "color: #7671BE"
          },
          {
            src: "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            alt: "Montagne Innevate",
            color: "color: #A3AAB0"
          },
          {
            src: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            alt: "Risaia",
            color: "color: #8A983F"
          },
          {
            src: "https://images.pexels.com/photos/258112/pexels-photo-258112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            alt: "Aurora Boreale",
            color: "color: #00E3BA"
          },
          {
            src: "https://images.pexels.com/photos/681467/pexels-photo-681467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            alt: "Luna Rossa",
            color: "color: #FE0435"
          },
          
      ]
  },
  methods: {
    nextImage: function () {
        this.imageIndex == this.images.length - 1 ? this.imageIndex = 0 : this.imageIndex++
      },
    prevImage: function () {
        this.imageIndex == 0 ? this.imageIndex = this.images.length - 1 : this.imageIndex--
      },
  },
  mounted: function(){},
  updated: function(){}
});
