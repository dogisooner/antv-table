<template>
  <div class="table">
    <vxe-table
      border
      :data="tableData"
      header-align="center"
      show-footer
      :highlight-hover-row="true"
      :edit-config="{ trigger: 'click', mode: 'cell' }"
      :footer-method="footerMethod"
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
      <vxe-table-column title="单位类型分布">
        <vxe-table-column
          field="gov"
          title="党政机关"
          :edit-render="{ name: '$input', props: { type: 'integer', min: 0 } }"
        >
        </vxe-table-column>
        <vxe-table-column
          field="enterprise"
          title="企业单位"
          :edit-render="{ name: '$input', props: { type: 'integer', min: 0 } }"
        >
        </vxe-table-column>
        <vxe-table-column title="事业单位">
          <vxe-table-column
            field="edu"
            title="高校"
            :edit-render="{
              name: '$input',
              props: { type: 'integer', min: 0 }
            }"
          >
          </vxe-table-column>
          <vxe-table-column
            field="otherInstitutions"
            title="其他"
            :edit-render="{
              name: '$input',
              props: { type: 'integer', min: 0 }
            }"
          >
          </vxe-table-column>
        </vxe-table-column>
        <vxe-table-column
          field="others"
          title="其他"
          :edit-render="{ name: '$input', props: { type: 'integer', min: 0 } }"
        >
        </vxe-table-column>
      </vxe-table-column>
      <vxe-table-column
        field="workingLife"
        title="人均工作年限"
        :edit-render="{ name: '$input', props: { type: 'number', min: 0 } }"
      >
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
          gov: 0,
          enterprise: 0,
          edu: 0,
          otherInstitutions: 0,
          others: 0,
          workingLife: 0
        },
        {
          rank: "副高级",
          total: 0,
          gov: 0,
          enterprise: 0,
          edu: 0,
          otherInstitutions: 0,
          others: 0,
          workingLife: 0
        },
        {
          rank: "中级",
          total: 0,
          gov: 0,
          enterprise: 0,
          edu: 0,
          otherInstitutions: 0,
          others: 0,
          workingLife: 0
        },
        {
          rank: "初级",
          total: 0,
          gov: 0,
          enterprise: 0,
          edu: 0,
          otherInstitutions: 0,
          others: 0,
          workingLife: 0
        },
        {
          rank: "无",
          total: 0,
          gov: 0,
          enterprise: 0,
          edu: 0,
          otherInstitutions: 0,
          others: 0,
          workingLife: 0
        }
      ],
      footerData: []
    };
  },
  methods: {
    countAmount(row) {
      row.total =
        Number(row.gov) +
        Number(row.enterprise) +
        Number(row.edu) +
        Number(row.otherInstitutions) +
        Number(row.others);
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
            return `${this.handleSum(data, "gov")} `;
          } else if (columnIndex === 3) {
            return `${this.handleSum(data, "enterprise")} `;
          } else if (columnIndex === 4) {
            return `${this.handleSum(data, "edu")} `;
          } else if (columnIndex === 5) {
            return `${this.handleSum(data, "otherInstitutions")} `;
          } else if (columnIndex === 6) {
            return `${this.handleSum(data, "others")} `;
          } else {
            return `${this.handleSum(data, "workingLife")} `;
          }
        })
      ];
      return this.footerData;
    },
    save(data) {
      /* 表：
       * 列分别是rank（专业技术职务级别）、total（合计）、gov（党政机关）、enterprise（企业单位）、
       * edu（高校）、otherInstitutions（其他-事业单位）、others（其他机构）,workingLife（人均工作年限）
       * 记录共5行，所以index到4
       *  注意：不包含表尾总计行
       */
      console.log(this.tableData);
      /* 表尾
       ** 为"共计"行，提供求和的功能
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
