import React from "react";
import {
  Background,
  Controls,
  ReactFlow,
  MarkerType,
  ControlButton,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { flowChartData } from "../constants/flowChartData";

const XYFlow = () => {
  const nodes = flowChartData.nodeList.map((node) => ({
    id: node.taskId,
    data: { label: node.taskName },
    position: {
      x: node.dipLeft,
      y: node.dipTop,
    },
    style: {
      width: `${node.width}px`,
      height: `${node.height}px`,
      padding: "0 15px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "10px",
      border: "1px solid #D0D7E1",
      boxShadow: "2px 3px 4px 0px #2D34381A",
      color: "#556372",
      fontSize: "14px",
      fontWeight: 700,
    },
    resizing: false,
    draggable: false,
  }));

  const edges = flowChartData.edgeList.map((edge) => ({
    id: edge.controlId,
    label: edge.controlName,
    source: edge.startTaskId,
    target: edge.endTaskId,
    type: "step",
    style: {
      color: "#8F98A5",
      strokeWidth: 2,
    },
    labelStyle: {
      size: "12px",
      fontWeight: 700,
      fill: "#FFFFFF",
    },
    labelBgBorderRadius: 15,
    labelBgPadding: [8, 5],
    labelBgStyle: {
      fill: "#8F98A5",
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: "#8F98A5",
    },
  }));

  return (
    <div
      id="XYFlow"
      className="w-full h-full bg-neutral-100 flex justify-center items-center"
    >
      <ReactFlow nodes={nodes} edges={edges}>
        <Background />
        <Controls position="top-right">
          <ControlButton
            onClick={() => alert("Something magical just happened. ✨")}
          >
            alert
          </ControlButton>
        </Controls>
      </ReactFlow>
    </div>
  );
};

export default XYFlow;
