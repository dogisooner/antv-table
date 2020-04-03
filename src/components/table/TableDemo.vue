<template>
  <div class="table">
    <h2>I-2-3-2-1 校内师资队伍</h2>
    <a-table :columns="columns" :dataSource="data" bordered :pagination="false">
      <template slot="name" slot-scope="text">
        <a>{{ text }}</a>
      </template>
    </a-table>
  </div>
</template>

<script>
//In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const renderContent = value => {
  const obj = {
    children: value,
    attrs: {}
  };
  return obj;
};

const data = [
  {
    key: "1",
    rank: "正高级"
  },
  {
    key: "2",
    rank: "副高级"
  },
  {
    key: "3",
    rank: "中级"
  },
  {
    key: "4",
    rank: "初级"
  },
  {
    key: "5",
    rank: "无"
  },
  {
    key: "6",
    rank: "合计"
  }
];

export default {
  data() {
    const columns = [
      {
        title: "专业技术职务级别",
        dataIndex: "rank",
        customRender: renderContent,
        width: 100
      },
      {
        title: "合计",
        dataIndex: "total",
        customRender: renderContent,
        width: 70
      },
      {
        title: "年龄结构",
        children: [
          {
            title: "34岁及以下",
            dataIndex: "below34",
            key: "below34",
            width: 50
          },
          {
            title: "35至44岁",
            dataIndex: "from35to44",
            key: "from35to44",
            width: 50
          },
          {
            title: "45至59岁",
            dataIndex: "from45to59",
            key: "from45to59",
            width: 50
          },
          {
            title: "60岁以上",
            dataIndex: "above60",
            key: "above60",
            width: 50
          }
        ]
      },
      {
        title: "具有博士学位人数",
        dataIndex: "doctor",
        customRender: renderContent,
        width: 80
      },
      {
        title: "具有海外经历人数",
        dataIndex: "overseas",
        customRender: renderContent,
        width: 80
      },
      {
        title: "具有实务背景人数",
        dataIndex: "practice",
        customRender: renderContent,
        width: 80
      },
      {
        title: "外籍教师人数",
        dataIndex: "foreign",
        customRender: renderContent,
        width: 80
      }
    ];
    return {
      data,
      columns
    };
  }
};
</script>

<style scoped>
h2 {
  text-align: center;
}
.table {
  padding: 20px;
}
</style>
