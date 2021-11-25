# registermachine

Register 0x00 - 0x1f (hexadecimal numbers)

Registers save natural number inclusive of 0 up to 255

every line is numbered with x and files are saved with the file extension .regm

Instructions (i, j are register; k is an literal like 13)

| Instruction | Explanation                                            |
| ----------- | ------------------------------------------------------ |
| x SET i k   | Set i to literal k                                     |
| x INC i     | Increment i by 1                                       |
| x DEC i     | Decrement i by 1                                       |
| x ADD i j   | Set i to the sum of i and j                            |
| x JMP k     | Jump to line k                                         |
| x TST i     | If i is not 0 jump to x+1 else jump to x+2             |
| x PRT i     | Print out the number of i with newline                 |
| x DSP i     | Display i according to ascii table, defaulting to (sp) |
| x HLT       | Halt the Program                                       |
