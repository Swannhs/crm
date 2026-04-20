
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
 * Model IntegrationConnection
 * 
 */
export type IntegrationConnection = $Result.DefaultSelection<Prisma.$IntegrationConnectionPayload>
/**
 * Model GoogleIntegration
 * 
 */
export type GoogleIntegration = $Result.DefaultSelection<Prisma.$GoogleIntegrationPayload>
/**
 * Model ZoomIntegration
 * 
 */
export type ZoomIntegration = $Result.DefaultSelection<Prisma.$ZoomIntegrationPayload>
/**
 * Model ZoomMeeting
 * 
 */
export type ZoomMeeting = $Result.DefaultSelection<Prisma.$ZoomMeetingPayload>
/**
 * Model ShopifyStore
 * 
 */
export type ShopifyStore = $Result.DefaultSelection<Prisma.$ShopifyStorePayload>
/**
 * Model UberEatsConfig
 * 
 */
export type UberEatsConfig = $Result.DefaultSelection<Prisma.$UberEatsConfigPayload>
/**
 * Model EasyPostConfig
 * 
 */
export type EasyPostConfig = $Result.DefaultSelection<Prisma.$EasyPostConfigPayload>
/**
 * Model IntegrationActivity
 * 
 */
export type IntegrationActivity = $Result.DefaultSelection<Prisma.$IntegrationActivityPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more IntegrationConnections
 * const integrationConnections = await prisma.integrationConnection.findMany()
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
   * // Fetch zero or more IntegrationConnections
   * const integrationConnections = await prisma.integrationConnection.findMany()
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
   * `prisma.integrationConnection`: Exposes CRUD operations for the **IntegrationConnection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IntegrationConnections
    * const integrationConnections = await prisma.integrationConnection.findMany()
    * ```
    */
  get integrationConnection(): Prisma.IntegrationConnectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.googleIntegration`: Exposes CRUD operations for the **GoogleIntegration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GoogleIntegrations
    * const googleIntegrations = await prisma.googleIntegration.findMany()
    * ```
    */
  get googleIntegration(): Prisma.GoogleIntegrationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zoomIntegration`: Exposes CRUD operations for the **ZoomIntegration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZoomIntegrations
    * const zoomIntegrations = await prisma.zoomIntegration.findMany()
    * ```
    */
  get zoomIntegration(): Prisma.ZoomIntegrationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zoomMeeting`: Exposes CRUD operations for the **ZoomMeeting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZoomMeetings
    * const zoomMeetings = await prisma.zoomMeeting.findMany()
    * ```
    */
  get zoomMeeting(): Prisma.ZoomMeetingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shopifyStore`: Exposes CRUD operations for the **ShopifyStore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShopifyStores
    * const shopifyStores = await prisma.shopifyStore.findMany()
    * ```
    */
  get shopifyStore(): Prisma.ShopifyStoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uberEatsConfig`: Exposes CRUD operations for the **UberEatsConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UberEatsConfigs
    * const uberEatsConfigs = await prisma.uberEatsConfig.findMany()
    * ```
    */
  get uberEatsConfig(): Prisma.UberEatsConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.easyPostConfig`: Exposes CRUD operations for the **EasyPostConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EasyPostConfigs
    * const easyPostConfigs = await prisma.easyPostConfig.findMany()
    * ```
    */
  get easyPostConfig(): Prisma.EasyPostConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.integrationActivity`: Exposes CRUD operations for the **IntegrationActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IntegrationActivities
    * const integrationActivities = await prisma.integrationActivity.findMany()
    * ```
    */
  get integrationActivity(): Prisma.IntegrationActivityDelegate<ExtArgs, ClientOptions>;
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
    IntegrationConnection: 'IntegrationConnection',
    GoogleIntegration: 'GoogleIntegration',
    ZoomIntegration: 'ZoomIntegration',
    ZoomMeeting: 'ZoomMeeting',
    ShopifyStore: 'ShopifyStore',
    UberEatsConfig: 'UberEatsConfig',
    EasyPostConfig: 'EasyPostConfig',
    IntegrationActivity: 'IntegrationActivity'
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
      modelProps: "integrationConnection" | "googleIntegration" | "zoomIntegration" | "zoomMeeting" | "shopifyStore" | "uberEatsConfig" | "easyPostConfig" | "integrationActivity"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      IntegrationConnection: {
        payload: Prisma.$IntegrationConnectionPayload<ExtArgs>
        fields: Prisma.IntegrationConnectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IntegrationConnectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationConnectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IntegrationConnectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationConnectionPayload>
          }
          findFirst: {
            args: Prisma.IntegrationConnectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationConnectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IntegrationConnectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationConnectionPayload>
          }
          findMany: {
            args: Prisma.IntegrationConnectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationConnectionPayload>[]
          }
          create: {
            args: Prisma.IntegrationConnectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationConnectionPayload>
          }
          createMany: {
            args: Prisma.IntegrationConnectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IntegrationConnectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationConnectionPayload>[]
          }
          delete: {
            args: Prisma.IntegrationConnectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationConnectionPayload>
          }
          update: {
            args: Prisma.IntegrationConnectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationConnectionPayload>
          }
          deleteMany: {
            args: Prisma.IntegrationConnectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IntegrationConnectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IntegrationConnectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationConnectionPayload>[]
          }
          upsert: {
            args: Prisma.IntegrationConnectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationConnectionPayload>
          }
          aggregate: {
            args: Prisma.IntegrationConnectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntegrationConnection>
          }
          groupBy: {
            args: Prisma.IntegrationConnectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntegrationConnectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.IntegrationConnectionCountArgs<ExtArgs>
            result: $Utils.Optional<IntegrationConnectionCountAggregateOutputType> | number
          }
        }
      }
      GoogleIntegration: {
        payload: Prisma.$GoogleIntegrationPayload<ExtArgs>
        fields: Prisma.GoogleIntegrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoogleIntegrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleIntegrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoogleIntegrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleIntegrationPayload>
          }
          findFirst: {
            args: Prisma.GoogleIntegrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleIntegrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoogleIntegrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleIntegrationPayload>
          }
          findMany: {
            args: Prisma.GoogleIntegrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleIntegrationPayload>[]
          }
          create: {
            args: Prisma.GoogleIntegrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleIntegrationPayload>
          }
          createMany: {
            args: Prisma.GoogleIntegrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GoogleIntegrationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleIntegrationPayload>[]
          }
          delete: {
            args: Prisma.GoogleIntegrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleIntegrationPayload>
          }
          update: {
            args: Prisma.GoogleIntegrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleIntegrationPayload>
          }
          deleteMany: {
            args: Prisma.GoogleIntegrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoogleIntegrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GoogleIntegrationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleIntegrationPayload>[]
          }
          upsert: {
            args: Prisma.GoogleIntegrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleIntegrationPayload>
          }
          aggregate: {
            args: Prisma.GoogleIntegrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoogleIntegration>
          }
          groupBy: {
            args: Prisma.GoogleIntegrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoogleIntegrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoogleIntegrationCountArgs<ExtArgs>
            result: $Utils.Optional<GoogleIntegrationCountAggregateOutputType> | number
          }
        }
      }
      ZoomIntegration: {
        payload: Prisma.$ZoomIntegrationPayload<ExtArgs>
        fields: Prisma.ZoomIntegrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ZoomIntegrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoomIntegrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ZoomIntegrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoomIntegrationPayload>
          }
          findFirst: {
            args: Prisma.ZoomIntegrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoomIntegrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ZoomIntegrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoomIntegrationPayload>
          }
          findMany: {
            args: Prisma.ZoomIntegrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoomIntegrationPayload>[]
          }
          create: {
            args: Prisma.ZoomIntegrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoomIntegrationPayload>
          }
          createMany: {
            args: Prisma.ZoomIntegrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ZoomIntegrationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoomIntegrationPayload>[]
          }
          delete: {
            args: Prisma.ZoomIntegrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoomIntegrationPayload>
          }
          update: {
            args: Prisma.ZoomIntegrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoomIntegrationPayload>
          }
          deleteMany: {
            args: Prisma.ZoomIntegrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ZoomIntegrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ZoomIntegrationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoomIntegrationPayload>[]
          }
          upsert: {
            args: Prisma.ZoomIntegrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoomIntegrationPayload>
          }
          aggregate: {
            args: Prisma.ZoomIntegrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZoomIntegration>
          }
          groupBy: {
            args: Prisma.ZoomIntegrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZoomIntegrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ZoomIntegrationCountArgs<ExtArgs>
            result: $Utils.Optional<ZoomIntegrationCountAggregateOutputType> | number
          }
        }
      }
      ZoomMeeting: {
        payload: Prisma.$ZoomMeetingPayload<ExtArgs>
        fields: Prisma.ZoomMeetingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ZoomMeetingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoomMeetingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ZoomMeetingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoomMeetingPayload>
          }
          findFirst: {
            args: Prisma.ZoomMeetingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoomMeetingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ZoomMeetingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoomMeetingPayload>
          }
          findMany: {
            args: Prisma.ZoomMeetingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoomMeetingPayload>[]
          }
          create: {
            args: Prisma.ZoomMeetingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoomMeetingPayload>
          }
          createMany: {
            args: Prisma.ZoomMeetingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ZoomMeetingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoomMeetingPayload>[]
          }
          delete: {
            args: Prisma.ZoomMeetingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoomMeetingPayload>
          }
          update: {
            args: Prisma.ZoomMeetingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoomMeetingPayload>
          }
          deleteMany: {
            args: Prisma.ZoomMeetingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ZoomMeetingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ZoomMeetingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoomMeetingPayload>[]
          }
          upsert: {
            args: Prisma.ZoomMeetingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoomMeetingPayload>
          }
          aggregate: {
            args: Prisma.ZoomMeetingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZoomMeeting>
          }
          groupBy: {
            args: Prisma.ZoomMeetingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZoomMeetingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ZoomMeetingCountArgs<ExtArgs>
            result: $Utils.Optional<ZoomMeetingCountAggregateOutputType> | number
          }
        }
      }
      ShopifyStore: {
        payload: Prisma.$ShopifyStorePayload<ExtArgs>
        fields: Prisma.ShopifyStoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopifyStoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopifyStorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopifyStoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopifyStorePayload>
          }
          findFirst: {
            args: Prisma.ShopifyStoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopifyStorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopifyStoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopifyStorePayload>
          }
          findMany: {
            args: Prisma.ShopifyStoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopifyStorePayload>[]
          }
          create: {
            args: Prisma.ShopifyStoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopifyStorePayload>
          }
          createMany: {
            args: Prisma.ShopifyStoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShopifyStoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopifyStorePayload>[]
          }
          delete: {
            args: Prisma.ShopifyStoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopifyStorePayload>
          }
          update: {
            args: Prisma.ShopifyStoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopifyStorePayload>
          }
          deleteMany: {
            args: Prisma.ShopifyStoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopifyStoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShopifyStoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopifyStorePayload>[]
          }
          upsert: {
            args: Prisma.ShopifyStoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopifyStorePayload>
          }
          aggregate: {
            args: Prisma.ShopifyStoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShopifyStore>
          }
          groupBy: {
            args: Prisma.ShopifyStoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopifyStoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopifyStoreCountArgs<ExtArgs>
            result: $Utils.Optional<ShopifyStoreCountAggregateOutputType> | number
          }
        }
      }
      UberEatsConfig: {
        payload: Prisma.$UberEatsConfigPayload<ExtArgs>
        fields: Prisma.UberEatsConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UberEatsConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UberEatsConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UberEatsConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UberEatsConfigPayload>
          }
          findFirst: {
            args: Prisma.UberEatsConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UberEatsConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UberEatsConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UberEatsConfigPayload>
          }
          findMany: {
            args: Prisma.UberEatsConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UberEatsConfigPayload>[]
          }
          create: {
            args: Prisma.UberEatsConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UberEatsConfigPayload>
          }
          createMany: {
            args: Prisma.UberEatsConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UberEatsConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UberEatsConfigPayload>[]
          }
          delete: {
            args: Prisma.UberEatsConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UberEatsConfigPayload>
          }
          update: {
            args: Prisma.UberEatsConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UberEatsConfigPayload>
          }
          deleteMany: {
            args: Prisma.UberEatsConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UberEatsConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UberEatsConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UberEatsConfigPayload>[]
          }
          upsert: {
            args: Prisma.UberEatsConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UberEatsConfigPayload>
          }
          aggregate: {
            args: Prisma.UberEatsConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUberEatsConfig>
          }
          groupBy: {
            args: Prisma.UberEatsConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<UberEatsConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.UberEatsConfigCountArgs<ExtArgs>
            result: $Utils.Optional<UberEatsConfigCountAggregateOutputType> | number
          }
        }
      }
      EasyPostConfig: {
        payload: Prisma.$EasyPostConfigPayload<ExtArgs>
        fields: Prisma.EasyPostConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EasyPostConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EasyPostConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EasyPostConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EasyPostConfigPayload>
          }
          findFirst: {
            args: Prisma.EasyPostConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EasyPostConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EasyPostConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EasyPostConfigPayload>
          }
          findMany: {
            args: Prisma.EasyPostConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EasyPostConfigPayload>[]
          }
          create: {
            args: Prisma.EasyPostConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EasyPostConfigPayload>
          }
          createMany: {
            args: Prisma.EasyPostConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EasyPostConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EasyPostConfigPayload>[]
          }
          delete: {
            args: Prisma.EasyPostConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EasyPostConfigPayload>
          }
          update: {
            args: Prisma.EasyPostConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EasyPostConfigPayload>
          }
          deleteMany: {
            args: Prisma.EasyPostConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EasyPostConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EasyPostConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EasyPostConfigPayload>[]
          }
          upsert: {
            args: Prisma.EasyPostConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EasyPostConfigPayload>
          }
          aggregate: {
            args: Prisma.EasyPostConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEasyPostConfig>
          }
          groupBy: {
            args: Prisma.EasyPostConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<EasyPostConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.EasyPostConfigCountArgs<ExtArgs>
            result: $Utils.Optional<EasyPostConfigCountAggregateOutputType> | number
          }
        }
      }
      IntegrationActivity: {
        payload: Prisma.$IntegrationActivityPayload<ExtArgs>
        fields: Prisma.IntegrationActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IntegrationActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IntegrationActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationActivityPayload>
          }
          findFirst: {
            args: Prisma.IntegrationActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IntegrationActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationActivityPayload>
          }
          findMany: {
            args: Prisma.IntegrationActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationActivityPayload>[]
          }
          create: {
            args: Prisma.IntegrationActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationActivityPayload>
          }
          createMany: {
            args: Prisma.IntegrationActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IntegrationActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationActivityPayload>[]
          }
          delete: {
            args: Prisma.IntegrationActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationActivityPayload>
          }
          update: {
            args: Prisma.IntegrationActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationActivityPayload>
          }
          deleteMany: {
            args: Prisma.IntegrationActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IntegrationActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IntegrationActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationActivityPayload>[]
          }
          upsert: {
            args: Prisma.IntegrationActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationActivityPayload>
          }
          aggregate: {
            args: Prisma.IntegrationActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntegrationActivity>
          }
          groupBy: {
            args: Prisma.IntegrationActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntegrationActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.IntegrationActivityCountArgs<ExtArgs>
            result: $Utils.Optional<IntegrationActivityCountAggregateOutputType> | number
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
    integrationConnection?: IntegrationConnectionOmit
    googleIntegration?: GoogleIntegrationOmit
    zoomIntegration?: ZoomIntegrationOmit
    zoomMeeting?: ZoomMeetingOmit
    shopifyStore?: ShopifyStoreOmit
    uberEatsConfig?: UberEatsConfigOmit
    easyPostConfig?: EasyPostConfigOmit
    integrationActivity?: IntegrationActivityOmit
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
   * Model IntegrationConnection
   */

  export type AggregateIntegrationConnection = {
    _count: IntegrationConnectionCountAggregateOutputType | null
    _min: IntegrationConnectionMinAggregateOutputType | null
    _max: IntegrationConnectionMaxAggregateOutputType | null
  }

  export type IntegrationConnectionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    provider: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    tokenType: string | null
    scope: string | null
    accountId: string | null
    accountName: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IntegrationConnectionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    provider: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    tokenType: string | null
    scope: string | null
    accountId: string | null
    accountName: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IntegrationConnectionCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    provider: number
    accessToken: number
    refreshToken: number
    expiresAt: number
    tokenType: number
    scope: number
    accountId: number
    accountName: number
    isActive: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IntegrationConnectionMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    provider?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    tokenType?: true
    scope?: true
    accountId?: true
    accountName?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IntegrationConnectionMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    provider?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    tokenType?: true
    scope?: true
    accountId?: true
    accountName?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IntegrationConnectionCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    provider?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    tokenType?: true
    scope?: true
    accountId?: true
    accountName?: true
    isActive?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IntegrationConnectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntegrationConnection to aggregate.
     */
    where?: IntegrationConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntegrationConnections to fetch.
     */
    orderBy?: IntegrationConnectionOrderByWithRelationInput | IntegrationConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IntegrationConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntegrationConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntegrationConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IntegrationConnections
    **/
    _count?: true | IntegrationConnectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntegrationConnectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntegrationConnectionMaxAggregateInputType
  }

  export type GetIntegrationConnectionAggregateType<T extends IntegrationConnectionAggregateArgs> = {
        [P in keyof T & keyof AggregateIntegrationConnection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntegrationConnection[P]>
      : GetScalarType<T[P], AggregateIntegrationConnection[P]>
  }




  export type IntegrationConnectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntegrationConnectionWhereInput
    orderBy?: IntegrationConnectionOrderByWithAggregationInput | IntegrationConnectionOrderByWithAggregationInput[]
    by: IntegrationConnectionScalarFieldEnum[] | IntegrationConnectionScalarFieldEnum
    having?: IntegrationConnectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntegrationConnectionCountAggregateInputType | true
    _min?: IntegrationConnectionMinAggregateInputType
    _max?: IntegrationConnectionMaxAggregateInputType
  }

  export type IntegrationConnectionGroupByOutputType = {
    id: string
    userId: string
    organizationId: string | null
    provider: string
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    tokenType: string | null
    scope: string | null
    accountId: string | null
    accountName: string | null
    isActive: boolean
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: IntegrationConnectionCountAggregateOutputType | null
    _min: IntegrationConnectionMinAggregateOutputType | null
    _max: IntegrationConnectionMaxAggregateOutputType | null
  }

  type GetIntegrationConnectionGroupByPayload<T extends IntegrationConnectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntegrationConnectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntegrationConnectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntegrationConnectionGroupByOutputType[P]>
            : GetScalarType<T[P], IntegrationConnectionGroupByOutputType[P]>
        }
      >
    >


  export type IntegrationConnectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    provider?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    tokenType?: boolean
    scope?: boolean
    accountId?: boolean
    accountName?: boolean
    isActive?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["integrationConnection"]>

  export type IntegrationConnectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    provider?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    tokenType?: boolean
    scope?: boolean
    accountId?: boolean
    accountName?: boolean
    isActive?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["integrationConnection"]>

  export type IntegrationConnectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    provider?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    tokenType?: boolean
    scope?: boolean
    accountId?: boolean
    accountName?: boolean
    isActive?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["integrationConnection"]>

  export type IntegrationConnectionSelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    provider?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    tokenType?: boolean
    scope?: boolean
    accountId?: boolean
    accountName?: boolean
    isActive?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IntegrationConnectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "provider" | "accessToken" | "refreshToken" | "expiresAt" | "tokenType" | "scope" | "accountId" | "accountName" | "isActive" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["integrationConnection"]>

  export type $IntegrationConnectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IntegrationConnection"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organizationId: string | null
      provider: string
      accessToken: string | null
      refreshToken: string | null
      expiresAt: Date | null
      tokenType: string | null
      scope: string | null
      accountId: string | null
      accountName: string | null
      isActive: boolean
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["integrationConnection"]>
    composites: {}
  }

  type IntegrationConnectionGetPayload<S extends boolean | null | undefined | IntegrationConnectionDefaultArgs> = $Result.GetResult<Prisma.$IntegrationConnectionPayload, S>

  type IntegrationConnectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IntegrationConnectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntegrationConnectionCountAggregateInputType | true
    }

  export interface IntegrationConnectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IntegrationConnection'], meta: { name: 'IntegrationConnection' } }
    /**
     * Find zero or one IntegrationConnection that matches the filter.
     * @param {IntegrationConnectionFindUniqueArgs} args - Arguments to find a IntegrationConnection
     * @example
     * // Get one IntegrationConnection
     * const integrationConnection = await prisma.integrationConnection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IntegrationConnectionFindUniqueArgs>(args: SelectSubset<T, IntegrationConnectionFindUniqueArgs<ExtArgs>>): Prisma__IntegrationConnectionClient<$Result.GetResult<Prisma.$IntegrationConnectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IntegrationConnection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IntegrationConnectionFindUniqueOrThrowArgs} args - Arguments to find a IntegrationConnection
     * @example
     * // Get one IntegrationConnection
     * const integrationConnection = await prisma.integrationConnection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IntegrationConnectionFindUniqueOrThrowArgs>(args: SelectSubset<T, IntegrationConnectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IntegrationConnectionClient<$Result.GetResult<Prisma.$IntegrationConnectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IntegrationConnection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationConnectionFindFirstArgs} args - Arguments to find a IntegrationConnection
     * @example
     * // Get one IntegrationConnection
     * const integrationConnection = await prisma.integrationConnection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IntegrationConnectionFindFirstArgs>(args?: SelectSubset<T, IntegrationConnectionFindFirstArgs<ExtArgs>>): Prisma__IntegrationConnectionClient<$Result.GetResult<Prisma.$IntegrationConnectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IntegrationConnection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationConnectionFindFirstOrThrowArgs} args - Arguments to find a IntegrationConnection
     * @example
     * // Get one IntegrationConnection
     * const integrationConnection = await prisma.integrationConnection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IntegrationConnectionFindFirstOrThrowArgs>(args?: SelectSubset<T, IntegrationConnectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__IntegrationConnectionClient<$Result.GetResult<Prisma.$IntegrationConnectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IntegrationConnections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationConnectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IntegrationConnections
     * const integrationConnections = await prisma.integrationConnection.findMany()
     * 
     * // Get first 10 IntegrationConnections
     * const integrationConnections = await prisma.integrationConnection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const integrationConnectionWithIdOnly = await prisma.integrationConnection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IntegrationConnectionFindManyArgs>(args?: SelectSubset<T, IntegrationConnectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IntegrationConnection.
     * @param {IntegrationConnectionCreateArgs} args - Arguments to create a IntegrationConnection.
     * @example
     * // Create one IntegrationConnection
     * const IntegrationConnection = await prisma.integrationConnection.create({
     *   data: {
     *     // ... data to create a IntegrationConnection
     *   }
     * })
     * 
     */
    create<T extends IntegrationConnectionCreateArgs>(args: SelectSubset<T, IntegrationConnectionCreateArgs<ExtArgs>>): Prisma__IntegrationConnectionClient<$Result.GetResult<Prisma.$IntegrationConnectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IntegrationConnections.
     * @param {IntegrationConnectionCreateManyArgs} args - Arguments to create many IntegrationConnections.
     * @example
     * // Create many IntegrationConnections
     * const integrationConnection = await prisma.integrationConnection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IntegrationConnectionCreateManyArgs>(args?: SelectSubset<T, IntegrationConnectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IntegrationConnections and returns the data saved in the database.
     * @param {IntegrationConnectionCreateManyAndReturnArgs} args - Arguments to create many IntegrationConnections.
     * @example
     * // Create many IntegrationConnections
     * const integrationConnection = await prisma.integrationConnection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IntegrationConnections and only return the `id`
     * const integrationConnectionWithIdOnly = await prisma.integrationConnection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IntegrationConnectionCreateManyAndReturnArgs>(args?: SelectSubset<T, IntegrationConnectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationConnectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IntegrationConnection.
     * @param {IntegrationConnectionDeleteArgs} args - Arguments to delete one IntegrationConnection.
     * @example
     * // Delete one IntegrationConnection
     * const IntegrationConnection = await prisma.integrationConnection.delete({
     *   where: {
     *     // ... filter to delete one IntegrationConnection
     *   }
     * })
     * 
     */
    delete<T extends IntegrationConnectionDeleteArgs>(args: SelectSubset<T, IntegrationConnectionDeleteArgs<ExtArgs>>): Prisma__IntegrationConnectionClient<$Result.GetResult<Prisma.$IntegrationConnectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IntegrationConnection.
     * @param {IntegrationConnectionUpdateArgs} args - Arguments to update one IntegrationConnection.
     * @example
     * // Update one IntegrationConnection
     * const integrationConnection = await prisma.integrationConnection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IntegrationConnectionUpdateArgs>(args: SelectSubset<T, IntegrationConnectionUpdateArgs<ExtArgs>>): Prisma__IntegrationConnectionClient<$Result.GetResult<Prisma.$IntegrationConnectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IntegrationConnections.
     * @param {IntegrationConnectionDeleteManyArgs} args - Arguments to filter IntegrationConnections to delete.
     * @example
     * // Delete a few IntegrationConnections
     * const { count } = await prisma.integrationConnection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IntegrationConnectionDeleteManyArgs>(args?: SelectSubset<T, IntegrationConnectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntegrationConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationConnectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IntegrationConnections
     * const integrationConnection = await prisma.integrationConnection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IntegrationConnectionUpdateManyArgs>(args: SelectSubset<T, IntegrationConnectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntegrationConnections and returns the data updated in the database.
     * @param {IntegrationConnectionUpdateManyAndReturnArgs} args - Arguments to update many IntegrationConnections.
     * @example
     * // Update many IntegrationConnections
     * const integrationConnection = await prisma.integrationConnection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IntegrationConnections and only return the `id`
     * const integrationConnectionWithIdOnly = await prisma.integrationConnection.updateManyAndReturn({
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
    updateManyAndReturn<T extends IntegrationConnectionUpdateManyAndReturnArgs>(args: SelectSubset<T, IntegrationConnectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationConnectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IntegrationConnection.
     * @param {IntegrationConnectionUpsertArgs} args - Arguments to update or create a IntegrationConnection.
     * @example
     * // Update or create a IntegrationConnection
     * const integrationConnection = await prisma.integrationConnection.upsert({
     *   create: {
     *     // ... data to create a IntegrationConnection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IntegrationConnection we want to update
     *   }
     * })
     */
    upsert<T extends IntegrationConnectionUpsertArgs>(args: SelectSubset<T, IntegrationConnectionUpsertArgs<ExtArgs>>): Prisma__IntegrationConnectionClient<$Result.GetResult<Prisma.$IntegrationConnectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IntegrationConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationConnectionCountArgs} args - Arguments to filter IntegrationConnections to count.
     * @example
     * // Count the number of IntegrationConnections
     * const count = await prisma.integrationConnection.count({
     *   where: {
     *     // ... the filter for the IntegrationConnections we want to count
     *   }
     * })
    **/
    count<T extends IntegrationConnectionCountArgs>(
      args?: Subset<T, IntegrationConnectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntegrationConnectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IntegrationConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationConnectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IntegrationConnectionAggregateArgs>(args: Subset<T, IntegrationConnectionAggregateArgs>): Prisma.PrismaPromise<GetIntegrationConnectionAggregateType<T>>

    /**
     * Group by IntegrationConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationConnectionGroupByArgs} args - Group by arguments.
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
      T extends IntegrationConnectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntegrationConnectionGroupByArgs['orderBy'] }
        : { orderBy?: IntegrationConnectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IntegrationConnectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntegrationConnectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IntegrationConnection model
   */
  readonly fields: IntegrationConnectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IntegrationConnection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntegrationConnectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the IntegrationConnection model
   */
  interface IntegrationConnectionFieldRefs {
    readonly id: FieldRef<"IntegrationConnection", 'String'>
    readonly userId: FieldRef<"IntegrationConnection", 'String'>
    readonly organizationId: FieldRef<"IntegrationConnection", 'String'>
    readonly provider: FieldRef<"IntegrationConnection", 'String'>
    readonly accessToken: FieldRef<"IntegrationConnection", 'String'>
    readonly refreshToken: FieldRef<"IntegrationConnection", 'String'>
    readonly expiresAt: FieldRef<"IntegrationConnection", 'DateTime'>
    readonly tokenType: FieldRef<"IntegrationConnection", 'String'>
    readonly scope: FieldRef<"IntegrationConnection", 'String'>
    readonly accountId: FieldRef<"IntegrationConnection", 'String'>
    readonly accountName: FieldRef<"IntegrationConnection", 'String'>
    readonly isActive: FieldRef<"IntegrationConnection", 'Boolean'>
    readonly metadata: FieldRef<"IntegrationConnection", 'Json'>
    readonly createdAt: FieldRef<"IntegrationConnection", 'DateTime'>
    readonly updatedAt: FieldRef<"IntegrationConnection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IntegrationConnection findUnique
   */
  export type IntegrationConnectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationConnection
     */
    select?: IntegrationConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationConnection
     */
    omit?: IntegrationConnectionOmit<ExtArgs> | null
    /**
     * Filter, which IntegrationConnection to fetch.
     */
    where: IntegrationConnectionWhereUniqueInput
  }

  /**
   * IntegrationConnection findUniqueOrThrow
   */
  export type IntegrationConnectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationConnection
     */
    select?: IntegrationConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationConnection
     */
    omit?: IntegrationConnectionOmit<ExtArgs> | null
    /**
     * Filter, which IntegrationConnection to fetch.
     */
    where: IntegrationConnectionWhereUniqueInput
  }

  /**
   * IntegrationConnection findFirst
   */
  export type IntegrationConnectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationConnection
     */
    select?: IntegrationConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationConnection
     */
    omit?: IntegrationConnectionOmit<ExtArgs> | null
    /**
     * Filter, which IntegrationConnection to fetch.
     */
    where?: IntegrationConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntegrationConnections to fetch.
     */
    orderBy?: IntegrationConnectionOrderByWithRelationInput | IntegrationConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntegrationConnections.
     */
    cursor?: IntegrationConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntegrationConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntegrationConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntegrationConnections.
     */
    distinct?: IntegrationConnectionScalarFieldEnum | IntegrationConnectionScalarFieldEnum[]
  }

  /**
   * IntegrationConnection findFirstOrThrow
   */
  export type IntegrationConnectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationConnection
     */
    select?: IntegrationConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationConnection
     */
    omit?: IntegrationConnectionOmit<ExtArgs> | null
    /**
     * Filter, which IntegrationConnection to fetch.
     */
    where?: IntegrationConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntegrationConnections to fetch.
     */
    orderBy?: IntegrationConnectionOrderByWithRelationInput | IntegrationConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntegrationConnections.
     */
    cursor?: IntegrationConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntegrationConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntegrationConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntegrationConnections.
     */
    distinct?: IntegrationConnectionScalarFieldEnum | IntegrationConnectionScalarFieldEnum[]
  }

  /**
   * IntegrationConnection findMany
   */
  export type IntegrationConnectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationConnection
     */
    select?: IntegrationConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationConnection
     */
    omit?: IntegrationConnectionOmit<ExtArgs> | null
    /**
     * Filter, which IntegrationConnections to fetch.
     */
    where?: IntegrationConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntegrationConnections to fetch.
     */
    orderBy?: IntegrationConnectionOrderByWithRelationInput | IntegrationConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IntegrationConnections.
     */
    cursor?: IntegrationConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntegrationConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntegrationConnections.
     */
    skip?: number
    distinct?: IntegrationConnectionScalarFieldEnum | IntegrationConnectionScalarFieldEnum[]
  }

  /**
   * IntegrationConnection create
   */
  export type IntegrationConnectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationConnection
     */
    select?: IntegrationConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationConnection
     */
    omit?: IntegrationConnectionOmit<ExtArgs> | null
    /**
     * The data needed to create a IntegrationConnection.
     */
    data: XOR<IntegrationConnectionCreateInput, IntegrationConnectionUncheckedCreateInput>
  }

  /**
   * IntegrationConnection createMany
   */
  export type IntegrationConnectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IntegrationConnections.
     */
    data: IntegrationConnectionCreateManyInput | IntegrationConnectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IntegrationConnection createManyAndReturn
   */
  export type IntegrationConnectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationConnection
     */
    select?: IntegrationConnectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationConnection
     */
    omit?: IntegrationConnectionOmit<ExtArgs> | null
    /**
     * The data used to create many IntegrationConnections.
     */
    data: IntegrationConnectionCreateManyInput | IntegrationConnectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IntegrationConnection update
   */
  export type IntegrationConnectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationConnection
     */
    select?: IntegrationConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationConnection
     */
    omit?: IntegrationConnectionOmit<ExtArgs> | null
    /**
     * The data needed to update a IntegrationConnection.
     */
    data: XOR<IntegrationConnectionUpdateInput, IntegrationConnectionUncheckedUpdateInput>
    /**
     * Choose, which IntegrationConnection to update.
     */
    where: IntegrationConnectionWhereUniqueInput
  }

  /**
   * IntegrationConnection updateMany
   */
  export type IntegrationConnectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IntegrationConnections.
     */
    data: XOR<IntegrationConnectionUpdateManyMutationInput, IntegrationConnectionUncheckedUpdateManyInput>
    /**
     * Filter which IntegrationConnections to update
     */
    where?: IntegrationConnectionWhereInput
    /**
     * Limit how many IntegrationConnections to update.
     */
    limit?: number
  }

  /**
   * IntegrationConnection updateManyAndReturn
   */
  export type IntegrationConnectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationConnection
     */
    select?: IntegrationConnectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationConnection
     */
    omit?: IntegrationConnectionOmit<ExtArgs> | null
    /**
     * The data used to update IntegrationConnections.
     */
    data: XOR<IntegrationConnectionUpdateManyMutationInput, IntegrationConnectionUncheckedUpdateManyInput>
    /**
     * Filter which IntegrationConnections to update
     */
    where?: IntegrationConnectionWhereInput
    /**
     * Limit how many IntegrationConnections to update.
     */
    limit?: number
  }

  /**
   * IntegrationConnection upsert
   */
  export type IntegrationConnectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationConnection
     */
    select?: IntegrationConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationConnection
     */
    omit?: IntegrationConnectionOmit<ExtArgs> | null
    /**
     * The filter to search for the IntegrationConnection to update in case it exists.
     */
    where: IntegrationConnectionWhereUniqueInput
    /**
     * In case the IntegrationConnection found by the `where` argument doesn't exist, create a new IntegrationConnection with this data.
     */
    create: XOR<IntegrationConnectionCreateInput, IntegrationConnectionUncheckedCreateInput>
    /**
     * In case the IntegrationConnection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntegrationConnectionUpdateInput, IntegrationConnectionUncheckedUpdateInput>
  }

  /**
   * IntegrationConnection delete
   */
  export type IntegrationConnectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationConnection
     */
    select?: IntegrationConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationConnection
     */
    omit?: IntegrationConnectionOmit<ExtArgs> | null
    /**
     * Filter which IntegrationConnection to delete.
     */
    where: IntegrationConnectionWhereUniqueInput
  }

  /**
   * IntegrationConnection deleteMany
   */
  export type IntegrationConnectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntegrationConnections to delete
     */
    where?: IntegrationConnectionWhereInput
    /**
     * Limit how many IntegrationConnections to delete.
     */
    limit?: number
  }

  /**
   * IntegrationConnection without action
   */
  export type IntegrationConnectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationConnection
     */
    select?: IntegrationConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationConnection
     */
    omit?: IntegrationConnectionOmit<ExtArgs> | null
  }


  /**
   * Model GoogleIntegration
   */

  export type AggregateGoogleIntegration = {
    _count: GoogleIntegrationCountAggregateOutputType | null
    _min: GoogleIntegrationMinAggregateOutputType | null
    _max: GoogleIntegrationMaxAggregateOutputType | null
  }

  export type GoogleIntegrationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    isConnected: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoogleIntegrationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    isConnected: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoogleIntegrationCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    accessToken: number
    refreshToken: number
    expiresAt: number
    isConnected: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GoogleIntegrationMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    isConnected?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoogleIntegrationMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    isConnected?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoogleIntegrationCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    isConnected?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GoogleIntegrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoogleIntegration to aggregate.
     */
    where?: GoogleIntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoogleIntegrations to fetch.
     */
    orderBy?: GoogleIntegrationOrderByWithRelationInput | GoogleIntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoogleIntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoogleIntegrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoogleIntegrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GoogleIntegrations
    **/
    _count?: true | GoogleIntegrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoogleIntegrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoogleIntegrationMaxAggregateInputType
  }

  export type GetGoogleIntegrationAggregateType<T extends GoogleIntegrationAggregateArgs> = {
        [P in keyof T & keyof AggregateGoogleIntegration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoogleIntegration[P]>
      : GetScalarType<T[P], AggregateGoogleIntegration[P]>
  }




  export type GoogleIntegrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoogleIntegrationWhereInput
    orderBy?: GoogleIntegrationOrderByWithAggregationInput | GoogleIntegrationOrderByWithAggregationInput[]
    by: GoogleIntegrationScalarFieldEnum[] | GoogleIntegrationScalarFieldEnum
    having?: GoogleIntegrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoogleIntegrationCountAggregateInputType | true
    _min?: GoogleIntegrationMinAggregateInputType
    _max?: GoogleIntegrationMaxAggregateInputType
  }

  export type GoogleIntegrationGroupByOutputType = {
    id: string
    userId: string
    organizationId: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    isConnected: boolean
    createdAt: Date
    updatedAt: Date
    _count: GoogleIntegrationCountAggregateOutputType | null
    _min: GoogleIntegrationMinAggregateOutputType | null
    _max: GoogleIntegrationMaxAggregateOutputType | null
  }

  type GetGoogleIntegrationGroupByPayload<T extends GoogleIntegrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoogleIntegrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoogleIntegrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoogleIntegrationGroupByOutputType[P]>
            : GetScalarType<T[P], GoogleIntegrationGroupByOutputType[P]>
        }
      >
    >


  export type GoogleIntegrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    isConnected?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["googleIntegration"]>

  export type GoogleIntegrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    isConnected?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["googleIntegration"]>

  export type GoogleIntegrationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    isConnected?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["googleIntegration"]>

  export type GoogleIntegrationSelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    isConnected?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GoogleIntegrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "accessToken" | "refreshToken" | "expiresAt" | "isConnected" | "createdAt" | "updatedAt", ExtArgs["result"]["googleIntegration"]>

  export type $GoogleIntegrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GoogleIntegration"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organizationId: string | null
      accessToken: string | null
      refreshToken: string | null
      expiresAt: Date | null
      isConnected: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["googleIntegration"]>
    composites: {}
  }

  type GoogleIntegrationGetPayload<S extends boolean | null | undefined | GoogleIntegrationDefaultArgs> = $Result.GetResult<Prisma.$GoogleIntegrationPayload, S>

  type GoogleIntegrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GoogleIntegrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GoogleIntegrationCountAggregateInputType | true
    }

  export interface GoogleIntegrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GoogleIntegration'], meta: { name: 'GoogleIntegration' } }
    /**
     * Find zero or one GoogleIntegration that matches the filter.
     * @param {GoogleIntegrationFindUniqueArgs} args - Arguments to find a GoogleIntegration
     * @example
     * // Get one GoogleIntegration
     * const googleIntegration = await prisma.googleIntegration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoogleIntegrationFindUniqueArgs>(args: SelectSubset<T, GoogleIntegrationFindUniqueArgs<ExtArgs>>): Prisma__GoogleIntegrationClient<$Result.GetResult<Prisma.$GoogleIntegrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GoogleIntegration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoogleIntegrationFindUniqueOrThrowArgs} args - Arguments to find a GoogleIntegration
     * @example
     * // Get one GoogleIntegration
     * const googleIntegration = await prisma.googleIntegration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoogleIntegrationFindUniqueOrThrowArgs>(args: SelectSubset<T, GoogleIntegrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoogleIntegrationClient<$Result.GetResult<Prisma.$GoogleIntegrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GoogleIntegration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleIntegrationFindFirstArgs} args - Arguments to find a GoogleIntegration
     * @example
     * // Get one GoogleIntegration
     * const googleIntegration = await prisma.googleIntegration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoogleIntegrationFindFirstArgs>(args?: SelectSubset<T, GoogleIntegrationFindFirstArgs<ExtArgs>>): Prisma__GoogleIntegrationClient<$Result.GetResult<Prisma.$GoogleIntegrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GoogleIntegration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleIntegrationFindFirstOrThrowArgs} args - Arguments to find a GoogleIntegration
     * @example
     * // Get one GoogleIntegration
     * const googleIntegration = await prisma.googleIntegration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoogleIntegrationFindFirstOrThrowArgs>(args?: SelectSubset<T, GoogleIntegrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoogleIntegrationClient<$Result.GetResult<Prisma.$GoogleIntegrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GoogleIntegrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleIntegrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GoogleIntegrations
     * const googleIntegrations = await prisma.googleIntegration.findMany()
     * 
     * // Get first 10 GoogleIntegrations
     * const googleIntegrations = await prisma.googleIntegration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const googleIntegrationWithIdOnly = await prisma.googleIntegration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GoogleIntegrationFindManyArgs>(args?: SelectSubset<T, GoogleIntegrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoogleIntegrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GoogleIntegration.
     * @param {GoogleIntegrationCreateArgs} args - Arguments to create a GoogleIntegration.
     * @example
     * // Create one GoogleIntegration
     * const GoogleIntegration = await prisma.googleIntegration.create({
     *   data: {
     *     // ... data to create a GoogleIntegration
     *   }
     * })
     * 
     */
    create<T extends GoogleIntegrationCreateArgs>(args: SelectSubset<T, GoogleIntegrationCreateArgs<ExtArgs>>): Prisma__GoogleIntegrationClient<$Result.GetResult<Prisma.$GoogleIntegrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GoogleIntegrations.
     * @param {GoogleIntegrationCreateManyArgs} args - Arguments to create many GoogleIntegrations.
     * @example
     * // Create many GoogleIntegrations
     * const googleIntegration = await prisma.googleIntegration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoogleIntegrationCreateManyArgs>(args?: SelectSubset<T, GoogleIntegrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GoogleIntegrations and returns the data saved in the database.
     * @param {GoogleIntegrationCreateManyAndReturnArgs} args - Arguments to create many GoogleIntegrations.
     * @example
     * // Create many GoogleIntegrations
     * const googleIntegration = await prisma.googleIntegration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GoogleIntegrations and only return the `id`
     * const googleIntegrationWithIdOnly = await prisma.googleIntegration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GoogleIntegrationCreateManyAndReturnArgs>(args?: SelectSubset<T, GoogleIntegrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoogleIntegrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GoogleIntegration.
     * @param {GoogleIntegrationDeleteArgs} args - Arguments to delete one GoogleIntegration.
     * @example
     * // Delete one GoogleIntegration
     * const GoogleIntegration = await prisma.googleIntegration.delete({
     *   where: {
     *     // ... filter to delete one GoogleIntegration
     *   }
     * })
     * 
     */
    delete<T extends GoogleIntegrationDeleteArgs>(args: SelectSubset<T, GoogleIntegrationDeleteArgs<ExtArgs>>): Prisma__GoogleIntegrationClient<$Result.GetResult<Prisma.$GoogleIntegrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GoogleIntegration.
     * @param {GoogleIntegrationUpdateArgs} args - Arguments to update one GoogleIntegration.
     * @example
     * // Update one GoogleIntegration
     * const googleIntegration = await prisma.googleIntegration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoogleIntegrationUpdateArgs>(args: SelectSubset<T, GoogleIntegrationUpdateArgs<ExtArgs>>): Prisma__GoogleIntegrationClient<$Result.GetResult<Prisma.$GoogleIntegrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GoogleIntegrations.
     * @param {GoogleIntegrationDeleteManyArgs} args - Arguments to filter GoogleIntegrations to delete.
     * @example
     * // Delete a few GoogleIntegrations
     * const { count } = await prisma.googleIntegration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoogleIntegrationDeleteManyArgs>(args?: SelectSubset<T, GoogleIntegrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GoogleIntegrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleIntegrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GoogleIntegrations
     * const googleIntegration = await prisma.googleIntegration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoogleIntegrationUpdateManyArgs>(args: SelectSubset<T, GoogleIntegrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GoogleIntegrations and returns the data updated in the database.
     * @param {GoogleIntegrationUpdateManyAndReturnArgs} args - Arguments to update many GoogleIntegrations.
     * @example
     * // Update many GoogleIntegrations
     * const googleIntegration = await prisma.googleIntegration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GoogleIntegrations and only return the `id`
     * const googleIntegrationWithIdOnly = await prisma.googleIntegration.updateManyAndReturn({
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
    updateManyAndReturn<T extends GoogleIntegrationUpdateManyAndReturnArgs>(args: SelectSubset<T, GoogleIntegrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoogleIntegrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GoogleIntegration.
     * @param {GoogleIntegrationUpsertArgs} args - Arguments to update or create a GoogleIntegration.
     * @example
     * // Update or create a GoogleIntegration
     * const googleIntegration = await prisma.googleIntegration.upsert({
     *   create: {
     *     // ... data to create a GoogleIntegration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GoogleIntegration we want to update
     *   }
     * })
     */
    upsert<T extends GoogleIntegrationUpsertArgs>(args: SelectSubset<T, GoogleIntegrationUpsertArgs<ExtArgs>>): Prisma__GoogleIntegrationClient<$Result.GetResult<Prisma.$GoogleIntegrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GoogleIntegrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleIntegrationCountArgs} args - Arguments to filter GoogleIntegrations to count.
     * @example
     * // Count the number of GoogleIntegrations
     * const count = await prisma.googleIntegration.count({
     *   where: {
     *     // ... the filter for the GoogleIntegrations we want to count
     *   }
     * })
    **/
    count<T extends GoogleIntegrationCountArgs>(
      args?: Subset<T, GoogleIntegrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoogleIntegrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GoogleIntegration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleIntegrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoogleIntegrationAggregateArgs>(args: Subset<T, GoogleIntegrationAggregateArgs>): Prisma.PrismaPromise<GetGoogleIntegrationAggregateType<T>>

    /**
     * Group by GoogleIntegration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleIntegrationGroupByArgs} args - Group by arguments.
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
      T extends GoogleIntegrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoogleIntegrationGroupByArgs['orderBy'] }
        : { orderBy?: GoogleIntegrationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GoogleIntegrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoogleIntegrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GoogleIntegration model
   */
  readonly fields: GoogleIntegrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GoogleIntegration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoogleIntegrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the GoogleIntegration model
   */
  interface GoogleIntegrationFieldRefs {
    readonly id: FieldRef<"GoogleIntegration", 'String'>
    readonly userId: FieldRef<"GoogleIntegration", 'String'>
    readonly organizationId: FieldRef<"GoogleIntegration", 'String'>
    readonly accessToken: FieldRef<"GoogleIntegration", 'String'>
    readonly refreshToken: FieldRef<"GoogleIntegration", 'String'>
    readonly expiresAt: FieldRef<"GoogleIntegration", 'DateTime'>
    readonly isConnected: FieldRef<"GoogleIntegration", 'Boolean'>
    readonly createdAt: FieldRef<"GoogleIntegration", 'DateTime'>
    readonly updatedAt: FieldRef<"GoogleIntegration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GoogleIntegration findUnique
   */
  export type GoogleIntegrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleIntegration
     */
    select?: GoogleIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleIntegration
     */
    omit?: GoogleIntegrationOmit<ExtArgs> | null
    /**
     * Filter, which GoogleIntegration to fetch.
     */
    where: GoogleIntegrationWhereUniqueInput
  }

  /**
   * GoogleIntegration findUniqueOrThrow
   */
  export type GoogleIntegrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleIntegration
     */
    select?: GoogleIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleIntegration
     */
    omit?: GoogleIntegrationOmit<ExtArgs> | null
    /**
     * Filter, which GoogleIntegration to fetch.
     */
    where: GoogleIntegrationWhereUniqueInput
  }

  /**
   * GoogleIntegration findFirst
   */
  export type GoogleIntegrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleIntegration
     */
    select?: GoogleIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleIntegration
     */
    omit?: GoogleIntegrationOmit<ExtArgs> | null
    /**
     * Filter, which GoogleIntegration to fetch.
     */
    where?: GoogleIntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoogleIntegrations to fetch.
     */
    orderBy?: GoogleIntegrationOrderByWithRelationInput | GoogleIntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoogleIntegrations.
     */
    cursor?: GoogleIntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoogleIntegrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoogleIntegrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoogleIntegrations.
     */
    distinct?: GoogleIntegrationScalarFieldEnum | GoogleIntegrationScalarFieldEnum[]
  }

  /**
   * GoogleIntegration findFirstOrThrow
   */
  export type GoogleIntegrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleIntegration
     */
    select?: GoogleIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleIntegration
     */
    omit?: GoogleIntegrationOmit<ExtArgs> | null
    /**
     * Filter, which GoogleIntegration to fetch.
     */
    where?: GoogleIntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoogleIntegrations to fetch.
     */
    orderBy?: GoogleIntegrationOrderByWithRelationInput | GoogleIntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoogleIntegrations.
     */
    cursor?: GoogleIntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoogleIntegrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoogleIntegrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoogleIntegrations.
     */
    distinct?: GoogleIntegrationScalarFieldEnum | GoogleIntegrationScalarFieldEnum[]
  }

  /**
   * GoogleIntegration findMany
   */
  export type GoogleIntegrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleIntegration
     */
    select?: GoogleIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleIntegration
     */
    omit?: GoogleIntegrationOmit<ExtArgs> | null
    /**
     * Filter, which GoogleIntegrations to fetch.
     */
    where?: GoogleIntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoogleIntegrations to fetch.
     */
    orderBy?: GoogleIntegrationOrderByWithRelationInput | GoogleIntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GoogleIntegrations.
     */
    cursor?: GoogleIntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoogleIntegrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoogleIntegrations.
     */
    skip?: number
    distinct?: GoogleIntegrationScalarFieldEnum | GoogleIntegrationScalarFieldEnum[]
  }

  /**
   * GoogleIntegration create
   */
  export type GoogleIntegrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleIntegration
     */
    select?: GoogleIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleIntegration
     */
    omit?: GoogleIntegrationOmit<ExtArgs> | null
    /**
     * The data needed to create a GoogleIntegration.
     */
    data: XOR<GoogleIntegrationCreateInput, GoogleIntegrationUncheckedCreateInput>
  }

  /**
   * GoogleIntegration createMany
   */
  export type GoogleIntegrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GoogleIntegrations.
     */
    data: GoogleIntegrationCreateManyInput | GoogleIntegrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GoogleIntegration createManyAndReturn
   */
  export type GoogleIntegrationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleIntegration
     */
    select?: GoogleIntegrationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleIntegration
     */
    omit?: GoogleIntegrationOmit<ExtArgs> | null
    /**
     * The data used to create many GoogleIntegrations.
     */
    data: GoogleIntegrationCreateManyInput | GoogleIntegrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GoogleIntegration update
   */
  export type GoogleIntegrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleIntegration
     */
    select?: GoogleIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleIntegration
     */
    omit?: GoogleIntegrationOmit<ExtArgs> | null
    /**
     * The data needed to update a GoogleIntegration.
     */
    data: XOR<GoogleIntegrationUpdateInput, GoogleIntegrationUncheckedUpdateInput>
    /**
     * Choose, which GoogleIntegration to update.
     */
    where: GoogleIntegrationWhereUniqueInput
  }

  /**
   * GoogleIntegration updateMany
   */
  export type GoogleIntegrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GoogleIntegrations.
     */
    data: XOR<GoogleIntegrationUpdateManyMutationInput, GoogleIntegrationUncheckedUpdateManyInput>
    /**
     * Filter which GoogleIntegrations to update
     */
    where?: GoogleIntegrationWhereInput
    /**
     * Limit how many GoogleIntegrations to update.
     */
    limit?: number
  }

  /**
   * GoogleIntegration updateManyAndReturn
   */
  export type GoogleIntegrationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleIntegration
     */
    select?: GoogleIntegrationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleIntegration
     */
    omit?: GoogleIntegrationOmit<ExtArgs> | null
    /**
     * The data used to update GoogleIntegrations.
     */
    data: XOR<GoogleIntegrationUpdateManyMutationInput, GoogleIntegrationUncheckedUpdateManyInput>
    /**
     * Filter which GoogleIntegrations to update
     */
    where?: GoogleIntegrationWhereInput
    /**
     * Limit how many GoogleIntegrations to update.
     */
    limit?: number
  }

  /**
   * GoogleIntegration upsert
   */
  export type GoogleIntegrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleIntegration
     */
    select?: GoogleIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleIntegration
     */
    omit?: GoogleIntegrationOmit<ExtArgs> | null
    /**
     * The filter to search for the GoogleIntegration to update in case it exists.
     */
    where: GoogleIntegrationWhereUniqueInput
    /**
     * In case the GoogleIntegration found by the `where` argument doesn't exist, create a new GoogleIntegration with this data.
     */
    create: XOR<GoogleIntegrationCreateInput, GoogleIntegrationUncheckedCreateInput>
    /**
     * In case the GoogleIntegration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoogleIntegrationUpdateInput, GoogleIntegrationUncheckedUpdateInput>
  }

  /**
   * GoogleIntegration delete
   */
  export type GoogleIntegrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleIntegration
     */
    select?: GoogleIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleIntegration
     */
    omit?: GoogleIntegrationOmit<ExtArgs> | null
    /**
     * Filter which GoogleIntegration to delete.
     */
    where: GoogleIntegrationWhereUniqueInput
  }

  /**
   * GoogleIntegration deleteMany
   */
  export type GoogleIntegrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoogleIntegrations to delete
     */
    where?: GoogleIntegrationWhereInput
    /**
     * Limit how many GoogleIntegrations to delete.
     */
    limit?: number
  }

  /**
   * GoogleIntegration without action
   */
  export type GoogleIntegrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleIntegration
     */
    select?: GoogleIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleIntegration
     */
    omit?: GoogleIntegrationOmit<ExtArgs> | null
  }


  /**
   * Model ZoomIntegration
   */

  export type AggregateZoomIntegration = {
    _count: ZoomIntegrationCountAggregateOutputType | null
    _min: ZoomIntegrationMinAggregateOutputType | null
    _max: ZoomIntegrationMaxAggregateOutputType | null
  }

  export type ZoomIntegrationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    accountId: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    webhookSecret: string | null
    isConnected: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ZoomIntegrationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    accountId: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    webhookSecret: string | null
    isConnected: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ZoomIntegrationCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    accountId: number
    accessToken: number
    refreshToken: number
    expiresAt: number
    webhookSecret: number
    isConnected: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ZoomIntegrationMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    accountId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    webhookSecret?: true
    isConnected?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ZoomIntegrationMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    accountId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    webhookSecret?: true
    isConnected?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ZoomIntegrationCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    accountId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    webhookSecret?: true
    isConnected?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ZoomIntegrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZoomIntegration to aggregate.
     */
    where?: ZoomIntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZoomIntegrations to fetch.
     */
    orderBy?: ZoomIntegrationOrderByWithRelationInput | ZoomIntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ZoomIntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZoomIntegrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZoomIntegrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ZoomIntegrations
    **/
    _count?: true | ZoomIntegrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZoomIntegrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZoomIntegrationMaxAggregateInputType
  }

  export type GetZoomIntegrationAggregateType<T extends ZoomIntegrationAggregateArgs> = {
        [P in keyof T & keyof AggregateZoomIntegration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZoomIntegration[P]>
      : GetScalarType<T[P], AggregateZoomIntegration[P]>
  }




  export type ZoomIntegrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZoomIntegrationWhereInput
    orderBy?: ZoomIntegrationOrderByWithAggregationInput | ZoomIntegrationOrderByWithAggregationInput[]
    by: ZoomIntegrationScalarFieldEnum[] | ZoomIntegrationScalarFieldEnum
    having?: ZoomIntegrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZoomIntegrationCountAggregateInputType | true
    _min?: ZoomIntegrationMinAggregateInputType
    _max?: ZoomIntegrationMaxAggregateInputType
  }

  export type ZoomIntegrationGroupByOutputType = {
    id: string
    userId: string
    organizationId: string | null
    accountId: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    webhookSecret: string | null
    isConnected: boolean
    createdAt: Date
    updatedAt: Date
    _count: ZoomIntegrationCountAggregateOutputType | null
    _min: ZoomIntegrationMinAggregateOutputType | null
    _max: ZoomIntegrationMaxAggregateOutputType | null
  }

  type GetZoomIntegrationGroupByPayload<T extends ZoomIntegrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZoomIntegrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZoomIntegrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZoomIntegrationGroupByOutputType[P]>
            : GetScalarType<T[P], ZoomIntegrationGroupByOutputType[P]>
        }
      >
    >


  export type ZoomIntegrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    accountId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    webhookSecret?: boolean
    isConnected?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["zoomIntegration"]>

  export type ZoomIntegrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    accountId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    webhookSecret?: boolean
    isConnected?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["zoomIntegration"]>

  export type ZoomIntegrationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    accountId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    webhookSecret?: boolean
    isConnected?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["zoomIntegration"]>

  export type ZoomIntegrationSelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    accountId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    webhookSecret?: boolean
    isConnected?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ZoomIntegrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "accountId" | "accessToken" | "refreshToken" | "expiresAt" | "webhookSecret" | "isConnected" | "createdAt" | "updatedAt", ExtArgs["result"]["zoomIntegration"]>

  export type $ZoomIntegrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ZoomIntegration"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organizationId: string | null
      accountId: string | null
      accessToken: string | null
      refreshToken: string | null
      expiresAt: Date | null
      webhookSecret: string | null
      isConnected: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["zoomIntegration"]>
    composites: {}
  }

  type ZoomIntegrationGetPayload<S extends boolean | null | undefined | ZoomIntegrationDefaultArgs> = $Result.GetResult<Prisma.$ZoomIntegrationPayload, S>

  type ZoomIntegrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ZoomIntegrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZoomIntegrationCountAggregateInputType | true
    }

  export interface ZoomIntegrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ZoomIntegration'], meta: { name: 'ZoomIntegration' } }
    /**
     * Find zero or one ZoomIntegration that matches the filter.
     * @param {ZoomIntegrationFindUniqueArgs} args - Arguments to find a ZoomIntegration
     * @example
     * // Get one ZoomIntegration
     * const zoomIntegration = await prisma.zoomIntegration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZoomIntegrationFindUniqueArgs>(args: SelectSubset<T, ZoomIntegrationFindUniqueArgs<ExtArgs>>): Prisma__ZoomIntegrationClient<$Result.GetResult<Prisma.$ZoomIntegrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ZoomIntegration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZoomIntegrationFindUniqueOrThrowArgs} args - Arguments to find a ZoomIntegration
     * @example
     * // Get one ZoomIntegration
     * const zoomIntegration = await prisma.zoomIntegration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZoomIntegrationFindUniqueOrThrowArgs>(args: SelectSubset<T, ZoomIntegrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ZoomIntegrationClient<$Result.GetResult<Prisma.$ZoomIntegrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZoomIntegration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoomIntegrationFindFirstArgs} args - Arguments to find a ZoomIntegration
     * @example
     * // Get one ZoomIntegration
     * const zoomIntegration = await prisma.zoomIntegration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZoomIntegrationFindFirstArgs>(args?: SelectSubset<T, ZoomIntegrationFindFirstArgs<ExtArgs>>): Prisma__ZoomIntegrationClient<$Result.GetResult<Prisma.$ZoomIntegrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZoomIntegration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoomIntegrationFindFirstOrThrowArgs} args - Arguments to find a ZoomIntegration
     * @example
     * // Get one ZoomIntegration
     * const zoomIntegration = await prisma.zoomIntegration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZoomIntegrationFindFirstOrThrowArgs>(args?: SelectSubset<T, ZoomIntegrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ZoomIntegrationClient<$Result.GetResult<Prisma.$ZoomIntegrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ZoomIntegrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoomIntegrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZoomIntegrations
     * const zoomIntegrations = await prisma.zoomIntegration.findMany()
     * 
     * // Get first 10 ZoomIntegrations
     * const zoomIntegrations = await prisma.zoomIntegration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zoomIntegrationWithIdOnly = await prisma.zoomIntegration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ZoomIntegrationFindManyArgs>(args?: SelectSubset<T, ZoomIntegrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZoomIntegrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ZoomIntegration.
     * @param {ZoomIntegrationCreateArgs} args - Arguments to create a ZoomIntegration.
     * @example
     * // Create one ZoomIntegration
     * const ZoomIntegration = await prisma.zoomIntegration.create({
     *   data: {
     *     // ... data to create a ZoomIntegration
     *   }
     * })
     * 
     */
    create<T extends ZoomIntegrationCreateArgs>(args: SelectSubset<T, ZoomIntegrationCreateArgs<ExtArgs>>): Prisma__ZoomIntegrationClient<$Result.GetResult<Prisma.$ZoomIntegrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ZoomIntegrations.
     * @param {ZoomIntegrationCreateManyArgs} args - Arguments to create many ZoomIntegrations.
     * @example
     * // Create many ZoomIntegrations
     * const zoomIntegration = await prisma.zoomIntegration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ZoomIntegrationCreateManyArgs>(args?: SelectSubset<T, ZoomIntegrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ZoomIntegrations and returns the data saved in the database.
     * @param {ZoomIntegrationCreateManyAndReturnArgs} args - Arguments to create many ZoomIntegrations.
     * @example
     * // Create many ZoomIntegrations
     * const zoomIntegration = await prisma.zoomIntegration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ZoomIntegrations and only return the `id`
     * const zoomIntegrationWithIdOnly = await prisma.zoomIntegration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ZoomIntegrationCreateManyAndReturnArgs>(args?: SelectSubset<T, ZoomIntegrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZoomIntegrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ZoomIntegration.
     * @param {ZoomIntegrationDeleteArgs} args - Arguments to delete one ZoomIntegration.
     * @example
     * // Delete one ZoomIntegration
     * const ZoomIntegration = await prisma.zoomIntegration.delete({
     *   where: {
     *     // ... filter to delete one ZoomIntegration
     *   }
     * })
     * 
     */
    delete<T extends ZoomIntegrationDeleteArgs>(args: SelectSubset<T, ZoomIntegrationDeleteArgs<ExtArgs>>): Prisma__ZoomIntegrationClient<$Result.GetResult<Prisma.$ZoomIntegrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ZoomIntegration.
     * @param {ZoomIntegrationUpdateArgs} args - Arguments to update one ZoomIntegration.
     * @example
     * // Update one ZoomIntegration
     * const zoomIntegration = await prisma.zoomIntegration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ZoomIntegrationUpdateArgs>(args: SelectSubset<T, ZoomIntegrationUpdateArgs<ExtArgs>>): Prisma__ZoomIntegrationClient<$Result.GetResult<Prisma.$ZoomIntegrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ZoomIntegrations.
     * @param {ZoomIntegrationDeleteManyArgs} args - Arguments to filter ZoomIntegrations to delete.
     * @example
     * // Delete a few ZoomIntegrations
     * const { count } = await prisma.zoomIntegration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ZoomIntegrationDeleteManyArgs>(args?: SelectSubset<T, ZoomIntegrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZoomIntegrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoomIntegrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZoomIntegrations
     * const zoomIntegration = await prisma.zoomIntegration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ZoomIntegrationUpdateManyArgs>(args: SelectSubset<T, ZoomIntegrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZoomIntegrations and returns the data updated in the database.
     * @param {ZoomIntegrationUpdateManyAndReturnArgs} args - Arguments to update many ZoomIntegrations.
     * @example
     * // Update many ZoomIntegrations
     * const zoomIntegration = await prisma.zoomIntegration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ZoomIntegrations and only return the `id`
     * const zoomIntegrationWithIdOnly = await prisma.zoomIntegration.updateManyAndReturn({
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
    updateManyAndReturn<T extends ZoomIntegrationUpdateManyAndReturnArgs>(args: SelectSubset<T, ZoomIntegrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZoomIntegrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ZoomIntegration.
     * @param {ZoomIntegrationUpsertArgs} args - Arguments to update or create a ZoomIntegration.
     * @example
     * // Update or create a ZoomIntegration
     * const zoomIntegration = await prisma.zoomIntegration.upsert({
     *   create: {
     *     // ... data to create a ZoomIntegration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZoomIntegration we want to update
     *   }
     * })
     */
    upsert<T extends ZoomIntegrationUpsertArgs>(args: SelectSubset<T, ZoomIntegrationUpsertArgs<ExtArgs>>): Prisma__ZoomIntegrationClient<$Result.GetResult<Prisma.$ZoomIntegrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ZoomIntegrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoomIntegrationCountArgs} args - Arguments to filter ZoomIntegrations to count.
     * @example
     * // Count the number of ZoomIntegrations
     * const count = await prisma.zoomIntegration.count({
     *   where: {
     *     // ... the filter for the ZoomIntegrations we want to count
     *   }
     * })
    **/
    count<T extends ZoomIntegrationCountArgs>(
      args?: Subset<T, ZoomIntegrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZoomIntegrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZoomIntegration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoomIntegrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ZoomIntegrationAggregateArgs>(args: Subset<T, ZoomIntegrationAggregateArgs>): Prisma.PrismaPromise<GetZoomIntegrationAggregateType<T>>

    /**
     * Group by ZoomIntegration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoomIntegrationGroupByArgs} args - Group by arguments.
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
      T extends ZoomIntegrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZoomIntegrationGroupByArgs['orderBy'] }
        : { orderBy?: ZoomIntegrationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ZoomIntegrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZoomIntegrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ZoomIntegration model
   */
  readonly fields: ZoomIntegrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZoomIntegration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZoomIntegrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ZoomIntegration model
   */
  interface ZoomIntegrationFieldRefs {
    readonly id: FieldRef<"ZoomIntegration", 'String'>
    readonly userId: FieldRef<"ZoomIntegration", 'String'>
    readonly organizationId: FieldRef<"ZoomIntegration", 'String'>
    readonly accountId: FieldRef<"ZoomIntegration", 'String'>
    readonly accessToken: FieldRef<"ZoomIntegration", 'String'>
    readonly refreshToken: FieldRef<"ZoomIntegration", 'String'>
    readonly expiresAt: FieldRef<"ZoomIntegration", 'DateTime'>
    readonly webhookSecret: FieldRef<"ZoomIntegration", 'String'>
    readonly isConnected: FieldRef<"ZoomIntegration", 'Boolean'>
    readonly createdAt: FieldRef<"ZoomIntegration", 'DateTime'>
    readonly updatedAt: FieldRef<"ZoomIntegration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ZoomIntegration findUnique
   */
  export type ZoomIntegrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomIntegration
     */
    select?: ZoomIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoomIntegration
     */
    omit?: ZoomIntegrationOmit<ExtArgs> | null
    /**
     * Filter, which ZoomIntegration to fetch.
     */
    where: ZoomIntegrationWhereUniqueInput
  }

  /**
   * ZoomIntegration findUniqueOrThrow
   */
  export type ZoomIntegrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomIntegration
     */
    select?: ZoomIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoomIntegration
     */
    omit?: ZoomIntegrationOmit<ExtArgs> | null
    /**
     * Filter, which ZoomIntegration to fetch.
     */
    where: ZoomIntegrationWhereUniqueInput
  }

  /**
   * ZoomIntegration findFirst
   */
  export type ZoomIntegrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomIntegration
     */
    select?: ZoomIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoomIntegration
     */
    omit?: ZoomIntegrationOmit<ExtArgs> | null
    /**
     * Filter, which ZoomIntegration to fetch.
     */
    where?: ZoomIntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZoomIntegrations to fetch.
     */
    orderBy?: ZoomIntegrationOrderByWithRelationInput | ZoomIntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZoomIntegrations.
     */
    cursor?: ZoomIntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZoomIntegrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZoomIntegrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZoomIntegrations.
     */
    distinct?: ZoomIntegrationScalarFieldEnum | ZoomIntegrationScalarFieldEnum[]
  }

  /**
   * ZoomIntegration findFirstOrThrow
   */
  export type ZoomIntegrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomIntegration
     */
    select?: ZoomIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoomIntegration
     */
    omit?: ZoomIntegrationOmit<ExtArgs> | null
    /**
     * Filter, which ZoomIntegration to fetch.
     */
    where?: ZoomIntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZoomIntegrations to fetch.
     */
    orderBy?: ZoomIntegrationOrderByWithRelationInput | ZoomIntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZoomIntegrations.
     */
    cursor?: ZoomIntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZoomIntegrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZoomIntegrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZoomIntegrations.
     */
    distinct?: ZoomIntegrationScalarFieldEnum | ZoomIntegrationScalarFieldEnum[]
  }

  /**
   * ZoomIntegration findMany
   */
  export type ZoomIntegrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomIntegration
     */
    select?: ZoomIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoomIntegration
     */
    omit?: ZoomIntegrationOmit<ExtArgs> | null
    /**
     * Filter, which ZoomIntegrations to fetch.
     */
    where?: ZoomIntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZoomIntegrations to fetch.
     */
    orderBy?: ZoomIntegrationOrderByWithRelationInput | ZoomIntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ZoomIntegrations.
     */
    cursor?: ZoomIntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZoomIntegrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZoomIntegrations.
     */
    skip?: number
    distinct?: ZoomIntegrationScalarFieldEnum | ZoomIntegrationScalarFieldEnum[]
  }

  /**
   * ZoomIntegration create
   */
  export type ZoomIntegrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomIntegration
     */
    select?: ZoomIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoomIntegration
     */
    omit?: ZoomIntegrationOmit<ExtArgs> | null
    /**
     * The data needed to create a ZoomIntegration.
     */
    data: XOR<ZoomIntegrationCreateInput, ZoomIntegrationUncheckedCreateInput>
  }

  /**
   * ZoomIntegration createMany
   */
  export type ZoomIntegrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ZoomIntegrations.
     */
    data: ZoomIntegrationCreateManyInput | ZoomIntegrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ZoomIntegration createManyAndReturn
   */
  export type ZoomIntegrationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomIntegration
     */
    select?: ZoomIntegrationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ZoomIntegration
     */
    omit?: ZoomIntegrationOmit<ExtArgs> | null
    /**
     * The data used to create many ZoomIntegrations.
     */
    data: ZoomIntegrationCreateManyInput | ZoomIntegrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ZoomIntegration update
   */
  export type ZoomIntegrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomIntegration
     */
    select?: ZoomIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoomIntegration
     */
    omit?: ZoomIntegrationOmit<ExtArgs> | null
    /**
     * The data needed to update a ZoomIntegration.
     */
    data: XOR<ZoomIntegrationUpdateInput, ZoomIntegrationUncheckedUpdateInput>
    /**
     * Choose, which ZoomIntegration to update.
     */
    where: ZoomIntegrationWhereUniqueInput
  }

  /**
   * ZoomIntegration updateMany
   */
  export type ZoomIntegrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ZoomIntegrations.
     */
    data: XOR<ZoomIntegrationUpdateManyMutationInput, ZoomIntegrationUncheckedUpdateManyInput>
    /**
     * Filter which ZoomIntegrations to update
     */
    where?: ZoomIntegrationWhereInput
    /**
     * Limit how many ZoomIntegrations to update.
     */
    limit?: number
  }

  /**
   * ZoomIntegration updateManyAndReturn
   */
  export type ZoomIntegrationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomIntegration
     */
    select?: ZoomIntegrationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ZoomIntegration
     */
    omit?: ZoomIntegrationOmit<ExtArgs> | null
    /**
     * The data used to update ZoomIntegrations.
     */
    data: XOR<ZoomIntegrationUpdateManyMutationInput, ZoomIntegrationUncheckedUpdateManyInput>
    /**
     * Filter which ZoomIntegrations to update
     */
    where?: ZoomIntegrationWhereInput
    /**
     * Limit how many ZoomIntegrations to update.
     */
    limit?: number
  }

  /**
   * ZoomIntegration upsert
   */
  export type ZoomIntegrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomIntegration
     */
    select?: ZoomIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoomIntegration
     */
    omit?: ZoomIntegrationOmit<ExtArgs> | null
    /**
     * The filter to search for the ZoomIntegration to update in case it exists.
     */
    where: ZoomIntegrationWhereUniqueInput
    /**
     * In case the ZoomIntegration found by the `where` argument doesn't exist, create a new ZoomIntegration with this data.
     */
    create: XOR<ZoomIntegrationCreateInput, ZoomIntegrationUncheckedCreateInput>
    /**
     * In case the ZoomIntegration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZoomIntegrationUpdateInput, ZoomIntegrationUncheckedUpdateInput>
  }

  /**
   * ZoomIntegration delete
   */
  export type ZoomIntegrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomIntegration
     */
    select?: ZoomIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoomIntegration
     */
    omit?: ZoomIntegrationOmit<ExtArgs> | null
    /**
     * Filter which ZoomIntegration to delete.
     */
    where: ZoomIntegrationWhereUniqueInput
  }

  /**
   * ZoomIntegration deleteMany
   */
  export type ZoomIntegrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZoomIntegrations to delete
     */
    where?: ZoomIntegrationWhereInput
    /**
     * Limit how many ZoomIntegrations to delete.
     */
    limit?: number
  }

  /**
   * ZoomIntegration without action
   */
  export type ZoomIntegrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomIntegration
     */
    select?: ZoomIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoomIntegration
     */
    omit?: ZoomIntegrationOmit<ExtArgs> | null
  }


  /**
   * Model ZoomMeeting
   */

  export type AggregateZoomMeeting = {
    _count: ZoomMeetingCountAggregateOutputType | null
    _avg: ZoomMeetingAvgAggregateOutputType | null
    _sum: ZoomMeetingSumAggregateOutputType | null
    _min: ZoomMeetingMinAggregateOutputType | null
    _max: ZoomMeetingMaxAggregateOutputType | null
  }

  export type ZoomMeetingAvgAggregateOutputType = {
    duration: number | null
  }

  export type ZoomMeetingSumAggregateOutputType = {
    duration: number | null
  }

  export type ZoomMeetingMinAggregateOutputType = {
    id: string | null
    zoomId: string | null
    userId: string | null
    organizationId: string | null
    topic: string | null
    startTime: Date | null
    duration: number | null
    joinUrl: string | null
    password: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ZoomMeetingMaxAggregateOutputType = {
    id: string | null
    zoomId: string | null
    userId: string | null
    organizationId: string | null
    topic: string | null
    startTime: Date | null
    duration: number | null
    joinUrl: string | null
    password: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ZoomMeetingCountAggregateOutputType = {
    id: number
    zoomId: number
    userId: number
    organizationId: number
    topic: number
    startTime: number
    duration: number
    joinUrl: number
    password: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ZoomMeetingAvgAggregateInputType = {
    duration?: true
  }

  export type ZoomMeetingSumAggregateInputType = {
    duration?: true
  }

  export type ZoomMeetingMinAggregateInputType = {
    id?: true
    zoomId?: true
    userId?: true
    organizationId?: true
    topic?: true
    startTime?: true
    duration?: true
    joinUrl?: true
    password?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ZoomMeetingMaxAggregateInputType = {
    id?: true
    zoomId?: true
    userId?: true
    organizationId?: true
    topic?: true
    startTime?: true
    duration?: true
    joinUrl?: true
    password?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ZoomMeetingCountAggregateInputType = {
    id?: true
    zoomId?: true
    userId?: true
    organizationId?: true
    topic?: true
    startTime?: true
    duration?: true
    joinUrl?: true
    password?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ZoomMeetingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZoomMeeting to aggregate.
     */
    where?: ZoomMeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZoomMeetings to fetch.
     */
    orderBy?: ZoomMeetingOrderByWithRelationInput | ZoomMeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ZoomMeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZoomMeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZoomMeetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ZoomMeetings
    **/
    _count?: true | ZoomMeetingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ZoomMeetingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ZoomMeetingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZoomMeetingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZoomMeetingMaxAggregateInputType
  }

  export type GetZoomMeetingAggregateType<T extends ZoomMeetingAggregateArgs> = {
        [P in keyof T & keyof AggregateZoomMeeting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZoomMeeting[P]>
      : GetScalarType<T[P], AggregateZoomMeeting[P]>
  }




  export type ZoomMeetingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZoomMeetingWhereInput
    orderBy?: ZoomMeetingOrderByWithAggregationInput | ZoomMeetingOrderByWithAggregationInput[]
    by: ZoomMeetingScalarFieldEnum[] | ZoomMeetingScalarFieldEnum
    having?: ZoomMeetingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZoomMeetingCountAggregateInputType | true
    _avg?: ZoomMeetingAvgAggregateInputType
    _sum?: ZoomMeetingSumAggregateInputType
    _min?: ZoomMeetingMinAggregateInputType
    _max?: ZoomMeetingMaxAggregateInputType
  }

  export type ZoomMeetingGroupByOutputType = {
    id: string
    zoomId: string
    userId: string
    organizationId: string | null
    topic: string
    startTime: Date
    duration: number | null
    joinUrl: string | null
    password: string | null
    status: string | null
    createdAt: Date
    updatedAt: Date
    _count: ZoomMeetingCountAggregateOutputType | null
    _avg: ZoomMeetingAvgAggregateOutputType | null
    _sum: ZoomMeetingSumAggregateOutputType | null
    _min: ZoomMeetingMinAggregateOutputType | null
    _max: ZoomMeetingMaxAggregateOutputType | null
  }

  type GetZoomMeetingGroupByPayload<T extends ZoomMeetingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZoomMeetingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZoomMeetingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZoomMeetingGroupByOutputType[P]>
            : GetScalarType<T[P], ZoomMeetingGroupByOutputType[P]>
        }
      >
    >


  export type ZoomMeetingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zoomId?: boolean
    userId?: boolean
    organizationId?: boolean
    topic?: boolean
    startTime?: boolean
    duration?: boolean
    joinUrl?: boolean
    password?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["zoomMeeting"]>

  export type ZoomMeetingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zoomId?: boolean
    userId?: boolean
    organizationId?: boolean
    topic?: boolean
    startTime?: boolean
    duration?: boolean
    joinUrl?: boolean
    password?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["zoomMeeting"]>

  export type ZoomMeetingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zoomId?: boolean
    userId?: boolean
    organizationId?: boolean
    topic?: boolean
    startTime?: boolean
    duration?: boolean
    joinUrl?: boolean
    password?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["zoomMeeting"]>

  export type ZoomMeetingSelectScalar = {
    id?: boolean
    zoomId?: boolean
    userId?: boolean
    organizationId?: boolean
    topic?: boolean
    startTime?: boolean
    duration?: boolean
    joinUrl?: boolean
    password?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ZoomMeetingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "zoomId" | "userId" | "organizationId" | "topic" | "startTime" | "duration" | "joinUrl" | "password" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["zoomMeeting"]>

  export type $ZoomMeetingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ZoomMeeting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      zoomId: string
      userId: string
      organizationId: string | null
      topic: string
      startTime: Date
      duration: number | null
      joinUrl: string | null
      password: string | null
      status: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["zoomMeeting"]>
    composites: {}
  }

  type ZoomMeetingGetPayload<S extends boolean | null | undefined | ZoomMeetingDefaultArgs> = $Result.GetResult<Prisma.$ZoomMeetingPayload, S>

  type ZoomMeetingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ZoomMeetingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZoomMeetingCountAggregateInputType | true
    }

  export interface ZoomMeetingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ZoomMeeting'], meta: { name: 'ZoomMeeting' } }
    /**
     * Find zero or one ZoomMeeting that matches the filter.
     * @param {ZoomMeetingFindUniqueArgs} args - Arguments to find a ZoomMeeting
     * @example
     * // Get one ZoomMeeting
     * const zoomMeeting = await prisma.zoomMeeting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZoomMeetingFindUniqueArgs>(args: SelectSubset<T, ZoomMeetingFindUniqueArgs<ExtArgs>>): Prisma__ZoomMeetingClient<$Result.GetResult<Prisma.$ZoomMeetingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ZoomMeeting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZoomMeetingFindUniqueOrThrowArgs} args - Arguments to find a ZoomMeeting
     * @example
     * // Get one ZoomMeeting
     * const zoomMeeting = await prisma.zoomMeeting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZoomMeetingFindUniqueOrThrowArgs>(args: SelectSubset<T, ZoomMeetingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ZoomMeetingClient<$Result.GetResult<Prisma.$ZoomMeetingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZoomMeeting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoomMeetingFindFirstArgs} args - Arguments to find a ZoomMeeting
     * @example
     * // Get one ZoomMeeting
     * const zoomMeeting = await prisma.zoomMeeting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZoomMeetingFindFirstArgs>(args?: SelectSubset<T, ZoomMeetingFindFirstArgs<ExtArgs>>): Prisma__ZoomMeetingClient<$Result.GetResult<Prisma.$ZoomMeetingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZoomMeeting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoomMeetingFindFirstOrThrowArgs} args - Arguments to find a ZoomMeeting
     * @example
     * // Get one ZoomMeeting
     * const zoomMeeting = await prisma.zoomMeeting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZoomMeetingFindFirstOrThrowArgs>(args?: SelectSubset<T, ZoomMeetingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ZoomMeetingClient<$Result.GetResult<Prisma.$ZoomMeetingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ZoomMeetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoomMeetingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZoomMeetings
     * const zoomMeetings = await prisma.zoomMeeting.findMany()
     * 
     * // Get first 10 ZoomMeetings
     * const zoomMeetings = await prisma.zoomMeeting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zoomMeetingWithIdOnly = await prisma.zoomMeeting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ZoomMeetingFindManyArgs>(args?: SelectSubset<T, ZoomMeetingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZoomMeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ZoomMeeting.
     * @param {ZoomMeetingCreateArgs} args - Arguments to create a ZoomMeeting.
     * @example
     * // Create one ZoomMeeting
     * const ZoomMeeting = await prisma.zoomMeeting.create({
     *   data: {
     *     // ... data to create a ZoomMeeting
     *   }
     * })
     * 
     */
    create<T extends ZoomMeetingCreateArgs>(args: SelectSubset<T, ZoomMeetingCreateArgs<ExtArgs>>): Prisma__ZoomMeetingClient<$Result.GetResult<Prisma.$ZoomMeetingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ZoomMeetings.
     * @param {ZoomMeetingCreateManyArgs} args - Arguments to create many ZoomMeetings.
     * @example
     * // Create many ZoomMeetings
     * const zoomMeeting = await prisma.zoomMeeting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ZoomMeetingCreateManyArgs>(args?: SelectSubset<T, ZoomMeetingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ZoomMeetings and returns the data saved in the database.
     * @param {ZoomMeetingCreateManyAndReturnArgs} args - Arguments to create many ZoomMeetings.
     * @example
     * // Create many ZoomMeetings
     * const zoomMeeting = await prisma.zoomMeeting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ZoomMeetings and only return the `id`
     * const zoomMeetingWithIdOnly = await prisma.zoomMeeting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ZoomMeetingCreateManyAndReturnArgs>(args?: SelectSubset<T, ZoomMeetingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZoomMeetingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ZoomMeeting.
     * @param {ZoomMeetingDeleteArgs} args - Arguments to delete one ZoomMeeting.
     * @example
     * // Delete one ZoomMeeting
     * const ZoomMeeting = await prisma.zoomMeeting.delete({
     *   where: {
     *     // ... filter to delete one ZoomMeeting
     *   }
     * })
     * 
     */
    delete<T extends ZoomMeetingDeleteArgs>(args: SelectSubset<T, ZoomMeetingDeleteArgs<ExtArgs>>): Prisma__ZoomMeetingClient<$Result.GetResult<Prisma.$ZoomMeetingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ZoomMeeting.
     * @param {ZoomMeetingUpdateArgs} args - Arguments to update one ZoomMeeting.
     * @example
     * // Update one ZoomMeeting
     * const zoomMeeting = await prisma.zoomMeeting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ZoomMeetingUpdateArgs>(args: SelectSubset<T, ZoomMeetingUpdateArgs<ExtArgs>>): Prisma__ZoomMeetingClient<$Result.GetResult<Prisma.$ZoomMeetingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ZoomMeetings.
     * @param {ZoomMeetingDeleteManyArgs} args - Arguments to filter ZoomMeetings to delete.
     * @example
     * // Delete a few ZoomMeetings
     * const { count } = await prisma.zoomMeeting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ZoomMeetingDeleteManyArgs>(args?: SelectSubset<T, ZoomMeetingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZoomMeetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoomMeetingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZoomMeetings
     * const zoomMeeting = await prisma.zoomMeeting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ZoomMeetingUpdateManyArgs>(args: SelectSubset<T, ZoomMeetingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZoomMeetings and returns the data updated in the database.
     * @param {ZoomMeetingUpdateManyAndReturnArgs} args - Arguments to update many ZoomMeetings.
     * @example
     * // Update many ZoomMeetings
     * const zoomMeeting = await prisma.zoomMeeting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ZoomMeetings and only return the `id`
     * const zoomMeetingWithIdOnly = await prisma.zoomMeeting.updateManyAndReturn({
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
    updateManyAndReturn<T extends ZoomMeetingUpdateManyAndReturnArgs>(args: SelectSubset<T, ZoomMeetingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZoomMeetingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ZoomMeeting.
     * @param {ZoomMeetingUpsertArgs} args - Arguments to update or create a ZoomMeeting.
     * @example
     * // Update or create a ZoomMeeting
     * const zoomMeeting = await prisma.zoomMeeting.upsert({
     *   create: {
     *     // ... data to create a ZoomMeeting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZoomMeeting we want to update
     *   }
     * })
     */
    upsert<T extends ZoomMeetingUpsertArgs>(args: SelectSubset<T, ZoomMeetingUpsertArgs<ExtArgs>>): Prisma__ZoomMeetingClient<$Result.GetResult<Prisma.$ZoomMeetingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ZoomMeetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoomMeetingCountArgs} args - Arguments to filter ZoomMeetings to count.
     * @example
     * // Count the number of ZoomMeetings
     * const count = await prisma.zoomMeeting.count({
     *   where: {
     *     // ... the filter for the ZoomMeetings we want to count
     *   }
     * })
    **/
    count<T extends ZoomMeetingCountArgs>(
      args?: Subset<T, ZoomMeetingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZoomMeetingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZoomMeeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoomMeetingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ZoomMeetingAggregateArgs>(args: Subset<T, ZoomMeetingAggregateArgs>): Prisma.PrismaPromise<GetZoomMeetingAggregateType<T>>

    /**
     * Group by ZoomMeeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoomMeetingGroupByArgs} args - Group by arguments.
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
      T extends ZoomMeetingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZoomMeetingGroupByArgs['orderBy'] }
        : { orderBy?: ZoomMeetingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ZoomMeetingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZoomMeetingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ZoomMeeting model
   */
  readonly fields: ZoomMeetingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZoomMeeting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZoomMeetingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ZoomMeeting model
   */
  interface ZoomMeetingFieldRefs {
    readonly id: FieldRef<"ZoomMeeting", 'String'>
    readonly zoomId: FieldRef<"ZoomMeeting", 'String'>
    readonly userId: FieldRef<"ZoomMeeting", 'String'>
    readonly organizationId: FieldRef<"ZoomMeeting", 'String'>
    readonly topic: FieldRef<"ZoomMeeting", 'String'>
    readonly startTime: FieldRef<"ZoomMeeting", 'DateTime'>
    readonly duration: FieldRef<"ZoomMeeting", 'Int'>
    readonly joinUrl: FieldRef<"ZoomMeeting", 'String'>
    readonly password: FieldRef<"ZoomMeeting", 'String'>
    readonly status: FieldRef<"ZoomMeeting", 'String'>
    readonly createdAt: FieldRef<"ZoomMeeting", 'DateTime'>
    readonly updatedAt: FieldRef<"ZoomMeeting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ZoomMeeting findUnique
   */
  export type ZoomMeetingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomMeeting
     */
    select?: ZoomMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoomMeeting
     */
    omit?: ZoomMeetingOmit<ExtArgs> | null
    /**
     * Filter, which ZoomMeeting to fetch.
     */
    where: ZoomMeetingWhereUniqueInput
  }

  /**
   * ZoomMeeting findUniqueOrThrow
   */
  export type ZoomMeetingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomMeeting
     */
    select?: ZoomMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoomMeeting
     */
    omit?: ZoomMeetingOmit<ExtArgs> | null
    /**
     * Filter, which ZoomMeeting to fetch.
     */
    where: ZoomMeetingWhereUniqueInput
  }

  /**
   * ZoomMeeting findFirst
   */
  export type ZoomMeetingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomMeeting
     */
    select?: ZoomMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoomMeeting
     */
    omit?: ZoomMeetingOmit<ExtArgs> | null
    /**
     * Filter, which ZoomMeeting to fetch.
     */
    where?: ZoomMeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZoomMeetings to fetch.
     */
    orderBy?: ZoomMeetingOrderByWithRelationInput | ZoomMeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZoomMeetings.
     */
    cursor?: ZoomMeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZoomMeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZoomMeetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZoomMeetings.
     */
    distinct?: ZoomMeetingScalarFieldEnum | ZoomMeetingScalarFieldEnum[]
  }

  /**
   * ZoomMeeting findFirstOrThrow
   */
  export type ZoomMeetingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomMeeting
     */
    select?: ZoomMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoomMeeting
     */
    omit?: ZoomMeetingOmit<ExtArgs> | null
    /**
     * Filter, which ZoomMeeting to fetch.
     */
    where?: ZoomMeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZoomMeetings to fetch.
     */
    orderBy?: ZoomMeetingOrderByWithRelationInput | ZoomMeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZoomMeetings.
     */
    cursor?: ZoomMeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZoomMeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZoomMeetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZoomMeetings.
     */
    distinct?: ZoomMeetingScalarFieldEnum | ZoomMeetingScalarFieldEnum[]
  }

  /**
   * ZoomMeeting findMany
   */
  export type ZoomMeetingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomMeeting
     */
    select?: ZoomMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoomMeeting
     */
    omit?: ZoomMeetingOmit<ExtArgs> | null
    /**
     * Filter, which ZoomMeetings to fetch.
     */
    where?: ZoomMeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZoomMeetings to fetch.
     */
    orderBy?: ZoomMeetingOrderByWithRelationInput | ZoomMeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ZoomMeetings.
     */
    cursor?: ZoomMeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZoomMeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZoomMeetings.
     */
    skip?: number
    distinct?: ZoomMeetingScalarFieldEnum | ZoomMeetingScalarFieldEnum[]
  }

  /**
   * ZoomMeeting create
   */
  export type ZoomMeetingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomMeeting
     */
    select?: ZoomMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoomMeeting
     */
    omit?: ZoomMeetingOmit<ExtArgs> | null
    /**
     * The data needed to create a ZoomMeeting.
     */
    data: XOR<ZoomMeetingCreateInput, ZoomMeetingUncheckedCreateInput>
  }

  /**
   * ZoomMeeting createMany
   */
  export type ZoomMeetingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ZoomMeetings.
     */
    data: ZoomMeetingCreateManyInput | ZoomMeetingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ZoomMeeting createManyAndReturn
   */
  export type ZoomMeetingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomMeeting
     */
    select?: ZoomMeetingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ZoomMeeting
     */
    omit?: ZoomMeetingOmit<ExtArgs> | null
    /**
     * The data used to create many ZoomMeetings.
     */
    data: ZoomMeetingCreateManyInput | ZoomMeetingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ZoomMeeting update
   */
  export type ZoomMeetingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomMeeting
     */
    select?: ZoomMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoomMeeting
     */
    omit?: ZoomMeetingOmit<ExtArgs> | null
    /**
     * The data needed to update a ZoomMeeting.
     */
    data: XOR<ZoomMeetingUpdateInput, ZoomMeetingUncheckedUpdateInput>
    /**
     * Choose, which ZoomMeeting to update.
     */
    where: ZoomMeetingWhereUniqueInput
  }

  /**
   * ZoomMeeting updateMany
   */
  export type ZoomMeetingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ZoomMeetings.
     */
    data: XOR<ZoomMeetingUpdateManyMutationInput, ZoomMeetingUncheckedUpdateManyInput>
    /**
     * Filter which ZoomMeetings to update
     */
    where?: ZoomMeetingWhereInput
    /**
     * Limit how many ZoomMeetings to update.
     */
    limit?: number
  }

  /**
   * ZoomMeeting updateManyAndReturn
   */
  export type ZoomMeetingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomMeeting
     */
    select?: ZoomMeetingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ZoomMeeting
     */
    omit?: ZoomMeetingOmit<ExtArgs> | null
    /**
     * The data used to update ZoomMeetings.
     */
    data: XOR<ZoomMeetingUpdateManyMutationInput, ZoomMeetingUncheckedUpdateManyInput>
    /**
     * Filter which ZoomMeetings to update
     */
    where?: ZoomMeetingWhereInput
    /**
     * Limit how many ZoomMeetings to update.
     */
    limit?: number
  }

  /**
   * ZoomMeeting upsert
   */
  export type ZoomMeetingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomMeeting
     */
    select?: ZoomMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoomMeeting
     */
    omit?: ZoomMeetingOmit<ExtArgs> | null
    /**
     * The filter to search for the ZoomMeeting to update in case it exists.
     */
    where: ZoomMeetingWhereUniqueInput
    /**
     * In case the ZoomMeeting found by the `where` argument doesn't exist, create a new ZoomMeeting with this data.
     */
    create: XOR<ZoomMeetingCreateInput, ZoomMeetingUncheckedCreateInput>
    /**
     * In case the ZoomMeeting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZoomMeetingUpdateInput, ZoomMeetingUncheckedUpdateInput>
  }

  /**
   * ZoomMeeting delete
   */
  export type ZoomMeetingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomMeeting
     */
    select?: ZoomMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoomMeeting
     */
    omit?: ZoomMeetingOmit<ExtArgs> | null
    /**
     * Filter which ZoomMeeting to delete.
     */
    where: ZoomMeetingWhereUniqueInput
  }

  /**
   * ZoomMeeting deleteMany
   */
  export type ZoomMeetingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZoomMeetings to delete
     */
    where?: ZoomMeetingWhereInput
    /**
     * Limit how many ZoomMeetings to delete.
     */
    limit?: number
  }

  /**
   * ZoomMeeting without action
   */
  export type ZoomMeetingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoomMeeting
     */
    select?: ZoomMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoomMeeting
     */
    omit?: ZoomMeetingOmit<ExtArgs> | null
  }


  /**
   * Model ShopifyStore
   */

  export type AggregateShopifyStore = {
    _count: ShopifyStoreCountAggregateOutputType | null
    _min: ShopifyStoreMinAggregateOutputType | null
    _max: ShopifyStoreMaxAggregateOutputType | null
  }

  export type ShopifyStoreMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    shopDomain: string | null
    accessToken: string | null
    scope: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShopifyStoreMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    shopDomain: string | null
    accessToken: string | null
    scope: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShopifyStoreCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    shopDomain: number
    accessToken: number
    scope: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShopifyStoreMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    shopDomain?: true
    accessToken?: true
    scope?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShopifyStoreMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    shopDomain?: true
    accessToken?: true
    scope?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShopifyStoreCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    shopDomain?: true
    accessToken?: true
    scope?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShopifyStoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopifyStore to aggregate.
     */
    where?: ShopifyStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopifyStores to fetch.
     */
    orderBy?: ShopifyStoreOrderByWithRelationInput | ShopifyStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopifyStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopifyStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopifyStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShopifyStores
    **/
    _count?: true | ShopifyStoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopifyStoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopifyStoreMaxAggregateInputType
  }

  export type GetShopifyStoreAggregateType<T extends ShopifyStoreAggregateArgs> = {
        [P in keyof T & keyof AggregateShopifyStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShopifyStore[P]>
      : GetScalarType<T[P], AggregateShopifyStore[P]>
  }




  export type ShopifyStoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopifyStoreWhereInput
    orderBy?: ShopifyStoreOrderByWithAggregationInput | ShopifyStoreOrderByWithAggregationInput[]
    by: ShopifyStoreScalarFieldEnum[] | ShopifyStoreScalarFieldEnum
    having?: ShopifyStoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopifyStoreCountAggregateInputType | true
    _min?: ShopifyStoreMinAggregateInputType
    _max?: ShopifyStoreMaxAggregateInputType
  }

  export type ShopifyStoreGroupByOutputType = {
    id: string
    userId: string
    organizationId: string | null
    shopDomain: string
    accessToken: string | null
    scope: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ShopifyStoreCountAggregateOutputType | null
    _min: ShopifyStoreMinAggregateOutputType | null
    _max: ShopifyStoreMaxAggregateOutputType | null
  }

  type GetShopifyStoreGroupByPayload<T extends ShopifyStoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopifyStoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopifyStoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopifyStoreGroupByOutputType[P]>
            : GetScalarType<T[P], ShopifyStoreGroupByOutputType[P]>
        }
      >
    >


  export type ShopifyStoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    shopDomain?: boolean
    accessToken?: boolean
    scope?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shopifyStore"]>

  export type ShopifyStoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    shopDomain?: boolean
    accessToken?: boolean
    scope?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shopifyStore"]>

  export type ShopifyStoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    shopDomain?: boolean
    accessToken?: boolean
    scope?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shopifyStore"]>

  export type ShopifyStoreSelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    shopDomain?: boolean
    accessToken?: boolean
    scope?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShopifyStoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "shopDomain" | "accessToken" | "scope" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["shopifyStore"]>

  export type $ShopifyStorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShopifyStore"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organizationId: string | null
      shopDomain: string
      accessToken: string | null
      scope: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shopifyStore"]>
    composites: {}
  }

  type ShopifyStoreGetPayload<S extends boolean | null | undefined | ShopifyStoreDefaultArgs> = $Result.GetResult<Prisma.$ShopifyStorePayload, S>

  type ShopifyStoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopifyStoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopifyStoreCountAggregateInputType | true
    }

  export interface ShopifyStoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShopifyStore'], meta: { name: 'ShopifyStore' } }
    /**
     * Find zero or one ShopifyStore that matches the filter.
     * @param {ShopifyStoreFindUniqueArgs} args - Arguments to find a ShopifyStore
     * @example
     * // Get one ShopifyStore
     * const shopifyStore = await prisma.shopifyStore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopifyStoreFindUniqueArgs>(args: SelectSubset<T, ShopifyStoreFindUniqueArgs<ExtArgs>>): Prisma__ShopifyStoreClient<$Result.GetResult<Prisma.$ShopifyStorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShopifyStore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopifyStoreFindUniqueOrThrowArgs} args - Arguments to find a ShopifyStore
     * @example
     * // Get one ShopifyStore
     * const shopifyStore = await prisma.shopifyStore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopifyStoreFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopifyStoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopifyStoreClient<$Result.GetResult<Prisma.$ShopifyStorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopifyStore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopifyStoreFindFirstArgs} args - Arguments to find a ShopifyStore
     * @example
     * // Get one ShopifyStore
     * const shopifyStore = await prisma.shopifyStore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopifyStoreFindFirstArgs>(args?: SelectSubset<T, ShopifyStoreFindFirstArgs<ExtArgs>>): Prisma__ShopifyStoreClient<$Result.GetResult<Prisma.$ShopifyStorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopifyStore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopifyStoreFindFirstOrThrowArgs} args - Arguments to find a ShopifyStore
     * @example
     * // Get one ShopifyStore
     * const shopifyStore = await prisma.shopifyStore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopifyStoreFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopifyStoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopifyStoreClient<$Result.GetResult<Prisma.$ShopifyStorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShopifyStores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopifyStoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopifyStores
     * const shopifyStores = await prisma.shopifyStore.findMany()
     * 
     * // Get first 10 ShopifyStores
     * const shopifyStores = await prisma.shopifyStore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopifyStoreWithIdOnly = await prisma.shopifyStore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopifyStoreFindManyArgs>(args?: SelectSubset<T, ShopifyStoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopifyStorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShopifyStore.
     * @param {ShopifyStoreCreateArgs} args - Arguments to create a ShopifyStore.
     * @example
     * // Create one ShopifyStore
     * const ShopifyStore = await prisma.shopifyStore.create({
     *   data: {
     *     // ... data to create a ShopifyStore
     *   }
     * })
     * 
     */
    create<T extends ShopifyStoreCreateArgs>(args: SelectSubset<T, ShopifyStoreCreateArgs<ExtArgs>>): Prisma__ShopifyStoreClient<$Result.GetResult<Prisma.$ShopifyStorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShopifyStores.
     * @param {ShopifyStoreCreateManyArgs} args - Arguments to create many ShopifyStores.
     * @example
     * // Create many ShopifyStores
     * const shopifyStore = await prisma.shopifyStore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopifyStoreCreateManyArgs>(args?: SelectSubset<T, ShopifyStoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShopifyStores and returns the data saved in the database.
     * @param {ShopifyStoreCreateManyAndReturnArgs} args - Arguments to create many ShopifyStores.
     * @example
     * // Create many ShopifyStores
     * const shopifyStore = await prisma.shopifyStore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShopifyStores and only return the `id`
     * const shopifyStoreWithIdOnly = await prisma.shopifyStore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShopifyStoreCreateManyAndReturnArgs>(args?: SelectSubset<T, ShopifyStoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopifyStorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShopifyStore.
     * @param {ShopifyStoreDeleteArgs} args - Arguments to delete one ShopifyStore.
     * @example
     * // Delete one ShopifyStore
     * const ShopifyStore = await prisma.shopifyStore.delete({
     *   where: {
     *     // ... filter to delete one ShopifyStore
     *   }
     * })
     * 
     */
    delete<T extends ShopifyStoreDeleteArgs>(args: SelectSubset<T, ShopifyStoreDeleteArgs<ExtArgs>>): Prisma__ShopifyStoreClient<$Result.GetResult<Prisma.$ShopifyStorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShopifyStore.
     * @param {ShopifyStoreUpdateArgs} args - Arguments to update one ShopifyStore.
     * @example
     * // Update one ShopifyStore
     * const shopifyStore = await prisma.shopifyStore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopifyStoreUpdateArgs>(args: SelectSubset<T, ShopifyStoreUpdateArgs<ExtArgs>>): Prisma__ShopifyStoreClient<$Result.GetResult<Prisma.$ShopifyStorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShopifyStores.
     * @param {ShopifyStoreDeleteManyArgs} args - Arguments to filter ShopifyStores to delete.
     * @example
     * // Delete a few ShopifyStores
     * const { count } = await prisma.shopifyStore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopifyStoreDeleteManyArgs>(args?: SelectSubset<T, ShopifyStoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopifyStores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopifyStoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopifyStores
     * const shopifyStore = await prisma.shopifyStore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopifyStoreUpdateManyArgs>(args: SelectSubset<T, ShopifyStoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopifyStores and returns the data updated in the database.
     * @param {ShopifyStoreUpdateManyAndReturnArgs} args - Arguments to update many ShopifyStores.
     * @example
     * // Update many ShopifyStores
     * const shopifyStore = await prisma.shopifyStore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShopifyStores and only return the `id`
     * const shopifyStoreWithIdOnly = await prisma.shopifyStore.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShopifyStoreUpdateManyAndReturnArgs>(args: SelectSubset<T, ShopifyStoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopifyStorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShopifyStore.
     * @param {ShopifyStoreUpsertArgs} args - Arguments to update or create a ShopifyStore.
     * @example
     * // Update or create a ShopifyStore
     * const shopifyStore = await prisma.shopifyStore.upsert({
     *   create: {
     *     // ... data to create a ShopifyStore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopifyStore we want to update
     *   }
     * })
     */
    upsert<T extends ShopifyStoreUpsertArgs>(args: SelectSubset<T, ShopifyStoreUpsertArgs<ExtArgs>>): Prisma__ShopifyStoreClient<$Result.GetResult<Prisma.$ShopifyStorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShopifyStores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopifyStoreCountArgs} args - Arguments to filter ShopifyStores to count.
     * @example
     * // Count the number of ShopifyStores
     * const count = await prisma.shopifyStore.count({
     *   where: {
     *     // ... the filter for the ShopifyStores we want to count
     *   }
     * })
    **/
    count<T extends ShopifyStoreCountArgs>(
      args?: Subset<T, ShopifyStoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopifyStoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShopifyStore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopifyStoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopifyStoreAggregateArgs>(args: Subset<T, ShopifyStoreAggregateArgs>): Prisma.PrismaPromise<GetShopifyStoreAggregateType<T>>

    /**
     * Group by ShopifyStore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopifyStoreGroupByArgs} args - Group by arguments.
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
      T extends ShopifyStoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopifyStoreGroupByArgs['orderBy'] }
        : { orderBy?: ShopifyStoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShopifyStoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopifyStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShopifyStore model
   */
  readonly fields: ShopifyStoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShopifyStore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopifyStoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ShopifyStore model
   */
  interface ShopifyStoreFieldRefs {
    readonly id: FieldRef<"ShopifyStore", 'String'>
    readonly userId: FieldRef<"ShopifyStore", 'String'>
    readonly organizationId: FieldRef<"ShopifyStore", 'String'>
    readonly shopDomain: FieldRef<"ShopifyStore", 'String'>
    readonly accessToken: FieldRef<"ShopifyStore", 'String'>
    readonly scope: FieldRef<"ShopifyStore", 'String'>
    readonly isActive: FieldRef<"ShopifyStore", 'Boolean'>
    readonly createdAt: FieldRef<"ShopifyStore", 'DateTime'>
    readonly updatedAt: FieldRef<"ShopifyStore", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShopifyStore findUnique
   */
  export type ShopifyStoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyStore
     */
    select?: ShopifyStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopifyStore
     */
    omit?: ShopifyStoreOmit<ExtArgs> | null
    /**
     * Filter, which ShopifyStore to fetch.
     */
    where: ShopifyStoreWhereUniqueInput
  }

  /**
   * ShopifyStore findUniqueOrThrow
   */
  export type ShopifyStoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyStore
     */
    select?: ShopifyStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopifyStore
     */
    omit?: ShopifyStoreOmit<ExtArgs> | null
    /**
     * Filter, which ShopifyStore to fetch.
     */
    where: ShopifyStoreWhereUniqueInput
  }

  /**
   * ShopifyStore findFirst
   */
  export type ShopifyStoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyStore
     */
    select?: ShopifyStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopifyStore
     */
    omit?: ShopifyStoreOmit<ExtArgs> | null
    /**
     * Filter, which ShopifyStore to fetch.
     */
    where?: ShopifyStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopifyStores to fetch.
     */
    orderBy?: ShopifyStoreOrderByWithRelationInput | ShopifyStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopifyStores.
     */
    cursor?: ShopifyStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopifyStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopifyStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopifyStores.
     */
    distinct?: ShopifyStoreScalarFieldEnum | ShopifyStoreScalarFieldEnum[]
  }

  /**
   * ShopifyStore findFirstOrThrow
   */
  export type ShopifyStoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyStore
     */
    select?: ShopifyStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopifyStore
     */
    omit?: ShopifyStoreOmit<ExtArgs> | null
    /**
     * Filter, which ShopifyStore to fetch.
     */
    where?: ShopifyStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopifyStores to fetch.
     */
    orderBy?: ShopifyStoreOrderByWithRelationInput | ShopifyStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopifyStores.
     */
    cursor?: ShopifyStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopifyStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopifyStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopifyStores.
     */
    distinct?: ShopifyStoreScalarFieldEnum | ShopifyStoreScalarFieldEnum[]
  }

  /**
   * ShopifyStore findMany
   */
  export type ShopifyStoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyStore
     */
    select?: ShopifyStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopifyStore
     */
    omit?: ShopifyStoreOmit<ExtArgs> | null
    /**
     * Filter, which ShopifyStores to fetch.
     */
    where?: ShopifyStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopifyStores to fetch.
     */
    orderBy?: ShopifyStoreOrderByWithRelationInput | ShopifyStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShopifyStores.
     */
    cursor?: ShopifyStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopifyStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopifyStores.
     */
    skip?: number
    distinct?: ShopifyStoreScalarFieldEnum | ShopifyStoreScalarFieldEnum[]
  }

  /**
   * ShopifyStore create
   */
  export type ShopifyStoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyStore
     */
    select?: ShopifyStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopifyStore
     */
    omit?: ShopifyStoreOmit<ExtArgs> | null
    /**
     * The data needed to create a ShopifyStore.
     */
    data: XOR<ShopifyStoreCreateInput, ShopifyStoreUncheckedCreateInput>
  }

  /**
   * ShopifyStore createMany
   */
  export type ShopifyStoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopifyStores.
     */
    data: ShopifyStoreCreateManyInput | ShopifyStoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShopifyStore createManyAndReturn
   */
  export type ShopifyStoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyStore
     */
    select?: ShopifyStoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShopifyStore
     */
    omit?: ShopifyStoreOmit<ExtArgs> | null
    /**
     * The data used to create many ShopifyStores.
     */
    data: ShopifyStoreCreateManyInput | ShopifyStoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShopifyStore update
   */
  export type ShopifyStoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyStore
     */
    select?: ShopifyStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopifyStore
     */
    omit?: ShopifyStoreOmit<ExtArgs> | null
    /**
     * The data needed to update a ShopifyStore.
     */
    data: XOR<ShopifyStoreUpdateInput, ShopifyStoreUncheckedUpdateInput>
    /**
     * Choose, which ShopifyStore to update.
     */
    where: ShopifyStoreWhereUniqueInput
  }

  /**
   * ShopifyStore updateMany
   */
  export type ShopifyStoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopifyStores.
     */
    data: XOR<ShopifyStoreUpdateManyMutationInput, ShopifyStoreUncheckedUpdateManyInput>
    /**
     * Filter which ShopifyStores to update
     */
    where?: ShopifyStoreWhereInput
    /**
     * Limit how many ShopifyStores to update.
     */
    limit?: number
  }

  /**
   * ShopifyStore updateManyAndReturn
   */
  export type ShopifyStoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyStore
     */
    select?: ShopifyStoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShopifyStore
     */
    omit?: ShopifyStoreOmit<ExtArgs> | null
    /**
     * The data used to update ShopifyStores.
     */
    data: XOR<ShopifyStoreUpdateManyMutationInput, ShopifyStoreUncheckedUpdateManyInput>
    /**
     * Filter which ShopifyStores to update
     */
    where?: ShopifyStoreWhereInput
    /**
     * Limit how many ShopifyStores to update.
     */
    limit?: number
  }

  /**
   * ShopifyStore upsert
   */
  export type ShopifyStoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyStore
     */
    select?: ShopifyStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopifyStore
     */
    omit?: ShopifyStoreOmit<ExtArgs> | null
    /**
     * The filter to search for the ShopifyStore to update in case it exists.
     */
    where: ShopifyStoreWhereUniqueInput
    /**
     * In case the ShopifyStore found by the `where` argument doesn't exist, create a new ShopifyStore with this data.
     */
    create: XOR<ShopifyStoreCreateInput, ShopifyStoreUncheckedCreateInput>
    /**
     * In case the ShopifyStore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopifyStoreUpdateInput, ShopifyStoreUncheckedUpdateInput>
  }

  /**
   * ShopifyStore delete
   */
  export type ShopifyStoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyStore
     */
    select?: ShopifyStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopifyStore
     */
    omit?: ShopifyStoreOmit<ExtArgs> | null
    /**
     * Filter which ShopifyStore to delete.
     */
    where: ShopifyStoreWhereUniqueInput
  }

  /**
   * ShopifyStore deleteMany
   */
  export type ShopifyStoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopifyStores to delete
     */
    where?: ShopifyStoreWhereInput
    /**
     * Limit how many ShopifyStores to delete.
     */
    limit?: number
  }

  /**
   * ShopifyStore without action
   */
  export type ShopifyStoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopifyStore
     */
    select?: ShopifyStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopifyStore
     */
    omit?: ShopifyStoreOmit<ExtArgs> | null
  }


  /**
   * Model UberEatsConfig
   */

  export type AggregateUberEatsConfig = {
    _count: UberEatsConfigCountAggregateOutputType | null
    _min: UberEatsConfigMinAggregateOutputType | null
    _max: UberEatsConfigMaxAggregateOutputType | null
  }

  export type UberEatsConfigMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    storeId: string | null
    accessToken: string | null
    refreshToken: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UberEatsConfigMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    storeId: string | null
    accessToken: string | null
    refreshToken: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UberEatsConfigCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    storeId: number
    accessToken: number
    refreshToken: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UberEatsConfigMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    storeId?: true
    accessToken?: true
    refreshToken?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UberEatsConfigMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    storeId?: true
    accessToken?: true
    refreshToken?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UberEatsConfigCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    storeId?: true
    accessToken?: true
    refreshToken?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UberEatsConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UberEatsConfig to aggregate.
     */
    where?: UberEatsConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UberEatsConfigs to fetch.
     */
    orderBy?: UberEatsConfigOrderByWithRelationInput | UberEatsConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UberEatsConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UberEatsConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UberEatsConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UberEatsConfigs
    **/
    _count?: true | UberEatsConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UberEatsConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UberEatsConfigMaxAggregateInputType
  }

  export type GetUberEatsConfigAggregateType<T extends UberEatsConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateUberEatsConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUberEatsConfig[P]>
      : GetScalarType<T[P], AggregateUberEatsConfig[P]>
  }




  export type UberEatsConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UberEatsConfigWhereInput
    orderBy?: UberEatsConfigOrderByWithAggregationInput | UberEatsConfigOrderByWithAggregationInput[]
    by: UberEatsConfigScalarFieldEnum[] | UberEatsConfigScalarFieldEnum
    having?: UberEatsConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UberEatsConfigCountAggregateInputType | true
    _min?: UberEatsConfigMinAggregateInputType
    _max?: UberEatsConfigMaxAggregateInputType
  }

  export type UberEatsConfigGroupByOutputType = {
    id: string
    userId: string
    organizationId: string | null
    storeId: string | null
    accessToken: string | null
    refreshToken: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UberEatsConfigCountAggregateOutputType | null
    _min: UberEatsConfigMinAggregateOutputType | null
    _max: UberEatsConfigMaxAggregateOutputType | null
  }

  type GetUberEatsConfigGroupByPayload<T extends UberEatsConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UberEatsConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UberEatsConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UberEatsConfigGroupByOutputType[P]>
            : GetScalarType<T[P], UberEatsConfigGroupByOutputType[P]>
        }
      >
    >


  export type UberEatsConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    storeId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["uberEatsConfig"]>

  export type UberEatsConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    storeId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["uberEatsConfig"]>

  export type UberEatsConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    storeId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["uberEatsConfig"]>

  export type UberEatsConfigSelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    storeId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UberEatsConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "storeId" | "accessToken" | "refreshToken" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["uberEatsConfig"]>

  export type $UberEatsConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UberEatsConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organizationId: string | null
      storeId: string | null
      accessToken: string | null
      refreshToken: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["uberEatsConfig"]>
    composites: {}
  }

  type UberEatsConfigGetPayload<S extends boolean | null | undefined | UberEatsConfigDefaultArgs> = $Result.GetResult<Prisma.$UberEatsConfigPayload, S>

  type UberEatsConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UberEatsConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UberEatsConfigCountAggregateInputType | true
    }

  export interface UberEatsConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UberEatsConfig'], meta: { name: 'UberEatsConfig' } }
    /**
     * Find zero or one UberEatsConfig that matches the filter.
     * @param {UberEatsConfigFindUniqueArgs} args - Arguments to find a UberEatsConfig
     * @example
     * // Get one UberEatsConfig
     * const uberEatsConfig = await prisma.uberEatsConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UberEatsConfigFindUniqueArgs>(args: SelectSubset<T, UberEatsConfigFindUniqueArgs<ExtArgs>>): Prisma__UberEatsConfigClient<$Result.GetResult<Prisma.$UberEatsConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UberEatsConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UberEatsConfigFindUniqueOrThrowArgs} args - Arguments to find a UberEatsConfig
     * @example
     * // Get one UberEatsConfig
     * const uberEatsConfig = await prisma.uberEatsConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UberEatsConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, UberEatsConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UberEatsConfigClient<$Result.GetResult<Prisma.$UberEatsConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UberEatsConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UberEatsConfigFindFirstArgs} args - Arguments to find a UberEatsConfig
     * @example
     * // Get one UberEatsConfig
     * const uberEatsConfig = await prisma.uberEatsConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UberEatsConfigFindFirstArgs>(args?: SelectSubset<T, UberEatsConfigFindFirstArgs<ExtArgs>>): Prisma__UberEatsConfigClient<$Result.GetResult<Prisma.$UberEatsConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UberEatsConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UberEatsConfigFindFirstOrThrowArgs} args - Arguments to find a UberEatsConfig
     * @example
     * // Get one UberEatsConfig
     * const uberEatsConfig = await prisma.uberEatsConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UberEatsConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, UberEatsConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__UberEatsConfigClient<$Result.GetResult<Prisma.$UberEatsConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UberEatsConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UberEatsConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UberEatsConfigs
     * const uberEatsConfigs = await prisma.uberEatsConfig.findMany()
     * 
     * // Get first 10 UberEatsConfigs
     * const uberEatsConfigs = await prisma.uberEatsConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uberEatsConfigWithIdOnly = await prisma.uberEatsConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UberEatsConfigFindManyArgs>(args?: SelectSubset<T, UberEatsConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UberEatsConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UberEatsConfig.
     * @param {UberEatsConfigCreateArgs} args - Arguments to create a UberEatsConfig.
     * @example
     * // Create one UberEatsConfig
     * const UberEatsConfig = await prisma.uberEatsConfig.create({
     *   data: {
     *     // ... data to create a UberEatsConfig
     *   }
     * })
     * 
     */
    create<T extends UberEatsConfigCreateArgs>(args: SelectSubset<T, UberEatsConfigCreateArgs<ExtArgs>>): Prisma__UberEatsConfigClient<$Result.GetResult<Prisma.$UberEatsConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UberEatsConfigs.
     * @param {UberEatsConfigCreateManyArgs} args - Arguments to create many UberEatsConfigs.
     * @example
     * // Create many UberEatsConfigs
     * const uberEatsConfig = await prisma.uberEatsConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UberEatsConfigCreateManyArgs>(args?: SelectSubset<T, UberEatsConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UberEatsConfigs and returns the data saved in the database.
     * @param {UberEatsConfigCreateManyAndReturnArgs} args - Arguments to create many UberEatsConfigs.
     * @example
     * // Create many UberEatsConfigs
     * const uberEatsConfig = await prisma.uberEatsConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UberEatsConfigs and only return the `id`
     * const uberEatsConfigWithIdOnly = await prisma.uberEatsConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UberEatsConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, UberEatsConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UberEatsConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UberEatsConfig.
     * @param {UberEatsConfigDeleteArgs} args - Arguments to delete one UberEatsConfig.
     * @example
     * // Delete one UberEatsConfig
     * const UberEatsConfig = await prisma.uberEatsConfig.delete({
     *   where: {
     *     // ... filter to delete one UberEatsConfig
     *   }
     * })
     * 
     */
    delete<T extends UberEatsConfigDeleteArgs>(args: SelectSubset<T, UberEatsConfigDeleteArgs<ExtArgs>>): Prisma__UberEatsConfigClient<$Result.GetResult<Prisma.$UberEatsConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UberEatsConfig.
     * @param {UberEatsConfigUpdateArgs} args - Arguments to update one UberEatsConfig.
     * @example
     * // Update one UberEatsConfig
     * const uberEatsConfig = await prisma.uberEatsConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UberEatsConfigUpdateArgs>(args: SelectSubset<T, UberEatsConfigUpdateArgs<ExtArgs>>): Prisma__UberEatsConfigClient<$Result.GetResult<Prisma.$UberEatsConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UberEatsConfigs.
     * @param {UberEatsConfigDeleteManyArgs} args - Arguments to filter UberEatsConfigs to delete.
     * @example
     * // Delete a few UberEatsConfigs
     * const { count } = await prisma.uberEatsConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UberEatsConfigDeleteManyArgs>(args?: SelectSubset<T, UberEatsConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UberEatsConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UberEatsConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UberEatsConfigs
     * const uberEatsConfig = await prisma.uberEatsConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UberEatsConfigUpdateManyArgs>(args: SelectSubset<T, UberEatsConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UberEatsConfigs and returns the data updated in the database.
     * @param {UberEatsConfigUpdateManyAndReturnArgs} args - Arguments to update many UberEatsConfigs.
     * @example
     * // Update many UberEatsConfigs
     * const uberEatsConfig = await prisma.uberEatsConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UberEatsConfigs and only return the `id`
     * const uberEatsConfigWithIdOnly = await prisma.uberEatsConfig.updateManyAndReturn({
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
    updateManyAndReturn<T extends UberEatsConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, UberEatsConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UberEatsConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UberEatsConfig.
     * @param {UberEatsConfigUpsertArgs} args - Arguments to update or create a UberEatsConfig.
     * @example
     * // Update or create a UberEatsConfig
     * const uberEatsConfig = await prisma.uberEatsConfig.upsert({
     *   create: {
     *     // ... data to create a UberEatsConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UberEatsConfig we want to update
     *   }
     * })
     */
    upsert<T extends UberEatsConfigUpsertArgs>(args: SelectSubset<T, UberEatsConfigUpsertArgs<ExtArgs>>): Prisma__UberEatsConfigClient<$Result.GetResult<Prisma.$UberEatsConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UberEatsConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UberEatsConfigCountArgs} args - Arguments to filter UberEatsConfigs to count.
     * @example
     * // Count the number of UberEatsConfigs
     * const count = await prisma.uberEatsConfig.count({
     *   where: {
     *     // ... the filter for the UberEatsConfigs we want to count
     *   }
     * })
    **/
    count<T extends UberEatsConfigCountArgs>(
      args?: Subset<T, UberEatsConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UberEatsConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UberEatsConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UberEatsConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UberEatsConfigAggregateArgs>(args: Subset<T, UberEatsConfigAggregateArgs>): Prisma.PrismaPromise<GetUberEatsConfigAggregateType<T>>

    /**
     * Group by UberEatsConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UberEatsConfigGroupByArgs} args - Group by arguments.
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
      T extends UberEatsConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UberEatsConfigGroupByArgs['orderBy'] }
        : { orderBy?: UberEatsConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UberEatsConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUberEatsConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UberEatsConfig model
   */
  readonly fields: UberEatsConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UberEatsConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UberEatsConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UberEatsConfig model
   */
  interface UberEatsConfigFieldRefs {
    readonly id: FieldRef<"UberEatsConfig", 'String'>
    readonly userId: FieldRef<"UberEatsConfig", 'String'>
    readonly organizationId: FieldRef<"UberEatsConfig", 'String'>
    readonly storeId: FieldRef<"UberEatsConfig", 'String'>
    readonly accessToken: FieldRef<"UberEatsConfig", 'String'>
    readonly refreshToken: FieldRef<"UberEatsConfig", 'String'>
    readonly isActive: FieldRef<"UberEatsConfig", 'Boolean'>
    readonly createdAt: FieldRef<"UberEatsConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"UberEatsConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UberEatsConfig findUnique
   */
  export type UberEatsConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UberEatsConfig
     */
    select?: UberEatsConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UberEatsConfig
     */
    omit?: UberEatsConfigOmit<ExtArgs> | null
    /**
     * Filter, which UberEatsConfig to fetch.
     */
    where: UberEatsConfigWhereUniqueInput
  }

  /**
   * UberEatsConfig findUniqueOrThrow
   */
  export type UberEatsConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UberEatsConfig
     */
    select?: UberEatsConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UberEatsConfig
     */
    omit?: UberEatsConfigOmit<ExtArgs> | null
    /**
     * Filter, which UberEatsConfig to fetch.
     */
    where: UberEatsConfigWhereUniqueInput
  }

  /**
   * UberEatsConfig findFirst
   */
  export type UberEatsConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UberEatsConfig
     */
    select?: UberEatsConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UberEatsConfig
     */
    omit?: UberEatsConfigOmit<ExtArgs> | null
    /**
     * Filter, which UberEatsConfig to fetch.
     */
    where?: UberEatsConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UberEatsConfigs to fetch.
     */
    orderBy?: UberEatsConfigOrderByWithRelationInput | UberEatsConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UberEatsConfigs.
     */
    cursor?: UberEatsConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UberEatsConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UberEatsConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UberEatsConfigs.
     */
    distinct?: UberEatsConfigScalarFieldEnum | UberEatsConfigScalarFieldEnum[]
  }

  /**
   * UberEatsConfig findFirstOrThrow
   */
  export type UberEatsConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UberEatsConfig
     */
    select?: UberEatsConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UberEatsConfig
     */
    omit?: UberEatsConfigOmit<ExtArgs> | null
    /**
     * Filter, which UberEatsConfig to fetch.
     */
    where?: UberEatsConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UberEatsConfigs to fetch.
     */
    orderBy?: UberEatsConfigOrderByWithRelationInput | UberEatsConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UberEatsConfigs.
     */
    cursor?: UberEatsConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UberEatsConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UberEatsConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UberEatsConfigs.
     */
    distinct?: UberEatsConfigScalarFieldEnum | UberEatsConfigScalarFieldEnum[]
  }

  /**
   * UberEatsConfig findMany
   */
  export type UberEatsConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UberEatsConfig
     */
    select?: UberEatsConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UberEatsConfig
     */
    omit?: UberEatsConfigOmit<ExtArgs> | null
    /**
     * Filter, which UberEatsConfigs to fetch.
     */
    where?: UberEatsConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UberEatsConfigs to fetch.
     */
    orderBy?: UberEatsConfigOrderByWithRelationInput | UberEatsConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UberEatsConfigs.
     */
    cursor?: UberEatsConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UberEatsConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UberEatsConfigs.
     */
    skip?: number
    distinct?: UberEatsConfigScalarFieldEnum | UberEatsConfigScalarFieldEnum[]
  }

  /**
   * UberEatsConfig create
   */
  export type UberEatsConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UberEatsConfig
     */
    select?: UberEatsConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UberEatsConfig
     */
    omit?: UberEatsConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a UberEatsConfig.
     */
    data: XOR<UberEatsConfigCreateInput, UberEatsConfigUncheckedCreateInput>
  }

  /**
   * UberEatsConfig createMany
   */
  export type UberEatsConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UberEatsConfigs.
     */
    data: UberEatsConfigCreateManyInput | UberEatsConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UberEatsConfig createManyAndReturn
   */
  export type UberEatsConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UberEatsConfig
     */
    select?: UberEatsConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UberEatsConfig
     */
    omit?: UberEatsConfigOmit<ExtArgs> | null
    /**
     * The data used to create many UberEatsConfigs.
     */
    data: UberEatsConfigCreateManyInput | UberEatsConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UberEatsConfig update
   */
  export type UberEatsConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UberEatsConfig
     */
    select?: UberEatsConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UberEatsConfig
     */
    omit?: UberEatsConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a UberEatsConfig.
     */
    data: XOR<UberEatsConfigUpdateInput, UberEatsConfigUncheckedUpdateInput>
    /**
     * Choose, which UberEatsConfig to update.
     */
    where: UberEatsConfigWhereUniqueInput
  }

  /**
   * UberEatsConfig updateMany
   */
  export type UberEatsConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UberEatsConfigs.
     */
    data: XOR<UberEatsConfigUpdateManyMutationInput, UberEatsConfigUncheckedUpdateManyInput>
    /**
     * Filter which UberEatsConfigs to update
     */
    where?: UberEatsConfigWhereInput
    /**
     * Limit how many UberEatsConfigs to update.
     */
    limit?: number
  }

  /**
   * UberEatsConfig updateManyAndReturn
   */
  export type UberEatsConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UberEatsConfig
     */
    select?: UberEatsConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UberEatsConfig
     */
    omit?: UberEatsConfigOmit<ExtArgs> | null
    /**
     * The data used to update UberEatsConfigs.
     */
    data: XOR<UberEatsConfigUpdateManyMutationInput, UberEatsConfigUncheckedUpdateManyInput>
    /**
     * Filter which UberEatsConfigs to update
     */
    where?: UberEatsConfigWhereInput
    /**
     * Limit how many UberEatsConfigs to update.
     */
    limit?: number
  }

  /**
   * UberEatsConfig upsert
   */
  export type UberEatsConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UberEatsConfig
     */
    select?: UberEatsConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UberEatsConfig
     */
    omit?: UberEatsConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the UberEatsConfig to update in case it exists.
     */
    where: UberEatsConfigWhereUniqueInput
    /**
     * In case the UberEatsConfig found by the `where` argument doesn't exist, create a new UberEatsConfig with this data.
     */
    create: XOR<UberEatsConfigCreateInput, UberEatsConfigUncheckedCreateInput>
    /**
     * In case the UberEatsConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UberEatsConfigUpdateInput, UberEatsConfigUncheckedUpdateInput>
  }

  /**
   * UberEatsConfig delete
   */
  export type UberEatsConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UberEatsConfig
     */
    select?: UberEatsConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UberEatsConfig
     */
    omit?: UberEatsConfigOmit<ExtArgs> | null
    /**
     * Filter which UberEatsConfig to delete.
     */
    where: UberEatsConfigWhereUniqueInput
  }

  /**
   * UberEatsConfig deleteMany
   */
  export type UberEatsConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UberEatsConfigs to delete
     */
    where?: UberEatsConfigWhereInput
    /**
     * Limit how many UberEatsConfigs to delete.
     */
    limit?: number
  }

  /**
   * UberEatsConfig without action
   */
  export type UberEatsConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UberEatsConfig
     */
    select?: UberEatsConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UberEatsConfig
     */
    omit?: UberEatsConfigOmit<ExtArgs> | null
  }


  /**
   * Model EasyPostConfig
   */

  export type AggregateEasyPostConfig = {
    _count: EasyPostConfigCountAggregateOutputType | null
    _min: EasyPostConfigMinAggregateOutputType | null
    _max: EasyPostConfigMaxAggregateOutputType | null
  }

  export type EasyPostConfigMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    apiKey: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EasyPostConfigMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    apiKey: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EasyPostConfigCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    apiKey: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EasyPostConfigMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    apiKey?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EasyPostConfigMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    apiKey?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EasyPostConfigCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    apiKey?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EasyPostConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EasyPostConfig to aggregate.
     */
    where?: EasyPostConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EasyPostConfigs to fetch.
     */
    orderBy?: EasyPostConfigOrderByWithRelationInput | EasyPostConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EasyPostConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EasyPostConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EasyPostConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EasyPostConfigs
    **/
    _count?: true | EasyPostConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EasyPostConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EasyPostConfigMaxAggregateInputType
  }

  export type GetEasyPostConfigAggregateType<T extends EasyPostConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateEasyPostConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEasyPostConfig[P]>
      : GetScalarType<T[P], AggregateEasyPostConfig[P]>
  }




  export type EasyPostConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EasyPostConfigWhereInput
    orderBy?: EasyPostConfigOrderByWithAggregationInput | EasyPostConfigOrderByWithAggregationInput[]
    by: EasyPostConfigScalarFieldEnum[] | EasyPostConfigScalarFieldEnum
    having?: EasyPostConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EasyPostConfigCountAggregateInputType | true
    _min?: EasyPostConfigMinAggregateInputType
    _max?: EasyPostConfigMaxAggregateInputType
  }

  export type EasyPostConfigGroupByOutputType = {
    id: string
    userId: string
    organizationId: string | null
    apiKey: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: EasyPostConfigCountAggregateOutputType | null
    _min: EasyPostConfigMinAggregateOutputType | null
    _max: EasyPostConfigMaxAggregateOutputType | null
  }

  type GetEasyPostConfigGroupByPayload<T extends EasyPostConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EasyPostConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EasyPostConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EasyPostConfigGroupByOutputType[P]>
            : GetScalarType<T[P], EasyPostConfigGroupByOutputType[P]>
        }
      >
    >


  export type EasyPostConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    apiKey?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["easyPostConfig"]>

  export type EasyPostConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    apiKey?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["easyPostConfig"]>

  export type EasyPostConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    apiKey?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["easyPostConfig"]>

  export type EasyPostConfigSelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    apiKey?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EasyPostConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "apiKey" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["easyPostConfig"]>

  export type $EasyPostConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EasyPostConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organizationId: string | null
      apiKey: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["easyPostConfig"]>
    composites: {}
  }

  type EasyPostConfigGetPayload<S extends boolean | null | undefined | EasyPostConfigDefaultArgs> = $Result.GetResult<Prisma.$EasyPostConfigPayload, S>

  type EasyPostConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EasyPostConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EasyPostConfigCountAggregateInputType | true
    }

  export interface EasyPostConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EasyPostConfig'], meta: { name: 'EasyPostConfig' } }
    /**
     * Find zero or one EasyPostConfig that matches the filter.
     * @param {EasyPostConfigFindUniqueArgs} args - Arguments to find a EasyPostConfig
     * @example
     * // Get one EasyPostConfig
     * const easyPostConfig = await prisma.easyPostConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EasyPostConfigFindUniqueArgs>(args: SelectSubset<T, EasyPostConfigFindUniqueArgs<ExtArgs>>): Prisma__EasyPostConfigClient<$Result.GetResult<Prisma.$EasyPostConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EasyPostConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EasyPostConfigFindUniqueOrThrowArgs} args - Arguments to find a EasyPostConfig
     * @example
     * // Get one EasyPostConfig
     * const easyPostConfig = await prisma.easyPostConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EasyPostConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, EasyPostConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EasyPostConfigClient<$Result.GetResult<Prisma.$EasyPostConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EasyPostConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EasyPostConfigFindFirstArgs} args - Arguments to find a EasyPostConfig
     * @example
     * // Get one EasyPostConfig
     * const easyPostConfig = await prisma.easyPostConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EasyPostConfigFindFirstArgs>(args?: SelectSubset<T, EasyPostConfigFindFirstArgs<ExtArgs>>): Prisma__EasyPostConfigClient<$Result.GetResult<Prisma.$EasyPostConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EasyPostConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EasyPostConfigFindFirstOrThrowArgs} args - Arguments to find a EasyPostConfig
     * @example
     * // Get one EasyPostConfig
     * const easyPostConfig = await prisma.easyPostConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EasyPostConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, EasyPostConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__EasyPostConfigClient<$Result.GetResult<Prisma.$EasyPostConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EasyPostConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EasyPostConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EasyPostConfigs
     * const easyPostConfigs = await prisma.easyPostConfig.findMany()
     * 
     * // Get first 10 EasyPostConfigs
     * const easyPostConfigs = await prisma.easyPostConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const easyPostConfigWithIdOnly = await prisma.easyPostConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EasyPostConfigFindManyArgs>(args?: SelectSubset<T, EasyPostConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EasyPostConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EasyPostConfig.
     * @param {EasyPostConfigCreateArgs} args - Arguments to create a EasyPostConfig.
     * @example
     * // Create one EasyPostConfig
     * const EasyPostConfig = await prisma.easyPostConfig.create({
     *   data: {
     *     // ... data to create a EasyPostConfig
     *   }
     * })
     * 
     */
    create<T extends EasyPostConfigCreateArgs>(args: SelectSubset<T, EasyPostConfigCreateArgs<ExtArgs>>): Prisma__EasyPostConfigClient<$Result.GetResult<Prisma.$EasyPostConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EasyPostConfigs.
     * @param {EasyPostConfigCreateManyArgs} args - Arguments to create many EasyPostConfigs.
     * @example
     * // Create many EasyPostConfigs
     * const easyPostConfig = await prisma.easyPostConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EasyPostConfigCreateManyArgs>(args?: SelectSubset<T, EasyPostConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EasyPostConfigs and returns the data saved in the database.
     * @param {EasyPostConfigCreateManyAndReturnArgs} args - Arguments to create many EasyPostConfigs.
     * @example
     * // Create many EasyPostConfigs
     * const easyPostConfig = await prisma.easyPostConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EasyPostConfigs and only return the `id`
     * const easyPostConfigWithIdOnly = await prisma.easyPostConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EasyPostConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, EasyPostConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EasyPostConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EasyPostConfig.
     * @param {EasyPostConfigDeleteArgs} args - Arguments to delete one EasyPostConfig.
     * @example
     * // Delete one EasyPostConfig
     * const EasyPostConfig = await prisma.easyPostConfig.delete({
     *   where: {
     *     // ... filter to delete one EasyPostConfig
     *   }
     * })
     * 
     */
    delete<T extends EasyPostConfigDeleteArgs>(args: SelectSubset<T, EasyPostConfigDeleteArgs<ExtArgs>>): Prisma__EasyPostConfigClient<$Result.GetResult<Prisma.$EasyPostConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EasyPostConfig.
     * @param {EasyPostConfigUpdateArgs} args - Arguments to update one EasyPostConfig.
     * @example
     * // Update one EasyPostConfig
     * const easyPostConfig = await prisma.easyPostConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EasyPostConfigUpdateArgs>(args: SelectSubset<T, EasyPostConfigUpdateArgs<ExtArgs>>): Prisma__EasyPostConfigClient<$Result.GetResult<Prisma.$EasyPostConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EasyPostConfigs.
     * @param {EasyPostConfigDeleteManyArgs} args - Arguments to filter EasyPostConfigs to delete.
     * @example
     * // Delete a few EasyPostConfigs
     * const { count } = await prisma.easyPostConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EasyPostConfigDeleteManyArgs>(args?: SelectSubset<T, EasyPostConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EasyPostConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EasyPostConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EasyPostConfigs
     * const easyPostConfig = await prisma.easyPostConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EasyPostConfigUpdateManyArgs>(args: SelectSubset<T, EasyPostConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EasyPostConfigs and returns the data updated in the database.
     * @param {EasyPostConfigUpdateManyAndReturnArgs} args - Arguments to update many EasyPostConfigs.
     * @example
     * // Update many EasyPostConfigs
     * const easyPostConfig = await prisma.easyPostConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EasyPostConfigs and only return the `id`
     * const easyPostConfigWithIdOnly = await prisma.easyPostConfig.updateManyAndReturn({
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
    updateManyAndReturn<T extends EasyPostConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, EasyPostConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EasyPostConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EasyPostConfig.
     * @param {EasyPostConfigUpsertArgs} args - Arguments to update or create a EasyPostConfig.
     * @example
     * // Update or create a EasyPostConfig
     * const easyPostConfig = await prisma.easyPostConfig.upsert({
     *   create: {
     *     // ... data to create a EasyPostConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EasyPostConfig we want to update
     *   }
     * })
     */
    upsert<T extends EasyPostConfigUpsertArgs>(args: SelectSubset<T, EasyPostConfigUpsertArgs<ExtArgs>>): Prisma__EasyPostConfigClient<$Result.GetResult<Prisma.$EasyPostConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EasyPostConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EasyPostConfigCountArgs} args - Arguments to filter EasyPostConfigs to count.
     * @example
     * // Count the number of EasyPostConfigs
     * const count = await prisma.easyPostConfig.count({
     *   where: {
     *     // ... the filter for the EasyPostConfigs we want to count
     *   }
     * })
    **/
    count<T extends EasyPostConfigCountArgs>(
      args?: Subset<T, EasyPostConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EasyPostConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EasyPostConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EasyPostConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EasyPostConfigAggregateArgs>(args: Subset<T, EasyPostConfigAggregateArgs>): Prisma.PrismaPromise<GetEasyPostConfigAggregateType<T>>

    /**
     * Group by EasyPostConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EasyPostConfigGroupByArgs} args - Group by arguments.
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
      T extends EasyPostConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EasyPostConfigGroupByArgs['orderBy'] }
        : { orderBy?: EasyPostConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EasyPostConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEasyPostConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EasyPostConfig model
   */
  readonly fields: EasyPostConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EasyPostConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EasyPostConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the EasyPostConfig model
   */
  interface EasyPostConfigFieldRefs {
    readonly id: FieldRef<"EasyPostConfig", 'String'>
    readonly userId: FieldRef<"EasyPostConfig", 'String'>
    readonly organizationId: FieldRef<"EasyPostConfig", 'String'>
    readonly apiKey: FieldRef<"EasyPostConfig", 'String'>
    readonly isActive: FieldRef<"EasyPostConfig", 'Boolean'>
    readonly createdAt: FieldRef<"EasyPostConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"EasyPostConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EasyPostConfig findUnique
   */
  export type EasyPostConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EasyPostConfig
     */
    select?: EasyPostConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EasyPostConfig
     */
    omit?: EasyPostConfigOmit<ExtArgs> | null
    /**
     * Filter, which EasyPostConfig to fetch.
     */
    where: EasyPostConfigWhereUniqueInput
  }

  /**
   * EasyPostConfig findUniqueOrThrow
   */
  export type EasyPostConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EasyPostConfig
     */
    select?: EasyPostConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EasyPostConfig
     */
    omit?: EasyPostConfigOmit<ExtArgs> | null
    /**
     * Filter, which EasyPostConfig to fetch.
     */
    where: EasyPostConfigWhereUniqueInput
  }

  /**
   * EasyPostConfig findFirst
   */
  export type EasyPostConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EasyPostConfig
     */
    select?: EasyPostConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EasyPostConfig
     */
    omit?: EasyPostConfigOmit<ExtArgs> | null
    /**
     * Filter, which EasyPostConfig to fetch.
     */
    where?: EasyPostConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EasyPostConfigs to fetch.
     */
    orderBy?: EasyPostConfigOrderByWithRelationInput | EasyPostConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EasyPostConfigs.
     */
    cursor?: EasyPostConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EasyPostConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EasyPostConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EasyPostConfigs.
     */
    distinct?: EasyPostConfigScalarFieldEnum | EasyPostConfigScalarFieldEnum[]
  }

  /**
   * EasyPostConfig findFirstOrThrow
   */
  export type EasyPostConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EasyPostConfig
     */
    select?: EasyPostConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EasyPostConfig
     */
    omit?: EasyPostConfigOmit<ExtArgs> | null
    /**
     * Filter, which EasyPostConfig to fetch.
     */
    where?: EasyPostConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EasyPostConfigs to fetch.
     */
    orderBy?: EasyPostConfigOrderByWithRelationInput | EasyPostConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EasyPostConfigs.
     */
    cursor?: EasyPostConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EasyPostConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EasyPostConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EasyPostConfigs.
     */
    distinct?: EasyPostConfigScalarFieldEnum | EasyPostConfigScalarFieldEnum[]
  }

  /**
   * EasyPostConfig findMany
   */
  export type EasyPostConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EasyPostConfig
     */
    select?: EasyPostConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EasyPostConfig
     */
    omit?: EasyPostConfigOmit<ExtArgs> | null
    /**
     * Filter, which EasyPostConfigs to fetch.
     */
    where?: EasyPostConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EasyPostConfigs to fetch.
     */
    orderBy?: EasyPostConfigOrderByWithRelationInput | EasyPostConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EasyPostConfigs.
     */
    cursor?: EasyPostConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EasyPostConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EasyPostConfigs.
     */
    skip?: number
    distinct?: EasyPostConfigScalarFieldEnum | EasyPostConfigScalarFieldEnum[]
  }

  /**
   * EasyPostConfig create
   */
  export type EasyPostConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EasyPostConfig
     */
    select?: EasyPostConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EasyPostConfig
     */
    omit?: EasyPostConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a EasyPostConfig.
     */
    data: XOR<EasyPostConfigCreateInput, EasyPostConfigUncheckedCreateInput>
  }

  /**
   * EasyPostConfig createMany
   */
  export type EasyPostConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EasyPostConfigs.
     */
    data: EasyPostConfigCreateManyInput | EasyPostConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EasyPostConfig createManyAndReturn
   */
  export type EasyPostConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EasyPostConfig
     */
    select?: EasyPostConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EasyPostConfig
     */
    omit?: EasyPostConfigOmit<ExtArgs> | null
    /**
     * The data used to create many EasyPostConfigs.
     */
    data: EasyPostConfigCreateManyInput | EasyPostConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EasyPostConfig update
   */
  export type EasyPostConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EasyPostConfig
     */
    select?: EasyPostConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EasyPostConfig
     */
    omit?: EasyPostConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a EasyPostConfig.
     */
    data: XOR<EasyPostConfigUpdateInput, EasyPostConfigUncheckedUpdateInput>
    /**
     * Choose, which EasyPostConfig to update.
     */
    where: EasyPostConfigWhereUniqueInput
  }

  /**
   * EasyPostConfig updateMany
   */
  export type EasyPostConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EasyPostConfigs.
     */
    data: XOR<EasyPostConfigUpdateManyMutationInput, EasyPostConfigUncheckedUpdateManyInput>
    /**
     * Filter which EasyPostConfigs to update
     */
    where?: EasyPostConfigWhereInput
    /**
     * Limit how many EasyPostConfigs to update.
     */
    limit?: number
  }

  /**
   * EasyPostConfig updateManyAndReturn
   */
  export type EasyPostConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EasyPostConfig
     */
    select?: EasyPostConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EasyPostConfig
     */
    omit?: EasyPostConfigOmit<ExtArgs> | null
    /**
     * The data used to update EasyPostConfigs.
     */
    data: XOR<EasyPostConfigUpdateManyMutationInput, EasyPostConfigUncheckedUpdateManyInput>
    /**
     * Filter which EasyPostConfigs to update
     */
    where?: EasyPostConfigWhereInput
    /**
     * Limit how many EasyPostConfigs to update.
     */
    limit?: number
  }

  /**
   * EasyPostConfig upsert
   */
  export type EasyPostConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EasyPostConfig
     */
    select?: EasyPostConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EasyPostConfig
     */
    omit?: EasyPostConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the EasyPostConfig to update in case it exists.
     */
    where: EasyPostConfigWhereUniqueInput
    /**
     * In case the EasyPostConfig found by the `where` argument doesn't exist, create a new EasyPostConfig with this data.
     */
    create: XOR<EasyPostConfigCreateInput, EasyPostConfigUncheckedCreateInput>
    /**
     * In case the EasyPostConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EasyPostConfigUpdateInput, EasyPostConfigUncheckedUpdateInput>
  }

  /**
   * EasyPostConfig delete
   */
  export type EasyPostConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EasyPostConfig
     */
    select?: EasyPostConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EasyPostConfig
     */
    omit?: EasyPostConfigOmit<ExtArgs> | null
    /**
     * Filter which EasyPostConfig to delete.
     */
    where: EasyPostConfigWhereUniqueInput
  }

  /**
   * EasyPostConfig deleteMany
   */
  export type EasyPostConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EasyPostConfigs to delete
     */
    where?: EasyPostConfigWhereInput
    /**
     * Limit how many EasyPostConfigs to delete.
     */
    limit?: number
  }

  /**
   * EasyPostConfig without action
   */
  export type EasyPostConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EasyPostConfig
     */
    select?: EasyPostConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EasyPostConfig
     */
    omit?: EasyPostConfigOmit<ExtArgs> | null
  }


  /**
   * Model IntegrationActivity
   */

  export type AggregateIntegrationActivity = {
    _count: IntegrationActivityCountAggregateOutputType | null
    _min: IntegrationActivityMinAggregateOutputType | null
    _max: IntegrationActivityMaxAggregateOutputType | null
  }

  export type IntegrationActivityMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    provider: string | null
    action: string | null
    status: string | null
    createdAt: Date | null
  }

  export type IntegrationActivityMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    provider: string | null
    action: string | null
    status: string | null
    createdAt: Date | null
  }

  export type IntegrationActivityCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    provider: number
    action: number
    status: number
    details: number
    createdAt: number
    _all: number
  }


  export type IntegrationActivityMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    provider?: true
    action?: true
    status?: true
    createdAt?: true
  }

  export type IntegrationActivityMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    provider?: true
    action?: true
    status?: true
    createdAt?: true
  }

  export type IntegrationActivityCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    provider?: true
    action?: true
    status?: true
    details?: true
    createdAt?: true
    _all?: true
  }

  export type IntegrationActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntegrationActivity to aggregate.
     */
    where?: IntegrationActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntegrationActivities to fetch.
     */
    orderBy?: IntegrationActivityOrderByWithRelationInput | IntegrationActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IntegrationActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntegrationActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntegrationActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IntegrationActivities
    **/
    _count?: true | IntegrationActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntegrationActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntegrationActivityMaxAggregateInputType
  }

  export type GetIntegrationActivityAggregateType<T extends IntegrationActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateIntegrationActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntegrationActivity[P]>
      : GetScalarType<T[P], AggregateIntegrationActivity[P]>
  }




  export type IntegrationActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntegrationActivityWhereInput
    orderBy?: IntegrationActivityOrderByWithAggregationInput | IntegrationActivityOrderByWithAggregationInput[]
    by: IntegrationActivityScalarFieldEnum[] | IntegrationActivityScalarFieldEnum
    having?: IntegrationActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntegrationActivityCountAggregateInputType | true
    _min?: IntegrationActivityMinAggregateInputType
    _max?: IntegrationActivityMaxAggregateInputType
  }

  export type IntegrationActivityGroupByOutputType = {
    id: string
    userId: string
    organizationId: string | null
    provider: string
    action: string
    status: string
    details: JsonValue | null
    createdAt: Date
    _count: IntegrationActivityCountAggregateOutputType | null
    _min: IntegrationActivityMinAggregateOutputType | null
    _max: IntegrationActivityMaxAggregateOutputType | null
  }

  type GetIntegrationActivityGroupByPayload<T extends IntegrationActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntegrationActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntegrationActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntegrationActivityGroupByOutputType[P]>
            : GetScalarType<T[P], IntegrationActivityGroupByOutputType[P]>
        }
      >
    >


  export type IntegrationActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    provider?: boolean
    action?: boolean
    status?: boolean
    details?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["integrationActivity"]>

  export type IntegrationActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    provider?: boolean
    action?: boolean
    status?: boolean
    details?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["integrationActivity"]>

  export type IntegrationActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    provider?: boolean
    action?: boolean
    status?: boolean
    details?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["integrationActivity"]>

  export type IntegrationActivitySelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    provider?: boolean
    action?: boolean
    status?: boolean
    details?: boolean
    createdAt?: boolean
  }

  export type IntegrationActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "provider" | "action" | "status" | "details" | "createdAt", ExtArgs["result"]["integrationActivity"]>

  export type $IntegrationActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IntegrationActivity"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organizationId: string | null
      provider: string
      action: string
      status: string
      details: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["integrationActivity"]>
    composites: {}
  }

  type IntegrationActivityGetPayload<S extends boolean | null | undefined | IntegrationActivityDefaultArgs> = $Result.GetResult<Prisma.$IntegrationActivityPayload, S>

  type IntegrationActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IntegrationActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntegrationActivityCountAggregateInputType | true
    }

  export interface IntegrationActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IntegrationActivity'], meta: { name: 'IntegrationActivity' } }
    /**
     * Find zero or one IntegrationActivity that matches the filter.
     * @param {IntegrationActivityFindUniqueArgs} args - Arguments to find a IntegrationActivity
     * @example
     * // Get one IntegrationActivity
     * const integrationActivity = await prisma.integrationActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IntegrationActivityFindUniqueArgs>(args: SelectSubset<T, IntegrationActivityFindUniqueArgs<ExtArgs>>): Prisma__IntegrationActivityClient<$Result.GetResult<Prisma.$IntegrationActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IntegrationActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IntegrationActivityFindUniqueOrThrowArgs} args - Arguments to find a IntegrationActivity
     * @example
     * // Get one IntegrationActivity
     * const integrationActivity = await prisma.integrationActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IntegrationActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, IntegrationActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IntegrationActivityClient<$Result.GetResult<Prisma.$IntegrationActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IntegrationActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationActivityFindFirstArgs} args - Arguments to find a IntegrationActivity
     * @example
     * // Get one IntegrationActivity
     * const integrationActivity = await prisma.integrationActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IntegrationActivityFindFirstArgs>(args?: SelectSubset<T, IntegrationActivityFindFirstArgs<ExtArgs>>): Prisma__IntegrationActivityClient<$Result.GetResult<Prisma.$IntegrationActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IntegrationActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationActivityFindFirstOrThrowArgs} args - Arguments to find a IntegrationActivity
     * @example
     * // Get one IntegrationActivity
     * const integrationActivity = await prisma.integrationActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IntegrationActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, IntegrationActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__IntegrationActivityClient<$Result.GetResult<Prisma.$IntegrationActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IntegrationActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IntegrationActivities
     * const integrationActivities = await prisma.integrationActivity.findMany()
     * 
     * // Get first 10 IntegrationActivities
     * const integrationActivities = await prisma.integrationActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const integrationActivityWithIdOnly = await prisma.integrationActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IntegrationActivityFindManyArgs>(args?: SelectSubset<T, IntegrationActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IntegrationActivity.
     * @param {IntegrationActivityCreateArgs} args - Arguments to create a IntegrationActivity.
     * @example
     * // Create one IntegrationActivity
     * const IntegrationActivity = await prisma.integrationActivity.create({
     *   data: {
     *     // ... data to create a IntegrationActivity
     *   }
     * })
     * 
     */
    create<T extends IntegrationActivityCreateArgs>(args: SelectSubset<T, IntegrationActivityCreateArgs<ExtArgs>>): Prisma__IntegrationActivityClient<$Result.GetResult<Prisma.$IntegrationActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IntegrationActivities.
     * @param {IntegrationActivityCreateManyArgs} args - Arguments to create many IntegrationActivities.
     * @example
     * // Create many IntegrationActivities
     * const integrationActivity = await prisma.integrationActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IntegrationActivityCreateManyArgs>(args?: SelectSubset<T, IntegrationActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IntegrationActivities and returns the data saved in the database.
     * @param {IntegrationActivityCreateManyAndReturnArgs} args - Arguments to create many IntegrationActivities.
     * @example
     * // Create many IntegrationActivities
     * const integrationActivity = await prisma.integrationActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IntegrationActivities and only return the `id`
     * const integrationActivityWithIdOnly = await prisma.integrationActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IntegrationActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, IntegrationActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IntegrationActivity.
     * @param {IntegrationActivityDeleteArgs} args - Arguments to delete one IntegrationActivity.
     * @example
     * // Delete one IntegrationActivity
     * const IntegrationActivity = await prisma.integrationActivity.delete({
     *   where: {
     *     // ... filter to delete one IntegrationActivity
     *   }
     * })
     * 
     */
    delete<T extends IntegrationActivityDeleteArgs>(args: SelectSubset<T, IntegrationActivityDeleteArgs<ExtArgs>>): Prisma__IntegrationActivityClient<$Result.GetResult<Prisma.$IntegrationActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IntegrationActivity.
     * @param {IntegrationActivityUpdateArgs} args - Arguments to update one IntegrationActivity.
     * @example
     * // Update one IntegrationActivity
     * const integrationActivity = await prisma.integrationActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IntegrationActivityUpdateArgs>(args: SelectSubset<T, IntegrationActivityUpdateArgs<ExtArgs>>): Prisma__IntegrationActivityClient<$Result.GetResult<Prisma.$IntegrationActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IntegrationActivities.
     * @param {IntegrationActivityDeleteManyArgs} args - Arguments to filter IntegrationActivities to delete.
     * @example
     * // Delete a few IntegrationActivities
     * const { count } = await prisma.integrationActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IntegrationActivityDeleteManyArgs>(args?: SelectSubset<T, IntegrationActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntegrationActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IntegrationActivities
     * const integrationActivity = await prisma.integrationActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IntegrationActivityUpdateManyArgs>(args: SelectSubset<T, IntegrationActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntegrationActivities and returns the data updated in the database.
     * @param {IntegrationActivityUpdateManyAndReturnArgs} args - Arguments to update many IntegrationActivities.
     * @example
     * // Update many IntegrationActivities
     * const integrationActivity = await prisma.integrationActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IntegrationActivities and only return the `id`
     * const integrationActivityWithIdOnly = await prisma.integrationActivity.updateManyAndReturn({
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
    updateManyAndReturn<T extends IntegrationActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, IntegrationActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IntegrationActivity.
     * @param {IntegrationActivityUpsertArgs} args - Arguments to update or create a IntegrationActivity.
     * @example
     * // Update or create a IntegrationActivity
     * const integrationActivity = await prisma.integrationActivity.upsert({
     *   create: {
     *     // ... data to create a IntegrationActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IntegrationActivity we want to update
     *   }
     * })
     */
    upsert<T extends IntegrationActivityUpsertArgs>(args: SelectSubset<T, IntegrationActivityUpsertArgs<ExtArgs>>): Prisma__IntegrationActivityClient<$Result.GetResult<Prisma.$IntegrationActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IntegrationActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationActivityCountArgs} args - Arguments to filter IntegrationActivities to count.
     * @example
     * // Count the number of IntegrationActivities
     * const count = await prisma.integrationActivity.count({
     *   where: {
     *     // ... the filter for the IntegrationActivities we want to count
     *   }
     * })
    **/
    count<T extends IntegrationActivityCountArgs>(
      args?: Subset<T, IntegrationActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntegrationActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IntegrationActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IntegrationActivityAggregateArgs>(args: Subset<T, IntegrationActivityAggregateArgs>): Prisma.PrismaPromise<GetIntegrationActivityAggregateType<T>>

    /**
     * Group by IntegrationActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationActivityGroupByArgs} args - Group by arguments.
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
      T extends IntegrationActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntegrationActivityGroupByArgs['orderBy'] }
        : { orderBy?: IntegrationActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IntegrationActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntegrationActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IntegrationActivity model
   */
  readonly fields: IntegrationActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IntegrationActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntegrationActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the IntegrationActivity model
   */
  interface IntegrationActivityFieldRefs {
    readonly id: FieldRef<"IntegrationActivity", 'String'>
    readonly userId: FieldRef<"IntegrationActivity", 'String'>
    readonly organizationId: FieldRef<"IntegrationActivity", 'String'>
    readonly provider: FieldRef<"IntegrationActivity", 'String'>
    readonly action: FieldRef<"IntegrationActivity", 'String'>
    readonly status: FieldRef<"IntegrationActivity", 'String'>
    readonly details: FieldRef<"IntegrationActivity", 'Json'>
    readonly createdAt: FieldRef<"IntegrationActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IntegrationActivity findUnique
   */
  export type IntegrationActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationActivity
     */
    select?: IntegrationActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationActivity
     */
    omit?: IntegrationActivityOmit<ExtArgs> | null
    /**
     * Filter, which IntegrationActivity to fetch.
     */
    where: IntegrationActivityWhereUniqueInput
  }

  /**
   * IntegrationActivity findUniqueOrThrow
   */
  export type IntegrationActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationActivity
     */
    select?: IntegrationActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationActivity
     */
    omit?: IntegrationActivityOmit<ExtArgs> | null
    /**
     * Filter, which IntegrationActivity to fetch.
     */
    where: IntegrationActivityWhereUniqueInput
  }

  /**
   * IntegrationActivity findFirst
   */
  export type IntegrationActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationActivity
     */
    select?: IntegrationActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationActivity
     */
    omit?: IntegrationActivityOmit<ExtArgs> | null
    /**
     * Filter, which IntegrationActivity to fetch.
     */
    where?: IntegrationActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntegrationActivities to fetch.
     */
    orderBy?: IntegrationActivityOrderByWithRelationInput | IntegrationActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntegrationActivities.
     */
    cursor?: IntegrationActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntegrationActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntegrationActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntegrationActivities.
     */
    distinct?: IntegrationActivityScalarFieldEnum | IntegrationActivityScalarFieldEnum[]
  }

  /**
   * IntegrationActivity findFirstOrThrow
   */
  export type IntegrationActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationActivity
     */
    select?: IntegrationActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationActivity
     */
    omit?: IntegrationActivityOmit<ExtArgs> | null
    /**
     * Filter, which IntegrationActivity to fetch.
     */
    where?: IntegrationActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntegrationActivities to fetch.
     */
    orderBy?: IntegrationActivityOrderByWithRelationInput | IntegrationActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntegrationActivities.
     */
    cursor?: IntegrationActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntegrationActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntegrationActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntegrationActivities.
     */
    distinct?: IntegrationActivityScalarFieldEnum | IntegrationActivityScalarFieldEnum[]
  }

  /**
   * IntegrationActivity findMany
   */
  export type IntegrationActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationActivity
     */
    select?: IntegrationActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationActivity
     */
    omit?: IntegrationActivityOmit<ExtArgs> | null
    /**
     * Filter, which IntegrationActivities to fetch.
     */
    where?: IntegrationActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntegrationActivities to fetch.
     */
    orderBy?: IntegrationActivityOrderByWithRelationInput | IntegrationActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IntegrationActivities.
     */
    cursor?: IntegrationActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntegrationActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntegrationActivities.
     */
    skip?: number
    distinct?: IntegrationActivityScalarFieldEnum | IntegrationActivityScalarFieldEnum[]
  }

  /**
   * IntegrationActivity create
   */
  export type IntegrationActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationActivity
     */
    select?: IntegrationActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationActivity
     */
    omit?: IntegrationActivityOmit<ExtArgs> | null
    /**
     * The data needed to create a IntegrationActivity.
     */
    data: XOR<IntegrationActivityCreateInput, IntegrationActivityUncheckedCreateInput>
  }

  /**
   * IntegrationActivity createMany
   */
  export type IntegrationActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IntegrationActivities.
     */
    data: IntegrationActivityCreateManyInput | IntegrationActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IntegrationActivity createManyAndReturn
   */
  export type IntegrationActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationActivity
     */
    select?: IntegrationActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationActivity
     */
    omit?: IntegrationActivityOmit<ExtArgs> | null
    /**
     * The data used to create many IntegrationActivities.
     */
    data: IntegrationActivityCreateManyInput | IntegrationActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IntegrationActivity update
   */
  export type IntegrationActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationActivity
     */
    select?: IntegrationActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationActivity
     */
    omit?: IntegrationActivityOmit<ExtArgs> | null
    /**
     * The data needed to update a IntegrationActivity.
     */
    data: XOR<IntegrationActivityUpdateInput, IntegrationActivityUncheckedUpdateInput>
    /**
     * Choose, which IntegrationActivity to update.
     */
    where: IntegrationActivityWhereUniqueInput
  }

  /**
   * IntegrationActivity updateMany
   */
  export type IntegrationActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IntegrationActivities.
     */
    data: XOR<IntegrationActivityUpdateManyMutationInput, IntegrationActivityUncheckedUpdateManyInput>
    /**
     * Filter which IntegrationActivities to update
     */
    where?: IntegrationActivityWhereInput
    /**
     * Limit how many IntegrationActivities to update.
     */
    limit?: number
  }

  /**
   * IntegrationActivity updateManyAndReturn
   */
  export type IntegrationActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationActivity
     */
    select?: IntegrationActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationActivity
     */
    omit?: IntegrationActivityOmit<ExtArgs> | null
    /**
     * The data used to update IntegrationActivities.
     */
    data: XOR<IntegrationActivityUpdateManyMutationInput, IntegrationActivityUncheckedUpdateManyInput>
    /**
     * Filter which IntegrationActivities to update
     */
    where?: IntegrationActivityWhereInput
    /**
     * Limit how many IntegrationActivities to update.
     */
    limit?: number
  }

  /**
   * IntegrationActivity upsert
   */
  export type IntegrationActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationActivity
     */
    select?: IntegrationActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationActivity
     */
    omit?: IntegrationActivityOmit<ExtArgs> | null
    /**
     * The filter to search for the IntegrationActivity to update in case it exists.
     */
    where: IntegrationActivityWhereUniqueInput
    /**
     * In case the IntegrationActivity found by the `where` argument doesn't exist, create a new IntegrationActivity with this data.
     */
    create: XOR<IntegrationActivityCreateInput, IntegrationActivityUncheckedCreateInput>
    /**
     * In case the IntegrationActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntegrationActivityUpdateInput, IntegrationActivityUncheckedUpdateInput>
  }

  /**
   * IntegrationActivity delete
   */
  export type IntegrationActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationActivity
     */
    select?: IntegrationActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationActivity
     */
    omit?: IntegrationActivityOmit<ExtArgs> | null
    /**
     * Filter which IntegrationActivity to delete.
     */
    where: IntegrationActivityWhereUniqueInput
  }

  /**
   * IntegrationActivity deleteMany
   */
  export type IntegrationActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntegrationActivities to delete
     */
    where?: IntegrationActivityWhereInput
    /**
     * Limit how many IntegrationActivities to delete.
     */
    limit?: number
  }

  /**
   * IntegrationActivity without action
   */
  export type IntegrationActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationActivity
     */
    select?: IntegrationActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationActivity
     */
    omit?: IntegrationActivityOmit<ExtArgs> | null
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


  export const IntegrationConnectionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    provider: 'provider',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    expiresAt: 'expiresAt',
    tokenType: 'tokenType',
    scope: 'scope',
    accountId: 'accountId',
    accountName: 'accountName',
    isActive: 'isActive',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IntegrationConnectionScalarFieldEnum = (typeof IntegrationConnectionScalarFieldEnum)[keyof typeof IntegrationConnectionScalarFieldEnum]


  export const GoogleIntegrationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    expiresAt: 'expiresAt',
    isConnected: 'isConnected',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GoogleIntegrationScalarFieldEnum = (typeof GoogleIntegrationScalarFieldEnum)[keyof typeof GoogleIntegrationScalarFieldEnum]


  export const ZoomIntegrationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    accountId: 'accountId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    expiresAt: 'expiresAt',
    webhookSecret: 'webhookSecret',
    isConnected: 'isConnected',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ZoomIntegrationScalarFieldEnum = (typeof ZoomIntegrationScalarFieldEnum)[keyof typeof ZoomIntegrationScalarFieldEnum]


  export const ZoomMeetingScalarFieldEnum: {
    id: 'id',
    zoomId: 'zoomId',
    userId: 'userId',
    organizationId: 'organizationId',
    topic: 'topic',
    startTime: 'startTime',
    duration: 'duration',
    joinUrl: 'joinUrl',
    password: 'password',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ZoomMeetingScalarFieldEnum = (typeof ZoomMeetingScalarFieldEnum)[keyof typeof ZoomMeetingScalarFieldEnum]


  export const ShopifyStoreScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    shopDomain: 'shopDomain',
    accessToken: 'accessToken',
    scope: 'scope',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShopifyStoreScalarFieldEnum = (typeof ShopifyStoreScalarFieldEnum)[keyof typeof ShopifyStoreScalarFieldEnum]


  export const UberEatsConfigScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    storeId: 'storeId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UberEatsConfigScalarFieldEnum = (typeof UberEatsConfigScalarFieldEnum)[keyof typeof UberEatsConfigScalarFieldEnum]


  export const EasyPostConfigScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    apiKey: 'apiKey',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EasyPostConfigScalarFieldEnum = (typeof EasyPostConfigScalarFieldEnum)[keyof typeof EasyPostConfigScalarFieldEnum]


  export const IntegrationActivityScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    provider: 'provider',
    action: 'action',
    status: 'status',
    details: 'details',
    createdAt: 'createdAt'
  };

  export type IntegrationActivityScalarFieldEnum = (typeof IntegrationActivityScalarFieldEnum)[keyof typeof IntegrationActivityScalarFieldEnum]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type IntegrationConnectionWhereInput = {
    AND?: IntegrationConnectionWhereInput | IntegrationConnectionWhereInput[]
    OR?: IntegrationConnectionWhereInput[]
    NOT?: IntegrationConnectionWhereInput | IntegrationConnectionWhereInput[]
    id?: UuidFilter<"IntegrationConnection"> | string
    userId?: UuidFilter<"IntegrationConnection"> | string
    organizationId?: UuidNullableFilter<"IntegrationConnection"> | string | null
    provider?: StringFilter<"IntegrationConnection"> | string
    accessToken?: StringNullableFilter<"IntegrationConnection"> | string | null
    refreshToken?: StringNullableFilter<"IntegrationConnection"> | string | null
    expiresAt?: DateTimeNullableFilter<"IntegrationConnection"> | Date | string | null
    tokenType?: StringNullableFilter<"IntegrationConnection"> | string | null
    scope?: StringNullableFilter<"IntegrationConnection"> | string | null
    accountId?: StringNullableFilter<"IntegrationConnection"> | string | null
    accountName?: StringNullableFilter<"IntegrationConnection"> | string | null
    isActive?: BoolFilter<"IntegrationConnection"> | boolean
    metadata?: JsonNullableFilter<"IntegrationConnection">
    createdAt?: DateTimeFilter<"IntegrationConnection"> | Date | string
    updatedAt?: DateTimeFilter<"IntegrationConnection"> | Date | string
  }

  export type IntegrationConnectionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    provider?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    tokenType?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    accountId?: SortOrderInput | SortOrder
    accountName?: SortOrderInput | SortOrder
    isActive?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntegrationConnectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_provider?: IntegrationConnectionUserIdProviderCompoundUniqueInput
    AND?: IntegrationConnectionWhereInput | IntegrationConnectionWhereInput[]
    OR?: IntegrationConnectionWhereInput[]
    NOT?: IntegrationConnectionWhereInput | IntegrationConnectionWhereInput[]
    userId?: UuidFilter<"IntegrationConnection"> | string
    organizationId?: UuidNullableFilter<"IntegrationConnection"> | string | null
    provider?: StringFilter<"IntegrationConnection"> | string
    accessToken?: StringNullableFilter<"IntegrationConnection"> | string | null
    refreshToken?: StringNullableFilter<"IntegrationConnection"> | string | null
    expiresAt?: DateTimeNullableFilter<"IntegrationConnection"> | Date | string | null
    tokenType?: StringNullableFilter<"IntegrationConnection"> | string | null
    scope?: StringNullableFilter<"IntegrationConnection"> | string | null
    accountId?: StringNullableFilter<"IntegrationConnection"> | string | null
    accountName?: StringNullableFilter<"IntegrationConnection"> | string | null
    isActive?: BoolFilter<"IntegrationConnection"> | boolean
    metadata?: JsonNullableFilter<"IntegrationConnection">
    createdAt?: DateTimeFilter<"IntegrationConnection"> | Date | string
    updatedAt?: DateTimeFilter<"IntegrationConnection"> | Date | string
  }, "id" | "userId_provider">

  export type IntegrationConnectionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    provider?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    tokenType?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    accountId?: SortOrderInput | SortOrder
    accountName?: SortOrderInput | SortOrder
    isActive?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IntegrationConnectionCountOrderByAggregateInput
    _max?: IntegrationConnectionMaxOrderByAggregateInput
    _min?: IntegrationConnectionMinOrderByAggregateInput
  }

  export type IntegrationConnectionScalarWhereWithAggregatesInput = {
    AND?: IntegrationConnectionScalarWhereWithAggregatesInput | IntegrationConnectionScalarWhereWithAggregatesInput[]
    OR?: IntegrationConnectionScalarWhereWithAggregatesInput[]
    NOT?: IntegrationConnectionScalarWhereWithAggregatesInput | IntegrationConnectionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"IntegrationConnection"> | string
    userId?: UuidWithAggregatesFilter<"IntegrationConnection"> | string
    organizationId?: UuidNullableWithAggregatesFilter<"IntegrationConnection"> | string | null
    provider?: StringWithAggregatesFilter<"IntegrationConnection"> | string
    accessToken?: StringNullableWithAggregatesFilter<"IntegrationConnection"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"IntegrationConnection"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"IntegrationConnection"> | Date | string | null
    tokenType?: StringNullableWithAggregatesFilter<"IntegrationConnection"> | string | null
    scope?: StringNullableWithAggregatesFilter<"IntegrationConnection"> | string | null
    accountId?: StringNullableWithAggregatesFilter<"IntegrationConnection"> | string | null
    accountName?: StringNullableWithAggregatesFilter<"IntegrationConnection"> | string | null
    isActive?: BoolWithAggregatesFilter<"IntegrationConnection"> | boolean
    metadata?: JsonNullableWithAggregatesFilter<"IntegrationConnection">
    createdAt?: DateTimeWithAggregatesFilter<"IntegrationConnection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IntegrationConnection"> | Date | string
  }

  export type GoogleIntegrationWhereInput = {
    AND?: GoogleIntegrationWhereInput | GoogleIntegrationWhereInput[]
    OR?: GoogleIntegrationWhereInput[]
    NOT?: GoogleIntegrationWhereInput | GoogleIntegrationWhereInput[]
    id?: UuidFilter<"GoogleIntegration"> | string
    userId?: UuidFilter<"GoogleIntegration"> | string
    organizationId?: UuidNullableFilter<"GoogleIntegration"> | string | null
    accessToken?: StringNullableFilter<"GoogleIntegration"> | string | null
    refreshToken?: StringNullableFilter<"GoogleIntegration"> | string | null
    expiresAt?: DateTimeNullableFilter<"GoogleIntegration"> | Date | string | null
    isConnected?: BoolFilter<"GoogleIntegration"> | boolean
    createdAt?: DateTimeFilter<"GoogleIntegration"> | Date | string
    updatedAt?: DateTimeFilter<"GoogleIntegration"> | Date | string
  }

  export type GoogleIntegrationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    isConnected?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoogleIntegrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GoogleIntegrationWhereInput | GoogleIntegrationWhereInput[]
    OR?: GoogleIntegrationWhereInput[]
    NOT?: GoogleIntegrationWhereInput | GoogleIntegrationWhereInput[]
    userId?: UuidFilter<"GoogleIntegration"> | string
    organizationId?: UuidNullableFilter<"GoogleIntegration"> | string | null
    accessToken?: StringNullableFilter<"GoogleIntegration"> | string | null
    refreshToken?: StringNullableFilter<"GoogleIntegration"> | string | null
    expiresAt?: DateTimeNullableFilter<"GoogleIntegration"> | Date | string | null
    isConnected?: BoolFilter<"GoogleIntegration"> | boolean
    createdAt?: DateTimeFilter<"GoogleIntegration"> | Date | string
    updatedAt?: DateTimeFilter<"GoogleIntegration"> | Date | string
  }, "id">

  export type GoogleIntegrationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    isConnected?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GoogleIntegrationCountOrderByAggregateInput
    _max?: GoogleIntegrationMaxOrderByAggregateInput
    _min?: GoogleIntegrationMinOrderByAggregateInput
  }

  export type GoogleIntegrationScalarWhereWithAggregatesInput = {
    AND?: GoogleIntegrationScalarWhereWithAggregatesInput | GoogleIntegrationScalarWhereWithAggregatesInput[]
    OR?: GoogleIntegrationScalarWhereWithAggregatesInput[]
    NOT?: GoogleIntegrationScalarWhereWithAggregatesInput | GoogleIntegrationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"GoogleIntegration"> | string
    userId?: UuidWithAggregatesFilter<"GoogleIntegration"> | string
    organizationId?: UuidNullableWithAggregatesFilter<"GoogleIntegration"> | string | null
    accessToken?: StringNullableWithAggregatesFilter<"GoogleIntegration"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"GoogleIntegration"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"GoogleIntegration"> | Date | string | null
    isConnected?: BoolWithAggregatesFilter<"GoogleIntegration"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"GoogleIntegration"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GoogleIntegration"> | Date | string
  }

  export type ZoomIntegrationWhereInput = {
    AND?: ZoomIntegrationWhereInput | ZoomIntegrationWhereInput[]
    OR?: ZoomIntegrationWhereInput[]
    NOT?: ZoomIntegrationWhereInput | ZoomIntegrationWhereInput[]
    id?: UuidFilter<"ZoomIntegration"> | string
    userId?: UuidFilter<"ZoomIntegration"> | string
    organizationId?: UuidNullableFilter<"ZoomIntegration"> | string | null
    accountId?: StringNullableFilter<"ZoomIntegration"> | string | null
    accessToken?: StringNullableFilter<"ZoomIntegration"> | string | null
    refreshToken?: StringNullableFilter<"ZoomIntegration"> | string | null
    expiresAt?: DateTimeNullableFilter<"ZoomIntegration"> | Date | string | null
    webhookSecret?: StringNullableFilter<"ZoomIntegration"> | string | null
    isConnected?: BoolFilter<"ZoomIntegration"> | boolean
    createdAt?: DateTimeFilter<"ZoomIntegration"> | Date | string
    updatedAt?: DateTimeFilter<"ZoomIntegration"> | Date | string
  }

  export type ZoomIntegrationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    accountId?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    webhookSecret?: SortOrderInput | SortOrder
    isConnected?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ZoomIntegrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ZoomIntegrationWhereInput | ZoomIntegrationWhereInput[]
    OR?: ZoomIntegrationWhereInput[]
    NOT?: ZoomIntegrationWhereInput | ZoomIntegrationWhereInput[]
    userId?: UuidFilter<"ZoomIntegration"> | string
    organizationId?: UuidNullableFilter<"ZoomIntegration"> | string | null
    accountId?: StringNullableFilter<"ZoomIntegration"> | string | null
    accessToken?: StringNullableFilter<"ZoomIntegration"> | string | null
    refreshToken?: StringNullableFilter<"ZoomIntegration"> | string | null
    expiresAt?: DateTimeNullableFilter<"ZoomIntegration"> | Date | string | null
    webhookSecret?: StringNullableFilter<"ZoomIntegration"> | string | null
    isConnected?: BoolFilter<"ZoomIntegration"> | boolean
    createdAt?: DateTimeFilter<"ZoomIntegration"> | Date | string
    updatedAt?: DateTimeFilter<"ZoomIntegration"> | Date | string
  }, "id">

  export type ZoomIntegrationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    accountId?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    webhookSecret?: SortOrderInput | SortOrder
    isConnected?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ZoomIntegrationCountOrderByAggregateInput
    _max?: ZoomIntegrationMaxOrderByAggregateInput
    _min?: ZoomIntegrationMinOrderByAggregateInput
  }

  export type ZoomIntegrationScalarWhereWithAggregatesInput = {
    AND?: ZoomIntegrationScalarWhereWithAggregatesInput | ZoomIntegrationScalarWhereWithAggregatesInput[]
    OR?: ZoomIntegrationScalarWhereWithAggregatesInput[]
    NOT?: ZoomIntegrationScalarWhereWithAggregatesInput | ZoomIntegrationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ZoomIntegration"> | string
    userId?: UuidWithAggregatesFilter<"ZoomIntegration"> | string
    organizationId?: UuidNullableWithAggregatesFilter<"ZoomIntegration"> | string | null
    accountId?: StringNullableWithAggregatesFilter<"ZoomIntegration"> | string | null
    accessToken?: StringNullableWithAggregatesFilter<"ZoomIntegration"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"ZoomIntegration"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"ZoomIntegration"> | Date | string | null
    webhookSecret?: StringNullableWithAggregatesFilter<"ZoomIntegration"> | string | null
    isConnected?: BoolWithAggregatesFilter<"ZoomIntegration"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ZoomIntegration"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ZoomIntegration"> | Date | string
  }

  export type ZoomMeetingWhereInput = {
    AND?: ZoomMeetingWhereInput | ZoomMeetingWhereInput[]
    OR?: ZoomMeetingWhereInput[]
    NOT?: ZoomMeetingWhereInput | ZoomMeetingWhereInput[]
    id?: UuidFilter<"ZoomMeeting"> | string
    zoomId?: StringFilter<"ZoomMeeting"> | string
    userId?: UuidFilter<"ZoomMeeting"> | string
    organizationId?: UuidNullableFilter<"ZoomMeeting"> | string | null
    topic?: StringFilter<"ZoomMeeting"> | string
    startTime?: DateTimeFilter<"ZoomMeeting"> | Date | string
    duration?: IntNullableFilter<"ZoomMeeting"> | number | null
    joinUrl?: StringNullableFilter<"ZoomMeeting"> | string | null
    password?: StringNullableFilter<"ZoomMeeting"> | string | null
    status?: StringNullableFilter<"ZoomMeeting"> | string | null
    createdAt?: DateTimeFilter<"ZoomMeeting"> | Date | string
    updatedAt?: DateTimeFilter<"ZoomMeeting"> | Date | string
  }

  export type ZoomMeetingOrderByWithRelationInput = {
    id?: SortOrder
    zoomId?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    topic?: SortOrder
    startTime?: SortOrder
    duration?: SortOrderInput | SortOrder
    joinUrl?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ZoomMeetingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    zoomId?: string
    AND?: ZoomMeetingWhereInput | ZoomMeetingWhereInput[]
    OR?: ZoomMeetingWhereInput[]
    NOT?: ZoomMeetingWhereInput | ZoomMeetingWhereInput[]
    userId?: UuidFilter<"ZoomMeeting"> | string
    organizationId?: UuidNullableFilter<"ZoomMeeting"> | string | null
    topic?: StringFilter<"ZoomMeeting"> | string
    startTime?: DateTimeFilter<"ZoomMeeting"> | Date | string
    duration?: IntNullableFilter<"ZoomMeeting"> | number | null
    joinUrl?: StringNullableFilter<"ZoomMeeting"> | string | null
    password?: StringNullableFilter<"ZoomMeeting"> | string | null
    status?: StringNullableFilter<"ZoomMeeting"> | string | null
    createdAt?: DateTimeFilter<"ZoomMeeting"> | Date | string
    updatedAt?: DateTimeFilter<"ZoomMeeting"> | Date | string
  }, "id" | "zoomId">

  export type ZoomMeetingOrderByWithAggregationInput = {
    id?: SortOrder
    zoomId?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    topic?: SortOrder
    startTime?: SortOrder
    duration?: SortOrderInput | SortOrder
    joinUrl?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ZoomMeetingCountOrderByAggregateInput
    _avg?: ZoomMeetingAvgOrderByAggregateInput
    _max?: ZoomMeetingMaxOrderByAggregateInput
    _min?: ZoomMeetingMinOrderByAggregateInput
    _sum?: ZoomMeetingSumOrderByAggregateInput
  }

  export type ZoomMeetingScalarWhereWithAggregatesInput = {
    AND?: ZoomMeetingScalarWhereWithAggregatesInput | ZoomMeetingScalarWhereWithAggregatesInput[]
    OR?: ZoomMeetingScalarWhereWithAggregatesInput[]
    NOT?: ZoomMeetingScalarWhereWithAggregatesInput | ZoomMeetingScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ZoomMeeting"> | string
    zoomId?: StringWithAggregatesFilter<"ZoomMeeting"> | string
    userId?: UuidWithAggregatesFilter<"ZoomMeeting"> | string
    organizationId?: UuidNullableWithAggregatesFilter<"ZoomMeeting"> | string | null
    topic?: StringWithAggregatesFilter<"ZoomMeeting"> | string
    startTime?: DateTimeWithAggregatesFilter<"ZoomMeeting"> | Date | string
    duration?: IntNullableWithAggregatesFilter<"ZoomMeeting"> | number | null
    joinUrl?: StringNullableWithAggregatesFilter<"ZoomMeeting"> | string | null
    password?: StringNullableWithAggregatesFilter<"ZoomMeeting"> | string | null
    status?: StringNullableWithAggregatesFilter<"ZoomMeeting"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ZoomMeeting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ZoomMeeting"> | Date | string
  }

  export type ShopifyStoreWhereInput = {
    AND?: ShopifyStoreWhereInput | ShopifyStoreWhereInput[]
    OR?: ShopifyStoreWhereInput[]
    NOT?: ShopifyStoreWhereInput | ShopifyStoreWhereInput[]
    id?: UuidFilter<"ShopifyStore"> | string
    userId?: UuidFilter<"ShopifyStore"> | string
    organizationId?: UuidNullableFilter<"ShopifyStore"> | string | null
    shopDomain?: StringFilter<"ShopifyStore"> | string
    accessToken?: StringNullableFilter<"ShopifyStore"> | string | null
    scope?: StringNullableFilter<"ShopifyStore"> | string | null
    isActive?: BoolFilter<"ShopifyStore"> | boolean
    createdAt?: DateTimeFilter<"ShopifyStore"> | Date | string
    updatedAt?: DateTimeFilter<"ShopifyStore"> | Date | string
  }

  export type ShopifyStoreOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    shopDomain?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopifyStoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shopDomain?: string
    AND?: ShopifyStoreWhereInput | ShopifyStoreWhereInput[]
    OR?: ShopifyStoreWhereInput[]
    NOT?: ShopifyStoreWhereInput | ShopifyStoreWhereInput[]
    userId?: UuidFilter<"ShopifyStore"> | string
    organizationId?: UuidNullableFilter<"ShopifyStore"> | string | null
    accessToken?: StringNullableFilter<"ShopifyStore"> | string | null
    scope?: StringNullableFilter<"ShopifyStore"> | string | null
    isActive?: BoolFilter<"ShopifyStore"> | boolean
    createdAt?: DateTimeFilter<"ShopifyStore"> | Date | string
    updatedAt?: DateTimeFilter<"ShopifyStore"> | Date | string
  }, "id" | "shopDomain">

  export type ShopifyStoreOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    shopDomain?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShopifyStoreCountOrderByAggregateInput
    _max?: ShopifyStoreMaxOrderByAggregateInput
    _min?: ShopifyStoreMinOrderByAggregateInput
  }

  export type ShopifyStoreScalarWhereWithAggregatesInput = {
    AND?: ShopifyStoreScalarWhereWithAggregatesInput | ShopifyStoreScalarWhereWithAggregatesInput[]
    OR?: ShopifyStoreScalarWhereWithAggregatesInput[]
    NOT?: ShopifyStoreScalarWhereWithAggregatesInput | ShopifyStoreScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ShopifyStore"> | string
    userId?: UuidWithAggregatesFilter<"ShopifyStore"> | string
    organizationId?: UuidNullableWithAggregatesFilter<"ShopifyStore"> | string | null
    shopDomain?: StringWithAggregatesFilter<"ShopifyStore"> | string
    accessToken?: StringNullableWithAggregatesFilter<"ShopifyStore"> | string | null
    scope?: StringNullableWithAggregatesFilter<"ShopifyStore"> | string | null
    isActive?: BoolWithAggregatesFilter<"ShopifyStore"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ShopifyStore"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ShopifyStore"> | Date | string
  }

  export type UberEatsConfigWhereInput = {
    AND?: UberEatsConfigWhereInput | UberEatsConfigWhereInput[]
    OR?: UberEatsConfigWhereInput[]
    NOT?: UberEatsConfigWhereInput | UberEatsConfigWhereInput[]
    id?: UuidFilter<"UberEatsConfig"> | string
    userId?: UuidFilter<"UberEatsConfig"> | string
    organizationId?: UuidNullableFilter<"UberEatsConfig"> | string | null
    storeId?: StringNullableFilter<"UberEatsConfig"> | string | null
    accessToken?: StringNullableFilter<"UberEatsConfig"> | string | null
    refreshToken?: StringNullableFilter<"UberEatsConfig"> | string | null
    isActive?: BoolFilter<"UberEatsConfig"> | boolean
    createdAt?: DateTimeFilter<"UberEatsConfig"> | Date | string
    updatedAt?: DateTimeFilter<"UberEatsConfig"> | Date | string
  }

  export type UberEatsConfigOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    storeId?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UberEatsConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UberEatsConfigWhereInput | UberEatsConfigWhereInput[]
    OR?: UberEatsConfigWhereInput[]
    NOT?: UberEatsConfigWhereInput | UberEatsConfigWhereInput[]
    userId?: UuidFilter<"UberEatsConfig"> | string
    organizationId?: UuidNullableFilter<"UberEatsConfig"> | string | null
    storeId?: StringNullableFilter<"UberEatsConfig"> | string | null
    accessToken?: StringNullableFilter<"UberEatsConfig"> | string | null
    refreshToken?: StringNullableFilter<"UberEatsConfig"> | string | null
    isActive?: BoolFilter<"UberEatsConfig"> | boolean
    createdAt?: DateTimeFilter<"UberEatsConfig"> | Date | string
    updatedAt?: DateTimeFilter<"UberEatsConfig"> | Date | string
  }, "id">

  export type UberEatsConfigOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    storeId?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UberEatsConfigCountOrderByAggregateInput
    _max?: UberEatsConfigMaxOrderByAggregateInput
    _min?: UberEatsConfigMinOrderByAggregateInput
  }

  export type UberEatsConfigScalarWhereWithAggregatesInput = {
    AND?: UberEatsConfigScalarWhereWithAggregatesInput | UberEatsConfigScalarWhereWithAggregatesInput[]
    OR?: UberEatsConfigScalarWhereWithAggregatesInput[]
    NOT?: UberEatsConfigScalarWhereWithAggregatesInput | UberEatsConfigScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"UberEatsConfig"> | string
    userId?: UuidWithAggregatesFilter<"UberEatsConfig"> | string
    organizationId?: UuidNullableWithAggregatesFilter<"UberEatsConfig"> | string | null
    storeId?: StringNullableWithAggregatesFilter<"UberEatsConfig"> | string | null
    accessToken?: StringNullableWithAggregatesFilter<"UberEatsConfig"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"UberEatsConfig"> | string | null
    isActive?: BoolWithAggregatesFilter<"UberEatsConfig"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UberEatsConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UberEatsConfig"> | Date | string
  }

  export type EasyPostConfigWhereInput = {
    AND?: EasyPostConfigWhereInput | EasyPostConfigWhereInput[]
    OR?: EasyPostConfigWhereInput[]
    NOT?: EasyPostConfigWhereInput | EasyPostConfigWhereInput[]
    id?: UuidFilter<"EasyPostConfig"> | string
    userId?: UuidFilter<"EasyPostConfig"> | string
    organizationId?: UuidNullableFilter<"EasyPostConfig"> | string | null
    apiKey?: StringNullableFilter<"EasyPostConfig"> | string | null
    isActive?: BoolFilter<"EasyPostConfig"> | boolean
    createdAt?: DateTimeFilter<"EasyPostConfig"> | Date | string
    updatedAt?: DateTimeFilter<"EasyPostConfig"> | Date | string
  }

  export type EasyPostConfigOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    apiKey?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EasyPostConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EasyPostConfigWhereInput | EasyPostConfigWhereInput[]
    OR?: EasyPostConfigWhereInput[]
    NOT?: EasyPostConfigWhereInput | EasyPostConfigWhereInput[]
    userId?: UuidFilter<"EasyPostConfig"> | string
    organizationId?: UuidNullableFilter<"EasyPostConfig"> | string | null
    apiKey?: StringNullableFilter<"EasyPostConfig"> | string | null
    isActive?: BoolFilter<"EasyPostConfig"> | boolean
    createdAt?: DateTimeFilter<"EasyPostConfig"> | Date | string
    updatedAt?: DateTimeFilter<"EasyPostConfig"> | Date | string
  }, "id">

  export type EasyPostConfigOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    apiKey?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EasyPostConfigCountOrderByAggregateInput
    _max?: EasyPostConfigMaxOrderByAggregateInput
    _min?: EasyPostConfigMinOrderByAggregateInput
  }

  export type EasyPostConfigScalarWhereWithAggregatesInput = {
    AND?: EasyPostConfigScalarWhereWithAggregatesInput | EasyPostConfigScalarWhereWithAggregatesInput[]
    OR?: EasyPostConfigScalarWhereWithAggregatesInput[]
    NOT?: EasyPostConfigScalarWhereWithAggregatesInput | EasyPostConfigScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"EasyPostConfig"> | string
    userId?: UuidWithAggregatesFilter<"EasyPostConfig"> | string
    organizationId?: UuidNullableWithAggregatesFilter<"EasyPostConfig"> | string | null
    apiKey?: StringNullableWithAggregatesFilter<"EasyPostConfig"> | string | null
    isActive?: BoolWithAggregatesFilter<"EasyPostConfig"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"EasyPostConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EasyPostConfig"> | Date | string
  }

  export type IntegrationActivityWhereInput = {
    AND?: IntegrationActivityWhereInput | IntegrationActivityWhereInput[]
    OR?: IntegrationActivityWhereInput[]
    NOT?: IntegrationActivityWhereInput | IntegrationActivityWhereInput[]
    id?: UuidFilter<"IntegrationActivity"> | string
    userId?: UuidFilter<"IntegrationActivity"> | string
    organizationId?: UuidNullableFilter<"IntegrationActivity"> | string | null
    provider?: StringFilter<"IntegrationActivity"> | string
    action?: StringFilter<"IntegrationActivity"> | string
    status?: StringFilter<"IntegrationActivity"> | string
    details?: JsonNullableFilter<"IntegrationActivity">
    createdAt?: DateTimeFilter<"IntegrationActivity"> | Date | string
  }

  export type IntegrationActivityOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    provider?: SortOrder
    action?: SortOrder
    status?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type IntegrationActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IntegrationActivityWhereInput | IntegrationActivityWhereInput[]
    OR?: IntegrationActivityWhereInput[]
    NOT?: IntegrationActivityWhereInput | IntegrationActivityWhereInput[]
    userId?: UuidFilter<"IntegrationActivity"> | string
    organizationId?: UuidNullableFilter<"IntegrationActivity"> | string | null
    provider?: StringFilter<"IntegrationActivity"> | string
    action?: StringFilter<"IntegrationActivity"> | string
    status?: StringFilter<"IntegrationActivity"> | string
    details?: JsonNullableFilter<"IntegrationActivity">
    createdAt?: DateTimeFilter<"IntegrationActivity"> | Date | string
  }, "id">

  export type IntegrationActivityOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    provider?: SortOrder
    action?: SortOrder
    status?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: IntegrationActivityCountOrderByAggregateInput
    _max?: IntegrationActivityMaxOrderByAggregateInput
    _min?: IntegrationActivityMinOrderByAggregateInput
  }

  export type IntegrationActivityScalarWhereWithAggregatesInput = {
    AND?: IntegrationActivityScalarWhereWithAggregatesInput | IntegrationActivityScalarWhereWithAggregatesInput[]
    OR?: IntegrationActivityScalarWhereWithAggregatesInput[]
    NOT?: IntegrationActivityScalarWhereWithAggregatesInput | IntegrationActivityScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"IntegrationActivity"> | string
    userId?: UuidWithAggregatesFilter<"IntegrationActivity"> | string
    organizationId?: UuidNullableWithAggregatesFilter<"IntegrationActivity"> | string | null
    provider?: StringWithAggregatesFilter<"IntegrationActivity"> | string
    action?: StringWithAggregatesFilter<"IntegrationActivity"> | string
    status?: StringWithAggregatesFilter<"IntegrationActivity"> | string
    details?: JsonNullableWithAggregatesFilter<"IntegrationActivity">
    createdAt?: DateTimeWithAggregatesFilter<"IntegrationActivity"> | Date | string
  }

  export type IntegrationConnectionCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    provider: string
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    tokenType?: string | null
    scope?: string | null
    accountId?: string | null
    accountName?: string | null
    isActive?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntegrationConnectionUncheckedCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    provider: string
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    tokenType?: string | null
    scope?: string | null
    accountId?: string | null
    accountName?: string | null
    isActive?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntegrationConnectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenType?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationConnectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenType?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationConnectionCreateManyInput = {
    id?: string
    userId: string
    organizationId?: string | null
    provider: string
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    tokenType?: string | null
    scope?: string | null
    accountId?: string | null
    accountName?: string | null
    isActive?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntegrationConnectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenType?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationConnectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenType?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoogleIntegrationCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    isConnected?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoogleIntegrationUncheckedCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    isConnected?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoogleIntegrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoogleIntegrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoogleIntegrationCreateManyInput = {
    id?: string
    userId: string
    organizationId?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    isConnected?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoogleIntegrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoogleIntegrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZoomIntegrationCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    accountId?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    webhookSecret?: string | null
    isConnected?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ZoomIntegrationUncheckedCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    accountId?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    webhookSecret?: string | null
    isConnected?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ZoomIntegrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    webhookSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZoomIntegrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    webhookSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZoomIntegrationCreateManyInput = {
    id?: string
    userId: string
    organizationId?: string | null
    accountId?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    webhookSecret?: string | null
    isConnected?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ZoomIntegrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    webhookSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZoomIntegrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    webhookSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZoomMeetingCreateInput = {
    id?: string
    zoomId: string
    userId: string
    organizationId?: string | null
    topic: string
    startTime: Date | string
    duration?: number | null
    joinUrl?: string | null
    password?: string | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ZoomMeetingUncheckedCreateInput = {
    id?: string
    zoomId: string
    userId: string
    organizationId?: string | null
    topic: string
    startTime: Date | string
    duration?: number | null
    joinUrl?: string | null
    password?: string | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ZoomMeetingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zoomId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    joinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZoomMeetingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zoomId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    joinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZoomMeetingCreateManyInput = {
    id?: string
    zoomId: string
    userId: string
    organizationId?: string | null
    topic: string
    startTime: Date | string
    duration?: number | null
    joinUrl?: string | null
    password?: string | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ZoomMeetingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    zoomId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    joinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZoomMeetingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    zoomId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    joinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopifyStoreCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    shopDomain: string
    accessToken?: string | null
    scope?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopifyStoreUncheckedCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    shopDomain: string
    accessToken?: string | null
    scope?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopifyStoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    shopDomain?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopifyStoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    shopDomain?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopifyStoreCreateManyInput = {
    id?: string
    userId: string
    organizationId?: string | null
    shopDomain: string
    accessToken?: string | null
    scope?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopifyStoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    shopDomain?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopifyStoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    shopDomain?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UberEatsConfigCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    storeId?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UberEatsConfigUncheckedCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    storeId?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UberEatsConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    storeId?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UberEatsConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    storeId?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UberEatsConfigCreateManyInput = {
    id?: string
    userId: string
    organizationId?: string | null
    storeId?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UberEatsConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    storeId?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UberEatsConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    storeId?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EasyPostConfigCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    apiKey?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EasyPostConfigUncheckedCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    apiKey?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EasyPostConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EasyPostConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EasyPostConfigCreateManyInput = {
    id?: string
    userId: string
    organizationId?: string | null
    apiKey?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EasyPostConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EasyPostConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationActivityCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    provider: string
    action: string
    status?: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type IntegrationActivityUncheckedCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    provider: string
    action: string
    status?: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type IntegrationActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationActivityCreateManyInput = {
    id?: string
    userId: string
    organizationId?: string | null
    provider: string
    action: string
    status?: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type IntegrationActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
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

  export type IntegrationConnectionUserIdProviderCompoundUniqueInput = {
    userId: string
    provider: string
  }

  export type IntegrationConnectionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    provider?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    tokenType?: SortOrder
    scope?: SortOrder
    accountId?: SortOrder
    accountName?: SortOrder
    isActive?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntegrationConnectionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    provider?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    tokenType?: SortOrder
    scope?: SortOrder
    accountId?: SortOrder
    accountName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntegrationConnectionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    provider?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    tokenType?: SortOrder
    scope?: SortOrder
    accountId?: SortOrder
    accountName?: SortOrder
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

  export type GoogleIntegrationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    isConnected?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoogleIntegrationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    isConnected?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoogleIntegrationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    isConnected?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ZoomIntegrationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    accountId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    webhookSecret?: SortOrder
    isConnected?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ZoomIntegrationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    accountId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    webhookSecret?: SortOrder
    isConnected?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ZoomIntegrationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    accountId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    webhookSecret?: SortOrder
    isConnected?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type ZoomMeetingCountOrderByAggregateInput = {
    id?: SortOrder
    zoomId?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    topic?: SortOrder
    startTime?: SortOrder
    duration?: SortOrder
    joinUrl?: SortOrder
    password?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ZoomMeetingAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type ZoomMeetingMaxOrderByAggregateInput = {
    id?: SortOrder
    zoomId?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    topic?: SortOrder
    startTime?: SortOrder
    duration?: SortOrder
    joinUrl?: SortOrder
    password?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ZoomMeetingMinOrderByAggregateInput = {
    id?: SortOrder
    zoomId?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    topic?: SortOrder
    startTime?: SortOrder
    duration?: SortOrder
    joinUrl?: SortOrder
    password?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ZoomMeetingSumOrderByAggregateInput = {
    duration?: SortOrder
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

  export type ShopifyStoreCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    shopDomain?: SortOrder
    accessToken?: SortOrder
    scope?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopifyStoreMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    shopDomain?: SortOrder
    accessToken?: SortOrder
    scope?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopifyStoreMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    shopDomain?: SortOrder
    accessToken?: SortOrder
    scope?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UberEatsConfigCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    storeId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UberEatsConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    storeId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UberEatsConfigMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    storeId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EasyPostConfigCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    apiKey?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EasyPostConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    apiKey?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EasyPostConfigMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    apiKey?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntegrationActivityCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    provider?: SortOrder
    action?: SortOrder
    status?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type IntegrationActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    provider?: SortOrder
    action?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type IntegrationActivityMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    provider?: SortOrder
    action?: SortOrder
    status?: SortOrder
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

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
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