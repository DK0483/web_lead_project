import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UserService {
  private readonly users: User[];

  constructor() {
    // Start with one user for testing login
    this.users = [
      {
        userId: 1,
        username: 'testuser',
        password: 'password', // In a real app, this would be hashed
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async create(user: User): Promise<User> {
    const newUser = { userId: this.users.length + 1, ...user };
    this.users.push(newUser);
    return newUser;
  }
}
