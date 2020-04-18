<template>
  <a-tooltip overlayClassName="tooltip-custom">
    <template slot="title">
      11111111
    </template>
    Tooltip will show when mouse enter.
  </a-tooltip>
</template>

<script></script>

<style lang="less">
.tooltip-custom {
  .ant-tooltip-arrow::before {
    background-color: #fff;
  }
  .ant-tooltip-inner {
    background-color: #fff;
    color: #555;
  }
}
</style>
