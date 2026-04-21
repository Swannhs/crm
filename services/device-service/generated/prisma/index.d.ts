
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
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>
/**
 * Model HardwareProduct
 * 
 */
export type HardwareProduct = $Result.DefaultSelection<Prisma.$HardwareProductPayload>
/**
 * Model HardwareBundle
 * 
 */
export type HardwareBundle = $Result.DefaultSelection<Prisma.$HardwareBundlePayload>
/**
 * Model HardwareCategory
 * 
 */
export type HardwareCategory = $Result.DefaultSelection<Prisma.$HardwareCategoryPayload>
/**
 * Model SunmiConfig
 * 
 */
export type SunmiConfig = $Result.DefaultSelection<Prisma.$SunmiConfigPayload>
/**
 * Model UnifiConnection
 * 
 */
export type UnifiConnection = $Result.DefaultSelection<Prisma.$UnifiConnectionPayload>
/**
 * Model DeviceAssignment
 * 
 */
export type DeviceAssignment = $Result.DefaultSelection<Prisma.$DeviceAssignmentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Devices
 * const devices = await prisma.device.findMany()
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
   * // Fetch zero or more Devices
   * const devices = await prisma.device.findMany()
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
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hardwareProduct`: Exposes CRUD operations for the **HardwareProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HardwareProducts
    * const hardwareProducts = await prisma.hardwareProduct.findMany()
    * ```
    */
  get hardwareProduct(): Prisma.HardwareProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hardwareBundle`: Exposes CRUD operations for the **HardwareBundle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HardwareBundles
    * const hardwareBundles = await prisma.hardwareBundle.findMany()
    * ```
    */
  get hardwareBundle(): Prisma.HardwareBundleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hardwareCategory`: Exposes CRUD operations for the **HardwareCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HardwareCategories
    * const hardwareCategories = await prisma.hardwareCategory.findMany()
    * ```
    */
  get hardwareCategory(): Prisma.HardwareCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sunmiConfig`: Exposes CRUD operations for the **SunmiConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SunmiConfigs
    * const sunmiConfigs = await prisma.sunmiConfig.findMany()
    * ```
    */
  get sunmiConfig(): Prisma.SunmiConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unifiConnection`: Exposes CRUD operations for the **UnifiConnection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UnifiConnections
    * const unifiConnections = await prisma.unifiConnection.findMany()
    * ```
    */
  get unifiConnection(): Prisma.UnifiConnectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deviceAssignment`: Exposes CRUD operations for the **DeviceAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeviceAssignments
    * const deviceAssignments = await prisma.deviceAssignment.findMany()
    * ```
    */
  get deviceAssignment(): Prisma.DeviceAssignmentDelegate<ExtArgs, ClientOptions>;
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
    Device: 'Device',
    HardwareProduct: 'HardwareProduct',
    HardwareBundle: 'HardwareBundle',
    HardwareCategory: 'HardwareCategory',
    SunmiConfig: 'SunmiConfig',
    UnifiConnection: 'UnifiConnection',
    DeviceAssignment: 'DeviceAssignment'
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
      modelProps: "device" | "hardwareProduct" | "hardwareBundle" | "hardwareCategory" | "sunmiConfig" | "unifiConnection" | "deviceAssignment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      HardwareProduct: {
        payload: Prisma.$HardwareProductPayload<ExtArgs>
        fields: Prisma.HardwareProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HardwareProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HardwareProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareProductPayload>
          }
          findFirst: {
            args: Prisma.HardwareProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HardwareProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareProductPayload>
          }
          findMany: {
            args: Prisma.HardwareProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareProductPayload>[]
          }
          create: {
            args: Prisma.HardwareProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareProductPayload>
          }
          createMany: {
            args: Prisma.HardwareProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HardwareProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareProductPayload>[]
          }
          delete: {
            args: Prisma.HardwareProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareProductPayload>
          }
          update: {
            args: Prisma.HardwareProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareProductPayload>
          }
          deleteMany: {
            args: Prisma.HardwareProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HardwareProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HardwareProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareProductPayload>[]
          }
          upsert: {
            args: Prisma.HardwareProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareProductPayload>
          }
          aggregate: {
            args: Prisma.HardwareProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHardwareProduct>
          }
          groupBy: {
            args: Prisma.HardwareProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<HardwareProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.HardwareProductCountArgs<ExtArgs>
            result: $Utils.Optional<HardwareProductCountAggregateOutputType> | number
          }
        }
      }
      HardwareBundle: {
        payload: Prisma.$HardwareBundlePayload<ExtArgs>
        fields: Prisma.HardwareBundleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HardwareBundleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareBundlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HardwareBundleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareBundlePayload>
          }
          findFirst: {
            args: Prisma.HardwareBundleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareBundlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HardwareBundleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareBundlePayload>
          }
          findMany: {
            args: Prisma.HardwareBundleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareBundlePayload>[]
          }
          create: {
            args: Prisma.HardwareBundleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareBundlePayload>
          }
          createMany: {
            args: Prisma.HardwareBundleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HardwareBundleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareBundlePayload>[]
          }
          delete: {
            args: Prisma.HardwareBundleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareBundlePayload>
          }
          update: {
            args: Prisma.HardwareBundleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareBundlePayload>
          }
          deleteMany: {
            args: Prisma.HardwareBundleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HardwareBundleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HardwareBundleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareBundlePayload>[]
          }
          upsert: {
            args: Prisma.HardwareBundleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareBundlePayload>
          }
          aggregate: {
            args: Prisma.HardwareBundleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHardwareBundle>
          }
          groupBy: {
            args: Prisma.HardwareBundleGroupByArgs<ExtArgs>
            result: $Utils.Optional<HardwareBundleGroupByOutputType>[]
          }
          count: {
            args: Prisma.HardwareBundleCountArgs<ExtArgs>
            result: $Utils.Optional<HardwareBundleCountAggregateOutputType> | number
          }
        }
      }
      HardwareCategory: {
        payload: Prisma.$HardwareCategoryPayload<ExtArgs>
        fields: Prisma.HardwareCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HardwareCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HardwareCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareCategoryPayload>
          }
          findFirst: {
            args: Prisma.HardwareCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HardwareCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareCategoryPayload>
          }
          findMany: {
            args: Prisma.HardwareCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareCategoryPayload>[]
          }
          create: {
            args: Prisma.HardwareCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareCategoryPayload>
          }
          createMany: {
            args: Prisma.HardwareCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HardwareCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareCategoryPayload>[]
          }
          delete: {
            args: Prisma.HardwareCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareCategoryPayload>
          }
          update: {
            args: Prisma.HardwareCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareCategoryPayload>
          }
          deleteMany: {
            args: Prisma.HardwareCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HardwareCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HardwareCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareCategoryPayload>[]
          }
          upsert: {
            args: Prisma.HardwareCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HardwareCategoryPayload>
          }
          aggregate: {
            args: Prisma.HardwareCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHardwareCategory>
          }
          groupBy: {
            args: Prisma.HardwareCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<HardwareCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.HardwareCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<HardwareCategoryCountAggregateOutputType> | number
          }
        }
      }
      SunmiConfig: {
        payload: Prisma.$SunmiConfigPayload<ExtArgs>
        fields: Prisma.SunmiConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SunmiConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SunmiConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SunmiConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SunmiConfigPayload>
          }
          findFirst: {
            args: Prisma.SunmiConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SunmiConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SunmiConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SunmiConfigPayload>
          }
          findMany: {
            args: Prisma.SunmiConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SunmiConfigPayload>[]
          }
          create: {
            args: Prisma.SunmiConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SunmiConfigPayload>
          }
          createMany: {
            args: Prisma.SunmiConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SunmiConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SunmiConfigPayload>[]
          }
          delete: {
            args: Prisma.SunmiConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SunmiConfigPayload>
          }
          update: {
            args: Prisma.SunmiConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SunmiConfigPayload>
          }
          deleteMany: {
            args: Prisma.SunmiConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SunmiConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SunmiConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SunmiConfigPayload>[]
          }
          upsert: {
            args: Prisma.SunmiConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SunmiConfigPayload>
          }
          aggregate: {
            args: Prisma.SunmiConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSunmiConfig>
          }
          groupBy: {
            args: Prisma.SunmiConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<SunmiConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.SunmiConfigCountArgs<ExtArgs>
            result: $Utils.Optional<SunmiConfigCountAggregateOutputType> | number
          }
        }
      }
      UnifiConnection: {
        payload: Prisma.$UnifiConnectionPayload<ExtArgs>
        fields: Prisma.UnifiConnectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnifiConnectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiConnectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnifiConnectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiConnectionPayload>
          }
          findFirst: {
            args: Prisma.UnifiConnectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiConnectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnifiConnectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiConnectionPayload>
          }
          findMany: {
            args: Prisma.UnifiConnectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiConnectionPayload>[]
          }
          create: {
            args: Prisma.UnifiConnectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiConnectionPayload>
          }
          createMany: {
            args: Prisma.UnifiConnectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnifiConnectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiConnectionPayload>[]
          }
          delete: {
            args: Prisma.UnifiConnectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiConnectionPayload>
          }
          update: {
            args: Prisma.UnifiConnectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiConnectionPayload>
          }
          deleteMany: {
            args: Prisma.UnifiConnectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnifiConnectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnifiConnectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiConnectionPayload>[]
          }
          upsert: {
            args: Prisma.UnifiConnectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnifiConnectionPayload>
          }
          aggregate: {
            args: Prisma.UnifiConnectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnifiConnection>
          }
          groupBy: {
            args: Prisma.UnifiConnectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnifiConnectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnifiConnectionCountArgs<ExtArgs>
            result: $Utils.Optional<UnifiConnectionCountAggregateOutputType> | number
          }
        }
      }
      DeviceAssignment: {
        payload: Prisma.$DeviceAssignmentPayload<ExtArgs>
        fields: Prisma.DeviceAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceAssignmentPayload>
          }
          findFirst: {
            args: Prisma.DeviceAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceAssignmentPayload>
          }
          findMany: {
            args: Prisma.DeviceAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceAssignmentPayload>[]
          }
          create: {
            args: Prisma.DeviceAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceAssignmentPayload>
          }
          createMany: {
            args: Prisma.DeviceAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceAssignmentPayload>[]
          }
          delete: {
            args: Prisma.DeviceAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceAssignmentPayload>
          }
          update: {
            args: Prisma.DeviceAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.DeviceAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.DeviceAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceAssignmentPayload>
          }
          aggregate: {
            args: Prisma.DeviceAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeviceAssignment>
          }
          groupBy: {
            args: Prisma.DeviceAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceAssignmentCountAggregateOutputType> | number
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
    device?: DeviceOmit
    hardwareProduct?: HardwareProductOmit
    hardwareBundle?: HardwareBundleOmit
    hardwareCategory?: HardwareCategoryOmit
    sunmiConfig?: SunmiConfigOmit
    unifiConnection?: UnifiConnectionOmit
    deviceAssignment?: DeviceAssignmentOmit
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
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    name: string | null
    type: string | null
    status: string | null
    locationId: string | null
    lastSeen: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    name: string | null
    type: string | null
    status: string | null
    locationId: string | null
    lastSeen: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    name: number
    type: number
    status: number
    locationId: number
    metadata: number
    lastSeen: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeviceMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    name?: true
    type?: true
    status?: true
    locationId?: true
    lastSeen?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    name?: true
    type?: true
    status?: true
    locationId?: true
    lastSeen?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    name?: true
    type?: true
    status?: true
    locationId?: true
    metadata?: true
    lastSeen?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: string
    userId: string
    organizationId: string | null
    name: string
    type: string | null
    status: string | null
    locationId: string | null
    metadata: JsonValue | null
    lastSeen: Date | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    locationId?: boolean
    metadata?: boolean
    lastSeen?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    locationId?: boolean
    metadata?: boolean
    lastSeen?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    locationId?: boolean
    metadata?: boolean
    lastSeen?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    locationId?: boolean
    metadata?: boolean
    lastSeen?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "name" | "type" | "status" | "locationId" | "metadata" | "lastSeen" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["device"]>

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organizationId: string | null
      name: string
      type: string | null
      status: string | null
      locationId: string | null
      metadata: Prisma.JsonValue | null
      lastSeen: Date | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DeviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices and returns the data updated in the database.
     * @param {DeviceUpdateManyAndReturnArgs} args - Arguments to update many Devices.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.updateManyAndReturn({
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
    updateManyAndReturn<T extends DeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
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
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Device model
   */
  interface DeviceFieldRefs {
    readonly id: FieldRef<"Device", 'String'>
    readonly userId: FieldRef<"Device", 'String'>
    readonly organizationId: FieldRef<"Device", 'String'>
    readonly name: FieldRef<"Device", 'String'>
    readonly type: FieldRef<"Device", 'String'>
    readonly status: FieldRef<"Device", 'String'>
    readonly locationId: FieldRef<"Device", 'String'>
    readonly metadata: FieldRef<"Device", 'Json'>
    readonly lastSeen: FieldRef<"Device", 'DateTime'>
    readonly isActive: FieldRef<"Device", 'Boolean'>
    readonly createdAt: FieldRef<"Device", 'DateTime'>
    readonly updatedAt: FieldRef<"Device", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device createManyAndReturn
   */
  export type DeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device updateManyAndReturn
   */
  export type DeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to delete.
     */
    limit?: number
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
  }


  /**
   * Model HardwareProduct
   */

  export type AggregateHardwareProduct = {
    _count: HardwareProductCountAggregateOutputType | null
    _avg: HardwareProductAvgAggregateOutputType | null
    _sum: HardwareProductSumAggregateOutputType | null
    _min: HardwareProductMinAggregateOutputType | null
    _max: HardwareProductMaxAggregateOutputType | null
  }

  export type HardwareProductAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type HardwareProductSumAggregateOutputType = {
    price: Decimal | null
  }

  export type HardwareProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    sku: string | null
    price: Decimal | null
    categoryId: string | null
    brand: string | null
    imageUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HardwareProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    sku: string | null
    price: Decimal | null
    categoryId: string | null
    brand: string | null
    imageUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HardwareProductCountAggregateOutputType = {
    id: number
    name: number
    description: number
    sku: number
    price: number
    categoryId: number
    brand: number
    imageUrl: number
    specifications: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HardwareProductAvgAggregateInputType = {
    price?: true
  }

  export type HardwareProductSumAggregateInputType = {
    price?: true
  }

  export type HardwareProductMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    sku?: true
    price?: true
    categoryId?: true
    brand?: true
    imageUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HardwareProductMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    sku?: true
    price?: true
    categoryId?: true
    brand?: true
    imageUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HardwareProductCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    sku?: true
    price?: true
    categoryId?: true
    brand?: true
    imageUrl?: true
    specifications?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HardwareProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HardwareProduct to aggregate.
     */
    where?: HardwareProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HardwareProducts to fetch.
     */
    orderBy?: HardwareProductOrderByWithRelationInput | HardwareProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HardwareProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HardwareProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HardwareProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HardwareProducts
    **/
    _count?: true | HardwareProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HardwareProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HardwareProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HardwareProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HardwareProductMaxAggregateInputType
  }

  export type GetHardwareProductAggregateType<T extends HardwareProductAggregateArgs> = {
        [P in keyof T & keyof AggregateHardwareProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHardwareProduct[P]>
      : GetScalarType<T[P], AggregateHardwareProduct[P]>
  }




  export type HardwareProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HardwareProductWhereInput
    orderBy?: HardwareProductOrderByWithAggregationInput | HardwareProductOrderByWithAggregationInput[]
    by: HardwareProductScalarFieldEnum[] | HardwareProductScalarFieldEnum
    having?: HardwareProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HardwareProductCountAggregateInputType | true
    _avg?: HardwareProductAvgAggregateInputType
    _sum?: HardwareProductSumAggregateInputType
    _min?: HardwareProductMinAggregateInputType
    _max?: HardwareProductMaxAggregateInputType
  }

  export type HardwareProductGroupByOutputType = {
    id: string
    name: string
    description: string | null
    sku: string
    price: Decimal
    categoryId: string | null
    brand: string | null
    imageUrl: string | null
    specifications: JsonValue | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: HardwareProductCountAggregateOutputType | null
    _avg: HardwareProductAvgAggregateOutputType | null
    _sum: HardwareProductSumAggregateOutputType | null
    _min: HardwareProductMinAggregateOutputType | null
    _max: HardwareProductMaxAggregateOutputType | null
  }

  type GetHardwareProductGroupByPayload<T extends HardwareProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HardwareProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HardwareProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HardwareProductGroupByOutputType[P]>
            : GetScalarType<T[P], HardwareProductGroupByOutputType[P]>
        }
      >
    >


  export type HardwareProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    sku?: boolean
    price?: boolean
    categoryId?: boolean
    brand?: boolean
    imageUrl?: boolean
    specifications?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hardwareProduct"]>

  export type HardwareProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    sku?: boolean
    price?: boolean
    categoryId?: boolean
    brand?: boolean
    imageUrl?: boolean
    specifications?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hardwareProduct"]>

  export type HardwareProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    sku?: boolean
    price?: boolean
    categoryId?: boolean
    brand?: boolean
    imageUrl?: boolean
    specifications?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hardwareProduct"]>

  export type HardwareProductSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    sku?: boolean
    price?: boolean
    categoryId?: boolean
    brand?: boolean
    imageUrl?: boolean
    specifications?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HardwareProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "sku" | "price" | "categoryId" | "brand" | "imageUrl" | "specifications" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["hardwareProduct"]>

  export type $HardwareProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HardwareProduct"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      sku: string
      price: Prisma.Decimal
      categoryId: string | null
      brand: string | null
      imageUrl: string | null
      specifications: Prisma.JsonValue | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["hardwareProduct"]>
    composites: {}
  }

  type HardwareProductGetPayload<S extends boolean | null | undefined | HardwareProductDefaultArgs> = $Result.GetResult<Prisma.$HardwareProductPayload, S>

  type HardwareProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HardwareProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HardwareProductCountAggregateInputType | true
    }

  export interface HardwareProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HardwareProduct'], meta: { name: 'HardwareProduct' } }
    /**
     * Find zero or one HardwareProduct that matches the filter.
     * @param {HardwareProductFindUniqueArgs} args - Arguments to find a HardwareProduct
     * @example
     * // Get one HardwareProduct
     * const hardwareProduct = await prisma.hardwareProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HardwareProductFindUniqueArgs>(args: SelectSubset<T, HardwareProductFindUniqueArgs<ExtArgs>>): Prisma__HardwareProductClient<$Result.GetResult<Prisma.$HardwareProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HardwareProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HardwareProductFindUniqueOrThrowArgs} args - Arguments to find a HardwareProduct
     * @example
     * // Get one HardwareProduct
     * const hardwareProduct = await prisma.hardwareProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HardwareProductFindUniqueOrThrowArgs>(args: SelectSubset<T, HardwareProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HardwareProductClient<$Result.GetResult<Prisma.$HardwareProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HardwareProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HardwareProductFindFirstArgs} args - Arguments to find a HardwareProduct
     * @example
     * // Get one HardwareProduct
     * const hardwareProduct = await prisma.hardwareProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HardwareProductFindFirstArgs>(args?: SelectSubset<T, HardwareProductFindFirstArgs<ExtArgs>>): Prisma__HardwareProductClient<$Result.GetResult<Prisma.$HardwareProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HardwareProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HardwareProductFindFirstOrThrowArgs} args - Arguments to find a HardwareProduct
     * @example
     * // Get one HardwareProduct
     * const hardwareProduct = await prisma.hardwareProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HardwareProductFindFirstOrThrowArgs>(args?: SelectSubset<T, HardwareProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__HardwareProductClient<$Result.GetResult<Prisma.$HardwareProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HardwareProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HardwareProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HardwareProducts
     * const hardwareProducts = await prisma.hardwareProduct.findMany()
     * 
     * // Get first 10 HardwareProducts
     * const hardwareProducts = await prisma.hardwareProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hardwareProductWithIdOnly = await prisma.hardwareProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HardwareProductFindManyArgs>(args?: SelectSubset<T, HardwareProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HardwareProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HardwareProduct.
     * @param {HardwareProductCreateArgs} args - Arguments to create a HardwareProduct.
     * @example
     * // Create one HardwareProduct
     * const HardwareProduct = await prisma.hardwareProduct.create({
     *   data: {
     *     // ... data to create a HardwareProduct
     *   }
     * })
     * 
     */
    create<T extends HardwareProductCreateArgs>(args: SelectSubset<T, HardwareProductCreateArgs<ExtArgs>>): Prisma__HardwareProductClient<$Result.GetResult<Prisma.$HardwareProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HardwareProducts.
     * @param {HardwareProductCreateManyArgs} args - Arguments to create many HardwareProducts.
     * @example
     * // Create many HardwareProducts
     * const hardwareProduct = await prisma.hardwareProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HardwareProductCreateManyArgs>(args?: SelectSubset<T, HardwareProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HardwareProducts and returns the data saved in the database.
     * @param {HardwareProductCreateManyAndReturnArgs} args - Arguments to create many HardwareProducts.
     * @example
     * // Create many HardwareProducts
     * const hardwareProduct = await prisma.hardwareProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HardwareProducts and only return the `id`
     * const hardwareProductWithIdOnly = await prisma.hardwareProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HardwareProductCreateManyAndReturnArgs>(args?: SelectSubset<T, HardwareProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HardwareProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HardwareProduct.
     * @param {HardwareProductDeleteArgs} args - Arguments to delete one HardwareProduct.
     * @example
     * // Delete one HardwareProduct
     * const HardwareProduct = await prisma.hardwareProduct.delete({
     *   where: {
     *     // ... filter to delete one HardwareProduct
     *   }
     * })
     * 
     */
    delete<T extends HardwareProductDeleteArgs>(args: SelectSubset<T, HardwareProductDeleteArgs<ExtArgs>>): Prisma__HardwareProductClient<$Result.GetResult<Prisma.$HardwareProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HardwareProduct.
     * @param {HardwareProductUpdateArgs} args - Arguments to update one HardwareProduct.
     * @example
     * // Update one HardwareProduct
     * const hardwareProduct = await prisma.hardwareProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HardwareProductUpdateArgs>(args: SelectSubset<T, HardwareProductUpdateArgs<ExtArgs>>): Prisma__HardwareProductClient<$Result.GetResult<Prisma.$HardwareProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HardwareProducts.
     * @param {HardwareProductDeleteManyArgs} args - Arguments to filter HardwareProducts to delete.
     * @example
     * // Delete a few HardwareProducts
     * const { count } = await prisma.hardwareProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HardwareProductDeleteManyArgs>(args?: SelectSubset<T, HardwareProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HardwareProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HardwareProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HardwareProducts
     * const hardwareProduct = await prisma.hardwareProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HardwareProductUpdateManyArgs>(args: SelectSubset<T, HardwareProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HardwareProducts and returns the data updated in the database.
     * @param {HardwareProductUpdateManyAndReturnArgs} args - Arguments to update many HardwareProducts.
     * @example
     * // Update many HardwareProducts
     * const hardwareProduct = await prisma.hardwareProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HardwareProducts and only return the `id`
     * const hardwareProductWithIdOnly = await prisma.hardwareProduct.updateManyAndReturn({
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
    updateManyAndReturn<T extends HardwareProductUpdateManyAndReturnArgs>(args: SelectSubset<T, HardwareProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HardwareProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HardwareProduct.
     * @param {HardwareProductUpsertArgs} args - Arguments to update or create a HardwareProduct.
     * @example
     * // Update or create a HardwareProduct
     * const hardwareProduct = await prisma.hardwareProduct.upsert({
     *   create: {
     *     // ... data to create a HardwareProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HardwareProduct we want to update
     *   }
     * })
     */
    upsert<T extends HardwareProductUpsertArgs>(args: SelectSubset<T, HardwareProductUpsertArgs<ExtArgs>>): Prisma__HardwareProductClient<$Result.GetResult<Prisma.$HardwareProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HardwareProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HardwareProductCountArgs} args - Arguments to filter HardwareProducts to count.
     * @example
     * // Count the number of HardwareProducts
     * const count = await prisma.hardwareProduct.count({
     *   where: {
     *     // ... the filter for the HardwareProducts we want to count
     *   }
     * })
    **/
    count<T extends HardwareProductCountArgs>(
      args?: Subset<T, HardwareProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HardwareProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HardwareProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HardwareProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HardwareProductAggregateArgs>(args: Subset<T, HardwareProductAggregateArgs>): Prisma.PrismaPromise<GetHardwareProductAggregateType<T>>

    /**
     * Group by HardwareProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HardwareProductGroupByArgs} args - Group by arguments.
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
      T extends HardwareProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HardwareProductGroupByArgs['orderBy'] }
        : { orderBy?: HardwareProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HardwareProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHardwareProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HardwareProduct model
   */
  readonly fields: HardwareProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HardwareProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HardwareProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the HardwareProduct model
   */
  interface HardwareProductFieldRefs {
    readonly id: FieldRef<"HardwareProduct", 'String'>
    readonly name: FieldRef<"HardwareProduct", 'String'>
    readonly description: FieldRef<"HardwareProduct", 'String'>
    readonly sku: FieldRef<"HardwareProduct", 'String'>
    readonly price: FieldRef<"HardwareProduct", 'Decimal'>
    readonly categoryId: FieldRef<"HardwareProduct", 'String'>
    readonly brand: FieldRef<"HardwareProduct", 'String'>
    readonly imageUrl: FieldRef<"HardwareProduct", 'String'>
    readonly specifications: FieldRef<"HardwareProduct", 'Json'>
    readonly isActive: FieldRef<"HardwareProduct", 'Boolean'>
    readonly createdAt: FieldRef<"HardwareProduct", 'DateTime'>
    readonly updatedAt: FieldRef<"HardwareProduct", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HardwareProduct findUnique
   */
  export type HardwareProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareProduct
     */
    select?: HardwareProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareProduct
     */
    omit?: HardwareProductOmit<ExtArgs> | null
    /**
     * Filter, which HardwareProduct to fetch.
     */
    where: HardwareProductWhereUniqueInput
  }

  /**
   * HardwareProduct findUniqueOrThrow
   */
  export type HardwareProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareProduct
     */
    select?: HardwareProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareProduct
     */
    omit?: HardwareProductOmit<ExtArgs> | null
    /**
     * Filter, which HardwareProduct to fetch.
     */
    where: HardwareProductWhereUniqueInput
  }

  /**
   * HardwareProduct findFirst
   */
  export type HardwareProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareProduct
     */
    select?: HardwareProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareProduct
     */
    omit?: HardwareProductOmit<ExtArgs> | null
    /**
     * Filter, which HardwareProduct to fetch.
     */
    where?: HardwareProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HardwareProducts to fetch.
     */
    orderBy?: HardwareProductOrderByWithRelationInput | HardwareProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HardwareProducts.
     */
    cursor?: HardwareProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HardwareProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HardwareProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HardwareProducts.
     */
    distinct?: HardwareProductScalarFieldEnum | HardwareProductScalarFieldEnum[]
  }

  /**
   * HardwareProduct findFirstOrThrow
   */
  export type HardwareProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareProduct
     */
    select?: HardwareProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareProduct
     */
    omit?: HardwareProductOmit<ExtArgs> | null
    /**
     * Filter, which HardwareProduct to fetch.
     */
    where?: HardwareProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HardwareProducts to fetch.
     */
    orderBy?: HardwareProductOrderByWithRelationInput | HardwareProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HardwareProducts.
     */
    cursor?: HardwareProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HardwareProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HardwareProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HardwareProducts.
     */
    distinct?: HardwareProductScalarFieldEnum | HardwareProductScalarFieldEnum[]
  }

  /**
   * HardwareProduct findMany
   */
  export type HardwareProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareProduct
     */
    select?: HardwareProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareProduct
     */
    omit?: HardwareProductOmit<ExtArgs> | null
    /**
     * Filter, which HardwareProducts to fetch.
     */
    where?: HardwareProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HardwareProducts to fetch.
     */
    orderBy?: HardwareProductOrderByWithRelationInput | HardwareProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HardwareProducts.
     */
    cursor?: HardwareProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HardwareProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HardwareProducts.
     */
    skip?: number
    distinct?: HardwareProductScalarFieldEnum | HardwareProductScalarFieldEnum[]
  }

  /**
   * HardwareProduct create
   */
  export type HardwareProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareProduct
     */
    select?: HardwareProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareProduct
     */
    omit?: HardwareProductOmit<ExtArgs> | null
    /**
     * The data needed to create a HardwareProduct.
     */
    data: XOR<HardwareProductCreateInput, HardwareProductUncheckedCreateInput>
  }

  /**
   * HardwareProduct createMany
   */
  export type HardwareProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HardwareProducts.
     */
    data: HardwareProductCreateManyInput | HardwareProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HardwareProduct createManyAndReturn
   */
  export type HardwareProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareProduct
     */
    select?: HardwareProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareProduct
     */
    omit?: HardwareProductOmit<ExtArgs> | null
    /**
     * The data used to create many HardwareProducts.
     */
    data: HardwareProductCreateManyInput | HardwareProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HardwareProduct update
   */
  export type HardwareProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareProduct
     */
    select?: HardwareProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareProduct
     */
    omit?: HardwareProductOmit<ExtArgs> | null
    /**
     * The data needed to update a HardwareProduct.
     */
    data: XOR<HardwareProductUpdateInput, HardwareProductUncheckedUpdateInput>
    /**
     * Choose, which HardwareProduct to update.
     */
    where: HardwareProductWhereUniqueInput
  }

  /**
   * HardwareProduct updateMany
   */
  export type HardwareProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HardwareProducts.
     */
    data: XOR<HardwareProductUpdateManyMutationInput, HardwareProductUncheckedUpdateManyInput>
    /**
     * Filter which HardwareProducts to update
     */
    where?: HardwareProductWhereInput
    /**
     * Limit how many HardwareProducts to update.
     */
    limit?: number
  }

  /**
   * HardwareProduct updateManyAndReturn
   */
  export type HardwareProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareProduct
     */
    select?: HardwareProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareProduct
     */
    omit?: HardwareProductOmit<ExtArgs> | null
    /**
     * The data used to update HardwareProducts.
     */
    data: XOR<HardwareProductUpdateManyMutationInput, HardwareProductUncheckedUpdateManyInput>
    /**
     * Filter which HardwareProducts to update
     */
    where?: HardwareProductWhereInput
    /**
     * Limit how many HardwareProducts to update.
     */
    limit?: number
  }

  /**
   * HardwareProduct upsert
   */
  export type HardwareProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareProduct
     */
    select?: HardwareProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareProduct
     */
    omit?: HardwareProductOmit<ExtArgs> | null
    /**
     * The filter to search for the HardwareProduct to update in case it exists.
     */
    where: HardwareProductWhereUniqueInput
    /**
     * In case the HardwareProduct found by the `where` argument doesn't exist, create a new HardwareProduct with this data.
     */
    create: XOR<HardwareProductCreateInput, HardwareProductUncheckedCreateInput>
    /**
     * In case the HardwareProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HardwareProductUpdateInput, HardwareProductUncheckedUpdateInput>
  }

  /**
   * HardwareProduct delete
   */
  export type HardwareProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareProduct
     */
    select?: HardwareProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareProduct
     */
    omit?: HardwareProductOmit<ExtArgs> | null
    /**
     * Filter which HardwareProduct to delete.
     */
    where: HardwareProductWhereUniqueInput
  }

  /**
   * HardwareProduct deleteMany
   */
  export type HardwareProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HardwareProducts to delete
     */
    where?: HardwareProductWhereInput
    /**
     * Limit how many HardwareProducts to delete.
     */
    limit?: number
  }

  /**
   * HardwareProduct without action
   */
  export type HardwareProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareProduct
     */
    select?: HardwareProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareProduct
     */
    omit?: HardwareProductOmit<ExtArgs> | null
  }


  /**
   * Model HardwareBundle
   */

  export type AggregateHardwareBundle = {
    _count: HardwareBundleCountAggregateOutputType | null
    _avg: HardwareBundleAvgAggregateOutputType | null
    _sum: HardwareBundleSumAggregateOutputType | null
    _min: HardwareBundleMinAggregateOutputType | null
    _max: HardwareBundleMaxAggregateOutputType | null
  }

  export type HardwareBundleAvgAggregateOutputType = {
    price: Decimal | null
    discount: Decimal | null
  }

  export type HardwareBundleSumAggregateOutputType = {
    price: Decimal | null
    discount: Decimal | null
  }

  export type HardwareBundleMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    sku: string | null
    price: Decimal | null
    imageUrl: string | null
    discount: Decimal | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HardwareBundleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    sku: string | null
    price: Decimal | null
    imageUrl: string | null
    discount: Decimal | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HardwareBundleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    sku: number
    price: number
    productIds: number
    imageUrl: number
    discount: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HardwareBundleAvgAggregateInputType = {
    price?: true
    discount?: true
  }

  export type HardwareBundleSumAggregateInputType = {
    price?: true
    discount?: true
  }

  export type HardwareBundleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    sku?: true
    price?: true
    imageUrl?: true
    discount?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HardwareBundleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    sku?: true
    price?: true
    imageUrl?: true
    discount?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HardwareBundleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    sku?: true
    price?: true
    productIds?: true
    imageUrl?: true
    discount?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HardwareBundleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HardwareBundle to aggregate.
     */
    where?: HardwareBundleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HardwareBundles to fetch.
     */
    orderBy?: HardwareBundleOrderByWithRelationInput | HardwareBundleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HardwareBundleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HardwareBundles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HardwareBundles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HardwareBundles
    **/
    _count?: true | HardwareBundleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HardwareBundleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HardwareBundleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HardwareBundleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HardwareBundleMaxAggregateInputType
  }

  export type GetHardwareBundleAggregateType<T extends HardwareBundleAggregateArgs> = {
        [P in keyof T & keyof AggregateHardwareBundle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHardwareBundle[P]>
      : GetScalarType<T[P], AggregateHardwareBundle[P]>
  }




  export type HardwareBundleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HardwareBundleWhereInput
    orderBy?: HardwareBundleOrderByWithAggregationInput | HardwareBundleOrderByWithAggregationInput[]
    by: HardwareBundleScalarFieldEnum[] | HardwareBundleScalarFieldEnum
    having?: HardwareBundleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HardwareBundleCountAggregateInputType | true
    _avg?: HardwareBundleAvgAggregateInputType
    _sum?: HardwareBundleSumAggregateInputType
    _min?: HardwareBundleMinAggregateInputType
    _max?: HardwareBundleMaxAggregateInputType
  }

  export type HardwareBundleGroupByOutputType = {
    id: string
    name: string
    description: string | null
    sku: string
    price: Decimal
    productIds: string[]
    imageUrl: string | null
    discount: Decimal | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: HardwareBundleCountAggregateOutputType | null
    _avg: HardwareBundleAvgAggregateOutputType | null
    _sum: HardwareBundleSumAggregateOutputType | null
    _min: HardwareBundleMinAggregateOutputType | null
    _max: HardwareBundleMaxAggregateOutputType | null
  }

  type GetHardwareBundleGroupByPayload<T extends HardwareBundleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HardwareBundleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HardwareBundleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HardwareBundleGroupByOutputType[P]>
            : GetScalarType<T[P], HardwareBundleGroupByOutputType[P]>
        }
      >
    >


  export type HardwareBundleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    sku?: boolean
    price?: boolean
    productIds?: boolean
    imageUrl?: boolean
    discount?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hardwareBundle"]>

  export type HardwareBundleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    sku?: boolean
    price?: boolean
    productIds?: boolean
    imageUrl?: boolean
    discount?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hardwareBundle"]>

  export type HardwareBundleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    sku?: boolean
    price?: boolean
    productIds?: boolean
    imageUrl?: boolean
    discount?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hardwareBundle"]>

  export type HardwareBundleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    sku?: boolean
    price?: boolean
    productIds?: boolean
    imageUrl?: boolean
    discount?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HardwareBundleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "sku" | "price" | "productIds" | "imageUrl" | "discount" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["hardwareBundle"]>

  export type $HardwareBundlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HardwareBundle"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      sku: string
      price: Prisma.Decimal
      productIds: string[]
      imageUrl: string | null
      discount: Prisma.Decimal | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["hardwareBundle"]>
    composites: {}
  }

  type HardwareBundleGetPayload<S extends boolean | null | undefined | HardwareBundleDefaultArgs> = $Result.GetResult<Prisma.$HardwareBundlePayload, S>

  type HardwareBundleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HardwareBundleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HardwareBundleCountAggregateInputType | true
    }

  export interface HardwareBundleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HardwareBundle'], meta: { name: 'HardwareBundle' } }
    /**
     * Find zero or one HardwareBundle that matches the filter.
     * @param {HardwareBundleFindUniqueArgs} args - Arguments to find a HardwareBundle
     * @example
     * // Get one HardwareBundle
     * const hardwareBundle = await prisma.hardwareBundle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HardwareBundleFindUniqueArgs>(args: SelectSubset<T, HardwareBundleFindUniqueArgs<ExtArgs>>): Prisma__HardwareBundleClient<$Result.GetResult<Prisma.$HardwareBundlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HardwareBundle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HardwareBundleFindUniqueOrThrowArgs} args - Arguments to find a HardwareBundle
     * @example
     * // Get one HardwareBundle
     * const hardwareBundle = await prisma.hardwareBundle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HardwareBundleFindUniqueOrThrowArgs>(args: SelectSubset<T, HardwareBundleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HardwareBundleClient<$Result.GetResult<Prisma.$HardwareBundlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HardwareBundle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HardwareBundleFindFirstArgs} args - Arguments to find a HardwareBundle
     * @example
     * // Get one HardwareBundle
     * const hardwareBundle = await prisma.hardwareBundle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HardwareBundleFindFirstArgs>(args?: SelectSubset<T, HardwareBundleFindFirstArgs<ExtArgs>>): Prisma__HardwareBundleClient<$Result.GetResult<Prisma.$HardwareBundlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HardwareBundle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HardwareBundleFindFirstOrThrowArgs} args - Arguments to find a HardwareBundle
     * @example
     * // Get one HardwareBundle
     * const hardwareBundle = await prisma.hardwareBundle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HardwareBundleFindFirstOrThrowArgs>(args?: SelectSubset<T, HardwareBundleFindFirstOrThrowArgs<ExtArgs>>): Prisma__HardwareBundleClient<$Result.GetResult<Prisma.$HardwareBundlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HardwareBundles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HardwareBundleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HardwareBundles
     * const hardwareBundles = await prisma.hardwareBundle.findMany()
     * 
     * // Get first 10 HardwareBundles
     * const hardwareBundles = await prisma.hardwareBundle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hardwareBundleWithIdOnly = await prisma.hardwareBundle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HardwareBundleFindManyArgs>(args?: SelectSubset<T, HardwareBundleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HardwareBundlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HardwareBundle.
     * @param {HardwareBundleCreateArgs} args - Arguments to create a HardwareBundle.
     * @example
     * // Create one HardwareBundle
     * const HardwareBundle = await prisma.hardwareBundle.create({
     *   data: {
     *     // ... data to create a HardwareBundle
     *   }
     * })
     * 
     */
    create<T extends HardwareBundleCreateArgs>(args: SelectSubset<T, HardwareBundleCreateArgs<ExtArgs>>): Prisma__HardwareBundleClient<$Result.GetResult<Prisma.$HardwareBundlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HardwareBundles.
     * @param {HardwareBundleCreateManyArgs} args - Arguments to create many HardwareBundles.
     * @example
     * // Create many HardwareBundles
     * const hardwareBundle = await prisma.hardwareBundle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HardwareBundleCreateManyArgs>(args?: SelectSubset<T, HardwareBundleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HardwareBundles and returns the data saved in the database.
     * @param {HardwareBundleCreateManyAndReturnArgs} args - Arguments to create many HardwareBundles.
     * @example
     * // Create many HardwareBundles
     * const hardwareBundle = await prisma.hardwareBundle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HardwareBundles and only return the `id`
     * const hardwareBundleWithIdOnly = await prisma.hardwareBundle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HardwareBundleCreateManyAndReturnArgs>(args?: SelectSubset<T, HardwareBundleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HardwareBundlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HardwareBundle.
     * @param {HardwareBundleDeleteArgs} args - Arguments to delete one HardwareBundle.
     * @example
     * // Delete one HardwareBundle
     * const HardwareBundle = await prisma.hardwareBundle.delete({
     *   where: {
     *     // ... filter to delete one HardwareBundle
     *   }
     * })
     * 
     */
    delete<T extends HardwareBundleDeleteArgs>(args: SelectSubset<T, HardwareBundleDeleteArgs<ExtArgs>>): Prisma__HardwareBundleClient<$Result.GetResult<Prisma.$HardwareBundlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HardwareBundle.
     * @param {HardwareBundleUpdateArgs} args - Arguments to update one HardwareBundle.
     * @example
     * // Update one HardwareBundle
     * const hardwareBundle = await prisma.hardwareBundle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HardwareBundleUpdateArgs>(args: SelectSubset<T, HardwareBundleUpdateArgs<ExtArgs>>): Prisma__HardwareBundleClient<$Result.GetResult<Prisma.$HardwareBundlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HardwareBundles.
     * @param {HardwareBundleDeleteManyArgs} args - Arguments to filter HardwareBundles to delete.
     * @example
     * // Delete a few HardwareBundles
     * const { count } = await prisma.hardwareBundle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HardwareBundleDeleteManyArgs>(args?: SelectSubset<T, HardwareBundleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HardwareBundles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HardwareBundleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HardwareBundles
     * const hardwareBundle = await prisma.hardwareBundle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HardwareBundleUpdateManyArgs>(args: SelectSubset<T, HardwareBundleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HardwareBundles and returns the data updated in the database.
     * @param {HardwareBundleUpdateManyAndReturnArgs} args - Arguments to update many HardwareBundles.
     * @example
     * // Update many HardwareBundles
     * const hardwareBundle = await prisma.hardwareBundle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HardwareBundles and only return the `id`
     * const hardwareBundleWithIdOnly = await prisma.hardwareBundle.updateManyAndReturn({
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
    updateManyAndReturn<T extends HardwareBundleUpdateManyAndReturnArgs>(args: SelectSubset<T, HardwareBundleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HardwareBundlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HardwareBundle.
     * @param {HardwareBundleUpsertArgs} args - Arguments to update or create a HardwareBundle.
     * @example
     * // Update or create a HardwareBundle
     * const hardwareBundle = await prisma.hardwareBundle.upsert({
     *   create: {
     *     // ... data to create a HardwareBundle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HardwareBundle we want to update
     *   }
     * })
     */
    upsert<T extends HardwareBundleUpsertArgs>(args: SelectSubset<T, HardwareBundleUpsertArgs<ExtArgs>>): Prisma__HardwareBundleClient<$Result.GetResult<Prisma.$HardwareBundlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HardwareBundles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HardwareBundleCountArgs} args - Arguments to filter HardwareBundles to count.
     * @example
     * // Count the number of HardwareBundles
     * const count = await prisma.hardwareBundle.count({
     *   where: {
     *     // ... the filter for the HardwareBundles we want to count
     *   }
     * })
    **/
    count<T extends HardwareBundleCountArgs>(
      args?: Subset<T, HardwareBundleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HardwareBundleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HardwareBundle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HardwareBundleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HardwareBundleAggregateArgs>(args: Subset<T, HardwareBundleAggregateArgs>): Prisma.PrismaPromise<GetHardwareBundleAggregateType<T>>

    /**
     * Group by HardwareBundle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HardwareBundleGroupByArgs} args - Group by arguments.
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
      T extends HardwareBundleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HardwareBundleGroupByArgs['orderBy'] }
        : { orderBy?: HardwareBundleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HardwareBundleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHardwareBundleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HardwareBundle model
   */
  readonly fields: HardwareBundleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HardwareBundle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HardwareBundleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the HardwareBundle model
   */
  interface HardwareBundleFieldRefs {
    readonly id: FieldRef<"HardwareBundle", 'String'>
    readonly name: FieldRef<"HardwareBundle", 'String'>
    readonly description: FieldRef<"HardwareBundle", 'String'>
    readonly sku: FieldRef<"HardwareBundle", 'String'>
    readonly price: FieldRef<"HardwareBundle", 'Decimal'>
    readonly productIds: FieldRef<"HardwareBundle", 'String[]'>
    readonly imageUrl: FieldRef<"HardwareBundle", 'String'>
    readonly discount: FieldRef<"HardwareBundle", 'Decimal'>
    readonly isActive: FieldRef<"HardwareBundle", 'Boolean'>
    readonly createdAt: FieldRef<"HardwareBundle", 'DateTime'>
    readonly updatedAt: FieldRef<"HardwareBundle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HardwareBundle findUnique
   */
  export type HardwareBundleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareBundle
     */
    select?: HardwareBundleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareBundle
     */
    omit?: HardwareBundleOmit<ExtArgs> | null
    /**
     * Filter, which HardwareBundle to fetch.
     */
    where: HardwareBundleWhereUniqueInput
  }

  /**
   * HardwareBundle findUniqueOrThrow
   */
  export type HardwareBundleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareBundle
     */
    select?: HardwareBundleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareBundle
     */
    omit?: HardwareBundleOmit<ExtArgs> | null
    /**
     * Filter, which HardwareBundle to fetch.
     */
    where: HardwareBundleWhereUniqueInput
  }

  /**
   * HardwareBundle findFirst
   */
  export type HardwareBundleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareBundle
     */
    select?: HardwareBundleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareBundle
     */
    omit?: HardwareBundleOmit<ExtArgs> | null
    /**
     * Filter, which HardwareBundle to fetch.
     */
    where?: HardwareBundleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HardwareBundles to fetch.
     */
    orderBy?: HardwareBundleOrderByWithRelationInput | HardwareBundleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HardwareBundles.
     */
    cursor?: HardwareBundleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HardwareBundles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HardwareBundles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HardwareBundles.
     */
    distinct?: HardwareBundleScalarFieldEnum | HardwareBundleScalarFieldEnum[]
  }

  /**
   * HardwareBundle findFirstOrThrow
   */
  export type HardwareBundleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareBundle
     */
    select?: HardwareBundleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareBundle
     */
    omit?: HardwareBundleOmit<ExtArgs> | null
    /**
     * Filter, which HardwareBundle to fetch.
     */
    where?: HardwareBundleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HardwareBundles to fetch.
     */
    orderBy?: HardwareBundleOrderByWithRelationInput | HardwareBundleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HardwareBundles.
     */
    cursor?: HardwareBundleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HardwareBundles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HardwareBundles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HardwareBundles.
     */
    distinct?: HardwareBundleScalarFieldEnum | HardwareBundleScalarFieldEnum[]
  }

  /**
   * HardwareBundle findMany
   */
  export type HardwareBundleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareBundle
     */
    select?: HardwareBundleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareBundle
     */
    omit?: HardwareBundleOmit<ExtArgs> | null
    /**
     * Filter, which HardwareBundles to fetch.
     */
    where?: HardwareBundleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HardwareBundles to fetch.
     */
    orderBy?: HardwareBundleOrderByWithRelationInput | HardwareBundleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HardwareBundles.
     */
    cursor?: HardwareBundleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HardwareBundles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HardwareBundles.
     */
    skip?: number
    distinct?: HardwareBundleScalarFieldEnum | HardwareBundleScalarFieldEnum[]
  }

  /**
   * HardwareBundle create
   */
  export type HardwareBundleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareBundle
     */
    select?: HardwareBundleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareBundle
     */
    omit?: HardwareBundleOmit<ExtArgs> | null
    /**
     * The data needed to create a HardwareBundle.
     */
    data: XOR<HardwareBundleCreateInput, HardwareBundleUncheckedCreateInput>
  }

  /**
   * HardwareBundle createMany
   */
  export type HardwareBundleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HardwareBundles.
     */
    data: HardwareBundleCreateManyInput | HardwareBundleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HardwareBundle createManyAndReturn
   */
  export type HardwareBundleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareBundle
     */
    select?: HardwareBundleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareBundle
     */
    omit?: HardwareBundleOmit<ExtArgs> | null
    /**
     * The data used to create many HardwareBundles.
     */
    data: HardwareBundleCreateManyInput | HardwareBundleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HardwareBundle update
   */
  export type HardwareBundleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareBundle
     */
    select?: HardwareBundleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareBundle
     */
    omit?: HardwareBundleOmit<ExtArgs> | null
    /**
     * The data needed to update a HardwareBundle.
     */
    data: XOR<HardwareBundleUpdateInput, HardwareBundleUncheckedUpdateInput>
    /**
     * Choose, which HardwareBundle to update.
     */
    where: HardwareBundleWhereUniqueInput
  }

  /**
   * HardwareBundle updateMany
   */
  export type HardwareBundleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HardwareBundles.
     */
    data: XOR<HardwareBundleUpdateManyMutationInput, HardwareBundleUncheckedUpdateManyInput>
    /**
     * Filter which HardwareBundles to update
     */
    where?: HardwareBundleWhereInput
    /**
     * Limit how many HardwareBundles to update.
     */
    limit?: number
  }

  /**
   * HardwareBundle updateManyAndReturn
   */
  export type HardwareBundleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareBundle
     */
    select?: HardwareBundleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareBundle
     */
    omit?: HardwareBundleOmit<ExtArgs> | null
    /**
     * The data used to update HardwareBundles.
     */
    data: XOR<HardwareBundleUpdateManyMutationInput, HardwareBundleUncheckedUpdateManyInput>
    /**
     * Filter which HardwareBundles to update
     */
    where?: HardwareBundleWhereInput
    /**
     * Limit how many HardwareBundles to update.
     */
    limit?: number
  }

  /**
   * HardwareBundle upsert
   */
  export type HardwareBundleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareBundle
     */
    select?: HardwareBundleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareBundle
     */
    omit?: HardwareBundleOmit<ExtArgs> | null
    /**
     * The filter to search for the HardwareBundle to update in case it exists.
     */
    where: HardwareBundleWhereUniqueInput
    /**
     * In case the HardwareBundle found by the `where` argument doesn't exist, create a new HardwareBundle with this data.
     */
    create: XOR<HardwareBundleCreateInput, HardwareBundleUncheckedCreateInput>
    /**
     * In case the HardwareBundle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HardwareBundleUpdateInput, HardwareBundleUncheckedUpdateInput>
  }

  /**
   * HardwareBundle delete
   */
  export type HardwareBundleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareBundle
     */
    select?: HardwareBundleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareBundle
     */
    omit?: HardwareBundleOmit<ExtArgs> | null
    /**
     * Filter which HardwareBundle to delete.
     */
    where: HardwareBundleWhereUniqueInput
  }

  /**
   * HardwareBundle deleteMany
   */
  export type HardwareBundleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HardwareBundles to delete
     */
    where?: HardwareBundleWhereInput
    /**
     * Limit how many HardwareBundles to delete.
     */
    limit?: number
  }

  /**
   * HardwareBundle without action
   */
  export type HardwareBundleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareBundle
     */
    select?: HardwareBundleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareBundle
     */
    omit?: HardwareBundleOmit<ExtArgs> | null
  }


  /**
   * Model HardwareCategory
   */

  export type AggregateHardwareCategory = {
    _count: HardwareCategoryCountAggregateOutputType | null
    _min: HardwareCategoryMinAggregateOutputType | null
    _max: HardwareCategoryMaxAggregateOutputType | null
  }

  export type HardwareCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    parentId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HardwareCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    parentId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HardwareCategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    parentId: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HardwareCategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    parentId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HardwareCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    parentId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HardwareCategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    parentId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HardwareCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HardwareCategory to aggregate.
     */
    where?: HardwareCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HardwareCategories to fetch.
     */
    orderBy?: HardwareCategoryOrderByWithRelationInput | HardwareCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HardwareCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HardwareCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HardwareCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HardwareCategories
    **/
    _count?: true | HardwareCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HardwareCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HardwareCategoryMaxAggregateInputType
  }

  export type GetHardwareCategoryAggregateType<T extends HardwareCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateHardwareCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHardwareCategory[P]>
      : GetScalarType<T[P], AggregateHardwareCategory[P]>
  }




  export type HardwareCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HardwareCategoryWhereInput
    orderBy?: HardwareCategoryOrderByWithAggregationInput | HardwareCategoryOrderByWithAggregationInput[]
    by: HardwareCategoryScalarFieldEnum[] | HardwareCategoryScalarFieldEnum
    having?: HardwareCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HardwareCategoryCountAggregateInputType | true
    _min?: HardwareCategoryMinAggregateInputType
    _max?: HardwareCategoryMaxAggregateInputType
  }

  export type HardwareCategoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    parentId: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: HardwareCategoryCountAggregateOutputType | null
    _min: HardwareCategoryMinAggregateOutputType | null
    _max: HardwareCategoryMaxAggregateOutputType | null
  }

  type GetHardwareCategoryGroupByPayload<T extends HardwareCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HardwareCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HardwareCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HardwareCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], HardwareCategoryGroupByOutputType[P]>
        }
      >
    >


  export type HardwareCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    parentId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hardwareCategory"]>

  export type HardwareCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    parentId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hardwareCategory"]>

  export type HardwareCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    parentId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hardwareCategory"]>

  export type HardwareCategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    parentId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HardwareCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "parentId" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["hardwareCategory"]>

  export type $HardwareCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HardwareCategory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      parentId: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["hardwareCategory"]>
    composites: {}
  }

  type HardwareCategoryGetPayload<S extends boolean | null | undefined | HardwareCategoryDefaultArgs> = $Result.GetResult<Prisma.$HardwareCategoryPayload, S>

  type HardwareCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HardwareCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HardwareCategoryCountAggregateInputType | true
    }

  export interface HardwareCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HardwareCategory'], meta: { name: 'HardwareCategory' } }
    /**
     * Find zero or one HardwareCategory that matches the filter.
     * @param {HardwareCategoryFindUniqueArgs} args - Arguments to find a HardwareCategory
     * @example
     * // Get one HardwareCategory
     * const hardwareCategory = await prisma.hardwareCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HardwareCategoryFindUniqueArgs>(args: SelectSubset<T, HardwareCategoryFindUniqueArgs<ExtArgs>>): Prisma__HardwareCategoryClient<$Result.GetResult<Prisma.$HardwareCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HardwareCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HardwareCategoryFindUniqueOrThrowArgs} args - Arguments to find a HardwareCategory
     * @example
     * // Get one HardwareCategory
     * const hardwareCategory = await prisma.hardwareCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HardwareCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, HardwareCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HardwareCategoryClient<$Result.GetResult<Prisma.$HardwareCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HardwareCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HardwareCategoryFindFirstArgs} args - Arguments to find a HardwareCategory
     * @example
     * // Get one HardwareCategory
     * const hardwareCategory = await prisma.hardwareCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HardwareCategoryFindFirstArgs>(args?: SelectSubset<T, HardwareCategoryFindFirstArgs<ExtArgs>>): Prisma__HardwareCategoryClient<$Result.GetResult<Prisma.$HardwareCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HardwareCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HardwareCategoryFindFirstOrThrowArgs} args - Arguments to find a HardwareCategory
     * @example
     * // Get one HardwareCategory
     * const hardwareCategory = await prisma.hardwareCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HardwareCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, HardwareCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__HardwareCategoryClient<$Result.GetResult<Prisma.$HardwareCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HardwareCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HardwareCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HardwareCategories
     * const hardwareCategories = await prisma.hardwareCategory.findMany()
     * 
     * // Get first 10 HardwareCategories
     * const hardwareCategories = await prisma.hardwareCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hardwareCategoryWithIdOnly = await prisma.hardwareCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HardwareCategoryFindManyArgs>(args?: SelectSubset<T, HardwareCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HardwareCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HardwareCategory.
     * @param {HardwareCategoryCreateArgs} args - Arguments to create a HardwareCategory.
     * @example
     * // Create one HardwareCategory
     * const HardwareCategory = await prisma.hardwareCategory.create({
     *   data: {
     *     // ... data to create a HardwareCategory
     *   }
     * })
     * 
     */
    create<T extends HardwareCategoryCreateArgs>(args: SelectSubset<T, HardwareCategoryCreateArgs<ExtArgs>>): Prisma__HardwareCategoryClient<$Result.GetResult<Prisma.$HardwareCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HardwareCategories.
     * @param {HardwareCategoryCreateManyArgs} args - Arguments to create many HardwareCategories.
     * @example
     * // Create many HardwareCategories
     * const hardwareCategory = await prisma.hardwareCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HardwareCategoryCreateManyArgs>(args?: SelectSubset<T, HardwareCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HardwareCategories and returns the data saved in the database.
     * @param {HardwareCategoryCreateManyAndReturnArgs} args - Arguments to create many HardwareCategories.
     * @example
     * // Create many HardwareCategories
     * const hardwareCategory = await prisma.hardwareCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HardwareCategories and only return the `id`
     * const hardwareCategoryWithIdOnly = await prisma.hardwareCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HardwareCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, HardwareCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HardwareCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HardwareCategory.
     * @param {HardwareCategoryDeleteArgs} args - Arguments to delete one HardwareCategory.
     * @example
     * // Delete one HardwareCategory
     * const HardwareCategory = await prisma.hardwareCategory.delete({
     *   where: {
     *     // ... filter to delete one HardwareCategory
     *   }
     * })
     * 
     */
    delete<T extends HardwareCategoryDeleteArgs>(args: SelectSubset<T, HardwareCategoryDeleteArgs<ExtArgs>>): Prisma__HardwareCategoryClient<$Result.GetResult<Prisma.$HardwareCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HardwareCategory.
     * @param {HardwareCategoryUpdateArgs} args - Arguments to update one HardwareCategory.
     * @example
     * // Update one HardwareCategory
     * const hardwareCategory = await prisma.hardwareCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HardwareCategoryUpdateArgs>(args: SelectSubset<T, HardwareCategoryUpdateArgs<ExtArgs>>): Prisma__HardwareCategoryClient<$Result.GetResult<Prisma.$HardwareCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HardwareCategories.
     * @param {HardwareCategoryDeleteManyArgs} args - Arguments to filter HardwareCategories to delete.
     * @example
     * // Delete a few HardwareCategories
     * const { count } = await prisma.hardwareCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HardwareCategoryDeleteManyArgs>(args?: SelectSubset<T, HardwareCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HardwareCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HardwareCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HardwareCategories
     * const hardwareCategory = await prisma.hardwareCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HardwareCategoryUpdateManyArgs>(args: SelectSubset<T, HardwareCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HardwareCategories and returns the data updated in the database.
     * @param {HardwareCategoryUpdateManyAndReturnArgs} args - Arguments to update many HardwareCategories.
     * @example
     * // Update many HardwareCategories
     * const hardwareCategory = await prisma.hardwareCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HardwareCategories and only return the `id`
     * const hardwareCategoryWithIdOnly = await prisma.hardwareCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends HardwareCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, HardwareCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HardwareCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HardwareCategory.
     * @param {HardwareCategoryUpsertArgs} args - Arguments to update or create a HardwareCategory.
     * @example
     * // Update or create a HardwareCategory
     * const hardwareCategory = await prisma.hardwareCategory.upsert({
     *   create: {
     *     // ... data to create a HardwareCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HardwareCategory we want to update
     *   }
     * })
     */
    upsert<T extends HardwareCategoryUpsertArgs>(args: SelectSubset<T, HardwareCategoryUpsertArgs<ExtArgs>>): Prisma__HardwareCategoryClient<$Result.GetResult<Prisma.$HardwareCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HardwareCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HardwareCategoryCountArgs} args - Arguments to filter HardwareCategories to count.
     * @example
     * // Count the number of HardwareCategories
     * const count = await prisma.hardwareCategory.count({
     *   where: {
     *     // ... the filter for the HardwareCategories we want to count
     *   }
     * })
    **/
    count<T extends HardwareCategoryCountArgs>(
      args?: Subset<T, HardwareCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HardwareCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HardwareCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HardwareCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HardwareCategoryAggregateArgs>(args: Subset<T, HardwareCategoryAggregateArgs>): Prisma.PrismaPromise<GetHardwareCategoryAggregateType<T>>

    /**
     * Group by HardwareCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HardwareCategoryGroupByArgs} args - Group by arguments.
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
      T extends HardwareCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HardwareCategoryGroupByArgs['orderBy'] }
        : { orderBy?: HardwareCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HardwareCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHardwareCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HardwareCategory model
   */
  readonly fields: HardwareCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HardwareCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HardwareCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the HardwareCategory model
   */
  interface HardwareCategoryFieldRefs {
    readonly id: FieldRef<"HardwareCategory", 'String'>
    readonly name: FieldRef<"HardwareCategory", 'String'>
    readonly description: FieldRef<"HardwareCategory", 'String'>
    readonly parentId: FieldRef<"HardwareCategory", 'String'>
    readonly isActive: FieldRef<"HardwareCategory", 'Boolean'>
    readonly createdAt: FieldRef<"HardwareCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"HardwareCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HardwareCategory findUnique
   */
  export type HardwareCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareCategory
     */
    select?: HardwareCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareCategory
     */
    omit?: HardwareCategoryOmit<ExtArgs> | null
    /**
     * Filter, which HardwareCategory to fetch.
     */
    where: HardwareCategoryWhereUniqueInput
  }

  /**
   * HardwareCategory findUniqueOrThrow
   */
  export type HardwareCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareCategory
     */
    select?: HardwareCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareCategory
     */
    omit?: HardwareCategoryOmit<ExtArgs> | null
    /**
     * Filter, which HardwareCategory to fetch.
     */
    where: HardwareCategoryWhereUniqueInput
  }

  /**
   * HardwareCategory findFirst
   */
  export type HardwareCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareCategory
     */
    select?: HardwareCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareCategory
     */
    omit?: HardwareCategoryOmit<ExtArgs> | null
    /**
     * Filter, which HardwareCategory to fetch.
     */
    where?: HardwareCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HardwareCategories to fetch.
     */
    orderBy?: HardwareCategoryOrderByWithRelationInput | HardwareCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HardwareCategories.
     */
    cursor?: HardwareCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HardwareCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HardwareCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HardwareCategories.
     */
    distinct?: HardwareCategoryScalarFieldEnum | HardwareCategoryScalarFieldEnum[]
  }

  /**
   * HardwareCategory findFirstOrThrow
   */
  export type HardwareCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareCategory
     */
    select?: HardwareCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareCategory
     */
    omit?: HardwareCategoryOmit<ExtArgs> | null
    /**
     * Filter, which HardwareCategory to fetch.
     */
    where?: HardwareCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HardwareCategories to fetch.
     */
    orderBy?: HardwareCategoryOrderByWithRelationInput | HardwareCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HardwareCategories.
     */
    cursor?: HardwareCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HardwareCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HardwareCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HardwareCategories.
     */
    distinct?: HardwareCategoryScalarFieldEnum | HardwareCategoryScalarFieldEnum[]
  }

  /**
   * HardwareCategory findMany
   */
  export type HardwareCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareCategory
     */
    select?: HardwareCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareCategory
     */
    omit?: HardwareCategoryOmit<ExtArgs> | null
    /**
     * Filter, which HardwareCategories to fetch.
     */
    where?: HardwareCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HardwareCategories to fetch.
     */
    orderBy?: HardwareCategoryOrderByWithRelationInput | HardwareCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HardwareCategories.
     */
    cursor?: HardwareCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HardwareCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HardwareCategories.
     */
    skip?: number
    distinct?: HardwareCategoryScalarFieldEnum | HardwareCategoryScalarFieldEnum[]
  }

  /**
   * HardwareCategory create
   */
  export type HardwareCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareCategory
     */
    select?: HardwareCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareCategory
     */
    omit?: HardwareCategoryOmit<ExtArgs> | null
    /**
     * The data needed to create a HardwareCategory.
     */
    data: XOR<HardwareCategoryCreateInput, HardwareCategoryUncheckedCreateInput>
  }

  /**
   * HardwareCategory createMany
   */
  export type HardwareCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HardwareCategories.
     */
    data: HardwareCategoryCreateManyInput | HardwareCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HardwareCategory createManyAndReturn
   */
  export type HardwareCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareCategory
     */
    select?: HardwareCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareCategory
     */
    omit?: HardwareCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many HardwareCategories.
     */
    data: HardwareCategoryCreateManyInput | HardwareCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HardwareCategory update
   */
  export type HardwareCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareCategory
     */
    select?: HardwareCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareCategory
     */
    omit?: HardwareCategoryOmit<ExtArgs> | null
    /**
     * The data needed to update a HardwareCategory.
     */
    data: XOR<HardwareCategoryUpdateInput, HardwareCategoryUncheckedUpdateInput>
    /**
     * Choose, which HardwareCategory to update.
     */
    where: HardwareCategoryWhereUniqueInput
  }

  /**
   * HardwareCategory updateMany
   */
  export type HardwareCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HardwareCategories.
     */
    data: XOR<HardwareCategoryUpdateManyMutationInput, HardwareCategoryUncheckedUpdateManyInput>
    /**
     * Filter which HardwareCategories to update
     */
    where?: HardwareCategoryWhereInput
    /**
     * Limit how many HardwareCategories to update.
     */
    limit?: number
  }

  /**
   * HardwareCategory updateManyAndReturn
   */
  export type HardwareCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareCategory
     */
    select?: HardwareCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareCategory
     */
    omit?: HardwareCategoryOmit<ExtArgs> | null
    /**
     * The data used to update HardwareCategories.
     */
    data: XOR<HardwareCategoryUpdateManyMutationInput, HardwareCategoryUncheckedUpdateManyInput>
    /**
     * Filter which HardwareCategories to update
     */
    where?: HardwareCategoryWhereInput
    /**
     * Limit how many HardwareCategories to update.
     */
    limit?: number
  }

  /**
   * HardwareCategory upsert
   */
  export type HardwareCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareCategory
     */
    select?: HardwareCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareCategory
     */
    omit?: HardwareCategoryOmit<ExtArgs> | null
    /**
     * The filter to search for the HardwareCategory to update in case it exists.
     */
    where: HardwareCategoryWhereUniqueInput
    /**
     * In case the HardwareCategory found by the `where` argument doesn't exist, create a new HardwareCategory with this data.
     */
    create: XOR<HardwareCategoryCreateInput, HardwareCategoryUncheckedCreateInput>
    /**
     * In case the HardwareCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HardwareCategoryUpdateInput, HardwareCategoryUncheckedUpdateInput>
  }

  /**
   * HardwareCategory delete
   */
  export type HardwareCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareCategory
     */
    select?: HardwareCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareCategory
     */
    omit?: HardwareCategoryOmit<ExtArgs> | null
    /**
     * Filter which HardwareCategory to delete.
     */
    where: HardwareCategoryWhereUniqueInput
  }

  /**
   * HardwareCategory deleteMany
   */
  export type HardwareCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HardwareCategories to delete
     */
    where?: HardwareCategoryWhereInput
    /**
     * Limit how many HardwareCategories to delete.
     */
    limit?: number
  }

  /**
   * HardwareCategory without action
   */
  export type HardwareCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HardwareCategory
     */
    select?: HardwareCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HardwareCategory
     */
    omit?: HardwareCategoryOmit<ExtArgs> | null
  }


  /**
   * Model SunmiConfig
   */

  export type AggregateSunmiConfig = {
    _count: SunmiConfigCountAggregateOutputType | null
    _min: SunmiConfigMinAggregateOutputType | null
    _max: SunmiConfigMaxAggregateOutputType | null
  }

  export type SunmiConfigMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    apiUrl: string | null
    apiKey: string | null
    appId: string | null
    deviceSn: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SunmiConfigMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    apiUrl: string | null
    apiKey: string | null
    appId: string | null
    deviceSn: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SunmiConfigCountAggregateOutputType = {
    id: number
    organizationId: number
    apiUrl: number
    apiKey: number
    appId: number
    deviceSn: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SunmiConfigMinAggregateInputType = {
    id?: true
    organizationId?: true
    apiUrl?: true
    apiKey?: true
    appId?: true
    deviceSn?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SunmiConfigMaxAggregateInputType = {
    id?: true
    organizationId?: true
    apiUrl?: true
    apiKey?: true
    appId?: true
    deviceSn?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SunmiConfigCountAggregateInputType = {
    id?: true
    organizationId?: true
    apiUrl?: true
    apiKey?: true
    appId?: true
    deviceSn?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SunmiConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SunmiConfig to aggregate.
     */
    where?: SunmiConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SunmiConfigs to fetch.
     */
    orderBy?: SunmiConfigOrderByWithRelationInput | SunmiConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SunmiConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SunmiConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SunmiConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SunmiConfigs
    **/
    _count?: true | SunmiConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SunmiConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SunmiConfigMaxAggregateInputType
  }

  export type GetSunmiConfigAggregateType<T extends SunmiConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateSunmiConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSunmiConfig[P]>
      : GetScalarType<T[P], AggregateSunmiConfig[P]>
  }




  export type SunmiConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SunmiConfigWhereInput
    orderBy?: SunmiConfigOrderByWithAggregationInput | SunmiConfigOrderByWithAggregationInput[]
    by: SunmiConfigScalarFieldEnum[] | SunmiConfigScalarFieldEnum
    having?: SunmiConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SunmiConfigCountAggregateInputType | true
    _min?: SunmiConfigMinAggregateInputType
    _max?: SunmiConfigMaxAggregateInputType
  }

  export type SunmiConfigGroupByOutputType = {
    id: string
    organizationId: string | null
    apiUrl: string | null
    apiKey: string | null
    appId: string | null
    deviceSn: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: SunmiConfigCountAggregateOutputType | null
    _min: SunmiConfigMinAggregateOutputType | null
    _max: SunmiConfigMaxAggregateOutputType | null
  }

  type GetSunmiConfigGroupByPayload<T extends SunmiConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SunmiConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SunmiConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SunmiConfigGroupByOutputType[P]>
            : GetScalarType<T[P], SunmiConfigGroupByOutputType[P]>
        }
      >
    >


  export type SunmiConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    apiUrl?: boolean
    apiKey?: boolean
    appId?: boolean
    deviceSn?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sunmiConfig"]>

  export type SunmiConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    apiUrl?: boolean
    apiKey?: boolean
    appId?: boolean
    deviceSn?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sunmiConfig"]>

  export type SunmiConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    apiUrl?: boolean
    apiKey?: boolean
    appId?: boolean
    deviceSn?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sunmiConfig"]>

  export type SunmiConfigSelectScalar = {
    id?: boolean
    organizationId?: boolean
    apiUrl?: boolean
    apiKey?: boolean
    appId?: boolean
    deviceSn?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SunmiConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "apiUrl" | "apiKey" | "appId" | "deviceSn" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["sunmiConfig"]>

  export type $SunmiConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SunmiConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string | null
      apiUrl: string | null
      apiKey: string | null
      appId: string | null
      deviceSn: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sunmiConfig"]>
    composites: {}
  }

  type SunmiConfigGetPayload<S extends boolean | null | undefined | SunmiConfigDefaultArgs> = $Result.GetResult<Prisma.$SunmiConfigPayload, S>

  type SunmiConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SunmiConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SunmiConfigCountAggregateInputType | true
    }

  export interface SunmiConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SunmiConfig'], meta: { name: 'SunmiConfig' } }
    /**
     * Find zero or one SunmiConfig that matches the filter.
     * @param {SunmiConfigFindUniqueArgs} args - Arguments to find a SunmiConfig
     * @example
     * // Get one SunmiConfig
     * const sunmiConfig = await prisma.sunmiConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SunmiConfigFindUniqueArgs>(args: SelectSubset<T, SunmiConfigFindUniqueArgs<ExtArgs>>): Prisma__SunmiConfigClient<$Result.GetResult<Prisma.$SunmiConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SunmiConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SunmiConfigFindUniqueOrThrowArgs} args - Arguments to find a SunmiConfig
     * @example
     * // Get one SunmiConfig
     * const sunmiConfig = await prisma.sunmiConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SunmiConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, SunmiConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SunmiConfigClient<$Result.GetResult<Prisma.$SunmiConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SunmiConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SunmiConfigFindFirstArgs} args - Arguments to find a SunmiConfig
     * @example
     * // Get one SunmiConfig
     * const sunmiConfig = await prisma.sunmiConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SunmiConfigFindFirstArgs>(args?: SelectSubset<T, SunmiConfigFindFirstArgs<ExtArgs>>): Prisma__SunmiConfigClient<$Result.GetResult<Prisma.$SunmiConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SunmiConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SunmiConfigFindFirstOrThrowArgs} args - Arguments to find a SunmiConfig
     * @example
     * // Get one SunmiConfig
     * const sunmiConfig = await prisma.sunmiConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SunmiConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, SunmiConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__SunmiConfigClient<$Result.GetResult<Prisma.$SunmiConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SunmiConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SunmiConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SunmiConfigs
     * const sunmiConfigs = await prisma.sunmiConfig.findMany()
     * 
     * // Get first 10 SunmiConfigs
     * const sunmiConfigs = await prisma.sunmiConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sunmiConfigWithIdOnly = await prisma.sunmiConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SunmiConfigFindManyArgs>(args?: SelectSubset<T, SunmiConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SunmiConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SunmiConfig.
     * @param {SunmiConfigCreateArgs} args - Arguments to create a SunmiConfig.
     * @example
     * // Create one SunmiConfig
     * const SunmiConfig = await prisma.sunmiConfig.create({
     *   data: {
     *     // ... data to create a SunmiConfig
     *   }
     * })
     * 
     */
    create<T extends SunmiConfigCreateArgs>(args: SelectSubset<T, SunmiConfigCreateArgs<ExtArgs>>): Prisma__SunmiConfigClient<$Result.GetResult<Prisma.$SunmiConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SunmiConfigs.
     * @param {SunmiConfigCreateManyArgs} args - Arguments to create many SunmiConfigs.
     * @example
     * // Create many SunmiConfigs
     * const sunmiConfig = await prisma.sunmiConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SunmiConfigCreateManyArgs>(args?: SelectSubset<T, SunmiConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SunmiConfigs and returns the data saved in the database.
     * @param {SunmiConfigCreateManyAndReturnArgs} args - Arguments to create many SunmiConfigs.
     * @example
     * // Create many SunmiConfigs
     * const sunmiConfig = await prisma.sunmiConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SunmiConfigs and only return the `id`
     * const sunmiConfigWithIdOnly = await prisma.sunmiConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SunmiConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, SunmiConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SunmiConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SunmiConfig.
     * @param {SunmiConfigDeleteArgs} args - Arguments to delete one SunmiConfig.
     * @example
     * // Delete one SunmiConfig
     * const SunmiConfig = await prisma.sunmiConfig.delete({
     *   where: {
     *     // ... filter to delete one SunmiConfig
     *   }
     * })
     * 
     */
    delete<T extends SunmiConfigDeleteArgs>(args: SelectSubset<T, SunmiConfigDeleteArgs<ExtArgs>>): Prisma__SunmiConfigClient<$Result.GetResult<Prisma.$SunmiConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SunmiConfig.
     * @param {SunmiConfigUpdateArgs} args - Arguments to update one SunmiConfig.
     * @example
     * // Update one SunmiConfig
     * const sunmiConfig = await prisma.sunmiConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SunmiConfigUpdateArgs>(args: SelectSubset<T, SunmiConfigUpdateArgs<ExtArgs>>): Prisma__SunmiConfigClient<$Result.GetResult<Prisma.$SunmiConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SunmiConfigs.
     * @param {SunmiConfigDeleteManyArgs} args - Arguments to filter SunmiConfigs to delete.
     * @example
     * // Delete a few SunmiConfigs
     * const { count } = await prisma.sunmiConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SunmiConfigDeleteManyArgs>(args?: SelectSubset<T, SunmiConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SunmiConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SunmiConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SunmiConfigs
     * const sunmiConfig = await prisma.sunmiConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SunmiConfigUpdateManyArgs>(args: SelectSubset<T, SunmiConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SunmiConfigs and returns the data updated in the database.
     * @param {SunmiConfigUpdateManyAndReturnArgs} args - Arguments to update many SunmiConfigs.
     * @example
     * // Update many SunmiConfigs
     * const sunmiConfig = await prisma.sunmiConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SunmiConfigs and only return the `id`
     * const sunmiConfigWithIdOnly = await prisma.sunmiConfig.updateManyAndReturn({
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
    updateManyAndReturn<T extends SunmiConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, SunmiConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SunmiConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SunmiConfig.
     * @param {SunmiConfigUpsertArgs} args - Arguments to update or create a SunmiConfig.
     * @example
     * // Update or create a SunmiConfig
     * const sunmiConfig = await prisma.sunmiConfig.upsert({
     *   create: {
     *     // ... data to create a SunmiConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SunmiConfig we want to update
     *   }
     * })
     */
    upsert<T extends SunmiConfigUpsertArgs>(args: SelectSubset<T, SunmiConfigUpsertArgs<ExtArgs>>): Prisma__SunmiConfigClient<$Result.GetResult<Prisma.$SunmiConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SunmiConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SunmiConfigCountArgs} args - Arguments to filter SunmiConfigs to count.
     * @example
     * // Count the number of SunmiConfigs
     * const count = await prisma.sunmiConfig.count({
     *   where: {
     *     // ... the filter for the SunmiConfigs we want to count
     *   }
     * })
    **/
    count<T extends SunmiConfigCountArgs>(
      args?: Subset<T, SunmiConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SunmiConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SunmiConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SunmiConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SunmiConfigAggregateArgs>(args: Subset<T, SunmiConfigAggregateArgs>): Prisma.PrismaPromise<GetSunmiConfigAggregateType<T>>

    /**
     * Group by SunmiConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SunmiConfigGroupByArgs} args - Group by arguments.
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
      T extends SunmiConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SunmiConfigGroupByArgs['orderBy'] }
        : { orderBy?: SunmiConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SunmiConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSunmiConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SunmiConfig model
   */
  readonly fields: SunmiConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SunmiConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SunmiConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SunmiConfig model
   */
  interface SunmiConfigFieldRefs {
    readonly id: FieldRef<"SunmiConfig", 'String'>
    readonly organizationId: FieldRef<"SunmiConfig", 'String'>
    readonly apiUrl: FieldRef<"SunmiConfig", 'String'>
    readonly apiKey: FieldRef<"SunmiConfig", 'String'>
    readonly appId: FieldRef<"SunmiConfig", 'String'>
    readonly deviceSn: FieldRef<"SunmiConfig", 'String'>
    readonly isActive: FieldRef<"SunmiConfig", 'Boolean'>
    readonly createdAt: FieldRef<"SunmiConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"SunmiConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SunmiConfig findUnique
   */
  export type SunmiConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SunmiConfig
     */
    select?: SunmiConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SunmiConfig
     */
    omit?: SunmiConfigOmit<ExtArgs> | null
    /**
     * Filter, which SunmiConfig to fetch.
     */
    where: SunmiConfigWhereUniqueInput
  }

  /**
   * SunmiConfig findUniqueOrThrow
   */
  export type SunmiConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SunmiConfig
     */
    select?: SunmiConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SunmiConfig
     */
    omit?: SunmiConfigOmit<ExtArgs> | null
    /**
     * Filter, which SunmiConfig to fetch.
     */
    where: SunmiConfigWhereUniqueInput
  }

  /**
   * SunmiConfig findFirst
   */
  export type SunmiConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SunmiConfig
     */
    select?: SunmiConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SunmiConfig
     */
    omit?: SunmiConfigOmit<ExtArgs> | null
    /**
     * Filter, which SunmiConfig to fetch.
     */
    where?: SunmiConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SunmiConfigs to fetch.
     */
    orderBy?: SunmiConfigOrderByWithRelationInput | SunmiConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SunmiConfigs.
     */
    cursor?: SunmiConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SunmiConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SunmiConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SunmiConfigs.
     */
    distinct?: SunmiConfigScalarFieldEnum | SunmiConfigScalarFieldEnum[]
  }

  /**
   * SunmiConfig findFirstOrThrow
   */
  export type SunmiConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SunmiConfig
     */
    select?: SunmiConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SunmiConfig
     */
    omit?: SunmiConfigOmit<ExtArgs> | null
    /**
     * Filter, which SunmiConfig to fetch.
     */
    where?: SunmiConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SunmiConfigs to fetch.
     */
    orderBy?: SunmiConfigOrderByWithRelationInput | SunmiConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SunmiConfigs.
     */
    cursor?: SunmiConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SunmiConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SunmiConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SunmiConfigs.
     */
    distinct?: SunmiConfigScalarFieldEnum | SunmiConfigScalarFieldEnum[]
  }

  /**
   * SunmiConfig findMany
   */
  export type SunmiConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SunmiConfig
     */
    select?: SunmiConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SunmiConfig
     */
    omit?: SunmiConfigOmit<ExtArgs> | null
    /**
     * Filter, which SunmiConfigs to fetch.
     */
    where?: SunmiConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SunmiConfigs to fetch.
     */
    orderBy?: SunmiConfigOrderByWithRelationInput | SunmiConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SunmiConfigs.
     */
    cursor?: SunmiConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SunmiConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SunmiConfigs.
     */
    skip?: number
    distinct?: SunmiConfigScalarFieldEnum | SunmiConfigScalarFieldEnum[]
  }

  /**
   * SunmiConfig create
   */
  export type SunmiConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SunmiConfig
     */
    select?: SunmiConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SunmiConfig
     */
    omit?: SunmiConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a SunmiConfig.
     */
    data: XOR<SunmiConfigCreateInput, SunmiConfigUncheckedCreateInput>
  }

  /**
   * SunmiConfig createMany
   */
  export type SunmiConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SunmiConfigs.
     */
    data: SunmiConfigCreateManyInput | SunmiConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SunmiConfig createManyAndReturn
   */
  export type SunmiConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SunmiConfig
     */
    select?: SunmiConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SunmiConfig
     */
    omit?: SunmiConfigOmit<ExtArgs> | null
    /**
     * The data used to create many SunmiConfigs.
     */
    data: SunmiConfigCreateManyInput | SunmiConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SunmiConfig update
   */
  export type SunmiConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SunmiConfig
     */
    select?: SunmiConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SunmiConfig
     */
    omit?: SunmiConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a SunmiConfig.
     */
    data: XOR<SunmiConfigUpdateInput, SunmiConfigUncheckedUpdateInput>
    /**
     * Choose, which SunmiConfig to update.
     */
    where: SunmiConfigWhereUniqueInput
  }

  /**
   * SunmiConfig updateMany
   */
  export type SunmiConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SunmiConfigs.
     */
    data: XOR<SunmiConfigUpdateManyMutationInput, SunmiConfigUncheckedUpdateManyInput>
    /**
     * Filter which SunmiConfigs to update
     */
    where?: SunmiConfigWhereInput
    /**
     * Limit how many SunmiConfigs to update.
     */
    limit?: number
  }

  /**
   * SunmiConfig updateManyAndReturn
   */
  export type SunmiConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SunmiConfig
     */
    select?: SunmiConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SunmiConfig
     */
    omit?: SunmiConfigOmit<ExtArgs> | null
    /**
     * The data used to update SunmiConfigs.
     */
    data: XOR<SunmiConfigUpdateManyMutationInput, SunmiConfigUncheckedUpdateManyInput>
    /**
     * Filter which SunmiConfigs to update
     */
    where?: SunmiConfigWhereInput
    /**
     * Limit how many SunmiConfigs to update.
     */
    limit?: number
  }

  /**
   * SunmiConfig upsert
   */
  export type SunmiConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SunmiConfig
     */
    select?: SunmiConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SunmiConfig
     */
    omit?: SunmiConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the SunmiConfig to update in case it exists.
     */
    where: SunmiConfigWhereUniqueInput
    /**
     * In case the SunmiConfig found by the `where` argument doesn't exist, create a new SunmiConfig with this data.
     */
    create: XOR<SunmiConfigCreateInput, SunmiConfigUncheckedCreateInput>
    /**
     * In case the SunmiConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SunmiConfigUpdateInput, SunmiConfigUncheckedUpdateInput>
  }

  /**
   * SunmiConfig delete
   */
  export type SunmiConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SunmiConfig
     */
    select?: SunmiConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SunmiConfig
     */
    omit?: SunmiConfigOmit<ExtArgs> | null
    /**
     * Filter which SunmiConfig to delete.
     */
    where: SunmiConfigWhereUniqueInput
  }

  /**
   * SunmiConfig deleteMany
   */
  export type SunmiConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SunmiConfigs to delete
     */
    where?: SunmiConfigWhereInput
    /**
     * Limit how many SunmiConfigs to delete.
     */
    limit?: number
  }

  /**
   * SunmiConfig without action
   */
  export type SunmiConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SunmiConfig
     */
    select?: SunmiConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SunmiConfig
     */
    omit?: SunmiConfigOmit<ExtArgs> | null
  }


  /**
   * Model UnifiConnection
   */

  export type AggregateUnifiConnection = {
    _count: UnifiConnectionCountAggregateOutputType | null
    _avg: UnifiConnectionAvgAggregateOutputType | null
    _sum: UnifiConnectionSumAggregateOutputType | null
    _min: UnifiConnectionMinAggregateOutputType | null
    _max: UnifiConnectionMaxAggregateOutputType | null
  }

  export type UnifiConnectionAvgAggregateOutputType = {
    port: number | null
  }

  export type UnifiConnectionSumAggregateOutputType = {
    port: number | null
  }

  export type UnifiConnectionMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    locationId: string | null
    name: string | null
    host: string | null
    port: number | null
    apiKey: string | null
    sslVerify: boolean | null
    isConnected: boolean | null
    lastSync: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnifiConnectionMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    locationId: string | null
    name: string | null
    host: string | null
    port: number | null
    apiKey: string | null
    sslVerify: boolean | null
    isConnected: boolean | null
    lastSync: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnifiConnectionCountAggregateOutputType = {
    id: number
    organizationId: number
    locationId: number
    name: number
    host: number
    port: number
    apiKey: number
    sslVerify: number
    isConnected: number
    lastSync: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UnifiConnectionAvgAggregateInputType = {
    port?: true
  }

  export type UnifiConnectionSumAggregateInputType = {
    port?: true
  }

  export type UnifiConnectionMinAggregateInputType = {
    id?: true
    organizationId?: true
    locationId?: true
    name?: true
    host?: true
    port?: true
    apiKey?: true
    sslVerify?: true
    isConnected?: true
    lastSync?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnifiConnectionMaxAggregateInputType = {
    id?: true
    organizationId?: true
    locationId?: true
    name?: true
    host?: true
    port?: true
    apiKey?: true
    sslVerify?: true
    isConnected?: true
    lastSync?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnifiConnectionCountAggregateInputType = {
    id?: true
    organizationId?: true
    locationId?: true
    name?: true
    host?: true
    port?: true
    apiKey?: true
    sslVerify?: true
    isConnected?: true
    lastSync?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UnifiConnectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnifiConnection to aggregate.
     */
    where?: UnifiConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnifiConnections to fetch.
     */
    orderBy?: UnifiConnectionOrderByWithRelationInput | UnifiConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnifiConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnifiConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnifiConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UnifiConnections
    **/
    _count?: true | UnifiConnectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnifiConnectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnifiConnectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnifiConnectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnifiConnectionMaxAggregateInputType
  }

  export type GetUnifiConnectionAggregateType<T extends UnifiConnectionAggregateArgs> = {
        [P in keyof T & keyof AggregateUnifiConnection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnifiConnection[P]>
      : GetScalarType<T[P], AggregateUnifiConnection[P]>
  }




  export type UnifiConnectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnifiConnectionWhereInput
    orderBy?: UnifiConnectionOrderByWithAggregationInput | UnifiConnectionOrderByWithAggregationInput[]
    by: UnifiConnectionScalarFieldEnum[] | UnifiConnectionScalarFieldEnum
    having?: UnifiConnectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnifiConnectionCountAggregateInputType | true
    _avg?: UnifiConnectionAvgAggregateInputType
    _sum?: UnifiConnectionSumAggregateInputType
    _min?: UnifiConnectionMinAggregateInputType
    _max?: UnifiConnectionMaxAggregateInputType
  }

  export type UnifiConnectionGroupByOutputType = {
    id: string
    organizationId: string
    locationId: string | null
    name: string
    host: string
    port: number
    apiKey: string | null
    sslVerify: boolean
    isConnected: boolean
    lastSync: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UnifiConnectionCountAggregateOutputType | null
    _avg: UnifiConnectionAvgAggregateOutputType | null
    _sum: UnifiConnectionSumAggregateOutputType | null
    _min: UnifiConnectionMinAggregateOutputType | null
    _max: UnifiConnectionMaxAggregateOutputType | null
  }

  type GetUnifiConnectionGroupByPayload<T extends UnifiConnectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnifiConnectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnifiConnectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnifiConnectionGroupByOutputType[P]>
            : GetScalarType<T[P], UnifiConnectionGroupByOutputType[P]>
        }
      >
    >


  export type UnifiConnectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    locationId?: boolean
    name?: boolean
    host?: boolean
    port?: boolean
    apiKey?: boolean
    sslVerify?: boolean
    isConnected?: boolean
    lastSync?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["unifiConnection"]>

  export type UnifiConnectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    locationId?: boolean
    name?: boolean
    host?: boolean
    port?: boolean
    apiKey?: boolean
    sslVerify?: boolean
    isConnected?: boolean
    lastSync?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["unifiConnection"]>

  export type UnifiConnectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    locationId?: boolean
    name?: boolean
    host?: boolean
    port?: boolean
    apiKey?: boolean
    sslVerify?: boolean
    isConnected?: boolean
    lastSync?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["unifiConnection"]>

  export type UnifiConnectionSelectScalar = {
    id?: boolean
    organizationId?: boolean
    locationId?: boolean
    name?: boolean
    host?: boolean
    port?: boolean
    apiKey?: boolean
    sslVerify?: boolean
    isConnected?: boolean
    lastSync?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UnifiConnectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "locationId" | "name" | "host" | "port" | "apiKey" | "sslVerify" | "isConnected" | "lastSync" | "createdAt" | "updatedAt", ExtArgs["result"]["unifiConnection"]>

  export type $UnifiConnectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UnifiConnection"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      locationId: string | null
      name: string
      host: string
      port: number
      apiKey: string | null
      sslVerify: boolean
      isConnected: boolean
      lastSync: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["unifiConnection"]>
    composites: {}
  }

  type UnifiConnectionGetPayload<S extends boolean | null | undefined | UnifiConnectionDefaultArgs> = $Result.GetResult<Prisma.$UnifiConnectionPayload, S>

  type UnifiConnectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnifiConnectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnifiConnectionCountAggregateInputType | true
    }

  export interface UnifiConnectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UnifiConnection'], meta: { name: 'UnifiConnection' } }
    /**
     * Find zero or one UnifiConnection that matches the filter.
     * @param {UnifiConnectionFindUniqueArgs} args - Arguments to find a UnifiConnection
     * @example
     * // Get one UnifiConnection
     * const unifiConnection = await prisma.unifiConnection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnifiConnectionFindUniqueArgs>(args: SelectSubset<T, UnifiConnectionFindUniqueArgs<ExtArgs>>): Prisma__UnifiConnectionClient<$Result.GetResult<Prisma.$UnifiConnectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UnifiConnection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnifiConnectionFindUniqueOrThrowArgs} args - Arguments to find a UnifiConnection
     * @example
     * // Get one UnifiConnection
     * const unifiConnection = await prisma.unifiConnection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnifiConnectionFindUniqueOrThrowArgs>(args: SelectSubset<T, UnifiConnectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnifiConnectionClient<$Result.GetResult<Prisma.$UnifiConnectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnifiConnection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiConnectionFindFirstArgs} args - Arguments to find a UnifiConnection
     * @example
     * // Get one UnifiConnection
     * const unifiConnection = await prisma.unifiConnection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnifiConnectionFindFirstArgs>(args?: SelectSubset<T, UnifiConnectionFindFirstArgs<ExtArgs>>): Prisma__UnifiConnectionClient<$Result.GetResult<Prisma.$UnifiConnectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnifiConnection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiConnectionFindFirstOrThrowArgs} args - Arguments to find a UnifiConnection
     * @example
     * // Get one UnifiConnection
     * const unifiConnection = await prisma.unifiConnection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnifiConnectionFindFirstOrThrowArgs>(args?: SelectSubset<T, UnifiConnectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnifiConnectionClient<$Result.GetResult<Prisma.$UnifiConnectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UnifiConnections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiConnectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UnifiConnections
     * const unifiConnections = await prisma.unifiConnection.findMany()
     * 
     * // Get first 10 UnifiConnections
     * const unifiConnections = await prisma.unifiConnection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unifiConnectionWithIdOnly = await prisma.unifiConnection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnifiConnectionFindManyArgs>(args?: SelectSubset<T, UnifiConnectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnifiConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UnifiConnection.
     * @param {UnifiConnectionCreateArgs} args - Arguments to create a UnifiConnection.
     * @example
     * // Create one UnifiConnection
     * const UnifiConnection = await prisma.unifiConnection.create({
     *   data: {
     *     // ... data to create a UnifiConnection
     *   }
     * })
     * 
     */
    create<T extends UnifiConnectionCreateArgs>(args: SelectSubset<T, UnifiConnectionCreateArgs<ExtArgs>>): Prisma__UnifiConnectionClient<$Result.GetResult<Prisma.$UnifiConnectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UnifiConnections.
     * @param {UnifiConnectionCreateManyArgs} args - Arguments to create many UnifiConnections.
     * @example
     * // Create many UnifiConnections
     * const unifiConnection = await prisma.unifiConnection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnifiConnectionCreateManyArgs>(args?: SelectSubset<T, UnifiConnectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UnifiConnections and returns the data saved in the database.
     * @param {UnifiConnectionCreateManyAndReturnArgs} args - Arguments to create many UnifiConnections.
     * @example
     * // Create many UnifiConnections
     * const unifiConnection = await prisma.unifiConnection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UnifiConnections and only return the `id`
     * const unifiConnectionWithIdOnly = await prisma.unifiConnection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnifiConnectionCreateManyAndReturnArgs>(args?: SelectSubset<T, UnifiConnectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnifiConnectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UnifiConnection.
     * @param {UnifiConnectionDeleteArgs} args - Arguments to delete one UnifiConnection.
     * @example
     * // Delete one UnifiConnection
     * const UnifiConnection = await prisma.unifiConnection.delete({
     *   where: {
     *     // ... filter to delete one UnifiConnection
     *   }
     * })
     * 
     */
    delete<T extends UnifiConnectionDeleteArgs>(args: SelectSubset<T, UnifiConnectionDeleteArgs<ExtArgs>>): Prisma__UnifiConnectionClient<$Result.GetResult<Prisma.$UnifiConnectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UnifiConnection.
     * @param {UnifiConnectionUpdateArgs} args - Arguments to update one UnifiConnection.
     * @example
     * // Update one UnifiConnection
     * const unifiConnection = await prisma.unifiConnection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnifiConnectionUpdateArgs>(args: SelectSubset<T, UnifiConnectionUpdateArgs<ExtArgs>>): Prisma__UnifiConnectionClient<$Result.GetResult<Prisma.$UnifiConnectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UnifiConnections.
     * @param {UnifiConnectionDeleteManyArgs} args - Arguments to filter UnifiConnections to delete.
     * @example
     * // Delete a few UnifiConnections
     * const { count } = await prisma.unifiConnection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnifiConnectionDeleteManyArgs>(args?: SelectSubset<T, UnifiConnectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnifiConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiConnectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UnifiConnections
     * const unifiConnection = await prisma.unifiConnection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnifiConnectionUpdateManyArgs>(args: SelectSubset<T, UnifiConnectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnifiConnections and returns the data updated in the database.
     * @param {UnifiConnectionUpdateManyAndReturnArgs} args - Arguments to update many UnifiConnections.
     * @example
     * // Update many UnifiConnections
     * const unifiConnection = await prisma.unifiConnection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UnifiConnections and only return the `id`
     * const unifiConnectionWithIdOnly = await prisma.unifiConnection.updateManyAndReturn({
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
    updateManyAndReturn<T extends UnifiConnectionUpdateManyAndReturnArgs>(args: SelectSubset<T, UnifiConnectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnifiConnectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UnifiConnection.
     * @param {UnifiConnectionUpsertArgs} args - Arguments to update or create a UnifiConnection.
     * @example
     * // Update or create a UnifiConnection
     * const unifiConnection = await prisma.unifiConnection.upsert({
     *   create: {
     *     // ... data to create a UnifiConnection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UnifiConnection we want to update
     *   }
     * })
     */
    upsert<T extends UnifiConnectionUpsertArgs>(args: SelectSubset<T, UnifiConnectionUpsertArgs<ExtArgs>>): Prisma__UnifiConnectionClient<$Result.GetResult<Prisma.$UnifiConnectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UnifiConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiConnectionCountArgs} args - Arguments to filter UnifiConnections to count.
     * @example
     * // Count the number of UnifiConnections
     * const count = await prisma.unifiConnection.count({
     *   where: {
     *     // ... the filter for the UnifiConnections we want to count
     *   }
     * })
    **/
    count<T extends UnifiConnectionCountArgs>(
      args?: Subset<T, UnifiConnectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnifiConnectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UnifiConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiConnectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnifiConnectionAggregateArgs>(args: Subset<T, UnifiConnectionAggregateArgs>): Prisma.PrismaPromise<GetUnifiConnectionAggregateType<T>>

    /**
     * Group by UnifiConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnifiConnectionGroupByArgs} args - Group by arguments.
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
      T extends UnifiConnectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnifiConnectionGroupByArgs['orderBy'] }
        : { orderBy?: UnifiConnectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnifiConnectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnifiConnectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UnifiConnection model
   */
  readonly fields: UnifiConnectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UnifiConnection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnifiConnectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UnifiConnection model
   */
  interface UnifiConnectionFieldRefs {
    readonly id: FieldRef<"UnifiConnection", 'String'>
    readonly organizationId: FieldRef<"UnifiConnection", 'String'>
    readonly locationId: FieldRef<"UnifiConnection", 'String'>
    readonly name: FieldRef<"UnifiConnection", 'String'>
    readonly host: FieldRef<"UnifiConnection", 'String'>
    readonly port: FieldRef<"UnifiConnection", 'Int'>
    readonly apiKey: FieldRef<"UnifiConnection", 'String'>
    readonly sslVerify: FieldRef<"UnifiConnection", 'Boolean'>
    readonly isConnected: FieldRef<"UnifiConnection", 'Boolean'>
    readonly lastSync: FieldRef<"UnifiConnection", 'DateTime'>
    readonly createdAt: FieldRef<"UnifiConnection", 'DateTime'>
    readonly updatedAt: FieldRef<"UnifiConnection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UnifiConnection findUnique
   */
  export type UnifiConnectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiConnection
     */
    select?: UnifiConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnifiConnection
     */
    omit?: UnifiConnectionOmit<ExtArgs> | null
    /**
     * Filter, which UnifiConnection to fetch.
     */
    where: UnifiConnectionWhereUniqueInput
  }

  /**
   * UnifiConnection findUniqueOrThrow
   */
  export type UnifiConnectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiConnection
     */
    select?: UnifiConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnifiConnection
     */
    omit?: UnifiConnectionOmit<ExtArgs> | null
    /**
     * Filter, which UnifiConnection to fetch.
     */
    where: UnifiConnectionWhereUniqueInput
  }

  /**
   * UnifiConnection findFirst
   */
  export type UnifiConnectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiConnection
     */
    select?: UnifiConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnifiConnection
     */
    omit?: UnifiConnectionOmit<ExtArgs> | null
    /**
     * Filter, which UnifiConnection to fetch.
     */
    where?: UnifiConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnifiConnections to fetch.
     */
    orderBy?: UnifiConnectionOrderByWithRelationInput | UnifiConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnifiConnections.
     */
    cursor?: UnifiConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnifiConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnifiConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnifiConnections.
     */
    distinct?: UnifiConnectionScalarFieldEnum | UnifiConnectionScalarFieldEnum[]
  }

  /**
   * UnifiConnection findFirstOrThrow
   */
  export type UnifiConnectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiConnection
     */
    select?: UnifiConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnifiConnection
     */
    omit?: UnifiConnectionOmit<ExtArgs> | null
    /**
     * Filter, which UnifiConnection to fetch.
     */
    where?: UnifiConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnifiConnections to fetch.
     */
    orderBy?: UnifiConnectionOrderByWithRelationInput | UnifiConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnifiConnections.
     */
    cursor?: UnifiConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnifiConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnifiConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnifiConnections.
     */
    distinct?: UnifiConnectionScalarFieldEnum | UnifiConnectionScalarFieldEnum[]
  }

  /**
   * UnifiConnection findMany
   */
  export type UnifiConnectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiConnection
     */
    select?: UnifiConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnifiConnection
     */
    omit?: UnifiConnectionOmit<ExtArgs> | null
    /**
     * Filter, which UnifiConnections to fetch.
     */
    where?: UnifiConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnifiConnections to fetch.
     */
    orderBy?: UnifiConnectionOrderByWithRelationInput | UnifiConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UnifiConnections.
     */
    cursor?: UnifiConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnifiConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnifiConnections.
     */
    skip?: number
    distinct?: UnifiConnectionScalarFieldEnum | UnifiConnectionScalarFieldEnum[]
  }

  /**
   * UnifiConnection create
   */
  export type UnifiConnectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiConnection
     */
    select?: UnifiConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnifiConnection
     */
    omit?: UnifiConnectionOmit<ExtArgs> | null
    /**
     * The data needed to create a UnifiConnection.
     */
    data: XOR<UnifiConnectionCreateInput, UnifiConnectionUncheckedCreateInput>
  }

  /**
   * UnifiConnection createMany
   */
  export type UnifiConnectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UnifiConnections.
     */
    data: UnifiConnectionCreateManyInput | UnifiConnectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UnifiConnection createManyAndReturn
   */
  export type UnifiConnectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiConnection
     */
    select?: UnifiConnectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnifiConnection
     */
    omit?: UnifiConnectionOmit<ExtArgs> | null
    /**
     * The data used to create many UnifiConnections.
     */
    data: UnifiConnectionCreateManyInput | UnifiConnectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UnifiConnection update
   */
  export type UnifiConnectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiConnection
     */
    select?: UnifiConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnifiConnection
     */
    omit?: UnifiConnectionOmit<ExtArgs> | null
    /**
     * The data needed to update a UnifiConnection.
     */
    data: XOR<UnifiConnectionUpdateInput, UnifiConnectionUncheckedUpdateInput>
    /**
     * Choose, which UnifiConnection to update.
     */
    where: UnifiConnectionWhereUniqueInput
  }

  /**
   * UnifiConnection updateMany
   */
  export type UnifiConnectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UnifiConnections.
     */
    data: XOR<UnifiConnectionUpdateManyMutationInput, UnifiConnectionUncheckedUpdateManyInput>
    /**
     * Filter which UnifiConnections to update
     */
    where?: UnifiConnectionWhereInput
    /**
     * Limit how many UnifiConnections to update.
     */
    limit?: number
  }

  /**
   * UnifiConnection updateManyAndReturn
   */
  export type UnifiConnectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiConnection
     */
    select?: UnifiConnectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnifiConnection
     */
    omit?: UnifiConnectionOmit<ExtArgs> | null
    /**
     * The data used to update UnifiConnections.
     */
    data: XOR<UnifiConnectionUpdateManyMutationInput, UnifiConnectionUncheckedUpdateManyInput>
    /**
     * Filter which UnifiConnections to update
     */
    where?: UnifiConnectionWhereInput
    /**
     * Limit how many UnifiConnections to update.
     */
    limit?: number
  }

  /**
   * UnifiConnection upsert
   */
  export type UnifiConnectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiConnection
     */
    select?: UnifiConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnifiConnection
     */
    omit?: UnifiConnectionOmit<ExtArgs> | null
    /**
     * The filter to search for the UnifiConnection to update in case it exists.
     */
    where: UnifiConnectionWhereUniqueInput
    /**
     * In case the UnifiConnection found by the `where` argument doesn't exist, create a new UnifiConnection with this data.
     */
    create: XOR<UnifiConnectionCreateInput, UnifiConnectionUncheckedCreateInput>
    /**
     * In case the UnifiConnection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnifiConnectionUpdateInput, UnifiConnectionUncheckedUpdateInput>
  }

  /**
   * UnifiConnection delete
   */
  export type UnifiConnectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiConnection
     */
    select?: UnifiConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnifiConnection
     */
    omit?: UnifiConnectionOmit<ExtArgs> | null
    /**
     * Filter which UnifiConnection to delete.
     */
    where: UnifiConnectionWhereUniqueInput
  }

  /**
   * UnifiConnection deleteMany
   */
  export type UnifiConnectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnifiConnections to delete
     */
    where?: UnifiConnectionWhereInput
    /**
     * Limit how many UnifiConnections to delete.
     */
    limit?: number
  }

  /**
   * UnifiConnection without action
   */
  export type UnifiConnectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnifiConnection
     */
    select?: UnifiConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnifiConnection
     */
    omit?: UnifiConnectionOmit<ExtArgs> | null
  }


  /**
   * Model DeviceAssignment
   */

  export type AggregateDeviceAssignment = {
    _count: DeviceAssignmentCountAggregateOutputType | null
    _min: DeviceAssignmentMinAggregateOutputType | null
    _max: DeviceAssignmentMaxAggregateOutputType | null
  }

  export type DeviceAssignmentMinAggregateOutputType = {
    id: string | null
    deviceId: string | null
    organizationId: string | null
    locationId: string | null
    assignedAt: Date | null
    assignedBy: string | null
    createdAt: Date | null
  }

  export type DeviceAssignmentMaxAggregateOutputType = {
    id: string | null
    deviceId: string | null
    organizationId: string | null
    locationId: string | null
    assignedAt: Date | null
    assignedBy: string | null
    createdAt: Date | null
  }

  export type DeviceAssignmentCountAggregateOutputType = {
    id: number
    deviceId: number
    organizationId: number
    locationId: number
    assignedAt: number
    assignedBy: number
    createdAt: number
    _all: number
  }


  export type DeviceAssignmentMinAggregateInputType = {
    id?: true
    deviceId?: true
    organizationId?: true
    locationId?: true
    assignedAt?: true
    assignedBy?: true
    createdAt?: true
  }

  export type DeviceAssignmentMaxAggregateInputType = {
    id?: true
    deviceId?: true
    organizationId?: true
    locationId?: true
    assignedAt?: true
    assignedBy?: true
    createdAt?: true
  }

  export type DeviceAssignmentCountAggregateInputType = {
    id?: true
    deviceId?: true
    organizationId?: true
    locationId?: true
    assignedAt?: true
    assignedBy?: true
    createdAt?: true
    _all?: true
  }

  export type DeviceAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceAssignment to aggregate.
     */
    where?: DeviceAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceAssignments to fetch.
     */
    orderBy?: DeviceAssignmentOrderByWithRelationInput | DeviceAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeviceAssignments
    **/
    _count?: true | DeviceAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceAssignmentMaxAggregateInputType
  }

  export type GetDeviceAssignmentAggregateType<T extends DeviceAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDeviceAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeviceAssignment[P]>
      : GetScalarType<T[P], AggregateDeviceAssignment[P]>
  }




  export type DeviceAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceAssignmentWhereInput
    orderBy?: DeviceAssignmentOrderByWithAggregationInput | DeviceAssignmentOrderByWithAggregationInput[]
    by: DeviceAssignmentScalarFieldEnum[] | DeviceAssignmentScalarFieldEnum
    having?: DeviceAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceAssignmentCountAggregateInputType | true
    _min?: DeviceAssignmentMinAggregateInputType
    _max?: DeviceAssignmentMaxAggregateInputType
  }

  export type DeviceAssignmentGroupByOutputType = {
    id: string
    deviceId: string
    organizationId: string
    locationId: string | null
    assignedAt: Date
    assignedBy: string | null
    createdAt: Date
    _count: DeviceAssignmentCountAggregateOutputType | null
    _min: DeviceAssignmentMinAggregateOutputType | null
    _max: DeviceAssignmentMaxAggregateOutputType | null
  }

  type GetDeviceAssignmentGroupByPayload<T extends DeviceAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type DeviceAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    organizationId?: boolean
    locationId?: boolean
    assignedAt?: boolean
    assignedBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["deviceAssignment"]>

  export type DeviceAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    organizationId?: boolean
    locationId?: boolean
    assignedAt?: boolean
    assignedBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["deviceAssignment"]>

  export type DeviceAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    organizationId?: boolean
    locationId?: boolean
    assignedAt?: boolean
    assignedBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["deviceAssignment"]>

  export type DeviceAssignmentSelectScalar = {
    id?: boolean
    deviceId?: boolean
    organizationId?: boolean
    locationId?: boolean
    assignedAt?: boolean
    assignedBy?: boolean
    createdAt?: boolean
  }

  export type DeviceAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deviceId" | "organizationId" | "locationId" | "assignedAt" | "assignedBy" | "createdAt", ExtArgs["result"]["deviceAssignment"]>

  export type $DeviceAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeviceAssignment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      deviceId: string
      organizationId: string
      locationId: string | null
      assignedAt: Date
      assignedBy: string | null
      createdAt: Date
    }, ExtArgs["result"]["deviceAssignment"]>
    composites: {}
  }

  type DeviceAssignmentGetPayload<S extends boolean | null | undefined | DeviceAssignmentDefaultArgs> = $Result.GetResult<Prisma.$DeviceAssignmentPayload, S>

  type DeviceAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceAssignmentCountAggregateInputType | true
    }

  export interface DeviceAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeviceAssignment'], meta: { name: 'DeviceAssignment' } }
    /**
     * Find zero or one DeviceAssignment that matches the filter.
     * @param {DeviceAssignmentFindUniqueArgs} args - Arguments to find a DeviceAssignment
     * @example
     * // Get one DeviceAssignment
     * const deviceAssignment = await prisma.deviceAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceAssignmentFindUniqueArgs>(args: SelectSubset<T, DeviceAssignmentFindUniqueArgs<ExtArgs>>): Prisma__DeviceAssignmentClient<$Result.GetResult<Prisma.$DeviceAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeviceAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceAssignmentFindUniqueOrThrowArgs} args - Arguments to find a DeviceAssignment
     * @example
     * // Get one DeviceAssignment
     * const deviceAssignment = await prisma.deviceAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceAssignmentClient<$Result.GetResult<Prisma.$DeviceAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAssignmentFindFirstArgs} args - Arguments to find a DeviceAssignment
     * @example
     * // Get one DeviceAssignment
     * const deviceAssignment = await prisma.deviceAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceAssignmentFindFirstArgs>(args?: SelectSubset<T, DeviceAssignmentFindFirstArgs<ExtArgs>>): Prisma__DeviceAssignmentClient<$Result.GetResult<Prisma.$DeviceAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAssignmentFindFirstOrThrowArgs} args - Arguments to find a DeviceAssignment
     * @example
     * // Get one DeviceAssignment
     * const deviceAssignment = await prisma.deviceAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceAssignmentClient<$Result.GetResult<Prisma.$DeviceAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeviceAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceAssignments
     * const deviceAssignments = await prisma.deviceAssignment.findMany()
     * 
     * // Get first 10 DeviceAssignments
     * const deviceAssignments = await prisma.deviceAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceAssignmentWithIdOnly = await prisma.deviceAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceAssignmentFindManyArgs>(args?: SelectSubset<T, DeviceAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeviceAssignment.
     * @param {DeviceAssignmentCreateArgs} args - Arguments to create a DeviceAssignment.
     * @example
     * // Create one DeviceAssignment
     * const DeviceAssignment = await prisma.deviceAssignment.create({
     *   data: {
     *     // ... data to create a DeviceAssignment
     *   }
     * })
     * 
     */
    create<T extends DeviceAssignmentCreateArgs>(args: SelectSubset<T, DeviceAssignmentCreateArgs<ExtArgs>>): Prisma__DeviceAssignmentClient<$Result.GetResult<Prisma.$DeviceAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeviceAssignments.
     * @param {DeviceAssignmentCreateManyArgs} args - Arguments to create many DeviceAssignments.
     * @example
     * // Create many DeviceAssignments
     * const deviceAssignment = await prisma.deviceAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceAssignmentCreateManyArgs>(args?: SelectSubset<T, DeviceAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeviceAssignments and returns the data saved in the database.
     * @param {DeviceAssignmentCreateManyAndReturnArgs} args - Arguments to create many DeviceAssignments.
     * @example
     * // Create many DeviceAssignments
     * const deviceAssignment = await prisma.deviceAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeviceAssignments and only return the `id`
     * const deviceAssignmentWithIdOnly = await prisma.deviceAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeviceAssignment.
     * @param {DeviceAssignmentDeleteArgs} args - Arguments to delete one DeviceAssignment.
     * @example
     * // Delete one DeviceAssignment
     * const DeviceAssignment = await prisma.deviceAssignment.delete({
     *   where: {
     *     // ... filter to delete one DeviceAssignment
     *   }
     * })
     * 
     */
    delete<T extends DeviceAssignmentDeleteArgs>(args: SelectSubset<T, DeviceAssignmentDeleteArgs<ExtArgs>>): Prisma__DeviceAssignmentClient<$Result.GetResult<Prisma.$DeviceAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeviceAssignment.
     * @param {DeviceAssignmentUpdateArgs} args - Arguments to update one DeviceAssignment.
     * @example
     * // Update one DeviceAssignment
     * const deviceAssignment = await prisma.deviceAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceAssignmentUpdateArgs>(args: SelectSubset<T, DeviceAssignmentUpdateArgs<ExtArgs>>): Prisma__DeviceAssignmentClient<$Result.GetResult<Prisma.$DeviceAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeviceAssignments.
     * @param {DeviceAssignmentDeleteManyArgs} args - Arguments to filter DeviceAssignments to delete.
     * @example
     * // Delete a few DeviceAssignments
     * const { count } = await prisma.deviceAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceAssignmentDeleteManyArgs>(args?: SelectSubset<T, DeviceAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceAssignments
     * const deviceAssignment = await prisma.deviceAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceAssignmentUpdateManyArgs>(args: SelectSubset<T, DeviceAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceAssignments and returns the data updated in the database.
     * @param {DeviceAssignmentUpdateManyAndReturnArgs} args - Arguments to update many DeviceAssignments.
     * @example
     * // Update many DeviceAssignments
     * const deviceAssignment = await prisma.deviceAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeviceAssignments and only return the `id`
     * const deviceAssignmentWithIdOnly = await prisma.deviceAssignment.updateManyAndReturn({
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
    updateManyAndReturn<T extends DeviceAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeviceAssignment.
     * @param {DeviceAssignmentUpsertArgs} args - Arguments to update or create a DeviceAssignment.
     * @example
     * // Update or create a DeviceAssignment
     * const deviceAssignment = await prisma.deviceAssignment.upsert({
     *   create: {
     *     // ... data to create a DeviceAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceAssignment we want to update
     *   }
     * })
     */
    upsert<T extends DeviceAssignmentUpsertArgs>(args: SelectSubset<T, DeviceAssignmentUpsertArgs<ExtArgs>>): Prisma__DeviceAssignmentClient<$Result.GetResult<Prisma.$DeviceAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeviceAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAssignmentCountArgs} args - Arguments to filter DeviceAssignments to count.
     * @example
     * // Count the number of DeviceAssignments
     * const count = await prisma.deviceAssignment.count({
     *   where: {
     *     // ... the filter for the DeviceAssignments we want to count
     *   }
     * })
    **/
    count<T extends DeviceAssignmentCountArgs>(
      args?: Subset<T, DeviceAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeviceAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceAssignmentAggregateArgs>(args: Subset<T, DeviceAssignmentAggregateArgs>): Prisma.PrismaPromise<GetDeviceAssignmentAggregateType<T>>

    /**
     * Group by DeviceAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAssignmentGroupByArgs} args - Group by arguments.
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
      T extends DeviceAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: DeviceAssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeviceAssignment model
   */
  readonly fields: DeviceAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeviceAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DeviceAssignment model
   */
  interface DeviceAssignmentFieldRefs {
    readonly id: FieldRef<"DeviceAssignment", 'String'>
    readonly deviceId: FieldRef<"DeviceAssignment", 'String'>
    readonly organizationId: FieldRef<"DeviceAssignment", 'String'>
    readonly locationId: FieldRef<"DeviceAssignment", 'String'>
    readonly assignedAt: FieldRef<"DeviceAssignment", 'DateTime'>
    readonly assignedBy: FieldRef<"DeviceAssignment", 'String'>
    readonly createdAt: FieldRef<"DeviceAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DeviceAssignment findUnique
   */
  export type DeviceAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceAssignment
     */
    select?: DeviceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceAssignment
     */
    omit?: DeviceAssignmentOmit<ExtArgs> | null
    /**
     * Filter, which DeviceAssignment to fetch.
     */
    where: DeviceAssignmentWhereUniqueInput
  }

  /**
   * DeviceAssignment findUniqueOrThrow
   */
  export type DeviceAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceAssignment
     */
    select?: DeviceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceAssignment
     */
    omit?: DeviceAssignmentOmit<ExtArgs> | null
    /**
     * Filter, which DeviceAssignment to fetch.
     */
    where: DeviceAssignmentWhereUniqueInput
  }

  /**
   * DeviceAssignment findFirst
   */
  export type DeviceAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceAssignment
     */
    select?: DeviceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceAssignment
     */
    omit?: DeviceAssignmentOmit<ExtArgs> | null
    /**
     * Filter, which DeviceAssignment to fetch.
     */
    where?: DeviceAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceAssignments to fetch.
     */
    orderBy?: DeviceAssignmentOrderByWithRelationInput | DeviceAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceAssignments.
     */
    cursor?: DeviceAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceAssignments.
     */
    distinct?: DeviceAssignmentScalarFieldEnum | DeviceAssignmentScalarFieldEnum[]
  }

  /**
   * DeviceAssignment findFirstOrThrow
   */
  export type DeviceAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceAssignment
     */
    select?: DeviceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceAssignment
     */
    omit?: DeviceAssignmentOmit<ExtArgs> | null
    /**
     * Filter, which DeviceAssignment to fetch.
     */
    where?: DeviceAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceAssignments to fetch.
     */
    orderBy?: DeviceAssignmentOrderByWithRelationInput | DeviceAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceAssignments.
     */
    cursor?: DeviceAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceAssignments.
     */
    distinct?: DeviceAssignmentScalarFieldEnum | DeviceAssignmentScalarFieldEnum[]
  }

  /**
   * DeviceAssignment findMany
   */
  export type DeviceAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceAssignment
     */
    select?: DeviceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceAssignment
     */
    omit?: DeviceAssignmentOmit<ExtArgs> | null
    /**
     * Filter, which DeviceAssignments to fetch.
     */
    where?: DeviceAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceAssignments to fetch.
     */
    orderBy?: DeviceAssignmentOrderByWithRelationInput | DeviceAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeviceAssignments.
     */
    cursor?: DeviceAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceAssignments.
     */
    skip?: number
    distinct?: DeviceAssignmentScalarFieldEnum | DeviceAssignmentScalarFieldEnum[]
  }

  /**
   * DeviceAssignment create
   */
  export type DeviceAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceAssignment
     */
    select?: DeviceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceAssignment
     */
    omit?: DeviceAssignmentOmit<ExtArgs> | null
    /**
     * The data needed to create a DeviceAssignment.
     */
    data: XOR<DeviceAssignmentCreateInput, DeviceAssignmentUncheckedCreateInput>
  }

  /**
   * DeviceAssignment createMany
   */
  export type DeviceAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceAssignments.
     */
    data: DeviceAssignmentCreateManyInput | DeviceAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeviceAssignment createManyAndReturn
   */
  export type DeviceAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceAssignment
     */
    select?: DeviceAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceAssignment
     */
    omit?: DeviceAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many DeviceAssignments.
     */
    data: DeviceAssignmentCreateManyInput | DeviceAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeviceAssignment update
   */
  export type DeviceAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceAssignment
     */
    select?: DeviceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceAssignment
     */
    omit?: DeviceAssignmentOmit<ExtArgs> | null
    /**
     * The data needed to update a DeviceAssignment.
     */
    data: XOR<DeviceAssignmentUpdateInput, DeviceAssignmentUncheckedUpdateInput>
    /**
     * Choose, which DeviceAssignment to update.
     */
    where: DeviceAssignmentWhereUniqueInput
  }

  /**
   * DeviceAssignment updateMany
   */
  export type DeviceAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceAssignments.
     */
    data: XOR<DeviceAssignmentUpdateManyMutationInput, DeviceAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which DeviceAssignments to update
     */
    where?: DeviceAssignmentWhereInput
    /**
     * Limit how many DeviceAssignments to update.
     */
    limit?: number
  }

  /**
   * DeviceAssignment updateManyAndReturn
   */
  export type DeviceAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceAssignment
     */
    select?: DeviceAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceAssignment
     */
    omit?: DeviceAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update DeviceAssignments.
     */
    data: XOR<DeviceAssignmentUpdateManyMutationInput, DeviceAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which DeviceAssignments to update
     */
    where?: DeviceAssignmentWhereInput
    /**
     * Limit how many DeviceAssignments to update.
     */
    limit?: number
  }

  /**
   * DeviceAssignment upsert
   */
  export type DeviceAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceAssignment
     */
    select?: DeviceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceAssignment
     */
    omit?: DeviceAssignmentOmit<ExtArgs> | null
    /**
     * The filter to search for the DeviceAssignment to update in case it exists.
     */
    where: DeviceAssignmentWhereUniqueInput
    /**
     * In case the DeviceAssignment found by the `where` argument doesn't exist, create a new DeviceAssignment with this data.
     */
    create: XOR<DeviceAssignmentCreateInput, DeviceAssignmentUncheckedCreateInput>
    /**
     * In case the DeviceAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceAssignmentUpdateInput, DeviceAssignmentUncheckedUpdateInput>
  }

  /**
   * DeviceAssignment delete
   */
  export type DeviceAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceAssignment
     */
    select?: DeviceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceAssignment
     */
    omit?: DeviceAssignmentOmit<ExtArgs> | null
    /**
     * Filter which DeviceAssignment to delete.
     */
    where: DeviceAssignmentWhereUniqueInput
  }

  /**
   * DeviceAssignment deleteMany
   */
  export type DeviceAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceAssignments to delete
     */
    where?: DeviceAssignmentWhereInput
    /**
     * Limit how many DeviceAssignments to delete.
     */
    limit?: number
  }

  /**
   * DeviceAssignment without action
   */
  export type DeviceAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceAssignment
     */
    select?: DeviceAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceAssignment
     */
    omit?: DeviceAssignmentOmit<ExtArgs> | null
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


  export const DeviceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    name: 'name',
    type: 'type',
    status: 'status',
    locationId: 'locationId',
    metadata: 'metadata',
    lastSeen: 'lastSeen',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const HardwareProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    sku: 'sku',
    price: 'price',
    categoryId: 'categoryId',
    brand: 'brand',
    imageUrl: 'imageUrl',
    specifications: 'specifications',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HardwareProductScalarFieldEnum = (typeof HardwareProductScalarFieldEnum)[keyof typeof HardwareProductScalarFieldEnum]


  export const HardwareBundleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    sku: 'sku',
    price: 'price',
    productIds: 'productIds',
    imageUrl: 'imageUrl',
    discount: 'discount',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HardwareBundleScalarFieldEnum = (typeof HardwareBundleScalarFieldEnum)[keyof typeof HardwareBundleScalarFieldEnum]


  export const HardwareCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    parentId: 'parentId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HardwareCategoryScalarFieldEnum = (typeof HardwareCategoryScalarFieldEnum)[keyof typeof HardwareCategoryScalarFieldEnum]


  export const SunmiConfigScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    apiUrl: 'apiUrl',
    apiKey: 'apiKey',
    appId: 'appId',
    deviceSn: 'deviceSn',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SunmiConfigScalarFieldEnum = (typeof SunmiConfigScalarFieldEnum)[keyof typeof SunmiConfigScalarFieldEnum]


  export const UnifiConnectionScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    locationId: 'locationId',
    name: 'name',
    host: 'host',
    port: 'port',
    apiKey: 'apiKey',
    sslVerify: 'sslVerify',
    isConnected: 'isConnected',
    lastSync: 'lastSync',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UnifiConnectionScalarFieldEnum = (typeof UnifiConnectionScalarFieldEnum)[keyof typeof UnifiConnectionScalarFieldEnum]


  export const DeviceAssignmentScalarFieldEnum: {
    id: 'id',
    deviceId: 'deviceId',
    organizationId: 'organizationId',
    locationId: 'locationId',
    assignedAt: 'assignedAt',
    assignedBy: 'assignedBy',
    createdAt: 'createdAt'
  };

  export type DeviceAssignmentScalarFieldEnum = (typeof DeviceAssignmentScalarFieldEnum)[keyof typeof DeviceAssignmentScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id?: UuidFilter<"Device"> | string
    userId?: UuidFilter<"Device"> | string
    organizationId?: UuidNullableFilter<"Device"> | string | null
    name?: StringFilter<"Device"> | string
    type?: StringNullableFilter<"Device"> | string | null
    status?: StringNullableFilter<"Device"> | string | null
    locationId?: UuidNullableFilter<"Device"> | string | null
    metadata?: JsonNullableFilter<"Device">
    lastSeen?: DateTimeNullableFilter<"Device"> | Date | string | null
    isActive?: BoolFilter<"Device"> | boolean
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
  }

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    name?: SortOrder
    type?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    locationId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    lastSeen?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    userId?: UuidFilter<"Device"> | string
    organizationId?: UuidNullableFilter<"Device"> | string | null
    name?: StringFilter<"Device"> | string
    type?: StringNullableFilter<"Device"> | string | null
    status?: StringNullableFilter<"Device"> | string | null
    locationId?: UuidNullableFilter<"Device"> | string | null
    metadata?: JsonNullableFilter<"Device">
    lastSeen?: DateTimeNullableFilter<"Device"> | Date | string | null
    isActive?: BoolFilter<"Device"> | boolean
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
  }, "id">

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    name?: SortOrder
    type?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    locationId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    lastSeen?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Device"> | string
    userId?: UuidWithAggregatesFilter<"Device"> | string
    organizationId?: UuidNullableWithAggregatesFilter<"Device"> | string | null
    name?: StringWithAggregatesFilter<"Device"> | string
    type?: StringNullableWithAggregatesFilter<"Device"> | string | null
    status?: StringNullableWithAggregatesFilter<"Device"> | string | null
    locationId?: UuidNullableWithAggregatesFilter<"Device"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Device">
    lastSeen?: DateTimeNullableWithAggregatesFilter<"Device"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"Device"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
  }

  export type HardwareProductWhereInput = {
    AND?: HardwareProductWhereInput | HardwareProductWhereInput[]
    OR?: HardwareProductWhereInput[]
    NOT?: HardwareProductWhereInput | HardwareProductWhereInput[]
    id?: UuidFilter<"HardwareProduct"> | string
    name?: StringFilter<"HardwareProduct"> | string
    description?: StringNullableFilter<"HardwareProduct"> | string | null
    sku?: StringFilter<"HardwareProduct"> | string
    price?: DecimalFilter<"HardwareProduct"> | Decimal | DecimalJsLike | number | string
    categoryId?: UuidNullableFilter<"HardwareProduct"> | string | null
    brand?: StringNullableFilter<"HardwareProduct"> | string | null
    imageUrl?: StringNullableFilter<"HardwareProduct"> | string | null
    specifications?: JsonNullableFilter<"HardwareProduct">
    isActive?: BoolFilter<"HardwareProduct"> | boolean
    createdAt?: DateTimeFilter<"HardwareProduct"> | Date | string
    updatedAt?: DateTimeFilter<"HardwareProduct"> | Date | string
  }

  export type HardwareProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    sku?: SortOrder
    price?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    specifications?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HardwareProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sku?: string
    AND?: HardwareProductWhereInput | HardwareProductWhereInput[]
    OR?: HardwareProductWhereInput[]
    NOT?: HardwareProductWhereInput | HardwareProductWhereInput[]
    name?: StringFilter<"HardwareProduct"> | string
    description?: StringNullableFilter<"HardwareProduct"> | string | null
    price?: DecimalFilter<"HardwareProduct"> | Decimal | DecimalJsLike | number | string
    categoryId?: UuidNullableFilter<"HardwareProduct"> | string | null
    brand?: StringNullableFilter<"HardwareProduct"> | string | null
    imageUrl?: StringNullableFilter<"HardwareProduct"> | string | null
    specifications?: JsonNullableFilter<"HardwareProduct">
    isActive?: BoolFilter<"HardwareProduct"> | boolean
    createdAt?: DateTimeFilter<"HardwareProduct"> | Date | string
    updatedAt?: DateTimeFilter<"HardwareProduct"> | Date | string
  }, "id" | "sku">

  export type HardwareProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    sku?: SortOrder
    price?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    specifications?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HardwareProductCountOrderByAggregateInput
    _avg?: HardwareProductAvgOrderByAggregateInput
    _max?: HardwareProductMaxOrderByAggregateInput
    _min?: HardwareProductMinOrderByAggregateInput
    _sum?: HardwareProductSumOrderByAggregateInput
  }

  export type HardwareProductScalarWhereWithAggregatesInput = {
    AND?: HardwareProductScalarWhereWithAggregatesInput | HardwareProductScalarWhereWithAggregatesInput[]
    OR?: HardwareProductScalarWhereWithAggregatesInput[]
    NOT?: HardwareProductScalarWhereWithAggregatesInput | HardwareProductScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"HardwareProduct"> | string
    name?: StringWithAggregatesFilter<"HardwareProduct"> | string
    description?: StringNullableWithAggregatesFilter<"HardwareProduct"> | string | null
    sku?: StringWithAggregatesFilter<"HardwareProduct"> | string
    price?: DecimalWithAggregatesFilter<"HardwareProduct"> | Decimal | DecimalJsLike | number | string
    categoryId?: UuidNullableWithAggregatesFilter<"HardwareProduct"> | string | null
    brand?: StringNullableWithAggregatesFilter<"HardwareProduct"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"HardwareProduct"> | string | null
    specifications?: JsonNullableWithAggregatesFilter<"HardwareProduct">
    isActive?: BoolWithAggregatesFilter<"HardwareProduct"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"HardwareProduct"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HardwareProduct"> | Date | string
  }

  export type HardwareBundleWhereInput = {
    AND?: HardwareBundleWhereInput | HardwareBundleWhereInput[]
    OR?: HardwareBundleWhereInput[]
    NOT?: HardwareBundleWhereInput | HardwareBundleWhereInput[]
    id?: UuidFilter<"HardwareBundle"> | string
    name?: StringFilter<"HardwareBundle"> | string
    description?: StringNullableFilter<"HardwareBundle"> | string | null
    sku?: StringFilter<"HardwareBundle"> | string
    price?: DecimalFilter<"HardwareBundle"> | Decimal | DecimalJsLike | number | string
    productIds?: StringNullableListFilter<"HardwareBundle">
    imageUrl?: StringNullableFilter<"HardwareBundle"> | string | null
    discount?: DecimalNullableFilter<"HardwareBundle"> | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFilter<"HardwareBundle"> | boolean
    createdAt?: DateTimeFilter<"HardwareBundle"> | Date | string
    updatedAt?: DateTimeFilter<"HardwareBundle"> | Date | string
  }

  export type HardwareBundleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    sku?: SortOrder
    price?: SortOrder
    productIds?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    discount?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HardwareBundleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sku?: string
    AND?: HardwareBundleWhereInput | HardwareBundleWhereInput[]
    OR?: HardwareBundleWhereInput[]
    NOT?: HardwareBundleWhereInput | HardwareBundleWhereInput[]
    name?: StringFilter<"HardwareBundle"> | string
    description?: StringNullableFilter<"HardwareBundle"> | string | null
    price?: DecimalFilter<"HardwareBundle"> | Decimal | DecimalJsLike | number | string
    productIds?: StringNullableListFilter<"HardwareBundle">
    imageUrl?: StringNullableFilter<"HardwareBundle"> | string | null
    discount?: DecimalNullableFilter<"HardwareBundle"> | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFilter<"HardwareBundle"> | boolean
    createdAt?: DateTimeFilter<"HardwareBundle"> | Date | string
    updatedAt?: DateTimeFilter<"HardwareBundle"> | Date | string
  }, "id" | "sku">

  export type HardwareBundleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    sku?: SortOrder
    price?: SortOrder
    productIds?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    discount?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HardwareBundleCountOrderByAggregateInput
    _avg?: HardwareBundleAvgOrderByAggregateInput
    _max?: HardwareBundleMaxOrderByAggregateInput
    _min?: HardwareBundleMinOrderByAggregateInput
    _sum?: HardwareBundleSumOrderByAggregateInput
  }

  export type HardwareBundleScalarWhereWithAggregatesInput = {
    AND?: HardwareBundleScalarWhereWithAggregatesInput | HardwareBundleScalarWhereWithAggregatesInput[]
    OR?: HardwareBundleScalarWhereWithAggregatesInput[]
    NOT?: HardwareBundleScalarWhereWithAggregatesInput | HardwareBundleScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"HardwareBundle"> | string
    name?: StringWithAggregatesFilter<"HardwareBundle"> | string
    description?: StringNullableWithAggregatesFilter<"HardwareBundle"> | string | null
    sku?: StringWithAggregatesFilter<"HardwareBundle"> | string
    price?: DecimalWithAggregatesFilter<"HardwareBundle"> | Decimal | DecimalJsLike | number | string
    productIds?: StringNullableListFilter<"HardwareBundle">
    imageUrl?: StringNullableWithAggregatesFilter<"HardwareBundle"> | string | null
    discount?: DecimalNullableWithAggregatesFilter<"HardwareBundle"> | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolWithAggregatesFilter<"HardwareBundle"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"HardwareBundle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HardwareBundle"> | Date | string
  }

  export type HardwareCategoryWhereInput = {
    AND?: HardwareCategoryWhereInput | HardwareCategoryWhereInput[]
    OR?: HardwareCategoryWhereInput[]
    NOT?: HardwareCategoryWhereInput | HardwareCategoryWhereInput[]
    id?: UuidFilter<"HardwareCategory"> | string
    name?: StringFilter<"HardwareCategory"> | string
    description?: StringNullableFilter<"HardwareCategory"> | string | null
    parentId?: UuidNullableFilter<"HardwareCategory"> | string | null
    isActive?: BoolFilter<"HardwareCategory"> | boolean
    createdAt?: DateTimeFilter<"HardwareCategory"> | Date | string
    updatedAt?: DateTimeFilter<"HardwareCategory"> | Date | string
  }

  export type HardwareCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HardwareCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HardwareCategoryWhereInput | HardwareCategoryWhereInput[]
    OR?: HardwareCategoryWhereInput[]
    NOT?: HardwareCategoryWhereInput | HardwareCategoryWhereInput[]
    name?: StringFilter<"HardwareCategory"> | string
    description?: StringNullableFilter<"HardwareCategory"> | string | null
    parentId?: UuidNullableFilter<"HardwareCategory"> | string | null
    isActive?: BoolFilter<"HardwareCategory"> | boolean
    createdAt?: DateTimeFilter<"HardwareCategory"> | Date | string
    updatedAt?: DateTimeFilter<"HardwareCategory"> | Date | string
  }, "id">

  export type HardwareCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HardwareCategoryCountOrderByAggregateInput
    _max?: HardwareCategoryMaxOrderByAggregateInput
    _min?: HardwareCategoryMinOrderByAggregateInput
  }

  export type HardwareCategoryScalarWhereWithAggregatesInput = {
    AND?: HardwareCategoryScalarWhereWithAggregatesInput | HardwareCategoryScalarWhereWithAggregatesInput[]
    OR?: HardwareCategoryScalarWhereWithAggregatesInput[]
    NOT?: HardwareCategoryScalarWhereWithAggregatesInput | HardwareCategoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"HardwareCategory"> | string
    name?: StringWithAggregatesFilter<"HardwareCategory"> | string
    description?: StringNullableWithAggregatesFilter<"HardwareCategory"> | string | null
    parentId?: UuidNullableWithAggregatesFilter<"HardwareCategory"> | string | null
    isActive?: BoolWithAggregatesFilter<"HardwareCategory"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"HardwareCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HardwareCategory"> | Date | string
  }

  export type SunmiConfigWhereInput = {
    AND?: SunmiConfigWhereInput | SunmiConfigWhereInput[]
    OR?: SunmiConfigWhereInput[]
    NOT?: SunmiConfigWhereInput | SunmiConfigWhereInput[]
    id?: UuidFilter<"SunmiConfig"> | string
    organizationId?: UuidNullableFilter<"SunmiConfig"> | string | null
    apiUrl?: StringNullableFilter<"SunmiConfig"> | string | null
    apiKey?: StringNullableFilter<"SunmiConfig"> | string | null
    appId?: StringNullableFilter<"SunmiConfig"> | string | null
    deviceSn?: StringNullableFilter<"SunmiConfig"> | string | null
    isActive?: BoolFilter<"SunmiConfig"> | boolean
    createdAt?: DateTimeFilter<"SunmiConfig"> | Date | string
    updatedAt?: DateTimeFilter<"SunmiConfig"> | Date | string
  }

  export type SunmiConfigOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    apiUrl?: SortOrderInput | SortOrder
    apiKey?: SortOrderInput | SortOrder
    appId?: SortOrderInput | SortOrder
    deviceSn?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SunmiConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SunmiConfigWhereInput | SunmiConfigWhereInput[]
    OR?: SunmiConfigWhereInput[]
    NOT?: SunmiConfigWhereInput | SunmiConfigWhereInput[]
    organizationId?: UuidNullableFilter<"SunmiConfig"> | string | null
    apiUrl?: StringNullableFilter<"SunmiConfig"> | string | null
    apiKey?: StringNullableFilter<"SunmiConfig"> | string | null
    appId?: StringNullableFilter<"SunmiConfig"> | string | null
    deviceSn?: StringNullableFilter<"SunmiConfig"> | string | null
    isActive?: BoolFilter<"SunmiConfig"> | boolean
    createdAt?: DateTimeFilter<"SunmiConfig"> | Date | string
    updatedAt?: DateTimeFilter<"SunmiConfig"> | Date | string
  }, "id">

  export type SunmiConfigOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    apiUrl?: SortOrderInput | SortOrder
    apiKey?: SortOrderInput | SortOrder
    appId?: SortOrderInput | SortOrder
    deviceSn?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SunmiConfigCountOrderByAggregateInput
    _max?: SunmiConfigMaxOrderByAggregateInput
    _min?: SunmiConfigMinOrderByAggregateInput
  }

  export type SunmiConfigScalarWhereWithAggregatesInput = {
    AND?: SunmiConfigScalarWhereWithAggregatesInput | SunmiConfigScalarWhereWithAggregatesInput[]
    OR?: SunmiConfigScalarWhereWithAggregatesInput[]
    NOT?: SunmiConfigScalarWhereWithAggregatesInput | SunmiConfigScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"SunmiConfig"> | string
    organizationId?: UuidNullableWithAggregatesFilter<"SunmiConfig"> | string | null
    apiUrl?: StringNullableWithAggregatesFilter<"SunmiConfig"> | string | null
    apiKey?: StringNullableWithAggregatesFilter<"SunmiConfig"> | string | null
    appId?: StringNullableWithAggregatesFilter<"SunmiConfig"> | string | null
    deviceSn?: StringNullableWithAggregatesFilter<"SunmiConfig"> | string | null
    isActive?: BoolWithAggregatesFilter<"SunmiConfig"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SunmiConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SunmiConfig"> | Date | string
  }

  export type UnifiConnectionWhereInput = {
    AND?: UnifiConnectionWhereInput | UnifiConnectionWhereInput[]
    OR?: UnifiConnectionWhereInput[]
    NOT?: UnifiConnectionWhereInput | UnifiConnectionWhereInput[]
    id?: UuidFilter<"UnifiConnection"> | string
    organizationId?: UuidFilter<"UnifiConnection"> | string
    locationId?: UuidNullableFilter<"UnifiConnection"> | string | null
    name?: StringFilter<"UnifiConnection"> | string
    host?: StringFilter<"UnifiConnection"> | string
    port?: IntFilter<"UnifiConnection"> | number
    apiKey?: StringNullableFilter<"UnifiConnection"> | string | null
    sslVerify?: BoolFilter<"UnifiConnection"> | boolean
    isConnected?: BoolFilter<"UnifiConnection"> | boolean
    lastSync?: DateTimeNullableFilter<"UnifiConnection"> | Date | string | null
    createdAt?: DateTimeFilter<"UnifiConnection"> | Date | string
    updatedAt?: DateTimeFilter<"UnifiConnection"> | Date | string
  }

  export type UnifiConnectionOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    locationId?: SortOrderInput | SortOrder
    name?: SortOrder
    host?: SortOrder
    port?: SortOrder
    apiKey?: SortOrderInput | SortOrder
    sslVerify?: SortOrder
    isConnected?: SortOrder
    lastSync?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnifiConnectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UnifiConnectionWhereInput | UnifiConnectionWhereInput[]
    OR?: UnifiConnectionWhereInput[]
    NOT?: UnifiConnectionWhereInput | UnifiConnectionWhereInput[]
    organizationId?: UuidFilter<"UnifiConnection"> | string
    locationId?: UuidNullableFilter<"UnifiConnection"> | string | null
    name?: StringFilter<"UnifiConnection"> | string
    host?: StringFilter<"UnifiConnection"> | string
    port?: IntFilter<"UnifiConnection"> | number
    apiKey?: StringNullableFilter<"UnifiConnection"> | string | null
    sslVerify?: BoolFilter<"UnifiConnection"> | boolean
    isConnected?: BoolFilter<"UnifiConnection"> | boolean
    lastSync?: DateTimeNullableFilter<"UnifiConnection"> | Date | string | null
    createdAt?: DateTimeFilter<"UnifiConnection"> | Date | string
    updatedAt?: DateTimeFilter<"UnifiConnection"> | Date | string
  }, "id">

  export type UnifiConnectionOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    locationId?: SortOrderInput | SortOrder
    name?: SortOrder
    host?: SortOrder
    port?: SortOrder
    apiKey?: SortOrderInput | SortOrder
    sslVerify?: SortOrder
    isConnected?: SortOrder
    lastSync?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UnifiConnectionCountOrderByAggregateInput
    _avg?: UnifiConnectionAvgOrderByAggregateInput
    _max?: UnifiConnectionMaxOrderByAggregateInput
    _min?: UnifiConnectionMinOrderByAggregateInput
    _sum?: UnifiConnectionSumOrderByAggregateInput
  }

  export type UnifiConnectionScalarWhereWithAggregatesInput = {
    AND?: UnifiConnectionScalarWhereWithAggregatesInput | UnifiConnectionScalarWhereWithAggregatesInput[]
    OR?: UnifiConnectionScalarWhereWithAggregatesInput[]
    NOT?: UnifiConnectionScalarWhereWithAggregatesInput | UnifiConnectionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"UnifiConnection"> | string
    organizationId?: UuidWithAggregatesFilter<"UnifiConnection"> | string
    locationId?: UuidNullableWithAggregatesFilter<"UnifiConnection"> | string | null
    name?: StringWithAggregatesFilter<"UnifiConnection"> | string
    host?: StringWithAggregatesFilter<"UnifiConnection"> | string
    port?: IntWithAggregatesFilter<"UnifiConnection"> | number
    apiKey?: StringNullableWithAggregatesFilter<"UnifiConnection"> | string | null
    sslVerify?: BoolWithAggregatesFilter<"UnifiConnection"> | boolean
    isConnected?: BoolWithAggregatesFilter<"UnifiConnection"> | boolean
    lastSync?: DateTimeNullableWithAggregatesFilter<"UnifiConnection"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UnifiConnection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UnifiConnection"> | Date | string
  }

  export type DeviceAssignmentWhereInput = {
    AND?: DeviceAssignmentWhereInput | DeviceAssignmentWhereInput[]
    OR?: DeviceAssignmentWhereInput[]
    NOT?: DeviceAssignmentWhereInput | DeviceAssignmentWhereInput[]
    id?: UuidFilter<"DeviceAssignment"> | string
    deviceId?: UuidFilter<"DeviceAssignment"> | string
    organizationId?: UuidFilter<"DeviceAssignment"> | string
    locationId?: UuidNullableFilter<"DeviceAssignment"> | string | null
    assignedAt?: DateTimeFilter<"DeviceAssignment"> | Date | string
    assignedBy?: UuidNullableFilter<"DeviceAssignment"> | string | null
    createdAt?: DateTimeFilter<"DeviceAssignment"> | Date | string
  }

  export type DeviceAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    organizationId?: SortOrder
    locationId?: SortOrderInput | SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type DeviceAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeviceAssignmentWhereInput | DeviceAssignmentWhereInput[]
    OR?: DeviceAssignmentWhereInput[]
    NOT?: DeviceAssignmentWhereInput | DeviceAssignmentWhereInput[]
    deviceId?: UuidFilter<"DeviceAssignment"> | string
    organizationId?: UuidFilter<"DeviceAssignment"> | string
    locationId?: UuidNullableFilter<"DeviceAssignment"> | string | null
    assignedAt?: DateTimeFilter<"DeviceAssignment"> | Date | string
    assignedBy?: UuidNullableFilter<"DeviceAssignment"> | string | null
    createdAt?: DateTimeFilter<"DeviceAssignment"> | Date | string
  }, "id">

  export type DeviceAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    organizationId?: SortOrder
    locationId?: SortOrderInput | SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DeviceAssignmentCountOrderByAggregateInput
    _max?: DeviceAssignmentMaxOrderByAggregateInput
    _min?: DeviceAssignmentMinOrderByAggregateInput
  }

  export type DeviceAssignmentScalarWhereWithAggregatesInput = {
    AND?: DeviceAssignmentScalarWhereWithAggregatesInput | DeviceAssignmentScalarWhereWithAggregatesInput[]
    OR?: DeviceAssignmentScalarWhereWithAggregatesInput[]
    NOT?: DeviceAssignmentScalarWhereWithAggregatesInput | DeviceAssignmentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"DeviceAssignment"> | string
    deviceId?: UuidWithAggregatesFilter<"DeviceAssignment"> | string
    organizationId?: UuidWithAggregatesFilter<"DeviceAssignment"> | string
    locationId?: UuidNullableWithAggregatesFilter<"DeviceAssignment"> | string | null
    assignedAt?: DateTimeWithAggregatesFilter<"DeviceAssignment"> | Date | string
    assignedBy?: UuidNullableWithAggregatesFilter<"DeviceAssignment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DeviceAssignment"> | Date | string
  }

  export type DeviceCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    name: string
    type?: string | null
    status?: string | null
    locationId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    lastSeen?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceUncheckedCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    name: string
    type?: string | null
    status?: string | null
    locationId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    lastSeen?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceCreateManyInput = {
    id?: string
    userId: string
    organizationId?: string | null
    name: string
    type?: string | null
    status?: string | null
    locationId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    lastSeen?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HardwareProductCreateInput = {
    id?: string
    name: string
    description?: string | null
    sku: string
    price: Decimal | DecimalJsLike | number | string
    categoryId?: string | null
    brand?: string | null
    imageUrl?: string | null
    specifications?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HardwareProductUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    sku: string
    price: Decimal | DecimalJsLike | number | string
    categoryId?: string | null
    brand?: string | null
    imageUrl?: string | null
    specifications?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HardwareProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    specifications?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HardwareProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    specifications?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HardwareProductCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    sku: string
    price: Decimal | DecimalJsLike | number | string
    categoryId?: string | null
    brand?: string | null
    imageUrl?: string | null
    specifications?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HardwareProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    specifications?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HardwareProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    specifications?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HardwareBundleCreateInput = {
    id?: string
    name: string
    description?: string | null
    sku: string
    price: Decimal | DecimalJsLike | number | string
    productIds?: HardwareBundleCreateproductIdsInput | string[]
    imageUrl?: string | null
    discount?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HardwareBundleUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    sku: string
    price: Decimal | DecimalJsLike | number | string
    productIds?: HardwareBundleCreateproductIdsInput | string[]
    imageUrl?: string | null
    discount?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HardwareBundleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productIds?: HardwareBundleUpdateproductIdsInput | string[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HardwareBundleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productIds?: HardwareBundleUpdateproductIdsInput | string[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HardwareBundleCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    sku: string
    price: Decimal | DecimalJsLike | number | string
    productIds?: HardwareBundleCreateproductIdsInput | string[]
    imageUrl?: string | null
    discount?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HardwareBundleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productIds?: HardwareBundleUpdateproductIdsInput | string[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HardwareBundleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productIds?: HardwareBundleUpdateproductIdsInput | string[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HardwareCategoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    parentId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HardwareCategoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    parentId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HardwareCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HardwareCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HardwareCategoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    parentId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HardwareCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HardwareCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SunmiConfigCreateInput = {
    id?: string
    organizationId?: string | null
    apiUrl?: string | null
    apiKey?: string | null
    appId?: string | null
    deviceSn?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SunmiConfigUncheckedCreateInput = {
    id?: string
    organizationId?: string | null
    apiUrl?: string | null
    apiKey?: string | null
    appId?: string | null
    deviceSn?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SunmiConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    apiUrl?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    appId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceSn?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SunmiConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    apiUrl?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    appId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceSn?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SunmiConfigCreateManyInput = {
    id?: string
    organizationId?: string | null
    apiUrl?: string | null
    apiKey?: string | null
    appId?: string | null
    deviceSn?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SunmiConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    apiUrl?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    appId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceSn?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SunmiConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    apiUrl?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    appId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceSn?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnifiConnectionCreateInput = {
    id?: string
    organizationId: string
    locationId?: string | null
    name: string
    host: string
    port?: number
    apiKey?: string | null
    sslVerify?: boolean
    isConnected?: boolean
    lastSync?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnifiConnectionUncheckedCreateInput = {
    id?: string
    organizationId: string
    locationId?: string | null
    name: string
    host: string
    port?: number
    apiKey?: string | null
    sslVerify?: boolean
    isConnected?: boolean
    lastSync?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnifiConnectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    sslVerify?: BoolFieldUpdateOperationsInput | boolean
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnifiConnectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    sslVerify?: BoolFieldUpdateOperationsInput | boolean
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnifiConnectionCreateManyInput = {
    id?: string
    organizationId: string
    locationId?: string | null
    name: string
    host: string
    port?: number
    apiKey?: string | null
    sslVerify?: boolean
    isConnected?: boolean
    lastSync?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnifiConnectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    sslVerify?: BoolFieldUpdateOperationsInput | boolean
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnifiConnectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    sslVerify?: BoolFieldUpdateOperationsInput | boolean
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceAssignmentCreateInput = {
    id?: string
    deviceId: string
    organizationId: string
    locationId?: string | null
    assignedAt?: Date | string
    assignedBy?: string | null
    createdAt?: Date | string
  }

  export type DeviceAssignmentUncheckedCreateInput = {
    id?: string
    deviceId: string
    organizationId: string
    locationId?: string | null
    assignedAt?: Date | string
    assignedBy?: string | null
    createdAt?: Date | string
  }

  export type DeviceAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceAssignmentCreateManyInput = {
    id?: string
    deviceId: string
    organizationId: string
    locationId?: string | null
    assignedAt?: Date | string
    assignedBy?: string | null
    createdAt?: Date | string
  }

  export type DeviceAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: NullableStringFieldUpdateOperationsInput | string | null
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    locationId?: SortOrder
    metadata?: SortOrder
    lastSeen?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    locationId?: SortOrder
    lastSeen?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    locationId?: SortOrder
    lastSeen?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
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
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type HardwareProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    brand?: SortOrder
    imageUrl?: SortOrder
    specifications?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HardwareProductAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type HardwareProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    brand?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HardwareProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    brand?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HardwareProductSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type HardwareBundleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    productIds?: SortOrder
    imageUrl?: SortOrder
    discount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HardwareBundleAvgOrderByAggregateInput = {
    price?: SortOrder
    discount?: SortOrder
  }

  export type HardwareBundleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    discount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HardwareBundleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    discount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HardwareBundleSumOrderByAggregateInput = {
    price?: SortOrder
    discount?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type HardwareCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    parentId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HardwareCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    parentId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HardwareCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    parentId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SunmiConfigCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    apiUrl?: SortOrder
    apiKey?: SortOrder
    appId?: SortOrder
    deviceSn?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SunmiConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    apiUrl?: SortOrder
    apiKey?: SortOrder
    appId?: SortOrder
    deviceSn?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SunmiConfigMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    apiUrl?: SortOrder
    apiKey?: SortOrder
    appId?: SortOrder
    deviceSn?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type UnifiConnectionCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    locationId?: SortOrder
    name?: SortOrder
    host?: SortOrder
    port?: SortOrder
    apiKey?: SortOrder
    sslVerify?: SortOrder
    isConnected?: SortOrder
    lastSync?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnifiConnectionAvgOrderByAggregateInput = {
    port?: SortOrder
  }

  export type UnifiConnectionMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    locationId?: SortOrder
    name?: SortOrder
    host?: SortOrder
    port?: SortOrder
    apiKey?: SortOrder
    sslVerify?: SortOrder
    isConnected?: SortOrder
    lastSync?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnifiConnectionMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    locationId?: SortOrder
    name?: SortOrder
    host?: SortOrder
    port?: SortOrder
    apiKey?: SortOrder
    sslVerify?: SortOrder
    isConnected?: SortOrder
    lastSync?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnifiConnectionSumOrderByAggregateInput = {
    port?: SortOrder
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

  export type DeviceAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    organizationId?: SortOrder
    locationId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type DeviceAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    organizationId?: SortOrder
    locationId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type DeviceAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    organizationId?: SortOrder
    locationId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type HardwareBundleCreateproductIdsInput = {
    set: string[]
  }

  export type HardwareBundleUpdateproductIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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