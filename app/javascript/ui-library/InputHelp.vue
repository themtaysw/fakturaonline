<template>
  <div :class="['el-form-item__help', classType]">
    <span v-if="value">
      {{ value }}
    </span>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    type: {
      type: String,
      default: '',
    },
  },
  computed: {
    classType() {
      return this.type ? `el-form-item__help--${this.type}` : '';
    },
  },
};
</script>

<style lang="scss" scoped>
  .el-form-item__help {
    margin-top: rem(5);
    font-size: rem(12);
    color: $--color-text-blue;
  }

  .el-form-item__help--box {
    margin: 0 0 0 rem(9);
    padding: rem(8) rem(10);
    height: rem(36);
    font-size: rem(12);
    display: flex;
    align-items: center;
    white-space: nowrap;
    border: 1px solid $--input-border-color;
    background-color: #fcfcfc;
    color: $--color-text-regular;
  }

  .icon {
    margin-left: rem(8px);
    margin-top: rem(5px);
    display: inline-block;
    font-size: rem(18px);
  }

  .icon-ares-loading {
    color: $--color-primary;
  }

  .icon-ares-ok {
    color: $--color-success;
  }

  .icon-ares-error {
    color: $--color-danger;
  }

  .icon-ares-refresh {
    color: $--color-primary;
  }
</style>
