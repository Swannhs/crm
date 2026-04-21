
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
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>
/**
 * Model EmailMessage
 * 
 */
export type EmailMessage = $Result.DefaultSelection<Prisma.$EmailMessagePayload>
/**
 * Model Subscriber
 * 
 */
export type Subscriber = $Result.DefaultSelection<Prisma.$SubscriberPayload>
/**
 * Model Automation
 * 
 */
export type Automation = $Result.DefaultSelection<Prisma.$AutomationPayload>
/**
 * Model OptinForm
 * 
 */
export type OptinForm = $Result.DefaultSelection<Prisma.$OptinFormPayload>
/**
 * Model OmniBroadcast
 * 
 */
export type OmniBroadcast = $Result.DefaultSelection<Prisma.$OmniBroadcastPayload>
/**
 * Model OmniBroadcastLog
 * 
 */
export type OmniBroadcastLog = $Result.DefaultSelection<Prisma.$OmniBroadcastLogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Campaigns
 * const campaigns = await prisma.campaign.findMany()
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
   * // Fetch zero or more Campaigns
   * const campaigns = await prisma.campaign.findMany()
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
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.subscriber`: Exposes CRUD operations for the **Subscriber** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscribers
    * const subscribers = await prisma.subscriber.findMany()
    * ```
    */
  get subscriber(): Prisma.SubscriberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.automation`: Exposes CRUD operations for the **Automation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Automations
    * const automations = await prisma.automation.findMany()
    * ```
    */
  get automation(): Prisma.AutomationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.optinForm`: Exposes CRUD operations for the **OptinForm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OptinForms
    * const optinForms = await prisma.optinForm.findMany()
    * ```
    */
  get optinForm(): Prisma.OptinFormDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.omniBroadcast`: Exposes CRUD operations for the **OmniBroadcast** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OmniBroadcasts
    * const omniBroadcasts = await prisma.omniBroadcast.findMany()
    * ```
    */
  get omniBroadcast(): Prisma.OmniBroadcastDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.omniBroadcastLog`: Exposes CRUD operations for the **OmniBroadcastLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OmniBroadcastLogs
    * const omniBroadcastLogs = await prisma.omniBroadcastLog.findMany()
    * ```
    */
  get omniBroadcastLog(): Prisma.OmniBroadcastLogDelegate<ExtArgs, ClientOptions>;
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
    Campaign: 'Campaign',
    EmailMessage: 'EmailMessage',
    Subscriber: 'Subscriber',
    Automation: 'Automation',
    OptinForm: 'OptinForm',
    OmniBroadcast: 'OmniBroadcast',
    OmniBroadcastLog: 'OmniBroadcastLog'
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
      modelProps: "campaign" | "emailMessage" | "subscriber" | "automation" | "optinForm" | "omniBroadcast" | "omniBroadcastLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
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
      Subscriber: {
        payload: Prisma.$SubscriberPayload<ExtArgs>
        fields: Prisma.SubscriberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>
          }
          findFirst: {
            args: Prisma.SubscriberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>
          }
          findMany: {
            args: Prisma.SubscriberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>[]
          }
          create: {
            args: Prisma.SubscriberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>
          }
          createMany: {
            args: Prisma.SubscriberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>[]
          }
          delete: {
            args: Prisma.SubscriberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>
          }
          update: {
            args: Prisma.SubscriberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>
          }
          deleteMany: {
            args: Prisma.SubscriberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>[]
          }
          upsert: {
            args: Prisma.SubscriberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>
          }
          aggregate: {
            args: Prisma.SubscriberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriber>
          }
          groupBy: {
            args: Prisma.SubscriberGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriberGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriberCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriberCountAggregateOutputType> | number
          }
        }
      }
      Automation: {
        payload: Prisma.$AutomationPayload<ExtArgs>
        fields: Prisma.AutomationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AutomationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AutomationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>
          }
          findFirst: {
            args: Prisma.AutomationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AutomationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>
          }
          findMany: {
            args: Prisma.AutomationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>[]
          }
          create: {
            args: Prisma.AutomationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>
          }
          createMany: {
            args: Prisma.AutomationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AutomationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>[]
          }
          delete: {
            args: Prisma.AutomationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>
          }
          update: {
            args: Prisma.AutomationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>
          }
          deleteMany: {
            args: Prisma.AutomationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AutomationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AutomationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>[]
          }
          upsert: {
            args: Prisma.AutomationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>
          }
          aggregate: {
            args: Prisma.AutomationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAutomation>
          }
          groupBy: {
            args: Prisma.AutomationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutomationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AutomationCountArgs<ExtArgs>
            result: $Utils.Optional<AutomationCountAggregateOutputType> | number
          }
        }
      }
      OptinForm: {
        payload: Prisma.$OptinFormPayload<ExtArgs>
        fields: Prisma.OptinFormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OptinFormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptinFormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OptinFormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptinFormPayload>
          }
          findFirst: {
            args: Prisma.OptinFormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptinFormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OptinFormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptinFormPayload>
          }
          findMany: {
            args: Prisma.OptinFormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptinFormPayload>[]
          }
          create: {
            args: Prisma.OptinFormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptinFormPayload>
          }
          createMany: {
            args: Prisma.OptinFormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OptinFormCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptinFormPayload>[]
          }
          delete: {
            args: Prisma.OptinFormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptinFormPayload>
          }
          update: {
            args: Prisma.OptinFormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptinFormPayload>
          }
          deleteMany: {
            args: Prisma.OptinFormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OptinFormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OptinFormUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptinFormPayload>[]
          }
          upsert: {
            args: Prisma.OptinFormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptinFormPayload>
          }
          aggregate: {
            args: Prisma.OptinFormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOptinForm>
          }
          groupBy: {
            args: Prisma.OptinFormGroupByArgs<ExtArgs>
            result: $Utils.Optional<OptinFormGroupByOutputType>[]
          }
          count: {
            args: Prisma.OptinFormCountArgs<ExtArgs>
            result: $Utils.Optional<OptinFormCountAggregateOutputType> | number
          }
        }
      }
      OmniBroadcast: {
        payload: Prisma.$OmniBroadcastPayload<ExtArgs>
        fields: Prisma.OmniBroadcastFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OmniBroadcastFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OmniBroadcastPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OmniBroadcastFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OmniBroadcastPayload>
          }
          findFirst: {
            args: Prisma.OmniBroadcastFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OmniBroadcastPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OmniBroadcastFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OmniBroadcastPayload>
          }
          findMany: {
            args: Prisma.OmniBroadcastFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OmniBroadcastPayload>[]
          }
          create: {
            args: Prisma.OmniBroadcastCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OmniBroadcastPayload>
          }
          createMany: {
            args: Prisma.OmniBroadcastCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OmniBroadcastCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OmniBroadcastPayload>[]
          }
          delete: {
            args: Prisma.OmniBroadcastDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OmniBroadcastPayload>
          }
          update: {
            args: Prisma.OmniBroadcastUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OmniBroadcastPayload>
          }
          deleteMany: {
            args: Prisma.OmniBroadcastDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OmniBroadcastUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OmniBroadcastUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OmniBroadcastPayload>[]
          }
          upsert: {
            args: Prisma.OmniBroadcastUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OmniBroadcastPayload>
          }
          aggregate: {
            args: Prisma.OmniBroadcastAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOmniBroadcast>
          }
          groupBy: {
            args: Prisma.OmniBroadcastGroupByArgs<ExtArgs>
            result: $Utils.Optional<OmniBroadcastGroupByOutputType>[]
          }
          count: {
            args: Prisma.OmniBroadcastCountArgs<ExtArgs>
            result: $Utils.Optional<OmniBroadcastCountAggregateOutputType> | number
          }
        }
      }
      OmniBroadcastLog: {
        payload: Prisma.$OmniBroadcastLogPayload<ExtArgs>
        fields: Prisma.OmniBroadcastLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OmniBroadcastLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OmniBroadcastLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OmniBroadcastLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OmniBroadcastLogPayload>
          }
          findFirst: {
            args: Prisma.OmniBroadcastLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OmniBroadcastLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OmniBroadcastLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OmniBroadcastLogPayload>
          }
          findMany: {
            args: Prisma.OmniBroadcastLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OmniBroadcastLogPayload>[]
          }
          create: {
            args: Prisma.OmniBroadcastLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OmniBroadcastLogPayload>
          }
          createMany: {
            args: Prisma.OmniBroadcastLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OmniBroadcastLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OmniBroadcastLogPayload>[]
          }
          delete: {
            args: Prisma.OmniBroadcastLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OmniBroadcastLogPayload>
          }
          update: {
            args: Prisma.OmniBroadcastLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OmniBroadcastLogPayload>
          }
          deleteMany: {
            args: Prisma.OmniBroadcastLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OmniBroadcastLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OmniBroadcastLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OmniBroadcastLogPayload>[]
          }
          upsert: {
            args: Prisma.OmniBroadcastLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OmniBroadcastLogPayload>
          }
          aggregate: {
            args: Prisma.OmniBroadcastLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOmniBroadcastLog>
          }
          groupBy: {
            args: Prisma.OmniBroadcastLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<OmniBroadcastLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.OmniBroadcastLogCountArgs<ExtArgs>
            result: $Utils.Optional<OmniBroadcastLogCountAggregateOutputType> | number
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
    campaign?: CampaignOmit
    emailMessage?: EmailMessageOmit
    subscriber?: SubscriberOmit
    automation?: AutomationOmit
    optinForm?: OptinFormOmit
    omniBroadcast?: OmniBroadcastOmit
    omniBroadcastLog?: OmniBroadcastLogOmit
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
   * Count Type CampaignCountOutputType
   */

  export type CampaignCountOutputType = {
    emails: number
  }

  export type CampaignCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emails?: boolean | CampaignCountOutputTypeCountEmailsArgs
  }

  // Custom InputTypes
  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCountOutputType
     */
    select?: CampaignCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountEmailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailMessageWhereInput
  }


  /**
   * Count Type OmniBroadcastCountOutputType
   */

  export type OmniBroadcastCountOutputType = {
    logs: number
  }

  export type OmniBroadcastCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | OmniBroadcastCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * OmniBroadcastCountOutputType without action
   */
  export type OmniBroadcastCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OmniBroadcastCountOutputType
     */
    select?: OmniBroadcastCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OmniBroadcastCountOutputType without action
   */
  export type OmniBroadcastCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OmniBroadcastLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    createdBy: string | null
    name: string | null
    type: string | null
    status: string | null
    subject: string | null
    body: string | null
    scheduledAt: Date | null
    sentAt: Date | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    createdBy: string | null
    name: string | null
    type: string | null
    status: string | null
    subject: string | null
    body: string | null
    scheduledAt: Date | null
    sentAt: Date | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    orgId: number
    createdBy: number
    name: number
    type: number
    status: number
    subject: number
    body: number
    scheduledAt: number
    sentAt: number
    metadata: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CampaignMinAggregateInputType = {
    id?: true
    orgId?: true
    createdBy?: true
    name?: true
    type?: true
    status?: true
    subject?: true
    body?: true
    scheduledAt?: true
    sentAt?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    orgId?: true
    createdBy?: true
    name?: true
    type?: true
    status?: true
    subject?: true
    body?: true
    scheduledAt?: true
    sentAt?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    orgId?: true
    createdBy?: true
    name?: true
    type?: true
    status?: true
    subject?: true
    body?: true
    scheduledAt?: true
    sentAt?: true
    metadata?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    id: string
    orgId: string
    createdBy: string
    name: string
    type: string
    status: string
    subject: string | null
    body: string | null
    scheduledAt: Date | null
    sentAt: Date | null
    metadata: JsonValue
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: CampaignCountAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    createdBy?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    subject?: boolean
    body?: boolean
    scheduledAt?: boolean
    sentAt?: boolean
    metadata?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emails?: boolean | Campaign$emailsArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    createdBy?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    subject?: boolean
    body?: boolean
    scheduledAt?: boolean
    sentAt?: boolean
    metadata?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    createdBy?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    subject?: boolean
    body?: boolean
    scheduledAt?: boolean
    sentAt?: boolean
    metadata?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    id?: boolean
    orgId?: boolean
    createdBy?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    subject?: boolean
    body?: boolean
    scheduledAt?: boolean
    sentAt?: boolean
    metadata?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CampaignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "createdBy" | "name" | "type" | "status" | "subject" | "body" | "scheduledAt" | "sentAt" | "metadata" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["campaign"]>
  export type CampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emails?: boolean | Campaign$emailsArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CampaignIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {
      emails: Prisma.$EmailMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      createdBy: string
      name: string
      type: string
      status: string
      subject: string | null
      body: string | null
      scheduledAt: Date | null
      sentAt: Date | null
      metadata: Prisma.JsonValue
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }

  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignFindManyArgs>(args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
     */
    create<T extends CampaignCreateArgs>(args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreateManyArgs>(args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
     */
    delete<T extends CampaignDeleteArgs>(args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateArgs>(args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns and returns the data updated in the database.
     * @param {CampaignUpdateManyAndReturnArgs} args - Arguments to update many Campaigns.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.updateManyAndReturn({
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
    updateManyAndReturn<T extends CampaignUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
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
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emails<T extends Campaign$emailsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$emailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Campaign model
   */
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'String'>
    readonly orgId: FieldRef<"Campaign", 'String'>
    readonly createdBy: FieldRef<"Campaign", 'String'>
    readonly name: FieldRef<"Campaign", 'String'>
    readonly type: FieldRef<"Campaign", 'String'>
    readonly status: FieldRef<"Campaign", 'String'>
    readonly subject: FieldRef<"Campaign", 'String'>
    readonly body: FieldRef<"Campaign", 'String'>
    readonly scheduledAt: FieldRef<"Campaign", 'DateTime'>
    readonly sentAt: FieldRef<"Campaign", 'DateTime'>
    readonly metadata: FieldRef<"Campaign", 'Json'>
    readonly isDeleted: FieldRef<"Campaign", 'Boolean'>
    readonly createdAt: FieldRef<"Campaign", 'DateTime'>
    readonly updatedAt: FieldRef<"Campaign", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign createManyAndReturn
   */
  export type CampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign updateManyAndReturn
   */
  export type CampaignUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to delete.
     */
    limit?: number
  }

  /**
   * Campaign.emails
   */
  export type Campaign$emailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailMessage
     */
    select?: EmailMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailMessage
     */
    omit?: EmailMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailMessageInclude<ExtArgs> | null
    where?: EmailMessageWhereInput
    orderBy?: EmailMessageOrderByWithRelationInput | EmailMessageOrderByWithRelationInput[]
    cursor?: EmailMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailMessageScalarFieldEnum | EmailMessageScalarFieldEnum[]
  }

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
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
    orgId: string | null
    campaignId: string | null
    toEmail: string | null
    subject: string | null
    body: string | null
    status: string | null
    sentAt: Date | null
    openedAt: Date | null
    createdAt: Date | null
  }

  export type EmailMessageMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    campaignId: string | null
    toEmail: string | null
    subject: string | null
    body: string | null
    status: string | null
    sentAt: Date | null
    openedAt: Date | null
    createdAt: Date | null
  }

  export type EmailMessageCountAggregateOutputType = {
    id: number
    orgId: number
    campaignId: number
    toEmail: number
    subject: number
    body: number
    status: number
    sentAt: number
    openedAt: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type EmailMessageMinAggregateInputType = {
    id?: true
    orgId?: true
    campaignId?: true
    toEmail?: true
    subject?: true
    body?: true
    status?: true
    sentAt?: true
    openedAt?: true
    createdAt?: true
  }

  export type EmailMessageMaxAggregateInputType = {
    id?: true
    orgId?: true
    campaignId?: true
    toEmail?: true
    subject?: true
    body?: true
    status?: true
    sentAt?: true
    openedAt?: true
    createdAt?: true
  }

  export type EmailMessageCountAggregateInputType = {
    id?: true
    orgId?: true
    campaignId?: true
    toEmail?: true
    subject?: true
    body?: true
    status?: true
    sentAt?: true
    openedAt?: true
    metadata?: true
    createdAt?: true
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
    orgId: string
    campaignId: string | null
    toEmail: string
    subject: string
    body: string
    status: string
    sentAt: Date | null
    openedAt: Date | null
    metadata: JsonValue
    createdAt: Date
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
    orgId?: boolean
    campaignId?: boolean
    toEmail?: boolean
    subject?: boolean
    body?: boolean
    status?: boolean
    sentAt?: boolean
    openedAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    campaign?: boolean | EmailMessage$campaignArgs<ExtArgs>
  }, ExtArgs["result"]["emailMessage"]>

  export type EmailMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    campaignId?: boolean
    toEmail?: boolean
    subject?: boolean
    body?: boolean
    status?: boolean
    sentAt?: boolean
    openedAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    campaign?: boolean | EmailMessage$campaignArgs<ExtArgs>
  }, ExtArgs["result"]["emailMessage"]>

  export type EmailMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    campaignId?: boolean
    toEmail?: boolean
    subject?: boolean
    body?: boolean
    status?: boolean
    sentAt?: boolean
    openedAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    campaign?: boolean | EmailMessage$campaignArgs<ExtArgs>
  }, ExtArgs["result"]["emailMessage"]>

  export type EmailMessageSelectScalar = {
    id?: boolean
    orgId?: boolean
    campaignId?: boolean
    toEmail?: boolean
    subject?: boolean
    body?: boolean
    status?: boolean
    sentAt?: boolean
    openedAt?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type EmailMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "campaignId" | "toEmail" | "subject" | "body" | "status" | "sentAt" | "openedAt" | "metadata" | "createdAt", ExtArgs["result"]["emailMessage"]>
  export type EmailMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | EmailMessage$campaignArgs<ExtArgs>
  }
  export type EmailMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | EmailMessage$campaignArgs<ExtArgs>
  }
  export type EmailMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | EmailMessage$campaignArgs<ExtArgs>
  }

  export type $EmailMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailMessage"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      campaignId: string | null
      toEmail: string
      subject: string
      body: string
      status: string
      sentAt: Date | null
      openedAt: Date | null
      metadata: Prisma.JsonValue
      createdAt: Date
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
    campaign<T extends EmailMessage$campaignArgs<ExtArgs> = {}>(args?: Subset<T, EmailMessage$campaignArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly orgId: FieldRef<"EmailMessage", 'String'>
    readonly campaignId: FieldRef<"EmailMessage", 'String'>
    readonly toEmail: FieldRef<"EmailMessage", 'String'>
    readonly subject: FieldRef<"EmailMessage", 'String'>
    readonly body: FieldRef<"EmailMessage", 'String'>
    readonly status: FieldRef<"EmailMessage", 'String'>
    readonly sentAt: FieldRef<"EmailMessage", 'DateTime'>
    readonly openedAt: FieldRef<"EmailMessage", 'DateTime'>
    readonly metadata: FieldRef<"EmailMessage", 'Json'>
    readonly createdAt: FieldRef<"EmailMessage", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: EmailMessageInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: EmailMessageInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: EmailMessageInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: EmailMessageInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: EmailMessageInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: EmailMessageInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailMessageIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: EmailMessageInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailMessageIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: EmailMessageInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: EmailMessageInclude<ExtArgs> | null
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
   * EmailMessage.campaign
   */
  export type EmailMessage$campaignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailMessageInclude<ExtArgs> | null
  }


  /**
   * Model Subscriber
   */

  export type AggregateSubscriber = {
    _count: SubscriberCountAggregateOutputType | null
    _min: SubscriberMinAggregateOutputType | null
    _max: SubscriberMaxAggregateOutputType | null
  }

  export type SubscriberMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    source: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriberMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    source: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriberCountAggregateOutputType = {
    id: number
    orgId: number
    email: number
    firstName: number
    lastName: number
    phone: number
    source: number
    status: number
    tags: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriberMinAggregateInputType = {
    id?: true
    orgId?: true
    email?: true
    firstName?: true
    lastName?: true
    phone?: true
    source?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriberMaxAggregateInputType = {
    id?: true
    orgId?: true
    email?: true
    firstName?: true
    lastName?: true
    phone?: true
    source?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriberCountAggregateInputType = {
    id?: true
    orgId?: true
    email?: true
    firstName?: true
    lastName?: true
    phone?: true
    source?: true
    status?: true
    tags?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriber to aggregate.
     */
    where?: SubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscribers to fetch.
     */
    orderBy?: SubscriberOrderByWithRelationInput | SubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscribers
    **/
    _count?: true | SubscriberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriberMaxAggregateInputType
  }

  export type GetSubscriberAggregateType<T extends SubscriberAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriber]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriber[P]>
      : GetScalarType<T[P], AggregateSubscriber[P]>
  }




  export type SubscriberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriberWhereInput
    orderBy?: SubscriberOrderByWithAggregationInput | SubscriberOrderByWithAggregationInput[]
    by: SubscriberScalarFieldEnum[] | SubscriberScalarFieldEnum
    having?: SubscriberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriberCountAggregateInputType | true
    _min?: SubscriberMinAggregateInputType
    _max?: SubscriberMaxAggregateInputType
  }

  export type SubscriberGroupByOutputType = {
    id: string
    orgId: string
    email: string
    firstName: string | null
    lastName: string | null
    phone: string | null
    source: string | null
    status: string
    tags: JsonValue
    metadata: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: SubscriberCountAggregateOutputType | null
    _min: SubscriberMinAggregateOutputType | null
    _max: SubscriberMaxAggregateOutputType | null
  }

  type GetSubscriberGroupByPayload<T extends SubscriberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriberGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriberGroupByOutputType[P]>
        }
      >
    >


  export type SubscriberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    source?: boolean
    status?: boolean
    tags?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subscriber"]>

  export type SubscriberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    source?: boolean
    status?: boolean
    tags?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subscriber"]>

  export type SubscriberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    source?: boolean
    status?: boolean
    tags?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subscriber"]>

  export type SubscriberSelectScalar = {
    id?: boolean
    orgId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    source?: boolean
    status?: boolean
    tags?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "email" | "firstName" | "lastName" | "phone" | "source" | "status" | "tags" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["subscriber"]>

  export type $SubscriberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscriber"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      email: string
      firstName: string | null
      lastName: string | null
      phone: string | null
      source: string | null
      status: string
      tags: Prisma.JsonValue
      metadata: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscriber"]>
    composites: {}
  }

  type SubscriberGetPayload<S extends boolean | null | undefined | SubscriberDefaultArgs> = $Result.GetResult<Prisma.$SubscriberPayload, S>

  type SubscriberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriberCountAggregateInputType | true
    }

  export interface SubscriberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscriber'], meta: { name: 'Subscriber' } }
    /**
     * Find zero or one Subscriber that matches the filter.
     * @param {SubscriberFindUniqueArgs} args - Arguments to find a Subscriber
     * @example
     * // Get one Subscriber
     * const subscriber = await prisma.subscriber.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriberFindUniqueArgs>(args: SelectSubset<T, SubscriberFindUniqueArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscriber that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriberFindUniqueOrThrowArgs} args - Arguments to find a Subscriber
     * @example
     * // Get one Subscriber
     * const subscriber = await prisma.subscriber.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriberFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscriber that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberFindFirstArgs} args - Arguments to find a Subscriber
     * @example
     * // Get one Subscriber
     * const subscriber = await prisma.subscriber.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriberFindFirstArgs>(args?: SelectSubset<T, SubscriberFindFirstArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscriber that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberFindFirstOrThrowArgs} args - Arguments to find a Subscriber
     * @example
     * // Get one Subscriber
     * const subscriber = await prisma.subscriber.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriberFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriberFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscribers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscribers
     * const subscribers = await prisma.subscriber.findMany()
     * 
     * // Get first 10 Subscribers
     * const subscribers = await prisma.subscriber.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriberWithIdOnly = await prisma.subscriber.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriberFindManyArgs>(args?: SelectSubset<T, SubscriberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscriber.
     * @param {SubscriberCreateArgs} args - Arguments to create a Subscriber.
     * @example
     * // Create one Subscriber
     * const Subscriber = await prisma.subscriber.create({
     *   data: {
     *     // ... data to create a Subscriber
     *   }
     * })
     * 
     */
    create<T extends SubscriberCreateArgs>(args: SelectSubset<T, SubscriberCreateArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscribers.
     * @param {SubscriberCreateManyArgs} args - Arguments to create many Subscribers.
     * @example
     * // Create many Subscribers
     * const subscriber = await prisma.subscriber.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriberCreateManyArgs>(args?: SelectSubset<T, SubscriberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscribers and returns the data saved in the database.
     * @param {SubscriberCreateManyAndReturnArgs} args - Arguments to create many Subscribers.
     * @example
     * // Create many Subscribers
     * const subscriber = await prisma.subscriber.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscribers and only return the `id`
     * const subscriberWithIdOnly = await prisma.subscriber.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriberCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscriber.
     * @param {SubscriberDeleteArgs} args - Arguments to delete one Subscriber.
     * @example
     * // Delete one Subscriber
     * const Subscriber = await prisma.subscriber.delete({
     *   where: {
     *     // ... filter to delete one Subscriber
     *   }
     * })
     * 
     */
    delete<T extends SubscriberDeleteArgs>(args: SelectSubset<T, SubscriberDeleteArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscriber.
     * @param {SubscriberUpdateArgs} args - Arguments to update one Subscriber.
     * @example
     * // Update one Subscriber
     * const subscriber = await prisma.subscriber.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriberUpdateArgs>(args: SelectSubset<T, SubscriberUpdateArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscribers.
     * @param {SubscriberDeleteManyArgs} args - Arguments to filter Subscribers to delete.
     * @example
     * // Delete a few Subscribers
     * const { count } = await prisma.subscriber.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriberDeleteManyArgs>(args?: SelectSubset<T, SubscriberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscribers
     * const subscriber = await prisma.subscriber.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriberUpdateManyArgs>(args: SelectSubset<T, SubscriberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscribers and returns the data updated in the database.
     * @param {SubscriberUpdateManyAndReturnArgs} args - Arguments to update many Subscribers.
     * @example
     * // Update many Subscribers
     * const subscriber = await prisma.subscriber.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscribers and only return the `id`
     * const subscriberWithIdOnly = await prisma.subscriber.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubscriberUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscriber.
     * @param {SubscriberUpsertArgs} args - Arguments to update or create a Subscriber.
     * @example
     * // Update or create a Subscriber
     * const subscriber = await prisma.subscriber.upsert({
     *   create: {
     *     // ... data to create a Subscriber
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscriber we want to update
     *   }
     * })
     */
    upsert<T extends SubscriberUpsertArgs>(args: SelectSubset<T, SubscriberUpsertArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberCountArgs} args - Arguments to filter Subscribers to count.
     * @example
     * // Count the number of Subscribers
     * const count = await prisma.subscriber.count({
     *   where: {
     *     // ... the filter for the Subscribers we want to count
     *   }
     * })
    **/
    count<T extends SubscriberCountArgs>(
      args?: Subset<T, SubscriberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscriber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriberAggregateArgs>(args: Subset<T, SubscriberAggregateArgs>): Prisma.PrismaPromise<GetSubscriberAggregateType<T>>

    /**
     * Group by Subscriber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberGroupByArgs} args - Group by arguments.
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
      T extends SubscriberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriberGroupByArgs['orderBy'] }
        : { orderBy?: SubscriberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscriber model
   */
  readonly fields: SubscriberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscriber.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Subscriber model
   */
  interface SubscriberFieldRefs {
    readonly id: FieldRef<"Subscriber", 'String'>
    readonly orgId: FieldRef<"Subscriber", 'String'>
    readonly email: FieldRef<"Subscriber", 'String'>
    readonly firstName: FieldRef<"Subscriber", 'String'>
    readonly lastName: FieldRef<"Subscriber", 'String'>
    readonly phone: FieldRef<"Subscriber", 'String'>
    readonly source: FieldRef<"Subscriber", 'String'>
    readonly status: FieldRef<"Subscriber", 'String'>
    readonly tags: FieldRef<"Subscriber", 'Json'>
    readonly metadata: FieldRef<"Subscriber", 'Json'>
    readonly createdAt: FieldRef<"Subscriber", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscriber", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscriber findUnique
   */
  export type SubscriberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Filter, which Subscriber to fetch.
     */
    where: SubscriberWhereUniqueInput
  }

  /**
   * Subscriber findUniqueOrThrow
   */
  export type SubscriberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Filter, which Subscriber to fetch.
     */
    where: SubscriberWhereUniqueInput
  }

  /**
   * Subscriber findFirst
   */
  export type SubscriberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Filter, which Subscriber to fetch.
     */
    where?: SubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscribers to fetch.
     */
    orderBy?: SubscriberOrderByWithRelationInput | SubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscribers.
     */
    cursor?: SubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscribers.
     */
    distinct?: SubscriberScalarFieldEnum | SubscriberScalarFieldEnum[]
  }

  /**
   * Subscriber findFirstOrThrow
   */
  export type SubscriberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Filter, which Subscriber to fetch.
     */
    where?: SubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscribers to fetch.
     */
    orderBy?: SubscriberOrderByWithRelationInput | SubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscribers.
     */
    cursor?: SubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscribers.
     */
    distinct?: SubscriberScalarFieldEnum | SubscriberScalarFieldEnum[]
  }

  /**
   * Subscriber findMany
   */
  export type SubscriberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Filter, which Subscribers to fetch.
     */
    where?: SubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscribers to fetch.
     */
    orderBy?: SubscriberOrderByWithRelationInput | SubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscribers.
     */
    cursor?: SubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscribers.
     */
    skip?: number
    distinct?: SubscriberScalarFieldEnum | SubscriberScalarFieldEnum[]
  }

  /**
   * Subscriber create
   */
  export type SubscriberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * The data needed to create a Subscriber.
     */
    data: XOR<SubscriberCreateInput, SubscriberUncheckedCreateInput>
  }

  /**
   * Subscriber createMany
   */
  export type SubscriberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscribers.
     */
    data: SubscriberCreateManyInput | SubscriberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscriber createManyAndReturn
   */
  export type SubscriberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * The data used to create many Subscribers.
     */
    data: SubscriberCreateManyInput | SubscriberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscriber update
   */
  export type SubscriberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * The data needed to update a Subscriber.
     */
    data: XOR<SubscriberUpdateInput, SubscriberUncheckedUpdateInput>
    /**
     * Choose, which Subscriber to update.
     */
    where: SubscriberWhereUniqueInput
  }

  /**
   * Subscriber updateMany
   */
  export type SubscriberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscribers.
     */
    data: XOR<SubscriberUpdateManyMutationInput, SubscriberUncheckedUpdateManyInput>
    /**
     * Filter which Subscribers to update
     */
    where?: SubscriberWhereInput
    /**
     * Limit how many Subscribers to update.
     */
    limit?: number
  }

  /**
   * Subscriber updateManyAndReturn
   */
  export type SubscriberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * The data used to update Subscribers.
     */
    data: XOR<SubscriberUpdateManyMutationInput, SubscriberUncheckedUpdateManyInput>
    /**
     * Filter which Subscribers to update
     */
    where?: SubscriberWhereInput
    /**
     * Limit how many Subscribers to update.
     */
    limit?: number
  }

  /**
   * Subscriber upsert
   */
  export type SubscriberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * The filter to search for the Subscriber to update in case it exists.
     */
    where: SubscriberWhereUniqueInput
    /**
     * In case the Subscriber found by the `where` argument doesn't exist, create a new Subscriber with this data.
     */
    create: XOR<SubscriberCreateInput, SubscriberUncheckedCreateInput>
    /**
     * In case the Subscriber was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriberUpdateInput, SubscriberUncheckedUpdateInput>
  }

  /**
   * Subscriber delete
   */
  export type SubscriberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Filter which Subscriber to delete.
     */
    where: SubscriberWhereUniqueInput
  }

  /**
   * Subscriber deleteMany
   */
  export type SubscriberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscribers to delete
     */
    where?: SubscriberWhereInput
    /**
     * Limit how many Subscribers to delete.
     */
    limit?: number
  }

  /**
   * Subscriber without action
   */
  export type SubscriberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
  }


  /**
   * Model Automation
   */

  export type AggregateAutomation = {
    _count: AutomationCountAggregateOutputType | null
    _avg: AutomationAvgAggregateOutputType | null
    _sum: AutomationSumAggregateOutputType | null
    _min: AutomationMinAggregateOutputType | null
    _max: AutomationMaxAggregateOutputType | null
  }

  export type AutomationAvgAggregateOutputType = {
    runCount: number | null
  }

  export type AutomationSumAggregateOutputType = {
    runCount: number | null
  }

  export type AutomationMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    createdBy: string | null
    name: string | null
    trigger: string | null
    status: string | null
    runCount: number | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AutomationMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    createdBy: string | null
    name: string | null
    trigger: string | null
    status: string | null
    runCount: number | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AutomationCountAggregateOutputType = {
    id: number
    orgId: number
    createdBy: number
    name: number
    trigger: number
    conditions: number
    actions: number
    status: number
    runCount: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AutomationAvgAggregateInputType = {
    runCount?: true
  }

  export type AutomationSumAggregateInputType = {
    runCount?: true
  }

  export type AutomationMinAggregateInputType = {
    id?: true
    orgId?: true
    createdBy?: true
    name?: true
    trigger?: true
    status?: true
    runCount?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AutomationMaxAggregateInputType = {
    id?: true
    orgId?: true
    createdBy?: true
    name?: true
    trigger?: true
    status?: true
    runCount?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AutomationCountAggregateInputType = {
    id?: true
    orgId?: true
    createdBy?: true
    name?: true
    trigger?: true
    conditions?: true
    actions?: true
    status?: true
    runCount?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AutomationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Automation to aggregate.
     */
    where?: AutomationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Automations to fetch.
     */
    orderBy?: AutomationOrderByWithRelationInput | AutomationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AutomationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Automations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Automations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Automations
    **/
    _count?: true | AutomationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AutomationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AutomationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutomationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutomationMaxAggregateInputType
  }

  export type GetAutomationAggregateType<T extends AutomationAggregateArgs> = {
        [P in keyof T & keyof AggregateAutomation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAutomation[P]>
      : GetScalarType<T[P], AggregateAutomation[P]>
  }




  export type AutomationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutomationWhereInput
    orderBy?: AutomationOrderByWithAggregationInput | AutomationOrderByWithAggregationInput[]
    by: AutomationScalarFieldEnum[] | AutomationScalarFieldEnum
    having?: AutomationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutomationCountAggregateInputType | true
    _avg?: AutomationAvgAggregateInputType
    _sum?: AutomationSumAggregateInputType
    _min?: AutomationMinAggregateInputType
    _max?: AutomationMaxAggregateInputType
  }

  export type AutomationGroupByOutputType = {
    id: string
    orgId: string
    createdBy: string
    name: string
    trigger: string
    conditions: JsonValue
    actions: JsonValue
    status: string
    runCount: number
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: AutomationCountAggregateOutputType | null
    _avg: AutomationAvgAggregateOutputType | null
    _sum: AutomationSumAggregateOutputType | null
    _min: AutomationMinAggregateOutputType | null
    _max: AutomationMaxAggregateOutputType | null
  }

  type GetAutomationGroupByPayload<T extends AutomationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutomationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutomationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutomationGroupByOutputType[P]>
            : GetScalarType<T[P], AutomationGroupByOutputType[P]>
        }
      >
    >


  export type AutomationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    createdBy?: boolean
    name?: boolean
    trigger?: boolean
    conditions?: boolean
    actions?: boolean
    status?: boolean
    runCount?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["automation"]>

  export type AutomationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    createdBy?: boolean
    name?: boolean
    trigger?: boolean
    conditions?: boolean
    actions?: boolean
    status?: boolean
    runCount?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["automation"]>

  export type AutomationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    createdBy?: boolean
    name?: boolean
    trigger?: boolean
    conditions?: boolean
    actions?: boolean
    status?: boolean
    runCount?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["automation"]>

  export type AutomationSelectScalar = {
    id?: boolean
    orgId?: boolean
    createdBy?: boolean
    name?: boolean
    trigger?: boolean
    conditions?: boolean
    actions?: boolean
    status?: boolean
    runCount?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AutomationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "createdBy" | "name" | "trigger" | "conditions" | "actions" | "status" | "runCount" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["automation"]>

  export type $AutomationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Automation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      createdBy: string
      name: string
      trigger: string
      conditions: Prisma.JsonValue
      actions: Prisma.JsonValue
      status: string
      runCount: number
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["automation"]>
    composites: {}
  }

  type AutomationGetPayload<S extends boolean | null | undefined | AutomationDefaultArgs> = $Result.GetResult<Prisma.$AutomationPayload, S>

  type AutomationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AutomationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AutomationCountAggregateInputType | true
    }

  export interface AutomationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Automation'], meta: { name: 'Automation' } }
    /**
     * Find zero or one Automation that matches the filter.
     * @param {AutomationFindUniqueArgs} args - Arguments to find a Automation
     * @example
     * // Get one Automation
     * const automation = await prisma.automation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AutomationFindUniqueArgs>(args: SelectSubset<T, AutomationFindUniqueArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Automation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AutomationFindUniqueOrThrowArgs} args - Arguments to find a Automation
     * @example
     * // Get one Automation
     * const automation = await prisma.automation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AutomationFindUniqueOrThrowArgs>(args: SelectSubset<T, AutomationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Automation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationFindFirstArgs} args - Arguments to find a Automation
     * @example
     * // Get one Automation
     * const automation = await prisma.automation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AutomationFindFirstArgs>(args?: SelectSubset<T, AutomationFindFirstArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Automation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationFindFirstOrThrowArgs} args - Arguments to find a Automation
     * @example
     * // Get one Automation
     * const automation = await prisma.automation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AutomationFindFirstOrThrowArgs>(args?: SelectSubset<T, AutomationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Automations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Automations
     * const automations = await prisma.automation.findMany()
     * 
     * // Get first 10 Automations
     * const automations = await prisma.automation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const automationWithIdOnly = await prisma.automation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AutomationFindManyArgs>(args?: SelectSubset<T, AutomationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Automation.
     * @param {AutomationCreateArgs} args - Arguments to create a Automation.
     * @example
     * // Create one Automation
     * const Automation = await prisma.automation.create({
     *   data: {
     *     // ... data to create a Automation
     *   }
     * })
     * 
     */
    create<T extends AutomationCreateArgs>(args: SelectSubset<T, AutomationCreateArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Automations.
     * @param {AutomationCreateManyArgs} args - Arguments to create many Automations.
     * @example
     * // Create many Automations
     * const automation = await prisma.automation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AutomationCreateManyArgs>(args?: SelectSubset<T, AutomationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Automations and returns the data saved in the database.
     * @param {AutomationCreateManyAndReturnArgs} args - Arguments to create many Automations.
     * @example
     * // Create many Automations
     * const automation = await prisma.automation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Automations and only return the `id`
     * const automationWithIdOnly = await prisma.automation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AutomationCreateManyAndReturnArgs>(args?: SelectSubset<T, AutomationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Automation.
     * @param {AutomationDeleteArgs} args - Arguments to delete one Automation.
     * @example
     * // Delete one Automation
     * const Automation = await prisma.automation.delete({
     *   where: {
     *     // ... filter to delete one Automation
     *   }
     * })
     * 
     */
    delete<T extends AutomationDeleteArgs>(args: SelectSubset<T, AutomationDeleteArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Automation.
     * @param {AutomationUpdateArgs} args - Arguments to update one Automation.
     * @example
     * // Update one Automation
     * const automation = await prisma.automation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AutomationUpdateArgs>(args: SelectSubset<T, AutomationUpdateArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Automations.
     * @param {AutomationDeleteManyArgs} args - Arguments to filter Automations to delete.
     * @example
     * // Delete a few Automations
     * const { count } = await prisma.automation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AutomationDeleteManyArgs>(args?: SelectSubset<T, AutomationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Automations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Automations
     * const automation = await prisma.automation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AutomationUpdateManyArgs>(args: SelectSubset<T, AutomationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Automations and returns the data updated in the database.
     * @param {AutomationUpdateManyAndReturnArgs} args - Arguments to update many Automations.
     * @example
     * // Update many Automations
     * const automation = await prisma.automation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Automations and only return the `id`
     * const automationWithIdOnly = await prisma.automation.updateManyAndReturn({
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
    updateManyAndReturn<T extends AutomationUpdateManyAndReturnArgs>(args: SelectSubset<T, AutomationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Automation.
     * @param {AutomationUpsertArgs} args - Arguments to update or create a Automation.
     * @example
     * // Update or create a Automation
     * const automation = await prisma.automation.upsert({
     *   create: {
     *     // ... data to create a Automation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Automation we want to update
     *   }
     * })
     */
    upsert<T extends AutomationUpsertArgs>(args: SelectSubset<T, AutomationUpsertArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Automations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationCountArgs} args - Arguments to filter Automations to count.
     * @example
     * // Count the number of Automations
     * const count = await prisma.automation.count({
     *   where: {
     *     // ... the filter for the Automations we want to count
     *   }
     * })
    **/
    count<T extends AutomationCountArgs>(
      args?: Subset<T, AutomationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutomationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Automation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AutomationAggregateArgs>(args: Subset<T, AutomationAggregateArgs>): Prisma.PrismaPromise<GetAutomationAggregateType<T>>

    /**
     * Group by Automation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationGroupByArgs} args - Group by arguments.
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
      T extends AutomationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AutomationGroupByArgs['orderBy'] }
        : { orderBy?: AutomationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AutomationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutomationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Automation model
   */
  readonly fields: AutomationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Automation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AutomationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Automation model
   */
  interface AutomationFieldRefs {
    readonly id: FieldRef<"Automation", 'String'>
    readonly orgId: FieldRef<"Automation", 'String'>
    readonly createdBy: FieldRef<"Automation", 'String'>
    readonly name: FieldRef<"Automation", 'String'>
    readonly trigger: FieldRef<"Automation", 'String'>
    readonly conditions: FieldRef<"Automation", 'Json'>
    readonly actions: FieldRef<"Automation", 'Json'>
    readonly status: FieldRef<"Automation", 'String'>
    readonly runCount: FieldRef<"Automation", 'Int'>
    readonly isDeleted: FieldRef<"Automation", 'Boolean'>
    readonly createdAt: FieldRef<"Automation", 'DateTime'>
    readonly updatedAt: FieldRef<"Automation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Automation findUnique
   */
  export type AutomationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Filter, which Automation to fetch.
     */
    where: AutomationWhereUniqueInput
  }

  /**
   * Automation findUniqueOrThrow
   */
  export type AutomationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Filter, which Automation to fetch.
     */
    where: AutomationWhereUniqueInput
  }

  /**
   * Automation findFirst
   */
  export type AutomationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Filter, which Automation to fetch.
     */
    where?: AutomationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Automations to fetch.
     */
    orderBy?: AutomationOrderByWithRelationInput | AutomationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Automations.
     */
    cursor?: AutomationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Automations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Automations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Automations.
     */
    distinct?: AutomationScalarFieldEnum | AutomationScalarFieldEnum[]
  }

  /**
   * Automation findFirstOrThrow
   */
  export type AutomationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Filter, which Automation to fetch.
     */
    where?: AutomationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Automations to fetch.
     */
    orderBy?: AutomationOrderByWithRelationInput | AutomationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Automations.
     */
    cursor?: AutomationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Automations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Automations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Automations.
     */
    distinct?: AutomationScalarFieldEnum | AutomationScalarFieldEnum[]
  }

  /**
   * Automation findMany
   */
  export type AutomationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Filter, which Automations to fetch.
     */
    where?: AutomationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Automations to fetch.
     */
    orderBy?: AutomationOrderByWithRelationInput | AutomationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Automations.
     */
    cursor?: AutomationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Automations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Automations.
     */
    skip?: number
    distinct?: AutomationScalarFieldEnum | AutomationScalarFieldEnum[]
  }

  /**
   * Automation create
   */
  export type AutomationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * The data needed to create a Automation.
     */
    data: XOR<AutomationCreateInput, AutomationUncheckedCreateInput>
  }

  /**
   * Automation createMany
   */
  export type AutomationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Automations.
     */
    data: AutomationCreateManyInput | AutomationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Automation createManyAndReturn
   */
  export type AutomationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * The data used to create many Automations.
     */
    data: AutomationCreateManyInput | AutomationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Automation update
   */
  export type AutomationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * The data needed to update a Automation.
     */
    data: XOR<AutomationUpdateInput, AutomationUncheckedUpdateInput>
    /**
     * Choose, which Automation to update.
     */
    where: AutomationWhereUniqueInput
  }

  /**
   * Automation updateMany
   */
  export type AutomationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Automations.
     */
    data: XOR<AutomationUpdateManyMutationInput, AutomationUncheckedUpdateManyInput>
    /**
     * Filter which Automations to update
     */
    where?: AutomationWhereInput
    /**
     * Limit how many Automations to update.
     */
    limit?: number
  }

  /**
   * Automation updateManyAndReturn
   */
  export type AutomationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * The data used to update Automations.
     */
    data: XOR<AutomationUpdateManyMutationInput, AutomationUncheckedUpdateManyInput>
    /**
     * Filter which Automations to update
     */
    where?: AutomationWhereInput
    /**
     * Limit how many Automations to update.
     */
    limit?: number
  }

  /**
   * Automation upsert
   */
  export type AutomationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * The filter to search for the Automation to update in case it exists.
     */
    where: AutomationWhereUniqueInput
    /**
     * In case the Automation found by the `where` argument doesn't exist, create a new Automation with this data.
     */
    create: XOR<AutomationCreateInput, AutomationUncheckedCreateInput>
    /**
     * In case the Automation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AutomationUpdateInput, AutomationUncheckedUpdateInput>
  }

  /**
   * Automation delete
   */
  export type AutomationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Filter which Automation to delete.
     */
    where: AutomationWhereUniqueInput
  }

  /**
   * Automation deleteMany
   */
  export type AutomationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Automations to delete
     */
    where?: AutomationWhereInput
    /**
     * Limit how many Automations to delete.
     */
    limit?: number
  }

  /**
   * Automation without action
   */
  export type AutomationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
  }


  /**
   * Model OptinForm
   */

  export type AggregateOptinForm = {
    _count: OptinFormCountAggregateOutputType | null
    _min: OptinFormMinAggregateOutputType | null
    _max: OptinFormMaxAggregateOutputType | null
  }

  export type OptinFormMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    createdBy: string | null
    name: string | null
    slug: string | null
    isPublished: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OptinFormMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    createdBy: string | null
    name: string | null
    slug: string | null
    isPublished: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OptinFormCountAggregateOutputType = {
    id: number
    orgId: number
    createdBy: number
    name: number
    slug: number
    fields: number
    settings: number
    isPublished: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OptinFormMinAggregateInputType = {
    id?: true
    orgId?: true
    createdBy?: true
    name?: true
    slug?: true
    isPublished?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OptinFormMaxAggregateInputType = {
    id?: true
    orgId?: true
    createdBy?: true
    name?: true
    slug?: true
    isPublished?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OptinFormCountAggregateInputType = {
    id?: true
    orgId?: true
    createdBy?: true
    name?: true
    slug?: true
    fields?: true
    settings?: true
    isPublished?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OptinFormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OptinForm to aggregate.
     */
    where?: OptinFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OptinForms to fetch.
     */
    orderBy?: OptinFormOrderByWithRelationInput | OptinFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OptinFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OptinForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OptinForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OptinForms
    **/
    _count?: true | OptinFormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OptinFormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OptinFormMaxAggregateInputType
  }

  export type GetOptinFormAggregateType<T extends OptinFormAggregateArgs> = {
        [P in keyof T & keyof AggregateOptinForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOptinForm[P]>
      : GetScalarType<T[P], AggregateOptinForm[P]>
  }




  export type OptinFormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptinFormWhereInput
    orderBy?: OptinFormOrderByWithAggregationInput | OptinFormOrderByWithAggregationInput[]
    by: OptinFormScalarFieldEnum[] | OptinFormScalarFieldEnum
    having?: OptinFormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OptinFormCountAggregateInputType | true
    _min?: OptinFormMinAggregateInputType
    _max?: OptinFormMaxAggregateInputType
  }

  export type OptinFormGroupByOutputType = {
    id: string
    orgId: string
    createdBy: string
    name: string
    slug: string
    fields: JsonValue
    settings: JsonValue
    isPublished: boolean
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: OptinFormCountAggregateOutputType | null
    _min: OptinFormMinAggregateOutputType | null
    _max: OptinFormMaxAggregateOutputType | null
  }

  type GetOptinFormGroupByPayload<T extends OptinFormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OptinFormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OptinFormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OptinFormGroupByOutputType[P]>
            : GetScalarType<T[P], OptinFormGroupByOutputType[P]>
        }
      >
    >


  export type OptinFormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    createdBy?: boolean
    name?: boolean
    slug?: boolean
    fields?: boolean
    settings?: boolean
    isPublished?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["optinForm"]>

  export type OptinFormSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    createdBy?: boolean
    name?: boolean
    slug?: boolean
    fields?: boolean
    settings?: boolean
    isPublished?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["optinForm"]>

  export type OptinFormSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    createdBy?: boolean
    name?: boolean
    slug?: boolean
    fields?: boolean
    settings?: boolean
    isPublished?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["optinForm"]>

  export type OptinFormSelectScalar = {
    id?: boolean
    orgId?: boolean
    createdBy?: boolean
    name?: boolean
    slug?: boolean
    fields?: boolean
    settings?: boolean
    isPublished?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OptinFormOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "createdBy" | "name" | "slug" | "fields" | "settings" | "isPublished" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["optinForm"]>

  export type $OptinFormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OptinForm"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      createdBy: string
      name: string
      slug: string
      fields: Prisma.JsonValue
      settings: Prisma.JsonValue
      isPublished: boolean
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["optinForm"]>
    composites: {}
  }

  type OptinFormGetPayload<S extends boolean | null | undefined | OptinFormDefaultArgs> = $Result.GetResult<Prisma.$OptinFormPayload, S>

  type OptinFormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OptinFormFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OptinFormCountAggregateInputType | true
    }

  export interface OptinFormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OptinForm'], meta: { name: 'OptinForm' } }
    /**
     * Find zero or one OptinForm that matches the filter.
     * @param {OptinFormFindUniqueArgs} args - Arguments to find a OptinForm
     * @example
     * // Get one OptinForm
     * const optinForm = await prisma.optinForm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OptinFormFindUniqueArgs>(args: SelectSubset<T, OptinFormFindUniqueArgs<ExtArgs>>): Prisma__OptinFormClient<$Result.GetResult<Prisma.$OptinFormPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OptinForm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OptinFormFindUniqueOrThrowArgs} args - Arguments to find a OptinForm
     * @example
     * // Get one OptinForm
     * const optinForm = await prisma.optinForm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OptinFormFindUniqueOrThrowArgs>(args: SelectSubset<T, OptinFormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OptinFormClient<$Result.GetResult<Prisma.$OptinFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OptinForm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptinFormFindFirstArgs} args - Arguments to find a OptinForm
     * @example
     * // Get one OptinForm
     * const optinForm = await prisma.optinForm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OptinFormFindFirstArgs>(args?: SelectSubset<T, OptinFormFindFirstArgs<ExtArgs>>): Prisma__OptinFormClient<$Result.GetResult<Prisma.$OptinFormPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OptinForm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptinFormFindFirstOrThrowArgs} args - Arguments to find a OptinForm
     * @example
     * // Get one OptinForm
     * const optinForm = await prisma.optinForm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OptinFormFindFirstOrThrowArgs>(args?: SelectSubset<T, OptinFormFindFirstOrThrowArgs<ExtArgs>>): Prisma__OptinFormClient<$Result.GetResult<Prisma.$OptinFormPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OptinForms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptinFormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OptinForms
     * const optinForms = await prisma.optinForm.findMany()
     * 
     * // Get first 10 OptinForms
     * const optinForms = await prisma.optinForm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const optinFormWithIdOnly = await prisma.optinForm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OptinFormFindManyArgs>(args?: SelectSubset<T, OptinFormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptinFormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OptinForm.
     * @param {OptinFormCreateArgs} args - Arguments to create a OptinForm.
     * @example
     * // Create one OptinForm
     * const OptinForm = await prisma.optinForm.create({
     *   data: {
     *     // ... data to create a OptinForm
     *   }
     * })
     * 
     */
    create<T extends OptinFormCreateArgs>(args: SelectSubset<T, OptinFormCreateArgs<ExtArgs>>): Prisma__OptinFormClient<$Result.GetResult<Prisma.$OptinFormPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OptinForms.
     * @param {OptinFormCreateManyArgs} args - Arguments to create many OptinForms.
     * @example
     * // Create many OptinForms
     * const optinForm = await prisma.optinForm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OptinFormCreateManyArgs>(args?: SelectSubset<T, OptinFormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OptinForms and returns the data saved in the database.
     * @param {OptinFormCreateManyAndReturnArgs} args - Arguments to create many OptinForms.
     * @example
     * // Create many OptinForms
     * const optinForm = await prisma.optinForm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OptinForms and only return the `id`
     * const optinFormWithIdOnly = await prisma.optinForm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OptinFormCreateManyAndReturnArgs>(args?: SelectSubset<T, OptinFormCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptinFormPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OptinForm.
     * @param {OptinFormDeleteArgs} args - Arguments to delete one OptinForm.
     * @example
     * // Delete one OptinForm
     * const OptinForm = await prisma.optinForm.delete({
     *   where: {
     *     // ... filter to delete one OptinForm
     *   }
     * })
     * 
     */
    delete<T extends OptinFormDeleteArgs>(args: SelectSubset<T, OptinFormDeleteArgs<ExtArgs>>): Prisma__OptinFormClient<$Result.GetResult<Prisma.$OptinFormPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OptinForm.
     * @param {OptinFormUpdateArgs} args - Arguments to update one OptinForm.
     * @example
     * // Update one OptinForm
     * const optinForm = await prisma.optinForm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OptinFormUpdateArgs>(args: SelectSubset<T, OptinFormUpdateArgs<ExtArgs>>): Prisma__OptinFormClient<$Result.GetResult<Prisma.$OptinFormPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OptinForms.
     * @param {OptinFormDeleteManyArgs} args - Arguments to filter OptinForms to delete.
     * @example
     * // Delete a few OptinForms
     * const { count } = await prisma.optinForm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OptinFormDeleteManyArgs>(args?: SelectSubset<T, OptinFormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OptinForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptinFormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OptinForms
     * const optinForm = await prisma.optinForm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OptinFormUpdateManyArgs>(args: SelectSubset<T, OptinFormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OptinForms and returns the data updated in the database.
     * @param {OptinFormUpdateManyAndReturnArgs} args - Arguments to update many OptinForms.
     * @example
     * // Update many OptinForms
     * const optinForm = await prisma.optinForm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OptinForms and only return the `id`
     * const optinFormWithIdOnly = await prisma.optinForm.updateManyAndReturn({
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
    updateManyAndReturn<T extends OptinFormUpdateManyAndReturnArgs>(args: SelectSubset<T, OptinFormUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptinFormPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OptinForm.
     * @param {OptinFormUpsertArgs} args - Arguments to update or create a OptinForm.
     * @example
     * // Update or create a OptinForm
     * const optinForm = await prisma.optinForm.upsert({
     *   create: {
     *     // ... data to create a OptinForm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OptinForm we want to update
     *   }
     * })
     */
    upsert<T extends OptinFormUpsertArgs>(args: SelectSubset<T, OptinFormUpsertArgs<ExtArgs>>): Prisma__OptinFormClient<$Result.GetResult<Prisma.$OptinFormPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OptinForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptinFormCountArgs} args - Arguments to filter OptinForms to count.
     * @example
     * // Count the number of OptinForms
     * const count = await prisma.optinForm.count({
     *   where: {
     *     // ... the filter for the OptinForms we want to count
     *   }
     * })
    **/
    count<T extends OptinFormCountArgs>(
      args?: Subset<T, OptinFormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OptinFormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OptinForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptinFormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OptinFormAggregateArgs>(args: Subset<T, OptinFormAggregateArgs>): Prisma.PrismaPromise<GetOptinFormAggregateType<T>>

    /**
     * Group by OptinForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptinFormGroupByArgs} args - Group by arguments.
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
      T extends OptinFormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OptinFormGroupByArgs['orderBy'] }
        : { orderBy?: OptinFormGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OptinFormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOptinFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OptinForm model
   */
  readonly fields: OptinFormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OptinForm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OptinFormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the OptinForm model
   */
  interface OptinFormFieldRefs {
    readonly id: FieldRef<"OptinForm", 'String'>
    readonly orgId: FieldRef<"OptinForm", 'String'>
    readonly createdBy: FieldRef<"OptinForm", 'String'>
    readonly name: FieldRef<"OptinForm", 'String'>
    readonly slug: FieldRef<"OptinForm", 'String'>
    readonly fields: FieldRef<"OptinForm", 'Json'>
    readonly settings: FieldRef<"OptinForm", 'Json'>
    readonly isPublished: FieldRef<"OptinForm", 'Boolean'>
    readonly isDeleted: FieldRef<"OptinForm", 'Boolean'>
    readonly createdAt: FieldRef<"OptinForm", 'DateTime'>
    readonly updatedAt: FieldRef<"OptinForm", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OptinForm findUnique
   */
  export type OptinFormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptinForm
     */
    select?: OptinFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptinForm
     */
    omit?: OptinFormOmit<ExtArgs> | null
    /**
     * Filter, which OptinForm to fetch.
     */
    where: OptinFormWhereUniqueInput
  }

  /**
   * OptinForm findUniqueOrThrow
   */
  export type OptinFormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptinForm
     */
    select?: OptinFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptinForm
     */
    omit?: OptinFormOmit<ExtArgs> | null
    /**
     * Filter, which OptinForm to fetch.
     */
    where: OptinFormWhereUniqueInput
  }

  /**
   * OptinForm findFirst
   */
  export type OptinFormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptinForm
     */
    select?: OptinFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptinForm
     */
    omit?: OptinFormOmit<ExtArgs> | null
    /**
     * Filter, which OptinForm to fetch.
     */
    where?: OptinFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OptinForms to fetch.
     */
    orderBy?: OptinFormOrderByWithRelationInput | OptinFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OptinForms.
     */
    cursor?: OptinFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OptinForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OptinForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OptinForms.
     */
    distinct?: OptinFormScalarFieldEnum | OptinFormScalarFieldEnum[]
  }

  /**
   * OptinForm findFirstOrThrow
   */
  export type OptinFormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptinForm
     */
    select?: OptinFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptinForm
     */
    omit?: OptinFormOmit<ExtArgs> | null
    /**
     * Filter, which OptinForm to fetch.
     */
    where?: OptinFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OptinForms to fetch.
     */
    orderBy?: OptinFormOrderByWithRelationInput | OptinFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OptinForms.
     */
    cursor?: OptinFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OptinForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OptinForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OptinForms.
     */
    distinct?: OptinFormScalarFieldEnum | OptinFormScalarFieldEnum[]
  }

  /**
   * OptinForm findMany
   */
  export type OptinFormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptinForm
     */
    select?: OptinFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptinForm
     */
    omit?: OptinFormOmit<ExtArgs> | null
    /**
     * Filter, which OptinForms to fetch.
     */
    where?: OptinFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OptinForms to fetch.
     */
    orderBy?: OptinFormOrderByWithRelationInput | OptinFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OptinForms.
     */
    cursor?: OptinFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OptinForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OptinForms.
     */
    skip?: number
    distinct?: OptinFormScalarFieldEnum | OptinFormScalarFieldEnum[]
  }

  /**
   * OptinForm create
   */
  export type OptinFormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptinForm
     */
    select?: OptinFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptinForm
     */
    omit?: OptinFormOmit<ExtArgs> | null
    /**
     * The data needed to create a OptinForm.
     */
    data: XOR<OptinFormCreateInput, OptinFormUncheckedCreateInput>
  }

  /**
   * OptinForm createMany
   */
  export type OptinFormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OptinForms.
     */
    data: OptinFormCreateManyInput | OptinFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OptinForm createManyAndReturn
   */
  export type OptinFormCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptinForm
     */
    select?: OptinFormSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OptinForm
     */
    omit?: OptinFormOmit<ExtArgs> | null
    /**
     * The data used to create many OptinForms.
     */
    data: OptinFormCreateManyInput | OptinFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OptinForm update
   */
  export type OptinFormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptinForm
     */
    select?: OptinFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptinForm
     */
    omit?: OptinFormOmit<ExtArgs> | null
    /**
     * The data needed to update a OptinForm.
     */
    data: XOR<OptinFormUpdateInput, OptinFormUncheckedUpdateInput>
    /**
     * Choose, which OptinForm to update.
     */
    where: OptinFormWhereUniqueInput
  }

  /**
   * OptinForm updateMany
   */
  export type OptinFormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OptinForms.
     */
    data: XOR<OptinFormUpdateManyMutationInput, OptinFormUncheckedUpdateManyInput>
    /**
     * Filter which OptinForms to update
     */
    where?: OptinFormWhereInput
    /**
     * Limit how many OptinForms to update.
     */
    limit?: number
  }

  /**
   * OptinForm updateManyAndReturn
   */
  export type OptinFormUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptinForm
     */
    select?: OptinFormSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OptinForm
     */
    omit?: OptinFormOmit<ExtArgs> | null
    /**
     * The data used to update OptinForms.
     */
    data: XOR<OptinFormUpdateManyMutationInput, OptinFormUncheckedUpdateManyInput>
    /**
     * Filter which OptinForms to update
     */
    where?: OptinFormWhereInput
    /**
     * Limit how many OptinForms to update.
     */
    limit?: number
  }

  /**
   * OptinForm upsert
   */
  export type OptinFormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptinForm
     */
    select?: OptinFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptinForm
     */
    omit?: OptinFormOmit<ExtArgs> | null
    /**
     * The filter to search for the OptinForm to update in case it exists.
     */
    where: OptinFormWhereUniqueInput
    /**
     * In case the OptinForm found by the `where` argument doesn't exist, create a new OptinForm with this data.
     */
    create: XOR<OptinFormCreateInput, OptinFormUncheckedCreateInput>
    /**
     * In case the OptinForm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OptinFormUpdateInput, OptinFormUncheckedUpdateInput>
  }

  /**
   * OptinForm delete
   */
  export type OptinFormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptinForm
     */
    select?: OptinFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptinForm
     */
    omit?: OptinFormOmit<ExtArgs> | null
    /**
     * Filter which OptinForm to delete.
     */
    where: OptinFormWhereUniqueInput
  }

  /**
   * OptinForm deleteMany
   */
  export type OptinFormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OptinForms to delete
     */
    where?: OptinFormWhereInput
    /**
     * Limit how many OptinForms to delete.
     */
    limit?: number
  }

  /**
   * OptinForm without action
   */
  export type OptinFormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptinForm
     */
    select?: OptinFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptinForm
     */
    omit?: OptinFormOmit<ExtArgs> | null
  }


  /**
   * Model OmniBroadcast
   */

  export type AggregateOmniBroadcast = {
    _count: OmniBroadcastCountAggregateOutputType | null
    _avg: OmniBroadcastAvgAggregateOutputType | null
    _sum: OmniBroadcastSumAggregateOutputType | null
    _min: OmniBroadcastMinAggregateOutputType | null
    _max: OmniBroadcastMaxAggregateOutputType | null
  }

  export type OmniBroadcastAvgAggregateOutputType = {
    totalCount: number | null
    sentCount: number | null
    failedCount: number | null
  }

  export type OmniBroadcastSumAggregateOutputType = {
    totalCount: number | null
    sentCount: number | null
    failedCount: number | null
  }

  export type OmniBroadcastMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    createdBy: string | null
    name: string | null
    provider: string | null
    phonebookId: string | null
    message: string | null
    mediaUrl: string | null
    status: string | null
    totalCount: number | null
    sentCount: number | null
    failedCount: number | null
    scheduledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OmniBroadcastMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    createdBy: string | null
    name: string | null
    provider: string | null
    phonebookId: string | null
    message: string | null
    mediaUrl: string | null
    status: string | null
    totalCount: number | null
    sentCount: number | null
    failedCount: number | null
    scheduledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OmniBroadcastCountAggregateOutputType = {
    id: number
    orgId: number
    createdBy: number
    name: number
    provider: number
    phonebookId: number
    message: number
    mediaUrl: number
    status: number
    totalCount: number
    sentCount: number
    failedCount: number
    scheduledAt: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OmniBroadcastAvgAggregateInputType = {
    totalCount?: true
    sentCount?: true
    failedCount?: true
  }

  export type OmniBroadcastSumAggregateInputType = {
    totalCount?: true
    sentCount?: true
    failedCount?: true
  }

  export type OmniBroadcastMinAggregateInputType = {
    id?: true
    orgId?: true
    createdBy?: true
    name?: true
    provider?: true
    phonebookId?: true
    message?: true
    mediaUrl?: true
    status?: true
    totalCount?: true
    sentCount?: true
    failedCount?: true
    scheduledAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OmniBroadcastMaxAggregateInputType = {
    id?: true
    orgId?: true
    createdBy?: true
    name?: true
    provider?: true
    phonebookId?: true
    message?: true
    mediaUrl?: true
    status?: true
    totalCount?: true
    sentCount?: true
    failedCount?: true
    scheduledAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OmniBroadcastCountAggregateInputType = {
    id?: true
    orgId?: true
    createdBy?: true
    name?: true
    provider?: true
    phonebookId?: true
    message?: true
    mediaUrl?: true
    status?: true
    totalCount?: true
    sentCount?: true
    failedCount?: true
    scheduledAt?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OmniBroadcastAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OmniBroadcast to aggregate.
     */
    where?: OmniBroadcastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OmniBroadcasts to fetch.
     */
    orderBy?: OmniBroadcastOrderByWithRelationInput | OmniBroadcastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OmniBroadcastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OmniBroadcasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OmniBroadcasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OmniBroadcasts
    **/
    _count?: true | OmniBroadcastCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OmniBroadcastAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OmniBroadcastSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OmniBroadcastMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OmniBroadcastMaxAggregateInputType
  }

  export type GetOmniBroadcastAggregateType<T extends OmniBroadcastAggregateArgs> = {
        [P in keyof T & keyof AggregateOmniBroadcast]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOmniBroadcast[P]>
      : GetScalarType<T[P], AggregateOmniBroadcast[P]>
  }




  export type OmniBroadcastGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OmniBroadcastWhereInput
    orderBy?: OmniBroadcastOrderByWithAggregationInput | OmniBroadcastOrderByWithAggregationInput[]
    by: OmniBroadcastScalarFieldEnum[] | OmniBroadcastScalarFieldEnum
    having?: OmniBroadcastScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OmniBroadcastCountAggregateInputType | true
    _avg?: OmniBroadcastAvgAggregateInputType
    _sum?: OmniBroadcastSumAggregateInputType
    _min?: OmniBroadcastMinAggregateInputType
    _max?: OmniBroadcastMaxAggregateInputType
  }

  export type OmniBroadcastGroupByOutputType = {
    id: string
    orgId: string
    createdBy: string
    name: string
    provider: string
    phonebookId: string | null
    message: string
    mediaUrl: string | null
    status: string
    totalCount: number
    sentCount: number
    failedCount: number
    scheduledAt: Date | null
    metadata: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: OmniBroadcastCountAggregateOutputType | null
    _avg: OmniBroadcastAvgAggregateOutputType | null
    _sum: OmniBroadcastSumAggregateOutputType | null
    _min: OmniBroadcastMinAggregateOutputType | null
    _max: OmniBroadcastMaxAggregateOutputType | null
  }

  type GetOmniBroadcastGroupByPayload<T extends OmniBroadcastGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OmniBroadcastGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OmniBroadcastGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OmniBroadcastGroupByOutputType[P]>
            : GetScalarType<T[P], OmniBroadcastGroupByOutputType[P]>
        }
      >
    >


  export type OmniBroadcastSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    createdBy?: boolean
    name?: boolean
    provider?: boolean
    phonebookId?: boolean
    message?: boolean
    mediaUrl?: boolean
    status?: boolean
    totalCount?: boolean
    sentCount?: boolean
    failedCount?: boolean
    scheduledAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    logs?: boolean | OmniBroadcast$logsArgs<ExtArgs>
    _count?: boolean | OmniBroadcastCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["omniBroadcast"]>

  export type OmniBroadcastSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    createdBy?: boolean
    name?: boolean
    provider?: boolean
    phonebookId?: boolean
    message?: boolean
    mediaUrl?: boolean
    status?: boolean
    totalCount?: boolean
    sentCount?: boolean
    failedCount?: boolean
    scheduledAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["omniBroadcast"]>

  export type OmniBroadcastSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    createdBy?: boolean
    name?: boolean
    provider?: boolean
    phonebookId?: boolean
    message?: boolean
    mediaUrl?: boolean
    status?: boolean
    totalCount?: boolean
    sentCount?: boolean
    failedCount?: boolean
    scheduledAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["omniBroadcast"]>

  export type OmniBroadcastSelectScalar = {
    id?: boolean
    orgId?: boolean
    createdBy?: boolean
    name?: boolean
    provider?: boolean
    phonebookId?: boolean
    message?: boolean
    mediaUrl?: boolean
    status?: boolean
    totalCount?: boolean
    sentCount?: boolean
    failedCount?: boolean
    scheduledAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OmniBroadcastOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "createdBy" | "name" | "provider" | "phonebookId" | "message" | "mediaUrl" | "status" | "totalCount" | "sentCount" | "failedCount" | "scheduledAt" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["omniBroadcast"]>
  export type OmniBroadcastInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | OmniBroadcast$logsArgs<ExtArgs>
    _count?: boolean | OmniBroadcastCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OmniBroadcastIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OmniBroadcastIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OmniBroadcastPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OmniBroadcast"
    objects: {
      logs: Prisma.$OmniBroadcastLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      createdBy: string
      name: string
      provider: string
      phonebookId: string | null
      message: string
      mediaUrl: string | null
      status: string
      totalCount: number
      sentCount: number
      failedCount: number
      scheduledAt: Date | null
      metadata: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["omniBroadcast"]>
    composites: {}
  }

  type OmniBroadcastGetPayload<S extends boolean | null | undefined | OmniBroadcastDefaultArgs> = $Result.GetResult<Prisma.$OmniBroadcastPayload, S>

  type OmniBroadcastCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OmniBroadcastFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OmniBroadcastCountAggregateInputType | true
    }

  export interface OmniBroadcastDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OmniBroadcast'], meta: { name: 'OmniBroadcast' } }
    /**
     * Find zero or one OmniBroadcast that matches the filter.
     * @param {OmniBroadcastFindUniqueArgs} args - Arguments to find a OmniBroadcast
     * @example
     * // Get one OmniBroadcast
     * const omniBroadcast = await prisma.omniBroadcast.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OmniBroadcastFindUniqueArgs>(args: SelectSubset<T, OmniBroadcastFindUniqueArgs<ExtArgs>>): Prisma__OmniBroadcastClient<$Result.GetResult<Prisma.$OmniBroadcastPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OmniBroadcast that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OmniBroadcastFindUniqueOrThrowArgs} args - Arguments to find a OmniBroadcast
     * @example
     * // Get one OmniBroadcast
     * const omniBroadcast = await prisma.omniBroadcast.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OmniBroadcastFindUniqueOrThrowArgs>(args: SelectSubset<T, OmniBroadcastFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OmniBroadcastClient<$Result.GetResult<Prisma.$OmniBroadcastPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OmniBroadcast that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OmniBroadcastFindFirstArgs} args - Arguments to find a OmniBroadcast
     * @example
     * // Get one OmniBroadcast
     * const omniBroadcast = await prisma.omniBroadcast.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OmniBroadcastFindFirstArgs>(args?: SelectSubset<T, OmniBroadcastFindFirstArgs<ExtArgs>>): Prisma__OmniBroadcastClient<$Result.GetResult<Prisma.$OmniBroadcastPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OmniBroadcast that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OmniBroadcastFindFirstOrThrowArgs} args - Arguments to find a OmniBroadcast
     * @example
     * // Get one OmniBroadcast
     * const omniBroadcast = await prisma.omniBroadcast.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OmniBroadcastFindFirstOrThrowArgs>(args?: SelectSubset<T, OmniBroadcastFindFirstOrThrowArgs<ExtArgs>>): Prisma__OmniBroadcastClient<$Result.GetResult<Prisma.$OmniBroadcastPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OmniBroadcasts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OmniBroadcastFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OmniBroadcasts
     * const omniBroadcasts = await prisma.omniBroadcast.findMany()
     * 
     * // Get first 10 OmniBroadcasts
     * const omniBroadcasts = await prisma.omniBroadcast.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const omniBroadcastWithIdOnly = await prisma.omniBroadcast.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OmniBroadcastFindManyArgs>(args?: SelectSubset<T, OmniBroadcastFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OmniBroadcastPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OmniBroadcast.
     * @param {OmniBroadcastCreateArgs} args - Arguments to create a OmniBroadcast.
     * @example
     * // Create one OmniBroadcast
     * const OmniBroadcast = await prisma.omniBroadcast.create({
     *   data: {
     *     // ... data to create a OmniBroadcast
     *   }
     * })
     * 
     */
    create<T extends OmniBroadcastCreateArgs>(args: SelectSubset<T, OmniBroadcastCreateArgs<ExtArgs>>): Prisma__OmniBroadcastClient<$Result.GetResult<Prisma.$OmniBroadcastPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OmniBroadcasts.
     * @param {OmniBroadcastCreateManyArgs} args - Arguments to create many OmniBroadcasts.
     * @example
     * // Create many OmniBroadcasts
     * const omniBroadcast = await prisma.omniBroadcast.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OmniBroadcastCreateManyArgs>(args?: SelectSubset<T, OmniBroadcastCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OmniBroadcasts and returns the data saved in the database.
     * @param {OmniBroadcastCreateManyAndReturnArgs} args - Arguments to create many OmniBroadcasts.
     * @example
     * // Create many OmniBroadcasts
     * const omniBroadcast = await prisma.omniBroadcast.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OmniBroadcasts and only return the `id`
     * const omniBroadcastWithIdOnly = await prisma.omniBroadcast.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OmniBroadcastCreateManyAndReturnArgs>(args?: SelectSubset<T, OmniBroadcastCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OmniBroadcastPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OmniBroadcast.
     * @param {OmniBroadcastDeleteArgs} args - Arguments to delete one OmniBroadcast.
     * @example
     * // Delete one OmniBroadcast
     * const OmniBroadcast = await prisma.omniBroadcast.delete({
     *   where: {
     *     // ... filter to delete one OmniBroadcast
     *   }
     * })
     * 
     */
    delete<T extends OmniBroadcastDeleteArgs>(args: SelectSubset<T, OmniBroadcastDeleteArgs<ExtArgs>>): Prisma__OmniBroadcastClient<$Result.GetResult<Prisma.$OmniBroadcastPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OmniBroadcast.
     * @param {OmniBroadcastUpdateArgs} args - Arguments to update one OmniBroadcast.
     * @example
     * // Update one OmniBroadcast
     * const omniBroadcast = await prisma.omniBroadcast.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OmniBroadcastUpdateArgs>(args: SelectSubset<T, OmniBroadcastUpdateArgs<ExtArgs>>): Prisma__OmniBroadcastClient<$Result.GetResult<Prisma.$OmniBroadcastPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OmniBroadcasts.
     * @param {OmniBroadcastDeleteManyArgs} args - Arguments to filter OmniBroadcasts to delete.
     * @example
     * // Delete a few OmniBroadcasts
     * const { count } = await prisma.omniBroadcast.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OmniBroadcastDeleteManyArgs>(args?: SelectSubset<T, OmniBroadcastDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OmniBroadcasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OmniBroadcastUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OmniBroadcasts
     * const omniBroadcast = await prisma.omniBroadcast.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OmniBroadcastUpdateManyArgs>(args: SelectSubset<T, OmniBroadcastUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OmniBroadcasts and returns the data updated in the database.
     * @param {OmniBroadcastUpdateManyAndReturnArgs} args - Arguments to update many OmniBroadcasts.
     * @example
     * // Update many OmniBroadcasts
     * const omniBroadcast = await prisma.omniBroadcast.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OmniBroadcasts and only return the `id`
     * const omniBroadcastWithIdOnly = await prisma.omniBroadcast.updateManyAndReturn({
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
    updateManyAndReturn<T extends OmniBroadcastUpdateManyAndReturnArgs>(args: SelectSubset<T, OmniBroadcastUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OmniBroadcastPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OmniBroadcast.
     * @param {OmniBroadcastUpsertArgs} args - Arguments to update or create a OmniBroadcast.
     * @example
     * // Update or create a OmniBroadcast
     * const omniBroadcast = await prisma.omniBroadcast.upsert({
     *   create: {
     *     // ... data to create a OmniBroadcast
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OmniBroadcast we want to update
     *   }
     * })
     */
    upsert<T extends OmniBroadcastUpsertArgs>(args: SelectSubset<T, OmniBroadcastUpsertArgs<ExtArgs>>): Prisma__OmniBroadcastClient<$Result.GetResult<Prisma.$OmniBroadcastPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OmniBroadcasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OmniBroadcastCountArgs} args - Arguments to filter OmniBroadcasts to count.
     * @example
     * // Count the number of OmniBroadcasts
     * const count = await prisma.omniBroadcast.count({
     *   where: {
     *     // ... the filter for the OmniBroadcasts we want to count
     *   }
     * })
    **/
    count<T extends OmniBroadcastCountArgs>(
      args?: Subset<T, OmniBroadcastCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OmniBroadcastCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OmniBroadcast.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OmniBroadcastAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OmniBroadcastAggregateArgs>(args: Subset<T, OmniBroadcastAggregateArgs>): Prisma.PrismaPromise<GetOmniBroadcastAggregateType<T>>

    /**
     * Group by OmniBroadcast.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OmniBroadcastGroupByArgs} args - Group by arguments.
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
      T extends OmniBroadcastGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OmniBroadcastGroupByArgs['orderBy'] }
        : { orderBy?: OmniBroadcastGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OmniBroadcastGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOmniBroadcastGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OmniBroadcast model
   */
  readonly fields: OmniBroadcastFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OmniBroadcast.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OmniBroadcastClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    logs<T extends OmniBroadcast$logsArgs<ExtArgs> = {}>(args?: Subset<T, OmniBroadcast$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OmniBroadcastLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the OmniBroadcast model
   */
  interface OmniBroadcastFieldRefs {
    readonly id: FieldRef<"OmniBroadcast", 'String'>
    readonly orgId: FieldRef<"OmniBroadcast", 'String'>
    readonly createdBy: FieldRef<"OmniBroadcast", 'String'>
    readonly name: FieldRef<"OmniBroadcast", 'String'>
    readonly provider: FieldRef<"OmniBroadcast", 'String'>
    readonly phonebookId: FieldRef<"OmniBroadcast", 'String'>
    readonly message: FieldRef<"OmniBroadcast", 'String'>
    readonly mediaUrl: FieldRef<"OmniBroadcast", 'String'>
    readonly status: FieldRef<"OmniBroadcast", 'String'>
    readonly totalCount: FieldRef<"OmniBroadcast", 'Int'>
    readonly sentCount: FieldRef<"OmniBroadcast", 'Int'>
    readonly failedCount: FieldRef<"OmniBroadcast", 'Int'>
    readonly scheduledAt: FieldRef<"OmniBroadcast", 'DateTime'>
    readonly metadata: FieldRef<"OmniBroadcast", 'Json'>
    readonly createdAt: FieldRef<"OmniBroadcast", 'DateTime'>
    readonly updatedAt: FieldRef<"OmniBroadcast", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OmniBroadcast findUnique
   */
  export type OmniBroadcastFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OmniBroadcast
     */
    select?: OmniBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OmniBroadcast
     */
    omit?: OmniBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OmniBroadcastInclude<ExtArgs> | null
    /**
     * Filter, which OmniBroadcast to fetch.
     */
    where: OmniBroadcastWhereUniqueInput
  }

  /**
   * OmniBroadcast findUniqueOrThrow
   */
  export type OmniBroadcastFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OmniBroadcast
     */
    select?: OmniBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OmniBroadcast
     */
    omit?: OmniBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OmniBroadcastInclude<ExtArgs> | null
    /**
     * Filter, which OmniBroadcast to fetch.
     */
    where: OmniBroadcastWhereUniqueInput
  }

  /**
   * OmniBroadcast findFirst
   */
  export type OmniBroadcastFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OmniBroadcast
     */
    select?: OmniBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OmniBroadcast
     */
    omit?: OmniBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OmniBroadcastInclude<ExtArgs> | null
    /**
     * Filter, which OmniBroadcast to fetch.
     */
    where?: OmniBroadcastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OmniBroadcasts to fetch.
     */
    orderBy?: OmniBroadcastOrderByWithRelationInput | OmniBroadcastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OmniBroadcasts.
     */
    cursor?: OmniBroadcastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OmniBroadcasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OmniBroadcasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OmniBroadcasts.
     */
    distinct?: OmniBroadcastScalarFieldEnum | OmniBroadcastScalarFieldEnum[]
  }

  /**
   * OmniBroadcast findFirstOrThrow
   */
  export type OmniBroadcastFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OmniBroadcast
     */
    select?: OmniBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OmniBroadcast
     */
    omit?: OmniBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OmniBroadcastInclude<ExtArgs> | null
    /**
     * Filter, which OmniBroadcast to fetch.
     */
    where?: OmniBroadcastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OmniBroadcasts to fetch.
     */
    orderBy?: OmniBroadcastOrderByWithRelationInput | OmniBroadcastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OmniBroadcasts.
     */
    cursor?: OmniBroadcastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OmniBroadcasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OmniBroadcasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OmniBroadcasts.
     */
    distinct?: OmniBroadcastScalarFieldEnum | OmniBroadcastScalarFieldEnum[]
  }

  /**
   * OmniBroadcast findMany
   */
  export type OmniBroadcastFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OmniBroadcast
     */
    select?: OmniBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OmniBroadcast
     */
    omit?: OmniBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OmniBroadcastInclude<ExtArgs> | null
    /**
     * Filter, which OmniBroadcasts to fetch.
     */
    where?: OmniBroadcastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OmniBroadcasts to fetch.
     */
    orderBy?: OmniBroadcastOrderByWithRelationInput | OmniBroadcastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OmniBroadcasts.
     */
    cursor?: OmniBroadcastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OmniBroadcasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OmniBroadcasts.
     */
    skip?: number
    distinct?: OmniBroadcastScalarFieldEnum | OmniBroadcastScalarFieldEnum[]
  }

  /**
   * OmniBroadcast create
   */
  export type OmniBroadcastCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OmniBroadcast
     */
    select?: OmniBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OmniBroadcast
     */
    omit?: OmniBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OmniBroadcastInclude<ExtArgs> | null
    /**
     * The data needed to create a OmniBroadcast.
     */
    data: XOR<OmniBroadcastCreateInput, OmniBroadcastUncheckedCreateInput>
  }

  /**
   * OmniBroadcast createMany
   */
  export type OmniBroadcastCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OmniBroadcasts.
     */
    data: OmniBroadcastCreateManyInput | OmniBroadcastCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OmniBroadcast createManyAndReturn
   */
  export type OmniBroadcastCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OmniBroadcast
     */
    select?: OmniBroadcastSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OmniBroadcast
     */
    omit?: OmniBroadcastOmit<ExtArgs> | null
    /**
     * The data used to create many OmniBroadcasts.
     */
    data: OmniBroadcastCreateManyInput | OmniBroadcastCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OmniBroadcast update
   */
  export type OmniBroadcastUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OmniBroadcast
     */
    select?: OmniBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OmniBroadcast
     */
    omit?: OmniBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OmniBroadcastInclude<ExtArgs> | null
    /**
     * The data needed to update a OmniBroadcast.
     */
    data: XOR<OmniBroadcastUpdateInput, OmniBroadcastUncheckedUpdateInput>
    /**
     * Choose, which OmniBroadcast to update.
     */
    where: OmniBroadcastWhereUniqueInput
  }

  /**
   * OmniBroadcast updateMany
   */
  export type OmniBroadcastUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OmniBroadcasts.
     */
    data: XOR<OmniBroadcastUpdateManyMutationInput, OmniBroadcastUncheckedUpdateManyInput>
    /**
     * Filter which OmniBroadcasts to update
     */
    where?: OmniBroadcastWhereInput
    /**
     * Limit how many OmniBroadcasts to update.
     */
    limit?: number
  }

  /**
   * OmniBroadcast updateManyAndReturn
   */
  export type OmniBroadcastUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OmniBroadcast
     */
    select?: OmniBroadcastSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OmniBroadcast
     */
    omit?: OmniBroadcastOmit<ExtArgs> | null
    /**
     * The data used to update OmniBroadcasts.
     */
    data: XOR<OmniBroadcastUpdateManyMutationInput, OmniBroadcastUncheckedUpdateManyInput>
    /**
     * Filter which OmniBroadcasts to update
     */
    where?: OmniBroadcastWhereInput
    /**
     * Limit how many OmniBroadcasts to update.
     */
    limit?: number
  }

  /**
   * OmniBroadcast upsert
   */
  export type OmniBroadcastUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OmniBroadcast
     */
    select?: OmniBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OmniBroadcast
     */
    omit?: OmniBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OmniBroadcastInclude<ExtArgs> | null
    /**
     * The filter to search for the OmniBroadcast to update in case it exists.
     */
    where: OmniBroadcastWhereUniqueInput
    /**
     * In case the OmniBroadcast found by the `where` argument doesn't exist, create a new OmniBroadcast with this data.
     */
    create: XOR<OmniBroadcastCreateInput, OmniBroadcastUncheckedCreateInput>
    /**
     * In case the OmniBroadcast was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OmniBroadcastUpdateInput, OmniBroadcastUncheckedUpdateInput>
  }

  /**
   * OmniBroadcast delete
   */
  export type OmniBroadcastDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OmniBroadcast
     */
    select?: OmniBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OmniBroadcast
     */
    omit?: OmniBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OmniBroadcastInclude<ExtArgs> | null
    /**
     * Filter which OmniBroadcast to delete.
     */
    where: OmniBroadcastWhereUniqueInput
  }

  /**
   * OmniBroadcast deleteMany
   */
  export type OmniBroadcastDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OmniBroadcasts to delete
     */
    where?: OmniBroadcastWhereInput
    /**
     * Limit how many OmniBroadcasts to delete.
     */
    limit?: number
  }

  /**
   * OmniBroadcast.logs
   */
  export type OmniBroadcast$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OmniBroadcastLog
     */
    select?: OmniBroadcastLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OmniBroadcastLog
     */
    omit?: OmniBroadcastLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OmniBroadcastLogInclude<ExtArgs> | null
    where?: OmniBroadcastLogWhereInput
    orderBy?: OmniBroadcastLogOrderByWithRelationInput | OmniBroadcastLogOrderByWithRelationInput[]
    cursor?: OmniBroadcastLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OmniBroadcastLogScalarFieldEnum | OmniBroadcastLogScalarFieldEnum[]
  }

  /**
   * OmniBroadcast without action
   */
  export type OmniBroadcastDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OmniBroadcast
     */
    select?: OmniBroadcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OmniBroadcast
     */
    omit?: OmniBroadcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OmniBroadcastInclude<ExtArgs> | null
  }


  /**
   * Model OmniBroadcastLog
   */

  export type AggregateOmniBroadcastLog = {
    _count: OmniBroadcastLogCountAggregateOutputType | null
    _min: OmniBroadcastLogMinAggregateOutputType | null
    _max: OmniBroadcastLogMaxAggregateOutputType | null
  }

  export type OmniBroadcastLogMinAggregateOutputType = {
    id: string | null
    broadcastId: string | null
    contactId: string | null
    phone: string | null
    status: string | null
    error: string | null
    sentAt: Date | null
    createdAt: Date | null
  }

  export type OmniBroadcastLogMaxAggregateOutputType = {
    id: string | null
    broadcastId: string | null
    contactId: string | null
    phone: string | null
    status: string | null
    error: string | null
    sentAt: Date | null
    createdAt: Date | null
  }

  export type OmniBroadcastLogCountAggregateOutputType = {
    id: number
    broadcastId: number
    contactId: number
    phone: number
    status: number
    error: number
    metadata: number
    sentAt: number
    createdAt: number
    _all: number
  }


  export type OmniBroadcastLogMinAggregateInputType = {
    id?: true
    broadcastId?: true
    contactId?: true
    phone?: true
    status?: true
    error?: true
    sentAt?: true
    createdAt?: true
  }

  export type OmniBroadcastLogMaxAggregateInputType = {
    id?: true
    broadcastId?: true
    contactId?: true
    phone?: true
    status?: true
    error?: true
    sentAt?: true
    createdAt?: true
  }

  export type OmniBroadcastLogCountAggregateInputType = {
    id?: true
    broadcastId?: true
    contactId?: true
    phone?: true
    status?: true
    error?: true
    metadata?: true
    sentAt?: true
    createdAt?: true
    _all?: true
  }

  export type OmniBroadcastLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OmniBroadcastLog to aggregate.
     */
    where?: OmniBroadcastLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OmniBroadcastLogs to fetch.
     */
    orderBy?: OmniBroadcastLogOrderByWithRelationInput | OmniBroadcastLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OmniBroadcastLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OmniBroadcastLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OmniBroadcastLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OmniBroadcastLogs
    **/
    _count?: true | OmniBroadcastLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OmniBroadcastLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OmniBroadcastLogMaxAggregateInputType
  }

  export type GetOmniBroadcastLogAggregateType<T extends OmniBroadcastLogAggregateArgs> = {
        [P in keyof T & keyof AggregateOmniBroadcastLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOmniBroadcastLog[P]>
      : GetScalarType<T[P], AggregateOmniBroadcastLog[P]>
  }




  export type OmniBroadcastLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OmniBroadcastLogWhereInput
    orderBy?: OmniBroadcastLogOrderByWithAggregationInput | OmniBroadcastLogOrderByWithAggregationInput[]
    by: OmniBroadcastLogScalarFieldEnum[] | OmniBroadcastLogScalarFieldEnum
    having?: OmniBroadcastLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OmniBroadcastLogCountAggregateInputType | true
    _min?: OmniBroadcastLogMinAggregateInputType
    _max?: OmniBroadcastLogMaxAggregateInputType
  }

  export type OmniBroadcastLogGroupByOutputType = {
    id: string
    broadcastId: string
    contactId: string | null
    phone: string
    status: string
    error: string | null
    metadata: JsonValue
    sentAt: Date | null
    createdAt: Date
    _count: OmniBroadcastLogCountAggregateOutputType | null
    _min: OmniBroadcastLogMinAggregateOutputType | null
    _max: OmniBroadcastLogMaxAggregateOutputType | null
  }

  type GetOmniBroadcastLogGroupByPayload<T extends OmniBroadcastLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OmniBroadcastLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OmniBroadcastLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OmniBroadcastLogGroupByOutputType[P]>
            : GetScalarType<T[P], OmniBroadcastLogGroupByOutputType[P]>
        }
      >
    >


  export type OmniBroadcastLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    broadcastId?: boolean
    contactId?: boolean
    phone?: boolean
    status?: boolean
    error?: boolean
    metadata?: boolean
    sentAt?: boolean
    createdAt?: boolean
    broadcast?: boolean | OmniBroadcastDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["omniBroadcastLog"]>

  export type OmniBroadcastLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    broadcastId?: boolean
    contactId?: boolean
    phone?: boolean
    status?: boolean
    error?: boolean
    metadata?: boolean
    sentAt?: boolean
    createdAt?: boolean
    broadcast?: boolean | OmniBroadcastDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["omniBroadcastLog"]>

  export type OmniBroadcastLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    broadcastId?: boolean
    contactId?: boolean
    phone?: boolean
    status?: boolean
    error?: boolean
    metadata?: boolean
    sentAt?: boolean
    createdAt?: boolean
    broadcast?: boolean | OmniBroadcastDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["omniBroadcastLog"]>

  export type OmniBroadcastLogSelectScalar = {
    id?: boolean
    broadcastId?: boolean
    contactId?: boolean
    phone?: boolean
    status?: boolean
    error?: boolean
    metadata?: boolean
    sentAt?: boolean
    createdAt?: boolean
  }

  export type OmniBroadcastLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "broadcastId" | "contactId" | "phone" | "status" | "error" | "metadata" | "sentAt" | "createdAt", ExtArgs["result"]["omniBroadcastLog"]>
  export type OmniBroadcastLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    broadcast?: boolean | OmniBroadcastDefaultArgs<ExtArgs>
  }
  export type OmniBroadcastLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    broadcast?: boolean | OmniBroadcastDefaultArgs<ExtArgs>
  }
  export type OmniBroadcastLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    broadcast?: boolean | OmniBroadcastDefaultArgs<ExtArgs>
  }

  export type $OmniBroadcastLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OmniBroadcastLog"
    objects: {
      broadcast: Prisma.$OmniBroadcastPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      broadcastId: string
      contactId: string | null
      phone: string
      status: string
      error: string | null
      metadata: Prisma.JsonValue
      sentAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["omniBroadcastLog"]>
    composites: {}
  }

  type OmniBroadcastLogGetPayload<S extends boolean | null | undefined | OmniBroadcastLogDefaultArgs> = $Result.GetResult<Prisma.$OmniBroadcastLogPayload, S>

  type OmniBroadcastLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OmniBroadcastLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OmniBroadcastLogCountAggregateInputType | true
    }

  export interface OmniBroadcastLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OmniBroadcastLog'], meta: { name: 'OmniBroadcastLog' } }
    /**
     * Find zero or one OmniBroadcastLog that matches the filter.
     * @param {OmniBroadcastLogFindUniqueArgs} args - Arguments to find a OmniBroadcastLog
     * @example
     * // Get one OmniBroadcastLog
     * const omniBroadcastLog = await prisma.omniBroadcastLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OmniBroadcastLogFindUniqueArgs>(args: SelectSubset<T, OmniBroadcastLogFindUniqueArgs<ExtArgs>>): Prisma__OmniBroadcastLogClient<$Result.GetResult<Prisma.$OmniBroadcastLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OmniBroadcastLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OmniBroadcastLogFindUniqueOrThrowArgs} args - Arguments to find a OmniBroadcastLog
     * @example
     * // Get one OmniBroadcastLog
     * const omniBroadcastLog = await prisma.omniBroadcastLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OmniBroadcastLogFindUniqueOrThrowArgs>(args: SelectSubset<T, OmniBroadcastLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OmniBroadcastLogClient<$Result.GetResult<Prisma.$OmniBroadcastLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OmniBroadcastLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OmniBroadcastLogFindFirstArgs} args - Arguments to find a OmniBroadcastLog
     * @example
     * // Get one OmniBroadcastLog
     * const omniBroadcastLog = await prisma.omniBroadcastLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OmniBroadcastLogFindFirstArgs>(args?: SelectSubset<T, OmniBroadcastLogFindFirstArgs<ExtArgs>>): Prisma__OmniBroadcastLogClient<$Result.GetResult<Prisma.$OmniBroadcastLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OmniBroadcastLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OmniBroadcastLogFindFirstOrThrowArgs} args - Arguments to find a OmniBroadcastLog
     * @example
     * // Get one OmniBroadcastLog
     * const omniBroadcastLog = await prisma.omniBroadcastLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OmniBroadcastLogFindFirstOrThrowArgs>(args?: SelectSubset<T, OmniBroadcastLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__OmniBroadcastLogClient<$Result.GetResult<Prisma.$OmniBroadcastLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OmniBroadcastLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OmniBroadcastLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OmniBroadcastLogs
     * const omniBroadcastLogs = await prisma.omniBroadcastLog.findMany()
     * 
     * // Get first 10 OmniBroadcastLogs
     * const omniBroadcastLogs = await prisma.omniBroadcastLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const omniBroadcastLogWithIdOnly = await prisma.omniBroadcastLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OmniBroadcastLogFindManyArgs>(args?: SelectSubset<T, OmniBroadcastLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OmniBroadcastLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OmniBroadcastLog.
     * @param {OmniBroadcastLogCreateArgs} args - Arguments to create a OmniBroadcastLog.
     * @example
     * // Create one OmniBroadcastLog
     * const OmniBroadcastLog = await prisma.omniBroadcastLog.create({
     *   data: {
     *     // ... data to create a OmniBroadcastLog
     *   }
     * })
     * 
     */
    create<T extends OmniBroadcastLogCreateArgs>(args: SelectSubset<T, OmniBroadcastLogCreateArgs<ExtArgs>>): Prisma__OmniBroadcastLogClient<$Result.GetResult<Prisma.$OmniBroadcastLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OmniBroadcastLogs.
     * @param {OmniBroadcastLogCreateManyArgs} args - Arguments to create many OmniBroadcastLogs.
     * @example
     * // Create many OmniBroadcastLogs
     * const omniBroadcastLog = await prisma.omniBroadcastLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OmniBroadcastLogCreateManyArgs>(args?: SelectSubset<T, OmniBroadcastLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OmniBroadcastLogs and returns the data saved in the database.
     * @param {OmniBroadcastLogCreateManyAndReturnArgs} args - Arguments to create many OmniBroadcastLogs.
     * @example
     * // Create many OmniBroadcastLogs
     * const omniBroadcastLog = await prisma.omniBroadcastLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OmniBroadcastLogs and only return the `id`
     * const omniBroadcastLogWithIdOnly = await prisma.omniBroadcastLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OmniBroadcastLogCreateManyAndReturnArgs>(args?: SelectSubset<T, OmniBroadcastLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OmniBroadcastLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OmniBroadcastLog.
     * @param {OmniBroadcastLogDeleteArgs} args - Arguments to delete one OmniBroadcastLog.
     * @example
     * // Delete one OmniBroadcastLog
     * const OmniBroadcastLog = await prisma.omniBroadcastLog.delete({
     *   where: {
     *     // ... filter to delete one OmniBroadcastLog
     *   }
     * })
     * 
     */
    delete<T extends OmniBroadcastLogDeleteArgs>(args: SelectSubset<T, OmniBroadcastLogDeleteArgs<ExtArgs>>): Prisma__OmniBroadcastLogClient<$Result.GetResult<Prisma.$OmniBroadcastLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OmniBroadcastLog.
     * @param {OmniBroadcastLogUpdateArgs} args - Arguments to update one OmniBroadcastLog.
     * @example
     * // Update one OmniBroadcastLog
     * const omniBroadcastLog = await prisma.omniBroadcastLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OmniBroadcastLogUpdateArgs>(args: SelectSubset<T, OmniBroadcastLogUpdateArgs<ExtArgs>>): Prisma__OmniBroadcastLogClient<$Result.GetResult<Prisma.$OmniBroadcastLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OmniBroadcastLogs.
     * @param {OmniBroadcastLogDeleteManyArgs} args - Arguments to filter OmniBroadcastLogs to delete.
     * @example
     * // Delete a few OmniBroadcastLogs
     * const { count } = await prisma.omniBroadcastLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OmniBroadcastLogDeleteManyArgs>(args?: SelectSubset<T, OmniBroadcastLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OmniBroadcastLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OmniBroadcastLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OmniBroadcastLogs
     * const omniBroadcastLog = await prisma.omniBroadcastLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OmniBroadcastLogUpdateManyArgs>(args: SelectSubset<T, OmniBroadcastLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OmniBroadcastLogs and returns the data updated in the database.
     * @param {OmniBroadcastLogUpdateManyAndReturnArgs} args - Arguments to update many OmniBroadcastLogs.
     * @example
     * // Update many OmniBroadcastLogs
     * const omniBroadcastLog = await prisma.omniBroadcastLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OmniBroadcastLogs and only return the `id`
     * const omniBroadcastLogWithIdOnly = await prisma.omniBroadcastLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends OmniBroadcastLogUpdateManyAndReturnArgs>(args: SelectSubset<T, OmniBroadcastLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OmniBroadcastLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OmniBroadcastLog.
     * @param {OmniBroadcastLogUpsertArgs} args - Arguments to update or create a OmniBroadcastLog.
     * @example
     * // Update or create a OmniBroadcastLog
     * const omniBroadcastLog = await prisma.omniBroadcastLog.upsert({
     *   create: {
     *     // ... data to create a OmniBroadcastLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OmniBroadcastLog we want to update
     *   }
     * })
     */
    upsert<T extends OmniBroadcastLogUpsertArgs>(args: SelectSubset<T, OmniBroadcastLogUpsertArgs<ExtArgs>>): Prisma__OmniBroadcastLogClient<$Result.GetResult<Prisma.$OmniBroadcastLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OmniBroadcastLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OmniBroadcastLogCountArgs} args - Arguments to filter OmniBroadcastLogs to count.
     * @example
     * // Count the number of OmniBroadcastLogs
     * const count = await prisma.omniBroadcastLog.count({
     *   where: {
     *     // ... the filter for the OmniBroadcastLogs we want to count
     *   }
     * })
    **/
    count<T extends OmniBroadcastLogCountArgs>(
      args?: Subset<T, OmniBroadcastLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OmniBroadcastLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OmniBroadcastLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OmniBroadcastLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OmniBroadcastLogAggregateArgs>(args: Subset<T, OmniBroadcastLogAggregateArgs>): Prisma.PrismaPromise<GetOmniBroadcastLogAggregateType<T>>

    /**
     * Group by OmniBroadcastLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OmniBroadcastLogGroupByArgs} args - Group by arguments.
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
      T extends OmniBroadcastLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OmniBroadcastLogGroupByArgs['orderBy'] }
        : { orderBy?: OmniBroadcastLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OmniBroadcastLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOmniBroadcastLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OmniBroadcastLog model
   */
  readonly fields: OmniBroadcastLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OmniBroadcastLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OmniBroadcastLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    broadcast<T extends OmniBroadcastDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OmniBroadcastDefaultArgs<ExtArgs>>): Prisma__OmniBroadcastClient<$Result.GetResult<Prisma.$OmniBroadcastPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OmniBroadcastLog model
   */
  interface OmniBroadcastLogFieldRefs {
    readonly id: FieldRef<"OmniBroadcastLog", 'String'>
    readonly broadcastId: FieldRef<"OmniBroadcastLog", 'String'>
    readonly contactId: FieldRef<"OmniBroadcastLog", 'String'>
    readonly phone: FieldRef<"OmniBroadcastLog", 'String'>
    readonly status: FieldRef<"OmniBroadcastLog", 'String'>
    readonly error: FieldRef<"OmniBroadcastLog", 'String'>
    readonly metadata: FieldRef<"OmniBroadcastLog", 'Json'>
    readonly sentAt: FieldRef<"OmniBroadcastLog", 'DateTime'>
    readonly createdAt: FieldRef<"OmniBroadcastLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OmniBroadcastLog findUnique
   */
  export type OmniBroadcastLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OmniBroadcastLog
     */
    select?: OmniBroadcastLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OmniBroadcastLog
     */
    omit?: OmniBroadcastLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OmniBroadcastLogInclude<ExtArgs> | null
    /**
     * Filter, which OmniBroadcastLog to fetch.
     */
    where: OmniBroadcastLogWhereUniqueInput
  }

  /**
   * OmniBroadcastLog findUniqueOrThrow
   */
  export type OmniBroadcastLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OmniBroadcastLog
     */
    select?: OmniBroadcastLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OmniBroadcastLog
     */
    omit?: OmniBroadcastLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OmniBroadcastLogInclude<ExtArgs> | null
    /**
     * Filter, which OmniBroadcastLog to fetch.
     */
    where: OmniBroadcastLogWhereUniqueInput
  }

  /**
   * OmniBroadcastLog findFirst
   */
  export type OmniBroadcastLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OmniBroadcastLog
     */
    select?: OmniBroadcastLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OmniBroadcastLog
     */
    omit?: OmniBroadcastLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OmniBroadcastLogInclude<ExtArgs> | null
    /**
     * Filter, which OmniBroadcastLog to fetch.
     */
    where?: OmniBroadcastLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OmniBroadcastLogs to fetch.
     */
    orderBy?: OmniBroadcastLogOrderByWithRelationInput | OmniBroadcastLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OmniBroadcastLogs.
     */
    cursor?: OmniBroadcastLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OmniBroadcastLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OmniBroadcastLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OmniBroadcastLogs.
     */
    distinct?: OmniBroadcastLogScalarFieldEnum | OmniBroadcastLogScalarFieldEnum[]
  }

  /**
   * OmniBroadcastLog findFirstOrThrow
   */
  export type OmniBroadcastLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OmniBroadcastLog
     */
    select?: OmniBroadcastLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OmniBroadcastLog
     */
    omit?: OmniBroadcastLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OmniBroadcastLogInclude<ExtArgs> | null
    /**
     * Filter, which OmniBroadcastLog to fetch.
     */
    where?: OmniBroadcastLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OmniBroadcastLogs to fetch.
     */
    orderBy?: OmniBroadcastLogOrderByWithRelationInput | OmniBroadcastLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OmniBroadcastLogs.
     */
    cursor?: OmniBroadcastLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OmniBroadcastLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OmniBroadcastLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OmniBroadcastLogs.
     */
    distinct?: OmniBroadcastLogScalarFieldEnum | OmniBroadcastLogScalarFieldEnum[]
  }

  /**
   * OmniBroadcastLog findMany
   */
  export type OmniBroadcastLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OmniBroadcastLog
     */
    select?: OmniBroadcastLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OmniBroadcastLog
     */
    omit?: OmniBroadcastLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OmniBroadcastLogInclude<ExtArgs> | null
    /**
     * Filter, which OmniBroadcastLogs to fetch.
     */
    where?: OmniBroadcastLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OmniBroadcastLogs to fetch.
     */
    orderBy?: OmniBroadcastLogOrderByWithRelationInput | OmniBroadcastLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OmniBroadcastLogs.
     */
    cursor?: OmniBroadcastLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OmniBroadcastLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OmniBroadcastLogs.
     */
    skip?: number
    distinct?: OmniBroadcastLogScalarFieldEnum | OmniBroadcastLogScalarFieldEnum[]
  }

  /**
   * OmniBroadcastLog create
   */
  export type OmniBroadcastLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OmniBroadcastLog
     */
    select?: OmniBroadcastLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OmniBroadcastLog
     */
    omit?: OmniBroadcastLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OmniBroadcastLogInclude<ExtArgs> | null
    /**
     * The data needed to create a OmniBroadcastLog.
     */
    data: XOR<OmniBroadcastLogCreateInput, OmniBroadcastLogUncheckedCreateInput>
  }

  /**
   * OmniBroadcastLog createMany
   */
  export type OmniBroadcastLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OmniBroadcastLogs.
     */
    data: OmniBroadcastLogCreateManyInput | OmniBroadcastLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OmniBroadcastLog createManyAndReturn
   */
  export type OmniBroadcastLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OmniBroadcastLog
     */
    select?: OmniBroadcastLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OmniBroadcastLog
     */
    omit?: OmniBroadcastLogOmit<ExtArgs> | null
    /**
     * The data used to create many OmniBroadcastLogs.
     */
    data: OmniBroadcastLogCreateManyInput | OmniBroadcastLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OmniBroadcastLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OmniBroadcastLog update
   */
  export type OmniBroadcastLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OmniBroadcastLog
     */
    select?: OmniBroadcastLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OmniBroadcastLog
     */
    omit?: OmniBroadcastLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OmniBroadcastLogInclude<ExtArgs> | null
    /**
     * The data needed to update a OmniBroadcastLog.
     */
    data: XOR<OmniBroadcastLogUpdateInput, OmniBroadcastLogUncheckedUpdateInput>
    /**
     * Choose, which OmniBroadcastLog to update.
     */
    where: OmniBroadcastLogWhereUniqueInput
  }

  /**
   * OmniBroadcastLog updateMany
   */
  export type OmniBroadcastLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OmniBroadcastLogs.
     */
    data: XOR<OmniBroadcastLogUpdateManyMutationInput, OmniBroadcastLogUncheckedUpdateManyInput>
    /**
     * Filter which OmniBroadcastLogs to update
     */
    where?: OmniBroadcastLogWhereInput
    /**
     * Limit how many OmniBroadcastLogs to update.
     */
    limit?: number
  }

  /**
   * OmniBroadcastLog updateManyAndReturn
   */
  export type OmniBroadcastLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OmniBroadcastLog
     */
    select?: OmniBroadcastLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OmniBroadcastLog
     */
    omit?: OmniBroadcastLogOmit<ExtArgs> | null
    /**
     * The data used to update OmniBroadcastLogs.
     */
    data: XOR<OmniBroadcastLogUpdateManyMutationInput, OmniBroadcastLogUncheckedUpdateManyInput>
    /**
     * Filter which OmniBroadcastLogs to update
     */
    where?: OmniBroadcastLogWhereInput
    /**
     * Limit how many OmniBroadcastLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OmniBroadcastLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OmniBroadcastLog upsert
   */
  export type OmniBroadcastLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OmniBroadcastLog
     */
    select?: OmniBroadcastLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OmniBroadcastLog
     */
    omit?: OmniBroadcastLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OmniBroadcastLogInclude<ExtArgs> | null
    /**
     * The filter to search for the OmniBroadcastLog to update in case it exists.
     */
    where: OmniBroadcastLogWhereUniqueInput
    /**
     * In case the OmniBroadcastLog found by the `where` argument doesn't exist, create a new OmniBroadcastLog with this data.
     */
    create: XOR<OmniBroadcastLogCreateInput, OmniBroadcastLogUncheckedCreateInput>
    /**
     * In case the OmniBroadcastLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OmniBroadcastLogUpdateInput, OmniBroadcastLogUncheckedUpdateInput>
  }

  /**
   * OmniBroadcastLog delete
   */
  export type OmniBroadcastLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OmniBroadcastLog
     */
    select?: OmniBroadcastLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OmniBroadcastLog
     */
    omit?: OmniBroadcastLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OmniBroadcastLogInclude<ExtArgs> | null
    /**
     * Filter which OmniBroadcastLog to delete.
     */
    where: OmniBroadcastLogWhereUniqueInput
  }

  /**
   * OmniBroadcastLog deleteMany
   */
  export type OmniBroadcastLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OmniBroadcastLogs to delete
     */
    where?: OmniBroadcastLogWhereInput
    /**
     * Limit how many OmniBroadcastLogs to delete.
     */
    limit?: number
  }

  /**
   * OmniBroadcastLog without action
   */
  export type OmniBroadcastLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OmniBroadcastLog
     */
    select?: OmniBroadcastLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OmniBroadcastLog
     */
    omit?: OmniBroadcastLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OmniBroadcastLogInclude<ExtArgs> | null
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


  export const CampaignScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    createdBy: 'createdBy',
    name: 'name',
    type: 'type',
    status: 'status',
    subject: 'subject',
    body: 'body',
    scheduledAt: 'scheduledAt',
    sentAt: 'sentAt',
    metadata: 'metadata',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const EmailMessageScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    campaignId: 'campaignId',
    toEmail: 'toEmail',
    subject: 'subject',
    body: 'body',
    status: 'status',
    sentAt: 'sentAt',
    openedAt: 'openedAt',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type EmailMessageScalarFieldEnum = (typeof EmailMessageScalarFieldEnum)[keyof typeof EmailMessageScalarFieldEnum]


  export const SubscriberScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    source: 'source',
    status: 'status',
    tags: 'tags',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriberScalarFieldEnum = (typeof SubscriberScalarFieldEnum)[keyof typeof SubscriberScalarFieldEnum]


  export const AutomationScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    createdBy: 'createdBy',
    name: 'name',
    trigger: 'trigger',
    conditions: 'conditions',
    actions: 'actions',
    status: 'status',
    runCount: 'runCount',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AutomationScalarFieldEnum = (typeof AutomationScalarFieldEnum)[keyof typeof AutomationScalarFieldEnum]


  export const OptinFormScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    createdBy: 'createdBy',
    name: 'name',
    slug: 'slug',
    fields: 'fields',
    settings: 'settings',
    isPublished: 'isPublished',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OptinFormScalarFieldEnum = (typeof OptinFormScalarFieldEnum)[keyof typeof OptinFormScalarFieldEnum]


  export const OmniBroadcastScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    createdBy: 'createdBy',
    name: 'name',
    provider: 'provider',
    phonebookId: 'phonebookId',
    message: 'message',
    mediaUrl: 'mediaUrl',
    status: 'status',
    totalCount: 'totalCount',
    sentCount: 'sentCount',
    failedCount: 'failedCount',
    scheduledAt: 'scheduledAt',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OmniBroadcastScalarFieldEnum = (typeof OmniBroadcastScalarFieldEnum)[keyof typeof OmniBroadcastScalarFieldEnum]


  export const OmniBroadcastLogScalarFieldEnum: {
    id: 'id',
    broadcastId: 'broadcastId',
    contactId: 'contactId',
    phone: 'phone',
    status: 'status',
    error: 'error',
    metadata: 'metadata',
    sentAt: 'sentAt',
    createdAt: 'createdAt'
  };

  export type OmniBroadcastLogScalarFieldEnum = (typeof OmniBroadcastLogScalarFieldEnum)[keyof typeof OmniBroadcastLogScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    id?: UuidFilter<"Campaign"> | string
    orgId?: UuidFilter<"Campaign"> | string
    createdBy?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    type?: StringFilter<"Campaign"> | string
    status?: StringFilter<"Campaign"> | string
    subject?: StringNullableFilter<"Campaign"> | string | null
    body?: StringNullableFilter<"Campaign"> | string | null
    scheduledAt?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    sentAt?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    metadata?: JsonFilter<"Campaign">
    isDeleted?: BoolFilter<"Campaign"> | boolean
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    emails?: EmailMessageListRelationFilter
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    subject?: SortOrderInput | SortOrder
    body?: SortOrderInput | SortOrder
    scheduledAt?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    metadata?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emails?: EmailMessageOrderByRelationAggregateInput
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    orgId?: UuidFilter<"Campaign"> | string
    createdBy?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    type?: StringFilter<"Campaign"> | string
    status?: StringFilter<"Campaign"> | string
    subject?: StringNullableFilter<"Campaign"> | string | null
    body?: StringNullableFilter<"Campaign"> | string | null
    scheduledAt?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    sentAt?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    metadata?: JsonFilter<"Campaign">
    isDeleted?: BoolFilter<"Campaign"> | boolean
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    emails?: EmailMessageListRelationFilter
  }, "id">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    subject?: SortOrderInput | SortOrder
    body?: SortOrderInput | SortOrder
    scheduledAt?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    metadata?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Campaign"> | string
    orgId?: UuidWithAggregatesFilter<"Campaign"> | string
    createdBy?: StringWithAggregatesFilter<"Campaign"> | string
    name?: StringWithAggregatesFilter<"Campaign"> | string
    type?: StringWithAggregatesFilter<"Campaign"> | string
    status?: StringWithAggregatesFilter<"Campaign"> | string
    subject?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    body?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    scheduledAt?: DateTimeNullableWithAggregatesFilter<"Campaign"> | Date | string | null
    sentAt?: DateTimeNullableWithAggregatesFilter<"Campaign"> | Date | string | null
    metadata?: JsonWithAggregatesFilter<"Campaign">
    isDeleted?: BoolWithAggregatesFilter<"Campaign"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
  }

  export type EmailMessageWhereInput = {
    AND?: EmailMessageWhereInput | EmailMessageWhereInput[]
    OR?: EmailMessageWhereInput[]
    NOT?: EmailMessageWhereInput | EmailMessageWhereInput[]
    id?: UuidFilter<"EmailMessage"> | string
    orgId?: UuidFilter<"EmailMessage"> | string
    campaignId?: UuidNullableFilter<"EmailMessage"> | string | null
    toEmail?: StringFilter<"EmailMessage"> | string
    subject?: StringFilter<"EmailMessage"> | string
    body?: StringFilter<"EmailMessage"> | string
    status?: StringFilter<"EmailMessage"> | string
    sentAt?: DateTimeNullableFilter<"EmailMessage"> | Date | string | null
    openedAt?: DateTimeNullableFilter<"EmailMessage"> | Date | string | null
    metadata?: JsonFilter<"EmailMessage">
    createdAt?: DateTimeFilter<"EmailMessage"> | Date | string
    campaign?: XOR<CampaignNullableScalarRelationFilter, CampaignWhereInput> | null
  }

  export type EmailMessageOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    campaignId?: SortOrderInput | SortOrder
    toEmail?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    openedAt?: SortOrderInput | SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
  }

  export type EmailMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmailMessageWhereInput | EmailMessageWhereInput[]
    OR?: EmailMessageWhereInput[]
    NOT?: EmailMessageWhereInput | EmailMessageWhereInput[]
    orgId?: UuidFilter<"EmailMessage"> | string
    campaignId?: UuidNullableFilter<"EmailMessage"> | string | null
    toEmail?: StringFilter<"EmailMessage"> | string
    subject?: StringFilter<"EmailMessage"> | string
    body?: StringFilter<"EmailMessage"> | string
    status?: StringFilter<"EmailMessage"> | string
    sentAt?: DateTimeNullableFilter<"EmailMessage"> | Date | string | null
    openedAt?: DateTimeNullableFilter<"EmailMessage"> | Date | string | null
    metadata?: JsonFilter<"EmailMessage">
    createdAt?: DateTimeFilter<"EmailMessage"> | Date | string
    campaign?: XOR<CampaignNullableScalarRelationFilter, CampaignWhereInput> | null
  }, "id">

  export type EmailMessageOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    campaignId?: SortOrderInput | SortOrder
    toEmail?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    openedAt?: SortOrderInput | SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    _count?: EmailMessageCountOrderByAggregateInput
    _max?: EmailMessageMaxOrderByAggregateInput
    _min?: EmailMessageMinOrderByAggregateInput
  }

  export type EmailMessageScalarWhereWithAggregatesInput = {
    AND?: EmailMessageScalarWhereWithAggregatesInput | EmailMessageScalarWhereWithAggregatesInput[]
    OR?: EmailMessageScalarWhereWithAggregatesInput[]
    NOT?: EmailMessageScalarWhereWithAggregatesInput | EmailMessageScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"EmailMessage"> | string
    orgId?: UuidWithAggregatesFilter<"EmailMessage"> | string
    campaignId?: UuidNullableWithAggregatesFilter<"EmailMessage"> | string | null
    toEmail?: StringWithAggregatesFilter<"EmailMessage"> | string
    subject?: StringWithAggregatesFilter<"EmailMessage"> | string
    body?: StringWithAggregatesFilter<"EmailMessage"> | string
    status?: StringWithAggregatesFilter<"EmailMessage"> | string
    sentAt?: DateTimeNullableWithAggregatesFilter<"EmailMessage"> | Date | string | null
    openedAt?: DateTimeNullableWithAggregatesFilter<"EmailMessage"> | Date | string | null
    metadata?: JsonWithAggregatesFilter<"EmailMessage">
    createdAt?: DateTimeWithAggregatesFilter<"EmailMessage"> | Date | string
  }

  export type SubscriberWhereInput = {
    AND?: SubscriberWhereInput | SubscriberWhereInput[]
    OR?: SubscriberWhereInput[]
    NOT?: SubscriberWhereInput | SubscriberWhereInput[]
    id?: UuidFilter<"Subscriber"> | string
    orgId?: UuidFilter<"Subscriber"> | string
    email?: StringFilter<"Subscriber"> | string
    firstName?: StringNullableFilter<"Subscriber"> | string | null
    lastName?: StringNullableFilter<"Subscriber"> | string | null
    phone?: StringNullableFilter<"Subscriber"> | string | null
    source?: StringNullableFilter<"Subscriber"> | string | null
    status?: StringFilter<"Subscriber"> | string
    tags?: JsonFilter<"Subscriber">
    metadata?: JsonFilter<"Subscriber">
    createdAt?: DateTimeFilter<"Subscriber"> | Date | string
    updatedAt?: DateTimeFilter<"Subscriber"> | Date | string
  }

  export type SubscriberOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    email?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    status?: SortOrder
    tags?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orgId_email?: SubscriberOrgIdEmailCompoundUniqueInput
    AND?: SubscriberWhereInput | SubscriberWhereInput[]
    OR?: SubscriberWhereInput[]
    NOT?: SubscriberWhereInput | SubscriberWhereInput[]
    orgId?: UuidFilter<"Subscriber"> | string
    email?: StringFilter<"Subscriber"> | string
    firstName?: StringNullableFilter<"Subscriber"> | string | null
    lastName?: StringNullableFilter<"Subscriber"> | string | null
    phone?: StringNullableFilter<"Subscriber"> | string | null
    source?: StringNullableFilter<"Subscriber"> | string | null
    status?: StringFilter<"Subscriber"> | string
    tags?: JsonFilter<"Subscriber">
    metadata?: JsonFilter<"Subscriber">
    createdAt?: DateTimeFilter<"Subscriber"> | Date | string
    updatedAt?: DateTimeFilter<"Subscriber"> | Date | string
  }, "id" | "orgId_email">

  export type SubscriberOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    email?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    status?: SortOrder
    tags?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriberCountOrderByAggregateInput
    _max?: SubscriberMaxOrderByAggregateInput
    _min?: SubscriberMinOrderByAggregateInput
  }

  export type SubscriberScalarWhereWithAggregatesInput = {
    AND?: SubscriberScalarWhereWithAggregatesInput | SubscriberScalarWhereWithAggregatesInput[]
    OR?: SubscriberScalarWhereWithAggregatesInput[]
    NOT?: SubscriberScalarWhereWithAggregatesInput | SubscriberScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Subscriber"> | string
    orgId?: UuidWithAggregatesFilter<"Subscriber"> | string
    email?: StringWithAggregatesFilter<"Subscriber"> | string
    firstName?: StringNullableWithAggregatesFilter<"Subscriber"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"Subscriber"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Subscriber"> | string | null
    source?: StringNullableWithAggregatesFilter<"Subscriber"> | string | null
    status?: StringWithAggregatesFilter<"Subscriber"> | string
    tags?: JsonWithAggregatesFilter<"Subscriber">
    metadata?: JsonWithAggregatesFilter<"Subscriber">
    createdAt?: DateTimeWithAggregatesFilter<"Subscriber"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscriber"> | Date | string
  }

  export type AutomationWhereInput = {
    AND?: AutomationWhereInput | AutomationWhereInput[]
    OR?: AutomationWhereInput[]
    NOT?: AutomationWhereInput | AutomationWhereInput[]
    id?: UuidFilter<"Automation"> | string
    orgId?: UuidFilter<"Automation"> | string
    createdBy?: StringFilter<"Automation"> | string
    name?: StringFilter<"Automation"> | string
    trigger?: StringFilter<"Automation"> | string
    conditions?: JsonFilter<"Automation">
    actions?: JsonFilter<"Automation">
    status?: StringFilter<"Automation"> | string
    runCount?: IntFilter<"Automation"> | number
    isDeleted?: BoolFilter<"Automation"> | boolean
    createdAt?: DateTimeFilter<"Automation"> | Date | string
    updatedAt?: DateTimeFilter<"Automation"> | Date | string
  }

  export type AutomationOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    name?: SortOrder
    trigger?: SortOrder
    conditions?: SortOrder
    actions?: SortOrder
    status?: SortOrder
    runCount?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AutomationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AutomationWhereInput | AutomationWhereInput[]
    OR?: AutomationWhereInput[]
    NOT?: AutomationWhereInput | AutomationWhereInput[]
    orgId?: UuidFilter<"Automation"> | string
    createdBy?: StringFilter<"Automation"> | string
    name?: StringFilter<"Automation"> | string
    trigger?: StringFilter<"Automation"> | string
    conditions?: JsonFilter<"Automation">
    actions?: JsonFilter<"Automation">
    status?: StringFilter<"Automation"> | string
    runCount?: IntFilter<"Automation"> | number
    isDeleted?: BoolFilter<"Automation"> | boolean
    createdAt?: DateTimeFilter<"Automation"> | Date | string
    updatedAt?: DateTimeFilter<"Automation"> | Date | string
  }, "id">

  export type AutomationOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    name?: SortOrder
    trigger?: SortOrder
    conditions?: SortOrder
    actions?: SortOrder
    status?: SortOrder
    runCount?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AutomationCountOrderByAggregateInput
    _avg?: AutomationAvgOrderByAggregateInput
    _max?: AutomationMaxOrderByAggregateInput
    _min?: AutomationMinOrderByAggregateInput
    _sum?: AutomationSumOrderByAggregateInput
  }

  export type AutomationScalarWhereWithAggregatesInput = {
    AND?: AutomationScalarWhereWithAggregatesInput | AutomationScalarWhereWithAggregatesInput[]
    OR?: AutomationScalarWhereWithAggregatesInput[]
    NOT?: AutomationScalarWhereWithAggregatesInput | AutomationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Automation"> | string
    orgId?: UuidWithAggregatesFilter<"Automation"> | string
    createdBy?: StringWithAggregatesFilter<"Automation"> | string
    name?: StringWithAggregatesFilter<"Automation"> | string
    trigger?: StringWithAggregatesFilter<"Automation"> | string
    conditions?: JsonWithAggregatesFilter<"Automation">
    actions?: JsonWithAggregatesFilter<"Automation">
    status?: StringWithAggregatesFilter<"Automation"> | string
    runCount?: IntWithAggregatesFilter<"Automation"> | number
    isDeleted?: BoolWithAggregatesFilter<"Automation"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Automation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Automation"> | Date | string
  }

  export type OptinFormWhereInput = {
    AND?: OptinFormWhereInput | OptinFormWhereInput[]
    OR?: OptinFormWhereInput[]
    NOT?: OptinFormWhereInput | OptinFormWhereInput[]
    id?: UuidFilter<"OptinForm"> | string
    orgId?: UuidFilter<"OptinForm"> | string
    createdBy?: StringFilter<"OptinForm"> | string
    name?: StringFilter<"OptinForm"> | string
    slug?: StringFilter<"OptinForm"> | string
    fields?: JsonFilter<"OptinForm">
    settings?: JsonFilter<"OptinForm">
    isPublished?: BoolFilter<"OptinForm"> | boolean
    isDeleted?: BoolFilter<"OptinForm"> | boolean
    createdAt?: DateTimeFilter<"OptinForm"> | Date | string
    updatedAt?: DateTimeFilter<"OptinForm"> | Date | string
  }

  export type OptinFormOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    fields?: SortOrder
    settings?: SortOrder
    isPublished?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OptinFormWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: OptinFormWhereInput | OptinFormWhereInput[]
    OR?: OptinFormWhereInput[]
    NOT?: OptinFormWhereInput | OptinFormWhereInput[]
    orgId?: UuidFilter<"OptinForm"> | string
    createdBy?: StringFilter<"OptinForm"> | string
    name?: StringFilter<"OptinForm"> | string
    fields?: JsonFilter<"OptinForm">
    settings?: JsonFilter<"OptinForm">
    isPublished?: BoolFilter<"OptinForm"> | boolean
    isDeleted?: BoolFilter<"OptinForm"> | boolean
    createdAt?: DateTimeFilter<"OptinForm"> | Date | string
    updatedAt?: DateTimeFilter<"OptinForm"> | Date | string
  }, "id" | "slug">

  export type OptinFormOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    fields?: SortOrder
    settings?: SortOrder
    isPublished?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OptinFormCountOrderByAggregateInput
    _max?: OptinFormMaxOrderByAggregateInput
    _min?: OptinFormMinOrderByAggregateInput
  }

  export type OptinFormScalarWhereWithAggregatesInput = {
    AND?: OptinFormScalarWhereWithAggregatesInput | OptinFormScalarWhereWithAggregatesInput[]
    OR?: OptinFormScalarWhereWithAggregatesInput[]
    NOT?: OptinFormScalarWhereWithAggregatesInput | OptinFormScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"OptinForm"> | string
    orgId?: UuidWithAggregatesFilter<"OptinForm"> | string
    createdBy?: StringWithAggregatesFilter<"OptinForm"> | string
    name?: StringWithAggregatesFilter<"OptinForm"> | string
    slug?: StringWithAggregatesFilter<"OptinForm"> | string
    fields?: JsonWithAggregatesFilter<"OptinForm">
    settings?: JsonWithAggregatesFilter<"OptinForm">
    isPublished?: BoolWithAggregatesFilter<"OptinForm"> | boolean
    isDeleted?: BoolWithAggregatesFilter<"OptinForm"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"OptinForm"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OptinForm"> | Date | string
  }

  export type OmniBroadcastWhereInput = {
    AND?: OmniBroadcastWhereInput | OmniBroadcastWhereInput[]
    OR?: OmniBroadcastWhereInput[]
    NOT?: OmniBroadcastWhereInput | OmniBroadcastWhereInput[]
    id?: UuidFilter<"OmniBroadcast"> | string
    orgId?: UuidFilter<"OmniBroadcast"> | string
    createdBy?: StringFilter<"OmniBroadcast"> | string
    name?: StringFilter<"OmniBroadcast"> | string
    provider?: StringFilter<"OmniBroadcast"> | string
    phonebookId?: UuidNullableFilter<"OmniBroadcast"> | string | null
    message?: StringFilter<"OmniBroadcast"> | string
    mediaUrl?: StringNullableFilter<"OmniBroadcast"> | string | null
    status?: StringFilter<"OmniBroadcast"> | string
    totalCount?: IntFilter<"OmniBroadcast"> | number
    sentCount?: IntFilter<"OmniBroadcast"> | number
    failedCount?: IntFilter<"OmniBroadcast"> | number
    scheduledAt?: DateTimeNullableFilter<"OmniBroadcast"> | Date | string | null
    metadata?: JsonFilter<"OmniBroadcast">
    createdAt?: DateTimeFilter<"OmniBroadcast"> | Date | string
    updatedAt?: DateTimeFilter<"OmniBroadcast"> | Date | string
    logs?: OmniBroadcastLogListRelationFilter
  }

  export type OmniBroadcastOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    name?: SortOrder
    provider?: SortOrder
    phonebookId?: SortOrderInput | SortOrder
    message?: SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    totalCount?: SortOrder
    sentCount?: SortOrder
    failedCount?: SortOrder
    scheduledAt?: SortOrderInput | SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    logs?: OmniBroadcastLogOrderByRelationAggregateInput
  }

  export type OmniBroadcastWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OmniBroadcastWhereInput | OmniBroadcastWhereInput[]
    OR?: OmniBroadcastWhereInput[]
    NOT?: OmniBroadcastWhereInput | OmniBroadcastWhereInput[]
    orgId?: UuidFilter<"OmniBroadcast"> | string
    createdBy?: StringFilter<"OmniBroadcast"> | string
    name?: StringFilter<"OmniBroadcast"> | string
    provider?: StringFilter<"OmniBroadcast"> | string
    phonebookId?: UuidNullableFilter<"OmniBroadcast"> | string | null
    message?: StringFilter<"OmniBroadcast"> | string
    mediaUrl?: StringNullableFilter<"OmniBroadcast"> | string | null
    status?: StringFilter<"OmniBroadcast"> | string
    totalCount?: IntFilter<"OmniBroadcast"> | number
    sentCount?: IntFilter<"OmniBroadcast"> | number
    failedCount?: IntFilter<"OmniBroadcast"> | number
    scheduledAt?: DateTimeNullableFilter<"OmniBroadcast"> | Date | string | null
    metadata?: JsonFilter<"OmniBroadcast">
    createdAt?: DateTimeFilter<"OmniBroadcast"> | Date | string
    updatedAt?: DateTimeFilter<"OmniBroadcast"> | Date | string
    logs?: OmniBroadcastLogListRelationFilter
  }, "id">

  export type OmniBroadcastOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    name?: SortOrder
    provider?: SortOrder
    phonebookId?: SortOrderInput | SortOrder
    message?: SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    totalCount?: SortOrder
    sentCount?: SortOrder
    failedCount?: SortOrder
    scheduledAt?: SortOrderInput | SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OmniBroadcastCountOrderByAggregateInput
    _avg?: OmniBroadcastAvgOrderByAggregateInput
    _max?: OmniBroadcastMaxOrderByAggregateInput
    _min?: OmniBroadcastMinOrderByAggregateInput
    _sum?: OmniBroadcastSumOrderByAggregateInput
  }

  export type OmniBroadcastScalarWhereWithAggregatesInput = {
    AND?: OmniBroadcastScalarWhereWithAggregatesInput | OmniBroadcastScalarWhereWithAggregatesInput[]
    OR?: OmniBroadcastScalarWhereWithAggregatesInput[]
    NOT?: OmniBroadcastScalarWhereWithAggregatesInput | OmniBroadcastScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"OmniBroadcast"> | string
    orgId?: UuidWithAggregatesFilter<"OmniBroadcast"> | string
    createdBy?: StringWithAggregatesFilter<"OmniBroadcast"> | string
    name?: StringWithAggregatesFilter<"OmniBroadcast"> | string
    provider?: StringWithAggregatesFilter<"OmniBroadcast"> | string
    phonebookId?: UuidNullableWithAggregatesFilter<"OmniBroadcast"> | string | null
    message?: StringWithAggregatesFilter<"OmniBroadcast"> | string
    mediaUrl?: StringNullableWithAggregatesFilter<"OmniBroadcast"> | string | null
    status?: StringWithAggregatesFilter<"OmniBroadcast"> | string
    totalCount?: IntWithAggregatesFilter<"OmniBroadcast"> | number
    sentCount?: IntWithAggregatesFilter<"OmniBroadcast"> | number
    failedCount?: IntWithAggregatesFilter<"OmniBroadcast"> | number
    scheduledAt?: DateTimeNullableWithAggregatesFilter<"OmniBroadcast"> | Date | string | null
    metadata?: JsonWithAggregatesFilter<"OmniBroadcast">
    createdAt?: DateTimeWithAggregatesFilter<"OmniBroadcast"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OmniBroadcast"> | Date | string
  }

  export type OmniBroadcastLogWhereInput = {
    AND?: OmniBroadcastLogWhereInput | OmniBroadcastLogWhereInput[]
    OR?: OmniBroadcastLogWhereInput[]
    NOT?: OmniBroadcastLogWhereInput | OmniBroadcastLogWhereInput[]
    id?: UuidFilter<"OmniBroadcastLog"> | string
    broadcastId?: UuidFilter<"OmniBroadcastLog"> | string
    contactId?: UuidNullableFilter<"OmniBroadcastLog"> | string | null
    phone?: StringFilter<"OmniBroadcastLog"> | string
    status?: StringFilter<"OmniBroadcastLog"> | string
    error?: StringNullableFilter<"OmniBroadcastLog"> | string | null
    metadata?: JsonFilter<"OmniBroadcastLog">
    sentAt?: DateTimeNullableFilter<"OmniBroadcastLog"> | Date | string | null
    createdAt?: DateTimeFilter<"OmniBroadcastLog"> | Date | string
    broadcast?: XOR<OmniBroadcastScalarRelationFilter, OmniBroadcastWhereInput>
  }

  export type OmniBroadcastLogOrderByWithRelationInput = {
    id?: SortOrder
    broadcastId?: SortOrder
    contactId?: SortOrderInput | SortOrder
    phone?: SortOrder
    status?: SortOrder
    error?: SortOrderInput | SortOrder
    metadata?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    broadcast?: OmniBroadcastOrderByWithRelationInput
  }

  export type OmniBroadcastLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OmniBroadcastLogWhereInput | OmniBroadcastLogWhereInput[]
    OR?: OmniBroadcastLogWhereInput[]
    NOT?: OmniBroadcastLogWhereInput | OmniBroadcastLogWhereInput[]
    broadcastId?: UuidFilter<"OmniBroadcastLog"> | string
    contactId?: UuidNullableFilter<"OmniBroadcastLog"> | string | null
    phone?: StringFilter<"OmniBroadcastLog"> | string
    status?: StringFilter<"OmniBroadcastLog"> | string
    error?: StringNullableFilter<"OmniBroadcastLog"> | string | null
    metadata?: JsonFilter<"OmniBroadcastLog">
    sentAt?: DateTimeNullableFilter<"OmniBroadcastLog"> | Date | string | null
    createdAt?: DateTimeFilter<"OmniBroadcastLog"> | Date | string
    broadcast?: XOR<OmniBroadcastScalarRelationFilter, OmniBroadcastWhereInput>
  }, "id">

  export type OmniBroadcastLogOrderByWithAggregationInput = {
    id?: SortOrder
    broadcastId?: SortOrder
    contactId?: SortOrderInput | SortOrder
    phone?: SortOrder
    status?: SortOrder
    error?: SortOrderInput | SortOrder
    metadata?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: OmniBroadcastLogCountOrderByAggregateInput
    _max?: OmniBroadcastLogMaxOrderByAggregateInput
    _min?: OmniBroadcastLogMinOrderByAggregateInput
  }

  export type OmniBroadcastLogScalarWhereWithAggregatesInput = {
    AND?: OmniBroadcastLogScalarWhereWithAggregatesInput | OmniBroadcastLogScalarWhereWithAggregatesInput[]
    OR?: OmniBroadcastLogScalarWhereWithAggregatesInput[]
    NOT?: OmniBroadcastLogScalarWhereWithAggregatesInput | OmniBroadcastLogScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"OmniBroadcastLog"> | string
    broadcastId?: UuidWithAggregatesFilter<"OmniBroadcastLog"> | string
    contactId?: UuidNullableWithAggregatesFilter<"OmniBroadcastLog"> | string | null
    phone?: StringWithAggregatesFilter<"OmniBroadcastLog"> | string
    status?: StringWithAggregatesFilter<"OmniBroadcastLog"> | string
    error?: StringNullableWithAggregatesFilter<"OmniBroadcastLog"> | string | null
    metadata?: JsonWithAggregatesFilter<"OmniBroadcastLog">
    sentAt?: DateTimeNullableWithAggregatesFilter<"OmniBroadcastLog"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OmniBroadcastLog"> | Date | string
  }

  export type CampaignCreateInput = {
    id?: string
    orgId: string
    createdBy: string
    name: string
    type?: string
    status?: string
    subject?: string | null
    body?: string | null
    scheduledAt?: Date | string | null
    sentAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emails?: EmailMessageCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateInput = {
    id?: string
    orgId: string
    createdBy: string
    name: string
    type?: string
    status?: string
    subject?: string | null
    body?: string | null
    scheduledAt?: Date | string | null
    sentAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emails?: EmailMessageUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailMessageUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailMessageUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateManyInput = {
    id?: string
    orgId: string
    createdBy: string
    name: string
    type?: string
    status?: string
    subject?: string | null
    body?: string | null
    scheduledAt?: Date | string | null
    sentAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailMessageCreateInput = {
    id?: string
    orgId: string
    toEmail: string
    subject: string
    body: string
    status?: string
    sentAt?: Date | string | null
    openedAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    campaign?: CampaignCreateNestedOneWithoutEmailsInput
  }

  export type EmailMessageUncheckedCreateInput = {
    id?: string
    orgId: string
    campaignId?: string | null
    toEmail: string
    subject: string
    body: string
    status?: string
    sentAt?: Date | string | null
    openedAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EmailMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    toEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneWithoutEmailsNestedInput
  }

  export type EmailMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    toEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailMessageCreateManyInput = {
    id?: string
    orgId: string
    campaignId?: string | null
    toEmail: string
    subject: string
    body: string
    status?: string
    sentAt?: Date | string | null
    openedAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EmailMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    toEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    toEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriberCreateInput = {
    id?: string
    orgId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    source?: string | null
    status?: string
    tags?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriberUncheckedCreateInput = {
    id?: string
    orgId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    source?: string | null
    status?: string
    tags?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriberCreateManyInput = {
    id?: string
    orgId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    source?: string | null
    status?: string
    tags?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutomationCreateInput = {
    id?: string
    orgId: string
    createdBy: string
    name: string
    trigger: string
    conditions?: JsonNullValueInput | InputJsonValue
    actions?: JsonNullValueInput | InputJsonValue
    status?: string
    runCount?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AutomationUncheckedCreateInput = {
    id?: string
    orgId: string
    createdBy: string
    name: string
    trigger: string
    conditions?: JsonNullValueInput | InputJsonValue
    actions?: JsonNullValueInput | InputJsonValue
    status?: string
    runCount?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AutomationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    conditions?: JsonNullValueInput | InputJsonValue
    actions?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    runCount?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutomationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    conditions?: JsonNullValueInput | InputJsonValue
    actions?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    runCount?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutomationCreateManyInput = {
    id?: string
    orgId: string
    createdBy: string
    name: string
    trigger: string
    conditions?: JsonNullValueInput | InputJsonValue
    actions?: JsonNullValueInput | InputJsonValue
    status?: string
    runCount?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AutomationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    conditions?: JsonNullValueInput | InputJsonValue
    actions?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    runCount?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutomationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    conditions?: JsonNullValueInput | InputJsonValue
    actions?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    runCount?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OptinFormCreateInput = {
    id?: string
    orgId: string
    createdBy: string
    name: string
    slug: string
    fields?: JsonNullValueInput | InputJsonValue
    settings?: JsonNullValueInput | InputJsonValue
    isPublished?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OptinFormUncheckedCreateInput = {
    id?: string
    orgId: string
    createdBy: string
    name: string
    slug: string
    fields?: JsonNullValueInput | InputJsonValue
    settings?: JsonNullValueInput | InputJsonValue
    isPublished?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OptinFormUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    fields?: JsonNullValueInput | InputJsonValue
    settings?: JsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OptinFormUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    fields?: JsonNullValueInput | InputJsonValue
    settings?: JsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OptinFormCreateManyInput = {
    id?: string
    orgId: string
    createdBy: string
    name: string
    slug: string
    fields?: JsonNullValueInput | InputJsonValue
    settings?: JsonNullValueInput | InputJsonValue
    isPublished?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OptinFormUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    fields?: JsonNullValueInput | InputJsonValue
    settings?: JsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OptinFormUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    fields?: JsonNullValueInput | InputJsonValue
    settings?: JsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OmniBroadcastCreateInput = {
    id?: string
    orgId: string
    createdBy: string
    name: string
    provider: string
    phonebookId?: string | null
    message: string
    mediaUrl?: string | null
    status?: string
    totalCount?: number
    sentCount?: number
    failedCount?: number
    scheduledAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: OmniBroadcastLogCreateNestedManyWithoutBroadcastInput
  }

  export type OmniBroadcastUncheckedCreateInput = {
    id?: string
    orgId: string
    createdBy: string
    name: string
    provider: string
    phonebookId?: string | null
    message: string
    mediaUrl?: string | null
    status?: string
    totalCount?: number
    sentCount?: number
    failedCount?: number
    scheduledAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: OmniBroadcastLogUncheckedCreateNestedManyWithoutBroadcastInput
  }

  export type OmniBroadcastUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    phonebookId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalCount?: IntFieldUpdateOperationsInput | number
    sentCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: OmniBroadcastLogUpdateManyWithoutBroadcastNestedInput
  }

  export type OmniBroadcastUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    phonebookId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalCount?: IntFieldUpdateOperationsInput | number
    sentCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: OmniBroadcastLogUncheckedUpdateManyWithoutBroadcastNestedInput
  }

  export type OmniBroadcastCreateManyInput = {
    id?: string
    orgId: string
    createdBy: string
    name: string
    provider: string
    phonebookId?: string | null
    message: string
    mediaUrl?: string | null
    status?: string
    totalCount?: number
    sentCount?: number
    failedCount?: number
    scheduledAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OmniBroadcastUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    phonebookId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalCount?: IntFieldUpdateOperationsInput | number
    sentCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OmniBroadcastUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    phonebookId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalCount?: IntFieldUpdateOperationsInput | number
    sentCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OmniBroadcastLogCreateInput = {
    id?: string
    contactId?: string | null
    phone: string
    status?: string
    error?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    sentAt?: Date | string | null
    createdAt?: Date | string
    broadcast: OmniBroadcastCreateNestedOneWithoutLogsInput
  }

  export type OmniBroadcastLogUncheckedCreateInput = {
    id?: string
    broadcastId: string
    contactId?: string | null
    phone: string
    status?: string
    error?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    sentAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OmniBroadcastLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    broadcast?: OmniBroadcastUpdateOneRequiredWithoutLogsNestedInput
  }

  export type OmniBroadcastLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    broadcastId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OmniBroadcastLogCreateManyInput = {
    id?: string
    broadcastId: string
    contactId?: string | null
    phone: string
    status?: string
    error?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    sentAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OmniBroadcastLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OmniBroadcastLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    broadcastId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type EmailMessageListRelationFilter = {
    every?: EmailMessageWhereInput
    some?: EmailMessageWhereInput
    none?: EmailMessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmailMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    scheduledAt?: SortOrder
    sentAt?: SortOrder
    metadata?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    scheduledAt?: SortOrder
    sentAt?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    scheduledAt?: SortOrder
    sentAt?: SortOrder
    isDeleted?: SortOrder
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

  export type CampaignNullableScalarRelationFilter = {
    is?: CampaignWhereInput | null
    isNot?: CampaignWhereInput | null
  }

  export type EmailMessageCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    campaignId?: SortOrder
    toEmail?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    openedAt?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    campaignId?: SortOrder
    toEmail?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    openedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailMessageMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    campaignId?: SortOrder
    toEmail?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    openedAt?: SortOrder
    createdAt?: SortOrder
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

  export type SubscriberOrgIdEmailCompoundUniqueInput = {
    orgId: string
    email: string
  }

  export type SubscriberCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    source?: SortOrder
    status?: SortOrder
    tags?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriberMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    source?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriberMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    source?: SortOrder
    status?: SortOrder
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

  export type AutomationCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    name?: SortOrder
    trigger?: SortOrder
    conditions?: SortOrder
    actions?: SortOrder
    status?: SortOrder
    runCount?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AutomationAvgOrderByAggregateInput = {
    runCount?: SortOrder
  }

  export type AutomationMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    name?: SortOrder
    trigger?: SortOrder
    status?: SortOrder
    runCount?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AutomationMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    name?: SortOrder
    trigger?: SortOrder
    status?: SortOrder
    runCount?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AutomationSumOrderByAggregateInput = {
    runCount?: SortOrder
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

  export type OptinFormCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    fields?: SortOrder
    settings?: SortOrder
    isPublished?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OptinFormMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    isPublished?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OptinFormMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    isPublished?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OmniBroadcastLogListRelationFilter = {
    every?: OmniBroadcastLogWhereInput
    some?: OmniBroadcastLogWhereInput
    none?: OmniBroadcastLogWhereInput
  }

  export type OmniBroadcastLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OmniBroadcastCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    name?: SortOrder
    provider?: SortOrder
    phonebookId?: SortOrder
    message?: SortOrder
    mediaUrl?: SortOrder
    status?: SortOrder
    totalCount?: SortOrder
    sentCount?: SortOrder
    failedCount?: SortOrder
    scheduledAt?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OmniBroadcastAvgOrderByAggregateInput = {
    totalCount?: SortOrder
    sentCount?: SortOrder
    failedCount?: SortOrder
  }

  export type OmniBroadcastMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    name?: SortOrder
    provider?: SortOrder
    phonebookId?: SortOrder
    message?: SortOrder
    mediaUrl?: SortOrder
    status?: SortOrder
    totalCount?: SortOrder
    sentCount?: SortOrder
    failedCount?: SortOrder
    scheduledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OmniBroadcastMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    name?: SortOrder
    provider?: SortOrder
    phonebookId?: SortOrder
    message?: SortOrder
    mediaUrl?: SortOrder
    status?: SortOrder
    totalCount?: SortOrder
    sentCount?: SortOrder
    failedCount?: SortOrder
    scheduledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OmniBroadcastSumOrderByAggregateInput = {
    totalCount?: SortOrder
    sentCount?: SortOrder
    failedCount?: SortOrder
  }

  export type OmniBroadcastScalarRelationFilter = {
    is?: OmniBroadcastWhereInput
    isNot?: OmniBroadcastWhereInput
  }

  export type OmniBroadcastLogCountOrderByAggregateInput = {
    id?: SortOrder
    broadcastId?: SortOrder
    contactId?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    error?: SortOrder
    metadata?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OmniBroadcastLogMaxOrderByAggregateInput = {
    id?: SortOrder
    broadcastId?: SortOrder
    contactId?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    error?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OmniBroadcastLogMinOrderByAggregateInput = {
    id?: SortOrder
    broadcastId?: SortOrder
    contactId?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    error?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailMessageCreateNestedManyWithoutCampaignInput = {
    create?: XOR<EmailMessageCreateWithoutCampaignInput, EmailMessageUncheckedCreateWithoutCampaignInput> | EmailMessageCreateWithoutCampaignInput[] | EmailMessageUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: EmailMessageCreateOrConnectWithoutCampaignInput | EmailMessageCreateOrConnectWithoutCampaignInput[]
    createMany?: EmailMessageCreateManyCampaignInputEnvelope
    connect?: EmailMessageWhereUniqueInput | EmailMessageWhereUniqueInput[]
  }

  export type EmailMessageUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<EmailMessageCreateWithoutCampaignInput, EmailMessageUncheckedCreateWithoutCampaignInput> | EmailMessageCreateWithoutCampaignInput[] | EmailMessageUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: EmailMessageCreateOrConnectWithoutCampaignInput | EmailMessageCreateOrConnectWithoutCampaignInput[]
    createMany?: EmailMessageCreateManyCampaignInputEnvelope
    connect?: EmailMessageWhereUniqueInput | EmailMessageWhereUniqueInput[]
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

  export type EmailMessageUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<EmailMessageCreateWithoutCampaignInput, EmailMessageUncheckedCreateWithoutCampaignInput> | EmailMessageCreateWithoutCampaignInput[] | EmailMessageUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: EmailMessageCreateOrConnectWithoutCampaignInput | EmailMessageCreateOrConnectWithoutCampaignInput[]
    upsert?: EmailMessageUpsertWithWhereUniqueWithoutCampaignInput | EmailMessageUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: EmailMessageCreateManyCampaignInputEnvelope
    set?: EmailMessageWhereUniqueInput | EmailMessageWhereUniqueInput[]
    disconnect?: EmailMessageWhereUniqueInput | EmailMessageWhereUniqueInput[]
    delete?: EmailMessageWhereUniqueInput | EmailMessageWhereUniqueInput[]
    connect?: EmailMessageWhereUniqueInput | EmailMessageWhereUniqueInput[]
    update?: EmailMessageUpdateWithWhereUniqueWithoutCampaignInput | EmailMessageUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: EmailMessageUpdateManyWithWhereWithoutCampaignInput | EmailMessageUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: EmailMessageScalarWhereInput | EmailMessageScalarWhereInput[]
  }

  export type EmailMessageUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<EmailMessageCreateWithoutCampaignInput, EmailMessageUncheckedCreateWithoutCampaignInput> | EmailMessageCreateWithoutCampaignInput[] | EmailMessageUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: EmailMessageCreateOrConnectWithoutCampaignInput | EmailMessageCreateOrConnectWithoutCampaignInput[]
    upsert?: EmailMessageUpsertWithWhereUniqueWithoutCampaignInput | EmailMessageUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: EmailMessageCreateManyCampaignInputEnvelope
    set?: EmailMessageWhereUniqueInput | EmailMessageWhereUniqueInput[]
    disconnect?: EmailMessageWhereUniqueInput | EmailMessageWhereUniqueInput[]
    delete?: EmailMessageWhereUniqueInput | EmailMessageWhereUniqueInput[]
    connect?: EmailMessageWhereUniqueInput | EmailMessageWhereUniqueInput[]
    update?: EmailMessageUpdateWithWhereUniqueWithoutCampaignInput | EmailMessageUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: EmailMessageUpdateManyWithWhereWithoutCampaignInput | EmailMessageUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: EmailMessageScalarWhereInput | EmailMessageScalarWhereInput[]
  }

  export type CampaignCreateNestedOneWithoutEmailsInput = {
    create?: XOR<CampaignCreateWithoutEmailsInput, CampaignUncheckedCreateWithoutEmailsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutEmailsInput
    connect?: CampaignWhereUniqueInput
  }

  export type CampaignUpdateOneWithoutEmailsNestedInput = {
    create?: XOR<CampaignCreateWithoutEmailsInput, CampaignUncheckedCreateWithoutEmailsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutEmailsInput
    upsert?: CampaignUpsertWithoutEmailsInput
    disconnect?: CampaignWhereInput | boolean
    delete?: CampaignWhereInput | boolean
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutEmailsInput, CampaignUpdateWithoutEmailsInput>, CampaignUncheckedUpdateWithoutEmailsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OmniBroadcastLogCreateNestedManyWithoutBroadcastInput = {
    create?: XOR<OmniBroadcastLogCreateWithoutBroadcastInput, OmniBroadcastLogUncheckedCreateWithoutBroadcastInput> | OmniBroadcastLogCreateWithoutBroadcastInput[] | OmniBroadcastLogUncheckedCreateWithoutBroadcastInput[]
    connectOrCreate?: OmniBroadcastLogCreateOrConnectWithoutBroadcastInput | OmniBroadcastLogCreateOrConnectWithoutBroadcastInput[]
    createMany?: OmniBroadcastLogCreateManyBroadcastInputEnvelope
    connect?: OmniBroadcastLogWhereUniqueInput | OmniBroadcastLogWhereUniqueInput[]
  }

  export type OmniBroadcastLogUncheckedCreateNestedManyWithoutBroadcastInput = {
    create?: XOR<OmniBroadcastLogCreateWithoutBroadcastInput, OmniBroadcastLogUncheckedCreateWithoutBroadcastInput> | OmniBroadcastLogCreateWithoutBroadcastInput[] | OmniBroadcastLogUncheckedCreateWithoutBroadcastInput[]
    connectOrCreate?: OmniBroadcastLogCreateOrConnectWithoutBroadcastInput | OmniBroadcastLogCreateOrConnectWithoutBroadcastInput[]
    createMany?: OmniBroadcastLogCreateManyBroadcastInputEnvelope
    connect?: OmniBroadcastLogWhereUniqueInput | OmniBroadcastLogWhereUniqueInput[]
  }

  export type OmniBroadcastLogUpdateManyWithoutBroadcastNestedInput = {
    create?: XOR<OmniBroadcastLogCreateWithoutBroadcastInput, OmniBroadcastLogUncheckedCreateWithoutBroadcastInput> | OmniBroadcastLogCreateWithoutBroadcastInput[] | OmniBroadcastLogUncheckedCreateWithoutBroadcastInput[]
    connectOrCreate?: OmniBroadcastLogCreateOrConnectWithoutBroadcastInput | OmniBroadcastLogCreateOrConnectWithoutBroadcastInput[]
    upsert?: OmniBroadcastLogUpsertWithWhereUniqueWithoutBroadcastInput | OmniBroadcastLogUpsertWithWhereUniqueWithoutBroadcastInput[]
    createMany?: OmniBroadcastLogCreateManyBroadcastInputEnvelope
    set?: OmniBroadcastLogWhereUniqueInput | OmniBroadcastLogWhereUniqueInput[]
    disconnect?: OmniBroadcastLogWhereUniqueInput | OmniBroadcastLogWhereUniqueInput[]
    delete?: OmniBroadcastLogWhereUniqueInput | OmniBroadcastLogWhereUniqueInput[]
    connect?: OmniBroadcastLogWhereUniqueInput | OmniBroadcastLogWhereUniqueInput[]
    update?: OmniBroadcastLogUpdateWithWhereUniqueWithoutBroadcastInput | OmniBroadcastLogUpdateWithWhereUniqueWithoutBroadcastInput[]
    updateMany?: OmniBroadcastLogUpdateManyWithWhereWithoutBroadcastInput | OmniBroadcastLogUpdateManyWithWhereWithoutBroadcastInput[]
    deleteMany?: OmniBroadcastLogScalarWhereInput | OmniBroadcastLogScalarWhereInput[]
  }

  export type OmniBroadcastLogUncheckedUpdateManyWithoutBroadcastNestedInput = {
    create?: XOR<OmniBroadcastLogCreateWithoutBroadcastInput, OmniBroadcastLogUncheckedCreateWithoutBroadcastInput> | OmniBroadcastLogCreateWithoutBroadcastInput[] | OmniBroadcastLogUncheckedCreateWithoutBroadcastInput[]
    connectOrCreate?: OmniBroadcastLogCreateOrConnectWithoutBroadcastInput | OmniBroadcastLogCreateOrConnectWithoutBroadcastInput[]
    upsert?: OmniBroadcastLogUpsertWithWhereUniqueWithoutBroadcastInput | OmniBroadcastLogUpsertWithWhereUniqueWithoutBroadcastInput[]
    createMany?: OmniBroadcastLogCreateManyBroadcastInputEnvelope
    set?: OmniBroadcastLogWhereUniqueInput | OmniBroadcastLogWhereUniqueInput[]
    disconnect?: OmniBroadcastLogWhereUniqueInput | OmniBroadcastLogWhereUniqueInput[]
    delete?: OmniBroadcastLogWhereUniqueInput | OmniBroadcastLogWhereUniqueInput[]
    connect?: OmniBroadcastLogWhereUniqueInput | OmniBroadcastLogWhereUniqueInput[]
    update?: OmniBroadcastLogUpdateWithWhereUniqueWithoutBroadcastInput | OmniBroadcastLogUpdateWithWhereUniqueWithoutBroadcastInput[]
    updateMany?: OmniBroadcastLogUpdateManyWithWhereWithoutBroadcastInput | OmniBroadcastLogUpdateManyWithWhereWithoutBroadcastInput[]
    deleteMany?: OmniBroadcastLogScalarWhereInput | OmniBroadcastLogScalarWhereInput[]
  }

  export type OmniBroadcastCreateNestedOneWithoutLogsInput = {
    create?: XOR<OmniBroadcastCreateWithoutLogsInput, OmniBroadcastUncheckedCreateWithoutLogsInput>
    connectOrCreate?: OmniBroadcastCreateOrConnectWithoutLogsInput
    connect?: OmniBroadcastWhereUniqueInput
  }

  export type OmniBroadcastUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<OmniBroadcastCreateWithoutLogsInput, OmniBroadcastUncheckedCreateWithoutLogsInput>
    connectOrCreate?: OmniBroadcastCreateOrConnectWithoutLogsInput
    upsert?: OmniBroadcastUpsertWithoutLogsInput
    connect?: OmniBroadcastWhereUniqueInput
    update?: XOR<XOR<OmniBroadcastUpdateToOneWithWhereWithoutLogsInput, OmniBroadcastUpdateWithoutLogsInput>, OmniBroadcastUncheckedUpdateWithoutLogsInput>
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

  export type EmailMessageCreateWithoutCampaignInput = {
    id?: string
    orgId: string
    toEmail: string
    subject: string
    body: string
    status?: string
    sentAt?: Date | string | null
    openedAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EmailMessageUncheckedCreateWithoutCampaignInput = {
    id?: string
    orgId: string
    toEmail: string
    subject: string
    body: string
    status?: string
    sentAt?: Date | string | null
    openedAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EmailMessageCreateOrConnectWithoutCampaignInput = {
    where: EmailMessageWhereUniqueInput
    create: XOR<EmailMessageCreateWithoutCampaignInput, EmailMessageUncheckedCreateWithoutCampaignInput>
  }

  export type EmailMessageCreateManyCampaignInputEnvelope = {
    data: EmailMessageCreateManyCampaignInput | EmailMessageCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type EmailMessageUpsertWithWhereUniqueWithoutCampaignInput = {
    where: EmailMessageWhereUniqueInput
    update: XOR<EmailMessageUpdateWithoutCampaignInput, EmailMessageUncheckedUpdateWithoutCampaignInput>
    create: XOR<EmailMessageCreateWithoutCampaignInput, EmailMessageUncheckedCreateWithoutCampaignInput>
  }

  export type EmailMessageUpdateWithWhereUniqueWithoutCampaignInput = {
    where: EmailMessageWhereUniqueInput
    data: XOR<EmailMessageUpdateWithoutCampaignInput, EmailMessageUncheckedUpdateWithoutCampaignInput>
  }

  export type EmailMessageUpdateManyWithWhereWithoutCampaignInput = {
    where: EmailMessageScalarWhereInput
    data: XOR<EmailMessageUpdateManyMutationInput, EmailMessageUncheckedUpdateManyWithoutCampaignInput>
  }

  export type EmailMessageScalarWhereInput = {
    AND?: EmailMessageScalarWhereInput | EmailMessageScalarWhereInput[]
    OR?: EmailMessageScalarWhereInput[]
    NOT?: EmailMessageScalarWhereInput | EmailMessageScalarWhereInput[]
    id?: UuidFilter<"EmailMessage"> | string
    orgId?: UuidFilter<"EmailMessage"> | string
    campaignId?: UuidNullableFilter<"EmailMessage"> | string | null
    toEmail?: StringFilter<"EmailMessage"> | string
    subject?: StringFilter<"EmailMessage"> | string
    body?: StringFilter<"EmailMessage"> | string
    status?: StringFilter<"EmailMessage"> | string
    sentAt?: DateTimeNullableFilter<"EmailMessage"> | Date | string | null
    openedAt?: DateTimeNullableFilter<"EmailMessage"> | Date | string | null
    metadata?: JsonFilter<"EmailMessage">
    createdAt?: DateTimeFilter<"EmailMessage"> | Date | string
  }

  export type CampaignCreateWithoutEmailsInput = {
    id?: string
    orgId: string
    createdBy: string
    name: string
    type?: string
    status?: string
    subject?: string | null
    body?: string | null
    scheduledAt?: Date | string | null
    sentAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignUncheckedCreateWithoutEmailsInput = {
    id?: string
    orgId: string
    createdBy: string
    name: string
    type?: string
    status?: string
    subject?: string | null
    body?: string | null
    scheduledAt?: Date | string | null
    sentAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignCreateOrConnectWithoutEmailsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutEmailsInput, CampaignUncheckedCreateWithoutEmailsInput>
  }

  export type CampaignUpsertWithoutEmailsInput = {
    update: XOR<CampaignUpdateWithoutEmailsInput, CampaignUncheckedUpdateWithoutEmailsInput>
    create: XOR<CampaignCreateWithoutEmailsInput, CampaignUncheckedCreateWithoutEmailsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutEmailsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutEmailsInput, CampaignUncheckedUpdateWithoutEmailsInput>
  }

  export type CampaignUpdateWithoutEmailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateWithoutEmailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OmniBroadcastLogCreateWithoutBroadcastInput = {
    id?: string
    contactId?: string | null
    phone: string
    status?: string
    error?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    sentAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OmniBroadcastLogUncheckedCreateWithoutBroadcastInput = {
    id?: string
    contactId?: string | null
    phone: string
    status?: string
    error?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    sentAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OmniBroadcastLogCreateOrConnectWithoutBroadcastInput = {
    where: OmniBroadcastLogWhereUniqueInput
    create: XOR<OmniBroadcastLogCreateWithoutBroadcastInput, OmniBroadcastLogUncheckedCreateWithoutBroadcastInput>
  }

  export type OmniBroadcastLogCreateManyBroadcastInputEnvelope = {
    data: OmniBroadcastLogCreateManyBroadcastInput | OmniBroadcastLogCreateManyBroadcastInput[]
    skipDuplicates?: boolean
  }

  export type OmniBroadcastLogUpsertWithWhereUniqueWithoutBroadcastInput = {
    where: OmniBroadcastLogWhereUniqueInput
    update: XOR<OmniBroadcastLogUpdateWithoutBroadcastInput, OmniBroadcastLogUncheckedUpdateWithoutBroadcastInput>
    create: XOR<OmniBroadcastLogCreateWithoutBroadcastInput, OmniBroadcastLogUncheckedCreateWithoutBroadcastInput>
  }

  export type OmniBroadcastLogUpdateWithWhereUniqueWithoutBroadcastInput = {
    where: OmniBroadcastLogWhereUniqueInput
    data: XOR<OmniBroadcastLogUpdateWithoutBroadcastInput, OmniBroadcastLogUncheckedUpdateWithoutBroadcastInput>
  }

  export type OmniBroadcastLogUpdateManyWithWhereWithoutBroadcastInput = {
    where: OmniBroadcastLogScalarWhereInput
    data: XOR<OmniBroadcastLogUpdateManyMutationInput, OmniBroadcastLogUncheckedUpdateManyWithoutBroadcastInput>
  }

  export type OmniBroadcastLogScalarWhereInput = {
    AND?: OmniBroadcastLogScalarWhereInput | OmniBroadcastLogScalarWhereInput[]
    OR?: OmniBroadcastLogScalarWhereInput[]
    NOT?: OmniBroadcastLogScalarWhereInput | OmniBroadcastLogScalarWhereInput[]
    id?: UuidFilter<"OmniBroadcastLog"> | string
    broadcastId?: UuidFilter<"OmniBroadcastLog"> | string
    contactId?: UuidNullableFilter<"OmniBroadcastLog"> | string | null
    phone?: StringFilter<"OmniBroadcastLog"> | string
    status?: StringFilter<"OmniBroadcastLog"> | string
    error?: StringNullableFilter<"OmniBroadcastLog"> | string | null
    metadata?: JsonFilter<"OmniBroadcastLog">
    sentAt?: DateTimeNullableFilter<"OmniBroadcastLog"> | Date | string | null
    createdAt?: DateTimeFilter<"OmniBroadcastLog"> | Date | string
  }

  export type OmniBroadcastCreateWithoutLogsInput = {
    id?: string
    orgId: string
    createdBy: string
    name: string
    provider: string
    phonebookId?: string | null
    message: string
    mediaUrl?: string | null
    status?: string
    totalCount?: number
    sentCount?: number
    failedCount?: number
    scheduledAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OmniBroadcastUncheckedCreateWithoutLogsInput = {
    id?: string
    orgId: string
    createdBy: string
    name: string
    provider: string
    phonebookId?: string | null
    message: string
    mediaUrl?: string | null
    status?: string
    totalCount?: number
    sentCount?: number
    failedCount?: number
    scheduledAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OmniBroadcastCreateOrConnectWithoutLogsInput = {
    where: OmniBroadcastWhereUniqueInput
    create: XOR<OmniBroadcastCreateWithoutLogsInput, OmniBroadcastUncheckedCreateWithoutLogsInput>
  }

  export type OmniBroadcastUpsertWithoutLogsInput = {
    update: XOR<OmniBroadcastUpdateWithoutLogsInput, OmniBroadcastUncheckedUpdateWithoutLogsInput>
    create: XOR<OmniBroadcastCreateWithoutLogsInput, OmniBroadcastUncheckedCreateWithoutLogsInput>
    where?: OmniBroadcastWhereInput
  }

  export type OmniBroadcastUpdateToOneWithWhereWithoutLogsInput = {
    where?: OmniBroadcastWhereInput
    data: XOR<OmniBroadcastUpdateWithoutLogsInput, OmniBroadcastUncheckedUpdateWithoutLogsInput>
  }

  export type OmniBroadcastUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    phonebookId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalCount?: IntFieldUpdateOperationsInput | number
    sentCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OmniBroadcastUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    phonebookId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalCount?: IntFieldUpdateOperationsInput | number
    sentCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailMessageCreateManyCampaignInput = {
    id?: string
    orgId: string
    toEmail: string
    subject: string
    body: string
    status?: string
    sentAt?: Date | string | null
    openedAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EmailMessageUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    toEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailMessageUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    toEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailMessageUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    toEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OmniBroadcastLogCreateManyBroadcastInput = {
    id?: string
    contactId?: string | null
    phone: string
    status?: string
    error?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    sentAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OmniBroadcastLogUpdateWithoutBroadcastInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OmniBroadcastLogUncheckedUpdateWithoutBroadcastInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OmniBroadcastLogUncheckedUpdateManyWithoutBroadcastInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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