<template>
  <div class="wrapper">
    <div class="parents">
      <a-textarea
        :maxlength="maxLength"
        @input="textareaChange($event)"
        v-model="content"
      ></a-textarea>
      <span class="tips">
        <b :class="{ codeNum: codeNum != 0, zero: codeNum == 0 }">{{
          codeNum
        }}</b
        >/500
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
      maxLength: 500,
      codeNum: 500
    };
  },
  methods: {
    getStringLengthForChinese(val) {
      let str = val.toString();
      let bytesCount = 0;
      for (let i = 0, len = str.length; i < len; i++) {
        let c = str.charCodeAt(i);
        if ((c > 0x0001 && c <= 0x007e) || (c >= 0xff60 && c <= 0xff9f)) {
          //这里是16进制表示，也可以用十进制
          bytesCount = bytesCount + 0.5;
        } else {
          bytesCount = bytesCount + 1;
        }
      }
      return bytesCount;
    },
    textareaChange(e) {
      setTimeout(() => {
        let count = this.computedLen(e.target.value, 500, 500);
        this.maxLength = count.maxLen;
      }, 200);
    },
    computedLen(str, totalLength, maxLength) {
      let rep = /[0-9a-zA-Z|\s]/; // 正则判断字母数字
      let strArr = str.split("");
      let totalLen = totalLength; // 总的输入长度
      let maxLen = maxLength; // input或textarea上maxlength的值，这里由于中文算2个占位，所以传入的maxLength应该为totalLength的一半
      let len = 0; // 已经输入的字符数
      let leftLen = 0; // 剩余可输入字符数

      strArr.forEach((val, key) => {
        if (rep.test(val)) {
          leftLen = Math.ceil(totalLen - len * 2); // 剩余输入数等于总长 - 输入数，乘以2是因为非中文的len只算0.5
          if (leftLen === 0) {
            return false; // 如果剩余数是0,就退出循环，不能输入了
          }
          len = len + 0.5; // 如果输入非中文，算加半个字符，maxlengtrh也加0.5,这样就实现了两个非中文长度等于一个中文
          maxLen = maxLen + 0.5;
        } else {
          len = len + 1;
        }
      });
      return {
        maxLen: Math.ceil(maxLen) // 返回我们需要的maxlegt的值
      };
    }
  },
  watch: {
    content() {
      this.codeNum = 500 - this.getStringLengthForChinese(this.content);
      if (this.getStringLengthForChinese(this.content) > 500) {
        //如果占位数大于30
        let arr = this.content.split(""); //输入字符串转为数组，依次推出最后一位元素
        for (let i = arr.length - 1; i >= 0; i--) {
          arr = arr.slice(0, i); // 每推出一个，将数组转为字符串，做一次占位数判断
          this.content = arr.join("");
          if (this.getStringLengthForChinese(this.content) <= 500) {
            break;
          }
        }
      }
    }
  }
};
</script>

<style scoped>
.wrapper {
  border-top: 1px solid #999;
  padding: 30px;
}
.parents {
  width: 100%;
  height: 80px;
  position: relative;
}
textarea {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.tips {
  position: absolute;
  bottom: 0;
  right: 0;
}
.codeNum {
  color: #999999;
}
.zero {
  color: #e81844;
}
</style>
