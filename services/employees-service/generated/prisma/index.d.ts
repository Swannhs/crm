
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Availability
 * 
 */
export type Availability = $Result.DefaultSelection<Prisma.$AvailabilityPayload>
/**
 * Model TimeOff
 * 
 */
export type TimeOff = $Result.DefaultSelection<Prisma.$TimeOffPayload>
/**
 * Model Schedule
 * 
 */
export type Schedule = $Result.DefaultSelection<Prisma.$SchedulePayload>
/**
 * Model WorkedEmployee
 * 
 */
export type WorkedEmployee = $Result.DefaultSelection<Prisma.$WorkedEmployeePayload>
/**
 * Model Shift
 * 
 */
export type Shift = $Result.DefaultSelection<Prisma.$ShiftPayload>
/**
 * Model Salary
 * 
 */
export type Salary = $Result.DefaultSelection<Prisma.$SalaryPayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model Budget
 * 
 */
export type Budget = $Result.DefaultSelection<Prisma.$BudgetPayload>
/**
 * Model EmployeeCategory
 * 
 */
export type EmployeeCategory = $Result.DefaultSelection<Prisma.$EmployeeCategoryPayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>
/**
 * Model Payroll
 * 
 */
export type Payroll = $Result.DefaultSelection<Prisma.$PayrollPayload>
/**
 * Model PayrollHistory
 * 
 */
