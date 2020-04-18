<template>
  <div>
    <!--  :scroll="{ y: 340 }" 除控制表头固定外，还限制表格数据显示的高度-->
    <!--  必须指定列宽，但要留一列不指定，否则弹性布局不起作用-->
    <!--  :scroll="{ x: 1500}"使表格出现x方向滚动条-->
    <a-table
      :columns="columns"
      :dataSource="data"
      :pagination="{ pageSize: 50 }"
      :scroll="{ x: 1500, y: 340 }"
    />
  </div>
</template>
<script>
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    width: 150
  },
  {
    title: "Age",
    dataIndex: "age",
    width: 150
  },
  {
    title: "Address",
    dataIndex: "address"
  }
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  });
}
export default {
  data() {
    return {
      data,
      columns
    };
  }
};
</script>
