<template>
  <div class="province">
    <button class="btn-province" @click="callApi">Xem thêm</button>
    <table>
      <tr>
        <th>STT</th>
        <th>Tên tỉnh thành</th>
      </tr>
      <tr v-for="(item, index) in result" :key="index">
        <td>{{ index++ }}</td>
        <td>{{ item.name }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.province {
  margin: 50px 50px;
  font-size: 1.6rem;
}

.btn-province{
    margin-bottom: 20px;
    font-size: 1.6rem;
    width: 100px;
    height: 40px;
    background-color: #000;
    color: #fff;
}

table {
  width: 500px;
  margin: 0 auto;
}

table,
th,
td {
  border: 1px solid black;
}
</style>

<script>
export default {
  data() {
    return {
      result: [],
    };
  },
  methods: {
    callApi() {
      fetch("https://provinces.open-api.vn/api/", {})
        .then((response) => response.json())
        .then((data) => (this.result = data))

        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
</script>