export type PayrollHistory = $Result.DefaultSelection<Prisma.$PayrollHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Employees
 * const employees = await prisma.employee.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Employees
   * const employees = await prisma.employee.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availability`: Exposes CRUD operations for the **Availability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Availabilities
    * const availabilities = await prisma.availability.findMany()
    * ```
    */
  get availability(): Prisma.AvailabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.timeOff`: Exposes CRUD operations for the **TimeOff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimeOffs
    * const timeOffs = await prisma.timeOff.findMany()
    * ```
    */
  get timeOff(): Prisma.TimeOffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **Schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.ScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workedEmployee`: Exposes CRUD operations for the **WorkedEmployee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkedEmployees
    * const workedEmployees = await prisma.workedEmployee.findMany()
    * ```
    */
  get workedEmployee(): Prisma.WorkedEmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shift`: Exposes CRUD operations for the **Shift** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shifts
    * const shifts = await prisma.shift.findMany()
    * ```
    */
  get shift(): Prisma.ShiftDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salary`: Exposes CRUD operations for the **Salary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Salaries
    * const salaries = await prisma.salary.findMany()
    * ```
    */
  get salary(): Prisma.SalaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.budget`: Exposes CRUD operations for the **Budget** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Budgets
    * const budgets = await prisma.budget.findMany()
    * ```
    */
  get budget(): Prisma.BudgetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employeeCategory`: Exposes CRUD operations for the **EmployeeCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmployeeCategories
    * const employeeCategories = await prisma.employeeCategory.findMany()
    * ```
    */
  get employeeCategory(): Prisma.EmployeeCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payroll`: Exposes CRUD operations for the **Payroll** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payrolls
    * const payrolls = await prisma.payroll.findMany()
    * ```
    */
  get payroll(): Prisma.PayrollDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payrollHistory`: Exposes CRUD operations for the **PayrollHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayrollHistories
    * const payrollHistories = await prisma.payrollHistory.findMany()
    * ```
    */
  get payrollHistory(): Prisma.PayrollHistoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Employee: 'Employee',
    Availability: 'Availability',
    TimeOff: 'TimeOff',
    Schedule: 'Schedule',
    WorkedEmployee: 'WorkedEmployee',
    Shift: 'Shift',
    Salary: 'Salary',
    Attendance: 'Attendance',
    Budget: 'Budget',
    EmployeeCategory: 'EmployeeCategory',
    ActivityLog: 'ActivityLog',
    Payroll: 'Payroll',
    PayrollHistory: 'PayrollHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "employee" | "availability" | "timeOff" | "schedule" | "workedEmployee" | "shift" | "salary" | "attendance" | "budget" | "employeeCategory" | "activityLog" | "payroll" | "payrollHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Availability: {
        payload: Prisma.$AvailabilityPayload<ExtArgs>
        fields: Prisma.AvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          findFirst: {
            args: Prisma.AvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          findMany: {
            args: Prisma.AvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          create: {
            args: Prisma.AvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          createMany: {
            args: Prisma.AvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          delete: {
            args: Prisma.AvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          update: {
            args: Prisma.AvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.AvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          upsert: {
            args: Prisma.AvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          aggregate: {
            args: Prisma.AvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailability>
          }
          groupBy: {
            args: Prisma.AvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityCountAggregateOutputType> | number
          }
        }
      }
      TimeOff: {
        payload: Prisma.$TimeOffPayload<ExtArgs>
        fields: Prisma.TimeOffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimeOffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimeOffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffPayload>
          }
          findFirst: {
            args: Prisma.TimeOffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimeOffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffPayload>
          }
          findMany: {
            args: Prisma.TimeOffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffPayload>[]
          }
          create: {
            args: Prisma.TimeOffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffPayload>
          }
          createMany: {
            args: Prisma.TimeOffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimeOffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffPayload>[]
          }
          delete: {
            args: Prisma.TimeOffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffPayload>
          }
          update: {
            args: Prisma.TimeOffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffPayload>
          }
          deleteMany: {
            args: Prisma.TimeOffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimeOffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TimeOffUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffPayload>[]
          }
          upsert: {
            args: Prisma.TimeOffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeOffPayload>
          }
          aggregate: {
            args: Prisma.TimeOffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimeOff>
          }
          groupBy: {
            args: Prisma.TimeOffGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimeOffGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimeOffCountArgs<ExtArgs>
            result: $Utils.Optional<TimeOffCountAggregateOutputType> | number
          }
        }
      }
      Schedule: {
        payload: Prisma.$SchedulePayload<ExtArgs>
        fields: Prisma.ScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findFirst: {
            args: Prisma.ScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findMany: {
            args: Prisma.ScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          create: {
            args: Prisma.ScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          createMany: {
            args: Prisma.ScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          delete: {
            args: Prisma.ScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          update: {
            args: Prisma.ScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          upsert: {
            args: Prisma.ScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.ScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
          }
        }
      }
      WorkedEmployee: {
        payload: Prisma.$WorkedEmployeePayload<ExtArgs>
        fields: Prisma.WorkedEmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkedEmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkedEmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkedEmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkedEmployeePayload>
          }
          findFirst: {
            args: Prisma.WorkedEmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkedEmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkedEmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkedEmployeePayload>
          }
          findMany: {
            args: Prisma.WorkedEmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkedEmployeePayload>[]
          }
          create: {
            args: Prisma.WorkedEmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkedEmployeePayload>
          }
          createMany: {
            args: Prisma.WorkedEmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkedEmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkedEmployeePayload>[]
          }
          delete: {
            args: Prisma.WorkedEmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkedEmployeePayload>
          }
          update: {
            args: Prisma.WorkedEmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkedEmployeePayload>
          }
          deleteMany: {
            args: Prisma.WorkedEmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkedEmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkedEmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkedEmployeePayload>[]
          }
          upsert: {
            args: Prisma.WorkedEmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkedEmployeePayload>
          }
          aggregate: {
            args: Prisma.WorkedEmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkedEmployee>
          }
          groupBy: {
            args: Prisma.WorkedEmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkedEmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkedEmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<WorkedEmployeeCountAggregateOutputType> | number
          }
        }
      }
      Shift: {
        payload: Prisma.$ShiftPayload<ExtArgs>
        fields: Prisma.ShiftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShiftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShiftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          findFirst: {
            args: Prisma.ShiftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShiftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          findMany: {
            args: Prisma.ShiftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>[]
          }
          create: {
            args: Prisma.ShiftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          createMany: {
            args: Prisma.ShiftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShiftCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>[]
          }
          delete: {
            args: Prisma.ShiftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          update: {
            args: Prisma.ShiftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          deleteMany: {
            args: Prisma.ShiftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShiftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShiftUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>[]
          }
          upsert: {
            args: Prisma.ShiftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          aggregate: {
            args: Prisma.ShiftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShift>
          }
          groupBy: {
            args: Prisma.ShiftGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShiftGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShiftCountArgs<ExtArgs>
            result: $Utils.Optional<ShiftCountAggregateOutputType> | number
          }
        }
      }
      Salary: {
        payload: Prisma.$SalaryPayload<ExtArgs>
        fields: Prisma.SalaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload>
          }
          findFirst: {
            args: Prisma.SalaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload>
          }
          findMany: {
            args: Prisma.SalaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload>[]
          }
          create: {
            args: Prisma.SalaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload>
          }
          createMany: {
            args: Prisma.SalaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload>[]
          }
          delete: {
            args: Prisma.SalaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload>
          }
          update: {
            args: Prisma.SalaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload>
          }
          deleteMany: {
            args: Prisma.SalaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload>[]
          }
          upsert: {
            args: Prisma.SalaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload>
          }
          aggregate: {
            args: Prisma.SalaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalary>
          }
          groupBy: {
            args: Prisma.SalaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalaryCountArgs<ExtArgs>
            result: $Utils.Optional<SalaryCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      Budget: {
        payload: Prisma.$BudgetPayload<ExtArgs>
        fields: Prisma.BudgetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BudgetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BudgetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          findFirst: {
            args: Prisma.BudgetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BudgetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          findMany: {
            args: Prisma.BudgetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>[]
          }
          create: {
            args: Prisma.BudgetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          createMany: {
            args: Prisma.BudgetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BudgetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>[]
          }
          delete: {
            args: Prisma.BudgetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          update: {
            args: Prisma.BudgetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          deleteMany: {
            args: Prisma.BudgetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BudgetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BudgetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>[]
          }
          upsert: {
            args: Prisma.BudgetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          aggregate: {
            args: Prisma.BudgetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBudget>
          }
          groupBy: {
            args: Prisma.BudgetGroupByArgs<ExtArgs>
            result: $Utils.Optional<BudgetGroupByOutputType>[]
          }
          count: {
            args: Prisma.BudgetCountArgs<ExtArgs>
            result: $Utils.Optional<BudgetCountAggregateOutputType> | number
          }
        }
      }
      EmployeeCategory: {
        payload: Prisma.$EmployeeCategoryPayload<ExtArgs>
        fields: Prisma.EmployeeCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCategoryPayload>
          }
          findFirst: {
            args: Prisma.EmployeeCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCategoryPayload>
          }
          findMany: {
            args: Prisma.EmployeeCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCategoryPayload>[]
          }
          create: {
            args: Prisma.EmployeeCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCategoryPayload>
          }
          createMany: {
            args: Prisma.EmployeeCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCategoryPayload>[]
          }
          delete: {
            args: Prisma.EmployeeCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCategoryPayload>
          }
          update: {
            args: Prisma.EmployeeCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCategoryPayload>
          }
          deleteMany: {
            args: Prisma.EmployeeCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCategoryPayload>[]
          }
          upsert: {
            args: Prisma.EmployeeCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCategoryPayload>
          }
          aggregate: {
            args: Prisma.EmployeeCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployeeCategory>
          }
          groupBy: {
            args: Prisma.EmployeeCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCategoryCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
          }
        }
      }
      Payroll: {
        payload: Prisma.$PayrollPayload<ExtArgs>
        fields: Prisma.PayrollFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayrollFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayrollFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          findFirst: {
            args: Prisma.PayrollFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayrollFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          findMany: {
            args: Prisma.PayrollFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>[]
          }
          create: {
            args: Prisma.PayrollCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          createMany: {
            args: Prisma.PayrollCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayrollCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>[]
          }
          delete: {
            args: Prisma.PayrollDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          update: {
            args: Prisma.PayrollUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          deleteMany: {
            args: Prisma.PayrollDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayrollUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PayrollUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>[]
          }
          upsert: {
            args: Prisma.PayrollUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollPayload>
          }
          aggregate: {
            args: Prisma.PayrollAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayroll>
          }
          groupBy: {
            args: Prisma.PayrollGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayrollGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayrollCountArgs<ExtArgs>
            result: $Utils.Optional<PayrollCountAggregateOutputType> | number
          }
        }
      }
      PayrollHistory: {
        payload: Prisma.$PayrollHistoryPayload<ExtArgs>
        fields: Prisma.PayrollHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayrollHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayrollHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollHistoryPayload>
          }
          findFirst: {
            args: Prisma.PayrollHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayrollHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollHistoryPayload>
          }
          findMany: {
            args: Prisma.PayrollHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollHistoryPayload>[]
          }
          create: {
            args: Prisma.PayrollHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollHistoryPayload>
          }
          createMany: {
            args: Prisma.PayrollHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayrollHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollHistoryPayload>[]
          }
          delete: {
            args: Prisma.PayrollHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollHistoryPayload>
          }
          update: {
            args: Prisma.PayrollHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollHistoryPayload>
          }
          deleteMany: {
            args: Prisma.PayrollHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayrollHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PayrollHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollHistoryPayload>[]
          }
          upsert: {
            args: Prisma.PayrollHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollHistoryPayload>
          }
          aggregate: {
            args: Prisma.PayrollHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayrollHistory>
          }
          groupBy: {
            args: Prisma.PayrollHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayrollHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayrollHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<PayrollHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    employee?: EmployeeOmit
    availability?: AvailabilityOmit
    timeOff?: TimeOffOmit
    schedule?: ScheduleOmit
    workedEmployee?: WorkedEmployeeOmit
    shift?: ShiftOmit
    salary?: SalaryOmit
    attendance?: AttendanceOmit
    budget?: BudgetOmit
    employeeCategory?: EmployeeCategoryOmit
    activityLog?: ActivityLogOmit
    payroll?: PayrollOmit
    payrollHistory?: PayrollHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    availabilities: number
    timeOffRequests: number
    schedules: number
    workedRecords: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availabilities?: boolean | EmployeeCountOutputTypeCountAvailabilitiesArgs
    timeOffRequests?: boolean | EmployeeCountOutputTypeCountTimeOffRequestsArgs
    schedules?: boolean | EmployeeCountOutputTypeCountSchedulesArgs
    workedRecords?: boolean | EmployeeCountOutputTypeCountWorkedRecordsArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountAvailabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountTimeOffRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeOffWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountWorkedRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkedEmployeeWhereInput
  }


  /**
   * Count Type PayrollCountOutputType
   */

  export type PayrollCountOutputType = {
    history: number
  }

  export type PayrollCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | PayrollCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * PayrollCountOutputType without action
   */
  export type PayrollCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollCountOutputType
     */
    select?: PayrollCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PayrollCountOutputType without action
   */
  export type PayrollCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayrollHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    salary: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    salary: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    userId: string | null
    contactId: string | null
    jobTitle: string | null
    department: string | null
    salary: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    userId: string | null
    contactId: string | null
    jobTitle: string | null
    department: string | null
    salary: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    orgId: number
    userId: number
    contactId: number
    jobTitle: number
    department: number
    salary: number
    status: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    salary?: true
  }

  export type EmployeeSumAggregateInputType = {
    salary?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    orgId?: true
    userId?: true
    contactId?: true
    jobTitle?: true
    department?: true
    salary?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    orgId?: true
    userId?: true
    contactId?: true
    jobTitle?: true
    department?: true
    salary?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    orgId?: true
    userId?: true
    contactId?: true
    jobTitle?: true
    department?: true
    salary?: true
    status?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: string
    orgId: string
    userId: string
    contactId: string | null
    jobTitle: string | null
    department: string | null
    salary: number | null
    status: string
    metadata: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    userId?: boolean
    contactId?: boolean
    jobTitle?: boolean
    department?: boolean
    salary?: boolean
    status?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    availabilities?: boolean | Employee$availabilitiesArgs<ExtArgs>
    timeOffRequests?: boolean | Employee$timeOffRequestsArgs<ExtArgs>
    schedules?: boolean | Employee$schedulesArgs<ExtArgs>
    workedRecords?: boolean | Employee$workedRecordsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    userId?: boolean
    contactId?: boolean
    jobTitle?: boolean
    department?: boolean
    salary?: boolean
    status?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    userId?: boolean
    contactId?: boolean
    jobTitle?: boolean
    department?: boolean
    salary?: boolean
    status?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    orgId?: boolean
    userId?: boolean
    contactId?: boolean
    jobTitle?: boolean
    department?: boolean
    salary?: boolean
    status?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "userId" | "contactId" | "jobTitle" | "department" | "salary" | "status" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availabilities?: boolean | Employee$availabilitiesArgs<ExtArgs>
    timeOffRequests?: boolean | Employee$timeOffRequestsArgs<ExtArgs>
    schedules?: boolean | Employee$schedulesArgs<ExtArgs>
    workedRecords?: boolean | Employee$workedRecordsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      availabilities: Prisma.$AvailabilityPayload<ExtArgs>[]
      timeOffRequests: Prisma.$TimeOffPayload<ExtArgs>[]
      schedules: Prisma.$SchedulePayload<ExtArgs>[]
      workedRecords: Prisma.$WorkedEmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      userId: string
      contactId: string | null
      jobTitle: string | null
      department: string | null
      salary: number | null
      status: string
      metadata: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    availabilities<T extends Employee$availabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Employee$availabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    timeOffRequests<T extends Employee$timeOffRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$timeOffRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeOffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedules<T extends Employee$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Employee$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workedRecords<T extends Employee$workedRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$workedRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkedEmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'String'>
    readonly orgId: FieldRef<"Employee", 'String'>
    readonly userId: FieldRef<"Employee", 'String'>
    readonly contactId: FieldRef<"Employee", 'String'>
    readonly jobTitle: FieldRef<"Employee", 'String'>
    readonly department: FieldRef<"Employee", 'String'>
    readonly salary: FieldRef<"Employee", 'Int'>
    readonly status: FieldRef<"Employee", 'String'>
    readonly metadata: FieldRef<"Employee", 'Json'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly updatedAt: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.availabilities
   */
  export type Employee$availabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    where?: AvailabilityWhereInput
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    cursor?: AvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Employee.timeOffRequests
   */
  export type Employee$timeOffRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOff
     */
    select?: TimeOffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOff
     */
    omit?: TimeOffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffInclude<ExtArgs> | null
    where?: TimeOffWhereInput
    orderBy?: TimeOffOrderByWithRelationInput | TimeOffOrderByWithRelationInput[]
    cursor?: TimeOffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimeOffScalarFieldEnum | TimeOffScalarFieldEnum[]
  }

  /**
   * Employee.schedules
   */
  export type Employee$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Employee.workedRecords
   */
  export type Employee$workedRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkedEmployee
     */
    select?: WorkedEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkedEmployee
     */
    omit?: WorkedEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkedEmployeeInclude<ExtArgs> | null
    where?: WorkedEmployeeWhereInput
    orderBy?: WorkedEmployeeOrderByWithRelationInput | WorkedEmployeeOrderByWithRelationInput[]
    cursor?: WorkedEmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkedEmployeeScalarFieldEnum | WorkedEmployeeScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Availability
   */

  export type AggregateAvailability = {
    _count: AvailabilityCountAggregateOutputType | null
    _avg: AvailabilityAvgAggregateOutputType | null
    _sum: AvailabilitySumAggregateOutputType | null
    _min: AvailabilityMinAggregateOutputType | null
    _max: AvailabilityMaxAggregateOutputType | null
  }

  export type AvailabilityAvgAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type AvailabilitySumAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type AvailabilityMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    orgId: string | null
    dayOfWeek: number | null
    startTime: string | null
    endTime: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvailabilityMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    orgId: string | null
    dayOfWeek: number | null
    startTime: string | null
    endTime: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvailabilityCountAggregateOutputType = {
    id: number
    employeeId: number
    orgId: number
    dayOfWeek: number
    startTime: number
    endTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AvailabilityAvgAggregateInputType = {
    dayOfWeek?: true
  }

  export type AvailabilitySumAggregateInputType = {
    dayOfWeek?: true
  }

  export type AvailabilityMinAggregateInputType = {
    id?: true
    employeeId?: true
    orgId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvailabilityMaxAggregateInputType = {
    id?: true
    employeeId?: true
    orgId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvailabilityCountAggregateInputType = {
    id?: true
    employeeId?: true
    orgId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Availability to aggregate.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Availabilities
    **/
    _count?: true | AvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilityMaxAggregateInputType
  }

  export type GetAvailabilityAggregateType<T extends AvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailability[P]>
      : GetScalarType<T[P], AggregateAvailability[P]>
  }




  export type AvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityWhereInput
    orderBy?: AvailabilityOrderByWithAggregationInput | AvailabilityOrderByWithAggregationInput[]
    by: AvailabilityScalarFieldEnum[] | AvailabilityScalarFieldEnum
    having?: AvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilityCountAggregateInputType | true
    _avg?: AvailabilityAvgAggregateInputType
    _sum?: AvailabilitySumAggregateInputType
    _min?: AvailabilityMinAggregateInputType
    _max?: AvailabilityMaxAggregateInputType
  }

  export type AvailabilityGroupByOutputType = {
    id: string
    employeeId: string
    orgId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    createdAt: Date
    updatedAt: Date
    _count: AvailabilityCountAggregateOutputType | null
    _avg: AvailabilityAvgAggregateOutputType | null
    _sum: AvailabilitySumAggregateOutputType | null
    _min: AvailabilityMinAggregateOutputType | null
    _max: AvailabilityMaxAggregateOutputType | null
  }

  type GetAvailabilityGroupByPayload<T extends AvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type AvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    orgId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    orgId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    orgId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectScalar = {
    id?: boolean
    employeeId?: boolean
    orgId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "orgId" | "dayOfWeek" | "startTime" | "endTime" | "createdAt" | "updatedAt", ExtArgs["result"]["availability"]>
  export type AvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type AvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type AvailabilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $AvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Availability"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      orgId: string
      dayOfWeek: number
      startTime: string
      endTime: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["availability"]>
    composites: {}
  }

  type AvailabilityGetPayload<S extends boolean | null | undefined | AvailabilityDefaultArgs> = $Result.GetResult<Prisma.$AvailabilityPayload, S>

  type AvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailabilityCountAggregateInputType | true
    }

  export interface AvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Availability'], meta: { name: 'Availability' } }
    /**
     * Find zero or one Availability that matches the filter.
     * @param {AvailabilityFindUniqueArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailabilityFindUniqueArgs>(args: SelectSubset<T, AvailabilityFindUniqueArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Availability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailabilityFindUniqueOrThrowArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Availability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindFirstArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailabilityFindFirstArgs>(args?: SelectSubset<T, AvailabilityFindFirstArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Availability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindFirstOrThrowArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Availabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Availabilities
     * const availabilities = await prisma.availability.findMany()
     * 
     * // Get first 10 Availabilities
     * const availabilities = await prisma.availability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availabilityWithIdOnly = await prisma.availability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailabilityFindManyArgs>(args?: SelectSubset<T, AvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Availability.
     * @param {AvailabilityCreateArgs} args - Arguments to create a Availability.
     * @example
     * // Create one Availability
     * const Availability = await prisma.availability.create({
     *   data: {
     *     // ... data to create a Availability
     *   }
     * })
     * 
     */
    create<T extends AvailabilityCreateArgs>(args: SelectSubset<T, AvailabilityCreateArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Availabilities.
     * @param {AvailabilityCreateManyArgs} args - Arguments to create many Availabilities.
     * @example
     * // Create many Availabilities
     * const availability = await prisma.availability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailabilityCreateManyArgs>(args?: SelectSubset<T, AvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Availabilities and returns the data saved in the database.
     * @param {AvailabilityCreateManyAndReturnArgs} args - Arguments to create many Availabilities.
     * @example
     * // Create many Availabilities
     * const availability = await prisma.availability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Availabilities and only return the `id`
     * const availabilityWithIdOnly = await prisma.availability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Availability.
     * @param {AvailabilityDeleteArgs} args - Arguments to delete one Availability.
     * @example
     * // Delete one Availability
     * const Availability = await prisma.availability.delete({
     *   where: {
     *     // ... filter to delete one Availability
     *   }
     * })
     * 
     */
    delete<T extends AvailabilityDeleteArgs>(args: SelectSubset<T, AvailabilityDeleteArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Availability.
     * @param {AvailabilityUpdateArgs} args - Arguments to update one Availability.
     * @example
     * // Update one Availability
     * const availability = await prisma.availability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailabilityUpdateArgs>(args: SelectSubset<T, AvailabilityUpdateArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Availabilities.
     * @param {AvailabilityDeleteManyArgs} args - Arguments to filter Availabilities to delete.
     * @example
     * // Delete a few Availabilities
     * const { count } = await prisma.availability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailabilityDeleteManyArgs>(args?: SelectSubset<T, AvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Availabilities
     * const availability = await prisma.availability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailabilityUpdateManyArgs>(args: SelectSubset<T, AvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Availabilities and returns the data updated in the database.
     * @param {AvailabilityUpdateManyAndReturnArgs} args - Arguments to update many Availabilities.
     * @example
     * // Update many Availabilities
     * const availability = await prisma.availability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Availabilities and only return the `id`
     * const availabilityWithIdOnly = await prisma.availability.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvailabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Availability.
     * @param {AvailabilityUpsertArgs} args - Arguments to update or create a Availability.
     * @example
     * // Update or create a Availability
     * const availability = await prisma.availability.upsert({
     *   create: {
     *     // ... data to create a Availability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Availability we want to update
     *   }
     * })
     */
    upsert<T extends AvailabilityUpsertArgs>(args: SelectSubset<T, AvailabilityUpsertArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityCountArgs} args - Arguments to filter Availabilities to count.
     * @example
     * // Count the number of Availabilities
     * const count = await prisma.availability.count({
     *   where: {
     *     // ... the filter for the Availabilities we want to count
     *   }
     * })
    **/
    count<T extends AvailabilityCountArgs>(
      args?: Subset<T, AvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvailabilityAggregateArgs>(args: Subset<T, AvailabilityAggregateArgs>): Prisma.PrismaPromise<GetAvailabilityAggregateType<T>>

    /**
     * Group by Availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: AvailabilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Availability model
   */
  readonly fields: AvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Availability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Availability model
   */
  interface AvailabilityFieldRefs {
    readonly id: FieldRef<"Availability", 'String'>
    readonly employeeId: FieldRef<"Availability", 'String'>
    readonly orgId: FieldRef<"Availability", 'String'>
    readonly dayOfWeek: FieldRef<"Availability", 'Int'>
    readonly startTime: FieldRef<"Availability", 'String'>
    readonly endTime: FieldRef<"Availability", 'String'>
    readonly createdAt: FieldRef<"Availability", 'DateTime'>
    readonly updatedAt: FieldRef<"Availability", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Availability findUnique
   */
  export type AvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability findUniqueOrThrow
   */
  export type AvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability findFirst
   */
  export type AvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability findFirstOrThrow
   */
  export type AvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability findMany
   */
  export type AvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availabilities to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability create
   */
  export type AvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Availability.
     */
    data: XOR<AvailabilityCreateInput, AvailabilityUncheckedCreateInput>
  }

  /**
   * Availability createMany
   */
  export type AvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Availabilities.
     */
    data: AvailabilityCreateManyInput | AvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Availability createManyAndReturn
   */
  export type AvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * The data used to create many Availabilities.
     */
    data: AvailabilityCreateManyInput | AvailabilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Availability update
   */
  export type AvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Availability.
     */
    data: XOR<AvailabilityUpdateInput, AvailabilityUncheckedUpdateInput>
    /**
     * Choose, which Availability to update.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability updateMany
   */
  export type AvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Availabilities.
     */
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which Availabilities to update
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to update.
     */
    limit?: number
  }

  /**
   * Availability updateManyAndReturn
   */
  export type AvailabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * The data used to update Availabilities.
     */
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which Availabilities to update
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Availability upsert
   */
  export type AvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Availability to update in case it exists.
     */
    where: AvailabilityWhereUniqueInput
    /**
     * In case the Availability found by the `where` argument doesn't exist, create a new Availability with this data.
     */
    create: XOR<AvailabilityCreateInput, AvailabilityUncheckedCreateInput>
    /**
     * In case the Availability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailabilityUpdateInput, AvailabilityUncheckedUpdateInput>
  }

  /**
   * Availability delete
   */
  export type AvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter which Availability to delete.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability deleteMany
   */
  export type AvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Availabilities to delete
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to delete.
     */
    limit?: number
  }

  /**
   * Availability without action
   */
  export type AvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model TimeOff
   */

  export type AggregateTimeOff = {
    _count: TimeOffCountAggregateOutputType | null
    _min: TimeOffMinAggregateOutputType | null
    _max: TimeOffMaxAggregateOutputType | null
  }

  export type TimeOffMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    orgId: string | null
    startDate: Date | null
    endDate: Date | null
    type: string | null
    status: string | null
    reason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TimeOffMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    orgId: string | null
    startDate: Date | null
    endDate: Date | null
    type: string | null
    status: string | null
    reason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TimeOffCountAggregateOutputType = {
    id: number
    employeeId: number
    orgId: number
    startDate: number
    endDate: number
    type: number
    status: number
    reason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TimeOffMinAggregateInputType = {
    id?: true
    employeeId?: true
    orgId?: true
    startDate?: true
    endDate?: true
    type?: true
    status?: true
    reason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TimeOffMaxAggregateInputType = {
    id?: true
    employeeId?: true
    orgId?: true
    startDate?: true
    endDate?: true
    type?: true
    status?: true
    reason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TimeOffCountAggregateInputType = {
    id?: true
    employeeId?: true
    orgId?: true
    startDate?: true
    endDate?: true
    type?: true
    status?: true
    reason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TimeOffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeOff to aggregate.
     */
    where?: TimeOffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeOffs to fetch.
     */
    orderBy?: TimeOffOrderByWithRelationInput | TimeOffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimeOffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeOffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeOffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimeOffs
    **/
    _count?: true | TimeOffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimeOffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimeOffMaxAggregateInputType
  }

  export type GetTimeOffAggregateType<T extends TimeOffAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeOff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeOff[P]>
      : GetScalarType<T[P], AggregateTimeOff[P]>
  }




  export type TimeOffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeOffWhereInput
    orderBy?: TimeOffOrderByWithAggregationInput | TimeOffOrderByWithAggregationInput[]
    by: TimeOffScalarFieldEnum[] | TimeOffScalarFieldEnum
    having?: TimeOffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimeOffCountAggregateInputType | true
    _min?: TimeOffMinAggregateInputType
    _max?: TimeOffMaxAggregateInputType
  }

  export type TimeOffGroupByOutputType = {
    id: string
    employeeId: string
    orgId: string
    startDate: Date
    endDate: Date
    type: string
    status: string
    reason: string | null
    createdAt: Date
    updatedAt: Date
    _count: TimeOffCountAggregateOutputType | null
    _min: TimeOffMinAggregateOutputType | null
    _max: TimeOffMaxAggregateOutputType | null
  }

  type GetTimeOffGroupByPayload<T extends TimeOffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimeOffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimeOffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimeOffGroupByOutputType[P]>
            : GetScalarType<T[P], TimeOffGroupByOutputType[P]>
        }
      >
    >


  export type TimeOffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    orgId?: boolean
    startDate?: boolean
    endDate?: boolean
    type?: boolean
    status?: boolean
    reason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeOff"]>

  export type TimeOffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    orgId?: boolean
    startDate?: boolean
    endDate?: boolean
    type?: boolean
    status?: boolean
    reason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeOff"]>

  export type TimeOffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    orgId?: boolean
    startDate?: boolean
    endDate?: boolean
    type?: boolean
    status?: boolean
    reason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeOff"]>

  export type TimeOffSelectScalar = {
    id?: boolean
    employeeId?: boolean
    orgId?: boolean
    startDate?: boolean
    endDate?: boolean
    type?: boolean
    status?: boolean
    reason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TimeOffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "orgId" | "startDate" | "endDate" | "type" | "status" | "reason" | "createdAt" | "updatedAt", ExtArgs["result"]["timeOff"]>
  export type TimeOffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type TimeOffIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type TimeOffIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $TimeOffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimeOff"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      orgId: string
      startDate: Date
      endDate: Date
      type: string
      status: string
      reason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["timeOff"]>
    composites: {}
  }

  type TimeOffGetPayload<S extends boolean | null | undefined | TimeOffDefaultArgs> = $Result.GetResult<Prisma.$TimeOffPayload, S>

  type TimeOffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TimeOffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimeOffCountAggregateInputType | true
    }

  export interface TimeOffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimeOff'], meta: { name: 'TimeOff' } }
    /**
     * Find zero or one TimeOff that matches the filter.
     * @param {TimeOffFindUniqueArgs} args - Arguments to find a TimeOff
     * @example
     * // Get one TimeOff
     * const timeOff = await prisma.timeOff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimeOffFindUniqueArgs>(args: SelectSubset<T, TimeOffFindUniqueArgs<ExtArgs>>): Prisma__TimeOffClient<$Result.GetResult<Prisma.$TimeOffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TimeOff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TimeOffFindUniqueOrThrowArgs} args - Arguments to find a TimeOff
     * @example
     * // Get one TimeOff
     * const timeOff = await prisma.timeOff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimeOffFindUniqueOrThrowArgs>(args: SelectSubset<T, TimeOffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimeOffClient<$Result.GetResult<Prisma.$TimeOffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimeOff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeOffFindFirstArgs} args - Arguments to find a TimeOff
     * @example
     * // Get one TimeOff
     * const timeOff = await prisma.timeOff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimeOffFindFirstArgs>(args?: SelectSubset<T, TimeOffFindFirstArgs<ExtArgs>>): Prisma__TimeOffClient<$Result.GetResult<Prisma.$TimeOffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimeOff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeOffFindFirstOrThrowArgs} args - Arguments to find a TimeOff
     * @example
     * // Get one TimeOff
     * const timeOff = await prisma.timeOff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimeOffFindFirstOrThrowArgs>(args?: SelectSubset<T, TimeOffFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimeOffClient<$Result.GetResult<Prisma.$TimeOffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TimeOffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeOffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimeOffs
     * const timeOffs = await prisma.timeOff.findMany()
     * 
     * // Get first 10 TimeOffs
     * const timeOffs = await prisma.timeOff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timeOffWithIdOnly = await prisma.timeOff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimeOffFindManyArgs>(args?: SelectSubset<T, TimeOffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeOffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TimeOff.
     * @param {TimeOffCreateArgs} args - Arguments to create a TimeOff.
     * @example
     * // Create one TimeOff
     * const TimeOff = await prisma.timeOff.create({
     *   data: {
     *     // ... data to create a TimeOff
     *   }
     * })
     * 
     */
    create<T extends TimeOffCreateArgs>(args: SelectSubset<T, TimeOffCreateArgs<ExtArgs>>): Prisma__TimeOffClient<$Result.GetResult<Prisma.$TimeOffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TimeOffs.
     * @param {TimeOffCreateManyArgs} args - Arguments to create many TimeOffs.
     * @example
     * // Create many TimeOffs
     * const timeOff = await prisma.timeOff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimeOffCreateManyArgs>(args?: SelectSubset<T, TimeOffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TimeOffs and returns the data saved in the database.
     * @param {TimeOffCreateManyAndReturnArgs} args - Arguments to create many TimeOffs.
     * @example
     * // Create many TimeOffs
     * const timeOff = await prisma.timeOff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TimeOffs and only return the `id`
     * const timeOffWithIdOnly = await prisma.timeOff.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimeOffCreateManyAndReturnArgs>(args?: SelectSubset<T, TimeOffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeOffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TimeOff.
     * @param {TimeOffDeleteArgs} args - Arguments to delete one TimeOff.
     * @example
     * // Delete one TimeOff
     * const TimeOff = await prisma.timeOff.delete({
     *   where: {
     *     // ... filter to delete one TimeOff
     *   }
     * })
     * 
     */
    delete<T extends TimeOffDeleteArgs>(args: SelectSubset<T, TimeOffDeleteArgs<ExtArgs>>): Prisma__TimeOffClient<$Result.GetResult<Prisma.$TimeOffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TimeOff.
     * @param {TimeOffUpdateArgs} args - Arguments to update one TimeOff.
     * @example
     * // Update one TimeOff
     * const timeOff = await prisma.timeOff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimeOffUpdateArgs>(args: SelectSubset<T, TimeOffUpdateArgs<ExtArgs>>): Prisma__TimeOffClient<$Result.GetResult<Prisma.$TimeOffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TimeOffs.
     * @param {TimeOffDeleteManyArgs} args - Arguments to filter TimeOffs to delete.
     * @example
     * // Delete a few TimeOffs
     * const { count } = await prisma.timeOff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimeOffDeleteManyArgs>(args?: SelectSubset<T, TimeOffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeOffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeOffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimeOffs
     * const timeOff = await prisma.timeOff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimeOffUpdateManyArgs>(args: SelectSubset<T, TimeOffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeOffs and returns the data updated in the database.
     * @param {TimeOffUpdateManyAndReturnArgs} args - Arguments to update many TimeOffs.
     * @example
     * // Update many TimeOffs
     * const timeOff = await prisma.timeOff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TimeOffs and only return the `id`
     * const timeOffWithIdOnly = await prisma.timeOff.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TimeOffUpdateManyAndReturnArgs>(args: SelectSubset<T, TimeOffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeOffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TimeOff.
     * @param {TimeOffUpsertArgs} args - Arguments to update or create a TimeOff.
     * @example
     * // Update or create a TimeOff
     * const timeOff = await prisma.timeOff.upsert({
     *   create: {
     *     // ... data to create a TimeOff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimeOff we want to update
     *   }
     * })
     */
    upsert<T extends TimeOffUpsertArgs>(args: SelectSubset<T, TimeOffUpsertArgs<ExtArgs>>): Prisma__TimeOffClient<$Result.GetResult<Prisma.$TimeOffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TimeOffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeOffCountArgs} args - Arguments to filter TimeOffs to count.
     * @example
     * // Count the number of TimeOffs
     * const count = await prisma.timeOff.count({
     *   where: {
     *     // ... the filter for the TimeOffs we want to count
     *   }
     * })
    **/
    count<T extends TimeOffCountArgs>(
      args?: Subset<T, TimeOffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimeOffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimeOff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeOffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TimeOffAggregateArgs>(args: Subset<T, TimeOffAggregateArgs>): Prisma.PrismaPromise<GetTimeOffAggregateType<T>>

    /**
     * Group by TimeOff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeOffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TimeOffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimeOffGroupByArgs['orderBy'] }
        : { orderBy?: TimeOffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TimeOffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeOffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimeOff model
   */
  readonly fields: TimeOffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimeOff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimeOffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TimeOff model
   */
  interface TimeOffFieldRefs {
    readonly id: FieldRef<"TimeOff", 'String'>
    readonly employeeId: FieldRef<"TimeOff", 'String'>
    readonly orgId: FieldRef<"TimeOff", 'String'>
    readonly startDate: FieldRef<"TimeOff", 'DateTime'>
    readonly endDate: FieldRef<"TimeOff", 'DateTime'>
    readonly type: FieldRef<"TimeOff", 'String'>
    readonly status: FieldRef<"TimeOff", 'String'>
    readonly reason: FieldRef<"TimeOff", 'String'>
    readonly createdAt: FieldRef<"TimeOff", 'DateTime'>
    readonly updatedAt: FieldRef<"TimeOff", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TimeOff findUnique
   */
  export type TimeOffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOff
     */
    select?: TimeOffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOff
     */
    omit?: TimeOffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffInclude<ExtArgs> | null
    /**
     * Filter, which TimeOff to fetch.
     */
    where: TimeOffWhereUniqueInput
  }

  /**
   * TimeOff findUniqueOrThrow
   */
  export type TimeOffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOff
     */
    select?: TimeOffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOff
     */
    omit?: TimeOffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffInclude<ExtArgs> | null
    /**
     * Filter, which TimeOff to fetch.
     */
    where: TimeOffWhereUniqueInput
  }

  /**
   * TimeOff findFirst
   */
  export type TimeOffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOff
     */
    select?: TimeOffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOff
     */
    omit?: TimeOffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffInclude<ExtArgs> | null
    /**
     * Filter, which TimeOff to fetch.
     */
    where?: TimeOffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeOffs to fetch.
     */
    orderBy?: TimeOffOrderByWithRelationInput | TimeOffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeOffs.
     */
    cursor?: TimeOffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeOffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeOffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeOffs.
     */
    distinct?: TimeOffScalarFieldEnum | TimeOffScalarFieldEnum[]
  }

  /**
   * TimeOff findFirstOrThrow
   */
  export type TimeOffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOff
     */
    select?: TimeOffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOff
     */
    omit?: TimeOffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffInclude<ExtArgs> | null
    /**
     * Filter, which TimeOff to fetch.
     */
    where?: TimeOffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeOffs to fetch.
     */
    orderBy?: TimeOffOrderByWithRelationInput | TimeOffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeOffs.
     */
    cursor?: TimeOffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeOffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeOffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeOffs.
     */
    distinct?: TimeOffScalarFieldEnum | TimeOffScalarFieldEnum[]
  }

  /**
   * TimeOff findMany
   */
  export type TimeOffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOff
     */
    select?: TimeOffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOff
     */
    omit?: TimeOffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffInclude<ExtArgs> | null
    /**
     * Filter, which TimeOffs to fetch.
     */
    where?: TimeOffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeOffs to fetch.
     */
    orderBy?: TimeOffOrderByWithRelationInput | TimeOffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimeOffs.
     */
    cursor?: TimeOffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeOffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeOffs.
     */
    skip?: number
    distinct?: TimeOffScalarFieldEnum | TimeOffScalarFieldEnum[]
  }

  /**
   * TimeOff create
   */
  export type TimeOffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOff
     */
    select?: TimeOffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOff
     */
    omit?: TimeOffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffInclude<ExtArgs> | null
    /**
     * The data needed to create a TimeOff.
     */
    data: XOR<TimeOffCreateInput, TimeOffUncheckedCreateInput>
  }

  /**
   * TimeOff createMany
   */
  export type TimeOffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimeOffs.
     */
    data: TimeOffCreateManyInput | TimeOffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimeOff createManyAndReturn
   */
  export type TimeOffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOff
     */
    select?: TimeOffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOff
     */
    omit?: TimeOffOmit<ExtArgs> | null
    /**
     * The data used to create many TimeOffs.
     */
    data: TimeOffCreateManyInput | TimeOffCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimeOff update
   */
  export type TimeOffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOff
     */
    select?: TimeOffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOff
     */
    omit?: TimeOffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffInclude<ExtArgs> | null
    /**
     * The data needed to update a TimeOff.
     */
    data: XOR<TimeOffUpdateInput, TimeOffUncheckedUpdateInput>
    /**
     * Choose, which TimeOff to update.
     */
    where: TimeOffWhereUniqueInput
  }

  /**
   * TimeOff updateMany
   */
  export type TimeOffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimeOffs.
     */
    data: XOR<TimeOffUpdateManyMutationInput, TimeOffUncheckedUpdateManyInput>
    /**
     * Filter which TimeOffs to update
     */
    where?: TimeOffWhereInput
    /**
     * Limit how many TimeOffs to update.
     */
    limit?: number
  }

  /**
   * TimeOff updateManyAndReturn
   */
  export type TimeOffUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOff
     */
    select?: TimeOffSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOff
     */
    omit?: TimeOffOmit<ExtArgs> | null
    /**
     * The data used to update TimeOffs.
     */
    data: XOR<TimeOffUpdateManyMutationInput, TimeOffUncheckedUpdateManyInput>
    /**
     * Filter which TimeOffs to update
     */
    where?: TimeOffWhereInput
    /**
     * Limit how many TimeOffs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimeOff upsert
   */
  export type TimeOffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOff
     */
    select?: TimeOffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOff
     */
    omit?: TimeOffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffInclude<ExtArgs> | null
    /**
     * The filter to search for the TimeOff to update in case it exists.
     */
    where: TimeOffWhereUniqueInput
    /**
     * In case the TimeOff found by the `where` argument doesn't exist, create a new TimeOff with this data.
     */
    create: XOR<TimeOffCreateInput, TimeOffUncheckedCreateInput>
    /**
     * In case the TimeOff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimeOffUpdateInput, TimeOffUncheckedUpdateInput>
  }

  /**
   * TimeOff delete
   */
  export type TimeOffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOff
     */
    select?: TimeOffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOff
     */
    omit?: TimeOffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffInclude<ExtArgs> | null
    /**
     * Filter which TimeOff to delete.
     */
    where: TimeOffWhereUniqueInput
  }

  /**
   * TimeOff deleteMany
   */
  export type TimeOffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeOffs to delete
     */
    where?: TimeOffWhereInput
    /**
     * Limit how many TimeOffs to delete.
     */
    limit?: number
  }

  /**
   * TimeOff without action
   */
  export type TimeOffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeOff
     */
    select?: TimeOffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeOff
     */
    omit?: TimeOffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeOffInclude<ExtArgs> | null
  }


  /**
   * Model Schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    orgId: string | null
    startTime: Date | null
    endTime: Date | null
    position: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    orgId: string | null
    startTime: Date | null
    endTime: Date | null
    position: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    employeeId: number
    orgId: number
    startTime: number
    endTime: number
    position: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScheduleMinAggregateInputType = {
    id?: true
    employeeId?: true
    orgId?: true
    startTime?: true
    endTime?: true
    position?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    employeeId?: true
    orgId?: true
    startTime?: true
    endTime?: true
    position?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    employeeId?: true
    orgId?: true
    startTime?: true
    endTime?: true
    position?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule to aggregate.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type ScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithAggregationInput | ScheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: ScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    id: string
    employeeId: string
    orgId: string
    startTime: Date
    endTime: Date
    position: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: ScheduleCountAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    orgId?: boolean
    startTime?: boolean
    endTime?: boolean
    position?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    orgId?: boolean
    startTime?: boolean
    endTime?: boolean
    position?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    orgId?: boolean
    startTime?: boolean
    endTime?: boolean
    position?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectScalar = {
    id?: boolean
    employeeId?: boolean
    orgId?: boolean
    startTime?: boolean
    endTime?: boolean
    position?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "orgId" | "startTime" | "endTime" | "position" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["schedule"]>
  export type ScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $SchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      orgId: string
      startTime: Date
      endTime: Date
      position: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = $Result.GetResult<Prisma.$SchedulePayload, S>

  type ScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface ScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule'], meta: { name: 'Schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {ScheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleFindUniqueArgs>(args: SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleFindFirstArgs>(args?: SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleFindManyArgs>(args?: SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule.
     * @param {ScheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
     */
    create<T extends ScheduleCreateArgs>(args: SelectSubset<T, ScheduleCreateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleCreateManyArgs>(args?: SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedules and returns the data saved in the database.
     * @param {ScheduleCreateManyAndReturnArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Schedule.
     * @param {ScheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
     */
    delete<T extends ScheduleDeleteArgs>(args: SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule.
     * @param {ScheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleUpdateArgs>(args: SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {ScheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleDeleteManyArgs>(args?: SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleUpdateManyArgs>(args: SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules and returns the data updated in the database.
     * @param {ScheduleUpdateManyAndReturnArgs} args - Arguments to update many Schedules.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Schedule.
     * @param {ScheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleUpsertArgs>(args: SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends ScheduleCountArgs>(
      args?: Subset<T, ScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule model
   */
  readonly fields: ScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Schedule model
   */
  interface ScheduleFieldRefs {
    readonly id: FieldRef<"Schedule", 'String'>
    readonly employeeId: FieldRef<"Schedule", 'String'>
    readonly orgId: FieldRef<"Schedule", 'String'>
    readonly startTime: FieldRef<"Schedule", 'DateTime'>
    readonly endTime: FieldRef<"Schedule", 'DateTime'>
    readonly position: FieldRef<"Schedule", 'String'>
    readonly notes: FieldRef<"Schedule", 'String'>
    readonly createdAt: FieldRef<"Schedule", 'DateTime'>
    readonly updatedAt: FieldRef<"Schedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Schedule findUnique
   */
  export type ScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findUniqueOrThrow
   */
  export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findFirst
   */
  export type ScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findFirstOrThrow
   */
  export type ScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findMany
   */
  export type ScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule create
   */
  export type ScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a Schedule.
     */
    data: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
  }

  /**
   * Schedule createMany
   */
  export type ScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Schedule createManyAndReturn
   */
  export type ScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule update
   */
  export type ScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a Schedule.
     */
    data: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    /**
     * Choose, which Schedule to update.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule updateMany
   */
  export type ScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule updateManyAndReturn
   */
  export type ScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule upsert
   */
  export type ScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the Schedule to update in case it exists.
     */
    where: ScheduleWhereUniqueInput
    /**
     * In case the Schedule found by the `where` argument doesn't exist, create a new Schedule with this data.
     */
    create: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    /**
     * In case the Schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
  }

  /**
   * Schedule delete
   */
  export type ScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter which Schedule to delete.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule deleteMany
   */
  export type ScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedules to delete
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to delete.
     */
    limit?: number
  }

  /**
   * Schedule without action
   */
  export type ScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
  }


  /**
   * Model WorkedEmployee
   */

  export type AggregateWorkedEmployee = {
    _count: WorkedEmployeeCountAggregateOutputType | null
    _avg: WorkedEmployeeAvgAggregateOutputType | null
    _sum: WorkedEmployeeSumAggregateOutputType | null
    _min: WorkedEmployeeMinAggregateOutputType | null
    _max: WorkedEmployeeMaxAggregateOutputType | null
  }

  export type WorkedEmployeeAvgAggregateOutputType = {
    hoursWorked: number | null
    earnings: number | null
  }

  export type WorkedEmployeeSumAggregateOutputType = {
    hoursWorked: number | null
    earnings: number | null
  }

  export type WorkedEmployeeMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    orgId: string | null
    date: Date | null
    hoursWorked: number | null
    earnings: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkedEmployeeMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    orgId: string | null
    date: Date | null
    hoursWorked: number | null
    earnings: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkedEmployeeCountAggregateOutputType = {
    id: number
    employeeId: number
    orgId: number
    date: number
    hoursWorked: number
    earnings: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkedEmployeeAvgAggregateInputType = {
    hoursWorked?: true
    earnings?: true
  }

  export type WorkedEmployeeSumAggregateInputType = {
    hoursWorked?: true
    earnings?: true
  }

  export type WorkedEmployeeMinAggregateInputType = {
    id?: true
    employeeId?: true
    orgId?: true
    date?: true
    hoursWorked?: true
    earnings?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkedEmployeeMaxAggregateInputType = {
    id?: true
    employeeId?: true
    orgId?: true
    date?: true
    hoursWorked?: true
    earnings?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkedEmployeeCountAggregateInputType = {
    id?: true
    employeeId?: true
    orgId?: true
    date?: true
    hoursWorked?: true
    earnings?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkedEmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkedEmployee to aggregate.
     */
    where?: WorkedEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkedEmployees to fetch.
     */
    orderBy?: WorkedEmployeeOrderByWithRelationInput | WorkedEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkedEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkedEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkedEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkedEmployees
    **/
    _count?: true | WorkedEmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkedEmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkedEmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkedEmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkedEmployeeMaxAggregateInputType
  }

  export type GetWorkedEmployeeAggregateType<T extends WorkedEmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkedEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkedEmployee[P]>
      : GetScalarType<T[P], AggregateWorkedEmployee[P]>
  }




  export type WorkedEmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkedEmployeeWhereInput
    orderBy?: WorkedEmployeeOrderByWithAggregationInput | WorkedEmployeeOrderByWithAggregationInput[]
    by: WorkedEmployeeScalarFieldEnum[] | WorkedEmployeeScalarFieldEnum
    having?: WorkedEmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkedEmployeeCountAggregateInputType | true
    _avg?: WorkedEmployeeAvgAggregateInputType
    _sum?: WorkedEmployeeSumAggregateInputType
    _min?: WorkedEmployeeMinAggregateInputType
    _max?: WorkedEmployeeMaxAggregateInputType
  }

  export type WorkedEmployeeGroupByOutputType = {
    id: string
    employeeId: string
    orgId: string
    date: Date
    hoursWorked: number
    earnings: number
    createdAt: Date
    updatedAt: Date
    _count: WorkedEmployeeCountAggregateOutputType | null
    _avg: WorkedEmployeeAvgAggregateOutputType | null
    _sum: WorkedEmployeeSumAggregateOutputType | null
    _min: WorkedEmployeeMinAggregateOutputType | null
    _max: WorkedEmployeeMaxAggregateOutputType | null
  }

  type GetWorkedEmployeeGroupByPayload<T extends WorkedEmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkedEmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkedEmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkedEmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], WorkedEmployeeGroupByOutputType[P]>
        }
      >
    >


  export type WorkedEmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    orgId?: boolean
    date?: boolean
    hoursWorked?: boolean
    earnings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workedEmployee"]>

  export type WorkedEmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    orgId?: boolean
    date?: boolean
    hoursWorked?: boolean
    earnings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workedEmployee"]>

  export type WorkedEmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    orgId?: boolean
    date?: boolean
    hoursWorked?: boolean
    earnings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workedEmployee"]>

  export type WorkedEmployeeSelectScalar = {
    id?: boolean
    employeeId?: boolean
    orgId?: boolean
    date?: boolean
    hoursWorked?: boolean
    earnings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkedEmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "orgId" | "date" | "hoursWorked" | "earnings" | "createdAt" | "updatedAt", ExtArgs["result"]["workedEmployee"]>
  export type WorkedEmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type WorkedEmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type WorkedEmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $WorkedEmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkedEmployee"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      orgId: string
      date: Date
      hoursWorked: number
      earnings: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workedEmployee"]>
    composites: {}
  }

  type WorkedEmployeeGetPayload<S extends boolean | null | undefined | WorkedEmployeeDefaultArgs> = $Result.GetResult<Prisma.$WorkedEmployeePayload, S>

  type WorkedEmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkedEmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkedEmployeeCountAggregateInputType | true
    }

  export interface WorkedEmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkedEmployee'], meta: { name: 'WorkedEmployee' } }
    /**
     * Find zero or one WorkedEmployee that matches the filter.
     * @param {WorkedEmployeeFindUniqueArgs} args - Arguments to find a WorkedEmployee
     * @example
     * // Get one WorkedEmployee
     * const workedEmployee = await prisma.workedEmployee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkedEmployeeFindUniqueArgs>(args: SelectSubset<T, WorkedEmployeeFindUniqueArgs<ExtArgs>>): Prisma__WorkedEmployeeClient<$Result.GetResult<Prisma.$WorkedEmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkedEmployee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkedEmployeeFindUniqueOrThrowArgs} args - Arguments to find a WorkedEmployee
     * @example
     * // Get one WorkedEmployee
     * const workedEmployee = await prisma.workedEmployee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkedEmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkedEmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkedEmployeeClient<$Result.GetResult<Prisma.$WorkedEmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkedEmployee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkedEmployeeFindFirstArgs} args - Arguments to find a WorkedEmployee
     * @example
     * // Get one WorkedEmployee
     * const workedEmployee = await prisma.workedEmployee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkedEmployeeFindFirstArgs>(args?: SelectSubset<T, WorkedEmployeeFindFirstArgs<ExtArgs>>): Prisma__WorkedEmployeeClient<$Result.GetResult<Prisma.$WorkedEmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkedEmployee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkedEmployeeFindFirstOrThrowArgs} args - Arguments to find a WorkedEmployee
     * @example
     * // Get one WorkedEmployee
     * const workedEmployee = await prisma.workedEmployee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkedEmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkedEmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkedEmployeeClient<$Result.GetResult<Prisma.$WorkedEmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkedEmployees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkedEmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkedEmployees
     * const workedEmployees = await prisma.workedEmployee.findMany()
     * 
     * // Get first 10 WorkedEmployees
     * const workedEmployees = await prisma.workedEmployee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workedEmployeeWithIdOnly = await prisma.workedEmployee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkedEmployeeFindManyArgs>(args?: SelectSubset<T, WorkedEmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkedEmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkedEmployee.
     * @param {WorkedEmployeeCreateArgs} args - Arguments to create a WorkedEmployee.
     * @example
     * // Create one WorkedEmployee
     * const WorkedEmployee = await prisma.workedEmployee.create({
     *   data: {
     *     // ... data to create a WorkedEmployee
     *   }
     * })
     * 
     */
    create<T extends WorkedEmployeeCreateArgs>(args: SelectSubset<T, WorkedEmployeeCreateArgs<ExtArgs>>): Prisma__WorkedEmployeeClient<$Result.GetResult<Prisma.$WorkedEmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkedEmployees.
     * @param {WorkedEmployeeCreateManyArgs} args - Arguments to create many WorkedEmployees.
     * @example
     * // Create many WorkedEmployees
     * const workedEmployee = await prisma.workedEmployee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkedEmployeeCreateManyArgs>(args?: SelectSubset<T, WorkedEmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkedEmployees and returns the data saved in the database.
     * @param {WorkedEmployeeCreateManyAndReturnArgs} args - Arguments to create many WorkedEmployees.
     * @example
     * // Create many WorkedEmployees
     * const workedEmployee = await prisma.workedEmployee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkedEmployees and only return the `id`
     * const workedEmployeeWithIdOnly = await prisma.workedEmployee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkedEmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkedEmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkedEmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkedEmployee.
     * @param {WorkedEmployeeDeleteArgs} args - Arguments to delete one WorkedEmployee.
     * @example
     * // Delete one WorkedEmployee
     * const WorkedEmployee = await prisma.workedEmployee.delete({
     *   where: {
     *     // ... filter to delete one WorkedEmployee
     *   }
     * })
     * 
     */
    delete<T extends WorkedEmployeeDeleteArgs>(args: SelectSubset<T, WorkedEmployeeDeleteArgs<ExtArgs>>): Prisma__WorkedEmployeeClient<$Result.GetResult<Prisma.$WorkedEmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkedEmployee.
     * @param {WorkedEmployeeUpdateArgs} args - Arguments to update one WorkedEmployee.
     * @example
     * // Update one WorkedEmployee
     * const workedEmployee = await prisma.workedEmployee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkedEmployeeUpdateArgs>(args: SelectSubset<T, WorkedEmployeeUpdateArgs<ExtArgs>>): Prisma__WorkedEmployeeClient<$Result.GetResult<Prisma.$WorkedEmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkedEmployees.
     * @param {WorkedEmployeeDeleteManyArgs} args - Arguments to filter WorkedEmployees to delete.
     * @example
     * // Delete a few WorkedEmployees
     * const { count } = await prisma.workedEmployee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkedEmployeeDeleteManyArgs>(args?: SelectSubset<T, WorkedEmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkedEmployees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkedEmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkedEmployees
     * const workedEmployee = await prisma.workedEmployee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkedEmployeeUpdateManyArgs>(args: SelectSubset<T, WorkedEmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkedEmployees and returns the data updated in the database.
     * @param {WorkedEmployeeUpdateManyAndReturnArgs} args - Arguments to update many WorkedEmployees.
     * @example
     * // Update many WorkedEmployees
     * const workedEmployee = await prisma.workedEmployee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkedEmployees and only return the `id`
     * const workedEmployeeWithIdOnly = await prisma.workedEmployee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkedEmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkedEmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkedEmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkedEmployee.
     * @param {WorkedEmployeeUpsertArgs} args - Arguments to update or create a WorkedEmployee.
     * @example
     * // Update or create a WorkedEmployee
     * const workedEmployee = await prisma.workedEmployee.upsert({
     *   create: {
     *     // ... data to create a WorkedEmployee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkedEmployee we want to update
     *   }
     * })
     */
    upsert<T extends WorkedEmployeeUpsertArgs>(args: SelectSubset<T, WorkedEmployeeUpsertArgs<ExtArgs>>): Prisma__WorkedEmployeeClient<$Result.GetResult<Prisma.$WorkedEmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkedEmployees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkedEmployeeCountArgs} args - Arguments to filter WorkedEmployees to count.
     * @example
     * // Count the number of WorkedEmployees
     * const count = await prisma.workedEmployee.count({
     *   where: {
     *     // ... the filter for the WorkedEmployees we want to count
     *   }
     * })
    **/
    count<T extends WorkedEmployeeCountArgs>(
      args?: Subset<T, WorkedEmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkedEmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkedEmployee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkedEmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkedEmployeeAggregateArgs>(args: Subset<T, WorkedEmployeeAggregateArgs>): Prisma.PrismaPromise<GetWorkedEmployeeAggregateType<T>>

    /**
     * Group by WorkedEmployee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkedEmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkedEmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkedEmployeeGroupByArgs['orderBy'] }
        : { orderBy?: WorkedEmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkedEmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkedEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkedEmployee model
   */
  readonly fields: WorkedEmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkedEmployee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkedEmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkedEmployee model
   */
  interface WorkedEmployeeFieldRefs {
    readonly id: FieldRef<"WorkedEmployee", 'String'>
    readonly employeeId: FieldRef<"WorkedEmployee", 'String'>
    readonly orgId: FieldRef<"WorkedEmployee", 'String'>
    readonly date: FieldRef<"WorkedEmployee", 'DateTime'>
    readonly hoursWorked: FieldRef<"WorkedEmployee", 'Float'>
    readonly earnings: FieldRef<"WorkedEmployee", 'Int'>
    readonly createdAt: FieldRef<"WorkedEmployee", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkedEmployee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkedEmployee findUnique
   */
  export type WorkedEmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkedEmployee
     */
    select?: WorkedEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkedEmployee
     */
    omit?: WorkedEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkedEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which WorkedEmployee to fetch.
     */
    where: WorkedEmployeeWhereUniqueInput
  }

  /**
   * WorkedEmployee findUniqueOrThrow
   */
  export type WorkedEmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkedEmployee
     */
    select?: WorkedEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkedEmployee
     */
    omit?: WorkedEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkedEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which WorkedEmployee to fetch.
     */
    where: WorkedEmployeeWhereUniqueInput
  }

  /**
   * WorkedEmployee findFirst
   */
  export type WorkedEmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkedEmployee
     */
    select?: WorkedEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkedEmployee
     */
    omit?: WorkedEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkedEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which WorkedEmployee to fetch.
     */
    where?: WorkedEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkedEmployees to fetch.
     */
    orderBy?: WorkedEmployeeOrderByWithRelationInput | WorkedEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkedEmployees.
     */
    cursor?: WorkedEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkedEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkedEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkedEmployees.
     */
    distinct?: WorkedEmployeeScalarFieldEnum | WorkedEmployeeScalarFieldEnum[]
  }

  /**
   * WorkedEmployee findFirstOrThrow
   */
  export type WorkedEmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkedEmployee
     */
    select?: WorkedEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkedEmployee
     */
    omit?: WorkedEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkedEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which WorkedEmployee to fetch.
     */
    where?: WorkedEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkedEmployees to fetch.
     */
    orderBy?: WorkedEmployeeOrderByWithRelationInput | WorkedEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkedEmployees.
     */
    cursor?: WorkedEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkedEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkedEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkedEmployees.
     */
    distinct?: WorkedEmployeeScalarFieldEnum | WorkedEmployeeScalarFieldEnum[]
  }

  /**
   * WorkedEmployee findMany
   */
  export type WorkedEmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkedEmployee
     */
    select?: WorkedEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkedEmployee
     */
    omit?: WorkedEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkedEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which WorkedEmployees to fetch.
     */
    where?: WorkedEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkedEmployees to fetch.
     */
    orderBy?: WorkedEmployeeOrderByWithRelationInput | WorkedEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkedEmployees.
     */
    cursor?: WorkedEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkedEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkedEmployees.
     */
    skip?: number
    distinct?: WorkedEmployeeScalarFieldEnum | WorkedEmployeeScalarFieldEnum[]
  }

  /**
   * WorkedEmployee create
   */
  export type WorkedEmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkedEmployee
     */
    select?: WorkedEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkedEmployee
     */
    omit?: WorkedEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkedEmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkedEmployee.
     */
    data: XOR<WorkedEmployeeCreateInput, WorkedEmployeeUncheckedCreateInput>
  }

  /**
   * WorkedEmployee createMany
   */
  export type WorkedEmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkedEmployees.
     */
    data: WorkedEmployeeCreateManyInput | WorkedEmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkedEmployee createManyAndReturn
   */
  export type WorkedEmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkedEmployee
     */
    select?: WorkedEmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkedEmployee
     */
    omit?: WorkedEmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many WorkedEmployees.
     */
    data: WorkedEmployeeCreateManyInput | WorkedEmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkedEmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkedEmployee update
   */
  export type WorkedEmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkedEmployee
     */
    select?: WorkedEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkedEmployee
     */
    omit?: WorkedEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkedEmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkedEmployee.
     */
    data: XOR<WorkedEmployeeUpdateInput, WorkedEmployeeUncheckedUpdateInput>
    /**
     * Choose, which WorkedEmployee to update.
     */
    where: WorkedEmployeeWhereUniqueInput
  }

  /**
   * WorkedEmployee updateMany
   */
  export type WorkedEmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkedEmployees.
     */
    data: XOR<WorkedEmployeeUpdateManyMutationInput, WorkedEmployeeUncheckedUpdateManyInput>
    /**
     * Filter which WorkedEmployees to update
     */
    where?: WorkedEmployeeWhereInput
    /**
     * Limit how many WorkedEmployees to update.
     */
    limit?: number
  }

  /**
   * WorkedEmployee updateManyAndReturn
   */
  export type WorkedEmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkedEmployee
     */
    select?: WorkedEmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkedEmployee
     */
    omit?: WorkedEmployeeOmit<ExtArgs> | null
    /**
     * The data used to update WorkedEmployees.
     */
    data: XOR<WorkedEmployeeUpdateManyMutationInput, WorkedEmployeeUncheckedUpdateManyInput>
    /**
     * Filter which WorkedEmployees to update
     */
    where?: WorkedEmployeeWhereInput
    /**
     * Limit how many WorkedEmployees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkedEmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkedEmployee upsert
   */
  export type WorkedEmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkedEmployee
     */
    select?: WorkedEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkedEmployee
     */
    omit?: WorkedEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkedEmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkedEmployee to update in case it exists.
     */
    where: WorkedEmployeeWhereUniqueInput
    /**
     * In case the WorkedEmployee found by the `where` argument doesn't exist, create a new WorkedEmployee with this data.
     */
    create: XOR<WorkedEmployeeCreateInput, WorkedEmployeeUncheckedCreateInput>
    /**
     * In case the WorkedEmployee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkedEmployeeUpdateInput, WorkedEmployeeUncheckedUpdateInput>
  }

  /**
   * WorkedEmployee delete
   */
  export type WorkedEmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkedEmployee
     */
    select?: WorkedEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkedEmployee
     */
    omit?: WorkedEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkedEmployeeInclude<ExtArgs> | null
    /**
     * Filter which WorkedEmployee to delete.
     */
    where: WorkedEmployeeWhereUniqueInput
  }

  /**
   * WorkedEmployee deleteMany
   */
  export type WorkedEmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkedEmployees to delete
     */
    where?: WorkedEmployeeWhereInput
    /**
     * Limit how many WorkedEmployees to delete.
     */
    limit?: number
  }

  /**
   * WorkedEmployee without action
   */
  export type WorkedEmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkedEmployee
     */
    select?: WorkedEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkedEmployee
     */
    omit?: WorkedEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkedEmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Shift
   */

  export type AggregateShift = {
    _count: ShiftCountAggregateOutputType | null
    _min: ShiftMinAggregateOutputType | null
    _max: ShiftMaxAggregateOutputType | null
  }

  export type ShiftMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    employeeId: string | null
    startTime: Date | null
    endTime: Date | null
    position: string | null
    shiftName: string | null
    color: string | null
    notes: string | null
    isDraft: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShiftMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    employeeId: string | null
    startTime: Date | null
    endTime: Date | null
    position: string | null
    shiftName: string | null
    color: string | null
    notes: string | null
    isDraft: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShiftCountAggregateOutputType = {
    id: number
    orgId: number
    employeeId: number
    startTime: number
    endTime: number
    position: number
    shiftName: number
    color: number
    notes: number
    isDraft: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShiftMinAggregateInputType = {
    id?: true
    orgId?: true
    employeeId?: true
    startTime?: true
    endTime?: true
    position?: true
    shiftName?: true
    color?: true
    notes?: true
    isDraft?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShiftMaxAggregateInputType = {
    id?: true
    orgId?: true
    employeeId?: true
    startTime?: true
    endTime?: true
    position?: true
    shiftName?: true
    color?: true
    notes?: true
    isDraft?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShiftCountAggregateInputType = {
    id?: true
    orgId?: true
    employeeId?: true
    startTime?: true
    endTime?: true
    position?: true
    shiftName?: true
    color?: true
    notes?: true
    isDraft?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShiftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shift to aggregate.
     */
    where?: ShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     */
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shifts
    **/
    _count?: true | ShiftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShiftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShiftMaxAggregateInputType
  }

  export type GetShiftAggregateType<T extends ShiftAggregateArgs> = {
        [P in keyof T & keyof AggregateShift]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShift[P]>
      : GetScalarType<T[P], AggregateShift[P]>
  }




  export type ShiftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftWhereInput
    orderBy?: ShiftOrderByWithAggregationInput | ShiftOrderByWithAggregationInput[]
    by: ShiftScalarFieldEnum[] | ShiftScalarFieldEnum
    having?: ShiftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShiftCountAggregateInputType | true
    _min?: ShiftMinAggregateInputType
    _max?: ShiftMaxAggregateInputType
  }

  export type ShiftGroupByOutputType = {
    id: string
    orgId: string
    employeeId: string | null
    startTime: Date
    endTime: Date
    position: string | null
    shiftName: string | null
    color: string | null
    notes: string | null
    isDraft: boolean
    createdAt: Date
    updatedAt: Date
    _count: ShiftCountAggregateOutputType | null
    _min: ShiftMinAggregateOutputType | null
    _max: ShiftMaxAggregateOutputType | null
  }

  type GetShiftGroupByPayload<T extends ShiftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShiftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShiftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShiftGroupByOutputType[P]>
            : GetScalarType<T[P], ShiftGroupByOutputType[P]>
        }
      >
    >


  export type ShiftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    employeeId?: boolean
    startTime?: boolean
    endTime?: boolean
    position?: boolean
    shiftName?: boolean
    color?: boolean
    notes?: boolean
    isDraft?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shift"]>

  export type ShiftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    employeeId?: boolean
    startTime?: boolean
    endTime?: boolean
    position?: boolean
    shiftName?: boolean
    color?: boolean
    notes?: boolean
    isDraft?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shift"]>

  export type ShiftSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    employeeId?: boolean
    startTime?: boolean
    endTime?: boolean
    position?: boolean
    shiftName?: boolean
    color?: boolean
    notes?: boolean
    isDraft?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shift"]>

  export type ShiftSelectScalar = {
    id?: boolean
    orgId?: boolean
    employeeId?: boolean
    startTime?: boolean
    endTime?: boolean
    position?: boolean
    shiftName?: boolean
    color?: boolean
    notes?: boolean
    isDraft?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShiftOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "employeeId" | "startTime" | "endTime" | "position" | "shiftName" | "color" | "notes" | "isDraft" | "createdAt" | "updatedAt", ExtArgs["result"]["shift"]>

  export type $ShiftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shift"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      employeeId: string | null
      startTime: Date
      endTime: Date
      position: string | null
      shiftName: string | null
      color: string | null
      notes: string | null
      isDraft: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shift"]>
    composites: {}
  }

  type ShiftGetPayload<S extends boolean | null | undefined | ShiftDefaultArgs> = $Result.GetResult<Prisma.$ShiftPayload, S>

  type ShiftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShiftFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShiftCountAggregateInputType | true
    }

  export interface ShiftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shift'], meta: { name: 'Shift' } }
    /**
     * Find zero or one Shift that matches the filter.
     * @param {ShiftFindUniqueArgs} args - Arguments to find a Shift
     * @example
     * // Get one Shift
     * const shift = await prisma.shift.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShiftFindUniqueArgs>(args: SelectSubset<T, ShiftFindUniqueArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shift that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShiftFindUniqueOrThrowArgs} args - Arguments to find a Shift
     * @example
     * // Get one Shift
     * const shift = await prisma.shift.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShiftFindUniqueOrThrowArgs>(args: SelectSubset<T, ShiftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shift that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftFindFirstArgs} args - Arguments to find a Shift
     * @example
     * // Get one Shift
     * const shift = await prisma.shift.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShiftFindFirstArgs>(args?: SelectSubset<T, ShiftFindFirstArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shift that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftFindFirstOrThrowArgs} args - Arguments to find a Shift
     * @example
     * // Get one Shift
     * const shift = await prisma.shift.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShiftFindFirstOrThrowArgs>(args?: SelectSubset<T, ShiftFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shifts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shifts
     * const shifts = await prisma.shift.findMany()
     * 
     * // Get first 10 Shifts
     * const shifts = await prisma.shift.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shiftWithIdOnly = await prisma.shift.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShiftFindManyArgs>(args?: SelectSubset<T, ShiftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shift.
     * @param {ShiftCreateArgs} args - Arguments to create a Shift.
     * @example
     * // Create one Shift
     * const Shift = await prisma.shift.create({
     *   data: {
     *     // ... data to create a Shift
     *   }
     * })
     * 
     */
    create<T extends ShiftCreateArgs>(args: SelectSubset<T, ShiftCreateArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shifts.
     * @param {ShiftCreateManyArgs} args - Arguments to create many Shifts.
     * @example
     * // Create many Shifts
     * const shift = await prisma.shift.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShiftCreateManyArgs>(args?: SelectSubset<T, ShiftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shifts and returns the data saved in the database.
     * @param {ShiftCreateManyAndReturnArgs} args - Arguments to create many Shifts.
     * @example
     * // Create many Shifts
     * const shift = await prisma.shift.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shifts and only return the `id`
     * const shiftWithIdOnly = await prisma.shift.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShiftCreateManyAndReturnArgs>(args?: SelectSubset<T, ShiftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shift.
     * @param {ShiftDeleteArgs} args - Arguments to delete one Shift.
     * @example
     * // Delete one Shift
     * const Shift = await prisma.shift.delete({
     *   where: {
     *     // ... filter to delete one Shift
     *   }
     * })
     * 
     */
    delete<T extends ShiftDeleteArgs>(args: SelectSubset<T, ShiftDeleteArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shift.
     * @param {ShiftUpdateArgs} args - Arguments to update one Shift.
     * @example
     * // Update one Shift
     * const shift = await prisma.shift.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShiftUpdateArgs>(args: SelectSubset<T, ShiftUpdateArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shifts.
     * @param {ShiftDeleteManyArgs} args - Arguments to filter Shifts to delete.
     * @example
     * // Delete a few Shifts
     * const { count } = await prisma.shift.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShiftDeleteManyArgs>(args?: SelectSubset<T, ShiftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shifts
     * const shift = await prisma.shift.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShiftUpdateManyArgs>(args: SelectSubset<T, ShiftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shifts and returns the data updated in the database.
     * @param {ShiftUpdateManyAndReturnArgs} args - Arguments to update many Shifts.
     * @example
     * // Update many Shifts
     * const shift = await prisma.shift.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shifts and only return the `id`
     * const shiftWithIdOnly = await prisma.shift.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShiftUpdateManyAndReturnArgs>(args: SelectSubset<T, ShiftUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shift.
     * @param {ShiftUpsertArgs} args - Arguments to update or create a Shift.
     * @example
     * // Update or create a Shift
     * const shift = await prisma.shift.upsert({
     *   create: {
     *     // ... data to create a Shift
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shift we want to update
     *   }
     * })
     */
    upsert<T extends ShiftUpsertArgs>(args: SelectSubset<T, ShiftUpsertArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftCountArgs} args - Arguments to filter Shifts to count.
     * @example
     * // Count the number of Shifts
     * const count = await prisma.shift.count({
     *   where: {
     *     // ... the filter for the Shifts we want to count
     *   }
     * })
    **/
    count<T extends ShiftCountArgs>(
      args?: Subset<T, ShiftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShiftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShiftAggregateArgs>(args: Subset<T, ShiftAggregateArgs>): Prisma.PrismaPromise<GetShiftAggregateType<T>>

    /**
     * Group by Shift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShiftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShiftGroupByArgs['orderBy'] }
        : { orderBy?: ShiftGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShiftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShiftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shift model
   */
  readonly fields: ShiftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shift.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShiftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shift model
   */
  interface ShiftFieldRefs {
    readonly id: FieldRef<"Shift", 'String'>
    readonly orgId: FieldRef<"Shift", 'String'>
    readonly employeeId: FieldRef<"Shift", 'String'>
    readonly startTime: FieldRef<"Shift", 'DateTime'>
    readonly endTime: FieldRef<"Shift", 'DateTime'>
    readonly position: FieldRef<"Shift", 'String'>
    readonly shiftName: FieldRef<"Shift", 'String'>
    readonly color: FieldRef<"Shift", 'String'>
    readonly notes: FieldRef<"Shift", 'String'>
    readonly isDraft: FieldRef<"Shift", 'Boolean'>
    readonly createdAt: FieldRef<"Shift", 'DateTime'>
    readonly updatedAt: FieldRef<"Shift", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Shift findUnique
   */
  export type ShiftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Filter, which Shift to fetch.
     */
    where: ShiftWhereUniqueInput
  }

  /**
   * Shift findUniqueOrThrow
   */
  export type ShiftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Filter, which Shift to fetch.
     */
    where: ShiftWhereUniqueInput
  }

  /**
   * Shift findFirst
   */
  export type ShiftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Filter, which Shift to fetch.
     */
    where?: ShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     */
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shifts.
     */
    cursor?: ShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shifts.
     */
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }

  /**
   * Shift findFirstOrThrow
   */
  export type ShiftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Filter, which Shift to fetch.
     */
    where?: ShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     */
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shifts.
     */
    cursor?: ShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shifts.
     */
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }

  /**
   * Shift findMany
   */
  export type ShiftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Filter, which Shifts to fetch.
     */
    where?: ShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     */
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shifts.
     */
    cursor?: ShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     */
    skip?: number
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }

  /**
   * Shift create
   */
  export type ShiftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * The data needed to create a Shift.
     */
    data: XOR<ShiftCreateInput, ShiftUncheckedCreateInput>
  }

  /**
   * Shift createMany
   */
  export type ShiftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shifts.
     */
    data: ShiftCreateManyInput | ShiftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shift createManyAndReturn
   */
  export type ShiftCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * The data used to create many Shifts.
     */
    data: ShiftCreateManyInput | ShiftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shift update
   */
  export type ShiftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * The data needed to update a Shift.
     */
    data: XOR<ShiftUpdateInput, ShiftUncheckedUpdateInput>
    /**
     * Choose, which Shift to update.
     */
    where: ShiftWhereUniqueInput
  }

  /**
   * Shift updateMany
   */
  export type ShiftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shifts.
     */
    data: XOR<ShiftUpdateManyMutationInput, ShiftUncheckedUpdateManyInput>
    /**
     * Filter which Shifts to update
     */
    where?: ShiftWhereInput
    /**
     * Limit how many Shifts to update.
     */
    limit?: number
  }

  /**
   * Shift updateManyAndReturn
   */
  export type ShiftUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * The data used to update Shifts.
     */
    data: XOR<ShiftUpdateManyMutationInput, ShiftUncheckedUpdateManyInput>
    /**
     * Filter which Shifts to update
     */
    where?: ShiftWhereInput
    /**
     * Limit how many Shifts to update.
     */
    limit?: number
  }

  /**
   * Shift upsert
   */
  export type ShiftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * The filter to search for the Shift to update in case it exists.
     */
    where: ShiftWhereUniqueInput
    /**
     * In case the Shift found by the `where` argument doesn't exist, create a new Shift with this data.
     */
    create: XOR<ShiftCreateInput, ShiftUncheckedCreateInput>
    /**
     * In case the Shift was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShiftUpdateInput, ShiftUncheckedUpdateInput>
  }

  /**
   * Shift delete
   */
  export type ShiftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Filter which Shift to delete.
     */
    where: ShiftWhereUniqueInput
  }

  /**
   * Shift deleteMany
   */
  export type ShiftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shifts to delete
     */
    where?: ShiftWhereInput
    /**
     * Limit how many Shifts to delete.
     */
    limit?: number
  }

  /**
   * Shift without action
   */
  export type ShiftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
  }


  /**
   * Model Salary
   */

  export type AggregateSalary = {
    _count: SalaryCountAggregateOutputType | null
    _avg: SalaryAvgAggregateOutputType | null
    _sum: SalarySumAggregateOutputType | null
    _min: SalaryMinAggregateOutputType | null
    _max: SalaryMaxAggregateOutputType | null
  }

  export type SalaryAvgAggregateOutputType = {
    amount: number | null
  }

  export type SalarySumAggregateOutputType = {
    amount: number | null
  }

  export type SalaryMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    employeeId: string | null
    amount: number | null
    type: string | null
    effectiveDate: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalaryMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    employeeId: string | null
    amount: number | null
    type: string | null
    effectiveDate: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalaryCountAggregateOutputType = {
    id: number
    orgId: number
    employeeId: number
    amount: number
    type: number
    effectiveDate: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SalaryAvgAggregateInputType = {
    amount?: true
  }

  export type SalarySumAggregateInputType = {
    amount?: true
  }

  export type SalaryMinAggregateInputType = {
    id?: true
    orgId?: true
    employeeId?: true
    amount?: true
    type?: true
    effectiveDate?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalaryMaxAggregateInputType = {
    id?: true
    orgId?: true
    employeeId?: true
    amount?: true
    type?: true
    effectiveDate?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalaryCountAggregateInputType = {
    id?: true
    orgId?: true
    employeeId?: true
    amount?: true
    type?: true
    effectiveDate?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SalaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Salary to aggregate.
     */
    where?: SalaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salaries to fetch.
     */
    orderBy?: SalaryOrderByWithRelationInput | SalaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Salaries
    **/
    _count?: true | SalaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalaryMaxAggregateInputType
  }

  export type GetSalaryAggregateType<T extends SalaryAggregateArgs> = {
        [P in keyof T & keyof AggregateSalary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalary[P]>
      : GetScalarType<T[P], AggregateSalary[P]>
  }




  export type SalaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaryWhereInput
    orderBy?: SalaryOrderByWithAggregationInput | SalaryOrderByWithAggregationInput[]
    by: SalaryScalarFieldEnum[] | SalaryScalarFieldEnum
    having?: SalaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalaryCountAggregateInputType | true
    _avg?: SalaryAvgAggregateInputType
    _sum?: SalarySumAggregateInputType
    _min?: SalaryMinAggregateInputType
    _max?: SalaryMaxAggregateInputType
  }

  export type SalaryGroupByOutputType = {
    id: string
    orgId: string
    employeeId: string
    amount: number
    type: string
    effectiveDate: Date
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: SalaryCountAggregateOutputType | null
    _avg: SalaryAvgAggregateOutputType | null
    _sum: SalarySumAggregateOutputType | null
    _min: SalaryMinAggregateOutputType | null
    _max: SalaryMaxAggregateOutputType | null
  }

  type GetSalaryGroupByPayload<T extends SalaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalaryGroupByOutputType[P]>
            : GetScalarType<T[P], SalaryGroupByOutputType[P]>
        }
      >
    >


  export type SalarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    employeeId?: boolean
    amount?: boolean
    type?: boolean
    effectiveDate?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["salary"]>

  export type SalarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    employeeId?: boolean
    amount?: boolean
    type?: boolean
    effectiveDate?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["salary"]>

  export type SalarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    employeeId?: boolean
    amount?: boolean
    type?: boolean
    effectiveDate?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["salary"]>

  export type SalarySelectScalar = {
    id?: boolean
    orgId?: boolean
    employeeId?: boolean
    amount?: boolean
    type?: boolean
    effectiveDate?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SalaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "employeeId" | "amount" | "type" | "effectiveDate" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["salary"]>

  export type $SalaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Salary"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      employeeId: string
      amount: number
      type: string
      effectiveDate: Date
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["salary"]>
    composites: {}
  }

  type SalaryGetPayload<S extends boolean | null | undefined | SalaryDefaultArgs> = $Result.GetResult<Prisma.$SalaryPayload, S>

  type SalaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalaryCountAggregateInputType | true
    }

  export interface SalaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Salary'], meta: { name: 'Salary' } }
    /**
     * Find zero or one Salary that matches the filter.
     * @param {SalaryFindUniqueArgs} args - Arguments to find a Salary
     * @example
     * // Get one Salary
     * const salary = await prisma.salary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalaryFindUniqueArgs>(args: SelectSubset<T, SalaryFindUniqueArgs<ExtArgs>>): Prisma__SalaryClient<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Salary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalaryFindUniqueOrThrowArgs} args - Arguments to find a Salary
     * @example
     * // Get one Salary
     * const salary = await prisma.salary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalaryFindUniqueOrThrowArgs>(args: SelectSubset<T, SalaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalaryClient<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Salary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryFindFirstArgs} args - Arguments to find a Salary
     * @example
     * // Get one Salary
     * const salary = await prisma.salary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalaryFindFirstArgs>(args?: SelectSubset<T, SalaryFindFirstArgs<ExtArgs>>): Prisma__SalaryClient<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Salary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryFindFirstOrThrowArgs} args - Arguments to find a Salary
     * @example
     * // Get one Salary
     * const salary = await prisma.salary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalaryFindFirstOrThrowArgs>(args?: SelectSubset<T, SalaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalaryClient<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Salaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Salaries
     * const salaries = await prisma.salary.findMany()
     * 
     * // Get first 10 Salaries
     * const salaries = await prisma.salary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salaryWithIdOnly = await prisma.salary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalaryFindManyArgs>(args?: SelectSubset<T, SalaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Salary.
     * @param {SalaryCreateArgs} args - Arguments to create a Salary.
     * @example
     * // Create one Salary
     * const Salary = await prisma.salary.create({
     *   data: {
     *     // ... data to create a Salary
     *   }
     * })
     * 
     */
    create<T extends SalaryCreateArgs>(args: SelectSubset<T, SalaryCreateArgs<ExtArgs>>): Prisma__SalaryClient<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Salaries.
     * @param {SalaryCreateManyArgs} args - Arguments to create many Salaries.
     * @example
     * // Create many Salaries
     * const salary = await prisma.salary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalaryCreateManyArgs>(args?: SelectSubset<T, SalaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Salaries and returns the data saved in the database.
     * @param {SalaryCreateManyAndReturnArgs} args - Arguments to create many Salaries.
     * @example
     * // Create many Salaries
     * const salary = await prisma.salary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Salaries and only return the `id`
     * const salaryWithIdOnly = await prisma.salary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalaryCreateManyAndReturnArgs>(args?: SelectSubset<T, SalaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Salary.
     * @param {SalaryDeleteArgs} args - Arguments to delete one Salary.
     * @example
     * // Delete one Salary
     * const Salary = await prisma.salary.delete({
     *   where: {
     *     // ... filter to delete one Salary
     *   }
     * })
     * 
     */
    delete<T extends SalaryDeleteArgs>(args: SelectSubset<T, SalaryDeleteArgs<ExtArgs>>): Prisma__SalaryClient<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Salary.
     * @param {SalaryUpdateArgs} args - Arguments to update one Salary.
     * @example
     * // Update one Salary
     * const salary = await prisma.salary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalaryUpdateArgs>(args: SelectSubset<T, SalaryUpdateArgs<ExtArgs>>): Prisma__SalaryClient<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Salaries.
     * @param {SalaryDeleteManyArgs} args - Arguments to filter Salaries to delete.
     * @example
     * // Delete a few Salaries
     * const { count } = await prisma.salary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalaryDeleteManyArgs>(args?: SelectSubset<T, SalaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Salaries
     * const salary = await prisma.salary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalaryUpdateManyArgs>(args: SelectSubset<T, SalaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salaries and returns the data updated in the database.
     * @param {SalaryUpdateManyAndReturnArgs} args - Arguments to update many Salaries.
     * @example
     * // Update many Salaries
     * const salary = await prisma.salary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Salaries and only return the `id`
     * const salaryWithIdOnly = await prisma.salary.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SalaryUpdateManyAndReturnArgs>(args: SelectSubset<T, SalaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Salary.
     * @param {SalaryUpsertArgs} args - Arguments to update or create a Salary.
     * @example
     * // Update or create a Salary
     * const salary = await prisma.salary.upsert({
     *   create: {
     *     // ... data to create a Salary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Salary we want to update
     *   }
     * })
     */
    upsert<T extends SalaryUpsertArgs>(args: SelectSubset<T, SalaryUpsertArgs<ExtArgs>>): Prisma__SalaryClient<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Salaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryCountArgs} args - Arguments to filter Salaries to count.
     * @example
     * // Count the number of Salaries
     * const count = await prisma.salary.count({
     *   where: {
     *     // ... the filter for the Salaries we want to count
     *   }
     * })
    **/
    count<T extends SalaryCountArgs>(
      args?: Subset<T, SalaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Salary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalaryAggregateArgs>(args: Subset<T, SalaryAggregateArgs>): Prisma.PrismaPromise<GetSalaryAggregateType<T>>

    /**
     * Group by Salary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalaryGroupByArgs['orderBy'] }
        : { orderBy?: SalaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Salary model
   */
  readonly fields: SalaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Salary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Salary model
   */
  interface SalaryFieldRefs {
    readonly id: FieldRef<"Salary", 'String'>
    readonly orgId: FieldRef<"Salary", 'String'>
    readonly employeeId: FieldRef<"Salary", 'String'>
    readonly amount: FieldRef<"Salary", 'Float'>
    readonly type: FieldRef<"Salary", 'String'>
    readonly effectiveDate: FieldRef<"Salary", 'DateTime'>
    readonly notes: FieldRef<"Salary", 'String'>
    readonly createdAt: FieldRef<"Salary", 'DateTime'>
    readonly updatedAt: FieldRef<"Salary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Salary findUnique
   */
  export type SalaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * Filter, which Salary to fetch.
     */
    where: SalaryWhereUniqueInput
  }

  /**
   * Salary findUniqueOrThrow
   */
  export type SalaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * Filter, which Salary to fetch.
     */
    where: SalaryWhereUniqueInput
  }

  /**
   * Salary findFirst
   */
  export type SalaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * Filter, which Salary to fetch.
     */
    where?: SalaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salaries to fetch.
     */
    orderBy?: SalaryOrderByWithRelationInput | SalaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Salaries.
     */
    cursor?: SalaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salaries.
     */
    distinct?: SalaryScalarFieldEnum | SalaryScalarFieldEnum[]
  }

  /**
   * Salary findFirstOrThrow
   */
  export type SalaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * Filter, which Salary to fetch.
     */
    where?: SalaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salaries to fetch.
     */
    orderBy?: SalaryOrderByWithRelationInput | SalaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Salaries.
     */
    cursor?: SalaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salaries.
     */
    distinct?: SalaryScalarFieldEnum | SalaryScalarFieldEnum[]
  }

  /**
   * Salary findMany
   */
  export type SalaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * Filter, which Salaries to fetch.
     */
    where?: SalaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salaries to fetch.
     */
    orderBy?: SalaryOrderByWithRelationInput | SalaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Salaries.
     */
    cursor?: SalaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salaries.
     */
    skip?: number
    distinct?: SalaryScalarFieldEnum | SalaryScalarFieldEnum[]
  }

  /**
   * Salary create
   */
  export type SalaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * The data needed to create a Salary.
     */
    data: XOR<SalaryCreateInput, SalaryUncheckedCreateInput>
  }

  /**
   * Salary createMany
   */
  export type SalaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Salaries.
     */
    data: SalaryCreateManyInput | SalaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Salary createManyAndReturn
   */
  export type SalaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * The data used to create many Salaries.
     */
    data: SalaryCreateManyInput | SalaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Salary update
   */
  export type SalaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * The data needed to update a Salary.
     */
    data: XOR<SalaryUpdateInput, SalaryUncheckedUpdateInput>
    /**
     * Choose, which Salary to update.
     */
    where: SalaryWhereUniqueInput
  }

  /**
   * Salary updateMany
   */
  export type SalaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Salaries.
     */
    data: XOR<SalaryUpdateManyMutationInput, SalaryUncheckedUpdateManyInput>
    /**
     * Filter which Salaries to update
     */
    where?: SalaryWhereInput
    /**
     * Limit how many Salaries to update.
     */
    limit?: number
  }

  /**
   * Salary updateManyAndReturn
   */
  export type SalaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * The data used to update Salaries.
     */
    data: XOR<SalaryUpdateManyMutationInput, SalaryUncheckedUpdateManyInput>
    /**
     * Filter which Salaries to update
     */
    where?: SalaryWhereInput
    /**
     * Limit how many Salaries to update.
     */
    limit?: number
  }

  /**
   * Salary upsert
   */
  export type SalaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * The filter to search for the Salary to update in case it exists.
     */
    where: SalaryWhereUniqueInput
    /**
     * In case the Salary found by the `where` argument doesn't exist, create a new Salary with this data.
     */
    create: XOR<SalaryCreateInput, SalaryUncheckedCreateInput>
    /**
     * In case the Salary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalaryUpdateInput, SalaryUncheckedUpdateInput>
  }

  /**
   * Salary delete
   */
  export type SalaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * Filter which Salary to delete.
     */
    where: SalaryWhereUniqueInput
  }

  /**
   * Salary deleteMany
   */
  export type SalaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Salaries to delete
     */
    where?: SalaryWhereInput
    /**
     * Limit how many Salaries to delete.
     */
    limit?: number
  }

  /**
   * Salary without action
   */
  export type SalaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    employeeId: string | null
    date: Date | null
    checkIn: Date | null
    checkOut: Date | null
    status: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    employeeId: string | null
    date: Date | null
    checkIn: Date | null
    checkOut: Date | null
    status: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    orgId: number
    employeeId: number
    date: number
    checkIn: number
    checkOut: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttendanceMinAggregateInputType = {
    id?: true
    orgId?: true
    employeeId?: true
    date?: true
    checkIn?: true
    checkOut?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    orgId?: true
    employeeId?: true
    date?: true
    checkIn?: true
    checkOut?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    orgId?: true
    employeeId?: true
    date?: true
    checkIn?: true
    checkOut?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: string
    orgId: string
    employeeId: string
    date: Date
    checkIn: Date | null
    checkOut: Date | null
    status: string
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    employeeId?: boolean
    date?: boolean
    checkIn?: boolean
    checkOut?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    employeeId?: boolean
    date?: boolean
    checkIn?: boolean
    checkOut?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    employeeId?: boolean
    date?: boolean
    checkIn?: boolean
    checkOut?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    orgId?: boolean
    employeeId?: boolean
    date?: boolean
    checkIn?: boolean
    checkOut?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "employeeId" | "date" | "checkIn" | "checkOut" | "status" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["attendance"]>

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      employeeId: string
      date: Date
      checkIn: Date | null
      checkOut: Date | null
      status: string
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances and returns the data updated in the database.
     * @param {AttendanceUpdateManyAndReturnArgs} args - Arguments to update many Attendances.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'String'>
    readonly orgId: FieldRef<"Attendance", 'String'>
    readonly employeeId: FieldRef<"Attendance", 'String'>
    readonly date: FieldRef<"Attendance", 'DateTime'>
    readonly checkIn: FieldRef<"Attendance", 'DateTime'>
    readonly checkOut: FieldRef<"Attendance", 'DateTime'>
    readonly status: FieldRef<"Attendance", 'String'>
    readonly notes: FieldRef<"Attendance", 'String'>
    readonly createdAt: FieldRef<"Attendance", 'DateTime'>
    readonly updatedAt: FieldRef<"Attendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance updateManyAndReturn
   */
  export type AttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
  }


  /**
   * Model Budget
   */

  export type AggregateBudget = {
    _count: BudgetCountAggregateOutputType | null
    _avg: BudgetAvgAggregateOutputType | null
    _sum: BudgetSumAggregateOutputType | null
    _min: BudgetMinAggregateOutputType | null
    _max: BudgetMaxAggregateOutputType | null
  }

  export type BudgetAvgAggregateOutputType = {
    budgetedCents: number | null
    actualCents: number | null
  }

  export type BudgetSumAggregateOutputType = {
    budgetedCents: number | null
    actualCents: number | null
  }

  export type BudgetMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    period: string | null
    budgetedCents: number | null
    actualCents: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BudgetMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    period: string | null
    budgetedCents: number | null
    actualCents: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BudgetCountAggregateOutputType = {
    id: number
    orgId: number
    period: number
    budgetedCents: number
    actualCents: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BudgetAvgAggregateInputType = {
    budgetedCents?: true
    actualCents?: true
  }

  export type BudgetSumAggregateInputType = {
    budgetedCents?: true
    actualCents?: true
  }

  export type BudgetMinAggregateInputType = {
    id?: true
    orgId?: true
    period?: true
    budgetedCents?: true
    actualCents?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BudgetMaxAggregateInputType = {
    id?: true
    orgId?: true
    period?: true
    budgetedCents?: true
    actualCents?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BudgetCountAggregateInputType = {
    id?: true
    orgId?: true
    period?: true
    budgetedCents?: true
    actualCents?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BudgetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Budget to aggregate.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Budgets
    **/
    _count?: true | BudgetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BudgetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BudgetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BudgetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BudgetMaxAggregateInputType
  }

  export type GetBudgetAggregateType<T extends BudgetAggregateArgs> = {
        [P in keyof T & keyof AggregateBudget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBudget[P]>
      : GetScalarType<T[P], AggregateBudget[P]>
  }




  export type BudgetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetWhereInput
    orderBy?: BudgetOrderByWithAggregationInput | BudgetOrderByWithAggregationInput[]
    by: BudgetScalarFieldEnum[] | BudgetScalarFieldEnum
    having?: BudgetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BudgetCountAggregateInputType | true
    _avg?: BudgetAvgAggregateInputType
    _sum?: BudgetSumAggregateInputType
    _min?: BudgetMinAggregateInputType
    _max?: BudgetMaxAggregateInputType
  }

  export type BudgetGroupByOutputType = {
    id: string
    orgId: string
    period: string
    budgetedCents: number
    actualCents: number
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: BudgetCountAggregateOutputType | null
    _avg: BudgetAvgAggregateOutputType | null
    _sum: BudgetSumAggregateOutputType | null
    _min: BudgetMinAggregateOutputType | null
    _max: BudgetMaxAggregateOutputType | null
  }

  type GetBudgetGroupByPayload<T extends BudgetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BudgetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BudgetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BudgetGroupByOutputType[P]>
            : GetScalarType<T[P], BudgetGroupByOutputType[P]>
        }
      >
    >


  export type BudgetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    period?: boolean
    budgetedCents?: boolean
    actualCents?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["budget"]>

  export type BudgetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    period?: boolean
    budgetedCents?: boolean
    actualCents?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["budget"]>

  export type BudgetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    period?: boolean
    budgetedCents?: boolean
    actualCents?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["budget"]>

  export type BudgetSelectScalar = {
    id?: boolean
    orgId?: boolean
    period?: boolean
    budgetedCents?: boolean
    actualCents?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BudgetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "period" | "budgetedCents" | "actualCents" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["budget"]>

  export type $BudgetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Budget"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      period: string
      budgetedCents: number
      actualCents: number
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["budget"]>
    composites: {}
  }

  type BudgetGetPayload<S extends boolean | null | undefined | BudgetDefaultArgs> = $Result.GetResult<Prisma.$BudgetPayload, S>

  type BudgetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BudgetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BudgetCountAggregateInputType | true
    }

  export interface BudgetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Budget'], meta: { name: 'Budget' } }
    /**
     * Find zero or one Budget that matches the filter.
     * @param {BudgetFindUniqueArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BudgetFindUniqueArgs>(args: SelectSubset<T, BudgetFindUniqueArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Budget that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BudgetFindUniqueOrThrowArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BudgetFindUniqueOrThrowArgs>(args: SelectSubset<T, BudgetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Budget that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindFirstArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BudgetFindFirstArgs>(args?: SelectSubset<T, BudgetFindFirstArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Budget that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindFirstOrThrowArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BudgetFindFirstOrThrowArgs>(args?: SelectSubset<T, BudgetFindFirstOrThrowArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Budgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Budgets
     * const budgets = await prisma.budget.findMany()
     * 
     * // Get first 10 Budgets
     * const budgets = await prisma.budget.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const budgetWithIdOnly = await prisma.budget.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BudgetFindManyArgs>(args?: SelectSubset<T, BudgetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Budget.
     * @param {BudgetCreateArgs} args - Arguments to create a Budget.
     * @example
     * // Create one Budget
     * const Budget = await prisma.budget.create({
     *   data: {
     *     // ... data to create a Budget
     *   }
     * })
     * 
     */
    create<T extends BudgetCreateArgs>(args: SelectSubset<T, BudgetCreateArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Budgets.
     * @param {BudgetCreateManyArgs} args - Arguments to create many Budgets.
     * @example
     * // Create many Budgets
     * const budget = await prisma.budget.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BudgetCreateManyArgs>(args?: SelectSubset<T, BudgetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Budgets and returns the data saved in the database.
     * @param {BudgetCreateManyAndReturnArgs} args - Arguments to create many Budgets.
     * @example
     * // Create many Budgets
     * const budget = await prisma.budget.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Budgets and only return the `id`
     * const budgetWithIdOnly = await prisma.budget.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BudgetCreateManyAndReturnArgs>(args?: SelectSubset<T, BudgetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Budget.
     * @param {BudgetDeleteArgs} args - Arguments to delete one Budget.
     * @example
     * // Delete one Budget
     * const Budget = await prisma.budget.delete({
     *   where: {
     *     // ... filter to delete one Budget
     *   }
     * })
     * 
     */
    delete<T extends BudgetDeleteArgs>(args: SelectSubset<T, BudgetDeleteArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Budget.
     * @param {BudgetUpdateArgs} args - Arguments to update one Budget.
     * @example
     * // Update one Budget
     * const budget = await prisma.budget.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BudgetUpdateArgs>(args: SelectSubset<T, BudgetUpdateArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Budgets.
     * @param {BudgetDeleteManyArgs} args - Arguments to filter Budgets to delete.
     * @example
     * // Delete a few Budgets
     * const { count } = await prisma.budget.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BudgetDeleteManyArgs>(args?: SelectSubset<T, BudgetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Budgets
     * const budget = await prisma.budget.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BudgetUpdateManyArgs>(args: SelectSubset<T, BudgetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Budgets and returns the data updated in the database.
     * @param {BudgetUpdateManyAndReturnArgs} args - Arguments to update many Budgets.
     * @example
     * // Update many Budgets
     * const budget = await prisma.budget.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Budgets and only return the `id`
     * const budgetWithIdOnly = await prisma.budget.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BudgetUpdateManyAndReturnArgs>(args: SelectSubset<T, BudgetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Budget.
     * @param {BudgetUpsertArgs} args - Arguments to update or create a Budget.
     * @example
     * // Update or create a Budget
     * const budget = await prisma.budget.upsert({
     *   create: {
     *     // ... data to create a Budget
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Budget we want to update
     *   }
     * })
     */
    upsert<T extends BudgetUpsertArgs>(args: SelectSubset<T, BudgetUpsertArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetCountArgs} args - Arguments to filter Budgets to count.
     * @example
     * // Count the number of Budgets
     * const count = await prisma.budget.count({
     *   where: {
     *     // ... the filter for the Budgets we want to count
     *   }
     * })
    **/
    count<T extends BudgetCountArgs>(
      args?: Subset<T, BudgetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BudgetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Budget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BudgetAggregateArgs>(args: Subset<T, BudgetAggregateArgs>): Prisma.PrismaPromise<GetBudgetAggregateType<T>>

    /**
     * Group by Budget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BudgetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BudgetGroupByArgs['orderBy'] }
        : { orderBy?: BudgetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BudgetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBudgetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Budget model
   */
  readonly fields: BudgetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Budget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BudgetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Budget model
   */
  interface BudgetFieldRefs {
    readonly id: FieldRef<"Budget", 'String'>
    readonly orgId: FieldRef<"Budget", 'String'>
    readonly period: FieldRef<"Budget", 'String'>
    readonly budgetedCents: FieldRef<"Budget", 'Int'>
    readonly actualCents: FieldRef<"Budget", 'Int'>
    readonly notes: FieldRef<"Budget", 'String'>
    readonly createdAt: FieldRef<"Budget", 'DateTime'>
    readonly updatedAt: FieldRef<"Budget", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Budget findUnique
   */
  export type BudgetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget findUniqueOrThrow
   */
  export type BudgetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget findFirst
   */
  export type BudgetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Budgets.
     */
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget findFirstOrThrow
   */
  export type BudgetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Budgets.
     */
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget findMany
   */
  export type BudgetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Filter, which Budgets to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget create
   */
  export type BudgetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * The data needed to create a Budget.
     */
    data: XOR<BudgetCreateInput, BudgetUncheckedCreateInput>
  }

  /**
   * Budget createMany
   */
  export type BudgetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Budgets.
     */
    data: BudgetCreateManyInput | BudgetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Budget createManyAndReturn
   */
  export type BudgetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * The data used to create many Budgets.
     */
    data: BudgetCreateManyInput | BudgetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Budget update
   */
  export type BudgetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * The data needed to update a Budget.
     */
    data: XOR<BudgetUpdateInput, BudgetUncheckedUpdateInput>
    /**
     * Choose, which Budget to update.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget updateMany
   */
  export type BudgetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Budgets.
     */
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyInput>
    /**
     * Filter which Budgets to update
     */
    where?: BudgetWhereInput
    /**
     * Limit how many Budgets to update.
     */
    limit?: number
  }

  /**
   * Budget updateManyAndReturn
   */
  export type BudgetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * The data used to update Budgets.
     */
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyInput>
    /**
     * Filter which Budgets to update
     */
    where?: BudgetWhereInput
    /**
     * Limit how many Budgets to update.
     */
    limit?: number
  }

  /**
   * Budget upsert
   */
  export type BudgetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * The filter to search for the Budget to update in case it exists.
     */
    where: BudgetWhereUniqueInput
    /**
     * In case the Budget found by the `where` argument doesn't exist, create a new Budget with this data.
     */
    create: XOR<BudgetCreateInput, BudgetUncheckedCreateInput>
    /**
     * In case the Budget was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BudgetUpdateInput, BudgetUncheckedUpdateInput>
  }

  /**
   * Budget delete
   */
  export type BudgetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Filter which Budget to delete.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget deleteMany
   */
  export type BudgetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Budgets to delete
     */
    where?: BudgetWhereInput
    /**
     * Limit how many Budgets to delete.
     */
    limit?: number
  }

  /**
   * Budget without action
   */
  export type BudgetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
  }


  /**
   * Model EmployeeCategory
   */

  export type AggregateEmployeeCategory = {
    _count: EmployeeCategoryCountAggregateOutputType | null
    _min: EmployeeCategoryMinAggregateOutputType | null
    _max: EmployeeCategoryMaxAggregateOutputType | null
  }

  export type EmployeeCategoryMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    name: string | null
    description: string | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeCategoryMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    name: string | null
    description: string | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeCategoryCountAggregateOutputType = {
    id: number
    orgId: number
    name: number
    description: number
    color: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeCategoryMinAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    description?: true
    color?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeCategoryMaxAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    description?: true
    color?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeCategoryCountAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    description?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeCategory to aggregate.
     */
    where?: EmployeeCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeCategories to fetch.
     */
    orderBy?: EmployeeCategoryOrderByWithRelationInput | EmployeeCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmployeeCategories
    **/
    _count?: true | EmployeeCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeCategoryMaxAggregateInputType
  }

  export type GetEmployeeCategoryAggregateType<T extends EmployeeCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployeeCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployeeCategory[P]>
      : GetScalarType<T[P], AggregateEmployeeCategory[P]>
  }




  export type EmployeeCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeCategoryWhereInput
    orderBy?: EmployeeCategoryOrderByWithAggregationInput | EmployeeCategoryOrderByWithAggregationInput[]
    by: EmployeeCategoryScalarFieldEnum[] | EmployeeCategoryScalarFieldEnum
    having?: EmployeeCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCategoryCountAggregateInputType | true
    _min?: EmployeeCategoryMinAggregateInputType
    _max?: EmployeeCategoryMaxAggregateInputType
  }

  export type EmployeeCategoryGroupByOutputType = {
    id: string
    orgId: string
    name: string
    description: string | null
    color: string | null
    createdAt: Date
    updatedAt: Date
    _count: EmployeeCategoryCountAggregateOutputType | null
    _min: EmployeeCategoryMinAggregateOutputType | null
    _max: EmployeeCategoryMaxAggregateOutputType | null
  }

  type GetEmployeeCategoryGroupByPayload<T extends EmployeeCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeCategoryGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["employeeCategory"]>

  export type EmployeeCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["employeeCategory"]>

  export type EmployeeCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["employeeCategory"]>

  export type EmployeeCategorySelectScalar = {
    id?: boolean
    orgId?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "name" | "description" | "color" | "createdAt" | "updatedAt", ExtArgs["result"]["employeeCategory"]>

  export type $EmployeeCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmployeeCategory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      name: string
      description: string | null
      color: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employeeCategory"]>
    composites: {}
  }

  type EmployeeCategoryGetPayload<S extends boolean | null | undefined | EmployeeCategoryDefaultArgs> = $Result.GetResult<Prisma.$EmployeeCategoryPayload, S>

  type EmployeeCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCategoryCountAggregateInputType | true
    }

  export interface EmployeeCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmployeeCategory'], meta: { name: 'EmployeeCategory' } }
    /**
     * Find zero or one EmployeeCategory that matches the filter.
     * @param {EmployeeCategoryFindUniqueArgs} args - Arguments to find a EmployeeCategory
     * @example
     * // Get one EmployeeCategory
     * const employeeCategory = await prisma.employeeCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeCategoryFindUniqueArgs>(args: SelectSubset<T, EmployeeCategoryFindUniqueArgs<ExtArgs>>): Prisma__EmployeeCategoryClient<$Result.GetResult<Prisma.$EmployeeCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmployeeCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeCategoryFindUniqueOrThrowArgs} args - Arguments to find a EmployeeCategory
     * @example
     * // Get one EmployeeCategory
     * const employeeCategory = await prisma.employeeCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeCategoryClient<$Result.GetResult<Prisma.$EmployeeCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCategoryFindFirstArgs} args - Arguments to find a EmployeeCategory
     * @example
     * // Get one EmployeeCategory
     * const employeeCategory = await prisma.employeeCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeCategoryFindFirstArgs>(args?: SelectSubset<T, EmployeeCategoryFindFirstArgs<ExtArgs>>): Prisma__EmployeeCategoryClient<$Result.GetResult<Prisma.$EmployeeCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCategoryFindFirstOrThrowArgs} args - Arguments to find a EmployeeCategory
     * @example
     * // Get one EmployeeCategory
     * const employeeCategory = await prisma.employeeCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeCategoryClient<$Result.GetResult<Prisma.$EmployeeCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmployeeCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmployeeCategories
     * const employeeCategories = await prisma.employeeCategory.findMany()
     * 
     * // Get first 10 EmployeeCategories
     * const employeeCategories = await prisma.employeeCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeCategoryWithIdOnly = await prisma.employeeCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeCategoryFindManyArgs>(args?: SelectSubset<T, EmployeeCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmployeeCategory.
     * @param {EmployeeCategoryCreateArgs} args - Arguments to create a EmployeeCategory.
     * @example
     * // Create one EmployeeCategory
     * const EmployeeCategory = await prisma.employeeCategory.create({
     *   data: {
     *     // ... data to create a EmployeeCategory
     *   }
     * })
     * 
     */
    create<T extends EmployeeCategoryCreateArgs>(args: SelectSubset<T, EmployeeCategoryCreateArgs<ExtArgs>>): Prisma__EmployeeCategoryClient<$Result.GetResult<Prisma.$EmployeeCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmployeeCategories.
     * @param {EmployeeCategoryCreateManyArgs} args - Arguments to create many EmployeeCategories.
     * @example
     * // Create many EmployeeCategories
     * const employeeCategory = await prisma.employeeCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCategoryCreateManyArgs>(args?: SelectSubset<T, EmployeeCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmployeeCategories and returns the data saved in the database.
     * @param {EmployeeCategoryCreateManyAndReturnArgs} args - Arguments to create many EmployeeCategories.
     * @example
     * // Create many EmployeeCategories
     * const employeeCategory = await prisma.employeeCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmployeeCategories and only return the `id`
     * const employeeCategoryWithIdOnly = await prisma.employeeCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmployeeCategory.
     * @param {EmployeeCategoryDeleteArgs} args - Arguments to delete one EmployeeCategory.
     * @example
     * // Delete one EmployeeCategory
     * const EmployeeCategory = await prisma.employeeCategory.delete({
     *   where: {
     *     // ... filter to delete one EmployeeCategory
     *   }
     * })
     * 
     */
    delete<T extends EmployeeCategoryDeleteArgs>(args: SelectSubset<T, EmployeeCategoryDeleteArgs<ExtArgs>>): Prisma__EmployeeCategoryClient<$Result.GetResult<Prisma.$EmployeeCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmployeeCategory.
     * @param {EmployeeCategoryUpdateArgs} args - Arguments to update one EmployeeCategory.
     * @example
     * // Update one EmployeeCategory
     * const employeeCategory = await prisma.employeeCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeCategoryUpdateArgs>(args: SelectSubset<T, EmployeeCategoryUpdateArgs<ExtArgs>>): Prisma__EmployeeCategoryClient<$Result.GetResult<Prisma.$EmployeeCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmployeeCategories.
     * @param {EmployeeCategoryDeleteManyArgs} args - Arguments to filter EmployeeCategories to delete.
     * @example
     * // Delete a few EmployeeCategories
     * const { count } = await prisma.employeeCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeCategoryDeleteManyArgs>(args?: SelectSubset<T, EmployeeCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmployeeCategories
     * const employeeCategory = await prisma.employeeCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeCategoryUpdateManyArgs>(args: SelectSubset<T, EmployeeCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeCategories and returns the data updated in the database.
     * @param {EmployeeCategoryUpdateManyAndReturnArgs} args - Arguments to update many EmployeeCategories.
     * @example
     * // Update many EmployeeCategories
     * const employeeCategory = await prisma.employeeCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmployeeCategories and only return the `id`
     * const employeeCategoryWithIdOnly = await prisma.employeeCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeeCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmployeeCategory.
     * @param {EmployeeCategoryUpsertArgs} args - Arguments to update or create a EmployeeCategory.
     * @example
     * // Update or create a EmployeeCategory
     * const employeeCategory = await prisma.employeeCategory.upsert({
     *   create: {
     *     // ... data to create a EmployeeCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmployeeCategory we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeCategoryUpsertArgs>(args: SelectSubset<T, EmployeeCategoryUpsertArgs<ExtArgs>>): Prisma__EmployeeCategoryClient<$Result.GetResult<Prisma.$EmployeeCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmployeeCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCategoryCountArgs} args - Arguments to filter EmployeeCategories to count.
     * @example
     * // Count the number of EmployeeCategories
     * const count = await prisma.employeeCategory.count({
     *   where: {
     *     // ... the filter for the EmployeeCategories we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCategoryCountArgs>(
      args?: Subset<T, EmployeeCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmployeeCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeCategoryAggregateArgs>(args: Subset<T, EmployeeCategoryAggregateArgs>): Prisma.PrismaPromise<GetEmployeeCategoryAggregateType<T>>

    /**
     * Group by EmployeeCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeCategoryGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmployeeCategory model
   */
  readonly fields: EmployeeCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmployeeCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmployeeCategory model
   */
  interface EmployeeCategoryFieldRefs {
    readonly id: FieldRef<"EmployeeCategory", 'String'>
    readonly orgId: FieldRef<"EmployeeCategory", 'String'>
    readonly name: FieldRef<"EmployeeCategory", 'String'>
    readonly description: FieldRef<"EmployeeCategory", 'String'>
    readonly color: FieldRef<"EmployeeCategory", 'String'>
    readonly createdAt: FieldRef<"EmployeeCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"EmployeeCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmployeeCategory findUnique
   */
  export type EmployeeCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCategory
     */
    select?: EmployeeCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCategory
     */
    omit?: EmployeeCategoryOmit<ExtArgs> | null
    /**
     * Filter, which EmployeeCategory to fetch.
     */
    where: EmployeeCategoryWhereUniqueInput
  }

  /**
   * EmployeeCategory findUniqueOrThrow
   */
  export type EmployeeCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCategory
     */
    select?: EmployeeCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCategory
     */
    omit?: EmployeeCategoryOmit<ExtArgs> | null
    /**
     * Filter, which EmployeeCategory to fetch.
     */
    where: EmployeeCategoryWhereUniqueInput
  }

  /**
   * EmployeeCategory findFirst
   */
  export type EmployeeCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCategory
     */
    select?: EmployeeCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCategory
     */
    omit?: EmployeeCategoryOmit<ExtArgs> | null
    /**
     * Filter, which EmployeeCategory to fetch.
     */
    where?: EmployeeCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeCategories to fetch.
     */
    orderBy?: EmployeeCategoryOrderByWithRelationInput | EmployeeCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeCategories.
     */
    cursor?: EmployeeCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeCategories.
     */
    distinct?: EmployeeCategoryScalarFieldEnum | EmployeeCategoryScalarFieldEnum[]
  }

  /**
   * EmployeeCategory findFirstOrThrow
   */
  export type EmployeeCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCategory
     */
    select?: EmployeeCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCategory
     */
    omit?: EmployeeCategoryOmit<ExtArgs> | null
    /**
     * Filter, which EmployeeCategory to fetch.
     */
    where?: EmployeeCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeCategories to fetch.
     */
    orderBy?: EmployeeCategoryOrderByWithRelationInput | EmployeeCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeCategories.
     */
    cursor?: EmployeeCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeCategories.
     */
    distinct?: EmployeeCategoryScalarFieldEnum | EmployeeCategoryScalarFieldEnum[]
  }

  /**
   * EmployeeCategory findMany
   */
  export type EmployeeCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCategory
     */
    select?: EmployeeCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCategory
     */
    omit?: EmployeeCategoryOmit<ExtArgs> | null
    /**
     * Filter, which EmployeeCategories to fetch.
     */
    where?: EmployeeCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeCategories to fetch.
     */
    orderBy?: EmployeeCategoryOrderByWithRelationInput | EmployeeCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmployeeCategories.
     */
    cursor?: EmployeeCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeCategories.
     */
    skip?: number
    distinct?: EmployeeCategoryScalarFieldEnum | EmployeeCategoryScalarFieldEnum[]
  }

  /**
   * EmployeeCategory create
   */
  export type EmployeeCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCategory
     */
    select?: EmployeeCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCategory
     */
    omit?: EmployeeCategoryOmit<ExtArgs> | null
    /**
     * The data needed to create a EmployeeCategory.
     */
    data: XOR<EmployeeCategoryCreateInput, EmployeeCategoryUncheckedCreateInput>
  }

  /**
   * EmployeeCategory createMany
   */
  export type EmployeeCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmployeeCategories.
     */
    data: EmployeeCategoryCreateManyInput | EmployeeCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmployeeCategory createManyAndReturn
   */
  export type EmployeeCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCategory
     */
    select?: EmployeeCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCategory
     */
    omit?: EmployeeCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many EmployeeCategories.
     */
    data: EmployeeCategoryCreateManyInput | EmployeeCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmployeeCategory update
   */
  export type EmployeeCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCategory
     */
    select?: EmployeeCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCategory
     */
    omit?: EmployeeCategoryOmit<ExtArgs> | null
    /**
     * The data needed to update a EmployeeCategory.
     */
    data: XOR<EmployeeCategoryUpdateInput, EmployeeCategoryUncheckedUpdateInput>
    /**
     * Choose, which EmployeeCategory to update.
     */
    where: EmployeeCategoryWhereUniqueInput
  }

  /**
   * EmployeeCategory updateMany
   */
  export type EmployeeCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmployeeCategories.
     */
    data: XOR<EmployeeCategoryUpdateManyMutationInput, EmployeeCategoryUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeCategories to update
     */
    where?: EmployeeCategoryWhereInput
    /**
     * Limit how many EmployeeCategories to update.
     */
    limit?: number
  }

  /**
   * EmployeeCategory updateManyAndReturn
   */
  export type EmployeeCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCategory
     */
    select?: EmployeeCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCategory
     */
    omit?: EmployeeCategoryOmit<ExtArgs> | null
    /**
     * The data used to update EmployeeCategories.
     */
    data: XOR<EmployeeCategoryUpdateManyMutationInput, EmployeeCategoryUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeCategories to update
     */
    where?: EmployeeCategoryWhereInput
    /**
     * Limit how many EmployeeCategories to update.
     */
    limit?: number
  }

  /**
   * EmployeeCategory upsert
   */
  export type EmployeeCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCategory
     */
    select?: EmployeeCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCategory
     */
    omit?: EmployeeCategoryOmit<ExtArgs> | null
    /**
     * The filter to search for the EmployeeCategory to update in case it exists.
     */
    where: EmployeeCategoryWhereUniqueInput
    /**
     * In case the EmployeeCategory found by the `where` argument doesn't exist, create a new EmployeeCategory with this data.
     */
    create: XOR<EmployeeCategoryCreateInput, EmployeeCategoryUncheckedCreateInput>
    /**
     * In case the EmployeeCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeCategoryUpdateInput, EmployeeCategoryUncheckedUpdateInput>
  }

  /**
   * EmployeeCategory delete
   */
  export type EmployeeCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCategory
     */
    select?: EmployeeCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCategory
     */
    omit?: EmployeeCategoryOmit<ExtArgs> | null
    /**
     * Filter which EmployeeCategory to delete.
     */
    where: EmployeeCategoryWhereUniqueInput
  }

  /**
   * EmployeeCategory deleteMany
   */
  export type EmployeeCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeCategories to delete
     */
    where?: EmployeeCategoryWhereInput
    /**
     * Limit how many EmployeeCategories to delete.
     */
    limit?: number
  }

  /**
   * EmployeeCategory without action
   */
  export type EmployeeCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCategory
     */
    select?: EmployeeCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCategory
     */
    omit?: EmployeeCategoryOmit<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    employeeId: string | null
    userId: string | null
    action: string | null
    description: string | null
    createdAt: Date | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    employeeId: string | null
    userId: string | null
    action: string | null
    description: string | null
    createdAt: Date | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    orgId: number
    employeeId: number
    userId: number
    action: number
    description: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type ActivityLogMinAggregateInputType = {
    id?: true
    orgId?: true
    employeeId?: true
    userId?: true
    action?: true
    description?: true
    createdAt?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    orgId?: true
    employeeId?: true
    userId?: true
    action?: true
    description?: true
    createdAt?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    orgId?: true
    employeeId?: true
    userId?: true
    action?: true
    description?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: string
    orgId: string
    employeeId: string | null
    userId: string | null
    action: string
    description: string | null
    metadata: JsonValue
    createdAt: Date
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    employeeId?: boolean
    userId?: boolean
    action?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    employeeId?: boolean
    userId?: boolean
    action?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    employeeId?: boolean
    userId?: boolean
    action?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectScalar = {
    id?: boolean
    orgId?: boolean
    employeeId?: boolean
    userId?: boolean
    action?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type ActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "employeeId" | "userId" | "action" | "description" | "metadata" | "createdAt", ExtArgs["result"]["activityLog"]>

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      employeeId: string | null
      userId: string | null
      action: string
      description: string | null
      metadata: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityLogs and returns the data saved in the database.
     * @param {ActivityLogCreateManyAndReturnArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs and returns the data updated in the database.
     * @param {ActivityLogUpdateManyAndReturnArgs} args - Arguments to update many ActivityLogs.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivityLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActivityLog model
   */
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'String'>
    readonly orgId: FieldRef<"ActivityLog", 'String'>
    readonly employeeId: FieldRef<"ActivityLog", 'String'>
    readonly userId: FieldRef<"ActivityLog", 'String'>
    readonly action: FieldRef<"ActivityLog", 'String'>
    readonly description: FieldRef<"ActivityLog", 'String'>
    readonly metadata: FieldRef<"ActivityLog", 'Json'>
    readonly createdAt: FieldRef<"ActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityLog createManyAndReturn
   */
  export type ActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog updateManyAndReturn
   */
  export type ActivityLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
  }


  /**
   * Model Payroll
   */

  export type AggregatePayroll = {
    _count: PayrollCountAggregateOutputType | null
    _avg: PayrollAvgAggregateOutputType | null
    _sum: PayrollSumAggregateOutputType | null
    _min: PayrollMinAggregateOutputType | null
    _max: PayrollMaxAggregateOutputType | null
  }

  export type PayrollAvgAggregateOutputType = {
    totalAmountCents: number | null
  }

  export type PayrollSumAggregateOutputType = {
    totalAmountCents: number | null
  }

  export type PayrollMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    createdBy: string | null
    periodStart: Date | null
    periodEnd: Date | null
    totalAmountCents: number | null
    status: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayrollMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    createdBy: string | null
    periodStart: Date | null
    periodEnd: Date | null
    totalAmountCents: number | null
    status: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayrollCountAggregateOutputType = {
    id: number
    orgId: number
    createdBy: number
    periodStart: number
    periodEnd: number
    totalAmountCents: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PayrollAvgAggregateInputType = {
    totalAmountCents?: true
  }

  export type PayrollSumAggregateInputType = {
    totalAmountCents?: true
  }

  export type PayrollMinAggregateInputType = {
    id?: true
    orgId?: true
    createdBy?: true
    periodStart?: true
    periodEnd?: true
    totalAmountCents?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayrollMaxAggregateInputType = {
    id?: true
    orgId?: true
    createdBy?: true
    periodStart?: true
    periodEnd?: true
    totalAmountCents?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayrollCountAggregateInputType = {
    id?: true
    orgId?: true
    createdBy?: true
    periodStart?: true
    periodEnd?: true
    totalAmountCents?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PayrollAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payroll to aggregate.
     */
    where?: PayrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payrolls to fetch.
     */
    orderBy?: PayrollOrderByWithRelationInput | PayrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payrolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payrolls
    **/
    _count?: true | PayrollCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayrollAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayrollSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayrollMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayrollMaxAggregateInputType
  }

  export type GetPayrollAggregateType<T extends PayrollAggregateArgs> = {
        [P in keyof T & keyof AggregatePayroll]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayroll[P]>
      : GetScalarType<T[P], AggregatePayroll[P]>
  }




  export type PayrollGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayrollWhereInput
    orderBy?: PayrollOrderByWithAggregationInput | PayrollOrderByWithAggregationInput[]
    by: PayrollScalarFieldEnum[] | PayrollScalarFieldEnum
    having?: PayrollScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayrollCountAggregateInputType | true
    _avg?: PayrollAvgAggregateInputType
    _sum?: PayrollSumAggregateInputType
    _min?: PayrollMinAggregateInputType
    _max?: PayrollMaxAggregateInputType
  }

  export type PayrollGroupByOutputType = {
    id: string
    orgId: string
    createdBy: string
    periodStart: Date
    periodEnd: Date
    totalAmountCents: number
    status: string
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: PayrollCountAggregateOutputType | null
    _avg: PayrollAvgAggregateOutputType | null
    _sum: PayrollSumAggregateOutputType | null
    _min: PayrollMinAggregateOutputType | null
    _max: PayrollMaxAggregateOutputType | null
  }

  type GetPayrollGroupByPayload<T extends PayrollGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayrollGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayrollGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayrollGroupByOutputType[P]>
            : GetScalarType<T[P], PayrollGroupByOutputType[P]>
        }
      >
    >


  export type PayrollSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    createdBy?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    totalAmountCents?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    history?: boolean | Payroll$historyArgs<ExtArgs>
    _count?: boolean | PayrollCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payroll"]>

  export type PayrollSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    createdBy?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    totalAmountCents?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["payroll"]>

  export type PayrollSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    createdBy?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    totalAmountCents?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["payroll"]>

  export type PayrollSelectScalar = {
    id?: boolean
    orgId?: boolean
    createdBy?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    totalAmountCents?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PayrollOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "createdBy" | "periodStart" | "periodEnd" | "totalAmountCents" | "status" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["payroll"]>
  export type PayrollInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | Payroll$historyArgs<ExtArgs>
    _count?: boolean | PayrollCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PayrollIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PayrollIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PayrollPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payroll"
    objects: {
      history: Prisma.$PayrollHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      createdBy: string
      periodStart: Date
      periodEnd: Date
      totalAmountCents: number
      status: string
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payroll"]>
    composites: {}
  }

  type PayrollGetPayload<S extends boolean | null | undefined | PayrollDefaultArgs> = $Result.GetResult<Prisma.$PayrollPayload, S>

  type PayrollCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayrollFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayrollCountAggregateInputType | true
    }

  export interface PayrollDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payroll'], meta: { name: 'Payroll' } }
    /**
     * Find zero or one Payroll that matches the filter.
     * @param {PayrollFindUniqueArgs} args - Arguments to find a Payroll
     * @example
     * // Get one Payroll
     * const payroll = await prisma.payroll.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayrollFindUniqueArgs>(args: SelectSubset<T, PayrollFindUniqueArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payroll that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayrollFindUniqueOrThrowArgs} args - Arguments to find a Payroll
     * @example
     * // Get one Payroll
     * const payroll = await prisma.payroll.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayrollFindUniqueOrThrowArgs>(args: SelectSubset<T, PayrollFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payroll that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollFindFirstArgs} args - Arguments to find a Payroll
     * @example
     * // Get one Payroll
     * const payroll = await prisma.payroll.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayrollFindFirstArgs>(args?: SelectSubset<T, PayrollFindFirstArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payroll that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollFindFirstOrThrowArgs} args - Arguments to find a Payroll
     * @example
     * // Get one Payroll
     * const payroll = await prisma.payroll.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayrollFindFirstOrThrowArgs>(args?: SelectSubset<T, PayrollFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payrolls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payrolls
     * const payrolls = await prisma.payroll.findMany()
     * 
     * // Get first 10 Payrolls
     * const payrolls = await prisma.payroll.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payrollWithIdOnly = await prisma.payroll.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayrollFindManyArgs>(args?: SelectSubset<T, PayrollFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payroll.
     * @param {PayrollCreateArgs} args - Arguments to create a Payroll.
     * @example
     * // Create one Payroll
     * const Payroll = await prisma.payroll.create({
     *   data: {
     *     // ... data to create a Payroll
     *   }
     * })
     * 
     */
    create<T extends PayrollCreateArgs>(args: SelectSubset<T, PayrollCreateArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payrolls.
     * @param {PayrollCreateManyArgs} args - Arguments to create many Payrolls.
     * @example
     * // Create many Payrolls
     * const payroll = await prisma.payroll.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayrollCreateManyArgs>(args?: SelectSubset<T, PayrollCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payrolls and returns the data saved in the database.
     * @param {PayrollCreateManyAndReturnArgs} args - Arguments to create many Payrolls.
     * @example
     * // Create many Payrolls
     * const payroll = await prisma.payroll.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payrolls and only return the `id`
     * const payrollWithIdOnly = await prisma.payroll.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayrollCreateManyAndReturnArgs>(args?: SelectSubset<T, PayrollCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payroll.
     * @param {PayrollDeleteArgs} args - Arguments to delete one Payroll.
     * @example
     * // Delete one Payroll
     * const Payroll = await prisma.payroll.delete({
     *   where: {
     *     // ... filter to delete one Payroll
     *   }
     * })
     * 
     */
    delete<T extends PayrollDeleteArgs>(args: SelectSubset<T, PayrollDeleteArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payroll.
     * @param {PayrollUpdateArgs} args - Arguments to update one Payroll.
     * @example
     * // Update one Payroll
     * const payroll = await prisma.payroll.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayrollUpdateArgs>(args: SelectSubset<T, PayrollUpdateArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payrolls.
     * @param {PayrollDeleteManyArgs} args - Arguments to filter Payrolls to delete.
     * @example
     * // Delete a few Payrolls
     * const { count } = await prisma.payroll.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayrollDeleteManyArgs>(args?: SelectSubset<T, PayrollDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payrolls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payrolls
     * const payroll = await prisma.payroll.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayrollUpdateManyArgs>(args: SelectSubset<T, PayrollUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payrolls and returns the data updated in the database.
     * @param {PayrollUpdateManyAndReturnArgs} args - Arguments to update many Payrolls.
     * @example
     * // Update many Payrolls
     * const payroll = await prisma.payroll.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payrolls and only return the `id`
     * const payrollWithIdOnly = await prisma.payroll.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PayrollUpdateManyAndReturnArgs>(args: SelectSubset<T, PayrollUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payroll.
     * @param {PayrollUpsertArgs} args - Arguments to update or create a Payroll.
     * @example
     * // Update or create a Payroll
     * const payroll = await prisma.payroll.upsert({
     *   create: {
     *     // ... data to create a Payroll
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payroll we want to update
     *   }
     * })
     */
    upsert<T extends PayrollUpsertArgs>(args: SelectSubset<T, PayrollUpsertArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payrolls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollCountArgs} args - Arguments to filter Payrolls to count.
     * @example
     * // Count the number of Payrolls
     * const count = await prisma.payroll.count({
     *   where: {
     *     // ... the filter for the Payrolls we want to count
     *   }
     * })
    **/
    count<T extends PayrollCountArgs>(
      args?: Subset<T, PayrollCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayrollCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payroll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PayrollAggregateArgs>(args: Subset<T, PayrollAggregateArgs>): Prisma.PrismaPromise<GetPayrollAggregateType<T>>

    /**
     * Group by Payroll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PayrollGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayrollGroupByArgs['orderBy'] }
        : { orderBy?: PayrollGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PayrollGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayrollGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payroll model
   */
  readonly fields: PayrollFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payroll.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayrollClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    history<T extends Payroll$historyArgs<ExtArgs> = {}>(args?: Subset<T, Payroll$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payroll model
   */
  interface PayrollFieldRefs {
    readonly id: FieldRef<"Payroll", 'String'>
    readonly orgId: FieldRef<"Payroll", 'String'>
    readonly createdBy: FieldRef<"Payroll", 'String'>
    readonly periodStart: FieldRef<"Payroll", 'DateTime'>
    readonly periodEnd: FieldRef<"Payroll", 'DateTime'>
    readonly totalAmountCents: FieldRef<"Payroll", 'Int'>
    readonly status: FieldRef<"Payroll", 'String'>
    readonly notes: FieldRef<"Payroll", 'String'>
    readonly createdAt: FieldRef<"Payroll", 'DateTime'>
    readonly updatedAt: FieldRef<"Payroll", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payroll findUnique
   */
  export type PayrollFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter, which Payroll to fetch.
     */
    where: PayrollWhereUniqueInput
  }

  /**
   * Payroll findUniqueOrThrow
   */
  export type PayrollFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter, which Payroll to fetch.
     */
    where: PayrollWhereUniqueInput
  }

  /**
   * Payroll findFirst
   */
  export type PayrollFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter, which Payroll to fetch.
     */
    where?: PayrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payrolls to fetch.
     */
    orderBy?: PayrollOrderByWithRelationInput | PayrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payrolls.
     */
    cursor?: PayrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payrolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payrolls.
     */
    distinct?: PayrollScalarFieldEnum | PayrollScalarFieldEnum[]
  }

  /**
   * Payroll findFirstOrThrow
   */
  export type PayrollFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter, which Payroll to fetch.
     */
    where?: PayrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payrolls to fetch.
     */
    orderBy?: PayrollOrderByWithRelationInput | PayrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payrolls.
     */
    cursor?: PayrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payrolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payrolls.
     */
    distinct?: PayrollScalarFieldEnum | PayrollScalarFieldEnum[]
  }

  /**
   * Payroll findMany
   */
  export type PayrollFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter, which Payrolls to fetch.
     */
    where?: PayrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payrolls to fetch.
     */
    orderBy?: PayrollOrderByWithRelationInput | PayrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payrolls.
     */
    cursor?: PayrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payrolls.
     */
    skip?: number
    distinct?: PayrollScalarFieldEnum | PayrollScalarFieldEnum[]
  }

  /**
   * Payroll create
   */
  export type PayrollCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * The data needed to create a Payroll.
     */
    data: XOR<PayrollCreateInput, PayrollUncheckedCreateInput>
  }

  /**
   * Payroll createMany
   */
  export type PayrollCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payrolls.
     */
    data: PayrollCreateManyInput | PayrollCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payroll createManyAndReturn
   */
  export type PayrollCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * The data used to create many Payrolls.
     */
    data: PayrollCreateManyInput | PayrollCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payroll update
   */
  export type PayrollUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * The data needed to update a Payroll.
     */
    data: XOR<PayrollUpdateInput, PayrollUncheckedUpdateInput>
    /**
     * Choose, which Payroll to update.
     */
    where: PayrollWhereUniqueInput
  }

  /**
   * Payroll updateMany
   */
  export type PayrollUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payrolls.
     */
    data: XOR<PayrollUpdateManyMutationInput, PayrollUncheckedUpdateManyInput>
    /**
     * Filter which Payrolls to update
     */
    where?: PayrollWhereInput
    /**
     * Limit how many Payrolls to update.
     */
    limit?: number
  }

  /**
   * Payroll updateManyAndReturn
   */
  export type PayrollUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * The data used to update Payrolls.
     */
    data: XOR<PayrollUpdateManyMutationInput, PayrollUncheckedUpdateManyInput>
    /**
     * Filter which Payrolls to update
     */
    where?: PayrollWhereInput
    /**
     * Limit how many Payrolls to update.
     */
    limit?: number
  }

  /**
   * Payroll upsert
   */
  export type PayrollUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * The filter to search for the Payroll to update in case it exists.
     */
    where: PayrollWhereUniqueInput
    /**
     * In case the Payroll found by the `where` argument doesn't exist, create a new Payroll with this data.
     */
    create: XOR<PayrollCreateInput, PayrollUncheckedCreateInput>
    /**
     * In case the Payroll was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayrollUpdateInput, PayrollUncheckedUpdateInput>
  }

  /**
   * Payroll delete
   */
  export type PayrollDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    /**
     * Filter which Payroll to delete.
     */
    where: PayrollWhereUniqueInput
  }

  /**
   * Payroll deleteMany
   */
  export type PayrollDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payrolls to delete
     */
    where?: PayrollWhereInput
    /**
     * Limit how many Payrolls to delete.
     */
    limit?: number
  }

  /**
   * Payroll.history
   */
  export type Payroll$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollHistory
     */
    select?: PayrollHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollHistory
     */
    omit?: PayrollHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollHistoryInclude<ExtArgs> | null
    where?: PayrollHistoryWhereInput
    orderBy?: PayrollHistoryOrderByWithRelationInput | PayrollHistoryOrderByWithRelationInput[]
    cursor?: PayrollHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayrollHistoryScalarFieldEnum | PayrollHistoryScalarFieldEnum[]
  }

  /**
   * Payroll without action
   */
  export type PayrollDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
  }


  /**
   * Model PayrollHistory
   */

  export type AggregatePayrollHistory = {
    _count: PayrollHistoryCountAggregateOutputType | null
    _avg: PayrollHistoryAvgAggregateOutputType | null
    _sum: PayrollHistorySumAggregateOutputType | null
    _min: PayrollHistoryMinAggregateOutputType | null
    _max: PayrollHistoryMaxAggregateOutputType | null
  }

  export type PayrollHistoryAvgAggregateOutputType = {
    grossCents: number | null
    netCents: number | null
    deductionsCents: number | null
  }

  export type PayrollHistorySumAggregateOutputType = {
    grossCents: number | null
    netCents: number | null
    deductionsCents: number | null
  }

  export type PayrollHistoryMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    payrollId: string | null
    employeeId: string | null
    grossCents: number | null
    netCents: number | null
    deductionsCents: number | null
    paidAt: Date | null
    notes: string | null
    createdAt: Date | null
  }

  export type PayrollHistoryMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    payrollId: string | null
    employeeId: string | null
    grossCents: number | null
    netCents: number | null
    deductionsCents: number | null
    paidAt: Date | null
    notes: string | null
    createdAt: Date | null
  }

  export type PayrollHistoryCountAggregateOutputType = {
    id: number
    orgId: number
    payrollId: number
    employeeId: number
    grossCents: number
    netCents: number
    deductionsCents: number
    paidAt: number
    notes: number
    createdAt: number
    _all: number
  }


  export type PayrollHistoryAvgAggregateInputType = {
    grossCents?: true
    netCents?: true
    deductionsCents?: true
  }

  export type PayrollHistorySumAggregateInputType = {
    grossCents?: true
    netCents?: true
    deductionsCents?: true
  }

  export type PayrollHistoryMinAggregateInputType = {
    id?: true
    orgId?: true
    payrollId?: true
    employeeId?: true
    grossCents?: true
    netCents?: true
    deductionsCents?: true
    paidAt?: true
    notes?: true
    createdAt?: true
  }

  export type PayrollHistoryMaxAggregateInputType = {
    id?: true
    orgId?: true
    payrollId?: true
    employeeId?: true
    grossCents?: true
    netCents?: true
    deductionsCents?: true
    paidAt?: true
    notes?: true
    createdAt?: true
  }

  export type PayrollHistoryCountAggregateInputType = {
    id?: true
    orgId?: true
    payrollId?: true
    employeeId?: true
    grossCents?: true
    netCents?: true
    deductionsCents?: true
    paidAt?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type PayrollHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayrollHistory to aggregate.
     */
    where?: PayrollHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollHistories to fetch.
     */
    orderBy?: PayrollHistoryOrderByWithRelationInput | PayrollHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayrollHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PayrollHistories
    **/
    _count?: true | PayrollHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayrollHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayrollHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayrollHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayrollHistoryMaxAggregateInputType
  }

  export type GetPayrollHistoryAggregateType<T extends PayrollHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePayrollHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayrollHistory[P]>
      : GetScalarType<T[P], AggregatePayrollHistory[P]>
  }




  export type PayrollHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayrollHistoryWhereInput
    orderBy?: PayrollHistoryOrderByWithAggregationInput | PayrollHistoryOrderByWithAggregationInput[]
    by: PayrollHistoryScalarFieldEnum[] | PayrollHistoryScalarFieldEnum
    having?: PayrollHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayrollHistoryCountAggregateInputType | true
    _avg?: PayrollHistoryAvgAggregateInputType
    _sum?: PayrollHistorySumAggregateInputType
    _min?: PayrollHistoryMinAggregateInputType
    _max?: PayrollHistoryMaxAggregateInputType
  }

  export type PayrollHistoryGroupByOutputType = {
    id: string
    orgId: string
    payrollId: string | null
    employeeId: string
    grossCents: number
    netCents: number
    deductionsCents: number
    paidAt: Date
    notes: string | null
    createdAt: Date
    _count: PayrollHistoryCountAggregateOutputType | null
    _avg: PayrollHistoryAvgAggregateOutputType | null
    _sum: PayrollHistorySumAggregateOutputType | null
    _min: PayrollHistoryMinAggregateOutputType | null
    _max: PayrollHistoryMaxAggregateOutputType | null
  }

  type GetPayrollHistoryGroupByPayload<T extends PayrollHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayrollHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayrollHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayrollHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], PayrollHistoryGroupByOutputType[P]>
        }
      >
    >


  export type PayrollHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    payrollId?: boolean
    employeeId?: boolean
    grossCents?: boolean
    netCents?: boolean
    deductionsCents?: boolean
    paidAt?: boolean
    notes?: boolean
    createdAt?: boolean
    payroll?: boolean | PayrollHistory$payrollArgs<ExtArgs>
  }, ExtArgs["result"]["payrollHistory"]>

  export type PayrollHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    payrollId?: boolean
    employeeId?: boolean
    grossCents?: boolean
    netCents?: boolean
    deductionsCents?: boolean
    paidAt?: boolean
    notes?: boolean
    createdAt?: boolean
    payroll?: boolean | PayrollHistory$payrollArgs<ExtArgs>
  }, ExtArgs["result"]["payrollHistory"]>

  export type PayrollHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    payrollId?: boolean
    employeeId?: boolean
    grossCents?: boolean
    netCents?: boolean
    deductionsCents?: boolean
    paidAt?: boolean
    notes?: boolean
    createdAt?: boolean
    payroll?: boolean | PayrollHistory$payrollArgs<ExtArgs>
  }, ExtArgs["result"]["payrollHistory"]>

  export type PayrollHistorySelectScalar = {
    id?: boolean
    orgId?: boolean
    payrollId?: boolean
    employeeId?: boolean
    grossCents?: boolean
    netCents?: boolean
    deductionsCents?: boolean
    paidAt?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type PayrollHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "payrollId" | "employeeId" | "grossCents" | "netCents" | "deductionsCents" | "paidAt" | "notes" | "createdAt", ExtArgs["result"]["payrollHistory"]>
  export type PayrollHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payroll?: boolean | PayrollHistory$payrollArgs<ExtArgs>
  }
  export type PayrollHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payroll?: boolean | PayrollHistory$payrollArgs<ExtArgs>
  }
  export type PayrollHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payroll?: boolean | PayrollHistory$payrollArgs<ExtArgs>
  }

  export type $PayrollHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PayrollHistory"
    objects: {
      payroll: Prisma.$PayrollPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      payrollId: string | null
      employeeId: string
      grossCents: number
      netCents: number
      deductionsCents: number
      paidAt: Date
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["payrollHistory"]>
    composites: {}
  }

  type PayrollHistoryGetPayload<S extends boolean | null | undefined | PayrollHistoryDefaultArgs> = $Result.GetResult<Prisma.$PayrollHistoryPayload, S>

  type PayrollHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayrollHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayrollHistoryCountAggregateInputType | true
    }

  export interface PayrollHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PayrollHistory'], meta: { name: 'PayrollHistory' } }
    /**
     * Find zero or one PayrollHistory that matches the filter.
     * @param {PayrollHistoryFindUniqueArgs} args - Arguments to find a PayrollHistory
     * @example
     * // Get one PayrollHistory
     * const payrollHistory = await prisma.payrollHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayrollHistoryFindUniqueArgs>(args: SelectSubset<T, PayrollHistoryFindUniqueArgs<ExtArgs>>): Prisma__PayrollHistoryClient<$Result.GetResult<Prisma.$PayrollHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PayrollHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayrollHistoryFindUniqueOrThrowArgs} args - Arguments to find a PayrollHistory
     * @example
     * // Get one PayrollHistory
     * const payrollHistory = await prisma.payrollHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayrollHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PayrollHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayrollHistoryClient<$Result.GetResult<Prisma.$PayrollHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayrollHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollHistoryFindFirstArgs} args - Arguments to find a PayrollHistory
     * @example
     * // Get one PayrollHistory
     * const payrollHistory = await prisma.payrollHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayrollHistoryFindFirstArgs>(args?: SelectSubset<T, PayrollHistoryFindFirstArgs<ExtArgs>>): Prisma__PayrollHistoryClient<$Result.GetResult<Prisma.$PayrollHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayrollHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollHistoryFindFirstOrThrowArgs} args - Arguments to find a PayrollHistory
     * @example
     * // Get one PayrollHistory
     * const payrollHistory = await prisma.payrollHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayrollHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PayrollHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayrollHistoryClient<$Result.GetResult<Prisma.$PayrollHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PayrollHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayrollHistories
     * const payrollHistories = await prisma.payrollHistory.findMany()
     * 
     * // Get first 10 PayrollHistories
     * const payrollHistories = await prisma.payrollHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payrollHistoryWithIdOnly = await prisma.payrollHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayrollHistoryFindManyArgs>(args?: SelectSubset<T, PayrollHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PayrollHistory.
     * @param {PayrollHistoryCreateArgs} args - Arguments to create a PayrollHistory.
     * @example
     * // Create one PayrollHistory
     * const PayrollHistory = await prisma.payrollHistory.create({
     *   data: {
     *     // ... data to create a PayrollHistory
     *   }
     * })
     * 
     */
    create<T extends PayrollHistoryCreateArgs>(args: SelectSubset<T, PayrollHistoryCreateArgs<ExtArgs>>): Prisma__PayrollHistoryClient<$Result.GetResult<Prisma.$PayrollHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PayrollHistories.
     * @param {PayrollHistoryCreateManyArgs} args - Arguments to create many PayrollHistories.
     * @example
     * // Create many PayrollHistories
     * const payrollHistory = await prisma.payrollHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayrollHistoryCreateManyArgs>(args?: SelectSubset<T, PayrollHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PayrollHistories and returns the data saved in the database.
     * @param {PayrollHistoryCreateManyAndReturnArgs} args - Arguments to create many PayrollHistories.
     * @example
     * // Create many PayrollHistories
     * const payrollHistory = await prisma.payrollHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PayrollHistories and only return the `id`
     * const payrollHistoryWithIdOnly = await prisma.payrollHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayrollHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PayrollHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PayrollHistory.
     * @param {PayrollHistoryDeleteArgs} args - Arguments to delete one PayrollHistory.
     * @example
     * // Delete one PayrollHistory
     * const PayrollHistory = await prisma.payrollHistory.delete({
     *   where: {
     *     // ... filter to delete one PayrollHistory
     *   }
     * })
     * 
     */
    delete<T extends PayrollHistoryDeleteArgs>(args: SelectSubset<T, PayrollHistoryDeleteArgs<ExtArgs>>): Prisma__PayrollHistoryClient<$Result.GetResult<Prisma.$PayrollHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PayrollHistory.
     * @param {PayrollHistoryUpdateArgs} args - Arguments to update one PayrollHistory.
     * @example
     * // Update one PayrollHistory
     * const payrollHistory = await prisma.payrollHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayrollHistoryUpdateArgs>(args: SelectSubset<T, PayrollHistoryUpdateArgs<ExtArgs>>): Prisma__PayrollHistoryClient<$Result.GetResult<Prisma.$PayrollHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PayrollHistories.
     * @param {PayrollHistoryDeleteManyArgs} args - Arguments to filter PayrollHistories to delete.
     * @example
     * // Delete a few PayrollHistories
     * const { count } = await prisma.payrollHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayrollHistoryDeleteManyArgs>(args?: SelectSubset<T, PayrollHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayrollHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayrollHistories
     * const payrollHistory = await prisma.payrollHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayrollHistoryUpdateManyArgs>(args: SelectSubset<T, PayrollHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayrollHistories and returns the data updated in the database.
     * @param {PayrollHistoryUpdateManyAndReturnArgs} args - Arguments to update many PayrollHistories.
     * @example
     * // Update many PayrollHistories
     * const payrollHistory = await prisma.payrollHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PayrollHistories and only return the `id`
     * const payrollHistoryWithIdOnly = await prisma.payrollHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PayrollHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, PayrollHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PayrollHistory.
     * @param {PayrollHistoryUpsertArgs} args - Arguments to update or create a PayrollHistory.
     * @example
     * // Update or create a PayrollHistory
     * const payrollHistory = await prisma.payrollHistory.upsert({
     *   create: {
     *     // ... data to create a PayrollHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayrollHistory we want to update
     *   }
     * })
     */
    upsert<T extends PayrollHistoryUpsertArgs>(args: SelectSubset<T, PayrollHistoryUpsertArgs<ExtArgs>>): Prisma__PayrollHistoryClient<$Result.GetResult<Prisma.$PayrollHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PayrollHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollHistoryCountArgs} args - Arguments to filter PayrollHistories to count.
     * @example
     * // Count the number of PayrollHistories
     * const count = await prisma.payrollHistory.count({
     *   where: {
     *     // ... the filter for the PayrollHistories we want to count
     *   }
     * })
    **/
    count<T extends PayrollHistoryCountArgs>(
      args?: Subset<T, PayrollHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayrollHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PayrollHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PayrollHistoryAggregateArgs>(args: Subset<T, PayrollHistoryAggregateArgs>): Prisma.PrismaPromise<GetPayrollHistoryAggregateType<T>>

    /**
     * Group by PayrollHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PayrollHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayrollHistoryGroupByArgs['orderBy'] }
        : { orderBy?: PayrollHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PayrollHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayrollHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PayrollHistory model
   */
  readonly fields: PayrollHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PayrollHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayrollHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payroll<T extends PayrollHistory$payrollArgs<ExtArgs> = {}>(args?: Subset<T, PayrollHistory$payrollArgs<ExtArgs>>): Prisma__PayrollClient<$Result.GetResult<Prisma.$PayrollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PayrollHistory model
   */
  interface PayrollHistoryFieldRefs {
    readonly id: FieldRef<"PayrollHistory", 'String'>
    readonly orgId: FieldRef<"PayrollHistory", 'String'>
    readonly payrollId: FieldRef<"PayrollHistory", 'String'>
    readonly employeeId: FieldRef<"PayrollHistory", 'String'>
    readonly grossCents: FieldRef<"PayrollHistory", 'Int'>
    readonly netCents: FieldRef<"PayrollHistory", 'Int'>
    readonly deductionsCents: FieldRef<"PayrollHistory", 'Int'>
    readonly paidAt: FieldRef<"PayrollHistory", 'DateTime'>
    readonly notes: FieldRef<"PayrollHistory", 'String'>
    readonly createdAt: FieldRef<"PayrollHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PayrollHistory findUnique
   */
  export type PayrollHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollHistory
     */
    select?: PayrollHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollHistory
     */
    omit?: PayrollHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PayrollHistory to fetch.
     */
    where: PayrollHistoryWhereUniqueInput
  }

  /**
   * PayrollHistory findUniqueOrThrow
   */
  export type PayrollHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollHistory
     */
    select?: PayrollHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollHistory
     */
    omit?: PayrollHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PayrollHistory to fetch.
     */
    where: PayrollHistoryWhereUniqueInput
  }

  /**
   * PayrollHistory findFirst
   */
  export type PayrollHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollHistory
     */
    select?: PayrollHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollHistory
     */
    omit?: PayrollHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PayrollHistory to fetch.
     */
    where?: PayrollHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollHistories to fetch.
     */
    orderBy?: PayrollHistoryOrderByWithRelationInput | PayrollHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayrollHistories.
     */
    cursor?: PayrollHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayrollHistories.
     */
    distinct?: PayrollHistoryScalarFieldEnum | PayrollHistoryScalarFieldEnum[]
  }

  /**
   * PayrollHistory findFirstOrThrow
   */
  export type PayrollHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollHistory
     */
    select?: PayrollHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollHistory
     */
    omit?: PayrollHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PayrollHistory to fetch.
     */
    where?: PayrollHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollHistories to fetch.
     */
    orderBy?: PayrollHistoryOrderByWithRelationInput | PayrollHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayrollHistories.
     */
    cursor?: PayrollHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayrollHistories.
     */
    distinct?: PayrollHistoryScalarFieldEnum | PayrollHistoryScalarFieldEnum[]
  }

  /**
   * PayrollHistory findMany
   */
  export type PayrollHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollHistory
     */
    select?: PayrollHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollHistory
     */
    omit?: PayrollHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PayrollHistories to fetch.
     */
    where?: PayrollHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollHistories to fetch.
     */
    orderBy?: PayrollHistoryOrderByWithRelationInput | PayrollHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PayrollHistories.
     */
    cursor?: PayrollHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollHistories.
     */
    skip?: number
    distinct?: PayrollHistoryScalarFieldEnum | PayrollHistoryScalarFieldEnum[]
  }

  /**
   * PayrollHistory create
   */
  export type PayrollHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollHistory
     */
    select?: PayrollHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollHistory
     */
    omit?: PayrollHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PayrollHistory.
     */
    data: XOR<PayrollHistoryCreateInput, PayrollHistoryUncheckedCreateInput>
  }

  /**
   * PayrollHistory createMany
   */
  export type PayrollHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PayrollHistories.
     */
    data: PayrollHistoryCreateManyInput | PayrollHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PayrollHistory createManyAndReturn
   */
  export type PayrollHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollHistory
     */
    select?: PayrollHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollHistory
     */
    omit?: PayrollHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many PayrollHistories.
     */
    data: PayrollHistoryCreateManyInput | PayrollHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayrollHistory update
   */
  export type PayrollHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollHistory
     */
    select?: PayrollHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollHistory
     */
    omit?: PayrollHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PayrollHistory.
     */
    data: XOR<PayrollHistoryUpdateInput, PayrollHistoryUncheckedUpdateInput>
    /**
     * Choose, which PayrollHistory to update.
     */
    where: PayrollHistoryWhereUniqueInput
  }

  /**
   * PayrollHistory updateMany
   */
  export type PayrollHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PayrollHistories.
     */
    data: XOR<PayrollHistoryUpdateManyMutationInput, PayrollHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PayrollHistories to update
     */
    where?: PayrollHistoryWhereInput
    /**
     * Limit how many PayrollHistories to update.
     */
    limit?: number
  }

  /**
   * PayrollHistory updateManyAndReturn
   */
  export type PayrollHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollHistory
     */
    select?: PayrollHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollHistory
     */
    omit?: PayrollHistoryOmit<ExtArgs> | null
    /**
     * The data used to update PayrollHistories.
     */
    data: XOR<PayrollHistoryUpdateManyMutationInput, PayrollHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PayrollHistories to update
     */
    where?: PayrollHistoryWhereInput
    /**
     * Limit how many PayrollHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayrollHistory upsert
   */
  export type PayrollHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollHistory
     */
    select?: PayrollHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollHistory
     */
    omit?: PayrollHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PayrollHistory to update in case it exists.
     */
    where: PayrollHistoryWhereUniqueInput
    /**
     * In case the PayrollHistory found by the `where` argument doesn't exist, create a new PayrollHistory with this data.
     */
    create: XOR<PayrollHistoryCreateInput, PayrollHistoryUncheckedCreateInput>
    /**
     * In case the PayrollHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayrollHistoryUpdateInput, PayrollHistoryUncheckedUpdateInput>
  }

  /**
   * PayrollHistory delete
   */
  export type PayrollHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollHistory
     */
    select?: PayrollHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollHistory
     */
    omit?: PayrollHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollHistoryInclude<ExtArgs> | null
    /**
     * Filter which PayrollHistory to delete.
     */
    where: PayrollHistoryWhereUniqueInput
  }

  /**
   * PayrollHistory deleteMany
   */
  export type PayrollHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayrollHistories to delete
     */
    where?: PayrollHistoryWhereInput
    /**
     * Limit how many PayrollHistories to delete.
     */
    limit?: number
  }

  /**
   * PayrollHistory.payroll
   */
  export type PayrollHistory$payrollArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payroll
     */
    select?: PayrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payroll
     */
    omit?: PayrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollInclude<ExtArgs> | null
    where?: PayrollWhereInput
  }

  /**
   * PayrollHistory without action
   */
  export type PayrollHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollHistory
     */
    select?: PayrollHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollHistory
     */
    omit?: PayrollHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollHistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    userId: 'userId',
    contactId: 'contactId',
    jobTitle: 'jobTitle',
    department: 'department',
    salary: 'salary',
    status: 'status',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const AvailabilityScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    orgId: 'orgId',
    dayOfWeek: 'dayOfWeek',
    startTime: 'startTime',
    endTime: 'endTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AvailabilityScalarFieldEnum = (typeof AvailabilityScalarFieldEnum)[keyof typeof AvailabilityScalarFieldEnum]


  export const TimeOffScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    orgId: 'orgId',
    startDate: 'startDate',
    endDate: 'endDate',
    type: 'type',
    status: 'status',
    reason: 'reason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TimeOffScalarFieldEnum = (typeof TimeOffScalarFieldEnum)[keyof typeof TimeOffScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    orgId: 'orgId',
    startTime: 'startTime',
    endTime: 'endTime',
    position: 'position',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const WorkedEmployeeScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    orgId: 'orgId',
    date: 'date',
    hoursWorked: 'hoursWorked',
    earnings: 'earnings',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkedEmployeeScalarFieldEnum = (typeof WorkedEmployeeScalarFieldEnum)[keyof typeof WorkedEmployeeScalarFieldEnum]


  export const ShiftScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    employeeId: 'employeeId',
    startTime: 'startTime',
    endTime: 'endTime',
    position: 'position',
    shiftName: 'shiftName',
    color: 'color',
    notes: 'notes',
    isDraft: 'isDraft',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShiftScalarFieldEnum = (typeof ShiftScalarFieldEnum)[keyof typeof ShiftScalarFieldEnum]


  export const SalaryScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    employeeId: 'employeeId',
    amount: 'amount',
    type: 'type',
    effectiveDate: 'effectiveDate',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SalaryScalarFieldEnum = (typeof SalaryScalarFieldEnum)[keyof typeof SalaryScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    employeeId: 'employeeId',
    date: 'date',
    checkIn: 'checkIn',
    checkOut: 'checkOut',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const BudgetScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    period: 'period',
    budgetedCents: 'budgetedCents',
    actualCents: 'actualCents',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BudgetScalarFieldEnum = (typeof BudgetScalarFieldEnum)[keyof typeof BudgetScalarFieldEnum]


  export const EmployeeCategoryScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    name: 'name',
    description: 'description',
    color: 'color',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeCategoryScalarFieldEnum = (typeof EmployeeCategoryScalarFieldEnum)[keyof typeof EmployeeCategoryScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    employeeId: 'employeeId',
    userId: 'userId',
    action: 'action',
    description: 'description',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const PayrollScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    createdBy: 'createdBy',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    totalAmountCents: 'totalAmountCents',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PayrollScalarFieldEnum = (typeof PayrollScalarFieldEnum)[keyof typeof PayrollScalarFieldEnum]


  export const PayrollHistoryScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    payrollId: 'payrollId',
    employeeId: 'employeeId',
    grossCents: 'grossCents',
    netCents: 'netCents',
    deductionsCents: 'deductionsCents',
    paidAt: 'paidAt',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type PayrollHistoryScalarFieldEnum = (typeof PayrollHistoryScalarFieldEnum)[keyof typeof PayrollHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: UuidFilter<"Employee"> | string
    orgId?: UuidFilter<"Employee"> | string
    userId?: StringFilter<"Employee"> | string
    contactId?: UuidNullableFilter<"Employee"> | string | null
    jobTitle?: StringNullableFilter<"Employee"> | string | null
    department?: StringNullableFilter<"Employee"> | string | null
    salary?: IntNullableFilter<"Employee"> | number | null
    status?: StringFilter<"Employee"> | string
    metadata?: JsonFilter<"Employee">
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    availabilities?: AvailabilityListRelationFilter
    timeOffRequests?: TimeOffListRelationFilter
    schedules?: ScheduleListRelationFilter
    workedRecords?: WorkedEmployeeListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    contactId?: SortOrderInput | SortOrder
    jobTitle?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    salary?: SortOrderInput | SortOrder
    status?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    availabilities?: AvailabilityOrderByRelationAggregateInput
    timeOffRequests?: TimeOffOrderByRelationAggregateInput
    schedules?: ScheduleOrderByRelationAggregateInput
    workedRecords?: WorkedEmployeeOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    orgId?: UuidFilter<"Employee"> | string
    userId?: StringFilter<"Employee"> | string
    contactId?: UuidNullableFilter<"Employee"> | string | null
    jobTitle?: StringNullableFilter<"Employee"> | string | null
    department?: StringNullableFilter<"Employee"> | string | null
    salary?: IntNullableFilter<"Employee"> | number | null
    status?: StringFilter<"Employee"> | string
    metadata?: JsonFilter<"Employee">
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    availabilities?: AvailabilityListRelationFilter
    timeOffRequests?: TimeOffListRelationFilter
    schedules?: ScheduleListRelationFilter
    workedRecords?: WorkedEmployeeListRelationFilter
  }, "id">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    contactId?: SortOrderInput | SortOrder
    jobTitle?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    salary?: SortOrderInput | SortOrder
    status?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Employee"> | string
    orgId?: UuidWithAggregatesFilter<"Employee"> | string
    userId?: StringWithAggregatesFilter<"Employee"> | string
    contactId?: UuidNullableWithAggregatesFilter<"Employee"> | string | null
    jobTitle?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    department?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    salary?: IntNullableWithAggregatesFilter<"Employee"> | number | null
    status?: StringWithAggregatesFilter<"Employee"> | string
    metadata?: JsonWithAggregatesFilter<"Employee">
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
  }

  export type AvailabilityWhereInput = {
    AND?: AvailabilityWhereInput | AvailabilityWhereInput[]
    OR?: AvailabilityWhereInput[]
    NOT?: AvailabilityWhereInput | AvailabilityWhereInput[]
    id?: UuidFilter<"Availability"> | string
    employeeId?: UuidFilter<"Availability"> | string
    orgId?: UuidFilter<"Availability"> | string
    dayOfWeek?: IntFilter<"Availability"> | number
    startTime?: StringFilter<"Availability"> | string
    endTime?: StringFilter<"Availability"> | string
    createdAt?: DateTimeFilter<"Availability"> | Date | string
    updatedAt?: DateTimeFilter<"Availability"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type AvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    orgId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
  }

  export type AvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvailabilityWhereInput | AvailabilityWhereInput[]
    OR?: AvailabilityWhereInput[]
    NOT?: AvailabilityWhereInput | AvailabilityWhereInput[]
    employeeId?: UuidFilter<"Availability"> | string
    orgId?: UuidFilter<"Availability"> | string
    dayOfWeek?: IntFilter<"Availability"> | number
    startTime?: StringFilter<"Availability"> | string
    endTime?: StringFilter<"Availability"> | string
    createdAt?: DateTimeFilter<"Availability"> | Date | string
    updatedAt?: DateTimeFilter<"Availability"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id">

  export type AvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    orgId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AvailabilityCountOrderByAggregateInput
    _avg?: AvailabilityAvgOrderByAggregateInput
    _max?: AvailabilityMaxOrderByAggregateInput
    _min?: AvailabilityMinOrderByAggregateInput
    _sum?: AvailabilitySumOrderByAggregateInput
  }

  export type AvailabilityScalarWhereWithAggregatesInput = {
    AND?: AvailabilityScalarWhereWithAggregatesInput | AvailabilityScalarWhereWithAggregatesInput[]
    OR?: AvailabilityScalarWhereWithAggregatesInput[]
    NOT?: AvailabilityScalarWhereWithAggregatesInput | AvailabilityScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Availability"> | string
    employeeId?: UuidWithAggregatesFilter<"Availability"> | string
    orgId?: UuidWithAggregatesFilter<"Availability"> | string
    dayOfWeek?: IntWithAggregatesFilter<"Availability"> | number
    startTime?: StringWithAggregatesFilter<"Availability"> | string
    endTime?: StringWithAggregatesFilter<"Availability"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Availability"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Availability"> | Date | string
  }

  export type TimeOffWhereInput = {
    AND?: TimeOffWhereInput | TimeOffWhereInput[]
    OR?: TimeOffWhereInput[]
    NOT?: TimeOffWhereInput | TimeOffWhereInput[]
    id?: UuidFilter<"TimeOff"> | string
    employeeId?: UuidFilter<"TimeOff"> | string
    orgId?: UuidFilter<"TimeOff"> | string
    startDate?: DateTimeFilter<"TimeOff"> | Date | string
    endDate?: DateTimeFilter<"TimeOff"> | Date | string
    type?: StringFilter<"TimeOff"> | string
    status?: StringFilter<"TimeOff"> | string
    reason?: StringNullableFilter<"TimeOff"> | string | null
    createdAt?: DateTimeFilter<"TimeOff"> | Date | string
    updatedAt?: DateTimeFilter<"TimeOff"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type TimeOffOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    orgId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
  }

  export type TimeOffWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TimeOffWhereInput | TimeOffWhereInput[]
    OR?: TimeOffWhereInput[]
    NOT?: TimeOffWhereInput | TimeOffWhereInput[]
    employeeId?: UuidFilter<"TimeOff"> | string
    orgId?: UuidFilter<"TimeOff"> | string
    startDate?: DateTimeFilter<"TimeOff"> | Date | string
    endDate?: DateTimeFilter<"TimeOff"> | Date | string
    type?: StringFilter<"TimeOff"> | string
    status?: StringFilter<"TimeOff"> | string
    reason?: StringNullableFilter<"TimeOff"> | string | null
    createdAt?: DateTimeFilter<"TimeOff"> | Date | string
    updatedAt?: DateTimeFilter<"TimeOff"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id">

  export type TimeOffOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    orgId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TimeOffCountOrderByAggregateInput
    _max?: TimeOffMaxOrderByAggregateInput
    _min?: TimeOffMinOrderByAggregateInput
  }

  export type TimeOffScalarWhereWithAggregatesInput = {
    AND?: TimeOffScalarWhereWithAggregatesInput | TimeOffScalarWhereWithAggregatesInput[]
    OR?: TimeOffScalarWhereWithAggregatesInput[]
    NOT?: TimeOffScalarWhereWithAggregatesInput | TimeOffScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TimeOff"> | string
    employeeId?: UuidWithAggregatesFilter<"TimeOff"> | string
    orgId?: UuidWithAggregatesFilter<"TimeOff"> | string
    startDate?: DateTimeWithAggregatesFilter<"TimeOff"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"TimeOff"> | Date | string
    type?: StringWithAggregatesFilter<"TimeOff"> | string
    status?: StringWithAggregatesFilter<"TimeOff"> | string
    reason?: StringNullableWithAggregatesFilter<"TimeOff"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TimeOff"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TimeOff"> | Date | string
  }

  export type ScheduleWhereInput = {
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    id?: UuidFilter<"Schedule"> | string
    employeeId?: UuidFilter<"Schedule"> | string
    orgId?: UuidFilter<"Schedule"> | string
    startTime?: DateTimeFilter<"Schedule"> | Date | string
    endTime?: DateTimeFilter<"Schedule"> | Date | string
    position?: StringNullableFilter<"Schedule"> | string | null
    notes?: StringNullableFilter<"Schedule"> | string | null
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type ScheduleOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    orgId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    position?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
  }

  export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    employeeId?: UuidFilter<"Schedule"> | string
    orgId?: UuidFilter<"Schedule"> | string
    startTime?: DateTimeFilter<"Schedule"> | Date | string
    endTime?: DateTimeFilter<"Schedule"> | Date | string
    position?: StringNullableFilter<"Schedule"> | string | null
    notes?: StringNullableFilter<"Schedule"> | string | null
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id">

  export type ScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    orgId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    position?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScheduleCountOrderByAggregateInput
    _max?: ScheduleMaxOrderByAggregateInput
    _min?: ScheduleMinOrderByAggregateInput
  }

  export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    OR?: ScheduleScalarWhereWithAggregatesInput[]
    NOT?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Schedule"> | string
    employeeId?: UuidWithAggregatesFilter<"Schedule"> | string
    orgId?: UuidWithAggregatesFilter<"Schedule"> | string
    startTime?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    position?: StringNullableWithAggregatesFilter<"Schedule"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Schedule"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
  }

  export type WorkedEmployeeWhereInput = {
    AND?: WorkedEmployeeWhereInput | WorkedEmployeeWhereInput[]
    OR?: WorkedEmployeeWhereInput[]
    NOT?: WorkedEmployeeWhereInput | WorkedEmployeeWhereInput[]
    id?: UuidFilter<"WorkedEmployee"> | string
    employeeId?: UuidFilter<"WorkedEmployee"> | string
    orgId?: UuidFilter<"WorkedEmployee"> | string
    date?: DateTimeFilter<"WorkedEmployee"> | Date | string
    hoursWorked?: FloatFilter<"WorkedEmployee"> | number
    earnings?: IntFilter<"WorkedEmployee"> | number
    createdAt?: DateTimeFilter<"WorkedEmployee"> | Date | string
    updatedAt?: DateTimeFilter<"WorkedEmployee"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type WorkedEmployeeOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    orgId?: SortOrder
    date?: SortOrder
    hoursWorked?: SortOrder
    earnings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
  }

  export type WorkedEmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkedEmployeeWhereInput | WorkedEmployeeWhereInput[]
    OR?: WorkedEmployeeWhereInput[]
    NOT?: WorkedEmployeeWhereInput | WorkedEmployeeWhereInput[]
    employeeId?: UuidFilter<"WorkedEmployee"> | string
    orgId?: UuidFilter<"WorkedEmployee"> | string
    date?: DateTimeFilter<"WorkedEmployee"> | Date | string
    hoursWorked?: FloatFilter<"WorkedEmployee"> | number
    earnings?: IntFilter<"WorkedEmployee"> | number
    createdAt?: DateTimeFilter<"WorkedEmployee"> | Date | string
    updatedAt?: DateTimeFilter<"WorkedEmployee"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id">

  export type WorkedEmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    orgId?: SortOrder
    date?: SortOrder
    hoursWorked?: SortOrder
    earnings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkedEmployeeCountOrderByAggregateInput
    _avg?: WorkedEmployeeAvgOrderByAggregateInput
    _max?: WorkedEmployeeMaxOrderByAggregateInput
    _min?: WorkedEmployeeMinOrderByAggregateInput
    _sum?: WorkedEmployeeSumOrderByAggregateInput
  }

  export type WorkedEmployeeScalarWhereWithAggregatesInput = {
    AND?: WorkedEmployeeScalarWhereWithAggregatesInput | WorkedEmployeeScalarWhereWithAggregatesInput[]
    OR?: WorkedEmployeeScalarWhereWithAggregatesInput[]
    NOT?: WorkedEmployeeScalarWhereWithAggregatesInput | WorkedEmployeeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"WorkedEmployee"> | string
    employeeId?: UuidWithAggregatesFilter<"WorkedEmployee"> | string
    orgId?: UuidWithAggregatesFilter<"WorkedEmployee"> | string
    date?: DateTimeWithAggregatesFilter<"WorkedEmployee"> | Date | string
    hoursWorked?: FloatWithAggregatesFilter<"WorkedEmployee"> | number
    earnings?: IntWithAggregatesFilter<"WorkedEmployee"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WorkedEmployee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkedEmployee"> | Date | string
  }

  export type ShiftWhereInput = {
    AND?: ShiftWhereInput | ShiftWhereInput[]
    OR?: ShiftWhereInput[]
    NOT?: ShiftWhereInput | ShiftWhereInput[]
    id?: UuidFilter<"Shift"> | string
    orgId?: UuidFilter<"Shift"> | string
    employeeId?: UuidNullableFilter<"Shift"> | string | null
    startTime?: DateTimeFilter<"Shift"> | Date | string
    endTime?: DateTimeFilter<"Shift"> | Date | string
    position?: StringNullableFilter<"Shift"> | string | null
    shiftName?: StringNullableFilter<"Shift"> | string | null
    color?: StringNullableFilter<"Shift"> | string | null
    notes?: StringNullableFilter<"Shift"> | string | null
    isDraft?: BoolFilter<"Shift"> | boolean
    createdAt?: DateTimeFilter<"Shift"> | Date | string
    updatedAt?: DateTimeFilter<"Shift"> | Date | string
  }

  export type ShiftOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    employeeId?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    position?: SortOrderInput | SortOrder
    shiftName?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    isDraft?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShiftWhereInput | ShiftWhereInput[]
    OR?: ShiftWhereInput[]
    NOT?: ShiftWhereInput | ShiftWhereInput[]
    orgId?: UuidFilter<"Shift"> | string
    employeeId?: UuidNullableFilter<"Shift"> | string | null
    startTime?: DateTimeFilter<"Shift"> | Date | string
    endTime?: DateTimeFilter<"Shift"> | Date | string
    position?: StringNullableFilter<"Shift"> | string | null
    shiftName?: StringNullableFilter<"Shift"> | string | null
    color?: StringNullableFilter<"Shift"> | string | null
    notes?: StringNullableFilter<"Shift"> | string | null
    isDraft?: BoolFilter<"Shift"> | boolean
    createdAt?: DateTimeFilter<"Shift"> | Date | string
    updatedAt?: DateTimeFilter<"Shift"> | Date | string
  }, "id">

  export type ShiftOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    employeeId?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    position?: SortOrderInput | SortOrder
    shiftName?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    isDraft?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShiftCountOrderByAggregateInput
    _max?: ShiftMaxOrderByAggregateInput
    _min?: ShiftMinOrderByAggregateInput
  }

  export type ShiftScalarWhereWithAggregatesInput = {
    AND?: ShiftScalarWhereWithAggregatesInput | ShiftScalarWhereWithAggregatesInput[]
    OR?: ShiftScalarWhereWithAggregatesInput[]
    NOT?: ShiftScalarWhereWithAggregatesInput | ShiftScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Shift"> | string
    orgId?: UuidWithAggregatesFilter<"Shift"> | string
    employeeId?: UuidNullableWithAggregatesFilter<"Shift"> | string | null
    startTime?: DateTimeWithAggregatesFilter<"Shift"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Shift"> | Date | string
    position?: StringNullableWithAggregatesFilter<"Shift"> | string | null
    shiftName?: StringNullableWithAggregatesFilter<"Shift"> | string | null
    color?: StringNullableWithAggregatesFilter<"Shift"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Shift"> | string | null
    isDraft?: BoolWithAggregatesFilter<"Shift"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Shift"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Shift"> | Date | string
  }

  export type SalaryWhereInput = {
    AND?: SalaryWhereInput | SalaryWhereInput[]
    OR?: SalaryWhereInput[]
    NOT?: SalaryWhereInput | SalaryWhereInput[]
    id?: UuidFilter<"Salary"> | string
    orgId?: UuidFilter<"Salary"> | string
    employeeId?: UuidFilter<"Salary"> | string
    amount?: FloatFilter<"Salary"> | number
    type?: StringFilter<"Salary"> | string
    effectiveDate?: DateTimeFilter<"Salary"> | Date | string
    notes?: StringNullableFilter<"Salary"> | string | null
    createdAt?: DateTimeFilter<"Salary"> | Date | string
    updatedAt?: DateTimeFilter<"Salary"> | Date | string
  }

  export type SalaryOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    employeeId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    effectiveDate?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalaryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SalaryWhereInput | SalaryWhereInput[]
    OR?: SalaryWhereInput[]
    NOT?: SalaryWhereInput | SalaryWhereInput[]
    orgId?: UuidFilter<"Salary"> | string
    employeeId?: UuidFilter<"Salary"> | string
    amount?: FloatFilter<"Salary"> | number
    type?: StringFilter<"Salary"> | string
    effectiveDate?: DateTimeFilter<"Salary"> | Date | string
    notes?: StringNullableFilter<"Salary"> | string | null
    createdAt?: DateTimeFilter<"Salary"> | Date | string
    updatedAt?: DateTimeFilter<"Salary"> | Date | string
  }, "id">

  export type SalaryOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    employeeId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    effectiveDate?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SalaryCountOrderByAggregateInput
    _avg?: SalaryAvgOrderByAggregateInput
    _max?: SalaryMaxOrderByAggregateInput
    _min?: SalaryMinOrderByAggregateInput
    _sum?: SalarySumOrderByAggregateInput
  }

  export type SalaryScalarWhereWithAggregatesInput = {
    AND?: SalaryScalarWhereWithAggregatesInput | SalaryScalarWhereWithAggregatesInput[]
    OR?: SalaryScalarWhereWithAggregatesInput[]
    NOT?: SalaryScalarWhereWithAggregatesInput | SalaryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Salary"> | string
    orgId?: UuidWithAggregatesFilter<"Salary"> | string
    employeeId?: UuidWithAggregatesFilter<"Salary"> | string
    amount?: FloatWithAggregatesFilter<"Salary"> | number
    type?: StringWithAggregatesFilter<"Salary"> | string
    effectiveDate?: DateTimeWithAggregatesFilter<"Salary"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"Salary"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Salary"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Salary"> | Date | string
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: UuidFilter<"Attendance"> | string
    orgId?: UuidFilter<"Attendance"> | string
    employeeId?: UuidFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    checkIn?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    checkOut?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    status?: StringFilter<"Attendance"> | string
    notes?: StringNullableFilter<"Attendance"> | string | null
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    employeeId?: SortOrder
    date?: SortOrder
    checkIn?: SortOrderInput | SortOrder
    checkOut?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    orgId?: UuidFilter<"Attendance"> | string
    employeeId?: UuidFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    checkIn?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    checkOut?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    status?: StringFilter<"Attendance"> | string
    notes?: StringNullableFilter<"Attendance"> | string | null
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
  }, "id">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    employeeId?: SortOrder
    date?: SortOrder
    checkIn?: SortOrderInput | SortOrder
    checkOut?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Attendance"> | string
    orgId?: UuidWithAggregatesFilter<"Attendance"> | string
    employeeId?: UuidWithAggregatesFilter<"Attendance"> | string
    date?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    checkIn?: DateTimeNullableWithAggregatesFilter<"Attendance"> | Date | string | null
    checkOut?: DateTimeNullableWithAggregatesFilter<"Attendance"> | Date | string | null
    status?: StringWithAggregatesFilter<"Attendance"> | string
    notes?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
  }

  export type BudgetWhereInput = {
    AND?: BudgetWhereInput | BudgetWhereInput[]
    OR?: BudgetWhereInput[]
    NOT?: BudgetWhereInput | BudgetWhereInput[]
    id?: UuidFilter<"Budget"> | string
    orgId?: UuidFilter<"Budget"> | string
    period?: StringFilter<"Budget"> | string
    budgetedCents?: IntFilter<"Budget"> | number
    actualCents?: IntFilter<"Budget"> | number
    notes?: StringNullableFilter<"Budget"> | string | null
    createdAt?: DateTimeFilter<"Budget"> | Date | string
    updatedAt?: DateTimeFilter<"Budget"> | Date | string
  }

  export type BudgetOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    period?: SortOrder
    budgetedCents?: SortOrder
    actualCents?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BudgetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BudgetWhereInput | BudgetWhereInput[]
    OR?: BudgetWhereInput[]
    NOT?: BudgetWhereInput | BudgetWhereInput[]
    orgId?: UuidFilter<"Budget"> | string
    period?: StringFilter<"Budget"> | string
    budgetedCents?: IntFilter<"Budget"> | number
    actualCents?: IntFilter<"Budget"> | number
    notes?: StringNullableFilter<"Budget"> | string | null
    createdAt?: DateTimeFilter<"Budget"> | Date | string
    updatedAt?: DateTimeFilter<"Budget"> | Date | string
  }, "id">

  export type BudgetOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    period?: SortOrder
    budgetedCents?: SortOrder
    actualCents?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BudgetCountOrderByAggregateInput
    _avg?: BudgetAvgOrderByAggregateInput
    _max?: BudgetMaxOrderByAggregateInput
    _min?: BudgetMinOrderByAggregateInput
    _sum?: BudgetSumOrderByAggregateInput
  }

  export type BudgetScalarWhereWithAggregatesInput = {
    AND?: BudgetScalarWhereWithAggregatesInput | BudgetScalarWhereWithAggregatesInput[]
    OR?: BudgetScalarWhereWithAggregatesInput[]
    NOT?: BudgetScalarWhereWithAggregatesInput | BudgetScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Budget"> | string
    orgId?: UuidWithAggregatesFilter<"Budget"> | string
    period?: StringWithAggregatesFilter<"Budget"> | string
    budgetedCents?: IntWithAggregatesFilter<"Budget"> | number
    actualCents?: IntWithAggregatesFilter<"Budget"> | number
    notes?: StringNullableWithAggregatesFilter<"Budget"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Budget"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Budget"> | Date | string
  }

  export type EmployeeCategoryWhereInput = {
    AND?: EmployeeCategoryWhereInput | EmployeeCategoryWhereInput[]
    OR?: EmployeeCategoryWhereInput[]
    NOT?: EmployeeCategoryWhereInput | EmployeeCategoryWhereInput[]
    id?: UuidFilter<"EmployeeCategory"> | string
    orgId?: UuidFilter<"EmployeeCategory"> | string
    name?: StringFilter<"EmployeeCategory"> | string
    description?: StringNullableFilter<"EmployeeCategory"> | string | null
    color?: StringNullableFilter<"EmployeeCategory"> | string | null
    createdAt?: DateTimeFilter<"EmployeeCategory"> | Date | string
    updatedAt?: DateTimeFilter<"EmployeeCategory"> | Date | string
  }

  export type EmployeeCategoryOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmployeeCategoryWhereInput | EmployeeCategoryWhereInput[]
    OR?: EmployeeCategoryWhereInput[]
    NOT?: EmployeeCategoryWhereInput | EmployeeCategoryWhereInput[]
    orgId?: UuidFilter<"EmployeeCategory"> | string
    name?: StringFilter<"EmployeeCategory"> | string
    description?: StringNullableFilter<"EmployeeCategory"> | string | null
    color?: StringNullableFilter<"EmployeeCategory"> | string | null
    createdAt?: DateTimeFilter<"EmployeeCategory"> | Date | string
    updatedAt?: DateTimeFilter<"EmployeeCategory"> | Date | string
  }, "id">

  export type EmployeeCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeeCategoryCountOrderByAggregateInput
    _max?: EmployeeCategoryMaxOrderByAggregateInput
    _min?: EmployeeCategoryMinOrderByAggregateInput
  }

  export type EmployeeCategoryScalarWhereWithAggregatesInput = {
    AND?: EmployeeCategoryScalarWhereWithAggregatesInput | EmployeeCategoryScalarWhereWithAggregatesInput[]
    OR?: EmployeeCategoryScalarWhereWithAggregatesInput[]
    NOT?: EmployeeCategoryScalarWhereWithAggregatesInput | EmployeeCategoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"EmployeeCategory"> | string
    orgId?: UuidWithAggregatesFilter<"EmployeeCategory"> | string
    name?: StringWithAggregatesFilter<"EmployeeCategory"> | string
    description?: StringNullableWithAggregatesFilter<"EmployeeCategory"> | string | null
    color?: StringNullableWithAggregatesFilter<"EmployeeCategory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EmployeeCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmployeeCategory"> | Date | string
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: UuidFilter<"ActivityLog"> | string
    orgId?: UuidFilter<"ActivityLog"> | string
    employeeId?: UuidNullableFilter<"ActivityLog"> | string | null
    userId?: StringNullableFilter<"ActivityLog"> | string | null
    action?: StringFilter<"ActivityLog"> | string
    description?: StringNullableFilter<"ActivityLog"> | string | null
    metadata?: JsonFilter<"ActivityLog">
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    employeeId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    orgId?: UuidFilter<"ActivityLog"> | string
    employeeId?: UuidNullableFilter<"ActivityLog"> | string | null
    userId?: StringNullableFilter<"ActivityLog"> | string | null
    action?: StringFilter<"ActivityLog"> | string
    description?: StringNullableFilter<"ActivityLog"> | string | null
    metadata?: JsonFilter<"ActivityLog">
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    employeeId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ActivityLog"> | string
    orgId?: UuidWithAggregatesFilter<"ActivityLog"> | string
    employeeId?: UuidNullableWithAggregatesFilter<"ActivityLog"> | string | null
    userId?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    action?: StringWithAggregatesFilter<"ActivityLog"> | string
    description?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    metadata?: JsonWithAggregatesFilter<"ActivityLog">
    createdAt?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
  }

  export type PayrollWhereInput = {
    AND?: PayrollWhereInput | PayrollWhereInput[]
    OR?: PayrollWhereInput[]
    NOT?: PayrollWhereInput | PayrollWhereInput[]
    id?: UuidFilter<"Payroll"> | string
    orgId?: UuidFilter<"Payroll"> | string
    createdBy?: StringFilter<"Payroll"> | string
    periodStart?: DateTimeFilter<"Payroll"> | Date | string
    periodEnd?: DateTimeFilter<"Payroll"> | Date | string
    totalAmountCents?: IntFilter<"Payroll"> | number
    status?: StringFilter<"Payroll"> | string
    notes?: StringNullableFilter<"Payroll"> | string | null
    createdAt?: DateTimeFilter<"Payroll"> | Date | string
    updatedAt?: DateTimeFilter<"Payroll"> | Date | string
    history?: PayrollHistoryListRelationFilter
  }

  export type PayrollOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    totalAmountCents?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    history?: PayrollHistoryOrderByRelationAggregateInput
  }

  export type PayrollWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PayrollWhereInput | PayrollWhereInput[]
    OR?: PayrollWhereInput[]
    NOT?: PayrollWhereInput | PayrollWhereInput[]
    orgId?: UuidFilter<"Payroll"> | string
    createdBy?: StringFilter<"Payroll"> | string
    periodStart?: DateTimeFilter<"Payroll"> | Date | string
    periodEnd?: DateTimeFilter<"Payroll"> | Date | string
    totalAmountCents?: IntFilter<"Payroll"> | number
    status?: StringFilter<"Payroll"> | string
    notes?: StringNullableFilter<"Payroll"> | string | null
    createdAt?: DateTimeFilter<"Payroll"> | Date | string
    updatedAt?: DateTimeFilter<"Payroll"> | Date | string
    history?: PayrollHistoryListRelationFilter
  }, "id">

  export type PayrollOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    totalAmountCents?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PayrollCountOrderByAggregateInput
    _avg?: PayrollAvgOrderByAggregateInput
    _max?: PayrollMaxOrderByAggregateInput
    _min?: PayrollMinOrderByAggregateInput
    _sum?: PayrollSumOrderByAggregateInput
  }

  export type PayrollScalarWhereWithAggregatesInput = {
    AND?: PayrollScalarWhereWithAggregatesInput | PayrollScalarWhereWithAggregatesInput[]
    OR?: PayrollScalarWhereWithAggregatesInput[]
    NOT?: PayrollScalarWhereWithAggregatesInput | PayrollScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Payroll"> | string
    orgId?: UuidWithAggregatesFilter<"Payroll"> | string
    createdBy?: StringWithAggregatesFilter<"Payroll"> | string
    periodStart?: DateTimeWithAggregatesFilter<"Payroll"> | Date | string
    periodEnd?: DateTimeWithAggregatesFilter<"Payroll"> | Date | string
    totalAmountCents?: IntWithAggregatesFilter<"Payroll"> | number
    status?: StringWithAggregatesFilter<"Payroll"> | string
    notes?: StringNullableWithAggregatesFilter<"Payroll"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payroll"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payroll"> | Date | string
  }

  export type PayrollHistoryWhereInput = {
    AND?: PayrollHistoryWhereInput | PayrollHistoryWhereInput[]
    OR?: PayrollHistoryWhereInput[]
    NOT?: PayrollHistoryWhereInput | PayrollHistoryWhereInput[]
    id?: UuidFilter<"PayrollHistory"> | string
    orgId?: UuidFilter<"PayrollHistory"> | string
    payrollId?: UuidNullableFilter<"PayrollHistory"> | string | null
    employeeId?: UuidFilter<"PayrollHistory"> | string
    grossCents?: IntFilter<"PayrollHistory"> | number
    netCents?: IntFilter<"PayrollHistory"> | number
    deductionsCents?: IntFilter<"PayrollHistory"> | number
    paidAt?: DateTimeFilter<"PayrollHistory"> | Date | string
    notes?: StringNullableFilter<"PayrollHistory"> | string | null
    createdAt?: DateTimeFilter<"PayrollHistory"> | Date | string
    payroll?: XOR<PayrollNullableScalarRelationFilter, PayrollWhereInput> | null
  }

  export type PayrollHistoryOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    payrollId?: SortOrderInput | SortOrder
    employeeId?: SortOrder
    grossCents?: SortOrder
    netCents?: SortOrder
    deductionsCents?: SortOrder
    paidAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    payroll?: PayrollOrderByWithRelationInput
  }

  export type PayrollHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PayrollHistoryWhereInput | PayrollHistoryWhereInput[]
    OR?: PayrollHistoryWhereInput[]
    NOT?: PayrollHistoryWhereInput | PayrollHistoryWhereInput[]
    orgId?: UuidFilter<"PayrollHistory"> | string
    payrollId?: UuidNullableFilter<"PayrollHistory"> | string | null
    employeeId?: UuidFilter<"PayrollHistory"> | string
    grossCents?: IntFilter<"PayrollHistory"> | number
    netCents?: IntFilter<"PayrollHistory"> | number
    deductionsCents?: IntFilter<"PayrollHistory"> | number
    paidAt?: DateTimeFilter<"PayrollHistory"> | Date | string
    notes?: StringNullableFilter<"PayrollHistory"> | string | null
    createdAt?: DateTimeFilter<"PayrollHistory"> | Date | string
    payroll?: XOR<PayrollNullableScalarRelationFilter, PayrollWhereInput> | null
  }, "id">

  export type PayrollHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    payrollId?: SortOrderInput | SortOrder
    employeeId?: SortOrder
    grossCents?: SortOrder
    netCents?: SortOrder
    deductionsCents?: SortOrder
    paidAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PayrollHistoryCountOrderByAggregateInput
    _avg?: PayrollHistoryAvgOrderByAggregateInput
    _max?: PayrollHistoryMaxOrderByAggregateInput
    _min?: PayrollHistoryMinOrderByAggregateInput
    _sum?: PayrollHistorySumOrderByAggregateInput
  }

  export type PayrollHistoryScalarWhereWithAggregatesInput = {
    AND?: PayrollHistoryScalarWhereWithAggregatesInput | PayrollHistoryScalarWhereWithAggregatesInput[]
    OR?: PayrollHistoryScalarWhereWithAggregatesInput[]
    NOT?: PayrollHistoryScalarWhereWithAggregatesInput | PayrollHistoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"PayrollHistory"> | string
    orgId?: UuidWithAggregatesFilter<"PayrollHistory"> | string
    payrollId?: UuidNullableWithAggregatesFilter<"PayrollHistory"> | string | null
    employeeId?: UuidWithAggregatesFilter<"PayrollHistory"> | string
    grossCents?: IntWithAggregatesFilter<"PayrollHistory"> | number
    netCents?: IntWithAggregatesFilter<"PayrollHistory"> | number
    deductionsCents?: IntWithAggregatesFilter<"PayrollHistory"> | number
    paidAt?: DateTimeWithAggregatesFilter<"PayrollHistory"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"PayrollHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PayrollHistory"> | Date | string
  }

  export type EmployeeCreateInput = {
    id?: string
    orgId: string
    userId: string
    contactId?: string | null
    jobTitle?: string | null
    department?: string | null
    salary?: number | null
    status?: string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilities?: AvailabilityCreateNestedManyWithoutEmployeeInput
    timeOffRequests?: TimeOffCreateNestedManyWithoutEmployeeInput
    schedules?: ScheduleCreateNestedManyWithoutEmployeeInput
    workedRecords?: WorkedEmployeeCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: string
    orgId: string
    userId: string
    contactId?: string | null
    jobTitle?: string | null
    department?: string | null
    salary?: number | null
    status?: string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilities?: AvailabilityUncheckedCreateNestedManyWithoutEmployeeInput
    timeOffRequests?: TimeOffUncheckedCreateNestedManyWithoutEmployeeInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutEmployeeInput
    workedRecords?: WorkedEmployeeUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: AvailabilityUpdateManyWithoutEmployeeNestedInput
    timeOffRequests?: TimeOffUpdateManyWithoutEmployeeNestedInput
    schedules?: ScheduleUpdateManyWithoutEmployeeNestedInput
    workedRecords?: WorkedEmployeeUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: AvailabilityUncheckedUpdateManyWithoutEmployeeNestedInput
    timeOffRequests?: TimeOffUncheckedUpdateManyWithoutEmployeeNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutEmployeeNestedInput
    workedRecords?: WorkedEmployeeUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: string
    orgId: string
    userId: string
    contactId?: string | null
    jobTitle?: string | null
    department?: string | null
    salary?: number | null
    status?: string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityCreateInput = {
    id?: string
    orgId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutAvailabilitiesInput
  }

  export type AvailabilityUncheckedCreateInput = {
    id?: string
    employeeId: string
    orgId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutAvailabilitiesNestedInput
  }

  export type AvailabilityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityCreateManyInput = {
    id?: string
    employeeId: string
    orgId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeOffCreateInput = {
    id?: string
    orgId: string
    startDate: Date | string
    endDate: Date | string
    type: string
    status?: string
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutTimeOffRequestsInput
  }

  export type TimeOffUncheckedCreateInput = {
    id?: string
    employeeId: string
    orgId: string
    startDate: Date | string
    endDate: Date | string
    type: string
    status?: string
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimeOffUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutTimeOffRequestsNestedInput
  }

  export type TimeOffUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeOffCreateManyInput = {
    id?: string
    employeeId: string
    orgId: string
    startDate: Date | string
    endDate: Date | string
    type: string
    status?: string
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimeOffUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeOffUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleCreateInput = {
    id?: string
    orgId: string
    startTime: Date | string
    endTime: Date | string
    position?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutSchedulesInput
  }

  export type ScheduleUncheckedCreateInput = {
    id?: string
    employeeId: string
    orgId: string
    startTime: Date | string
    endTime: Date | string
    position?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type ScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleCreateManyInput = {
    id?: string
    employeeId: string
    orgId: string
    startTime: Date | string
    endTime: Date | string
    position?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkedEmployeeCreateInput = {
    id?: string
    orgId: string
    date: Date | string
    hoursWorked: number
    earnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutWorkedRecordsInput
  }

  export type WorkedEmployeeUncheckedCreateInput = {
    id?: string
    employeeId: string
    orgId: string
    date: Date | string
    hoursWorked: number
    earnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkedEmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    earnings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutWorkedRecordsNestedInput
  }

  export type WorkedEmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    earnings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkedEmployeeCreateManyInput = {
    id?: string
    employeeId: string
    orgId: string
    date: Date | string
    hoursWorked: number
    earnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkedEmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    earnings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkedEmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    earnings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftCreateInput = {
    id?: string
    orgId: string
    employeeId?: string | null
    startTime: Date | string
    endTime: Date | string
    position?: string | null
    shiftName?: string | null
    color?: string | null
    notes?: string | null
    isDraft?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShiftUncheckedCreateInput = {
    id?: string
    orgId: string
    employeeId?: string | null
    startTime: Date | string
    endTime: Date | string
    position?: string | null
    shiftName?: string | null
    color?: string | null
    notes?: string | null
    isDraft?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShiftUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    shiftName?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    shiftName?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftCreateManyInput = {
    id?: string
    orgId: string
    employeeId?: string | null
    startTime: Date | string
    endTime: Date | string
    position?: string | null
    shiftName?: string | null
    color?: string | null
    notes?: string | null
    isDraft?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShiftUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    shiftName?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    shiftName?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryCreateInput = {
    id?: string
    orgId: string
    employeeId: string
    amount: number
    type?: string
    effectiveDate?: Date | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalaryUncheckedCreateInput = {
    id?: string
    orgId: string
    employeeId: string
    amount: number
    type?: string
    effectiveDate?: Date | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalaryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryCreateManyInput = {
    id?: string
    orgId: string
    employeeId: string
    amount: number
    type?: string
    effectiveDate?: Date | string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalaryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateInput = {
    id?: string
    orgId: string
    employeeId: string
    date?: Date | string
    checkIn?: Date | string | null
    checkOut?: Date | string | null
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceUncheckedCreateInput = {
    id?: string
    orgId: string
    employeeId: string
    date?: Date | string
    checkIn?: Date | string | null
    checkOut?: Date | string | null
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyInput = {
    id?: string
    orgId: string
    employeeId: string
    date?: Date | string
    checkIn?: Date | string | null
    checkOut?: Date | string | null
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetCreateInput = {
    id?: string
    orgId: string
    period: string
    budgetedCents?: number
    actualCents?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BudgetUncheckedCreateInput = {
    id?: string
    orgId: string
    period: string
    budgetedCents?: number
    actualCents?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BudgetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    budgetedCents?: IntFieldUpdateOperationsInput | number
    actualCents?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    budgetedCents?: IntFieldUpdateOperationsInput | number
    actualCents?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetCreateManyInput = {
    id?: string
    orgId: string
    period: string
    budgetedCents?: number
    actualCents?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BudgetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    budgetedCents?: IntFieldUpdateOperationsInput | number
    actualCents?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    budgetedCents?: IntFieldUpdateOperationsInput | number
    actualCents?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCategoryCreateInput = {
    id?: string
    orgId: string
    name: string
    description?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeCategoryUncheckedCreateInput = {
    id?: string
    orgId: string
    name: string
    description?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCategoryCreateManyInput = {
    id?: string
    orgId: string
    name: string
    description?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateInput = {
    id?: string
    orgId: string
    employeeId?: string | null
    userId?: string | null
    action: string
    description?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: string
    orgId: string
    employeeId?: string | null
    userId?: string | null
    action: string
    description?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyInput = {
    id?: string
    orgId: string
    employeeId?: string | null
    userId?: string | null
    action: string
    description?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollCreateInput = {
    id?: string
    orgId: string
    createdBy: string
    periodStart: Date | string
    periodEnd: Date | string
    totalAmountCents?: number
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: PayrollHistoryCreateNestedManyWithoutPayrollInput
  }

  export type PayrollUncheckedCreateInput = {
    id?: string
    orgId: string
    createdBy: string
    periodStart: Date | string
    periodEnd: Date | string
    totalAmountCents?: number
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: PayrollHistoryUncheckedCreateNestedManyWithoutPayrollInput
  }

  export type PayrollUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmountCents?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: PayrollHistoryUpdateManyWithoutPayrollNestedInput
  }

  export type PayrollUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmountCents?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: PayrollHistoryUncheckedUpdateManyWithoutPayrollNestedInput
  }

  export type PayrollCreateManyInput = {
    id?: string
    orgId: string
    createdBy: string
    periodStart: Date | string
    periodEnd: Date | string
    totalAmountCents?: number
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmountCents?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmountCents?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollHistoryCreateInput = {
    id?: string
    orgId: string
    employeeId: string
    grossCents?: number
    netCents?: number
    deductionsCents?: number
    paidAt?: Date | string
    notes?: string | null
    createdAt?: Date | string
    payroll?: PayrollCreateNestedOneWithoutHistoryInput
  }

  export type PayrollHistoryUncheckedCreateInput = {
    id?: string
    orgId: string
    payrollId?: string | null
    employeeId: string
    grossCents?: number
    netCents?: number
    deductionsCents?: number
    paidAt?: Date | string
    notes?: string | null
    createdAt?: Date | string
  }

  export type PayrollHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    grossCents?: IntFieldUpdateOperationsInput | number
    netCents?: IntFieldUpdateOperationsInput | number
    deductionsCents?: IntFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payroll?: PayrollUpdateOneWithoutHistoryNestedInput
  }

  export type PayrollHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    payrollId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    grossCents?: IntFieldUpdateOperationsInput | number
    netCents?: IntFieldUpdateOperationsInput | number
    deductionsCents?: IntFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollHistoryCreateManyInput = {
    id?: string
    orgId: string
    payrollId?: string | null
    employeeId: string
    grossCents?: number
    netCents?: number
    deductionsCents?: number
    paidAt?: Date | string
    notes?: string | null
    createdAt?: Date | string
  }

  export type PayrollHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    grossCents?: IntFieldUpdateOperationsInput | number
    netCents?: IntFieldUpdateOperationsInput | number
    deductionsCents?: IntFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    payrollId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    grossCents?: IntFieldUpdateOperationsInput | number
    netCents?: IntFieldUpdateOperationsInput | number
    deductionsCents?: IntFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AvailabilityListRelationFilter = {
    every?: AvailabilityWhereInput
    some?: AvailabilityWhereInput
    none?: AvailabilityWhereInput
  }

  export type TimeOffListRelationFilter = {
    every?: TimeOffWhereInput
    some?: TimeOffWhereInput
    none?: TimeOffWhereInput
  }

  export type ScheduleListRelationFilter = {
    every?: ScheduleWhereInput
    some?: ScheduleWhereInput
    none?: ScheduleWhereInput
  }

  export type WorkedEmployeeListRelationFilter = {
    every?: WorkedEmployeeWhereInput
    some?: WorkedEmployeeWhereInput
    none?: WorkedEmployeeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TimeOffOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkedEmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    contactId?: SortOrder
    jobTitle?: SortOrder
    department?: SortOrder
    salary?: SortOrder
    status?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    salary?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    contactId?: SortOrder
    jobTitle?: SortOrder
    department?: SortOrder
    salary?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    contactId?: SortOrder
    jobTitle?: SortOrder
    department?: SortOrder
    salary?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    salary?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type AvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    orgId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilityAvgOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }

  export type AvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    orgId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    orgId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilitySumOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type TimeOffCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    orgId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimeOffMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    orgId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimeOffMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    orgId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    orgId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    position?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    orgId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    position?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    orgId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    position?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type WorkedEmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    orgId?: SortOrder
    date?: SortOrder
    hoursWorked?: SortOrder
    earnings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkedEmployeeAvgOrderByAggregateInput = {
    hoursWorked?: SortOrder
    earnings?: SortOrder
  }

  export type WorkedEmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    orgId?: SortOrder
    date?: SortOrder
    hoursWorked?: SortOrder
    earnings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkedEmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    orgId?: SortOrder
    date?: SortOrder
    hoursWorked?: SortOrder
    earnings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkedEmployeeSumOrderByAggregateInput = {
    hoursWorked?: SortOrder
    earnings?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ShiftCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    employeeId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    position?: SortOrder
    shiftName?: SortOrder
    color?: SortOrder
    notes?: SortOrder
    isDraft?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    employeeId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    position?: SortOrder
    shiftName?: SortOrder
    color?: SortOrder
    notes?: SortOrder
    isDraft?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    employeeId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    position?: SortOrder
    shiftName?: SortOrder
    color?: SortOrder
    notes?: SortOrder
    isDraft?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SalaryCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    employeeId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    effectiveDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalaryAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SalaryMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    employeeId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    effectiveDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalaryMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    employeeId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    effectiveDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalarySumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    employeeId?: SortOrder
    date?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    employeeId?: SortOrder
    date?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    employeeId?: SortOrder
    date?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BudgetCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    period?: SortOrder
    budgetedCents?: SortOrder
    actualCents?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BudgetAvgOrderByAggregateInput = {
    budgetedCents?: SortOrder
    actualCents?: SortOrder
  }

  export type BudgetMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    period?: SortOrder
    budgetedCents?: SortOrder
    actualCents?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BudgetMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    period?: SortOrder
    budgetedCents?: SortOrder
    actualCents?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BudgetSumOrderByAggregateInput = {
    budgetedCents?: SortOrder
    actualCents?: SortOrder
  }

  export type EmployeeCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    employeeId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    employeeId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    employeeId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type PayrollHistoryListRelationFilter = {
    every?: PayrollHistoryWhereInput
    some?: PayrollHistoryWhereInput
    none?: PayrollHistoryWhereInput
  }

  export type PayrollHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PayrollCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    totalAmountCents?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayrollAvgOrderByAggregateInput = {
    totalAmountCents?: SortOrder
  }

  export type PayrollMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    totalAmountCents?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayrollMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    totalAmountCents?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayrollSumOrderByAggregateInput = {
    totalAmountCents?: SortOrder
  }

  export type PayrollNullableScalarRelationFilter = {
    is?: PayrollWhereInput | null
    isNot?: PayrollWhereInput | null
  }

  export type PayrollHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    payrollId?: SortOrder
    employeeId?: SortOrder
    grossCents?: SortOrder
    netCents?: SortOrder
    deductionsCents?: SortOrder
    paidAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type PayrollHistoryAvgOrderByAggregateInput = {
    grossCents?: SortOrder
    netCents?: SortOrder
    deductionsCents?: SortOrder
  }

  export type PayrollHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    payrollId?: SortOrder
    employeeId?: SortOrder
    grossCents?: SortOrder
    netCents?: SortOrder
    deductionsCents?: SortOrder
    paidAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type PayrollHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    payrollId?: SortOrder
    employeeId?: SortOrder
    grossCents?: SortOrder
    netCents?: SortOrder
    deductionsCents?: SortOrder
    paidAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type PayrollHistorySumOrderByAggregateInput = {
    grossCents?: SortOrder
    netCents?: SortOrder
    deductionsCents?: SortOrder
  }

  export type AvailabilityCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<AvailabilityCreateWithoutEmployeeInput, AvailabilityUncheckedCreateWithoutEmployeeInput> | AvailabilityCreateWithoutEmployeeInput[] | AvailabilityUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutEmployeeInput | AvailabilityCreateOrConnectWithoutEmployeeInput[]
    createMany?: AvailabilityCreateManyEmployeeInputEnvelope
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
  }

  export type TimeOffCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<TimeOffCreateWithoutEmployeeInput, TimeOffUncheckedCreateWithoutEmployeeInput> | TimeOffCreateWithoutEmployeeInput[] | TimeOffUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: TimeOffCreateOrConnectWithoutEmployeeInput | TimeOffCreateOrConnectWithoutEmployeeInput[]
    createMany?: TimeOffCreateManyEmployeeInputEnvelope
    connect?: TimeOffWhereUniqueInput | TimeOffWhereUniqueInput[]
  }

  export type ScheduleCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<ScheduleCreateWithoutEmployeeInput, ScheduleUncheckedCreateWithoutEmployeeInput> | ScheduleCreateWithoutEmployeeInput[] | ScheduleUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutEmployeeInput | ScheduleCreateOrConnectWithoutEmployeeInput[]
    createMany?: ScheduleCreateManyEmployeeInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type WorkedEmployeeCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<WorkedEmployeeCreateWithoutEmployeeInput, WorkedEmployeeUncheckedCreateWithoutEmployeeInput> | WorkedEmployeeCreateWithoutEmployeeInput[] | WorkedEmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: WorkedEmployeeCreateOrConnectWithoutEmployeeInput | WorkedEmployeeCreateOrConnectWithoutEmployeeInput[]
    createMany?: WorkedEmployeeCreateManyEmployeeInputEnvelope
    connect?: WorkedEmployeeWhereUniqueInput | WorkedEmployeeWhereUniqueInput[]
  }

  export type AvailabilityUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<AvailabilityCreateWithoutEmployeeInput, AvailabilityUncheckedCreateWithoutEmployeeInput> | AvailabilityCreateWithoutEmployeeInput[] | AvailabilityUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutEmployeeInput | AvailabilityCreateOrConnectWithoutEmployeeInput[]
    createMany?: AvailabilityCreateManyEmployeeInputEnvelope
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
  }

  export type TimeOffUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<TimeOffCreateWithoutEmployeeInput, TimeOffUncheckedCreateWithoutEmployeeInput> | TimeOffCreateWithoutEmployeeInput[] | TimeOffUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: TimeOffCreateOrConnectWithoutEmployeeInput | TimeOffCreateOrConnectWithoutEmployeeInput[]
    createMany?: TimeOffCreateManyEmployeeInputEnvelope
    connect?: TimeOffWhereUniqueInput | TimeOffWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<ScheduleCreateWithoutEmployeeInput, ScheduleUncheckedCreateWithoutEmployeeInput> | ScheduleCreateWithoutEmployeeInput[] | ScheduleUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutEmployeeInput | ScheduleCreateOrConnectWithoutEmployeeInput[]
    createMany?: ScheduleCreateManyEmployeeInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type WorkedEmployeeUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<WorkedEmployeeCreateWithoutEmployeeInput, WorkedEmployeeUncheckedCreateWithoutEmployeeInput> | WorkedEmployeeCreateWithoutEmployeeInput[] | WorkedEmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: WorkedEmployeeCreateOrConnectWithoutEmployeeInput | WorkedEmployeeCreateOrConnectWithoutEmployeeInput[]
    createMany?: WorkedEmployeeCreateManyEmployeeInputEnvelope
    connect?: WorkedEmployeeWhereUniqueInput | WorkedEmployeeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AvailabilityUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<AvailabilityCreateWithoutEmployeeInput, AvailabilityUncheckedCreateWithoutEmployeeInput> | AvailabilityCreateWithoutEmployeeInput[] | AvailabilityUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutEmployeeInput | AvailabilityCreateOrConnectWithoutEmployeeInput[]
    upsert?: AvailabilityUpsertWithWhereUniqueWithoutEmployeeInput | AvailabilityUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: AvailabilityCreateManyEmployeeInputEnvelope
    set?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    disconnect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    delete?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    update?: AvailabilityUpdateWithWhereUniqueWithoutEmployeeInput | AvailabilityUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: AvailabilityUpdateManyWithWhereWithoutEmployeeInput | AvailabilityUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
  }

  export type TimeOffUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<TimeOffCreateWithoutEmployeeInput, TimeOffUncheckedCreateWithoutEmployeeInput> | TimeOffCreateWithoutEmployeeInput[] | TimeOffUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: TimeOffCreateOrConnectWithoutEmployeeInput | TimeOffCreateOrConnectWithoutEmployeeInput[]
    upsert?: TimeOffUpsertWithWhereUniqueWithoutEmployeeInput | TimeOffUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: TimeOffCreateManyEmployeeInputEnvelope
    set?: TimeOffWhereUniqueInput | TimeOffWhereUniqueInput[]
    disconnect?: TimeOffWhereUniqueInput | TimeOffWhereUniqueInput[]
    delete?: TimeOffWhereUniqueInput | TimeOffWhereUniqueInput[]
    connect?: TimeOffWhereUniqueInput | TimeOffWhereUniqueInput[]
    update?: TimeOffUpdateWithWhereUniqueWithoutEmployeeInput | TimeOffUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: TimeOffUpdateManyWithWhereWithoutEmployeeInput | TimeOffUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: TimeOffScalarWhereInput | TimeOffScalarWhereInput[]
  }

  export type ScheduleUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<ScheduleCreateWithoutEmployeeInput, ScheduleUncheckedCreateWithoutEmployeeInput> | ScheduleCreateWithoutEmployeeInput[] | ScheduleUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutEmployeeInput | ScheduleCreateOrConnectWithoutEmployeeInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutEmployeeInput | ScheduleUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: ScheduleCreateManyEmployeeInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutEmployeeInput | ScheduleUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutEmployeeInput | ScheduleUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type WorkedEmployeeUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<WorkedEmployeeCreateWithoutEmployeeInput, WorkedEmployeeUncheckedCreateWithoutEmployeeInput> | WorkedEmployeeCreateWithoutEmployeeInput[] | WorkedEmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: WorkedEmployeeCreateOrConnectWithoutEmployeeInput | WorkedEmployeeCreateOrConnectWithoutEmployeeInput[]
    upsert?: WorkedEmployeeUpsertWithWhereUniqueWithoutEmployeeInput | WorkedEmployeeUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: WorkedEmployeeCreateManyEmployeeInputEnvelope
    set?: WorkedEmployeeWhereUniqueInput | WorkedEmployeeWhereUniqueInput[]
    disconnect?: WorkedEmployeeWhereUniqueInput | WorkedEmployeeWhereUniqueInput[]
    delete?: WorkedEmployeeWhereUniqueInput | WorkedEmployeeWhereUniqueInput[]
    connect?: WorkedEmployeeWhereUniqueInput | WorkedEmployeeWhereUniqueInput[]
    update?: WorkedEmployeeUpdateWithWhereUniqueWithoutEmployeeInput | WorkedEmployeeUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: WorkedEmployeeUpdateManyWithWhereWithoutEmployeeInput | WorkedEmployeeUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: WorkedEmployeeScalarWhereInput | WorkedEmployeeScalarWhereInput[]
  }

  export type AvailabilityUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<AvailabilityCreateWithoutEmployeeInput, AvailabilityUncheckedCreateWithoutEmployeeInput> | AvailabilityCreateWithoutEmployeeInput[] | AvailabilityUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutEmployeeInput | AvailabilityCreateOrConnectWithoutEmployeeInput[]
    upsert?: AvailabilityUpsertWithWhereUniqueWithoutEmployeeInput | AvailabilityUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: AvailabilityCreateManyEmployeeInputEnvelope
    set?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    disconnect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    delete?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    update?: AvailabilityUpdateWithWhereUniqueWithoutEmployeeInput | AvailabilityUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: AvailabilityUpdateManyWithWhereWithoutEmployeeInput | AvailabilityUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
  }

  export type TimeOffUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<TimeOffCreateWithoutEmployeeInput, TimeOffUncheckedCreateWithoutEmployeeInput> | TimeOffCreateWithoutEmployeeInput[] | TimeOffUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: TimeOffCreateOrConnectWithoutEmployeeInput | TimeOffCreateOrConnectWithoutEmployeeInput[]
    upsert?: TimeOffUpsertWithWhereUniqueWithoutEmployeeInput | TimeOffUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: TimeOffCreateManyEmployeeInputEnvelope
    set?: TimeOffWhereUniqueInput | TimeOffWhereUniqueInput[]
    disconnect?: TimeOffWhereUniqueInput | TimeOffWhereUniqueInput[]
    delete?: TimeOffWhereUniqueInput | TimeOffWhereUniqueInput[]
    connect?: TimeOffWhereUniqueInput | TimeOffWhereUniqueInput[]
    update?: TimeOffUpdateWithWhereUniqueWithoutEmployeeInput | TimeOffUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: TimeOffUpdateManyWithWhereWithoutEmployeeInput | TimeOffUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: TimeOffScalarWhereInput | TimeOffScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<ScheduleCreateWithoutEmployeeInput, ScheduleUncheckedCreateWithoutEmployeeInput> | ScheduleCreateWithoutEmployeeInput[] | ScheduleUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutEmployeeInput | ScheduleCreateOrConnectWithoutEmployeeInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutEmployeeInput | ScheduleUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: ScheduleCreateManyEmployeeInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutEmployeeInput | ScheduleUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutEmployeeInput | ScheduleUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type WorkedEmployeeUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<WorkedEmployeeCreateWithoutEmployeeInput, WorkedEmployeeUncheckedCreateWithoutEmployeeInput> | WorkedEmployeeCreateWithoutEmployeeInput[] | WorkedEmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: WorkedEmployeeCreateOrConnectWithoutEmployeeInput | WorkedEmployeeCreateOrConnectWithoutEmployeeInput[]
    upsert?: WorkedEmployeeUpsertWithWhereUniqueWithoutEmployeeInput | WorkedEmployeeUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: WorkedEmployeeCreateManyEmployeeInputEnvelope
    set?: WorkedEmployeeWhereUniqueInput | WorkedEmployeeWhereUniqueInput[]
    disconnect?: WorkedEmployeeWhereUniqueInput | WorkedEmployeeWhereUniqueInput[]
    delete?: WorkedEmployeeWhereUniqueInput | WorkedEmployeeWhereUniqueInput[]
    connect?: WorkedEmployeeWhereUniqueInput | WorkedEmployeeWhereUniqueInput[]
    update?: WorkedEmployeeUpdateWithWhereUniqueWithoutEmployeeInput | WorkedEmployeeUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: WorkedEmployeeUpdateManyWithWhereWithoutEmployeeInput | WorkedEmployeeUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: WorkedEmployeeScalarWhereInput | WorkedEmployeeScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutAvailabilitiesInput = {
    create?: XOR<EmployeeCreateWithoutAvailabilitiesInput, EmployeeUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAvailabilitiesInput
    connect?: EmployeeWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmployeeUpdateOneRequiredWithoutAvailabilitiesNestedInput = {
    create?: XOR<EmployeeCreateWithoutAvailabilitiesInput, EmployeeUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAvailabilitiesInput
    upsert?: EmployeeUpsertWithoutAvailabilitiesInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutAvailabilitiesInput, EmployeeUpdateWithoutAvailabilitiesInput>, EmployeeUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type EmployeeCreateNestedOneWithoutTimeOffRequestsInput = {
    create?: XOR<EmployeeCreateWithoutTimeOffRequestsInput, EmployeeUncheckedCreateWithoutTimeOffRequestsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutTimeOffRequestsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeUpdateOneRequiredWithoutTimeOffRequestsNestedInput = {
    create?: XOR<EmployeeCreateWithoutTimeOffRequestsInput, EmployeeUncheckedCreateWithoutTimeOffRequestsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutTimeOffRequestsInput
    upsert?: EmployeeUpsertWithoutTimeOffRequestsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutTimeOffRequestsInput, EmployeeUpdateWithoutTimeOffRequestsInput>, EmployeeUncheckedUpdateWithoutTimeOffRequestsInput>
  }

  export type EmployeeCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<EmployeeCreateWithoutSchedulesInput, EmployeeUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutSchedulesInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<EmployeeCreateWithoutSchedulesInput, EmployeeUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutSchedulesInput
    upsert?: EmployeeUpsertWithoutSchedulesInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutSchedulesInput, EmployeeUpdateWithoutSchedulesInput>, EmployeeUncheckedUpdateWithoutSchedulesInput>
  }

  export type EmployeeCreateNestedOneWithoutWorkedRecordsInput = {
    create?: XOR<EmployeeCreateWithoutWorkedRecordsInput, EmployeeUncheckedCreateWithoutWorkedRecordsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutWorkedRecordsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmployeeUpdateOneRequiredWithoutWorkedRecordsNestedInput = {
    create?: XOR<EmployeeCreateWithoutWorkedRecordsInput, EmployeeUncheckedCreateWithoutWorkedRecordsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutWorkedRecordsInput
    upsert?: EmployeeUpsertWithoutWorkedRecordsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutWorkedRecordsInput, EmployeeUpdateWithoutWorkedRecordsInput>, EmployeeUncheckedUpdateWithoutWorkedRecordsInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PayrollHistoryCreateNestedManyWithoutPayrollInput = {
    create?: XOR<PayrollHistoryCreateWithoutPayrollInput, PayrollHistoryUncheckedCreateWithoutPayrollInput> | PayrollHistoryCreateWithoutPayrollInput[] | PayrollHistoryUncheckedCreateWithoutPayrollInput[]
    connectOrCreate?: PayrollHistoryCreateOrConnectWithoutPayrollInput | PayrollHistoryCreateOrConnectWithoutPayrollInput[]
    createMany?: PayrollHistoryCreateManyPayrollInputEnvelope
    connect?: PayrollHistoryWhereUniqueInput | PayrollHistoryWhereUniqueInput[]
  }

  export type PayrollHistoryUncheckedCreateNestedManyWithoutPayrollInput = {
    create?: XOR<PayrollHistoryCreateWithoutPayrollInput, PayrollHistoryUncheckedCreateWithoutPayrollInput> | PayrollHistoryCreateWithoutPayrollInput[] | PayrollHistoryUncheckedCreateWithoutPayrollInput[]
    connectOrCreate?: PayrollHistoryCreateOrConnectWithoutPayrollInput | PayrollHistoryCreateOrConnectWithoutPayrollInput[]
    createMany?: PayrollHistoryCreateManyPayrollInputEnvelope
    connect?: PayrollHistoryWhereUniqueInput | PayrollHistoryWhereUniqueInput[]
  }

  export type PayrollHistoryUpdateManyWithoutPayrollNestedInput = {
    create?: XOR<PayrollHistoryCreateWithoutPayrollInput, PayrollHistoryUncheckedCreateWithoutPayrollInput> | PayrollHistoryCreateWithoutPayrollInput[] | PayrollHistoryUncheckedCreateWithoutPayrollInput[]
    connectOrCreate?: PayrollHistoryCreateOrConnectWithoutPayrollInput | PayrollHistoryCreateOrConnectWithoutPayrollInput[]
    upsert?: PayrollHistoryUpsertWithWhereUniqueWithoutPayrollInput | PayrollHistoryUpsertWithWhereUniqueWithoutPayrollInput[]
    createMany?: PayrollHistoryCreateManyPayrollInputEnvelope
    set?: PayrollHistoryWhereUniqueInput | PayrollHistoryWhereUniqueInput[]
    disconnect?: PayrollHistoryWhereUniqueInput | PayrollHistoryWhereUniqueInput[]
    delete?: PayrollHistoryWhereUniqueInput | PayrollHistoryWhereUniqueInput[]
    connect?: PayrollHistoryWhereUniqueInput | PayrollHistoryWhereUniqueInput[]
    update?: PayrollHistoryUpdateWithWhereUniqueWithoutPayrollInput | PayrollHistoryUpdateWithWhereUniqueWithoutPayrollInput[]
    updateMany?: PayrollHistoryUpdateManyWithWhereWithoutPayrollInput | PayrollHistoryUpdateManyWithWhereWithoutPayrollInput[]
    deleteMany?: PayrollHistoryScalarWhereInput | PayrollHistoryScalarWhereInput[]
  }

  export type PayrollHistoryUncheckedUpdateManyWithoutPayrollNestedInput = {
    create?: XOR<PayrollHistoryCreateWithoutPayrollInput, PayrollHistoryUncheckedCreateWithoutPayrollInput> | PayrollHistoryCreateWithoutPayrollInput[] | PayrollHistoryUncheckedCreateWithoutPayrollInput[]
    connectOrCreate?: PayrollHistoryCreateOrConnectWithoutPayrollInput | PayrollHistoryCreateOrConnectWithoutPayrollInput[]
    upsert?: PayrollHistoryUpsertWithWhereUniqueWithoutPayrollInput | PayrollHistoryUpsertWithWhereUniqueWithoutPayrollInput[]
    createMany?: PayrollHistoryCreateManyPayrollInputEnvelope
    set?: PayrollHistoryWhereUniqueInput | PayrollHistoryWhereUniqueInput[]
    disconnect?: PayrollHistoryWhereUniqueInput | PayrollHistoryWhereUniqueInput[]
    delete?: PayrollHistoryWhereUniqueInput | PayrollHistoryWhereUniqueInput[]
    connect?: PayrollHistoryWhereUniqueInput | PayrollHistoryWhereUniqueInput[]
    update?: PayrollHistoryUpdateWithWhereUniqueWithoutPayrollInput | PayrollHistoryUpdateWithWhereUniqueWithoutPayrollInput[]
    updateMany?: PayrollHistoryUpdateManyWithWhereWithoutPayrollInput | PayrollHistoryUpdateManyWithWhereWithoutPayrollInput[]
    deleteMany?: PayrollHistoryScalarWhereInput | PayrollHistoryScalarWhereInput[]
  }

  export type PayrollCreateNestedOneWithoutHistoryInput = {
    create?: XOR<PayrollCreateWithoutHistoryInput, PayrollUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: PayrollCreateOrConnectWithoutHistoryInput
    connect?: PayrollWhereUniqueInput
  }

  export type PayrollUpdateOneWithoutHistoryNestedInput = {
    create?: XOR<PayrollCreateWithoutHistoryInput, PayrollUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: PayrollCreateOrConnectWithoutHistoryInput
    upsert?: PayrollUpsertWithoutHistoryInput
    disconnect?: PayrollWhereInput | boolean
    delete?: PayrollWhereInput | boolean
    connect?: PayrollWhereUniqueInput
    update?: XOR<XOR<PayrollUpdateToOneWithWhereWithoutHistoryInput, PayrollUpdateWithoutHistoryInput>, PayrollUncheckedUpdateWithoutHistoryInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AvailabilityCreateWithoutEmployeeInput = {
    id?: string
    orgId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityUncheckedCreateWithoutEmployeeInput = {
    id?: string
    orgId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityCreateOrConnectWithoutEmployeeInput = {
    where: AvailabilityWhereUniqueInput
    create: XOR<AvailabilityCreateWithoutEmployeeInput, AvailabilityUncheckedCreateWithoutEmployeeInput>
  }

  export type AvailabilityCreateManyEmployeeInputEnvelope = {
    data: AvailabilityCreateManyEmployeeInput | AvailabilityCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type TimeOffCreateWithoutEmployeeInput = {
    id?: string
    orgId: string
    startDate: Date | string
    endDate: Date | string
    type: string
    status?: string
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimeOffUncheckedCreateWithoutEmployeeInput = {
    id?: string
    orgId: string
    startDate: Date | string
    endDate: Date | string
    type: string
    status?: string
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimeOffCreateOrConnectWithoutEmployeeInput = {
    where: TimeOffWhereUniqueInput
    create: XOR<TimeOffCreateWithoutEmployeeInput, TimeOffUncheckedCreateWithoutEmployeeInput>
  }

  export type TimeOffCreateManyEmployeeInputEnvelope = {
    data: TimeOffCreateManyEmployeeInput | TimeOffCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleCreateWithoutEmployeeInput = {
    id?: string
    orgId: string
    startTime: Date | string
    endTime: Date | string
    position?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUncheckedCreateWithoutEmployeeInput = {
    id?: string
    orgId: string
    startTime: Date | string
    endTime: Date | string
    position?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleCreateOrConnectWithoutEmployeeInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutEmployeeInput, ScheduleUncheckedCreateWithoutEmployeeInput>
  }

  export type ScheduleCreateManyEmployeeInputEnvelope = {
    data: ScheduleCreateManyEmployeeInput | ScheduleCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type WorkedEmployeeCreateWithoutEmployeeInput = {
    id?: string
    orgId: string
    date: Date | string
    hoursWorked: number
    earnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkedEmployeeUncheckedCreateWithoutEmployeeInput = {
    id?: string
    orgId: string
    date: Date | string
    hoursWorked: number
    earnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkedEmployeeCreateOrConnectWithoutEmployeeInput = {
    where: WorkedEmployeeWhereUniqueInput
    create: XOR<WorkedEmployeeCreateWithoutEmployeeInput, WorkedEmployeeUncheckedCreateWithoutEmployeeInput>
  }

  export type WorkedEmployeeCreateManyEmployeeInputEnvelope = {
    data: WorkedEmployeeCreateManyEmployeeInput | WorkedEmployeeCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type AvailabilityUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: AvailabilityWhereUniqueInput
    update: XOR<AvailabilityUpdateWithoutEmployeeInput, AvailabilityUncheckedUpdateWithoutEmployeeInput>
    create: XOR<AvailabilityCreateWithoutEmployeeInput, AvailabilityUncheckedCreateWithoutEmployeeInput>
  }

  export type AvailabilityUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: AvailabilityWhereUniqueInput
    data: XOR<AvailabilityUpdateWithoutEmployeeInput, AvailabilityUncheckedUpdateWithoutEmployeeInput>
  }

  export type AvailabilityUpdateManyWithWhereWithoutEmployeeInput = {
    where: AvailabilityScalarWhereInput
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type AvailabilityScalarWhereInput = {
    AND?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
    OR?: AvailabilityScalarWhereInput[]
    NOT?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
    id?: UuidFilter<"Availability"> | string
    employeeId?: UuidFilter<"Availability"> | string
    orgId?: UuidFilter<"Availability"> | string
    dayOfWeek?: IntFilter<"Availability"> | number
    startTime?: StringFilter<"Availability"> | string
    endTime?: StringFilter<"Availability"> | string
    createdAt?: DateTimeFilter<"Availability"> | Date | string
    updatedAt?: DateTimeFilter<"Availability"> | Date | string
  }

  export type TimeOffUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: TimeOffWhereUniqueInput
    update: XOR<TimeOffUpdateWithoutEmployeeInput, TimeOffUncheckedUpdateWithoutEmployeeInput>
    create: XOR<TimeOffCreateWithoutEmployeeInput, TimeOffUncheckedCreateWithoutEmployeeInput>
  }

  export type TimeOffUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: TimeOffWhereUniqueInput
    data: XOR<TimeOffUpdateWithoutEmployeeInput, TimeOffUncheckedUpdateWithoutEmployeeInput>
  }

  export type TimeOffUpdateManyWithWhereWithoutEmployeeInput = {
    where: TimeOffScalarWhereInput
    data: XOR<TimeOffUpdateManyMutationInput, TimeOffUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type TimeOffScalarWhereInput = {
    AND?: TimeOffScalarWhereInput | TimeOffScalarWhereInput[]
    OR?: TimeOffScalarWhereInput[]
    NOT?: TimeOffScalarWhereInput | TimeOffScalarWhereInput[]
    id?: UuidFilter<"TimeOff"> | string
    employeeId?: UuidFilter<"TimeOff"> | string
    orgId?: UuidFilter<"TimeOff"> | string
    startDate?: DateTimeFilter<"TimeOff"> | Date | string
    endDate?: DateTimeFilter<"TimeOff"> | Date | string
    type?: StringFilter<"TimeOff"> | string
    status?: StringFilter<"TimeOff"> | string
    reason?: StringNullableFilter<"TimeOff"> | string | null
    createdAt?: DateTimeFilter<"TimeOff"> | Date | string
    updatedAt?: DateTimeFilter<"TimeOff"> | Date | string
  }

  export type ScheduleUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutEmployeeInput, ScheduleUncheckedUpdateWithoutEmployeeInput>
    create: XOR<ScheduleCreateWithoutEmployeeInput, ScheduleUncheckedCreateWithoutEmployeeInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutEmployeeInput, ScheduleUncheckedUpdateWithoutEmployeeInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutEmployeeInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type ScheduleScalarWhereInput = {
    AND?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    OR?: ScheduleScalarWhereInput[]
    NOT?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    id?: UuidFilter<"Schedule"> | string
    employeeId?: UuidFilter<"Schedule"> | string
    orgId?: UuidFilter<"Schedule"> | string
    startTime?: DateTimeFilter<"Schedule"> | Date | string
    endTime?: DateTimeFilter<"Schedule"> | Date | string
    position?: StringNullableFilter<"Schedule"> | string | null
    notes?: StringNullableFilter<"Schedule"> | string | null
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
  }

  export type WorkedEmployeeUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: WorkedEmployeeWhereUniqueInput
    update: XOR<WorkedEmployeeUpdateWithoutEmployeeInput, WorkedEmployeeUncheckedUpdateWithoutEmployeeInput>
    create: XOR<WorkedEmployeeCreateWithoutEmployeeInput, WorkedEmployeeUncheckedCreateWithoutEmployeeInput>
  }

  export type WorkedEmployeeUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: WorkedEmployeeWhereUniqueInput
    data: XOR<WorkedEmployeeUpdateWithoutEmployeeInput, WorkedEmployeeUncheckedUpdateWithoutEmployeeInput>
  }

  export type WorkedEmployeeUpdateManyWithWhereWithoutEmployeeInput = {
    where: WorkedEmployeeScalarWhereInput
    data: XOR<WorkedEmployeeUpdateManyMutationInput, WorkedEmployeeUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type WorkedEmployeeScalarWhereInput = {
    AND?: WorkedEmployeeScalarWhereInput | WorkedEmployeeScalarWhereInput[]
    OR?: WorkedEmployeeScalarWhereInput[]
    NOT?: WorkedEmployeeScalarWhereInput | WorkedEmployeeScalarWhereInput[]
    id?: UuidFilter<"WorkedEmployee"> | string
    employeeId?: UuidFilter<"WorkedEmployee"> | string
    orgId?: UuidFilter<"WorkedEmployee"> | string
    date?: DateTimeFilter<"WorkedEmployee"> | Date | string
    hoursWorked?: FloatFilter<"WorkedEmployee"> | number
    earnings?: IntFilter<"WorkedEmployee"> | number
    createdAt?: DateTimeFilter<"WorkedEmployee"> | Date | string
    updatedAt?: DateTimeFilter<"WorkedEmployee"> | Date | string
  }

  export type EmployeeCreateWithoutAvailabilitiesInput = {
    id?: string
    orgId: string
    userId: string
    contactId?: string | null
    jobTitle?: string | null
    department?: string | null
    salary?: number | null
    status?: string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    timeOffRequests?: TimeOffCreateNestedManyWithoutEmployeeInput
    schedules?: ScheduleCreateNestedManyWithoutEmployeeInput
    workedRecords?: WorkedEmployeeCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutAvailabilitiesInput = {
    id?: string
    orgId: string
    userId: string
    contactId?: string | null
    jobTitle?: string | null
    department?: string | null
    salary?: number | null
    status?: string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    timeOffRequests?: TimeOffUncheckedCreateNestedManyWithoutEmployeeInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutEmployeeInput
    workedRecords?: WorkedEmployeeUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutAvailabilitiesInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutAvailabilitiesInput, EmployeeUncheckedCreateWithoutAvailabilitiesInput>
  }

  export type EmployeeUpsertWithoutAvailabilitiesInput = {
    update: XOR<EmployeeUpdateWithoutAvailabilitiesInput, EmployeeUncheckedUpdateWithoutAvailabilitiesInput>
    create: XOR<EmployeeCreateWithoutAvailabilitiesInput, EmployeeUncheckedCreateWithoutAvailabilitiesInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutAvailabilitiesInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutAvailabilitiesInput, EmployeeUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type EmployeeUpdateWithoutAvailabilitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeOffRequests?: TimeOffUpdateManyWithoutEmployeeNestedInput
    schedules?: ScheduleUpdateManyWithoutEmployeeNestedInput
    workedRecords?: WorkedEmployeeUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutAvailabilitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeOffRequests?: TimeOffUncheckedUpdateManyWithoutEmployeeNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutEmployeeNestedInput
    workedRecords?: WorkedEmployeeUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateWithoutTimeOffRequestsInput = {
    id?: string
    orgId: string
    userId: string
    contactId?: string | null
    jobTitle?: string | null
    department?: string | null
    salary?: number | null
    status?: string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilities?: AvailabilityCreateNestedManyWithoutEmployeeInput
    schedules?: ScheduleCreateNestedManyWithoutEmployeeInput
    workedRecords?: WorkedEmployeeCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutTimeOffRequestsInput = {
    id?: string
    orgId: string
    userId: string
    contactId?: string | null
    jobTitle?: string | null
    department?: string | null
    salary?: number | null
    status?: string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilities?: AvailabilityUncheckedCreateNestedManyWithoutEmployeeInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutEmployeeInput
    workedRecords?: WorkedEmployeeUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutTimeOffRequestsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutTimeOffRequestsInput, EmployeeUncheckedCreateWithoutTimeOffRequestsInput>
  }

  export type EmployeeUpsertWithoutTimeOffRequestsInput = {
    update: XOR<EmployeeUpdateWithoutTimeOffRequestsInput, EmployeeUncheckedUpdateWithoutTimeOffRequestsInput>
    create: XOR<EmployeeCreateWithoutTimeOffRequestsInput, EmployeeUncheckedCreateWithoutTimeOffRequestsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutTimeOffRequestsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutTimeOffRequestsInput, EmployeeUncheckedUpdateWithoutTimeOffRequestsInput>
  }

  export type EmployeeUpdateWithoutTimeOffRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: AvailabilityUpdateManyWithoutEmployeeNestedInput
    schedules?: ScheduleUpdateManyWithoutEmployeeNestedInput
    workedRecords?: WorkedEmployeeUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutTimeOffRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: AvailabilityUncheckedUpdateManyWithoutEmployeeNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutEmployeeNestedInput
    workedRecords?: WorkedEmployeeUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateWithoutSchedulesInput = {
    id?: string
    orgId: string
    userId: string
    contactId?: string | null
    jobTitle?: string | null
    department?: string | null
    salary?: number | null
    status?: string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilities?: AvailabilityCreateNestedManyWithoutEmployeeInput
    timeOffRequests?: TimeOffCreateNestedManyWithoutEmployeeInput
    workedRecords?: WorkedEmployeeCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutSchedulesInput = {
    id?: string
    orgId: string
    userId: string
    contactId?: string | null
    jobTitle?: string | null
    department?: string | null
    salary?: number | null
    status?: string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilities?: AvailabilityUncheckedCreateNestedManyWithoutEmployeeInput
    timeOffRequests?: TimeOffUncheckedCreateNestedManyWithoutEmployeeInput
    workedRecords?: WorkedEmployeeUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutSchedulesInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutSchedulesInput, EmployeeUncheckedCreateWithoutSchedulesInput>
  }

  export type EmployeeUpsertWithoutSchedulesInput = {
    update: XOR<EmployeeUpdateWithoutSchedulesInput, EmployeeUncheckedUpdateWithoutSchedulesInput>
    create: XOR<EmployeeCreateWithoutSchedulesInput, EmployeeUncheckedCreateWithoutSchedulesInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutSchedulesInput, EmployeeUncheckedUpdateWithoutSchedulesInput>
  }

  export type EmployeeUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: AvailabilityUpdateManyWithoutEmployeeNestedInput
    timeOffRequests?: TimeOffUpdateManyWithoutEmployeeNestedInput
    workedRecords?: WorkedEmployeeUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: AvailabilityUncheckedUpdateManyWithoutEmployeeNestedInput
    timeOffRequests?: TimeOffUncheckedUpdateManyWithoutEmployeeNestedInput
    workedRecords?: WorkedEmployeeUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateWithoutWorkedRecordsInput = {
    id?: string
    orgId: string
    userId: string
    contactId?: string | null
    jobTitle?: string | null
    department?: string | null
    salary?: number | null
    status?: string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilities?: AvailabilityCreateNestedManyWithoutEmployeeInput
    timeOffRequests?: TimeOffCreateNestedManyWithoutEmployeeInput
    schedules?: ScheduleCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutWorkedRecordsInput = {
    id?: string
    orgId: string
    userId: string
    contactId?: string | null
    jobTitle?: string | null
    department?: string | null
    salary?: number | null
    status?: string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilities?: AvailabilityUncheckedCreateNestedManyWithoutEmployeeInput
    timeOffRequests?: TimeOffUncheckedCreateNestedManyWithoutEmployeeInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutWorkedRecordsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutWorkedRecordsInput, EmployeeUncheckedCreateWithoutWorkedRecordsInput>
  }

  export type EmployeeUpsertWithoutWorkedRecordsInput = {
    update: XOR<EmployeeUpdateWithoutWorkedRecordsInput, EmployeeUncheckedUpdateWithoutWorkedRecordsInput>
    create: XOR<EmployeeCreateWithoutWorkedRecordsInput, EmployeeUncheckedCreateWithoutWorkedRecordsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutWorkedRecordsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutWorkedRecordsInput, EmployeeUncheckedUpdateWithoutWorkedRecordsInput>
  }

  export type EmployeeUpdateWithoutWorkedRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: AvailabilityUpdateManyWithoutEmployeeNestedInput
    timeOffRequests?: TimeOffUpdateManyWithoutEmployeeNestedInput
    schedules?: ScheduleUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutWorkedRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: AvailabilityUncheckedUpdateManyWithoutEmployeeNestedInput
    timeOffRequests?: TimeOffUncheckedUpdateManyWithoutEmployeeNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type PayrollHistoryCreateWithoutPayrollInput = {
    id?: string
    orgId: string
    employeeId: string
    grossCents?: number
    netCents?: number
    deductionsCents?: number
    paidAt?: Date | string
    notes?: string | null
    createdAt?: Date | string
  }

  export type PayrollHistoryUncheckedCreateWithoutPayrollInput = {
    id?: string
    orgId: string
    employeeId: string
    grossCents?: number
    netCents?: number
    deductionsCents?: number
    paidAt?: Date | string
    notes?: string | null
    createdAt?: Date | string
  }

  export type PayrollHistoryCreateOrConnectWithoutPayrollInput = {
    where: PayrollHistoryWhereUniqueInput
    create: XOR<PayrollHistoryCreateWithoutPayrollInput, PayrollHistoryUncheckedCreateWithoutPayrollInput>
  }

  export type PayrollHistoryCreateManyPayrollInputEnvelope = {
    data: PayrollHistoryCreateManyPayrollInput | PayrollHistoryCreateManyPayrollInput[]
    skipDuplicates?: boolean
  }

  export type PayrollHistoryUpsertWithWhereUniqueWithoutPayrollInput = {
    where: PayrollHistoryWhereUniqueInput
    update: XOR<PayrollHistoryUpdateWithoutPayrollInput, PayrollHistoryUncheckedUpdateWithoutPayrollInput>
    create: XOR<PayrollHistoryCreateWithoutPayrollInput, PayrollHistoryUncheckedCreateWithoutPayrollInput>
  }

  export type PayrollHistoryUpdateWithWhereUniqueWithoutPayrollInput = {
    where: PayrollHistoryWhereUniqueInput
    data: XOR<PayrollHistoryUpdateWithoutPayrollInput, PayrollHistoryUncheckedUpdateWithoutPayrollInput>
  }

  export type PayrollHistoryUpdateManyWithWhereWithoutPayrollInput = {
    where: PayrollHistoryScalarWhereInput
    data: XOR<PayrollHistoryUpdateManyMutationInput, PayrollHistoryUncheckedUpdateManyWithoutPayrollInput>
  }

  export type PayrollHistoryScalarWhereInput = {
    AND?: PayrollHistoryScalarWhereInput | PayrollHistoryScalarWhereInput[]
    OR?: PayrollHistoryScalarWhereInput[]
    NOT?: PayrollHistoryScalarWhereInput | PayrollHistoryScalarWhereInput[]
    id?: UuidFilter<"PayrollHistory"> | string
    orgId?: UuidFilter<"PayrollHistory"> | string
    payrollId?: UuidNullableFilter<"PayrollHistory"> | string | null
    employeeId?: UuidFilter<"PayrollHistory"> | string
    grossCents?: IntFilter<"PayrollHistory"> | number
    netCents?: IntFilter<"PayrollHistory"> | number
    deductionsCents?: IntFilter<"PayrollHistory"> | number
    paidAt?: DateTimeFilter<"PayrollHistory"> | Date | string
    notes?: StringNullableFilter<"PayrollHistory"> | string | null
    createdAt?: DateTimeFilter<"PayrollHistory"> | Date | string
  }

  export type PayrollCreateWithoutHistoryInput = {
    id?: string
    orgId: string
    createdBy: string
    periodStart: Date | string
    periodEnd: Date | string
    totalAmountCents?: number
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollUncheckedCreateWithoutHistoryInput = {
    id?: string
    orgId: string
    createdBy: string
    periodStart: Date | string
    periodEnd: Date | string
    totalAmountCents?: number
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayrollCreateOrConnectWithoutHistoryInput = {
    where: PayrollWhereUniqueInput
    create: XOR<PayrollCreateWithoutHistoryInput, PayrollUncheckedCreateWithoutHistoryInput>
  }

  export type PayrollUpsertWithoutHistoryInput = {
    update: XOR<PayrollUpdateWithoutHistoryInput, PayrollUncheckedUpdateWithoutHistoryInput>
    create: XOR<PayrollCreateWithoutHistoryInput, PayrollUncheckedCreateWithoutHistoryInput>
    where?: PayrollWhereInput
  }

  export type PayrollUpdateToOneWithWhereWithoutHistoryInput = {
    where?: PayrollWhereInput
    data: XOR<PayrollUpdateWithoutHistoryInput, PayrollUncheckedUpdateWithoutHistoryInput>
  }

  export type PayrollUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmountCents?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmountCents?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityCreateManyEmployeeInput = {
    id?: string
    orgId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimeOffCreateManyEmployeeInput = {
    id?: string
    orgId: string
    startDate: Date | string
    endDate: Date | string
    type: string
    status?: string
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleCreateManyEmployeeInput = {
    id?: string
    orgId: string
    startTime: Date | string
    endTime: Date | string
    position?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkedEmployeeCreateManyEmployeeInput = {
    id?: string
    orgId: string
    date: Date | string
    hoursWorked: number
    earnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeOffUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeOffUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeOffUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkedEmployeeUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    earnings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkedEmployeeUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    earnings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkedEmployeeUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    earnings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollHistoryCreateManyPayrollInput = {
    id?: string
    orgId: string
    employeeId: string
    grossCents?: number
    netCents?: number
    deductionsCents?: number
    paidAt?: Date | string
    notes?: string | null
    createdAt?: Date | string
  }

  export type PayrollHistoryUpdateWithoutPayrollInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    grossCents?: IntFieldUpdateOperationsInput | number
    netCents?: IntFieldUpdateOperationsInput | number
    deductionsCents?: IntFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollHistoryUncheckedUpdateWithoutPayrollInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    grossCents?: IntFieldUpdateOperationsInput | number
    netCents?: IntFieldUpdateOperationsInput | number
    deductionsCents?: IntFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollHistoryUncheckedUpdateManyWithoutPayrollInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    grossCents?: IntFieldUpdateOperationsInput | number
    netCents?: IntFieldUpdateOperationsInput | number
    deductionsCents?: IntFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}