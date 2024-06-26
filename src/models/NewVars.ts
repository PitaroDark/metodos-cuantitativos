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

  private trasposingMatrix(matrix: number[][]) {
    const result = matrix[0].map((col, i) => matrix.map((row) => row[i]));
    return result;
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
    const standarArrayBasis = [...Array(desicionBasisMatrix.length).fill(0)];
    //Si la fila contiene un 1 y los demas son 0, se agrega el valor de la fila de la funcion objetivo
    this.trasposingMatrix(desicionBasisMatrix).forEach((row, index) => {
      if (row.filter((value) => value === 1).length === 1) {
        const indexOne = row.findIndex((value) => value === 1);
        standarArrayBasis[indexOne] = -1 * this.objectiveFunction[index];
      }
    });
    return standarArrayBasis;
  }

  public getBInverse_x_A() {
    const inverseBasisMatrix = this.getInverseBasisMatrix();
    const bInverse_x_A = this.multiplyMatrix(inverseBasisMatrix, this.sAdd);
    return bInverse_x_A;
  }

  public calculateReducedCost() {
    const bInverse_x_A = this.getBInverse_x_A();
    const objectiveFunctionStandar = this.getObjectiveFunctionStandar();
    const cBInverse = this.multiplyVectorDot(
      objectiveFunctionStandar,
      bInverse_x_A
    );
    const r = -1 * this.zi - cBInverse;
    return r;
  }

  public generateNewMatrizAndZRow(
    totalDesicionVariables: number = 0,
    matriz: number[][] = this.matriz,
    zRow: number[] = this.zRow
  ) {
    const sAdd = this.getBInverse_x_A(); //Variables de restriccion
    const zi = this.calculateReducedCost(); //Costo reducido
    const newMatriz = matriz.map((row, index) => [
      ...row.slice(0, totalDesicionVariables),
      sAdd[index],
      ...row.slice(totalDesicionVariables, row.length),
    ]);
    const newZRow = [
      ...zRow.slice(0, totalDesicionVariables),
      zi,
      ...zRow.slice(totalDesicionVariables, zRow.length),
    ];
    return { newMatriz, newZRow };
  }
}

export default NewVars;
