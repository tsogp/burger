import { IBurgerResponse } from './types';

class BurgerService {
  static defaultPath: string = 'https://norma.nomoreparties.space/api/ingredients';

  static async getBurgers(url?: string): Promise<IBurgerResponse> {
    const response = await fetch(url ? url : `${this.defaultPath}`);
    return response.json();
  }
}

export default BurgerService;