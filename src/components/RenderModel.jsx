"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import { Environment } from "@react-three/drei";

const RenderModel = ({ children, className }) => {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas className={clsx("w-full h-full", className)}>
        <Suspense fallback={null}>
          {children}
          <Environment preset="dawn" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default RenderModel;

