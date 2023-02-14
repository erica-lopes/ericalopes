import type * as Stitches from "@stitches/react";
import { createStitches } from "@stitches/react";

export const { styled } = createStitches({
  media: {
    mobile: "(max-width: 1150px)",
  },
  utils: {
    marginX: (value: string) => ({
      marginLeft: value,
      marginRight: value,
    }),
  },
});
