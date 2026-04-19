
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
 * Model PosSetting
 * 
 */
export type PosSetting = $Result.DefaultSelection<Prisma.$PosSettingPayload>
/**
 * Model PosTable
 * 
 */
export type PosTable = $Result.DefaultSelection<Prisma.$PosTablePayload>
/**
 * Model PosTableMode
 * 
 */
export type PosTableMode = $Result.DefaultSelection<Prisma.$PosTableModePayload>
/**
 * Model PosTableOrder
 * 
 */
export type PosTableOrder = $Result.DefaultSelection<Prisma.$PosTableOrderPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PosSettings
 * const posSettings = await prisma.posSetting.findMany()
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
   * // Fetch zero or more PosSettings
   * const posSettings = await prisma.posSetting.findMany()
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
   * `prisma.posSetting`: Exposes CRUD operations for the **PosSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PosSettings
    * const posSettings = await prisma.posSetting.findMany()
    * ```
    */
  get posSetting(): Prisma.PosSettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.posTable`: Exposes CRUD operations for the **PosTable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PosTables
    * const posTables = await prisma.posTable.findMany()
    * ```
    */
  get posTable(): Prisma.PosTableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.posTableMode`: Exposes CRUD operations for the **PosTableMode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PosTableModes
    * const posTableModes = await prisma.posTableMode.findMany()
    * ```
    */
  get posTableMode(): Prisma.PosTableModeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.posTableOrder`: Exposes CRUD operations for the **PosTableOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PosTableOrders
    * const posTableOrders = await prisma.posTableOrder.findMany()
    * ```
    */
  get posTableOrder(): Prisma.PosTableOrderDelegate<ExtArgs, ClientOptions>;
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
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
    PosSetting: 'PosSetting',
    PosTable: 'PosTable',
    PosTableMode: 'PosTableMode',
    PosTableOrder: 'PosTableOrder'
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
      modelProps: "posSetting" | "posTable" | "posTableMode" | "posTableOrder"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PosSetting: {
        payload: Prisma.$PosSettingPayload<ExtArgs>
        fields: Prisma.PosSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PosSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PosSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosSettingPayload>
          }
          findFirst: {
            args: Prisma.PosSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PosSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosSettingPayload>
          }
          findMany: {
            args: Prisma.PosSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosSettingPayload>[]
          }
          create: {
            args: Prisma.PosSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosSettingPayload>
          }
          createMany: {
            args: Prisma.PosSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PosSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosSettingPayload>[]
          }
          delete: {
            args: Prisma.PosSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosSettingPayload>
          }
          update: {
            args: Prisma.PosSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosSettingPayload>
          }
          deleteMany: {
            args: Prisma.PosSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PosSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PosSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosSettingPayload>
          }
          aggregate: {
            args: Prisma.PosSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosSetting>
          }
          groupBy: {
            args: Prisma.PosSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<PosSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.PosSettingCountArgs<ExtArgs>
            result: $Utils.Optional<PosSettingCountAggregateOutputType> | number
          }
        }
      }
      PosTable: {
        payload: Prisma.$PosTablePayload<ExtArgs>
        fields: Prisma.PosTableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PosTableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosTablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PosTableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosTablePayload>
          }
          findFirst: {
            args: Prisma.PosTableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosTablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PosTableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosTablePayload>
          }
          findMany: {
            args: Prisma.PosTableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosTablePayload>[]
          }
          create: {
            args: Prisma.PosTableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosTablePayload>
          }
          createMany: {
            args: Prisma.PosTableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PosTableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosTablePayload>[]
          }
          delete: {
            args: Prisma.PosTableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosTablePayload>
          }
          update: {
            args: Prisma.PosTableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosTablePayload>
          }
          deleteMany: {
            args: Prisma.PosTableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PosTableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PosTableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosTablePayload>
          }
          aggregate: {
            args: Prisma.PosTableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosTable>
          }
          groupBy: {
            args: Prisma.PosTableGroupByArgs<ExtArgs>
            result: $Utils.Optional<PosTableGroupByOutputType>[]
          }
          count: {
            args: Prisma.PosTableCountArgs<ExtArgs>
            result: $Utils.Optional<PosTableCountAggregateOutputType> | number
          }
        }
      }
      PosTableMode: {
        payload: Prisma.$PosTableModePayload<ExtArgs>
        fields: Prisma.PosTableModeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PosTableModeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosTableModePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PosTableModeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosTableModePayload>
          }
          findFirst: {
            args: Prisma.PosTableModeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosTableModePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PosTableModeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosTableModePayload>
          }
          findMany: {
            args: Prisma.PosTableModeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosTableModePayload>[]
          }
          create: {
            args: Prisma.PosTableModeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosTableModePayload>
          }
          createMany: {
            args: Prisma.PosTableModeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PosTableModeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosTableModePayload>[]
          }
          delete: {
            args: Prisma.PosTableModeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosTableModePayload>
          }
          update: {
            args: Prisma.PosTableModeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosTableModePayload>
          }
          deleteMany: {
            args: Prisma.PosTableModeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PosTableModeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PosTableModeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosTableModePayload>
          }
          aggregate: {
            args: Prisma.PosTableModeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosTableMode>
          }
          groupBy: {
            args: Prisma.PosTableModeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PosTableModeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PosTableModeCountArgs<ExtArgs>
            result: $Utils.Optional<PosTableModeCountAggregateOutputType> | number
          }
        }
      }
      PosTableOrder: {
        payload: Prisma.$PosTableOrderPayload<ExtArgs>
        fields: Prisma.PosTableOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PosTableOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosTableOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PosTableOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosTableOrderPayload>
          }
          findFirst: {
            args: Prisma.PosTableOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosTableOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PosTableOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosTableOrderPayload>
          }
          findMany: {
            args: Prisma.PosTableOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosTableOrderPayload>[]
          }
          create: {
            args: Prisma.PosTableOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosTableOrderPayload>
          }
          createMany: {
            args: Prisma.PosTableOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PosTableOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosTableOrderPayload>[]
          }
          delete: {
            args: Prisma.PosTableOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosTableOrderPayload>
          }
          update: {
            args: Prisma.PosTableOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosTableOrderPayload>
          }
          deleteMany: {
            args: Prisma.PosTableOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PosTableOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PosTableOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosTableOrderPayload>
          }
          aggregate: {
            args: Prisma.PosTableOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosTableOrder>
          }
          groupBy: {
            args: Prisma.PosTableOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<PosTableOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.PosTableOrderCountArgs<ExtArgs>
            result: $Utils.Optional<PosTableOrderCountAggregateOutputType> | number
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
    posSetting?: PosSettingOmit
    posTable?: PosTableOmit
    posTableMode?: PosTableModeOmit
    posTableOrder?: PosTableOrderOmit
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
   * Models
   */

  /**
   * Model PosSetting
   */

  export type AggregatePosSetting = {
    _count: PosSettingCountAggregateOutputType | null
    _avg: PosSettingAvgAggregateOutputType | null
    _sum: PosSettingSumAggregateOutputType | null
    _min: PosSettingMinAggregateOutputType | null
    _max: PosSettingMaxAggregateOutputType | null
  }

  export type PosSettingAvgAggregateOutputType = {
    numberPadFirstValue: number | null
    numberPadSecondValue: number | null
    numberPadThirdValue: number | null
    configureTipFirstPercentage: number | null
    configureTipSecondPercentage: number | null
    configureTipThirdPercentage: number | null
    configureTipFourthPercentage: number | null
  }

  export type PosSettingSumAggregateOutputType = {
    numberPadFirstValue: number | null
    numberPadSecondValue: number | null
    numberPadThirdValue: number | null
    configureTipFirstPercentage: number | null
    configureTipSecondPercentage: number | null
    configureTipThirdPercentage: number | null
    configureTipFourthPercentage: number | null
  }

  export type PosSettingMinAggregateOutputType = {
    id: string | null
    shopId: string | null
    organizationId: string | null
    numberPadFirstValue: number | null
    numberPadSecondValue: number | null
    numberPadThirdValue: number | null
    configureTipFirstPercentage: number | null
    configureTipSecondPercentage: number | null
    configureTipThirdPercentage: number | null
    configureTipFourthPercentage: number | null
    cfd: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PosSettingMaxAggregateOutputType = {
    id: string | null
    shopId: string | null
    organizationId: string | null
    numberPadFirstValue: number | null
    numberPadSecondValue: number | null
    numberPadThirdValue: number | null
    configureTipFirstPercentage: number | null
    configureTipSecondPercentage: number | null
    configureTipThirdPercentage: number | null
    configureTipFourthPercentage: number | null
    cfd: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PosSettingCountAggregateOutputType = {
    id: number
    shopId: number
    organizationId: number
    numberPadFirstValue: number
    numberPadSecondValue: number
    numberPadThirdValue: number
    configureTipFirstPercentage: number
    configureTipSecondPercentage: number
    configureTipThirdPercentage: number
    configureTipFourthPercentage: number
    cfd: number
    cfdSettings: number
    tipShifts: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PosSettingAvgAggregateInputType = {
    numberPadFirstValue?: true
    numberPadSecondValue?: true
    numberPadThirdValue?: true
    configureTipFirstPercentage?: true
    configureTipSecondPercentage?: true
    configureTipThirdPercentage?: true
    configureTipFourthPercentage?: true
  }

  export type PosSettingSumAggregateInputType = {
    numberPadFirstValue?: true
    numberPadSecondValue?: true
    numberPadThirdValue?: true
    configureTipFirstPercentage?: true
    configureTipSecondPercentage?: true
    configureTipThirdPercentage?: true
    configureTipFourthPercentage?: true
  }

  export type PosSettingMinAggregateInputType = {
    id?: true
    shopId?: true
    organizationId?: true
    numberPadFirstValue?: true
    numberPadSecondValue?: true
    numberPadThirdValue?: true
    configureTipFirstPercentage?: true
    configureTipSecondPercentage?: true
    configureTipThirdPercentage?: true
    configureTipFourthPercentage?: true
    cfd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PosSettingMaxAggregateInputType = {
    id?: true
    shopId?: true
    organizationId?: true
    numberPadFirstValue?: true
    numberPadSecondValue?: true
    numberPadThirdValue?: true
    configureTipFirstPercentage?: true
    configureTipSecondPercentage?: true
    configureTipThirdPercentage?: true
    configureTipFourthPercentage?: true
    cfd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PosSettingCountAggregateInputType = {
    id?: true
    shopId?: true
    organizationId?: true
    numberPadFirstValue?: true
    numberPadSecondValue?: true
    numberPadThirdValue?: true
    configureTipFirstPercentage?: true
    configureTipSecondPercentage?: true
    configureTipThirdPercentage?: true
    configureTipFourthPercentage?: true
    cfd?: true
    cfdSettings?: true
    tipShifts?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PosSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PosSetting to aggregate.
     */
    where?: PosSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PosSettings to fetch.
     */
    orderBy?: PosSettingOrderByWithRelationInput | PosSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PosSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PosSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PosSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PosSettings
    **/
    _count?: true | PosSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PosSettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PosSettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PosSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PosSettingMaxAggregateInputType
  }

  export type GetPosSettingAggregateType<T extends PosSettingAggregateArgs> = {
        [P in keyof T & keyof AggregatePosSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosSetting[P]>
      : GetScalarType<T[P], AggregatePosSetting[P]>
  }




  export type PosSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PosSettingWhereInput
    orderBy?: PosSettingOrderByWithAggregationInput | PosSettingOrderByWithAggregationInput[]
    by: PosSettingScalarFieldEnum[] | PosSettingScalarFieldEnum
    having?: PosSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PosSettingCountAggregateInputType | true
    _avg?: PosSettingAvgAggregateInputType
    _sum?: PosSettingSumAggregateInputType
    _min?: PosSettingMinAggregateInputType
    _max?: PosSettingMaxAggregateInputType
  }

  export type PosSettingGroupByOutputType = {
    id: string
    shopId: string | null
    organizationId: string | null
    numberPadFirstValue: number | null
    numberPadSecondValue: number | null
    numberPadThirdValue: number | null
    configureTipFirstPercentage: number | null
    configureTipSecondPercentage: number | null
    configureTipThirdPercentage: number | null
    configureTipFourthPercentage: number | null
    cfd: boolean
    cfdSettings: JsonValue | null
    tipShifts: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: PosSettingCountAggregateOutputType | null
    _avg: PosSettingAvgAggregateOutputType | null
    _sum: PosSettingSumAggregateOutputType | null
    _min: PosSettingMinAggregateOutputType | null
    _max: PosSettingMaxAggregateOutputType | null
  }

  type GetPosSettingGroupByPayload<T extends PosSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PosSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PosSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PosSettingGroupByOutputType[P]>
            : GetScalarType<T[P], PosSettingGroupByOutputType[P]>
        }
      >
    >


  export type PosSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    organizationId?: boolean
    numberPadFirstValue?: boolean
    numberPadSecondValue?: boolean
    numberPadThirdValue?: boolean
    configureTipFirstPercentage?: boolean
    configureTipSecondPercentage?: boolean
    configureTipThirdPercentage?: boolean
    configureTipFourthPercentage?: boolean
    cfd?: boolean
    cfdSettings?: boolean
    tipShifts?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["posSetting"]>

  export type PosSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    organizationId?: boolean
    numberPadFirstValue?: boolean
    numberPadSecondValue?: boolean
    numberPadThirdValue?: boolean
    configureTipFirstPercentage?: boolean
    configureTipSecondPercentage?: boolean
    configureTipThirdPercentage?: boolean
    configureTipFourthPercentage?: boolean
    cfd?: boolean
    cfdSettings?: boolean
    tipShifts?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["posSetting"]>


  export type PosSettingSelectScalar = {
    id?: boolean
    shopId?: boolean
    organizationId?: boolean
    numberPadFirstValue?: boolean
    numberPadSecondValue?: boolean
    numberPadThirdValue?: boolean
    configureTipFirstPercentage?: boolean
    configureTipSecondPercentage?: boolean
    configureTipThirdPercentage?: boolean
    configureTipFourthPercentage?: boolean
    cfd?: boolean
    cfdSettings?: boolean
    tipShifts?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PosSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "organizationId" | "numberPadFirstValue" | "numberPadSecondValue" | "numberPadThirdValue" | "configureTipFirstPercentage" | "configureTipSecondPercentage" | "configureTipThirdPercentage" | "configureTipFourthPercentage" | "cfd" | "cfdSettings" | "tipShifts" | "createdAt" | "updatedAt", ExtArgs["result"]["posSetting"]>

  export type $PosSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PosSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopId: string | null
      organizationId: string | null
      numberPadFirstValue: number | null
      numberPadSecondValue: number | null
      numberPadThirdValue: number | null
      configureTipFirstPercentage: number | null
      configureTipSecondPercentage: number | null
      configureTipThirdPercentage: number | null
      configureTipFourthPercentage: number | null
      cfd: boolean
      cfdSettings: Prisma.JsonValue | null
      tipShifts: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["posSetting"]>
    composites: {}
  }

  type PosSettingGetPayload<S extends boolean | null | undefined | PosSettingDefaultArgs> = $Result.GetResult<Prisma.$PosSettingPayload, S>

  type PosSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PosSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PosSettingCountAggregateInputType | true
    }

  export interface PosSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PosSetting'], meta: { name: 'PosSetting' } }
    /**
     * Find zero or one PosSetting that matches the filter.
     * @param {PosSettingFindUniqueArgs} args - Arguments to find a PosSetting
     * @example
     * // Get one PosSetting
     * const posSetting = await prisma.posSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PosSettingFindUniqueArgs>(args: SelectSubset<T, PosSettingFindUniqueArgs<ExtArgs>>): Prisma__PosSettingClient<$Result.GetResult<Prisma.$PosSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PosSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PosSettingFindUniqueOrThrowArgs} args - Arguments to find a PosSetting
     * @example
     * // Get one PosSetting
     * const posSetting = await prisma.posSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PosSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, PosSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PosSettingClient<$Result.GetResult<Prisma.$PosSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PosSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosSettingFindFirstArgs} args - Arguments to find a PosSetting
     * @example
     * // Get one PosSetting
     * const posSetting = await prisma.posSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PosSettingFindFirstArgs>(args?: SelectSubset<T, PosSettingFindFirstArgs<ExtArgs>>): Prisma__PosSettingClient<$Result.GetResult<Prisma.$PosSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PosSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosSettingFindFirstOrThrowArgs} args - Arguments to find a PosSetting
     * @example
     * // Get one PosSetting
     * const posSetting = await prisma.posSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PosSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, PosSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__PosSettingClient<$Result.GetResult<Prisma.$PosSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PosSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PosSettings
     * const posSettings = await prisma.posSetting.findMany()
     * 
     * // Get first 10 PosSettings
     * const posSettings = await prisma.posSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const posSettingWithIdOnly = await prisma.posSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PosSettingFindManyArgs>(args?: SelectSubset<T, PosSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PosSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PosSetting.
     * @param {PosSettingCreateArgs} args - Arguments to create a PosSetting.
     * @example
     * // Create one PosSetting
     * const PosSetting = await prisma.posSetting.create({
     *   data: {
     *     // ... data to create a PosSetting
     *   }
     * })
     * 
     */
    create<T extends PosSettingCreateArgs>(args: SelectSubset<T, PosSettingCreateArgs<ExtArgs>>): Prisma__PosSettingClient<$Result.GetResult<Prisma.$PosSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PosSettings.
     * @param {PosSettingCreateManyArgs} args - Arguments to create many PosSettings.
     * @example
     * // Create many PosSettings
     * const posSetting = await prisma.posSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PosSettingCreateManyArgs>(args?: SelectSubset<T, PosSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PosSettings and returns the data saved in the database.
     * @param {PosSettingCreateManyAndReturnArgs} args - Arguments to create many PosSettings.
     * @example
     * // Create many PosSettings
     * const posSetting = await prisma.posSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PosSettings and only return the `id`
     * const posSettingWithIdOnly = await prisma.posSetting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PosSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, PosSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PosSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PosSetting.
     * @param {PosSettingDeleteArgs} args - Arguments to delete one PosSetting.
     * @example
     * // Delete one PosSetting
     * const PosSetting = await prisma.posSetting.delete({
     *   where: {
     *     // ... filter to delete one PosSetting
     *   }
     * })
     * 
     */
    delete<T extends PosSettingDeleteArgs>(args: SelectSubset<T, PosSettingDeleteArgs<ExtArgs>>): Prisma__PosSettingClient<$Result.GetResult<Prisma.$PosSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PosSetting.
     * @param {PosSettingUpdateArgs} args - Arguments to update one PosSetting.
     * @example
     * // Update one PosSetting
     * const posSetting = await prisma.posSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PosSettingUpdateArgs>(args: SelectSubset<T, PosSettingUpdateArgs<ExtArgs>>): Prisma__PosSettingClient<$Result.GetResult<Prisma.$PosSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PosSettings.
     * @param {PosSettingDeleteManyArgs} args - Arguments to filter PosSettings to delete.
     * @example
     * // Delete a few PosSettings
     * const { count } = await prisma.posSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PosSettingDeleteManyArgs>(args?: SelectSubset<T, PosSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PosSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PosSettings
     * const posSetting = await prisma.posSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PosSettingUpdateManyArgs>(args: SelectSubset<T, PosSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PosSetting.
     * @param {PosSettingUpsertArgs} args - Arguments to update or create a PosSetting.
     * @example
     * // Update or create a PosSetting
     * const posSetting = await prisma.posSetting.upsert({
     *   create: {
     *     // ... data to create a PosSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PosSetting we want to update
     *   }
     * })
     */
    upsert<T extends PosSettingUpsertArgs>(args: SelectSubset<T, PosSettingUpsertArgs<ExtArgs>>): Prisma__PosSettingClient<$Result.GetResult<Prisma.$PosSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PosSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosSettingCountArgs} args - Arguments to filter PosSettings to count.
     * @example
     * // Count the number of PosSettings
     * const count = await prisma.posSetting.count({
     *   where: {
     *     // ... the filter for the PosSettings we want to count
     *   }
     * })
    **/
    count<T extends PosSettingCountArgs>(
      args?: Subset<T, PosSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PosSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PosSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PosSettingAggregateArgs>(args: Subset<T, PosSettingAggregateArgs>): Prisma.PrismaPromise<GetPosSettingAggregateType<T>>

    /**
     * Group by PosSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosSettingGroupByArgs} args - Group by arguments.
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
      T extends PosSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PosSettingGroupByArgs['orderBy'] }
        : { orderBy?: PosSettingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PosSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPosSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PosSetting model
   */
  readonly fields: PosSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PosSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PosSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PosSetting model
   */
  interface PosSettingFieldRefs {
    readonly id: FieldRef<"PosSetting", 'String'>
    readonly shopId: FieldRef<"PosSetting", 'String'>
    readonly organizationId: FieldRef<"PosSetting", 'String'>
    readonly numberPadFirstValue: FieldRef<"PosSetting", 'Int'>
    readonly numberPadSecondValue: FieldRef<"PosSetting", 'Int'>
    readonly numberPadThirdValue: FieldRef<"PosSetting", 'Int'>
    readonly configureTipFirstPercentage: FieldRef<"PosSetting", 'Int'>
    readonly configureTipSecondPercentage: FieldRef<"PosSetting", 'Int'>
    readonly configureTipThirdPercentage: FieldRef<"PosSetting", 'Int'>
    readonly configureTipFourthPercentage: FieldRef<"PosSetting", 'Int'>
    readonly cfd: FieldRef<"PosSetting", 'Boolean'>
    readonly cfdSettings: FieldRef<"PosSetting", 'Json'>
    readonly tipShifts: FieldRef<"PosSetting", 'Json'>
    readonly createdAt: FieldRef<"PosSetting", 'DateTime'>
    readonly updatedAt: FieldRef<"PosSetting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PosSetting findUnique
   */
  export type PosSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosSetting
     */
    select?: PosSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosSetting
     */
    omit?: PosSettingOmit<ExtArgs> | null
    /**
     * Filter, which PosSetting to fetch.
     */
    where: PosSettingWhereUniqueInput
  }

  /**
   * PosSetting findUniqueOrThrow
   */
  export type PosSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosSetting
     */
    select?: PosSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosSetting
     */
    omit?: PosSettingOmit<ExtArgs> | null
    /**
     * Filter, which PosSetting to fetch.
     */
    where: PosSettingWhereUniqueInput
  }

  /**
   * PosSetting findFirst
   */
  export type PosSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosSetting
     */
    select?: PosSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosSetting
     */
    omit?: PosSettingOmit<ExtArgs> | null
    /**
     * Filter, which PosSetting to fetch.
     */
    where?: PosSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PosSettings to fetch.
     */
    orderBy?: PosSettingOrderByWithRelationInput | PosSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PosSettings.
     */
    cursor?: PosSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PosSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PosSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PosSettings.
     */
    distinct?: PosSettingScalarFieldEnum | PosSettingScalarFieldEnum[]
  }

  /**
   * PosSetting findFirstOrThrow
   */
  export type PosSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosSetting
     */
    select?: PosSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosSetting
     */
    omit?: PosSettingOmit<ExtArgs> | null
    /**
     * Filter, which PosSetting to fetch.
     */
    where?: PosSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PosSettings to fetch.
     */
    orderBy?: PosSettingOrderByWithRelationInput | PosSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PosSettings.
     */
    cursor?: PosSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PosSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PosSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PosSettings.
     */
    distinct?: PosSettingScalarFieldEnum | PosSettingScalarFieldEnum[]
  }

  /**
   * PosSetting findMany
   */
  export type PosSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosSetting
     */
    select?: PosSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosSetting
     */
    omit?: PosSettingOmit<ExtArgs> | null
    /**
     * Filter, which PosSettings to fetch.
     */
    where?: PosSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PosSettings to fetch.
     */
    orderBy?: PosSettingOrderByWithRelationInput | PosSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PosSettings.
     */
    cursor?: PosSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PosSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PosSettings.
     */
    skip?: number
    distinct?: PosSettingScalarFieldEnum | PosSettingScalarFieldEnum[]
  }

  /**
   * PosSetting create
   */
  export type PosSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosSetting
     */
    select?: PosSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosSetting
     */
    omit?: PosSettingOmit<ExtArgs> | null
    /**
     * The data needed to create a PosSetting.
     */
    data: XOR<PosSettingCreateInput, PosSettingUncheckedCreateInput>
  }

  /**
   * PosSetting createMany
   */
  export type PosSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PosSettings.
     */
    data: PosSettingCreateManyInput | PosSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PosSetting createManyAndReturn
   */
  export type PosSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosSetting
     */
    select?: PosSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PosSetting
     */
    omit?: PosSettingOmit<ExtArgs> | null
    /**
     * The data used to create many PosSettings.
     */
    data: PosSettingCreateManyInput | PosSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PosSetting update
   */
  export type PosSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosSetting
     */
    select?: PosSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosSetting
     */
    omit?: PosSettingOmit<ExtArgs> | null
    /**
     * The data needed to update a PosSetting.
     */
    data: XOR<PosSettingUpdateInput, PosSettingUncheckedUpdateInput>
    /**
     * Choose, which PosSetting to update.
     */
    where: PosSettingWhereUniqueInput
  }

  /**
   * PosSetting updateMany
   */
  export type PosSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PosSettings.
     */
    data: XOR<PosSettingUpdateManyMutationInput, PosSettingUncheckedUpdateManyInput>
    /**
     * Filter which PosSettings to update
     */
    where?: PosSettingWhereInput
  }

  /**
   * PosSetting upsert
   */
  export type PosSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosSetting
     */
    select?: PosSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosSetting
     */
    omit?: PosSettingOmit<ExtArgs> | null
    /**
     * The filter to search for the PosSetting to update in case it exists.
     */
    where: PosSettingWhereUniqueInput
    /**
     * In case the PosSetting found by the `where` argument doesn't exist, create a new PosSetting with this data.
     */
    create: XOR<PosSettingCreateInput, PosSettingUncheckedCreateInput>
    /**
     * In case the PosSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PosSettingUpdateInput, PosSettingUncheckedUpdateInput>
  }

  /**
   * PosSetting delete
   */
  export type PosSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosSetting
     */
    select?: PosSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosSetting
     */
    omit?: PosSettingOmit<ExtArgs> | null
    /**
     * Filter which PosSetting to delete.
     */
    where: PosSettingWhereUniqueInput
  }

  /**
   * PosSetting deleteMany
   */
  export type PosSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PosSettings to delete
     */
    where?: PosSettingWhereInput
  }

  /**
   * PosSetting without action
   */
  export type PosSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosSetting
     */
    select?: PosSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosSetting
     */
    omit?: PosSettingOmit<ExtArgs> | null
  }


  /**
   * Model PosTable
   */

  export type AggregatePosTable = {
    _count: PosTableCountAggregateOutputType | null
    _min: PosTableMinAggregateOutputType | null
    _max: PosTableMaxAggregateOutputType | null
  }

  export type PosTableMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    shopId: string | null
    roomId: string | null
    serverId: string | null
    tableName: string | null
    tableShape: string | null
    tableLink: string | null
    tableColor: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PosTableMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    shopId: string | null
    roomId: string | null
    serverId: string | null
    tableName: string | null
    tableShape: string | null
    tableLink: string | null
    tableColor: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PosTableCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    shopId: number
    roomId: number
    serverId: number
    tableName: number
    tableShape: number
    tableLink: number
    tableColor: number
    tableDimension: number
    seats: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PosTableMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    shopId?: true
    roomId?: true
    serverId?: true
    tableName?: true
    tableShape?: true
    tableLink?: true
    tableColor?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PosTableMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    shopId?: true
    roomId?: true
    serverId?: true
    tableName?: true
    tableShape?: true
    tableLink?: true
    tableColor?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PosTableCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    shopId?: true
    roomId?: true
    serverId?: true
    tableName?: true
    tableShape?: true
    tableLink?: true
    tableColor?: true
    tableDimension?: true
    seats?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PosTableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PosTable to aggregate.
     */
    where?: PosTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PosTables to fetch.
     */
    orderBy?: PosTableOrderByWithRelationInput | PosTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PosTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PosTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PosTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PosTables
    **/
    _count?: true | PosTableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PosTableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PosTableMaxAggregateInputType
  }

  export type GetPosTableAggregateType<T extends PosTableAggregateArgs> = {
        [P in keyof T & keyof AggregatePosTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosTable[P]>
      : GetScalarType<T[P], AggregatePosTable[P]>
  }




  export type PosTableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PosTableWhereInput
    orderBy?: PosTableOrderByWithAggregationInput | PosTableOrderByWithAggregationInput[]
    by: PosTableScalarFieldEnum[] | PosTableScalarFieldEnum
    having?: PosTableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PosTableCountAggregateInputType | true
    _min?: PosTableMinAggregateInputType
    _max?: PosTableMaxAggregateInputType
  }

  export type PosTableGroupByOutputType = {
    id: string
    userId: string | null
    organizationId: string | null
    shopId: string | null
    roomId: string | null
    serverId: string | null
    tableName: string
    tableShape: string
    tableLink: string | null
    tableColor: string
    tableDimension: JsonValue | null
    seats: JsonValue | null
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: PosTableCountAggregateOutputType | null
    _min: PosTableMinAggregateOutputType | null
    _max: PosTableMaxAggregateOutputType | null
  }

  type GetPosTableGroupByPayload<T extends PosTableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PosTableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PosTableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PosTableGroupByOutputType[P]>
            : GetScalarType<T[P], PosTableGroupByOutputType[P]>
        }
      >
    >


  export type PosTableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    shopId?: boolean
    roomId?: boolean
    serverId?: boolean
    tableName?: boolean
    tableShape?: boolean
    tableLink?: boolean
    tableColor?: boolean
    tableDimension?: boolean
    seats?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["posTable"]>

  export type PosTableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    shopId?: boolean
    roomId?: boolean
    serverId?: boolean
    tableName?: boolean
    tableShape?: boolean
    tableLink?: boolean
    tableColor?: boolean
    tableDimension?: boolean
    seats?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["posTable"]>


  export type PosTableSelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    shopId?: boolean
    roomId?: boolean
    serverId?: boolean
    tableName?: boolean
    tableShape?: boolean
    tableLink?: boolean
    tableColor?: boolean
    tableDimension?: boolean
    seats?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PosTableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "shopId" | "roomId" | "serverId" | "tableName" | "tableShape" | "tableLink" | "tableColor" | "tableDimension" | "seats" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["posTable"]>

  export type $PosTablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PosTable"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      organizationId: string | null
      shopId: string | null
      roomId: string | null
      serverId: string | null
      tableName: string
      tableShape: string
      tableLink: string | null
      tableColor: string
      tableDimension: Prisma.JsonValue | null
      seats: Prisma.JsonValue | null
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["posTable"]>
    composites: {}
  }

  type PosTableGetPayload<S extends boolean | null | undefined | PosTableDefaultArgs> = $Result.GetResult<Prisma.$PosTablePayload, S>

  type PosTableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PosTableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PosTableCountAggregateInputType | true
    }

  export interface PosTableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PosTable'], meta: { name: 'PosTable' } }
    /**
     * Find zero or one PosTable that matches the filter.
     * @param {PosTableFindUniqueArgs} args - Arguments to find a PosTable
     * @example
     * // Get one PosTable
     * const posTable = await prisma.posTable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PosTableFindUniqueArgs>(args: SelectSubset<T, PosTableFindUniqueArgs<ExtArgs>>): Prisma__PosTableClient<$Result.GetResult<Prisma.$PosTablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PosTable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PosTableFindUniqueOrThrowArgs} args - Arguments to find a PosTable
     * @example
     * // Get one PosTable
     * const posTable = await prisma.posTable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PosTableFindUniqueOrThrowArgs>(args: SelectSubset<T, PosTableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PosTableClient<$Result.GetResult<Prisma.$PosTablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PosTable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosTableFindFirstArgs} args - Arguments to find a PosTable
     * @example
     * // Get one PosTable
     * const posTable = await prisma.posTable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PosTableFindFirstArgs>(args?: SelectSubset<T, PosTableFindFirstArgs<ExtArgs>>): Prisma__PosTableClient<$Result.GetResult<Prisma.$PosTablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PosTable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosTableFindFirstOrThrowArgs} args - Arguments to find a PosTable
     * @example
     * // Get one PosTable
     * const posTable = await prisma.posTable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PosTableFindFirstOrThrowArgs>(args?: SelectSubset<T, PosTableFindFirstOrThrowArgs<ExtArgs>>): Prisma__PosTableClient<$Result.GetResult<Prisma.$PosTablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PosTables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosTableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PosTables
     * const posTables = await prisma.posTable.findMany()
     * 
     * // Get first 10 PosTables
     * const posTables = await prisma.posTable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const posTableWithIdOnly = await prisma.posTable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PosTableFindManyArgs>(args?: SelectSubset<T, PosTableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PosTablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PosTable.
     * @param {PosTableCreateArgs} args - Arguments to create a PosTable.
     * @example
     * // Create one PosTable
     * const PosTable = await prisma.posTable.create({
     *   data: {
     *     // ... data to create a PosTable
     *   }
     * })
     * 
     */
    create<T extends PosTableCreateArgs>(args: SelectSubset<T, PosTableCreateArgs<ExtArgs>>): Prisma__PosTableClient<$Result.GetResult<Prisma.$PosTablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PosTables.
     * @param {PosTableCreateManyArgs} args - Arguments to create many PosTables.
     * @example
     * // Create many PosTables
     * const posTable = await prisma.posTable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PosTableCreateManyArgs>(args?: SelectSubset<T, PosTableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PosTables and returns the data saved in the database.
     * @param {PosTableCreateManyAndReturnArgs} args - Arguments to create many PosTables.
     * @example
     * // Create many PosTables
     * const posTable = await prisma.posTable.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PosTables and only return the `id`
     * const posTableWithIdOnly = await prisma.posTable.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PosTableCreateManyAndReturnArgs>(args?: SelectSubset<T, PosTableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PosTablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PosTable.
     * @param {PosTableDeleteArgs} args - Arguments to delete one PosTable.
     * @example
     * // Delete one PosTable
     * const PosTable = await prisma.posTable.delete({
     *   where: {
     *     // ... filter to delete one PosTable
     *   }
     * })
     * 
     */
    delete<T extends PosTableDeleteArgs>(args: SelectSubset<T, PosTableDeleteArgs<ExtArgs>>): Prisma__PosTableClient<$Result.GetResult<Prisma.$PosTablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PosTable.
     * @param {PosTableUpdateArgs} args - Arguments to update one PosTable.
     * @example
     * // Update one PosTable
     * const posTable = await prisma.posTable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PosTableUpdateArgs>(args: SelectSubset<T, PosTableUpdateArgs<ExtArgs>>): Prisma__PosTableClient<$Result.GetResult<Prisma.$PosTablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PosTables.
     * @param {PosTableDeleteManyArgs} args - Arguments to filter PosTables to delete.
     * @example
     * // Delete a few PosTables
     * const { count } = await prisma.posTable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PosTableDeleteManyArgs>(args?: SelectSubset<T, PosTableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PosTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosTableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PosTables
     * const posTable = await prisma.posTable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PosTableUpdateManyArgs>(args: SelectSubset<T, PosTableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PosTable.
     * @param {PosTableUpsertArgs} args - Arguments to update or create a PosTable.
     * @example
     * // Update or create a PosTable
     * const posTable = await prisma.posTable.upsert({
     *   create: {
     *     // ... data to create a PosTable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PosTable we want to update
     *   }
     * })
     */
    upsert<T extends PosTableUpsertArgs>(args: SelectSubset<T, PosTableUpsertArgs<ExtArgs>>): Prisma__PosTableClient<$Result.GetResult<Prisma.$PosTablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PosTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosTableCountArgs} args - Arguments to filter PosTables to count.
     * @example
     * // Count the number of PosTables
     * const count = await prisma.posTable.count({
     *   where: {
     *     // ... the filter for the PosTables we want to count
     *   }
     * })
    **/
    count<T extends PosTableCountArgs>(
      args?: Subset<T, PosTableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PosTableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PosTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosTableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PosTableAggregateArgs>(args: Subset<T, PosTableAggregateArgs>): Prisma.PrismaPromise<GetPosTableAggregateType<T>>

    /**
     * Group by PosTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosTableGroupByArgs} args - Group by arguments.
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
      T extends PosTableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PosTableGroupByArgs['orderBy'] }
        : { orderBy?: PosTableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PosTableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPosTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PosTable model
   */
  readonly fields: PosTableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PosTable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PosTableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PosTable model
   */
  interface PosTableFieldRefs {
    readonly id: FieldRef<"PosTable", 'String'>
    readonly userId: FieldRef<"PosTable", 'String'>
    readonly organizationId: FieldRef<"PosTable", 'String'>
    readonly shopId: FieldRef<"PosTable", 'String'>
    readonly roomId: FieldRef<"PosTable", 'String'>
    readonly serverId: FieldRef<"PosTable", 'String'>
    readonly tableName: FieldRef<"PosTable", 'String'>
    readonly tableShape: FieldRef<"PosTable", 'String'>
    readonly tableLink: FieldRef<"PosTable", 'String'>
    readonly tableColor: FieldRef<"PosTable", 'String'>
    readonly tableDimension: FieldRef<"PosTable", 'Json'>
    readonly seats: FieldRef<"PosTable", 'Json'>
    readonly isDeleted: FieldRef<"PosTable", 'Boolean'>
    readonly createdAt: FieldRef<"PosTable", 'DateTime'>
    readonly updatedAt: FieldRef<"PosTable", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PosTable findUnique
   */
  export type PosTableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTable
     */
    select?: PosTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosTable
     */
    omit?: PosTableOmit<ExtArgs> | null
    /**
     * Filter, which PosTable to fetch.
     */
    where: PosTableWhereUniqueInput
  }

  /**
   * PosTable findUniqueOrThrow
   */
  export type PosTableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTable
     */
    select?: PosTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosTable
     */
    omit?: PosTableOmit<ExtArgs> | null
    /**
     * Filter, which PosTable to fetch.
     */
    where: PosTableWhereUniqueInput
  }

  /**
   * PosTable findFirst
   */
  export type PosTableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTable
     */
    select?: PosTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosTable
     */
    omit?: PosTableOmit<ExtArgs> | null
    /**
     * Filter, which PosTable to fetch.
     */
    where?: PosTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PosTables to fetch.
     */
    orderBy?: PosTableOrderByWithRelationInput | PosTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PosTables.
     */
    cursor?: PosTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PosTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PosTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PosTables.
     */
    distinct?: PosTableScalarFieldEnum | PosTableScalarFieldEnum[]
  }

  /**
   * PosTable findFirstOrThrow
   */
  export type PosTableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTable
     */
    select?: PosTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosTable
     */
    omit?: PosTableOmit<ExtArgs> | null
    /**
     * Filter, which PosTable to fetch.
     */
    where?: PosTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PosTables to fetch.
     */
    orderBy?: PosTableOrderByWithRelationInput | PosTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PosTables.
     */
    cursor?: PosTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PosTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PosTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PosTables.
     */
    distinct?: PosTableScalarFieldEnum | PosTableScalarFieldEnum[]
  }

  /**
   * PosTable findMany
   */
  export type PosTableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTable
     */
    select?: PosTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosTable
     */
    omit?: PosTableOmit<ExtArgs> | null
    /**
     * Filter, which PosTables to fetch.
     */
    where?: PosTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PosTables to fetch.
     */
    orderBy?: PosTableOrderByWithRelationInput | PosTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PosTables.
     */
    cursor?: PosTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PosTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PosTables.
     */
    skip?: number
    distinct?: PosTableScalarFieldEnum | PosTableScalarFieldEnum[]
  }

  /**
   * PosTable create
   */
  export type PosTableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTable
     */
    select?: PosTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosTable
     */
    omit?: PosTableOmit<ExtArgs> | null
    /**
     * The data needed to create a PosTable.
     */
    data: XOR<PosTableCreateInput, PosTableUncheckedCreateInput>
  }

  /**
   * PosTable createMany
   */
  export type PosTableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PosTables.
     */
    data: PosTableCreateManyInput | PosTableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PosTable createManyAndReturn
   */
  export type PosTableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTable
     */
    select?: PosTableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PosTable
     */
    omit?: PosTableOmit<ExtArgs> | null
    /**
     * The data used to create many PosTables.
     */
    data: PosTableCreateManyInput | PosTableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PosTable update
   */
  export type PosTableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTable
     */
    select?: PosTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosTable
     */
    omit?: PosTableOmit<ExtArgs> | null
    /**
     * The data needed to update a PosTable.
     */
    data: XOR<PosTableUpdateInput, PosTableUncheckedUpdateInput>
    /**
     * Choose, which PosTable to update.
     */
    where: PosTableWhereUniqueInput
  }

  /**
   * PosTable updateMany
   */
  export type PosTableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PosTables.
     */
    data: XOR<PosTableUpdateManyMutationInput, PosTableUncheckedUpdateManyInput>
    /**
     * Filter which PosTables to update
     */
    where?: PosTableWhereInput
  }

  /**
   * PosTable upsert
   */
  export type PosTableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTable
     */
    select?: PosTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosTable
     */
    omit?: PosTableOmit<ExtArgs> | null
    /**
     * The filter to search for the PosTable to update in case it exists.
     */
    where: PosTableWhereUniqueInput
    /**
     * In case the PosTable found by the `where` argument doesn't exist, create a new PosTable with this data.
     */
    create: XOR<PosTableCreateInput, PosTableUncheckedCreateInput>
    /**
     * In case the PosTable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PosTableUpdateInput, PosTableUncheckedUpdateInput>
  }

  /**
   * PosTable delete
   */
  export type PosTableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTable
     */
    select?: PosTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosTable
     */
    omit?: PosTableOmit<ExtArgs> | null
    /**
     * Filter which PosTable to delete.
     */
    where: PosTableWhereUniqueInput
  }

  /**
   * PosTable deleteMany
   */
  export type PosTableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PosTables to delete
     */
    where?: PosTableWhereInput
  }

  /**
   * PosTable without action
   */
  export type PosTableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTable
     */
    select?: PosTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosTable
     */
    omit?: PosTableOmit<ExtArgs> | null
  }


  /**
   * Model PosTableMode
   */

  export type AggregatePosTableMode = {
    _count: PosTableModeCountAggregateOutputType | null
    _avg: PosTableModeAvgAggregateOutputType | null
    _sum: PosTableModeSumAggregateOutputType | null
    _min: PosTableModeMinAggregateOutputType | null
    _max: PosTableModeMaxAggregateOutputType | null
  }

  export type PosTableModeAvgAggregateOutputType = {
    guestCount: number | null
  }

  export type PosTableModeSumAggregateOutputType = {
    guestCount: number | null
  }

  export type PosTableModeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    shopId: string | null
    organizationId: string | null
    tableNo: string | null
    guestCount: number | null
    orderState: string | null
    serverId: string | null
    sendTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PosTableModeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    shopId: string | null
    organizationId: string | null
    tableNo: string | null
    guestCount: number | null
    orderState: string | null
    serverId: string | null
    sendTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PosTableModeCountAggregateOutputType = {
    id: number
    userId: number
    shopId: number
    organizationId: number
    tableNo: number
    guestCount: number
    orderState: number
    serverId: number
    seats: number
    sendTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PosTableModeAvgAggregateInputType = {
    guestCount?: true
  }

  export type PosTableModeSumAggregateInputType = {
    guestCount?: true
  }

  export type PosTableModeMinAggregateInputType = {
    id?: true
    userId?: true
    shopId?: true
    organizationId?: true
    tableNo?: true
    guestCount?: true
    orderState?: true
    serverId?: true
    sendTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PosTableModeMaxAggregateInputType = {
    id?: true
    userId?: true
    shopId?: true
    organizationId?: true
    tableNo?: true
    guestCount?: true
    orderState?: true
    serverId?: true
    sendTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PosTableModeCountAggregateInputType = {
    id?: true
    userId?: true
    shopId?: true
    organizationId?: true
    tableNo?: true
    guestCount?: true
    orderState?: true
    serverId?: true
    seats?: true
    sendTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PosTableModeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PosTableMode to aggregate.
     */
    where?: PosTableModeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PosTableModes to fetch.
     */
    orderBy?: PosTableModeOrderByWithRelationInput | PosTableModeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PosTableModeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PosTableModes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PosTableModes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PosTableModes
    **/
    _count?: true | PosTableModeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PosTableModeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PosTableModeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PosTableModeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PosTableModeMaxAggregateInputType
  }

  export type GetPosTableModeAggregateType<T extends PosTableModeAggregateArgs> = {
        [P in keyof T & keyof AggregatePosTableMode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosTableMode[P]>
      : GetScalarType<T[P], AggregatePosTableMode[P]>
  }




  export type PosTableModeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PosTableModeWhereInput
    orderBy?: PosTableModeOrderByWithAggregationInput | PosTableModeOrderByWithAggregationInput[]
    by: PosTableModeScalarFieldEnum[] | PosTableModeScalarFieldEnum
    having?: PosTableModeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PosTableModeCountAggregateInputType | true
    _avg?: PosTableModeAvgAggregateInputType
    _sum?: PosTableModeSumAggregateInputType
    _min?: PosTableModeMinAggregateInputType
    _max?: PosTableModeMaxAggregateInputType
  }

  export type PosTableModeGroupByOutputType = {
    id: string
    userId: string | null
    shopId: string | null
    organizationId: string | null
    tableNo: string | null
    guestCount: number | null
    orderState: string | null
    serverId: string | null
    seats: JsonValue | null
    sendTime: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PosTableModeCountAggregateOutputType | null
    _avg: PosTableModeAvgAggregateOutputType | null
    _sum: PosTableModeSumAggregateOutputType | null
    _min: PosTableModeMinAggregateOutputType | null
    _max: PosTableModeMaxAggregateOutputType | null
  }

  type GetPosTableModeGroupByPayload<T extends PosTableModeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PosTableModeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PosTableModeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PosTableModeGroupByOutputType[P]>
            : GetScalarType<T[P], PosTableModeGroupByOutputType[P]>
        }
      >
    >


  export type PosTableModeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    shopId?: boolean
    organizationId?: boolean
    tableNo?: boolean
    guestCount?: boolean
    orderState?: boolean
    serverId?: boolean
    seats?: boolean
    sendTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["posTableMode"]>

  export type PosTableModeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    shopId?: boolean
    organizationId?: boolean
    tableNo?: boolean
    guestCount?: boolean
    orderState?: boolean
    serverId?: boolean
    seats?: boolean
    sendTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["posTableMode"]>


  export type PosTableModeSelectScalar = {
    id?: boolean
    userId?: boolean
    shopId?: boolean
    organizationId?: boolean
    tableNo?: boolean
    guestCount?: boolean
    orderState?: boolean
    serverId?: boolean
    seats?: boolean
    sendTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PosTableModeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "shopId" | "organizationId" | "tableNo" | "guestCount" | "orderState" | "serverId" | "seats" | "sendTime" | "createdAt" | "updatedAt", ExtArgs["result"]["posTableMode"]>

  export type $PosTableModePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PosTableMode"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      shopId: string | null
      organizationId: string | null
      tableNo: string | null
      guestCount: number | null
      orderState: string | null
      serverId: string | null
      seats: Prisma.JsonValue | null
      sendTime: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["posTableMode"]>
    composites: {}
  }

  type PosTableModeGetPayload<S extends boolean | null | undefined | PosTableModeDefaultArgs> = $Result.GetResult<Prisma.$PosTableModePayload, S>

  type PosTableModeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PosTableModeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PosTableModeCountAggregateInputType | true
    }

  export interface PosTableModeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PosTableMode'], meta: { name: 'PosTableMode' } }
    /**
     * Find zero or one PosTableMode that matches the filter.
     * @param {PosTableModeFindUniqueArgs} args - Arguments to find a PosTableMode
     * @example
     * // Get one PosTableMode
     * const posTableMode = await prisma.posTableMode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PosTableModeFindUniqueArgs>(args: SelectSubset<T, PosTableModeFindUniqueArgs<ExtArgs>>): Prisma__PosTableModeClient<$Result.GetResult<Prisma.$PosTableModePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PosTableMode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PosTableModeFindUniqueOrThrowArgs} args - Arguments to find a PosTableMode
     * @example
     * // Get one PosTableMode
     * const posTableMode = await prisma.posTableMode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PosTableModeFindUniqueOrThrowArgs>(args: SelectSubset<T, PosTableModeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PosTableModeClient<$Result.GetResult<Prisma.$PosTableModePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PosTableMode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosTableModeFindFirstArgs} args - Arguments to find a PosTableMode
     * @example
     * // Get one PosTableMode
     * const posTableMode = await prisma.posTableMode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PosTableModeFindFirstArgs>(args?: SelectSubset<T, PosTableModeFindFirstArgs<ExtArgs>>): Prisma__PosTableModeClient<$Result.GetResult<Prisma.$PosTableModePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PosTableMode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosTableModeFindFirstOrThrowArgs} args - Arguments to find a PosTableMode
     * @example
     * // Get one PosTableMode
     * const posTableMode = await prisma.posTableMode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PosTableModeFindFirstOrThrowArgs>(args?: SelectSubset<T, PosTableModeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PosTableModeClient<$Result.GetResult<Prisma.$PosTableModePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PosTableModes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosTableModeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PosTableModes
     * const posTableModes = await prisma.posTableMode.findMany()
     * 
     * // Get first 10 PosTableModes
     * const posTableModes = await prisma.posTableMode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const posTableModeWithIdOnly = await prisma.posTableMode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PosTableModeFindManyArgs>(args?: SelectSubset<T, PosTableModeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PosTableModePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PosTableMode.
     * @param {PosTableModeCreateArgs} args - Arguments to create a PosTableMode.
     * @example
     * // Create one PosTableMode
     * const PosTableMode = await prisma.posTableMode.create({
     *   data: {
     *     // ... data to create a PosTableMode
     *   }
     * })
     * 
     */
    create<T extends PosTableModeCreateArgs>(args: SelectSubset<T, PosTableModeCreateArgs<ExtArgs>>): Prisma__PosTableModeClient<$Result.GetResult<Prisma.$PosTableModePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PosTableModes.
     * @param {PosTableModeCreateManyArgs} args - Arguments to create many PosTableModes.
     * @example
     * // Create many PosTableModes
     * const posTableMode = await prisma.posTableMode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PosTableModeCreateManyArgs>(args?: SelectSubset<T, PosTableModeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PosTableModes and returns the data saved in the database.
     * @param {PosTableModeCreateManyAndReturnArgs} args - Arguments to create many PosTableModes.
     * @example
     * // Create many PosTableModes
     * const posTableMode = await prisma.posTableMode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PosTableModes and only return the `id`
     * const posTableModeWithIdOnly = await prisma.posTableMode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PosTableModeCreateManyAndReturnArgs>(args?: SelectSubset<T, PosTableModeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PosTableModePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PosTableMode.
     * @param {PosTableModeDeleteArgs} args - Arguments to delete one PosTableMode.
     * @example
     * // Delete one PosTableMode
     * const PosTableMode = await prisma.posTableMode.delete({
     *   where: {
     *     // ... filter to delete one PosTableMode
     *   }
     * })
     * 
     */
    delete<T extends PosTableModeDeleteArgs>(args: SelectSubset<T, PosTableModeDeleteArgs<ExtArgs>>): Prisma__PosTableModeClient<$Result.GetResult<Prisma.$PosTableModePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PosTableMode.
     * @param {PosTableModeUpdateArgs} args - Arguments to update one PosTableMode.
     * @example
     * // Update one PosTableMode
     * const posTableMode = await prisma.posTableMode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PosTableModeUpdateArgs>(args: SelectSubset<T, PosTableModeUpdateArgs<ExtArgs>>): Prisma__PosTableModeClient<$Result.GetResult<Prisma.$PosTableModePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PosTableModes.
     * @param {PosTableModeDeleteManyArgs} args - Arguments to filter PosTableModes to delete.
     * @example
     * // Delete a few PosTableModes
     * const { count } = await prisma.posTableMode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PosTableModeDeleteManyArgs>(args?: SelectSubset<T, PosTableModeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PosTableModes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosTableModeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PosTableModes
     * const posTableMode = await prisma.posTableMode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PosTableModeUpdateManyArgs>(args: SelectSubset<T, PosTableModeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PosTableMode.
     * @param {PosTableModeUpsertArgs} args - Arguments to update or create a PosTableMode.
     * @example
     * // Update or create a PosTableMode
     * const posTableMode = await prisma.posTableMode.upsert({
     *   create: {
     *     // ... data to create a PosTableMode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PosTableMode we want to update
     *   }
     * })
     */
    upsert<T extends PosTableModeUpsertArgs>(args: SelectSubset<T, PosTableModeUpsertArgs<ExtArgs>>): Prisma__PosTableModeClient<$Result.GetResult<Prisma.$PosTableModePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PosTableModes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosTableModeCountArgs} args - Arguments to filter PosTableModes to count.
     * @example
     * // Count the number of PosTableModes
     * const count = await prisma.posTableMode.count({
     *   where: {
     *     // ... the filter for the PosTableModes we want to count
     *   }
     * })
    **/
    count<T extends PosTableModeCountArgs>(
      args?: Subset<T, PosTableModeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PosTableModeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PosTableMode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosTableModeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PosTableModeAggregateArgs>(args: Subset<T, PosTableModeAggregateArgs>): Prisma.PrismaPromise<GetPosTableModeAggregateType<T>>

    /**
     * Group by PosTableMode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosTableModeGroupByArgs} args - Group by arguments.
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
      T extends PosTableModeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PosTableModeGroupByArgs['orderBy'] }
        : { orderBy?: PosTableModeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PosTableModeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPosTableModeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PosTableMode model
   */
  readonly fields: PosTableModeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PosTableMode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PosTableModeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PosTableMode model
   */
  interface PosTableModeFieldRefs {
    readonly id: FieldRef<"PosTableMode", 'String'>
    readonly userId: FieldRef<"PosTableMode", 'String'>
    readonly shopId: FieldRef<"PosTableMode", 'String'>
    readonly organizationId: FieldRef<"PosTableMode", 'String'>
    readonly tableNo: FieldRef<"PosTableMode", 'String'>
    readonly guestCount: FieldRef<"PosTableMode", 'Int'>
    readonly orderState: FieldRef<"PosTableMode", 'String'>
    readonly serverId: FieldRef<"PosTableMode", 'String'>
    readonly seats: FieldRef<"PosTableMode", 'Json'>
    readonly sendTime: FieldRef<"PosTableMode", 'DateTime'>
    readonly createdAt: FieldRef<"PosTableMode", 'DateTime'>
    readonly updatedAt: FieldRef<"PosTableMode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PosTableMode findUnique
   */
  export type PosTableModeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTableMode
     */
    select?: PosTableModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosTableMode
     */
    omit?: PosTableModeOmit<ExtArgs> | null
    /**
     * Filter, which PosTableMode to fetch.
     */
    where: PosTableModeWhereUniqueInput
  }

  /**
   * PosTableMode findUniqueOrThrow
   */
  export type PosTableModeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTableMode
     */
    select?: PosTableModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosTableMode
     */
    omit?: PosTableModeOmit<ExtArgs> | null
    /**
     * Filter, which PosTableMode to fetch.
     */
    where: PosTableModeWhereUniqueInput
  }

  /**
   * PosTableMode findFirst
   */
  export type PosTableModeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTableMode
     */
    select?: PosTableModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosTableMode
     */
    omit?: PosTableModeOmit<ExtArgs> | null
    /**
     * Filter, which PosTableMode to fetch.
     */
    where?: PosTableModeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PosTableModes to fetch.
     */
    orderBy?: PosTableModeOrderByWithRelationInput | PosTableModeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PosTableModes.
     */
    cursor?: PosTableModeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PosTableModes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PosTableModes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PosTableModes.
     */
    distinct?: PosTableModeScalarFieldEnum | PosTableModeScalarFieldEnum[]
  }

  /**
   * PosTableMode findFirstOrThrow
   */
  export type PosTableModeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTableMode
     */
    select?: PosTableModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosTableMode
     */
    omit?: PosTableModeOmit<ExtArgs> | null
    /**
     * Filter, which PosTableMode to fetch.
     */
    where?: PosTableModeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PosTableModes to fetch.
     */
    orderBy?: PosTableModeOrderByWithRelationInput | PosTableModeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PosTableModes.
     */
    cursor?: PosTableModeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PosTableModes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PosTableModes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PosTableModes.
     */
    distinct?: PosTableModeScalarFieldEnum | PosTableModeScalarFieldEnum[]
  }

  /**
   * PosTableMode findMany
   */
  export type PosTableModeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTableMode
     */
    select?: PosTableModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosTableMode
     */
    omit?: PosTableModeOmit<ExtArgs> | null
    /**
     * Filter, which PosTableModes to fetch.
     */
    where?: PosTableModeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PosTableModes to fetch.
     */
    orderBy?: PosTableModeOrderByWithRelationInput | PosTableModeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PosTableModes.
     */
    cursor?: PosTableModeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PosTableModes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PosTableModes.
     */
    skip?: number
    distinct?: PosTableModeScalarFieldEnum | PosTableModeScalarFieldEnum[]
  }

  /**
   * PosTableMode create
   */
  export type PosTableModeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTableMode
     */
    select?: PosTableModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosTableMode
     */
    omit?: PosTableModeOmit<ExtArgs> | null
    /**
     * The data needed to create a PosTableMode.
     */
    data: XOR<PosTableModeCreateInput, PosTableModeUncheckedCreateInput>
  }

  /**
   * PosTableMode createMany
   */
  export type PosTableModeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PosTableModes.
     */
    data: PosTableModeCreateManyInput | PosTableModeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PosTableMode createManyAndReturn
   */
  export type PosTableModeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTableMode
     */
    select?: PosTableModeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PosTableMode
     */
    omit?: PosTableModeOmit<ExtArgs> | null
    /**
     * The data used to create many PosTableModes.
     */
    data: PosTableModeCreateManyInput | PosTableModeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PosTableMode update
   */
  export type PosTableModeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTableMode
     */
    select?: PosTableModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosTableMode
     */
    omit?: PosTableModeOmit<ExtArgs> | null
    /**
     * The data needed to update a PosTableMode.
     */
    data: XOR<PosTableModeUpdateInput, PosTableModeUncheckedUpdateInput>
    /**
     * Choose, which PosTableMode to update.
     */
    where: PosTableModeWhereUniqueInput
  }

  /**
   * PosTableMode updateMany
   */
  export type PosTableModeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PosTableModes.
     */
    data: XOR<PosTableModeUpdateManyMutationInput, PosTableModeUncheckedUpdateManyInput>
    /**
     * Filter which PosTableModes to update
     */
    where?: PosTableModeWhereInput
  }

  /**
   * PosTableMode upsert
   */
  export type PosTableModeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTableMode
     */
    select?: PosTableModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosTableMode
     */
    omit?: PosTableModeOmit<ExtArgs> | null
    /**
     * The filter to search for the PosTableMode to update in case it exists.
     */
    where: PosTableModeWhereUniqueInput
    /**
     * In case the PosTableMode found by the `where` argument doesn't exist, create a new PosTableMode with this data.
     */
    create: XOR<PosTableModeCreateInput, PosTableModeUncheckedCreateInput>
    /**
     * In case the PosTableMode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PosTableModeUpdateInput, PosTableModeUncheckedUpdateInput>
  }

  /**
   * PosTableMode delete
   */
  export type PosTableModeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTableMode
     */
    select?: PosTableModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosTableMode
     */
    omit?: PosTableModeOmit<ExtArgs> | null
    /**
     * Filter which PosTableMode to delete.
     */
    where: PosTableModeWhereUniqueInput
  }

  /**
   * PosTableMode deleteMany
   */
  export type PosTableModeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PosTableModes to delete
     */
    where?: PosTableModeWhereInput
  }

  /**
   * PosTableMode without action
   */
  export type PosTableModeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTableMode
     */
    select?: PosTableModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosTableMode
     */
    omit?: PosTableModeOmit<ExtArgs> | null
  }


  /**
   * Model PosTableOrder
   */

  export type AggregatePosTableOrder = {
    _count: PosTableOrderCountAggregateOutputType | null
    _min: PosTableOrderMinAggregateOutputType | null
    _max: PosTableOrderMaxAggregateOutputType | null
  }

  export type PosTableOrderMinAggregateOutputType = {
    id: string | null
    tableId: string | null
    userId: string | null
    organizationId: string | null
    shopId: string | null
    roomId: string | null
    tableName: string | null
    orderStatus: string | null
    isDelete: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PosTableOrderMaxAggregateOutputType = {
    id: string | null
    tableId: string | null
    userId: string | null
    organizationId: string | null
    shopId: string | null
    roomId: string | null
    tableName: string | null
    orderStatus: string | null
    isDelete: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PosTableOrderCountAggregateOutputType = {
    id: number
    tableId: number
    userId: number
    organizationId: number
    shopId: number
    roomId: number
    tableName: number
    seats: number
    orderStatus: number
    isDelete: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PosTableOrderMinAggregateInputType = {
    id?: true
    tableId?: true
    userId?: true
    organizationId?: true
    shopId?: true
    roomId?: true
    tableName?: true
    orderStatus?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PosTableOrderMaxAggregateInputType = {
    id?: true
    tableId?: true
    userId?: true
    organizationId?: true
    shopId?: true
    roomId?: true
    tableName?: true
    orderStatus?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PosTableOrderCountAggregateInputType = {
    id?: true
    tableId?: true
    userId?: true
    organizationId?: true
    shopId?: true
    roomId?: true
    tableName?: true
    seats?: true
    orderStatus?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PosTableOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PosTableOrder to aggregate.
     */
    where?: PosTableOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PosTableOrders to fetch.
     */
    orderBy?: PosTableOrderOrderByWithRelationInput | PosTableOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PosTableOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PosTableOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PosTableOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PosTableOrders
    **/
    _count?: true | PosTableOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PosTableOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PosTableOrderMaxAggregateInputType
  }

  export type GetPosTableOrderAggregateType<T extends PosTableOrderAggregateArgs> = {
        [P in keyof T & keyof AggregatePosTableOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosTableOrder[P]>
      : GetScalarType<T[P], AggregatePosTableOrder[P]>
  }




  export type PosTableOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PosTableOrderWhereInput
    orderBy?: PosTableOrderOrderByWithAggregationInput | PosTableOrderOrderByWithAggregationInput[]
    by: PosTableOrderScalarFieldEnum[] | PosTableOrderScalarFieldEnum
    having?: PosTableOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PosTableOrderCountAggregateInputType | true
    _min?: PosTableOrderMinAggregateInputType
    _max?: PosTableOrderMaxAggregateInputType
  }

  export type PosTableOrderGroupByOutputType = {
    id: string
    tableId: string
    userId: string | null
    organizationId: string | null
    shopId: string | null
    roomId: string | null
    tableName: string
    seats: JsonValue | null
    orderStatus: string | null
    isDelete: boolean
    createdAt: Date
    updatedAt: Date
    _count: PosTableOrderCountAggregateOutputType | null
    _min: PosTableOrderMinAggregateOutputType | null
    _max: PosTableOrderMaxAggregateOutputType | null
  }

  type GetPosTableOrderGroupByPayload<T extends PosTableOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PosTableOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PosTableOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PosTableOrderGroupByOutputType[P]>
            : GetScalarType<T[P], PosTableOrderGroupByOutputType[P]>
        }
      >
    >


  export type PosTableOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableId?: boolean
    userId?: boolean
    organizationId?: boolean
    shopId?: boolean
    roomId?: boolean
    tableName?: boolean
    seats?: boolean
    orderStatus?: boolean
    isDelete?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["posTableOrder"]>

  export type PosTableOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableId?: boolean
    userId?: boolean
    organizationId?: boolean
    shopId?: boolean
    roomId?: boolean
    tableName?: boolean
    seats?: boolean
    orderStatus?: boolean
    isDelete?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["posTableOrder"]>


  export type PosTableOrderSelectScalar = {
    id?: boolean
    tableId?: boolean
    userId?: boolean
    organizationId?: boolean
    shopId?: boolean
    roomId?: boolean
    tableName?: boolean
    seats?: boolean
    orderStatus?: boolean
    isDelete?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PosTableOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tableId" | "userId" | "organizationId" | "shopId" | "roomId" | "tableName" | "seats" | "orderStatus" | "isDelete" | "createdAt" | "updatedAt", ExtArgs["result"]["posTableOrder"]>

  export type $PosTableOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PosTableOrder"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tableId: string
      userId: string | null
      organizationId: string | null
      shopId: string | null
      roomId: string | null
      tableName: string
      seats: Prisma.JsonValue | null
      orderStatus: string | null
      isDelete: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["posTableOrder"]>
    composites: {}
  }

  type PosTableOrderGetPayload<S extends boolean | null | undefined | PosTableOrderDefaultArgs> = $Result.GetResult<Prisma.$PosTableOrderPayload, S>

  type PosTableOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PosTableOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PosTableOrderCountAggregateInputType | true
    }

  export interface PosTableOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PosTableOrder'], meta: { name: 'PosTableOrder' } }
    /**
     * Find zero or one PosTableOrder that matches the filter.
     * @param {PosTableOrderFindUniqueArgs} args - Arguments to find a PosTableOrder
     * @example
     * // Get one PosTableOrder
     * const posTableOrder = await prisma.posTableOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PosTableOrderFindUniqueArgs>(args: SelectSubset<T, PosTableOrderFindUniqueArgs<ExtArgs>>): Prisma__PosTableOrderClient<$Result.GetResult<Prisma.$PosTableOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PosTableOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PosTableOrderFindUniqueOrThrowArgs} args - Arguments to find a PosTableOrder
     * @example
     * // Get one PosTableOrder
     * const posTableOrder = await prisma.posTableOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PosTableOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, PosTableOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PosTableOrderClient<$Result.GetResult<Prisma.$PosTableOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PosTableOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosTableOrderFindFirstArgs} args - Arguments to find a PosTableOrder
     * @example
     * // Get one PosTableOrder
     * const posTableOrder = await prisma.posTableOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PosTableOrderFindFirstArgs>(args?: SelectSubset<T, PosTableOrderFindFirstArgs<ExtArgs>>): Prisma__PosTableOrderClient<$Result.GetResult<Prisma.$PosTableOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PosTableOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosTableOrderFindFirstOrThrowArgs} args - Arguments to find a PosTableOrder
     * @example
     * // Get one PosTableOrder
     * const posTableOrder = await prisma.posTableOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PosTableOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, PosTableOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__PosTableOrderClient<$Result.GetResult<Prisma.$PosTableOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PosTableOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosTableOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PosTableOrders
     * const posTableOrders = await prisma.posTableOrder.findMany()
     * 
     * // Get first 10 PosTableOrders
     * const posTableOrders = await prisma.posTableOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const posTableOrderWithIdOnly = await prisma.posTableOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PosTableOrderFindManyArgs>(args?: SelectSubset<T, PosTableOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PosTableOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PosTableOrder.
     * @param {PosTableOrderCreateArgs} args - Arguments to create a PosTableOrder.
     * @example
     * // Create one PosTableOrder
     * const PosTableOrder = await prisma.posTableOrder.create({
     *   data: {
     *     // ... data to create a PosTableOrder
     *   }
     * })
     * 
     */
    create<T extends PosTableOrderCreateArgs>(args: SelectSubset<T, PosTableOrderCreateArgs<ExtArgs>>): Prisma__PosTableOrderClient<$Result.GetResult<Prisma.$PosTableOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PosTableOrders.
     * @param {PosTableOrderCreateManyArgs} args - Arguments to create many PosTableOrders.
     * @example
     * // Create many PosTableOrders
     * const posTableOrder = await prisma.posTableOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PosTableOrderCreateManyArgs>(args?: SelectSubset<T, PosTableOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PosTableOrders and returns the data saved in the database.
     * @param {PosTableOrderCreateManyAndReturnArgs} args - Arguments to create many PosTableOrders.
     * @example
     * // Create many PosTableOrders
     * const posTableOrder = await prisma.posTableOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PosTableOrders and only return the `id`
     * const posTableOrderWithIdOnly = await prisma.posTableOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PosTableOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, PosTableOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PosTableOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PosTableOrder.
     * @param {PosTableOrderDeleteArgs} args - Arguments to delete one PosTableOrder.
     * @example
     * // Delete one PosTableOrder
     * const PosTableOrder = await prisma.posTableOrder.delete({
     *   where: {
     *     // ... filter to delete one PosTableOrder
     *   }
     * })
     * 
     */
    delete<T extends PosTableOrderDeleteArgs>(args: SelectSubset<T, PosTableOrderDeleteArgs<ExtArgs>>): Prisma__PosTableOrderClient<$Result.GetResult<Prisma.$PosTableOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PosTableOrder.
     * @param {PosTableOrderUpdateArgs} args - Arguments to update one PosTableOrder.
     * @example
     * // Update one PosTableOrder
     * const posTableOrder = await prisma.posTableOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PosTableOrderUpdateArgs>(args: SelectSubset<T, PosTableOrderUpdateArgs<ExtArgs>>): Prisma__PosTableOrderClient<$Result.GetResult<Prisma.$PosTableOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PosTableOrders.
     * @param {PosTableOrderDeleteManyArgs} args - Arguments to filter PosTableOrders to delete.
     * @example
     * // Delete a few PosTableOrders
     * const { count } = await prisma.posTableOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PosTableOrderDeleteManyArgs>(args?: SelectSubset<T, PosTableOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PosTableOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosTableOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PosTableOrders
     * const posTableOrder = await prisma.posTableOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PosTableOrderUpdateManyArgs>(args: SelectSubset<T, PosTableOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PosTableOrder.
     * @param {PosTableOrderUpsertArgs} args - Arguments to update or create a PosTableOrder.
     * @example
     * // Update or create a PosTableOrder
     * const posTableOrder = await prisma.posTableOrder.upsert({
     *   create: {
     *     // ... data to create a PosTableOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PosTableOrder we want to update
     *   }
     * })
     */
    upsert<T extends PosTableOrderUpsertArgs>(args: SelectSubset<T, PosTableOrderUpsertArgs<ExtArgs>>): Prisma__PosTableOrderClient<$Result.GetResult<Prisma.$PosTableOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PosTableOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosTableOrderCountArgs} args - Arguments to filter PosTableOrders to count.
     * @example
     * // Count the number of PosTableOrders
     * const count = await prisma.posTableOrder.count({
     *   where: {
     *     // ... the filter for the PosTableOrders we want to count
     *   }
     * })
    **/
    count<T extends PosTableOrderCountArgs>(
      args?: Subset<T, PosTableOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PosTableOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PosTableOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosTableOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PosTableOrderAggregateArgs>(args: Subset<T, PosTableOrderAggregateArgs>): Prisma.PrismaPromise<GetPosTableOrderAggregateType<T>>

    /**
     * Group by PosTableOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosTableOrderGroupByArgs} args - Group by arguments.
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
      T extends PosTableOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PosTableOrderGroupByArgs['orderBy'] }
        : { orderBy?: PosTableOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PosTableOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPosTableOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PosTableOrder model
   */
  readonly fields: PosTableOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PosTableOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PosTableOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PosTableOrder model
   */
  interface PosTableOrderFieldRefs {
    readonly id: FieldRef<"PosTableOrder", 'String'>
    readonly tableId: FieldRef<"PosTableOrder", 'String'>
    readonly userId: FieldRef<"PosTableOrder", 'String'>
    readonly organizationId: FieldRef<"PosTableOrder", 'String'>
    readonly shopId: FieldRef<"PosTableOrder", 'String'>
    readonly roomId: FieldRef<"PosTableOrder", 'String'>
    readonly tableName: FieldRef<"PosTableOrder", 'String'>
    readonly seats: FieldRef<"PosTableOrder", 'Json'>
    readonly orderStatus: FieldRef<"PosTableOrder", 'String'>
    readonly isDelete: FieldRef<"PosTableOrder", 'Boolean'>
    readonly createdAt: FieldRef<"PosTableOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"PosTableOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PosTableOrder findUnique
   */
  export type PosTableOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTableOrder
     */
    select?: PosTableOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosTableOrder
     */
    omit?: PosTableOrderOmit<ExtArgs> | null
    /**
     * Filter, which PosTableOrder to fetch.
     */
    where: PosTableOrderWhereUniqueInput
  }

  /**
   * PosTableOrder findUniqueOrThrow
   */
  export type PosTableOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTableOrder
     */
    select?: PosTableOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosTableOrder
     */
    omit?: PosTableOrderOmit<ExtArgs> | null
    /**
     * Filter, which PosTableOrder to fetch.
     */
    where: PosTableOrderWhereUniqueInput
  }

  /**
   * PosTableOrder findFirst
   */
  export type PosTableOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTableOrder
     */
    select?: PosTableOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosTableOrder
     */
    omit?: PosTableOrderOmit<ExtArgs> | null
    /**
     * Filter, which PosTableOrder to fetch.
     */
    where?: PosTableOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PosTableOrders to fetch.
     */
    orderBy?: PosTableOrderOrderByWithRelationInput | PosTableOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PosTableOrders.
     */
    cursor?: PosTableOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PosTableOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PosTableOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PosTableOrders.
     */
    distinct?: PosTableOrderScalarFieldEnum | PosTableOrderScalarFieldEnum[]
  }

  /**
   * PosTableOrder findFirstOrThrow
   */
  export type PosTableOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTableOrder
     */
    select?: PosTableOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosTableOrder
     */
    omit?: PosTableOrderOmit<ExtArgs> | null
    /**
     * Filter, which PosTableOrder to fetch.
     */
    where?: PosTableOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PosTableOrders to fetch.
     */
    orderBy?: PosTableOrderOrderByWithRelationInput | PosTableOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PosTableOrders.
     */
    cursor?: PosTableOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PosTableOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PosTableOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PosTableOrders.
     */
    distinct?: PosTableOrderScalarFieldEnum | PosTableOrderScalarFieldEnum[]
  }

  /**
   * PosTableOrder findMany
   */
  export type PosTableOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTableOrder
     */
    select?: PosTableOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosTableOrder
     */
    omit?: PosTableOrderOmit<ExtArgs> | null
    /**
     * Filter, which PosTableOrders to fetch.
     */
    where?: PosTableOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PosTableOrders to fetch.
     */
    orderBy?: PosTableOrderOrderByWithRelationInput | PosTableOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PosTableOrders.
     */
    cursor?: PosTableOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PosTableOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PosTableOrders.
     */
    skip?: number
    distinct?: PosTableOrderScalarFieldEnum | PosTableOrderScalarFieldEnum[]
  }

  /**
   * PosTableOrder create
   */
  export type PosTableOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTableOrder
     */
    select?: PosTableOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosTableOrder
     */
    omit?: PosTableOrderOmit<ExtArgs> | null
    /**
     * The data needed to create a PosTableOrder.
     */
    data: XOR<PosTableOrderCreateInput, PosTableOrderUncheckedCreateInput>
  }

  /**
   * PosTableOrder createMany
   */
  export type PosTableOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PosTableOrders.
     */
    data: PosTableOrderCreateManyInput | PosTableOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PosTableOrder createManyAndReturn
   */
  export type PosTableOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTableOrder
     */
    select?: PosTableOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PosTableOrder
     */
    omit?: PosTableOrderOmit<ExtArgs> | null
    /**
     * The data used to create many PosTableOrders.
     */
    data: PosTableOrderCreateManyInput | PosTableOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PosTableOrder update
   */
  export type PosTableOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTableOrder
     */
    select?: PosTableOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosTableOrder
     */
    omit?: PosTableOrderOmit<ExtArgs> | null
    /**
     * The data needed to update a PosTableOrder.
     */
    data: XOR<PosTableOrderUpdateInput, PosTableOrderUncheckedUpdateInput>
    /**
     * Choose, which PosTableOrder to update.
     */
    where: PosTableOrderWhereUniqueInput
  }

  /**
   * PosTableOrder updateMany
   */
  export type PosTableOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PosTableOrders.
     */
    data: XOR<PosTableOrderUpdateManyMutationInput, PosTableOrderUncheckedUpdateManyInput>
    /**
     * Filter which PosTableOrders to update
     */
    where?: PosTableOrderWhereInput
  }

  /**
   * PosTableOrder upsert
   */
  export type PosTableOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTableOrder
     */
    select?: PosTableOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosTableOrder
     */
    omit?: PosTableOrderOmit<ExtArgs> | null
    /**
     * The filter to search for the PosTableOrder to update in case it exists.
     */
    where: PosTableOrderWhereUniqueInput
    /**
     * In case the PosTableOrder found by the `where` argument doesn't exist, create a new PosTableOrder with this data.
     */
    create: XOR<PosTableOrderCreateInput, PosTableOrderUncheckedCreateInput>
    /**
     * In case the PosTableOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PosTableOrderUpdateInput, PosTableOrderUncheckedUpdateInput>
  }

  /**
   * PosTableOrder delete
   */
  export type PosTableOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTableOrder
     */
    select?: PosTableOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosTableOrder
     */
    omit?: PosTableOrderOmit<ExtArgs> | null
    /**
     * Filter which PosTableOrder to delete.
     */
    where: PosTableOrderWhereUniqueInput
  }

  /**
   * PosTableOrder deleteMany
   */
  export type PosTableOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PosTableOrders to delete
     */
    where?: PosTableOrderWhereInput
  }

  /**
   * PosTableOrder without action
   */
  export type PosTableOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosTableOrder
     */
    select?: PosTableOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PosTableOrder
     */
    omit?: PosTableOrderOmit<ExtArgs> | null
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


  export const PosSettingScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    organizationId: 'organizationId',
    numberPadFirstValue: 'numberPadFirstValue',
    numberPadSecondValue: 'numberPadSecondValue',
    numberPadThirdValue: 'numberPadThirdValue',
    configureTipFirstPercentage: 'configureTipFirstPercentage',
    configureTipSecondPercentage: 'configureTipSecondPercentage',
    configureTipThirdPercentage: 'configureTipThirdPercentage',
    configureTipFourthPercentage: 'configureTipFourthPercentage',
    cfd: 'cfd',
    cfdSettings: 'cfdSettings',
    tipShifts: 'tipShifts',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PosSettingScalarFieldEnum = (typeof PosSettingScalarFieldEnum)[keyof typeof PosSettingScalarFieldEnum]


  export const PosTableScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    shopId: 'shopId',
    roomId: 'roomId',
    serverId: 'serverId',
    tableName: 'tableName',
    tableShape: 'tableShape',
    tableLink: 'tableLink',
    tableColor: 'tableColor',
    tableDimension: 'tableDimension',
    seats: 'seats',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PosTableScalarFieldEnum = (typeof PosTableScalarFieldEnum)[keyof typeof PosTableScalarFieldEnum]


  export const PosTableModeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    shopId: 'shopId',
    organizationId: 'organizationId',
    tableNo: 'tableNo',
    guestCount: 'guestCount',
    orderState: 'orderState',
    serverId: 'serverId',
    seats: 'seats',
    sendTime: 'sendTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PosTableModeScalarFieldEnum = (typeof PosTableModeScalarFieldEnum)[keyof typeof PosTableModeScalarFieldEnum]


  export const PosTableOrderScalarFieldEnum: {
    id: 'id',
    tableId: 'tableId',
    userId: 'userId',
    organizationId: 'organizationId',
    shopId: 'shopId',
    roomId: 'roomId',
    tableName: 'tableName',
    seats: 'seats',
    orderStatus: 'orderStatus',
    isDelete: 'isDelete',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PosTableOrderScalarFieldEnum = (typeof PosTableOrderScalarFieldEnum)[keyof typeof PosTableOrderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


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
   * Deep Input Types
   */


  export type PosSettingWhereInput = {
    AND?: PosSettingWhereInput | PosSettingWhereInput[]
    OR?: PosSettingWhereInput[]
    NOT?: PosSettingWhereInput | PosSettingWhereInput[]
    id?: UuidFilter<"PosSetting"> | string
    shopId?: UuidNullableFilter<"PosSetting"> | string | null
    organizationId?: UuidNullableFilter<"PosSetting"> | string | null
    numberPadFirstValue?: IntNullableFilter<"PosSetting"> | number | null
    numberPadSecondValue?: IntNullableFilter<"PosSetting"> | number | null
    numberPadThirdValue?: IntNullableFilter<"PosSetting"> | number | null
    configureTipFirstPercentage?: IntNullableFilter<"PosSetting"> | number | null
    configureTipSecondPercentage?: IntNullableFilter<"PosSetting"> | number | null
    configureTipThirdPercentage?: IntNullableFilter<"PosSetting"> | number | null
    configureTipFourthPercentage?: IntNullableFilter<"PosSetting"> | number | null
    cfd?: BoolFilter<"PosSetting"> | boolean
    cfdSettings?: JsonNullableFilter<"PosSetting">
    tipShifts?: JsonNullableFilter<"PosSetting">
    createdAt?: DateTimeFilter<"PosSetting"> | Date | string
    updatedAt?: DateTimeFilter<"PosSetting"> | Date | string
  }

  export type PosSettingOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrderInput | SortOrder
    organizationId?: SortOrderInput | SortOrder
    numberPadFirstValue?: SortOrderInput | SortOrder
    numberPadSecondValue?: SortOrderInput | SortOrder
    numberPadThirdValue?: SortOrderInput | SortOrder
    configureTipFirstPercentage?: SortOrderInput | SortOrder
    configureTipSecondPercentage?: SortOrderInput | SortOrder
    configureTipThirdPercentage?: SortOrderInput | SortOrder
    configureTipFourthPercentage?: SortOrderInput | SortOrder
    cfd?: SortOrder
    cfdSettings?: SortOrderInput | SortOrder
    tipShifts?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PosSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PosSettingWhereInput | PosSettingWhereInput[]
    OR?: PosSettingWhereInput[]
    NOT?: PosSettingWhereInput | PosSettingWhereInput[]
    shopId?: UuidNullableFilter<"PosSetting"> | string | null
    organizationId?: UuidNullableFilter<"PosSetting"> | string | null
    numberPadFirstValue?: IntNullableFilter<"PosSetting"> | number | null
    numberPadSecondValue?: IntNullableFilter<"PosSetting"> | number | null
    numberPadThirdValue?: IntNullableFilter<"PosSetting"> | number | null
    configureTipFirstPercentage?: IntNullableFilter<"PosSetting"> | number | null
    configureTipSecondPercentage?: IntNullableFilter<"PosSetting"> | number | null
    configureTipThirdPercentage?: IntNullableFilter<"PosSetting"> | number | null
    configureTipFourthPercentage?: IntNullableFilter<"PosSetting"> | number | null
    cfd?: BoolFilter<"PosSetting"> | boolean
    cfdSettings?: JsonNullableFilter<"PosSetting">
    tipShifts?: JsonNullableFilter<"PosSetting">
    createdAt?: DateTimeFilter<"PosSetting"> | Date | string
    updatedAt?: DateTimeFilter<"PosSetting"> | Date | string
  }, "id">

  export type PosSettingOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrderInput | SortOrder
    organizationId?: SortOrderInput | SortOrder
    numberPadFirstValue?: SortOrderInput | SortOrder
    numberPadSecondValue?: SortOrderInput | SortOrder
    numberPadThirdValue?: SortOrderInput | SortOrder
    configureTipFirstPercentage?: SortOrderInput | SortOrder
    configureTipSecondPercentage?: SortOrderInput | SortOrder
    configureTipThirdPercentage?: SortOrderInput | SortOrder
    configureTipFourthPercentage?: SortOrderInput | SortOrder
    cfd?: SortOrder
    cfdSettings?: SortOrderInput | SortOrder
    tipShifts?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PosSettingCountOrderByAggregateInput
    _avg?: PosSettingAvgOrderByAggregateInput
    _max?: PosSettingMaxOrderByAggregateInput
    _min?: PosSettingMinOrderByAggregateInput
    _sum?: PosSettingSumOrderByAggregateInput
  }

  export type PosSettingScalarWhereWithAggregatesInput = {
    AND?: PosSettingScalarWhereWithAggregatesInput | PosSettingScalarWhereWithAggregatesInput[]
    OR?: PosSettingScalarWhereWithAggregatesInput[]
    NOT?: PosSettingScalarWhereWithAggregatesInput | PosSettingScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"PosSetting"> | string
    shopId?: UuidNullableWithAggregatesFilter<"PosSetting"> | string | null
    organizationId?: UuidNullableWithAggregatesFilter<"PosSetting"> | string | null
    numberPadFirstValue?: IntNullableWithAggregatesFilter<"PosSetting"> | number | null
    numberPadSecondValue?: IntNullableWithAggregatesFilter<"PosSetting"> | number | null
    numberPadThirdValue?: IntNullableWithAggregatesFilter<"PosSetting"> | number | null
    configureTipFirstPercentage?: IntNullableWithAggregatesFilter<"PosSetting"> | number | null
    configureTipSecondPercentage?: IntNullableWithAggregatesFilter<"PosSetting"> | number | null
    configureTipThirdPercentage?: IntNullableWithAggregatesFilter<"PosSetting"> | number | null
    configureTipFourthPercentage?: IntNullableWithAggregatesFilter<"PosSetting"> | number | null
    cfd?: BoolWithAggregatesFilter<"PosSetting"> | boolean
    cfdSettings?: JsonNullableWithAggregatesFilter<"PosSetting">
    tipShifts?: JsonNullableWithAggregatesFilter<"PosSetting">
    createdAt?: DateTimeWithAggregatesFilter<"PosSetting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PosSetting"> | Date | string
  }

  export type PosTableWhereInput = {
    AND?: PosTableWhereInput | PosTableWhereInput[]
    OR?: PosTableWhereInput[]
    NOT?: PosTableWhereInput | PosTableWhereInput[]
    id?: UuidFilter<"PosTable"> | string
    userId?: UuidNullableFilter<"PosTable"> | string | null
    organizationId?: UuidNullableFilter<"PosTable"> | string | null
    shopId?: UuidNullableFilter<"PosTable"> | string | null
    roomId?: UuidNullableFilter<"PosTable"> | string | null
    serverId?: UuidNullableFilter<"PosTable"> | string | null
    tableName?: StringFilter<"PosTable"> | string
    tableShape?: StringFilter<"PosTable"> | string
    tableLink?: StringNullableFilter<"PosTable"> | string | null
    tableColor?: StringFilter<"PosTable"> | string
    tableDimension?: JsonNullableFilter<"PosTable">
    seats?: JsonNullableFilter<"PosTable">
    isDeleted?: BoolFilter<"PosTable"> | boolean
    createdAt?: DateTimeFilter<"PosTable"> | Date | string
    updatedAt?: DateTimeFilter<"PosTable"> | Date | string
  }

  export type PosTableOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    organizationId?: SortOrderInput | SortOrder
    shopId?: SortOrderInput | SortOrder
    roomId?: SortOrderInput | SortOrder
    serverId?: SortOrderInput | SortOrder
    tableName?: SortOrder
    tableShape?: SortOrder
    tableLink?: SortOrderInput | SortOrder
    tableColor?: SortOrder
    tableDimension?: SortOrderInput | SortOrder
    seats?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PosTableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PosTableWhereInput | PosTableWhereInput[]
    OR?: PosTableWhereInput[]
    NOT?: PosTableWhereInput | PosTableWhereInput[]
    userId?: UuidNullableFilter<"PosTable"> | string | null
    organizationId?: UuidNullableFilter<"PosTable"> | string | null
    shopId?: UuidNullableFilter<"PosTable"> | string | null
    roomId?: UuidNullableFilter<"PosTable"> | string | null
    serverId?: UuidNullableFilter<"PosTable"> | string | null
    tableName?: StringFilter<"PosTable"> | string
    tableShape?: StringFilter<"PosTable"> | string
    tableLink?: StringNullableFilter<"PosTable"> | string | null
    tableColor?: StringFilter<"PosTable"> | string
    tableDimension?: JsonNullableFilter<"PosTable">
    seats?: JsonNullableFilter<"PosTable">
    isDeleted?: BoolFilter<"PosTable"> | boolean
    createdAt?: DateTimeFilter<"PosTable"> | Date | string
    updatedAt?: DateTimeFilter<"PosTable"> | Date | string
  }, "id">

  export type PosTableOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    organizationId?: SortOrderInput | SortOrder
    shopId?: SortOrderInput | SortOrder
    roomId?: SortOrderInput | SortOrder
    serverId?: SortOrderInput | SortOrder
    tableName?: SortOrder
    tableShape?: SortOrder
    tableLink?: SortOrderInput | SortOrder
    tableColor?: SortOrder
    tableDimension?: SortOrderInput | SortOrder
    seats?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PosTableCountOrderByAggregateInput
    _max?: PosTableMaxOrderByAggregateInput
    _min?: PosTableMinOrderByAggregateInput
  }

  export type PosTableScalarWhereWithAggregatesInput = {
    AND?: PosTableScalarWhereWithAggregatesInput | PosTableScalarWhereWithAggregatesInput[]
    OR?: PosTableScalarWhereWithAggregatesInput[]
    NOT?: PosTableScalarWhereWithAggregatesInput | PosTableScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"PosTable"> | string
    userId?: UuidNullableWithAggregatesFilter<"PosTable"> | string | null
    organizationId?: UuidNullableWithAggregatesFilter<"PosTable"> | string | null
    shopId?: UuidNullableWithAggregatesFilter<"PosTable"> | string | null
    roomId?: UuidNullableWithAggregatesFilter<"PosTable"> | string | null
    serverId?: UuidNullableWithAggregatesFilter<"PosTable"> | string | null
    tableName?: StringWithAggregatesFilter<"PosTable"> | string
    tableShape?: StringWithAggregatesFilter<"PosTable"> | string
    tableLink?: StringNullableWithAggregatesFilter<"PosTable"> | string | null
    tableColor?: StringWithAggregatesFilter<"PosTable"> | string
    tableDimension?: JsonNullableWithAggregatesFilter<"PosTable">
    seats?: JsonNullableWithAggregatesFilter<"PosTable">
    isDeleted?: BoolWithAggregatesFilter<"PosTable"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PosTable"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PosTable"> | Date | string
  }

  export type PosTableModeWhereInput = {
    AND?: PosTableModeWhereInput | PosTableModeWhereInput[]
    OR?: PosTableModeWhereInput[]
    NOT?: PosTableModeWhereInput | PosTableModeWhereInput[]
    id?: UuidFilter<"PosTableMode"> | string
    userId?: UuidNullableFilter<"PosTableMode"> | string | null
    shopId?: UuidNullableFilter<"PosTableMode"> | string | null
    organizationId?: UuidNullableFilter<"PosTableMode"> | string | null
    tableNo?: StringNullableFilter<"PosTableMode"> | string | null
    guestCount?: IntNullableFilter<"PosTableMode"> | number | null
    orderState?: StringNullableFilter<"PosTableMode"> | string | null
    serverId?: UuidNullableFilter<"PosTableMode"> | string | null
    seats?: JsonNullableFilter<"PosTableMode">
    sendTime?: DateTimeNullableFilter<"PosTableMode"> | Date | string | null
    createdAt?: DateTimeFilter<"PosTableMode"> | Date | string
    updatedAt?: DateTimeFilter<"PosTableMode"> | Date | string
  }

  export type PosTableModeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    shopId?: SortOrderInput | SortOrder
    organizationId?: SortOrderInput | SortOrder
    tableNo?: SortOrderInput | SortOrder
    guestCount?: SortOrderInput | SortOrder
    orderState?: SortOrderInput | SortOrder
    serverId?: SortOrderInput | SortOrder
    seats?: SortOrderInput | SortOrder
    sendTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PosTableModeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PosTableModeWhereInput | PosTableModeWhereInput[]
    OR?: PosTableModeWhereInput[]
    NOT?: PosTableModeWhereInput | PosTableModeWhereInput[]
    userId?: UuidNullableFilter<"PosTableMode"> | string | null
    shopId?: UuidNullableFilter<"PosTableMode"> | string | null
    organizationId?: UuidNullableFilter<"PosTableMode"> | string | null
    tableNo?: StringNullableFilter<"PosTableMode"> | string | null
    guestCount?: IntNullableFilter<"PosTableMode"> | number | null
    orderState?: StringNullableFilter<"PosTableMode"> | string | null
    serverId?: UuidNullableFilter<"PosTableMode"> | string | null
    seats?: JsonNullableFilter<"PosTableMode">
    sendTime?: DateTimeNullableFilter<"PosTableMode"> | Date | string | null
    createdAt?: DateTimeFilter<"PosTableMode"> | Date | string
    updatedAt?: DateTimeFilter<"PosTableMode"> | Date | string
  }, "id">

  export type PosTableModeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    shopId?: SortOrderInput | SortOrder
    organizationId?: SortOrderInput | SortOrder
    tableNo?: SortOrderInput | SortOrder
    guestCount?: SortOrderInput | SortOrder
    orderState?: SortOrderInput | SortOrder
    serverId?: SortOrderInput | SortOrder
    seats?: SortOrderInput | SortOrder
    sendTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PosTableModeCountOrderByAggregateInput
    _avg?: PosTableModeAvgOrderByAggregateInput
    _max?: PosTableModeMaxOrderByAggregateInput
    _min?: PosTableModeMinOrderByAggregateInput
    _sum?: PosTableModeSumOrderByAggregateInput
  }

  export type PosTableModeScalarWhereWithAggregatesInput = {
    AND?: PosTableModeScalarWhereWithAggregatesInput | PosTableModeScalarWhereWithAggregatesInput[]
    OR?: PosTableModeScalarWhereWithAggregatesInput[]
    NOT?: PosTableModeScalarWhereWithAggregatesInput | PosTableModeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"PosTableMode"> | string
    userId?: UuidNullableWithAggregatesFilter<"PosTableMode"> | string | null
    shopId?: UuidNullableWithAggregatesFilter<"PosTableMode"> | string | null
    organizationId?: UuidNullableWithAggregatesFilter<"PosTableMode"> | string | null
    tableNo?: StringNullableWithAggregatesFilter<"PosTableMode"> | string | null
    guestCount?: IntNullableWithAggregatesFilter<"PosTableMode"> | number | null
    orderState?: StringNullableWithAggregatesFilter<"PosTableMode"> | string | null
    serverId?: UuidNullableWithAggregatesFilter<"PosTableMode"> | string | null
    seats?: JsonNullableWithAggregatesFilter<"PosTableMode">
    sendTime?: DateTimeNullableWithAggregatesFilter<"PosTableMode"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PosTableMode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PosTableMode"> | Date | string
  }

  export type PosTableOrderWhereInput = {
    AND?: PosTableOrderWhereInput | PosTableOrderWhereInput[]
    OR?: PosTableOrderWhereInput[]
    NOT?: PosTableOrderWhereInput | PosTableOrderWhereInput[]
    id?: UuidFilter<"PosTableOrder"> | string
    tableId?: UuidFilter<"PosTableOrder"> | string
    userId?: UuidNullableFilter<"PosTableOrder"> | string | null
    organizationId?: UuidNullableFilter<"PosTableOrder"> | string | null
    shopId?: UuidNullableFilter<"PosTableOrder"> | string | null
    roomId?: UuidNullableFilter<"PosTableOrder"> | string | null
    tableName?: StringFilter<"PosTableOrder"> | string
    seats?: JsonNullableFilter<"PosTableOrder">
    orderStatus?: StringNullableFilter<"PosTableOrder"> | string | null
    isDelete?: BoolFilter<"PosTableOrder"> | boolean
    createdAt?: DateTimeFilter<"PosTableOrder"> | Date | string
    updatedAt?: DateTimeFilter<"PosTableOrder"> | Date | string
  }

  export type PosTableOrderOrderByWithRelationInput = {
    id?: SortOrder
    tableId?: SortOrder
    userId?: SortOrderInput | SortOrder
    organizationId?: SortOrderInput | SortOrder
    shopId?: SortOrderInput | SortOrder
    roomId?: SortOrderInput | SortOrder
    tableName?: SortOrder
    seats?: SortOrderInput | SortOrder
    orderStatus?: SortOrderInput | SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PosTableOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PosTableOrderWhereInput | PosTableOrderWhereInput[]
    OR?: PosTableOrderWhereInput[]
    NOT?: PosTableOrderWhereInput | PosTableOrderWhereInput[]
    tableId?: UuidFilter<"PosTableOrder"> | string
    userId?: UuidNullableFilter<"PosTableOrder"> | string | null
    organizationId?: UuidNullableFilter<"PosTableOrder"> | string | null
    shopId?: UuidNullableFilter<"PosTableOrder"> | string | null
    roomId?: UuidNullableFilter<"PosTableOrder"> | string | null
    tableName?: StringFilter<"PosTableOrder"> | string
    seats?: JsonNullableFilter<"PosTableOrder">
    orderStatus?: StringNullableFilter<"PosTableOrder"> | string | null
    isDelete?: BoolFilter<"PosTableOrder"> | boolean
    createdAt?: DateTimeFilter<"PosTableOrder"> | Date | string
    updatedAt?: DateTimeFilter<"PosTableOrder"> | Date | string
  }, "id">

  export type PosTableOrderOrderByWithAggregationInput = {
    id?: SortOrder
    tableId?: SortOrder
    userId?: SortOrderInput | SortOrder
    organizationId?: SortOrderInput | SortOrder
    shopId?: SortOrderInput | SortOrder
    roomId?: SortOrderInput | SortOrder
    tableName?: SortOrder
    seats?: SortOrderInput | SortOrder
    orderStatus?: SortOrderInput | SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PosTableOrderCountOrderByAggregateInput
    _max?: PosTableOrderMaxOrderByAggregateInput
    _min?: PosTableOrderMinOrderByAggregateInput
  }

  export type PosTableOrderScalarWhereWithAggregatesInput = {
    AND?: PosTableOrderScalarWhereWithAggregatesInput | PosTableOrderScalarWhereWithAggregatesInput[]
    OR?: PosTableOrderScalarWhereWithAggregatesInput[]
    NOT?: PosTableOrderScalarWhereWithAggregatesInput | PosTableOrderScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"PosTableOrder"> | string
    tableId?: UuidWithAggregatesFilter<"PosTableOrder"> | string
    userId?: UuidNullableWithAggregatesFilter<"PosTableOrder"> | string | null
    organizationId?: UuidNullableWithAggregatesFilter<"PosTableOrder"> | string | null
    shopId?: UuidNullableWithAggregatesFilter<"PosTableOrder"> | string | null
    roomId?: UuidNullableWithAggregatesFilter<"PosTableOrder"> | string | null
    tableName?: StringWithAggregatesFilter<"PosTableOrder"> | string
    seats?: JsonNullableWithAggregatesFilter<"PosTableOrder">
    orderStatus?: StringNullableWithAggregatesFilter<"PosTableOrder"> | string | null
    isDelete?: BoolWithAggregatesFilter<"PosTableOrder"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PosTableOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PosTableOrder"> | Date | string
  }

  export type PosSettingCreateInput = {
    id?: string
    shopId?: string | null
    organizationId?: string | null
    numberPadFirstValue?: number | null
    numberPadSecondValue?: number | null
    numberPadThirdValue?: number | null
    configureTipFirstPercentage?: number | null
    configureTipSecondPercentage?: number | null
    configureTipThirdPercentage?: number | null
    configureTipFourthPercentage?: number | null
    cfd?: boolean
    cfdSettings?: NullableJsonNullValueInput | InputJsonValue
    tipShifts?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PosSettingUncheckedCreateInput = {
    id?: string
    shopId?: string | null
    organizationId?: string | null
    numberPadFirstValue?: number | null
    numberPadSecondValue?: number | null
    numberPadThirdValue?: number | null
    configureTipFirstPercentage?: number | null
    configureTipSecondPercentage?: number | null
    configureTipThirdPercentage?: number | null
    configureTipFourthPercentage?: number | null
    cfd?: boolean
    cfdSettings?: NullableJsonNullValueInput | InputJsonValue
    tipShifts?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PosSettingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    numberPadFirstValue?: NullableIntFieldUpdateOperationsInput | number | null
    numberPadSecondValue?: NullableIntFieldUpdateOperationsInput | number | null
    numberPadThirdValue?: NullableIntFieldUpdateOperationsInput | number | null
    configureTipFirstPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    configureTipSecondPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    configureTipThirdPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    configureTipFourthPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    cfd?: BoolFieldUpdateOperationsInput | boolean
    cfdSettings?: NullableJsonNullValueInput | InputJsonValue
    tipShifts?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosSettingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    numberPadFirstValue?: NullableIntFieldUpdateOperationsInput | number | null
    numberPadSecondValue?: NullableIntFieldUpdateOperationsInput | number | null
    numberPadThirdValue?: NullableIntFieldUpdateOperationsInput | number | null
    configureTipFirstPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    configureTipSecondPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    configureTipThirdPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    configureTipFourthPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    cfd?: BoolFieldUpdateOperationsInput | boolean
    cfdSettings?: NullableJsonNullValueInput | InputJsonValue
    tipShifts?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosSettingCreateManyInput = {
    id?: string
    shopId?: string | null
    organizationId?: string | null
    numberPadFirstValue?: number | null
    numberPadSecondValue?: number | null
    numberPadThirdValue?: number | null
    configureTipFirstPercentage?: number | null
    configureTipSecondPercentage?: number | null
    configureTipThirdPercentage?: number | null
    configureTipFourthPercentage?: number | null
    cfd?: boolean
    cfdSettings?: NullableJsonNullValueInput | InputJsonValue
    tipShifts?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PosSettingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    numberPadFirstValue?: NullableIntFieldUpdateOperationsInput | number | null
    numberPadSecondValue?: NullableIntFieldUpdateOperationsInput | number | null
    numberPadThirdValue?: NullableIntFieldUpdateOperationsInput | number | null
    configureTipFirstPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    configureTipSecondPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    configureTipThirdPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    configureTipFourthPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    cfd?: BoolFieldUpdateOperationsInput | boolean
    cfdSettings?: NullableJsonNullValueInput | InputJsonValue
    tipShifts?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosSettingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    numberPadFirstValue?: NullableIntFieldUpdateOperationsInput | number | null
    numberPadSecondValue?: NullableIntFieldUpdateOperationsInput | number | null
    numberPadThirdValue?: NullableIntFieldUpdateOperationsInput | number | null
    configureTipFirstPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    configureTipSecondPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    configureTipThirdPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    configureTipFourthPercentage?: NullableIntFieldUpdateOperationsInput | number | null
    cfd?: BoolFieldUpdateOperationsInput | boolean
    cfdSettings?: NullableJsonNullValueInput | InputJsonValue
    tipShifts?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosTableCreateInput = {
    id?: string
    userId?: string | null
    organizationId?: string | null
    shopId?: string | null
    roomId?: string | null
    serverId?: string | null
    tableName: string
    tableShape: string
    tableLink?: string | null
    tableColor?: string
    tableDimension?: NullableJsonNullValueInput | InputJsonValue
    seats?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PosTableUncheckedCreateInput = {
    id?: string
    userId?: string | null
    organizationId?: string | null
    shopId?: string | null
    roomId?: string | null
    serverId?: string | null
    tableName: string
    tableShape: string
    tableLink?: string | null
    tableColor?: string
    tableDimension?: NullableJsonNullValueInput | InputJsonValue
    seats?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PosTableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    serverId?: NullableStringFieldUpdateOperationsInput | string | null
    tableName?: StringFieldUpdateOperationsInput | string
    tableShape?: StringFieldUpdateOperationsInput | string
    tableLink?: NullableStringFieldUpdateOperationsInput | string | null
    tableColor?: StringFieldUpdateOperationsInput | string
    tableDimension?: NullableJsonNullValueInput | InputJsonValue
    seats?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosTableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    serverId?: NullableStringFieldUpdateOperationsInput | string | null
    tableName?: StringFieldUpdateOperationsInput | string
    tableShape?: StringFieldUpdateOperationsInput | string
    tableLink?: NullableStringFieldUpdateOperationsInput | string | null
    tableColor?: StringFieldUpdateOperationsInput | string
    tableDimension?: NullableJsonNullValueInput | InputJsonValue
    seats?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosTableCreateManyInput = {
    id?: string
    userId?: string | null
    organizationId?: string | null
    shopId?: string | null
    roomId?: string | null
    serverId?: string | null
    tableName: string
    tableShape: string
    tableLink?: string | null
    tableColor?: string
    tableDimension?: NullableJsonNullValueInput | InputJsonValue
    seats?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PosTableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    serverId?: NullableStringFieldUpdateOperationsInput | string | null
    tableName?: StringFieldUpdateOperationsInput | string
    tableShape?: StringFieldUpdateOperationsInput | string
    tableLink?: NullableStringFieldUpdateOperationsInput | string | null
    tableColor?: StringFieldUpdateOperationsInput | string
    tableDimension?: NullableJsonNullValueInput | InputJsonValue
    seats?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosTableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    serverId?: NullableStringFieldUpdateOperationsInput | string | null
    tableName?: StringFieldUpdateOperationsInput | string
    tableShape?: StringFieldUpdateOperationsInput | string
    tableLink?: NullableStringFieldUpdateOperationsInput | string | null
    tableColor?: StringFieldUpdateOperationsInput | string
    tableDimension?: NullableJsonNullValueInput | InputJsonValue
    seats?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosTableModeCreateInput = {
    id?: string
    userId?: string | null
    shopId?: string | null
    organizationId?: string | null
    tableNo?: string | null
    guestCount?: number | null
    orderState?: string | null
    serverId?: string | null
    seats?: NullableJsonNullValueInput | InputJsonValue
    sendTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PosTableModeUncheckedCreateInput = {
    id?: string
    userId?: string | null
    shopId?: string | null
    organizationId?: string | null
    tableNo?: string | null
    guestCount?: number | null
    orderState?: string | null
    serverId?: string | null
    seats?: NullableJsonNullValueInput | InputJsonValue
    sendTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PosTableModeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    tableNo?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: NullableIntFieldUpdateOperationsInput | number | null
    orderState?: NullableStringFieldUpdateOperationsInput | string | null
    serverId?: NullableStringFieldUpdateOperationsInput | string | null
    seats?: NullableJsonNullValueInput | InputJsonValue
    sendTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosTableModeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    tableNo?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: NullableIntFieldUpdateOperationsInput | number | null
    orderState?: NullableStringFieldUpdateOperationsInput | string | null
    serverId?: NullableStringFieldUpdateOperationsInput | string | null
    seats?: NullableJsonNullValueInput | InputJsonValue
    sendTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosTableModeCreateManyInput = {
    id?: string
    userId?: string | null
    shopId?: string | null
    organizationId?: string | null
    tableNo?: string | null
    guestCount?: number | null
    orderState?: string | null
    serverId?: string | null
    seats?: NullableJsonNullValueInput | InputJsonValue
    sendTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PosTableModeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    tableNo?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: NullableIntFieldUpdateOperationsInput | number | null
    orderState?: NullableStringFieldUpdateOperationsInput | string | null
    serverId?: NullableStringFieldUpdateOperationsInput | string | null
    seats?: NullableJsonNullValueInput | InputJsonValue
    sendTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosTableModeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    tableNo?: NullableStringFieldUpdateOperationsInput | string | null
    guestCount?: NullableIntFieldUpdateOperationsInput | number | null
    orderState?: NullableStringFieldUpdateOperationsInput | string | null
    serverId?: NullableStringFieldUpdateOperationsInput | string | null
    seats?: NullableJsonNullValueInput | InputJsonValue
    sendTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosTableOrderCreateInput = {
    id?: string
    tableId: string
    userId?: string | null
    organizationId?: string | null
    shopId?: string | null
    roomId?: string | null
    tableName: string
    seats?: NullableJsonNullValueInput | InputJsonValue
    orderStatus?: string | null
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PosTableOrderUncheckedCreateInput = {
    id?: string
    tableId: string
    userId?: string | null
    organizationId?: string | null
    shopId?: string | null
    roomId?: string | null
    tableName: string
    seats?: NullableJsonNullValueInput | InputJsonValue
    orderStatus?: string | null
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PosTableOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    tableName?: StringFieldUpdateOperationsInput | string
    seats?: NullableJsonNullValueInput | InputJsonValue
    orderStatus?: NullableStringFieldUpdateOperationsInput | string | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosTableOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    tableName?: StringFieldUpdateOperationsInput | string
    seats?: NullableJsonNullValueInput | InputJsonValue
    orderStatus?: NullableStringFieldUpdateOperationsInput | string | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosTableOrderCreateManyInput = {
    id?: string
    tableId: string
    userId?: string | null
    organizationId?: string | null
    shopId?: string | null
    roomId?: string | null
    tableName: string
    seats?: NullableJsonNullValueInput | InputJsonValue
    orderStatus?: string | null
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PosTableOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    tableName?: StringFieldUpdateOperationsInput | string
    seats?: NullableJsonNullValueInput | InputJsonValue
    orderStatus?: NullableStringFieldUpdateOperationsInput | string | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosTableOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    tableName?: StringFieldUpdateOperationsInput | string
    seats?: NullableJsonNullValueInput | InputJsonValue
    orderStatus?: NullableStringFieldUpdateOperationsInput | string | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PosSettingCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    organizationId?: SortOrder
    numberPadFirstValue?: SortOrder
    numberPadSecondValue?: SortOrder
    numberPadThirdValue?: SortOrder
    configureTipFirstPercentage?: SortOrder
    configureTipSecondPercentage?: SortOrder
    configureTipThirdPercentage?: SortOrder
    configureTipFourthPercentage?: SortOrder
    cfd?: SortOrder
    cfdSettings?: SortOrder
    tipShifts?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PosSettingAvgOrderByAggregateInput = {
    numberPadFirstValue?: SortOrder
    numberPadSecondValue?: SortOrder
    numberPadThirdValue?: SortOrder
    configureTipFirstPercentage?: SortOrder
    configureTipSecondPercentage?: SortOrder
    configureTipThirdPercentage?: SortOrder
    configureTipFourthPercentage?: SortOrder
  }

  export type PosSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    organizationId?: SortOrder
    numberPadFirstValue?: SortOrder
    numberPadSecondValue?: SortOrder
    numberPadThirdValue?: SortOrder
    configureTipFirstPercentage?: SortOrder
    configureTipSecondPercentage?: SortOrder
    configureTipThirdPercentage?: SortOrder
    configureTipFourthPercentage?: SortOrder
    cfd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PosSettingMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    organizationId?: SortOrder
    numberPadFirstValue?: SortOrder
    numberPadSecondValue?: SortOrder
    numberPadThirdValue?: SortOrder
    configureTipFirstPercentage?: SortOrder
    configureTipSecondPercentage?: SortOrder
    configureTipThirdPercentage?: SortOrder
    configureTipFourthPercentage?: SortOrder
    cfd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PosSettingSumOrderByAggregateInput = {
    numberPadFirstValue?: SortOrder
    numberPadSecondValue?: SortOrder
    numberPadThirdValue?: SortOrder
    configureTipFirstPercentage?: SortOrder
    configureTipSecondPercentage?: SortOrder
    configureTipThirdPercentage?: SortOrder
    configureTipFourthPercentage?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type PosTableCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    shopId?: SortOrder
    roomId?: SortOrder
    serverId?: SortOrder
    tableName?: SortOrder
    tableShape?: SortOrder
    tableLink?: SortOrder
    tableColor?: SortOrder
    tableDimension?: SortOrder
    seats?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PosTableMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    shopId?: SortOrder
    roomId?: SortOrder
    serverId?: SortOrder
    tableName?: SortOrder
    tableShape?: SortOrder
    tableLink?: SortOrder
    tableColor?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PosTableMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    shopId?: SortOrder
    roomId?: SortOrder
    serverId?: SortOrder
    tableName?: SortOrder
    tableShape?: SortOrder
    tableLink?: SortOrder
    tableColor?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type PosTableModeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
    organizationId?: SortOrder
    tableNo?: SortOrder
    guestCount?: SortOrder
    orderState?: SortOrder
    serverId?: SortOrder
    seats?: SortOrder
    sendTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PosTableModeAvgOrderByAggregateInput = {
    guestCount?: SortOrder
  }

  export type PosTableModeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
    organizationId?: SortOrder
    tableNo?: SortOrder
    guestCount?: SortOrder
    orderState?: SortOrder
    serverId?: SortOrder
    sendTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PosTableModeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
    organizationId?: SortOrder
    tableNo?: SortOrder
    guestCount?: SortOrder
    orderState?: SortOrder
    serverId?: SortOrder
    sendTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PosTableModeSumOrderByAggregateInput = {
    guestCount?: SortOrder
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

  export type PosTableOrderCountOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    shopId?: SortOrder
    roomId?: SortOrder
    tableName?: SortOrder
    seats?: SortOrder
    orderStatus?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PosTableOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    shopId?: SortOrder
    roomId?: SortOrder
    tableName?: SortOrder
    orderStatus?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PosTableOrderMinOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    shopId?: SortOrder
    roomId?: SortOrder
    tableName?: SortOrder
    orderStatus?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
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