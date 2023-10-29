<script>
import { Input } from 'element-ui';

export default {
  extends: Input,
  props: {
    autocomplete: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
.el-input {
  &.is-disabled {
    .el-input__inner:disabled {
      font-weight: 700;
      color: $--color-text-regular;
      -webkit-text-fill-color: $--color-text-regular;
      cursor: default;
    }
  }
}

.el-input__inner {
  height: rem(36);
}

.el-input--large {
  .el-input__inner {
    height: $--input-large-height;
  }

  .el-input__prefix {
    width: rem(40px);
  }

  .el-input__icon {
    line-height: $--input-large-height;
  }
}

.el-input--prefix {
  .el-input__inner {
    padding-left: rem(40px + 8px);
    &:focus {
      border-color: $--input-border-color;
    }
  }
}

.el-input__inner,
.el-textarea__inner {
  padding: rem(8px);
  line-height: 1.4;
}

.el-input__prefix {
  left: 0;
  width: rem(32px);
  height: 100%;
  border-right: $--input-border;
  font-size: rem(16px);
  pointer-events: none;
  .el-input__icon {
    width: 100%;
    pointer-events: none;
    cursor: default;
  }
}
</style>
