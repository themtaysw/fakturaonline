<template>
  <FormItem
    :prop="prop"
    :label="floatingLabel ? '' : label"
    :class="[
      inlineForm ? 'el-form--inline-form' : '',
      inputNarrow ? 'el-form-item--input-narrow' : '',
      spacing ? 'el-form-item--' + spacing : '',
      radio ? 'el-form-item--radio' : '',
      offset ? 'el-form-item--offset' + offsetSize : '',
      vertical ? 'el-form-item--vertical': '',
      errorStyled ? 'el-form-item--error-styled' : '',
    ]"
    :error="errorMessage"
  >
    <template v-if="floatingLabel">
      <div :class="['el-input', focused || hasInputValue ? 'is-focused' : '']">
        <slot
          :slot-handle-focus="handleFocus"
          :slot-handle-blur="handleBlur"
        />
        <span :class="['el-input__label', focused || hasInputValue ? 'is-floating' : '']">{{ label }}</span>
      </div>
    </template>
    <template v-else-if="!floatingLabel">
      <template slot="label">
        <slot name="label" />
      </template>
      <slot />
    </template>
    <div
      slot="error"
      slot-scope="slotProps"
      class="el-form-item__error"
      data-test="form_input_error_message"
    >
      <template v-if="errorMessage">
        <Alert
          v-if="errorAlert"
          type="error"
          show-icon
          :closable="false"
        >
          <template slot="title">
            <span
              v-html="errorMessage"
              @click="errorOnClick"
            />
          </template>
        </Alert>
        <span v-else>
          {{ errorMessage }}
        </span>
      </template>
      <template v-else-if="errorStyled">
        <InputHelp
          v-if="errorStyled"
          type="box"
          state="error"
        >
          {{ $t(`errors.${slotProps.error}`) }}
        </InputHelp>
      </template>
      <template v-else-if="errorAlert">
        <Alert
          v-if="errorAlert"
          type="error"
          show-icon
          :closable="false"
        >
          <template slot="title">
            <span
              v-html="$t(`errors.${slotProps.error}`)"
            />
          </template>
        </Alert>
      </template>
      <template v-else>
        {{ $t(`errors.${slotProps.error}`) }}
      </template>
    </div>

    <InputHelp v-if="help">
      <span v-html="help" />
    </InputHelp>

    <slot name="custom-help" />
  </FormItem>
</template>

<script>
import { FormItem } from 'element-ui';

export default {
  components: {
    FormItem,
  },
  props: {
    prop: String,
    label: String,
    inlineForm: Boolean,
    radio: Boolean,
    offset: [Boolean, String],
    vertical: Boolean,
    spacing: {
      type: String,
    },
    errorMessage: String,
    help: String,
    inputNarrow: Boolean,
    errorStyled: {
      type: Boolean,
      default: false,
    },
    errorAlert: {
      type: Boolean,
      default: false,
    },
    errorOnClick: {
      type: Function,
      default() {},
    },
    floatingLabel: {
      type: Boolean,
      default: false,
    },
    hasInputValue: {
      type: Boolean,
      default: false,
    },

  },
  data() {
    return {
      focused: false,
    };
  },
  computed: {
    offsetSize() {
      if (this.offset === true) {
        return '';
      }
      return `--${this.offset}`;
    },
  },
  methods: {
    handleFocus() {
      this.focused = true;
    },
    handleBlur() {
      this.focused = false;
    },
  },
};
</script>

<style lang="scss">
.nowrap {
  white-space: nowrap;
}

.el-form-item {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: rem(20px);
  &::before,
  &::after {
    display: none;
  }

  &.is-success {
    & .el-input__inner,
    & .el-textarea__inner {
      border-color: $--input-border-color;
      &:focus {
        border-color: $--color-primary;
      }
    }
  }

  &.is-required:not(.is-no-asterisk) {
    > .el-form-item__label {
      position: relative;
      &::before {
        content: none;
      }
    }
  }
}

.el-form-item--disabled {
  .el-form-item__label {
    text-decoration: line-through;
  }
}

.el-form-item--input-narrow {
  .el-form-item__content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .el-input {
    max-width: rem(175px);
  }

  .el-input,
  .el-button {
    margin-right: rem(15px);
  }

  .el-form-item__help {
    margin-top: rem(5px);
    margin-bottom: rem(5px);
    font-size: rem(15px);
    color: $--color-black;
  }
}

.el-form--inline-form {
  .el-form-item__content {
    @include res(sm-and-up, $--breakpoints-spec) {
      display: flex;
    }

    @include res(xs-only, $--breakpoints-spec) {
      .el-button {
        margin-top: rem(15px);
      }
    }
  }

  .el-input {
    margin-right: rem(10px);
  }
}

