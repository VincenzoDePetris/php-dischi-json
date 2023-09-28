const { createApp } = Vue;

createApp({
  data() {
    return {
      dischi: [],
    };
  },

  mounted() {
    axios
      .get("http://localhost/php-dischi-json/backend/api/get-dischi.php")
      .then((response) => {
        this.dischi = response.data;
      });
  },
}).mount("#app");
