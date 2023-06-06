Vue.createApp({
    data() {
        return {
            Webcams: [
                { id: 1, brand: "Logitech", Height: 1080, Width: 1920 },
                { id: 2, brand: "Logitech", Height: 2160, Width: 3840 },
                { id: 3, brand: "Paracon", Height: 1080, Width: 1920 },
                { id: 4, brand: "Sandberg", Height: 2160, Width: 3840 },
                { id: 5, brand: "ZealandCams", Height: 1080, Width: 1440 }
            ],
            selected: null,
            addData: { id: 0, brand: "", Height: 0, Width: 0 },

            

        }
    },

    methods: {

        async AddNewWebcam() {
            var my_Objects = {
                id:this.id,
                brand:this.brand,
                Height:this.Height,
                Width:this.Width
            };

            this.Webcams.push(my_Objects)

            this.id = 0
            this.brand = ''
            this.Height = 0
            this.Width = 0
        },

        async DeleteWebcam(id) {
            var index = this.Webcams.findIndex(x => x.id === id);
            this.Webcams.splice(index, 1);
          }
          
          
            
    }



}).mount("#app")