.el-form-item--xs {
  .el-form-item__label {
    max-width: 15%;
    flex-basis: 15%;

    @include res(xs-only, $--breakpoints-spec) {
      max-width: 100%;
      flex-basis: 100%;
    }

    & + .el-form-item__content {
      max-width: 76%;
      flex-basis: 76%;

      @include res(xs-only, $--breakpoints-spec) {
        max-width: 100%;
        flex-basis: 100%;
      }
    }
  }
}

.el-form-item--xs-full {
  .el-form-item__label {
    max-width: 15%;
    flex-basis: 15%;

    @include res(xs-only, $--breakpoints-spec) {
      max-width: 100%;
      flex-basis: 100%;
    }

    & + .el-form-item__content {
      max-width: 85%;
      flex-basis: 85%;

      @include res(xs-only, $--breakpoints-spec) {
        max-width: 100%;
        flex-basis: 100%;
      }
    }
  }
}

.el-form-item--sm {
  .el-form-item__label {
    max-width: 24%;
    flex-basis: 24%;

    @include res(xs-only, $--breakpoints-spec) {
      max-width: 100%;
      flex-basis: 100%;
    }

    & + .el-form-item__content {
      max-width: 76%;
      flex-basis: 76%;

      @include res(xs-only, $--breakpoints-spec) {
        max-width: 100%;
        flex-basis: 100%;
      }
    }
  }
}

.el-form-item--lg {
  .el-form-item__label {
    max-width: 40%;
    flex-basis: 40%;

    @include res(xs-only, $--breakpoints-spec) {
      max-width: 100%;
      flex-basis: 100%;
    }

    & + .el-form-item__content {
      max-width: 60%;
      flex-basis: 60%;

      @include res(xs-only, $--breakpoints-spec) {
        max-width: 100%;
        flex-basis: 100%;
      }
    }
  }
}

.el-form-item--radio,
.el-form-item--switch {
  .el-form-item__content {
    padding-top: rem(9px);
  }
}

.el-form-item--offset {
  padding-left: 24%;
  &--large {
    padding-left: 34%;
  }
  &--small {
    padding-left: 15%;
  }

  @include res(xs-only, $--breakpoints-spec) {
    padding-left: 0;
  }
}

.el-form-item--vertical {
  display: block;

  .el-form-item__label {
    max-width: 100%;
    & + .el-form-item__content {
      max-width: 100%;
    }
  }
}

.el-form-item__content {
  line-height: normal;
  float: none;
  width: 100%;

  &::before,
  &::after {
    display: none;
  }
}

.el-form-item__error {
  position: static;
}

.el-form-item__label {
  font-weight: 700;
  float: none;
  padding-top: rem(9px);
  text-align: left;
  line-height: 1.4;
  max-width: 34%;
  flex-basis: 34%;

  @include res(xs-only, $--breakpoints-spec) {
    margin-bottom: rem(3);
    padding-top: 0;
    max-width: 100%;
    flex-basis: 100%;
  }

  & + .el-form-item__content {
    max-width: 66%;
    flex-basis: 66%;

    @include res(xs-only, $--breakpoints-spec) {
      max-width: 100%;
      flex-basis: 100%;
    }
  }
}

.el-form-item--error-styled {
  .el-form-item__content {
    display: flex;
    flex-wrap: wrap;
  }

  .el-input {
    width: 148px;
    order: 1;
  }

  .el-form-item__error {
    padding-top: 0;
    order: 2;
  }

  .el-form-item__help {
    width: 100%;
    order: 3;
  }
}

.input-no-arrows {
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}

//new design

.form-group-mobile {
  position: relative;

  .el-input__inner {
    font-weight: 700;
    border-radius: 8px;
    padding: 1.4em .8rem;
  }

  .el-form-item__label {
    font-weight: 400;
    position: absolute;
    top: -12px;
    left: 8px;
    background: #ffffff;
    padding: 0 .2rem;
    z-index: 1;
  }

  .el-form-item__content {
    width: 100%;
    position: relative;
  }
}

.el-input__label {
  position: absolute;
  transform: scale(1);
  left: 9px;
  bottom: 12px;
  transition: transform .3s, bottom .3s;
  color: $blue-light;
  background: #ffffff;
  padding: 0 .3rem;
  pointer-events: none;
  max-width: 95%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.el-input.is-focused .el-input__label {
  bottom: 100%;
  transform: scale(.92) translate3d(-9px, 8px, 0);
  color: $--color-text-regular;
}
</style>
