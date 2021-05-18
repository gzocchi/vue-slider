var app = new Vue({
  el: "#root",
  data:{
      title : "Vue Slider",
      imageIndex : 0,
      images: [
          {
              src: "https://images.pexels.com/photos/258109/pexels-photo-258109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              alt: "Tramonto",
          },
          {
            src: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            alt: "Montagne",
          },
          {
            src: "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            alt: "Lavanda",
          },
          {
            src: "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            alt: "Montagne Innevate",
          },
          {
            src: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            alt: "Risaia",
          },
          {
            src: "https://images.pexels.com/photos/258112/pexels-photo-258112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            alt: "Aurora Boreale",
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
  }
});
