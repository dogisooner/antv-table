<template>
  <div>
    <h2>I-2-3-2-1 校内师资队伍</h2>
    <a-table
      class="table"
      bordered
      :dataSource="dataSource"
      :columns="columns"
      :pagination="false"
    >
      <template slot="name" slot-scope="text, record">
        <editable-cell
          :text="text"
          @change="onCellChange(record.key, 'name', $event)"
        />
      </template>
    </a-table>
    <div class="div1"></div>
  </div>
</template>
<script>
const EditableCell = {
  template: `
      <div class="editable-cell">
        <div v-if="editable" class="editable-cell-input-wrapper">
          <a-input :value="value" @change="handleChange" @pressEnter="check" />
          <a-icon
          type="check"
          class="editable-cell-icon-check"
          @click="check"
        />
        </div>
        <div v-else class="editable-cell-text-wrapper">
          {{ value || ' ' }}
          <a-icon type="edit" class="editable-cell-icon" @click="edit" />
        </div>
      </div>
    `,
  props: {
    text: String
  },
  data() {
    return {
      value: this.text,
      editable: true
    };
  },
  methods: {
    handleChange(e) {
      const value = e.target.value;
      this.value = value;
    },
    check() {
      this.editable = false;
      this.$emit("change", this.value);
    },
    edit() {
      this.editable = true;
    }
  }
};
export default {
  components: {
    EditableCell
  },
  data() {
    return {
      dataSource: [
        {
          key: "1",
          rank: "正高级",
          below34: "1"
        },
        {
          key: "2",
          rank: "副高级",
          below34: "1"
        },
        {
          key: "3",
          rank: "中级",
          below34: "1"
        },
        {
          key: "4",
          rank: "初级",
          below34: "1"
        },
        {
          key: "5",
          rank: "无",
          below34: "1"
        },
        {
          key: "6",
          rank: "总计",
          total: ""
        }
      ],
      columns: [
        {
          title: "专业技术职务级别",
          dataIndex: "rank",
          width: 100
        },
        {
          title: "合计",
          dataIndex: "total",
          width: 70
        },
        {
          title: "年龄结构",
          children: [
            {
              title: "34岁及以下",
              dataIndex: "below34",
              key: "below34",
              width: 50,
              scopedSlots: { customRender: "name" }
            },
            {
              title: "35至44岁",
              dataIndex: "from35to44",
              key: "from35to44",
              width: 50,
              scopedSlots: { customRender: "name" }
            },
            {
              title: "45至59岁",
              dataIndex: "from45to59",
              key: "from45to59",
              width: 50,
              scopedSlots: { customRender: "name" }
            },
            {
              title: "60岁以上",
              dataIndex: "above60",
              key: "above60",
              width: 50,
              scopedSlots: { customRender: "name" }
            }
          ]
        },
        {
          title: "具有博士学位人数",
          dataIndex: "doctor",
          width: 80,
          scopedSlots: { customRender: "name" }
        },
        {
          title: "具有海外经历人数",
          dataIndex: "overseas",
          width: 80,
          scopedSlots: { customRender: "name" }
        },
        {
          title: "具有实务背景人数",
          dataIndex: "practice",
          width: 80,
          scopedSlots: { customRender: "name" }
        },
        {
          title: "外籍教师人数",
          dataIndex: "foreign",
          width: 80,
          scopedSlots: { customRender: "name" }
        }
      ]
    };
  },
  computed: {
    sum() {
      return this.dataSource.map();
    }
  },
  methods: {
    onCellChange(key, dataIndex, value) {
      const dataSource = [...this.dataSource];
      const target = dataSource.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.dataSource = dataSource;
      }
    }
  }
};
</script>
<style>
.table {
  width: 920px;
  padding: 0 20px;
}
.div1 {
  width: 880px;
  height: 200px;
  margin-left: 20px;
  border: 1px solid #eee;
  display: flex;
}
.editable-cell {
  position: relative;
}

.editable-cell-input-wrapper,
.editable-cell-text-wrapper {
  padding-right: 24px;
}

.editable-cell-text-wrapper {
  padding: 5px 24px 5px 5px;
}

.editable-cell-icon,
.editable-cell-icon-check {
  position: absolute;
  right: 0;
  width: 20px;
  cursor: pointer;
}

.editable-cell-icon {
  line-height: 18px;
  display: none;
}

.editable-cell-icon-check {
  line-height: 28px;
}

.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}

.editable-cell-icon:hover,
.editable-cell-icon-check:hover {
  color: #108ee9;
}

.editable-add-btn {
  margin-bottom: 8px;
}
</style>
