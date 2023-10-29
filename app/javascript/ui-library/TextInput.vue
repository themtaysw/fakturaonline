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

  &::placeholder {
    color: $--color-lighter-blue-new;
  }
}

.el-textarea__inner {
  &::placeholder {
    color: $--color-lighter-blue-new;
  }
}

.el-input--prefix {
  .el-input__inner {
    padding-left: rem(36px);
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
  border-right: 0;
  font-size: rem(16px);
  pointer-events: none;
  .el-input__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    pointer-events: none;
    color: $--color-lighter-blue-new;
    cursor: default;
  }
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

.el-input--extra-large {
  .el-input__inner {
    height: rem(55px);
    font-size: rem(22px);
    font-weight: 600;
    padding-left: rem(70px);
    &::placeholder {
      color: $--color-lighter-blue-new;
      font-size: rem(16px);
    }
  }

  .el-input__prefix {
    width: rem(55px);
    font-size: rem(22px);
    border-right: 1px solid $--color-lighter-blue-new;
  }

  .el-input__suffix {
    width: rem(55px);
    font-size: rem(22px);
  }

  .el-input__clear {
    font-size: 2rem;
    color: $--color-blue-new;
  }

  .el-input__icon {
    line-height: rem(55px);
  }
}
</style>
