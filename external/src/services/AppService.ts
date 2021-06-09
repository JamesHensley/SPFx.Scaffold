import { ICommandBarItemProps } from '@fluentui/react';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import ScaffoldWebPart, { IScaffoldWebPartProps } from '../webparts/Scaffold/ScaffoldWebPart';
import { NotificationType } from './NotificationService';

export interface ICmdBarListenerProps {
    callback: () => Promise<void>;
    btnKeys?: Array<string>;
}

export default class AppService {
    private static _webpart: ScaffoldWebPart;
    private static _context: WebPartContext;

    public static Init(webpart: ScaffoldWebPart, context: WebPartContext): void {
        this._webpart = webpart;
        this._context = context ? context : null;
    }

    public static get AppSettings(): IScaffoldWebPartProps {
        return this._webpart.AppProps;
    }

    //#region Emitters
    public static RegisterProductListener(callback: () => Promise<void>): void {
        // this._productListeners.push(callback);
    }

    public static UnRegisterProductListener(callback: () => void): void {
        // this._productListeners = this._productListeners.filter(f => f !== callback);
    }

    public static ProductChanged(type: NotificationType, msg: string): void {
        // this._productListeners.forEach(l => l.call(l));
        // NotificationService.Notify(type, msg);
    }

    public static RegisterCmdBarListener(p: ICmdBarListenerProps): void {
        // this._cmdBarListeners.push(p);
    }

    public static UnRegisterCmdBarListener(callback: () => Promise<void>): void {
        // this._cmdBarListeners = this._cmdBarListeners.filter(f => f.callback !== callback);
    }

    public static MenuItemClicked(item: ICommandBarItemProps): void {
        /*
        this._cmdBarListeners.forEach(l => {
            if (l.btnKeys) {
                if (l.btnKeys.indexOf(item['data-automation-id']) >= 0) {
                    l.callback.call(l.callback, item);
                }
            } else {
                l.callback.call(l.callback, item);
            }
        });
        */
    }
    //#endregion

    //#region strings
    public static get DateFormatView(): string { return `dd-LLL-yyyy`; }
    public static get DateFormatValue(): string { return `yyyy-MM-dd`; }
    //#endregion
}
