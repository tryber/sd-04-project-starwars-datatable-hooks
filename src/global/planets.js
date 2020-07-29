import { createState, useState } from '@hookstate/core';

const planetState = createState([]);

const wrapState = (s) => ({
  get: () => s.value,
  set: (value) => s.set(() => value),
});

export const accessPlanets = () => wrapState(planetState);
export const usePlanets = () => wrapState(useState(planetState));
