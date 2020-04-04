<template>
  <vxe-table
    border
    resizable
    show-footer
    :data="tableData"
    :footer-method="footerMethod"
    :edit-config="{ trigger: 'click', mode: 'cell' }"
  >
    <vxe-table-column type="seq" width="60"></vxe-table-column>
    <vxe-table-column
      field="name"
      title="书名"
      :edit-render="{ name: 'input' }"
    ></vxe-table-column>
    <vxe-table-column
      field="amount"
      title="单价"
      :edit-render="{ name: '$input', props: { type: 'number' } }"
    ></vxe-table-column>
    <vxe-table-column
      field="number"
      title="数量"
      :edit-render="{ name: '$input', props: { type: 'number' } }"
    ></vxe-table-column>
    <vxe-table-column title="总价">
      <template v-slot="{ row }">
        <span>{{ countAmount(row) }} 元</span>
      </template>
    </vxe-table-column>
  </vxe-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { name: "vxe-table 从入门到放弃", amount: 80, number: 5 },
        { name: "JavaScript 权威指南", amount: 40, number: 3 },
        { name: "Vue 入门到精通", amount: 90, number: 9 },
        { name: "深入现代 JavaScript 应用开发", amount: 60, number: 1 }
      ]
    };
  },
  methods: {
    countAmount(row) {
      return Number(row.amount) * Number(row.number);
    },
    countAllAmount(data) {
      let count = 0;
      data.forEach(row => {
        count += this.countAmount(row);
      });
      return count;
    },
    handleSum(list, field) {
      var total = 0;
      for (var index = 0; index < list.length; index++) {
        total += Number(list[index][field] || 0);
      }
      return total;
    },
    footerMethod({ columns, data }) {
      return [
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return "合计";
          }
          if (columnIndex === 3) {
            return `${this.handleSum(data, "number")} 本`;
          } else if (columnIndex === 4) {
            return `共 ${this.countAllAmount(data)} 元`;
          }
          return "-";
        })
      ];
    }
  }
};
</script>

<style scoped></style>
