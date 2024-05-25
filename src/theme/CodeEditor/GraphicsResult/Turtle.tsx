import * as React from 'react';
import styles from './styles.module.css';
import { DOM_ELEMENT_IDS } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faRunning } from '@fortawesome/free-solid-svg-icons';
import GraphicsResult from '.';
import { saveSvg } from '../utils/save_svg';
import { useScript, useStore } from '../WithScript/ScriptStore';
interface Props {
}
const TurtleResult = (props: Props) => {
    const { store } = useScript();
    const { code, codeId } = useStore(store, (state) => ({codeId: state.codeId, code: state.code}));
    return (
        <GraphicsResult
            controls={
                <React.Fragment>
                <button
                    aria-label="Download Animated SVG"
                    type="button"
                    className={styles.slimStrippedButton}
                    style={{ zIndex: 1000 }}
                    onClick={() => {
                        const turtleResult = (document.getElementById(DOM_ELEMENT_IDS.turtleSvgContainer(codeId)) as any) as SVGSVGElement;
                        if (turtleResult) {
                            saveSvg(turtleResult, `${codeId}`, code, true)
                        }
                    }}>
                    <span aria-hidden="true">R</span>
                </button>
                <button
                    aria-label="Download SVG"
                    type="button"
                    className={styles.slimStrippedButton}
                    style={{ zIndex: 1000 }}
                    onClick={() => {
                        const turtleResult = (document.getElementById(DOM_ELEMENT_IDS.turtleSvgContainer(codeId)) as any) as SVGSVGElement;
                        if (turtleResult) {
                            saveSvg(turtleResult, `${codeId}`, code)
                        }
                    }}>
                    <span aria-hidden="true">D</span>
                </button>
                </React.Fragment>
            }
        />
    )
}

export default TurtleResult;