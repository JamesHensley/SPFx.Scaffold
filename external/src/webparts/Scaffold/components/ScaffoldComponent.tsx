import * as React from 'react';

import * as styles from './ComponentStyles.module.scss';

export interface IScaffoldComponentProps {
}
export class ScaffoldComponent extends React.Component <IScaffoldComponentProps, {}> {
    public render(): React.ReactElement<{}> {
        console.log('Scaffold.render: rendering externals component...');
        return (
            <div className={styles.bordered}>
                This is a component in the externals folder: {new Date().toJSON()}
                <br />
                <img src='../dist/george-washington.png' alt='Ole George' />
            </div>
        );
    }
}
