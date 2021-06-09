import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, WebPartContext } from '@microsoft/sp-webpart-base';

import { IPropertyPaneField, IPropertyPaneConfiguration, PropertyPaneTextField } from '@microsoft/sp-property-pane';

import { initializeIcons } from '@fluentui/react/lib/Icons';
import { initializeFileTypeIcons } from '@fluentui/react-file-type-icons';

import AppService from '../../services/AppService';

import PnPTelemetry from '@pnp/telemetry-js';
import { Scaffold } from './components/Scaffold';

export interface IScaffoldWebPartProps {
  description: string;
  isDebugging: boolean;
}

export default class ScaffoldWebPart extends BaseClientSideWebPart<IScaffoldWebPartProps> {
  private mockSettings: IScaffoldWebPartProps;

  public render(): void {
    const element: React.ReactElement<IPageComponentProps> = React.createElement(
      Scaffold, { }
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

    AppService.Init(this);

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
            description: 'Description'
          },
          groups: [
            {
              groupName: '',
              groupFields: [
                PropertyPaneTextField('description', {
                   label: this.properties.description
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
          this.mockSettings = { description: '', isDebugging: true };
      })
      .catch(e => {
        console.log(e);
      });
    } else {
      return Promise.resolve();
    }
  }
}
