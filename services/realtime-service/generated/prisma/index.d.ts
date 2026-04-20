
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
 * Model LiveChatChannel
 * 
 */
export type LiveChatChannel = $Result.DefaultSelection<Prisma.$LiveChatChannelPayload>
/**
 * Model LiveChatMessage
 * 
 */
export type LiveChatMessage = $Result.DefaultSelection<Prisma.$LiveChatMessagePayload>
/**
 * Model LiveChatContact
 * 
 */
export type LiveChatContact = $Result.DefaultSelection<Prisma.$LiveChatContactPayload>
/**
 * Model LiveChatWidgetSetting
 * 
 */
export type LiveChatWidgetSetting = $Result.DefaultSelection<Prisma.$LiveChatWidgetSettingPayload>
/**
 * Model LiveChatStatistics
 * 
 */
export type LiveChatStatistics = $Result.DefaultSelection<Prisma.$LiveChatStatisticsPayload>
/**
 * Model SocketConnection
 * 
 */
export type SocketConnection = $Result.DefaultSelection<Prisma.$SocketConnectionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more LiveChatChannels
 * const liveChatChannels = await prisma.liveChatChannel.findMany()
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
   * // Fetch zero or more LiveChatChannels
   * const liveChatChannels = await prisma.liveChatChannel.findMany()
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
   * `prisma.liveChatChannel`: Exposes CRUD operations for the **LiveChatChannel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LiveChatChannels
    * const liveChatChannels = await prisma.liveChatChannel.findMany()
    * ```
    */
  get liveChatChannel(): Prisma.LiveChatChannelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.liveChatMessage`: Exposes CRUD operations for the **LiveChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LiveChatMessages
    * const liveChatMessages = await prisma.liveChatMessage.findMany()
    * ```
    */
  get liveChatMessage(): Prisma.LiveChatMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.liveChatContact`: Exposes CRUD operations for the **LiveChatContact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LiveChatContacts
    * const liveChatContacts = await prisma.liveChatContact.findMany()
    * ```
    */
  get liveChatContact(): Prisma.LiveChatContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.liveChatWidgetSetting`: Exposes CRUD operations for the **LiveChatWidgetSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LiveChatWidgetSettings
    * const liveChatWidgetSettings = await prisma.liveChatWidgetSetting.findMany()
    * ```
    */
  get liveChatWidgetSetting(): Prisma.LiveChatWidgetSettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.liveChatStatistics`: Exposes CRUD operations for the **LiveChatStatistics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LiveChatStatistics
    * const liveChatStatistics = await prisma.liveChatStatistics.findMany()
    * ```
    */
  get liveChatStatistics(): Prisma.LiveChatStatisticsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socketConnection`: Exposes CRUD operations for the **SocketConnection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocketConnections
    * const socketConnections = await prisma.socketConnection.findMany()
    * ```
    */
  get socketConnection(): Prisma.SocketConnectionDelegate<ExtArgs, ClientOptions>;
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
    LiveChatChannel: 'LiveChatChannel',
    LiveChatMessage: 'LiveChatMessage',
    LiveChatContact: 'LiveChatContact',
    LiveChatWidgetSetting: 'LiveChatWidgetSetting',
    LiveChatStatistics: 'LiveChatStatistics',
    SocketConnection: 'SocketConnection'
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
      modelProps: "liveChatChannel" | "liveChatMessage" | "liveChatContact" | "liveChatWidgetSetting" | "liveChatStatistics" | "socketConnection"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      LiveChatChannel: {
        payload: Prisma.$LiveChatChannelPayload<ExtArgs>
        fields: Prisma.LiveChatChannelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LiveChatChannelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatChannelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LiveChatChannelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatChannelPayload>
          }
          findFirst: {
            args: Prisma.LiveChatChannelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatChannelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LiveChatChannelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatChannelPayload>
          }
          findMany: {
            args: Prisma.LiveChatChannelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatChannelPayload>[]
          }
          create: {
            args: Prisma.LiveChatChannelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatChannelPayload>
          }
          createMany: {
            args: Prisma.LiveChatChannelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LiveChatChannelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatChannelPayload>[]
          }
          delete: {
            args: Prisma.LiveChatChannelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatChannelPayload>
          }
          update: {
            args: Prisma.LiveChatChannelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatChannelPayload>
          }
          deleteMany: {
            args: Prisma.LiveChatChannelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LiveChatChannelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LiveChatChannelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatChannelPayload>[]
          }
          upsert: {
            args: Prisma.LiveChatChannelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatChannelPayload>
          }
          aggregate: {
            args: Prisma.LiveChatChannelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLiveChatChannel>
          }
          groupBy: {
            args: Prisma.LiveChatChannelGroupByArgs<ExtArgs>
            result: $Utils.Optional<LiveChatChannelGroupByOutputType>[]
          }
          count: {
            args: Prisma.LiveChatChannelCountArgs<ExtArgs>
            result: $Utils.Optional<LiveChatChannelCountAggregateOutputType> | number
          }
        }
      }
      LiveChatMessage: {
        payload: Prisma.$LiveChatMessagePayload<ExtArgs>
        fields: Prisma.LiveChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LiveChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LiveChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatMessagePayload>
          }
          findFirst: {
            args: Prisma.LiveChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LiveChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatMessagePayload>
          }
          findMany: {
            args: Prisma.LiveChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatMessagePayload>[]
          }
          create: {
            args: Prisma.LiveChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatMessagePayload>
          }
          createMany: {
            args: Prisma.LiveChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LiveChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatMessagePayload>[]
          }
          delete: {
            args: Prisma.LiveChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatMessagePayload>
          }
          update: {
            args: Prisma.LiveChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.LiveChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LiveChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LiveChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.LiveChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatMessagePayload>
          }
          aggregate: {
            args: Prisma.LiveChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLiveChatMessage>
          }
          groupBy: {
            args: Prisma.LiveChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<LiveChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.LiveChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<LiveChatMessageCountAggregateOutputType> | number
          }
        }
      }
      LiveChatContact: {
        payload: Prisma.$LiveChatContactPayload<ExtArgs>
        fields: Prisma.LiveChatContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LiveChatContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LiveChatContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatContactPayload>
          }
          findFirst: {
            args: Prisma.LiveChatContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LiveChatContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatContactPayload>
          }
          findMany: {
            args: Prisma.LiveChatContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatContactPayload>[]
          }
          create: {
            args: Prisma.LiveChatContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatContactPayload>
          }
          createMany: {
            args: Prisma.LiveChatContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LiveChatContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatContactPayload>[]
          }
          delete: {
            args: Prisma.LiveChatContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatContactPayload>
          }
          update: {
            args: Prisma.LiveChatContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatContactPayload>
          }
          deleteMany: {
            args: Prisma.LiveChatContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LiveChatContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LiveChatContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatContactPayload>[]
          }
          upsert: {
            args: Prisma.LiveChatContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatContactPayload>
          }
          aggregate: {
            args: Prisma.LiveChatContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLiveChatContact>
          }
          groupBy: {
            args: Prisma.LiveChatContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<LiveChatContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.LiveChatContactCountArgs<ExtArgs>
            result: $Utils.Optional<LiveChatContactCountAggregateOutputType> | number
          }
        }
      }
      LiveChatWidgetSetting: {
        payload: Prisma.$LiveChatWidgetSettingPayload<ExtArgs>
        fields: Prisma.LiveChatWidgetSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LiveChatWidgetSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatWidgetSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LiveChatWidgetSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatWidgetSettingPayload>
          }
          findFirst: {
            args: Prisma.LiveChatWidgetSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatWidgetSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LiveChatWidgetSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatWidgetSettingPayload>
          }
          findMany: {
            args: Prisma.LiveChatWidgetSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatWidgetSettingPayload>[]
          }
          create: {
            args: Prisma.LiveChatWidgetSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatWidgetSettingPayload>
          }
          createMany: {
            args: Prisma.LiveChatWidgetSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LiveChatWidgetSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatWidgetSettingPayload>[]
          }
          delete: {
            args: Prisma.LiveChatWidgetSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatWidgetSettingPayload>
          }
          update: {
            args: Prisma.LiveChatWidgetSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatWidgetSettingPayload>
          }
          deleteMany: {
            args: Prisma.LiveChatWidgetSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LiveChatWidgetSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LiveChatWidgetSettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatWidgetSettingPayload>[]
          }
          upsert: {
            args: Prisma.LiveChatWidgetSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatWidgetSettingPayload>
          }
          aggregate: {
            args: Prisma.LiveChatWidgetSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLiveChatWidgetSetting>
          }
          groupBy: {
            args: Prisma.LiveChatWidgetSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<LiveChatWidgetSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.LiveChatWidgetSettingCountArgs<ExtArgs>
            result: $Utils.Optional<LiveChatWidgetSettingCountAggregateOutputType> | number
          }
        }
      }
      LiveChatStatistics: {
        payload: Prisma.$LiveChatStatisticsPayload<ExtArgs>
        fields: Prisma.LiveChatStatisticsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LiveChatStatisticsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatStatisticsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LiveChatStatisticsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatStatisticsPayload>
          }
          findFirst: {
            args: Prisma.LiveChatStatisticsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatStatisticsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LiveChatStatisticsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatStatisticsPayload>
          }
          findMany: {
            args: Prisma.LiveChatStatisticsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatStatisticsPayload>[]
          }
          create: {
            args: Prisma.LiveChatStatisticsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatStatisticsPayload>
          }
          createMany: {
            args: Prisma.LiveChatStatisticsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LiveChatStatisticsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatStatisticsPayload>[]
          }
          delete: {
            args: Prisma.LiveChatStatisticsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatStatisticsPayload>
          }
          update: {
            args: Prisma.LiveChatStatisticsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatStatisticsPayload>
          }
          deleteMany: {
            args: Prisma.LiveChatStatisticsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LiveChatStatisticsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LiveChatStatisticsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatStatisticsPayload>[]
          }
          upsert: {
            args: Prisma.LiveChatStatisticsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveChatStatisticsPayload>
          }
          aggregate: {
            args: Prisma.LiveChatStatisticsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLiveChatStatistics>
          }
          groupBy: {
            args: Prisma.LiveChatStatisticsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LiveChatStatisticsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LiveChatStatisticsCountArgs<ExtArgs>
            result: $Utils.Optional<LiveChatStatisticsCountAggregateOutputType> | number
          }
        }
      }
      SocketConnection: {
        payload: Prisma.$SocketConnectionPayload<ExtArgs>
        fields: Prisma.SocketConnectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocketConnectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocketConnectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocketConnectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocketConnectionPayload>
          }
          findFirst: {
            args: Prisma.SocketConnectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocketConnectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocketConnectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocketConnectionPayload>
          }
          findMany: {
            args: Prisma.SocketConnectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocketConnectionPayload>[]
          }
          create: {
            args: Prisma.SocketConnectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocketConnectionPayload>
          }
          createMany: {
            args: Prisma.SocketConnectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocketConnectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocketConnectionPayload>[]
          }
          delete: {
            args: Prisma.SocketConnectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocketConnectionPayload>
          }
          update: {
            args: Prisma.SocketConnectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocketConnectionPayload>
          }
          deleteMany: {
            args: Prisma.SocketConnectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocketConnectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocketConnectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocketConnectionPayload>[]
          }
          upsert: {
            args: Prisma.SocketConnectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocketConnectionPayload>
          }
          aggregate: {
            args: Prisma.SocketConnectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocketConnection>
          }
          groupBy: {
            args: Prisma.SocketConnectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocketConnectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocketConnectionCountArgs<ExtArgs>
            result: $Utils.Optional<SocketConnectionCountAggregateOutputType> | number
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
    liveChatChannel?: LiveChatChannelOmit
    liveChatMessage?: LiveChatMessageOmit
    liveChatContact?: LiveChatContactOmit
    liveChatWidgetSetting?: LiveChatWidgetSettingOmit
    liveChatStatistics?: LiveChatStatisticsOmit
    socketConnection?: SocketConnectionOmit
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
   * Model LiveChatChannel
   */

  export type AggregateLiveChatChannel = {
    _count: LiveChatChannelCountAggregateOutputType | null
    _min: LiveChatChannelMinAggregateOutputType | null
    _max: LiveChatChannelMaxAggregateOutputType | null
  }

  export type LiveChatChannelMinAggregateOutputType = {
    id: string | null
    adminId: string | null
    organizationId: string | null
    contactId: string | null
    name: string | null
    type: string | null
    isActive: boolean | null
    lastMessageAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LiveChatChannelMaxAggregateOutputType = {
    id: string | null
    adminId: string | null
    organizationId: string | null
    contactId: string | null
    name: string | null
    type: string | null
    isActive: boolean | null
    lastMessageAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LiveChatChannelCountAggregateOutputType = {
    id: number
    adminId: number
    organizationId: number
    contactId: number
    name: number
    type: number
    isActive: number
    lastMessageAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LiveChatChannelMinAggregateInputType = {
    id?: true
    adminId?: true
    organizationId?: true
    contactId?: true
    name?: true
    type?: true
    isActive?: true
    lastMessageAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LiveChatChannelMaxAggregateInputType = {
    id?: true
    adminId?: true
    organizationId?: true
    contactId?: true
    name?: true
    type?: true
    isActive?: true
    lastMessageAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LiveChatChannelCountAggregateInputType = {
    id?: true
    adminId?: true
    organizationId?: true
    contactId?: true
    name?: true
    type?: true
    isActive?: true
    lastMessageAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LiveChatChannelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LiveChatChannel to aggregate.
     */
    where?: LiveChatChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveChatChannels to fetch.
     */
    orderBy?: LiveChatChannelOrderByWithRelationInput | LiveChatChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LiveChatChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveChatChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveChatChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LiveChatChannels
    **/
    _count?: true | LiveChatChannelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LiveChatChannelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LiveChatChannelMaxAggregateInputType
  }

  export type GetLiveChatChannelAggregateType<T extends LiveChatChannelAggregateArgs> = {
        [P in keyof T & keyof AggregateLiveChatChannel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLiveChatChannel[P]>
      : GetScalarType<T[P], AggregateLiveChatChannel[P]>
  }




  export type LiveChatChannelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LiveChatChannelWhereInput
    orderBy?: LiveChatChannelOrderByWithAggregationInput | LiveChatChannelOrderByWithAggregationInput[]
    by: LiveChatChannelScalarFieldEnum[] | LiveChatChannelScalarFieldEnum
    having?: LiveChatChannelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LiveChatChannelCountAggregateInputType | true
    _min?: LiveChatChannelMinAggregateInputType
    _max?: LiveChatChannelMaxAggregateInputType
  }

  export type LiveChatChannelGroupByOutputType = {
    id: string
    adminId: string
    organizationId: string | null
    contactId: string | null
    name: string | null
    type: string
    isActive: boolean
    lastMessageAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: LiveChatChannelCountAggregateOutputType | null
    _min: LiveChatChannelMinAggregateOutputType | null
    _max: LiveChatChannelMaxAggregateOutputType | null
  }

  type GetLiveChatChannelGroupByPayload<T extends LiveChatChannelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LiveChatChannelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LiveChatChannelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LiveChatChannelGroupByOutputType[P]>
            : GetScalarType<T[P], LiveChatChannelGroupByOutputType[P]>
        }
      >
    >


  export type LiveChatChannelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    organizationId?: boolean
    contactId?: boolean
    name?: boolean
    type?: boolean
    isActive?: boolean
    lastMessageAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["liveChatChannel"]>

  export type LiveChatChannelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    organizationId?: boolean
    contactId?: boolean
    name?: boolean
    type?: boolean
    isActive?: boolean
    lastMessageAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["liveChatChannel"]>

  export type LiveChatChannelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    organizationId?: boolean
    contactId?: boolean
    name?: boolean
    type?: boolean
    isActive?: boolean
    lastMessageAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["liveChatChannel"]>

  export type LiveChatChannelSelectScalar = {
    id?: boolean
    adminId?: boolean
    organizationId?: boolean
    contactId?: boolean
    name?: boolean
    type?: boolean
    isActive?: boolean
    lastMessageAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LiveChatChannelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "adminId" | "organizationId" | "contactId" | "name" | "type" | "isActive" | "lastMessageAt" | "createdAt" | "updatedAt", ExtArgs["result"]["liveChatChannel"]>

  export type $LiveChatChannelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LiveChatChannel"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      adminId: string
      organizationId: string | null
      contactId: string | null
      name: string | null
      type: string
      isActive: boolean
      lastMessageAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["liveChatChannel"]>
    composites: {}
  }

  type LiveChatChannelGetPayload<S extends boolean | null | undefined | LiveChatChannelDefaultArgs> = $Result.GetResult<Prisma.$LiveChatChannelPayload, S>

  type LiveChatChannelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LiveChatChannelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LiveChatChannelCountAggregateInputType | true
    }

  export interface LiveChatChannelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LiveChatChannel'], meta: { name: 'LiveChatChannel' } }
    /**
     * Find zero or one LiveChatChannel that matches the filter.
     * @param {LiveChatChannelFindUniqueArgs} args - Arguments to find a LiveChatChannel
     * @example
     * // Get one LiveChatChannel
     * const liveChatChannel = await prisma.liveChatChannel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LiveChatChannelFindUniqueArgs>(args: SelectSubset<T, LiveChatChannelFindUniqueArgs<ExtArgs>>): Prisma__LiveChatChannelClient<$Result.GetResult<Prisma.$LiveChatChannelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LiveChatChannel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LiveChatChannelFindUniqueOrThrowArgs} args - Arguments to find a LiveChatChannel
     * @example
     * // Get one LiveChatChannel
     * const liveChatChannel = await prisma.liveChatChannel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LiveChatChannelFindUniqueOrThrowArgs>(args: SelectSubset<T, LiveChatChannelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LiveChatChannelClient<$Result.GetResult<Prisma.$LiveChatChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LiveChatChannel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatChannelFindFirstArgs} args - Arguments to find a LiveChatChannel
     * @example
     * // Get one LiveChatChannel
     * const liveChatChannel = await prisma.liveChatChannel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LiveChatChannelFindFirstArgs>(args?: SelectSubset<T, LiveChatChannelFindFirstArgs<ExtArgs>>): Prisma__LiveChatChannelClient<$Result.GetResult<Prisma.$LiveChatChannelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LiveChatChannel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatChannelFindFirstOrThrowArgs} args - Arguments to find a LiveChatChannel
     * @example
     * // Get one LiveChatChannel
     * const liveChatChannel = await prisma.liveChatChannel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LiveChatChannelFindFirstOrThrowArgs>(args?: SelectSubset<T, LiveChatChannelFindFirstOrThrowArgs<ExtArgs>>): Prisma__LiveChatChannelClient<$Result.GetResult<Prisma.$LiveChatChannelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LiveChatChannels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatChannelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LiveChatChannels
     * const liveChatChannels = await prisma.liveChatChannel.findMany()
     * 
     * // Get first 10 LiveChatChannels
     * const liveChatChannels = await prisma.liveChatChannel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const liveChatChannelWithIdOnly = await prisma.liveChatChannel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LiveChatChannelFindManyArgs>(args?: SelectSubset<T, LiveChatChannelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiveChatChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LiveChatChannel.
     * @param {LiveChatChannelCreateArgs} args - Arguments to create a LiveChatChannel.
     * @example
     * // Create one LiveChatChannel
     * const LiveChatChannel = await prisma.liveChatChannel.create({
     *   data: {
     *     // ... data to create a LiveChatChannel
     *   }
     * })
     * 
     */
    create<T extends LiveChatChannelCreateArgs>(args: SelectSubset<T, LiveChatChannelCreateArgs<ExtArgs>>): Prisma__LiveChatChannelClient<$Result.GetResult<Prisma.$LiveChatChannelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LiveChatChannels.
     * @param {LiveChatChannelCreateManyArgs} args - Arguments to create many LiveChatChannels.
     * @example
     * // Create many LiveChatChannels
     * const liveChatChannel = await prisma.liveChatChannel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LiveChatChannelCreateManyArgs>(args?: SelectSubset<T, LiveChatChannelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LiveChatChannels and returns the data saved in the database.
     * @param {LiveChatChannelCreateManyAndReturnArgs} args - Arguments to create many LiveChatChannels.
     * @example
     * // Create many LiveChatChannels
     * const liveChatChannel = await prisma.liveChatChannel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LiveChatChannels and only return the `id`
     * const liveChatChannelWithIdOnly = await prisma.liveChatChannel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LiveChatChannelCreateManyAndReturnArgs>(args?: SelectSubset<T, LiveChatChannelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiveChatChannelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LiveChatChannel.
     * @param {LiveChatChannelDeleteArgs} args - Arguments to delete one LiveChatChannel.
     * @example
     * // Delete one LiveChatChannel
     * const LiveChatChannel = await prisma.liveChatChannel.delete({
     *   where: {
     *     // ... filter to delete one LiveChatChannel
     *   }
     * })
     * 
     */
    delete<T extends LiveChatChannelDeleteArgs>(args: SelectSubset<T, LiveChatChannelDeleteArgs<ExtArgs>>): Prisma__LiveChatChannelClient<$Result.GetResult<Prisma.$LiveChatChannelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LiveChatChannel.
     * @param {LiveChatChannelUpdateArgs} args - Arguments to update one LiveChatChannel.
     * @example
     * // Update one LiveChatChannel
     * const liveChatChannel = await prisma.liveChatChannel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LiveChatChannelUpdateArgs>(args: SelectSubset<T, LiveChatChannelUpdateArgs<ExtArgs>>): Prisma__LiveChatChannelClient<$Result.GetResult<Prisma.$LiveChatChannelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LiveChatChannels.
     * @param {LiveChatChannelDeleteManyArgs} args - Arguments to filter LiveChatChannels to delete.
     * @example
     * // Delete a few LiveChatChannels
     * const { count } = await prisma.liveChatChannel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LiveChatChannelDeleteManyArgs>(args?: SelectSubset<T, LiveChatChannelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LiveChatChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatChannelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LiveChatChannels
     * const liveChatChannel = await prisma.liveChatChannel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LiveChatChannelUpdateManyArgs>(args: SelectSubset<T, LiveChatChannelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LiveChatChannels and returns the data updated in the database.
     * @param {LiveChatChannelUpdateManyAndReturnArgs} args - Arguments to update many LiveChatChannels.
     * @example
     * // Update many LiveChatChannels
     * const liveChatChannel = await prisma.liveChatChannel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LiveChatChannels and only return the `id`
     * const liveChatChannelWithIdOnly = await prisma.liveChatChannel.updateManyAndReturn({
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
    updateManyAndReturn<T extends LiveChatChannelUpdateManyAndReturnArgs>(args: SelectSubset<T, LiveChatChannelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiveChatChannelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LiveChatChannel.
     * @param {LiveChatChannelUpsertArgs} args - Arguments to update or create a LiveChatChannel.
     * @example
     * // Update or create a LiveChatChannel
     * const liveChatChannel = await prisma.liveChatChannel.upsert({
     *   create: {
     *     // ... data to create a LiveChatChannel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LiveChatChannel we want to update
     *   }
     * })
     */
    upsert<T extends LiveChatChannelUpsertArgs>(args: SelectSubset<T, LiveChatChannelUpsertArgs<ExtArgs>>): Prisma__LiveChatChannelClient<$Result.GetResult<Prisma.$LiveChatChannelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LiveChatChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatChannelCountArgs} args - Arguments to filter LiveChatChannels to count.
     * @example
     * // Count the number of LiveChatChannels
     * const count = await prisma.liveChatChannel.count({
     *   where: {
     *     // ... the filter for the LiveChatChannels we want to count
     *   }
     * })
    **/
    count<T extends LiveChatChannelCountArgs>(
      args?: Subset<T, LiveChatChannelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LiveChatChannelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LiveChatChannel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatChannelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LiveChatChannelAggregateArgs>(args: Subset<T, LiveChatChannelAggregateArgs>): Prisma.PrismaPromise<GetLiveChatChannelAggregateType<T>>

    /**
     * Group by LiveChatChannel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatChannelGroupByArgs} args - Group by arguments.
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
      T extends LiveChatChannelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LiveChatChannelGroupByArgs['orderBy'] }
        : { orderBy?: LiveChatChannelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LiveChatChannelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLiveChatChannelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LiveChatChannel model
   */
  readonly fields: LiveChatChannelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LiveChatChannel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LiveChatChannelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the LiveChatChannel model
   */
  interface LiveChatChannelFieldRefs {
    readonly id: FieldRef<"LiveChatChannel", 'String'>
    readonly adminId: FieldRef<"LiveChatChannel", 'String'>
    readonly organizationId: FieldRef<"LiveChatChannel", 'String'>
    readonly contactId: FieldRef<"LiveChatChannel", 'String'>
    readonly name: FieldRef<"LiveChatChannel", 'String'>
    readonly type: FieldRef<"LiveChatChannel", 'String'>
    readonly isActive: FieldRef<"LiveChatChannel", 'Boolean'>
    readonly lastMessageAt: FieldRef<"LiveChatChannel", 'DateTime'>
    readonly createdAt: FieldRef<"LiveChatChannel", 'DateTime'>
    readonly updatedAt: FieldRef<"LiveChatChannel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LiveChatChannel findUnique
   */
  export type LiveChatChannelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatChannel
     */
    select?: LiveChatChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatChannel
     */
    omit?: LiveChatChannelOmit<ExtArgs> | null
    /**
     * Filter, which LiveChatChannel to fetch.
     */
    where: LiveChatChannelWhereUniqueInput
  }

  /**
   * LiveChatChannel findUniqueOrThrow
   */
  export type LiveChatChannelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatChannel
     */
    select?: LiveChatChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatChannel
     */
    omit?: LiveChatChannelOmit<ExtArgs> | null
    /**
     * Filter, which LiveChatChannel to fetch.
     */
    where: LiveChatChannelWhereUniqueInput
  }

  /**
   * LiveChatChannel findFirst
   */
  export type LiveChatChannelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatChannel
     */
    select?: LiveChatChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatChannel
     */
    omit?: LiveChatChannelOmit<ExtArgs> | null
    /**
     * Filter, which LiveChatChannel to fetch.
     */
    where?: LiveChatChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveChatChannels to fetch.
     */
    orderBy?: LiveChatChannelOrderByWithRelationInput | LiveChatChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LiveChatChannels.
     */
    cursor?: LiveChatChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveChatChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveChatChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LiveChatChannels.
     */
    distinct?: LiveChatChannelScalarFieldEnum | LiveChatChannelScalarFieldEnum[]
  }

  /**
   * LiveChatChannel findFirstOrThrow
   */
  export type LiveChatChannelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatChannel
     */
    select?: LiveChatChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatChannel
     */
    omit?: LiveChatChannelOmit<ExtArgs> | null
    /**
     * Filter, which LiveChatChannel to fetch.
     */
    where?: LiveChatChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveChatChannels to fetch.
     */
    orderBy?: LiveChatChannelOrderByWithRelationInput | LiveChatChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LiveChatChannels.
     */
    cursor?: LiveChatChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveChatChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveChatChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LiveChatChannels.
     */
    distinct?: LiveChatChannelScalarFieldEnum | LiveChatChannelScalarFieldEnum[]
  }

  /**
   * LiveChatChannel findMany
   */
  export type LiveChatChannelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatChannel
     */
    select?: LiveChatChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatChannel
     */
    omit?: LiveChatChannelOmit<ExtArgs> | null
    /**
     * Filter, which LiveChatChannels to fetch.
     */
    where?: LiveChatChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveChatChannels to fetch.
     */
    orderBy?: LiveChatChannelOrderByWithRelationInput | LiveChatChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LiveChatChannels.
     */
    cursor?: LiveChatChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveChatChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveChatChannels.
     */
    skip?: number
    distinct?: LiveChatChannelScalarFieldEnum | LiveChatChannelScalarFieldEnum[]
  }

  /**
   * LiveChatChannel create
   */
  export type LiveChatChannelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatChannel
     */
    select?: LiveChatChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatChannel
     */
    omit?: LiveChatChannelOmit<ExtArgs> | null
    /**
     * The data needed to create a LiveChatChannel.
     */
    data: XOR<LiveChatChannelCreateInput, LiveChatChannelUncheckedCreateInput>
  }

  /**
   * LiveChatChannel createMany
   */
  export type LiveChatChannelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LiveChatChannels.
     */
    data: LiveChatChannelCreateManyInput | LiveChatChannelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LiveChatChannel createManyAndReturn
   */
  export type LiveChatChannelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatChannel
     */
    select?: LiveChatChannelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatChannel
     */
    omit?: LiveChatChannelOmit<ExtArgs> | null
    /**
     * The data used to create many LiveChatChannels.
     */
    data: LiveChatChannelCreateManyInput | LiveChatChannelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LiveChatChannel update
   */
  export type LiveChatChannelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatChannel
     */
    select?: LiveChatChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatChannel
     */
    omit?: LiveChatChannelOmit<ExtArgs> | null
    /**
     * The data needed to update a LiveChatChannel.
     */
    data: XOR<LiveChatChannelUpdateInput, LiveChatChannelUncheckedUpdateInput>
    /**
     * Choose, which LiveChatChannel to update.
     */
    where: LiveChatChannelWhereUniqueInput
  }

  /**
   * LiveChatChannel updateMany
   */
  export type LiveChatChannelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LiveChatChannels.
     */
    data: XOR<LiveChatChannelUpdateManyMutationInput, LiveChatChannelUncheckedUpdateManyInput>
    /**
     * Filter which LiveChatChannels to update
     */
    where?: LiveChatChannelWhereInput
    /**
     * Limit how many LiveChatChannels to update.
     */
    limit?: number
  }

  /**
   * LiveChatChannel updateManyAndReturn
   */
  export type LiveChatChannelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatChannel
     */
    select?: LiveChatChannelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatChannel
     */
    omit?: LiveChatChannelOmit<ExtArgs> | null
    /**
     * The data used to update LiveChatChannels.
     */
    data: XOR<LiveChatChannelUpdateManyMutationInput, LiveChatChannelUncheckedUpdateManyInput>
    /**
     * Filter which LiveChatChannels to update
     */
    where?: LiveChatChannelWhereInput
    /**
     * Limit how many LiveChatChannels to update.
     */
    limit?: number
  }

  /**
   * LiveChatChannel upsert
   */
  export type LiveChatChannelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatChannel
     */
    select?: LiveChatChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatChannel
     */
    omit?: LiveChatChannelOmit<ExtArgs> | null
    /**
     * The filter to search for the LiveChatChannel to update in case it exists.
     */
    where: LiveChatChannelWhereUniqueInput
    /**
     * In case the LiveChatChannel found by the `where` argument doesn't exist, create a new LiveChatChannel with this data.
     */
    create: XOR<LiveChatChannelCreateInput, LiveChatChannelUncheckedCreateInput>
    /**
     * In case the LiveChatChannel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LiveChatChannelUpdateInput, LiveChatChannelUncheckedUpdateInput>
  }

  /**
   * LiveChatChannel delete
   */
  export type LiveChatChannelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatChannel
     */
    select?: LiveChatChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatChannel
     */
    omit?: LiveChatChannelOmit<ExtArgs> | null
    /**
     * Filter which LiveChatChannel to delete.
     */
    where: LiveChatChannelWhereUniqueInput
  }

  /**
   * LiveChatChannel deleteMany
   */
  export type LiveChatChannelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LiveChatChannels to delete
     */
    where?: LiveChatChannelWhereInput
    /**
     * Limit how many LiveChatChannels to delete.
     */
    limit?: number
  }

  /**
   * LiveChatChannel without action
   */
  export type LiveChatChannelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatChannel
     */
    select?: LiveChatChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatChannel
     */
    omit?: LiveChatChannelOmit<ExtArgs> | null
  }


  /**
   * Model LiveChatMessage
   */

  export type AggregateLiveChatMessage = {
    _count: LiveChatMessageCountAggregateOutputType | null
    _min: LiveChatMessageMinAggregateOutputType | null
    _max: LiveChatMessageMaxAggregateOutputType | null
  }

  export type LiveChatMessageMinAggregateOutputType = {
    id: string | null
    channelId: string | null
    senderId: string | null
    senderType: string | null
    content: string | null
    messageType: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type LiveChatMessageMaxAggregateOutputType = {
    id: string | null
    channelId: string | null
    senderId: string | null
    senderType: string | null
    content: string | null
    messageType: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type LiveChatMessageCountAggregateOutputType = {
    id: number
    channelId: number
    senderId: number
    senderType: number
    content: number
    messageType: number
    metadata: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type LiveChatMessageMinAggregateInputType = {
    id?: true
    channelId?: true
    senderId?: true
    senderType?: true
    content?: true
    messageType?: true
    isRead?: true
    createdAt?: true
  }

  export type LiveChatMessageMaxAggregateInputType = {
    id?: true
    channelId?: true
    senderId?: true
    senderType?: true
    content?: true
    messageType?: true
    isRead?: true
    createdAt?: true
  }

  export type LiveChatMessageCountAggregateInputType = {
    id?: true
    channelId?: true
    senderId?: true
    senderType?: true
    content?: true
    messageType?: true
    metadata?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type LiveChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LiveChatMessage to aggregate.
     */
    where?: LiveChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveChatMessages to fetch.
     */
    orderBy?: LiveChatMessageOrderByWithRelationInput | LiveChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LiveChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LiveChatMessages
    **/
    _count?: true | LiveChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LiveChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LiveChatMessageMaxAggregateInputType
  }

  export type GetLiveChatMessageAggregateType<T extends LiveChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateLiveChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLiveChatMessage[P]>
      : GetScalarType<T[P], AggregateLiveChatMessage[P]>
  }




  export type LiveChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LiveChatMessageWhereInput
    orderBy?: LiveChatMessageOrderByWithAggregationInput | LiveChatMessageOrderByWithAggregationInput[]
    by: LiveChatMessageScalarFieldEnum[] | LiveChatMessageScalarFieldEnum
    having?: LiveChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LiveChatMessageCountAggregateInputType | true
    _min?: LiveChatMessageMinAggregateInputType
    _max?: LiveChatMessageMaxAggregateInputType
  }

  export type LiveChatMessageGroupByOutputType = {
    id: string
    channelId: string
    senderId: string
    senderType: string
    content: string
    messageType: string
    metadata: JsonValue | null
    isRead: boolean
    createdAt: Date
    _count: LiveChatMessageCountAggregateOutputType | null
    _min: LiveChatMessageMinAggregateOutputType | null
    _max: LiveChatMessageMaxAggregateOutputType | null
  }

  type GetLiveChatMessageGroupByPayload<T extends LiveChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LiveChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LiveChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LiveChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], LiveChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type LiveChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channelId?: boolean
    senderId?: boolean
    senderType?: boolean
    content?: boolean
    messageType?: boolean
    metadata?: boolean
    isRead?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["liveChatMessage"]>

  export type LiveChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channelId?: boolean
    senderId?: boolean
    senderType?: boolean
    content?: boolean
    messageType?: boolean
    metadata?: boolean
    isRead?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["liveChatMessage"]>

  export type LiveChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channelId?: boolean
    senderId?: boolean
    senderType?: boolean
    content?: boolean
    messageType?: boolean
    metadata?: boolean
    isRead?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["liveChatMessage"]>

  export type LiveChatMessageSelectScalar = {
    id?: boolean
    channelId?: boolean
    senderId?: boolean
    senderType?: boolean
    content?: boolean
    messageType?: boolean
    metadata?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type LiveChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "channelId" | "senderId" | "senderType" | "content" | "messageType" | "metadata" | "isRead" | "createdAt", ExtArgs["result"]["liveChatMessage"]>

  export type $LiveChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LiveChatMessage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      channelId: string
      senderId: string
      senderType: string
      content: string
      messageType: string
      metadata: Prisma.JsonValue | null
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["liveChatMessage"]>
    composites: {}
  }

  type LiveChatMessageGetPayload<S extends boolean | null | undefined | LiveChatMessageDefaultArgs> = $Result.GetResult<Prisma.$LiveChatMessagePayload, S>

  type LiveChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LiveChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LiveChatMessageCountAggregateInputType | true
    }

  export interface LiveChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LiveChatMessage'], meta: { name: 'LiveChatMessage' } }
    /**
     * Find zero or one LiveChatMessage that matches the filter.
     * @param {LiveChatMessageFindUniqueArgs} args - Arguments to find a LiveChatMessage
     * @example
     * // Get one LiveChatMessage
     * const liveChatMessage = await prisma.liveChatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LiveChatMessageFindUniqueArgs>(args: SelectSubset<T, LiveChatMessageFindUniqueArgs<ExtArgs>>): Prisma__LiveChatMessageClient<$Result.GetResult<Prisma.$LiveChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LiveChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LiveChatMessageFindUniqueOrThrowArgs} args - Arguments to find a LiveChatMessage
     * @example
     * // Get one LiveChatMessage
     * const liveChatMessage = await prisma.liveChatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LiveChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, LiveChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LiveChatMessageClient<$Result.GetResult<Prisma.$LiveChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LiveChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatMessageFindFirstArgs} args - Arguments to find a LiveChatMessage
     * @example
     * // Get one LiveChatMessage
     * const liveChatMessage = await prisma.liveChatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LiveChatMessageFindFirstArgs>(args?: SelectSubset<T, LiveChatMessageFindFirstArgs<ExtArgs>>): Prisma__LiveChatMessageClient<$Result.GetResult<Prisma.$LiveChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LiveChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatMessageFindFirstOrThrowArgs} args - Arguments to find a LiveChatMessage
     * @example
     * // Get one LiveChatMessage
     * const liveChatMessage = await prisma.liveChatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LiveChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, LiveChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__LiveChatMessageClient<$Result.GetResult<Prisma.$LiveChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LiveChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LiveChatMessages
     * const liveChatMessages = await prisma.liveChatMessage.findMany()
     * 
     * // Get first 10 LiveChatMessages
     * const liveChatMessages = await prisma.liveChatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const liveChatMessageWithIdOnly = await prisma.liveChatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LiveChatMessageFindManyArgs>(args?: SelectSubset<T, LiveChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiveChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LiveChatMessage.
     * @param {LiveChatMessageCreateArgs} args - Arguments to create a LiveChatMessage.
     * @example
     * // Create one LiveChatMessage
     * const LiveChatMessage = await prisma.liveChatMessage.create({
     *   data: {
     *     // ... data to create a LiveChatMessage
     *   }
     * })
     * 
     */
    create<T extends LiveChatMessageCreateArgs>(args: SelectSubset<T, LiveChatMessageCreateArgs<ExtArgs>>): Prisma__LiveChatMessageClient<$Result.GetResult<Prisma.$LiveChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LiveChatMessages.
     * @param {LiveChatMessageCreateManyArgs} args - Arguments to create many LiveChatMessages.
     * @example
     * // Create many LiveChatMessages
     * const liveChatMessage = await prisma.liveChatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LiveChatMessageCreateManyArgs>(args?: SelectSubset<T, LiveChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LiveChatMessages and returns the data saved in the database.
     * @param {LiveChatMessageCreateManyAndReturnArgs} args - Arguments to create many LiveChatMessages.
     * @example
     * // Create many LiveChatMessages
     * const liveChatMessage = await prisma.liveChatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LiveChatMessages and only return the `id`
     * const liveChatMessageWithIdOnly = await prisma.liveChatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LiveChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, LiveChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiveChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LiveChatMessage.
     * @param {LiveChatMessageDeleteArgs} args - Arguments to delete one LiveChatMessage.
     * @example
     * // Delete one LiveChatMessage
     * const LiveChatMessage = await prisma.liveChatMessage.delete({
     *   where: {
     *     // ... filter to delete one LiveChatMessage
     *   }
     * })
     * 
     */
    delete<T extends LiveChatMessageDeleteArgs>(args: SelectSubset<T, LiveChatMessageDeleteArgs<ExtArgs>>): Prisma__LiveChatMessageClient<$Result.GetResult<Prisma.$LiveChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LiveChatMessage.
     * @param {LiveChatMessageUpdateArgs} args - Arguments to update one LiveChatMessage.
     * @example
     * // Update one LiveChatMessage
     * const liveChatMessage = await prisma.liveChatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LiveChatMessageUpdateArgs>(args: SelectSubset<T, LiveChatMessageUpdateArgs<ExtArgs>>): Prisma__LiveChatMessageClient<$Result.GetResult<Prisma.$LiveChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LiveChatMessages.
     * @param {LiveChatMessageDeleteManyArgs} args - Arguments to filter LiveChatMessages to delete.
     * @example
     * // Delete a few LiveChatMessages
     * const { count } = await prisma.liveChatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LiveChatMessageDeleteManyArgs>(args?: SelectSubset<T, LiveChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LiveChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LiveChatMessages
     * const liveChatMessage = await prisma.liveChatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LiveChatMessageUpdateManyArgs>(args: SelectSubset<T, LiveChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LiveChatMessages and returns the data updated in the database.
     * @param {LiveChatMessageUpdateManyAndReturnArgs} args - Arguments to update many LiveChatMessages.
     * @example
     * // Update many LiveChatMessages
     * const liveChatMessage = await prisma.liveChatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LiveChatMessages and only return the `id`
     * const liveChatMessageWithIdOnly = await prisma.liveChatMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends LiveChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, LiveChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiveChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LiveChatMessage.
     * @param {LiveChatMessageUpsertArgs} args - Arguments to update or create a LiveChatMessage.
     * @example
     * // Update or create a LiveChatMessage
     * const liveChatMessage = await prisma.liveChatMessage.upsert({
     *   create: {
     *     // ... data to create a LiveChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LiveChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends LiveChatMessageUpsertArgs>(args: SelectSubset<T, LiveChatMessageUpsertArgs<ExtArgs>>): Prisma__LiveChatMessageClient<$Result.GetResult<Prisma.$LiveChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LiveChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatMessageCountArgs} args - Arguments to filter LiveChatMessages to count.
     * @example
     * // Count the number of LiveChatMessages
     * const count = await prisma.liveChatMessage.count({
     *   where: {
     *     // ... the filter for the LiveChatMessages we want to count
     *   }
     * })
    **/
    count<T extends LiveChatMessageCountArgs>(
      args?: Subset<T, LiveChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LiveChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LiveChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LiveChatMessageAggregateArgs>(args: Subset<T, LiveChatMessageAggregateArgs>): Prisma.PrismaPromise<GetLiveChatMessageAggregateType<T>>

    /**
     * Group by LiveChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatMessageGroupByArgs} args - Group by arguments.
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
      T extends LiveChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LiveChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: LiveChatMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LiveChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLiveChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LiveChatMessage model
   */
  readonly fields: LiveChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LiveChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LiveChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the LiveChatMessage model
   */
  interface LiveChatMessageFieldRefs {
    readonly id: FieldRef<"LiveChatMessage", 'String'>
    readonly channelId: FieldRef<"LiveChatMessage", 'String'>
    readonly senderId: FieldRef<"LiveChatMessage", 'String'>
    readonly senderType: FieldRef<"LiveChatMessage", 'String'>
    readonly content: FieldRef<"LiveChatMessage", 'String'>
    readonly messageType: FieldRef<"LiveChatMessage", 'String'>
    readonly metadata: FieldRef<"LiveChatMessage", 'Json'>
    readonly isRead: FieldRef<"LiveChatMessage", 'Boolean'>
    readonly createdAt: FieldRef<"LiveChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LiveChatMessage findUnique
   */
  export type LiveChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatMessage
     */
    select?: LiveChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatMessage
     */
    omit?: LiveChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which LiveChatMessage to fetch.
     */
    where: LiveChatMessageWhereUniqueInput
  }

  /**
   * LiveChatMessage findUniqueOrThrow
   */
  export type LiveChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatMessage
     */
    select?: LiveChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatMessage
     */
    omit?: LiveChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which LiveChatMessage to fetch.
     */
    where: LiveChatMessageWhereUniqueInput
  }

  /**
   * LiveChatMessage findFirst
   */
  export type LiveChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatMessage
     */
    select?: LiveChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatMessage
     */
    omit?: LiveChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which LiveChatMessage to fetch.
     */
    where?: LiveChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveChatMessages to fetch.
     */
    orderBy?: LiveChatMessageOrderByWithRelationInput | LiveChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LiveChatMessages.
     */
    cursor?: LiveChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LiveChatMessages.
     */
    distinct?: LiveChatMessageScalarFieldEnum | LiveChatMessageScalarFieldEnum[]
  }

  /**
   * LiveChatMessage findFirstOrThrow
   */
  export type LiveChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatMessage
     */
    select?: LiveChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatMessage
     */
    omit?: LiveChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which LiveChatMessage to fetch.
     */
    where?: LiveChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveChatMessages to fetch.
     */
    orderBy?: LiveChatMessageOrderByWithRelationInput | LiveChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LiveChatMessages.
     */
    cursor?: LiveChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LiveChatMessages.
     */
    distinct?: LiveChatMessageScalarFieldEnum | LiveChatMessageScalarFieldEnum[]
  }

  /**
   * LiveChatMessage findMany
   */
  export type LiveChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatMessage
     */
    select?: LiveChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatMessage
     */
    omit?: LiveChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which LiveChatMessages to fetch.
     */
    where?: LiveChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveChatMessages to fetch.
     */
    orderBy?: LiveChatMessageOrderByWithRelationInput | LiveChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LiveChatMessages.
     */
    cursor?: LiveChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveChatMessages.
     */
    skip?: number
    distinct?: LiveChatMessageScalarFieldEnum | LiveChatMessageScalarFieldEnum[]
  }

  /**
   * LiveChatMessage create
   */
  export type LiveChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatMessage
     */
    select?: LiveChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatMessage
     */
    omit?: LiveChatMessageOmit<ExtArgs> | null
    /**
     * The data needed to create a LiveChatMessage.
     */
    data: XOR<LiveChatMessageCreateInput, LiveChatMessageUncheckedCreateInput>
  }

  /**
   * LiveChatMessage createMany
   */
  export type LiveChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LiveChatMessages.
     */
    data: LiveChatMessageCreateManyInput | LiveChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LiveChatMessage createManyAndReturn
   */
  export type LiveChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatMessage
     */
    select?: LiveChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatMessage
     */
    omit?: LiveChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many LiveChatMessages.
     */
    data: LiveChatMessageCreateManyInput | LiveChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LiveChatMessage update
   */
  export type LiveChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatMessage
     */
    select?: LiveChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatMessage
     */
    omit?: LiveChatMessageOmit<ExtArgs> | null
    /**
     * The data needed to update a LiveChatMessage.
     */
    data: XOR<LiveChatMessageUpdateInput, LiveChatMessageUncheckedUpdateInput>
    /**
     * Choose, which LiveChatMessage to update.
     */
    where: LiveChatMessageWhereUniqueInput
  }

  /**
   * LiveChatMessage updateMany
   */
  export type LiveChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LiveChatMessages.
     */
    data: XOR<LiveChatMessageUpdateManyMutationInput, LiveChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which LiveChatMessages to update
     */
    where?: LiveChatMessageWhereInput
    /**
     * Limit how many LiveChatMessages to update.
     */
    limit?: number
  }

  /**
   * LiveChatMessage updateManyAndReturn
   */
  export type LiveChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatMessage
     */
    select?: LiveChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatMessage
     */
    omit?: LiveChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update LiveChatMessages.
     */
    data: XOR<LiveChatMessageUpdateManyMutationInput, LiveChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which LiveChatMessages to update
     */
    where?: LiveChatMessageWhereInput
    /**
     * Limit how many LiveChatMessages to update.
     */
    limit?: number
  }

  /**
   * LiveChatMessage upsert
   */
  export type LiveChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatMessage
     */
    select?: LiveChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatMessage
     */
    omit?: LiveChatMessageOmit<ExtArgs> | null
    /**
     * The filter to search for the LiveChatMessage to update in case it exists.
     */
    where: LiveChatMessageWhereUniqueInput
    /**
     * In case the LiveChatMessage found by the `where` argument doesn't exist, create a new LiveChatMessage with this data.
     */
    create: XOR<LiveChatMessageCreateInput, LiveChatMessageUncheckedCreateInput>
    /**
     * In case the LiveChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LiveChatMessageUpdateInput, LiveChatMessageUncheckedUpdateInput>
  }

  /**
   * LiveChatMessage delete
   */
  export type LiveChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatMessage
     */
    select?: LiveChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatMessage
     */
    omit?: LiveChatMessageOmit<ExtArgs> | null
    /**
     * Filter which LiveChatMessage to delete.
     */
    where: LiveChatMessageWhereUniqueInput
  }

  /**
   * LiveChatMessage deleteMany
   */
  export type LiveChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LiveChatMessages to delete
     */
    where?: LiveChatMessageWhereInput
    /**
     * Limit how many LiveChatMessages to delete.
     */
    limit?: number
  }

  /**
   * LiveChatMessage without action
   */
  export type LiveChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatMessage
     */
    select?: LiveChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatMessage
     */
    omit?: LiveChatMessageOmit<ExtArgs> | null
  }


  /**
   * Model LiveChatContact
   */

  export type AggregateLiveChatContact = {
    _count: LiveChatContactCountAggregateOutputType | null
    _min: LiveChatContactMinAggregateOutputType | null
    _max: LiveChatContactMaxAggregateOutputType | null
  }

  export type LiveChatContactMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    name: string | null
    email: string | null
    phone: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LiveChatContactMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    name: string | null
    email: string | null
    phone: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LiveChatContactCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    name: number
    email: number
    phone: number
    avatar: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LiveChatContactMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    name?: true
    email?: true
    phone?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LiveChatContactMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    name?: true
    email?: true
    phone?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LiveChatContactCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    name?: true
    email?: true
    phone?: true
    avatar?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LiveChatContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LiveChatContact to aggregate.
     */
    where?: LiveChatContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveChatContacts to fetch.
     */
    orderBy?: LiveChatContactOrderByWithRelationInput | LiveChatContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LiveChatContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveChatContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveChatContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LiveChatContacts
    **/
    _count?: true | LiveChatContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LiveChatContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LiveChatContactMaxAggregateInputType
  }

  export type GetLiveChatContactAggregateType<T extends LiveChatContactAggregateArgs> = {
        [P in keyof T & keyof AggregateLiveChatContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLiveChatContact[P]>
      : GetScalarType<T[P], AggregateLiveChatContact[P]>
  }




  export type LiveChatContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LiveChatContactWhereInput
    orderBy?: LiveChatContactOrderByWithAggregationInput | LiveChatContactOrderByWithAggregationInput[]
    by: LiveChatContactScalarFieldEnum[] | LiveChatContactScalarFieldEnum
    having?: LiveChatContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LiveChatContactCountAggregateInputType | true
    _min?: LiveChatContactMinAggregateInputType
    _max?: LiveChatContactMaxAggregateInputType
  }

  export type LiveChatContactGroupByOutputType = {
    id: string
    userId: string
    organizationId: string | null
    name: string | null
    email: string | null
    phone: string | null
    avatar: string | null
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: LiveChatContactCountAggregateOutputType | null
    _min: LiveChatContactMinAggregateOutputType | null
    _max: LiveChatContactMaxAggregateOutputType | null
  }

  type GetLiveChatContactGroupByPayload<T extends LiveChatContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LiveChatContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LiveChatContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LiveChatContactGroupByOutputType[P]>
            : GetScalarType<T[P], LiveChatContactGroupByOutputType[P]>
        }
      >
    >


  export type LiveChatContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    avatar?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["liveChatContact"]>

  export type LiveChatContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    avatar?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["liveChatContact"]>

  export type LiveChatContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    avatar?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["liveChatContact"]>

  export type LiveChatContactSelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    avatar?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LiveChatContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "name" | "email" | "phone" | "avatar" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["liveChatContact"]>

  export type $LiveChatContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LiveChatContact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organizationId: string | null
      name: string | null
      email: string | null
      phone: string | null
      avatar: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["liveChatContact"]>
    composites: {}
  }

  type LiveChatContactGetPayload<S extends boolean | null | undefined | LiveChatContactDefaultArgs> = $Result.GetResult<Prisma.$LiveChatContactPayload, S>

  type LiveChatContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LiveChatContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LiveChatContactCountAggregateInputType | true
    }

  export interface LiveChatContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LiveChatContact'], meta: { name: 'LiveChatContact' } }
    /**
     * Find zero or one LiveChatContact that matches the filter.
     * @param {LiveChatContactFindUniqueArgs} args - Arguments to find a LiveChatContact
     * @example
     * // Get one LiveChatContact
     * const liveChatContact = await prisma.liveChatContact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LiveChatContactFindUniqueArgs>(args: SelectSubset<T, LiveChatContactFindUniqueArgs<ExtArgs>>): Prisma__LiveChatContactClient<$Result.GetResult<Prisma.$LiveChatContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LiveChatContact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LiveChatContactFindUniqueOrThrowArgs} args - Arguments to find a LiveChatContact
     * @example
     * // Get one LiveChatContact
     * const liveChatContact = await prisma.liveChatContact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LiveChatContactFindUniqueOrThrowArgs>(args: SelectSubset<T, LiveChatContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LiveChatContactClient<$Result.GetResult<Prisma.$LiveChatContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LiveChatContact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatContactFindFirstArgs} args - Arguments to find a LiveChatContact
     * @example
     * // Get one LiveChatContact
     * const liveChatContact = await prisma.liveChatContact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LiveChatContactFindFirstArgs>(args?: SelectSubset<T, LiveChatContactFindFirstArgs<ExtArgs>>): Prisma__LiveChatContactClient<$Result.GetResult<Prisma.$LiveChatContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LiveChatContact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatContactFindFirstOrThrowArgs} args - Arguments to find a LiveChatContact
     * @example
     * // Get one LiveChatContact
     * const liveChatContact = await prisma.liveChatContact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LiveChatContactFindFirstOrThrowArgs>(args?: SelectSubset<T, LiveChatContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__LiveChatContactClient<$Result.GetResult<Prisma.$LiveChatContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LiveChatContacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LiveChatContacts
     * const liveChatContacts = await prisma.liveChatContact.findMany()
     * 
     * // Get first 10 LiveChatContacts
     * const liveChatContacts = await prisma.liveChatContact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const liveChatContactWithIdOnly = await prisma.liveChatContact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LiveChatContactFindManyArgs>(args?: SelectSubset<T, LiveChatContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiveChatContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LiveChatContact.
     * @param {LiveChatContactCreateArgs} args - Arguments to create a LiveChatContact.
     * @example
     * // Create one LiveChatContact
     * const LiveChatContact = await prisma.liveChatContact.create({
     *   data: {
     *     // ... data to create a LiveChatContact
     *   }
     * })
     * 
     */
    create<T extends LiveChatContactCreateArgs>(args: SelectSubset<T, LiveChatContactCreateArgs<ExtArgs>>): Prisma__LiveChatContactClient<$Result.GetResult<Prisma.$LiveChatContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LiveChatContacts.
     * @param {LiveChatContactCreateManyArgs} args - Arguments to create many LiveChatContacts.
     * @example
     * // Create many LiveChatContacts
     * const liveChatContact = await prisma.liveChatContact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LiveChatContactCreateManyArgs>(args?: SelectSubset<T, LiveChatContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LiveChatContacts and returns the data saved in the database.
     * @param {LiveChatContactCreateManyAndReturnArgs} args - Arguments to create many LiveChatContacts.
     * @example
     * // Create many LiveChatContacts
     * const liveChatContact = await prisma.liveChatContact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LiveChatContacts and only return the `id`
     * const liveChatContactWithIdOnly = await prisma.liveChatContact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LiveChatContactCreateManyAndReturnArgs>(args?: SelectSubset<T, LiveChatContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiveChatContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LiveChatContact.
     * @param {LiveChatContactDeleteArgs} args - Arguments to delete one LiveChatContact.
     * @example
     * // Delete one LiveChatContact
     * const LiveChatContact = await prisma.liveChatContact.delete({
     *   where: {
     *     // ... filter to delete one LiveChatContact
     *   }
     * })
     * 
     */
    delete<T extends LiveChatContactDeleteArgs>(args: SelectSubset<T, LiveChatContactDeleteArgs<ExtArgs>>): Prisma__LiveChatContactClient<$Result.GetResult<Prisma.$LiveChatContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LiveChatContact.
     * @param {LiveChatContactUpdateArgs} args - Arguments to update one LiveChatContact.
     * @example
     * // Update one LiveChatContact
     * const liveChatContact = await prisma.liveChatContact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LiveChatContactUpdateArgs>(args: SelectSubset<T, LiveChatContactUpdateArgs<ExtArgs>>): Prisma__LiveChatContactClient<$Result.GetResult<Prisma.$LiveChatContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LiveChatContacts.
     * @param {LiveChatContactDeleteManyArgs} args - Arguments to filter LiveChatContacts to delete.
     * @example
     * // Delete a few LiveChatContacts
     * const { count } = await prisma.liveChatContact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LiveChatContactDeleteManyArgs>(args?: SelectSubset<T, LiveChatContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LiveChatContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LiveChatContacts
     * const liveChatContact = await prisma.liveChatContact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LiveChatContactUpdateManyArgs>(args: SelectSubset<T, LiveChatContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LiveChatContacts and returns the data updated in the database.
     * @param {LiveChatContactUpdateManyAndReturnArgs} args - Arguments to update many LiveChatContacts.
     * @example
     * // Update many LiveChatContacts
     * const liveChatContact = await prisma.liveChatContact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LiveChatContacts and only return the `id`
     * const liveChatContactWithIdOnly = await prisma.liveChatContact.updateManyAndReturn({
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
    updateManyAndReturn<T extends LiveChatContactUpdateManyAndReturnArgs>(args: SelectSubset<T, LiveChatContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiveChatContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LiveChatContact.
     * @param {LiveChatContactUpsertArgs} args - Arguments to update or create a LiveChatContact.
     * @example
     * // Update or create a LiveChatContact
     * const liveChatContact = await prisma.liveChatContact.upsert({
     *   create: {
     *     // ... data to create a LiveChatContact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LiveChatContact we want to update
     *   }
     * })
     */
    upsert<T extends LiveChatContactUpsertArgs>(args: SelectSubset<T, LiveChatContactUpsertArgs<ExtArgs>>): Prisma__LiveChatContactClient<$Result.GetResult<Prisma.$LiveChatContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LiveChatContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatContactCountArgs} args - Arguments to filter LiveChatContacts to count.
     * @example
     * // Count the number of LiveChatContacts
     * const count = await prisma.liveChatContact.count({
     *   where: {
     *     // ... the filter for the LiveChatContacts we want to count
     *   }
     * })
    **/
    count<T extends LiveChatContactCountArgs>(
      args?: Subset<T, LiveChatContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LiveChatContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LiveChatContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LiveChatContactAggregateArgs>(args: Subset<T, LiveChatContactAggregateArgs>): Prisma.PrismaPromise<GetLiveChatContactAggregateType<T>>

    /**
     * Group by LiveChatContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatContactGroupByArgs} args - Group by arguments.
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
      T extends LiveChatContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LiveChatContactGroupByArgs['orderBy'] }
        : { orderBy?: LiveChatContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LiveChatContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLiveChatContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LiveChatContact model
   */
  readonly fields: LiveChatContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LiveChatContact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LiveChatContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the LiveChatContact model
   */
  interface LiveChatContactFieldRefs {
    readonly id: FieldRef<"LiveChatContact", 'String'>
    readonly userId: FieldRef<"LiveChatContact", 'String'>
    readonly organizationId: FieldRef<"LiveChatContact", 'String'>
    readonly name: FieldRef<"LiveChatContact", 'String'>
    readonly email: FieldRef<"LiveChatContact", 'String'>
    readonly phone: FieldRef<"LiveChatContact", 'String'>
    readonly avatar: FieldRef<"LiveChatContact", 'String'>
    readonly metadata: FieldRef<"LiveChatContact", 'Json'>
    readonly createdAt: FieldRef<"LiveChatContact", 'DateTime'>
    readonly updatedAt: FieldRef<"LiveChatContact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LiveChatContact findUnique
   */
  export type LiveChatContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatContact
     */
    select?: LiveChatContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatContact
     */
    omit?: LiveChatContactOmit<ExtArgs> | null
    /**
     * Filter, which LiveChatContact to fetch.
     */
    where: LiveChatContactWhereUniqueInput
  }

  /**
   * LiveChatContact findUniqueOrThrow
   */
  export type LiveChatContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatContact
     */
    select?: LiveChatContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatContact
     */
    omit?: LiveChatContactOmit<ExtArgs> | null
    /**
     * Filter, which LiveChatContact to fetch.
     */
    where: LiveChatContactWhereUniqueInput
  }

  /**
   * LiveChatContact findFirst
   */
  export type LiveChatContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatContact
     */
    select?: LiveChatContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatContact
     */
    omit?: LiveChatContactOmit<ExtArgs> | null
    /**
     * Filter, which LiveChatContact to fetch.
     */
    where?: LiveChatContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveChatContacts to fetch.
     */
    orderBy?: LiveChatContactOrderByWithRelationInput | LiveChatContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LiveChatContacts.
     */
    cursor?: LiveChatContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveChatContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveChatContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LiveChatContacts.
     */
    distinct?: LiveChatContactScalarFieldEnum | LiveChatContactScalarFieldEnum[]
  }

  /**
   * LiveChatContact findFirstOrThrow
   */
  export type LiveChatContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatContact
     */
    select?: LiveChatContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatContact
     */
    omit?: LiveChatContactOmit<ExtArgs> | null
    /**
     * Filter, which LiveChatContact to fetch.
     */
    where?: LiveChatContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveChatContacts to fetch.
     */
    orderBy?: LiveChatContactOrderByWithRelationInput | LiveChatContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LiveChatContacts.
     */
    cursor?: LiveChatContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveChatContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveChatContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LiveChatContacts.
     */
    distinct?: LiveChatContactScalarFieldEnum | LiveChatContactScalarFieldEnum[]
  }

  /**
   * LiveChatContact findMany
   */
  export type LiveChatContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatContact
     */
    select?: LiveChatContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatContact
     */
    omit?: LiveChatContactOmit<ExtArgs> | null
    /**
     * Filter, which LiveChatContacts to fetch.
     */
    where?: LiveChatContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveChatContacts to fetch.
     */
    orderBy?: LiveChatContactOrderByWithRelationInput | LiveChatContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LiveChatContacts.
     */
    cursor?: LiveChatContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveChatContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveChatContacts.
     */
    skip?: number
    distinct?: LiveChatContactScalarFieldEnum | LiveChatContactScalarFieldEnum[]
  }

  /**
   * LiveChatContact create
   */
  export type LiveChatContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatContact
     */
    select?: LiveChatContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatContact
     */
    omit?: LiveChatContactOmit<ExtArgs> | null
    /**
     * The data needed to create a LiveChatContact.
     */
    data: XOR<LiveChatContactCreateInput, LiveChatContactUncheckedCreateInput>
  }

  /**
   * LiveChatContact createMany
   */
  export type LiveChatContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LiveChatContacts.
     */
    data: LiveChatContactCreateManyInput | LiveChatContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LiveChatContact createManyAndReturn
   */
  export type LiveChatContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatContact
     */
    select?: LiveChatContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatContact
     */
    omit?: LiveChatContactOmit<ExtArgs> | null
    /**
     * The data used to create many LiveChatContacts.
     */
    data: LiveChatContactCreateManyInput | LiveChatContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LiveChatContact update
   */
  export type LiveChatContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatContact
     */
    select?: LiveChatContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatContact
     */
    omit?: LiveChatContactOmit<ExtArgs> | null
    /**
     * The data needed to update a LiveChatContact.
     */
    data: XOR<LiveChatContactUpdateInput, LiveChatContactUncheckedUpdateInput>
    /**
     * Choose, which LiveChatContact to update.
     */
    where: LiveChatContactWhereUniqueInput
  }

  /**
   * LiveChatContact updateMany
   */
  export type LiveChatContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LiveChatContacts.
     */
    data: XOR<LiveChatContactUpdateManyMutationInput, LiveChatContactUncheckedUpdateManyInput>
    /**
     * Filter which LiveChatContacts to update
     */
    where?: LiveChatContactWhereInput
    /**
     * Limit how many LiveChatContacts to update.
     */
    limit?: number
  }

  /**
   * LiveChatContact updateManyAndReturn
   */
  export type LiveChatContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatContact
     */
    select?: LiveChatContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatContact
     */
    omit?: LiveChatContactOmit<ExtArgs> | null
    /**
     * The data used to update LiveChatContacts.
     */
    data: XOR<LiveChatContactUpdateManyMutationInput, LiveChatContactUncheckedUpdateManyInput>
    /**
     * Filter which LiveChatContacts to update
     */
    where?: LiveChatContactWhereInput
    /**
     * Limit how many LiveChatContacts to update.
     */
    limit?: number
  }

  /**
   * LiveChatContact upsert
   */
  export type LiveChatContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatContact
     */
    select?: LiveChatContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatContact
     */
    omit?: LiveChatContactOmit<ExtArgs> | null
    /**
     * The filter to search for the LiveChatContact to update in case it exists.
     */
    where: LiveChatContactWhereUniqueInput
    /**
     * In case the LiveChatContact found by the `where` argument doesn't exist, create a new LiveChatContact with this data.
     */
    create: XOR<LiveChatContactCreateInput, LiveChatContactUncheckedCreateInput>
    /**
     * In case the LiveChatContact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LiveChatContactUpdateInput, LiveChatContactUncheckedUpdateInput>
  }

  /**
   * LiveChatContact delete
   */
  export type LiveChatContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatContact
     */
    select?: LiveChatContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatContact
     */
    omit?: LiveChatContactOmit<ExtArgs> | null
    /**
     * Filter which LiveChatContact to delete.
     */
    where: LiveChatContactWhereUniqueInput
  }

  /**
   * LiveChatContact deleteMany
   */
  export type LiveChatContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LiveChatContacts to delete
     */
    where?: LiveChatContactWhereInput
    /**
     * Limit how many LiveChatContacts to delete.
     */
    limit?: number
  }

  /**
   * LiveChatContact without action
   */
  export type LiveChatContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatContact
     */
    select?: LiveChatContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatContact
     */
    omit?: LiveChatContactOmit<ExtArgs> | null
  }


  /**
   * Model LiveChatWidgetSetting
   */

  export type AggregateLiveChatWidgetSetting = {
    _count: LiveChatWidgetSettingCountAggregateOutputType | null
    _min: LiveChatWidgetSettingMinAggregateOutputType | null
    _max: LiveChatWidgetSettingMaxAggregateOutputType | null
  }

  export type LiveChatWidgetSettingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    widgetName: string | null
    primaryColor: string | null
    headerTitle: string | null
    greetingMessage: string | null
    offlineMessage: string | null
    position: string | null
    showPowerBy: boolean | null
    enabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LiveChatWidgetSettingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    widgetName: string | null
    primaryColor: string | null
    headerTitle: string | null
    greetingMessage: string | null
    offlineMessage: string | null
    position: string | null
    showPowerBy: boolean | null
    enabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LiveChatWidgetSettingCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    widgetName: number
    primaryColor: number
    headerTitle: number
    greetingMessage: number
    offlineMessage: number
    position: number
    showPowerBy: number
    enabled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LiveChatWidgetSettingMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    widgetName?: true
    primaryColor?: true
    headerTitle?: true
    greetingMessage?: true
    offlineMessage?: true
    position?: true
    showPowerBy?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LiveChatWidgetSettingMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    widgetName?: true
    primaryColor?: true
    headerTitle?: true
    greetingMessage?: true
    offlineMessage?: true
    position?: true
    showPowerBy?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LiveChatWidgetSettingCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    widgetName?: true
    primaryColor?: true
    headerTitle?: true
    greetingMessage?: true
    offlineMessage?: true
    position?: true
    showPowerBy?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LiveChatWidgetSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LiveChatWidgetSetting to aggregate.
     */
    where?: LiveChatWidgetSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveChatWidgetSettings to fetch.
     */
    orderBy?: LiveChatWidgetSettingOrderByWithRelationInput | LiveChatWidgetSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LiveChatWidgetSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveChatWidgetSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveChatWidgetSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LiveChatWidgetSettings
    **/
    _count?: true | LiveChatWidgetSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LiveChatWidgetSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LiveChatWidgetSettingMaxAggregateInputType
  }

  export type GetLiveChatWidgetSettingAggregateType<T extends LiveChatWidgetSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateLiveChatWidgetSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLiveChatWidgetSetting[P]>
      : GetScalarType<T[P], AggregateLiveChatWidgetSetting[P]>
  }




  export type LiveChatWidgetSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LiveChatWidgetSettingWhereInput
    orderBy?: LiveChatWidgetSettingOrderByWithAggregationInput | LiveChatWidgetSettingOrderByWithAggregationInput[]
    by: LiveChatWidgetSettingScalarFieldEnum[] | LiveChatWidgetSettingScalarFieldEnum
    having?: LiveChatWidgetSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LiveChatWidgetSettingCountAggregateInputType | true
    _min?: LiveChatWidgetSettingMinAggregateInputType
    _max?: LiveChatWidgetSettingMaxAggregateInputType
  }

  export type LiveChatWidgetSettingGroupByOutputType = {
    id: string
    userId: string
    organizationId: string | null
    widgetName: string | null
    primaryColor: string
    headerTitle: string
    greetingMessage: string | null
    offlineMessage: string | null
    position: string
    showPowerBy: boolean
    enabled: boolean
    createdAt: Date
    updatedAt: Date
    _count: LiveChatWidgetSettingCountAggregateOutputType | null
    _min: LiveChatWidgetSettingMinAggregateOutputType | null
    _max: LiveChatWidgetSettingMaxAggregateOutputType | null
  }

  type GetLiveChatWidgetSettingGroupByPayload<T extends LiveChatWidgetSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LiveChatWidgetSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LiveChatWidgetSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LiveChatWidgetSettingGroupByOutputType[P]>
            : GetScalarType<T[P], LiveChatWidgetSettingGroupByOutputType[P]>
        }
      >
    >


  export type LiveChatWidgetSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    widgetName?: boolean
    primaryColor?: boolean
    headerTitle?: boolean
    greetingMessage?: boolean
    offlineMessage?: boolean
    position?: boolean
    showPowerBy?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["liveChatWidgetSetting"]>

  export type LiveChatWidgetSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    widgetName?: boolean
    primaryColor?: boolean
    headerTitle?: boolean
    greetingMessage?: boolean
    offlineMessage?: boolean
    position?: boolean
    showPowerBy?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["liveChatWidgetSetting"]>

  export type LiveChatWidgetSettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    widgetName?: boolean
    primaryColor?: boolean
    headerTitle?: boolean
    greetingMessage?: boolean
    offlineMessage?: boolean
    position?: boolean
    showPowerBy?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["liveChatWidgetSetting"]>

  export type LiveChatWidgetSettingSelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    widgetName?: boolean
    primaryColor?: boolean
    headerTitle?: boolean
    greetingMessage?: boolean
    offlineMessage?: boolean
    position?: boolean
    showPowerBy?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LiveChatWidgetSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "widgetName" | "primaryColor" | "headerTitle" | "greetingMessage" | "offlineMessage" | "position" | "showPowerBy" | "enabled" | "createdAt" | "updatedAt", ExtArgs["result"]["liveChatWidgetSetting"]>

  export type $LiveChatWidgetSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LiveChatWidgetSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organizationId: string | null
      widgetName: string | null
      primaryColor: string
      headerTitle: string
      greetingMessage: string | null
      offlineMessage: string | null
      position: string
      showPowerBy: boolean
      enabled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["liveChatWidgetSetting"]>
    composites: {}
  }

  type LiveChatWidgetSettingGetPayload<S extends boolean | null | undefined | LiveChatWidgetSettingDefaultArgs> = $Result.GetResult<Prisma.$LiveChatWidgetSettingPayload, S>

  type LiveChatWidgetSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LiveChatWidgetSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LiveChatWidgetSettingCountAggregateInputType | true
    }

  export interface LiveChatWidgetSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LiveChatWidgetSetting'], meta: { name: 'LiveChatWidgetSetting' } }
    /**
     * Find zero or one LiveChatWidgetSetting that matches the filter.
     * @param {LiveChatWidgetSettingFindUniqueArgs} args - Arguments to find a LiveChatWidgetSetting
     * @example
     * // Get one LiveChatWidgetSetting
     * const liveChatWidgetSetting = await prisma.liveChatWidgetSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LiveChatWidgetSettingFindUniqueArgs>(args: SelectSubset<T, LiveChatWidgetSettingFindUniqueArgs<ExtArgs>>): Prisma__LiveChatWidgetSettingClient<$Result.GetResult<Prisma.$LiveChatWidgetSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LiveChatWidgetSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LiveChatWidgetSettingFindUniqueOrThrowArgs} args - Arguments to find a LiveChatWidgetSetting
     * @example
     * // Get one LiveChatWidgetSetting
     * const liveChatWidgetSetting = await prisma.liveChatWidgetSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LiveChatWidgetSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, LiveChatWidgetSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LiveChatWidgetSettingClient<$Result.GetResult<Prisma.$LiveChatWidgetSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LiveChatWidgetSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatWidgetSettingFindFirstArgs} args - Arguments to find a LiveChatWidgetSetting
     * @example
     * // Get one LiveChatWidgetSetting
     * const liveChatWidgetSetting = await prisma.liveChatWidgetSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LiveChatWidgetSettingFindFirstArgs>(args?: SelectSubset<T, LiveChatWidgetSettingFindFirstArgs<ExtArgs>>): Prisma__LiveChatWidgetSettingClient<$Result.GetResult<Prisma.$LiveChatWidgetSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LiveChatWidgetSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatWidgetSettingFindFirstOrThrowArgs} args - Arguments to find a LiveChatWidgetSetting
     * @example
     * // Get one LiveChatWidgetSetting
     * const liveChatWidgetSetting = await prisma.liveChatWidgetSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LiveChatWidgetSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, LiveChatWidgetSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__LiveChatWidgetSettingClient<$Result.GetResult<Prisma.$LiveChatWidgetSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LiveChatWidgetSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatWidgetSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LiveChatWidgetSettings
     * const liveChatWidgetSettings = await prisma.liveChatWidgetSetting.findMany()
     * 
     * // Get first 10 LiveChatWidgetSettings
     * const liveChatWidgetSettings = await prisma.liveChatWidgetSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const liveChatWidgetSettingWithIdOnly = await prisma.liveChatWidgetSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LiveChatWidgetSettingFindManyArgs>(args?: SelectSubset<T, LiveChatWidgetSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiveChatWidgetSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LiveChatWidgetSetting.
     * @param {LiveChatWidgetSettingCreateArgs} args - Arguments to create a LiveChatWidgetSetting.
     * @example
     * // Create one LiveChatWidgetSetting
     * const LiveChatWidgetSetting = await prisma.liveChatWidgetSetting.create({
     *   data: {
     *     // ... data to create a LiveChatWidgetSetting
     *   }
     * })
     * 
     */
    create<T extends LiveChatWidgetSettingCreateArgs>(args: SelectSubset<T, LiveChatWidgetSettingCreateArgs<ExtArgs>>): Prisma__LiveChatWidgetSettingClient<$Result.GetResult<Prisma.$LiveChatWidgetSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LiveChatWidgetSettings.
     * @param {LiveChatWidgetSettingCreateManyArgs} args - Arguments to create many LiveChatWidgetSettings.
     * @example
     * // Create many LiveChatWidgetSettings
     * const liveChatWidgetSetting = await prisma.liveChatWidgetSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LiveChatWidgetSettingCreateManyArgs>(args?: SelectSubset<T, LiveChatWidgetSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LiveChatWidgetSettings and returns the data saved in the database.
     * @param {LiveChatWidgetSettingCreateManyAndReturnArgs} args - Arguments to create many LiveChatWidgetSettings.
     * @example
     * // Create many LiveChatWidgetSettings
     * const liveChatWidgetSetting = await prisma.liveChatWidgetSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LiveChatWidgetSettings and only return the `id`
     * const liveChatWidgetSettingWithIdOnly = await prisma.liveChatWidgetSetting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LiveChatWidgetSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, LiveChatWidgetSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiveChatWidgetSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LiveChatWidgetSetting.
     * @param {LiveChatWidgetSettingDeleteArgs} args - Arguments to delete one LiveChatWidgetSetting.
     * @example
     * // Delete one LiveChatWidgetSetting
     * const LiveChatWidgetSetting = await prisma.liveChatWidgetSetting.delete({
     *   where: {
     *     // ... filter to delete one LiveChatWidgetSetting
     *   }
     * })
     * 
     */
    delete<T extends LiveChatWidgetSettingDeleteArgs>(args: SelectSubset<T, LiveChatWidgetSettingDeleteArgs<ExtArgs>>): Prisma__LiveChatWidgetSettingClient<$Result.GetResult<Prisma.$LiveChatWidgetSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LiveChatWidgetSetting.
     * @param {LiveChatWidgetSettingUpdateArgs} args - Arguments to update one LiveChatWidgetSetting.
     * @example
     * // Update one LiveChatWidgetSetting
     * const liveChatWidgetSetting = await prisma.liveChatWidgetSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LiveChatWidgetSettingUpdateArgs>(args: SelectSubset<T, LiveChatWidgetSettingUpdateArgs<ExtArgs>>): Prisma__LiveChatWidgetSettingClient<$Result.GetResult<Prisma.$LiveChatWidgetSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LiveChatWidgetSettings.
     * @param {LiveChatWidgetSettingDeleteManyArgs} args - Arguments to filter LiveChatWidgetSettings to delete.
     * @example
     * // Delete a few LiveChatWidgetSettings
     * const { count } = await prisma.liveChatWidgetSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LiveChatWidgetSettingDeleteManyArgs>(args?: SelectSubset<T, LiveChatWidgetSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LiveChatWidgetSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatWidgetSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LiveChatWidgetSettings
     * const liveChatWidgetSetting = await prisma.liveChatWidgetSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LiveChatWidgetSettingUpdateManyArgs>(args: SelectSubset<T, LiveChatWidgetSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LiveChatWidgetSettings and returns the data updated in the database.
     * @param {LiveChatWidgetSettingUpdateManyAndReturnArgs} args - Arguments to update many LiveChatWidgetSettings.
     * @example
     * // Update many LiveChatWidgetSettings
     * const liveChatWidgetSetting = await prisma.liveChatWidgetSetting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LiveChatWidgetSettings and only return the `id`
     * const liveChatWidgetSettingWithIdOnly = await prisma.liveChatWidgetSetting.updateManyAndReturn({
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
    updateManyAndReturn<T extends LiveChatWidgetSettingUpdateManyAndReturnArgs>(args: SelectSubset<T, LiveChatWidgetSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiveChatWidgetSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LiveChatWidgetSetting.
     * @param {LiveChatWidgetSettingUpsertArgs} args - Arguments to update or create a LiveChatWidgetSetting.
     * @example
     * // Update or create a LiveChatWidgetSetting
     * const liveChatWidgetSetting = await prisma.liveChatWidgetSetting.upsert({
     *   create: {
     *     // ... data to create a LiveChatWidgetSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LiveChatWidgetSetting we want to update
     *   }
     * })
     */
    upsert<T extends LiveChatWidgetSettingUpsertArgs>(args: SelectSubset<T, LiveChatWidgetSettingUpsertArgs<ExtArgs>>): Prisma__LiveChatWidgetSettingClient<$Result.GetResult<Prisma.$LiveChatWidgetSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LiveChatWidgetSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatWidgetSettingCountArgs} args - Arguments to filter LiveChatWidgetSettings to count.
     * @example
     * // Count the number of LiveChatWidgetSettings
     * const count = await prisma.liveChatWidgetSetting.count({
     *   where: {
     *     // ... the filter for the LiveChatWidgetSettings we want to count
     *   }
     * })
    **/
    count<T extends LiveChatWidgetSettingCountArgs>(
      args?: Subset<T, LiveChatWidgetSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LiveChatWidgetSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LiveChatWidgetSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatWidgetSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LiveChatWidgetSettingAggregateArgs>(args: Subset<T, LiveChatWidgetSettingAggregateArgs>): Prisma.PrismaPromise<GetLiveChatWidgetSettingAggregateType<T>>

    /**
     * Group by LiveChatWidgetSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatWidgetSettingGroupByArgs} args - Group by arguments.
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
      T extends LiveChatWidgetSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LiveChatWidgetSettingGroupByArgs['orderBy'] }
        : { orderBy?: LiveChatWidgetSettingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LiveChatWidgetSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLiveChatWidgetSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LiveChatWidgetSetting model
   */
  readonly fields: LiveChatWidgetSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LiveChatWidgetSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LiveChatWidgetSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the LiveChatWidgetSetting model
   */
  interface LiveChatWidgetSettingFieldRefs {
    readonly id: FieldRef<"LiveChatWidgetSetting", 'String'>
    readonly userId: FieldRef<"LiveChatWidgetSetting", 'String'>
    readonly organizationId: FieldRef<"LiveChatWidgetSetting", 'String'>
    readonly widgetName: FieldRef<"LiveChatWidgetSetting", 'String'>
    readonly primaryColor: FieldRef<"LiveChatWidgetSetting", 'String'>
    readonly headerTitle: FieldRef<"LiveChatWidgetSetting", 'String'>
    readonly greetingMessage: FieldRef<"LiveChatWidgetSetting", 'String'>
    readonly offlineMessage: FieldRef<"LiveChatWidgetSetting", 'String'>
    readonly position: FieldRef<"LiveChatWidgetSetting", 'String'>
    readonly showPowerBy: FieldRef<"LiveChatWidgetSetting", 'Boolean'>
    readonly enabled: FieldRef<"LiveChatWidgetSetting", 'Boolean'>
    readonly createdAt: FieldRef<"LiveChatWidgetSetting", 'DateTime'>
    readonly updatedAt: FieldRef<"LiveChatWidgetSetting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LiveChatWidgetSetting findUnique
   */
  export type LiveChatWidgetSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatWidgetSetting
     */
    select?: LiveChatWidgetSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatWidgetSetting
     */
    omit?: LiveChatWidgetSettingOmit<ExtArgs> | null
    /**
     * Filter, which LiveChatWidgetSetting to fetch.
     */
    where: LiveChatWidgetSettingWhereUniqueInput
  }

  /**
   * LiveChatWidgetSetting findUniqueOrThrow
   */
  export type LiveChatWidgetSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatWidgetSetting
     */
    select?: LiveChatWidgetSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatWidgetSetting
     */
    omit?: LiveChatWidgetSettingOmit<ExtArgs> | null
    /**
     * Filter, which LiveChatWidgetSetting to fetch.
     */
    where: LiveChatWidgetSettingWhereUniqueInput
  }

  /**
   * LiveChatWidgetSetting findFirst
   */
  export type LiveChatWidgetSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatWidgetSetting
     */
    select?: LiveChatWidgetSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatWidgetSetting
     */
    omit?: LiveChatWidgetSettingOmit<ExtArgs> | null
    /**
     * Filter, which LiveChatWidgetSetting to fetch.
     */
    where?: LiveChatWidgetSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveChatWidgetSettings to fetch.
     */
    orderBy?: LiveChatWidgetSettingOrderByWithRelationInput | LiveChatWidgetSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LiveChatWidgetSettings.
     */
    cursor?: LiveChatWidgetSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveChatWidgetSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveChatWidgetSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LiveChatWidgetSettings.
     */
    distinct?: LiveChatWidgetSettingScalarFieldEnum | LiveChatWidgetSettingScalarFieldEnum[]
  }

  /**
   * LiveChatWidgetSetting findFirstOrThrow
   */
  export type LiveChatWidgetSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatWidgetSetting
     */
    select?: LiveChatWidgetSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatWidgetSetting
     */
    omit?: LiveChatWidgetSettingOmit<ExtArgs> | null
    /**
     * Filter, which LiveChatWidgetSetting to fetch.
     */
    where?: LiveChatWidgetSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveChatWidgetSettings to fetch.
     */
    orderBy?: LiveChatWidgetSettingOrderByWithRelationInput | LiveChatWidgetSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LiveChatWidgetSettings.
     */
    cursor?: LiveChatWidgetSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveChatWidgetSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveChatWidgetSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LiveChatWidgetSettings.
     */
    distinct?: LiveChatWidgetSettingScalarFieldEnum | LiveChatWidgetSettingScalarFieldEnum[]
  }

  /**
   * LiveChatWidgetSetting findMany
   */
  export type LiveChatWidgetSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatWidgetSetting
     */
    select?: LiveChatWidgetSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatWidgetSetting
     */
    omit?: LiveChatWidgetSettingOmit<ExtArgs> | null
    /**
     * Filter, which LiveChatWidgetSettings to fetch.
     */
    where?: LiveChatWidgetSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveChatWidgetSettings to fetch.
     */
    orderBy?: LiveChatWidgetSettingOrderByWithRelationInput | LiveChatWidgetSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LiveChatWidgetSettings.
     */
    cursor?: LiveChatWidgetSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveChatWidgetSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveChatWidgetSettings.
     */
    skip?: number
    distinct?: LiveChatWidgetSettingScalarFieldEnum | LiveChatWidgetSettingScalarFieldEnum[]
  }

  /**
   * LiveChatWidgetSetting create
   */
  export type LiveChatWidgetSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatWidgetSetting
     */
    select?: LiveChatWidgetSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatWidgetSetting
     */
    omit?: LiveChatWidgetSettingOmit<ExtArgs> | null
    /**
     * The data needed to create a LiveChatWidgetSetting.
     */
    data: XOR<LiveChatWidgetSettingCreateInput, LiveChatWidgetSettingUncheckedCreateInput>
  }

  /**
   * LiveChatWidgetSetting createMany
   */
  export type LiveChatWidgetSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LiveChatWidgetSettings.
     */
    data: LiveChatWidgetSettingCreateManyInput | LiveChatWidgetSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LiveChatWidgetSetting createManyAndReturn
   */
  export type LiveChatWidgetSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatWidgetSetting
     */
    select?: LiveChatWidgetSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatWidgetSetting
     */
    omit?: LiveChatWidgetSettingOmit<ExtArgs> | null
    /**
     * The data used to create many LiveChatWidgetSettings.
     */
    data: LiveChatWidgetSettingCreateManyInput | LiveChatWidgetSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LiveChatWidgetSetting update
   */
  export type LiveChatWidgetSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatWidgetSetting
     */
    select?: LiveChatWidgetSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatWidgetSetting
     */
    omit?: LiveChatWidgetSettingOmit<ExtArgs> | null
    /**
     * The data needed to update a LiveChatWidgetSetting.
     */
    data: XOR<LiveChatWidgetSettingUpdateInput, LiveChatWidgetSettingUncheckedUpdateInput>
    /**
     * Choose, which LiveChatWidgetSetting to update.
     */
    where: LiveChatWidgetSettingWhereUniqueInput
  }

  /**
   * LiveChatWidgetSetting updateMany
   */
  export type LiveChatWidgetSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LiveChatWidgetSettings.
     */
    data: XOR<LiveChatWidgetSettingUpdateManyMutationInput, LiveChatWidgetSettingUncheckedUpdateManyInput>
    /**
     * Filter which LiveChatWidgetSettings to update
     */
    where?: LiveChatWidgetSettingWhereInput
    /**
     * Limit how many LiveChatWidgetSettings to update.
     */
    limit?: number
  }

  /**
   * LiveChatWidgetSetting updateManyAndReturn
   */
  export type LiveChatWidgetSettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatWidgetSetting
     */
    select?: LiveChatWidgetSettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatWidgetSetting
     */
    omit?: LiveChatWidgetSettingOmit<ExtArgs> | null
    /**
     * The data used to update LiveChatWidgetSettings.
     */
    data: XOR<LiveChatWidgetSettingUpdateManyMutationInput, LiveChatWidgetSettingUncheckedUpdateManyInput>
    /**
     * Filter which LiveChatWidgetSettings to update
     */
    where?: LiveChatWidgetSettingWhereInput
    /**
     * Limit how many LiveChatWidgetSettings to update.
     */
    limit?: number
  }

  /**
   * LiveChatWidgetSetting upsert
   */
  export type LiveChatWidgetSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatWidgetSetting
     */
    select?: LiveChatWidgetSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatWidgetSetting
     */
    omit?: LiveChatWidgetSettingOmit<ExtArgs> | null
    /**
     * The filter to search for the LiveChatWidgetSetting to update in case it exists.
     */
    where: LiveChatWidgetSettingWhereUniqueInput
    /**
     * In case the LiveChatWidgetSetting found by the `where` argument doesn't exist, create a new LiveChatWidgetSetting with this data.
     */
    create: XOR<LiveChatWidgetSettingCreateInput, LiveChatWidgetSettingUncheckedCreateInput>
    /**
     * In case the LiveChatWidgetSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LiveChatWidgetSettingUpdateInput, LiveChatWidgetSettingUncheckedUpdateInput>
  }

  /**
   * LiveChatWidgetSetting delete
   */
  export type LiveChatWidgetSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatWidgetSetting
     */
    select?: LiveChatWidgetSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatWidgetSetting
     */
    omit?: LiveChatWidgetSettingOmit<ExtArgs> | null
    /**
     * Filter which LiveChatWidgetSetting to delete.
     */
    where: LiveChatWidgetSettingWhereUniqueInput
  }

  /**
   * LiveChatWidgetSetting deleteMany
   */
  export type LiveChatWidgetSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LiveChatWidgetSettings to delete
     */
    where?: LiveChatWidgetSettingWhereInput
    /**
     * Limit how many LiveChatWidgetSettings to delete.
     */
    limit?: number
  }

  /**
   * LiveChatWidgetSetting without action
   */
  export type LiveChatWidgetSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatWidgetSetting
     */
    select?: LiveChatWidgetSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatWidgetSetting
     */
    omit?: LiveChatWidgetSettingOmit<ExtArgs> | null
  }


  /**
   * Model LiveChatStatistics
   */

  export type AggregateLiveChatStatistics = {
    _count: LiveChatStatisticsCountAggregateOutputType | null
    _avg: LiveChatStatisticsAvgAggregateOutputType | null
    _sum: LiveChatStatisticsSumAggregateOutputType | null
    _min: LiveChatStatisticsMinAggregateOutputType | null
    _max: LiveChatStatisticsMaxAggregateOutputType | null
  }

  export type LiveChatStatisticsAvgAggregateOutputType = {
    totalChats: number | null
    activeChats: number | null
    resolvedChats: number | null
    missedChats: number | null
    avgResponseTime: number | null
  }

  export type LiveChatStatisticsSumAggregateOutputType = {
    totalChats: number | null
    activeChats: number | null
    resolvedChats: number | null
    missedChats: number | null
    avgResponseTime: number | null
  }

  export type LiveChatStatisticsMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    totalChats: number | null
    activeChats: number | null
    resolvedChats: number | null
    missedChats: number | null
    avgResponseTime: number | null
    date: Date | null
    createdAt: Date | null
  }

  export type LiveChatStatisticsMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    totalChats: number | null
    activeChats: number | null
    resolvedChats: number | null
    missedChats: number | null
    avgResponseTime: number | null
    date: Date | null
    createdAt: Date | null
  }

  export type LiveChatStatisticsCountAggregateOutputType = {
    id: number
    organizationId: number
    totalChats: number
    activeChats: number
    resolvedChats: number
    missedChats: number
    avgResponseTime: number
    date: number
    createdAt: number
    _all: number
  }


  export type LiveChatStatisticsAvgAggregateInputType = {
    totalChats?: true
    activeChats?: true
    resolvedChats?: true
    missedChats?: true
    avgResponseTime?: true
  }

  export type LiveChatStatisticsSumAggregateInputType = {
    totalChats?: true
    activeChats?: true
    resolvedChats?: true
    missedChats?: true
    avgResponseTime?: true
  }

  export type LiveChatStatisticsMinAggregateInputType = {
    id?: true
    organizationId?: true
    totalChats?: true
    activeChats?: true
    resolvedChats?: true
    missedChats?: true
    avgResponseTime?: true
    date?: true
    createdAt?: true
  }

  export type LiveChatStatisticsMaxAggregateInputType = {
    id?: true
    organizationId?: true
    totalChats?: true
    activeChats?: true
    resolvedChats?: true
    missedChats?: true
    avgResponseTime?: true
    date?: true
    createdAt?: true
  }

  export type LiveChatStatisticsCountAggregateInputType = {
    id?: true
    organizationId?: true
    totalChats?: true
    activeChats?: true
    resolvedChats?: true
    missedChats?: true
    avgResponseTime?: true
    date?: true
    createdAt?: true
    _all?: true
  }

  export type LiveChatStatisticsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LiveChatStatistics to aggregate.
     */
    where?: LiveChatStatisticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveChatStatistics to fetch.
     */
    orderBy?: LiveChatStatisticsOrderByWithRelationInput | LiveChatStatisticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LiveChatStatisticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveChatStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveChatStatistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LiveChatStatistics
    **/
    _count?: true | LiveChatStatisticsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LiveChatStatisticsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LiveChatStatisticsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LiveChatStatisticsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LiveChatStatisticsMaxAggregateInputType
  }

  export type GetLiveChatStatisticsAggregateType<T extends LiveChatStatisticsAggregateArgs> = {
        [P in keyof T & keyof AggregateLiveChatStatistics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLiveChatStatistics[P]>
      : GetScalarType<T[P], AggregateLiveChatStatistics[P]>
  }




  export type LiveChatStatisticsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LiveChatStatisticsWhereInput
    orderBy?: LiveChatStatisticsOrderByWithAggregationInput | LiveChatStatisticsOrderByWithAggregationInput[]
    by: LiveChatStatisticsScalarFieldEnum[] | LiveChatStatisticsScalarFieldEnum
    having?: LiveChatStatisticsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LiveChatStatisticsCountAggregateInputType | true
    _avg?: LiveChatStatisticsAvgAggregateInputType
    _sum?: LiveChatStatisticsSumAggregateInputType
    _min?: LiveChatStatisticsMinAggregateInputType
    _max?: LiveChatStatisticsMaxAggregateInputType
  }

  export type LiveChatStatisticsGroupByOutputType = {
    id: string
    organizationId: string | null
    totalChats: number
    activeChats: number
    resolvedChats: number
    missedChats: number
    avgResponseTime: number
    date: Date
    createdAt: Date
    _count: LiveChatStatisticsCountAggregateOutputType | null
    _avg: LiveChatStatisticsAvgAggregateOutputType | null
    _sum: LiveChatStatisticsSumAggregateOutputType | null
    _min: LiveChatStatisticsMinAggregateOutputType | null
    _max: LiveChatStatisticsMaxAggregateOutputType | null
  }

  type GetLiveChatStatisticsGroupByPayload<T extends LiveChatStatisticsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LiveChatStatisticsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LiveChatStatisticsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LiveChatStatisticsGroupByOutputType[P]>
            : GetScalarType<T[P], LiveChatStatisticsGroupByOutputType[P]>
        }
      >
    >


  export type LiveChatStatisticsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    totalChats?: boolean
    activeChats?: boolean
    resolvedChats?: boolean
    missedChats?: boolean
    avgResponseTime?: boolean
    date?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["liveChatStatistics"]>

  export type LiveChatStatisticsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    totalChats?: boolean
    activeChats?: boolean
    resolvedChats?: boolean
    missedChats?: boolean
    avgResponseTime?: boolean
    date?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["liveChatStatistics"]>

  export type LiveChatStatisticsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    totalChats?: boolean
    activeChats?: boolean
    resolvedChats?: boolean
    missedChats?: boolean
    avgResponseTime?: boolean
    date?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["liveChatStatistics"]>

  export type LiveChatStatisticsSelectScalar = {
    id?: boolean
    organizationId?: boolean
    totalChats?: boolean
    activeChats?: boolean
    resolvedChats?: boolean
    missedChats?: boolean
    avgResponseTime?: boolean
    date?: boolean
    createdAt?: boolean
  }

  export type LiveChatStatisticsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "totalChats" | "activeChats" | "resolvedChats" | "missedChats" | "avgResponseTime" | "date" | "createdAt", ExtArgs["result"]["liveChatStatistics"]>

  export type $LiveChatStatisticsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LiveChatStatistics"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string | null
      totalChats: number
      activeChats: number
      resolvedChats: number
      missedChats: number
      avgResponseTime: number
      date: Date
      createdAt: Date
    }, ExtArgs["result"]["liveChatStatistics"]>
    composites: {}
  }

  type LiveChatStatisticsGetPayload<S extends boolean | null | undefined | LiveChatStatisticsDefaultArgs> = $Result.GetResult<Prisma.$LiveChatStatisticsPayload, S>

  type LiveChatStatisticsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LiveChatStatisticsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LiveChatStatisticsCountAggregateInputType | true
    }

  export interface LiveChatStatisticsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LiveChatStatistics'], meta: { name: 'LiveChatStatistics' } }
    /**
     * Find zero or one LiveChatStatistics that matches the filter.
     * @param {LiveChatStatisticsFindUniqueArgs} args - Arguments to find a LiveChatStatistics
     * @example
     * // Get one LiveChatStatistics
     * const liveChatStatistics = await prisma.liveChatStatistics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LiveChatStatisticsFindUniqueArgs>(args: SelectSubset<T, LiveChatStatisticsFindUniqueArgs<ExtArgs>>): Prisma__LiveChatStatisticsClient<$Result.GetResult<Prisma.$LiveChatStatisticsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LiveChatStatistics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LiveChatStatisticsFindUniqueOrThrowArgs} args - Arguments to find a LiveChatStatistics
     * @example
     * // Get one LiveChatStatistics
     * const liveChatStatistics = await prisma.liveChatStatistics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LiveChatStatisticsFindUniqueOrThrowArgs>(args: SelectSubset<T, LiveChatStatisticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LiveChatStatisticsClient<$Result.GetResult<Prisma.$LiveChatStatisticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LiveChatStatistics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatStatisticsFindFirstArgs} args - Arguments to find a LiveChatStatistics
     * @example
     * // Get one LiveChatStatistics
     * const liveChatStatistics = await prisma.liveChatStatistics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LiveChatStatisticsFindFirstArgs>(args?: SelectSubset<T, LiveChatStatisticsFindFirstArgs<ExtArgs>>): Prisma__LiveChatStatisticsClient<$Result.GetResult<Prisma.$LiveChatStatisticsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LiveChatStatistics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatStatisticsFindFirstOrThrowArgs} args - Arguments to find a LiveChatStatistics
     * @example
     * // Get one LiveChatStatistics
     * const liveChatStatistics = await prisma.liveChatStatistics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LiveChatStatisticsFindFirstOrThrowArgs>(args?: SelectSubset<T, LiveChatStatisticsFindFirstOrThrowArgs<ExtArgs>>): Prisma__LiveChatStatisticsClient<$Result.GetResult<Prisma.$LiveChatStatisticsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LiveChatStatistics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatStatisticsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LiveChatStatistics
     * const liveChatStatistics = await prisma.liveChatStatistics.findMany()
     * 
     * // Get first 10 LiveChatStatistics
     * const liveChatStatistics = await prisma.liveChatStatistics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const liveChatStatisticsWithIdOnly = await prisma.liveChatStatistics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LiveChatStatisticsFindManyArgs>(args?: SelectSubset<T, LiveChatStatisticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiveChatStatisticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LiveChatStatistics.
     * @param {LiveChatStatisticsCreateArgs} args - Arguments to create a LiveChatStatistics.
     * @example
     * // Create one LiveChatStatistics
     * const LiveChatStatistics = await prisma.liveChatStatistics.create({
     *   data: {
     *     // ... data to create a LiveChatStatistics
     *   }
     * })
     * 
     */
    create<T extends LiveChatStatisticsCreateArgs>(args: SelectSubset<T, LiveChatStatisticsCreateArgs<ExtArgs>>): Prisma__LiveChatStatisticsClient<$Result.GetResult<Prisma.$LiveChatStatisticsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LiveChatStatistics.
     * @param {LiveChatStatisticsCreateManyArgs} args - Arguments to create many LiveChatStatistics.
     * @example
     * // Create many LiveChatStatistics
     * const liveChatStatistics = await prisma.liveChatStatistics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LiveChatStatisticsCreateManyArgs>(args?: SelectSubset<T, LiveChatStatisticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LiveChatStatistics and returns the data saved in the database.
     * @param {LiveChatStatisticsCreateManyAndReturnArgs} args - Arguments to create many LiveChatStatistics.
     * @example
     * // Create many LiveChatStatistics
     * const liveChatStatistics = await prisma.liveChatStatistics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LiveChatStatistics and only return the `id`
     * const liveChatStatisticsWithIdOnly = await prisma.liveChatStatistics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LiveChatStatisticsCreateManyAndReturnArgs>(args?: SelectSubset<T, LiveChatStatisticsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiveChatStatisticsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LiveChatStatistics.
     * @param {LiveChatStatisticsDeleteArgs} args - Arguments to delete one LiveChatStatistics.
     * @example
     * // Delete one LiveChatStatistics
     * const LiveChatStatistics = await prisma.liveChatStatistics.delete({
     *   where: {
     *     // ... filter to delete one LiveChatStatistics
     *   }
     * })
     * 
     */
    delete<T extends LiveChatStatisticsDeleteArgs>(args: SelectSubset<T, LiveChatStatisticsDeleteArgs<ExtArgs>>): Prisma__LiveChatStatisticsClient<$Result.GetResult<Prisma.$LiveChatStatisticsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LiveChatStatistics.
     * @param {LiveChatStatisticsUpdateArgs} args - Arguments to update one LiveChatStatistics.
     * @example
     * // Update one LiveChatStatistics
     * const liveChatStatistics = await prisma.liveChatStatistics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LiveChatStatisticsUpdateArgs>(args: SelectSubset<T, LiveChatStatisticsUpdateArgs<ExtArgs>>): Prisma__LiveChatStatisticsClient<$Result.GetResult<Prisma.$LiveChatStatisticsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LiveChatStatistics.
     * @param {LiveChatStatisticsDeleteManyArgs} args - Arguments to filter LiveChatStatistics to delete.
     * @example
     * // Delete a few LiveChatStatistics
     * const { count } = await prisma.liveChatStatistics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LiveChatStatisticsDeleteManyArgs>(args?: SelectSubset<T, LiveChatStatisticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LiveChatStatistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatStatisticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LiveChatStatistics
     * const liveChatStatistics = await prisma.liveChatStatistics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LiveChatStatisticsUpdateManyArgs>(args: SelectSubset<T, LiveChatStatisticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LiveChatStatistics and returns the data updated in the database.
     * @param {LiveChatStatisticsUpdateManyAndReturnArgs} args - Arguments to update many LiveChatStatistics.
     * @example
     * // Update many LiveChatStatistics
     * const liveChatStatistics = await prisma.liveChatStatistics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LiveChatStatistics and only return the `id`
     * const liveChatStatisticsWithIdOnly = await prisma.liveChatStatistics.updateManyAndReturn({
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
    updateManyAndReturn<T extends LiveChatStatisticsUpdateManyAndReturnArgs>(args: SelectSubset<T, LiveChatStatisticsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiveChatStatisticsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LiveChatStatistics.
     * @param {LiveChatStatisticsUpsertArgs} args - Arguments to update or create a LiveChatStatistics.
     * @example
     * // Update or create a LiveChatStatistics
     * const liveChatStatistics = await prisma.liveChatStatistics.upsert({
     *   create: {
     *     // ... data to create a LiveChatStatistics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LiveChatStatistics we want to update
     *   }
     * })
     */
    upsert<T extends LiveChatStatisticsUpsertArgs>(args: SelectSubset<T, LiveChatStatisticsUpsertArgs<ExtArgs>>): Prisma__LiveChatStatisticsClient<$Result.GetResult<Prisma.$LiveChatStatisticsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LiveChatStatistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatStatisticsCountArgs} args - Arguments to filter LiveChatStatistics to count.
     * @example
     * // Count the number of LiveChatStatistics
     * const count = await prisma.liveChatStatistics.count({
     *   where: {
     *     // ... the filter for the LiveChatStatistics we want to count
     *   }
     * })
    **/
    count<T extends LiveChatStatisticsCountArgs>(
      args?: Subset<T, LiveChatStatisticsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LiveChatStatisticsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LiveChatStatistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatStatisticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LiveChatStatisticsAggregateArgs>(args: Subset<T, LiveChatStatisticsAggregateArgs>): Prisma.PrismaPromise<GetLiveChatStatisticsAggregateType<T>>

    /**
     * Group by LiveChatStatistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveChatStatisticsGroupByArgs} args - Group by arguments.
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
      T extends LiveChatStatisticsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LiveChatStatisticsGroupByArgs['orderBy'] }
        : { orderBy?: LiveChatStatisticsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LiveChatStatisticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLiveChatStatisticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LiveChatStatistics model
   */
  readonly fields: LiveChatStatisticsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LiveChatStatistics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LiveChatStatisticsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the LiveChatStatistics model
   */
  interface LiveChatStatisticsFieldRefs {
    readonly id: FieldRef<"LiveChatStatistics", 'String'>
    readonly organizationId: FieldRef<"LiveChatStatistics", 'String'>
    readonly totalChats: FieldRef<"LiveChatStatistics", 'Int'>
    readonly activeChats: FieldRef<"LiveChatStatistics", 'Int'>
    readonly resolvedChats: FieldRef<"LiveChatStatistics", 'Int'>
    readonly missedChats: FieldRef<"LiveChatStatistics", 'Int'>
    readonly avgResponseTime: FieldRef<"LiveChatStatistics", 'Int'>
    readonly date: FieldRef<"LiveChatStatistics", 'DateTime'>
    readonly createdAt: FieldRef<"LiveChatStatistics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LiveChatStatistics findUnique
   */
  export type LiveChatStatisticsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatStatistics
     */
    select?: LiveChatStatisticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatStatistics
     */
    omit?: LiveChatStatisticsOmit<ExtArgs> | null
    /**
     * Filter, which LiveChatStatistics to fetch.
     */
    where: LiveChatStatisticsWhereUniqueInput
  }

  /**
   * LiveChatStatistics findUniqueOrThrow
   */
  export type LiveChatStatisticsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatStatistics
     */
    select?: LiveChatStatisticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatStatistics
     */
    omit?: LiveChatStatisticsOmit<ExtArgs> | null
    /**
     * Filter, which LiveChatStatistics to fetch.
     */
    where: LiveChatStatisticsWhereUniqueInput
  }

  /**
   * LiveChatStatistics findFirst
   */
  export type LiveChatStatisticsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatStatistics
     */
    select?: LiveChatStatisticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatStatistics
     */
    omit?: LiveChatStatisticsOmit<ExtArgs> | null
    /**
     * Filter, which LiveChatStatistics to fetch.
     */
    where?: LiveChatStatisticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveChatStatistics to fetch.
     */
    orderBy?: LiveChatStatisticsOrderByWithRelationInput | LiveChatStatisticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LiveChatStatistics.
     */
    cursor?: LiveChatStatisticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveChatStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveChatStatistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LiveChatStatistics.
     */
    distinct?: LiveChatStatisticsScalarFieldEnum | LiveChatStatisticsScalarFieldEnum[]
  }

  /**
   * LiveChatStatistics findFirstOrThrow
   */
  export type LiveChatStatisticsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatStatistics
     */
    select?: LiveChatStatisticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatStatistics
     */
    omit?: LiveChatStatisticsOmit<ExtArgs> | null
    /**
     * Filter, which LiveChatStatistics to fetch.
     */
    where?: LiveChatStatisticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveChatStatistics to fetch.
     */
    orderBy?: LiveChatStatisticsOrderByWithRelationInput | LiveChatStatisticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LiveChatStatistics.
     */
    cursor?: LiveChatStatisticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveChatStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveChatStatistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LiveChatStatistics.
     */
    distinct?: LiveChatStatisticsScalarFieldEnum | LiveChatStatisticsScalarFieldEnum[]
  }

  /**
   * LiveChatStatistics findMany
   */
  export type LiveChatStatisticsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatStatistics
     */
    select?: LiveChatStatisticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatStatistics
     */
    omit?: LiveChatStatisticsOmit<ExtArgs> | null
    /**
     * Filter, which LiveChatStatistics to fetch.
     */
    where?: LiveChatStatisticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveChatStatistics to fetch.
     */
    orderBy?: LiveChatStatisticsOrderByWithRelationInput | LiveChatStatisticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LiveChatStatistics.
     */
    cursor?: LiveChatStatisticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveChatStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveChatStatistics.
     */
    skip?: number
    distinct?: LiveChatStatisticsScalarFieldEnum | LiveChatStatisticsScalarFieldEnum[]
  }

  /**
   * LiveChatStatistics create
   */
  export type LiveChatStatisticsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatStatistics
     */
    select?: LiveChatStatisticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatStatistics
     */
    omit?: LiveChatStatisticsOmit<ExtArgs> | null
    /**
     * The data needed to create a LiveChatStatistics.
     */
    data: XOR<LiveChatStatisticsCreateInput, LiveChatStatisticsUncheckedCreateInput>
  }

  /**
   * LiveChatStatistics createMany
   */
  export type LiveChatStatisticsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LiveChatStatistics.
     */
    data: LiveChatStatisticsCreateManyInput | LiveChatStatisticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LiveChatStatistics createManyAndReturn
   */
  export type LiveChatStatisticsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatStatistics
     */
    select?: LiveChatStatisticsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatStatistics
     */
    omit?: LiveChatStatisticsOmit<ExtArgs> | null
    /**
     * The data used to create many LiveChatStatistics.
     */
    data: LiveChatStatisticsCreateManyInput | LiveChatStatisticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LiveChatStatistics update
   */
  export type LiveChatStatisticsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatStatistics
     */
    select?: LiveChatStatisticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatStatistics
     */
    omit?: LiveChatStatisticsOmit<ExtArgs> | null
    /**
     * The data needed to update a LiveChatStatistics.
     */
    data: XOR<LiveChatStatisticsUpdateInput, LiveChatStatisticsUncheckedUpdateInput>
    /**
     * Choose, which LiveChatStatistics to update.
     */
    where: LiveChatStatisticsWhereUniqueInput
  }

  /**
   * LiveChatStatistics updateMany
   */
  export type LiveChatStatisticsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LiveChatStatistics.
     */
    data: XOR<LiveChatStatisticsUpdateManyMutationInput, LiveChatStatisticsUncheckedUpdateManyInput>
    /**
     * Filter which LiveChatStatistics to update
     */
    where?: LiveChatStatisticsWhereInput
    /**
     * Limit how many LiveChatStatistics to update.
     */
    limit?: number
  }

  /**
   * LiveChatStatistics updateManyAndReturn
   */
  export type LiveChatStatisticsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatStatistics
     */
    select?: LiveChatStatisticsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatStatistics
     */
    omit?: LiveChatStatisticsOmit<ExtArgs> | null
    /**
     * The data used to update LiveChatStatistics.
     */
    data: XOR<LiveChatStatisticsUpdateManyMutationInput, LiveChatStatisticsUncheckedUpdateManyInput>
    /**
     * Filter which LiveChatStatistics to update
     */
    where?: LiveChatStatisticsWhereInput
    /**
     * Limit how many LiveChatStatistics to update.
     */
    limit?: number
  }

  /**
   * LiveChatStatistics upsert
   */
  export type LiveChatStatisticsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatStatistics
     */
    select?: LiveChatStatisticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatStatistics
     */
    omit?: LiveChatStatisticsOmit<ExtArgs> | null
    /**
     * The filter to search for the LiveChatStatistics to update in case it exists.
     */
    where: LiveChatStatisticsWhereUniqueInput
    /**
     * In case the LiveChatStatistics found by the `where` argument doesn't exist, create a new LiveChatStatistics with this data.
     */
    create: XOR<LiveChatStatisticsCreateInput, LiveChatStatisticsUncheckedCreateInput>
    /**
     * In case the LiveChatStatistics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LiveChatStatisticsUpdateInput, LiveChatStatisticsUncheckedUpdateInput>
  }

  /**
   * LiveChatStatistics delete
   */
  export type LiveChatStatisticsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatStatistics
     */
    select?: LiveChatStatisticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatStatistics
     */
    omit?: LiveChatStatisticsOmit<ExtArgs> | null
    /**
     * Filter which LiveChatStatistics to delete.
     */
    where: LiveChatStatisticsWhereUniqueInput
  }

  /**
   * LiveChatStatistics deleteMany
   */
  export type LiveChatStatisticsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LiveChatStatistics to delete
     */
    where?: LiveChatStatisticsWhereInput
    /**
     * Limit how many LiveChatStatistics to delete.
     */
    limit?: number
  }

  /**
   * LiveChatStatistics without action
   */
  export type LiveChatStatisticsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveChatStatistics
     */
    select?: LiveChatStatisticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LiveChatStatistics
     */
    omit?: LiveChatStatisticsOmit<ExtArgs> | null
  }


  /**
   * Model SocketConnection
   */

  export type AggregateSocketConnection = {
    _count: SocketConnectionCountAggregateOutputType | null
    _min: SocketConnectionMinAggregateOutputType | null
    _max: SocketConnectionMaxAggregateOutputType | null
  }

  export type SocketConnectionMinAggregateOutputType = {
    id: string | null
    socketId: string | null
    userId: string | null
    organizationId: string | null
    contactId: string | null
    deviceType: string | null
    connectedAt: Date | null
    disconnectedAt: Date | null
  }

  export type SocketConnectionMaxAggregateOutputType = {
    id: string | null
    socketId: string | null
    userId: string | null
    organizationId: string | null
    contactId: string | null
    deviceType: string | null
    connectedAt: Date | null
    disconnectedAt: Date | null
  }

  export type SocketConnectionCountAggregateOutputType = {
    id: number
    socketId: number
    userId: number
    organizationId: number
    contactId: number
    deviceType: number
    metadata: number
    connectedAt: number
    disconnectedAt: number
    _all: number
  }


  export type SocketConnectionMinAggregateInputType = {
    id?: true
    socketId?: true
    userId?: true
    organizationId?: true
    contactId?: true
    deviceType?: true
    connectedAt?: true
    disconnectedAt?: true
  }

  export type SocketConnectionMaxAggregateInputType = {
    id?: true
    socketId?: true
    userId?: true
    organizationId?: true
    contactId?: true
    deviceType?: true
    connectedAt?: true
    disconnectedAt?: true
  }

  export type SocketConnectionCountAggregateInputType = {
    id?: true
    socketId?: true
    userId?: true
    organizationId?: true
    contactId?: true
    deviceType?: true
    metadata?: true
    connectedAt?: true
    disconnectedAt?: true
    _all?: true
  }

  export type SocketConnectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocketConnection to aggregate.
     */
    where?: SocketConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocketConnections to fetch.
     */
    orderBy?: SocketConnectionOrderByWithRelationInput | SocketConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocketConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocketConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocketConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocketConnections
    **/
    _count?: true | SocketConnectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocketConnectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocketConnectionMaxAggregateInputType
  }

  export type GetSocketConnectionAggregateType<T extends SocketConnectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSocketConnection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocketConnection[P]>
      : GetScalarType<T[P], AggregateSocketConnection[P]>
  }




  export type SocketConnectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocketConnectionWhereInput
    orderBy?: SocketConnectionOrderByWithAggregationInput | SocketConnectionOrderByWithAggregationInput[]
    by: SocketConnectionScalarFieldEnum[] | SocketConnectionScalarFieldEnum
    having?: SocketConnectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocketConnectionCountAggregateInputType | true
    _min?: SocketConnectionMinAggregateInputType
    _max?: SocketConnectionMaxAggregateInputType
  }

  export type SocketConnectionGroupByOutputType = {
    id: string
    socketId: string
    userId: string | null
    organizationId: string | null
    contactId: string | null
    deviceType: string | null
    metadata: JsonValue | null
    connectedAt: Date
    disconnectedAt: Date | null
    _count: SocketConnectionCountAggregateOutputType | null
    _min: SocketConnectionMinAggregateOutputType | null
    _max: SocketConnectionMaxAggregateOutputType | null
  }

  type GetSocketConnectionGroupByPayload<T extends SocketConnectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocketConnectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocketConnectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocketConnectionGroupByOutputType[P]>
            : GetScalarType<T[P], SocketConnectionGroupByOutputType[P]>
        }
      >
    >


  export type SocketConnectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    socketId?: boolean
    userId?: boolean
    organizationId?: boolean
    contactId?: boolean
    deviceType?: boolean
    metadata?: boolean
    connectedAt?: boolean
    disconnectedAt?: boolean
  }, ExtArgs["result"]["socketConnection"]>

  export type SocketConnectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    socketId?: boolean
    userId?: boolean
    organizationId?: boolean
    contactId?: boolean
    deviceType?: boolean
    metadata?: boolean
    connectedAt?: boolean
    disconnectedAt?: boolean
  }, ExtArgs["result"]["socketConnection"]>

  export type SocketConnectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    socketId?: boolean
    userId?: boolean
    organizationId?: boolean
    contactId?: boolean
    deviceType?: boolean
    metadata?: boolean
    connectedAt?: boolean
    disconnectedAt?: boolean
  }, ExtArgs["result"]["socketConnection"]>

  export type SocketConnectionSelectScalar = {
    id?: boolean
    socketId?: boolean
    userId?: boolean
    organizationId?: boolean
    contactId?: boolean
    deviceType?: boolean
    metadata?: boolean
    connectedAt?: boolean
    disconnectedAt?: boolean
  }

  export type SocketConnectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "socketId" | "userId" | "organizationId" | "contactId" | "deviceType" | "metadata" | "connectedAt" | "disconnectedAt", ExtArgs["result"]["socketConnection"]>

  export type $SocketConnectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocketConnection"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      socketId: string
      userId: string | null
      organizationId: string | null
      contactId: string | null
      deviceType: string | null
      metadata: Prisma.JsonValue | null
      connectedAt: Date
      disconnectedAt: Date | null
    }, ExtArgs["result"]["socketConnection"]>
    composites: {}
  }

  type SocketConnectionGetPayload<S extends boolean | null | undefined | SocketConnectionDefaultArgs> = $Result.GetResult<Prisma.$SocketConnectionPayload, S>

  type SocketConnectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocketConnectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocketConnectionCountAggregateInputType | true
    }

  export interface SocketConnectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocketConnection'], meta: { name: 'SocketConnection' } }
    /**
     * Find zero or one SocketConnection that matches the filter.
     * @param {SocketConnectionFindUniqueArgs} args - Arguments to find a SocketConnection
     * @example
     * // Get one SocketConnection
     * const socketConnection = await prisma.socketConnection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocketConnectionFindUniqueArgs>(args: SelectSubset<T, SocketConnectionFindUniqueArgs<ExtArgs>>): Prisma__SocketConnectionClient<$Result.GetResult<Prisma.$SocketConnectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SocketConnection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocketConnectionFindUniqueOrThrowArgs} args - Arguments to find a SocketConnection
     * @example
     * // Get one SocketConnection
     * const socketConnection = await prisma.socketConnection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocketConnectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SocketConnectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocketConnectionClient<$Result.GetResult<Prisma.$SocketConnectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocketConnection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocketConnectionFindFirstArgs} args - Arguments to find a SocketConnection
     * @example
     * // Get one SocketConnection
     * const socketConnection = await prisma.socketConnection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocketConnectionFindFirstArgs>(args?: SelectSubset<T, SocketConnectionFindFirstArgs<ExtArgs>>): Prisma__SocketConnectionClient<$Result.GetResult<Prisma.$SocketConnectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocketConnection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocketConnectionFindFirstOrThrowArgs} args - Arguments to find a SocketConnection
     * @example
     * // Get one SocketConnection
     * const socketConnection = await prisma.socketConnection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocketConnectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SocketConnectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocketConnectionClient<$Result.GetResult<Prisma.$SocketConnectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SocketConnections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocketConnectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocketConnections
     * const socketConnections = await prisma.socketConnection.findMany()
     * 
     * // Get first 10 SocketConnections
     * const socketConnections = await prisma.socketConnection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socketConnectionWithIdOnly = await prisma.socketConnection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocketConnectionFindManyArgs>(args?: SelectSubset<T, SocketConnectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocketConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SocketConnection.
     * @param {SocketConnectionCreateArgs} args - Arguments to create a SocketConnection.
     * @example
     * // Create one SocketConnection
     * const SocketConnection = await prisma.socketConnection.create({
     *   data: {
     *     // ... data to create a SocketConnection
     *   }
     * })
     * 
     */
    create<T extends SocketConnectionCreateArgs>(args: SelectSubset<T, SocketConnectionCreateArgs<ExtArgs>>): Prisma__SocketConnectionClient<$Result.GetResult<Prisma.$SocketConnectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SocketConnections.
     * @param {SocketConnectionCreateManyArgs} args - Arguments to create many SocketConnections.
     * @example
     * // Create many SocketConnections
     * const socketConnection = await prisma.socketConnection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocketConnectionCreateManyArgs>(args?: SelectSubset<T, SocketConnectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocketConnections and returns the data saved in the database.
     * @param {SocketConnectionCreateManyAndReturnArgs} args - Arguments to create many SocketConnections.
     * @example
     * // Create many SocketConnections
     * const socketConnection = await prisma.socketConnection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocketConnections and only return the `id`
     * const socketConnectionWithIdOnly = await prisma.socketConnection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocketConnectionCreateManyAndReturnArgs>(args?: SelectSubset<T, SocketConnectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocketConnectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SocketConnection.
     * @param {SocketConnectionDeleteArgs} args - Arguments to delete one SocketConnection.
     * @example
     * // Delete one SocketConnection
     * const SocketConnection = await prisma.socketConnection.delete({
     *   where: {
     *     // ... filter to delete one SocketConnection
     *   }
     * })
     * 
     */
    delete<T extends SocketConnectionDeleteArgs>(args: SelectSubset<T, SocketConnectionDeleteArgs<ExtArgs>>): Prisma__SocketConnectionClient<$Result.GetResult<Prisma.$SocketConnectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SocketConnection.
     * @param {SocketConnectionUpdateArgs} args - Arguments to update one SocketConnection.
     * @example
     * // Update one SocketConnection
     * const socketConnection = await prisma.socketConnection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocketConnectionUpdateArgs>(args: SelectSubset<T, SocketConnectionUpdateArgs<ExtArgs>>): Prisma__SocketConnectionClient<$Result.GetResult<Prisma.$SocketConnectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SocketConnections.
     * @param {SocketConnectionDeleteManyArgs} args - Arguments to filter SocketConnections to delete.
     * @example
     * // Delete a few SocketConnections
     * const { count } = await prisma.socketConnection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocketConnectionDeleteManyArgs>(args?: SelectSubset<T, SocketConnectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocketConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocketConnectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocketConnections
     * const socketConnection = await prisma.socketConnection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocketConnectionUpdateManyArgs>(args: SelectSubset<T, SocketConnectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocketConnections and returns the data updated in the database.
     * @param {SocketConnectionUpdateManyAndReturnArgs} args - Arguments to update many SocketConnections.
     * @example
     * // Update many SocketConnections
     * const socketConnection = await prisma.socketConnection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SocketConnections and only return the `id`
     * const socketConnectionWithIdOnly = await prisma.socketConnection.updateManyAndReturn({
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
    updateManyAndReturn<T extends SocketConnectionUpdateManyAndReturnArgs>(args: SelectSubset<T, SocketConnectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocketConnectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SocketConnection.
     * @param {SocketConnectionUpsertArgs} args - Arguments to update or create a SocketConnection.
     * @example
     * // Update or create a SocketConnection
     * const socketConnection = await prisma.socketConnection.upsert({
     *   create: {
     *     // ... data to create a SocketConnection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocketConnection we want to update
     *   }
     * })
     */
    upsert<T extends SocketConnectionUpsertArgs>(args: SelectSubset<T, SocketConnectionUpsertArgs<ExtArgs>>): Prisma__SocketConnectionClient<$Result.GetResult<Prisma.$SocketConnectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SocketConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocketConnectionCountArgs} args - Arguments to filter SocketConnections to count.
     * @example
     * // Count the number of SocketConnections
     * const count = await prisma.socketConnection.count({
     *   where: {
     *     // ... the filter for the SocketConnections we want to count
     *   }
     * })
    **/
    count<T extends SocketConnectionCountArgs>(
      args?: Subset<T, SocketConnectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocketConnectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocketConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocketConnectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocketConnectionAggregateArgs>(args: Subset<T, SocketConnectionAggregateArgs>): Prisma.PrismaPromise<GetSocketConnectionAggregateType<T>>

    /**
     * Group by SocketConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocketConnectionGroupByArgs} args - Group by arguments.
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
      T extends SocketConnectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocketConnectionGroupByArgs['orderBy'] }
        : { orderBy?: SocketConnectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SocketConnectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocketConnectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocketConnection model
   */
  readonly fields: SocketConnectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocketConnection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocketConnectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SocketConnection model
   */
  interface SocketConnectionFieldRefs {
    readonly id: FieldRef<"SocketConnection", 'String'>
    readonly socketId: FieldRef<"SocketConnection", 'String'>
    readonly userId: FieldRef<"SocketConnection", 'String'>
    readonly organizationId: FieldRef<"SocketConnection", 'String'>
    readonly contactId: FieldRef<"SocketConnection", 'String'>
    readonly deviceType: FieldRef<"SocketConnection", 'String'>
    readonly metadata: FieldRef<"SocketConnection", 'Json'>
    readonly connectedAt: FieldRef<"SocketConnection", 'DateTime'>
    readonly disconnectedAt: FieldRef<"SocketConnection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SocketConnection findUnique
   */
  export type SocketConnectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocketConnection
     */
    select?: SocketConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocketConnection
     */
    omit?: SocketConnectionOmit<ExtArgs> | null
    /**
     * Filter, which SocketConnection to fetch.
     */
    where: SocketConnectionWhereUniqueInput
  }

  /**
   * SocketConnection findUniqueOrThrow
   */
  export type SocketConnectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocketConnection
     */
    select?: SocketConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocketConnection
     */
    omit?: SocketConnectionOmit<ExtArgs> | null
    /**
     * Filter, which SocketConnection to fetch.
     */
    where: SocketConnectionWhereUniqueInput
  }

  /**
   * SocketConnection findFirst
   */
  export type SocketConnectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocketConnection
     */
    select?: SocketConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocketConnection
     */
    omit?: SocketConnectionOmit<ExtArgs> | null
    /**
     * Filter, which SocketConnection to fetch.
     */
    where?: SocketConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocketConnections to fetch.
     */
    orderBy?: SocketConnectionOrderByWithRelationInput | SocketConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocketConnections.
     */
    cursor?: SocketConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocketConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocketConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocketConnections.
     */
    distinct?: SocketConnectionScalarFieldEnum | SocketConnectionScalarFieldEnum[]
  }

  /**
   * SocketConnection findFirstOrThrow
   */
  export type SocketConnectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocketConnection
     */
    select?: SocketConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocketConnection
     */
    omit?: SocketConnectionOmit<ExtArgs> | null
    /**
     * Filter, which SocketConnection to fetch.
     */
    where?: SocketConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocketConnections to fetch.
     */
    orderBy?: SocketConnectionOrderByWithRelationInput | SocketConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocketConnections.
     */
    cursor?: SocketConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocketConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocketConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocketConnections.
     */
    distinct?: SocketConnectionScalarFieldEnum | SocketConnectionScalarFieldEnum[]
  }

  /**
   * SocketConnection findMany
   */
  export type SocketConnectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocketConnection
     */
    select?: SocketConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocketConnection
     */
    omit?: SocketConnectionOmit<ExtArgs> | null
    /**
     * Filter, which SocketConnections to fetch.
     */
    where?: SocketConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocketConnections to fetch.
     */
    orderBy?: SocketConnectionOrderByWithRelationInput | SocketConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocketConnections.
     */
    cursor?: SocketConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocketConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocketConnections.
     */
    skip?: number
    distinct?: SocketConnectionScalarFieldEnum | SocketConnectionScalarFieldEnum[]
  }

  /**
   * SocketConnection create
   */
  export type SocketConnectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocketConnection
     */
    select?: SocketConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocketConnection
     */
    omit?: SocketConnectionOmit<ExtArgs> | null
    /**
     * The data needed to create a SocketConnection.
     */
    data: XOR<SocketConnectionCreateInput, SocketConnectionUncheckedCreateInput>
  }

  /**
   * SocketConnection createMany
   */
  export type SocketConnectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocketConnections.
     */
    data: SocketConnectionCreateManyInput | SocketConnectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocketConnection createManyAndReturn
   */
  export type SocketConnectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocketConnection
     */
    select?: SocketConnectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocketConnection
     */
    omit?: SocketConnectionOmit<ExtArgs> | null
    /**
     * The data used to create many SocketConnections.
     */
    data: SocketConnectionCreateManyInput | SocketConnectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocketConnection update
   */
  export type SocketConnectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocketConnection
     */
    select?: SocketConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocketConnection
     */
    omit?: SocketConnectionOmit<ExtArgs> | null
    /**
     * The data needed to update a SocketConnection.
     */
    data: XOR<SocketConnectionUpdateInput, SocketConnectionUncheckedUpdateInput>
    /**
     * Choose, which SocketConnection to update.
     */
    where: SocketConnectionWhereUniqueInput
  }

  /**
   * SocketConnection updateMany
   */
  export type SocketConnectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocketConnections.
     */
    data: XOR<SocketConnectionUpdateManyMutationInput, SocketConnectionUncheckedUpdateManyInput>
    /**
     * Filter which SocketConnections to update
     */
    where?: SocketConnectionWhereInput
    /**
     * Limit how many SocketConnections to update.
     */
    limit?: number
  }

  /**
   * SocketConnection updateManyAndReturn
   */
  export type SocketConnectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocketConnection
     */
    select?: SocketConnectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocketConnection
     */
    omit?: SocketConnectionOmit<ExtArgs> | null
    /**
     * The data used to update SocketConnections.
     */
    data: XOR<SocketConnectionUpdateManyMutationInput, SocketConnectionUncheckedUpdateManyInput>
    /**
     * Filter which SocketConnections to update
     */
    where?: SocketConnectionWhereInput
    /**
     * Limit how many SocketConnections to update.
     */
    limit?: number
  }

  /**
   * SocketConnection upsert
   */
  export type SocketConnectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocketConnection
     */
    select?: SocketConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocketConnection
     */
    omit?: SocketConnectionOmit<ExtArgs> | null
    /**
     * The filter to search for the SocketConnection to update in case it exists.
     */
    where: SocketConnectionWhereUniqueInput
    /**
     * In case the SocketConnection found by the `where` argument doesn't exist, create a new SocketConnection with this data.
     */
    create: XOR<SocketConnectionCreateInput, SocketConnectionUncheckedCreateInput>
    /**
     * In case the SocketConnection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocketConnectionUpdateInput, SocketConnectionUncheckedUpdateInput>
  }

  /**
   * SocketConnection delete
   */
  export type SocketConnectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocketConnection
     */
    select?: SocketConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocketConnection
     */
    omit?: SocketConnectionOmit<ExtArgs> | null
    /**
     * Filter which SocketConnection to delete.
     */
    where: SocketConnectionWhereUniqueInput
  }

  /**
   * SocketConnection deleteMany
   */
  export type SocketConnectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocketConnections to delete
     */
    where?: SocketConnectionWhereInput
    /**
     * Limit how many SocketConnections to delete.
     */
    limit?: number
  }

  /**
   * SocketConnection without action
   */
  export type SocketConnectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocketConnection
     */
    select?: SocketConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocketConnection
     */
    omit?: SocketConnectionOmit<ExtArgs> | null
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


  export const LiveChatChannelScalarFieldEnum: {
    id: 'id',
    adminId: 'adminId',
    organizationId: 'organizationId',
    contactId: 'contactId',
    name: 'name',
    type: 'type',
    isActive: 'isActive',
    lastMessageAt: 'lastMessageAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LiveChatChannelScalarFieldEnum = (typeof LiveChatChannelScalarFieldEnum)[keyof typeof LiveChatChannelScalarFieldEnum]


  export const LiveChatMessageScalarFieldEnum: {
    id: 'id',
    channelId: 'channelId',
    senderId: 'senderId',
    senderType: 'senderType',
    content: 'content',
    messageType: 'messageType',
    metadata: 'metadata',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type LiveChatMessageScalarFieldEnum = (typeof LiveChatMessageScalarFieldEnum)[keyof typeof LiveChatMessageScalarFieldEnum]


  export const LiveChatContactScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    name: 'name',
    email: 'email',
    phone: 'phone',
    avatar: 'avatar',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LiveChatContactScalarFieldEnum = (typeof LiveChatContactScalarFieldEnum)[keyof typeof LiveChatContactScalarFieldEnum]


  export const LiveChatWidgetSettingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    widgetName: 'widgetName',
    primaryColor: 'primaryColor',
    headerTitle: 'headerTitle',
    greetingMessage: 'greetingMessage',
    offlineMessage: 'offlineMessage',
    position: 'position',
    showPowerBy: 'showPowerBy',
    enabled: 'enabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LiveChatWidgetSettingScalarFieldEnum = (typeof LiveChatWidgetSettingScalarFieldEnum)[keyof typeof LiveChatWidgetSettingScalarFieldEnum]


  export const LiveChatStatisticsScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    totalChats: 'totalChats',
    activeChats: 'activeChats',
    resolvedChats: 'resolvedChats',
    missedChats: 'missedChats',
    avgResponseTime: 'avgResponseTime',
    date: 'date',
    createdAt: 'createdAt'
  };

  export type LiveChatStatisticsScalarFieldEnum = (typeof LiveChatStatisticsScalarFieldEnum)[keyof typeof LiveChatStatisticsScalarFieldEnum]


  export const SocketConnectionScalarFieldEnum: {
    id: 'id',
    socketId: 'socketId',
    userId: 'userId',
    organizationId: 'organizationId',
    contactId: 'contactId',
    deviceType: 'deviceType',
    metadata: 'metadata',
    connectedAt: 'connectedAt',
    disconnectedAt: 'disconnectedAt'
  };

  export type SocketConnectionScalarFieldEnum = (typeof SocketConnectionScalarFieldEnum)[keyof typeof SocketConnectionScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type LiveChatChannelWhereInput = {
    AND?: LiveChatChannelWhereInput | LiveChatChannelWhereInput[]
    OR?: LiveChatChannelWhereInput[]
    NOT?: LiveChatChannelWhereInput | LiveChatChannelWhereInput[]
    id?: UuidFilter<"LiveChatChannel"> | string
    adminId?: UuidFilter<"LiveChatChannel"> | string
    organizationId?: UuidNullableFilter<"LiveChatChannel"> | string | null
    contactId?: UuidNullableFilter<"LiveChatChannel"> | string | null
    name?: StringNullableFilter<"LiveChatChannel"> | string | null
    type?: StringFilter<"LiveChatChannel"> | string
    isActive?: BoolFilter<"LiveChatChannel"> | boolean
    lastMessageAt?: DateTimeNullableFilter<"LiveChatChannel"> | Date | string | null
    createdAt?: DateTimeFilter<"LiveChatChannel"> | Date | string
    updatedAt?: DateTimeFilter<"LiveChatChannel"> | Date | string
  }

  export type LiveChatChannelOrderByWithRelationInput = {
    id?: SortOrder
    adminId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    contactId?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    type?: SortOrder
    isActive?: SortOrder
    lastMessageAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LiveChatChannelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LiveChatChannelWhereInput | LiveChatChannelWhereInput[]
    OR?: LiveChatChannelWhereInput[]
    NOT?: LiveChatChannelWhereInput | LiveChatChannelWhereInput[]
    adminId?: UuidFilter<"LiveChatChannel"> | string
    organizationId?: UuidNullableFilter<"LiveChatChannel"> | string | null
    contactId?: UuidNullableFilter<"LiveChatChannel"> | string | null
    name?: StringNullableFilter<"LiveChatChannel"> | string | null
    type?: StringFilter<"LiveChatChannel"> | string
    isActive?: BoolFilter<"LiveChatChannel"> | boolean
    lastMessageAt?: DateTimeNullableFilter<"LiveChatChannel"> | Date | string | null
    createdAt?: DateTimeFilter<"LiveChatChannel"> | Date | string
    updatedAt?: DateTimeFilter<"LiveChatChannel"> | Date | string
  }, "id">

  export type LiveChatChannelOrderByWithAggregationInput = {
    id?: SortOrder
    adminId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    contactId?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    type?: SortOrder
    isActive?: SortOrder
    lastMessageAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LiveChatChannelCountOrderByAggregateInput
    _max?: LiveChatChannelMaxOrderByAggregateInput
    _min?: LiveChatChannelMinOrderByAggregateInput
  }

  export type LiveChatChannelScalarWhereWithAggregatesInput = {
    AND?: LiveChatChannelScalarWhereWithAggregatesInput | LiveChatChannelScalarWhereWithAggregatesInput[]
    OR?: LiveChatChannelScalarWhereWithAggregatesInput[]
    NOT?: LiveChatChannelScalarWhereWithAggregatesInput | LiveChatChannelScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"LiveChatChannel"> | string
    adminId?: UuidWithAggregatesFilter<"LiveChatChannel"> | string
    organizationId?: UuidNullableWithAggregatesFilter<"LiveChatChannel"> | string | null
    contactId?: UuidNullableWithAggregatesFilter<"LiveChatChannel"> | string | null
    name?: StringNullableWithAggregatesFilter<"LiveChatChannel"> | string | null
    type?: StringWithAggregatesFilter<"LiveChatChannel"> | string
    isActive?: BoolWithAggregatesFilter<"LiveChatChannel"> | boolean
    lastMessageAt?: DateTimeNullableWithAggregatesFilter<"LiveChatChannel"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LiveChatChannel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LiveChatChannel"> | Date | string
  }

  export type LiveChatMessageWhereInput = {
    AND?: LiveChatMessageWhereInput | LiveChatMessageWhereInput[]
    OR?: LiveChatMessageWhereInput[]
    NOT?: LiveChatMessageWhereInput | LiveChatMessageWhereInput[]
    id?: UuidFilter<"LiveChatMessage"> | string
    channelId?: UuidFilter<"LiveChatMessage"> | string
    senderId?: UuidFilter<"LiveChatMessage"> | string
    senderType?: StringFilter<"LiveChatMessage"> | string
    content?: StringFilter<"LiveChatMessage"> | string
    messageType?: StringFilter<"LiveChatMessage"> | string
    metadata?: JsonNullableFilter<"LiveChatMessage">
    isRead?: BoolFilter<"LiveChatMessage"> | boolean
    createdAt?: DateTimeFilter<"LiveChatMessage"> | Date | string
  }

  export type LiveChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    channelId?: SortOrder
    senderId?: SortOrder
    senderType?: SortOrder
    content?: SortOrder
    messageType?: SortOrder
    metadata?: SortOrderInput | SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type LiveChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LiveChatMessageWhereInput | LiveChatMessageWhereInput[]
    OR?: LiveChatMessageWhereInput[]
    NOT?: LiveChatMessageWhereInput | LiveChatMessageWhereInput[]
    channelId?: UuidFilter<"LiveChatMessage"> | string
    senderId?: UuidFilter<"LiveChatMessage"> | string
    senderType?: StringFilter<"LiveChatMessage"> | string
    content?: StringFilter<"LiveChatMessage"> | string
    messageType?: StringFilter<"LiveChatMessage"> | string
    metadata?: JsonNullableFilter<"LiveChatMessage">
    isRead?: BoolFilter<"LiveChatMessage"> | boolean
    createdAt?: DateTimeFilter<"LiveChatMessage"> | Date | string
  }, "id">

  export type LiveChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    channelId?: SortOrder
    senderId?: SortOrder
    senderType?: SortOrder
    content?: SortOrder
    messageType?: SortOrder
    metadata?: SortOrderInput | SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: LiveChatMessageCountOrderByAggregateInput
    _max?: LiveChatMessageMaxOrderByAggregateInput
    _min?: LiveChatMessageMinOrderByAggregateInput
  }

  export type LiveChatMessageScalarWhereWithAggregatesInput = {
    AND?: LiveChatMessageScalarWhereWithAggregatesInput | LiveChatMessageScalarWhereWithAggregatesInput[]
    OR?: LiveChatMessageScalarWhereWithAggregatesInput[]
    NOT?: LiveChatMessageScalarWhereWithAggregatesInput | LiveChatMessageScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"LiveChatMessage"> | string
    channelId?: UuidWithAggregatesFilter<"LiveChatMessage"> | string
    senderId?: UuidWithAggregatesFilter<"LiveChatMessage"> | string
    senderType?: StringWithAggregatesFilter<"LiveChatMessage"> | string
    content?: StringWithAggregatesFilter<"LiveChatMessage"> | string
    messageType?: StringWithAggregatesFilter<"LiveChatMessage"> | string
    metadata?: JsonNullableWithAggregatesFilter<"LiveChatMessage">
    isRead?: BoolWithAggregatesFilter<"LiveChatMessage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"LiveChatMessage"> | Date | string
  }

  export type LiveChatContactWhereInput = {
    AND?: LiveChatContactWhereInput | LiveChatContactWhereInput[]
    OR?: LiveChatContactWhereInput[]
    NOT?: LiveChatContactWhereInput | LiveChatContactWhereInput[]
    id?: UuidFilter<"LiveChatContact"> | string
    userId?: UuidFilter<"LiveChatContact"> | string
    organizationId?: UuidNullableFilter<"LiveChatContact"> | string | null
    name?: StringNullableFilter<"LiveChatContact"> | string | null
    email?: StringNullableFilter<"LiveChatContact"> | string | null
    phone?: StringNullableFilter<"LiveChatContact"> | string | null
    avatar?: StringNullableFilter<"LiveChatContact"> | string | null
    metadata?: JsonNullableFilter<"LiveChatContact">
    createdAt?: DateTimeFilter<"LiveChatContact"> | Date | string
    updatedAt?: DateTimeFilter<"LiveChatContact"> | Date | string
  }

  export type LiveChatContactOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LiveChatContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LiveChatContactWhereInput | LiveChatContactWhereInput[]
    OR?: LiveChatContactWhereInput[]
    NOT?: LiveChatContactWhereInput | LiveChatContactWhereInput[]
    userId?: UuidFilter<"LiveChatContact"> | string
    organizationId?: UuidNullableFilter<"LiveChatContact"> | string | null
    name?: StringNullableFilter<"LiveChatContact"> | string | null
    email?: StringNullableFilter<"LiveChatContact"> | string | null
    phone?: StringNullableFilter<"LiveChatContact"> | string | null
    avatar?: StringNullableFilter<"LiveChatContact"> | string | null
    metadata?: JsonNullableFilter<"LiveChatContact">
    createdAt?: DateTimeFilter<"LiveChatContact"> | Date | string
    updatedAt?: DateTimeFilter<"LiveChatContact"> | Date | string
  }, "id">

  export type LiveChatContactOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LiveChatContactCountOrderByAggregateInput
    _max?: LiveChatContactMaxOrderByAggregateInput
    _min?: LiveChatContactMinOrderByAggregateInput
  }

  export type LiveChatContactScalarWhereWithAggregatesInput = {
    AND?: LiveChatContactScalarWhereWithAggregatesInput | LiveChatContactScalarWhereWithAggregatesInput[]
    OR?: LiveChatContactScalarWhereWithAggregatesInput[]
    NOT?: LiveChatContactScalarWhereWithAggregatesInput | LiveChatContactScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"LiveChatContact"> | string
    userId?: UuidWithAggregatesFilter<"LiveChatContact"> | string
    organizationId?: UuidNullableWithAggregatesFilter<"LiveChatContact"> | string | null
    name?: StringNullableWithAggregatesFilter<"LiveChatContact"> | string | null
    email?: StringNullableWithAggregatesFilter<"LiveChatContact"> | string | null
    phone?: StringNullableWithAggregatesFilter<"LiveChatContact"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"LiveChatContact"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"LiveChatContact">
    createdAt?: DateTimeWithAggregatesFilter<"LiveChatContact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LiveChatContact"> | Date | string
  }

  export type LiveChatWidgetSettingWhereInput = {
    AND?: LiveChatWidgetSettingWhereInput | LiveChatWidgetSettingWhereInput[]
    OR?: LiveChatWidgetSettingWhereInput[]
    NOT?: LiveChatWidgetSettingWhereInput | LiveChatWidgetSettingWhereInput[]
    id?: UuidFilter<"LiveChatWidgetSetting"> | string
    userId?: UuidFilter<"LiveChatWidgetSetting"> | string
    organizationId?: UuidNullableFilter<"LiveChatWidgetSetting"> | string | null
    widgetName?: StringNullableFilter<"LiveChatWidgetSetting"> | string | null
    primaryColor?: StringFilter<"LiveChatWidgetSetting"> | string
    headerTitle?: StringFilter<"LiveChatWidgetSetting"> | string
    greetingMessage?: StringNullableFilter<"LiveChatWidgetSetting"> | string | null
    offlineMessage?: StringNullableFilter<"LiveChatWidgetSetting"> | string | null
    position?: StringFilter<"LiveChatWidgetSetting"> | string
    showPowerBy?: BoolFilter<"LiveChatWidgetSetting"> | boolean
    enabled?: BoolFilter<"LiveChatWidgetSetting"> | boolean
    createdAt?: DateTimeFilter<"LiveChatWidgetSetting"> | Date | string
    updatedAt?: DateTimeFilter<"LiveChatWidgetSetting"> | Date | string
  }

  export type LiveChatWidgetSettingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    widgetName?: SortOrderInput | SortOrder
    primaryColor?: SortOrder
    headerTitle?: SortOrder
    greetingMessage?: SortOrderInput | SortOrder
    offlineMessage?: SortOrderInput | SortOrder
    position?: SortOrder
    showPowerBy?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LiveChatWidgetSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LiveChatWidgetSettingWhereInput | LiveChatWidgetSettingWhereInput[]
    OR?: LiveChatWidgetSettingWhereInput[]
    NOT?: LiveChatWidgetSettingWhereInput | LiveChatWidgetSettingWhereInput[]
    userId?: UuidFilter<"LiveChatWidgetSetting"> | string
    organizationId?: UuidNullableFilter<"LiveChatWidgetSetting"> | string | null
    widgetName?: StringNullableFilter<"LiveChatWidgetSetting"> | string | null
    primaryColor?: StringFilter<"LiveChatWidgetSetting"> | string
    headerTitle?: StringFilter<"LiveChatWidgetSetting"> | string
    greetingMessage?: StringNullableFilter<"LiveChatWidgetSetting"> | string | null
    offlineMessage?: StringNullableFilter<"LiveChatWidgetSetting"> | string | null
    position?: StringFilter<"LiveChatWidgetSetting"> | string
    showPowerBy?: BoolFilter<"LiveChatWidgetSetting"> | boolean
    enabled?: BoolFilter<"LiveChatWidgetSetting"> | boolean
    createdAt?: DateTimeFilter<"LiveChatWidgetSetting"> | Date | string
    updatedAt?: DateTimeFilter<"LiveChatWidgetSetting"> | Date | string
  }, "id">

  export type LiveChatWidgetSettingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    widgetName?: SortOrderInput | SortOrder
    primaryColor?: SortOrder
    headerTitle?: SortOrder
    greetingMessage?: SortOrderInput | SortOrder
    offlineMessage?: SortOrderInput | SortOrder
    position?: SortOrder
    showPowerBy?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LiveChatWidgetSettingCountOrderByAggregateInput
    _max?: LiveChatWidgetSettingMaxOrderByAggregateInput
    _min?: LiveChatWidgetSettingMinOrderByAggregateInput
  }

  export type LiveChatWidgetSettingScalarWhereWithAggregatesInput = {
    AND?: LiveChatWidgetSettingScalarWhereWithAggregatesInput | LiveChatWidgetSettingScalarWhereWithAggregatesInput[]
    OR?: LiveChatWidgetSettingScalarWhereWithAggregatesInput[]
    NOT?: LiveChatWidgetSettingScalarWhereWithAggregatesInput | LiveChatWidgetSettingScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"LiveChatWidgetSetting"> | string
    userId?: UuidWithAggregatesFilter<"LiveChatWidgetSetting"> | string
    organizationId?: UuidNullableWithAggregatesFilter<"LiveChatWidgetSetting"> | string | null
    widgetName?: StringNullableWithAggregatesFilter<"LiveChatWidgetSetting"> | string | null
    primaryColor?: StringWithAggregatesFilter<"LiveChatWidgetSetting"> | string
    headerTitle?: StringWithAggregatesFilter<"LiveChatWidgetSetting"> | string
    greetingMessage?: StringNullableWithAggregatesFilter<"LiveChatWidgetSetting"> | string | null
    offlineMessage?: StringNullableWithAggregatesFilter<"LiveChatWidgetSetting"> | string | null
    position?: StringWithAggregatesFilter<"LiveChatWidgetSetting"> | string
    showPowerBy?: BoolWithAggregatesFilter<"LiveChatWidgetSetting"> | boolean
    enabled?: BoolWithAggregatesFilter<"LiveChatWidgetSetting"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"LiveChatWidgetSetting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LiveChatWidgetSetting"> | Date | string
  }

  export type LiveChatStatisticsWhereInput = {
    AND?: LiveChatStatisticsWhereInput | LiveChatStatisticsWhereInput[]
    OR?: LiveChatStatisticsWhereInput[]
    NOT?: LiveChatStatisticsWhereInput | LiveChatStatisticsWhereInput[]
    id?: UuidFilter<"LiveChatStatistics"> | string
    organizationId?: UuidNullableFilter<"LiveChatStatistics"> | string | null
    totalChats?: IntFilter<"LiveChatStatistics"> | number
    activeChats?: IntFilter<"LiveChatStatistics"> | number
    resolvedChats?: IntFilter<"LiveChatStatistics"> | number
    missedChats?: IntFilter<"LiveChatStatistics"> | number
    avgResponseTime?: IntFilter<"LiveChatStatistics"> | number
    date?: DateTimeFilter<"LiveChatStatistics"> | Date | string
    createdAt?: DateTimeFilter<"LiveChatStatistics"> | Date | string
  }

  export type LiveChatStatisticsOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    totalChats?: SortOrder
    activeChats?: SortOrder
    resolvedChats?: SortOrder
    missedChats?: SortOrder
    avgResponseTime?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type LiveChatStatisticsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LiveChatStatisticsWhereInput | LiveChatStatisticsWhereInput[]
    OR?: LiveChatStatisticsWhereInput[]
    NOT?: LiveChatStatisticsWhereInput | LiveChatStatisticsWhereInput[]
    organizationId?: UuidNullableFilter<"LiveChatStatistics"> | string | null
    totalChats?: IntFilter<"LiveChatStatistics"> | number
    activeChats?: IntFilter<"LiveChatStatistics"> | number
    resolvedChats?: IntFilter<"LiveChatStatistics"> | number
    missedChats?: IntFilter<"LiveChatStatistics"> | number
    avgResponseTime?: IntFilter<"LiveChatStatistics"> | number
    date?: DateTimeFilter<"LiveChatStatistics"> | Date | string
    createdAt?: DateTimeFilter<"LiveChatStatistics"> | Date | string
  }, "id">

  export type LiveChatStatisticsOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    totalChats?: SortOrder
    activeChats?: SortOrder
    resolvedChats?: SortOrder
    missedChats?: SortOrder
    avgResponseTime?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    _count?: LiveChatStatisticsCountOrderByAggregateInput
    _avg?: LiveChatStatisticsAvgOrderByAggregateInput
    _max?: LiveChatStatisticsMaxOrderByAggregateInput
    _min?: LiveChatStatisticsMinOrderByAggregateInput
    _sum?: LiveChatStatisticsSumOrderByAggregateInput
  }

  export type LiveChatStatisticsScalarWhereWithAggregatesInput = {
    AND?: LiveChatStatisticsScalarWhereWithAggregatesInput | LiveChatStatisticsScalarWhereWithAggregatesInput[]
    OR?: LiveChatStatisticsScalarWhereWithAggregatesInput[]
    NOT?: LiveChatStatisticsScalarWhereWithAggregatesInput | LiveChatStatisticsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"LiveChatStatistics"> | string
    organizationId?: UuidNullableWithAggregatesFilter<"LiveChatStatistics"> | string | null
    totalChats?: IntWithAggregatesFilter<"LiveChatStatistics"> | number
    activeChats?: IntWithAggregatesFilter<"LiveChatStatistics"> | number
    resolvedChats?: IntWithAggregatesFilter<"LiveChatStatistics"> | number
    missedChats?: IntWithAggregatesFilter<"LiveChatStatistics"> | number
    avgResponseTime?: IntWithAggregatesFilter<"LiveChatStatistics"> | number
    date?: DateTimeWithAggregatesFilter<"LiveChatStatistics"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"LiveChatStatistics"> | Date | string
  }

  export type SocketConnectionWhereInput = {
    AND?: SocketConnectionWhereInput | SocketConnectionWhereInput[]
    OR?: SocketConnectionWhereInput[]
    NOT?: SocketConnectionWhereInput | SocketConnectionWhereInput[]
    id?: UuidFilter<"SocketConnection"> | string
    socketId?: StringFilter<"SocketConnection"> | string
    userId?: UuidNullableFilter<"SocketConnection"> | string | null
    organizationId?: UuidNullableFilter<"SocketConnection"> | string | null
    contactId?: UuidNullableFilter<"SocketConnection"> | string | null
    deviceType?: StringNullableFilter<"SocketConnection"> | string | null
    metadata?: JsonNullableFilter<"SocketConnection">
    connectedAt?: DateTimeFilter<"SocketConnection"> | Date | string
    disconnectedAt?: DateTimeNullableFilter<"SocketConnection"> | Date | string | null
  }

  export type SocketConnectionOrderByWithRelationInput = {
    id?: SortOrder
    socketId?: SortOrder
    userId?: SortOrderInput | SortOrder
    organizationId?: SortOrderInput | SortOrder
    contactId?: SortOrderInput | SortOrder
    deviceType?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    connectedAt?: SortOrder
    disconnectedAt?: SortOrderInput | SortOrder
  }

  export type SocketConnectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    socketId?: string
    AND?: SocketConnectionWhereInput | SocketConnectionWhereInput[]
    OR?: SocketConnectionWhereInput[]
    NOT?: SocketConnectionWhereInput | SocketConnectionWhereInput[]
    userId?: UuidNullableFilter<"SocketConnection"> | string | null
    organizationId?: UuidNullableFilter<"SocketConnection"> | string | null
    contactId?: UuidNullableFilter<"SocketConnection"> | string | null
    deviceType?: StringNullableFilter<"SocketConnection"> | string | null
    metadata?: JsonNullableFilter<"SocketConnection">
    connectedAt?: DateTimeFilter<"SocketConnection"> | Date | string
    disconnectedAt?: DateTimeNullableFilter<"SocketConnection"> | Date | string | null
  }, "id" | "socketId">

  export type SocketConnectionOrderByWithAggregationInput = {
    id?: SortOrder
    socketId?: SortOrder
    userId?: SortOrderInput | SortOrder
    organizationId?: SortOrderInput | SortOrder
    contactId?: SortOrderInput | SortOrder
    deviceType?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    connectedAt?: SortOrder
    disconnectedAt?: SortOrderInput | SortOrder
    _count?: SocketConnectionCountOrderByAggregateInput
    _max?: SocketConnectionMaxOrderByAggregateInput
    _min?: SocketConnectionMinOrderByAggregateInput
  }

  export type SocketConnectionScalarWhereWithAggregatesInput = {
    AND?: SocketConnectionScalarWhereWithAggregatesInput | SocketConnectionScalarWhereWithAggregatesInput[]
    OR?: SocketConnectionScalarWhereWithAggregatesInput[]
    NOT?: SocketConnectionScalarWhereWithAggregatesInput | SocketConnectionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"SocketConnection"> | string
    socketId?: StringWithAggregatesFilter<"SocketConnection"> | string
    userId?: UuidNullableWithAggregatesFilter<"SocketConnection"> | string | null
    organizationId?: UuidNullableWithAggregatesFilter<"SocketConnection"> | string | null
    contactId?: UuidNullableWithAggregatesFilter<"SocketConnection"> | string | null
    deviceType?: StringNullableWithAggregatesFilter<"SocketConnection"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"SocketConnection">
    connectedAt?: DateTimeWithAggregatesFilter<"SocketConnection"> | Date | string
    disconnectedAt?: DateTimeNullableWithAggregatesFilter<"SocketConnection"> | Date | string | null
  }

  export type LiveChatChannelCreateInput = {
    id?: string
    adminId: string
    organizationId?: string | null
    contactId?: string | null
    name?: string | null
    type?: string
    isActive?: boolean
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LiveChatChannelUncheckedCreateInput = {
    id?: string
    adminId: string
    organizationId?: string | null
    contactId?: string | null
    name?: string | null
    type?: string
    isActive?: boolean
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LiveChatChannelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveChatChannelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveChatChannelCreateManyInput = {
    id?: string
    adminId: string
    organizationId?: string | null
    contactId?: string | null
    name?: string | null
    type?: string
    isActive?: boolean
    lastMessageAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LiveChatChannelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveChatChannelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveChatMessageCreateInput = {
    id?: string
    channelId: string
    senderId: string
    senderType?: string
    content: string
    messageType?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isRead?: boolean
    createdAt?: Date | string
  }

  export type LiveChatMessageUncheckedCreateInput = {
    id?: string
    channelId: string
    senderId: string
    senderType?: string
    content: string
    messageType?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isRead?: boolean
    createdAt?: Date | string
  }

  export type LiveChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    messageType?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    messageType?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveChatMessageCreateManyInput = {
    id?: string
    channelId: string
    senderId: string
    senderType?: string
    content: string
    messageType?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isRead?: boolean
    createdAt?: Date | string
  }

  export type LiveChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    messageType?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    messageType?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveChatContactCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    name?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LiveChatContactUncheckedCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    name?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LiveChatContactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveChatContactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveChatContactCreateManyInput = {
    id?: string
    userId: string
    organizationId?: string | null
    name?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LiveChatContactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveChatContactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveChatWidgetSettingCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    widgetName?: string | null
    primaryColor?: string
    headerTitle?: string
    greetingMessage?: string | null
    offlineMessage?: string | null
    position?: string
    showPowerBy?: boolean
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LiveChatWidgetSettingUncheckedCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    widgetName?: string | null
    primaryColor?: string
    headerTitle?: string
    greetingMessage?: string | null
    offlineMessage?: string | null
    position?: string
    showPowerBy?: boolean
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LiveChatWidgetSettingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    widgetName?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    headerTitle?: StringFieldUpdateOperationsInput | string
    greetingMessage?: NullableStringFieldUpdateOperationsInput | string | null
    offlineMessage?: NullableStringFieldUpdateOperationsInput | string | null
    position?: StringFieldUpdateOperationsInput | string
    showPowerBy?: BoolFieldUpdateOperationsInput | boolean
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveChatWidgetSettingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    widgetName?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    headerTitle?: StringFieldUpdateOperationsInput | string
    greetingMessage?: NullableStringFieldUpdateOperationsInput | string | null
    offlineMessage?: NullableStringFieldUpdateOperationsInput | string | null
    position?: StringFieldUpdateOperationsInput | string
    showPowerBy?: BoolFieldUpdateOperationsInput | boolean
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveChatWidgetSettingCreateManyInput = {
    id?: string
    userId: string
    organizationId?: string | null
    widgetName?: string | null
    primaryColor?: string
    headerTitle?: string
    greetingMessage?: string | null
    offlineMessage?: string | null
    position?: string
    showPowerBy?: boolean
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LiveChatWidgetSettingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    widgetName?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    headerTitle?: StringFieldUpdateOperationsInput | string
    greetingMessage?: NullableStringFieldUpdateOperationsInput | string | null
    offlineMessage?: NullableStringFieldUpdateOperationsInput | string | null
    position?: StringFieldUpdateOperationsInput | string
    showPowerBy?: BoolFieldUpdateOperationsInput | boolean
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveChatWidgetSettingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    widgetName?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    headerTitle?: StringFieldUpdateOperationsInput | string
    greetingMessage?: NullableStringFieldUpdateOperationsInput | string | null
    offlineMessage?: NullableStringFieldUpdateOperationsInput | string | null
    position?: StringFieldUpdateOperationsInput | string
    showPowerBy?: BoolFieldUpdateOperationsInput | boolean
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveChatStatisticsCreateInput = {
    id?: string
    organizationId?: string | null
    totalChats?: number
    activeChats?: number
    resolvedChats?: number
    missedChats?: number
    avgResponseTime?: number
    date: Date | string
    createdAt?: Date | string
  }

  export type LiveChatStatisticsUncheckedCreateInput = {
    id?: string
    organizationId?: string | null
    totalChats?: number
    activeChats?: number
    resolvedChats?: number
    missedChats?: number
    avgResponseTime?: number
    date: Date | string
    createdAt?: Date | string
  }

  export type LiveChatStatisticsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    totalChats?: IntFieldUpdateOperationsInput | number
    activeChats?: IntFieldUpdateOperationsInput | number
    resolvedChats?: IntFieldUpdateOperationsInput | number
    missedChats?: IntFieldUpdateOperationsInput | number
    avgResponseTime?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveChatStatisticsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    totalChats?: IntFieldUpdateOperationsInput | number
    activeChats?: IntFieldUpdateOperationsInput | number
    resolvedChats?: IntFieldUpdateOperationsInput | number
    missedChats?: IntFieldUpdateOperationsInput | number
    avgResponseTime?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveChatStatisticsCreateManyInput = {
    id?: string
    organizationId?: string | null
    totalChats?: number
    activeChats?: number
    resolvedChats?: number
    missedChats?: number
    avgResponseTime?: number
    date: Date | string
    createdAt?: Date | string
  }

  export type LiveChatStatisticsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    totalChats?: IntFieldUpdateOperationsInput | number
    activeChats?: IntFieldUpdateOperationsInput | number
    resolvedChats?: IntFieldUpdateOperationsInput | number
    missedChats?: IntFieldUpdateOperationsInput | number
    avgResponseTime?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveChatStatisticsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    totalChats?: IntFieldUpdateOperationsInput | number
    activeChats?: IntFieldUpdateOperationsInput | number
    resolvedChats?: IntFieldUpdateOperationsInput | number
    missedChats?: IntFieldUpdateOperationsInput | number
    avgResponseTime?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocketConnectionCreateInput = {
    id?: string
    socketId: string
    userId?: string | null
    organizationId?: string | null
    contactId?: string | null
    deviceType?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    connectedAt?: Date | string
    disconnectedAt?: Date | string | null
  }

  export type SocketConnectionUncheckedCreateInput = {
    id?: string
    socketId: string
    userId?: string | null
    organizationId?: string | null
    contactId?: string | null
    deviceType?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    connectedAt?: Date | string
    disconnectedAt?: Date | string | null
  }

  export type SocketConnectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    socketId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disconnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SocketConnectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    socketId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disconnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SocketConnectionCreateManyInput = {
    id?: string
    socketId: string
    userId?: string | null
    organizationId?: string | null
    contactId?: string | null
    deviceType?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    connectedAt?: Date | string
    disconnectedAt?: Date | string | null
  }

  export type SocketConnectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    socketId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disconnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SocketConnectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    socketId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disconnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type LiveChatChannelCountOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    organizationId?: SortOrder
    contactId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    lastMessageAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LiveChatChannelMaxOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    organizationId?: SortOrder
    contactId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    lastMessageAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LiveChatChannelMinOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    organizationId?: SortOrder
    contactId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    lastMessageAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type LiveChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    channelId?: SortOrder
    senderId?: SortOrder
    senderType?: SortOrder
    content?: SortOrder
    messageType?: SortOrder
    metadata?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type LiveChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    channelId?: SortOrder
    senderId?: SortOrder
    senderType?: SortOrder
    content?: SortOrder
    messageType?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type LiveChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    channelId?: SortOrder
    senderId?: SortOrder
    senderType?: SortOrder
    content?: SortOrder
    messageType?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
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

  export type LiveChatContactCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LiveChatContactMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LiveChatContactMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LiveChatWidgetSettingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    widgetName?: SortOrder
    primaryColor?: SortOrder
    headerTitle?: SortOrder
    greetingMessage?: SortOrder
    offlineMessage?: SortOrder
    position?: SortOrder
    showPowerBy?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LiveChatWidgetSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    widgetName?: SortOrder
    primaryColor?: SortOrder
    headerTitle?: SortOrder
    greetingMessage?: SortOrder
    offlineMessage?: SortOrder
    position?: SortOrder
    showPowerBy?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LiveChatWidgetSettingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    widgetName?: SortOrder
    primaryColor?: SortOrder
    headerTitle?: SortOrder
    greetingMessage?: SortOrder
    offlineMessage?: SortOrder
    position?: SortOrder
    showPowerBy?: SortOrder
    enabled?: SortOrder
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

  export type LiveChatStatisticsCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    totalChats?: SortOrder
    activeChats?: SortOrder
    resolvedChats?: SortOrder
    missedChats?: SortOrder
    avgResponseTime?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type LiveChatStatisticsAvgOrderByAggregateInput = {
    totalChats?: SortOrder
    activeChats?: SortOrder
    resolvedChats?: SortOrder
    missedChats?: SortOrder
    avgResponseTime?: SortOrder
  }

  export type LiveChatStatisticsMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    totalChats?: SortOrder
    activeChats?: SortOrder
    resolvedChats?: SortOrder
    missedChats?: SortOrder
    avgResponseTime?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type LiveChatStatisticsMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    totalChats?: SortOrder
    activeChats?: SortOrder
    resolvedChats?: SortOrder
    missedChats?: SortOrder
    avgResponseTime?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type LiveChatStatisticsSumOrderByAggregateInput = {
    totalChats?: SortOrder
    activeChats?: SortOrder
    resolvedChats?: SortOrder
    missedChats?: SortOrder
    avgResponseTime?: SortOrder
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

  export type SocketConnectionCountOrderByAggregateInput = {
    id?: SortOrder
    socketId?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    contactId?: SortOrder
    deviceType?: SortOrder
    metadata?: SortOrder
    connectedAt?: SortOrder
    disconnectedAt?: SortOrder
  }

  export type SocketConnectionMaxOrderByAggregateInput = {
    id?: SortOrder
    socketId?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    contactId?: SortOrder
    deviceType?: SortOrder
    connectedAt?: SortOrder
    disconnectedAt?: SortOrder
  }

  export type SocketConnectionMinOrderByAggregateInput = {
    id?: SortOrder
    socketId?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    contactId?: SortOrder
    deviceType?: SortOrder
    connectedAt?: SortOrder
    disconnectedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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