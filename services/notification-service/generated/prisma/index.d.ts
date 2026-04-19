
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
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model EmailMessage
 * 
 */
export type EmailMessage = $Result.DefaultSelection<Prisma.$EmailMessagePayload>
/**
 * Model EmailCampaign
 * 
 */
export type EmailCampaign = $Result.DefaultSelection<Prisma.$EmailCampaignPayload>
/**
 * Model SmsMessage
 * 
 */
export type SmsMessage = $Result.DefaultSelection<Prisma.$SmsMessagePayload>
/**
 * Model DeviceToken
 * 
 */
export type DeviceToken = $Result.DefaultSelection<Prisma.$DeviceTokenPayload>
/**
 * Model NotificationSetting
 * 
 */
export type NotificationSetting = $Result.DefaultSelection<Prisma.$NotificationSettingPayload>
/**
 * Model ContactPhoneVerification
 * 
 */
export type ContactPhoneVerification = $Result.DefaultSelection<Prisma.$ContactPhoneVerificationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Notifications
 * const notifications = await prisma.notification.findMany()
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
   * // Fetch zero or more Notifications
   * const notifications = await prisma.notification.findMany()
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
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailMessage`: Exposes CRUD operations for the **EmailMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailMessages
    * const emailMessages = await prisma.emailMessage.findMany()
    * ```
    */
  get emailMessage(): Prisma.EmailMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailCampaign`: Exposes CRUD operations for the **EmailCampaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailCampaigns
    * const emailCampaigns = await prisma.emailCampaign.findMany()
    * ```
    */
  get emailCampaign(): Prisma.EmailCampaignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.smsMessage`: Exposes CRUD operations for the **SmsMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SmsMessages
    * const smsMessages = await prisma.smsMessage.findMany()
    * ```
    */
  get smsMessage(): Prisma.SmsMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deviceToken`: Exposes CRUD operations for the **DeviceToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeviceTokens
    * const deviceTokens = await prisma.deviceToken.findMany()
    * ```
    */
  get deviceToken(): Prisma.DeviceTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificationSetting`: Exposes CRUD operations for the **NotificationSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationSettings
    * const notificationSettings = await prisma.notificationSetting.findMany()
    * ```
    */
  get notificationSetting(): Prisma.NotificationSettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactPhoneVerification`: Exposes CRUD operations for the **ContactPhoneVerification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactPhoneVerifications
    * const contactPhoneVerifications = await prisma.contactPhoneVerification.findMany()
    * ```
    */
  get contactPhoneVerification(): Prisma.ContactPhoneVerificationDelegate<ExtArgs, ClientOptions>;
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
    Notification: 'Notification',
    EmailMessage: 'EmailMessage',
    EmailCampaign: 'EmailCampaign',
    SmsMessage: 'SmsMessage',
    DeviceToken: 'DeviceToken',
    NotificationSetting: 'NotificationSetting',
    ContactPhoneVerification: 'ContactPhoneVerification'
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
      modelProps: "notification" | "emailMessage" | "emailCampaign" | "smsMessage" | "deviceToken" | "notificationSetting" | "contactPhoneVerification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      EmailMessage: {
        payload: Prisma.$EmailMessagePayload<ExtArgs>
        fields: Prisma.EmailMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailMessagePayload>
          }
          findFirst: {
            args: Prisma.EmailMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailMessagePayload>
          }
          findMany: {
            args: Prisma.EmailMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailMessagePayload>[]
          }
          create: {
            args: Prisma.EmailMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailMessagePayload>
          }
          createMany: {
            args: Prisma.EmailMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailMessagePayload>[]
          }
          delete: {
            args: Prisma.EmailMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailMessagePayload>
          }
          update: {
            args: Prisma.EmailMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailMessagePayload>
          }
          deleteMany: {
            args: Prisma.EmailMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailMessagePayload>[]
          }
          upsert: {
            args: Prisma.EmailMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailMessagePayload>
          }
          aggregate: {
            args: Prisma.EmailMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailMessage>
          }
          groupBy: {
            args: Prisma.EmailMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailMessageCountArgs<ExtArgs>
            result: $Utils.Optional<EmailMessageCountAggregateOutputType> | number
          }
        }
      }
      EmailCampaign: {
        payload: Prisma.$EmailCampaignPayload<ExtArgs>
        fields: Prisma.EmailCampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailCampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailCampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailCampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailCampaignPayload>
          }
          findFirst: {
            args: Prisma.EmailCampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailCampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailCampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailCampaignPayload>
          }
          findMany: {
            args: Prisma.EmailCampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailCampaignPayload>[]
          }
          create: {
            args: Prisma.EmailCampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailCampaignPayload>
          }
          createMany: {
            args: Prisma.EmailCampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailCampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailCampaignPayload>[]
          }
          delete: {
            args: Prisma.EmailCampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailCampaignPayload>
          }
          update: {
            args: Prisma.EmailCampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailCampaignPayload>
          }
          deleteMany: {
            args: Prisma.EmailCampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailCampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailCampaignUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailCampaignPayload>[]
          }
          upsert: {
            args: Prisma.EmailCampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailCampaignPayload>
          }
          aggregate: {
            args: Prisma.EmailCampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailCampaign>
          }
          groupBy: {
            args: Prisma.EmailCampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailCampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailCampaignCountArgs<ExtArgs>
            result: $Utils.Optional<EmailCampaignCountAggregateOutputType> | number
          }
        }
      }
      SmsMessage: {
        payload: Prisma.$SmsMessagePayload<ExtArgs>
        fields: Prisma.SmsMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SmsMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SmsMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsMessagePayload>
          }
          findFirst: {
            args: Prisma.SmsMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SmsMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsMessagePayload>
          }
          findMany: {
            args: Prisma.SmsMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsMessagePayload>[]
          }
          create: {
            args: Prisma.SmsMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsMessagePayload>
          }
          createMany: {
            args: Prisma.SmsMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SmsMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsMessagePayload>[]
          }
          delete: {
            args: Prisma.SmsMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsMessagePayload>
          }
          update: {
            args: Prisma.SmsMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsMessagePayload>
          }
          deleteMany: {
            args: Prisma.SmsMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SmsMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SmsMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsMessagePayload>[]
          }
          upsert: {
            args: Prisma.SmsMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmsMessagePayload>
          }
          aggregate: {
            args: Prisma.SmsMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSmsMessage>
          }
          groupBy: {
            args: Prisma.SmsMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<SmsMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.SmsMessageCountArgs<ExtArgs>
            result: $Utils.Optional<SmsMessageCountAggregateOutputType> | number
          }
        }
      }
      DeviceToken: {
        payload: Prisma.$DeviceTokenPayload<ExtArgs>
        fields: Prisma.DeviceTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload>
          }
          findFirst: {
            args: Prisma.DeviceTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload>
          }
          findMany: {
            args: Prisma.DeviceTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload>[]
          }
          create: {
            args: Prisma.DeviceTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload>
          }
          createMany: {
            args: Prisma.DeviceTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload>[]
          }
          delete: {
            args: Prisma.DeviceTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload>
          }
          update: {
            args: Prisma.DeviceTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload>
          }
          deleteMany: {
            args: Prisma.DeviceTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload>[]
          }
          upsert: {
            args: Prisma.DeviceTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceTokenPayload>
          }
          aggregate: {
            args: Prisma.DeviceTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeviceToken>
          }
          groupBy: {
            args: Prisma.DeviceTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceTokenCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceTokenCountAggregateOutputType> | number
          }
        }
      }
      NotificationSetting: {
        payload: Prisma.$NotificationSettingPayload<ExtArgs>
        fields: Prisma.NotificationSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingPayload>
          }
          findFirst: {
            args: Prisma.NotificationSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingPayload>
          }
          findMany: {
            args: Prisma.NotificationSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingPayload>[]
          }
          create: {
            args: Prisma.NotificationSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingPayload>
          }
          createMany: {
            args: Prisma.NotificationSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingPayload>[]
          }
          delete: {
            args: Prisma.NotificationSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingPayload>
          }
          update: {
            args: Prisma.NotificationSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingPayload>
          }
          deleteMany: {
            args: Prisma.NotificationSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationSettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingPayload>[]
          }
          upsert: {
            args: Prisma.NotificationSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingPayload>
          }
          aggregate: {
            args: Prisma.NotificationSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationSetting>
          }
          groupBy: {
            args: Prisma.NotificationSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationSettingCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationSettingCountAggregateOutputType> | number
          }
        }
      }
      ContactPhoneVerification: {
        payload: Prisma.$ContactPhoneVerificationPayload<ExtArgs>
        fields: Prisma.ContactPhoneVerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactPhoneVerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPhoneVerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactPhoneVerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPhoneVerificationPayload>
          }
          findFirst: {
            args: Prisma.ContactPhoneVerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPhoneVerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactPhoneVerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPhoneVerificationPayload>
          }
          findMany: {
            args: Prisma.ContactPhoneVerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPhoneVerificationPayload>[]
          }
          create: {
            args: Prisma.ContactPhoneVerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPhoneVerificationPayload>
          }
          createMany: {
            args: Prisma.ContactPhoneVerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactPhoneVerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPhoneVerificationPayload>[]
          }
          delete: {
            args: Prisma.ContactPhoneVerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPhoneVerificationPayload>
          }
          update: {
            args: Prisma.ContactPhoneVerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPhoneVerificationPayload>
          }
          deleteMany: {
            args: Prisma.ContactPhoneVerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactPhoneVerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactPhoneVerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPhoneVerificationPayload>[]
          }
          upsert: {
            args: Prisma.ContactPhoneVerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPhoneVerificationPayload>
          }
          aggregate: {
            args: Prisma.ContactPhoneVerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactPhoneVerification>
          }
          groupBy: {
            args: Prisma.ContactPhoneVerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactPhoneVerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactPhoneVerificationCountArgs<ExtArgs>
            result: $Utils.Optional<ContactPhoneVerificationCountAggregateOutputType> | number
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
    notification?: NotificationOmit
    emailMessage?: EmailMessageOmit
    emailCampaign?: EmailCampaignOmit
    smsMessage?: SmsMessageOmit
    deviceToken?: DeviceTokenOmit
    notificationSetting?: NotificationSettingOmit
    contactPhoneVerification?: ContactPhoneVerificationOmit
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
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    org_id: string | null
    user_id: string | null
    type: string | null
    category: string | null
    title: string | null
    body: string | null
    is_seen: boolean | null
    is_read: boolean | null
    is_archived: boolean | null
    seen_at: Date | null
    archived_at: Date | null
    ref_id: string | null
    ref_type: string | null
    created_at: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    org_id: string | null
    user_id: string | null
    type: string | null
    category: string | null
    title: string | null
    body: string | null
    is_seen: boolean | null
    is_read: boolean | null
    is_archived: boolean | null
    seen_at: Date | null
    archived_at: Date | null
    ref_id: string | null
    ref_type: string | null
    created_at: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    org_id: number
    user_id: number
    type: number
    category: number
    title: number
    body: number
    is_seen: number
    is_read: number
    is_archived: number
    seen_at: number
    archived_at: number
    ref_id: number
    ref_type: number
    metadata: number
    created_at: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    org_id?: true
    user_id?: true
    type?: true
    category?: true
    title?: true
    body?: true
    is_seen?: true
    is_read?: true
    is_archived?: true
    seen_at?: true
    archived_at?: true
    ref_id?: true
    ref_type?: true
    created_at?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    org_id?: true
    user_id?: true
    type?: true
    category?: true
    title?: true
    body?: true
    is_seen?: true
    is_read?: true
    is_archived?: true
    seen_at?: true
    archived_at?: true
    ref_id?: true
    ref_type?: true
    created_at?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    org_id?: true
    user_id?: true
    type?: true
    category?: true
    title?: true
    body?: true
    is_seen?: true
    is_read?: true
    is_archived?: true
    seen_at?: true
    archived_at?: true
    ref_id?: true
    ref_type?: true
    metadata?: true
    created_at?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    org_id: string
    user_id: string
    type: string
    category: string | null
    title: string | null
    body: string | null
    is_seen: boolean
    is_read: boolean
    is_archived: boolean
    seen_at: Date | null
    archived_at: Date | null
    ref_id: string | null
    ref_type: string | null
    metadata: JsonValue
    created_at: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    user_id?: boolean
    type?: boolean
    category?: boolean
    title?: boolean
    body?: boolean
    is_seen?: boolean
    is_read?: boolean
    is_archived?: boolean
    seen_at?: boolean
    archived_at?: boolean
    ref_id?: boolean
    ref_type?: boolean
    metadata?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    user_id?: boolean
    type?: boolean
    category?: boolean
    title?: boolean
    body?: boolean
    is_seen?: boolean
    is_read?: boolean
    is_archived?: boolean
    seen_at?: boolean
    archived_at?: boolean
    ref_id?: boolean
    ref_type?: boolean
    metadata?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    user_id?: boolean
    type?: boolean
    category?: boolean
    title?: boolean
    body?: boolean
    is_seen?: boolean
    is_read?: boolean
    is_archived?: boolean
    seen_at?: boolean
    archived_at?: boolean
    ref_id?: boolean
    ref_type?: boolean
    metadata?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    org_id?: boolean
    user_id?: boolean
    type?: boolean
    category?: boolean
    title?: boolean
    body?: boolean
    is_seen?: boolean
    is_read?: boolean
    is_archived?: boolean
    seen_at?: boolean
    archived_at?: boolean
    ref_id?: boolean
    ref_type?: boolean
    metadata?: boolean
    created_at?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "org_id" | "user_id" | "type" | "category" | "title" | "body" | "is_seen" | "is_read" | "is_archived" | "seen_at" | "archived_at" | "ref_id" | "ref_type" | "metadata" | "created_at", ExtArgs["result"]["notification"]>

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      org_id: string
      user_id: string
      type: string
      category: string | null
      title: string | null
      body: string | null
      is_seen: boolean
      is_read: boolean
      is_archived: boolean
      seen_at: Date | null
      archived_at: Date | null
      ref_id: string | null
      ref_type: string | null
      metadata: Prisma.JsonValue
      created_at: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly org_id: FieldRef<"Notification", 'String'>
    readonly user_id: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly category: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly body: FieldRef<"Notification", 'String'>
    readonly is_seen: FieldRef<"Notification", 'Boolean'>
    readonly is_read: FieldRef<"Notification", 'Boolean'>
    readonly is_archived: FieldRef<"Notification", 'Boolean'>
    readonly seen_at: FieldRef<"Notification", 'DateTime'>
    readonly archived_at: FieldRef<"Notification", 'DateTime'>
    readonly ref_id: FieldRef<"Notification", 'String'>
    readonly ref_type: FieldRef<"Notification", 'String'>
    readonly metadata: FieldRef<"Notification", 'Json'>
    readonly created_at: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
  }


  /**
   * Model EmailMessage
   */

  export type AggregateEmailMessage = {
    _count: EmailMessageCountAggregateOutputType | null
    _min: EmailMessageMinAggregateOutputType | null
    _max: EmailMessageMaxAggregateOutputType | null
  }

  export type EmailMessageMinAggregateOutputType = {
    id: string | null
    org_id: string | null
    created_by: string | null
    subject: string | null
    body: string | null
    from_email: string | null
    from_name: string | null
    is_sent: boolean | null
    sent_at: Date | null
    is_deleted: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EmailMessageMaxAggregateOutputType = {
    id: string | null
    org_id: string | null
    created_by: string | null
    subject: string | null
    body: string | null
    from_email: string | null
    from_name: string | null
    is_sent: boolean | null
    sent_at: Date | null
    is_deleted: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EmailMessageCountAggregateOutputType = {
    id: number
    org_id: number
    created_by: number
    subject: number
    body: number
    to: number
    cc: number
    bcc: number
    from_email: number
    from_name: number
    is_sent: number
    sent_at: number
    is_deleted: number
    metadata: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type EmailMessageMinAggregateInputType = {
    id?: true
    org_id?: true
    created_by?: true
    subject?: true
    body?: true
    from_email?: true
    from_name?: true
    is_sent?: true
    sent_at?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type EmailMessageMaxAggregateInputType = {
    id?: true
    org_id?: true
    created_by?: true
    subject?: true
    body?: true
    from_email?: true
    from_name?: true
    is_sent?: true
    sent_at?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type EmailMessageCountAggregateInputType = {
    id?: true
    org_id?: true
    created_by?: true
    subject?: true
    body?: true
    to?: true
    cc?: true
    bcc?: true
    from_email?: true
    from_name?: true
    is_sent?: true
    sent_at?: true
    is_deleted?: true
    metadata?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type EmailMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailMessage to aggregate.
     */
    where?: EmailMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailMessages to fetch.
     */
    orderBy?: EmailMessageOrderByWithRelationInput | EmailMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailMessages
    **/
    _count?: true | EmailMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailMessageMaxAggregateInputType
  }

  export type GetEmailMessageAggregateType<T extends EmailMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailMessage[P]>
      : GetScalarType<T[P], AggregateEmailMessage[P]>
  }




  export type EmailMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailMessageWhereInput
    orderBy?: EmailMessageOrderByWithAggregationInput | EmailMessageOrderByWithAggregationInput[]
    by: EmailMessageScalarFieldEnum[] | EmailMessageScalarFieldEnum
    having?: EmailMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailMessageCountAggregateInputType | true
    _min?: EmailMessageMinAggregateInputType
    _max?: EmailMessageMaxAggregateInputType
  }

  export type EmailMessageGroupByOutputType = {
    id: string
    org_id: string
    created_by: string
    subject: string | null
    body: string | null
    to: string[]
    cc: string[]
    bcc: string[]
    from_email: string | null
    from_name: string | null
    is_sent: boolean
    sent_at: Date | null
    is_deleted: boolean
    metadata: JsonValue
    created_at: Date
    updated_at: Date
    _count: EmailMessageCountAggregateOutputType | null
    _min: EmailMessageMinAggregateOutputType | null
    _max: EmailMessageMaxAggregateOutputType | null
  }

  type GetEmailMessageGroupByPayload<T extends EmailMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailMessageGroupByOutputType[P]>
            : GetScalarType<T[P], EmailMessageGroupByOutputType[P]>
        }
      >
    >


  export type EmailMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    created_by?: boolean
    subject?: boolean
    body?: boolean
    to?: boolean
    cc?: boolean
    bcc?: boolean
    from_email?: boolean
    from_name?: boolean
    is_sent?: boolean
    sent_at?: boolean
    is_deleted?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["emailMessage"]>

  export type EmailMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    created_by?: boolean
    subject?: boolean
    body?: boolean
    to?: boolean
    cc?: boolean
    bcc?: boolean
    from_email?: boolean
    from_name?: boolean
    is_sent?: boolean
    sent_at?: boolean
    is_deleted?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["emailMessage"]>

  export type EmailMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    created_by?: boolean
    subject?: boolean
    body?: boolean
    to?: boolean
    cc?: boolean
    bcc?: boolean
    from_email?: boolean
    from_name?: boolean
    is_sent?: boolean
    sent_at?: boolean
    is_deleted?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["emailMessage"]>

  export type EmailMessageSelectScalar = {
    id?: boolean
    org_id?: boolean
    created_by?: boolean
    subject?: boolean
    body?: boolean
    to?: boolean
    cc?: boolean
    bcc?: boolean
    from_email?: boolean
    from_name?: boolean
    is_sent?: boolean
    sent_at?: boolean
    is_deleted?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type EmailMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "org_id" | "created_by" | "subject" | "body" | "to" | "cc" | "bcc" | "from_email" | "from_name" | "is_sent" | "sent_at" | "is_deleted" | "metadata" | "created_at" | "updated_at", ExtArgs["result"]["emailMessage"]>

  export type $EmailMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailMessage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      org_id: string
      created_by: string
      subject: string | null
      body: string | null
      to: string[]
      cc: string[]
      bcc: string[]
      from_email: string | null
      from_name: string | null
      is_sent: boolean
      sent_at: Date | null
      is_deleted: boolean
      metadata: Prisma.JsonValue
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["emailMessage"]>
    composites: {}
  }

  type EmailMessageGetPayload<S extends boolean | null | undefined | EmailMessageDefaultArgs> = $Result.GetResult<Prisma.$EmailMessagePayload, S>

  type EmailMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailMessageCountAggregateInputType | true
    }

  export interface EmailMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailMessage'], meta: { name: 'EmailMessage' } }
    /**
     * Find zero or one EmailMessage that matches the filter.
     * @param {EmailMessageFindUniqueArgs} args - Arguments to find a EmailMessage
     * @example
     * // Get one EmailMessage
     * const emailMessage = await prisma.emailMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailMessageFindUniqueArgs>(args: SelectSubset<T, EmailMessageFindUniqueArgs<ExtArgs>>): Prisma__EmailMessageClient<$Result.GetResult<Prisma.$EmailMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailMessageFindUniqueOrThrowArgs} args - Arguments to find a EmailMessage
     * @example
     * // Get one EmailMessage
     * const emailMessage = await prisma.emailMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailMessageClient<$Result.GetResult<Prisma.$EmailMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailMessageFindFirstArgs} args - Arguments to find a EmailMessage
     * @example
     * // Get one EmailMessage
     * const emailMessage = await prisma.emailMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailMessageFindFirstArgs>(args?: SelectSubset<T, EmailMessageFindFirstArgs<ExtArgs>>): Prisma__EmailMessageClient<$Result.GetResult<Prisma.$EmailMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailMessageFindFirstOrThrowArgs} args - Arguments to find a EmailMessage
     * @example
     * // Get one EmailMessage
     * const emailMessage = await prisma.emailMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailMessageClient<$Result.GetResult<Prisma.$EmailMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailMessages
     * const emailMessages = await prisma.emailMessage.findMany()
     * 
     * // Get first 10 EmailMessages
     * const emailMessages = await prisma.emailMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailMessageWithIdOnly = await prisma.emailMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailMessageFindManyArgs>(args?: SelectSubset<T, EmailMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailMessage.
     * @param {EmailMessageCreateArgs} args - Arguments to create a EmailMessage.
     * @example
     * // Create one EmailMessage
     * const EmailMessage = await prisma.emailMessage.create({
     *   data: {
     *     // ... data to create a EmailMessage
     *   }
     * })
     * 
     */
    create<T extends EmailMessageCreateArgs>(args: SelectSubset<T, EmailMessageCreateArgs<ExtArgs>>): Prisma__EmailMessageClient<$Result.GetResult<Prisma.$EmailMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailMessages.
     * @param {EmailMessageCreateManyArgs} args - Arguments to create many EmailMessages.
     * @example
     * // Create many EmailMessages
     * const emailMessage = await prisma.emailMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailMessageCreateManyArgs>(args?: SelectSubset<T, EmailMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailMessages and returns the data saved in the database.
     * @param {EmailMessageCreateManyAndReturnArgs} args - Arguments to create many EmailMessages.
     * @example
     * // Create many EmailMessages
     * const emailMessage = await prisma.emailMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailMessages and only return the `id`
     * const emailMessageWithIdOnly = await prisma.emailMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailMessage.
     * @param {EmailMessageDeleteArgs} args - Arguments to delete one EmailMessage.
     * @example
     * // Delete one EmailMessage
     * const EmailMessage = await prisma.emailMessage.delete({
     *   where: {
     *     // ... filter to delete one EmailMessage
     *   }
     * })
     * 
     */
    delete<T extends EmailMessageDeleteArgs>(args: SelectSubset<T, EmailMessageDeleteArgs<ExtArgs>>): Prisma__EmailMessageClient<$Result.GetResult<Prisma.$EmailMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailMessage.
     * @param {EmailMessageUpdateArgs} args - Arguments to update one EmailMessage.
     * @example
     * // Update one EmailMessage
     * const emailMessage = await prisma.emailMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailMessageUpdateArgs>(args: SelectSubset<T, EmailMessageUpdateArgs<ExtArgs>>): Prisma__EmailMessageClient<$Result.GetResult<Prisma.$EmailMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailMessages.
     * @param {EmailMessageDeleteManyArgs} args - Arguments to filter EmailMessages to delete.
     * @example
     * // Delete a few EmailMessages
     * const { count } = await prisma.emailMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailMessageDeleteManyArgs>(args?: SelectSubset<T, EmailMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailMessages
     * const emailMessage = await prisma.emailMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailMessageUpdateManyArgs>(args: SelectSubset<T, EmailMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailMessages and returns the data updated in the database.
     * @param {EmailMessageUpdateManyAndReturnArgs} args - Arguments to update many EmailMessages.
     * @example
     * // Update many EmailMessages
     * const emailMessage = await prisma.emailMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailMessages and only return the `id`
     * const emailMessageWithIdOnly = await prisma.emailMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmailMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailMessage.
     * @param {EmailMessageUpsertArgs} args - Arguments to update or create a EmailMessage.
     * @example
     * // Update or create a EmailMessage
     * const emailMessage = await prisma.emailMessage.upsert({
     *   create: {
     *     // ... data to create a EmailMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailMessage we want to update
     *   }
     * })
     */
    upsert<T extends EmailMessageUpsertArgs>(args: SelectSubset<T, EmailMessageUpsertArgs<ExtArgs>>): Prisma__EmailMessageClient<$Result.GetResult<Prisma.$EmailMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailMessageCountArgs} args - Arguments to filter EmailMessages to count.
     * @example
     * // Count the number of EmailMessages
     * const count = await prisma.emailMessage.count({
     *   where: {
     *     // ... the filter for the EmailMessages we want to count
     *   }
     * })
    **/
    count<T extends EmailMessageCountArgs>(
      args?: Subset<T, EmailMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailMessageAggregateArgs>(args: Subset<T, EmailMessageAggregateArgs>): Prisma.PrismaPromise<GetEmailMessageAggregateType<T>>

    /**
     * Group by EmailMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailMessageGroupByArgs} args - Group by arguments.
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
      T extends EmailMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailMessageGroupByArgs['orderBy'] }
        : { orderBy?: EmailMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailMessage model
   */
  readonly fields: EmailMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the EmailMessage model
   */
  interface EmailMessageFieldRefs {
    readonly id: FieldRef<"EmailMessage", 'String'>
    readonly org_id: FieldRef<"EmailMessage", 'String'>
    readonly created_by: FieldRef<"EmailMessage", 'String'>
    readonly subject: FieldRef<"EmailMessage", 'String'>
    readonly body: FieldRef<"EmailMessage", 'String'>
    readonly to: FieldRef<"EmailMessage", 'String[]'>
    readonly cc: FieldRef<"EmailMessage", 'String[]'>
    readonly bcc: FieldRef<"EmailMessage", 'String[]'>
    readonly from_email: FieldRef<"EmailMessage", 'String'>
    readonly from_name: FieldRef<"EmailMessage", 'String'>
    readonly is_sent: FieldRef<"EmailMessage", 'Boolean'>
    readonly sent_at: FieldRef<"EmailMessage", 'DateTime'>
    readonly is_deleted: FieldRef<"EmailMessage", 'Boolean'>
    readonly metadata: FieldRef<"EmailMessage", 'Json'>
    readonly created_at: FieldRef<"EmailMessage", 'DateTime'>
    readonly updated_at: FieldRef<"EmailMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailMessage findUnique
   */
  export type EmailMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailMessage
     */
    select?: EmailMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailMessage
     */
    omit?: EmailMessageOmit<ExtArgs> | null
    /**
     * Filter, which EmailMessage to fetch.
     */
    where: EmailMessageWhereUniqueInput
  }

  /**
   * EmailMessage findUniqueOrThrow
   */
  export type EmailMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailMessage
     */
    select?: EmailMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailMessage
     */
    omit?: EmailMessageOmit<ExtArgs> | null
    /**
     * Filter, which EmailMessage to fetch.
     */
    where: EmailMessageWhereUniqueInput
  }

  /**
   * EmailMessage findFirst
   */
  export type EmailMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailMessage
     */
    select?: EmailMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailMessage
     */
    omit?: EmailMessageOmit<ExtArgs> | null
    /**
     * Filter, which EmailMessage to fetch.
     */
    where?: EmailMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailMessages to fetch.
     */
    orderBy?: EmailMessageOrderByWithRelationInput | EmailMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailMessages.
     */
    cursor?: EmailMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailMessages.
     */
    distinct?: EmailMessageScalarFieldEnum | EmailMessageScalarFieldEnum[]
  }

  /**
   * EmailMessage findFirstOrThrow
   */
  export type EmailMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailMessage
     */
    select?: EmailMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailMessage
     */
    omit?: EmailMessageOmit<ExtArgs> | null
    /**
     * Filter, which EmailMessage to fetch.
     */
    where?: EmailMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailMessages to fetch.
     */
    orderBy?: EmailMessageOrderByWithRelationInput | EmailMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailMessages.
     */
    cursor?: EmailMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailMessages.
     */
    distinct?: EmailMessageScalarFieldEnum | EmailMessageScalarFieldEnum[]
  }

  /**
   * EmailMessage findMany
   */
  export type EmailMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailMessage
     */
    select?: EmailMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailMessage
     */
    omit?: EmailMessageOmit<ExtArgs> | null
    /**
     * Filter, which EmailMessages to fetch.
     */
    where?: EmailMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailMessages to fetch.
     */
    orderBy?: EmailMessageOrderByWithRelationInput | EmailMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailMessages.
     */
    cursor?: EmailMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailMessages.
     */
    skip?: number
    distinct?: EmailMessageScalarFieldEnum | EmailMessageScalarFieldEnum[]
  }

  /**
   * EmailMessage create
   */
  export type EmailMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailMessage
     */
    select?: EmailMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailMessage
     */
    omit?: EmailMessageOmit<ExtArgs> | null
    /**
     * The data needed to create a EmailMessage.
     */
    data: XOR<EmailMessageCreateInput, EmailMessageUncheckedCreateInput>
  }

  /**
   * EmailMessage createMany
   */
  export type EmailMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailMessages.
     */
    data: EmailMessageCreateManyInput | EmailMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailMessage createManyAndReturn
   */
  export type EmailMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailMessage
     */
    select?: EmailMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailMessage
     */
    omit?: EmailMessageOmit<ExtArgs> | null
    /**
     * The data used to create many EmailMessages.
     */
    data: EmailMessageCreateManyInput | EmailMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailMessage update
   */
  export type EmailMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailMessage
     */
    select?: EmailMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailMessage
     */
    omit?: EmailMessageOmit<ExtArgs> | null
    /**
     * The data needed to update a EmailMessage.
     */
    data: XOR<EmailMessageUpdateInput, EmailMessageUncheckedUpdateInput>
    /**
     * Choose, which EmailMessage to update.
     */
    where: EmailMessageWhereUniqueInput
  }

  /**
   * EmailMessage updateMany
   */
  export type EmailMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailMessages.
     */
    data: XOR<EmailMessageUpdateManyMutationInput, EmailMessageUncheckedUpdateManyInput>
    /**
     * Filter which EmailMessages to update
     */
    where?: EmailMessageWhereInput
    /**
     * Limit how many EmailMessages to update.
     */
    limit?: number
  }

  /**
   * EmailMessage updateManyAndReturn
   */
  export type EmailMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailMessage
     */
    select?: EmailMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailMessage
     */
    omit?: EmailMessageOmit<ExtArgs> | null
    /**
     * The data used to update EmailMessages.
     */
    data: XOR<EmailMessageUpdateManyMutationInput, EmailMessageUncheckedUpdateManyInput>
    /**
     * Filter which EmailMessages to update
     */
    where?: EmailMessageWhereInput
    /**
     * Limit how many EmailMessages to update.
     */
    limit?: number
  }

  /**
   * EmailMessage upsert
   */
  export type EmailMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailMessage
     */
    select?: EmailMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailMessage
     */
    omit?: EmailMessageOmit<ExtArgs> | null
    /**
     * The filter to search for the EmailMessage to update in case it exists.
     */
    where: EmailMessageWhereUniqueInput
    /**
     * In case the EmailMessage found by the `where` argument doesn't exist, create a new EmailMessage with this data.
     */
    create: XOR<EmailMessageCreateInput, EmailMessageUncheckedCreateInput>
    /**
     * In case the EmailMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailMessageUpdateInput, EmailMessageUncheckedUpdateInput>
  }

  /**
   * EmailMessage delete
   */
  export type EmailMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailMessage
     */
    select?: EmailMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailMessage
     */
    omit?: EmailMessageOmit<ExtArgs> | null
    /**
     * Filter which EmailMessage to delete.
     */
    where: EmailMessageWhereUniqueInput
  }

  /**
   * EmailMessage deleteMany
   */
  export type EmailMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailMessages to delete
     */
    where?: EmailMessageWhereInput
    /**
     * Limit how many EmailMessages to delete.
     */
    limit?: number
  }

  /**
   * EmailMessage without action
   */
  export type EmailMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailMessage
     */
    select?: EmailMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailMessage
     */
    omit?: EmailMessageOmit<ExtArgs> | null
  }


  /**
   * Model EmailCampaign
   */

  export type AggregateEmailCampaign = {
    _count: EmailCampaignCountAggregateOutputType | null
    _min: EmailCampaignMinAggregateOutputType | null
    _max: EmailCampaignMaxAggregateOutputType | null
  }

  export type EmailCampaignMinAggregateOutputType = {
    id: string | null
    org_id: string | null
    created_by: string | null
    series_id: string | null
    name: string | null
    subject: string | null
    body: string | null
    status: string | null
    scheduled_at: Date | null
    sent_at: Date | null
    is_deleted: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EmailCampaignMaxAggregateOutputType = {
    id: string | null
    org_id: string | null
    created_by: string | null
    series_id: string | null
    name: string | null
    subject: string | null
    body: string | null
    status: string | null
    scheduled_at: Date | null
    sent_at: Date | null
    is_deleted: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EmailCampaignCountAggregateOutputType = {
    id: number
    org_id: number
    created_by: number
    series_id: number
    name: number
    subject: number
    body: number
    status: number
    scheduled_at: number
    sent_at: number
    is_deleted: number
    metadata: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type EmailCampaignMinAggregateInputType = {
    id?: true
    org_id?: true
    created_by?: true
    series_id?: true
    name?: true
    subject?: true
    body?: true
    status?: true
    scheduled_at?: true
    sent_at?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type EmailCampaignMaxAggregateInputType = {
    id?: true
    org_id?: true
    created_by?: true
    series_id?: true
    name?: true
    subject?: true
    body?: true
    status?: true
    scheduled_at?: true
    sent_at?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type EmailCampaignCountAggregateInputType = {
    id?: true
    org_id?: true
    created_by?: true
    series_id?: true
    name?: true
    subject?: true
    body?: true
    status?: true
    scheduled_at?: true
    sent_at?: true
    is_deleted?: true
    metadata?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type EmailCampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailCampaign to aggregate.
     */
    where?: EmailCampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailCampaigns to fetch.
     */
    orderBy?: EmailCampaignOrderByWithRelationInput | EmailCampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailCampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailCampaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailCampaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailCampaigns
    **/
    _count?: true | EmailCampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailCampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailCampaignMaxAggregateInputType
  }

  export type GetEmailCampaignAggregateType<T extends EmailCampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailCampaign[P]>
      : GetScalarType<T[P], AggregateEmailCampaign[P]>
  }




  export type EmailCampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailCampaignWhereInput
    orderBy?: EmailCampaignOrderByWithAggregationInput | EmailCampaignOrderByWithAggregationInput[]
    by: EmailCampaignScalarFieldEnum[] | EmailCampaignScalarFieldEnum
    having?: EmailCampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailCampaignCountAggregateInputType | true
    _min?: EmailCampaignMinAggregateInputType
    _max?: EmailCampaignMaxAggregateInputType
  }

  export type EmailCampaignGroupByOutputType = {
    id: string
    org_id: string
    created_by: string
    series_id: string
    name: string
    subject: string
    body: string
    status: string
    scheduled_at: Date | null
    sent_at: Date | null
    is_deleted: boolean
    metadata: JsonValue
    created_at: Date
    updated_at: Date
    _count: EmailCampaignCountAggregateOutputType | null
    _min: EmailCampaignMinAggregateOutputType | null
    _max: EmailCampaignMaxAggregateOutputType | null
  }

  type GetEmailCampaignGroupByPayload<T extends EmailCampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailCampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailCampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailCampaignGroupByOutputType[P]>
            : GetScalarType<T[P], EmailCampaignGroupByOutputType[P]>
        }
      >
    >


  export type EmailCampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    created_by?: boolean
    series_id?: boolean
    name?: boolean
    subject?: boolean
    body?: boolean
    status?: boolean
    scheduled_at?: boolean
    sent_at?: boolean
    is_deleted?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["emailCampaign"]>

  export type EmailCampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    created_by?: boolean
    series_id?: boolean
    name?: boolean
    subject?: boolean
    body?: boolean
    status?: boolean
    scheduled_at?: boolean
    sent_at?: boolean
    is_deleted?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["emailCampaign"]>

  export type EmailCampaignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    created_by?: boolean
    series_id?: boolean
    name?: boolean
    subject?: boolean
    body?: boolean
    status?: boolean
    scheduled_at?: boolean
    sent_at?: boolean
    is_deleted?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["emailCampaign"]>

  export type EmailCampaignSelectScalar = {
    id?: boolean
    org_id?: boolean
    created_by?: boolean
    series_id?: boolean
    name?: boolean
    subject?: boolean
    body?: boolean
    status?: boolean
    scheduled_at?: boolean
    sent_at?: boolean
    is_deleted?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type EmailCampaignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "org_id" | "created_by" | "series_id" | "name" | "subject" | "body" | "status" | "scheduled_at" | "sent_at" | "is_deleted" | "metadata" | "created_at" | "updated_at", ExtArgs["result"]["emailCampaign"]>

  export type $EmailCampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailCampaign"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      org_id: string
      created_by: string
      series_id: string
      name: string
      subject: string
      body: string
      status: string
      scheduled_at: Date | null
      sent_at: Date | null
      is_deleted: boolean
      metadata: Prisma.JsonValue
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["emailCampaign"]>
    composites: {}
  }

  type EmailCampaignGetPayload<S extends boolean | null | undefined | EmailCampaignDefaultArgs> = $Result.GetResult<Prisma.$EmailCampaignPayload, S>

  type EmailCampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailCampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailCampaignCountAggregateInputType | true
    }

  export interface EmailCampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailCampaign'], meta: { name: 'EmailCampaign' } }
    /**
     * Find zero or one EmailCampaign that matches the filter.
     * @param {EmailCampaignFindUniqueArgs} args - Arguments to find a EmailCampaign
     * @example
     * // Get one EmailCampaign
     * const emailCampaign = await prisma.emailCampaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailCampaignFindUniqueArgs>(args: SelectSubset<T, EmailCampaignFindUniqueArgs<ExtArgs>>): Prisma__EmailCampaignClient<$Result.GetResult<Prisma.$EmailCampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailCampaign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailCampaignFindUniqueOrThrowArgs} args - Arguments to find a EmailCampaign
     * @example
     * // Get one EmailCampaign
     * const emailCampaign = await prisma.emailCampaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailCampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailCampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailCampaignClient<$Result.GetResult<Prisma.$EmailCampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailCampaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailCampaignFindFirstArgs} args - Arguments to find a EmailCampaign
     * @example
     * // Get one EmailCampaign
     * const emailCampaign = await prisma.emailCampaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailCampaignFindFirstArgs>(args?: SelectSubset<T, EmailCampaignFindFirstArgs<ExtArgs>>): Prisma__EmailCampaignClient<$Result.GetResult<Prisma.$EmailCampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailCampaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailCampaignFindFirstOrThrowArgs} args - Arguments to find a EmailCampaign
     * @example
     * // Get one EmailCampaign
     * const emailCampaign = await prisma.emailCampaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailCampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailCampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailCampaignClient<$Result.GetResult<Prisma.$EmailCampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailCampaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailCampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailCampaigns
     * const emailCampaigns = await prisma.emailCampaign.findMany()
     * 
     * // Get first 10 EmailCampaigns
     * const emailCampaigns = await prisma.emailCampaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailCampaignWithIdOnly = await prisma.emailCampaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailCampaignFindManyArgs>(args?: SelectSubset<T, EmailCampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailCampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailCampaign.
     * @param {EmailCampaignCreateArgs} args - Arguments to create a EmailCampaign.
     * @example
     * // Create one EmailCampaign
     * const EmailCampaign = await prisma.emailCampaign.create({
     *   data: {
     *     // ... data to create a EmailCampaign
     *   }
     * })
     * 
     */
    create<T extends EmailCampaignCreateArgs>(args: SelectSubset<T, EmailCampaignCreateArgs<ExtArgs>>): Prisma__EmailCampaignClient<$Result.GetResult<Prisma.$EmailCampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailCampaigns.
     * @param {EmailCampaignCreateManyArgs} args - Arguments to create many EmailCampaigns.
     * @example
     * // Create many EmailCampaigns
     * const emailCampaign = await prisma.emailCampaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailCampaignCreateManyArgs>(args?: SelectSubset<T, EmailCampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailCampaigns and returns the data saved in the database.
     * @param {EmailCampaignCreateManyAndReturnArgs} args - Arguments to create many EmailCampaigns.
     * @example
     * // Create many EmailCampaigns
     * const emailCampaign = await prisma.emailCampaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailCampaigns and only return the `id`
     * const emailCampaignWithIdOnly = await prisma.emailCampaign.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailCampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailCampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailCampaignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailCampaign.
     * @param {EmailCampaignDeleteArgs} args - Arguments to delete one EmailCampaign.
     * @example
     * // Delete one EmailCampaign
     * const EmailCampaign = await prisma.emailCampaign.delete({
     *   where: {
     *     // ... filter to delete one EmailCampaign
     *   }
     * })
     * 
     */
    delete<T extends EmailCampaignDeleteArgs>(args: SelectSubset<T, EmailCampaignDeleteArgs<ExtArgs>>): Prisma__EmailCampaignClient<$Result.GetResult<Prisma.$EmailCampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailCampaign.
     * @param {EmailCampaignUpdateArgs} args - Arguments to update one EmailCampaign.
     * @example
     * // Update one EmailCampaign
     * const emailCampaign = await prisma.emailCampaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailCampaignUpdateArgs>(args: SelectSubset<T, EmailCampaignUpdateArgs<ExtArgs>>): Prisma__EmailCampaignClient<$Result.GetResult<Prisma.$EmailCampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailCampaigns.
     * @param {EmailCampaignDeleteManyArgs} args - Arguments to filter EmailCampaigns to delete.
     * @example
     * // Delete a few EmailCampaigns
     * const { count } = await prisma.emailCampaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailCampaignDeleteManyArgs>(args?: SelectSubset<T, EmailCampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailCampaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailCampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailCampaigns
     * const emailCampaign = await prisma.emailCampaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailCampaignUpdateManyArgs>(args: SelectSubset<T, EmailCampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailCampaigns and returns the data updated in the database.
     * @param {EmailCampaignUpdateManyAndReturnArgs} args - Arguments to update many EmailCampaigns.
     * @example
     * // Update many EmailCampaigns
     * const emailCampaign = await prisma.emailCampaign.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailCampaigns and only return the `id`
     * const emailCampaignWithIdOnly = await prisma.emailCampaign.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmailCampaignUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailCampaignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailCampaignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailCampaign.
     * @param {EmailCampaignUpsertArgs} args - Arguments to update or create a EmailCampaign.
     * @example
     * // Update or create a EmailCampaign
     * const emailCampaign = await prisma.emailCampaign.upsert({
     *   create: {
     *     // ... data to create a EmailCampaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailCampaign we want to update
     *   }
     * })
     */
    upsert<T extends EmailCampaignUpsertArgs>(args: SelectSubset<T, EmailCampaignUpsertArgs<ExtArgs>>): Prisma__EmailCampaignClient<$Result.GetResult<Prisma.$EmailCampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailCampaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailCampaignCountArgs} args - Arguments to filter EmailCampaigns to count.
     * @example
     * // Count the number of EmailCampaigns
     * const count = await prisma.emailCampaign.count({
     *   where: {
     *     // ... the filter for the EmailCampaigns we want to count
     *   }
     * })
    **/
    count<T extends EmailCampaignCountArgs>(
      args?: Subset<T, EmailCampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailCampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailCampaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailCampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailCampaignAggregateArgs>(args: Subset<T, EmailCampaignAggregateArgs>): Prisma.PrismaPromise<GetEmailCampaignAggregateType<T>>

    /**
     * Group by EmailCampaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailCampaignGroupByArgs} args - Group by arguments.
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
      T extends EmailCampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailCampaignGroupByArgs['orderBy'] }
        : { orderBy?: EmailCampaignGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailCampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailCampaign model
   */
  readonly fields: EmailCampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailCampaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailCampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the EmailCampaign model
   */
  interface EmailCampaignFieldRefs {
    readonly id: FieldRef<"EmailCampaign", 'String'>
    readonly org_id: FieldRef<"EmailCampaign", 'String'>
    readonly created_by: FieldRef<"EmailCampaign", 'String'>
    readonly series_id: FieldRef<"EmailCampaign", 'String'>
    readonly name: FieldRef<"EmailCampaign", 'String'>
    readonly subject: FieldRef<"EmailCampaign", 'String'>
    readonly body: FieldRef<"EmailCampaign", 'String'>
    readonly status: FieldRef<"EmailCampaign", 'String'>
    readonly scheduled_at: FieldRef<"EmailCampaign", 'DateTime'>
    readonly sent_at: FieldRef<"EmailCampaign", 'DateTime'>
    readonly is_deleted: FieldRef<"EmailCampaign", 'Boolean'>
    readonly metadata: FieldRef<"EmailCampaign", 'Json'>
    readonly created_at: FieldRef<"EmailCampaign", 'DateTime'>
    readonly updated_at: FieldRef<"EmailCampaign", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailCampaign findUnique
   */
  export type EmailCampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailCampaign
     */
    select?: EmailCampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailCampaign
     */
    omit?: EmailCampaignOmit<ExtArgs> | null
    /**
     * Filter, which EmailCampaign to fetch.
     */
    where: EmailCampaignWhereUniqueInput
  }

  /**
   * EmailCampaign findUniqueOrThrow
   */
  export type EmailCampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailCampaign
     */
    select?: EmailCampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailCampaign
     */
    omit?: EmailCampaignOmit<ExtArgs> | null
    /**
     * Filter, which EmailCampaign to fetch.
     */
    where: EmailCampaignWhereUniqueInput
  }

  /**
   * EmailCampaign findFirst
   */
  export type EmailCampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailCampaign
     */
    select?: EmailCampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailCampaign
     */
    omit?: EmailCampaignOmit<ExtArgs> | null
    /**
     * Filter, which EmailCampaign to fetch.
     */
    where?: EmailCampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailCampaigns to fetch.
     */
    orderBy?: EmailCampaignOrderByWithRelationInput | EmailCampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailCampaigns.
     */
    cursor?: EmailCampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailCampaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailCampaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailCampaigns.
     */
    distinct?: EmailCampaignScalarFieldEnum | EmailCampaignScalarFieldEnum[]
  }

  /**
   * EmailCampaign findFirstOrThrow
   */
  export type EmailCampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailCampaign
     */
    select?: EmailCampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailCampaign
     */
    omit?: EmailCampaignOmit<ExtArgs> | null
    /**
     * Filter, which EmailCampaign to fetch.
     */
    where?: EmailCampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailCampaigns to fetch.
     */
    orderBy?: EmailCampaignOrderByWithRelationInput | EmailCampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailCampaigns.
     */
    cursor?: EmailCampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailCampaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailCampaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailCampaigns.
     */
    distinct?: EmailCampaignScalarFieldEnum | EmailCampaignScalarFieldEnum[]
  }

  /**
   * EmailCampaign findMany
   */
  export type EmailCampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailCampaign
     */
    select?: EmailCampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailCampaign
     */
    omit?: EmailCampaignOmit<ExtArgs> | null
    /**
     * Filter, which EmailCampaigns to fetch.
     */
    where?: EmailCampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailCampaigns to fetch.
     */
    orderBy?: EmailCampaignOrderByWithRelationInput | EmailCampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailCampaigns.
     */
    cursor?: EmailCampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailCampaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailCampaigns.
     */
    skip?: number
    distinct?: EmailCampaignScalarFieldEnum | EmailCampaignScalarFieldEnum[]
  }

  /**
   * EmailCampaign create
   */
  export type EmailCampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailCampaign
     */
    select?: EmailCampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailCampaign
     */
    omit?: EmailCampaignOmit<ExtArgs> | null
    /**
     * The data needed to create a EmailCampaign.
     */
    data: XOR<EmailCampaignCreateInput, EmailCampaignUncheckedCreateInput>
  }

  /**
   * EmailCampaign createMany
   */
  export type EmailCampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailCampaigns.
     */
    data: EmailCampaignCreateManyInput | EmailCampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailCampaign createManyAndReturn
   */
  export type EmailCampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailCampaign
     */
    select?: EmailCampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailCampaign
     */
    omit?: EmailCampaignOmit<ExtArgs> | null
    /**
     * The data used to create many EmailCampaigns.
     */
    data: EmailCampaignCreateManyInput | EmailCampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailCampaign update
   */
  export type EmailCampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailCampaign
     */
    select?: EmailCampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailCampaign
     */
    omit?: EmailCampaignOmit<ExtArgs> | null
    /**
     * The data needed to update a EmailCampaign.
     */
    data: XOR<EmailCampaignUpdateInput, EmailCampaignUncheckedUpdateInput>
    /**
     * Choose, which EmailCampaign to update.
     */
    where: EmailCampaignWhereUniqueInput
  }

  /**
   * EmailCampaign updateMany
   */
  export type EmailCampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailCampaigns.
     */
    data: XOR<EmailCampaignUpdateManyMutationInput, EmailCampaignUncheckedUpdateManyInput>
    /**
     * Filter which EmailCampaigns to update
     */
    where?: EmailCampaignWhereInput
    /**
     * Limit how many EmailCampaigns to update.
     */
    limit?: number
  }

  /**
   * EmailCampaign updateManyAndReturn
   */
  export type EmailCampaignUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailCampaign
     */
    select?: EmailCampaignSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailCampaign
     */
    omit?: EmailCampaignOmit<ExtArgs> | null
    /**
     * The data used to update EmailCampaigns.
     */
    data: XOR<EmailCampaignUpdateManyMutationInput, EmailCampaignUncheckedUpdateManyInput>
    /**
     * Filter which EmailCampaigns to update
     */
    where?: EmailCampaignWhereInput
    /**
     * Limit how many EmailCampaigns to update.
     */
    limit?: number
  }

  /**
   * EmailCampaign upsert
   */
  export type EmailCampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailCampaign
     */
    select?: EmailCampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailCampaign
     */
    omit?: EmailCampaignOmit<ExtArgs> | null
    /**
     * The filter to search for the EmailCampaign to update in case it exists.
     */
    where: EmailCampaignWhereUniqueInput
    /**
     * In case the EmailCampaign found by the `where` argument doesn't exist, create a new EmailCampaign with this data.
     */
    create: XOR<EmailCampaignCreateInput, EmailCampaignUncheckedCreateInput>
    /**
     * In case the EmailCampaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailCampaignUpdateInput, EmailCampaignUncheckedUpdateInput>
  }

  /**
   * EmailCampaign delete
   */
  export type EmailCampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailCampaign
     */
    select?: EmailCampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailCampaign
     */
    omit?: EmailCampaignOmit<ExtArgs> | null
    /**
     * Filter which EmailCampaign to delete.
     */
    where: EmailCampaignWhereUniqueInput
  }

  /**
   * EmailCampaign deleteMany
   */
  export type EmailCampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailCampaigns to delete
     */
    where?: EmailCampaignWhereInput
    /**
     * Limit how many EmailCampaigns to delete.
     */
    limit?: number
  }

  /**
   * EmailCampaign without action
   */
  export type EmailCampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailCampaign
     */
    select?: EmailCampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailCampaign
     */
    omit?: EmailCampaignOmit<ExtArgs> | null
  }


  /**
   * Model SmsMessage
   */

  export type AggregateSmsMessage = {
    _count: SmsMessageCountAggregateOutputType | null
    _min: SmsMessageMinAggregateOutputType | null
    _max: SmsMessageMaxAggregateOutputType | null
  }

  export type SmsMessageMinAggregateOutputType = {
    id: string | null
    org_id: string | null
    created_by: string | null
    to: string | null
    body: string | null
    status: string | null
    twilio_sid: string | null
    is_deleted: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SmsMessageMaxAggregateOutputType = {
    id: string | null
    org_id: string | null
    created_by: string | null
    to: string | null
    body: string | null
    status: string | null
    twilio_sid: string | null
    is_deleted: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SmsMessageCountAggregateOutputType = {
    id: number
    org_id: number
    created_by: number
    to: number
    body: number
    status: number
    twilio_sid: number
    is_deleted: number
    metadata: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SmsMessageMinAggregateInputType = {
    id?: true
    org_id?: true
    created_by?: true
    to?: true
    body?: true
    status?: true
    twilio_sid?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type SmsMessageMaxAggregateInputType = {
    id?: true
    org_id?: true
    created_by?: true
    to?: true
    body?: true
    status?: true
    twilio_sid?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type SmsMessageCountAggregateInputType = {
    id?: true
    org_id?: true
    created_by?: true
    to?: true
    body?: true
    status?: true
    twilio_sid?: true
    is_deleted?: true
    metadata?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SmsMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SmsMessage to aggregate.
     */
    where?: SmsMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmsMessages to fetch.
     */
    orderBy?: SmsMessageOrderByWithRelationInput | SmsMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SmsMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmsMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmsMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SmsMessages
    **/
    _count?: true | SmsMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SmsMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SmsMessageMaxAggregateInputType
  }

  export type GetSmsMessageAggregateType<T extends SmsMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateSmsMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSmsMessage[P]>
      : GetScalarType<T[P], AggregateSmsMessage[P]>
  }




  export type SmsMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SmsMessageWhereInput
    orderBy?: SmsMessageOrderByWithAggregationInput | SmsMessageOrderByWithAggregationInput[]
    by: SmsMessageScalarFieldEnum[] | SmsMessageScalarFieldEnum
    having?: SmsMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SmsMessageCountAggregateInputType | true
    _min?: SmsMessageMinAggregateInputType
    _max?: SmsMessageMaxAggregateInputType
  }

  export type SmsMessageGroupByOutputType = {
    id: string
    org_id: string
    created_by: string
    to: string
    body: string
    status: string
    twilio_sid: string | null
    is_deleted: boolean
    metadata: JsonValue
    created_at: Date
    updated_at: Date
    _count: SmsMessageCountAggregateOutputType | null
    _min: SmsMessageMinAggregateOutputType | null
    _max: SmsMessageMaxAggregateOutputType | null
  }

  type GetSmsMessageGroupByPayload<T extends SmsMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SmsMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SmsMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SmsMessageGroupByOutputType[P]>
            : GetScalarType<T[P], SmsMessageGroupByOutputType[P]>
        }
      >
    >


  export type SmsMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    created_by?: boolean
    to?: boolean
    body?: boolean
    status?: boolean
    twilio_sid?: boolean
    is_deleted?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["smsMessage"]>

  export type SmsMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    created_by?: boolean
    to?: boolean
    body?: boolean
    status?: boolean
    twilio_sid?: boolean
    is_deleted?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["smsMessage"]>

  export type SmsMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    created_by?: boolean
    to?: boolean
    body?: boolean
    status?: boolean
    twilio_sid?: boolean
    is_deleted?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["smsMessage"]>

  export type SmsMessageSelectScalar = {
    id?: boolean
    org_id?: boolean
    created_by?: boolean
    to?: boolean
    body?: boolean
    status?: boolean
    twilio_sid?: boolean
    is_deleted?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type SmsMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "org_id" | "created_by" | "to" | "body" | "status" | "twilio_sid" | "is_deleted" | "metadata" | "created_at" | "updated_at", ExtArgs["result"]["smsMessage"]>

  export type $SmsMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SmsMessage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      org_id: string
      created_by: string
      to: string
      body: string
      status: string
      twilio_sid: string | null
      is_deleted: boolean
      metadata: Prisma.JsonValue
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["smsMessage"]>
    composites: {}
  }

  type SmsMessageGetPayload<S extends boolean | null | undefined | SmsMessageDefaultArgs> = $Result.GetResult<Prisma.$SmsMessagePayload, S>

  type SmsMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SmsMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SmsMessageCountAggregateInputType | true
    }

  export interface SmsMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SmsMessage'], meta: { name: 'SmsMessage' } }
    /**
     * Find zero or one SmsMessage that matches the filter.
     * @param {SmsMessageFindUniqueArgs} args - Arguments to find a SmsMessage
     * @example
     * // Get one SmsMessage
     * const smsMessage = await prisma.smsMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SmsMessageFindUniqueArgs>(args: SelectSubset<T, SmsMessageFindUniqueArgs<ExtArgs>>): Prisma__SmsMessageClient<$Result.GetResult<Prisma.$SmsMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SmsMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SmsMessageFindUniqueOrThrowArgs} args - Arguments to find a SmsMessage
     * @example
     * // Get one SmsMessage
     * const smsMessage = await prisma.smsMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SmsMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, SmsMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SmsMessageClient<$Result.GetResult<Prisma.$SmsMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SmsMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsMessageFindFirstArgs} args - Arguments to find a SmsMessage
     * @example
     * // Get one SmsMessage
     * const smsMessage = await prisma.smsMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SmsMessageFindFirstArgs>(args?: SelectSubset<T, SmsMessageFindFirstArgs<ExtArgs>>): Prisma__SmsMessageClient<$Result.GetResult<Prisma.$SmsMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SmsMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsMessageFindFirstOrThrowArgs} args - Arguments to find a SmsMessage
     * @example
     * // Get one SmsMessage
     * const smsMessage = await prisma.smsMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SmsMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, SmsMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__SmsMessageClient<$Result.GetResult<Prisma.$SmsMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SmsMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SmsMessages
     * const smsMessages = await prisma.smsMessage.findMany()
     * 
     * // Get first 10 SmsMessages
     * const smsMessages = await prisma.smsMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const smsMessageWithIdOnly = await prisma.smsMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SmsMessageFindManyArgs>(args?: SelectSubset<T, SmsMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SmsMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SmsMessage.
     * @param {SmsMessageCreateArgs} args - Arguments to create a SmsMessage.
     * @example
     * // Create one SmsMessage
     * const SmsMessage = await prisma.smsMessage.create({
     *   data: {
     *     // ... data to create a SmsMessage
     *   }
     * })
     * 
     */
    create<T extends SmsMessageCreateArgs>(args: SelectSubset<T, SmsMessageCreateArgs<ExtArgs>>): Prisma__SmsMessageClient<$Result.GetResult<Prisma.$SmsMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SmsMessages.
     * @param {SmsMessageCreateManyArgs} args - Arguments to create many SmsMessages.
     * @example
     * // Create many SmsMessages
     * const smsMessage = await prisma.smsMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SmsMessageCreateManyArgs>(args?: SelectSubset<T, SmsMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SmsMessages and returns the data saved in the database.
     * @param {SmsMessageCreateManyAndReturnArgs} args - Arguments to create many SmsMessages.
     * @example
     * // Create many SmsMessages
     * const smsMessage = await prisma.smsMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SmsMessages and only return the `id`
     * const smsMessageWithIdOnly = await prisma.smsMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SmsMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, SmsMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SmsMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SmsMessage.
     * @param {SmsMessageDeleteArgs} args - Arguments to delete one SmsMessage.
     * @example
     * // Delete one SmsMessage
     * const SmsMessage = await prisma.smsMessage.delete({
     *   where: {
     *     // ... filter to delete one SmsMessage
     *   }
     * })
     * 
     */
    delete<T extends SmsMessageDeleteArgs>(args: SelectSubset<T, SmsMessageDeleteArgs<ExtArgs>>): Prisma__SmsMessageClient<$Result.GetResult<Prisma.$SmsMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SmsMessage.
     * @param {SmsMessageUpdateArgs} args - Arguments to update one SmsMessage.
     * @example
     * // Update one SmsMessage
     * const smsMessage = await prisma.smsMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SmsMessageUpdateArgs>(args: SelectSubset<T, SmsMessageUpdateArgs<ExtArgs>>): Prisma__SmsMessageClient<$Result.GetResult<Prisma.$SmsMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SmsMessages.
     * @param {SmsMessageDeleteManyArgs} args - Arguments to filter SmsMessages to delete.
     * @example
     * // Delete a few SmsMessages
     * const { count } = await prisma.smsMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SmsMessageDeleteManyArgs>(args?: SelectSubset<T, SmsMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SmsMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SmsMessages
     * const smsMessage = await prisma.smsMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SmsMessageUpdateManyArgs>(args: SelectSubset<T, SmsMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SmsMessages and returns the data updated in the database.
     * @param {SmsMessageUpdateManyAndReturnArgs} args - Arguments to update many SmsMessages.
     * @example
     * // Update many SmsMessages
     * const smsMessage = await prisma.smsMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SmsMessages and only return the `id`
     * const smsMessageWithIdOnly = await prisma.smsMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends SmsMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, SmsMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SmsMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SmsMessage.
     * @param {SmsMessageUpsertArgs} args - Arguments to update or create a SmsMessage.
     * @example
     * // Update or create a SmsMessage
     * const smsMessage = await prisma.smsMessage.upsert({
     *   create: {
     *     // ... data to create a SmsMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SmsMessage we want to update
     *   }
     * })
     */
    upsert<T extends SmsMessageUpsertArgs>(args: SelectSubset<T, SmsMessageUpsertArgs<ExtArgs>>): Prisma__SmsMessageClient<$Result.GetResult<Prisma.$SmsMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SmsMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsMessageCountArgs} args - Arguments to filter SmsMessages to count.
     * @example
     * // Count the number of SmsMessages
     * const count = await prisma.smsMessage.count({
     *   where: {
     *     // ... the filter for the SmsMessages we want to count
     *   }
     * })
    **/
    count<T extends SmsMessageCountArgs>(
      args?: Subset<T, SmsMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SmsMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SmsMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SmsMessageAggregateArgs>(args: Subset<T, SmsMessageAggregateArgs>): Prisma.PrismaPromise<GetSmsMessageAggregateType<T>>

    /**
     * Group by SmsMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmsMessageGroupByArgs} args - Group by arguments.
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
      T extends SmsMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SmsMessageGroupByArgs['orderBy'] }
        : { orderBy?: SmsMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SmsMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSmsMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SmsMessage model
   */
  readonly fields: SmsMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SmsMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SmsMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SmsMessage model
   */
  interface SmsMessageFieldRefs {
    readonly id: FieldRef<"SmsMessage", 'String'>
    readonly org_id: FieldRef<"SmsMessage", 'String'>
    readonly created_by: FieldRef<"SmsMessage", 'String'>
    readonly to: FieldRef<"SmsMessage", 'String'>
    readonly body: FieldRef<"SmsMessage", 'String'>
    readonly status: FieldRef<"SmsMessage", 'String'>
    readonly twilio_sid: FieldRef<"SmsMessage", 'String'>
    readonly is_deleted: FieldRef<"SmsMessage", 'Boolean'>
    readonly metadata: FieldRef<"SmsMessage", 'Json'>
    readonly created_at: FieldRef<"SmsMessage", 'DateTime'>
    readonly updated_at: FieldRef<"SmsMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SmsMessage findUnique
   */
  export type SmsMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsMessage
     */
    select?: SmsMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmsMessage
     */
    omit?: SmsMessageOmit<ExtArgs> | null
    /**
     * Filter, which SmsMessage to fetch.
     */
    where: SmsMessageWhereUniqueInput
  }

  /**
   * SmsMessage findUniqueOrThrow
   */
  export type SmsMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsMessage
     */
    select?: SmsMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmsMessage
     */
    omit?: SmsMessageOmit<ExtArgs> | null
    /**
     * Filter, which SmsMessage to fetch.
     */
    where: SmsMessageWhereUniqueInput
  }

  /**
   * SmsMessage findFirst
   */
  export type SmsMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsMessage
     */
    select?: SmsMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmsMessage
     */
    omit?: SmsMessageOmit<ExtArgs> | null
    /**
     * Filter, which SmsMessage to fetch.
     */
    where?: SmsMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmsMessages to fetch.
     */
    orderBy?: SmsMessageOrderByWithRelationInput | SmsMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SmsMessages.
     */
    cursor?: SmsMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmsMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmsMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SmsMessages.
     */
    distinct?: SmsMessageScalarFieldEnum | SmsMessageScalarFieldEnum[]
  }

  /**
   * SmsMessage findFirstOrThrow
   */
  export type SmsMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsMessage
     */
    select?: SmsMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmsMessage
     */
    omit?: SmsMessageOmit<ExtArgs> | null
    /**
     * Filter, which SmsMessage to fetch.
     */
    where?: SmsMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmsMessages to fetch.
     */
    orderBy?: SmsMessageOrderByWithRelationInput | SmsMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SmsMessages.
     */
    cursor?: SmsMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmsMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmsMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SmsMessages.
     */
    distinct?: SmsMessageScalarFieldEnum | SmsMessageScalarFieldEnum[]
  }

  /**
   * SmsMessage findMany
   */
  export type SmsMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsMessage
     */
    select?: SmsMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmsMessage
     */
    omit?: SmsMessageOmit<ExtArgs> | null
    /**
     * Filter, which SmsMessages to fetch.
     */
    where?: SmsMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmsMessages to fetch.
     */
    orderBy?: SmsMessageOrderByWithRelationInput | SmsMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SmsMessages.
     */
    cursor?: SmsMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmsMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmsMessages.
     */
    skip?: number
    distinct?: SmsMessageScalarFieldEnum | SmsMessageScalarFieldEnum[]
  }

  /**
   * SmsMessage create
   */
  export type SmsMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsMessage
     */
    select?: SmsMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmsMessage
     */
    omit?: SmsMessageOmit<ExtArgs> | null
    /**
     * The data needed to create a SmsMessage.
     */
    data: XOR<SmsMessageCreateInput, SmsMessageUncheckedCreateInput>
  }

  /**
   * SmsMessage createMany
   */
  export type SmsMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SmsMessages.
     */
    data: SmsMessageCreateManyInput | SmsMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SmsMessage createManyAndReturn
   */
  export type SmsMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsMessage
     */
    select?: SmsMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SmsMessage
     */
    omit?: SmsMessageOmit<ExtArgs> | null
    /**
     * The data used to create many SmsMessages.
     */
    data: SmsMessageCreateManyInput | SmsMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SmsMessage update
   */
  export type SmsMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsMessage
     */
    select?: SmsMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmsMessage
     */
    omit?: SmsMessageOmit<ExtArgs> | null
    /**
     * The data needed to update a SmsMessage.
     */
    data: XOR<SmsMessageUpdateInput, SmsMessageUncheckedUpdateInput>
    /**
     * Choose, which SmsMessage to update.
     */
    where: SmsMessageWhereUniqueInput
  }

  /**
   * SmsMessage updateMany
   */
  export type SmsMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SmsMessages.
     */
    data: XOR<SmsMessageUpdateManyMutationInput, SmsMessageUncheckedUpdateManyInput>
    /**
     * Filter which SmsMessages to update
     */
    where?: SmsMessageWhereInput
    /**
     * Limit how many SmsMessages to update.
     */
    limit?: number
  }

  /**
   * SmsMessage updateManyAndReturn
   */
  export type SmsMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsMessage
     */
    select?: SmsMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SmsMessage
     */
    omit?: SmsMessageOmit<ExtArgs> | null
    /**
     * The data used to update SmsMessages.
     */
    data: XOR<SmsMessageUpdateManyMutationInput, SmsMessageUncheckedUpdateManyInput>
    /**
     * Filter which SmsMessages to update
     */
    where?: SmsMessageWhereInput
    /**
     * Limit how many SmsMessages to update.
     */
    limit?: number
  }

  /**
   * SmsMessage upsert
   */
  export type SmsMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsMessage
     */
    select?: SmsMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmsMessage
     */
    omit?: SmsMessageOmit<ExtArgs> | null
    /**
     * The filter to search for the SmsMessage to update in case it exists.
     */
    where: SmsMessageWhereUniqueInput
    /**
     * In case the SmsMessage found by the `where` argument doesn't exist, create a new SmsMessage with this data.
     */
    create: XOR<SmsMessageCreateInput, SmsMessageUncheckedCreateInput>
    /**
     * In case the SmsMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SmsMessageUpdateInput, SmsMessageUncheckedUpdateInput>
  }

  /**
   * SmsMessage delete
   */
  export type SmsMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsMessage
     */
    select?: SmsMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmsMessage
     */
    omit?: SmsMessageOmit<ExtArgs> | null
    /**
     * Filter which SmsMessage to delete.
     */
    where: SmsMessageWhereUniqueInput
  }

  /**
   * SmsMessage deleteMany
   */
  export type SmsMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SmsMessages to delete
     */
    where?: SmsMessageWhereInput
    /**
     * Limit how many SmsMessages to delete.
     */
    limit?: number
  }

  /**
   * SmsMessage without action
   */
  export type SmsMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmsMessage
     */
    select?: SmsMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmsMessage
     */
    omit?: SmsMessageOmit<ExtArgs> | null
  }


  /**
   * Model DeviceToken
   */

  export type AggregateDeviceToken = {
    _count: DeviceTokenCountAggregateOutputType | null
    _min: DeviceTokenMinAggregateOutputType | null
    _max: DeviceTokenMaxAggregateOutputType | null
  }

  export type DeviceTokenMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    org_id: string | null
    type: string | null
    token: string | null
    created_at: Date | null
  }

  export type DeviceTokenMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    org_id: string | null
    type: string | null
    token: string | null
    created_at: Date | null
  }

  export type DeviceTokenCountAggregateOutputType = {
    id: number
    user_id: number
    org_id: number
    type: number
    token: number
    created_at: number
    _all: number
  }


  export type DeviceTokenMinAggregateInputType = {
    id?: true
    user_id?: true
    org_id?: true
    type?: true
    token?: true
    created_at?: true
  }

  export type DeviceTokenMaxAggregateInputType = {
    id?: true
    user_id?: true
    org_id?: true
    type?: true
    token?: true
    created_at?: true
  }

  export type DeviceTokenCountAggregateInputType = {
    id?: true
    user_id?: true
    org_id?: true
    type?: true
    token?: true
    created_at?: true
    _all?: true
  }

  export type DeviceTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceToken to aggregate.
     */
    where?: DeviceTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceTokens to fetch.
     */
    orderBy?: DeviceTokenOrderByWithRelationInput | DeviceTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeviceTokens
    **/
    _count?: true | DeviceTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceTokenMaxAggregateInputType
  }

  export type GetDeviceTokenAggregateType<T extends DeviceTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateDeviceToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeviceToken[P]>
      : GetScalarType<T[P], AggregateDeviceToken[P]>
  }




  export type DeviceTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceTokenWhereInput
    orderBy?: DeviceTokenOrderByWithAggregationInput | DeviceTokenOrderByWithAggregationInput[]
    by: DeviceTokenScalarFieldEnum[] | DeviceTokenScalarFieldEnum
    having?: DeviceTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceTokenCountAggregateInputType | true
    _min?: DeviceTokenMinAggregateInputType
    _max?: DeviceTokenMaxAggregateInputType
  }

  export type DeviceTokenGroupByOutputType = {
    id: string
    user_id: string
    org_id: string | null
    type: string
    token: string
    created_at: Date
    _count: DeviceTokenCountAggregateOutputType | null
    _min: DeviceTokenMinAggregateOutputType | null
    _max: DeviceTokenMaxAggregateOutputType | null
  }

  type GetDeviceTokenGroupByPayload<T extends DeviceTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceTokenGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceTokenGroupByOutputType[P]>
        }
      >
    >


  export type DeviceTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    org_id?: boolean
    type?: boolean
    token?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["deviceToken"]>

  export type DeviceTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    org_id?: boolean
    type?: boolean
    token?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["deviceToken"]>

  export type DeviceTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    org_id?: boolean
    type?: boolean
    token?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["deviceToken"]>

  export type DeviceTokenSelectScalar = {
    id?: boolean
    user_id?: boolean
    org_id?: boolean
    type?: boolean
    token?: boolean
    created_at?: boolean
  }

  export type DeviceTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "org_id" | "type" | "token" | "created_at", ExtArgs["result"]["deviceToken"]>

  export type $DeviceTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeviceToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      org_id: string | null
      type: string
      token: string
      created_at: Date
    }, ExtArgs["result"]["deviceToken"]>
    composites: {}
  }

  type DeviceTokenGetPayload<S extends boolean | null | undefined | DeviceTokenDefaultArgs> = $Result.GetResult<Prisma.$DeviceTokenPayload, S>

  type DeviceTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceTokenCountAggregateInputType | true
    }

  export interface DeviceTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeviceToken'], meta: { name: 'DeviceToken' } }
    /**
     * Find zero or one DeviceToken that matches the filter.
     * @param {DeviceTokenFindUniqueArgs} args - Arguments to find a DeviceToken
     * @example
     * // Get one DeviceToken
     * const deviceToken = await prisma.deviceToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceTokenFindUniqueArgs>(args: SelectSubset<T, DeviceTokenFindUniqueArgs<ExtArgs>>): Prisma__DeviceTokenClient<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeviceToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceTokenFindUniqueOrThrowArgs} args - Arguments to find a DeviceToken
     * @example
     * // Get one DeviceToken
     * const deviceToken = await prisma.deviceToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceTokenClient<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTokenFindFirstArgs} args - Arguments to find a DeviceToken
     * @example
     * // Get one DeviceToken
     * const deviceToken = await prisma.deviceToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceTokenFindFirstArgs>(args?: SelectSubset<T, DeviceTokenFindFirstArgs<ExtArgs>>): Prisma__DeviceTokenClient<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTokenFindFirstOrThrowArgs} args - Arguments to find a DeviceToken
     * @example
     * // Get one DeviceToken
     * const deviceToken = await prisma.deviceToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceTokenClient<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeviceTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceTokens
     * const deviceTokens = await prisma.deviceToken.findMany()
     * 
     * // Get first 10 DeviceTokens
     * const deviceTokens = await prisma.deviceToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceTokenWithIdOnly = await prisma.deviceToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceTokenFindManyArgs>(args?: SelectSubset<T, DeviceTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeviceToken.
     * @param {DeviceTokenCreateArgs} args - Arguments to create a DeviceToken.
     * @example
     * // Create one DeviceToken
     * const DeviceToken = await prisma.deviceToken.create({
     *   data: {
     *     // ... data to create a DeviceToken
     *   }
     * })
     * 
     */
    create<T extends DeviceTokenCreateArgs>(args: SelectSubset<T, DeviceTokenCreateArgs<ExtArgs>>): Prisma__DeviceTokenClient<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeviceTokens.
     * @param {DeviceTokenCreateManyArgs} args - Arguments to create many DeviceTokens.
     * @example
     * // Create many DeviceTokens
     * const deviceToken = await prisma.deviceToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceTokenCreateManyArgs>(args?: SelectSubset<T, DeviceTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeviceTokens and returns the data saved in the database.
     * @param {DeviceTokenCreateManyAndReturnArgs} args - Arguments to create many DeviceTokens.
     * @example
     * // Create many DeviceTokens
     * const deviceToken = await prisma.deviceToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeviceTokens and only return the `id`
     * const deviceTokenWithIdOnly = await prisma.deviceToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeviceToken.
     * @param {DeviceTokenDeleteArgs} args - Arguments to delete one DeviceToken.
     * @example
     * // Delete one DeviceToken
     * const DeviceToken = await prisma.deviceToken.delete({
     *   where: {
     *     // ... filter to delete one DeviceToken
     *   }
     * })
     * 
     */
    delete<T extends DeviceTokenDeleteArgs>(args: SelectSubset<T, DeviceTokenDeleteArgs<ExtArgs>>): Prisma__DeviceTokenClient<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeviceToken.
     * @param {DeviceTokenUpdateArgs} args - Arguments to update one DeviceToken.
     * @example
     * // Update one DeviceToken
     * const deviceToken = await prisma.deviceToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceTokenUpdateArgs>(args: SelectSubset<T, DeviceTokenUpdateArgs<ExtArgs>>): Prisma__DeviceTokenClient<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeviceTokens.
     * @param {DeviceTokenDeleteManyArgs} args - Arguments to filter DeviceTokens to delete.
     * @example
     * // Delete a few DeviceTokens
     * const { count } = await prisma.deviceToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceTokenDeleteManyArgs>(args?: SelectSubset<T, DeviceTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceTokens
     * const deviceToken = await prisma.deviceToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceTokenUpdateManyArgs>(args: SelectSubset<T, DeviceTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceTokens and returns the data updated in the database.
     * @param {DeviceTokenUpdateManyAndReturnArgs} args - Arguments to update many DeviceTokens.
     * @example
     * // Update many DeviceTokens
     * const deviceToken = await prisma.deviceToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeviceTokens and only return the `id`
     * const deviceTokenWithIdOnly = await prisma.deviceToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends DeviceTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeviceToken.
     * @param {DeviceTokenUpsertArgs} args - Arguments to update or create a DeviceToken.
     * @example
     * // Update or create a DeviceToken
     * const deviceToken = await prisma.deviceToken.upsert({
     *   create: {
     *     // ... data to create a DeviceToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceToken we want to update
     *   }
     * })
     */
    upsert<T extends DeviceTokenUpsertArgs>(args: SelectSubset<T, DeviceTokenUpsertArgs<ExtArgs>>): Prisma__DeviceTokenClient<$Result.GetResult<Prisma.$DeviceTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeviceTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTokenCountArgs} args - Arguments to filter DeviceTokens to count.
     * @example
     * // Count the number of DeviceTokens
     * const count = await prisma.deviceToken.count({
     *   where: {
     *     // ... the filter for the DeviceTokens we want to count
     *   }
     * })
    **/
    count<T extends DeviceTokenCountArgs>(
      args?: Subset<T, DeviceTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeviceToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceTokenAggregateArgs>(args: Subset<T, DeviceTokenAggregateArgs>): Prisma.PrismaPromise<GetDeviceTokenAggregateType<T>>

    /**
     * Group by DeviceToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTokenGroupByArgs} args - Group by arguments.
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
      T extends DeviceTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceTokenGroupByArgs['orderBy'] }
        : { orderBy?: DeviceTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeviceToken model
   */
  readonly fields: DeviceTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeviceToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DeviceToken model
   */
  interface DeviceTokenFieldRefs {
    readonly id: FieldRef<"DeviceToken", 'String'>
    readonly user_id: FieldRef<"DeviceToken", 'String'>
    readonly org_id: FieldRef<"DeviceToken", 'String'>
    readonly type: FieldRef<"DeviceToken", 'String'>
    readonly token: FieldRef<"DeviceToken", 'String'>
    readonly created_at: FieldRef<"DeviceToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DeviceToken findUnique
   */
  export type DeviceTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceToken
     */
    omit?: DeviceTokenOmit<ExtArgs> | null
    /**
     * Filter, which DeviceToken to fetch.
     */
    where: DeviceTokenWhereUniqueInput
  }

  /**
   * DeviceToken findUniqueOrThrow
   */
  export type DeviceTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceToken
     */
    omit?: DeviceTokenOmit<ExtArgs> | null
    /**
     * Filter, which DeviceToken to fetch.
     */
    where: DeviceTokenWhereUniqueInput
  }

  /**
   * DeviceToken findFirst
   */
  export type DeviceTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceToken
     */
    omit?: DeviceTokenOmit<ExtArgs> | null
    /**
     * Filter, which DeviceToken to fetch.
     */
    where?: DeviceTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceTokens to fetch.
     */
    orderBy?: DeviceTokenOrderByWithRelationInput | DeviceTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceTokens.
     */
    cursor?: DeviceTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceTokens.
     */
    distinct?: DeviceTokenScalarFieldEnum | DeviceTokenScalarFieldEnum[]
  }

  /**
   * DeviceToken findFirstOrThrow
   */
  export type DeviceTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceToken
     */
    omit?: DeviceTokenOmit<ExtArgs> | null
    /**
     * Filter, which DeviceToken to fetch.
     */
    where?: DeviceTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceTokens to fetch.
     */
    orderBy?: DeviceTokenOrderByWithRelationInput | DeviceTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceTokens.
     */
    cursor?: DeviceTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceTokens.
     */
    distinct?: DeviceTokenScalarFieldEnum | DeviceTokenScalarFieldEnum[]
  }

  /**
   * DeviceToken findMany
   */
  export type DeviceTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceToken
     */
    omit?: DeviceTokenOmit<ExtArgs> | null
    /**
     * Filter, which DeviceTokens to fetch.
     */
    where?: DeviceTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceTokens to fetch.
     */
    orderBy?: DeviceTokenOrderByWithRelationInput | DeviceTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeviceTokens.
     */
    cursor?: DeviceTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceTokens.
     */
    skip?: number
    distinct?: DeviceTokenScalarFieldEnum | DeviceTokenScalarFieldEnum[]
  }

  /**
   * DeviceToken create
   */
  export type DeviceTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceToken
     */
    omit?: DeviceTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a DeviceToken.
     */
    data: XOR<DeviceTokenCreateInput, DeviceTokenUncheckedCreateInput>
  }

  /**
   * DeviceToken createMany
   */
  export type DeviceTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceTokens.
     */
    data: DeviceTokenCreateManyInput | DeviceTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeviceToken createManyAndReturn
   */
  export type DeviceTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceToken
     */
    omit?: DeviceTokenOmit<ExtArgs> | null
    /**
     * The data used to create many DeviceTokens.
     */
    data: DeviceTokenCreateManyInput | DeviceTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeviceToken update
   */
  export type DeviceTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceToken
     */
    omit?: DeviceTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a DeviceToken.
     */
    data: XOR<DeviceTokenUpdateInput, DeviceTokenUncheckedUpdateInput>
    /**
     * Choose, which DeviceToken to update.
     */
    where: DeviceTokenWhereUniqueInput
  }

  /**
   * DeviceToken updateMany
   */
  export type DeviceTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceTokens.
     */
    data: XOR<DeviceTokenUpdateManyMutationInput, DeviceTokenUncheckedUpdateManyInput>
    /**
     * Filter which DeviceTokens to update
     */
    where?: DeviceTokenWhereInput
    /**
     * Limit how many DeviceTokens to update.
     */
    limit?: number
  }

  /**
   * DeviceToken updateManyAndReturn
   */
  export type DeviceTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceToken
     */
    omit?: DeviceTokenOmit<ExtArgs> | null
    /**
     * The data used to update DeviceTokens.
     */
    data: XOR<DeviceTokenUpdateManyMutationInput, DeviceTokenUncheckedUpdateManyInput>
    /**
     * Filter which DeviceTokens to update
     */
    where?: DeviceTokenWhereInput
    /**
     * Limit how many DeviceTokens to update.
     */
    limit?: number
  }

  /**
   * DeviceToken upsert
   */
  export type DeviceTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceToken
     */
    omit?: DeviceTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the DeviceToken to update in case it exists.
     */
    where: DeviceTokenWhereUniqueInput
    /**
     * In case the DeviceToken found by the `where` argument doesn't exist, create a new DeviceToken with this data.
     */
    create: XOR<DeviceTokenCreateInput, DeviceTokenUncheckedCreateInput>
    /**
     * In case the DeviceToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceTokenUpdateInput, DeviceTokenUncheckedUpdateInput>
  }

  /**
   * DeviceToken delete
   */
  export type DeviceTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceToken
     */
    omit?: DeviceTokenOmit<ExtArgs> | null
    /**
     * Filter which DeviceToken to delete.
     */
    where: DeviceTokenWhereUniqueInput
  }

  /**
   * DeviceToken deleteMany
   */
  export type DeviceTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceTokens to delete
     */
    where?: DeviceTokenWhereInput
    /**
     * Limit how many DeviceTokens to delete.
     */
    limit?: number
  }

  /**
   * DeviceToken without action
   */
  export type DeviceTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceToken
     */
    select?: DeviceTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceToken
     */
    omit?: DeviceTokenOmit<ExtArgs> | null
  }


  /**
   * Model NotificationSetting
   */

  export type AggregateNotificationSetting = {
    _count: NotificationSettingCountAggregateOutputType | null
    _min: NotificationSettingMinAggregateOutputType | null
    _max: NotificationSettingMaxAggregateOutputType | null
  }

  export type NotificationSettingMinAggregateOutputType = {
    id: string | null
    org_id: string | null
    email_enabled: boolean | null
    sms_enabled: boolean | null
    push_enabled: boolean | null
    updated_at: Date | null
  }

  export type NotificationSettingMaxAggregateOutputType = {
    id: string | null
    org_id: string | null
    email_enabled: boolean | null
    sms_enabled: boolean | null
    push_enabled: boolean | null
    updated_at: Date | null
  }

  export type NotificationSettingCountAggregateOutputType = {
    id: number
    org_id: number
    email_enabled: number
    sms_enabled: number
    push_enabled: number
    settings: number
    updated_at: number
    _all: number
  }


  export type NotificationSettingMinAggregateInputType = {
    id?: true
    org_id?: true
    email_enabled?: true
    sms_enabled?: true
    push_enabled?: true
    updated_at?: true
  }

  export type NotificationSettingMaxAggregateInputType = {
    id?: true
    org_id?: true
    email_enabled?: true
    sms_enabled?: true
    push_enabled?: true
    updated_at?: true
  }

  export type NotificationSettingCountAggregateInputType = {
    id?: true
    org_id?: true
    email_enabled?: true
    sms_enabled?: true
    push_enabled?: true
    settings?: true
    updated_at?: true
    _all?: true
  }

  export type NotificationSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationSetting to aggregate.
     */
    where?: NotificationSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationSettings to fetch.
     */
    orderBy?: NotificationSettingOrderByWithRelationInput | NotificationSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationSettings
    **/
    _count?: true | NotificationSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationSettingMaxAggregateInputType
  }

  export type GetNotificationSettingAggregateType<T extends NotificationSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationSetting[P]>
      : GetScalarType<T[P], AggregateNotificationSetting[P]>
  }




  export type NotificationSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationSettingWhereInput
    orderBy?: NotificationSettingOrderByWithAggregationInput | NotificationSettingOrderByWithAggregationInput[]
    by: NotificationSettingScalarFieldEnum[] | NotificationSettingScalarFieldEnum
    having?: NotificationSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationSettingCountAggregateInputType | true
    _min?: NotificationSettingMinAggregateInputType
    _max?: NotificationSettingMaxAggregateInputType
  }

  export type NotificationSettingGroupByOutputType = {
    id: string
    org_id: string
    email_enabled: boolean
    sms_enabled: boolean
    push_enabled: boolean
    settings: JsonValue
    updated_at: Date
    _count: NotificationSettingCountAggregateOutputType | null
    _min: NotificationSettingMinAggregateOutputType | null
    _max: NotificationSettingMaxAggregateOutputType | null
  }

  type GetNotificationSettingGroupByPayload<T extends NotificationSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationSettingGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationSettingGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    email_enabled?: boolean
    sms_enabled?: boolean
    push_enabled?: boolean
    settings?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["notificationSetting"]>

  export type NotificationSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    email_enabled?: boolean
    sms_enabled?: boolean
    push_enabled?: boolean
    settings?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["notificationSetting"]>

  export type NotificationSettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    email_enabled?: boolean
    sms_enabled?: boolean
    push_enabled?: boolean
    settings?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["notificationSetting"]>

  export type NotificationSettingSelectScalar = {
    id?: boolean
    org_id?: boolean
    email_enabled?: boolean
    sms_enabled?: boolean
    push_enabled?: boolean
    settings?: boolean
    updated_at?: boolean
  }

  export type NotificationSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "org_id" | "email_enabled" | "sms_enabled" | "push_enabled" | "settings" | "updated_at", ExtArgs["result"]["notificationSetting"]>

  export type $NotificationSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      org_id: string
      email_enabled: boolean
      sms_enabled: boolean
      push_enabled: boolean
      settings: Prisma.JsonValue
      updated_at: Date
    }, ExtArgs["result"]["notificationSetting"]>
    composites: {}
  }

  type NotificationSettingGetPayload<S extends boolean | null | undefined | NotificationSettingDefaultArgs> = $Result.GetResult<Prisma.$NotificationSettingPayload, S>

  type NotificationSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationSettingCountAggregateInputType | true
    }

  export interface NotificationSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationSetting'], meta: { name: 'NotificationSetting' } }
    /**
     * Find zero or one NotificationSetting that matches the filter.
     * @param {NotificationSettingFindUniqueArgs} args - Arguments to find a NotificationSetting
     * @example
     * // Get one NotificationSetting
     * const notificationSetting = await prisma.notificationSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationSettingFindUniqueArgs>(args: SelectSubset<T, NotificationSettingFindUniqueArgs<ExtArgs>>): Prisma__NotificationSettingClient<$Result.GetResult<Prisma.$NotificationSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotificationSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationSettingFindUniqueOrThrowArgs} args - Arguments to find a NotificationSetting
     * @example
     * // Get one NotificationSetting
     * const notificationSetting = await prisma.notificationSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationSettingClient<$Result.GetResult<Prisma.$NotificationSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingFindFirstArgs} args - Arguments to find a NotificationSetting
     * @example
     * // Get one NotificationSetting
     * const notificationSetting = await prisma.notificationSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationSettingFindFirstArgs>(args?: SelectSubset<T, NotificationSettingFindFirstArgs<ExtArgs>>): Prisma__NotificationSettingClient<$Result.GetResult<Prisma.$NotificationSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingFindFirstOrThrowArgs} args - Arguments to find a NotificationSetting
     * @example
     * // Get one NotificationSetting
     * const notificationSetting = await prisma.notificationSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationSettingClient<$Result.GetResult<Prisma.$NotificationSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationSettings
     * const notificationSettings = await prisma.notificationSetting.findMany()
     * 
     * // Get first 10 NotificationSettings
     * const notificationSettings = await prisma.notificationSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationSettingWithIdOnly = await prisma.notificationSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationSettingFindManyArgs>(args?: SelectSubset<T, NotificationSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotificationSetting.
     * @param {NotificationSettingCreateArgs} args - Arguments to create a NotificationSetting.
     * @example
     * // Create one NotificationSetting
     * const NotificationSetting = await prisma.notificationSetting.create({
     *   data: {
     *     // ... data to create a NotificationSetting
     *   }
     * })
     * 
     */
    create<T extends NotificationSettingCreateArgs>(args: SelectSubset<T, NotificationSettingCreateArgs<ExtArgs>>): Prisma__NotificationSettingClient<$Result.GetResult<Prisma.$NotificationSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotificationSettings.
     * @param {NotificationSettingCreateManyArgs} args - Arguments to create many NotificationSettings.
     * @example
     * // Create many NotificationSettings
     * const notificationSetting = await prisma.notificationSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationSettingCreateManyArgs>(args?: SelectSubset<T, NotificationSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotificationSettings and returns the data saved in the database.
     * @param {NotificationSettingCreateManyAndReturnArgs} args - Arguments to create many NotificationSettings.
     * @example
     * // Create many NotificationSettings
     * const notificationSetting = await prisma.notificationSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotificationSettings and only return the `id`
     * const notificationSettingWithIdOnly = await prisma.notificationSetting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NotificationSetting.
     * @param {NotificationSettingDeleteArgs} args - Arguments to delete one NotificationSetting.
     * @example
     * // Delete one NotificationSetting
     * const NotificationSetting = await prisma.notificationSetting.delete({
     *   where: {
     *     // ... filter to delete one NotificationSetting
     *   }
     * })
     * 
     */
    delete<T extends NotificationSettingDeleteArgs>(args: SelectSubset<T, NotificationSettingDeleteArgs<ExtArgs>>): Prisma__NotificationSettingClient<$Result.GetResult<Prisma.$NotificationSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotificationSetting.
     * @param {NotificationSettingUpdateArgs} args - Arguments to update one NotificationSetting.
     * @example
     * // Update one NotificationSetting
     * const notificationSetting = await prisma.notificationSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationSettingUpdateArgs>(args: SelectSubset<T, NotificationSettingUpdateArgs<ExtArgs>>): Prisma__NotificationSettingClient<$Result.GetResult<Prisma.$NotificationSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotificationSettings.
     * @param {NotificationSettingDeleteManyArgs} args - Arguments to filter NotificationSettings to delete.
     * @example
     * // Delete a few NotificationSettings
     * const { count } = await prisma.notificationSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationSettingDeleteManyArgs>(args?: SelectSubset<T, NotificationSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationSettings
     * const notificationSetting = await prisma.notificationSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationSettingUpdateManyArgs>(args: SelectSubset<T, NotificationSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationSettings and returns the data updated in the database.
     * @param {NotificationSettingUpdateManyAndReturnArgs} args - Arguments to update many NotificationSettings.
     * @example
     * // Update many NotificationSettings
     * const notificationSetting = await prisma.notificationSetting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NotificationSettings and only return the `id`
     * const notificationSettingWithIdOnly = await prisma.notificationSetting.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationSettingUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NotificationSetting.
     * @param {NotificationSettingUpsertArgs} args - Arguments to update or create a NotificationSetting.
     * @example
     * // Update or create a NotificationSetting
     * const notificationSetting = await prisma.notificationSetting.upsert({
     *   create: {
     *     // ... data to create a NotificationSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationSetting we want to update
     *   }
     * })
     */
    upsert<T extends NotificationSettingUpsertArgs>(args: SelectSubset<T, NotificationSettingUpsertArgs<ExtArgs>>): Prisma__NotificationSettingClient<$Result.GetResult<Prisma.$NotificationSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NotificationSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingCountArgs} args - Arguments to filter NotificationSettings to count.
     * @example
     * // Count the number of NotificationSettings
     * const count = await prisma.notificationSetting.count({
     *   where: {
     *     // ... the filter for the NotificationSettings we want to count
     *   }
     * })
    **/
    count<T extends NotificationSettingCountArgs>(
      args?: Subset<T, NotificationSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationSettingAggregateArgs>(args: Subset<T, NotificationSettingAggregateArgs>): Prisma.PrismaPromise<GetNotificationSettingAggregateType<T>>

    /**
     * Group by NotificationSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingGroupByArgs} args - Group by arguments.
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
      T extends NotificationSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationSettingGroupByArgs['orderBy'] }
        : { orderBy?: NotificationSettingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationSetting model
   */
  readonly fields: NotificationSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the NotificationSetting model
   */
  interface NotificationSettingFieldRefs {
    readonly id: FieldRef<"NotificationSetting", 'String'>
    readonly org_id: FieldRef<"NotificationSetting", 'String'>
    readonly email_enabled: FieldRef<"NotificationSetting", 'Boolean'>
    readonly sms_enabled: FieldRef<"NotificationSetting", 'Boolean'>
    readonly push_enabled: FieldRef<"NotificationSetting", 'Boolean'>
    readonly settings: FieldRef<"NotificationSetting", 'Json'>
    readonly updated_at: FieldRef<"NotificationSetting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NotificationSetting findUnique
   */
  export type NotificationSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSetting
     */
    select?: NotificationSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSetting
     */
    omit?: NotificationSettingOmit<ExtArgs> | null
    /**
     * Filter, which NotificationSetting to fetch.
     */
    where: NotificationSettingWhereUniqueInput
  }

  /**
   * NotificationSetting findUniqueOrThrow
   */
  export type NotificationSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSetting
     */
    select?: NotificationSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSetting
     */
    omit?: NotificationSettingOmit<ExtArgs> | null
    /**
     * Filter, which NotificationSetting to fetch.
     */
    where: NotificationSettingWhereUniqueInput
  }

  /**
   * NotificationSetting findFirst
   */
  export type NotificationSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSetting
     */
    select?: NotificationSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSetting
     */
    omit?: NotificationSettingOmit<ExtArgs> | null
    /**
     * Filter, which NotificationSetting to fetch.
     */
    where?: NotificationSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationSettings to fetch.
     */
    orderBy?: NotificationSettingOrderByWithRelationInput | NotificationSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationSettings.
     */
    cursor?: NotificationSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationSettings.
     */
    distinct?: NotificationSettingScalarFieldEnum | NotificationSettingScalarFieldEnum[]
  }

  /**
   * NotificationSetting findFirstOrThrow
   */
  export type NotificationSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSetting
     */
    select?: NotificationSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSetting
     */
    omit?: NotificationSettingOmit<ExtArgs> | null
    /**
     * Filter, which NotificationSetting to fetch.
     */
    where?: NotificationSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationSettings to fetch.
     */
    orderBy?: NotificationSettingOrderByWithRelationInput | NotificationSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationSettings.
     */
    cursor?: NotificationSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationSettings.
     */
    distinct?: NotificationSettingScalarFieldEnum | NotificationSettingScalarFieldEnum[]
  }

  /**
   * NotificationSetting findMany
   */
  export type NotificationSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSetting
     */
    select?: NotificationSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSetting
     */
    omit?: NotificationSettingOmit<ExtArgs> | null
    /**
     * Filter, which NotificationSettings to fetch.
     */
    where?: NotificationSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationSettings to fetch.
     */
    orderBy?: NotificationSettingOrderByWithRelationInput | NotificationSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationSettings.
     */
    cursor?: NotificationSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationSettings.
     */
    skip?: number
    distinct?: NotificationSettingScalarFieldEnum | NotificationSettingScalarFieldEnum[]
  }

  /**
   * NotificationSetting create
   */
  export type NotificationSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSetting
     */
    select?: NotificationSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSetting
     */
    omit?: NotificationSettingOmit<ExtArgs> | null
    /**
     * The data needed to create a NotificationSetting.
     */
    data: XOR<NotificationSettingCreateInput, NotificationSettingUncheckedCreateInput>
  }

  /**
   * NotificationSetting createMany
   */
  export type NotificationSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationSettings.
     */
    data: NotificationSettingCreateManyInput | NotificationSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationSetting createManyAndReturn
   */
  export type NotificationSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSetting
     */
    select?: NotificationSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSetting
     */
    omit?: NotificationSettingOmit<ExtArgs> | null
    /**
     * The data used to create many NotificationSettings.
     */
    data: NotificationSettingCreateManyInput | NotificationSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationSetting update
   */
  export type NotificationSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSetting
     */
    select?: NotificationSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSetting
     */
    omit?: NotificationSettingOmit<ExtArgs> | null
    /**
     * The data needed to update a NotificationSetting.
     */
    data: XOR<NotificationSettingUpdateInput, NotificationSettingUncheckedUpdateInput>
    /**
     * Choose, which NotificationSetting to update.
     */
    where: NotificationSettingWhereUniqueInput
  }

  /**
   * NotificationSetting updateMany
   */
  export type NotificationSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationSettings.
     */
    data: XOR<NotificationSettingUpdateManyMutationInput, NotificationSettingUncheckedUpdateManyInput>
    /**
     * Filter which NotificationSettings to update
     */
    where?: NotificationSettingWhereInput
    /**
     * Limit how many NotificationSettings to update.
     */
    limit?: number
  }

  /**
   * NotificationSetting updateManyAndReturn
   */
  export type NotificationSettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSetting
     */
    select?: NotificationSettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSetting
     */
    omit?: NotificationSettingOmit<ExtArgs> | null
    /**
     * The data used to update NotificationSettings.
     */
    data: XOR<NotificationSettingUpdateManyMutationInput, NotificationSettingUncheckedUpdateManyInput>
    /**
     * Filter which NotificationSettings to update
     */
    where?: NotificationSettingWhereInput
    /**
     * Limit how many NotificationSettings to update.
     */
    limit?: number
  }

  /**
   * NotificationSetting upsert
   */
  export type NotificationSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSetting
     */
    select?: NotificationSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSetting
     */
    omit?: NotificationSettingOmit<ExtArgs> | null
    /**
     * The filter to search for the NotificationSetting to update in case it exists.
     */
    where: NotificationSettingWhereUniqueInput
    /**
     * In case the NotificationSetting found by the `where` argument doesn't exist, create a new NotificationSetting with this data.
     */
    create: XOR<NotificationSettingCreateInput, NotificationSettingUncheckedCreateInput>
    /**
     * In case the NotificationSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationSettingUpdateInput, NotificationSettingUncheckedUpdateInput>
  }

  /**
   * NotificationSetting delete
   */
  export type NotificationSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSetting
     */
    select?: NotificationSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSetting
     */
    omit?: NotificationSettingOmit<ExtArgs> | null
    /**
     * Filter which NotificationSetting to delete.
     */
    where: NotificationSettingWhereUniqueInput
  }

  /**
   * NotificationSetting deleteMany
   */
  export type NotificationSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationSettings to delete
     */
    where?: NotificationSettingWhereInput
    /**
     * Limit how many NotificationSettings to delete.
     */
    limit?: number
  }

  /**
   * NotificationSetting without action
   */
  export type NotificationSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSetting
     */
    select?: NotificationSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSetting
     */
    omit?: NotificationSettingOmit<ExtArgs> | null
  }


  /**
   * Model ContactPhoneVerification
   */

  export type AggregateContactPhoneVerification = {
    _count: ContactPhoneVerificationCountAggregateOutputType | null
    _min: ContactPhoneVerificationMinAggregateOutputType | null
    _max: ContactPhoneVerificationMaxAggregateOutputType | null
  }

  export type ContactPhoneVerificationMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    userRef: string | null
    phoneNumber: string | null
    verificationCode: string | null
    source: string | null
    status: string | null
    expiresAt: Date | null
    verifiedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactPhoneVerificationMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    userRef: string | null
    phoneNumber: string | null
    verificationCode: string | null
    source: string | null
    status: string | null
    expiresAt: Date | null
    verifiedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactPhoneVerificationCountAggregateOutputType = {
    id: number
    orgId: number
    userRef: number
    phoneNumber: number
    verificationCode: number
    source: number
    status: number
    expiresAt: number
    verifiedAt: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactPhoneVerificationMinAggregateInputType = {
    id?: true
    orgId?: true
    userRef?: true
    phoneNumber?: true
    verificationCode?: true
    source?: true
    status?: true
    expiresAt?: true
    verifiedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactPhoneVerificationMaxAggregateInputType = {
    id?: true
    orgId?: true
    userRef?: true
    phoneNumber?: true
    verificationCode?: true
    source?: true
    status?: true
    expiresAt?: true
    verifiedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactPhoneVerificationCountAggregateInputType = {
    id?: true
    orgId?: true
    userRef?: true
    phoneNumber?: true
    verificationCode?: true
    source?: true
    status?: true
    expiresAt?: true
    verifiedAt?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactPhoneVerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactPhoneVerification to aggregate.
     */
    where?: ContactPhoneVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactPhoneVerifications to fetch.
     */
    orderBy?: ContactPhoneVerificationOrderByWithRelationInput | ContactPhoneVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactPhoneVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactPhoneVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactPhoneVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactPhoneVerifications
    **/
    _count?: true | ContactPhoneVerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactPhoneVerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactPhoneVerificationMaxAggregateInputType
  }

  export type GetContactPhoneVerificationAggregateType<T extends ContactPhoneVerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateContactPhoneVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactPhoneVerification[P]>
      : GetScalarType<T[P], AggregateContactPhoneVerification[P]>
  }




  export type ContactPhoneVerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactPhoneVerificationWhereInput
    orderBy?: ContactPhoneVerificationOrderByWithAggregationInput | ContactPhoneVerificationOrderByWithAggregationInput[]
    by: ContactPhoneVerificationScalarFieldEnum[] | ContactPhoneVerificationScalarFieldEnum
    having?: ContactPhoneVerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactPhoneVerificationCountAggregateInputType | true
    _min?: ContactPhoneVerificationMinAggregateInputType
    _max?: ContactPhoneVerificationMaxAggregateInputType
  }

  export type ContactPhoneVerificationGroupByOutputType = {
    id: string
    orgId: string | null
    userRef: string | null
    phoneNumber: string
    verificationCode: string
    source: string | null
    status: string
    expiresAt: Date
    verifiedAt: Date | null
    metadata: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: ContactPhoneVerificationCountAggregateOutputType | null
    _min: ContactPhoneVerificationMinAggregateOutputType | null
    _max: ContactPhoneVerificationMaxAggregateOutputType | null
  }

  type GetContactPhoneVerificationGroupByPayload<T extends ContactPhoneVerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactPhoneVerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactPhoneVerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactPhoneVerificationGroupByOutputType[P]>
            : GetScalarType<T[P], ContactPhoneVerificationGroupByOutputType[P]>
        }
      >
    >


  export type ContactPhoneVerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    userRef?: boolean
    phoneNumber?: boolean
    verificationCode?: boolean
    source?: boolean
    status?: boolean
    expiresAt?: boolean
    verifiedAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactPhoneVerification"]>

  export type ContactPhoneVerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    userRef?: boolean
    phoneNumber?: boolean
    verificationCode?: boolean
    source?: boolean
    status?: boolean
    expiresAt?: boolean
    verifiedAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactPhoneVerification"]>

  export type ContactPhoneVerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    userRef?: boolean
    phoneNumber?: boolean
    verificationCode?: boolean
    source?: boolean
    status?: boolean
    expiresAt?: boolean
    verifiedAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactPhoneVerification"]>

  export type ContactPhoneVerificationSelectScalar = {
    id?: boolean
    orgId?: boolean
    userRef?: boolean
    phoneNumber?: boolean
    verificationCode?: boolean
    source?: boolean
    status?: boolean
    expiresAt?: boolean
    verifiedAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactPhoneVerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "userRef" | "phoneNumber" | "verificationCode" | "source" | "status" | "expiresAt" | "verifiedAt" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["contactPhoneVerification"]>

  export type $ContactPhoneVerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactPhoneVerification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string | null
      userRef: string | null
      phoneNumber: string
      verificationCode: string
      source: string | null
      status: string
      expiresAt: Date
      verifiedAt: Date | null
      metadata: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contactPhoneVerification"]>
    composites: {}
  }

  type ContactPhoneVerificationGetPayload<S extends boolean | null | undefined | ContactPhoneVerificationDefaultArgs> = $Result.GetResult<Prisma.$ContactPhoneVerificationPayload, S>

  type ContactPhoneVerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactPhoneVerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactPhoneVerificationCountAggregateInputType | true
    }

  export interface ContactPhoneVerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactPhoneVerification'], meta: { name: 'ContactPhoneVerification' } }
    /**
     * Find zero or one ContactPhoneVerification that matches the filter.
     * @param {ContactPhoneVerificationFindUniqueArgs} args - Arguments to find a ContactPhoneVerification
     * @example
     * // Get one ContactPhoneVerification
     * const contactPhoneVerification = await prisma.contactPhoneVerification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactPhoneVerificationFindUniqueArgs>(args: SelectSubset<T, ContactPhoneVerificationFindUniqueArgs<ExtArgs>>): Prisma__ContactPhoneVerificationClient<$Result.GetResult<Prisma.$ContactPhoneVerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactPhoneVerification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactPhoneVerificationFindUniqueOrThrowArgs} args - Arguments to find a ContactPhoneVerification
     * @example
     * // Get one ContactPhoneVerification
     * const contactPhoneVerification = await prisma.contactPhoneVerification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactPhoneVerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactPhoneVerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactPhoneVerificationClient<$Result.GetResult<Prisma.$ContactPhoneVerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactPhoneVerification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPhoneVerificationFindFirstArgs} args - Arguments to find a ContactPhoneVerification
     * @example
     * // Get one ContactPhoneVerification
     * const contactPhoneVerification = await prisma.contactPhoneVerification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactPhoneVerificationFindFirstArgs>(args?: SelectSubset<T, ContactPhoneVerificationFindFirstArgs<ExtArgs>>): Prisma__ContactPhoneVerificationClient<$Result.GetResult<Prisma.$ContactPhoneVerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactPhoneVerification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPhoneVerificationFindFirstOrThrowArgs} args - Arguments to find a ContactPhoneVerification
     * @example
     * // Get one ContactPhoneVerification
     * const contactPhoneVerification = await prisma.contactPhoneVerification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactPhoneVerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactPhoneVerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactPhoneVerificationClient<$Result.GetResult<Prisma.$ContactPhoneVerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactPhoneVerifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPhoneVerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactPhoneVerifications
     * const contactPhoneVerifications = await prisma.contactPhoneVerification.findMany()
     * 
     * // Get first 10 ContactPhoneVerifications
     * const contactPhoneVerifications = await prisma.contactPhoneVerification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactPhoneVerificationWithIdOnly = await prisma.contactPhoneVerification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactPhoneVerificationFindManyArgs>(args?: SelectSubset<T, ContactPhoneVerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPhoneVerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactPhoneVerification.
     * @param {ContactPhoneVerificationCreateArgs} args - Arguments to create a ContactPhoneVerification.
     * @example
     * // Create one ContactPhoneVerification
     * const ContactPhoneVerification = await prisma.contactPhoneVerification.create({
     *   data: {
     *     // ... data to create a ContactPhoneVerification
     *   }
     * })
     * 
     */
    create<T extends ContactPhoneVerificationCreateArgs>(args: SelectSubset<T, ContactPhoneVerificationCreateArgs<ExtArgs>>): Prisma__ContactPhoneVerificationClient<$Result.GetResult<Prisma.$ContactPhoneVerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactPhoneVerifications.
     * @param {ContactPhoneVerificationCreateManyArgs} args - Arguments to create many ContactPhoneVerifications.
     * @example
     * // Create many ContactPhoneVerifications
     * const contactPhoneVerification = await prisma.contactPhoneVerification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactPhoneVerificationCreateManyArgs>(args?: SelectSubset<T, ContactPhoneVerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactPhoneVerifications and returns the data saved in the database.
     * @param {ContactPhoneVerificationCreateManyAndReturnArgs} args - Arguments to create many ContactPhoneVerifications.
     * @example
     * // Create many ContactPhoneVerifications
     * const contactPhoneVerification = await prisma.contactPhoneVerification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactPhoneVerifications and only return the `id`
     * const contactPhoneVerificationWithIdOnly = await prisma.contactPhoneVerification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactPhoneVerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactPhoneVerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPhoneVerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactPhoneVerification.
     * @param {ContactPhoneVerificationDeleteArgs} args - Arguments to delete one ContactPhoneVerification.
     * @example
     * // Delete one ContactPhoneVerification
     * const ContactPhoneVerification = await prisma.contactPhoneVerification.delete({
     *   where: {
     *     // ... filter to delete one ContactPhoneVerification
     *   }
     * })
     * 
     */
    delete<T extends ContactPhoneVerificationDeleteArgs>(args: SelectSubset<T, ContactPhoneVerificationDeleteArgs<ExtArgs>>): Prisma__ContactPhoneVerificationClient<$Result.GetResult<Prisma.$ContactPhoneVerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactPhoneVerification.
     * @param {ContactPhoneVerificationUpdateArgs} args - Arguments to update one ContactPhoneVerification.
     * @example
     * // Update one ContactPhoneVerification
     * const contactPhoneVerification = await prisma.contactPhoneVerification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactPhoneVerificationUpdateArgs>(args: SelectSubset<T, ContactPhoneVerificationUpdateArgs<ExtArgs>>): Prisma__ContactPhoneVerificationClient<$Result.GetResult<Prisma.$ContactPhoneVerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactPhoneVerifications.
     * @param {ContactPhoneVerificationDeleteManyArgs} args - Arguments to filter ContactPhoneVerifications to delete.
     * @example
     * // Delete a few ContactPhoneVerifications
     * const { count } = await prisma.contactPhoneVerification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactPhoneVerificationDeleteManyArgs>(args?: SelectSubset<T, ContactPhoneVerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactPhoneVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPhoneVerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactPhoneVerifications
     * const contactPhoneVerification = await prisma.contactPhoneVerification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactPhoneVerificationUpdateManyArgs>(args: SelectSubset<T, ContactPhoneVerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactPhoneVerifications and returns the data updated in the database.
     * @param {ContactPhoneVerificationUpdateManyAndReturnArgs} args - Arguments to update many ContactPhoneVerifications.
     * @example
     * // Update many ContactPhoneVerifications
     * const contactPhoneVerification = await prisma.contactPhoneVerification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactPhoneVerifications and only return the `id`
     * const contactPhoneVerificationWithIdOnly = await prisma.contactPhoneVerification.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContactPhoneVerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactPhoneVerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPhoneVerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactPhoneVerification.
     * @param {ContactPhoneVerificationUpsertArgs} args - Arguments to update or create a ContactPhoneVerification.
     * @example
     * // Update or create a ContactPhoneVerification
     * const contactPhoneVerification = await prisma.contactPhoneVerification.upsert({
     *   create: {
     *     // ... data to create a ContactPhoneVerification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactPhoneVerification we want to update
     *   }
     * })
     */
    upsert<T extends ContactPhoneVerificationUpsertArgs>(args: SelectSubset<T, ContactPhoneVerificationUpsertArgs<ExtArgs>>): Prisma__ContactPhoneVerificationClient<$Result.GetResult<Prisma.$ContactPhoneVerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactPhoneVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPhoneVerificationCountArgs} args - Arguments to filter ContactPhoneVerifications to count.
     * @example
     * // Count the number of ContactPhoneVerifications
     * const count = await prisma.contactPhoneVerification.count({
     *   where: {
     *     // ... the filter for the ContactPhoneVerifications we want to count
     *   }
     * })
    **/
    count<T extends ContactPhoneVerificationCountArgs>(
      args?: Subset<T, ContactPhoneVerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactPhoneVerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactPhoneVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPhoneVerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactPhoneVerificationAggregateArgs>(args: Subset<T, ContactPhoneVerificationAggregateArgs>): Prisma.PrismaPromise<GetContactPhoneVerificationAggregateType<T>>

    /**
     * Group by ContactPhoneVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPhoneVerificationGroupByArgs} args - Group by arguments.
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
      T extends ContactPhoneVerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactPhoneVerificationGroupByArgs['orderBy'] }
        : { orderBy?: ContactPhoneVerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactPhoneVerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactPhoneVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactPhoneVerification model
   */
  readonly fields: ContactPhoneVerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactPhoneVerification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactPhoneVerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ContactPhoneVerification model
   */
  interface ContactPhoneVerificationFieldRefs {
    readonly id: FieldRef<"ContactPhoneVerification", 'String'>
    readonly orgId: FieldRef<"ContactPhoneVerification", 'String'>
    readonly userRef: FieldRef<"ContactPhoneVerification", 'String'>
    readonly phoneNumber: FieldRef<"ContactPhoneVerification", 'String'>
    readonly verificationCode: FieldRef<"ContactPhoneVerification", 'String'>
    readonly source: FieldRef<"ContactPhoneVerification", 'String'>
    readonly status: FieldRef<"ContactPhoneVerification", 'String'>
    readonly expiresAt: FieldRef<"ContactPhoneVerification", 'DateTime'>
    readonly verifiedAt: FieldRef<"ContactPhoneVerification", 'DateTime'>
    readonly metadata: FieldRef<"ContactPhoneVerification", 'Json'>
    readonly createdAt: FieldRef<"ContactPhoneVerification", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactPhoneVerification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactPhoneVerification findUnique
   */
  export type ContactPhoneVerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPhoneVerification
     */
    select?: ContactPhoneVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPhoneVerification
     */
    omit?: ContactPhoneVerificationOmit<ExtArgs> | null
    /**
     * Filter, which ContactPhoneVerification to fetch.
     */
    where: ContactPhoneVerificationWhereUniqueInput
  }

  /**
   * ContactPhoneVerification findUniqueOrThrow
   */
  export type ContactPhoneVerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPhoneVerification
     */
    select?: ContactPhoneVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPhoneVerification
     */
    omit?: ContactPhoneVerificationOmit<ExtArgs> | null
    /**
     * Filter, which ContactPhoneVerification to fetch.
     */
    where: ContactPhoneVerificationWhereUniqueInput
  }

  /**
   * ContactPhoneVerification findFirst
   */
  export type ContactPhoneVerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPhoneVerification
     */
    select?: ContactPhoneVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPhoneVerification
     */
    omit?: ContactPhoneVerificationOmit<ExtArgs> | null
    /**
     * Filter, which ContactPhoneVerification to fetch.
     */
    where?: ContactPhoneVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactPhoneVerifications to fetch.
     */
    orderBy?: ContactPhoneVerificationOrderByWithRelationInput | ContactPhoneVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactPhoneVerifications.
     */
    cursor?: ContactPhoneVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactPhoneVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactPhoneVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactPhoneVerifications.
     */
    distinct?: ContactPhoneVerificationScalarFieldEnum | ContactPhoneVerificationScalarFieldEnum[]
  }

  /**
   * ContactPhoneVerification findFirstOrThrow
   */
  export type ContactPhoneVerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPhoneVerification
     */
    select?: ContactPhoneVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPhoneVerification
     */
    omit?: ContactPhoneVerificationOmit<ExtArgs> | null
    /**
     * Filter, which ContactPhoneVerification to fetch.
     */
    where?: ContactPhoneVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactPhoneVerifications to fetch.
     */
    orderBy?: ContactPhoneVerificationOrderByWithRelationInput | ContactPhoneVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactPhoneVerifications.
     */
    cursor?: ContactPhoneVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactPhoneVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactPhoneVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactPhoneVerifications.
     */
    distinct?: ContactPhoneVerificationScalarFieldEnum | ContactPhoneVerificationScalarFieldEnum[]
  }

  /**
   * ContactPhoneVerification findMany
   */
  export type ContactPhoneVerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPhoneVerification
     */
    select?: ContactPhoneVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPhoneVerification
     */
    omit?: ContactPhoneVerificationOmit<ExtArgs> | null
    /**
     * Filter, which ContactPhoneVerifications to fetch.
     */
    where?: ContactPhoneVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactPhoneVerifications to fetch.
     */
    orderBy?: ContactPhoneVerificationOrderByWithRelationInput | ContactPhoneVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactPhoneVerifications.
     */
    cursor?: ContactPhoneVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactPhoneVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactPhoneVerifications.
     */
    skip?: number
    distinct?: ContactPhoneVerificationScalarFieldEnum | ContactPhoneVerificationScalarFieldEnum[]
  }

  /**
   * ContactPhoneVerification create
   */
  export type ContactPhoneVerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPhoneVerification
     */
    select?: ContactPhoneVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPhoneVerification
     */
    omit?: ContactPhoneVerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactPhoneVerification.
     */
    data: XOR<ContactPhoneVerificationCreateInput, ContactPhoneVerificationUncheckedCreateInput>
  }

  /**
   * ContactPhoneVerification createMany
   */
  export type ContactPhoneVerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactPhoneVerifications.
     */
    data: ContactPhoneVerificationCreateManyInput | ContactPhoneVerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactPhoneVerification createManyAndReturn
   */
  export type ContactPhoneVerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPhoneVerification
     */
    select?: ContactPhoneVerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPhoneVerification
     */
    omit?: ContactPhoneVerificationOmit<ExtArgs> | null
    /**
     * The data used to create many ContactPhoneVerifications.
     */
    data: ContactPhoneVerificationCreateManyInput | ContactPhoneVerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactPhoneVerification update
   */
  export type ContactPhoneVerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPhoneVerification
     */
    select?: ContactPhoneVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPhoneVerification
     */
    omit?: ContactPhoneVerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactPhoneVerification.
     */
    data: XOR<ContactPhoneVerificationUpdateInput, ContactPhoneVerificationUncheckedUpdateInput>
    /**
     * Choose, which ContactPhoneVerification to update.
     */
    where: ContactPhoneVerificationWhereUniqueInput
  }

  /**
   * ContactPhoneVerification updateMany
   */
  export type ContactPhoneVerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactPhoneVerifications.
     */
    data: XOR<ContactPhoneVerificationUpdateManyMutationInput, ContactPhoneVerificationUncheckedUpdateManyInput>
    /**
     * Filter which ContactPhoneVerifications to update
     */
    where?: ContactPhoneVerificationWhereInput
    /**
     * Limit how many ContactPhoneVerifications to update.
     */
    limit?: number
  }

  /**
   * ContactPhoneVerification updateManyAndReturn
   */
  export type ContactPhoneVerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPhoneVerification
     */
    select?: ContactPhoneVerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPhoneVerification
     */
    omit?: ContactPhoneVerificationOmit<ExtArgs> | null
    /**
     * The data used to update ContactPhoneVerifications.
     */
    data: XOR<ContactPhoneVerificationUpdateManyMutationInput, ContactPhoneVerificationUncheckedUpdateManyInput>
    /**
     * Filter which ContactPhoneVerifications to update
     */
    where?: ContactPhoneVerificationWhereInput
    /**
     * Limit how many ContactPhoneVerifications to update.
     */
    limit?: number
  }

  /**
   * ContactPhoneVerification upsert
   */
  export type ContactPhoneVerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPhoneVerification
     */
    select?: ContactPhoneVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPhoneVerification
     */
    omit?: ContactPhoneVerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactPhoneVerification to update in case it exists.
     */
    where: ContactPhoneVerificationWhereUniqueInput
    /**
     * In case the ContactPhoneVerification found by the `where` argument doesn't exist, create a new ContactPhoneVerification with this data.
     */
    create: XOR<ContactPhoneVerificationCreateInput, ContactPhoneVerificationUncheckedCreateInput>
    /**
     * In case the ContactPhoneVerification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactPhoneVerificationUpdateInput, ContactPhoneVerificationUncheckedUpdateInput>
  }

  /**
   * ContactPhoneVerification delete
   */
  export type ContactPhoneVerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPhoneVerification
     */
    select?: ContactPhoneVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPhoneVerification
     */
    omit?: ContactPhoneVerificationOmit<ExtArgs> | null
    /**
     * Filter which ContactPhoneVerification to delete.
     */
    where: ContactPhoneVerificationWhereUniqueInput
  }

  /**
   * ContactPhoneVerification deleteMany
   */
  export type ContactPhoneVerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactPhoneVerifications to delete
     */
    where?: ContactPhoneVerificationWhereInput
    /**
     * Limit how many ContactPhoneVerifications to delete.
     */
    limit?: number
  }

  /**
   * ContactPhoneVerification without action
   */
  export type ContactPhoneVerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPhoneVerification
     */
    select?: ContactPhoneVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPhoneVerification
     */
    omit?: ContactPhoneVerificationOmit<ExtArgs> | null
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


  export const NotificationScalarFieldEnum: {
    id: 'id',
    org_id: 'org_id',
    user_id: 'user_id',
    type: 'type',
    category: 'category',
    title: 'title',
    body: 'body',
    is_seen: 'is_seen',
    is_read: 'is_read',
    is_archived: 'is_archived',
    seen_at: 'seen_at',
    archived_at: 'archived_at',
    ref_id: 'ref_id',
    ref_type: 'ref_type',
    metadata: 'metadata',
    created_at: 'created_at'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const EmailMessageScalarFieldEnum: {
    id: 'id',
    org_id: 'org_id',
    created_by: 'created_by',
    subject: 'subject',
    body: 'body',
    to: 'to',
    cc: 'cc',
    bcc: 'bcc',
    from_email: 'from_email',
    from_name: 'from_name',
    is_sent: 'is_sent',
    sent_at: 'sent_at',
    is_deleted: 'is_deleted',
    metadata: 'metadata',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type EmailMessageScalarFieldEnum = (typeof EmailMessageScalarFieldEnum)[keyof typeof EmailMessageScalarFieldEnum]


  export const EmailCampaignScalarFieldEnum: {
    id: 'id',
    org_id: 'org_id',
    created_by: 'created_by',
    series_id: 'series_id',
    name: 'name',
    subject: 'subject',
    body: 'body',
    status: 'status',
    scheduled_at: 'scheduled_at',
    sent_at: 'sent_at',
    is_deleted: 'is_deleted',
    metadata: 'metadata',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type EmailCampaignScalarFieldEnum = (typeof EmailCampaignScalarFieldEnum)[keyof typeof EmailCampaignScalarFieldEnum]


  export const SmsMessageScalarFieldEnum: {
    id: 'id',
    org_id: 'org_id',
    created_by: 'created_by',
    to: 'to',
    body: 'body',
    status: 'status',
    twilio_sid: 'twilio_sid',
    is_deleted: 'is_deleted',
    metadata: 'metadata',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SmsMessageScalarFieldEnum = (typeof SmsMessageScalarFieldEnum)[keyof typeof SmsMessageScalarFieldEnum]


  export const DeviceTokenScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    org_id: 'org_id',
    type: 'type',
    token: 'token',
    created_at: 'created_at'
  };

  export type DeviceTokenScalarFieldEnum = (typeof DeviceTokenScalarFieldEnum)[keyof typeof DeviceTokenScalarFieldEnum]


  export const NotificationSettingScalarFieldEnum: {
    id: 'id',
    org_id: 'org_id',
    email_enabled: 'email_enabled',
    sms_enabled: 'sms_enabled',
    push_enabled: 'push_enabled',
    settings: 'settings',
    updated_at: 'updated_at'
  };

  export type NotificationSettingScalarFieldEnum = (typeof NotificationSettingScalarFieldEnum)[keyof typeof NotificationSettingScalarFieldEnum]


  export const ContactPhoneVerificationScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    userRef: 'userRef',
    phoneNumber: 'phoneNumber',
    verificationCode: 'verificationCode',
    source: 'source',
    status: 'status',
    expiresAt: 'expiresAt',
    verifiedAt: 'verifiedAt',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactPhoneVerificationScalarFieldEnum = (typeof ContactPhoneVerificationScalarFieldEnum)[keyof typeof ContactPhoneVerificationScalarFieldEnum]


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
   * Deep Input Types
   */


  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: UuidFilter<"Notification"> | string
    org_id?: UuidFilter<"Notification"> | string
    user_id?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    category?: StringNullableFilter<"Notification"> | string | null
    title?: StringNullableFilter<"Notification"> | string | null
    body?: StringNullableFilter<"Notification"> | string | null
    is_seen?: BoolFilter<"Notification"> | boolean
    is_read?: BoolFilter<"Notification"> | boolean
    is_archived?: BoolFilter<"Notification"> | boolean
    seen_at?: DateTimeNullableFilter<"Notification"> | Date | string | null
    archived_at?: DateTimeNullableFilter<"Notification"> | Date | string | null
    ref_id?: StringNullableFilter<"Notification"> | string | null
    ref_type?: StringNullableFilter<"Notification"> | string | null
    metadata?: JsonFilter<"Notification">
    created_at?: DateTimeFilter<"Notification"> | Date | string
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    org_id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    category?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    body?: SortOrderInput | SortOrder
    is_seen?: SortOrder
    is_read?: SortOrder
    is_archived?: SortOrder
    seen_at?: SortOrderInput | SortOrder
    archived_at?: SortOrderInput | SortOrder
    ref_id?: SortOrderInput | SortOrder
    ref_type?: SortOrderInput | SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    org_id?: UuidFilter<"Notification"> | string
    user_id?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    category?: StringNullableFilter<"Notification"> | string | null
    title?: StringNullableFilter<"Notification"> | string | null
    body?: StringNullableFilter<"Notification"> | string | null
    is_seen?: BoolFilter<"Notification"> | boolean
    is_read?: BoolFilter<"Notification"> | boolean
    is_archived?: BoolFilter<"Notification"> | boolean
    seen_at?: DateTimeNullableFilter<"Notification"> | Date | string | null
    archived_at?: DateTimeNullableFilter<"Notification"> | Date | string | null
    ref_id?: StringNullableFilter<"Notification"> | string | null
    ref_type?: StringNullableFilter<"Notification"> | string | null
    metadata?: JsonFilter<"Notification">
    created_at?: DateTimeFilter<"Notification"> | Date | string
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    org_id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    category?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    body?: SortOrderInput | SortOrder
    is_seen?: SortOrder
    is_read?: SortOrder
    is_archived?: SortOrder
    seen_at?: SortOrderInput | SortOrder
    archived_at?: SortOrderInput | SortOrder
    ref_id?: SortOrderInput | SortOrder
    ref_type?: SortOrderInput | SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Notification"> | string
    org_id?: UuidWithAggregatesFilter<"Notification"> | string
    user_id?: StringWithAggregatesFilter<"Notification"> | string
    type?: StringWithAggregatesFilter<"Notification"> | string
    category?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    title?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    body?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    is_seen?: BoolWithAggregatesFilter<"Notification"> | boolean
    is_read?: BoolWithAggregatesFilter<"Notification"> | boolean
    is_archived?: BoolWithAggregatesFilter<"Notification"> | boolean
    seen_at?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    archived_at?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    ref_id?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    ref_type?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    metadata?: JsonWithAggregatesFilter<"Notification">
    created_at?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type EmailMessageWhereInput = {
    AND?: EmailMessageWhereInput | EmailMessageWhereInput[]
    OR?: EmailMessageWhereInput[]
    NOT?: EmailMessageWhereInput | EmailMessageWhereInput[]
    id?: UuidFilter<"EmailMessage"> | string
    org_id?: UuidFilter<"EmailMessage"> | string
    created_by?: StringFilter<"EmailMessage"> | string
    subject?: StringNullableFilter<"EmailMessage"> | string | null
    body?: StringNullableFilter<"EmailMessage"> | string | null
    to?: StringNullableListFilter<"EmailMessage">
    cc?: StringNullableListFilter<"EmailMessage">
    bcc?: StringNullableListFilter<"EmailMessage">
    from_email?: StringNullableFilter<"EmailMessage"> | string | null
    from_name?: StringNullableFilter<"EmailMessage"> | string | null
    is_sent?: BoolFilter<"EmailMessage"> | boolean
    sent_at?: DateTimeNullableFilter<"EmailMessage"> | Date | string | null
    is_deleted?: BoolFilter<"EmailMessage"> | boolean
    metadata?: JsonFilter<"EmailMessage">
    created_at?: DateTimeFilter<"EmailMessage"> | Date | string
    updated_at?: DateTimeFilter<"EmailMessage"> | Date | string
  }

  export type EmailMessageOrderByWithRelationInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by?: SortOrder
    subject?: SortOrderInput | SortOrder
    body?: SortOrderInput | SortOrder
    to?: SortOrder
    cc?: SortOrder
    bcc?: SortOrder
    from_email?: SortOrderInput | SortOrder
    from_name?: SortOrderInput | SortOrder
    is_sent?: SortOrder
    sent_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EmailMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmailMessageWhereInput | EmailMessageWhereInput[]
    OR?: EmailMessageWhereInput[]
    NOT?: EmailMessageWhereInput | EmailMessageWhereInput[]
    org_id?: UuidFilter<"EmailMessage"> | string
    created_by?: StringFilter<"EmailMessage"> | string
    subject?: StringNullableFilter<"EmailMessage"> | string | null
    body?: StringNullableFilter<"EmailMessage"> | string | null
    to?: StringNullableListFilter<"EmailMessage">
    cc?: StringNullableListFilter<"EmailMessage">
    bcc?: StringNullableListFilter<"EmailMessage">
    from_email?: StringNullableFilter<"EmailMessage"> | string | null
    from_name?: StringNullableFilter<"EmailMessage"> | string | null
    is_sent?: BoolFilter<"EmailMessage"> | boolean
    sent_at?: DateTimeNullableFilter<"EmailMessage"> | Date | string | null
    is_deleted?: BoolFilter<"EmailMessage"> | boolean
    metadata?: JsonFilter<"EmailMessage">
    created_at?: DateTimeFilter<"EmailMessage"> | Date | string
    updated_at?: DateTimeFilter<"EmailMessage"> | Date | string
  }, "id">

  export type EmailMessageOrderByWithAggregationInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by?: SortOrder
    subject?: SortOrderInput | SortOrder
    body?: SortOrderInput | SortOrder
    to?: SortOrder
    cc?: SortOrder
    bcc?: SortOrder
    from_email?: SortOrderInput | SortOrder
    from_name?: SortOrderInput | SortOrder
    is_sent?: SortOrder
    sent_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: EmailMessageCountOrderByAggregateInput
    _max?: EmailMessageMaxOrderByAggregateInput
    _min?: EmailMessageMinOrderByAggregateInput
  }

  export type EmailMessageScalarWhereWithAggregatesInput = {
    AND?: EmailMessageScalarWhereWithAggregatesInput | EmailMessageScalarWhereWithAggregatesInput[]
    OR?: EmailMessageScalarWhereWithAggregatesInput[]
    NOT?: EmailMessageScalarWhereWithAggregatesInput | EmailMessageScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"EmailMessage"> | string
    org_id?: UuidWithAggregatesFilter<"EmailMessage"> | string
    created_by?: StringWithAggregatesFilter<"EmailMessage"> | string
    subject?: StringNullableWithAggregatesFilter<"EmailMessage"> | string | null
    body?: StringNullableWithAggregatesFilter<"EmailMessage"> | string | null
    to?: StringNullableListFilter<"EmailMessage">
    cc?: StringNullableListFilter<"EmailMessage">
    bcc?: StringNullableListFilter<"EmailMessage">
    from_email?: StringNullableWithAggregatesFilter<"EmailMessage"> | string | null
    from_name?: StringNullableWithAggregatesFilter<"EmailMessage"> | string | null
    is_sent?: BoolWithAggregatesFilter<"EmailMessage"> | boolean
    sent_at?: DateTimeNullableWithAggregatesFilter<"EmailMessage"> | Date | string | null
    is_deleted?: BoolWithAggregatesFilter<"EmailMessage"> | boolean
    metadata?: JsonWithAggregatesFilter<"EmailMessage">
    created_at?: DateTimeWithAggregatesFilter<"EmailMessage"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"EmailMessage"> | Date | string
  }

  export type EmailCampaignWhereInput = {
    AND?: EmailCampaignWhereInput | EmailCampaignWhereInput[]
    OR?: EmailCampaignWhereInput[]
    NOT?: EmailCampaignWhereInput | EmailCampaignWhereInput[]
    id?: UuidFilter<"EmailCampaign"> | string
    org_id?: UuidFilter<"EmailCampaign"> | string
    created_by?: StringFilter<"EmailCampaign"> | string
    series_id?: UuidFilter<"EmailCampaign"> | string
    name?: StringFilter<"EmailCampaign"> | string
    subject?: StringFilter<"EmailCampaign"> | string
    body?: StringFilter<"EmailCampaign"> | string
    status?: StringFilter<"EmailCampaign"> | string
    scheduled_at?: DateTimeNullableFilter<"EmailCampaign"> | Date | string | null
    sent_at?: DateTimeNullableFilter<"EmailCampaign"> | Date | string | null
    is_deleted?: BoolFilter<"EmailCampaign"> | boolean
    metadata?: JsonFilter<"EmailCampaign">
    created_at?: DateTimeFilter<"EmailCampaign"> | Date | string
    updated_at?: DateTimeFilter<"EmailCampaign"> | Date | string
  }

  export type EmailCampaignOrderByWithRelationInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by?: SortOrder
    series_id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    scheduled_at?: SortOrderInput | SortOrder
    sent_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EmailCampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    series_id?: string
    AND?: EmailCampaignWhereInput | EmailCampaignWhereInput[]
    OR?: EmailCampaignWhereInput[]
    NOT?: EmailCampaignWhereInput | EmailCampaignWhereInput[]
    org_id?: UuidFilter<"EmailCampaign"> | string
    created_by?: StringFilter<"EmailCampaign"> | string
    name?: StringFilter<"EmailCampaign"> | string
    subject?: StringFilter<"EmailCampaign"> | string
    body?: StringFilter<"EmailCampaign"> | string
    status?: StringFilter<"EmailCampaign"> | string
    scheduled_at?: DateTimeNullableFilter<"EmailCampaign"> | Date | string | null
    sent_at?: DateTimeNullableFilter<"EmailCampaign"> | Date | string | null
    is_deleted?: BoolFilter<"EmailCampaign"> | boolean
    metadata?: JsonFilter<"EmailCampaign">
    created_at?: DateTimeFilter<"EmailCampaign"> | Date | string
    updated_at?: DateTimeFilter<"EmailCampaign"> | Date | string
  }, "id" | "series_id">

  export type EmailCampaignOrderByWithAggregationInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by?: SortOrder
    series_id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    scheduled_at?: SortOrderInput | SortOrder
    sent_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: EmailCampaignCountOrderByAggregateInput
    _max?: EmailCampaignMaxOrderByAggregateInput
    _min?: EmailCampaignMinOrderByAggregateInput
  }

  export type EmailCampaignScalarWhereWithAggregatesInput = {
    AND?: EmailCampaignScalarWhereWithAggregatesInput | EmailCampaignScalarWhereWithAggregatesInput[]
    OR?: EmailCampaignScalarWhereWithAggregatesInput[]
    NOT?: EmailCampaignScalarWhereWithAggregatesInput | EmailCampaignScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"EmailCampaign"> | string
    org_id?: UuidWithAggregatesFilter<"EmailCampaign"> | string
    created_by?: StringWithAggregatesFilter<"EmailCampaign"> | string
    series_id?: UuidWithAggregatesFilter<"EmailCampaign"> | string
    name?: StringWithAggregatesFilter<"EmailCampaign"> | string
    subject?: StringWithAggregatesFilter<"EmailCampaign"> | string
    body?: StringWithAggregatesFilter<"EmailCampaign"> | string
    status?: StringWithAggregatesFilter<"EmailCampaign"> | string
    scheduled_at?: DateTimeNullableWithAggregatesFilter<"EmailCampaign"> | Date | string | null
    sent_at?: DateTimeNullableWithAggregatesFilter<"EmailCampaign"> | Date | string | null
    is_deleted?: BoolWithAggregatesFilter<"EmailCampaign"> | boolean
    metadata?: JsonWithAggregatesFilter<"EmailCampaign">
    created_at?: DateTimeWithAggregatesFilter<"EmailCampaign"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"EmailCampaign"> | Date | string
  }

  export type SmsMessageWhereInput = {
    AND?: SmsMessageWhereInput | SmsMessageWhereInput[]
    OR?: SmsMessageWhereInput[]
    NOT?: SmsMessageWhereInput | SmsMessageWhereInput[]
    id?: UuidFilter<"SmsMessage"> | string
    org_id?: UuidFilter<"SmsMessage"> | string
    created_by?: StringFilter<"SmsMessage"> | string
    to?: StringFilter<"SmsMessage"> | string
    body?: StringFilter<"SmsMessage"> | string
    status?: StringFilter<"SmsMessage"> | string
    twilio_sid?: StringNullableFilter<"SmsMessage"> | string | null
    is_deleted?: BoolFilter<"SmsMessage"> | boolean
    metadata?: JsonFilter<"SmsMessage">
    created_at?: DateTimeFilter<"SmsMessage"> | Date | string
    updated_at?: DateTimeFilter<"SmsMessage"> | Date | string
  }

  export type SmsMessageOrderByWithRelationInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by?: SortOrder
    to?: SortOrder
    body?: SortOrder
    status?: SortOrder
    twilio_sid?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SmsMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SmsMessageWhereInput | SmsMessageWhereInput[]
    OR?: SmsMessageWhereInput[]
    NOT?: SmsMessageWhereInput | SmsMessageWhereInput[]
    org_id?: UuidFilter<"SmsMessage"> | string
    created_by?: StringFilter<"SmsMessage"> | string
    to?: StringFilter<"SmsMessage"> | string
    body?: StringFilter<"SmsMessage"> | string
    status?: StringFilter<"SmsMessage"> | string
    twilio_sid?: StringNullableFilter<"SmsMessage"> | string | null
    is_deleted?: BoolFilter<"SmsMessage"> | boolean
    metadata?: JsonFilter<"SmsMessage">
    created_at?: DateTimeFilter<"SmsMessage"> | Date | string
    updated_at?: DateTimeFilter<"SmsMessage"> | Date | string
  }, "id">

  export type SmsMessageOrderByWithAggregationInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by?: SortOrder
    to?: SortOrder
    body?: SortOrder
    status?: SortOrder
    twilio_sid?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SmsMessageCountOrderByAggregateInput
    _max?: SmsMessageMaxOrderByAggregateInput
    _min?: SmsMessageMinOrderByAggregateInput
  }

  export type SmsMessageScalarWhereWithAggregatesInput = {
    AND?: SmsMessageScalarWhereWithAggregatesInput | SmsMessageScalarWhereWithAggregatesInput[]
    OR?: SmsMessageScalarWhereWithAggregatesInput[]
    NOT?: SmsMessageScalarWhereWithAggregatesInput | SmsMessageScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"SmsMessage"> | string
    org_id?: UuidWithAggregatesFilter<"SmsMessage"> | string
    created_by?: StringWithAggregatesFilter<"SmsMessage"> | string
    to?: StringWithAggregatesFilter<"SmsMessage"> | string
    body?: StringWithAggregatesFilter<"SmsMessage"> | string
    status?: StringWithAggregatesFilter<"SmsMessage"> | string
    twilio_sid?: StringNullableWithAggregatesFilter<"SmsMessage"> | string | null
    is_deleted?: BoolWithAggregatesFilter<"SmsMessage"> | boolean
    metadata?: JsonWithAggregatesFilter<"SmsMessage">
    created_at?: DateTimeWithAggregatesFilter<"SmsMessage"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"SmsMessage"> | Date | string
  }

  export type DeviceTokenWhereInput = {
    AND?: DeviceTokenWhereInput | DeviceTokenWhereInput[]
    OR?: DeviceTokenWhereInput[]
    NOT?: DeviceTokenWhereInput | DeviceTokenWhereInput[]
    id?: UuidFilter<"DeviceToken"> | string
    user_id?: StringFilter<"DeviceToken"> | string
    org_id?: UuidNullableFilter<"DeviceToken"> | string | null
    type?: StringFilter<"DeviceToken"> | string
    token?: StringFilter<"DeviceToken"> | string
    created_at?: DateTimeFilter<"DeviceToken"> | Date | string
  }

  export type DeviceTokenOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    org_id?: SortOrderInput | SortOrder
    type?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
  }

  export type DeviceTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id_token?: DeviceTokenUser_idTokenCompoundUniqueInput
    AND?: DeviceTokenWhereInput | DeviceTokenWhereInput[]
    OR?: DeviceTokenWhereInput[]
    NOT?: DeviceTokenWhereInput | DeviceTokenWhereInput[]
    user_id?: StringFilter<"DeviceToken"> | string
    org_id?: UuidNullableFilter<"DeviceToken"> | string | null
    type?: StringFilter<"DeviceToken"> | string
    token?: StringFilter<"DeviceToken"> | string
    created_at?: DateTimeFilter<"DeviceToken"> | Date | string
  }, "id" | "user_id_token">

  export type DeviceTokenOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    org_id?: SortOrderInput | SortOrder
    type?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    _count?: DeviceTokenCountOrderByAggregateInput
    _max?: DeviceTokenMaxOrderByAggregateInput
    _min?: DeviceTokenMinOrderByAggregateInput
  }

  export type DeviceTokenScalarWhereWithAggregatesInput = {
    AND?: DeviceTokenScalarWhereWithAggregatesInput | DeviceTokenScalarWhereWithAggregatesInput[]
    OR?: DeviceTokenScalarWhereWithAggregatesInput[]
    NOT?: DeviceTokenScalarWhereWithAggregatesInput | DeviceTokenScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"DeviceToken"> | string
    user_id?: StringWithAggregatesFilter<"DeviceToken"> | string
    org_id?: UuidNullableWithAggregatesFilter<"DeviceToken"> | string | null
    type?: StringWithAggregatesFilter<"DeviceToken"> | string
    token?: StringWithAggregatesFilter<"DeviceToken"> | string
    created_at?: DateTimeWithAggregatesFilter<"DeviceToken"> | Date | string
  }

  export type NotificationSettingWhereInput = {
    AND?: NotificationSettingWhereInput | NotificationSettingWhereInput[]
    OR?: NotificationSettingWhereInput[]
    NOT?: NotificationSettingWhereInput | NotificationSettingWhereInput[]
    id?: UuidFilter<"NotificationSetting"> | string
    org_id?: UuidFilter<"NotificationSetting"> | string
    email_enabled?: BoolFilter<"NotificationSetting"> | boolean
    sms_enabled?: BoolFilter<"NotificationSetting"> | boolean
    push_enabled?: BoolFilter<"NotificationSetting"> | boolean
    settings?: JsonFilter<"NotificationSetting">
    updated_at?: DateTimeFilter<"NotificationSetting"> | Date | string
  }

  export type NotificationSettingOrderByWithRelationInput = {
    id?: SortOrder
    org_id?: SortOrder
    email_enabled?: SortOrder
    sms_enabled?: SortOrder
    push_enabled?: SortOrder
    settings?: SortOrder
    updated_at?: SortOrder
  }

  export type NotificationSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    org_id?: string
    AND?: NotificationSettingWhereInput | NotificationSettingWhereInput[]
    OR?: NotificationSettingWhereInput[]
    NOT?: NotificationSettingWhereInput | NotificationSettingWhereInput[]
    email_enabled?: BoolFilter<"NotificationSetting"> | boolean
    sms_enabled?: BoolFilter<"NotificationSetting"> | boolean
    push_enabled?: BoolFilter<"NotificationSetting"> | boolean
    settings?: JsonFilter<"NotificationSetting">
    updated_at?: DateTimeFilter<"NotificationSetting"> | Date | string
  }, "id" | "org_id">

  export type NotificationSettingOrderByWithAggregationInput = {
    id?: SortOrder
    org_id?: SortOrder
    email_enabled?: SortOrder
    sms_enabled?: SortOrder
    push_enabled?: SortOrder
    settings?: SortOrder
    updated_at?: SortOrder
    _count?: NotificationSettingCountOrderByAggregateInput
    _max?: NotificationSettingMaxOrderByAggregateInput
    _min?: NotificationSettingMinOrderByAggregateInput
  }

  export type NotificationSettingScalarWhereWithAggregatesInput = {
    AND?: NotificationSettingScalarWhereWithAggregatesInput | NotificationSettingScalarWhereWithAggregatesInput[]
    OR?: NotificationSettingScalarWhereWithAggregatesInput[]
    NOT?: NotificationSettingScalarWhereWithAggregatesInput | NotificationSettingScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"NotificationSetting"> | string
    org_id?: UuidWithAggregatesFilter<"NotificationSetting"> | string
    email_enabled?: BoolWithAggregatesFilter<"NotificationSetting"> | boolean
    sms_enabled?: BoolWithAggregatesFilter<"NotificationSetting"> | boolean
    push_enabled?: BoolWithAggregatesFilter<"NotificationSetting"> | boolean
    settings?: JsonWithAggregatesFilter<"NotificationSetting">
    updated_at?: DateTimeWithAggregatesFilter<"NotificationSetting"> | Date | string
  }

  export type ContactPhoneVerificationWhereInput = {
    AND?: ContactPhoneVerificationWhereInput | ContactPhoneVerificationWhereInput[]
    OR?: ContactPhoneVerificationWhereInput[]
    NOT?: ContactPhoneVerificationWhereInput | ContactPhoneVerificationWhereInput[]
    id?: UuidFilter<"ContactPhoneVerification"> | string
    orgId?: UuidNullableFilter<"ContactPhoneVerification"> | string | null
    userRef?: StringNullableFilter<"ContactPhoneVerification"> | string | null
    phoneNumber?: StringFilter<"ContactPhoneVerification"> | string
    verificationCode?: StringFilter<"ContactPhoneVerification"> | string
    source?: StringNullableFilter<"ContactPhoneVerification"> | string | null
    status?: StringFilter<"ContactPhoneVerification"> | string
    expiresAt?: DateTimeFilter<"ContactPhoneVerification"> | Date | string
    verifiedAt?: DateTimeNullableFilter<"ContactPhoneVerification"> | Date | string | null
    metadata?: JsonFilter<"ContactPhoneVerification">
    createdAt?: DateTimeFilter<"ContactPhoneVerification"> | Date | string
    updatedAt?: DateTimeFilter<"ContactPhoneVerification"> | Date | string
  }

  export type ContactPhoneVerificationOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrderInput | SortOrder
    userRef?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    verificationCode?: SortOrder
    source?: SortOrderInput | SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactPhoneVerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactPhoneVerificationWhereInput | ContactPhoneVerificationWhereInput[]
    OR?: ContactPhoneVerificationWhereInput[]
    NOT?: ContactPhoneVerificationWhereInput | ContactPhoneVerificationWhereInput[]
    orgId?: UuidNullableFilter<"ContactPhoneVerification"> | string | null
    userRef?: StringNullableFilter<"ContactPhoneVerification"> | string | null
    phoneNumber?: StringFilter<"ContactPhoneVerification"> | string
    verificationCode?: StringFilter<"ContactPhoneVerification"> | string
    source?: StringNullableFilter<"ContactPhoneVerification"> | string | null
    status?: StringFilter<"ContactPhoneVerification"> | string
    expiresAt?: DateTimeFilter<"ContactPhoneVerification"> | Date | string
    verifiedAt?: DateTimeNullableFilter<"ContactPhoneVerification"> | Date | string | null
    metadata?: JsonFilter<"ContactPhoneVerification">
    createdAt?: DateTimeFilter<"ContactPhoneVerification"> | Date | string
    updatedAt?: DateTimeFilter<"ContactPhoneVerification"> | Date | string
  }, "id">

  export type ContactPhoneVerificationOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrderInput | SortOrder
    userRef?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    verificationCode?: SortOrder
    source?: SortOrderInput | SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactPhoneVerificationCountOrderByAggregateInput
    _max?: ContactPhoneVerificationMaxOrderByAggregateInput
    _min?: ContactPhoneVerificationMinOrderByAggregateInput
  }

  export type ContactPhoneVerificationScalarWhereWithAggregatesInput = {
    AND?: ContactPhoneVerificationScalarWhereWithAggregatesInput | ContactPhoneVerificationScalarWhereWithAggregatesInput[]
    OR?: ContactPhoneVerificationScalarWhereWithAggregatesInput[]
    NOT?: ContactPhoneVerificationScalarWhereWithAggregatesInput | ContactPhoneVerificationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ContactPhoneVerification"> | string
    orgId?: UuidNullableWithAggregatesFilter<"ContactPhoneVerification"> | string | null
    userRef?: StringNullableWithAggregatesFilter<"ContactPhoneVerification"> | string | null
    phoneNumber?: StringWithAggregatesFilter<"ContactPhoneVerification"> | string
    verificationCode?: StringWithAggregatesFilter<"ContactPhoneVerification"> | string
    source?: StringNullableWithAggregatesFilter<"ContactPhoneVerification"> | string | null
    status?: StringWithAggregatesFilter<"ContactPhoneVerification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"ContactPhoneVerification"> | Date | string
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"ContactPhoneVerification"> | Date | string | null
    metadata?: JsonWithAggregatesFilter<"ContactPhoneVerification">
    createdAt?: DateTimeWithAggregatesFilter<"ContactPhoneVerification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContactPhoneVerification"> | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    org_id: string
    user_id: string
    type: string
    category?: string | null
    title?: string | null
    body?: string | null
    is_seen?: boolean
    is_read?: boolean
    is_archived?: boolean
    seen_at?: Date | string | null
    archived_at?: Date | string | null
    ref_id?: string | null
    ref_type?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    org_id: string
    user_id: string
    type: string
    category?: string | null
    title?: string | null
    body?: string | null
    is_seen?: boolean
    is_read?: boolean
    is_archived?: boolean
    seen_at?: Date | string | null
    archived_at?: Date | string | null
    ref_id?: string | null
    ref_type?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    is_seen?: BoolFieldUpdateOperationsInput | boolean
    is_read?: BoolFieldUpdateOperationsInput | boolean
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    seen_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    archived_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ref_id?: NullableStringFieldUpdateOperationsInput | string | null
    ref_type?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    is_seen?: BoolFieldUpdateOperationsInput | boolean
    is_read?: BoolFieldUpdateOperationsInput | boolean
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    seen_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    archived_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ref_id?: NullableStringFieldUpdateOperationsInput | string | null
    ref_type?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    org_id: string
    user_id: string
    type: string
    category?: string | null
    title?: string | null
    body?: string | null
    is_seen?: boolean
    is_read?: boolean
    is_archived?: boolean
    seen_at?: Date | string | null
    archived_at?: Date | string | null
    ref_id?: string | null
    ref_type?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    is_seen?: BoolFieldUpdateOperationsInput | boolean
    is_read?: BoolFieldUpdateOperationsInput | boolean
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    seen_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    archived_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ref_id?: NullableStringFieldUpdateOperationsInput | string | null
    ref_type?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    is_seen?: BoolFieldUpdateOperationsInput | boolean
    is_read?: BoolFieldUpdateOperationsInput | boolean
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    seen_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    archived_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ref_id?: NullableStringFieldUpdateOperationsInput | string | null
    ref_type?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailMessageCreateInput = {
    id?: string
    org_id: string
    created_by: string
    subject?: string | null
    body?: string | null
    to?: EmailMessageCreatetoInput | string[]
    cc?: EmailMessageCreateccInput | string[]
    bcc?: EmailMessageCreatebccInput | string[]
    from_email?: string | null
    from_name?: string | null
    is_sent?: boolean
    sent_at?: Date | string | null
    is_deleted?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EmailMessageUncheckedCreateInput = {
    id?: string
    org_id: string
    created_by: string
    subject?: string | null
    body?: string | null
    to?: EmailMessageCreatetoInput | string[]
    cc?: EmailMessageCreateccInput | string[]
    bcc?: EmailMessageCreatebccInput | string[]
    from_email?: string | null
    from_name?: string | null
    is_sent?: boolean
    sent_at?: Date | string | null
    is_deleted?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EmailMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    to?: EmailMessageUpdatetoInput | string[]
    cc?: EmailMessageUpdateccInput | string[]
    bcc?: EmailMessageUpdatebccInput | string[]
    from_email?: NullableStringFieldUpdateOperationsInput | string | null
    from_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_sent?: BoolFieldUpdateOperationsInput | boolean
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    to?: EmailMessageUpdatetoInput | string[]
    cc?: EmailMessageUpdateccInput | string[]
    bcc?: EmailMessageUpdatebccInput | string[]
    from_email?: NullableStringFieldUpdateOperationsInput | string | null
    from_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_sent?: BoolFieldUpdateOperationsInput | boolean
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailMessageCreateManyInput = {
    id?: string
    org_id: string
    created_by: string
    subject?: string | null
    body?: string | null
    to?: EmailMessageCreatetoInput | string[]
    cc?: EmailMessageCreateccInput | string[]
    bcc?: EmailMessageCreatebccInput | string[]
    from_email?: string | null
    from_name?: string | null
    is_sent?: boolean
    sent_at?: Date | string | null
    is_deleted?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EmailMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    to?: EmailMessageUpdatetoInput | string[]
    cc?: EmailMessageUpdateccInput | string[]
    bcc?: EmailMessageUpdatebccInput | string[]
    from_email?: NullableStringFieldUpdateOperationsInput | string | null
    from_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_sent?: BoolFieldUpdateOperationsInput | boolean
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    to?: EmailMessageUpdatetoInput | string[]
    cc?: EmailMessageUpdateccInput | string[]
    bcc?: EmailMessageUpdatebccInput | string[]
    from_email?: NullableStringFieldUpdateOperationsInput | string | null
    from_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_sent?: BoolFieldUpdateOperationsInput | boolean
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailCampaignCreateInput = {
    id?: string
    org_id: string
    created_by: string
    series_id?: string
    name: string
    subject: string
    body: string
    status?: string
    scheduled_at?: Date | string | null
    sent_at?: Date | string | null
    is_deleted?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EmailCampaignUncheckedCreateInput = {
    id?: string
    org_id: string
    created_by: string
    series_id?: string
    name: string
    subject: string
    body: string
    status?: string
    scheduled_at?: Date | string | null
    sent_at?: Date | string | null
    is_deleted?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EmailCampaignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    series_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailCampaignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    series_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailCampaignCreateManyInput = {
    id?: string
    org_id: string
    created_by: string
    series_id?: string
    name: string
    subject: string
    body: string
    status?: string
    scheduled_at?: Date | string | null
    sent_at?: Date | string | null
    is_deleted?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EmailCampaignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    series_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailCampaignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    series_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmsMessageCreateInput = {
    id?: string
    org_id: string
    created_by: string
    to: string
    body: string
    status?: string
    twilio_sid?: string | null
    is_deleted?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SmsMessageUncheckedCreateInput = {
    id?: string
    org_id: string
    created_by: string
    to: string
    body: string
    status?: string
    twilio_sid?: string | null
    is_deleted?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SmsMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    twilio_sid?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmsMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    twilio_sid?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmsMessageCreateManyInput = {
    id?: string
    org_id: string
    created_by: string
    to: string
    body: string
    status?: string
    twilio_sid?: string | null
    is_deleted?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SmsMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    twilio_sid?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmsMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    twilio_sid?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceTokenCreateInput = {
    id?: string
    user_id: string
    org_id?: string | null
    type: string
    token: string
    created_at?: Date | string
  }

  export type DeviceTokenUncheckedCreateInput = {
    id?: string
    user_id: string
    org_id?: string | null
    type: string
    token: string
    created_at?: Date | string
  }

  export type DeviceTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceTokenCreateManyInput = {
    id?: string
    user_id: string
    org_id?: string | null
    type: string
    token: string
    created_at?: Date | string
  }

  export type DeviceTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSettingCreateInput = {
    id?: string
    org_id: string
    email_enabled?: boolean
    sms_enabled?: boolean
    push_enabled?: boolean
    settings?: JsonNullValueInput | InputJsonValue
    updated_at?: Date | string
  }

  export type NotificationSettingUncheckedCreateInput = {
    id?: string
    org_id: string
    email_enabled?: boolean
    sms_enabled?: boolean
    push_enabled?: boolean
    settings?: JsonNullValueInput | InputJsonValue
    updated_at?: Date | string
  }

  export type NotificationSettingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    email_enabled?: BoolFieldUpdateOperationsInput | boolean
    sms_enabled?: BoolFieldUpdateOperationsInput | boolean
    push_enabled?: BoolFieldUpdateOperationsInput | boolean
    settings?: JsonNullValueInput | InputJsonValue
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSettingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    email_enabled?: BoolFieldUpdateOperationsInput | boolean
    sms_enabled?: BoolFieldUpdateOperationsInput | boolean
    push_enabled?: BoolFieldUpdateOperationsInput | boolean
    settings?: JsonNullValueInput | InputJsonValue
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSettingCreateManyInput = {
    id?: string
    org_id: string
    email_enabled?: boolean
    sms_enabled?: boolean
    push_enabled?: boolean
    settings?: JsonNullValueInput | InputJsonValue
    updated_at?: Date | string
  }

  export type NotificationSettingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    email_enabled?: BoolFieldUpdateOperationsInput | boolean
    sms_enabled?: BoolFieldUpdateOperationsInput | boolean
    push_enabled?: BoolFieldUpdateOperationsInput | boolean
    settings?: JsonNullValueInput | InputJsonValue
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSettingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    email_enabled?: BoolFieldUpdateOperationsInput | boolean
    sms_enabled?: BoolFieldUpdateOperationsInput | boolean
    push_enabled?: BoolFieldUpdateOperationsInput | boolean
    settings?: JsonNullValueInput | InputJsonValue
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactPhoneVerificationCreateInput = {
    id?: string
    orgId?: string | null
    userRef?: string | null
    phoneNumber: string
    verificationCode: string
    source?: string | null
    status?: string
    expiresAt: Date | string
    verifiedAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactPhoneVerificationUncheckedCreateInput = {
    id?: string
    orgId?: string | null
    userRef?: string | null
    phoneNumber: string
    verificationCode: string
    source?: string | null
    status?: string
    expiresAt: Date | string
    verifiedAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactPhoneVerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    userRef?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactPhoneVerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    userRef?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactPhoneVerificationCreateManyInput = {
    id?: string
    orgId?: string | null
    userRef?: string | null
    phoneNumber: string
    verificationCode: string
    source?: string | null
    status?: string
    expiresAt: Date | string
    verifiedAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactPhoneVerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    userRef?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactPhoneVerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    userRef?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    title?: SortOrder
    body?: SortOrder
    is_seen?: SortOrder
    is_read?: SortOrder
    is_archived?: SortOrder
    seen_at?: SortOrder
    archived_at?: SortOrder
    ref_id?: SortOrder
    ref_type?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    title?: SortOrder
    body?: SortOrder
    is_seen?: SortOrder
    is_read?: SortOrder
    is_archived?: SortOrder
    seen_at?: SortOrder
    archived_at?: SortOrder
    ref_id?: SortOrder
    ref_type?: SortOrder
    created_at?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    title?: SortOrder
    body?: SortOrder
    is_seen?: SortOrder
    is_read?: SortOrder
    is_archived?: SortOrder
    seen_at?: SortOrder
    archived_at?: SortOrder
    ref_id?: SortOrder
    ref_type?: SortOrder
    created_at?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EmailMessageCountOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    to?: SortOrder
    cc?: SortOrder
    bcc?: SortOrder
    from_email?: SortOrder
    from_name?: SortOrder
    is_sent?: SortOrder
    sent_at?: SortOrder
    is_deleted?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EmailMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    from_email?: SortOrder
    from_name?: SortOrder
    is_sent?: SortOrder
    sent_at?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EmailMessageMinOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    from_email?: SortOrder
    from_name?: SortOrder
    is_sent?: SortOrder
    sent_at?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EmailCampaignCountOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by?: SortOrder
    series_id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    scheduled_at?: SortOrder
    sent_at?: SortOrder
    is_deleted?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EmailCampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by?: SortOrder
    series_id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    scheduled_at?: SortOrder
    sent_at?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EmailCampaignMinOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by?: SortOrder
    series_id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    scheduled_at?: SortOrder
    sent_at?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SmsMessageCountOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by?: SortOrder
    to?: SortOrder
    body?: SortOrder
    status?: SortOrder
    twilio_sid?: SortOrder
    is_deleted?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SmsMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by?: SortOrder
    to?: SortOrder
    body?: SortOrder
    status?: SortOrder
    twilio_sid?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SmsMessageMinOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by?: SortOrder
    to?: SortOrder
    body?: SortOrder
    status?: SortOrder
    twilio_sid?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type DeviceTokenUser_idTokenCompoundUniqueInput = {
    user_id: string
    token: string
  }

  export type DeviceTokenCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    org_id?: SortOrder
    type?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
  }

  export type DeviceTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    org_id?: SortOrder
    type?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
  }

  export type DeviceTokenMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    org_id?: SortOrder
    type?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
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

  export type NotificationSettingCountOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    email_enabled?: SortOrder
    sms_enabled?: SortOrder
    push_enabled?: SortOrder
    settings?: SortOrder
    updated_at?: SortOrder
  }

  export type NotificationSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    email_enabled?: SortOrder
    sms_enabled?: SortOrder
    push_enabled?: SortOrder
    updated_at?: SortOrder
  }

  export type NotificationSettingMinOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    email_enabled?: SortOrder
    sms_enabled?: SortOrder
    push_enabled?: SortOrder
    updated_at?: SortOrder
  }

  export type ContactPhoneVerificationCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    userRef?: SortOrder
    phoneNumber?: SortOrder
    verificationCode?: SortOrder
    source?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    verifiedAt?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactPhoneVerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    userRef?: SortOrder
    phoneNumber?: SortOrder
    verificationCode?: SortOrder
    source?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactPhoneVerificationMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    userRef?: SortOrder
    phoneNumber?: SortOrder
    verificationCode?: SortOrder
    source?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EmailMessageCreatetoInput = {
    set: string[]
  }

  export type EmailMessageCreateccInput = {
    set: string[]
  }

  export type EmailMessageCreatebccInput = {
    set: string[]
  }

  export type EmailMessageUpdatetoInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EmailMessageUpdateccInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EmailMessageUpdatebccInput = {
    set?: string[]
    push?: string | string[]
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