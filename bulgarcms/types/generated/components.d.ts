import type { Schema, Attribute } from '@strapi/strapi';

export interface ServiciosSection extends Schema.Component {
  collectionName: 'components_servicios_sections';
  info: {
    displayName: 'Section';
    icon: 'archive';
  };
  attributes: {
    Header: Attribute.String;
    Description: Attribute.Text;
    List: Attribute.Text;
  };
}

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

export interface ContactoSections extends Schema.Component {
  collectionName: 'components_contacto_sections';
  info: {
    displayName: 'Sections';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface NosotrosSections extends Schema.Component {
  collectionName: 'components_nosotros_sections';
  info: {
    displayName: 'Sections';
    icon: 'archive';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'servicios.section': ServiciosSection;
      'index.servicios-texts': IndexServiciosTexts;
      'contacto.sections': ContactoSections;
      'nosotros.sections': NosotrosSections;
    }
  }
}
