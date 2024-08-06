import type { Schema, Attribute } from '@strapi/strapi';

export interface IndexServiciosTitles extends Schema.Component {
  collectionName: 'components_index_servicios_titles';
  info: {
    displayName: 'ServiciosTitles';
    icon: 'quote';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
  };
}

export interface ServiciosSection extends Schema.Component {
  collectionName: 'components_servicios_sections';
  info: {
    displayName: 'Section';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Header: Attribute.String;
    Description: Attribute.Text;
    List: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'index.servicios-titles': IndexServiciosTitles;
      'servicios.section': ServiciosSection;
    }
  }
}
