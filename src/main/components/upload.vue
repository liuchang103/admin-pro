<template>
  <div>
    <template v-if="listVisible">
      <div class="scoped-upload-list" v-for="(item, key) in $refs.upload.fileList" :key="key">
        <template v-if="item.status === 'finished'">
          <img :src="item.url | url" />
          <div class="scoped-upload-list-item">
            <Icon type="ios-eye-outline" @click.native="handleView(item)" />
            <Icon type="ios-trash-outline" @click.native="handleRemove(item)" />
          </div>
        </template>
        <template v-else>
          <Progress v-if="item.showProgress" :percent="item.percentage" hide-info />
        </template>
      </div>
    </template>
    <Upload
      ref="upload"
      :show-upload-list="false"
      :default-file-list="defaultList"
      :format="['jpg','jpeg','png']"
      :max-size="2048"
      :multiple="multiple"
      :on-success="handleSuccess"
      :action="action"
      type="drag"
      style="display: inline-block;width:58px;"
    >
      <Icon type="md-cloud-upload" size="20" style="line-height: 58px;" />
    </Upload>
    <Modal v-model="visible" footer-hide>
      <img
        :src="img | url"
        v-if="visible"
        style="width: 100%"
      />
    </Modal>
  </div>
</template>
<script>
import { url } from '@/tools'

export default {
  props: {
    value: [String, Array]
  },
  watch: {
    // 监听双向绑定
    value() {
      // 如果重复，将不更新
      if(this.value !== this.valueTemp) {
        this.set(this.value)
      }
    }
  },
  data() {
    return {
      action: process.env.VUE_APP_UPLOAD,
      img: "",
      visible: false,
      listVisible: false,
      defaultList: [],
      multiple: false,

      // 双向绑定缓存
      valueTemp: false,
    }
  },
  filters: {
    url(text) {
      return url(text)
    }
  },
  mounted() {
    this.listVisible = true
  },
  methods: {
    // 显示默认列表
    set(url) {
      let data = []

      // 判断是否多图
      this.multiple = typeof url !== 'string'

      // 整理默认列表
      if(url) {
        if(this.multiple) {
          url.map(url => {
            data.push({ url })
          })
        } else {
          data.push({ url })
        }
      }

      // 更新默认列表及缓存
      this.valueTemp = data
      this.defaultList = data
    },

    // 获取当前上传列表
    get() {
      // 上传文件列表
      const fileList = this.$refs.upload.fileList
      // 整理新数组
      let data = []
      // 循环文件列表
      for (const key in fileList) {
        if (fileList[key].url) {
          data.push(fileList[key].url)
        }
      }

      return this.multiple ? data : (data[0] || '') 
    },

    // 触发双向绑定
    input() {
      let input = this.get()
      this.valueTemp = input
      this.$emit('input', this.valueTemp)
    },

    handleView(file) {
      this.img = file.url
      this.visible = true;
    },
    handleRemove(file) {
      this.$refs.upload.fileList.splice(this.$refs.upload.fileList.indexOf(file), 1);

      // 触发事件
      this.input()
      this.$emit('remove', file.url)
    },
    handleSuccess(response, file) {
      file.url = response.url

      // 如果是单图
      if(!this.multiple) {
        this.$refs.upload.fileList = [file]
      }

      // 触发事件
      this.input()
      this.$emit('success', file.url)
    }
  }
};
</script>
<style lang="less" scoped>
.scoped-upload-list {
  display: inline-block;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;

  img {
    width: 100%;
    height: 100%;
  }
  
  &:hover &-item{
    display: block;
  }

  &-item {
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);

    i {
      color: #fff;
      font-size: 20px;
      cursor: pointer;
      margin: 0 2px;
    }
  }
}
</style>