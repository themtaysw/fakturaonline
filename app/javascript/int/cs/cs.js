import elementLocale from 'element-ui/lib/locale/lang/cs-CZ';

const messages = {
  cs: {
    blog: {
      more: 'Další články z blogu →',
      published: 'Publikováno:',
      read: 'Přečíst →',
      title: 'Aktuálně z blogu',
    },
    form: {
      invoiceForm: {
        fields: {
          invoiceKind: {
            label: 'Druh faktury',
            inputHelp: 'Věnujte pozornost výběru druhu faktury. Pokud nejste plátci DPH, měli byste zvolit fakturu bez DPH!'
          },
          number: {
            label: 'Číslo faktury',
          },
          vs: {
            label: 'Variabilní symbol',
          },
          ks: {
            label: 'Konstantní symbol',
          },
          issedOn: {
            label: 'Datum vystavení',
          },
          maturity: {
            label: 'Splatnost',
          },
        }
      },
    },
    ...elementLocale
  },
};

export default messages;
