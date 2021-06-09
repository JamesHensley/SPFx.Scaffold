import * as React from 'react';

export interface IScaffoldProps {
}
export class Scaffold extends React.Component <IScaffoldProps, {}> {
    public render(): React.ReactElement<{}> {
        return (
            <div>
                Scaffolded WebPart
            </div>
        );
    }
}
