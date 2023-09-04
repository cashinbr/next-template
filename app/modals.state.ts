import { makeVar } from "@apollo/client";

export const loginModalVar = makeVar({
  isOpen: false,
});

export const checkoutModalVar = makeVar({
  isOpen: false,
});

export const successModalVar = makeVar({
  isOpen: false,
});
