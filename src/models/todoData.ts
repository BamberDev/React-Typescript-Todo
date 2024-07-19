export default class TodoData {
  id: string;
  text: string;

  constructor(text: string) {
    this.id = this.generateId();
    this.text = text;
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 11);
  }
}
