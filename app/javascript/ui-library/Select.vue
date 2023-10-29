<script>
import { Select } from 'element-ui';

export default {
  extends: Select,
  computed: {
    iconClass() {
      return this.visible ? 'arrow-up is-reverse' : 'arrow-up';
    },
  },
};
</script>

<style lang="scss">
.el-select {
  display: block;

  .el-tag--info {
    color: $--color-primary;
    border-color: $--color-gray-2;
    background-color: $--color-gray-7;

    .el-tag__close {
      color: $--color-primary;
    }
  }
  .el-input {
    .el-select__caret {
      color: $--color-white;
    }
  }

  .el-input__inner {
    padding-right: rem(40px);
    border-color: $--color-primary;
  }

  .el-input__suffix {
    width: rem(32px);
    right: 0;
    background-color: $--color-primary;
    border-radius: 0 4px 4px 0;
    .el-input__icon {
      font-weight: 700;
    }
  }
}

.el-select-dropdown {
  &.el-popper {
    margin: 0;
  }
  .popper__arrow {
    display: none;
  }
}

.el-select-dropdown__item {
  font-size: rem(13px);
  padding: rem(6px);
  line-height: 1;
  color: $--color-text-regular;

  &:hover,
  &.hover {
    color: $--color-white;
  }

  &.selected {
    background-color: $--select-option-selected;
    color: $--color-text-regular;
  }

  &.selected.hover {
    color: $--color-white;
    background-color: $--color-primary;
  }
}

.el-select-dropdown.is-multiple {
  .el-select-dropdown__item {
    &.selected.hover {
      color: $--color-white;
      background-color: $--color-primary;
    }
  }
}
</style>
