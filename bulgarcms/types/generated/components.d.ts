import type { Schema, Attribute } from '@strapi/strapi';

export interface IndexServiciosTexts extends Schema.Component {
  collectionName: 'components_index_servicios_texts';
  info: {
    displayName: 'ServiciosTitles';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'index.servicios-texts': IndexServiciosTexts;
    }
  }
}
