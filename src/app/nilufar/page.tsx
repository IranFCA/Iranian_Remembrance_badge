import { Proposal } from "@/components/proposal";
import {
  AssembledPin,
  ButtonPiece,
  ClutchPiece,
  FeltPiece,
  LapelPin,
  SectionCut,
} from "@/components/nilufar-pin";
import { nilufarCopy } from "@/lib/copy";

export default function Page() {
  return (
    <Proposal
      text={nilufarCopy}
      photo="/nilufar-pin-photo.png"
      photoWidth={1024}
      photoHeight={1024}
      design="/downloads/nilufar-pin-design.psd"
      parts={{ AssembledPin, FeltPiece, ButtonPiece, ClutchPiece, SectionCut, LapelPin }}
    />
  );
}
