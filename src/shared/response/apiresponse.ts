export class ApiResponse {
  message!: string;
  status!: number;
  data!: any;

  constructor(message: string, status = 500, data: any = {}) {
    this.message = message;
    this.status = status;
    this.data = data;
  }
}
