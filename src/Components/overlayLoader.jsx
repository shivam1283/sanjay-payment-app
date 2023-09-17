import React, { useState, useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";

import styled, { css } from "styled-components";
import "./styles.css";

const DarkBackground = styled.div`
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 999; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.25); /* Black w/ opacity */

  ${(props) =>
    props.disappear
      ? css`
          display: flex;
          align-items: center;
          justify-content: center;
        `
      : css``}
`;

export function Loader(props) {
  //   useEffect(() => {
  //     if (!props.loading) {
  //       setTimeout(() => setLoaded(true), 10000);
  //     }
  //   }, [props.loading]);

  return (
    <DarkBackground disappear={props.loading}>
      <LoadingOutlined style={{ fontSize: "300%" }} className="loader" />
    </DarkBackground>
  );
}
