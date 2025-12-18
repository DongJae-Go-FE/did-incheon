"use client";

import { createContext } from "react";

import { ScheneContext } from "../types/types";

export const Context = createContext<ScheneContext>({
  state: {
    schenes: [],
    currentScheneIndex: 0,
  },
  dispatch: () => {},
});
