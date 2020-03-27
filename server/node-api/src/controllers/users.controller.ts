// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';
import { get } from '@loopback/rest';

export class UsersController {
  constructor() { }
  @get('/users')
  hello(): string {
    return 'Hola mundo';
  }
}
