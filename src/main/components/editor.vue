<template>
  <div class="scoped-editor">
    <div id="toolbar" class="scoped-editor-tool">
      <select class="ql-header">
        <option :value="1"></option>
        <option :value="2"></option>
        <option :value="3"></option>
        <option :value="4"></option>
        <option :value="5"></option>
        <option :value="6"></option>
      </select>

      <button class="ql-bold"></button>
      <button class="ql-italic"></button>
      <button class="ql-underline"></button>
      <button class="ql-strike"></button>
      <select class="ql-color" value="color"></select>
      <select class="ql-background" value="background"></select>

      <button class="ql-list" value="ordered"></button>
      <button class="ql-list" value="bullet"></button>
      <select class="ql-align" value="align"></select>
      <button class="ql-code-block"></button>
      <button class="ql-clean"></button>

      <Poptip placement="bottom">
        <button class="ql-image"></button>
        <template slot="content">
          <Upload ref="upload" @success="uploadSuccess" @remove="uploadRemove" />
        </template>
      </Poptip>
    </div>
    <div id="editor" class="scoped-editor-content" :style="{ height: height + 'px' }" />
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import Quill from 'quill'
import Upload from './upload'
import { url } from '@/tools'

export default {
  components: {
    Upload
  },
  props: {
    value: String,
    height: Number
  },
  watch: {
    value(value) {
      // 设置内容，外界内容发生变动再更新
      if(value !== this.content) {
        this.editor.setText(value)
      }
    }
  },
  mounted() {
    // 初始化编辑器
    this.editor = new Quill('#editor', this.option)
    // 设置内容
    this.editor.setText(this.value)
    // 监听变化
    this.editor.on('text-change', () => {
      let text = this.editor.root.innerHTML
      this.content = text
      this.$emit('input', text)
    });
    // 初始化多图上传
    this.$refs.upload.set([])
  },
  data() {
    return {
      editor: {},
      option: {
        theme: 'snow',
        modules: {
          toolbar: {
            container: '#toolbar',
            handlers: {
              image: () => {
                return 
              }
            }
          }
        },
      },
      content: ''
    }
  },
  methods: {
    // 上传图片
    uploadSuccess(file) {
      this.editor.insertEmbed(this.editor.getSelection(true).index, 'image', url(file));
    },
    // 删除图片
    uploadRemove(file) {
      const data = []

      // 检查有使用此地址的嵌入
      this.editor.getContents().map(item => {
        if(item.insert.image !== url(file)) {
          data.push(item)
        }
      })

      // 重新插入
      this.editor.setContents(data)
    }
  }
}
</script>
<style lang="less">
  @import '@/style/app.less';

  // 选中颜色
  .ql-snow.ql-toolbar button:hover, .ql-snow .ql-toolbar button:hover, .ql-snow.ql-toolbar button:focus, .ql-snow .ql-toolbar button:focus, .ql-snow.ql-toolbar button.ql-active, .ql-snow .ql-toolbar button.ql-active, .ql-snow.ql-toolbar .ql-picker-label:hover, .ql-snow .ql-toolbar .ql-picker-label:hover, .ql-snow.ql-toolbar .ql-picker-label.ql-active, .ql-snow .ql-toolbar .ql-picker-label.ql-active, .ql-snow.ql-toolbar .ql-picker-item:hover, .ql-snow .ql-toolbar .ql-picker-item:hover, .ql-snow.ql-toolbar .ql-picker-item.ql-selected, .ql-snow .ql-toolbar .ql-picker-item.ql-selected {
    color: @color;
  }

  // 工具栏颜色
  .ql-snow{
    .ql-picker{
      color: @color-sub;
    }
    .ql-stroke{
      stroke: @color-sub;
    }
  }

  // 下拉样式
  .ql-toolbar.ql-snow .ql-picker-options{
    border: 0;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    border-radius: 6px;
  }

  // 颜色选择器
  .ql-snow .ql-color-picker .ql-picker-item{
    border-radius: 2px
  }
</style>

<style lang="less" scoped>
  @import '@/style/app.less';

  .scoped-editor{
    background: #fff;
    border-radius: 6px;
    line-height: 1.5;

    &-tool{
      padding: 12px 6px 0;
      border: 1px @color-border solid;
      border-bottom: 0;
      border-radius: 6px 6px 0 0;
    }

    &-content{
      border: 1px @color-border solid;
      border-top: 0;
      border-radius: 0 0 6px 6px;
    }

    select{
      outline:none
    }
  }
</style>