<template>
  <div style="padding: 10px">
    <div style="background: #fff; border-radius: 8px; padding: 20px;">
      <div class="query-c">
        查询：
        <Input search placeholder="请输入查询内容" style="width: auto" />
      </div>
      <br />
      <Table max-height="670" border stripe :columns="columns1" :data="data1"></Table>
      <br />
      <Page :total="100" show-sizer show-elevator />
    </div>
  </div>
</template>

<script>
export default {
  name: "t1",
  data() {
    return {
      columns1: [
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        }
      ],
      data1: []
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData: async function() {
      let result = await this.$axios.get("/mock/data1.json");
      this.data1 = result;
    }
  }
};
</script>
