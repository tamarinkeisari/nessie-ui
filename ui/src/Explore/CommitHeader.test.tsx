/*
 * Copyright (C) 2020 Dremio
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import CommitHeader from "./CommitHeader";

it("CommitHeader renders", () => {
  const now = new Date();
  now.setDate(now.getDate() - 1);
  const commitMeta = {
    hash: "deadbeef",
    author: "bob",
    commitTime: now,
    committer: "sally",
    message: "commitMessage",
    properties: { a: "b", c: "d" },
  };
  const { asFragment } = render(
    <CommitHeader
      committer={commitMeta.committer}
      properties={commitMeta.properties}
      message={commitMeta.message}
      commitTime={commitMeta.commitTime}
      author={commitMeta.author}
      hash={commitMeta.hash}
    />
  );
  expect(asFragment()).toMatchSnapshot();
  expect(screen.getByText("deadbeef")).toBeInTheDocument();
});