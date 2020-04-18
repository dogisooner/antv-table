<template>
  <div class="table">
    <vxe-table
      border
      :data="tableData"
      show-footer
      :highlight-hover-row="true"
      :edit-config="{ trigger: 'click', mode: 'cell' }"
      :footer-method="footerMethod"
      :edit-rules="validRules"
    >
      <vxe-table-column
        field="rank"
        title="专业技术职务级别"
      ></vxe-table-column>
      <vxe-table-column field="total" title="合计">
        <template v-slot="{ row }">
          <span>{{ countAmount(row) }} </span>
        </template>
      </vxe-table-column>
      <vxe-table-column title="年龄结构">
        <vxe-table-column
          field="below34"
          title="34岁及以下"
          :edit-render="{ name: '$input', props: { type: 'integer', min: 0 } }"
        >
        </vxe-table-column>
        <vxe-table-column
          field="above35"
          title="35至44岁"
          :edit-render="{ name: '$input', props: { type: 'integer', min: 0 } }"
        >
        </vxe-table-column>
        <vxe-table-column
          field="above45"
          title="45至59岁"
          :edit-render="{ name: '$input', props: { type: 'integer', min: 0 } }"
        >
        </vxe-table-column>
        <vxe-table-column
          field="above60"
          title="60岁以上"
          :edit-render="{ name: '$input', props: { type: 'integer', min: 0 } }"
        >
        </vxe-table-column>
      </vxe-table-column>
      <vxe-table-column
        field="doctor"
        title="具有博士学位人数"
        :edit-render="{ name: '$input', props: { type: 'integer', min: 0 } }"
      >
      </vxe-table-column>
      <vxe-table-column
        field="overseas"
        title="具有海外经历人数"
        :edit-render="{ name: '$input', props: { type: 'integer', min: 0 } }"
      >
      </vxe-table-column>
      <vxe-table-column
        field="practice"
        title="具有实务背景人数"
        :edit-render="{ name: '$input', props: { type: 'integer', min: 0 } }"
      >
      </vxe-table-column>
      <vxe-table-column
        field="foreign"
        title="外籍教师人数"
        :edit-render="{ name: '$input', props: { type: 'integer', min: 0 } }"
      >
      </vxe-table-column>
    </vxe-table>
    <vxe-table
      border
      :show-header="false"
      :data="tableData2"
      :span-method="rowspanMethod"
      :edit-config="{ trigger: 'click', mode: 'cell' }"
      :edit-rules="validRules"
    >
      <vxe-table-column field="category" title="category"></vxe-table-column>
      <vxe-table-column
        field="categoryNumber"
        title="categoryNumber"
        :edit-render="{ name: '$input', props: { type: 'integer', min: 0 } }"
      ></vxe-table-column>
      <vxe-table-column field="ratio" title="ratio"></vxe-table-column>
      <vxe-table-column field="ratioNumber" title="ratioNumber">
        <template v-slot>
          <span>{{ countRatio }} </span>
        </template>
      </vxe-table-column>
    </vxe-table>
    <a-button @click="save()" class="saveBtn">保存</a-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          rank: "正高级",
          total: 0,
          below34: 0,
          above35: 0,
          above45: 0,
          above60: 0,
          doctor: 0,
          overseas: 0,
          practice: 0,
          foreign: 0
        },
        {
          rank: "副高级",
          total: 0,
          below34: 0,
          above35: 0,
          above45: 0,
          above60: 0,
          doctor: 0,
          overseas: 0,
          practice: 0,
          foreign: 0
        },
        {
          rank: "中级",
          total: 0,
          below34: 0,
          above35: 0,
          above45: 0,
          above60: 0,
          doctor: 0,
          overseas: 0,
          practice: 0,
          foreign: 0
        },
        {
          rank: "初级",
          total: 0,
          below34: 0,
          above35: 0,
          above45: 0,
          above60: 0,
          doctor: 0,
          overseas: 0,
          practice: 0,
          foreign: 0
        },
        {
          rank: "无",
          total: 0,
          below34: 0,
          above35: 0,
          above45: 0,
          above60: 0,
          doctor: 0,
          overseas: 0,
          practice: 0,
          foreign: 0
        }
      ],
      tableData2: [
        {
          category: "全日制专业学位研究生数",
          categoryNumber: 0,
          ratio: "生师比",
          ratioNumber: "0"
        },
        {
          category: "非全日制专业学位研究生数",
          categoryNumber: 0,
          ratio: "生师比",
          ratioNumber: "0"
        }
      ],
      footerData: []
    };
  },
  created() {
    this.tableData = [
      {
        rank: "正高级",
        total: 0,
        below34: 1,
        above35: 2,
        above45: 6,
        above60: 0,
        doctor: 0,
        overseas: 0,
        practice: 0,
        foreign: 0
      },
      {
        rank: "副高级",
        total: 0,
        below34: 0,
        above35: 5,
        above45: 0,
        above60: 0,
        doctor: 0,
        overseas: 0,
        practice: 0,
        foreign: 0
      },
      {
        rank: "中级",
        total: 0,
        below34: 0,
        above35: 5,
        above45: 0,
        above60: 0,
        doctor: 0,
        overseas: 0,
        practice: 0,
        foreign: 0
      },
      {
        rank: "初级",
        total: 0,
        below34: 0,
        above35: 0,
        above45: 0,
        above60: 0,
        doctor: 0,
        overseas: 0,
        practice: 0,
        foreign: 0
      },
      {
        rank: "无",
        total: 0,
        below34: 0,
        above35: 0,
        above45: 0,
        above60: 0,
        doctor: 0,
        overseas: 0,
        practice: 0,
        foreign: 0
      }
    ];
  },
  computed: {
    countRatio() {
      let stuNumber =
        Number(this.$data["tableData2"][0]["categoryNumber"]) +
        Number(this.$data["tableData2"][1]["categoryNumber"]);
      let teacherNumber = this.countAllAmount(this.$data["tableData"], "total");
      if (teacherNumber != 0) {
        return stuNumber / teacherNumber;
      } else {
        return null;
      }
    }
  },
  methods: {
    countAmount(row) {
      row.total =
        Number(row.below34) +
        Number(row.above35) +
        Number(row.above45) +
        Number(row.above60);
      return row.total;
    },
    countAllAmount(data) {
      let count = 0;
      data.forEach(row => {
        count += this.countAmount(row);
      });
      return count;
    },
    handleSum(list, field) {
      let total = 0;
      for (let index = 0; index < list.length; index++) {
        total += Number(list[index][field] || 0);
      }
      return total;
    },
    footerMethod({ columns, data }) {
      this.footerData = [
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return "总计";
          } else if (columnIndex === 1) {
            return `${this.countAllAmount(data, "total")} `;
          } else if (columnIndex === 2) {
            return `${this.handleSum(data, "below34")} `;
          } else if (columnIndex === 3) {
            return `${this.handleSum(data, "above35")} `;
          } else if (columnIndex === 4) {
            return `${this.handleSum(data, "above45")} `;
          } else if (columnIndex === 5) {
            return `${this.handleSum(data, "above60")} `;
          } else if (columnIndex === 6) {
            return `${this.handleSum(data, "doctor")} `;
          } else if (columnIndex === 7) {
            return `${this.handleSum(data, "overseas")} `;
          } else if (columnIndex === 8) {
            return `${this.handleSum(data, "practice")} `;
          } else {
            return `${this.handleSum(data, "foreign")} `;
          }
        })
      ];
      return this.footerData;
    },
    rowspanMethod({ row, $rowIndex, column, data }) {
      let fields = ["ratio", "ratioNumber"];
      let cellValue = row[column.property];
      if (cellValue && fields.includes(column.property)) {
        let prevRow = data[$rowIndex - 1];
        let nextRow = data[$rowIndex + 1];
        if (prevRow && prevRow[column.property] === cellValue) {
          return { rowspan: 0, colspan: 0 };
        } else {
          let countRowspan = 1;
          while (nextRow && nextRow[column.property] === cellValue) {
            nextRow = data[++countRowspan + $rowIndex];
          }
          if (countRowspan > 1) {
            return { rowspan: countRowspan, colspan: 1 };
          }
        }
      }
    },
    save(data) {
      /* 表的第一部分：
       * 列分别是rank（专业技术职务级别）、total（合计）、below34（34岁及以下）、above35（35至44岁）、
       * above45（45至59岁）、above60（60岁及以上）、doctor（具有博士学位人数）,overseas（具有海外经历人数）、
       * practice（具有实务背景人数）、foreign（外籍教师人数）
       * 记录共5行，所以index到4
       *  注意：不包含表尾总计行
       */
      console.log(this.tableData);
      /* 表的第二部分：
       ** category（"全日制专业学位研究生数"文字-无意义，无需传后台）,
       *  categoryNumber（"全日制专业学位研究生数"数量，需要传）,
       *  ratio（ "生师比"文字-无意义，无需传后台）,
       *  ratioNumber（ "生师比"数量，需要传，但无法在此处获取）
       */
      console.log(this.tableData2);
      /* 表的第二部分：
       *  ratioNumber（ "生师比"数量）
       */
      console.log(this.countRatio);
      /* 表的第一部分的表尾
       ** 为"共计"行，提供对行求和的功能
       */
      console.log(this.footerData);
    }
  }
};
</script>

<style scoped>
.table {
  padding: 20px;
}
.saveBtn {
  margin: 20px;
}
</style>
