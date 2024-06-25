// Purpose: Implement the Simplex algorithm for solving linear programming problems.
class Simplex {
  private desicionVariables: number;
  private matriz: number[][];
  private zRow: number[];
  private iteration: number;

  constructor(desicionVariables: number, matriz: number[][], zRow: number[]) {
    this.desicionVariables = desicionVariables;
    this.matriz = matriz.map((row) => [...row]);
    this.zRow = zRow.map((value) => value);
    this.iteration = 0;
  }

  private getPivotColumnIndex() {
    let index = -1;
    const row = this.zRow.slice(0, this.desicionVariables);
    row.forEach((value, i) => {
      if (value < 0) {
        if (index === -1) {
          index = i;
        } else {
          if (value > row[index]) {
            index = i;
          }
        }
      }
    });
    return index;
  }

  private getPivotRowIndex(colIndex: number) {
    //Obtener mayor positivo
    let index = -1;
    this.matriz.forEach((row, i) => {
      const colValue = row[colIndex];
      const solValue = row[row.length - 1];
      const value = solValue / colValue;
      if (value > 0) {
        if (index === -1) {
          index = i;
        } else {
          if (value < this.matriz[index][colIndex]) index = i;
        }
      }
    });
    return index;
  }

  private convertToOnePivotRow(rowIndex: number, colIndex: number) {
    const pivotValue = this.matriz[rowIndex][colIndex];
    this.matriz[rowIndex] = this.matriz[rowIndex].map((value) => {
      return value / pivotValue;
    });
  }

  private convertToZeroPivotColumn(
    rowPivotIndex: number,
    colPivotIndex: number
  ) {
    //Convertir las demas filas con respecto a la columna pivote
    const pivotRow = this.matriz[rowPivotIndex]; //Es la fila pivote ya convertida a 1
    this.matriz.forEach((row, i) => {
      if (i !== rowPivotIndex) {
        const factor = row[colPivotIndex];
        if (factor === 0) return;
        this.matriz[i] = this.matriz[i].map((value, j) => {
          return value - factor * pivotRow[j];
        });
      }
    });
    //Convertir la fila Z
    const factor = this.zRow[colPivotIndex];
    this.zRow = this.zRow.map((value, i) => {
      return value - factor * pivotRow[i];
    });
  }

  public hasNext() {
    const row = this.zRow.slice(0, this.desicionVariables);
    return row.some((value) => value < 0);
  }

  public solveByIteration() {
    const pivotCol = this.getPivotColumnIndex();
    const pivotRow = this.getPivotRowIndex(pivotCol);
    this.convertToOnePivotRow(pivotRow, pivotCol);
    this.convertToZeroPivotColumn(pivotRow, pivotCol);
    this.iteration++;
    return this.iteration;
  }

  public solve() {
    let counter = 0;
    while (counter < 10 && this.hasNext()) {
      this.solveByIteration();
      counter++;
    }
  }

  public getMatrizAndZRow() {
    return {
      matriz: this.matriz,
      zRow: this.zRow,
    };
  }
}

export default Simplex;
