// Objective: Create a class to store the new variables that will be used in the application.

class NewVars {
  private objectiveFunction: number[];
  private zRow: number[];
  private matriz: number[][];
  private sAdd: number[];
  private zi: number;

  constructor(
    objectiveFunction: number[],
    zRow: number[],
    matriz: number[][],
    sAdd: number[],
    zi: number
  ) {
    this.objectiveFunction = objectiveFunction;
    this.zRow = zRow;
    this.matriz = matriz;
    this.sAdd = sAdd;
    this.zi = zi;
  }

  private multiplyVectorDot(vector1: number[], vector2: number[]) {
    if (
      vector1.length !== vector2.length ||
      vector1.length === 0 ||
      vector2.length === 0
    ) {
      throw new Error("Vectors must have the same length");
    }
    const result = vector1.reduce((acc, value, index) => {
      return acc + value * vector2[index];
    }, 0);
    return result;
  }

  private multiplyMatrix(matrix: number[][], vector: number[]) {
    if (
      matrix[0].length !== vector.length ||
      matrix.length === 0 ||
      vector.length === 0
    ) {
      throw new Error("Matrix columns must be equal to vector length");
    }
    const result = matrix.map((row) => {
      return this.multiplyVectorDot(row, vector);
    });
    return result;
  }

  private getDesicionBasisMatrix() {
    //Son todas las variables de holgura de la matriz optima
    const desicionVariables = this.objectiveFunction.length;
    //Se obtinenen las variables de holgura
    const desicionBasisMatrix = this.matriz.map((row) => {
      return row.slice(0, desicionVariables);
    });
    return desicionBasisMatrix;
  }

  private getInverseBasisMatrix() {
    //Son todas las variables de holgura de la matriz optima
    const desicionVariables = this.objectiveFunction.length;
    //Se obtinenen las variables de holgura
    const inverseBasisMatrix = this.matriz.map((row) => {
      return row.slice(desicionVariables, row.length - 1);
    });
    return inverseBasisMatrix;
  }

  private getObjectiveFunctionStandar() {
    const desicionBasisMatrix = this.getDesicionBasisMatrix();
    const standar = 0
    //TERMINAR LOGICA
    const objectiveFunctionStandar = this.objectiveFunction.map(
      (value, index) => {
        return value - this.zRow[index];
      }
    );
    return objectiveFunctionStandar;
  }

  public calculateReducedCost() {
    const inverseBasisMatrix = this.getInverseBasisMatrix();
    const objectiveFunctionStandar = this.getObjectiveFunctionStandar();
    const bInverse_x_A = this.multiplyMatrix(inverseBasisMatrix, this.sAdd);
    const cBInverse = this.multiplyVectorDot(
      objectiveFunctionStandar,
      bInverse_x_A
    );
    const r = -1 * this.zi - cBInverse;
    return r;
  }
}
