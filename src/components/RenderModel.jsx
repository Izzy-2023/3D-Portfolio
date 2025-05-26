import React from "react";

const RenderModel = ({childern, className}) => {
  return (
    <Canvas>
      className={clsx("w-screen h-screen relative", className)}
      <Suspense fallback={null}>
        {childern}
      </Suspense>
    </Canvas>
  )
}

export default RenderModel