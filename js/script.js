console.log(contacts);
const app = new Vue({
  el: "#app",
  data: {
    contacts,
    activeIndex: 0,
    new_message: "",
    searchContacts: "",
  },
  methods: {
    setActiveContact(index) {
      this.activeIndex = index;
    },
    getHoursMinutes(dateToFormat) {
      const array = dateToFormat.split(" "); // ["10/01/2020",  "15:30:55"]
      const now = array[1]; // "15:30:55"
      const arrayNow = now.split(":"); // ["15", "30", "55"]
      const hoursMinute = arrayNow[0] + ":" + arrayNow[1]; // "15:30"
      return hoursMinute;
    },
    getNow() {
      const now = new Date();
      console.log(now.getHours() + ":" + now.getMinutes());

      const hours = this.formatDatePart(now.getHours());
      const minutes = this.formatDatePart(now.getMinutes());
      const seconds = this.formatDatePart(now.getSeconds());

      const day = this.formatDatePart(now.getDay());
      const month = this.formatDatePart(now.getMonth() + 1);
      const year = now.getFullYear();
      return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    },
    formatDatePart(datePart) {
      return datePart < 10 ? "0" + datePart : "" + datePart;
    },

    messageToSend() {
      let newMessageToSend = {
        date: this.getNow(),
        message: this.new_message,
        status: "sent",
      };

      this.contacts[this.activeIndex].messages.push(newMessageToSend);

      this.new_message = "";
      this.scrollToBottom();
    },
    scrollToBottom: () => {
      setTimeout(() => {
        const messages = document.querySelector(".chat-container");
        messages.scrollTop = messages.scrollHeight;
      }, 0);
    },
    automaticHint() {
      if (this.searchContacts.trim() != "") {
      }
    },
  },
});
