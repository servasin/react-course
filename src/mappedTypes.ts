// Type casting // приведение к типу
const mistake = [] as Array<number>;
mistake.push(1);
mistake.push(2);

const user = {
  id: 101,
  email: 'jack@dev.com',
  personalInfo: {
      name: 'Jack',
      address: {
          line1: 'westwish st',
          line2: 'washmasher',
          city: 'wallas',
          state: 'WX'
      }
  }
}

user.id = 22;

type TUser = typeof user;
// typeof - плучить тип объекта

const typedUser: MyReadonly<TUser> = user;

typedUser.personalInfo.address.city = 'Rzn';

type TIdType = TUser['id'];

type TObjKeys = keyof TUser;
// keyof - получить все ключи объекта

type MyReadonly<T> = {
  // mapped types
  // типы, которые перебирают другие типы
  readonly [N in keyof T]: T[N];
}

// for (let N of ['asd', 'qwe']) {}

const user1: MyReadonly<TUser> = {
  id: 11,
  email: 'email',
  personalInfo: {
    name: 'Jack',
    address: {
        line1: 'westwish st',
        line2: 'washmasher',
        city: 'wallas',
        state: 'WX'
    }
  }
}

type MyPartial<T> = {
  [N in keyof T]?: T[N];
}

type MyPick<T, K extends keyof T> = {
  [N in K]: T[N];
}

type picked = Pick<TUser, 'id' | 'email'>;

type MyReadonlyDeep<T> = {
  readonly [N in keyof T]: T[N] extends object ? MyReadonlyDeep<T[N]> : T[N]
}

const typedUserDeep: MyReadonlyDeep<TUser> = user;

// typedUserDeep.personalInfo.address.city = 'Rzn';  // readonly prop

type TSomeType = MyReadonlyDeep<TUser>;

// type inference // вывод типа
type RemoveReadonly<T> = T extends MyReadonlyDeep<infer E> ? E : T;
// infer - вычислить аргумент дженерика

type TTest = RemoveReadonly<TSomeType>;

function greaterThenZero(a: number) {
  return a > 0;
}

type FnReturnType<T> = T extends ((...args: any[]) => infer R) ? R : never;
type FnParameters<T> = T extends ((...args: infer R) => any) ? R : never;

type TReturnType = FnReturnType<typeof greaterThenZero>;
type TArgsType = FnParameters<typeof greaterThenZero>;