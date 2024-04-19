import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
// import style from './Grafico.module.css';

export default function PieActiveArc(props) {
    let tareasCompleatadas = props.cantTareasCompletadas;
    let tareasNoCompletadas = props.totalTareas - tareasCompleatadas;
    let data = [
        { id: 0, value: tareasCompleatadas, label: "Tareas completadas", color: "#4caf50"},
        { id: 1, value: tareasNoCompletadas, label: "Tareas no completadas"},
    ];

    return (
        <PieChart
          series={[
                {
                    data,
                    highlightScope: { faded: "global", highlighted: "item" },
                    faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
                },
            ]}
            height={200}
        />
      );
    }