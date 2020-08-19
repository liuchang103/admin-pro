<template>
  <div>
    <HeaderRight />
    <Fullscreen />
    <Lang type="bottom-end" />
    <HeaderUser />
  </div>
</template>

<script>
import Lang from './lang';
import Fullscreen from './fullscreen';
import HeaderUser from '@/view/main/header/user';
import HeaderRight from '@/view/main/header/right';

export default {
  components: {
    Lang,
    Fullscreen,
    HeaderUser,
    HeaderRight
  }
}
</script>