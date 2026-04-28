
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
 * Model UserIntegrationSettings
 * 
 */
export type UserIntegrationSettings = $Result.DefaultSelection<Prisma.$UserIntegrationSettingsPayload>
/**
 * Model MetaIntegration
 * 
 */
export type MetaIntegration = $Result.DefaultSelection<Prisma.$MetaIntegrationPayload>
/**
 * Model VoiceIntegration
 * 
 */
export type VoiceIntegration = $Result.DefaultSelection<Prisma.$VoiceIntegrationPayload>
/**
 * Model WhatsAppInstance
 * 
 */
export type WhatsAppInstance = $Result.DefaultSelection<Prisma.$WhatsAppInstancePayload>
/**
 * Model TelegramSession
 * 
 */
export type TelegramSession = $Result.DefaultSelection<Prisma.$TelegramSessionPayload>
/**
 * Model ImageAsset
 * 
 */
export type ImageAsset = $Result.DefaultSelection<Prisma.$ImageAssetPayload>

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

  /**
   * `prisma.userIntegrationSettings`: Exposes CRUD operations for the **UserIntegrationSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserIntegrationSettings
    * const userIntegrationSettings = await prisma.userIntegrationSettings.findMany()
    * ```
    */
  get userIntegrationSettings(): Prisma.UserIntegrationSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metaIntegration`: Exposes CRUD operations for the **MetaIntegration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MetaIntegrations
    * const metaIntegrations = await prisma.metaIntegration.findMany()
    * ```
    */
  get metaIntegration(): Prisma.MetaIntegrationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voiceIntegration`: Exposes CRUD operations for the **VoiceIntegration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VoiceIntegrations
    * const voiceIntegrations = await prisma.voiceIntegration.findMany()
    * ```
    */
  get voiceIntegration(): Prisma.VoiceIntegrationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.whatsAppInstance`: Exposes CRUD operations for the **WhatsAppInstance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WhatsAppInstances
    * const whatsAppInstances = await prisma.whatsAppInstance.findMany()
    * ```
    */
  get whatsAppInstance(): Prisma.WhatsAppInstanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.telegramSession`: Exposes CRUD operations for the **TelegramSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TelegramSessions
    * const telegramSessions = await prisma.telegramSession.findMany()
    * ```
    */
  get telegramSession(): Prisma.TelegramSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imageAsset`: Exposes CRUD operations for the **ImageAsset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImageAssets
    * const imageAssets = await prisma.imageAsset.findMany()
    * ```
    */
  get imageAsset(): Prisma.ImageAssetDelegate<ExtArgs, ClientOptions>;
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
    IntegrationActivity: 'IntegrationActivity',
    UserIntegrationSettings: 'UserIntegrationSettings',
    MetaIntegration: 'MetaIntegration',
    VoiceIntegration: 'VoiceIntegration',
    WhatsAppInstance: 'WhatsAppInstance',
    TelegramSession: 'TelegramSession',
    ImageAsset: 'ImageAsset'
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
      modelProps: "integrationConnection" | "googleIntegration" | "zoomIntegration" | "zoomMeeting" | "shopifyStore" | "uberEatsConfig" | "easyPostConfig" | "integrationActivity" | "userIntegrationSettings" | "metaIntegration" | "voiceIntegration" | "whatsAppInstance" | "telegramSession" | "imageAsset"
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
      UserIntegrationSettings: {
        payload: Prisma.$UserIntegrationSettingsPayload<ExtArgs>
        fields: Prisma.UserIntegrationSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserIntegrationSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserIntegrationSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserIntegrationSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserIntegrationSettingsPayload>
          }
          findFirst: {
            args: Prisma.UserIntegrationSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserIntegrationSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserIntegrationSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserIntegrationSettingsPayload>
          }
          findMany: {
            args: Prisma.UserIntegrationSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserIntegrationSettingsPayload>[]
          }
          create: {
            args: Prisma.UserIntegrationSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserIntegrationSettingsPayload>
          }
          createMany: {
            args: Prisma.UserIntegrationSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserIntegrationSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserIntegrationSettingsPayload>[]
          }
          delete: {
            args: Prisma.UserIntegrationSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserIntegrationSettingsPayload>
          }
          update: {
            args: Prisma.UserIntegrationSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserIntegrationSettingsPayload>
          }
          deleteMany: {
            args: Prisma.UserIntegrationSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserIntegrationSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserIntegrationSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserIntegrationSettingsPayload>[]
          }
          upsert: {
            args: Prisma.UserIntegrationSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserIntegrationSettingsPayload>
          }
          aggregate: {
            args: Prisma.UserIntegrationSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserIntegrationSettings>
          }
          groupBy: {
            args: Prisma.UserIntegrationSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserIntegrationSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserIntegrationSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<UserIntegrationSettingsCountAggregateOutputType> | number
          }
        }
      }
      MetaIntegration: {
        payload: Prisma.$MetaIntegrationPayload<ExtArgs>
        fields: Prisma.MetaIntegrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetaIntegrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaIntegrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetaIntegrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaIntegrationPayload>
          }
          findFirst: {
            args: Prisma.MetaIntegrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaIntegrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetaIntegrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaIntegrationPayload>
          }
          findMany: {
            args: Prisma.MetaIntegrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaIntegrationPayload>[]
          }
          create: {
            args: Prisma.MetaIntegrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaIntegrationPayload>
          }
          createMany: {
            args: Prisma.MetaIntegrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetaIntegrationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaIntegrationPayload>[]
          }
          delete: {
            args: Prisma.MetaIntegrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaIntegrationPayload>
          }
          update: {
            args: Prisma.MetaIntegrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaIntegrationPayload>
          }
          deleteMany: {
            args: Prisma.MetaIntegrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetaIntegrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetaIntegrationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaIntegrationPayload>[]
          }
          upsert: {
            args: Prisma.MetaIntegrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaIntegrationPayload>
          }
          aggregate: {
            args: Prisma.MetaIntegrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetaIntegration>
          }
          groupBy: {
            args: Prisma.MetaIntegrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetaIntegrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetaIntegrationCountArgs<ExtArgs>
            result: $Utils.Optional<MetaIntegrationCountAggregateOutputType> | number
          }
        }
      }
      VoiceIntegration: {
        payload: Prisma.$VoiceIntegrationPayload<ExtArgs>
        fields: Prisma.VoiceIntegrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoiceIntegrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceIntegrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoiceIntegrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceIntegrationPayload>
          }
          findFirst: {
            args: Prisma.VoiceIntegrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceIntegrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoiceIntegrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceIntegrationPayload>
          }
          findMany: {
            args: Prisma.VoiceIntegrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceIntegrationPayload>[]
          }
          create: {
            args: Prisma.VoiceIntegrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceIntegrationPayload>
          }
          createMany: {
            args: Prisma.VoiceIntegrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoiceIntegrationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceIntegrationPayload>[]
          }
          delete: {
            args: Prisma.VoiceIntegrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceIntegrationPayload>
          }
          update: {
            args: Prisma.VoiceIntegrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceIntegrationPayload>
          }
          deleteMany: {
            args: Prisma.VoiceIntegrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoiceIntegrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoiceIntegrationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceIntegrationPayload>[]
          }
          upsert: {
            args: Prisma.VoiceIntegrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceIntegrationPayload>
          }
          aggregate: {
            args: Prisma.VoiceIntegrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoiceIntegration>
          }
          groupBy: {
            args: Prisma.VoiceIntegrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoiceIntegrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoiceIntegrationCountArgs<ExtArgs>
            result: $Utils.Optional<VoiceIntegrationCountAggregateOutputType> | number
          }
        }
      }
      WhatsAppInstance: {
        payload: Prisma.$WhatsAppInstancePayload<ExtArgs>
        fields: Prisma.WhatsAppInstanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WhatsAppInstanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppInstancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WhatsAppInstanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppInstancePayload>
          }
          findFirst: {
            args: Prisma.WhatsAppInstanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppInstancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WhatsAppInstanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppInstancePayload>
          }
          findMany: {
            args: Prisma.WhatsAppInstanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppInstancePayload>[]
          }
          create: {
            args: Prisma.WhatsAppInstanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppInstancePayload>
          }
          createMany: {
            args: Prisma.WhatsAppInstanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WhatsAppInstanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppInstancePayload>[]
          }
          delete: {
            args: Prisma.WhatsAppInstanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppInstancePayload>
          }
          update: {
            args: Prisma.WhatsAppInstanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppInstancePayload>
          }
          deleteMany: {
            args: Prisma.WhatsAppInstanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WhatsAppInstanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WhatsAppInstanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppInstancePayload>[]
          }
          upsert: {
            args: Prisma.WhatsAppInstanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppInstancePayload>
          }
          aggregate: {
            args: Prisma.WhatsAppInstanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWhatsAppInstance>
          }
          groupBy: {
            args: Prisma.WhatsAppInstanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<WhatsAppInstanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.WhatsAppInstanceCountArgs<ExtArgs>
            result: $Utils.Optional<WhatsAppInstanceCountAggregateOutputType> | number
          }
        }
      }
      TelegramSession: {
        payload: Prisma.$TelegramSessionPayload<ExtArgs>
        fields: Prisma.TelegramSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TelegramSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TelegramSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramSessionPayload>
          }
          findFirst: {
            args: Prisma.TelegramSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TelegramSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramSessionPayload>
          }
          findMany: {
            args: Prisma.TelegramSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramSessionPayload>[]
          }
          create: {
            args: Prisma.TelegramSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramSessionPayload>
          }
          createMany: {
            args: Prisma.TelegramSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TelegramSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramSessionPayload>[]
          }
          delete: {
            args: Prisma.TelegramSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramSessionPayload>
          }
          update: {
            args: Prisma.TelegramSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramSessionPayload>
          }
          deleteMany: {
            args: Prisma.TelegramSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TelegramSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TelegramSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramSessionPayload>[]
          }
          upsert: {
            args: Prisma.TelegramSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramSessionPayload>
          }
          aggregate: {
            args: Prisma.TelegramSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTelegramSession>
          }
          groupBy: {
            args: Prisma.TelegramSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TelegramSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TelegramSessionCountArgs<ExtArgs>
            result: $Utils.Optional<TelegramSessionCountAggregateOutputType> | number
          }
        }
      }
      ImageAsset: {
        payload: Prisma.$ImageAssetPayload<ExtArgs>
        fields: Prisma.ImageAssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageAssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageAssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageAssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageAssetPayload>
          }
          findFirst: {
            args: Prisma.ImageAssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageAssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageAssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageAssetPayload>
          }
          findMany: {
            args: Prisma.ImageAssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageAssetPayload>[]
          }
          create: {
            args: Prisma.ImageAssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageAssetPayload>
          }
          createMany: {
            args: Prisma.ImageAssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageAssetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageAssetPayload>[]
          }
          delete: {
            args: Prisma.ImageAssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageAssetPayload>
          }
          update: {
            args: Prisma.ImageAssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageAssetPayload>
          }
          deleteMany: {
            args: Prisma.ImageAssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageAssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageAssetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageAssetPayload>[]
          }
          upsert: {
            args: Prisma.ImageAssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageAssetPayload>
          }
          aggregate: {
            args: Prisma.ImageAssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImageAsset>
          }
          groupBy: {
            args: Prisma.ImageAssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageAssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageAssetCountArgs<ExtArgs>
            result: $Utils.Optional<ImageAssetCountAggregateOutputType> | number
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
    userIntegrationSettings?: UserIntegrationSettingsOmit
    metaIntegration?: MetaIntegrationOmit
    voiceIntegration?: VoiceIntegrationOmit
    whatsAppInstance?: WhatsAppInstanceOmit
    telegramSession?: TelegramSessionOmit
    imageAsset?: ImageAssetOmit
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
   * Model UserIntegrationSettings
   */

  export type AggregateUserIntegrationSettings = {
    _count: UserIntegrationSettingsCountAggregateOutputType | null
    _min: UserIntegrationSettingsMinAggregateOutputType | null
    _max: UserIntegrationSettingsMaxAggregateOutputType | null
  }

  export type UserIntegrationSettingsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    timezone: string | null
    apiKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserIntegrationSettingsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    timezone: string | null
    apiKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserIntegrationSettingsCountAggregateOutputType = {
    id: number
    userId: number
    timezone: number
    apiKey: number
    fcmData: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserIntegrationSettingsMinAggregateInputType = {
    id?: true
    userId?: true
    timezone?: true
    apiKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserIntegrationSettingsMaxAggregateInputType = {
    id?: true
    userId?: true
    timezone?: true
    apiKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserIntegrationSettingsCountAggregateInputType = {
    id?: true
    userId?: true
    timezone?: true
    apiKey?: true
    fcmData?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserIntegrationSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserIntegrationSettings to aggregate.
     */
    where?: UserIntegrationSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserIntegrationSettings to fetch.
     */
    orderBy?: UserIntegrationSettingsOrderByWithRelationInput | UserIntegrationSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserIntegrationSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserIntegrationSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserIntegrationSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserIntegrationSettings
    **/
    _count?: true | UserIntegrationSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserIntegrationSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserIntegrationSettingsMaxAggregateInputType
  }

  export type GetUserIntegrationSettingsAggregateType<T extends UserIntegrationSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserIntegrationSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserIntegrationSettings[P]>
      : GetScalarType<T[P], AggregateUserIntegrationSettings[P]>
  }




  export type UserIntegrationSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserIntegrationSettingsWhereInput
    orderBy?: UserIntegrationSettingsOrderByWithAggregationInput | UserIntegrationSettingsOrderByWithAggregationInput[]
    by: UserIntegrationSettingsScalarFieldEnum[] | UserIntegrationSettingsScalarFieldEnum
    having?: UserIntegrationSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserIntegrationSettingsCountAggregateInputType | true
    _min?: UserIntegrationSettingsMinAggregateInputType
    _max?: UserIntegrationSettingsMaxAggregateInputType
  }

  export type UserIntegrationSettingsGroupByOutputType = {
    id: string
    userId: string
    timezone: string | null
    apiKey: string | null
    fcmData: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: UserIntegrationSettingsCountAggregateOutputType | null
    _min: UserIntegrationSettingsMinAggregateOutputType | null
    _max: UserIntegrationSettingsMaxAggregateOutputType | null
  }

  type GetUserIntegrationSettingsGroupByPayload<T extends UserIntegrationSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserIntegrationSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserIntegrationSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserIntegrationSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], UserIntegrationSettingsGroupByOutputType[P]>
        }
      >
    >


  export type UserIntegrationSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    timezone?: boolean
    apiKey?: boolean
    fcmData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userIntegrationSettings"]>

  export type UserIntegrationSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    timezone?: boolean
    apiKey?: boolean
    fcmData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userIntegrationSettings"]>

  export type UserIntegrationSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    timezone?: boolean
    apiKey?: boolean
    fcmData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userIntegrationSettings"]>

  export type UserIntegrationSettingsSelectScalar = {
    id?: boolean
    userId?: boolean
    timezone?: boolean
    apiKey?: boolean
    fcmData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserIntegrationSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "timezone" | "apiKey" | "fcmData" | "createdAt" | "updatedAt", ExtArgs["result"]["userIntegrationSettings"]>

  export type $UserIntegrationSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserIntegrationSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      timezone: string | null
      apiKey: string | null
      fcmData: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userIntegrationSettings"]>
    composites: {}
  }

  type UserIntegrationSettingsGetPayload<S extends boolean | null | undefined | UserIntegrationSettingsDefaultArgs> = $Result.GetResult<Prisma.$UserIntegrationSettingsPayload, S>

  type UserIntegrationSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserIntegrationSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserIntegrationSettingsCountAggregateInputType | true
    }

  export interface UserIntegrationSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserIntegrationSettings'], meta: { name: 'UserIntegrationSettings' } }
    /**
     * Find zero or one UserIntegrationSettings that matches the filter.
     * @param {UserIntegrationSettingsFindUniqueArgs} args - Arguments to find a UserIntegrationSettings
     * @example
     * // Get one UserIntegrationSettings
     * const userIntegrationSettings = await prisma.userIntegrationSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserIntegrationSettingsFindUniqueArgs>(args: SelectSubset<T, UserIntegrationSettingsFindUniqueArgs<ExtArgs>>): Prisma__UserIntegrationSettingsClient<$Result.GetResult<Prisma.$UserIntegrationSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserIntegrationSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserIntegrationSettingsFindUniqueOrThrowArgs} args - Arguments to find a UserIntegrationSettings
     * @example
     * // Get one UserIntegrationSettings
     * const userIntegrationSettings = await prisma.userIntegrationSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserIntegrationSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserIntegrationSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserIntegrationSettingsClient<$Result.GetResult<Prisma.$UserIntegrationSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserIntegrationSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserIntegrationSettingsFindFirstArgs} args - Arguments to find a UserIntegrationSettings
     * @example
     * // Get one UserIntegrationSettings
     * const userIntegrationSettings = await prisma.userIntegrationSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserIntegrationSettingsFindFirstArgs>(args?: SelectSubset<T, UserIntegrationSettingsFindFirstArgs<ExtArgs>>): Prisma__UserIntegrationSettingsClient<$Result.GetResult<Prisma.$UserIntegrationSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserIntegrationSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserIntegrationSettingsFindFirstOrThrowArgs} args - Arguments to find a UserIntegrationSettings
     * @example
     * // Get one UserIntegrationSettings
     * const userIntegrationSettings = await prisma.userIntegrationSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserIntegrationSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserIntegrationSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserIntegrationSettingsClient<$Result.GetResult<Prisma.$UserIntegrationSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserIntegrationSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserIntegrationSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserIntegrationSettings
     * const userIntegrationSettings = await prisma.userIntegrationSettings.findMany()
     * 
     * // Get first 10 UserIntegrationSettings
     * const userIntegrationSettings = await prisma.userIntegrationSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userIntegrationSettingsWithIdOnly = await prisma.userIntegrationSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserIntegrationSettingsFindManyArgs>(args?: SelectSubset<T, UserIntegrationSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserIntegrationSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserIntegrationSettings.
     * @param {UserIntegrationSettingsCreateArgs} args - Arguments to create a UserIntegrationSettings.
     * @example
     * // Create one UserIntegrationSettings
     * const UserIntegrationSettings = await prisma.userIntegrationSettings.create({
     *   data: {
     *     // ... data to create a UserIntegrationSettings
     *   }
     * })
     * 
     */
    create<T extends UserIntegrationSettingsCreateArgs>(args: SelectSubset<T, UserIntegrationSettingsCreateArgs<ExtArgs>>): Prisma__UserIntegrationSettingsClient<$Result.GetResult<Prisma.$UserIntegrationSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserIntegrationSettings.
     * @param {UserIntegrationSettingsCreateManyArgs} args - Arguments to create many UserIntegrationSettings.
     * @example
     * // Create many UserIntegrationSettings
     * const userIntegrationSettings = await prisma.userIntegrationSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserIntegrationSettingsCreateManyArgs>(args?: SelectSubset<T, UserIntegrationSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserIntegrationSettings and returns the data saved in the database.
     * @param {UserIntegrationSettingsCreateManyAndReturnArgs} args - Arguments to create many UserIntegrationSettings.
     * @example
     * // Create many UserIntegrationSettings
     * const userIntegrationSettings = await prisma.userIntegrationSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserIntegrationSettings and only return the `id`
     * const userIntegrationSettingsWithIdOnly = await prisma.userIntegrationSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserIntegrationSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserIntegrationSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserIntegrationSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserIntegrationSettings.
     * @param {UserIntegrationSettingsDeleteArgs} args - Arguments to delete one UserIntegrationSettings.
     * @example
     * // Delete one UserIntegrationSettings
     * const UserIntegrationSettings = await prisma.userIntegrationSettings.delete({
     *   where: {
     *     // ... filter to delete one UserIntegrationSettings
     *   }
     * })
     * 
     */
    delete<T extends UserIntegrationSettingsDeleteArgs>(args: SelectSubset<T, UserIntegrationSettingsDeleteArgs<ExtArgs>>): Prisma__UserIntegrationSettingsClient<$Result.GetResult<Prisma.$UserIntegrationSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserIntegrationSettings.
     * @param {UserIntegrationSettingsUpdateArgs} args - Arguments to update one UserIntegrationSettings.
     * @example
     * // Update one UserIntegrationSettings
     * const userIntegrationSettings = await prisma.userIntegrationSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserIntegrationSettingsUpdateArgs>(args: SelectSubset<T, UserIntegrationSettingsUpdateArgs<ExtArgs>>): Prisma__UserIntegrationSettingsClient<$Result.GetResult<Prisma.$UserIntegrationSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserIntegrationSettings.
     * @param {UserIntegrationSettingsDeleteManyArgs} args - Arguments to filter UserIntegrationSettings to delete.
     * @example
     * // Delete a few UserIntegrationSettings
     * const { count } = await prisma.userIntegrationSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserIntegrationSettingsDeleteManyArgs>(args?: SelectSubset<T, UserIntegrationSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserIntegrationSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserIntegrationSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserIntegrationSettings
     * const userIntegrationSettings = await prisma.userIntegrationSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserIntegrationSettingsUpdateManyArgs>(args: SelectSubset<T, UserIntegrationSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserIntegrationSettings and returns the data updated in the database.
     * @param {UserIntegrationSettingsUpdateManyAndReturnArgs} args - Arguments to update many UserIntegrationSettings.
     * @example
     * // Update many UserIntegrationSettings
     * const userIntegrationSettings = await prisma.userIntegrationSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserIntegrationSettings and only return the `id`
     * const userIntegrationSettingsWithIdOnly = await prisma.userIntegrationSettings.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserIntegrationSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserIntegrationSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserIntegrationSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserIntegrationSettings.
     * @param {UserIntegrationSettingsUpsertArgs} args - Arguments to update or create a UserIntegrationSettings.
     * @example
     * // Update or create a UserIntegrationSettings
     * const userIntegrationSettings = await prisma.userIntegrationSettings.upsert({
     *   create: {
     *     // ... data to create a UserIntegrationSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserIntegrationSettings we want to update
     *   }
     * })
     */
    upsert<T extends UserIntegrationSettingsUpsertArgs>(args: SelectSubset<T, UserIntegrationSettingsUpsertArgs<ExtArgs>>): Prisma__UserIntegrationSettingsClient<$Result.GetResult<Prisma.$UserIntegrationSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserIntegrationSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserIntegrationSettingsCountArgs} args - Arguments to filter UserIntegrationSettings to count.
     * @example
     * // Count the number of UserIntegrationSettings
     * const count = await prisma.userIntegrationSettings.count({
     *   where: {
     *     // ... the filter for the UserIntegrationSettings we want to count
     *   }
     * })
    **/
    count<T extends UserIntegrationSettingsCountArgs>(
      args?: Subset<T, UserIntegrationSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserIntegrationSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserIntegrationSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserIntegrationSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserIntegrationSettingsAggregateArgs>(args: Subset<T, UserIntegrationSettingsAggregateArgs>): Prisma.PrismaPromise<GetUserIntegrationSettingsAggregateType<T>>

    /**
     * Group by UserIntegrationSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserIntegrationSettingsGroupByArgs} args - Group by arguments.
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
      T extends UserIntegrationSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserIntegrationSettingsGroupByArgs['orderBy'] }
        : { orderBy?: UserIntegrationSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserIntegrationSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserIntegrationSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserIntegrationSettings model
   */
  readonly fields: UserIntegrationSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserIntegrationSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserIntegrationSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserIntegrationSettings model
   */
  interface UserIntegrationSettingsFieldRefs {
    readonly id: FieldRef<"UserIntegrationSettings", 'String'>
    readonly userId: FieldRef<"UserIntegrationSettings", 'String'>
    readonly timezone: FieldRef<"UserIntegrationSettings", 'String'>
    readonly apiKey: FieldRef<"UserIntegrationSettings", 'String'>
    readonly fcmData: FieldRef<"UserIntegrationSettings", 'Json'>
    readonly createdAt: FieldRef<"UserIntegrationSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"UserIntegrationSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserIntegrationSettings findUnique
   */
  export type UserIntegrationSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIntegrationSettings
     */
    select?: UserIntegrationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserIntegrationSettings
     */
    omit?: UserIntegrationSettingsOmit<ExtArgs> | null
    /**
     * Filter, which UserIntegrationSettings to fetch.
     */
    where: UserIntegrationSettingsWhereUniqueInput
  }

  /**
   * UserIntegrationSettings findUniqueOrThrow
   */
  export type UserIntegrationSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIntegrationSettings
     */
    select?: UserIntegrationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserIntegrationSettings
     */
    omit?: UserIntegrationSettingsOmit<ExtArgs> | null
    /**
     * Filter, which UserIntegrationSettings to fetch.
     */
    where: UserIntegrationSettingsWhereUniqueInput
  }

  /**
   * UserIntegrationSettings findFirst
   */
  export type UserIntegrationSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIntegrationSettings
     */
    select?: UserIntegrationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserIntegrationSettings
     */
    omit?: UserIntegrationSettingsOmit<ExtArgs> | null
    /**
     * Filter, which UserIntegrationSettings to fetch.
     */
    where?: UserIntegrationSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserIntegrationSettings to fetch.
     */
    orderBy?: UserIntegrationSettingsOrderByWithRelationInput | UserIntegrationSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserIntegrationSettings.
     */
    cursor?: UserIntegrationSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserIntegrationSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserIntegrationSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserIntegrationSettings.
     */
    distinct?: UserIntegrationSettingsScalarFieldEnum | UserIntegrationSettingsScalarFieldEnum[]
  }

  /**
   * UserIntegrationSettings findFirstOrThrow
   */
  export type UserIntegrationSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIntegrationSettings
     */
    select?: UserIntegrationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserIntegrationSettings
     */
    omit?: UserIntegrationSettingsOmit<ExtArgs> | null
    /**
     * Filter, which UserIntegrationSettings to fetch.
     */
    where?: UserIntegrationSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserIntegrationSettings to fetch.
     */
    orderBy?: UserIntegrationSettingsOrderByWithRelationInput | UserIntegrationSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserIntegrationSettings.
     */
    cursor?: UserIntegrationSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserIntegrationSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserIntegrationSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserIntegrationSettings.
     */
    distinct?: UserIntegrationSettingsScalarFieldEnum | UserIntegrationSettingsScalarFieldEnum[]
  }

  /**
   * UserIntegrationSettings findMany
   */
  export type UserIntegrationSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIntegrationSettings
     */
    select?: UserIntegrationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserIntegrationSettings
     */
    omit?: UserIntegrationSettingsOmit<ExtArgs> | null
    /**
     * Filter, which UserIntegrationSettings to fetch.
     */
    where?: UserIntegrationSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserIntegrationSettings to fetch.
     */
    orderBy?: UserIntegrationSettingsOrderByWithRelationInput | UserIntegrationSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserIntegrationSettings.
     */
    cursor?: UserIntegrationSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserIntegrationSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserIntegrationSettings.
     */
    skip?: number
    distinct?: UserIntegrationSettingsScalarFieldEnum | UserIntegrationSettingsScalarFieldEnum[]
  }

  /**
   * UserIntegrationSettings create
   */
  export type UserIntegrationSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIntegrationSettings
     */
    select?: UserIntegrationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserIntegrationSettings
     */
    omit?: UserIntegrationSettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a UserIntegrationSettings.
     */
    data: XOR<UserIntegrationSettingsCreateInput, UserIntegrationSettingsUncheckedCreateInput>
  }

  /**
   * UserIntegrationSettings createMany
   */
  export type UserIntegrationSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserIntegrationSettings.
     */
    data: UserIntegrationSettingsCreateManyInput | UserIntegrationSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserIntegrationSettings createManyAndReturn
   */
  export type UserIntegrationSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIntegrationSettings
     */
    select?: UserIntegrationSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserIntegrationSettings
     */
    omit?: UserIntegrationSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many UserIntegrationSettings.
     */
    data: UserIntegrationSettingsCreateManyInput | UserIntegrationSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserIntegrationSettings update
   */
  export type UserIntegrationSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIntegrationSettings
     */
    select?: UserIntegrationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserIntegrationSettings
     */
    omit?: UserIntegrationSettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a UserIntegrationSettings.
     */
    data: XOR<UserIntegrationSettingsUpdateInput, UserIntegrationSettingsUncheckedUpdateInput>
    /**
     * Choose, which UserIntegrationSettings to update.
     */
    where: UserIntegrationSettingsWhereUniqueInput
  }

  /**
   * UserIntegrationSettings updateMany
   */
  export type UserIntegrationSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserIntegrationSettings.
     */
    data: XOR<UserIntegrationSettingsUpdateManyMutationInput, UserIntegrationSettingsUncheckedUpdateManyInput>
    /**
     * Filter which UserIntegrationSettings to update
     */
    where?: UserIntegrationSettingsWhereInput
    /**
     * Limit how many UserIntegrationSettings to update.
     */
    limit?: number
  }

  /**
   * UserIntegrationSettings updateManyAndReturn
   */
  export type UserIntegrationSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIntegrationSettings
     */
    select?: UserIntegrationSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserIntegrationSettings
     */
    omit?: UserIntegrationSettingsOmit<ExtArgs> | null
    /**
     * The data used to update UserIntegrationSettings.
     */
    data: XOR<UserIntegrationSettingsUpdateManyMutationInput, UserIntegrationSettingsUncheckedUpdateManyInput>
    /**
     * Filter which UserIntegrationSettings to update
     */
    where?: UserIntegrationSettingsWhereInput
    /**
     * Limit how many UserIntegrationSettings to update.
     */
    limit?: number
  }

  /**
   * UserIntegrationSettings upsert
   */
  export type UserIntegrationSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIntegrationSettings
     */
    select?: UserIntegrationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserIntegrationSettings
     */
    omit?: UserIntegrationSettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the UserIntegrationSettings to update in case it exists.
     */
    where: UserIntegrationSettingsWhereUniqueInput
    /**
     * In case the UserIntegrationSettings found by the `where` argument doesn't exist, create a new UserIntegrationSettings with this data.
     */
    create: XOR<UserIntegrationSettingsCreateInput, UserIntegrationSettingsUncheckedCreateInput>
    /**
     * In case the UserIntegrationSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserIntegrationSettingsUpdateInput, UserIntegrationSettingsUncheckedUpdateInput>
  }

  /**
   * UserIntegrationSettings delete
   */
  export type UserIntegrationSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIntegrationSettings
     */
    select?: UserIntegrationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserIntegrationSettings
     */
    omit?: UserIntegrationSettingsOmit<ExtArgs> | null
    /**
     * Filter which UserIntegrationSettings to delete.
     */
    where: UserIntegrationSettingsWhereUniqueInput
  }

  /**
   * UserIntegrationSettings deleteMany
   */
  export type UserIntegrationSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserIntegrationSettings to delete
     */
    where?: UserIntegrationSettingsWhereInput
    /**
     * Limit how many UserIntegrationSettings to delete.
     */
    limit?: number
  }

  /**
   * UserIntegrationSettings without action
   */
  export type UserIntegrationSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIntegrationSettings
     */
    select?: UserIntegrationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserIntegrationSettings
     */
    omit?: UserIntegrationSettingsOmit<ExtArgs> | null
  }


  /**
   * Model MetaIntegration
   */

  export type AggregateMetaIntegration = {
    _count: MetaIntegrationCountAggregateOutputType | null
    _min: MetaIntegrationMinAggregateOutputType | null
    _max: MetaIntegrationMaxAggregateOutputType | null
  }

  export type MetaIntegrationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    wabaId: string | null
    accessToken: string | null
    businessPhoneNumberId: string | null
    appId: string | null
    loginType: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetaIntegrationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    wabaId: string | null
    accessToken: string | null
    businessPhoneNumberId: string | null
    appId: string | null
    loginType: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetaIntegrationCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    wabaId: number
    accessToken: number
    businessPhoneNumberId: number
    appId: number
    loginType: number
    embedData: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MetaIntegrationMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    wabaId?: true
    accessToken?: true
    businessPhoneNumberId?: true
    appId?: true
    loginType?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetaIntegrationMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    wabaId?: true
    accessToken?: true
    businessPhoneNumberId?: true
    appId?: true
    loginType?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetaIntegrationCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    wabaId?: true
    accessToken?: true
    businessPhoneNumberId?: true
    appId?: true
    loginType?: true
    embedData?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MetaIntegrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetaIntegration to aggregate.
     */
    where?: MetaIntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaIntegrations to fetch.
     */
    orderBy?: MetaIntegrationOrderByWithRelationInput | MetaIntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetaIntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaIntegrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaIntegrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MetaIntegrations
    **/
    _count?: true | MetaIntegrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetaIntegrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetaIntegrationMaxAggregateInputType
  }

  export type GetMetaIntegrationAggregateType<T extends MetaIntegrationAggregateArgs> = {
        [P in keyof T & keyof AggregateMetaIntegration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetaIntegration[P]>
      : GetScalarType<T[P], AggregateMetaIntegration[P]>
  }




  export type MetaIntegrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetaIntegrationWhereInput
    orderBy?: MetaIntegrationOrderByWithAggregationInput | MetaIntegrationOrderByWithAggregationInput[]
    by: MetaIntegrationScalarFieldEnum[] | MetaIntegrationScalarFieldEnum
    having?: MetaIntegrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetaIntegrationCountAggregateInputType | true
    _min?: MetaIntegrationMinAggregateInputType
    _max?: MetaIntegrationMaxAggregateInputType
  }

  export type MetaIntegrationGroupByOutputType = {
    id: string
    userId: string
    organizationId: string | null
    wabaId: string | null
    accessToken: string | null
    businessPhoneNumberId: string | null
    appId: string | null
    loginType: string | null
    embedData: JsonValue | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: MetaIntegrationCountAggregateOutputType | null
    _min: MetaIntegrationMinAggregateOutputType | null
    _max: MetaIntegrationMaxAggregateOutputType | null
  }

  type GetMetaIntegrationGroupByPayload<T extends MetaIntegrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetaIntegrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetaIntegrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetaIntegrationGroupByOutputType[P]>
            : GetScalarType<T[P], MetaIntegrationGroupByOutputType[P]>
        }
      >
    >


  export type MetaIntegrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    wabaId?: boolean
    accessToken?: boolean
    businessPhoneNumberId?: boolean
    appId?: boolean
    loginType?: boolean
    embedData?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["metaIntegration"]>

  export type MetaIntegrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    wabaId?: boolean
    accessToken?: boolean
    businessPhoneNumberId?: boolean
    appId?: boolean
    loginType?: boolean
    embedData?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["metaIntegration"]>

  export type MetaIntegrationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    wabaId?: boolean
    accessToken?: boolean
    businessPhoneNumberId?: boolean
    appId?: boolean
    loginType?: boolean
    embedData?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["metaIntegration"]>

  export type MetaIntegrationSelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    wabaId?: boolean
    accessToken?: boolean
    businessPhoneNumberId?: boolean
    appId?: boolean
    loginType?: boolean
    embedData?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MetaIntegrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "wabaId" | "accessToken" | "businessPhoneNumberId" | "appId" | "loginType" | "embedData" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["metaIntegration"]>

  export type $MetaIntegrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MetaIntegration"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organizationId: string | null
      wabaId: string | null
      accessToken: string | null
      businessPhoneNumberId: string | null
      appId: string | null
      loginType: string | null
      embedData: Prisma.JsonValue | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["metaIntegration"]>
    composites: {}
  }

  type MetaIntegrationGetPayload<S extends boolean | null | undefined | MetaIntegrationDefaultArgs> = $Result.GetResult<Prisma.$MetaIntegrationPayload, S>

  type MetaIntegrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetaIntegrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetaIntegrationCountAggregateInputType | true
    }

  export interface MetaIntegrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MetaIntegration'], meta: { name: 'MetaIntegration' } }
    /**
     * Find zero or one MetaIntegration that matches the filter.
     * @param {MetaIntegrationFindUniqueArgs} args - Arguments to find a MetaIntegration
     * @example
     * // Get one MetaIntegration
     * const metaIntegration = await prisma.metaIntegration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetaIntegrationFindUniqueArgs>(args: SelectSubset<T, MetaIntegrationFindUniqueArgs<ExtArgs>>): Prisma__MetaIntegrationClient<$Result.GetResult<Prisma.$MetaIntegrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MetaIntegration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetaIntegrationFindUniqueOrThrowArgs} args - Arguments to find a MetaIntegration
     * @example
     * // Get one MetaIntegration
     * const metaIntegration = await prisma.metaIntegration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetaIntegrationFindUniqueOrThrowArgs>(args: SelectSubset<T, MetaIntegrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetaIntegrationClient<$Result.GetResult<Prisma.$MetaIntegrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetaIntegration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaIntegrationFindFirstArgs} args - Arguments to find a MetaIntegration
     * @example
     * // Get one MetaIntegration
     * const metaIntegration = await prisma.metaIntegration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetaIntegrationFindFirstArgs>(args?: SelectSubset<T, MetaIntegrationFindFirstArgs<ExtArgs>>): Prisma__MetaIntegrationClient<$Result.GetResult<Prisma.$MetaIntegrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetaIntegration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaIntegrationFindFirstOrThrowArgs} args - Arguments to find a MetaIntegration
     * @example
     * // Get one MetaIntegration
     * const metaIntegration = await prisma.metaIntegration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetaIntegrationFindFirstOrThrowArgs>(args?: SelectSubset<T, MetaIntegrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetaIntegrationClient<$Result.GetResult<Prisma.$MetaIntegrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MetaIntegrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaIntegrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MetaIntegrations
     * const metaIntegrations = await prisma.metaIntegration.findMany()
     * 
     * // Get first 10 MetaIntegrations
     * const metaIntegrations = await prisma.metaIntegration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metaIntegrationWithIdOnly = await prisma.metaIntegration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetaIntegrationFindManyArgs>(args?: SelectSubset<T, MetaIntegrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaIntegrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MetaIntegration.
     * @param {MetaIntegrationCreateArgs} args - Arguments to create a MetaIntegration.
     * @example
     * // Create one MetaIntegration
     * const MetaIntegration = await prisma.metaIntegration.create({
     *   data: {
     *     // ... data to create a MetaIntegration
     *   }
     * })
     * 
     */
    create<T extends MetaIntegrationCreateArgs>(args: SelectSubset<T, MetaIntegrationCreateArgs<ExtArgs>>): Prisma__MetaIntegrationClient<$Result.GetResult<Prisma.$MetaIntegrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MetaIntegrations.
     * @param {MetaIntegrationCreateManyArgs} args - Arguments to create many MetaIntegrations.
     * @example
     * // Create many MetaIntegrations
     * const metaIntegration = await prisma.metaIntegration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetaIntegrationCreateManyArgs>(args?: SelectSubset<T, MetaIntegrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MetaIntegrations and returns the data saved in the database.
     * @param {MetaIntegrationCreateManyAndReturnArgs} args - Arguments to create many MetaIntegrations.
     * @example
     * // Create many MetaIntegrations
     * const metaIntegration = await prisma.metaIntegration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MetaIntegrations and only return the `id`
     * const metaIntegrationWithIdOnly = await prisma.metaIntegration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetaIntegrationCreateManyAndReturnArgs>(args?: SelectSubset<T, MetaIntegrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaIntegrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MetaIntegration.
     * @param {MetaIntegrationDeleteArgs} args - Arguments to delete one MetaIntegration.
     * @example
     * // Delete one MetaIntegration
     * const MetaIntegration = await prisma.metaIntegration.delete({
     *   where: {
     *     // ... filter to delete one MetaIntegration
     *   }
     * })
     * 
     */
    delete<T extends MetaIntegrationDeleteArgs>(args: SelectSubset<T, MetaIntegrationDeleteArgs<ExtArgs>>): Prisma__MetaIntegrationClient<$Result.GetResult<Prisma.$MetaIntegrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MetaIntegration.
     * @param {MetaIntegrationUpdateArgs} args - Arguments to update one MetaIntegration.
     * @example
     * // Update one MetaIntegration
     * const metaIntegration = await prisma.metaIntegration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetaIntegrationUpdateArgs>(args: SelectSubset<T, MetaIntegrationUpdateArgs<ExtArgs>>): Prisma__MetaIntegrationClient<$Result.GetResult<Prisma.$MetaIntegrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MetaIntegrations.
     * @param {MetaIntegrationDeleteManyArgs} args - Arguments to filter MetaIntegrations to delete.
     * @example
     * // Delete a few MetaIntegrations
     * const { count } = await prisma.metaIntegration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetaIntegrationDeleteManyArgs>(args?: SelectSubset<T, MetaIntegrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetaIntegrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaIntegrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MetaIntegrations
     * const metaIntegration = await prisma.metaIntegration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetaIntegrationUpdateManyArgs>(args: SelectSubset<T, MetaIntegrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetaIntegrations and returns the data updated in the database.
     * @param {MetaIntegrationUpdateManyAndReturnArgs} args - Arguments to update many MetaIntegrations.
     * @example
     * // Update many MetaIntegrations
     * const metaIntegration = await prisma.metaIntegration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MetaIntegrations and only return the `id`
     * const metaIntegrationWithIdOnly = await prisma.metaIntegration.updateManyAndReturn({
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
    updateManyAndReturn<T extends MetaIntegrationUpdateManyAndReturnArgs>(args: SelectSubset<T, MetaIntegrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaIntegrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MetaIntegration.
     * @param {MetaIntegrationUpsertArgs} args - Arguments to update or create a MetaIntegration.
     * @example
     * // Update or create a MetaIntegration
     * const metaIntegration = await prisma.metaIntegration.upsert({
     *   create: {
     *     // ... data to create a MetaIntegration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MetaIntegration we want to update
     *   }
     * })
     */
    upsert<T extends MetaIntegrationUpsertArgs>(args: SelectSubset<T, MetaIntegrationUpsertArgs<ExtArgs>>): Prisma__MetaIntegrationClient<$Result.GetResult<Prisma.$MetaIntegrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MetaIntegrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaIntegrationCountArgs} args - Arguments to filter MetaIntegrations to count.
     * @example
     * // Count the number of MetaIntegrations
     * const count = await prisma.metaIntegration.count({
     *   where: {
     *     // ... the filter for the MetaIntegrations we want to count
     *   }
     * })
    **/
    count<T extends MetaIntegrationCountArgs>(
      args?: Subset<T, MetaIntegrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetaIntegrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MetaIntegration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaIntegrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MetaIntegrationAggregateArgs>(args: Subset<T, MetaIntegrationAggregateArgs>): Prisma.PrismaPromise<GetMetaIntegrationAggregateType<T>>

    /**
     * Group by MetaIntegration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaIntegrationGroupByArgs} args - Group by arguments.
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
      T extends MetaIntegrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetaIntegrationGroupByArgs['orderBy'] }
        : { orderBy?: MetaIntegrationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MetaIntegrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetaIntegrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MetaIntegration model
   */
  readonly fields: MetaIntegrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MetaIntegration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetaIntegrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MetaIntegration model
   */
  interface MetaIntegrationFieldRefs {
    readonly id: FieldRef<"MetaIntegration", 'String'>
    readonly userId: FieldRef<"MetaIntegration", 'String'>
    readonly organizationId: FieldRef<"MetaIntegration", 'String'>
    readonly wabaId: FieldRef<"MetaIntegration", 'String'>
    readonly accessToken: FieldRef<"MetaIntegration", 'String'>
    readonly businessPhoneNumberId: FieldRef<"MetaIntegration", 'String'>
    readonly appId: FieldRef<"MetaIntegration", 'String'>
    readonly loginType: FieldRef<"MetaIntegration", 'String'>
    readonly embedData: FieldRef<"MetaIntegration", 'Json'>
    readonly isActive: FieldRef<"MetaIntegration", 'Boolean'>
    readonly createdAt: FieldRef<"MetaIntegration", 'DateTime'>
    readonly updatedAt: FieldRef<"MetaIntegration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MetaIntegration findUnique
   */
  export type MetaIntegrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaIntegration
     */
    select?: MetaIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaIntegration
     */
    omit?: MetaIntegrationOmit<ExtArgs> | null
    /**
     * Filter, which MetaIntegration to fetch.
     */
    where: MetaIntegrationWhereUniqueInput
  }

  /**
   * MetaIntegration findUniqueOrThrow
   */
  export type MetaIntegrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaIntegration
     */
    select?: MetaIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaIntegration
     */
    omit?: MetaIntegrationOmit<ExtArgs> | null
    /**
     * Filter, which MetaIntegration to fetch.
     */
    where: MetaIntegrationWhereUniqueInput
  }

  /**
   * MetaIntegration findFirst
   */
  export type MetaIntegrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaIntegration
     */
    select?: MetaIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaIntegration
     */
    omit?: MetaIntegrationOmit<ExtArgs> | null
    /**
     * Filter, which MetaIntegration to fetch.
     */
    where?: MetaIntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaIntegrations to fetch.
     */
    orderBy?: MetaIntegrationOrderByWithRelationInput | MetaIntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetaIntegrations.
     */
    cursor?: MetaIntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaIntegrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaIntegrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetaIntegrations.
     */
    distinct?: MetaIntegrationScalarFieldEnum | MetaIntegrationScalarFieldEnum[]
  }

  /**
   * MetaIntegration findFirstOrThrow
   */
  export type MetaIntegrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaIntegration
     */
    select?: MetaIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaIntegration
     */
    omit?: MetaIntegrationOmit<ExtArgs> | null
    /**
     * Filter, which MetaIntegration to fetch.
     */
    where?: MetaIntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaIntegrations to fetch.
     */
    orderBy?: MetaIntegrationOrderByWithRelationInput | MetaIntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetaIntegrations.
     */
    cursor?: MetaIntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaIntegrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaIntegrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetaIntegrations.
     */
    distinct?: MetaIntegrationScalarFieldEnum | MetaIntegrationScalarFieldEnum[]
  }

  /**
   * MetaIntegration findMany
   */
  export type MetaIntegrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaIntegration
     */
    select?: MetaIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaIntegration
     */
    omit?: MetaIntegrationOmit<ExtArgs> | null
    /**
     * Filter, which MetaIntegrations to fetch.
     */
    where?: MetaIntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaIntegrations to fetch.
     */
    orderBy?: MetaIntegrationOrderByWithRelationInput | MetaIntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MetaIntegrations.
     */
    cursor?: MetaIntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaIntegrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaIntegrations.
     */
    skip?: number
    distinct?: MetaIntegrationScalarFieldEnum | MetaIntegrationScalarFieldEnum[]
  }

  /**
   * MetaIntegration create
   */
  export type MetaIntegrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaIntegration
     */
    select?: MetaIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaIntegration
     */
    omit?: MetaIntegrationOmit<ExtArgs> | null
    /**
     * The data needed to create a MetaIntegration.
     */
    data: XOR<MetaIntegrationCreateInput, MetaIntegrationUncheckedCreateInput>
  }

  /**
   * MetaIntegration createMany
   */
  export type MetaIntegrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MetaIntegrations.
     */
    data: MetaIntegrationCreateManyInput | MetaIntegrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MetaIntegration createManyAndReturn
   */
  export type MetaIntegrationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaIntegration
     */
    select?: MetaIntegrationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MetaIntegration
     */
    omit?: MetaIntegrationOmit<ExtArgs> | null
    /**
     * The data used to create many MetaIntegrations.
     */
    data: MetaIntegrationCreateManyInput | MetaIntegrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MetaIntegration update
   */
  export type MetaIntegrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaIntegration
     */
    select?: MetaIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaIntegration
     */
    omit?: MetaIntegrationOmit<ExtArgs> | null
    /**
     * The data needed to update a MetaIntegration.
     */
    data: XOR<MetaIntegrationUpdateInput, MetaIntegrationUncheckedUpdateInput>
    /**
     * Choose, which MetaIntegration to update.
     */
    where: MetaIntegrationWhereUniqueInput
  }

  /**
   * MetaIntegration updateMany
   */
  export type MetaIntegrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MetaIntegrations.
     */
    data: XOR<MetaIntegrationUpdateManyMutationInput, MetaIntegrationUncheckedUpdateManyInput>
    /**
     * Filter which MetaIntegrations to update
     */
    where?: MetaIntegrationWhereInput
    /**
     * Limit how many MetaIntegrations to update.
     */
    limit?: number
  }

  /**
   * MetaIntegration updateManyAndReturn
   */
  export type MetaIntegrationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaIntegration
     */
    select?: MetaIntegrationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MetaIntegration
     */
    omit?: MetaIntegrationOmit<ExtArgs> | null
    /**
     * The data used to update MetaIntegrations.
     */
    data: XOR<MetaIntegrationUpdateManyMutationInput, MetaIntegrationUncheckedUpdateManyInput>
    /**
     * Filter which MetaIntegrations to update
     */
    where?: MetaIntegrationWhereInput
    /**
     * Limit how many MetaIntegrations to update.
     */
    limit?: number
  }

  /**
   * MetaIntegration upsert
   */
  export type MetaIntegrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaIntegration
     */
    select?: MetaIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaIntegration
     */
    omit?: MetaIntegrationOmit<ExtArgs> | null
    /**
     * The filter to search for the MetaIntegration to update in case it exists.
     */
    where: MetaIntegrationWhereUniqueInput
    /**
     * In case the MetaIntegration found by the `where` argument doesn't exist, create a new MetaIntegration with this data.
     */
    create: XOR<MetaIntegrationCreateInput, MetaIntegrationUncheckedCreateInput>
    /**
     * In case the MetaIntegration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetaIntegrationUpdateInput, MetaIntegrationUncheckedUpdateInput>
  }

  /**
   * MetaIntegration delete
   */
  export type MetaIntegrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaIntegration
     */
    select?: MetaIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaIntegration
     */
    omit?: MetaIntegrationOmit<ExtArgs> | null
    /**
     * Filter which MetaIntegration to delete.
     */
    where: MetaIntegrationWhereUniqueInput
  }

  /**
   * MetaIntegration deleteMany
   */
  export type MetaIntegrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetaIntegrations to delete
     */
    where?: MetaIntegrationWhereInput
    /**
     * Limit how many MetaIntegrations to delete.
     */
    limit?: number
  }

  /**
   * MetaIntegration without action
   */
  export type MetaIntegrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaIntegration
     */
    select?: MetaIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetaIntegration
     */
    omit?: MetaIntegrationOmit<ExtArgs> | null
  }


  /**
   * Model VoiceIntegration
   */

  export type AggregateVoiceIntegration = {
    _count: VoiceIntegrationCountAggregateOutputType | null
    _min: VoiceIntegrationMinAggregateOutputType | null
    _max: VoiceIntegrationMaxAggregateOutputType | null
  }

  export type VoiceIntegrationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    provider: string | null
    apiKey: string | null
    voiceId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VoiceIntegrationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    provider: string | null
    apiKey: string | null
    voiceId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VoiceIntegrationCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    provider: number
    apiKey: number
    voiceId: number
    settings: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VoiceIntegrationMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    provider?: true
    apiKey?: true
    voiceId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VoiceIntegrationMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    provider?: true
    apiKey?: true
    voiceId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VoiceIntegrationCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    provider?: true
    apiKey?: true
    voiceId?: true
    settings?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VoiceIntegrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VoiceIntegration to aggregate.
     */
    where?: VoiceIntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoiceIntegrations to fetch.
     */
    orderBy?: VoiceIntegrationOrderByWithRelationInput | VoiceIntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoiceIntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoiceIntegrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoiceIntegrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VoiceIntegrations
    **/
    _count?: true | VoiceIntegrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoiceIntegrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoiceIntegrationMaxAggregateInputType
  }

  export type GetVoiceIntegrationAggregateType<T extends VoiceIntegrationAggregateArgs> = {
        [P in keyof T & keyof AggregateVoiceIntegration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoiceIntegration[P]>
      : GetScalarType<T[P], AggregateVoiceIntegration[P]>
  }




  export type VoiceIntegrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoiceIntegrationWhereInput
    orderBy?: VoiceIntegrationOrderByWithAggregationInput | VoiceIntegrationOrderByWithAggregationInput[]
    by: VoiceIntegrationScalarFieldEnum[] | VoiceIntegrationScalarFieldEnum
    having?: VoiceIntegrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoiceIntegrationCountAggregateInputType | true
    _min?: VoiceIntegrationMinAggregateInputType
    _max?: VoiceIntegrationMaxAggregateInputType
  }

  export type VoiceIntegrationGroupByOutputType = {
    id: string
    userId: string
    organizationId: string | null
    provider: string
    apiKey: string | null
    voiceId: string | null
    settings: JsonValue | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: VoiceIntegrationCountAggregateOutputType | null
    _min: VoiceIntegrationMinAggregateOutputType | null
    _max: VoiceIntegrationMaxAggregateOutputType | null
  }

  type GetVoiceIntegrationGroupByPayload<T extends VoiceIntegrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoiceIntegrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoiceIntegrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoiceIntegrationGroupByOutputType[P]>
            : GetScalarType<T[P], VoiceIntegrationGroupByOutputType[P]>
        }
      >
    >


  export type VoiceIntegrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    provider?: boolean
    apiKey?: boolean
    voiceId?: boolean
    settings?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["voiceIntegration"]>

  export type VoiceIntegrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    provider?: boolean
    apiKey?: boolean
    voiceId?: boolean
    settings?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["voiceIntegration"]>

  export type VoiceIntegrationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    provider?: boolean
    apiKey?: boolean
    voiceId?: boolean
    settings?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["voiceIntegration"]>

  export type VoiceIntegrationSelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    provider?: boolean
    apiKey?: boolean
    voiceId?: boolean
    settings?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VoiceIntegrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "provider" | "apiKey" | "voiceId" | "settings" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["voiceIntegration"]>

  export type $VoiceIntegrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VoiceIntegration"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organizationId: string | null
      provider: string
      apiKey: string | null
      voiceId: string | null
      settings: Prisma.JsonValue | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["voiceIntegration"]>
    composites: {}
  }

  type VoiceIntegrationGetPayload<S extends boolean | null | undefined | VoiceIntegrationDefaultArgs> = $Result.GetResult<Prisma.$VoiceIntegrationPayload, S>

  type VoiceIntegrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoiceIntegrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoiceIntegrationCountAggregateInputType | true
    }

  export interface VoiceIntegrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VoiceIntegration'], meta: { name: 'VoiceIntegration' } }
    /**
     * Find zero or one VoiceIntegration that matches the filter.
     * @param {VoiceIntegrationFindUniqueArgs} args - Arguments to find a VoiceIntegration
     * @example
     * // Get one VoiceIntegration
     * const voiceIntegration = await prisma.voiceIntegration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoiceIntegrationFindUniqueArgs>(args: SelectSubset<T, VoiceIntegrationFindUniqueArgs<ExtArgs>>): Prisma__VoiceIntegrationClient<$Result.GetResult<Prisma.$VoiceIntegrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VoiceIntegration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoiceIntegrationFindUniqueOrThrowArgs} args - Arguments to find a VoiceIntegration
     * @example
     * // Get one VoiceIntegration
     * const voiceIntegration = await prisma.voiceIntegration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoiceIntegrationFindUniqueOrThrowArgs>(args: SelectSubset<T, VoiceIntegrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoiceIntegrationClient<$Result.GetResult<Prisma.$VoiceIntegrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VoiceIntegration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceIntegrationFindFirstArgs} args - Arguments to find a VoiceIntegration
     * @example
     * // Get one VoiceIntegration
     * const voiceIntegration = await prisma.voiceIntegration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoiceIntegrationFindFirstArgs>(args?: SelectSubset<T, VoiceIntegrationFindFirstArgs<ExtArgs>>): Prisma__VoiceIntegrationClient<$Result.GetResult<Prisma.$VoiceIntegrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VoiceIntegration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceIntegrationFindFirstOrThrowArgs} args - Arguments to find a VoiceIntegration
     * @example
     * // Get one VoiceIntegration
     * const voiceIntegration = await prisma.voiceIntegration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoiceIntegrationFindFirstOrThrowArgs>(args?: SelectSubset<T, VoiceIntegrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoiceIntegrationClient<$Result.GetResult<Prisma.$VoiceIntegrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VoiceIntegrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceIntegrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VoiceIntegrations
     * const voiceIntegrations = await prisma.voiceIntegration.findMany()
     * 
     * // Get first 10 VoiceIntegrations
     * const voiceIntegrations = await prisma.voiceIntegration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voiceIntegrationWithIdOnly = await prisma.voiceIntegration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoiceIntegrationFindManyArgs>(args?: SelectSubset<T, VoiceIntegrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoiceIntegrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VoiceIntegration.
     * @param {VoiceIntegrationCreateArgs} args - Arguments to create a VoiceIntegration.
     * @example
     * // Create one VoiceIntegration
     * const VoiceIntegration = await prisma.voiceIntegration.create({
     *   data: {
     *     // ... data to create a VoiceIntegration
     *   }
     * })
     * 
     */
    create<T extends VoiceIntegrationCreateArgs>(args: SelectSubset<T, VoiceIntegrationCreateArgs<ExtArgs>>): Prisma__VoiceIntegrationClient<$Result.GetResult<Prisma.$VoiceIntegrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VoiceIntegrations.
     * @param {VoiceIntegrationCreateManyArgs} args - Arguments to create many VoiceIntegrations.
     * @example
     * // Create many VoiceIntegrations
     * const voiceIntegration = await prisma.voiceIntegration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoiceIntegrationCreateManyArgs>(args?: SelectSubset<T, VoiceIntegrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VoiceIntegrations and returns the data saved in the database.
     * @param {VoiceIntegrationCreateManyAndReturnArgs} args - Arguments to create many VoiceIntegrations.
     * @example
     * // Create many VoiceIntegrations
     * const voiceIntegration = await prisma.voiceIntegration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VoiceIntegrations and only return the `id`
     * const voiceIntegrationWithIdOnly = await prisma.voiceIntegration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoiceIntegrationCreateManyAndReturnArgs>(args?: SelectSubset<T, VoiceIntegrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoiceIntegrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VoiceIntegration.
     * @param {VoiceIntegrationDeleteArgs} args - Arguments to delete one VoiceIntegration.
     * @example
     * // Delete one VoiceIntegration
     * const VoiceIntegration = await prisma.voiceIntegration.delete({
     *   where: {
     *     // ... filter to delete one VoiceIntegration
     *   }
     * })
     * 
     */
    delete<T extends VoiceIntegrationDeleteArgs>(args: SelectSubset<T, VoiceIntegrationDeleteArgs<ExtArgs>>): Prisma__VoiceIntegrationClient<$Result.GetResult<Prisma.$VoiceIntegrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VoiceIntegration.
     * @param {VoiceIntegrationUpdateArgs} args - Arguments to update one VoiceIntegration.
     * @example
     * // Update one VoiceIntegration
     * const voiceIntegration = await prisma.voiceIntegration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoiceIntegrationUpdateArgs>(args: SelectSubset<T, VoiceIntegrationUpdateArgs<ExtArgs>>): Prisma__VoiceIntegrationClient<$Result.GetResult<Prisma.$VoiceIntegrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VoiceIntegrations.
     * @param {VoiceIntegrationDeleteManyArgs} args - Arguments to filter VoiceIntegrations to delete.
     * @example
     * // Delete a few VoiceIntegrations
     * const { count } = await prisma.voiceIntegration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoiceIntegrationDeleteManyArgs>(args?: SelectSubset<T, VoiceIntegrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VoiceIntegrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceIntegrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VoiceIntegrations
     * const voiceIntegration = await prisma.voiceIntegration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoiceIntegrationUpdateManyArgs>(args: SelectSubset<T, VoiceIntegrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VoiceIntegrations and returns the data updated in the database.
     * @param {VoiceIntegrationUpdateManyAndReturnArgs} args - Arguments to update many VoiceIntegrations.
     * @example
     * // Update many VoiceIntegrations
     * const voiceIntegration = await prisma.voiceIntegration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VoiceIntegrations and only return the `id`
     * const voiceIntegrationWithIdOnly = await prisma.voiceIntegration.updateManyAndReturn({
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
    updateManyAndReturn<T extends VoiceIntegrationUpdateManyAndReturnArgs>(args: SelectSubset<T, VoiceIntegrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoiceIntegrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VoiceIntegration.
     * @param {VoiceIntegrationUpsertArgs} args - Arguments to update or create a VoiceIntegration.
     * @example
     * // Update or create a VoiceIntegration
     * const voiceIntegration = await prisma.voiceIntegration.upsert({
     *   create: {
     *     // ... data to create a VoiceIntegration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VoiceIntegration we want to update
     *   }
     * })
     */
    upsert<T extends VoiceIntegrationUpsertArgs>(args: SelectSubset<T, VoiceIntegrationUpsertArgs<ExtArgs>>): Prisma__VoiceIntegrationClient<$Result.GetResult<Prisma.$VoiceIntegrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VoiceIntegrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceIntegrationCountArgs} args - Arguments to filter VoiceIntegrations to count.
     * @example
     * // Count the number of VoiceIntegrations
     * const count = await prisma.voiceIntegration.count({
     *   where: {
     *     // ... the filter for the VoiceIntegrations we want to count
     *   }
     * })
    **/
    count<T extends VoiceIntegrationCountArgs>(
      args?: Subset<T, VoiceIntegrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoiceIntegrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VoiceIntegration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceIntegrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VoiceIntegrationAggregateArgs>(args: Subset<T, VoiceIntegrationAggregateArgs>): Prisma.PrismaPromise<GetVoiceIntegrationAggregateType<T>>

    /**
     * Group by VoiceIntegration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceIntegrationGroupByArgs} args - Group by arguments.
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
      T extends VoiceIntegrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoiceIntegrationGroupByArgs['orderBy'] }
        : { orderBy?: VoiceIntegrationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VoiceIntegrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoiceIntegrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VoiceIntegration model
   */
  readonly fields: VoiceIntegrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VoiceIntegration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoiceIntegrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VoiceIntegration model
   */
  interface VoiceIntegrationFieldRefs {
    readonly id: FieldRef<"VoiceIntegration", 'String'>
    readonly userId: FieldRef<"VoiceIntegration", 'String'>
    readonly organizationId: FieldRef<"VoiceIntegration", 'String'>
    readonly provider: FieldRef<"VoiceIntegration", 'String'>
    readonly apiKey: FieldRef<"VoiceIntegration", 'String'>
    readonly voiceId: FieldRef<"VoiceIntegration", 'String'>
    readonly settings: FieldRef<"VoiceIntegration", 'Json'>
    readonly isActive: FieldRef<"VoiceIntegration", 'Boolean'>
    readonly createdAt: FieldRef<"VoiceIntegration", 'DateTime'>
    readonly updatedAt: FieldRef<"VoiceIntegration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VoiceIntegration findUnique
   */
  export type VoiceIntegrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceIntegration
     */
    select?: VoiceIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceIntegration
     */
    omit?: VoiceIntegrationOmit<ExtArgs> | null
    /**
     * Filter, which VoiceIntegration to fetch.
     */
    where: VoiceIntegrationWhereUniqueInput
  }

  /**
   * VoiceIntegration findUniqueOrThrow
   */
  export type VoiceIntegrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceIntegration
     */
    select?: VoiceIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceIntegration
     */
    omit?: VoiceIntegrationOmit<ExtArgs> | null
    /**
     * Filter, which VoiceIntegration to fetch.
     */
    where: VoiceIntegrationWhereUniqueInput
  }

  /**
   * VoiceIntegration findFirst
   */
  export type VoiceIntegrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceIntegration
     */
    select?: VoiceIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceIntegration
     */
    omit?: VoiceIntegrationOmit<ExtArgs> | null
    /**
     * Filter, which VoiceIntegration to fetch.
     */
    where?: VoiceIntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoiceIntegrations to fetch.
     */
    orderBy?: VoiceIntegrationOrderByWithRelationInput | VoiceIntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VoiceIntegrations.
     */
    cursor?: VoiceIntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoiceIntegrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoiceIntegrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VoiceIntegrations.
     */
    distinct?: VoiceIntegrationScalarFieldEnum | VoiceIntegrationScalarFieldEnum[]
  }

  /**
   * VoiceIntegration findFirstOrThrow
   */
  export type VoiceIntegrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceIntegration
     */
    select?: VoiceIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceIntegration
     */
    omit?: VoiceIntegrationOmit<ExtArgs> | null
    /**
     * Filter, which VoiceIntegration to fetch.
     */
    where?: VoiceIntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoiceIntegrations to fetch.
     */
    orderBy?: VoiceIntegrationOrderByWithRelationInput | VoiceIntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VoiceIntegrations.
     */
    cursor?: VoiceIntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoiceIntegrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoiceIntegrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VoiceIntegrations.
     */
    distinct?: VoiceIntegrationScalarFieldEnum | VoiceIntegrationScalarFieldEnum[]
  }

  /**
   * VoiceIntegration findMany
   */
  export type VoiceIntegrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceIntegration
     */
    select?: VoiceIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceIntegration
     */
    omit?: VoiceIntegrationOmit<ExtArgs> | null
    /**
     * Filter, which VoiceIntegrations to fetch.
     */
    where?: VoiceIntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoiceIntegrations to fetch.
     */
    orderBy?: VoiceIntegrationOrderByWithRelationInput | VoiceIntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VoiceIntegrations.
     */
    cursor?: VoiceIntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoiceIntegrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoiceIntegrations.
     */
    skip?: number
    distinct?: VoiceIntegrationScalarFieldEnum | VoiceIntegrationScalarFieldEnum[]
  }

  /**
   * VoiceIntegration create
   */
  export type VoiceIntegrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceIntegration
     */
    select?: VoiceIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceIntegration
     */
    omit?: VoiceIntegrationOmit<ExtArgs> | null
    /**
     * The data needed to create a VoiceIntegration.
     */
    data: XOR<VoiceIntegrationCreateInput, VoiceIntegrationUncheckedCreateInput>
  }

  /**
   * VoiceIntegration createMany
   */
  export type VoiceIntegrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VoiceIntegrations.
     */
    data: VoiceIntegrationCreateManyInput | VoiceIntegrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VoiceIntegration createManyAndReturn
   */
  export type VoiceIntegrationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceIntegration
     */
    select?: VoiceIntegrationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceIntegration
     */
    omit?: VoiceIntegrationOmit<ExtArgs> | null
    /**
     * The data used to create many VoiceIntegrations.
     */
    data: VoiceIntegrationCreateManyInput | VoiceIntegrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VoiceIntegration update
   */
  export type VoiceIntegrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceIntegration
     */
    select?: VoiceIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceIntegration
     */
    omit?: VoiceIntegrationOmit<ExtArgs> | null
    /**
     * The data needed to update a VoiceIntegration.
     */
    data: XOR<VoiceIntegrationUpdateInput, VoiceIntegrationUncheckedUpdateInput>
    /**
     * Choose, which VoiceIntegration to update.
     */
    where: VoiceIntegrationWhereUniqueInput
  }

  /**
   * VoiceIntegration updateMany
   */
  export type VoiceIntegrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VoiceIntegrations.
     */
    data: XOR<VoiceIntegrationUpdateManyMutationInput, VoiceIntegrationUncheckedUpdateManyInput>
    /**
     * Filter which VoiceIntegrations to update
     */
    where?: VoiceIntegrationWhereInput
    /**
     * Limit how many VoiceIntegrations to update.
     */
    limit?: number
  }

  /**
   * VoiceIntegration updateManyAndReturn
   */
  export type VoiceIntegrationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceIntegration
     */
    select?: VoiceIntegrationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceIntegration
     */
    omit?: VoiceIntegrationOmit<ExtArgs> | null
    /**
     * The data used to update VoiceIntegrations.
     */
    data: XOR<VoiceIntegrationUpdateManyMutationInput, VoiceIntegrationUncheckedUpdateManyInput>
    /**
     * Filter which VoiceIntegrations to update
     */
    where?: VoiceIntegrationWhereInput
    /**
     * Limit how many VoiceIntegrations to update.
     */
    limit?: number
  }

  /**
   * VoiceIntegration upsert
   */
  export type VoiceIntegrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceIntegration
     */
    select?: VoiceIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceIntegration
     */
    omit?: VoiceIntegrationOmit<ExtArgs> | null
    /**
     * The filter to search for the VoiceIntegration to update in case it exists.
     */
    where: VoiceIntegrationWhereUniqueInput
    /**
     * In case the VoiceIntegration found by the `where` argument doesn't exist, create a new VoiceIntegration with this data.
     */
    create: XOR<VoiceIntegrationCreateInput, VoiceIntegrationUncheckedCreateInput>
    /**
     * In case the VoiceIntegration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoiceIntegrationUpdateInput, VoiceIntegrationUncheckedUpdateInput>
  }

  /**
   * VoiceIntegration delete
   */
  export type VoiceIntegrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceIntegration
     */
    select?: VoiceIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceIntegration
     */
    omit?: VoiceIntegrationOmit<ExtArgs> | null
    /**
     * Filter which VoiceIntegration to delete.
     */
    where: VoiceIntegrationWhereUniqueInput
  }

  /**
   * VoiceIntegration deleteMany
   */
  export type VoiceIntegrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VoiceIntegrations to delete
     */
    where?: VoiceIntegrationWhereInput
    /**
     * Limit how many VoiceIntegrations to delete.
     */
    limit?: number
  }

  /**
   * VoiceIntegration without action
   */
  export type VoiceIntegrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceIntegration
     */
    select?: VoiceIntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceIntegration
     */
    omit?: VoiceIntegrationOmit<ExtArgs> | null
  }


  /**
   * Model WhatsAppInstance
   */

  export type AggregateWhatsAppInstance = {
    _count: WhatsAppInstanceCountAggregateOutputType | null
    _min: WhatsAppInstanceMinAggregateOutputType | null
    _max: WhatsAppInstanceMaxAggregateOutputType | null
  }

  export type WhatsAppInstanceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    name: string | null
    instanceId: string | null
    status: string | null
    qr: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WhatsAppInstanceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    name: string | null
    instanceId: string | null
    status: string | null
    qr: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WhatsAppInstanceCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    name: number
    instanceId: number
    status: number
    qr: number
    phone: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WhatsAppInstanceMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    name?: true
    instanceId?: true
    status?: true
    qr?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WhatsAppInstanceMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    name?: true
    instanceId?: true
    status?: true
    qr?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WhatsAppInstanceCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    name?: true
    instanceId?: true
    status?: true
    qr?: true
    phone?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WhatsAppInstanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsAppInstance to aggregate.
     */
    where?: WhatsAppInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppInstances to fetch.
     */
    orderBy?: WhatsAppInstanceOrderByWithRelationInput | WhatsAppInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WhatsAppInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WhatsAppInstances
    **/
    _count?: true | WhatsAppInstanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WhatsAppInstanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WhatsAppInstanceMaxAggregateInputType
  }

  export type GetWhatsAppInstanceAggregateType<T extends WhatsAppInstanceAggregateArgs> = {
        [P in keyof T & keyof AggregateWhatsAppInstance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWhatsAppInstance[P]>
      : GetScalarType<T[P], AggregateWhatsAppInstance[P]>
  }




  export type WhatsAppInstanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsAppInstanceWhereInput
    orderBy?: WhatsAppInstanceOrderByWithAggregationInput | WhatsAppInstanceOrderByWithAggregationInput[]
    by: WhatsAppInstanceScalarFieldEnum[] | WhatsAppInstanceScalarFieldEnum
    having?: WhatsAppInstanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WhatsAppInstanceCountAggregateInputType | true
    _min?: WhatsAppInstanceMinAggregateInputType
    _max?: WhatsAppInstanceMaxAggregateInputType
  }

  export type WhatsAppInstanceGroupByOutputType = {
    id: string
    userId: string
    organizationId: string | null
    name: string | null
    instanceId: string
    status: string
    qr: string | null
    phone: string | null
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: WhatsAppInstanceCountAggregateOutputType | null
    _min: WhatsAppInstanceMinAggregateOutputType | null
    _max: WhatsAppInstanceMaxAggregateOutputType | null
  }

  type GetWhatsAppInstanceGroupByPayload<T extends WhatsAppInstanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WhatsAppInstanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WhatsAppInstanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WhatsAppInstanceGroupByOutputType[P]>
            : GetScalarType<T[P], WhatsAppInstanceGroupByOutputType[P]>
        }
      >
    >


  export type WhatsAppInstanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    name?: boolean
    instanceId?: boolean
    status?: boolean
    qr?: boolean
    phone?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["whatsAppInstance"]>

  export type WhatsAppInstanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    name?: boolean
    instanceId?: boolean
    status?: boolean
    qr?: boolean
    phone?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["whatsAppInstance"]>

  export type WhatsAppInstanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    name?: boolean
    instanceId?: boolean
    status?: boolean
    qr?: boolean
    phone?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["whatsAppInstance"]>

  export type WhatsAppInstanceSelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    name?: boolean
    instanceId?: boolean
    status?: boolean
    qr?: boolean
    phone?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WhatsAppInstanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "name" | "instanceId" | "status" | "qr" | "phone" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["whatsAppInstance"]>

  export type $WhatsAppInstancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WhatsAppInstance"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organizationId: string | null
      name: string | null
      instanceId: string
      status: string
      qr: string | null
      phone: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["whatsAppInstance"]>
    composites: {}
  }

  type WhatsAppInstanceGetPayload<S extends boolean | null | undefined | WhatsAppInstanceDefaultArgs> = $Result.GetResult<Prisma.$WhatsAppInstancePayload, S>

  type WhatsAppInstanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WhatsAppInstanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WhatsAppInstanceCountAggregateInputType | true
    }

  export interface WhatsAppInstanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WhatsAppInstance'], meta: { name: 'WhatsAppInstance' } }
    /**
     * Find zero or one WhatsAppInstance that matches the filter.
     * @param {WhatsAppInstanceFindUniqueArgs} args - Arguments to find a WhatsAppInstance
     * @example
     * // Get one WhatsAppInstance
     * const whatsAppInstance = await prisma.whatsAppInstance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WhatsAppInstanceFindUniqueArgs>(args: SelectSubset<T, WhatsAppInstanceFindUniqueArgs<ExtArgs>>): Prisma__WhatsAppInstanceClient<$Result.GetResult<Prisma.$WhatsAppInstancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WhatsAppInstance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WhatsAppInstanceFindUniqueOrThrowArgs} args - Arguments to find a WhatsAppInstance
     * @example
     * // Get one WhatsAppInstance
     * const whatsAppInstance = await prisma.whatsAppInstance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WhatsAppInstanceFindUniqueOrThrowArgs>(args: SelectSubset<T, WhatsAppInstanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WhatsAppInstanceClient<$Result.GetResult<Prisma.$WhatsAppInstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhatsAppInstance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppInstanceFindFirstArgs} args - Arguments to find a WhatsAppInstance
     * @example
     * // Get one WhatsAppInstance
     * const whatsAppInstance = await prisma.whatsAppInstance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WhatsAppInstanceFindFirstArgs>(args?: SelectSubset<T, WhatsAppInstanceFindFirstArgs<ExtArgs>>): Prisma__WhatsAppInstanceClient<$Result.GetResult<Prisma.$WhatsAppInstancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhatsAppInstance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppInstanceFindFirstOrThrowArgs} args - Arguments to find a WhatsAppInstance
     * @example
     * // Get one WhatsAppInstance
     * const whatsAppInstance = await prisma.whatsAppInstance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WhatsAppInstanceFindFirstOrThrowArgs>(args?: SelectSubset<T, WhatsAppInstanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__WhatsAppInstanceClient<$Result.GetResult<Prisma.$WhatsAppInstancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WhatsAppInstances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppInstanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WhatsAppInstances
     * const whatsAppInstances = await prisma.whatsAppInstance.findMany()
     * 
     * // Get first 10 WhatsAppInstances
     * const whatsAppInstances = await prisma.whatsAppInstance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const whatsAppInstanceWithIdOnly = await prisma.whatsAppInstance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WhatsAppInstanceFindManyArgs>(args?: SelectSubset<T, WhatsAppInstanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppInstancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WhatsAppInstance.
     * @param {WhatsAppInstanceCreateArgs} args - Arguments to create a WhatsAppInstance.
     * @example
     * // Create one WhatsAppInstance
     * const WhatsAppInstance = await prisma.whatsAppInstance.create({
     *   data: {
     *     // ... data to create a WhatsAppInstance
     *   }
     * })
     * 
     */
    create<T extends WhatsAppInstanceCreateArgs>(args: SelectSubset<T, WhatsAppInstanceCreateArgs<ExtArgs>>): Prisma__WhatsAppInstanceClient<$Result.GetResult<Prisma.$WhatsAppInstancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WhatsAppInstances.
     * @param {WhatsAppInstanceCreateManyArgs} args - Arguments to create many WhatsAppInstances.
     * @example
     * // Create many WhatsAppInstances
     * const whatsAppInstance = await prisma.whatsAppInstance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WhatsAppInstanceCreateManyArgs>(args?: SelectSubset<T, WhatsAppInstanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WhatsAppInstances and returns the data saved in the database.
     * @param {WhatsAppInstanceCreateManyAndReturnArgs} args - Arguments to create many WhatsAppInstances.
     * @example
     * // Create many WhatsAppInstances
     * const whatsAppInstance = await prisma.whatsAppInstance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WhatsAppInstances and only return the `id`
     * const whatsAppInstanceWithIdOnly = await prisma.whatsAppInstance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WhatsAppInstanceCreateManyAndReturnArgs>(args?: SelectSubset<T, WhatsAppInstanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppInstancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WhatsAppInstance.
     * @param {WhatsAppInstanceDeleteArgs} args - Arguments to delete one WhatsAppInstance.
     * @example
     * // Delete one WhatsAppInstance
     * const WhatsAppInstance = await prisma.whatsAppInstance.delete({
     *   where: {
     *     // ... filter to delete one WhatsAppInstance
     *   }
     * })
     * 
     */
    delete<T extends WhatsAppInstanceDeleteArgs>(args: SelectSubset<T, WhatsAppInstanceDeleteArgs<ExtArgs>>): Prisma__WhatsAppInstanceClient<$Result.GetResult<Prisma.$WhatsAppInstancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WhatsAppInstance.
     * @param {WhatsAppInstanceUpdateArgs} args - Arguments to update one WhatsAppInstance.
     * @example
     * // Update one WhatsAppInstance
     * const whatsAppInstance = await prisma.whatsAppInstance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WhatsAppInstanceUpdateArgs>(args: SelectSubset<T, WhatsAppInstanceUpdateArgs<ExtArgs>>): Prisma__WhatsAppInstanceClient<$Result.GetResult<Prisma.$WhatsAppInstancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WhatsAppInstances.
     * @param {WhatsAppInstanceDeleteManyArgs} args - Arguments to filter WhatsAppInstances to delete.
     * @example
     * // Delete a few WhatsAppInstances
     * const { count } = await prisma.whatsAppInstance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WhatsAppInstanceDeleteManyArgs>(args?: SelectSubset<T, WhatsAppInstanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhatsAppInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppInstanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WhatsAppInstances
     * const whatsAppInstance = await prisma.whatsAppInstance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WhatsAppInstanceUpdateManyArgs>(args: SelectSubset<T, WhatsAppInstanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhatsAppInstances and returns the data updated in the database.
     * @param {WhatsAppInstanceUpdateManyAndReturnArgs} args - Arguments to update many WhatsAppInstances.
     * @example
     * // Update many WhatsAppInstances
     * const whatsAppInstance = await prisma.whatsAppInstance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WhatsAppInstances and only return the `id`
     * const whatsAppInstanceWithIdOnly = await prisma.whatsAppInstance.updateManyAndReturn({
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
    updateManyAndReturn<T extends WhatsAppInstanceUpdateManyAndReturnArgs>(args: SelectSubset<T, WhatsAppInstanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppInstancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WhatsAppInstance.
     * @param {WhatsAppInstanceUpsertArgs} args - Arguments to update or create a WhatsAppInstance.
     * @example
     * // Update or create a WhatsAppInstance
     * const whatsAppInstance = await prisma.whatsAppInstance.upsert({
     *   create: {
     *     // ... data to create a WhatsAppInstance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WhatsAppInstance we want to update
     *   }
     * })
     */
    upsert<T extends WhatsAppInstanceUpsertArgs>(args: SelectSubset<T, WhatsAppInstanceUpsertArgs<ExtArgs>>): Prisma__WhatsAppInstanceClient<$Result.GetResult<Prisma.$WhatsAppInstancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WhatsAppInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppInstanceCountArgs} args - Arguments to filter WhatsAppInstances to count.
     * @example
     * // Count the number of WhatsAppInstances
     * const count = await prisma.whatsAppInstance.count({
     *   where: {
     *     // ... the filter for the WhatsAppInstances we want to count
     *   }
     * })
    **/
    count<T extends WhatsAppInstanceCountArgs>(
      args?: Subset<T, WhatsAppInstanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WhatsAppInstanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WhatsAppInstance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppInstanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WhatsAppInstanceAggregateArgs>(args: Subset<T, WhatsAppInstanceAggregateArgs>): Prisma.PrismaPromise<GetWhatsAppInstanceAggregateType<T>>

    /**
     * Group by WhatsAppInstance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppInstanceGroupByArgs} args - Group by arguments.
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
      T extends WhatsAppInstanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WhatsAppInstanceGroupByArgs['orderBy'] }
        : { orderBy?: WhatsAppInstanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WhatsAppInstanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhatsAppInstanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WhatsAppInstance model
   */
  readonly fields: WhatsAppInstanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WhatsAppInstance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WhatsAppInstanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the WhatsAppInstance model
   */
  interface WhatsAppInstanceFieldRefs {
    readonly id: FieldRef<"WhatsAppInstance", 'String'>
    readonly userId: FieldRef<"WhatsAppInstance", 'String'>
    readonly organizationId: FieldRef<"WhatsAppInstance", 'String'>
    readonly name: FieldRef<"WhatsAppInstance", 'String'>
    readonly instanceId: FieldRef<"WhatsAppInstance", 'String'>
    readonly status: FieldRef<"WhatsAppInstance", 'String'>
    readonly qr: FieldRef<"WhatsAppInstance", 'String'>
    readonly phone: FieldRef<"WhatsAppInstance", 'String'>
    readonly metadata: FieldRef<"WhatsAppInstance", 'Json'>
    readonly createdAt: FieldRef<"WhatsAppInstance", 'DateTime'>
    readonly updatedAt: FieldRef<"WhatsAppInstance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WhatsAppInstance findUnique
   */
  export type WhatsAppInstanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppInstance
     */
    select?: WhatsAppInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppInstance
     */
    omit?: WhatsAppInstanceOmit<ExtArgs> | null
    /**
     * Filter, which WhatsAppInstance to fetch.
     */
    where: WhatsAppInstanceWhereUniqueInput
  }

  /**
   * WhatsAppInstance findUniqueOrThrow
   */
  export type WhatsAppInstanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppInstance
     */
    select?: WhatsAppInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppInstance
     */
    omit?: WhatsAppInstanceOmit<ExtArgs> | null
    /**
     * Filter, which WhatsAppInstance to fetch.
     */
    where: WhatsAppInstanceWhereUniqueInput
  }

  /**
   * WhatsAppInstance findFirst
   */
  export type WhatsAppInstanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppInstance
     */
    select?: WhatsAppInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppInstance
     */
    omit?: WhatsAppInstanceOmit<ExtArgs> | null
    /**
     * Filter, which WhatsAppInstance to fetch.
     */
    where?: WhatsAppInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppInstances to fetch.
     */
    orderBy?: WhatsAppInstanceOrderByWithRelationInput | WhatsAppInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsAppInstances.
     */
    cursor?: WhatsAppInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsAppInstances.
     */
    distinct?: WhatsAppInstanceScalarFieldEnum | WhatsAppInstanceScalarFieldEnum[]
  }

  /**
   * WhatsAppInstance findFirstOrThrow
   */
  export type WhatsAppInstanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppInstance
     */
    select?: WhatsAppInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppInstance
     */
    omit?: WhatsAppInstanceOmit<ExtArgs> | null
    /**
     * Filter, which WhatsAppInstance to fetch.
     */
    where?: WhatsAppInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppInstances to fetch.
     */
    orderBy?: WhatsAppInstanceOrderByWithRelationInput | WhatsAppInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsAppInstances.
     */
    cursor?: WhatsAppInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsAppInstances.
     */
    distinct?: WhatsAppInstanceScalarFieldEnum | WhatsAppInstanceScalarFieldEnum[]
  }

  /**
   * WhatsAppInstance findMany
   */
  export type WhatsAppInstanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppInstance
     */
    select?: WhatsAppInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppInstance
     */
    omit?: WhatsAppInstanceOmit<ExtArgs> | null
    /**
     * Filter, which WhatsAppInstances to fetch.
     */
    where?: WhatsAppInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppInstances to fetch.
     */
    orderBy?: WhatsAppInstanceOrderByWithRelationInput | WhatsAppInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WhatsAppInstances.
     */
    cursor?: WhatsAppInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppInstances.
     */
    skip?: number
    distinct?: WhatsAppInstanceScalarFieldEnum | WhatsAppInstanceScalarFieldEnum[]
  }

  /**
   * WhatsAppInstance create
   */
  export type WhatsAppInstanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppInstance
     */
    select?: WhatsAppInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppInstance
     */
    omit?: WhatsAppInstanceOmit<ExtArgs> | null
    /**
     * The data needed to create a WhatsAppInstance.
     */
    data: XOR<WhatsAppInstanceCreateInput, WhatsAppInstanceUncheckedCreateInput>
  }

  /**
   * WhatsAppInstance createMany
   */
  export type WhatsAppInstanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WhatsAppInstances.
     */
    data: WhatsAppInstanceCreateManyInput | WhatsAppInstanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WhatsAppInstance createManyAndReturn
   */
  export type WhatsAppInstanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppInstance
     */
    select?: WhatsAppInstanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppInstance
     */
    omit?: WhatsAppInstanceOmit<ExtArgs> | null
    /**
     * The data used to create many WhatsAppInstances.
     */
    data: WhatsAppInstanceCreateManyInput | WhatsAppInstanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WhatsAppInstance update
   */
  export type WhatsAppInstanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppInstance
     */
    select?: WhatsAppInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppInstance
     */
    omit?: WhatsAppInstanceOmit<ExtArgs> | null
    /**
     * The data needed to update a WhatsAppInstance.
     */
    data: XOR<WhatsAppInstanceUpdateInput, WhatsAppInstanceUncheckedUpdateInput>
    /**
     * Choose, which WhatsAppInstance to update.
     */
    where: WhatsAppInstanceWhereUniqueInput
  }

  /**
   * WhatsAppInstance updateMany
   */
  export type WhatsAppInstanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WhatsAppInstances.
     */
    data: XOR<WhatsAppInstanceUpdateManyMutationInput, WhatsAppInstanceUncheckedUpdateManyInput>
    /**
     * Filter which WhatsAppInstances to update
     */
    where?: WhatsAppInstanceWhereInput
    /**
     * Limit how many WhatsAppInstances to update.
     */
    limit?: number
  }

  /**
   * WhatsAppInstance updateManyAndReturn
   */
  export type WhatsAppInstanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppInstance
     */
    select?: WhatsAppInstanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppInstance
     */
    omit?: WhatsAppInstanceOmit<ExtArgs> | null
    /**
     * The data used to update WhatsAppInstances.
     */
    data: XOR<WhatsAppInstanceUpdateManyMutationInput, WhatsAppInstanceUncheckedUpdateManyInput>
    /**
     * Filter which WhatsAppInstances to update
     */
    where?: WhatsAppInstanceWhereInput
    /**
     * Limit how many WhatsAppInstances to update.
     */
    limit?: number
  }

  /**
   * WhatsAppInstance upsert
   */
  export type WhatsAppInstanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppInstance
     */
    select?: WhatsAppInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppInstance
     */
    omit?: WhatsAppInstanceOmit<ExtArgs> | null
    /**
     * The filter to search for the WhatsAppInstance to update in case it exists.
     */
    where: WhatsAppInstanceWhereUniqueInput
    /**
     * In case the WhatsAppInstance found by the `where` argument doesn't exist, create a new WhatsAppInstance with this data.
     */
    create: XOR<WhatsAppInstanceCreateInput, WhatsAppInstanceUncheckedCreateInput>
    /**
     * In case the WhatsAppInstance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WhatsAppInstanceUpdateInput, WhatsAppInstanceUncheckedUpdateInput>
  }

  /**
   * WhatsAppInstance delete
   */
  export type WhatsAppInstanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppInstance
     */
    select?: WhatsAppInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppInstance
     */
    omit?: WhatsAppInstanceOmit<ExtArgs> | null
    /**
     * Filter which WhatsAppInstance to delete.
     */
    where: WhatsAppInstanceWhereUniqueInput
  }

  /**
   * WhatsAppInstance deleteMany
   */
  export type WhatsAppInstanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsAppInstances to delete
     */
    where?: WhatsAppInstanceWhereInput
    /**
     * Limit how many WhatsAppInstances to delete.
     */
    limit?: number
  }

  /**
   * WhatsAppInstance without action
   */
  export type WhatsAppInstanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppInstance
     */
    select?: WhatsAppInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppInstance
     */
    omit?: WhatsAppInstanceOmit<ExtArgs> | null
  }


  /**
   * Model TelegramSession
   */

  export type AggregateTelegramSession = {
    _count: TelegramSessionCountAggregateOutputType | null
    _min: TelegramSessionMinAggregateOutputType | null
    _max: TelegramSessionMaxAggregateOutputType | null
  }

  export type TelegramSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    name: string | null
    sessionId: string | null
    status: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TelegramSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    name: string | null
    sessionId: string | null
    status: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TelegramSessionCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    name: number
    sessionId: number
    status: number
    phone: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TelegramSessionMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    name?: true
    sessionId?: true
    status?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TelegramSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    name?: true
    sessionId?: true
    status?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TelegramSessionCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    name?: true
    sessionId?: true
    status?: true
    phone?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TelegramSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TelegramSession to aggregate.
     */
    where?: TelegramSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramSessions to fetch.
     */
    orderBy?: TelegramSessionOrderByWithRelationInput | TelegramSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TelegramSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TelegramSessions
    **/
    _count?: true | TelegramSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TelegramSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TelegramSessionMaxAggregateInputType
  }

  export type GetTelegramSessionAggregateType<T extends TelegramSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateTelegramSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTelegramSession[P]>
      : GetScalarType<T[P], AggregateTelegramSession[P]>
  }




  export type TelegramSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TelegramSessionWhereInput
    orderBy?: TelegramSessionOrderByWithAggregationInput | TelegramSessionOrderByWithAggregationInput[]
    by: TelegramSessionScalarFieldEnum[] | TelegramSessionScalarFieldEnum
    having?: TelegramSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TelegramSessionCountAggregateInputType | true
    _min?: TelegramSessionMinAggregateInputType
    _max?: TelegramSessionMaxAggregateInputType
  }

  export type TelegramSessionGroupByOutputType = {
    id: string
    userId: string
    organizationId: string | null
    name: string | null
    sessionId: string
    status: string
    phone: string | null
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: TelegramSessionCountAggregateOutputType | null
    _min: TelegramSessionMinAggregateOutputType | null
    _max: TelegramSessionMaxAggregateOutputType | null
  }

  type GetTelegramSessionGroupByPayload<T extends TelegramSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TelegramSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TelegramSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TelegramSessionGroupByOutputType[P]>
            : GetScalarType<T[P], TelegramSessionGroupByOutputType[P]>
        }
      >
    >


  export type TelegramSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    name?: boolean
    sessionId?: boolean
    status?: boolean
    phone?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["telegramSession"]>

  export type TelegramSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    name?: boolean
    sessionId?: boolean
    status?: boolean
    phone?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["telegramSession"]>

  export type TelegramSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    name?: boolean
    sessionId?: boolean
    status?: boolean
    phone?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["telegramSession"]>

  export type TelegramSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    name?: boolean
    sessionId?: boolean
    status?: boolean
    phone?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TelegramSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "name" | "sessionId" | "status" | "phone" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["telegramSession"]>

  export type $TelegramSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TelegramSession"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organizationId: string | null
      name: string | null
      sessionId: string
      status: string
      phone: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["telegramSession"]>
    composites: {}
  }

  type TelegramSessionGetPayload<S extends boolean | null | undefined | TelegramSessionDefaultArgs> = $Result.GetResult<Prisma.$TelegramSessionPayload, S>

  type TelegramSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TelegramSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TelegramSessionCountAggregateInputType | true
    }

  export interface TelegramSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TelegramSession'], meta: { name: 'TelegramSession' } }
    /**
     * Find zero or one TelegramSession that matches the filter.
     * @param {TelegramSessionFindUniqueArgs} args - Arguments to find a TelegramSession
     * @example
     * // Get one TelegramSession
     * const telegramSession = await prisma.telegramSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TelegramSessionFindUniqueArgs>(args: SelectSubset<T, TelegramSessionFindUniqueArgs<ExtArgs>>): Prisma__TelegramSessionClient<$Result.GetResult<Prisma.$TelegramSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TelegramSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TelegramSessionFindUniqueOrThrowArgs} args - Arguments to find a TelegramSession
     * @example
     * // Get one TelegramSession
     * const telegramSession = await prisma.telegramSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TelegramSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, TelegramSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TelegramSessionClient<$Result.GetResult<Prisma.$TelegramSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TelegramSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramSessionFindFirstArgs} args - Arguments to find a TelegramSession
     * @example
     * // Get one TelegramSession
     * const telegramSession = await prisma.telegramSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TelegramSessionFindFirstArgs>(args?: SelectSubset<T, TelegramSessionFindFirstArgs<ExtArgs>>): Prisma__TelegramSessionClient<$Result.GetResult<Prisma.$TelegramSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TelegramSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramSessionFindFirstOrThrowArgs} args - Arguments to find a TelegramSession
     * @example
     * // Get one TelegramSession
     * const telegramSession = await prisma.telegramSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TelegramSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, TelegramSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TelegramSessionClient<$Result.GetResult<Prisma.$TelegramSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TelegramSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TelegramSessions
     * const telegramSessions = await prisma.telegramSession.findMany()
     * 
     * // Get first 10 TelegramSessions
     * const telegramSessions = await prisma.telegramSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const telegramSessionWithIdOnly = await prisma.telegramSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TelegramSessionFindManyArgs>(args?: SelectSubset<T, TelegramSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TelegramSession.
     * @param {TelegramSessionCreateArgs} args - Arguments to create a TelegramSession.
     * @example
     * // Create one TelegramSession
     * const TelegramSession = await prisma.telegramSession.create({
     *   data: {
     *     // ... data to create a TelegramSession
     *   }
     * })
     * 
     */
    create<T extends TelegramSessionCreateArgs>(args: SelectSubset<T, TelegramSessionCreateArgs<ExtArgs>>): Prisma__TelegramSessionClient<$Result.GetResult<Prisma.$TelegramSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TelegramSessions.
     * @param {TelegramSessionCreateManyArgs} args - Arguments to create many TelegramSessions.
     * @example
     * // Create many TelegramSessions
     * const telegramSession = await prisma.telegramSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TelegramSessionCreateManyArgs>(args?: SelectSubset<T, TelegramSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TelegramSessions and returns the data saved in the database.
     * @param {TelegramSessionCreateManyAndReturnArgs} args - Arguments to create many TelegramSessions.
     * @example
     * // Create many TelegramSessions
     * const telegramSession = await prisma.telegramSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TelegramSessions and only return the `id`
     * const telegramSessionWithIdOnly = await prisma.telegramSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TelegramSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, TelegramSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TelegramSession.
     * @param {TelegramSessionDeleteArgs} args - Arguments to delete one TelegramSession.
     * @example
     * // Delete one TelegramSession
     * const TelegramSession = await prisma.telegramSession.delete({
     *   where: {
     *     // ... filter to delete one TelegramSession
     *   }
     * })
     * 
     */
    delete<T extends TelegramSessionDeleteArgs>(args: SelectSubset<T, TelegramSessionDeleteArgs<ExtArgs>>): Prisma__TelegramSessionClient<$Result.GetResult<Prisma.$TelegramSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TelegramSession.
     * @param {TelegramSessionUpdateArgs} args - Arguments to update one TelegramSession.
     * @example
     * // Update one TelegramSession
     * const telegramSession = await prisma.telegramSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TelegramSessionUpdateArgs>(args: SelectSubset<T, TelegramSessionUpdateArgs<ExtArgs>>): Prisma__TelegramSessionClient<$Result.GetResult<Prisma.$TelegramSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TelegramSessions.
     * @param {TelegramSessionDeleteManyArgs} args - Arguments to filter TelegramSessions to delete.
     * @example
     * // Delete a few TelegramSessions
     * const { count } = await prisma.telegramSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TelegramSessionDeleteManyArgs>(args?: SelectSubset<T, TelegramSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TelegramSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TelegramSessions
     * const telegramSession = await prisma.telegramSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TelegramSessionUpdateManyArgs>(args: SelectSubset<T, TelegramSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TelegramSessions and returns the data updated in the database.
     * @param {TelegramSessionUpdateManyAndReturnArgs} args - Arguments to update many TelegramSessions.
     * @example
     * // Update many TelegramSessions
     * const telegramSession = await prisma.telegramSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TelegramSessions and only return the `id`
     * const telegramSessionWithIdOnly = await prisma.telegramSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends TelegramSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, TelegramSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TelegramSession.
     * @param {TelegramSessionUpsertArgs} args - Arguments to update or create a TelegramSession.
     * @example
     * // Update or create a TelegramSession
     * const telegramSession = await prisma.telegramSession.upsert({
     *   create: {
     *     // ... data to create a TelegramSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TelegramSession we want to update
     *   }
     * })
     */
    upsert<T extends TelegramSessionUpsertArgs>(args: SelectSubset<T, TelegramSessionUpsertArgs<ExtArgs>>): Prisma__TelegramSessionClient<$Result.GetResult<Prisma.$TelegramSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TelegramSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramSessionCountArgs} args - Arguments to filter TelegramSessions to count.
     * @example
     * // Count the number of TelegramSessions
     * const count = await prisma.telegramSession.count({
     *   where: {
     *     // ... the filter for the TelegramSessions we want to count
     *   }
     * })
    **/
    count<T extends TelegramSessionCountArgs>(
      args?: Subset<T, TelegramSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TelegramSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TelegramSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TelegramSessionAggregateArgs>(args: Subset<T, TelegramSessionAggregateArgs>): Prisma.PrismaPromise<GetTelegramSessionAggregateType<T>>

    /**
     * Group by TelegramSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramSessionGroupByArgs} args - Group by arguments.
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
      T extends TelegramSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TelegramSessionGroupByArgs['orderBy'] }
        : { orderBy?: TelegramSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TelegramSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTelegramSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TelegramSession model
   */
  readonly fields: TelegramSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TelegramSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TelegramSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TelegramSession model
   */
  interface TelegramSessionFieldRefs {
    readonly id: FieldRef<"TelegramSession", 'String'>
    readonly userId: FieldRef<"TelegramSession", 'String'>
    readonly organizationId: FieldRef<"TelegramSession", 'String'>
    readonly name: FieldRef<"TelegramSession", 'String'>
    readonly sessionId: FieldRef<"TelegramSession", 'String'>
    readonly status: FieldRef<"TelegramSession", 'String'>
    readonly phone: FieldRef<"TelegramSession", 'String'>
    readonly metadata: FieldRef<"TelegramSession", 'Json'>
    readonly createdAt: FieldRef<"TelegramSession", 'DateTime'>
    readonly updatedAt: FieldRef<"TelegramSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TelegramSession findUnique
   */
  export type TelegramSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramSession
     */
    select?: TelegramSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramSession
     */
    omit?: TelegramSessionOmit<ExtArgs> | null
    /**
     * Filter, which TelegramSession to fetch.
     */
    where: TelegramSessionWhereUniqueInput
  }

  /**
   * TelegramSession findUniqueOrThrow
   */
  export type TelegramSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramSession
     */
    select?: TelegramSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramSession
     */
    omit?: TelegramSessionOmit<ExtArgs> | null
    /**
     * Filter, which TelegramSession to fetch.
     */
    where: TelegramSessionWhereUniqueInput
  }

  /**
   * TelegramSession findFirst
   */
  export type TelegramSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramSession
     */
    select?: TelegramSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramSession
     */
    omit?: TelegramSessionOmit<ExtArgs> | null
    /**
     * Filter, which TelegramSession to fetch.
     */
    where?: TelegramSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramSessions to fetch.
     */
    orderBy?: TelegramSessionOrderByWithRelationInput | TelegramSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TelegramSessions.
     */
    cursor?: TelegramSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TelegramSessions.
     */
    distinct?: TelegramSessionScalarFieldEnum | TelegramSessionScalarFieldEnum[]
  }

  /**
   * TelegramSession findFirstOrThrow
   */
  export type TelegramSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramSession
     */
    select?: TelegramSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramSession
     */
    omit?: TelegramSessionOmit<ExtArgs> | null
    /**
     * Filter, which TelegramSession to fetch.
     */
    where?: TelegramSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramSessions to fetch.
     */
    orderBy?: TelegramSessionOrderByWithRelationInput | TelegramSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TelegramSessions.
     */
    cursor?: TelegramSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TelegramSessions.
     */
    distinct?: TelegramSessionScalarFieldEnum | TelegramSessionScalarFieldEnum[]
  }

  /**
   * TelegramSession findMany
   */
  export type TelegramSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramSession
     */
    select?: TelegramSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramSession
     */
    omit?: TelegramSessionOmit<ExtArgs> | null
    /**
     * Filter, which TelegramSessions to fetch.
     */
    where?: TelegramSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramSessions to fetch.
     */
    orderBy?: TelegramSessionOrderByWithRelationInput | TelegramSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TelegramSessions.
     */
    cursor?: TelegramSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramSessions.
     */
    skip?: number
    distinct?: TelegramSessionScalarFieldEnum | TelegramSessionScalarFieldEnum[]
  }

  /**
   * TelegramSession create
   */
  export type TelegramSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramSession
     */
    select?: TelegramSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramSession
     */
    omit?: TelegramSessionOmit<ExtArgs> | null
    /**
     * The data needed to create a TelegramSession.
     */
    data: XOR<TelegramSessionCreateInput, TelegramSessionUncheckedCreateInput>
  }

  /**
   * TelegramSession createMany
   */
  export type TelegramSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TelegramSessions.
     */
    data: TelegramSessionCreateManyInput | TelegramSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TelegramSession createManyAndReturn
   */
  export type TelegramSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramSession
     */
    select?: TelegramSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramSession
     */
    omit?: TelegramSessionOmit<ExtArgs> | null
    /**
     * The data used to create many TelegramSessions.
     */
    data: TelegramSessionCreateManyInput | TelegramSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TelegramSession update
   */
  export type TelegramSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramSession
     */
    select?: TelegramSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramSession
     */
    omit?: TelegramSessionOmit<ExtArgs> | null
    /**
     * The data needed to update a TelegramSession.
     */
    data: XOR<TelegramSessionUpdateInput, TelegramSessionUncheckedUpdateInput>
    /**
     * Choose, which TelegramSession to update.
     */
    where: TelegramSessionWhereUniqueInput
  }

  /**
   * TelegramSession updateMany
   */
  export type TelegramSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TelegramSessions.
     */
    data: XOR<TelegramSessionUpdateManyMutationInput, TelegramSessionUncheckedUpdateManyInput>
    /**
     * Filter which TelegramSessions to update
     */
    where?: TelegramSessionWhereInput
    /**
     * Limit how many TelegramSessions to update.
     */
    limit?: number
  }

  /**
   * TelegramSession updateManyAndReturn
   */
  export type TelegramSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramSession
     */
    select?: TelegramSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramSession
     */
    omit?: TelegramSessionOmit<ExtArgs> | null
    /**
     * The data used to update TelegramSessions.
     */
    data: XOR<TelegramSessionUpdateManyMutationInput, TelegramSessionUncheckedUpdateManyInput>
    /**
     * Filter which TelegramSessions to update
     */
    where?: TelegramSessionWhereInput
    /**
     * Limit how many TelegramSessions to update.
     */
    limit?: number
  }

  /**
   * TelegramSession upsert
   */
  export type TelegramSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramSession
     */
    select?: TelegramSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramSession
     */
    omit?: TelegramSessionOmit<ExtArgs> | null
    /**
     * The filter to search for the TelegramSession to update in case it exists.
     */
    where: TelegramSessionWhereUniqueInput
    /**
     * In case the TelegramSession found by the `where` argument doesn't exist, create a new TelegramSession with this data.
     */
    create: XOR<TelegramSessionCreateInput, TelegramSessionUncheckedCreateInput>
    /**
     * In case the TelegramSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TelegramSessionUpdateInput, TelegramSessionUncheckedUpdateInput>
  }

  /**
   * TelegramSession delete
   */
  export type TelegramSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramSession
     */
    select?: TelegramSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramSession
     */
    omit?: TelegramSessionOmit<ExtArgs> | null
    /**
     * Filter which TelegramSession to delete.
     */
    where: TelegramSessionWhereUniqueInput
  }

  /**
   * TelegramSession deleteMany
   */
  export type TelegramSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TelegramSessions to delete
     */
    where?: TelegramSessionWhereInput
    /**
     * Limit how many TelegramSessions to delete.
     */
    limit?: number
  }

  /**
   * TelegramSession without action
   */
  export type TelegramSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramSession
     */
    select?: TelegramSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramSession
     */
    omit?: TelegramSessionOmit<ExtArgs> | null
  }


  /**
   * Model ImageAsset
   */

  export type AggregateImageAsset = {
    _count: ImageAssetCountAggregateOutputType | null
    _avg: ImageAssetAvgAggregateOutputType | null
    _sum: ImageAssetSumAggregateOutputType | null
    _min: ImageAssetMinAggregateOutputType | null
    _max: ImageAssetMaxAggregateOutputType | null
  }

  export type ImageAssetAvgAggregateOutputType = {
    size: number | null
  }

  export type ImageAssetSumAggregateOutputType = {
    size: number | null
  }

  export type ImageAssetMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    name: string | null
    url: string | null
    thumbnail: string | null
    mimeType: string | null
    size: number | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageAssetMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    name: string | null
    url: string | null
    thumbnail: string | null
    mimeType: string | null
    size: number | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageAssetCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    name: number
    url: number
    thumbnail: number
    mimeType: number
    size: number
    category: number
    tags: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ImageAssetAvgAggregateInputType = {
    size?: true
  }

  export type ImageAssetSumAggregateInputType = {
    size?: true
  }

  export type ImageAssetMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    name?: true
    url?: true
    thumbnail?: true
    mimeType?: true
    size?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageAssetMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    name?: true
    url?: true
    thumbnail?: true
    mimeType?: true
    size?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageAssetCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    name?: true
    url?: true
    thumbnail?: true
    mimeType?: true
    size?: true
    category?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ImageAssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImageAsset to aggregate.
     */
    where?: ImageAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageAssets to fetch.
     */
    orderBy?: ImageAssetOrderByWithRelationInput | ImageAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImageAssets
    **/
    _count?: true | ImageAssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAssetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageAssetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageAssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageAssetMaxAggregateInputType
  }

  export type GetImageAssetAggregateType<T extends ImageAssetAggregateArgs> = {
        [P in keyof T & keyof AggregateImageAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImageAsset[P]>
      : GetScalarType<T[P], AggregateImageAsset[P]>
  }




  export type ImageAssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageAssetWhereInput
    orderBy?: ImageAssetOrderByWithAggregationInput | ImageAssetOrderByWithAggregationInput[]
    by: ImageAssetScalarFieldEnum[] | ImageAssetScalarFieldEnum
    having?: ImageAssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageAssetCountAggregateInputType | true
    _avg?: ImageAssetAvgAggregateInputType
    _sum?: ImageAssetSumAggregateInputType
    _min?: ImageAssetMinAggregateInputType
    _max?: ImageAssetMaxAggregateInputType
  }

  export type ImageAssetGroupByOutputType = {
    id: string
    userId: string
    organizationId: string | null
    name: string
    url: string
    thumbnail: string | null
    mimeType: string | null
    size: number | null
    category: string | null
    tags: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: ImageAssetCountAggregateOutputType | null
    _avg: ImageAssetAvgAggregateOutputType | null
    _sum: ImageAssetSumAggregateOutputType | null
    _min: ImageAssetMinAggregateOutputType | null
    _max: ImageAssetMaxAggregateOutputType | null
  }

  type GetImageAssetGroupByPayload<T extends ImageAssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageAssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageAssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageAssetGroupByOutputType[P]>
            : GetScalarType<T[P], ImageAssetGroupByOutputType[P]>
        }
      >
    >


  export type ImageAssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    name?: boolean
    url?: boolean
    thumbnail?: boolean
    mimeType?: boolean
    size?: boolean
    category?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["imageAsset"]>

  export type ImageAssetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    name?: boolean
    url?: boolean
    thumbnail?: boolean
    mimeType?: boolean
    size?: boolean
    category?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["imageAsset"]>

  export type ImageAssetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    name?: boolean
    url?: boolean
    thumbnail?: boolean
    mimeType?: boolean
    size?: boolean
    category?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["imageAsset"]>

  export type ImageAssetSelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    name?: boolean
    url?: boolean
    thumbnail?: boolean
    mimeType?: boolean
    size?: boolean
    category?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ImageAssetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "name" | "url" | "thumbnail" | "mimeType" | "size" | "category" | "tags" | "createdAt" | "updatedAt", ExtArgs["result"]["imageAsset"]>

  export type $ImageAssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImageAsset"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organizationId: string | null
      name: string
      url: string
      thumbnail: string | null
      mimeType: string | null
      size: number | null
      category: string | null
      tags: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["imageAsset"]>
    composites: {}
  }

  type ImageAssetGetPayload<S extends boolean | null | undefined | ImageAssetDefaultArgs> = $Result.GetResult<Prisma.$ImageAssetPayload, S>

  type ImageAssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageAssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageAssetCountAggregateInputType | true
    }

  export interface ImageAssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImageAsset'], meta: { name: 'ImageAsset' } }
    /**
     * Find zero or one ImageAsset that matches the filter.
     * @param {ImageAssetFindUniqueArgs} args - Arguments to find a ImageAsset
     * @example
     * // Get one ImageAsset
     * const imageAsset = await prisma.imageAsset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageAssetFindUniqueArgs>(args: SelectSubset<T, ImageAssetFindUniqueArgs<ExtArgs>>): Prisma__ImageAssetClient<$Result.GetResult<Prisma.$ImageAssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImageAsset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageAssetFindUniqueOrThrowArgs} args - Arguments to find a ImageAsset
     * @example
     * // Get one ImageAsset
     * const imageAsset = await prisma.imageAsset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageAssetFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageAssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageAssetClient<$Result.GetResult<Prisma.$ImageAssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImageAsset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAssetFindFirstArgs} args - Arguments to find a ImageAsset
     * @example
     * // Get one ImageAsset
     * const imageAsset = await prisma.imageAsset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageAssetFindFirstArgs>(args?: SelectSubset<T, ImageAssetFindFirstArgs<ExtArgs>>): Prisma__ImageAssetClient<$Result.GetResult<Prisma.$ImageAssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImageAsset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAssetFindFirstOrThrowArgs} args - Arguments to find a ImageAsset
     * @example
     * // Get one ImageAsset
     * const imageAsset = await prisma.imageAsset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageAssetFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageAssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageAssetClient<$Result.GetResult<Prisma.$ImageAssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImageAssets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImageAssets
     * const imageAssets = await prisma.imageAsset.findMany()
     * 
     * // Get first 10 ImageAssets
     * const imageAssets = await prisma.imageAsset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageAssetWithIdOnly = await prisma.imageAsset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageAssetFindManyArgs>(args?: SelectSubset<T, ImageAssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageAssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImageAsset.
     * @param {ImageAssetCreateArgs} args - Arguments to create a ImageAsset.
     * @example
     * // Create one ImageAsset
     * const ImageAsset = await prisma.imageAsset.create({
     *   data: {
     *     // ... data to create a ImageAsset
     *   }
     * })
     * 
     */
    create<T extends ImageAssetCreateArgs>(args: SelectSubset<T, ImageAssetCreateArgs<ExtArgs>>): Prisma__ImageAssetClient<$Result.GetResult<Prisma.$ImageAssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImageAssets.
     * @param {ImageAssetCreateManyArgs} args - Arguments to create many ImageAssets.
     * @example
     * // Create many ImageAssets
     * const imageAsset = await prisma.imageAsset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageAssetCreateManyArgs>(args?: SelectSubset<T, ImageAssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImageAssets and returns the data saved in the database.
     * @param {ImageAssetCreateManyAndReturnArgs} args - Arguments to create many ImageAssets.
     * @example
     * // Create many ImageAssets
     * const imageAsset = await prisma.imageAsset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImageAssets and only return the `id`
     * const imageAssetWithIdOnly = await prisma.imageAsset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageAssetCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageAssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageAssetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ImageAsset.
     * @param {ImageAssetDeleteArgs} args - Arguments to delete one ImageAsset.
     * @example
     * // Delete one ImageAsset
     * const ImageAsset = await prisma.imageAsset.delete({
     *   where: {
     *     // ... filter to delete one ImageAsset
     *   }
     * })
     * 
     */
    delete<T extends ImageAssetDeleteArgs>(args: SelectSubset<T, ImageAssetDeleteArgs<ExtArgs>>): Prisma__ImageAssetClient<$Result.GetResult<Prisma.$ImageAssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImageAsset.
     * @param {ImageAssetUpdateArgs} args - Arguments to update one ImageAsset.
     * @example
     * // Update one ImageAsset
     * const imageAsset = await prisma.imageAsset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageAssetUpdateArgs>(args: SelectSubset<T, ImageAssetUpdateArgs<ExtArgs>>): Prisma__ImageAssetClient<$Result.GetResult<Prisma.$ImageAssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImageAssets.
     * @param {ImageAssetDeleteManyArgs} args - Arguments to filter ImageAssets to delete.
     * @example
     * // Delete a few ImageAssets
     * const { count } = await prisma.imageAsset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageAssetDeleteManyArgs>(args?: SelectSubset<T, ImageAssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImageAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImageAssets
     * const imageAsset = await prisma.imageAsset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageAssetUpdateManyArgs>(args: SelectSubset<T, ImageAssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImageAssets and returns the data updated in the database.
     * @param {ImageAssetUpdateManyAndReturnArgs} args - Arguments to update many ImageAssets.
     * @example
     * // Update many ImageAssets
     * const imageAsset = await prisma.imageAsset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ImageAssets and only return the `id`
     * const imageAssetWithIdOnly = await prisma.imageAsset.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImageAssetUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageAssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageAssetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ImageAsset.
     * @param {ImageAssetUpsertArgs} args - Arguments to update or create a ImageAsset.
     * @example
     * // Update or create a ImageAsset
     * const imageAsset = await prisma.imageAsset.upsert({
     *   create: {
     *     // ... data to create a ImageAsset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImageAsset we want to update
     *   }
     * })
     */
    upsert<T extends ImageAssetUpsertArgs>(args: SelectSubset<T, ImageAssetUpsertArgs<ExtArgs>>): Prisma__ImageAssetClient<$Result.GetResult<Prisma.$ImageAssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImageAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAssetCountArgs} args - Arguments to filter ImageAssets to count.
     * @example
     * // Count the number of ImageAssets
     * const count = await prisma.imageAsset.count({
     *   where: {
     *     // ... the filter for the ImageAssets we want to count
     *   }
     * })
    **/
    count<T extends ImageAssetCountArgs>(
      args?: Subset<T, ImageAssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageAssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImageAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAssetAggregateArgs>(args: Subset<T, ImageAssetAggregateArgs>): Prisma.PrismaPromise<GetImageAssetAggregateType<T>>

    /**
     * Group by ImageAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAssetGroupByArgs} args - Group by arguments.
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
      T extends ImageAssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageAssetGroupByArgs['orderBy'] }
        : { orderBy?: ImageAssetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageAssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImageAsset model
   */
  readonly fields: ImageAssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImageAsset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageAssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ImageAsset model
   */
  interface ImageAssetFieldRefs {
    readonly id: FieldRef<"ImageAsset", 'String'>
    readonly userId: FieldRef<"ImageAsset", 'String'>
    readonly organizationId: FieldRef<"ImageAsset", 'String'>
    readonly name: FieldRef<"ImageAsset", 'String'>
    readonly url: FieldRef<"ImageAsset", 'String'>
    readonly thumbnail: FieldRef<"ImageAsset", 'String'>
    readonly mimeType: FieldRef<"ImageAsset", 'String'>
    readonly size: FieldRef<"ImageAsset", 'Int'>
    readonly category: FieldRef<"ImageAsset", 'String'>
    readonly tags: FieldRef<"ImageAsset", 'Json'>
    readonly createdAt: FieldRef<"ImageAsset", 'DateTime'>
    readonly updatedAt: FieldRef<"ImageAsset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ImageAsset findUnique
   */
  export type ImageAssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageAsset
     */
    select?: ImageAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageAsset
     */
    omit?: ImageAssetOmit<ExtArgs> | null
    /**
     * Filter, which ImageAsset to fetch.
     */
    where: ImageAssetWhereUniqueInput
  }

  /**
   * ImageAsset findUniqueOrThrow
   */
  export type ImageAssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageAsset
     */
    select?: ImageAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageAsset
     */
    omit?: ImageAssetOmit<ExtArgs> | null
    /**
     * Filter, which ImageAsset to fetch.
     */
    where: ImageAssetWhereUniqueInput
  }

  /**
   * ImageAsset findFirst
   */
  export type ImageAssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageAsset
     */
    select?: ImageAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageAsset
     */
    omit?: ImageAssetOmit<ExtArgs> | null
    /**
     * Filter, which ImageAsset to fetch.
     */
    where?: ImageAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageAssets to fetch.
     */
    orderBy?: ImageAssetOrderByWithRelationInput | ImageAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImageAssets.
     */
    cursor?: ImageAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImageAssets.
     */
    distinct?: ImageAssetScalarFieldEnum | ImageAssetScalarFieldEnum[]
  }

  /**
   * ImageAsset findFirstOrThrow
   */
  export type ImageAssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageAsset
     */
    select?: ImageAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageAsset
     */
    omit?: ImageAssetOmit<ExtArgs> | null
    /**
     * Filter, which ImageAsset to fetch.
     */
    where?: ImageAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageAssets to fetch.
     */
    orderBy?: ImageAssetOrderByWithRelationInput | ImageAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImageAssets.
     */
    cursor?: ImageAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImageAssets.
     */
    distinct?: ImageAssetScalarFieldEnum | ImageAssetScalarFieldEnum[]
  }

  /**
   * ImageAsset findMany
   */
  export type ImageAssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageAsset
     */
    select?: ImageAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageAsset
     */
    omit?: ImageAssetOmit<ExtArgs> | null
    /**
     * Filter, which ImageAssets to fetch.
     */
    where?: ImageAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageAssets to fetch.
     */
    orderBy?: ImageAssetOrderByWithRelationInput | ImageAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImageAssets.
     */
    cursor?: ImageAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageAssets.
     */
    skip?: number
    distinct?: ImageAssetScalarFieldEnum | ImageAssetScalarFieldEnum[]
  }

  /**
   * ImageAsset create
   */
  export type ImageAssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageAsset
     */
    select?: ImageAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageAsset
     */
    omit?: ImageAssetOmit<ExtArgs> | null
    /**
     * The data needed to create a ImageAsset.
     */
    data: XOR<ImageAssetCreateInput, ImageAssetUncheckedCreateInput>
  }

  /**
   * ImageAsset createMany
   */
  export type ImageAssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImageAssets.
     */
    data: ImageAssetCreateManyInput | ImageAssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImageAsset createManyAndReturn
   */
  export type ImageAssetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageAsset
     */
    select?: ImageAssetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImageAsset
     */
    omit?: ImageAssetOmit<ExtArgs> | null
    /**
     * The data used to create many ImageAssets.
     */
    data: ImageAssetCreateManyInput | ImageAssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImageAsset update
   */
  export type ImageAssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageAsset
     */
    select?: ImageAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageAsset
     */
    omit?: ImageAssetOmit<ExtArgs> | null
    /**
     * The data needed to update a ImageAsset.
     */
    data: XOR<ImageAssetUpdateInput, ImageAssetUncheckedUpdateInput>
    /**
     * Choose, which ImageAsset to update.
     */
    where: ImageAssetWhereUniqueInput
  }

  /**
   * ImageAsset updateMany
   */
  export type ImageAssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImageAssets.
     */
    data: XOR<ImageAssetUpdateManyMutationInput, ImageAssetUncheckedUpdateManyInput>
    /**
     * Filter which ImageAssets to update
     */
    where?: ImageAssetWhereInput
    /**
     * Limit how many ImageAssets to update.
     */
    limit?: number
  }

  /**
   * ImageAsset updateManyAndReturn
   */
  export type ImageAssetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageAsset
     */
    select?: ImageAssetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImageAsset
     */
    omit?: ImageAssetOmit<ExtArgs> | null
    /**
     * The data used to update ImageAssets.
     */
    data: XOR<ImageAssetUpdateManyMutationInput, ImageAssetUncheckedUpdateManyInput>
    /**
     * Filter which ImageAssets to update
     */
    where?: ImageAssetWhereInput
    /**
     * Limit how many ImageAssets to update.
     */
    limit?: number
  }

  /**
   * ImageAsset upsert
   */
  export type ImageAssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageAsset
     */
    select?: ImageAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageAsset
     */
    omit?: ImageAssetOmit<ExtArgs> | null
    /**
     * The filter to search for the ImageAsset to update in case it exists.
     */
    where: ImageAssetWhereUniqueInput
    /**
     * In case the ImageAsset found by the `where` argument doesn't exist, create a new ImageAsset with this data.
     */
    create: XOR<ImageAssetCreateInput, ImageAssetUncheckedCreateInput>
    /**
     * In case the ImageAsset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageAssetUpdateInput, ImageAssetUncheckedUpdateInput>
  }

  /**
   * ImageAsset delete
   */
  export type ImageAssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageAsset
     */
    select?: ImageAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageAsset
     */
    omit?: ImageAssetOmit<ExtArgs> | null
    /**
     * Filter which ImageAsset to delete.
     */
    where: ImageAssetWhereUniqueInput
  }

  /**
   * ImageAsset deleteMany
   */
  export type ImageAssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImageAssets to delete
     */
    where?: ImageAssetWhereInput
    /**
     * Limit how many ImageAssets to delete.
     */
    limit?: number
  }

  /**
   * ImageAsset without action
   */
  export type ImageAssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageAsset
     */
    select?: ImageAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageAsset
     */
    omit?: ImageAssetOmit<ExtArgs> | null
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


  export const UserIntegrationSettingsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    timezone: 'timezone',
    apiKey: 'apiKey',
    fcmData: 'fcmData',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserIntegrationSettingsScalarFieldEnum = (typeof UserIntegrationSettingsScalarFieldEnum)[keyof typeof UserIntegrationSettingsScalarFieldEnum]


  export const MetaIntegrationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    wabaId: 'wabaId',
    accessToken: 'accessToken',
    businessPhoneNumberId: 'businessPhoneNumberId',
    appId: 'appId',
    loginType: 'loginType',
    embedData: 'embedData',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MetaIntegrationScalarFieldEnum = (typeof MetaIntegrationScalarFieldEnum)[keyof typeof MetaIntegrationScalarFieldEnum]


  export const VoiceIntegrationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    provider: 'provider',
    apiKey: 'apiKey',
    voiceId: 'voiceId',
    settings: 'settings',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VoiceIntegrationScalarFieldEnum = (typeof VoiceIntegrationScalarFieldEnum)[keyof typeof VoiceIntegrationScalarFieldEnum]


  export const WhatsAppInstanceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    name: 'name',
    instanceId: 'instanceId',
    status: 'status',
    qr: 'qr',
    phone: 'phone',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WhatsAppInstanceScalarFieldEnum = (typeof WhatsAppInstanceScalarFieldEnum)[keyof typeof WhatsAppInstanceScalarFieldEnum]


  export const TelegramSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    name: 'name',
    sessionId: 'sessionId',
    status: 'status',
    phone: 'phone',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TelegramSessionScalarFieldEnum = (typeof TelegramSessionScalarFieldEnum)[keyof typeof TelegramSessionScalarFieldEnum]


  export const ImageAssetScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    name: 'name',
    url: 'url',
    thumbnail: 'thumbnail',
    mimeType: 'mimeType',
    size: 'size',
    category: 'category',
    tags: 'tags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ImageAssetScalarFieldEnum = (typeof ImageAssetScalarFieldEnum)[keyof typeof ImageAssetScalarFieldEnum]


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

  export type UserIntegrationSettingsWhereInput = {
    AND?: UserIntegrationSettingsWhereInput | UserIntegrationSettingsWhereInput[]
    OR?: UserIntegrationSettingsWhereInput[]
    NOT?: UserIntegrationSettingsWhereInput | UserIntegrationSettingsWhereInput[]
    id?: UuidFilter<"UserIntegrationSettings"> | string
    userId?: UuidFilter<"UserIntegrationSettings"> | string
    timezone?: StringNullableFilter<"UserIntegrationSettings"> | string | null
    apiKey?: StringNullableFilter<"UserIntegrationSettings"> | string | null
    fcmData?: JsonNullableFilter<"UserIntegrationSettings">
    createdAt?: DateTimeFilter<"UserIntegrationSettings"> | Date | string
    updatedAt?: DateTimeFilter<"UserIntegrationSettings"> | Date | string
  }

  export type UserIntegrationSettingsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    timezone?: SortOrderInput | SortOrder
    apiKey?: SortOrderInput | SortOrder
    fcmData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserIntegrationSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    apiKey?: string
    AND?: UserIntegrationSettingsWhereInput | UserIntegrationSettingsWhereInput[]
    OR?: UserIntegrationSettingsWhereInput[]
    NOT?: UserIntegrationSettingsWhereInput | UserIntegrationSettingsWhereInput[]
    timezone?: StringNullableFilter<"UserIntegrationSettings"> | string | null
    fcmData?: JsonNullableFilter<"UserIntegrationSettings">
    createdAt?: DateTimeFilter<"UserIntegrationSettings"> | Date | string
    updatedAt?: DateTimeFilter<"UserIntegrationSettings"> | Date | string
  }, "id" | "userId" | "apiKey">

  export type UserIntegrationSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    timezone?: SortOrderInput | SortOrder
    apiKey?: SortOrderInput | SortOrder
    fcmData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserIntegrationSettingsCountOrderByAggregateInput
    _max?: UserIntegrationSettingsMaxOrderByAggregateInput
    _min?: UserIntegrationSettingsMinOrderByAggregateInput
  }

  export type UserIntegrationSettingsScalarWhereWithAggregatesInput = {
    AND?: UserIntegrationSettingsScalarWhereWithAggregatesInput | UserIntegrationSettingsScalarWhereWithAggregatesInput[]
    OR?: UserIntegrationSettingsScalarWhereWithAggregatesInput[]
    NOT?: UserIntegrationSettingsScalarWhereWithAggregatesInput | UserIntegrationSettingsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"UserIntegrationSettings"> | string
    userId?: UuidWithAggregatesFilter<"UserIntegrationSettings"> | string
    timezone?: StringNullableWithAggregatesFilter<"UserIntegrationSettings"> | string | null
    apiKey?: StringNullableWithAggregatesFilter<"UserIntegrationSettings"> | string | null
    fcmData?: JsonNullableWithAggregatesFilter<"UserIntegrationSettings">
    createdAt?: DateTimeWithAggregatesFilter<"UserIntegrationSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserIntegrationSettings"> | Date | string
  }

  export type MetaIntegrationWhereInput = {
    AND?: MetaIntegrationWhereInput | MetaIntegrationWhereInput[]
    OR?: MetaIntegrationWhereInput[]
    NOT?: MetaIntegrationWhereInput | MetaIntegrationWhereInput[]
    id?: UuidFilter<"MetaIntegration"> | string
    userId?: UuidFilter<"MetaIntegration"> | string
    organizationId?: UuidNullableFilter<"MetaIntegration"> | string | null
    wabaId?: StringNullableFilter<"MetaIntegration"> | string | null
    accessToken?: StringNullableFilter<"MetaIntegration"> | string | null
    businessPhoneNumberId?: StringNullableFilter<"MetaIntegration"> | string | null
    appId?: StringNullableFilter<"MetaIntegration"> | string | null
    loginType?: StringNullableFilter<"MetaIntegration"> | string | null
    embedData?: JsonNullableFilter<"MetaIntegration">
    isActive?: BoolFilter<"MetaIntegration"> | boolean
    createdAt?: DateTimeFilter<"MetaIntegration"> | Date | string
    updatedAt?: DateTimeFilter<"MetaIntegration"> | Date | string
  }

  export type MetaIntegrationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    wabaId?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    businessPhoneNumberId?: SortOrderInput | SortOrder
    appId?: SortOrderInput | SortOrder
    loginType?: SortOrderInput | SortOrder
    embedData?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetaIntegrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: MetaIntegrationWhereInput | MetaIntegrationWhereInput[]
    OR?: MetaIntegrationWhereInput[]
    NOT?: MetaIntegrationWhereInput | MetaIntegrationWhereInput[]
    organizationId?: UuidNullableFilter<"MetaIntegration"> | string | null
    wabaId?: StringNullableFilter<"MetaIntegration"> | string | null
    accessToken?: StringNullableFilter<"MetaIntegration"> | string | null
    businessPhoneNumberId?: StringNullableFilter<"MetaIntegration"> | string | null
    appId?: StringNullableFilter<"MetaIntegration"> | string | null
    loginType?: StringNullableFilter<"MetaIntegration"> | string | null
    embedData?: JsonNullableFilter<"MetaIntegration">
    isActive?: BoolFilter<"MetaIntegration"> | boolean
    createdAt?: DateTimeFilter<"MetaIntegration"> | Date | string
    updatedAt?: DateTimeFilter<"MetaIntegration"> | Date | string
  }, "id" | "userId">

  export type MetaIntegrationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    wabaId?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    businessPhoneNumberId?: SortOrderInput | SortOrder
    appId?: SortOrderInput | SortOrder
    loginType?: SortOrderInput | SortOrder
    embedData?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MetaIntegrationCountOrderByAggregateInput
    _max?: MetaIntegrationMaxOrderByAggregateInput
    _min?: MetaIntegrationMinOrderByAggregateInput
  }

  export type MetaIntegrationScalarWhereWithAggregatesInput = {
    AND?: MetaIntegrationScalarWhereWithAggregatesInput | MetaIntegrationScalarWhereWithAggregatesInput[]
    OR?: MetaIntegrationScalarWhereWithAggregatesInput[]
    NOT?: MetaIntegrationScalarWhereWithAggregatesInput | MetaIntegrationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"MetaIntegration"> | string
    userId?: UuidWithAggregatesFilter<"MetaIntegration"> | string
    organizationId?: UuidNullableWithAggregatesFilter<"MetaIntegration"> | string | null
    wabaId?: StringNullableWithAggregatesFilter<"MetaIntegration"> | string | null
    accessToken?: StringNullableWithAggregatesFilter<"MetaIntegration"> | string | null
    businessPhoneNumberId?: StringNullableWithAggregatesFilter<"MetaIntegration"> | string | null
    appId?: StringNullableWithAggregatesFilter<"MetaIntegration"> | string | null
    loginType?: StringNullableWithAggregatesFilter<"MetaIntegration"> | string | null
    embedData?: JsonNullableWithAggregatesFilter<"MetaIntegration">
    isActive?: BoolWithAggregatesFilter<"MetaIntegration"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MetaIntegration"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MetaIntegration"> | Date | string
  }

  export type VoiceIntegrationWhereInput = {
    AND?: VoiceIntegrationWhereInput | VoiceIntegrationWhereInput[]
    OR?: VoiceIntegrationWhereInput[]
    NOT?: VoiceIntegrationWhereInput | VoiceIntegrationWhereInput[]
    id?: UuidFilter<"VoiceIntegration"> | string
    userId?: UuidFilter<"VoiceIntegration"> | string
    organizationId?: UuidNullableFilter<"VoiceIntegration"> | string | null
    provider?: StringFilter<"VoiceIntegration"> | string
    apiKey?: StringNullableFilter<"VoiceIntegration"> | string | null
    voiceId?: StringNullableFilter<"VoiceIntegration"> | string | null
    settings?: JsonNullableFilter<"VoiceIntegration">
    isActive?: BoolFilter<"VoiceIntegration"> | boolean
    createdAt?: DateTimeFilter<"VoiceIntegration"> | Date | string
    updatedAt?: DateTimeFilter<"VoiceIntegration"> | Date | string
  }

  export type VoiceIntegrationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    provider?: SortOrder
    apiKey?: SortOrderInput | SortOrder
    voiceId?: SortOrderInput | SortOrder
    settings?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VoiceIntegrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: VoiceIntegrationWhereInput | VoiceIntegrationWhereInput[]
    OR?: VoiceIntegrationWhereInput[]
    NOT?: VoiceIntegrationWhereInput | VoiceIntegrationWhereInput[]
    organizationId?: UuidNullableFilter<"VoiceIntegration"> | string | null
    provider?: StringFilter<"VoiceIntegration"> | string
    apiKey?: StringNullableFilter<"VoiceIntegration"> | string | null
    voiceId?: StringNullableFilter<"VoiceIntegration"> | string | null
    settings?: JsonNullableFilter<"VoiceIntegration">
    isActive?: BoolFilter<"VoiceIntegration"> | boolean
    createdAt?: DateTimeFilter<"VoiceIntegration"> | Date | string
    updatedAt?: DateTimeFilter<"VoiceIntegration"> | Date | string
  }, "id" | "userId">

  export type VoiceIntegrationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    provider?: SortOrder
    apiKey?: SortOrderInput | SortOrder
    voiceId?: SortOrderInput | SortOrder
    settings?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VoiceIntegrationCountOrderByAggregateInput
    _max?: VoiceIntegrationMaxOrderByAggregateInput
    _min?: VoiceIntegrationMinOrderByAggregateInput
  }

  export type VoiceIntegrationScalarWhereWithAggregatesInput = {
    AND?: VoiceIntegrationScalarWhereWithAggregatesInput | VoiceIntegrationScalarWhereWithAggregatesInput[]
    OR?: VoiceIntegrationScalarWhereWithAggregatesInput[]
    NOT?: VoiceIntegrationScalarWhereWithAggregatesInput | VoiceIntegrationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"VoiceIntegration"> | string
    userId?: UuidWithAggregatesFilter<"VoiceIntegration"> | string
    organizationId?: UuidNullableWithAggregatesFilter<"VoiceIntegration"> | string | null
    provider?: StringWithAggregatesFilter<"VoiceIntegration"> | string
    apiKey?: StringNullableWithAggregatesFilter<"VoiceIntegration"> | string | null
    voiceId?: StringNullableWithAggregatesFilter<"VoiceIntegration"> | string | null
    settings?: JsonNullableWithAggregatesFilter<"VoiceIntegration">
    isActive?: BoolWithAggregatesFilter<"VoiceIntegration"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"VoiceIntegration"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VoiceIntegration"> | Date | string
  }

  export type WhatsAppInstanceWhereInput = {
    AND?: WhatsAppInstanceWhereInput | WhatsAppInstanceWhereInput[]
    OR?: WhatsAppInstanceWhereInput[]
    NOT?: WhatsAppInstanceWhereInput | WhatsAppInstanceWhereInput[]
    id?: UuidFilter<"WhatsAppInstance"> | string
    userId?: UuidFilter<"WhatsAppInstance"> | string
    organizationId?: UuidNullableFilter<"WhatsAppInstance"> | string | null
    name?: StringNullableFilter<"WhatsAppInstance"> | string | null
    instanceId?: StringFilter<"WhatsAppInstance"> | string
    status?: StringFilter<"WhatsAppInstance"> | string
    qr?: StringNullableFilter<"WhatsAppInstance"> | string | null
    phone?: StringNullableFilter<"WhatsAppInstance"> | string | null
    metadata?: JsonNullableFilter<"WhatsAppInstance">
    createdAt?: DateTimeFilter<"WhatsAppInstance"> | Date | string
    updatedAt?: DateTimeFilter<"WhatsAppInstance"> | Date | string
  }

  export type WhatsAppInstanceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    instanceId?: SortOrder
    status?: SortOrder
    qr?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhatsAppInstanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    instanceId?: string
    AND?: WhatsAppInstanceWhereInput | WhatsAppInstanceWhereInput[]
    OR?: WhatsAppInstanceWhereInput[]
    NOT?: WhatsAppInstanceWhereInput | WhatsAppInstanceWhereInput[]
    userId?: UuidFilter<"WhatsAppInstance"> | string
    organizationId?: UuidNullableFilter<"WhatsAppInstance"> | string | null
    name?: StringNullableFilter<"WhatsAppInstance"> | string | null
    status?: StringFilter<"WhatsAppInstance"> | string
    qr?: StringNullableFilter<"WhatsAppInstance"> | string | null
    phone?: StringNullableFilter<"WhatsAppInstance"> | string | null
    metadata?: JsonNullableFilter<"WhatsAppInstance">
    createdAt?: DateTimeFilter<"WhatsAppInstance"> | Date | string
    updatedAt?: DateTimeFilter<"WhatsAppInstance"> | Date | string
  }, "id" | "instanceId">

  export type WhatsAppInstanceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    instanceId?: SortOrder
    status?: SortOrder
    qr?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WhatsAppInstanceCountOrderByAggregateInput
    _max?: WhatsAppInstanceMaxOrderByAggregateInput
    _min?: WhatsAppInstanceMinOrderByAggregateInput
  }

  export type WhatsAppInstanceScalarWhereWithAggregatesInput = {
    AND?: WhatsAppInstanceScalarWhereWithAggregatesInput | WhatsAppInstanceScalarWhereWithAggregatesInput[]
    OR?: WhatsAppInstanceScalarWhereWithAggregatesInput[]
    NOT?: WhatsAppInstanceScalarWhereWithAggregatesInput | WhatsAppInstanceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"WhatsAppInstance"> | string
    userId?: UuidWithAggregatesFilter<"WhatsAppInstance"> | string
    organizationId?: UuidNullableWithAggregatesFilter<"WhatsAppInstance"> | string | null
    name?: StringNullableWithAggregatesFilter<"WhatsAppInstance"> | string | null
    instanceId?: StringWithAggregatesFilter<"WhatsAppInstance"> | string
    status?: StringWithAggregatesFilter<"WhatsAppInstance"> | string
    qr?: StringNullableWithAggregatesFilter<"WhatsAppInstance"> | string | null
    phone?: StringNullableWithAggregatesFilter<"WhatsAppInstance"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"WhatsAppInstance">
    createdAt?: DateTimeWithAggregatesFilter<"WhatsAppInstance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WhatsAppInstance"> | Date | string
  }

  export type TelegramSessionWhereInput = {
    AND?: TelegramSessionWhereInput | TelegramSessionWhereInput[]
    OR?: TelegramSessionWhereInput[]
    NOT?: TelegramSessionWhereInput | TelegramSessionWhereInput[]
    id?: UuidFilter<"TelegramSession"> | string
    userId?: UuidFilter<"TelegramSession"> | string
    organizationId?: UuidNullableFilter<"TelegramSession"> | string | null
    name?: StringNullableFilter<"TelegramSession"> | string | null
    sessionId?: StringFilter<"TelegramSession"> | string
    status?: StringFilter<"TelegramSession"> | string
    phone?: StringNullableFilter<"TelegramSession"> | string | null
    metadata?: JsonNullableFilter<"TelegramSession">
    createdAt?: DateTimeFilter<"TelegramSession"> | Date | string
    updatedAt?: DateTimeFilter<"TelegramSession"> | Date | string
  }

  export type TelegramSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    sessionId?: SortOrder
    status?: SortOrder
    phone?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TelegramSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionId?: string
    AND?: TelegramSessionWhereInput | TelegramSessionWhereInput[]
    OR?: TelegramSessionWhereInput[]
    NOT?: TelegramSessionWhereInput | TelegramSessionWhereInput[]
    userId?: UuidFilter<"TelegramSession"> | string
    organizationId?: UuidNullableFilter<"TelegramSession"> | string | null
    name?: StringNullableFilter<"TelegramSession"> | string | null
    status?: StringFilter<"TelegramSession"> | string
    phone?: StringNullableFilter<"TelegramSession"> | string | null
    metadata?: JsonNullableFilter<"TelegramSession">
    createdAt?: DateTimeFilter<"TelegramSession"> | Date | string
    updatedAt?: DateTimeFilter<"TelegramSession"> | Date | string
  }, "id" | "sessionId">

  export type TelegramSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    sessionId?: SortOrder
    status?: SortOrder
    phone?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TelegramSessionCountOrderByAggregateInput
    _max?: TelegramSessionMaxOrderByAggregateInput
    _min?: TelegramSessionMinOrderByAggregateInput
  }

  export type TelegramSessionScalarWhereWithAggregatesInput = {
    AND?: TelegramSessionScalarWhereWithAggregatesInput | TelegramSessionScalarWhereWithAggregatesInput[]
    OR?: TelegramSessionScalarWhereWithAggregatesInput[]
    NOT?: TelegramSessionScalarWhereWithAggregatesInput | TelegramSessionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TelegramSession"> | string
    userId?: UuidWithAggregatesFilter<"TelegramSession"> | string
    organizationId?: UuidNullableWithAggregatesFilter<"TelegramSession"> | string | null
    name?: StringNullableWithAggregatesFilter<"TelegramSession"> | string | null
    sessionId?: StringWithAggregatesFilter<"TelegramSession"> | string
    status?: StringWithAggregatesFilter<"TelegramSession"> | string
    phone?: StringNullableWithAggregatesFilter<"TelegramSession"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"TelegramSession">
    createdAt?: DateTimeWithAggregatesFilter<"TelegramSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TelegramSession"> | Date | string
  }

  export type ImageAssetWhereInput = {
    AND?: ImageAssetWhereInput | ImageAssetWhereInput[]
    OR?: ImageAssetWhereInput[]
    NOT?: ImageAssetWhereInput | ImageAssetWhereInput[]
    id?: UuidFilter<"ImageAsset"> | string
    userId?: UuidFilter<"ImageAsset"> | string
    organizationId?: UuidNullableFilter<"ImageAsset"> | string | null
    name?: StringFilter<"ImageAsset"> | string
    url?: StringFilter<"ImageAsset"> | string
    thumbnail?: StringNullableFilter<"ImageAsset"> | string | null
    mimeType?: StringNullableFilter<"ImageAsset"> | string | null
    size?: IntNullableFilter<"ImageAsset"> | number | null
    category?: StringNullableFilter<"ImageAsset"> | string | null
    tags?: JsonNullableFilter<"ImageAsset">
    createdAt?: DateTimeFilter<"ImageAsset"> | Date | string
    updatedAt?: DateTimeFilter<"ImageAsset"> | Date | string
  }

  export type ImageAssetOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    name?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageAssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImageAssetWhereInput | ImageAssetWhereInput[]
    OR?: ImageAssetWhereInput[]
    NOT?: ImageAssetWhereInput | ImageAssetWhereInput[]
    userId?: UuidFilter<"ImageAsset"> | string
    organizationId?: UuidNullableFilter<"ImageAsset"> | string | null
    name?: StringFilter<"ImageAsset"> | string
    url?: StringFilter<"ImageAsset"> | string
    thumbnail?: StringNullableFilter<"ImageAsset"> | string | null
    mimeType?: StringNullableFilter<"ImageAsset"> | string | null
    size?: IntNullableFilter<"ImageAsset"> | number | null
    category?: StringNullableFilter<"ImageAsset"> | string | null
    tags?: JsonNullableFilter<"ImageAsset">
    createdAt?: DateTimeFilter<"ImageAsset"> | Date | string
    updatedAt?: DateTimeFilter<"ImageAsset"> | Date | string
  }, "id">

  export type ImageAssetOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    name?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ImageAssetCountOrderByAggregateInput
    _avg?: ImageAssetAvgOrderByAggregateInput
    _max?: ImageAssetMaxOrderByAggregateInput
    _min?: ImageAssetMinOrderByAggregateInput
    _sum?: ImageAssetSumOrderByAggregateInput
  }

  export type ImageAssetScalarWhereWithAggregatesInput = {
    AND?: ImageAssetScalarWhereWithAggregatesInput | ImageAssetScalarWhereWithAggregatesInput[]
    OR?: ImageAssetScalarWhereWithAggregatesInput[]
    NOT?: ImageAssetScalarWhereWithAggregatesInput | ImageAssetScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ImageAsset"> | string
    userId?: UuidWithAggregatesFilter<"ImageAsset"> | string
    organizationId?: UuidNullableWithAggregatesFilter<"ImageAsset"> | string | null
    name?: StringWithAggregatesFilter<"ImageAsset"> | string
    url?: StringWithAggregatesFilter<"ImageAsset"> | string
    thumbnail?: StringNullableWithAggregatesFilter<"ImageAsset"> | string | null
    mimeType?: StringNullableWithAggregatesFilter<"ImageAsset"> | string | null
    size?: IntNullableWithAggregatesFilter<"ImageAsset"> | number | null
    category?: StringNullableWithAggregatesFilter<"ImageAsset"> | string | null
    tags?: JsonNullableWithAggregatesFilter<"ImageAsset">
    createdAt?: DateTimeWithAggregatesFilter<"ImageAsset"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ImageAsset"> | Date | string
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

  export type UserIntegrationSettingsCreateInput = {
    id?: string
    userId: string
    timezone?: string | null
    apiKey?: string | null
    fcmData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserIntegrationSettingsUncheckedCreateInput = {
    id?: string
    userId: string
    timezone?: string | null
    apiKey?: string | null
    fcmData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserIntegrationSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    fcmData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserIntegrationSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    fcmData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserIntegrationSettingsCreateManyInput = {
    id?: string
    userId: string
    timezone?: string | null
    apiKey?: string | null
    fcmData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserIntegrationSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    fcmData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserIntegrationSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    fcmData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetaIntegrationCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    wabaId?: string | null
    accessToken?: string | null
    businessPhoneNumberId?: string | null
    appId?: string | null
    loginType?: string | null
    embedData?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetaIntegrationUncheckedCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    wabaId?: string | null
    accessToken?: string | null
    businessPhoneNumberId?: string | null
    appId?: string | null
    loginType?: string | null
    embedData?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetaIntegrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    wabaId?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    businessPhoneNumberId?: NullableStringFieldUpdateOperationsInput | string | null
    appId?: NullableStringFieldUpdateOperationsInput | string | null
    loginType?: NullableStringFieldUpdateOperationsInput | string | null
    embedData?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetaIntegrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    wabaId?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    businessPhoneNumberId?: NullableStringFieldUpdateOperationsInput | string | null
    appId?: NullableStringFieldUpdateOperationsInput | string | null
    loginType?: NullableStringFieldUpdateOperationsInput | string | null
    embedData?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetaIntegrationCreateManyInput = {
    id?: string
    userId: string
    organizationId?: string | null
    wabaId?: string | null
    accessToken?: string | null
    businessPhoneNumberId?: string | null
    appId?: string | null
    loginType?: string | null
    embedData?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetaIntegrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    wabaId?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    businessPhoneNumberId?: NullableStringFieldUpdateOperationsInput | string | null
    appId?: NullableStringFieldUpdateOperationsInput | string | null
    loginType?: NullableStringFieldUpdateOperationsInput | string | null
    embedData?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetaIntegrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    wabaId?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    businessPhoneNumberId?: NullableStringFieldUpdateOperationsInput | string | null
    appId?: NullableStringFieldUpdateOperationsInput | string | null
    loginType?: NullableStringFieldUpdateOperationsInput | string | null
    embedData?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoiceIntegrationCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    provider?: string
    apiKey?: string | null
    voiceId?: string | null
    settings?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VoiceIntegrationUncheckedCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    provider?: string
    apiKey?: string | null
    voiceId?: string | null
    settings?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VoiceIntegrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    voiceId?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoiceIntegrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    voiceId?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoiceIntegrationCreateManyInput = {
    id?: string
    userId: string
    organizationId?: string | null
    provider?: string
    apiKey?: string | null
    voiceId?: string | null
    settings?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VoiceIntegrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    voiceId?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoiceIntegrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    voiceId?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsAppInstanceCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    name?: string | null
    instanceId: string
    status?: string
    qr?: string | null
    phone?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhatsAppInstanceUncheckedCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    name?: string | null
    instanceId: string
    status?: string
    qr?: string | null
    phone?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhatsAppInstanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    instanceId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    qr?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsAppInstanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    instanceId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    qr?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsAppInstanceCreateManyInput = {
    id?: string
    userId: string
    organizationId?: string | null
    name?: string | null
    instanceId: string
    status?: string
    qr?: string | null
    phone?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhatsAppInstanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    instanceId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    qr?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsAppInstanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    instanceId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    qr?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelegramSessionCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    name?: string | null
    sessionId: string
    status?: string
    phone?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TelegramSessionUncheckedCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    name?: string | null
    sessionId: string
    status?: string
    phone?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TelegramSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelegramSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelegramSessionCreateManyInput = {
    id?: string
    userId: string
    organizationId?: string | null
    name?: string | null
    sessionId: string
    status?: string
    phone?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TelegramSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelegramSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageAssetCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    name: string
    url: string
    thumbnail?: string | null
    mimeType?: string | null
    size?: number | null
    category?: string | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageAssetUncheckedCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    name: string
    url: string
    thumbnail?: string | null
    mimeType?: string | null
    size?: number | null
    category?: string | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageAssetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageAssetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageAssetCreateManyInput = {
    id?: string
    userId: string
    organizationId?: string | null
    name: string
    url: string
    thumbnail?: string | null
    mimeType?: string | null
    size?: number | null
    category?: string | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageAssetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageAssetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableJsonNullValueInput | InputJsonValue
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

  export type UserIntegrationSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    timezone?: SortOrder
    apiKey?: SortOrder
    fcmData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserIntegrationSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    timezone?: SortOrder
    apiKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserIntegrationSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    timezone?: SortOrder
    apiKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetaIntegrationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    wabaId?: SortOrder
    accessToken?: SortOrder
    businessPhoneNumberId?: SortOrder
    appId?: SortOrder
    loginType?: SortOrder
    embedData?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetaIntegrationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    wabaId?: SortOrder
    accessToken?: SortOrder
    businessPhoneNumberId?: SortOrder
    appId?: SortOrder
    loginType?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetaIntegrationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    wabaId?: SortOrder
    accessToken?: SortOrder
    businessPhoneNumberId?: SortOrder
    appId?: SortOrder
    loginType?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VoiceIntegrationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    provider?: SortOrder
    apiKey?: SortOrder
    voiceId?: SortOrder
    settings?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VoiceIntegrationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    provider?: SortOrder
    apiKey?: SortOrder
    voiceId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VoiceIntegrationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    provider?: SortOrder
    apiKey?: SortOrder
    voiceId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhatsAppInstanceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    instanceId?: SortOrder
    status?: SortOrder
    qr?: SortOrder
    phone?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhatsAppInstanceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    instanceId?: SortOrder
    status?: SortOrder
    qr?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhatsAppInstanceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    instanceId?: SortOrder
    status?: SortOrder
    qr?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TelegramSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    sessionId?: SortOrder
    status?: SortOrder
    phone?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TelegramSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    sessionId?: SortOrder
    status?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TelegramSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    sessionId?: SortOrder
    status?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageAssetCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageAssetAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type ImageAssetMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageAssetMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageAssetSumOrderByAggregateInput = {
    size?: SortOrder
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