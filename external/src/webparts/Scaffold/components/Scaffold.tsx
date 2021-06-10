import * as React from 'react';

export interface IScaffoldProps {
}
export class Scaffold extends React.Component <IScaffoldProps, {}> {
    public render(): React.ReactElement<{}> {
        console.log('Scaffold.render: rendering externals component...');
        return (
            <div>
                Scaffolded WebPart
            </div>
        );
    }
}
