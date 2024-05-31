import * as React from 'react';
import { DOM_ELEMENT_IDS } from '../../../constants';
import GraphicsResult from '.';
import styles from './styles.module.css';
import { useScript, useStore } from '../../../WithScript/Store';
import Button from '../../../Button';

const downloadCanvas = (canvasId: string) => {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) {
        return;
    }
    var dt = canvas.toDataURL('image/png');
    /* Change MIME type to trick the browser to downlaod the file instead of displaying it */
    dt = dt.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
  
    /* In addition to <a>'s "download" attribute, you can define HTTP-style headers */
    dt = dt.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png');
  
    var downloadLink = document.createElement("a");
    downloadLink.href = dt;
    downloadLink.download = `${canvasId}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

const CanvasResult = () => {
    const { store } = useScript();
    // const { codeId } = useStore(store, (state) => ({codeId: state.codeId}));
    const codeId = useStore(store, (state) => state.codeId);

    return (
        <GraphicsResult
            controls={
                <Button
                    icon='Download'
                    iconSize='12px'
                    onClick={() => {
                        downloadCanvas(DOM_ELEMENT_IDS.canvasContainer(codeId))
                    }}
                    title="Download SVG"
                    className={styles.slimStrippedButton}
                />
            }
            main={
                <canvas 
                    id={DOM_ELEMENT_IDS.canvasContainer(codeId)} 
                    width="500"
                    height="500"
                    style={{
                        display: 'block', 
                        width: '500px', 
                        height: '500px'
                    }}></canvas>
            }
        />
    )
};

export default CanvasResult;