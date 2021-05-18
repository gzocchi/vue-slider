var app = new Vue({
  el: "#root",
  data: {
    title: "Vue Slider",
    imageIndex: 0,
    images: [
      {
        src: "https://images.pexels.com/photos/258109/pexels-photo-258109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Tramonto",
        color: "#2F235E",
      },
      {
        src: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Montagne",
        color: "#609CC0",
      },
      {
        src: "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Lavanda",
        color: "#7671BE",
      },
      {
        src: "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Montagne Innevate",
        color: "#A3AAB0",
      },
      {
        src: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Risaia",
        color: "#8A983F",
      },
      {
        src: "https://images.pexels.com/photos/258112/pexels-photo-258112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Aurora Boreale",
        color: "#006490",
      },
      {
        src: "https://images.pexels.com/photos/681467/pexels-photo-681467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Luna Rossa",
        color: "#7D2732",
      },
    ],
    imageInterval: false,
    pause: false,
  },
  methods: {
    nextImage: function () {
      this.imageIndex == this.images.length - 1 ? (this.imageIndex = 0) : this.imageIndex++;
    },
    prevImage: function () {
      this.imageIndex == 0 ? (this.imageIndex = this.images.length - 1) : this.imageIndex--;
    },
    intervalFunction: function () {
      this.imageInterval = setInterval(this.nextImage, 3500);
    },
    stopInterval: function () {
      clearInterval(this.imageInterval);
    },
    pauseImage: function () {
      this.stopInterval();
      this.pause = true;
    },
    playImage: function () {
      this.pause = false;
    },
  },
  mounted: function () {
    this.intervalFunction();
  },
  updated: function () {
    this.stopInterval();
    this.pause == true ? this.stopInterval() : this.intervalFunction();;
  },
});
