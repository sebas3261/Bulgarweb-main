import type { Schema, Attribute } from '@strapi/strapi';

export interface ServiciosSection extends Schema.Component {
  collectionName: 'components_servicios_sections';
  info: {
    displayName: 'Section';
    icon: 'apps';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'servicios.section': ServiciosSection;
    }
  }
}
