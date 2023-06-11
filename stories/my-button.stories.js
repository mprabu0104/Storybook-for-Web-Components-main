import { html } from 'lit-html';
import '../src/gl-button.js';
import { text, withKnobs, withWebComponentsKnobs } from '@open-wc/demoing-storybook';

export default {
  title: 'gl-button',
  component: 'gl-button',
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: { options: { selectedPanel: 'storybookjs/knobs/panel' } },
};

export const Primary = () =>
  html`
    <gl-button buttonText="Primary"></gl-button>
    <style>
    html {
      --gl-button-font-color: #fff;
      --gl-button-font-size: 16px;
      --gl-button-bg-color: #4caf50;
    }
  </style>
  `;
 
export const Danger = () =>
  html`
    <gl-button buttonText="Danger"></gl-button>
    <style>
    html {
      --gl-button-font-color: #fff;
      --gl-button-font-size: 16px;
      --gl-button-bg-color: #cd2b2c;
    }
  </style>
  `;
 