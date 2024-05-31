import * as React from 'react';
import { useScript, useStore } from '../WithScript/Store';
import Button, { Color } from '../Button';
import { translate } from '@docusaurus/Translate';

const Reset = () => {
    const { store } = useScript();
    const pristine = useStore(store, (state) => state.pristineCode);
    
    const onReset = () => {
        const shouldReset = window.confirm(translate({
            message: 'Discard your edits? Your changes will be lost!'
        }));
        if (shouldReset) {
            store.setCode(pristine);
        }
    };
    return (
        <Button
            onClick={onReset}
            title={translate({
                message: 'Discard Changes',
                description: 'Reset the code to its original state',
                id: 'theme.CodeEditor.Header.reset',
            })}
            icon="Reset"
        />
    )
}

export default Reset;