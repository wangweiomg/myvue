<template>
  <div class="cardDiv">
    <h3>{{ cardName }}</h3>

    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li v-for="item in items" v-bind:key="item.index">{{ item.name}}</li>
    </ul>
    <ol>
      <li>hello</li>
      <li v-for="hour in hours" v-bind:key="hour.index">{{ hour.collectUser}}</li>
    </ol>
    <button v-on:click="getcardlist">test axios</button>
    <button v-on:click="gethourlist">hour data</button>
  </div>
</template>

<script>
export default {
  name: "card",
  data: () => {
    return {
      cardName: "中国建设银行信用卡",
      items: [],
      hours: []
    };
  },
  methods: {
    getcardlist() {
      this.$axios.get("https://honeywen.com/card/list?wxOpenId=1").then(res => {
        console.log(res.data);
        this.items = res.data;
      });
    },

    gethourlist() {
      this.$axios.post("http://localhost:8081/a/debt/hour/list?date=2018-12-14&createBy=").then(res => {
        console.log(res.data);
        this.hours = res.data;
      });
    }
  }
};
</script>

<style scoped>
h3 {
  font-weight: normal;
}
</style>



