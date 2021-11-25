export type Instruction = {
  type: InstructionName;
  i?: number;
  j?: number;
  k?: number;
};

export type InstructionName =
  | "SET"
  | "INC"
  | "DEC"
  | "ADD"
  | "JMP"
  | "TST"
  | "PRT"
  | "DSP"
  | "HLT";
