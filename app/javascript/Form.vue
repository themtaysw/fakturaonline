<template>
  <div>
    <Form
      :model="resource"
      ref="form"
    >
      <FormGroup
        prop="invoiceKind"
        :label="$t('form.invoiceForm.fields.invoiceKind.label')"
        :help="$t('form.invoiceForm.fields.invoiceKind.inputHelp')"
      >
        <Select
          v-model="resource.invoiceKind"
          :placeholder="$t('form.invoiceForm.fields.invoiceKind.placeholder')"
          name="invoiceKind"
        >
          <Option
            v-for="option in invoiceKinds"
            :key="option.value"
            :label="option.name"
            :value="option.value"
          />
        </Select>
      </FormGroup>

      <FormGroup
        prop="number"
        :label="$t('form.invoiceForm.fields.number.label')"
      >
        <TextInput
          name="number"
          type="string"
          v-model="resource.number"
        />
      </FormGroup>

      <FormGroup
        prop="vs"
        :label="$t('form.invoiceForm.fields.vs.label')"
      >
        <TextInput
          name="vs"
          type="string"
          v-model="resource.vs"
        />
      </FormGroup>

      <FormGroup
        prop="vs"
        :label="$t('form.invoiceForm.fields.ks.label')"
      >
        <TextInput
          name="ks"
          type="string"
          v-model="resource.ks"
        />
      </FormGroup>

      <FormGroup
        input-narrow
        prop="issedOn"
        :label="$t('form.invoiceForm.fields.issedOn.label')"
      >
        <DatePicker
          v-model="resource.issedOn"
          value-format="timestamp"
          :clearable="false"
        />
      </FormGroup>

      <FormGroup
        prop="invoiceKind"
        :label="$t('form.invoiceForm.fields.maturity.label')"
      >
        <Select
          v-model="resource.maturityKind"
          :placeholder="$t('form.invoiceForm.fields.maturityKind.placeholder')"
          name="maturityKind"
        >
          <Option
            v-for="option in maturityKinds"
            :key="option.value"
            :label="option.name"
            :value="option.value"
          />
        </Select>
      </FormGroup>

    </Form>
  </div>
</template>

<script>

export default {
  name: 'BasicForm',
  data: () => ({
    resource: {
      number: '',
      vs: '',
      ks: '',
      issedOn: '',
      invoiceKind: 'vat_invoice'
    },
    invoiceKinds: [
      { value: 'vat_invoice', name: 'Faktura s DPH' },
      { value: 'invoice', name: 'Faktura bez DPH' },
      { value: 'proforma', name: 'Proforma' },
    ],
    maturityKinds: [
      { value: '7', name: '7 dnů' },
      { value: '14', name: '14 dnů' },
      { value: '21', name: '21 dnů' },
    ]
  })
}
</script>

<style scoped>
</style>
