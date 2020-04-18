<template>
  <div class="table">
    <div class="title"><h2>Ⅲ-1毕业生质量</h2></div>
    <vxe-table
      border
      :show-header="false"
      :data="tableData1"
      :edit-config="{ trigger: 'click', mode: 'cell' }"
      header-align="center"
    >
      <vxe-table-column field="fullTime"></vxe-table-column>
      <vxe-table-column
        field="fullTimeNumber"
        :edit-render="{ name: '$input', props: { type: 'integer', min: 0 } }"
      ></vxe-table-column>
      <vxe-table-column field="partTime"></vxe-table-column>
      <vxe-table-column
        field="partTimeNumber"
        :edit-render="{ name: '$input', props: { type: 'integer', min: 0 } }"
      >
      </vxe-table-column>
    </vxe-table>
    <div class="title"><h3>Ⅲ-1-1本专业学位毕业生总体就业情况</h3></div>
    <div class="title"><h4>Ⅲ-1-1-1就业情况统计</h4></div>
    <vxe-table
      border
      ref="table1"
      :data="tableData2"
      :edit-config="{ trigger: 'click', mode: 'row' }"
      header-align="center"
    >
      <vxe-table-column
        field="degreeCategory"
        title="学位类别"
      ></vxe-table-column>
      <vxe-table-column
        field="graduate"
        title="毕业生数"
        :edit-render="{ name: '$input', props: { type: 'integer', min: 0 } }"
      ></vxe-table-column>
      <vxe-table-column title="就业情况（人数及比例)">
        <vxe-table-column
          field="employment"
          title="签就业协议、劳动合同"
          :edit-render="{ name: '$input', props: { type: 'integer', min: 0 } }"
        >
          <template v-slot="{ row, rowIndex, columnIndex }">
            {{ row.employment }} ({{
              getEmployRatio(row, rowIndex, columnIndex)
            }}%)
          </template>
        </vxe-table-column>
        <vxe-table-column title="升学" align="center">
          <vxe-table-column
            field="domestic"
            title="国（境）内"
            :edit-render="{
              name: '$input',
              props: { type: 'integer', min: 0 }
            }"
          >
            <template v-slot="{ row, rowIndex, columnIndex }">
              {{ row.domestic }} ({{
                getEmployRatio(row, rowIndex, columnIndex)
              }}%)
            </template>
          </vxe-table-column>
          <vxe-table-column
            field="abroad"
            title="国（境）外"
            :edit-render="{
              name: '$input',
              props: { type: 'integer', min: 0 }
            }"
          >
            <template v-slot="{ row, rowIndex, columnIndex }">
              {{ row.abroad }} ({{
                getEmployRatio(row, rowIndex, columnIndex)
              }}%)
            </template>
          </vxe-table-column>
        </vxe-table-column>
        <vxe-table-column
          field="entrepreneurship"
          title="自主创业"
          :edit-render="{ name: '$input', props: { type: 'integer', min: 0 } }"
        >
          <template v-slot="{ row, rowIndex, columnIndex }">
            {{ row.entrepreneurship }} ({{
              getEmployRatio(row, rowIndex, columnIndex)
            }}%)
          </template>
        </vxe-table-column>
        <vxe-table-column
          field="others"
          title="其他形式就业"
          :edit-render="{ name: '$input', props: { type: 'integer', min: 0 } }"
        >
          <template v-slot="{ row, rowIndex, columnIndex }">
            {{ row.others }} ({{ getEmployRatio(row, rowIndex, columnIndex) }}%)
          </template>
        </vxe-table-column>
        <vxe-table-column
          field="unemployed"
          title="未就业"
          :edit-render="{ name: '$input', props: { type: 'integer', min: 0 } }"
          header-align="center"
        >
          <template v-slot="{ row, rowIndex, columnIndex }">
            {{ row.unemployed }} ({{
              getEmployRatio(row, rowIndex, columnIndex)
            }}%)
          </template>
        </vxe-table-column>
      </vxe-table-column>
    </vxe-table>
    <div class="title"><h4>Ⅲ-1-1-2毕业生主要去向</h4></div>
    <vxe-table
      border
      :data="tableData3"
      :edit-config="{ trigger: 'click', mode: 'cell' }"
      header-align="center"
    >
      <vxe-table-column
        field="degreeCategory"
        title="学位类别"
      ></vxe-table-column>
      <vxe-table-column
        title="就业单位名称（填写人数最多的5个）"
        align="center"
      >
        <vxe-table-column
          field="company1"
          title="就业单位1"
          :edit-render="{ name: 'input', attrs: { type: 'text' } }"
        ></vxe-table-column>
        <vxe-table-column
          field="company2"
          title="就业单位2"
          :edit-render="{ name: 'input', attrs: { type: 'text' } }"
        ></vxe-table-column>
        <vxe-table-column
          field="company3"
          title="就业单位3"
          :edit-render="{ name: 'input', attrs: { type: 'text' } }"
        ></vxe-table-column>
        <vxe-table-column
          field="company4"
          title="就业单位4"
          :edit-render="{ name: 'input', attrs: { type: 'text' } }"
        ></vxe-table-column>
        <vxe-table-column
          field="company5"
          title="就业单位5"
          :edit-render="{ name: 'input', attrs: { type: 'text' } }"
        ></vxe-table-column>
      </vxe-table-column>
    </vxe-table>
    <div class="title"><h4>Ⅲ-1-1-3签约单位类型分布（人数及比例）</h4></div>
    <vxe-table
      border
      :data="tableData4"
      :edit-config="{ trigger: 'click', mode: 'cell' }"
      header-align="center"
    >
      <vxe-table-column
        field="degreeCategory"
        title="学位类别"
      ></vxe-table-column>
      <vxe-table-column
        field="gov"
        title="党政机关"
        :edit-render="{ name: '$input', props: { type: 'integer', min: 0 } }"
      >
        <template v-slot="{ row, rowIndex, columnIndex }">
          {{ row.gov }} ({{ getTypeRatio(row, rowIndex, columnIndex) }}%)
        </template>
      </vxe-table-column>
      <vxe-table-column
        field="institution"
        title="事业单位"
        :edit-render="{ name: '$input', props: { type: 'integer', min: 0 } }"
      >
        <template v-slot="{ row, rowIndex, columnIndex }">
          {{ row.institution }} ({{
            getTypeRatio(row, rowIndex, columnIndex)
          }}%)
        </template>
      </vxe-table-column>
      <vxe-table-column
        field="company"
        title="企业单位"
        :edit-render="{ name: '$input', props: { type: 'integer', min: 0 } }"
      >
        <template v-slot="{ row, rowIndex, columnIndex }">
          {{ row.company }} ({{ getTypeRatio(row, rowIndex, columnIndex) }}%)
        </template>
      </vxe-table-column>
      <vxe-table-column
        field="other"
        title="其他"
        :edit-render="{ name: '$input', props: { type: 'integer', min: 0 } }"
      >
        <template v-slot="{ row, rowIndex, columnIndex }">
          {{ row.other }} ({{ getTypeRatio(row, rowIndex, columnIndex) }}%)
        </template>
      </vxe-table-column>
    </vxe-table>
    <div class="title"><h4>Ⅲ-1-1-4签约单位地域分布（人数及比例）</h4></div>
    <vxe-table
      border
      :data="tableData5"
      :edit-config="{ trigger: 'click', mode: 'cell' }"
      header-align="center"
    >
      <vxe-table-column
        field="degreeCategory"
        title="单位地域"
      ></vxe-table-column>
      <vxe-table-column
        field="province"
        title="本省"
        :edit-render="{ name: '$input', props: { type: 'integer', min: 0 } }"
      >
        <template v-slot="{ row, rowIndex, columnIndex }">
          {{ row.province }} ({{ getRegionRatio(row, rowIndex, columnIndex) }}%)
        </template>
        ></vxe-table-column
      >
      <vxe-table-column
        field="east"
        title="东部"
        :edit-render="{ name: '$input', props: { type: 'integer', min: 0 } }"
      >
        <template v-slot="{ row, rowIndex, columnIndex }">
          {{ row.east }} ({{ getRegionRatio(row, rowIndex, columnIndex) }}%)
        </template>
      </vxe-table-column>
      <vxe-table-column
        field="central"
        title="中部"
        :edit-render="{ name: '$input', props: { type: 'integer', min: 0 } }"
      >
        <template v-slot="{ row, rowIndex, columnIndex }">
          {{ row.central }} ({{ getRegionRatio(row, rowIndex, columnIndex) }}%)
        </template>
      </vxe-table-column>
      <vxe-table-column
        field="west"
        title="西部"
        :edit-render="{ name: '$input', props: { type: 'integer', min: 0 } }"
      >
        <template v-slot="{ row, rowIndex, columnIndex }">
          {{ row.west }} ({{ getRegionRatio(row, rowIndex, columnIndex) }}%)
        </template>
      </vxe-table-column>
      <vxe-table-column
        field="abroad"
        title="国（境）外"
        :edit-render="{ name: '$input', props: { type: 'integer', min: 0 } }"
      >
        <template v-slot="{ row, rowIndex, columnIndex }">
          {{ row.abroad }} ({{ getRegionRatio(row, rowIndex, columnIndex) }}%)
        </template>
      </vxe-table-column>
    </vxe-table>
    <vxe-button @click="validAll" status="primary" class="saveBtn"
      >保存</vxe-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData1: [
        {
          fullTime: "全日制毕业生数",
          fullTimeNumber: 0,
          partTime: "非全日制毕业生数",
          partTimeNumber: 0
        }
      ],
      tableData2: [
        {
          degreeCategory: "硕士",
          graduate: 0,
          employment: 0,
          domestic: 0,
          abroad: 0,
          entrepreneurship: 0,
          others: 0,
          unemployed: 0
        },
        {
          degreeCategory: "博士",
          graduate: 0,
          employment: 0,
          domestic: 0,
          abroad: 0,
          entrepreneurship: 0,
          others: 0,
          unemployed: 0
        }
      ],
      tableData3: [{ degreeCategory: "硕士" }, { degreeCategory: "博士" }],
      tableData4: [
        {
          degreeCategory: "硕士",
          gov: 0,
          institution: 0,
          company: 0,
          other: 0
        },
        { degreeCategory: "博士", gov: 0, institution: 0, company: 0, other: 0 }
      ],
      tableData5: [
        {
          degreeCategory: "硕士签约",
          province: 0,
          east: 0,
          central: 0,
          west: 0,
          abroad: 0
        },
        {
          degreeCategory: "博士签约",
          province: 0,
          east: 0,
          central: 0,
          west: 0,
          abroad: 0
        }
      ],
      queryData: {
        // 全日制毕业生数
        fullTimeNumber: 0,
        // 非全日制毕业生数
        partTimeNumber: 0,
        // 硕士-毕业生数
        mGraduate: 0,
        // 硕士-签就业协议、劳动合同
        mEmployment: 0,
        // 硕士-升学-国（境）内
        mDomestic: 0,
        // 硕士-升学-国（境）外
        mAbroad: 0,
        // 硕士-自主创业
        mEntrepreneurship: 0,
        // 硕士-其他形式就业
        mOthers: 0,
        // 硕士-未就业
        mUnemployed: 0,
        // 博士-毕业生数
        dGraduate: 0,
        // 博士-签就业协议、劳动合同
        dEmployment: 0,
        // 博士-升学-国（境）内
        dDomestic: 0,
        // 博士-升学-国（境）外
        dAbroad: 0,
        // 博士-自主创业
        dEntrepreneurship: 0,
        // 博士-其他形式就业
        dOthers: 0,
        // 博士-未就业
        dUnemployed: 0,
        // 硕士-就业最多单位-单位1，单位2，单位3，单位4，单位5
        mCompony1: "",
        mCompony2: "",
        mCompony3: "",
        mCompony4: "",
        mCompony5: "",
        // 博士-就业最多单位-单位1，单位2，单位3，单位4，单位5
        dCompony1: "",
        dCompony2: "",
        dCompony3: "",
        dCompony4: "",
        dCompony5: "",
        // 硕士- 就业类型-党政机关、事业单位、企业单位、其他
        mGov: 0,
        mInstitution: 0,
        mTypeCompany: 0,
        mTypeOther: 0,
        // 博士- 就业类型-党政机关、事业单位、企业单位、其他
        dGov: 0,
        dInstitution: 0,
        dTypeCompany: 0,
        dTypeOther: 0,
        // 硕士- 就业单位地域分布-本省、东部、中部、西部、国（境）外
        mProvince: 0,
        mEast: 0,
        mCentral: 0,
        mWest: 0,
        mRegionAbroad: 0,
        // 博士- 就业单位地域分布-本省、东部、中部、西部、国（境）外
        dProvince: 0,
        dEast: 0,
        dCentral: 0,
        dWest: 0,
        dRegionAbroad: 0
      }
    };
  },
  methods: {
    getEmployRatio(row, rowIndex, columnIndex) {
      if (this.$data["tableData2"][rowIndex]["graduate"] == 0) {
        return 0;
      }
      if (columnIndex == 2) {
        return (
          (100 * row.employment) /
          this.$data["tableData2"][rowIndex]["graduate"]
        ).toFixed(1);
      } else if (columnIndex == 3) {
        return (
          (100 * row.domestic) /
          this.$data["tableData2"][rowIndex]["graduate"]
        ).toFixed(1);
      } else if (columnIndex == 4) {
        return (
          (100 * row.abroad) /
          this.$data["tableData2"][rowIndex]["graduate"]
        ).toFixed(1);
      } else if (columnIndex == 5) {
        return (
          (100 * row.entrepreneurship) /
          this.$data["tableData2"][rowIndex]["graduate"]
        ).toFixed(1);
      } else if (columnIndex == 6) {
        return (
          (100 * row.others) /
          this.$data["tableData2"][rowIndex]["graduate"]
        ).toFixed(1);
      } else if (columnIndex == 7) {
        return (
          (100 * row.unemployed) /
          this.$data["tableData2"][rowIndex]["graduate"]
        ).toFixed(1);
      }
    },
    getTypeRatio(row, rowIndex, columnIndex) {
      if (this.$data["tableData2"][rowIndex]["employment"] == 0) {
        return 0;
      }
      if (columnIndex == 1) {
        return (
          (100 * row.gov) /
          this.$data["tableData2"][rowIndex]["employment"]
        ).toFixed(1);
      } else if (columnIndex == 2) {
        return (
          (100 * row.institution) /
          this.$data["tableData2"][rowIndex]["employment"]
        ).toFixed(1);
      } else if (columnIndex == 3) {
        return (
          (100 * row.company) /
          this.$data["tableData2"][rowIndex]["employment"]
        ).toFixed(1);
      } else if (columnIndex == 4) {
        return (
          (100 * row.other) /
          this.$data["tableData2"][rowIndex]["employment"]
        ).toFixed(1);
      }
    },
    getRegionRatio(row, rowIndex, columnIndex) {
      if (this.$data["tableData2"][rowIndex]["employment"] == 0) {
        return 0;
      }
      if (columnIndex == 1) {
        return (
          (100 * row.province) /
          this.$data["tableData2"][rowIndex]["employment"]
        ).toFixed(1);
      } else if (columnIndex == 2) {
        return (
          (100 * row.east) /
          this.$data["tableData2"][rowIndex]["employment"]
        ).toFixed(1);
      } else if (columnIndex == 3) {
        return (
          (100 * row.central) /
          this.$data["tableData2"][rowIndex]["employment"]
        ).toFixed(1);
      } else if (columnIndex == 4) {
        return (
          (100 * row.west) /
          this.$data["tableData2"][rowIndex]["employment"]
        ).toFixed(1);
      } else if (columnIndex == 5) {
        return (
          (100 * row.abroad) /
          this.$data["tableData2"][rowIndex]["employment"]
        ).toFixed(1);
      }
    },
    getAllData() {
      this.queryData.fullTimeNumber = this.$data["tableData1"][0][
        "fullTimeNumber"
      ];
      this.queryData.partTimeNumber = this.$data["tableData1"][0][
        "partTimeNumber"
      ];
      this.queryData.mGraduate = this.$data["tableData2"][0]["graduate"];
      this.queryData.mEmployment = this.$data["tableData2"][0]["employment"];
      this.queryData.mDomestic = this.$data["tableData2"][0]["domestic"];
      this.queryData.mAbroad = this.$data["tableData2"][0]["abroad"];
      this.queryData.mEntrepreneurship = this.$data["tableData2"][0][
        "entrepreneurship"
      ];
      this.queryData.mOthers = this.$data["tableData2"][0]["others"];
      this.queryData.mUnemployed = this.$data["tableData2"][0]["unemployed"];
      this.queryData.dGraduate = this.$data["tableData2"][1]["graduate"];
      this.queryData.dEmployment = this.$data["tableData2"][1]["employment"];
      this.queryData.dDomestic = this.$data["tableData2"][1]["domestic"];
      this.queryData.dAbroad = this.$data["tableData2"][1]["abroad"];
      this.queryData.dEntrepreneurship = this.$data["tableData2"][1][
        "entrepreneurship"
      ];
      this.queryData.dOthers = this.$data["tableData2"][1]["others"];
      this.queryData.dUnemployed = this.$data["tableData2"][1]["unemployed"];
      this.queryData.mCompany1 = this.$data["tableData3"][0]["company1"];
      this.queryData.mCompany2 = this.$data["tableData3"][0]["company2"];
      this.queryData.mCompany3 = this.$data["tableData3"][0]["company3"];
      this.queryData.mCompany4 = this.$data["tableData3"][0]["company4"];
      this.queryData.mCompany5 = this.$data["tableData3"][0]["company5"];
      this.queryData.dCompany1 = this.$data["tableData3"][1]["company1"];
      this.queryData.dCompany2 = this.$data["tableData3"][1]["company2"];
      this.queryData.dCompany3 = this.$data["tableData3"][1]["company3"];
      this.queryData.dCompany4 = this.$data["tableData3"][1]["company4"];
      this.queryData.dCompany5 = this.$data["tableData3"][1]["company5"];
      this.queryData.mGov = this.$data["tableData4"][0]["gov"];
      this.queryData.mInstitution = this.$data["tableData4"][0]["institution"];
      this.queryData.mTypeCompany = this.$data["tableData4"][0]["company"];
      this.queryData.mTypeOther = this.$data["tableData4"][0]["other"];
      this.queryData.dGov = this.$data["tableData4"][1]["gov"];
      this.queryData.dInstitution = this.$data["tableData4"][1]["institution"];
      this.queryData.dTypeCompany = this.$data["tableData4"][1]["company"];
      this.queryData.dTypeOther = this.$data["tableData4"][1]["other"];
      this.queryData.mProvince = this.$data["tableData5"][0]["province"];
      this.queryData.mEast = this.$data["tableData5"][0]["east"];
      this.queryData.mCentral = this.$data["tableData5"][0]["central"];
      this.queryData.mWest = this.$data["tableData5"][0]["west"];
      this.queryData.mRegionAbroad = this.$data["tableData5"][0]["abroad"];
      this.queryData.dProvince = this.$data["tableData5"][1]["province"];
      this.queryData.dEast = this.$data["tableData5"][1]["east"];
      this.queryData.dCentral = this.$data["tableData5"][1]["central"];
      this.queryData.dWest = this.$data["tableData5"][1]["west"];
      this.queryData.dRegionAbroad = this.$data["tableData5"][1]["abroad"];
    },
    validAll() {
      let msgList = [];
      this.getAllData();
      if (
        Number(this.queryData.fullTimeNumber) +
          Number(this.queryData.partTimeNumber) !==
        Number(this.queryData.mGraduate) + Number(this.queryData.dGraduate)
      ) {
        msgList.push(
          `全日制毕业生数、非全日制毕业生数之和与硕士、博士毕业生之和不相等，请核实`
        );
      }
      if (
        Number(this.queryData.mGraduate) !==
        Number(this.queryData.mEmployment) +
          Number(this.queryData.mDomestic) +
          Number(this.queryData.mAbroad) +
          Number(this.queryData.mEntrepreneurship) +
          this.queryData.mUnemployed
      ) {
        msgList.push(
          `Ⅲ-1-1-1就业情况统计表中，硕士毕业生人数与就业人数情况数值之和不相等，请核实`
        );
      }
      if (
        Number(this.queryData.dGraduate) !==
        Number(this.queryData.dEmployment) +
          Number(this.queryData.dDomestic) +
          Number(this.queryData.dAbroad) +
          Number(this.queryData.dEntrepreneurship) +
          this.queryData.dUnemployed
      ) {
        msgList.push(
          `Ⅲ-1-1-1就业情况统计表中，博士毕业生人数与就业人数情况数值之和不相等，请核实`
        );
      }
      if (
        Number(this.queryData.mEmployment) !==
        Number(this.queryData.mGov) +
          Number(this.queryData.mInstitution) +
          Number(this.queryData.mTypeCompany) +
          Number(this.queryData.mTypeOther)
      ) {
        msgList.push(
          `Ⅲ-1-1-3签约单位类型分布表中，硕士签约人数与签约单位类型分布数值的和不相等，请核实`
        );
      }
      if (
        Number(this.queryData.dEmployment) !==
        Number(this.queryData.dGov) +
          Number(this.queryData.dInstitution) +
          Number(this.queryData.dTypeCompany) +
          Number(this.queryData.dTypeOther)
      ) {
        msgList.push(
          `Ⅲ-1-1-3签约单位类型分布表中，博士签约人数与签约单位分布数值的和不相等，请核实`
        );
      }
      if (
        Number(this.queryData.mEmployment) !==
        Number(this.queryData.mProvince) +
          Number(this.queryData.mEast) +
          Number(this.queryData.mCentral) +
          Number(this.queryData.mWest) +
          Number(this.queryData.mRegionAbroad)
      ) {
        msgList.push(
          `Ⅲ-1-1-4签约单位类型分布表中，硕士签约人数与签约单位地域分布数值的和不相等，请核实`
        );
      }
      if (
        Number(this.queryData.dEmployment) !==
        Number(this.queryData.dProvince) +
          Number(this.queryData.dEast) +
          Number(this.queryData.dCentral) +
          Number(this.queryData.dWest) +
          Number(this.queryData.dRegionAbroad)
      ) {
        msgList.push(
          `Ⅲ-1-1-4签约单位类型分布表中，博士签约人数与签约单位地域分布数值的和不相等，请核实`
        );
      }
      console.log(msgList.length);
      if (msgList.length === 0) {
        this.$XModal.message({
          status: "success",
          duration: 5000,
          message: "校验全部通过，数据已保存！"
        });
      } else {
        this.$XModal.message({
          status: "error",
          duration: 10000,
          message: h => {
            return [
              h(
                "div",
                {
                  style: {
                    maxHeight: "400px",
                    lineHeight: "40px",
                    fontSize: "20px",
                    color: "red",
                    overflow: "auto"
                  }
                },
                msgList.map(msg => h("div", msg))
              )
            ];
          }
        });
        this.$XModal.message({
          status: "error",
          duration: 3000,
          message: "校验未通过，数据保存失败！"
        });
      }
    },
    save() {
      this.validAll();
      //提交到服务器
    }
  }
};
</script>

<style scoped>
.table {
  padding: 20px;
}
.title {
  padding-left: 10px;
  border: 1px solid #eee;
}
.title h2 {
  height: 40px;
  line-height: 40px;
  margin-bottom: 0;
}
.title h3 {
  height: 32px;
  line-height: 32px;
  margin-bottom: 0;
}
.title h4 {
  height: 30px;
  line-height: 30px;
  margin-bottom: 0;
}
.saveBtn {
  margin-top: 20px;
}
</style>
