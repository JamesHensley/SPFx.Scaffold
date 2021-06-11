import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, WebPartContext, IPropertyPaneField, IPropertyPaneConfiguration, PropertyPaneTextField, PropertyPaneToggle } from '@microsoft/sp-webpart-base';

import { initializeIcons } from '@fluentui/react/lib/Icons';
import { initializeFileTypeIcons } from '@fluentui/react-file-type-icons';

import AppService from '../../services/AppService';

import PnPTelemetry from '@pnp/telemetry-js';
import { ScaffoldComponent, IScaffoldComponentProps } from './components/ScaffoldComponent';

export interface IScaffoldWebPartProps {
  description: string;
  isDebugging: boolean;
}

export default class ScaffoldWebPart extends BaseClientSideWebPart<IScaffoldWebPartProps> {
  private mockSettings: IScaffoldWebPartProps;

  public render(): void {
    const element: React.ReactElement<IScaffoldComponentProps> = React.createElement(
      ScaffoldComponent, { }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected async onInit(): Promise<void> {
    const telemetry = PnPTelemetry.getInstance();
    telemetry.optOut();
    (window as any).disableBeaconLogToConsole = true;

    initializeIcons();
    initializeFileTypeIcons();

    AppService.Init(this, this.context);

    return Promise.resolve();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: 'General Settings'
          },
          groups: [
            {
              groupFields: [
                PropertyPaneTextField('description', {
                   label: this.properties.description
                })
              ]
            }
          ]
        },
        {
          header: {
            description: 'Advanced Settings'
          },
          groups: [
            {
              groupFields: [
                PropertyPaneToggle('isDebugging', {
                  label: 'Use Debug Settings'
                })
              ]
            }
          ]
        }
      ]
    };
  }

  public get AppProps(): IScaffoldWebPartProps {
    return this.properties.isDebugging ? this.mockSettings : this.properties;
  }

  public get AppContext(): WebPartContext {
    return this.context;
  }

  private getMockAppSettings(): Promise<void> {
    if (window.location.host.toLowerCase().indexOf('localhost') === 0) {
      return new Promise<void>((resolve, reject) => {
          this.mockSettings = { description: 'Mocked App Settings Description', isDebugging: true };
      })
      .catch(e => {
        console.log(e);
      });
    } else {
      return Promise.resolve();
    }
  }
}
