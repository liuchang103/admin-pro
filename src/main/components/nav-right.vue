<template>
  <div>
    <Right />
    <Fullscreen />
    <Lang type="bottom-end" />
    <User />
  </div>
</template>

<script>
import Lang from './lang';
import Fullscreen from './fullscreen';
import User from '@/view/main/user';
import Right from '@/view/main/header-right';

export default {
  components: {
    Lang,
    Fullscreen,
    User,
    Right
  }
}
</script>