import { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  fields: [
    {
      name: 'nav',
      label: 'Navigation',
      type: 'array',
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
        },
        {
          name: 'link',
          label: 'Slug',
          type: 'text',
        },
        {
          name: 'menuStyle',
          label: 'Menu Style',
          type: 'select',
          options: [
            {
              label: 'No Dropdown',
              value: 'none',
            },
            {
              label: 'Regular Dropdown',
              value: 'dropdown',
            },
            {
              label: 'Mega Menu',
              value: 'megamenu',
            },
          ],
          defaultValue: 'none',
        },
        {
          name: 'subnav',
          label: 'Sub Navigation',
          type: 'array',
          admin: {
            condition: (data, siblingData) => {
              return siblingData?.menuStyle === 'dropdown' || siblingData?.menuStyle === 'megamenu'
            },
          },
          fields: [
            {
              name: 'label',
              label: 'Label',
              type: 'text',
            },
            {
              name: 'link',
              label: 'Slug',
              type: 'text',
            },
          ],
        },
      ],
      minRows: 1,
    },
  ],
}
