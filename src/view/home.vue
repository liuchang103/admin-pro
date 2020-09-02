<template>
  <div class="page-content">
    <Row :gutter="30">
      <Col span="6">
        <div class="page-box">
          <div class="page-box-content">
          </div>
        </div>
      </Col>
      <Col span="6">
        <div class="page-box">
          <div class="page-box-content">
          </div>
        </div>
      </Col>
      <Col span="6">
        <div class="page-box">
          <div class="page-box-content">
          </div>
        </div>
      </Col>
      <Col span="6">
        <div class="page-box">
          <div class="page-box-content">
          </div>
        </div>
      </Col>
    </Row>
    <Row :gutter="30">
      <Col span="6">
        <div class="page-box">
          <div class="page-box-content">
          </div>
        </div>
      </Col>
      <Col span="6">
        <div class="page-box">
          <div class="page-box-content">
          </div>
        </div>
      </Col>
      <Col span="6">
        <div class="page-box">
          <div class="page-box-content">
          </div>
        </div>
      </Col>
      <Col span="6">
        <div class="page-box">
          <div class="page-box-content">
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
import Permission from '@/tools/permission'

export default {
  created() {
    console.log(Permission.can(['bb']))
  }
}
</script>