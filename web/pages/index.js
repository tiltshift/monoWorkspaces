// @flow

import * as React from "react";

import { Test } from "core";

export default () => (
  <div>
    React Version: {React.version} Test: <Test text={"test string"} />
  </div>
);
