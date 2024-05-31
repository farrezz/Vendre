const { createApp } = Vue;

createApp({
  data() {
    return {
      //fetch Data som sparas i en array.
      employee: [],
      //Hålla koll på vilken sida man är på
      currentPage: 1,
      //antal sidor. (totalt 2 sidor)
      totalPages: 2,
    };
  },
  //Logik delen
  methods: {
    //Fetchar data och lägger till i employee-array:n
    displayUsers(page = 1) {
      fetch(`https://reqres.in/api/users?page=${page}`)
        .then((result) => result.json())
        .then((data) => {
          this.employee = data.data;
        });
    },
    //function för next-knapp
    displayNextEmployees() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.displayUsers(this.currentPage);
      }
    },
    //function för previous-knapp
    displayPreviousEmployee() {
      if (this.currentPage >= this.totalPages) {
        this.currentPage--;
        this.displayUsers(this.currentPage);
      }
    },
  },
  //
  mounted() {
    this.displayUsers();
  },
}).mount("#app");
