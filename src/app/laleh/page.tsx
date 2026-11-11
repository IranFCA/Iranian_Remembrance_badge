import { Proposal } from "@/components/proposal";
import {
  AssembledPin,
  ButtonPiece,
  ClutchPiece,
  FeltPiece,
  LapelPin,
  SectionCut,
} from "@/components/laleh-pin";
import { copy } from "@/lib/copy";

export default function Page() {
  return (
    <Proposal
      text={copy}
      photo="/pin-sample.jpg"
      photoWidth={1056}
      photoHeight={976}
      design="/downloads/laleh-pin-design.psd"
      parts={{ AssembledPin, FeltPiece, ButtonPiece, ClutchPiece, SectionCut, LapelPin }}
    />
  );
}
