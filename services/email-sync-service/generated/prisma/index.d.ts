
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
 * Model EmailAccount
 * 
 */
export type EmailAccount = $Result.DefaultSelection<Prisma.$EmailAccountPayload>
/**
 * Model Email
 * 
 */
export type Email = $Result.DefaultSelection<Prisma.$EmailPayload>
/**
 * Model EmailThread
 * 
 */
export type EmailThread = $Result.DefaultSelection<Prisma.$EmailThreadPayload>
/**
 * Model SyncLog
 * 
 */
export type SyncLog = $Result.DefaultSelection<Prisma.$SyncLogPayload>
/**
 * Model EmailTemplate
 * 
 */
export type EmailTemplate = $Result.DefaultSelection<Prisma.$EmailTemplatePayload>
/**
 * Model EmailSequence
 * 
 */
export type EmailSequence = $Result.DefaultSelection<Prisma.$EmailSequencePayload>
/**
 * Model SequenceEnrollment
 * 
 */
export type SequenceEnrollment = $Result.DefaultSelection<Prisma.$SequenceEnrollmentPayload>
/**
 * Model SequenceActivity
 * 
 */
export type SequenceActivity = $Result.DefaultSelection<Prisma.$SequenceActivityPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more EmailAccounts
 * const emailAccounts = await prisma.emailAccount.findMany()
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
   * // Fetch zero or more EmailAccounts
   * const emailAccounts = await prisma.emailAccount.findMany()
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
   * `prisma.emailAccount`: Exposes CRUD operations for the **EmailAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailAccounts
    * const emailAccounts = await prisma.emailAccount.findMany()
    * ```
    */
  get emailAccount(): Prisma.EmailAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.email`: Exposes CRUD operations for the **Email** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emails
    * const emails = await prisma.email.findMany()
    * ```
    */
  get email(): Prisma.EmailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailThread`: Exposes CRUD operations for the **EmailThread** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailThreads
    * const emailThreads = await prisma.emailThread.findMany()
    * ```
    */
  get emailThread(): Prisma.EmailThreadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.syncLog`: Exposes CRUD operations for the **SyncLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SyncLogs
    * const syncLogs = await prisma.syncLog.findMany()
    * ```
    */
  get syncLog(): Prisma.SyncLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailTemplate`: Exposes CRUD operations for the **EmailTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailTemplates
    * const emailTemplates = await prisma.emailTemplate.findMany()
    * ```
    */
  get emailTemplate(): Prisma.EmailTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailSequence`: Exposes CRUD operations for the **EmailSequence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailSequences
    * const emailSequences = await prisma.emailSequence.findMany()
    * ```
    */
  get emailSequence(): Prisma.EmailSequenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sequenceEnrollment`: Exposes CRUD operations for the **SequenceEnrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SequenceEnrollments
    * const sequenceEnrollments = await prisma.sequenceEnrollment.findMany()
    * ```
    */
  get sequenceEnrollment(): Prisma.SequenceEnrollmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sequenceActivity`: Exposes CRUD operations for the **SequenceActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SequenceActivities
    * const sequenceActivities = await prisma.sequenceActivity.findMany()
    * ```
    */
  get sequenceActivity(): Prisma.SequenceActivityDelegate<ExtArgs, ClientOptions>;
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
    EmailAccount: 'EmailAccount',
    Email: 'Email',
    EmailThread: 'EmailThread',
    SyncLog: 'SyncLog',
    EmailTemplate: 'EmailTemplate',
    EmailSequence: 'EmailSequence',
    SequenceEnrollment: 'SequenceEnrollment',
    SequenceActivity: 'SequenceActivity'
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
      modelProps: "emailAccount" | "email" | "emailThread" | "syncLog" | "emailTemplate" | "emailSequence" | "sequenceEnrollment" | "sequenceActivity"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      EmailAccount: {
        payload: Prisma.$EmailAccountPayload<ExtArgs>
        fields: Prisma.EmailAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAccountPayload>
          }
          findFirst: {
            args: Prisma.EmailAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAccountPayload>
          }
          findMany: {
            args: Prisma.EmailAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAccountPayload>[]
          }
          create: {
            args: Prisma.EmailAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAccountPayload>
          }
          createMany: {
            args: Prisma.EmailAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAccountPayload>[]
          }
          delete: {
            args: Prisma.EmailAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAccountPayload>
          }
          update: {
            args: Prisma.EmailAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAccountPayload>
          }
          deleteMany: {
            args: Prisma.EmailAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAccountPayload>[]
          }
          upsert: {
            args: Prisma.EmailAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAccountPayload>
          }
          aggregate: {
            args: Prisma.EmailAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailAccount>
          }
          groupBy: {
            args: Prisma.EmailAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailAccountCountArgs<ExtArgs>
            result: $Utils.Optional<EmailAccountCountAggregateOutputType> | number
          }
        }
      }
      Email: {
        payload: Prisma.$EmailPayload<ExtArgs>
        fields: Prisma.EmailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          findFirst: {
            args: Prisma.EmailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          findMany: {
            args: Prisma.EmailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>[]
          }
          create: {
            args: Prisma.EmailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          createMany: {
            args: Prisma.EmailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>[]
          }
          delete: {
            args: Prisma.EmailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          update: {
            args: Prisma.EmailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          deleteMany: {
            args: Prisma.EmailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>[]
          }
          upsert: {
            args: Prisma.EmailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          aggregate: {
            args: Prisma.EmailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmail>
          }
          groupBy: {
            args: Prisma.EmailGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailCountArgs<ExtArgs>
            result: $Utils.Optional<EmailCountAggregateOutputType> | number
          }
        }
      }
      EmailThread: {
        payload: Prisma.$EmailThreadPayload<ExtArgs>
        fields: Prisma.EmailThreadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailThreadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailThreadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailThreadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailThreadPayload>
          }
          findFirst: {
            args: Prisma.EmailThreadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailThreadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailThreadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailThreadPayload>
          }
          findMany: {
            args: Prisma.EmailThreadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailThreadPayload>[]
          }
          create: {
            args: Prisma.EmailThreadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailThreadPayload>
          }
          createMany: {
            args: Prisma.EmailThreadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailThreadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailThreadPayload>[]
          }
          delete: {
            args: Prisma.EmailThreadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailThreadPayload>
          }
          update: {
            args: Prisma.EmailThreadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailThreadPayload>
          }
          deleteMany: {
            args: Prisma.EmailThreadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailThreadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailThreadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailThreadPayload>[]
          }
          upsert: {
            args: Prisma.EmailThreadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailThreadPayload>
          }
          aggregate: {
            args: Prisma.EmailThreadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailThread>
          }
          groupBy: {
            args: Prisma.EmailThreadGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailThreadGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailThreadCountArgs<ExtArgs>
            result: $Utils.Optional<EmailThreadCountAggregateOutputType> | number
          }
        }
      }
      SyncLog: {
        payload: Prisma.$SyncLogPayload<ExtArgs>
        fields: Prisma.SyncLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SyncLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SyncLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          findFirst: {
            args: Prisma.SyncLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SyncLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          findMany: {
            args: Prisma.SyncLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>[]
          }
          create: {
            args: Prisma.SyncLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          createMany: {
            args: Prisma.SyncLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SyncLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>[]
          }
          delete: {
            args: Prisma.SyncLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          update: {
            args: Prisma.SyncLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          deleteMany: {
            args: Prisma.SyncLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SyncLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SyncLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>[]
          }
          upsert: {
            args: Prisma.SyncLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          aggregate: {
            args: Prisma.SyncLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSyncLog>
          }
          groupBy: {
            args: Prisma.SyncLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<SyncLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.SyncLogCountArgs<ExtArgs>
            result: $Utils.Optional<SyncLogCountAggregateOutputType> | number
          }
        }
      }
      EmailTemplate: {
        payload: Prisma.$EmailTemplatePayload<ExtArgs>
        fields: Prisma.EmailTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTemplatePayload>
          }
          findFirst: {
            args: Prisma.EmailTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTemplatePayload>
          }
          findMany: {
            args: Prisma.EmailTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTemplatePayload>[]
          }
          create: {
            args: Prisma.EmailTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTemplatePayload>
          }
          createMany: {
            args: Prisma.EmailTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTemplatePayload>[]
          }
          delete: {
            args: Prisma.EmailTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTemplatePayload>
          }
          update: {
            args: Prisma.EmailTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTemplatePayload>
          }
          deleteMany: {
            args: Prisma.EmailTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTemplatePayload>[]
          }
          upsert: {
            args: Prisma.EmailTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTemplatePayload>
          }
          aggregate: {
            args: Prisma.EmailTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailTemplate>
          }
          groupBy: {
            args: Prisma.EmailTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<EmailTemplateCountAggregateOutputType> | number
          }
        }
      }
      EmailSequence: {
        payload: Prisma.$EmailSequencePayload<ExtArgs>
        fields: Prisma.EmailSequenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailSequenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSequencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailSequenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSequencePayload>
          }
          findFirst: {
            args: Prisma.EmailSequenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSequencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailSequenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSequencePayload>
          }
          findMany: {
            args: Prisma.EmailSequenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSequencePayload>[]
          }
          create: {
            args: Prisma.EmailSequenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSequencePayload>
          }
          createMany: {
            args: Prisma.EmailSequenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailSequenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSequencePayload>[]
          }
          delete: {
            args: Prisma.EmailSequenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSequencePayload>
          }
          update: {
            args: Prisma.EmailSequenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSequencePayload>
          }
          deleteMany: {
            args: Prisma.EmailSequenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailSequenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailSequenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSequencePayload>[]
          }
          upsert: {
            args: Prisma.EmailSequenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSequencePayload>
          }
          aggregate: {
            args: Prisma.EmailSequenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailSequence>
          }
          groupBy: {
            args: Prisma.EmailSequenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailSequenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailSequenceCountArgs<ExtArgs>
            result: $Utils.Optional<EmailSequenceCountAggregateOutputType> | number
          }
        }
      }
      SequenceEnrollment: {
        payload: Prisma.$SequenceEnrollmentPayload<ExtArgs>
        fields: Prisma.SequenceEnrollmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SequenceEnrollmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceEnrollmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SequenceEnrollmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceEnrollmentPayload>
          }
          findFirst: {
            args: Prisma.SequenceEnrollmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceEnrollmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SequenceEnrollmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceEnrollmentPayload>
          }
          findMany: {
            args: Prisma.SequenceEnrollmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceEnrollmentPayload>[]
          }
          create: {
            args: Prisma.SequenceEnrollmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceEnrollmentPayload>
          }
          createMany: {
            args: Prisma.SequenceEnrollmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SequenceEnrollmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceEnrollmentPayload>[]
          }
          delete: {
            args: Prisma.SequenceEnrollmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceEnrollmentPayload>
          }
          update: {
            args: Prisma.SequenceEnrollmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceEnrollmentPayload>
          }
          deleteMany: {
            args: Prisma.SequenceEnrollmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SequenceEnrollmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SequenceEnrollmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceEnrollmentPayload>[]
          }
          upsert: {
            args: Prisma.SequenceEnrollmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceEnrollmentPayload>
          }
          aggregate: {
            args: Prisma.SequenceEnrollmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSequenceEnrollment>
          }
          groupBy: {
            args: Prisma.SequenceEnrollmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<SequenceEnrollmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.SequenceEnrollmentCountArgs<ExtArgs>
            result: $Utils.Optional<SequenceEnrollmentCountAggregateOutputType> | number
          }
        }
      }
      SequenceActivity: {
        payload: Prisma.$SequenceActivityPayload<ExtArgs>
        fields: Prisma.SequenceActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SequenceActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SequenceActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceActivityPayload>
          }
          findFirst: {
            args: Prisma.SequenceActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SequenceActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceActivityPayload>
          }
          findMany: {
            args: Prisma.SequenceActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceActivityPayload>[]
          }
          create: {
            args: Prisma.SequenceActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceActivityPayload>
          }
          createMany: {
            args: Prisma.SequenceActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SequenceActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceActivityPayload>[]
          }
          delete: {
            args: Prisma.SequenceActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceActivityPayload>
          }
          update: {
            args: Prisma.SequenceActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceActivityPayload>
          }
          deleteMany: {
            args: Prisma.SequenceActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SequenceActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SequenceActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceActivityPayload>[]
          }
          upsert: {
            args: Prisma.SequenceActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SequenceActivityPayload>
          }
          aggregate: {
            args: Prisma.SequenceActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSequenceActivity>
          }
          groupBy: {
            args: Prisma.SequenceActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<SequenceActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.SequenceActivityCountArgs<ExtArgs>
            result: $Utils.Optional<SequenceActivityCountAggregateOutputType> | number
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
    emailAccount?: EmailAccountOmit
    email?: EmailOmit
    emailThread?: EmailThreadOmit
    syncLog?: SyncLogOmit
    emailTemplate?: EmailTemplateOmit
    emailSequence?: EmailSequenceOmit
    sequenceEnrollment?: SequenceEnrollmentOmit
    sequenceActivity?: SequenceActivityOmit
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
   * Count Type EmailAccountCountOutputType
   */

  export type EmailAccountCountOutputType = {
    emails: number
    threads: number
    syncLogs: number
  }

  export type EmailAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emails?: boolean | EmailAccountCountOutputTypeCountEmailsArgs
    threads?: boolean | EmailAccountCountOutputTypeCountThreadsArgs
    syncLogs?: boolean | EmailAccountCountOutputTypeCountSyncLogsArgs
  }

  // Custom InputTypes
  /**
   * EmailAccountCountOutputType without action
   */
  export type EmailAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAccountCountOutputType
     */
    select?: EmailAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmailAccountCountOutputType without action
   */
  export type EmailAccountCountOutputTypeCountEmailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailWhereInput
  }

  /**
   * EmailAccountCountOutputType without action
   */
  export type EmailAccountCountOutputTypeCountThreadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailThreadWhereInput
  }

  /**
   * EmailAccountCountOutputType without action
   */
  export type EmailAccountCountOutputTypeCountSyncLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SyncLogWhereInput
  }


  /**
   * Count Type EmailThreadCountOutputType
   */

  export type EmailThreadCountOutputType = {
    emails: number
  }

  export type EmailThreadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emails?: boolean | EmailThreadCountOutputTypeCountEmailsArgs
  }

  // Custom InputTypes
  /**
   * EmailThreadCountOutputType without action
   */
  export type EmailThreadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailThreadCountOutputType
     */
    select?: EmailThreadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmailThreadCountOutputType without action
   */
  export type EmailThreadCountOutputTypeCountEmailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailWhereInput
  }


  /**
   * Count Type EmailSequenceCountOutputType
   */

  export type EmailSequenceCountOutputType = {
    enrollments: number
  }

  export type EmailSequenceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollments?: boolean | EmailSequenceCountOutputTypeCountEnrollmentsArgs
  }

  // Custom InputTypes
  /**
   * EmailSequenceCountOutputType without action
   */
  export type EmailSequenceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSequenceCountOutputType
     */
    select?: EmailSequenceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmailSequenceCountOutputType without action
   */
  export type EmailSequenceCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SequenceEnrollmentWhereInput
  }


  /**
   * Count Type SequenceEnrollmentCountOutputType
   */

  export type SequenceEnrollmentCountOutputType = {
    activities: number
  }

  export type SequenceEnrollmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | SequenceEnrollmentCountOutputTypeCountActivitiesArgs
  }

  // Custom InputTypes
  /**
   * SequenceEnrollmentCountOutputType without action
   */
  export type SequenceEnrollmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceEnrollmentCountOutputType
     */
    select?: SequenceEnrollmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SequenceEnrollmentCountOutputType without action
   */
  export type SequenceEnrollmentCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SequenceActivityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model EmailAccount
   */

  export type AggregateEmailAccount = {
    _count: EmailAccountCountAggregateOutputType | null
    _min: EmailAccountMinAggregateOutputType | null
    _max: EmailAccountMaxAggregateOutputType | null
  }

  export type EmailAccountMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    userId: string | null
    email: string | null
    provider: string | null
    isConnected: boolean | null
    lastSyncAt: Date | null
    syncStatus: string | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmailAccountMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    userId: string | null
    email: string | null
    provider: string | null
    isConnected: boolean | null
    lastSyncAt: Date | null
    syncStatus: string | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmailAccountCountAggregateOutputType = {
    id: number
    orgId: number
    userId: number
    email: number
    provider: number
    isConnected: number
    lastSyncAt: number
    syncStatus: number
    errorMessage: number
    settings: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmailAccountMinAggregateInputType = {
    id?: true
    orgId?: true
    userId?: true
    email?: true
    provider?: true
    isConnected?: true
    lastSyncAt?: true
    syncStatus?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmailAccountMaxAggregateInputType = {
    id?: true
    orgId?: true
    userId?: true
    email?: true
    provider?: true
    isConnected?: true
    lastSyncAt?: true
    syncStatus?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmailAccountCountAggregateInputType = {
    id?: true
    orgId?: true
    userId?: true
    email?: true
    provider?: true
    isConnected?: true
    lastSyncAt?: true
    syncStatus?: true
    errorMessage?: true
    settings?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmailAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailAccount to aggregate.
     */
    where?: EmailAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailAccounts to fetch.
     */
    orderBy?: EmailAccountOrderByWithRelationInput | EmailAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailAccounts
    **/
    _count?: true | EmailAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailAccountMaxAggregateInputType
  }

  export type GetEmailAccountAggregateType<T extends EmailAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailAccount[P]>
      : GetScalarType<T[P], AggregateEmailAccount[P]>
  }




  export type EmailAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailAccountWhereInput
    orderBy?: EmailAccountOrderByWithAggregationInput | EmailAccountOrderByWithAggregationInput[]
    by: EmailAccountScalarFieldEnum[] | EmailAccountScalarFieldEnum
    having?: EmailAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailAccountCountAggregateInputType | true
    _min?: EmailAccountMinAggregateInputType
    _max?: EmailAccountMaxAggregateInputType
  }

  export type EmailAccountGroupByOutputType = {
    id: string
    orgId: string
    userId: string
    email: string
    provider: string
    isConnected: boolean
    lastSyncAt: Date | null
    syncStatus: string
    errorMessage: string | null
    settings: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: EmailAccountCountAggregateOutputType | null
    _min: EmailAccountMinAggregateOutputType | null
    _max: EmailAccountMaxAggregateOutputType | null
  }

  type GetEmailAccountGroupByPayload<T extends EmailAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailAccountGroupByOutputType[P]>
            : GetScalarType<T[P], EmailAccountGroupByOutputType[P]>
        }
      >
    >


  export type EmailAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    userId?: boolean
    email?: boolean
    provider?: boolean
    isConnected?: boolean
    lastSyncAt?: boolean
    syncStatus?: boolean
    errorMessage?: boolean
    settings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emails?: boolean | EmailAccount$emailsArgs<ExtArgs>
    threads?: boolean | EmailAccount$threadsArgs<ExtArgs>
    syncLogs?: boolean | EmailAccount$syncLogsArgs<ExtArgs>
    _count?: boolean | EmailAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailAccount"]>

  export type EmailAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    userId?: boolean
    email?: boolean
    provider?: boolean
    isConnected?: boolean
    lastSyncAt?: boolean
    syncStatus?: boolean
    errorMessage?: boolean
    settings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["emailAccount"]>

  export type EmailAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    userId?: boolean
    email?: boolean
    provider?: boolean
    isConnected?: boolean
    lastSyncAt?: boolean
    syncStatus?: boolean
    errorMessage?: boolean
    settings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["emailAccount"]>

  export type EmailAccountSelectScalar = {
    id?: boolean
    orgId?: boolean
    userId?: boolean
    email?: boolean
    provider?: boolean
    isConnected?: boolean
    lastSyncAt?: boolean
    syncStatus?: boolean
    errorMessage?: boolean
    settings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmailAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "userId" | "email" | "provider" | "isConnected" | "lastSyncAt" | "syncStatus" | "errorMessage" | "settings" | "createdAt" | "updatedAt", ExtArgs["result"]["emailAccount"]>
  export type EmailAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emails?: boolean | EmailAccount$emailsArgs<ExtArgs>
    threads?: boolean | EmailAccount$threadsArgs<ExtArgs>
    syncLogs?: boolean | EmailAccount$syncLogsArgs<ExtArgs>
    _count?: boolean | EmailAccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmailAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmailAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmailAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailAccount"
    objects: {
      emails: Prisma.$EmailPayload<ExtArgs>[]
      threads: Prisma.$EmailThreadPayload<ExtArgs>[]
      syncLogs: Prisma.$SyncLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      userId: string
      email: string
      provider: string
      isConnected: boolean
      lastSyncAt: Date | null
      syncStatus: string
      errorMessage: string | null
      settings: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["emailAccount"]>
    composites: {}
  }

  type EmailAccountGetPayload<S extends boolean | null | undefined | EmailAccountDefaultArgs> = $Result.GetResult<Prisma.$EmailAccountPayload, S>

  type EmailAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailAccountCountAggregateInputType | true
    }

  export interface EmailAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailAccount'], meta: { name: 'EmailAccount' } }
    /**
     * Find zero or one EmailAccount that matches the filter.
     * @param {EmailAccountFindUniqueArgs} args - Arguments to find a EmailAccount
     * @example
     * // Get one EmailAccount
     * const emailAccount = await prisma.emailAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailAccountFindUniqueArgs>(args: SelectSubset<T, EmailAccountFindUniqueArgs<ExtArgs>>): Prisma__EmailAccountClient<$Result.GetResult<Prisma.$EmailAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailAccountFindUniqueOrThrowArgs} args - Arguments to find a EmailAccount
     * @example
     * // Get one EmailAccount
     * const emailAccount = await prisma.emailAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailAccountClient<$Result.GetResult<Prisma.$EmailAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailAccountFindFirstArgs} args - Arguments to find a EmailAccount
     * @example
     * // Get one EmailAccount
     * const emailAccount = await prisma.emailAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailAccountFindFirstArgs>(args?: SelectSubset<T, EmailAccountFindFirstArgs<ExtArgs>>): Prisma__EmailAccountClient<$Result.GetResult<Prisma.$EmailAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailAccountFindFirstOrThrowArgs} args - Arguments to find a EmailAccount
     * @example
     * // Get one EmailAccount
     * const emailAccount = await prisma.emailAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailAccountClient<$Result.GetResult<Prisma.$EmailAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailAccounts
     * const emailAccounts = await prisma.emailAccount.findMany()
     * 
     * // Get first 10 EmailAccounts
     * const emailAccounts = await prisma.emailAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailAccountWithIdOnly = await prisma.emailAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailAccountFindManyArgs>(args?: SelectSubset<T, EmailAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailAccount.
     * @param {EmailAccountCreateArgs} args - Arguments to create a EmailAccount.
     * @example
     * // Create one EmailAccount
     * const EmailAccount = await prisma.emailAccount.create({
     *   data: {
     *     // ... data to create a EmailAccount
     *   }
     * })
     * 
     */
    create<T extends EmailAccountCreateArgs>(args: SelectSubset<T, EmailAccountCreateArgs<ExtArgs>>): Prisma__EmailAccountClient<$Result.GetResult<Prisma.$EmailAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailAccounts.
     * @param {EmailAccountCreateManyArgs} args - Arguments to create many EmailAccounts.
     * @example
     * // Create many EmailAccounts
     * const emailAccount = await prisma.emailAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailAccountCreateManyArgs>(args?: SelectSubset<T, EmailAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailAccounts and returns the data saved in the database.
     * @param {EmailAccountCreateManyAndReturnArgs} args - Arguments to create many EmailAccounts.
     * @example
     * // Create many EmailAccounts
     * const emailAccount = await prisma.emailAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailAccounts and only return the `id`
     * const emailAccountWithIdOnly = await prisma.emailAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailAccount.
     * @param {EmailAccountDeleteArgs} args - Arguments to delete one EmailAccount.
     * @example
     * // Delete one EmailAccount
     * const EmailAccount = await prisma.emailAccount.delete({
     *   where: {
     *     // ... filter to delete one EmailAccount
     *   }
     * })
     * 
     */
    delete<T extends EmailAccountDeleteArgs>(args: SelectSubset<T, EmailAccountDeleteArgs<ExtArgs>>): Prisma__EmailAccountClient<$Result.GetResult<Prisma.$EmailAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailAccount.
     * @param {EmailAccountUpdateArgs} args - Arguments to update one EmailAccount.
     * @example
     * // Update one EmailAccount
     * const emailAccount = await prisma.emailAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailAccountUpdateArgs>(args: SelectSubset<T, EmailAccountUpdateArgs<ExtArgs>>): Prisma__EmailAccountClient<$Result.GetResult<Prisma.$EmailAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailAccounts.
     * @param {EmailAccountDeleteManyArgs} args - Arguments to filter EmailAccounts to delete.
     * @example
     * // Delete a few EmailAccounts
     * const { count } = await prisma.emailAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailAccountDeleteManyArgs>(args?: SelectSubset<T, EmailAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailAccounts
     * const emailAccount = await prisma.emailAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailAccountUpdateManyArgs>(args: SelectSubset<T, EmailAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailAccounts and returns the data updated in the database.
     * @param {EmailAccountUpdateManyAndReturnArgs} args - Arguments to update many EmailAccounts.
     * @example
     * // Update many EmailAccounts
     * const emailAccount = await prisma.emailAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailAccounts and only return the `id`
     * const emailAccountWithIdOnly = await prisma.emailAccount.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmailAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailAccount.
     * @param {EmailAccountUpsertArgs} args - Arguments to update or create a EmailAccount.
     * @example
     * // Update or create a EmailAccount
     * const emailAccount = await prisma.emailAccount.upsert({
     *   create: {
     *     // ... data to create a EmailAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailAccount we want to update
     *   }
     * })
     */
    upsert<T extends EmailAccountUpsertArgs>(args: SelectSubset<T, EmailAccountUpsertArgs<ExtArgs>>): Prisma__EmailAccountClient<$Result.GetResult<Prisma.$EmailAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailAccountCountArgs} args - Arguments to filter EmailAccounts to count.
     * @example
     * // Count the number of EmailAccounts
     * const count = await prisma.emailAccount.count({
     *   where: {
     *     // ... the filter for the EmailAccounts we want to count
     *   }
     * })
    **/
    count<T extends EmailAccountCountArgs>(
      args?: Subset<T, EmailAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailAccountAggregateArgs>(args: Subset<T, EmailAccountAggregateArgs>): Prisma.PrismaPromise<GetEmailAccountAggregateType<T>>

    /**
     * Group by EmailAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailAccountGroupByArgs} args - Group by arguments.
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
      T extends EmailAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailAccountGroupByArgs['orderBy'] }
        : { orderBy?: EmailAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailAccount model
   */
  readonly fields: EmailAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emails<T extends EmailAccount$emailsArgs<ExtArgs> = {}>(args?: Subset<T, EmailAccount$emailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    threads<T extends EmailAccount$threadsArgs<ExtArgs> = {}>(args?: Subset<T, EmailAccount$threadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailThreadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    syncLogs<T extends EmailAccount$syncLogsArgs<ExtArgs> = {}>(args?: Subset<T, EmailAccount$syncLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EmailAccount model
   */
  interface EmailAccountFieldRefs {
    readonly id: FieldRef<"EmailAccount", 'String'>
    readonly orgId: FieldRef<"EmailAccount", 'String'>
    readonly userId: FieldRef<"EmailAccount", 'String'>
    readonly email: FieldRef<"EmailAccount", 'String'>
    readonly provider: FieldRef<"EmailAccount", 'String'>
    readonly isConnected: FieldRef<"EmailAccount", 'Boolean'>
    readonly lastSyncAt: FieldRef<"EmailAccount", 'DateTime'>
    readonly syncStatus: FieldRef<"EmailAccount", 'String'>
    readonly errorMessage: FieldRef<"EmailAccount", 'String'>
    readonly settings: FieldRef<"EmailAccount", 'Json'>
    readonly createdAt: FieldRef<"EmailAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"EmailAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailAccount findUnique
   */
  export type EmailAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAccount
     */
    select?: EmailAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAccount
     */
    omit?: EmailAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAccountInclude<ExtArgs> | null
    /**
     * Filter, which EmailAccount to fetch.
     */
    where: EmailAccountWhereUniqueInput
  }

  /**
   * EmailAccount findUniqueOrThrow
   */
  export type EmailAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAccount
     */
    select?: EmailAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAccount
     */
    omit?: EmailAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAccountInclude<ExtArgs> | null
    /**
     * Filter, which EmailAccount to fetch.
     */
    where: EmailAccountWhereUniqueInput
  }

  /**
   * EmailAccount findFirst
   */
  export type EmailAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAccount
     */
    select?: EmailAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAccount
     */
    omit?: EmailAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAccountInclude<ExtArgs> | null
    /**
     * Filter, which EmailAccount to fetch.
     */
    where?: EmailAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailAccounts to fetch.
     */
    orderBy?: EmailAccountOrderByWithRelationInput | EmailAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailAccounts.
     */
    cursor?: EmailAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailAccounts.
     */
    distinct?: EmailAccountScalarFieldEnum | EmailAccountScalarFieldEnum[]
  }

  /**
   * EmailAccount findFirstOrThrow
   */
  export type EmailAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAccount
     */
    select?: EmailAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAccount
     */
    omit?: EmailAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAccountInclude<ExtArgs> | null
    /**
     * Filter, which EmailAccount to fetch.
     */
    where?: EmailAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailAccounts to fetch.
     */
    orderBy?: EmailAccountOrderByWithRelationInput | EmailAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailAccounts.
     */
    cursor?: EmailAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailAccounts.
     */
    distinct?: EmailAccountScalarFieldEnum | EmailAccountScalarFieldEnum[]
  }

  /**
   * EmailAccount findMany
   */
  export type EmailAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAccount
     */
    select?: EmailAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAccount
     */
    omit?: EmailAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAccountInclude<ExtArgs> | null
    /**
     * Filter, which EmailAccounts to fetch.
     */
    where?: EmailAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailAccounts to fetch.
     */
    orderBy?: EmailAccountOrderByWithRelationInput | EmailAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailAccounts.
     */
    cursor?: EmailAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailAccounts.
     */
    skip?: number
    distinct?: EmailAccountScalarFieldEnum | EmailAccountScalarFieldEnum[]
  }

  /**
   * EmailAccount create
   */
  export type EmailAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAccount
     */
    select?: EmailAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAccount
     */
    omit?: EmailAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailAccount.
     */
    data: XOR<EmailAccountCreateInput, EmailAccountUncheckedCreateInput>
  }

  /**
   * EmailAccount createMany
   */
  export type EmailAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailAccounts.
     */
    data: EmailAccountCreateManyInput | EmailAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailAccount createManyAndReturn
   */
  export type EmailAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAccount
     */
    select?: EmailAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAccount
     */
    omit?: EmailAccountOmit<ExtArgs> | null
    /**
     * The data used to create many EmailAccounts.
     */
    data: EmailAccountCreateManyInput | EmailAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailAccount update
   */
  export type EmailAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAccount
     */
    select?: EmailAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAccount
     */
    omit?: EmailAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailAccount.
     */
    data: XOR<EmailAccountUpdateInput, EmailAccountUncheckedUpdateInput>
    /**
     * Choose, which EmailAccount to update.
     */
    where: EmailAccountWhereUniqueInput
  }

  /**
   * EmailAccount updateMany
   */
  export type EmailAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailAccounts.
     */
    data: XOR<EmailAccountUpdateManyMutationInput, EmailAccountUncheckedUpdateManyInput>
    /**
     * Filter which EmailAccounts to update
     */
    where?: EmailAccountWhereInput
    /**
     * Limit how many EmailAccounts to update.
     */
    limit?: number
  }

  /**
   * EmailAccount updateManyAndReturn
   */
  export type EmailAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAccount
     */
    select?: EmailAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAccount
     */
    omit?: EmailAccountOmit<ExtArgs> | null
    /**
     * The data used to update EmailAccounts.
     */
    data: XOR<EmailAccountUpdateManyMutationInput, EmailAccountUncheckedUpdateManyInput>
    /**
     * Filter which EmailAccounts to update
     */
    where?: EmailAccountWhereInput
    /**
     * Limit how many EmailAccounts to update.
     */
    limit?: number
  }

  /**
   * EmailAccount upsert
   */
  export type EmailAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAccount
     */
    select?: EmailAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAccount
     */
    omit?: EmailAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailAccount to update in case it exists.
     */
    where: EmailAccountWhereUniqueInput
    /**
     * In case the EmailAccount found by the `where` argument doesn't exist, create a new EmailAccount with this data.
     */
    create: XOR<EmailAccountCreateInput, EmailAccountUncheckedCreateInput>
    /**
     * In case the EmailAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailAccountUpdateInput, EmailAccountUncheckedUpdateInput>
  }

  /**
   * EmailAccount delete
   */
  export type EmailAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAccount
     */
    select?: EmailAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAccount
     */
    omit?: EmailAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAccountInclude<ExtArgs> | null
    /**
     * Filter which EmailAccount to delete.
     */
    where: EmailAccountWhereUniqueInput
  }

  /**
   * EmailAccount deleteMany
   */
  export type EmailAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailAccounts to delete
     */
    where?: EmailAccountWhereInput
    /**
     * Limit how many EmailAccounts to delete.
     */
    limit?: number
  }

  /**
   * EmailAccount.emails
   */
  export type EmailAccount$emailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    where?: EmailWhereInput
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    cursor?: EmailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * EmailAccount.threads
   */
  export type EmailAccount$threadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailThread
     */
    select?: EmailThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailThread
     */
    omit?: EmailThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailThreadInclude<ExtArgs> | null
    where?: EmailThreadWhereInput
    orderBy?: EmailThreadOrderByWithRelationInput | EmailThreadOrderByWithRelationInput[]
    cursor?: EmailThreadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailThreadScalarFieldEnum | EmailThreadScalarFieldEnum[]
  }

  /**
   * EmailAccount.syncLogs
   */
  export type EmailAccount$syncLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncLogInclude<ExtArgs> | null
    where?: SyncLogWhereInput
    orderBy?: SyncLogOrderByWithRelationInput | SyncLogOrderByWithRelationInput[]
    cursor?: SyncLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SyncLogScalarFieldEnum | SyncLogScalarFieldEnum[]
  }

  /**
   * EmailAccount without action
   */
  export type EmailAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAccount
     */
    select?: EmailAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAccount
     */
    omit?: EmailAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAccountInclude<ExtArgs> | null
  }


  /**
   * Model Email
   */

  export type AggregateEmail = {
    _count: EmailCountAggregateOutputType | null
    _avg: EmailAvgAggregateOutputType | null
    _sum: EmailSumAggregateOutputType | null
    _min: EmailMinAggregateOutputType | null
    _max: EmailMaxAggregateOutputType | null
  }

  export type EmailAvgAggregateOutputType = {
    attachmentCount: number | null
  }

  export type EmailSumAggregateOutputType = {
    attachmentCount: number | null
  }

  export type EmailMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    accountId: string | null
    threadId: string | null
    messageId: string | null
    subject: string | null
    fromName: string | null
    fromEmail: string | null
    textBody: string | null
    htmlBody: string | null
    snippet: string | null
    hasAttachments: boolean | null
    attachmentCount: number | null
    isRead: boolean | null
    isStarred: boolean | null
    isImportant: boolean | null
    direction: string | null
    sentAt: Date | null
    receivedAt: Date | null
    inReplyTo: string | null
    relatedDealId: string | null
    relatedContactId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmailMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    accountId: string | null
    threadId: string | null
    messageId: string | null
    subject: string | null
    fromName: string | null
    fromEmail: string | null
    textBody: string | null
    htmlBody: string | null
    snippet: string | null
    hasAttachments: boolean | null
    attachmentCount: number | null
    isRead: boolean | null
    isStarred: boolean | null
    isImportant: boolean | null
    direction: string | null
    sentAt: Date | null
    receivedAt: Date | null
    inReplyTo: string | null
    relatedDealId: string | null
    relatedContactId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmailCountAggregateOutputType = {
    id: number
    orgId: number
    accountId: number
    threadId: number
    messageId: number
    subject: number
    fromName: number
    fromEmail: number
    toEmails: number
    ccEmails: number
    bccEmails: number
    replyToEmails: number
    textBody: number
    htmlBody: number
    snippet: number
    hasAttachments: number
    attachmentCount: number
    labels: number
    isRead: number
    isStarred: number
    isImportant: number
    direction: number
    sentAt: number
    receivedAt: number
    rawHeaders: number
    inReplyTo: number
    references: number
    relatedDealId: number
    relatedContactId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmailAvgAggregateInputType = {
    attachmentCount?: true
  }

  export type EmailSumAggregateInputType = {
    attachmentCount?: true
  }

  export type EmailMinAggregateInputType = {
    id?: true
    orgId?: true
    accountId?: true
    threadId?: true
    messageId?: true
    subject?: true
    fromName?: true
    fromEmail?: true
    textBody?: true
    htmlBody?: true
    snippet?: true
    hasAttachments?: true
    attachmentCount?: true
    isRead?: true
    isStarred?: true
    isImportant?: true
    direction?: true
    sentAt?: true
    receivedAt?: true
    inReplyTo?: true
    relatedDealId?: true
    relatedContactId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmailMaxAggregateInputType = {
    id?: true
    orgId?: true
    accountId?: true
    threadId?: true
    messageId?: true
    subject?: true
    fromName?: true
    fromEmail?: true
    textBody?: true
    htmlBody?: true
    snippet?: true
    hasAttachments?: true
    attachmentCount?: true
    isRead?: true
    isStarred?: true
    isImportant?: true
    direction?: true
    sentAt?: true
    receivedAt?: true
    inReplyTo?: true
    relatedDealId?: true
    relatedContactId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmailCountAggregateInputType = {
    id?: true
    orgId?: true
    accountId?: true
    threadId?: true
    messageId?: true
    subject?: true
    fromName?: true
    fromEmail?: true
    toEmails?: true
    ccEmails?: true
    bccEmails?: true
    replyToEmails?: true
    textBody?: true
    htmlBody?: true
    snippet?: true
    hasAttachments?: true
    attachmentCount?: true
    labels?: true
    isRead?: true
    isStarred?: true
    isImportant?: true
    direction?: true
    sentAt?: true
    receivedAt?: true
    rawHeaders?: true
    inReplyTo?: true
    references?: true
    relatedDealId?: true
    relatedContactId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Email to aggregate.
     */
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Emails
    **/
    _count?: true | EmailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailMaxAggregateInputType
  }

  export type GetEmailAggregateType<T extends EmailAggregateArgs> = {
        [P in keyof T & keyof AggregateEmail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmail[P]>
      : GetScalarType<T[P], AggregateEmail[P]>
  }




  export type EmailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailWhereInput
    orderBy?: EmailOrderByWithAggregationInput | EmailOrderByWithAggregationInput[]
    by: EmailScalarFieldEnum[] | EmailScalarFieldEnum
    having?: EmailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailCountAggregateInputType | true
    _avg?: EmailAvgAggregateInputType
    _sum?: EmailSumAggregateInputType
    _min?: EmailMinAggregateInputType
    _max?: EmailMaxAggregateInputType
  }

  export type EmailGroupByOutputType = {
    id: string
    orgId: string
    accountId: string
    threadId: string | null
    messageId: string
    subject: string | null
    fromName: string | null
    fromEmail: string
    toEmails: string[]
    ccEmails: string[]
    bccEmails: string[]
    replyToEmails: string[]
    textBody: string | null
    htmlBody: string | null
    snippet: string | null
    hasAttachments: boolean
    attachmentCount: number
    labels: string[]
    isRead: boolean
    isStarred: boolean
    isImportant: boolean
    direction: string
    sentAt: Date
    receivedAt: Date
    rawHeaders: JsonValue | null
    inReplyTo: string | null
    references: string[]
    relatedDealId: string | null
    relatedContactId: string | null
    createdAt: Date
    updatedAt: Date
    _count: EmailCountAggregateOutputType | null
    _avg: EmailAvgAggregateOutputType | null
    _sum: EmailSumAggregateOutputType | null
    _min: EmailMinAggregateOutputType | null
    _max: EmailMaxAggregateOutputType | null
  }

  type GetEmailGroupByPayload<T extends EmailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailGroupByOutputType[P]>
            : GetScalarType<T[P], EmailGroupByOutputType[P]>
        }
      >
    >


  export type EmailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    accountId?: boolean
    threadId?: boolean
    messageId?: boolean
    subject?: boolean
    fromName?: boolean
    fromEmail?: boolean
    toEmails?: boolean
    ccEmails?: boolean
    bccEmails?: boolean
    replyToEmails?: boolean
    textBody?: boolean
    htmlBody?: boolean
    snippet?: boolean
    hasAttachments?: boolean
    attachmentCount?: boolean
    labels?: boolean
    isRead?: boolean
    isStarred?: boolean
    isImportant?: boolean
    direction?: boolean
    sentAt?: boolean
    receivedAt?: boolean
    rawHeaders?: boolean
    inReplyTo?: boolean
    references?: boolean
    relatedDealId?: boolean
    relatedContactId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | EmailAccountDefaultArgs<ExtArgs>
    thread?: boolean | Email$threadArgs<ExtArgs>
  }, ExtArgs["result"]["email"]>

  export type EmailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    accountId?: boolean
    threadId?: boolean
    messageId?: boolean
    subject?: boolean
    fromName?: boolean
    fromEmail?: boolean
    toEmails?: boolean
    ccEmails?: boolean
    bccEmails?: boolean
    replyToEmails?: boolean
    textBody?: boolean
    htmlBody?: boolean
    snippet?: boolean
    hasAttachments?: boolean
    attachmentCount?: boolean
    labels?: boolean
    isRead?: boolean
    isStarred?: boolean
    isImportant?: boolean
    direction?: boolean
    sentAt?: boolean
    receivedAt?: boolean
    rawHeaders?: boolean
    inReplyTo?: boolean
    references?: boolean
    relatedDealId?: boolean
    relatedContactId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | EmailAccountDefaultArgs<ExtArgs>
    thread?: boolean | Email$threadArgs<ExtArgs>
  }, ExtArgs["result"]["email"]>

  export type EmailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    accountId?: boolean
    threadId?: boolean
    messageId?: boolean
    subject?: boolean
    fromName?: boolean
    fromEmail?: boolean
    toEmails?: boolean
    ccEmails?: boolean
    bccEmails?: boolean
    replyToEmails?: boolean
    textBody?: boolean
    htmlBody?: boolean
    snippet?: boolean
    hasAttachments?: boolean
    attachmentCount?: boolean
    labels?: boolean
    isRead?: boolean
    isStarred?: boolean
    isImportant?: boolean
    direction?: boolean
    sentAt?: boolean
    receivedAt?: boolean
    rawHeaders?: boolean
    inReplyTo?: boolean
    references?: boolean
    relatedDealId?: boolean
    relatedContactId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | EmailAccountDefaultArgs<ExtArgs>
    thread?: boolean | Email$threadArgs<ExtArgs>
  }, ExtArgs["result"]["email"]>

  export type EmailSelectScalar = {
    id?: boolean
    orgId?: boolean
    accountId?: boolean
    threadId?: boolean
    messageId?: boolean
    subject?: boolean
    fromName?: boolean
    fromEmail?: boolean
    toEmails?: boolean
    ccEmails?: boolean
    bccEmails?: boolean
    replyToEmails?: boolean
    textBody?: boolean
    htmlBody?: boolean
    snippet?: boolean
    hasAttachments?: boolean
    attachmentCount?: boolean
    labels?: boolean
    isRead?: boolean
    isStarred?: boolean
    isImportant?: boolean
    direction?: boolean
    sentAt?: boolean
    receivedAt?: boolean
    rawHeaders?: boolean
    inReplyTo?: boolean
    references?: boolean
    relatedDealId?: boolean
    relatedContactId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "accountId" | "threadId" | "messageId" | "subject" | "fromName" | "fromEmail" | "toEmails" | "ccEmails" | "bccEmails" | "replyToEmails" | "textBody" | "htmlBody" | "snippet" | "hasAttachments" | "attachmentCount" | "labels" | "isRead" | "isStarred" | "isImportant" | "direction" | "sentAt" | "receivedAt" | "rawHeaders" | "inReplyTo" | "references" | "relatedDealId" | "relatedContactId" | "createdAt" | "updatedAt", ExtArgs["result"]["email"]>
  export type EmailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | EmailAccountDefaultArgs<ExtArgs>
    thread?: boolean | Email$threadArgs<ExtArgs>
  }
  export type EmailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | EmailAccountDefaultArgs<ExtArgs>
    thread?: boolean | Email$threadArgs<ExtArgs>
  }
  export type EmailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | EmailAccountDefaultArgs<ExtArgs>
    thread?: boolean | Email$threadArgs<ExtArgs>
  }

  export type $EmailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Email"
    objects: {
      account: Prisma.$EmailAccountPayload<ExtArgs>
      thread: Prisma.$EmailThreadPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      accountId: string
      threadId: string | null
      messageId: string
      subject: string | null
      fromName: string | null
      fromEmail: string
      toEmails: string[]
      ccEmails: string[]
      bccEmails: string[]
      replyToEmails: string[]
      textBody: string | null
      htmlBody: string | null
      snippet: string | null
      hasAttachments: boolean
      attachmentCount: number
      labels: string[]
      isRead: boolean
      isStarred: boolean
      isImportant: boolean
      direction: string
      sentAt: Date
      receivedAt: Date
      rawHeaders: Prisma.JsonValue | null
      inReplyTo: string | null
      references: string[]
      relatedDealId: string | null
      relatedContactId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["email"]>
    composites: {}
  }

  type EmailGetPayload<S extends boolean | null | undefined | EmailDefaultArgs> = $Result.GetResult<Prisma.$EmailPayload, S>

  type EmailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailCountAggregateInputType | true
    }

  export interface EmailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Email'], meta: { name: 'Email' } }
    /**
     * Find zero or one Email that matches the filter.
     * @param {EmailFindUniqueArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailFindUniqueArgs>(args: SelectSubset<T, EmailFindUniqueArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Email that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailFindUniqueOrThrowArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailFindFirstArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailFindFirstArgs>(args?: SelectSubset<T, EmailFindFirstArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailFindFirstOrThrowArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Emails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emails
     * const emails = await prisma.email.findMany()
     * 
     * // Get first 10 Emails
     * const emails = await prisma.email.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailWithIdOnly = await prisma.email.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailFindManyArgs>(args?: SelectSubset<T, EmailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Email.
     * @param {EmailCreateArgs} args - Arguments to create a Email.
     * @example
     * // Create one Email
     * const Email = await prisma.email.create({
     *   data: {
     *     // ... data to create a Email
     *   }
     * })
     * 
     */
    create<T extends EmailCreateArgs>(args: SelectSubset<T, EmailCreateArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Emails.
     * @param {EmailCreateManyArgs} args - Arguments to create many Emails.
     * @example
     * // Create many Emails
     * const email = await prisma.email.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailCreateManyArgs>(args?: SelectSubset<T, EmailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Emails and returns the data saved in the database.
     * @param {EmailCreateManyAndReturnArgs} args - Arguments to create many Emails.
     * @example
     * // Create many Emails
     * const email = await prisma.email.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Emails and only return the `id`
     * const emailWithIdOnly = await prisma.email.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Email.
     * @param {EmailDeleteArgs} args - Arguments to delete one Email.
     * @example
     * // Delete one Email
     * const Email = await prisma.email.delete({
     *   where: {
     *     // ... filter to delete one Email
     *   }
     * })
     * 
     */
    delete<T extends EmailDeleteArgs>(args: SelectSubset<T, EmailDeleteArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Email.
     * @param {EmailUpdateArgs} args - Arguments to update one Email.
     * @example
     * // Update one Email
     * const email = await prisma.email.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailUpdateArgs>(args: SelectSubset<T, EmailUpdateArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Emails.
     * @param {EmailDeleteManyArgs} args - Arguments to filter Emails to delete.
     * @example
     * // Delete a few Emails
     * const { count } = await prisma.email.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailDeleteManyArgs>(args?: SelectSubset<T, EmailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emails
     * const email = await prisma.email.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailUpdateManyArgs>(args: SelectSubset<T, EmailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emails and returns the data updated in the database.
     * @param {EmailUpdateManyAndReturnArgs} args - Arguments to update many Emails.
     * @example
     * // Update many Emails
     * const email = await prisma.email.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Emails and only return the `id`
     * const emailWithIdOnly = await prisma.email.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmailUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Email.
     * @param {EmailUpsertArgs} args - Arguments to update or create a Email.
     * @example
     * // Update or create a Email
     * const email = await prisma.email.upsert({
     *   create: {
     *     // ... data to create a Email
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Email we want to update
     *   }
     * })
     */
    upsert<T extends EmailUpsertArgs>(args: SelectSubset<T, EmailUpsertArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailCountArgs} args - Arguments to filter Emails to count.
     * @example
     * // Count the number of Emails
     * const count = await prisma.email.count({
     *   where: {
     *     // ... the filter for the Emails we want to count
     *   }
     * })
    **/
    count<T extends EmailCountArgs>(
      args?: Subset<T, EmailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Email.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailAggregateArgs>(args: Subset<T, EmailAggregateArgs>): Prisma.PrismaPromise<GetEmailAggregateType<T>>

    /**
     * Group by Email.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailGroupByArgs} args - Group by arguments.
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
      T extends EmailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailGroupByArgs['orderBy'] }
        : { orderBy?: EmailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Email model
   */
  readonly fields: EmailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Email.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends EmailAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmailAccountDefaultArgs<ExtArgs>>): Prisma__EmailAccountClient<$Result.GetResult<Prisma.$EmailAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    thread<T extends Email$threadArgs<ExtArgs> = {}>(args?: Subset<T, Email$threadArgs<ExtArgs>>): Prisma__EmailThreadClient<$Result.GetResult<Prisma.$EmailThreadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Email model
   */
  interface EmailFieldRefs {
    readonly id: FieldRef<"Email", 'String'>
    readonly orgId: FieldRef<"Email", 'String'>
    readonly accountId: FieldRef<"Email", 'String'>
    readonly threadId: FieldRef<"Email", 'String'>
    readonly messageId: FieldRef<"Email", 'String'>
    readonly subject: FieldRef<"Email", 'String'>
    readonly fromName: FieldRef<"Email", 'String'>
    readonly fromEmail: FieldRef<"Email", 'String'>
    readonly toEmails: FieldRef<"Email", 'String[]'>
    readonly ccEmails: FieldRef<"Email", 'String[]'>
    readonly bccEmails: FieldRef<"Email", 'String[]'>
    readonly replyToEmails: FieldRef<"Email", 'String[]'>
    readonly textBody: FieldRef<"Email", 'String'>
    readonly htmlBody: FieldRef<"Email", 'String'>
    readonly snippet: FieldRef<"Email", 'String'>
    readonly hasAttachments: FieldRef<"Email", 'Boolean'>
    readonly attachmentCount: FieldRef<"Email", 'Int'>
    readonly labels: FieldRef<"Email", 'String[]'>
    readonly isRead: FieldRef<"Email", 'Boolean'>
    readonly isStarred: FieldRef<"Email", 'Boolean'>
    readonly isImportant: FieldRef<"Email", 'Boolean'>
    readonly direction: FieldRef<"Email", 'String'>
    readonly sentAt: FieldRef<"Email", 'DateTime'>
    readonly receivedAt: FieldRef<"Email", 'DateTime'>
    readonly rawHeaders: FieldRef<"Email", 'Json'>
    readonly inReplyTo: FieldRef<"Email", 'String'>
    readonly references: FieldRef<"Email", 'String[]'>
    readonly relatedDealId: FieldRef<"Email", 'String'>
    readonly relatedContactId: FieldRef<"Email", 'String'>
    readonly createdAt: FieldRef<"Email", 'DateTime'>
    readonly updatedAt: FieldRef<"Email", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Email findUnique
   */
  export type EmailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Email to fetch.
     */
    where: EmailWhereUniqueInput
  }

  /**
   * Email findUniqueOrThrow
   */
  export type EmailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Email to fetch.
     */
    where: EmailWhereUniqueInput
  }

  /**
   * Email findFirst
   */
  export type EmailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Email to fetch.
     */
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emails.
     */
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emails.
     */
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * Email findFirstOrThrow
   */
  export type EmailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Email to fetch.
     */
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emails.
     */
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emails.
     */
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * Email findMany
   */
  export type EmailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Emails to fetch.
     */
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Emails.
     */
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * Email create
   */
  export type EmailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * The data needed to create a Email.
     */
    data: XOR<EmailCreateInput, EmailUncheckedCreateInput>
  }

  /**
   * Email createMany
   */
  export type EmailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Emails.
     */
    data: EmailCreateManyInput | EmailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Email createManyAndReturn
   */
  export type EmailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * The data used to create many Emails.
     */
    data: EmailCreateManyInput | EmailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Email update
   */
  export type EmailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * The data needed to update a Email.
     */
    data: XOR<EmailUpdateInput, EmailUncheckedUpdateInput>
    /**
     * Choose, which Email to update.
     */
    where: EmailWhereUniqueInput
  }

  /**
   * Email updateMany
   */
  export type EmailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Emails.
     */
    data: XOR<EmailUpdateManyMutationInput, EmailUncheckedUpdateManyInput>
    /**
     * Filter which Emails to update
     */
    where?: EmailWhereInput
    /**
     * Limit how many Emails to update.
     */
    limit?: number
  }

  /**
   * Email updateManyAndReturn
   */
  export type EmailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * The data used to update Emails.
     */
    data: XOR<EmailUpdateManyMutationInput, EmailUncheckedUpdateManyInput>
    /**
     * Filter which Emails to update
     */
    where?: EmailWhereInput
    /**
     * Limit how many Emails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Email upsert
   */
  export type EmailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * The filter to search for the Email to update in case it exists.
     */
    where: EmailWhereUniqueInput
    /**
     * In case the Email found by the `where` argument doesn't exist, create a new Email with this data.
     */
    create: XOR<EmailCreateInput, EmailUncheckedCreateInput>
    /**
     * In case the Email was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailUpdateInput, EmailUncheckedUpdateInput>
  }

  /**
   * Email delete
   */
  export type EmailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter which Email to delete.
     */
    where: EmailWhereUniqueInput
  }

  /**
   * Email deleteMany
   */
  export type EmailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emails to delete
     */
    where?: EmailWhereInput
    /**
     * Limit how many Emails to delete.
     */
    limit?: number
  }

  /**
   * Email.thread
   */
  export type Email$threadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailThread
     */
    select?: EmailThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailThread
     */
    omit?: EmailThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailThreadInclude<ExtArgs> | null
    where?: EmailThreadWhereInput
  }

  /**
   * Email without action
   */
  export type EmailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
  }


  /**
   * Model EmailThread
   */

  export type AggregateEmailThread = {
    _count: EmailThreadCountAggregateOutputType | null
    _avg: EmailThreadAvgAggregateOutputType | null
    _sum: EmailThreadSumAggregateOutputType | null
    _min: EmailThreadMinAggregateOutputType | null
    _max: EmailThreadMaxAggregateOutputType | null
  }

  export type EmailThreadAvgAggregateOutputType = {
    messageCount: number | null
  }

  export type EmailThreadSumAggregateOutputType = {
    messageCount: number | null
  }

  export type EmailThreadMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    accountId: string | null
    subject: string | null
    firstMessageId: string | null
    lastMessageId: string | null
    messageCount: number | null
    lastMessageAt: Date | null
    relatedDealId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmailThreadMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    accountId: string | null
    subject: string | null
    firstMessageId: string | null
    lastMessageId: string | null
    messageCount: number | null
    lastMessageAt: Date | null
    relatedDealId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmailThreadCountAggregateOutputType = {
    id: number
    orgId: number
    accountId: number
    subject: number
    firstMessageId: number
    lastMessageId: number
    messageCount: number
    participants: number
    lastMessageAt: number
    relatedDealId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmailThreadAvgAggregateInputType = {
    messageCount?: true
  }

  export type EmailThreadSumAggregateInputType = {
    messageCount?: true
  }

  export type EmailThreadMinAggregateInputType = {
    id?: true
    orgId?: true
    accountId?: true
    subject?: true
    firstMessageId?: true
    lastMessageId?: true
    messageCount?: true
    lastMessageAt?: true
    relatedDealId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmailThreadMaxAggregateInputType = {
    id?: true
    orgId?: true
    accountId?: true
    subject?: true
    firstMessageId?: true
    lastMessageId?: true
    messageCount?: true
    lastMessageAt?: true
    relatedDealId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmailThreadCountAggregateInputType = {
    id?: true
    orgId?: true
    accountId?: true
    subject?: true
    firstMessageId?: true
    lastMessageId?: true
    messageCount?: true
    participants?: true
    lastMessageAt?: true
    relatedDealId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmailThreadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailThread to aggregate.
     */
    where?: EmailThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailThreads to fetch.
     */
    orderBy?: EmailThreadOrderByWithRelationInput | EmailThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailThreads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailThreads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailThreads
    **/
    _count?: true | EmailThreadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailThreadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailThreadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailThreadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailThreadMaxAggregateInputType
  }

  export type GetEmailThreadAggregateType<T extends EmailThreadAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailThread]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailThread[P]>
      : GetScalarType<T[P], AggregateEmailThread[P]>
  }




  export type EmailThreadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailThreadWhereInput
    orderBy?: EmailThreadOrderByWithAggregationInput | EmailThreadOrderByWithAggregationInput[]
    by: EmailThreadScalarFieldEnum[] | EmailThreadScalarFieldEnum
    having?: EmailThreadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailThreadCountAggregateInputType | true
    _avg?: EmailThreadAvgAggregateInputType
    _sum?: EmailThreadSumAggregateInputType
    _min?: EmailThreadMinAggregateInputType
    _max?: EmailThreadMaxAggregateInputType
  }

  export type EmailThreadGroupByOutputType = {
    id: string
    orgId: string
    accountId: string
    subject: string | null
    firstMessageId: string
    lastMessageId: string | null
    messageCount: number
    participants: string[]
    lastMessageAt: Date
    relatedDealId: string | null
    createdAt: Date
    updatedAt: Date
    _count: EmailThreadCountAggregateOutputType | null
    _avg: EmailThreadAvgAggregateOutputType | null
    _sum: EmailThreadSumAggregateOutputType | null
    _min: EmailThreadMinAggregateOutputType | null
    _max: EmailThreadMaxAggregateOutputType | null
  }

  type GetEmailThreadGroupByPayload<T extends EmailThreadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailThreadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailThreadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailThreadGroupByOutputType[P]>
            : GetScalarType<T[P], EmailThreadGroupByOutputType[P]>
        }
      >
    >


  export type EmailThreadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    accountId?: boolean
    subject?: boolean
    firstMessageId?: boolean
    lastMessageId?: boolean
    messageCount?: boolean
    participants?: boolean
    lastMessageAt?: boolean
    relatedDealId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emails?: boolean | EmailThread$emailsArgs<ExtArgs>
    account?: boolean | EmailAccountDefaultArgs<ExtArgs>
    _count?: boolean | EmailThreadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailThread"]>

  export type EmailThreadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    accountId?: boolean
    subject?: boolean
    firstMessageId?: boolean
    lastMessageId?: boolean
    messageCount?: boolean
    participants?: boolean
    lastMessageAt?: boolean
    relatedDealId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | EmailAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailThread"]>

  export type EmailThreadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    accountId?: boolean
    subject?: boolean
    firstMessageId?: boolean
    lastMessageId?: boolean
    messageCount?: boolean
    participants?: boolean
    lastMessageAt?: boolean
    relatedDealId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | EmailAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailThread"]>

  export type EmailThreadSelectScalar = {
    id?: boolean
    orgId?: boolean
    accountId?: boolean
    subject?: boolean
    firstMessageId?: boolean
    lastMessageId?: boolean
    messageCount?: boolean
    participants?: boolean
    lastMessageAt?: boolean
    relatedDealId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmailThreadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "accountId" | "subject" | "firstMessageId" | "lastMessageId" | "messageCount" | "participants" | "lastMessageAt" | "relatedDealId" | "createdAt" | "updatedAt", ExtArgs["result"]["emailThread"]>
  export type EmailThreadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emails?: boolean | EmailThread$emailsArgs<ExtArgs>
    account?: boolean | EmailAccountDefaultArgs<ExtArgs>
    _count?: boolean | EmailThreadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmailThreadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | EmailAccountDefaultArgs<ExtArgs>
  }
  export type EmailThreadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | EmailAccountDefaultArgs<ExtArgs>
  }

  export type $EmailThreadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailThread"
    objects: {
      emails: Prisma.$EmailPayload<ExtArgs>[]
      account: Prisma.$EmailAccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      accountId: string
      subject: string | null
      firstMessageId: string
      lastMessageId: string | null
      messageCount: number
      participants: string[]
      lastMessageAt: Date
      relatedDealId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["emailThread"]>
    composites: {}
  }

  type EmailThreadGetPayload<S extends boolean | null | undefined | EmailThreadDefaultArgs> = $Result.GetResult<Prisma.$EmailThreadPayload, S>

  type EmailThreadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailThreadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailThreadCountAggregateInputType | true
    }

  export interface EmailThreadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailThread'], meta: { name: 'EmailThread' } }
    /**
     * Find zero or one EmailThread that matches the filter.
     * @param {EmailThreadFindUniqueArgs} args - Arguments to find a EmailThread
     * @example
     * // Get one EmailThread
     * const emailThread = await prisma.emailThread.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailThreadFindUniqueArgs>(args: SelectSubset<T, EmailThreadFindUniqueArgs<ExtArgs>>): Prisma__EmailThreadClient<$Result.GetResult<Prisma.$EmailThreadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailThread that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailThreadFindUniqueOrThrowArgs} args - Arguments to find a EmailThread
     * @example
     * // Get one EmailThread
     * const emailThread = await prisma.emailThread.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailThreadFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailThreadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailThreadClient<$Result.GetResult<Prisma.$EmailThreadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailThread that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailThreadFindFirstArgs} args - Arguments to find a EmailThread
     * @example
     * // Get one EmailThread
     * const emailThread = await prisma.emailThread.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailThreadFindFirstArgs>(args?: SelectSubset<T, EmailThreadFindFirstArgs<ExtArgs>>): Prisma__EmailThreadClient<$Result.GetResult<Prisma.$EmailThreadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailThread that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailThreadFindFirstOrThrowArgs} args - Arguments to find a EmailThread
     * @example
     * // Get one EmailThread
     * const emailThread = await prisma.emailThread.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailThreadFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailThreadFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailThreadClient<$Result.GetResult<Prisma.$EmailThreadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailThreads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailThreadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailThreads
     * const emailThreads = await prisma.emailThread.findMany()
     * 
     * // Get first 10 EmailThreads
     * const emailThreads = await prisma.emailThread.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailThreadWithIdOnly = await prisma.emailThread.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailThreadFindManyArgs>(args?: SelectSubset<T, EmailThreadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailThreadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailThread.
     * @param {EmailThreadCreateArgs} args - Arguments to create a EmailThread.
     * @example
     * // Create one EmailThread
     * const EmailThread = await prisma.emailThread.create({
     *   data: {
     *     // ... data to create a EmailThread
     *   }
     * })
     * 
     */
    create<T extends EmailThreadCreateArgs>(args: SelectSubset<T, EmailThreadCreateArgs<ExtArgs>>): Prisma__EmailThreadClient<$Result.GetResult<Prisma.$EmailThreadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailThreads.
     * @param {EmailThreadCreateManyArgs} args - Arguments to create many EmailThreads.
     * @example
     * // Create many EmailThreads
     * const emailThread = await prisma.emailThread.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailThreadCreateManyArgs>(args?: SelectSubset<T, EmailThreadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailThreads and returns the data saved in the database.
     * @param {EmailThreadCreateManyAndReturnArgs} args - Arguments to create many EmailThreads.
     * @example
     * // Create many EmailThreads
     * const emailThread = await prisma.emailThread.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailThreads and only return the `id`
     * const emailThreadWithIdOnly = await prisma.emailThread.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailThreadCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailThreadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailThreadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailThread.
     * @param {EmailThreadDeleteArgs} args - Arguments to delete one EmailThread.
     * @example
     * // Delete one EmailThread
     * const EmailThread = await prisma.emailThread.delete({
     *   where: {
     *     // ... filter to delete one EmailThread
     *   }
     * })
     * 
     */
    delete<T extends EmailThreadDeleteArgs>(args: SelectSubset<T, EmailThreadDeleteArgs<ExtArgs>>): Prisma__EmailThreadClient<$Result.GetResult<Prisma.$EmailThreadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailThread.
     * @param {EmailThreadUpdateArgs} args - Arguments to update one EmailThread.
     * @example
     * // Update one EmailThread
     * const emailThread = await prisma.emailThread.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailThreadUpdateArgs>(args: SelectSubset<T, EmailThreadUpdateArgs<ExtArgs>>): Prisma__EmailThreadClient<$Result.GetResult<Prisma.$EmailThreadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailThreads.
     * @param {EmailThreadDeleteManyArgs} args - Arguments to filter EmailThreads to delete.
     * @example
     * // Delete a few EmailThreads
     * const { count } = await prisma.emailThread.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailThreadDeleteManyArgs>(args?: SelectSubset<T, EmailThreadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailThreads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailThreadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailThreads
     * const emailThread = await prisma.emailThread.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailThreadUpdateManyArgs>(args: SelectSubset<T, EmailThreadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailThreads and returns the data updated in the database.
     * @param {EmailThreadUpdateManyAndReturnArgs} args - Arguments to update many EmailThreads.
     * @example
     * // Update many EmailThreads
     * const emailThread = await prisma.emailThread.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailThreads and only return the `id`
     * const emailThreadWithIdOnly = await prisma.emailThread.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmailThreadUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailThreadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailThreadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailThread.
     * @param {EmailThreadUpsertArgs} args - Arguments to update or create a EmailThread.
     * @example
     * // Update or create a EmailThread
     * const emailThread = await prisma.emailThread.upsert({
     *   create: {
     *     // ... data to create a EmailThread
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailThread we want to update
     *   }
     * })
     */
    upsert<T extends EmailThreadUpsertArgs>(args: SelectSubset<T, EmailThreadUpsertArgs<ExtArgs>>): Prisma__EmailThreadClient<$Result.GetResult<Prisma.$EmailThreadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailThreads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailThreadCountArgs} args - Arguments to filter EmailThreads to count.
     * @example
     * // Count the number of EmailThreads
     * const count = await prisma.emailThread.count({
     *   where: {
     *     // ... the filter for the EmailThreads we want to count
     *   }
     * })
    **/
    count<T extends EmailThreadCountArgs>(
      args?: Subset<T, EmailThreadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailThreadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailThread.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailThreadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailThreadAggregateArgs>(args: Subset<T, EmailThreadAggregateArgs>): Prisma.PrismaPromise<GetEmailThreadAggregateType<T>>

    /**
     * Group by EmailThread.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailThreadGroupByArgs} args - Group by arguments.
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
      T extends EmailThreadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailThreadGroupByArgs['orderBy'] }
        : { orderBy?: EmailThreadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailThreadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailThreadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailThread model
   */
  readonly fields: EmailThreadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailThread.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailThreadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emails<T extends EmailThread$emailsArgs<ExtArgs> = {}>(args?: Subset<T, EmailThread$emailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    account<T extends EmailAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmailAccountDefaultArgs<ExtArgs>>): Prisma__EmailAccountClient<$Result.GetResult<Prisma.$EmailAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EmailThread model
   */
  interface EmailThreadFieldRefs {
    readonly id: FieldRef<"EmailThread", 'String'>
    readonly orgId: FieldRef<"EmailThread", 'String'>
    readonly accountId: FieldRef<"EmailThread", 'String'>
    readonly subject: FieldRef<"EmailThread", 'String'>
    readonly firstMessageId: FieldRef<"EmailThread", 'String'>
    readonly lastMessageId: FieldRef<"EmailThread", 'String'>
    readonly messageCount: FieldRef<"EmailThread", 'Int'>
    readonly participants: FieldRef<"EmailThread", 'String[]'>
    readonly lastMessageAt: FieldRef<"EmailThread", 'DateTime'>
    readonly relatedDealId: FieldRef<"EmailThread", 'String'>
    readonly createdAt: FieldRef<"EmailThread", 'DateTime'>
    readonly updatedAt: FieldRef<"EmailThread", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailThread findUnique
   */
  export type EmailThreadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailThread
     */
    select?: EmailThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailThread
     */
    omit?: EmailThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailThreadInclude<ExtArgs> | null
    /**
     * Filter, which EmailThread to fetch.
     */
    where: EmailThreadWhereUniqueInput
  }

  /**
   * EmailThread findUniqueOrThrow
   */
  export type EmailThreadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailThread
     */
    select?: EmailThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailThread
     */
    omit?: EmailThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailThreadInclude<ExtArgs> | null
    /**
     * Filter, which EmailThread to fetch.
     */
    where: EmailThreadWhereUniqueInput
  }

  /**
   * EmailThread findFirst
   */
  export type EmailThreadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailThread
     */
    select?: EmailThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailThread
     */
    omit?: EmailThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailThreadInclude<ExtArgs> | null
    /**
     * Filter, which EmailThread to fetch.
     */
    where?: EmailThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailThreads to fetch.
     */
    orderBy?: EmailThreadOrderByWithRelationInput | EmailThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailThreads.
     */
    cursor?: EmailThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailThreads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailThreads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailThreads.
     */
    distinct?: EmailThreadScalarFieldEnum | EmailThreadScalarFieldEnum[]
  }

  /**
   * EmailThread findFirstOrThrow
   */
  export type EmailThreadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailThread
     */
    select?: EmailThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailThread
     */
    omit?: EmailThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailThreadInclude<ExtArgs> | null
    /**
     * Filter, which EmailThread to fetch.
     */
    where?: EmailThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailThreads to fetch.
     */
    orderBy?: EmailThreadOrderByWithRelationInput | EmailThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailThreads.
     */
    cursor?: EmailThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailThreads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailThreads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailThreads.
     */
    distinct?: EmailThreadScalarFieldEnum | EmailThreadScalarFieldEnum[]
  }

  /**
   * EmailThread findMany
   */
  export type EmailThreadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailThread
     */
    select?: EmailThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailThread
     */
    omit?: EmailThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailThreadInclude<ExtArgs> | null
    /**
     * Filter, which EmailThreads to fetch.
     */
    where?: EmailThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailThreads to fetch.
     */
    orderBy?: EmailThreadOrderByWithRelationInput | EmailThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailThreads.
     */
    cursor?: EmailThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailThreads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailThreads.
     */
    skip?: number
    distinct?: EmailThreadScalarFieldEnum | EmailThreadScalarFieldEnum[]
  }

  /**
   * EmailThread create
   */
  export type EmailThreadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailThread
     */
    select?: EmailThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailThread
     */
    omit?: EmailThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailThreadInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailThread.
     */
    data: XOR<EmailThreadCreateInput, EmailThreadUncheckedCreateInput>
  }

  /**
   * EmailThread createMany
   */
  export type EmailThreadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailThreads.
     */
    data: EmailThreadCreateManyInput | EmailThreadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailThread createManyAndReturn
   */
  export type EmailThreadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailThread
     */
    select?: EmailThreadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailThread
     */
    omit?: EmailThreadOmit<ExtArgs> | null
    /**
     * The data used to create many EmailThreads.
     */
    data: EmailThreadCreateManyInput | EmailThreadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailThreadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailThread update
   */
  export type EmailThreadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailThread
     */
    select?: EmailThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailThread
     */
    omit?: EmailThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailThreadInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailThread.
     */
    data: XOR<EmailThreadUpdateInput, EmailThreadUncheckedUpdateInput>
    /**
     * Choose, which EmailThread to update.
     */
    where: EmailThreadWhereUniqueInput
  }

  /**
   * EmailThread updateMany
   */
  export type EmailThreadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailThreads.
     */
    data: XOR<EmailThreadUpdateManyMutationInput, EmailThreadUncheckedUpdateManyInput>
    /**
     * Filter which EmailThreads to update
     */
    where?: EmailThreadWhereInput
    /**
     * Limit how many EmailThreads to update.
     */
    limit?: number
  }

  /**
   * EmailThread updateManyAndReturn
   */
  export type EmailThreadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailThread
     */
    select?: EmailThreadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailThread
     */
    omit?: EmailThreadOmit<ExtArgs> | null
    /**
     * The data used to update EmailThreads.
     */
    data: XOR<EmailThreadUpdateManyMutationInput, EmailThreadUncheckedUpdateManyInput>
    /**
     * Filter which EmailThreads to update
     */
    where?: EmailThreadWhereInput
    /**
     * Limit how many EmailThreads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailThreadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailThread upsert
   */
  export type EmailThreadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailThread
     */
    select?: EmailThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailThread
     */
    omit?: EmailThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailThreadInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailThread to update in case it exists.
     */
    where: EmailThreadWhereUniqueInput
    /**
     * In case the EmailThread found by the `where` argument doesn't exist, create a new EmailThread with this data.
     */
    create: XOR<EmailThreadCreateInput, EmailThreadUncheckedCreateInput>
    /**
     * In case the EmailThread was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailThreadUpdateInput, EmailThreadUncheckedUpdateInput>
  }

  /**
   * EmailThread delete
   */
  export type EmailThreadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailThread
     */
    select?: EmailThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailThread
     */
    omit?: EmailThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailThreadInclude<ExtArgs> | null
    /**
     * Filter which EmailThread to delete.
     */
    where: EmailThreadWhereUniqueInput
  }

  /**
   * EmailThread deleteMany
   */
  export type EmailThreadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailThreads to delete
     */
    where?: EmailThreadWhereInput
    /**
     * Limit how many EmailThreads to delete.
     */
    limit?: number
  }

  /**
   * EmailThread.emails
   */
  export type EmailThread$emailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    where?: EmailWhereInput
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    cursor?: EmailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * EmailThread without action
   */
  export type EmailThreadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailThread
     */
    select?: EmailThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailThread
     */
    omit?: EmailThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailThreadInclude<ExtArgs> | null
  }


  /**
   * Model SyncLog
   */

  export type AggregateSyncLog = {
    _count: SyncLogCountAggregateOutputType | null
    _avg: SyncLogAvgAggregateOutputType | null
    _sum: SyncLogSumAggregateOutputType | null
    _min: SyncLogMinAggregateOutputType | null
    _max: SyncLogMaxAggregateOutputType | null
  }

  export type SyncLogAvgAggregateOutputType = {
    emailsSynced: number | null
    threadsSynced: number | null
    duration: number | null
  }

  export type SyncLogSumAggregateOutputType = {
    emailsSynced: number | null
    threadsSynced: number | null
    duration: number | null
  }

  export type SyncLogMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    accountId: string | null
    status: string | null
    emailsSynced: number | null
    threadsSynced: number | null
    startedAt: Date | null
    completedAt: Date | null
    duration: number | null
  }

  export type SyncLogMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    accountId: string | null
    status: string | null
    emailsSynced: number | null
    threadsSynced: number | null
    startedAt: Date | null
    completedAt: Date | null
    duration: number | null
  }

  export type SyncLogCountAggregateOutputType = {
    id: number
    orgId: number
    accountId: number
    status: number
    emailsSynced: number
    threadsSynced: number
    errors: number
    startedAt: number
    completedAt: number
    duration: number
    _all: number
  }


  export type SyncLogAvgAggregateInputType = {
    emailsSynced?: true
    threadsSynced?: true
    duration?: true
  }

  export type SyncLogSumAggregateInputType = {
    emailsSynced?: true
    threadsSynced?: true
    duration?: true
  }

  export type SyncLogMinAggregateInputType = {
    id?: true
    orgId?: true
    accountId?: true
    status?: true
    emailsSynced?: true
    threadsSynced?: true
    startedAt?: true
    completedAt?: true
    duration?: true
  }

  export type SyncLogMaxAggregateInputType = {
    id?: true
    orgId?: true
    accountId?: true
    status?: true
    emailsSynced?: true
    threadsSynced?: true
    startedAt?: true
    completedAt?: true
    duration?: true
  }

  export type SyncLogCountAggregateInputType = {
    id?: true
    orgId?: true
    accountId?: true
    status?: true
    emailsSynced?: true
    threadsSynced?: true
    errors?: true
    startedAt?: true
    completedAt?: true
    duration?: true
    _all?: true
  }

  export type SyncLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncLog to aggregate.
     */
    where?: SyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncLogs to fetch.
     */
    orderBy?: SyncLogOrderByWithRelationInput | SyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SyncLogs
    **/
    _count?: true | SyncLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SyncLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SyncLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SyncLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SyncLogMaxAggregateInputType
  }

  export type GetSyncLogAggregateType<T extends SyncLogAggregateArgs> = {
        [P in keyof T & keyof AggregateSyncLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSyncLog[P]>
      : GetScalarType<T[P], AggregateSyncLog[P]>
  }




  export type SyncLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SyncLogWhereInput
    orderBy?: SyncLogOrderByWithAggregationInput | SyncLogOrderByWithAggregationInput[]
    by: SyncLogScalarFieldEnum[] | SyncLogScalarFieldEnum
    having?: SyncLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SyncLogCountAggregateInputType | true
    _avg?: SyncLogAvgAggregateInputType
    _sum?: SyncLogSumAggregateInputType
    _min?: SyncLogMinAggregateInputType
    _max?: SyncLogMaxAggregateInputType
  }

  export type SyncLogGroupByOutputType = {
    id: string
    orgId: string
    accountId: string
    status: string
    emailsSynced: number
    threadsSynced: number
    errors: string[]
    startedAt: Date
    completedAt: Date | null
    duration: number | null
    _count: SyncLogCountAggregateOutputType | null
    _avg: SyncLogAvgAggregateOutputType | null
    _sum: SyncLogSumAggregateOutputType | null
    _min: SyncLogMinAggregateOutputType | null
    _max: SyncLogMaxAggregateOutputType | null
  }

  type GetSyncLogGroupByPayload<T extends SyncLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SyncLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SyncLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SyncLogGroupByOutputType[P]>
            : GetScalarType<T[P], SyncLogGroupByOutputType[P]>
        }
      >
    >


  export type SyncLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    accountId?: boolean
    status?: boolean
    emailsSynced?: boolean
    threadsSynced?: boolean
    errors?: boolean
    startedAt?: boolean
    completedAt?: boolean
    duration?: boolean
    account?: boolean | EmailAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["syncLog"]>

  export type SyncLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    accountId?: boolean
    status?: boolean
    emailsSynced?: boolean
    threadsSynced?: boolean
    errors?: boolean
    startedAt?: boolean
    completedAt?: boolean
    duration?: boolean
    account?: boolean | EmailAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["syncLog"]>

  export type SyncLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    accountId?: boolean
    status?: boolean
    emailsSynced?: boolean
    threadsSynced?: boolean
    errors?: boolean
    startedAt?: boolean
    completedAt?: boolean
    duration?: boolean
    account?: boolean | EmailAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["syncLog"]>

  export type SyncLogSelectScalar = {
    id?: boolean
    orgId?: boolean
    accountId?: boolean
    status?: boolean
    emailsSynced?: boolean
    threadsSynced?: boolean
    errors?: boolean
    startedAt?: boolean
    completedAt?: boolean
    duration?: boolean
  }

  export type SyncLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "accountId" | "status" | "emailsSynced" | "threadsSynced" | "errors" | "startedAt" | "completedAt" | "duration", ExtArgs["result"]["syncLog"]>
  export type SyncLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | EmailAccountDefaultArgs<ExtArgs>
  }
  export type SyncLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | EmailAccountDefaultArgs<ExtArgs>
  }
  export type SyncLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | EmailAccountDefaultArgs<ExtArgs>
  }

  export type $SyncLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SyncLog"
    objects: {
      account: Prisma.$EmailAccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      accountId: string
      status: string
      emailsSynced: number
      threadsSynced: number
      errors: string[]
      startedAt: Date
      completedAt: Date | null
      duration: number | null
    }, ExtArgs["result"]["syncLog"]>
    composites: {}
  }

  type SyncLogGetPayload<S extends boolean | null | undefined | SyncLogDefaultArgs> = $Result.GetResult<Prisma.$SyncLogPayload, S>

  type SyncLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SyncLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SyncLogCountAggregateInputType | true
    }

  export interface SyncLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SyncLog'], meta: { name: 'SyncLog' } }
    /**
     * Find zero or one SyncLog that matches the filter.
     * @param {SyncLogFindUniqueArgs} args - Arguments to find a SyncLog
     * @example
     * // Get one SyncLog
     * const syncLog = await prisma.syncLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SyncLogFindUniqueArgs>(args: SelectSubset<T, SyncLogFindUniqueArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SyncLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SyncLogFindUniqueOrThrowArgs} args - Arguments to find a SyncLog
     * @example
     * // Get one SyncLog
     * const syncLog = await prisma.syncLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SyncLogFindUniqueOrThrowArgs>(args: SelectSubset<T, SyncLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SyncLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogFindFirstArgs} args - Arguments to find a SyncLog
     * @example
     * // Get one SyncLog
     * const syncLog = await prisma.syncLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SyncLogFindFirstArgs>(args?: SelectSubset<T, SyncLogFindFirstArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SyncLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogFindFirstOrThrowArgs} args - Arguments to find a SyncLog
     * @example
     * // Get one SyncLog
     * const syncLog = await prisma.syncLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SyncLogFindFirstOrThrowArgs>(args?: SelectSubset<T, SyncLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SyncLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SyncLogs
     * const syncLogs = await prisma.syncLog.findMany()
     * 
     * // Get first 10 SyncLogs
     * const syncLogs = await prisma.syncLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const syncLogWithIdOnly = await prisma.syncLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SyncLogFindManyArgs>(args?: SelectSubset<T, SyncLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SyncLog.
     * @param {SyncLogCreateArgs} args - Arguments to create a SyncLog.
     * @example
     * // Create one SyncLog
     * const SyncLog = await prisma.syncLog.create({
     *   data: {
     *     // ... data to create a SyncLog
     *   }
     * })
     * 
     */
    create<T extends SyncLogCreateArgs>(args: SelectSubset<T, SyncLogCreateArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SyncLogs.
     * @param {SyncLogCreateManyArgs} args - Arguments to create many SyncLogs.
     * @example
     * // Create many SyncLogs
     * const syncLog = await prisma.syncLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SyncLogCreateManyArgs>(args?: SelectSubset<T, SyncLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SyncLogs and returns the data saved in the database.
     * @param {SyncLogCreateManyAndReturnArgs} args - Arguments to create many SyncLogs.
     * @example
     * // Create many SyncLogs
     * const syncLog = await prisma.syncLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SyncLogs and only return the `id`
     * const syncLogWithIdOnly = await prisma.syncLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SyncLogCreateManyAndReturnArgs>(args?: SelectSubset<T, SyncLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SyncLog.
     * @param {SyncLogDeleteArgs} args - Arguments to delete one SyncLog.
     * @example
     * // Delete one SyncLog
     * const SyncLog = await prisma.syncLog.delete({
     *   where: {
     *     // ... filter to delete one SyncLog
     *   }
     * })
     * 
     */
    delete<T extends SyncLogDeleteArgs>(args: SelectSubset<T, SyncLogDeleteArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SyncLog.
     * @param {SyncLogUpdateArgs} args - Arguments to update one SyncLog.
     * @example
     * // Update one SyncLog
     * const syncLog = await prisma.syncLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SyncLogUpdateArgs>(args: SelectSubset<T, SyncLogUpdateArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SyncLogs.
     * @param {SyncLogDeleteManyArgs} args - Arguments to filter SyncLogs to delete.
     * @example
     * // Delete a few SyncLogs
     * const { count } = await prisma.syncLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SyncLogDeleteManyArgs>(args?: SelectSubset<T, SyncLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SyncLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SyncLogs
     * const syncLog = await prisma.syncLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SyncLogUpdateManyArgs>(args: SelectSubset<T, SyncLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SyncLogs and returns the data updated in the database.
     * @param {SyncLogUpdateManyAndReturnArgs} args - Arguments to update many SyncLogs.
     * @example
     * // Update many SyncLogs
     * const syncLog = await prisma.syncLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SyncLogs and only return the `id`
     * const syncLogWithIdOnly = await prisma.syncLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends SyncLogUpdateManyAndReturnArgs>(args: SelectSubset<T, SyncLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SyncLog.
     * @param {SyncLogUpsertArgs} args - Arguments to update or create a SyncLog.
     * @example
     * // Update or create a SyncLog
     * const syncLog = await prisma.syncLog.upsert({
     *   create: {
     *     // ... data to create a SyncLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SyncLog we want to update
     *   }
     * })
     */
    upsert<T extends SyncLogUpsertArgs>(args: SelectSubset<T, SyncLogUpsertArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SyncLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogCountArgs} args - Arguments to filter SyncLogs to count.
     * @example
     * // Count the number of SyncLogs
     * const count = await prisma.syncLog.count({
     *   where: {
     *     // ... the filter for the SyncLogs we want to count
     *   }
     * })
    **/
    count<T extends SyncLogCountArgs>(
      args?: Subset<T, SyncLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SyncLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SyncLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SyncLogAggregateArgs>(args: Subset<T, SyncLogAggregateArgs>): Prisma.PrismaPromise<GetSyncLogAggregateType<T>>

    /**
     * Group by SyncLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogGroupByArgs} args - Group by arguments.
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
      T extends SyncLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SyncLogGroupByArgs['orderBy'] }
        : { orderBy?: SyncLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SyncLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSyncLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SyncLog model
   */
  readonly fields: SyncLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SyncLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SyncLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends EmailAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmailAccountDefaultArgs<ExtArgs>>): Prisma__EmailAccountClient<$Result.GetResult<Prisma.$EmailAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SyncLog model
   */
  interface SyncLogFieldRefs {
    readonly id: FieldRef<"SyncLog", 'String'>
    readonly orgId: FieldRef<"SyncLog", 'String'>
    readonly accountId: FieldRef<"SyncLog", 'String'>
    readonly status: FieldRef<"SyncLog", 'String'>
    readonly emailsSynced: FieldRef<"SyncLog", 'Int'>
    readonly threadsSynced: FieldRef<"SyncLog", 'Int'>
    readonly errors: FieldRef<"SyncLog", 'String[]'>
    readonly startedAt: FieldRef<"SyncLog", 'DateTime'>
    readonly completedAt: FieldRef<"SyncLog", 'DateTime'>
    readonly duration: FieldRef<"SyncLog", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SyncLog findUnique
   */
  export type SyncLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncLogInclude<ExtArgs> | null
    /**
     * Filter, which SyncLog to fetch.
     */
    where: SyncLogWhereUniqueInput
  }

  /**
   * SyncLog findUniqueOrThrow
   */
  export type SyncLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncLogInclude<ExtArgs> | null
    /**
     * Filter, which SyncLog to fetch.
     */
    where: SyncLogWhereUniqueInput
  }

  /**
   * SyncLog findFirst
   */
  export type SyncLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncLogInclude<ExtArgs> | null
    /**
     * Filter, which SyncLog to fetch.
     */
    where?: SyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncLogs to fetch.
     */
    orderBy?: SyncLogOrderByWithRelationInput | SyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncLogs.
     */
    cursor?: SyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncLogs.
     */
    distinct?: SyncLogScalarFieldEnum | SyncLogScalarFieldEnum[]
  }

  /**
   * SyncLog findFirstOrThrow
   */
  export type SyncLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncLogInclude<ExtArgs> | null
    /**
     * Filter, which SyncLog to fetch.
     */
    where?: SyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncLogs to fetch.
     */
    orderBy?: SyncLogOrderByWithRelationInput | SyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncLogs.
     */
    cursor?: SyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncLogs.
     */
    distinct?: SyncLogScalarFieldEnum | SyncLogScalarFieldEnum[]
  }

  /**
   * SyncLog findMany
   */
  export type SyncLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncLogInclude<ExtArgs> | null
    /**
     * Filter, which SyncLogs to fetch.
     */
    where?: SyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncLogs to fetch.
     */
    orderBy?: SyncLogOrderByWithRelationInput | SyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SyncLogs.
     */
    cursor?: SyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncLogs.
     */
    skip?: number
    distinct?: SyncLogScalarFieldEnum | SyncLogScalarFieldEnum[]
  }

  /**
   * SyncLog create
   */
  export type SyncLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncLogInclude<ExtArgs> | null
    /**
     * The data needed to create a SyncLog.
     */
    data: XOR<SyncLogCreateInput, SyncLogUncheckedCreateInput>
  }

  /**
   * SyncLog createMany
   */
  export type SyncLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SyncLogs.
     */
    data: SyncLogCreateManyInput | SyncLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SyncLog createManyAndReturn
   */
  export type SyncLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * The data used to create many SyncLogs.
     */
    data: SyncLogCreateManyInput | SyncLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SyncLog update
   */
  export type SyncLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncLogInclude<ExtArgs> | null
    /**
     * The data needed to update a SyncLog.
     */
    data: XOR<SyncLogUpdateInput, SyncLogUncheckedUpdateInput>
    /**
     * Choose, which SyncLog to update.
     */
    where: SyncLogWhereUniqueInput
  }

  /**
   * SyncLog updateMany
   */
  export type SyncLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SyncLogs.
     */
    data: XOR<SyncLogUpdateManyMutationInput, SyncLogUncheckedUpdateManyInput>
    /**
     * Filter which SyncLogs to update
     */
    where?: SyncLogWhereInput
    /**
     * Limit how many SyncLogs to update.
     */
    limit?: number
  }

  /**
   * SyncLog updateManyAndReturn
   */
  export type SyncLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * The data used to update SyncLogs.
     */
    data: XOR<SyncLogUpdateManyMutationInput, SyncLogUncheckedUpdateManyInput>
    /**
     * Filter which SyncLogs to update
     */
    where?: SyncLogWhereInput
    /**
     * Limit how many SyncLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SyncLog upsert
   */
  export type SyncLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncLogInclude<ExtArgs> | null
    /**
     * The filter to search for the SyncLog to update in case it exists.
     */
    where: SyncLogWhereUniqueInput
    /**
     * In case the SyncLog found by the `where` argument doesn't exist, create a new SyncLog with this data.
     */
    create: XOR<SyncLogCreateInput, SyncLogUncheckedCreateInput>
    /**
     * In case the SyncLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SyncLogUpdateInput, SyncLogUncheckedUpdateInput>
  }

  /**
   * SyncLog delete
   */
  export type SyncLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncLogInclude<ExtArgs> | null
    /**
     * Filter which SyncLog to delete.
     */
    where: SyncLogWhereUniqueInput
  }

  /**
   * SyncLog deleteMany
   */
  export type SyncLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncLogs to delete
     */
    where?: SyncLogWhereInput
    /**
     * Limit how many SyncLogs to delete.
     */
    limit?: number
  }

  /**
   * SyncLog without action
   */
  export type SyncLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncLogInclude<ExtArgs> | null
  }


  /**
   * Model EmailTemplate
   */

  export type AggregateEmailTemplate = {
    _count: EmailTemplateCountAggregateOutputType | null
    _avg: EmailTemplateAvgAggregateOutputType | null
    _sum: EmailTemplateSumAggregateOutputType | null
    _min: EmailTemplateMinAggregateOutputType | null
    _max: EmailTemplateMaxAggregateOutputType | null
  }

  export type EmailTemplateAvgAggregateOutputType = {
    usageCount: number | null
  }

  export type EmailTemplateSumAggregateOutputType = {
    usageCount: number | null
  }

  export type EmailTemplateMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    name: string | null
    subject: string | null
    body: string | null
    category: string | null
    isPublic: boolean | null
    usageCount: number | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmailTemplateMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    name: string | null
    subject: string | null
    body: string | null
    category: string | null
    isPublic: boolean | null
    usageCount: number | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmailTemplateCountAggregateOutputType = {
    id: number
    orgId: number
    name: number
    subject: number
    body: number
    category: number
    variables: number
    isPublic: number
    usageCount: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmailTemplateAvgAggregateInputType = {
    usageCount?: true
  }

  export type EmailTemplateSumAggregateInputType = {
    usageCount?: true
  }

  export type EmailTemplateMinAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    subject?: true
    body?: true
    category?: true
    isPublic?: true
    usageCount?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmailTemplateMaxAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    subject?: true
    body?: true
    category?: true
    isPublic?: true
    usageCount?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmailTemplateCountAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    subject?: true
    body?: true
    category?: true
    variables?: true
    isPublic?: true
    usageCount?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmailTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailTemplate to aggregate.
     */
    where?: EmailTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailTemplates to fetch.
     */
    orderBy?: EmailTemplateOrderByWithRelationInput | EmailTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailTemplates
    **/
    _count?: true | EmailTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailTemplateMaxAggregateInputType
  }

  export type GetEmailTemplateAggregateType<T extends EmailTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailTemplate[P]>
      : GetScalarType<T[P], AggregateEmailTemplate[P]>
  }




  export type EmailTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailTemplateWhereInput
    orderBy?: EmailTemplateOrderByWithAggregationInput | EmailTemplateOrderByWithAggregationInput[]
    by: EmailTemplateScalarFieldEnum[] | EmailTemplateScalarFieldEnum
    having?: EmailTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailTemplateCountAggregateInputType | true
    _avg?: EmailTemplateAvgAggregateInputType
    _sum?: EmailTemplateSumAggregateInputType
    _min?: EmailTemplateMinAggregateInputType
    _max?: EmailTemplateMaxAggregateInputType
  }

  export type EmailTemplateGroupByOutputType = {
    id: string
    orgId: string
    name: string
    subject: string
    body: string
    category: string | null
    variables: string[]
    isPublic: boolean
    usageCount: number
    createdBy: string
    createdAt: Date
    updatedAt: Date
    _count: EmailTemplateCountAggregateOutputType | null
    _avg: EmailTemplateAvgAggregateOutputType | null
    _sum: EmailTemplateSumAggregateOutputType | null
    _min: EmailTemplateMinAggregateOutputType | null
    _max: EmailTemplateMaxAggregateOutputType | null
  }

  type GetEmailTemplateGroupByPayload<T extends EmailTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], EmailTemplateGroupByOutputType[P]>
        }
      >
    >


  export type EmailTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    subject?: boolean
    body?: boolean
    category?: boolean
    variables?: boolean
    isPublic?: boolean
    usageCount?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["emailTemplate"]>

  export type EmailTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    subject?: boolean
    body?: boolean
    category?: boolean
    variables?: boolean
    isPublic?: boolean
    usageCount?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["emailTemplate"]>

  export type EmailTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    subject?: boolean
    body?: boolean
    category?: boolean
    variables?: boolean
    isPublic?: boolean
    usageCount?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["emailTemplate"]>

  export type EmailTemplateSelectScalar = {
    id?: boolean
    orgId?: boolean
    name?: boolean
    subject?: boolean
    body?: boolean
    category?: boolean
    variables?: boolean
    isPublic?: boolean
    usageCount?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmailTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "name" | "subject" | "body" | "category" | "variables" | "isPublic" | "usageCount" | "createdBy" | "createdAt" | "updatedAt", ExtArgs["result"]["emailTemplate"]>

  export type $EmailTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailTemplate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      name: string
      subject: string
      body: string
      category: string | null
      variables: string[]
      isPublic: boolean
      usageCount: number
      createdBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["emailTemplate"]>
    composites: {}
  }

  type EmailTemplateGetPayload<S extends boolean | null | undefined | EmailTemplateDefaultArgs> = $Result.GetResult<Prisma.$EmailTemplatePayload, S>

  type EmailTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailTemplateCountAggregateInputType | true
    }

  export interface EmailTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailTemplate'], meta: { name: 'EmailTemplate' } }
    /**
     * Find zero or one EmailTemplate that matches the filter.
     * @param {EmailTemplateFindUniqueArgs} args - Arguments to find a EmailTemplate
     * @example
     * // Get one EmailTemplate
     * const emailTemplate = await prisma.emailTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailTemplateFindUniqueArgs>(args: SelectSubset<T, EmailTemplateFindUniqueArgs<ExtArgs>>): Prisma__EmailTemplateClient<$Result.GetResult<Prisma.$EmailTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailTemplateFindUniqueOrThrowArgs} args - Arguments to find a EmailTemplate
     * @example
     * // Get one EmailTemplate
     * const emailTemplate = await prisma.emailTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailTemplateClient<$Result.GetResult<Prisma.$EmailTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailTemplateFindFirstArgs} args - Arguments to find a EmailTemplate
     * @example
     * // Get one EmailTemplate
     * const emailTemplate = await prisma.emailTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailTemplateFindFirstArgs>(args?: SelectSubset<T, EmailTemplateFindFirstArgs<ExtArgs>>): Prisma__EmailTemplateClient<$Result.GetResult<Prisma.$EmailTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailTemplateFindFirstOrThrowArgs} args - Arguments to find a EmailTemplate
     * @example
     * // Get one EmailTemplate
     * const emailTemplate = await prisma.emailTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailTemplateClient<$Result.GetResult<Prisma.$EmailTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailTemplates
     * const emailTemplates = await prisma.emailTemplate.findMany()
     * 
     * // Get first 10 EmailTemplates
     * const emailTemplates = await prisma.emailTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailTemplateWithIdOnly = await prisma.emailTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailTemplateFindManyArgs>(args?: SelectSubset<T, EmailTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailTemplate.
     * @param {EmailTemplateCreateArgs} args - Arguments to create a EmailTemplate.
     * @example
     * // Create one EmailTemplate
     * const EmailTemplate = await prisma.emailTemplate.create({
     *   data: {
     *     // ... data to create a EmailTemplate
     *   }
     * })
     * 
     */
    create<T extends EmailTemplateCreateArgs>(args: SelectSubset<T, EmailTemplateCreateArgs<ExtArgs>>): Prisma__EmailTemplateClient<$Result.GetResult<Prisma.$EmailTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailTemplates.
     * @param {EmailTemplateCreateManyArgs} args - Arguments to create many EmailTemplates.
     * @example
     * // Create many EmailTemplates
     * const emailTemplate = await prisma.emailTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailTemplateCreateManyArgs>(args?: SelectSubset<T, EmailTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailTemplates and returns the data saved in the database.
     * @param {EmailTemplateCreateManyAndReturnArgs} args - Arguments to create many EmailTemplates.
     * @example
     * // Create many EmailTemplates
     * const emailTemplate = await prisma.emailTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailTemplates and only return the `id`
     * const emailTemplateWithIdOnly = await prisma.emailTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailTemplate.
     * @param {EmailTemplateDeleteArgs} args - Arguments to delete one EmailTemplate.
     * @example
     * // Delete one EmailTemplate
     * const EmailTemplate = await prisma.emailTemplate.delete({
     *   where: {
     *     // ... filter to delete one EmailTemplate
     *   }
     * })
     * 
     */
    delete<T extends EmailTemplateDeleteArgs>(args: SelectSubset<T, EmailTemplateDeleteArgs<ExtArgs>>): Prisma__EmailTemplateClient<$Result.GetResult<Prisma.$EmailTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailTemplate.
     * @param {EmailTemplateUpdateArgs} args - Arguments to update one EmailTemplate.
     * @example
     * // Update one EmailTemplate
     * const emailTemplate = await prisma.emailTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailTemplateUpdateArgs>(args: SelectSubset<T, EmailTemplateUpdateArgs<ExtArgs>>): Prisma__EmailTemplateClient<$Result.GetResult<Prisma.$EmailTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailTemplates.
     * @param {EmailTemplateDeleteManyArgs} args - Arguments to filter EmailTemplates to delete.
     * @example
     * // Delete a few EmailTemplates
     * const { count } = await prisma.emailTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailTemplateDeleteManyArgs>(args?: SelectSubset<T, EmailTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailTemplates
     * const emailTemplate = await prisma.emailTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailTemplateUpdateManyArgs>(args: SelectSubset<T, EmailTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailTemplates and returns the data updated in the database.
     * @param {EmailTemplateUpdateManyAndReturnArgs} args - Arguments to update many EmailTemplates.
     * @example
     * // Update many EmailTemplates
     * const emailTemplate = await prisma.emailTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailTemplates and only return the `id`
     * const emailTemplateWithIdOnly = await prisma.emailTemplate.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmailTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailTemplate.
     * @param {EmailTemplateUpsertArgs} args - Arguments to update or create a EmailTemplate.
     * @example
     * // Update or create a EmailTemplate
     * const emailTemplate = await prisma.emailTemplate.upsert({
     *   create: {
     *     // ... data to create a EmailTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailTemplate we want to update
     *   }
     * })
     */
    upsert<T extends EmailTemplateUpsertArgs>(args: SelectSubset<T, EmailTemplateUpsertArgs<ExtArgs>>): Prisma__EmailTemplateClient<$Result.GetResult<Prisma.$EmailTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailTemplateCountArgs} args - Arguments to filter EmailTemplates to count.
     * @example
     * // Count the number of EmailTemplates
     * const count = await prisma.emailTemplate.count({
     *   where: {
     *     // ... the filter for the EmailTemplates we want to count
     *   }
     * })
    **/
    count<T extends EmailTemplateCountArgs>(
      args?: Subset<T, EmailTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailTemplateAggregateArgs>(args: Subset<T, EmailTemplateAggregateArgs>): Prisma.PrismaPromise<GetEmailTemplateAggregateType<T>>

    /**
     * Group by EmailTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailTemplateGroupByArgs} args - Group by arguments.
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
      T extends EmailTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailTemplateGroupByArgs['orderBy'] }
        : { orderBy?: EmailTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailTemplate model
   */
  readonly fields: EmailTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the EmailTemplate model
   */
  interface EmailTemplateFieldRefs {
    readonly id: FieldRef<"EmailTemplate", 'String'>
    readonly orgId: FieldRef<"EmailTemplate", 'String'>
    readonly name: FieldRef<"EmailTemplate", 'String'>
    readonly subject: FieldRef<"EmailTemplate", 'String'>
    readonly body: FieldRef<"EmailTemplate", 'String'>
    readonly category: FieldRef<"EmailTemplate", 'String'>
    readonly variables: FieldRef<"EmailTemplate", 'String[]'>
    readonly isPublic: FieldRef<"EmailTemplate", 'Boolean'>
    readonly usageCount: FieldRef<"EmailTemplate", 'Int'>
    readonly createdBy: FieldRef<"EmailTemplate", 'String'>
    readonly createdAt: FieldRef<"EmailTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"EmailTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailTemplate findUnique
   */
  export type EmailTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTemplate
     */
    select?: EmailTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailTemplate
     */
    omit?: EmailTemplateOmit<ExtArgs> | null
    /**
     * Filter, which EmailTemplate to fetch.
     */
    where: EmailTemplateWhereUniqueInput
  }

  /**
   * EmailTemplate findUniqueOrThrow
   */
  export type EmailTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTemplate
     */
    select?: EmailTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailTemplate
     */
    omit?: EmailTemplateOmit<ExtArgs> | null
    /**
     * Filter, which EmailTemplate to fetch.
     */
    where: EmailTemplateWhereUniqueInput
  }

  /**
   * EmailTemplate findFirst
   */
  export type EmailTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTemplate
     */
    select?: EmailTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailTemplate
     */
    omit?: EmailTemplateOmit<ExtArgs> | null
    /**
     * Filter, which EmailTemplate to fetch.
     */
    where?: EmailTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailTemplates to fetch.
     */
    orderBy?: EmailTemplateOrderByWithRelationInput | EmailTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailTemplates.
     */
    cursor?: EmailTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailTemplates.
     */
    distinct?: EmailTemplateScalarFieldEnum | EmailTemplateScalarFieldEnum[]
  }

  /**
   * EmailTemplate findFirstOrThrow
   */
  export type EmailTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTemplate
     */
    select?: EmailTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailTemplate
     */
    omit?: EmailTemplateOmit<ExtArgs> | null
    /**
     * Filter, which EmailTemplate to fetch.
     */
    where?: EmailTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailTemplates to fetch.
     */
    orderBy?: EmailTemplateOrderByWithRelationInput | EmailTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailTemplates.
     */
    cursor?: EmailTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailTemplates.
     */
    distinct?: EmailTemplateScalarFieldEnum | EmailTemplateScalarFieldEnum[]
  }

  /**
   * EmailTemplate findMany
   */
  export type EmailTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTemplate
     */
    select?: EmailTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailTemplate
     */
    omit?: EmailTemplateOmit<ExtArgs> | null
    /**
     * Filter, which EmailTemplates to fetch.
     */
    where?: EmailTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailTemplates to fetch.
     */
    orderBy?: EmailTemplateOrderByWithRelationInput | EmailTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailTemplates.
     */
    cursor?: EmailTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailTemplates.
     */
    skip?: number
    distinct?: EmailTemplateScalarFieldEnum | EmailTemplateScalarFieldEnum[]
  }

  /**
   * EmailTemplate create
   */
  export type EmailTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTemplate
     */
    select?: EmailTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailTemplate
     */
    omit?: EmailTemplateOmit<ExtArgs> | null
    /**
     * The data needed to create a EmailTemplate.
     */
    data: XOR<EmailTemplateCreateInput, EmailTemplateUncheckedCreateInput>
  }

  /**
   * EmailTemplate createMany
   */
  export type EmailTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailTemplates.
     */
    data: EmailTemplateCreateManyInput | EmailTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailTemplate createManyAndReturn
   */
  export type EmailTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTemplate
     */
    select?: EmailTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailTemplate
     */
    omit?: EmailTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many EmailTemplates.
     */
    data: EmailTemplateCreateManyInput | EmailTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailTemplate update
   */
  export type EmailTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTemplate
     */
    select?: EmailTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailTemplate
     */
    omit?: EmailTemplateOmit<ExtArgs> | null
    /**
     * The data needed to update a EmailTemplate.
     */
    data: XOR<EmailTemplateUpdateInput, EmailTemplateUncheckedUpdateInput>
    /**
     * Choose, which EmailTemplate to update.
     */
    where: EmailTemplateWhereUniqueInput
  }

  /**
   * EmailTemplate updateMany
   */
  export type EmailTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailTemplates.
     */
    data: XOR<EmailTemplateUpdateManyMutationInput, EmailTemplateUncheckedUpdateManyInput>
    /**
     * Filter which EmailTemplates to update
     */
    where?: EmailTemplateWhereInput
    /**
     * Limit how many EmailTemplates to update.
     */
    limit?: number
  }

  /**
   * EmailTemplate updateManyAndReturn
   */
  export type EmailTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTemplate
     */
    select?: EmailTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailTemplate
     */
    omit?: EmailTemplateOmit<ExtArgs> | null
    /**
     * The data used to update EmailTemplates.
     */
    data: XOR<EmailTemplateUpdateManyMutationInput, EmailTemplateUncheckedUpdateManyInput>
    /**
     * Filter which EmailTemplates to update
     */
    where?: EmailTemplateWhereInput
    /**
     * Limit how many EmailTemplates to update.
     */
    limit?: number
  }

  /**
   * EmailTemplate upsert
   */
  export type EmailTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTemplate
     */
    select?: EmailTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailTemplate
     */
    omit?: EmailTemplateOmit<ExtArgs> | null
    /**
     * The filter to search for the EmailTemplate to update in case it exists.
     */
    where: EmailTemplateWhereUniqueInput
    /**
     * In case the EmailTemplate found by the `where` argument doesn't exist, create a new EmailTemplate with this data.
     */
    create: XOR<EmailTemplateCreateInput, EmailTemplateUncheckedCreateInput>
    /**
     * In case the EmailTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailTemplateUpdateInput, EmailTemplateUncheckedUpdateInput>
  }

  /**
   * EmailTemplate delete
   */
  export type EmailTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTemplate
     */
    select?: EmailTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailTemplate
     */
    omit?: EmailTemplateOmit<ExtArgs> | null
    /**
     * Filter which EmailTemplate to delete.
     */
    where: EmailTemplateWhereUniqueInput
  }

  /**
   * EmailTemplate deleteMany
   */
  export type EmailTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailTemplates to delete
     */
    where?: EmailTemplateWhereInput
    /**
     * Limit how many EmailTemplates to delete.
     */
    limit?: number
  }

  /**
   * EmailTemplate without action
   */
  export type EmailTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailTemplate
     */
    select?: EmailTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailTemplate
     */
    omit?: EmailTemplateOmit<ExtArgs> | null
  }


  /**
   * Model EmailSequence
   */

  export type AggregateEmailSequence = {
    _count: EmailSequenceCountAggregateOutputType | null
    _avg: EmailSequenceAvgAggregateOutputType | null
    _sum: EmailSequenceSumAggregateOutputType | null
    _min: EmailSequenceMinAggregateOutputType | null
    _max: EmailSequenceMaxAggregateOutputType | null
  }

  export type EmailSequenceAvgAggregateOutputType = {
    totalDuration: number | null
    enrollmentCount: number | null
    completionRate: number | null
  }

  export type EmailSequenceSumAggregateOutputType = {
    totalDuration: number | null
    enrollmentCount: number | null
    completionRate: number | null
  }

  export type EmailSequenceMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    name: string | null
    description: string | null
    isActive: boolean | null
    totalDuration: number | null
    enrollmentCount: number | null
    completionRate: number | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmailSequenceMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    name: string | null
    description: string | null
    isActive: boolean | null
    totalDuration: number | null
    enrollmentCount: number | null
    completionRate: number | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmailSequenceCountAggregateOutputType = {
    id: number
    orgId: number
    name: number
    description: number
    isActive: number
    steps: number
    totalDuration: number
    enrollmentCount: number
    completionRate: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmailSequenceAvgAggregateInputType = {
    totalDuration?: true
    enrollmentCount?: true
    completionRate?: true
  }

  export type EmailSequenceSumAggregateInputType = {
    totalDuration?: true
    enrollmentCount?: true
    completionRate?: true
  }

  export type EmailSequenceMinAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    description?: true
    isActive?: true
    totalDuration?: true
    enrollmentCount?: true
    completionRate?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmailSequenceMaxAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    description?: true
    isActive?: true
    totalDuration?: true
    enrollmentCount?: true
    completionRate?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmailSequenceCountAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    description?: true
    isActive?: true
    steps?: true
    totalDuration?: true
    enrollmentCount?: true
    completionRate?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmailSequenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailSequence to aggregate.
     */
    where?: EmailSequenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailSequences to fetch.
     */
    orderBy?: EmailSequenceOrderByWithRelationInput | EmailSequenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailSequenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailSequences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailSequences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailSequences
    **/
    _count?: true | EmailSequenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailSequenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailSequenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailSequenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailSequenceMaxAggregateInputType
  }

  export type GetEmailSequenceAggregateType<T extends EmailSequenceAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailSequence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailSequence[P]>
      : GetScalarType<T[P], AggregateEmailSequence[P]>
  }




  export type EmailSequenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailSequenceWhereInput
    orderBy?: EmailSequenceOrderByWithAggregationInput | EmailSequenceOrderByWithAggregationInput[]
    by: EmailSequenceScalarFieldEnum[] | EmailSequenceScalarFieldEnum
    having?: EmailSequenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailSequenceCountAggregateInputType | true
    _avg?: EmailSequenceAvgAggregateInputType
    _sum?: EmailSequenceSumAggregateInputType
    _min?: EmailSequenceMinAggregateInputType
    _max?: EmailSequenceMaxAggregateInputType
  }

  export type EmailSequenceGroupByOutputType = {
    id: string
    orgId: string
    name: string
    description: string | null
    isActive: boolean
    steps: JsonValue
    totalDuration: number
    enrollmentCount: number
    completionRate: number
    createdBy: string
    createdAt: Date
    updatedAt: Date
    _count: EmailSequenceCountAggregateOutputType | null
    _avg: EmailSequenceAvgAggregateOutputType | null
    _sum: EmailSequenceSumAggregateOutputType | null
    _min: EmailSequenceMinAggregateOutputType | null
    _max: EmailSequenceMaxAggregateOutputType | null
  }

  type GetEmailSequenceGroupByPayload<T extends EmailSequenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailSequenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailSequenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailSequenceGroupByOutputType[P]>
            : GetScalarType<T[P], EmailSequenceGroupByOutputType[P]>
        }
      >
    >


  export type EmailSequenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    steps?: boolean
    totalDuration?: boolean
    enrollmentCount?: boolean
    completionRate?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    enrollments?: boolean | EmailSequence$enrollmentsArgs<ExtArgs>
    _count?: boolean | EmailSequenceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailSequence"]>

  export type EmailSequenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    steps?: boolean
    totalDuration?: boolean
    enrollmentCount?: boolean
    completionRate?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["emailSequence"]>

  export type EmailSequenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    steps?: boolean
    totalDuration?: boolean
    enrollmentCount?: boolean
    completionRate?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["emailSequence"]>

  export type EmailSequenceSelectScalar = {
    id?: boolean
    orgId?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    steps?: boolean
    totalDuration?: boolean
    enrollmentCount?: boolean
    completionRate?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmailSequenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "name" | "description" | "isActive" | "steps" | "totalDuration" | "enrollmentCount" | "completionRate" | "createdBy" | "createdAt" | "updatedAt", ExtArgs["result"]["emailSequence"]>
  export type EmailSequenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollments?: boolean | EmailSequence$enrollmentsArgs<ExtArgs>
    _count?: boolean | EmailSequenceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmailSequenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmailSequenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmailSequencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailSequence"
    objects: {
      enrollments: Prisma.$SequenceEnrollmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      name: string
      description: string | null
      isActive: boolean
      steps: Prisma.JsonValue
      totalDuration: number
      enrollmentCount: number
      completionRate: number
      createdBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["emailSequence"]>
    composites: {}
  }

  type EmailSequenceGetPayload<S extends boolean | null | undefined | EmailSequenceDefaultArgs> = $Result.GetResult<Prisma.$EmailSequencePayload, S>

  type EmailSequenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailSequenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailSequenceCountAggregateInputType | true
    }

  export interface EmailSequenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailSequence'], meta: { name: 'EmailSequence' } }
    /**
     * Find zero or one EmailSequence that matches the filter.
     * @param {EmailSequenceFindUniqueArgs} args - Arguments to find a EmailSequence
     * @example
     * // Get one EmailSequence
     * const emailSequence = await prisma.emailSequence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailSequenceFindUniqueArgs>(args: SelectSubset<T, EmailSequenceFindUniqueArgs<ExtArgs>>): Prisma__EmailSequenceClient<$Result.GetResult<Prisma.$EmailSequencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailSequence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailSequenceFindUniqueOrThrowArgs} args - Arguments to find a EmailSequence
     * @example
     * // Get one EmailSequence
     * const emailSequence = await prisma.emailSequence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailSequenceFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailSequenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailSequenceClient<$Result.GetResult<Prisma.$EmailSequencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailSequence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailSequenceFindFirstArgs} args - Arguments to find a EmailSequence
     * @example
     * // Get one EmailSequence
     * const emailSequence = await prisma.emailSequence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailSequenceFindFirstArgs>(args?: SelectSubset<T, EmailSequenceFindFirstArgs<ExtArgs>>): Prisma__EmailSequenceClient<$Result.GetResult<Prisma.$EmailSequencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailSequence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailSequenceFindFirstOrThrowArgs} args - Arguments to find a EmailSequence
     * @example
     * // Get one EmailSequence
     * const emailSequence = await prisma.emailSequence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailSequenceFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailSequenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailSequenceClient<$Result.GetResult<Prisma.$EmailSequencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailSequences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailSequenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailSequences
     * const emailSequences = await prisma.emailSequence.findMany()
     * 
     * // Get first 10 EmailSequences
     * const emailSequences = await prisma.emailSequence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailSequenceWithIdOnly = await prisma.emailSequence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailSequenceFindManyArgs>(args?: SelectSubset<T, EmailSequenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailSequencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailSequence.
     * @param {EmailSequenceCreateArgs} args - Arguments to create a EmailSequence.
     * @example
     * // Create one EmailSequence
     * const EmailSequence = await prisma.emailSequence.create({
     *   data: {
     *     // ... data to create a EmailSequence
     *   }
     * })
     * 
     */
    create<T extends EmailSequenceCreateArgs>(args: SelectSubset<T, EmailSequenceCreateArgs<ExtArgs>>): Prisma__EmailSequenceClient<$Result.GetResult<Prisma.$EmailSequencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailSequences.
     * @param {EmailSequenceCreateManyArgs} args - Arguments to create many EmailSequences.
     * @example
     * // Create many EmailSequences
     * const emailSequence = await prisma.emailSequence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailSequenceCreateManyArgs>(args?: SelectSubset<T, EmailSequenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailSequences and returns the data saved in the database.
     * @param {EmailSequenceCreateManyAndReturnArgs} args - Arguments to create many EmailSequences.
     * @example
     * // Create many EmailSequences
     * const emailSequence = await prisma.emailSequence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailSequences and only return the `id`
     * const emailSequenceWithIdOnly = await prisma.emailSequence.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailSequenceCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailSequenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailSequencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailSequence.
     * @param {EmailSequenceDeleteArgs} args - Arguments to delete one EmailSequence.
     * @example
     * // Delete one EmailSequence
     * const EmailSequence = await prisma.emailSequence.delete({
     *   where: {
     *     // ... filter to delete one EmailSequence
     *   }
     * })
     * 
     */
    delete<T extends EmailSequenceDeleteArgs>(args: SelectSubset<T, EmailSequenceDeleteArgs<ExtArgs>>): Prisma__EmailSequenceClient<$Result.GetResult<Prisma.$EmailSequencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailSequence.
     * @param {EmailSequenceUpdateArgs} args - Arguments to update one EmailSequence.
     * @example
     * // Update one EmailSequence
     * const emailSequence = await prisma.emailSequence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailSequenceUpdateArgs>(args: SelectSubset<T, EmailSequenceUpdateArgs<ExtArgs>>): Prisma__EmailSequenceClient<$Result.GetResult<Prisma.$EmailSequencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailSequences.
     * @param {EmailSequenceDeleteManyArgs} args - Arguments to filter EmailSequences to delete.
     * @example
     * // Delete a few EmailSequences
     * const { count } = await prisma.emailSequence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailSequenceDeleteManyArgs>(args?: SelectSubset<T, EmailSequenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailSequences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailSequenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailSequences
     * const emailSequence = await prisma.emailSequence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailSequenceUpdateManyArgs>(args: SelectSubset<T, EmailSequenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailSequences and returns the data updated in the database.
     * @param {EmailSequenceUpdateManyAndReturnArgs} args - Arguments to update many EmailSequences.
     * @example
     * // Update many EmailSequences
     * const emailSequence = await prisma.emailSequence.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailSequences and only return the `id`
     * const emailSequenceWithIdOnly = await prisma.emailSequence.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmailSequenceUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailSequenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailSequencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailSequence.
     * @param {EmailSequenceUpsertArgs} args - Arguments to update or create a EmailSequence.
     * @example
     * // Update or create a EmailSequence
     * const emailSequence = await prisma.emailSequence.upsert({
     *   create: {
     *     // ... data to create a EmailSequence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailSequence we want to update
     *   }
     * })
     */
    upsert<T extends EmailSequenceUpsertArgs>(args: SelectSubset<T, EmailSequenceUpsertArgs<ExtArgs>>): Prisma__EmailSequenceClient<$Result.GetResult<Prisma.$EmailSequencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailSequences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailSequenceCountArgs} args - Arguments to filter EmailSequences to count.
     * @example
     * // Count the number of EmailSequences
     * const count = await prisma.emailSequence.count({
     *   where: {
     *     // ... the filter for the EmailSequences we want to count
     *   }
     * })
    **/
    count<T extends EmailSequenceCountArgs>(
      args?: Subset<T, EmailSequenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailSequenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailSequence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailSequenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailSequenceAggregateArgs>(args: Subset<T, EmailSequenceAggregateArgs>): Prisma.PrismaPromise<GetEmailSequenceAggregateType<T>>

    /**
     * Group by EmailSequence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailSequenceGroupByArgs} args - Group by arguments.
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
      T extends EmailSequenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailSequenceGroupByArgs['orderBy'] }
        : { orderBy?: EmailSequenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailSequenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailSequenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailSequence model
   */
  readonly fields: EmailSequenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailSequence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailSequenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enrollments<T extends EmailSequence$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, EmailSequence$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SequenceEnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EmailSequence model
   */
  interface EmailSequenceFieldRefs {
    readonly id: FieldRef<"EmailSequence", 'String'>
    readonly orgId: FieldRef<"EmailSequence", 'String'>
    readonly name: FieldRef<"EmailSequence", 'String'>
    readonly description: FieldRef<"EmailSequence", 'String'>
    readonly isActive: FieldRef<"EmailSequence", 'Boolean'>
    readonly steps: FieldRef<"EmailSequence", 'Json'>
    readonly totalDuration: FieldRef<"EmailSequence", 'Int'>
    readonly enrollmentCount: FieldRef<"EmailSequence", 'Int'>
    readonly completionRate: FieldRef<"EmailSequence", 'Float'>
    readonly createdBy: FieldRef<"EmailSequence", 'String'>
    readonly createdAt: FieldRef<"EmailSequence", 'DateTime'>
    readonly updatedAt: FieldRef<"EmailSequence", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailSequence findUnique
   */
  export type EmailSequenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSequence
     */
    select?: EmailSequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSequence
     */
    omit?: EmailSequenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailSequenceInclude<ExtArgs> | null
    /**
     * Filter, which EmailSequence to fetch.
     */
    where: EmailSequenceWhereUniqueInput
  }

  /**
   * EmailSequence findUniqueOrThrow
   */
  export type EmailSequenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSequence
     */
    select?: EmailSequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSequence
     */
    omit?: EmailSequenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailSequenceInclude<ExtArgs> | null
    /**
     * Filter, which EmailSequence to fetch.
     */
    where: EmailSequenceWhereUniqueInput
  }

  /**
   * EmailSequence findFirst
   */
  export type EmailSequenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSequence
     */
    select?: EmailSequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSequence
     */
    omit?: EmailSequenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailSequenceInclude<ExtArgs> | null
    /**
     * Filter, which EmailSequence to fetch.
     */
    where?: EmailSequenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailSequences to fetch.
     */
    orderBy?: EmailSequenceOrderByWithRelationInput | EmailSequenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailSequences.
     */
    cursor?: EmailSequenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailSequences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailSequences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailSequences.
     */
    distinct?: EmailSequenceScalarFieldEnum | EmailSequenceScalarFieldEnum[]
  }

  /**
   * EmailSequence findFirstOrThrow
   */
  export type EmailSequenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSequence
     */
    select?: EmailSequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSequence
     */
    omit?: EmailSequenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailSequenceInclude<ExtArgs> | null
    /**
     * Filter, which EmailSequence to fetch.
     */
    where?: EmailSequenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailSequences to fetch.
     */
    orderBy?: EmailSequenceOrderByWithRelationInput | EmailSequenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailSequences.
     */
    cursor?: EmailSequenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailSequences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailSequences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailSequences.
     */
    distinct?: EmailSequenceScalarFieldEnum | EmailSequenceScalarFieldEnum[]
  }

  /**
   * EmailSequence findMany
   */
  export type EmailSequenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSequence
     */
    select?: EmailSequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSequence
     */
    omit?: EmailSequenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailSequenceInclude<ExtArgs> | null
    /**
     * Filter, which EmailSequences to fetch.
     */
    where?: EmailSequenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailSequences to fetch.
     */
    orderBy?: EmailSequenceOrderByWithRelationInput | EmailSequenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailSequences.
     */
    cursor?: EmailSequenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailSequences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailSequences.
     */
    skip?: number
    distinct?: EmailSequenceScalarFieldEnum | EmailSequenceScalarFieldEnum[]
  }

  /**
   * EmailSequence create
   */
  export type EmailSequenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSequence
     */
    select?: EmailSequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSequence
     */
    omit?: EmailSequenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailSequenceInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailSequence.
     */
    data: XOR<EmailSequenceCreateInput, EmailSequenceUncheckedCreateInput>
  }

  /**
   * EmailSequence createMany
   */
  export type EmailSequenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailSequences.
     */
    data: EmailSequenceCreateManyInput | EmailSequenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailSequence createManyAndReturn
   */
  export type EmailSequenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSequence
     */
    select?: EmailSequenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSequence
     */
    omit?: EmailSequenceOmit<ExtArgs> | null
    /**
     * The data used to create many EmailSequences.
     */
    data: EmailSequenceCreateManyInput | EmailSequenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailSequence update
   */
  export type EmailSequenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSequence
     */
    select?: EmailSequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSequence
     */
    omit?: EmailSequenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailSequenceInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailSequence.
     */
    data: XOR<EmailSequenceUpdateInput, EmailSequenceUncheckedUpdateInput>
    /**
     * Choose, which EmailSequence to update.
     */
    where: EmailSequenceWhereUniqueInput
  }

  /**
   * EmailSequence updateMany
   */
  export type EmailSequenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailSequences.
     */
    data: XOR<EmailSequenceUpdateManyMutationInput, EmailSequenceUncheckedUpdateManyInput>
    /**
     * Filter which EmailSequences to update
     */
    where?: EmailSequenceWhereInput
    /**
     * Limit how many EmailSequences to update.
     */
    limit?: number
  }

  /**
   * EmailSequence updateManyAndReturn
   */
  export type EmailSequenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSequence
     */
    select?: EmailSequenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSequence
     */
    omit?: EmailSequenceOmit<ExtArgs> | null
    /**
     * The data used to update EmailSequences.
     */
    data: XOR<EmailSequenceUpdateManyMutationInput, EmailSequenceUncheckedUpdateManyInput>
    /**
     * Filter which EmailSequences to update
     */
    where?: EmailSequenceWhereInput
    /**
     * Limit how many EmailSequences to update.
     */
    limit?: number
  }

  /**
   * EmailSequence upsert
   */
  export type EmailSequenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSequence
     */
    select?: EmailSequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSequence
     */
    omit?: EmailSequenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailSequenceInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailSequence to update in case it exists.
     */
    where: EmailSequenceWhereUniqueInput
    /**
     * In case the EmailSequence found by the `where` argument doesn't exist, create a new EmailSequence with this data.
     */
    create: XOR<EmailSequenceCreateInput, EmailSequenceUncheckedCreateInput>
    /**
     * In case the EmailSequence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailSequenceUpdateInput, EmailSequenceUncheckedUpdateInput>
  }

  /**
   * EmailSequence delete
   */
  export type EmailSequenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSequence
     */
    select?: EmailSequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSequence
     */
    omit?: EmailSequenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailSequenceInclude<ExtArgs> | null
    /**
     * Filter which EmailSequence to delete.
     */
    where: EmailSequenceWhereUniqueInput
  }

  /**
   * EmailSequence deleteMany
   */
  export type EmailSequenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailSequences to delete
     */
    where?: EmailSequenceWhereInput
    /**
     * Limit how many EmailSequences to delete.
     */
    limit?: number
  }

  /**
   * EmailSequence.enrollments
   */
  export type EmailSequence$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceEnrollment
     */
    select?: SequenceEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceEnrollment
     */
    omit?: SequenceEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceEnrollmentInclude<ExtArgs> | null
    where?: SequenceEnrollmentWhereInput
    orderBy?: SequenceEnrollmentOrderByWithRelationInput | SequenceEnrollmentOrderByWithRelationInput[]
    cursor?: SequenceEnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SequenceEnrollmentScalarFieldEnum | SequenceEnrollmentScalarFieldEnum[]
  }

  /**
   * EmailSequence without action
   */
  export type EmailSequenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSequence
     */
    select?: EmailSequenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSequence
     */
    omit?: EmailSequenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailSequenceInclude<ExtArgs> | null
  }


  /**
   * Model SequenceEnrollment
   */

  export type AggregateSequenceEnrollment = {
    _count: SequenceEnrollmentCountAggregateOutputType | null
    _avg: SequenceEnrollmentAvgAggregateOutputType | null
    _sum: SequenceEnrollmentSumAggregateOutputType | null
    _min: SequenceEnrollmentMinAggregateOutputType | null
    _max: SequenceEnrollmentMaxAggregateOutputType | null
  }

  export type SequenceEnrollmentAvgAggregateOutputType = {
    currentStep: number | null
  }

  export type SequenceEnrollmentSumAggregateOutputType = {
    currentStep: number | null
  }

  export type SequenceEnrollmentMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    sequenceId: string | null
    contactEmail: string | null
    contactId: string | null
    dealId: string | null
    status: string | null
    currentStep: number | null
    startedAt: Date | null
    completedAt: Date | null
    unsubscribedAt: Date | null
  }

  export type SequenceEnrollmentMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    sequenceId: string | null
    contactEmail: string | null
    contactId: string | null
    dealId: string | null
    status: string | null
    currentStep: number | null
    startedAt: Date | null
    completedAt: Date | null
    unsubscribedAt: Date | null
  }

  export type SequenceEnrollmentCountAggregateOutputType = {
    id: number
    orgId: number
    sequenceId: number
    contactEmail: number
    contactId: number
    dealId: number
    status: number
    currentStep: number
    startedAt: number
    completedAt: number
    unsubscribedAt: number
    _all: number
  }


  export type SequenceEnrollmentAvgAggregateInputType = {
    currentStep?: true
  }

  export type SequenceEnrollmentSumAggregateInputType = {
    currentStep?: true
  }

  export type SequenceEnrollmentMinAggregateInputType = {
    id?: true
    orgId?: true
    sequenceId?: true
    contactEmail?: true
    contactId?: true
    dealId?: true
    status?: true
    currentStep?: true
    startedAt?: true
    completedAt?: true
    unsubscribedAt?: true
  }

  export type SequenceEnrollmentMaxAggregateInputType = {
    id?: true
    orgId?: true
    sequenceId?: true
    contactEmail?: true
    contactId?: true
    dealId?: true
    status?: true
    currentStep?: true
    startedAt?: true
    completedAt?: true
    unsubscribedAt?: true
  }

  export type SequenceEnrollmentCountAggregateInputType = {
    id?: true
    orgId?: true
    sequenceId?: true
    contactEmail?: true
    contactId?: true
    dealId?: true
    status?: true
    currentStep?: true
    startedAt?: true
    completedAt?: true
    unsubscribedAt?: true
    _all?: true
  }

  export type SequenceEnrollmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SequenceEnrollment to aggregate.
     */
    where?: SequenceEnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SequenceEnrollments to fetch.
     */
    orderBy?: SequenceEnrollmentOrderByWithRelationInput | SequenceEnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SequenceEnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SequenceEnrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SequenceEnrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SequenceEnrollments
    **/
    _count?: true | SequenceEnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SequenceEnrollmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SequenceEnrollmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SequenceEnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SequenceEnrollmentMaxAggregateInputType
  }

  export type GetSequenceEnrollmentAggregateType<T extends SequenceEnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateSequenceEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSequenceEnrollment[P]>
      : GetScalarType<T[P], AggregateSequenceEnrollment[P]>
  }




  export type SequenceEnrollmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SequenceEnrollmentWhereInput
    orderBy?: SequenceEnrollmentOrderByWithAggregationInput | SequenceEnrollmentOrderByWithAggregationInput[]
    by: SequenceEnrollmentScalarFieldEnum[] | SequenceEnrollmentScalarFieldEnum
    having?: SequenceEnrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SequenceEnrollmentCountAggregateInputType | true
    _avg?: SequenceEnrollmentAvgAggregateInputType
    _sum?: SequenceEnrollmentSumAggregateInputType
    _min?: SequenceEnrollmentMinAggregateInputType
    _max?: SequenceEnrollmentMaxAggregateInputType
  }

  export type SequenceEnrollmentGroupByOutputType = {
    id: string
    orgId: string
    sequenceId: string
    contactEmail: string
    contactId: string | null
    dealId: string | null
    status: string
    currentStep: number
    startedAt: Date
    completedAt: Date | null
    unsubscribedAt: Date | null
    _count: SequenceEnrollmentCountAggregateOutputType | null
    _avg: SequenceEnrollmentAvgAggregateOutputType | null
    _sum: SequenceEnrollmentSumAggregateOutputType | null
    _min: SequenceEnrollmentMinAggregateOutputType | null
    _max: SequenceEnrollmentMaxAggregateOutputType | null
  }

  type GetSequenceEnrollmentGroupByPayload<T extends SequenceEnrollmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SequenceEnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SequenceEnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SequenceEnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], SequenceEnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type SequenceEnrollmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    sequenceId?: boolean
    contactEmail?: boolean
    contactId?: boolean
    dealId?: boolean
    status?: boolean
    currentStep?: boolean
    startedAt?: boolean
    completedAt?: boolean
    unsubscribedAt?: boolean
    sequence?: boolean | EmailSequenceDefaultArgs<ExtArgs>
    activities?: boolean | SequenceEnrollment$activitiesArgs<ExtArgs>
    _count?: boolean | SequenceEnrollmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sequenceEnrollment"]>

  export type SequenceEnrollmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    sequenceId?: boolean
    contactEmail?: boolean
    contactId?: boolean
    dealId?: boolean
    status?: boolean
    currentStep?: boolean
    startedAt?: boolean
    completedAt?: boolean
    unsubscribedAt?: boolean
    sequence?: boolean | EmailSequenceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sequenceEnrollment"]>

  export type SequenceEnrollmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    sequenceId?: boolean
    contactEmail?: boolean
    contactId?: boolean
    dealId?: boolean
    status?: boolean
    currentStep?: boolean
    startedAt?: boolean
    completedAt?: boolean
    unsubscribedAt?: boolean
    sequence?: boolean | EmailSequenceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sequenceEnrollment"]>

  export type SequenceEnrollmentSelectScalar = {
    id?: boolean
    orgId?: boolean
    sequenceId?: boolean
    contactEmail?: boolean
    contactId?: boolean
    dealId?: boolean
    status?: boolean
    currentStep?: boolean
    startedAt?: boolean
    completedAt?: boolean
    unsubscribedAt?: boolean
  }

  export type SequenceEnrollmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "sequenceId" | "contactEmail" | "contactId" | "dealId" | "status" | "currentStep" | "startedAt" | "completedAt" | "unsubscribedAt", ExtArgs["result"]["sequenceEnrollment"]>
  export type SequenceEnrollmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sequence?: boolean | EmailSequenceDefaultArgs<ExtArgs>
    activities?: boolean | SequenceEnrollment$activitiesArgs<ExtArgs>
    _count?: boolean | SequenceEnrollmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SequenceEnrollmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sequence?: boolean | EmailSequenceDefaultArgs<ExtArgs>
  }
  export type SequenceEnrollmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sequence?: boolean | EmailSequenceDefaultArgs<ExtArgs>
  }

  export type $SequenceEnrollmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SequenceEnrollment"
    objects: {
      sequence: Prisma.$EmailSequencePayload<ExtArgs>
      activities: Prisma.$SequenceActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      sequenceId: string
      contactEmail: string
      contactId: string | null
      dealId: string | null
      status: string
      currentStep: number
      startedAt: Date
      completedAt: Date | null
      unsubscribedAt: Date | null
    }, ExtArgs["result"]["sequenceEnrollment"]>
    composites: {}
  }

  type SequenceEnrollmentGetPayload<S extends boolean | null | undefined | SequenceEnrollmentDefaultArgs> = $Result.GetResult<Prisma.$SequenceEnrollmentPayload, S>

  type SequenceEnrollmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SequenceEnrollmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SequenceEnrollmentCountAggregateInputType | true
    }

  export interface SequenceEnrollmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SequenceEnrollment'], meta: { name: 'SequenceEnrollment' } }
    /**
     * Find zero or one SequenceEnrollment that matches the filter.
     * @param {SequenceEnrollmentFindUniqueArgs} args - Arguments to find a SequenceEnrollment
     * @example
     * // Get one SequenceEnrollment
     * const sequenceEnrollment = await prisma.sequenceEnrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SequenceEnrollmentFindUniqueArgs>(args: SelectSubset<T, SequenceEnrollmentFindUniqueArgs<ExtArgs>>): Prisma__SequenceEnrollmentClient<$Result.GetResult<Prisma.$SequenceEnrollmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SequenceEnrollment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SequenceEnrollmentFindUniqueOrThrowArgs} args - Arguments to find a SequenceEnrollment
     * @example
     * // Get one SequenceEnrollment
     * const sequenceEnrollment = await prisma.sequenceEnrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SequenceEnrollmentFindUniqueOrThrowArgs>(args: SelectSubset<T, SequenceEnrollmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SequenceEnrollmentClient<$Result.GetResult<Prisma.$SequenceEnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SequenceEnrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceEnrollmentFindFirstArgs} args - Arguments to find a SequenceEnrollment
     * @example
     * // Get one SequenceEnrollment
     * const sequenceEnrollment = await prisma.sequenceEnrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SequenceEnrollmentFindFirstArgs>(args?: SelectSubset<T, SequenceEnrollmentFindFirstArgs<ExtArgs>>): Prisma__SequenceEnrollmentClient<$Result.GetResult<Prisma.$SequenceEnrollmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SequenceEnrollment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceEnrollmentFindFirstOrThrowArgs} args - Arguments to find a SequenceEnrollment
     * @example
     * // Get one SequenceEnrollment
     * const sequenceEnrollment = await prisma.sequenceEnrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SequenceEnrollmentFindFirstOrThrowArgs>(args?: SelectSubset<T, SequenceEnrollmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__SequenceEnrollmentClient<$Result.GetResult<Prisma.$SequenceEnrollmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SequenceEnrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceEnrollmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SequenceEnrollments
     * const sequenceEnrollments = await prisma.sequenceEnrollment.findMany()
     * 
     * // Get first 10 SequenceEnrollments
     * const sequenceEnrollments = await prisma.sequenceEnrollment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sequenceEnrollmentWithIdOnly = await prisma.sequenceEnrollment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SequenceEnrollmentFindManyArgs>(args?: SelectSubset<T, SequenceEnrollmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SequenceEnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SequenceEnrollment.
     * @param {SequenceEnrollmentCreateArgs} args - Arguments to create a SequenceEnrollment.
     * @example
     * // Create one SequenceEnrollment
     * const SequenceEnrollment = await prisma.sequenceEnrollment.create({
     *   data: {
     *     // ... data to create a SequenceEnrollment
     *   }
     * })
     * 
     */
    create<T extends SequenceEnrollmentCreateArgs>(args: SelectSubset<T, SequenceEnrollmentCreateArgs<ExtArgs>>): Prisma__SequenceEnrollmentClient<$Result.GetResult<Prisma.$SequenceEnrollmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SequenceEnrollments.
     * @param {SequenceEnrollmentCreateManyArgs} args - Arguments to create many SequenceEnrollments.
     * @example
     * // Create many SequenceEnrollments
     * const sequenceEnrollment = await prisma.sequenceEnrollment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SequenceEnrollmentCreateManyArgs>(args?: SelectSubset<T, SequenceEnrollmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SequenceEnrollments and returns the data saved in the database.
     * @param {SequenceEnrollmentCreateManyAndReturnArgs} args - Arguments to create many SequenceEnrollments.
     * @example
     * // Create many SequenceEnrollments
     * const sequenceEnrollment = await prisma.sequenceEnrollment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SequenceEnrollments and only return the `id`
     * const sequenceEnrollmentWithIdOnly = await prisma.sequenceEnrollment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SequenceEnrollmentCreateManyAndReturnArgs>(args?: SelectSubset<T, SequenceEnrollmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SequenceEnrollmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SequenceEnrollment.
     * @param {SequenceEnrollmentDeleteArgs} args - Arguments to delete one SequenceEnrollment.
     * @example
     * // Delete one SequenceEnrollment
     * const SequenceEnrollment = await prisma.sequenceEnrollment.delete({
     *   where: {
     *     // ... filter to delete one SequenceEnrollment
     *   }
     * })
     * 
     */
    delete<T extends SequenceEnrollmentDeleteArgs>(args: SelectSubset<T, SequenceEnrollmentDeleteArgs<ExtArgs>>): Prisma__SequenceEnrollmentClient<$Result.GetResult<Prisma.$SequenceEnrollmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SequenceEnrollment.
     * @param {SequenceEnrollmentUpdateArgs} args - Arguments to update one SequenceEnrollment.
     * @example
     * // Update one SequenceEnrollment
     * const sequenceEnrollment = await prisma.sequenceEnrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SequenceEnrollmentUpdateArgs>(args: SelectSubset<T, SequenceEnrollmentUpdateArgs<ExtArgs>>): Prisma__SequenceEnrollmentClient<$Result.GetResult<Prisma.$SequenceEnrollmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SequenceEnrollments.
     * @param {SequenceEnrollmentDeleteManyArgs} args - Arguments to filter SequenceEnrollments to delete.
     * @example
     * // Delete a few SequenceEnrollments
     * const { count } = await prisma.sequenceEnrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SequenceEnrollmentDeleteManyArgs>(args?: SelectSubset<T, SequenceEnrollmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SequenceEnrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceEnrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SequenceEnrollments
     * const sequenceEnrollment = await prisma.sequenceEnrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SequenceEnrollmentUpdateManyArgs>(args: SelectSubset<T, SequenceEnrollmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SequenceEnrollments and returns the data updated in the database.
     * @param {SequenceEnrollmentUpdateManyAndReturnArgs} args - Arguments to update many SequenceEnrollments.
     * @example
     * // Update many SequenceEnrollments
     * const sequenceEnrollment = await prisma.sequenceEnrollment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SequenceEnrollments and only return the `id`
     * const sequenceEnrollmentWithIdOnly = await prisma.sequenceEnrollment.updateManyAndReturn({
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
    updateManyAndReturn<T extends SequenceEnrollmentUpdateManyAndReturnArgs>(args: SelectSubset<T, SequenceEnrollmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SequenceEnrollmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SequenceEnrollment.
     * @param {SequenceEnrollmentUpsertArgs} args - Arguments to update or create a SequenceEnrollment.
     * @example
     * // Update or create a SequenceEnrollment
     * const sequenceEnrollment = await prisma.sequenceEnrollment.upsert({
     *   create: {
     *     // ... data to create a SequenceEnrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SequenceEnrollment we want to update
     *   }
     * })
     */
    upsert<T extends SequenceEnrollmentUpsertArgs>(args: SelectSubset<T, SequenceEnrollmentUpsertArgs<ExtArgs>>): Prisma__SequenceEnrollmentClient<$Result.GetResult<Prisma.$SequenceEnrollmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SequenceEnrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceEnrollmentCountArgs} args - Arguments to filter SequenceEnrollments to count.
     * @example
     * // Count the number of SequenceEnrollments
     * const count = await prisma.sequenceEnrollment.count({
     *   where: {
     *     // ... the filter for the SequenceEnrollments we want to count
     *   }
     * })
    **/
    count<T extends SequenceEnrollmentCountArgs>(
      args?: Subset<T, SequenceEnrollmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SequenceEnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SequenceEnrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceEnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SequenceEnrollmentAggregateArgs>(args: Subset<T, SequenceEnrollmentAggregateArgs>): Prisma.PrismaPromise<GetSequenceEnrollmentAggregateType<T>>

    /**
     * Group by SequenceEnrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceEnrollmentGroupByArgs} args - Group by arguments.
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
      T extends SequenceEnrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SequenceEnrollmentGroupByArgs['orderBy'] }
        : { orderBy?: SequenceEnrollmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SequenceEnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSequenceEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SequenceEnrollment model
   */
  readonly fields: SequenceEnrollmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SequenceEnrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SequenceEnrollmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sequence<T extends EmailSequenceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmailSequenceDefaultArgs<ExtArgs>>): Prisma__EmailSequenceClient<$Result.GetResult<Prisma.$EmailSequencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    activities<T extends SequenceEnrollment$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, SequenceEnrollment$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SequenceActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SequenceEnrollment model
   */
  interface SequenceEnrollmentFieldRefs {
    readonly id: FieldRef<"SequenceEnrollment", 'String'>
    readonly orgId: FieldRef<"SequenceEnrollment", 'String'>
    readonly sequenceId: FieldRef<"SequenceEnrollment", 'String'>
    readonly contactEmail: FieldRef<"SequenceEnrollment", 'String'>
    readonly contactId: FieldRef<"SequenceEnrollment", 'String'>
    readonly dealId: FieldRef<"SequenceEnrollment", 'String'>
    readonly status: FieldRef<"SequenceEnrollment", 'String'>
    readonly currentStep: FieldRef<"SequenceEnrollment", 'Int'>
    readonly startedAt: FieldRef<"SequenceEnrollment", 'DateTime'>
    readonly completedAt: FieldRef<"SequenceEnrollment", 'DateTime'>
    readonly unsubscribedAt: FieldRef<"SequenceEnrollment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SequenceEnrollment findUnique
   */
  export type SequenceEnrollmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceEnrollment
     */
    select?: SequenceEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceEnrollment
     */
    omit?: SequenceEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceEnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which SequenceEnrollment to fetch.
     */
    where: SequenceEnrollmentWhereUniqueInput
  }

  /**
   * SequenceEnrollment findUniqueOrThrow
   */
  export type SequenceEnrollmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceEnrollment
     */
    select?: SequenceEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceEnrollment
     */
    omit?: SequenceEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceEnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which SequenceEnrollment to fetch.
     */
    where: SequenceEnrollmentWhereUniqueInput
  }

  /**
   * SequenceEnrollment findFirst
   */
  export type SequenceEnrollmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceEnrollment
     */
    select?: SequenceEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceEnrollment
     */
    omit?: SequenceEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceEnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which SequenceEnrollment to fetch.
     */
    where?: SequenceEnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SequenceEnrollments to fetch.
     */
    orderBy?: SequenceEnrollmentOrderByWithRelationInput | SequenceEnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SequenceEnrollments.
     */
    cursor?: SequenceEnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SequenceEnrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SequenceEnrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SequenceEnrollments.
     */
    distinct?: SequenceEnrollmentScalarFieldEnum | SequenceEnrollmentScalarFieldEnum[]
  }

  /**
   * SequenceEnrollment findFirstOrThrow
   */
  export type SequenceEnrollmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceEnrollment
     */
    select?: SequenceEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceEnrollment
     */
    omit?: SequenceEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceEnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which SequenceEnrollment to fetch.
     */
    where?: SequenceEnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SequenceEnrollments to fetch.
     */
    orderBy?: SequenceEnrollmentOrderByWithRelationInput | SequenceEnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SequenceEnrollments.
     */
    cursor?: SequenceEnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SequenceEnrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SequenceEnrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SequenceEnrollments.
     */
    distinct?: SequenceEnrollmentScalarFieldEnum | SequenceEnrollmentScalarFieldEnum[]
  }

  /**
   * SequenceEnrollment findMany
   */
  export type SequenceEnrollmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceEnrollment
     */
    select?: SequenceEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceEnrollment
     */
    omit?: SequenceEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceEnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which SequenceEnrollments to fetch.
     */
    where?: SequenceEnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SequenceEnrollments to fetch.
     */
    orderBy?: SequenceEnrollmentOrderByWithRelationInput | SequenceEnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SequenceEnrollments.
     */
    cursor?: SequenceEnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SequenceEnrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SequenceEnrollments.
     */
    skip?: number
    distinct?: SequenceEnrollmentScalarFieldEnum | SequenceEnrollmentScalarFieldEnum[]
  }

  /**
   * SequenceEnrollment create
   */
  export type SequenceEnrollmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceEnrollment
     */
    select?: SequenceEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceEnrollment
     */
    omit?: SequenceEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceEnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to create a SequenceEnrollment.
     */
    data: XOR<SequenceEnrollmentCreateInput, SequenceEnrollmentUncheckedCreateInput>
  }

  /**
   * SequenceEnrollment createMany
   */
  export type SequenceEnrollmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SequenceEnrollments.
     */
    data: SequenceEnrollmentCreateManyInput | SequenceEnrollmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SequenceEnrollment createManyAndReturn
   */
  export type SequenceEnrollmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceEnrollment
     */
    select?: SequenceEnrollmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceEnrollment
     */
    omit?: SequenceEnrollmentOmit<ExtArgs> | null
    /**
     * The data used to create many SequenceEnrollments.
     */
    data: SequenceEnrollmentCreateManyInput | SequenceEnrollmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceEnrollmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SequenceEnrollment update
   */
  export type SequenceEnrollmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceEnrollment
     */
    select?: SequenceEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceEnrollment
     */
    omit?: SequenceEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceEnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to update a SequenceEnrollment.
     */
    data: XOR<SequenceEnrollmentUpdateInput, SequenceEnrollmentUncheckedUpdateInput>
    /**
     * Choose, which SequenceEnrollment to update.
     */
    where: SequenceEnrollmentWhereUniqueInput
  }

  /**
   * SequenceEnrollment updateMany
   */
  export type SequenceEnrollmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SequenceEnrollments.
     */
    data: XOR<SequenceEnrollmentUpdateManyMutationInput, SequenceEnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which SequenceEnrollments to update
     */
    where?: SequenceEnrollmentWhereInput
    /**
     * Limit how many SequenceEnrollments to update.
     */
    limit?: number
  }

  /**
   * SequenceEnrollment updateManyAndReturn
   */
  export type SequenceEnrollmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceEnrollment
     */
    select?: SequenceEnrollmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceEnrollment
     */
    omit?: SequenceEnrollmentOmit<ExtArgs> | null
    /**
     * The data used to update SequenceEnrollments.
     */
    data: XOR<SequenceEnrollmentUpdateManyMutationInput, SequenceEnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which SequenceEnrollments to update
     */
    where?: SequenceEnrollmentWhereInput
    /**
     * Limit how many SequenceEnrollments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceEnrollmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SequenceEnrollment upsert
   */
  export type SequenceEnrollmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceEnrollment
     */
    select?: SequenceEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceEnrollment
     */
    omit?: SequenceEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceEnrollmentInclude<ExtArgs> | null
    /**
     * The filter to search for the SequenceEnrollment to update in case it exists.
     */
    where: SequenceEnrollmentWhereUniqueInput
    /**
     * In case the SequenceEnrollment found by the `where` argument doesn't exist, create a new SequenceEnrollment with this data.
     */
    create: XOR<SequenceEnrollmentCreateInput, SequenceEnrollmentUncheckedCreateInput>
    /**
     * In case the SequenceEnrollment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SequenceEnrollmentUpdateInput, SequenceEnrollmentUncheckedUpdateInput>
  }

  /**
   * SequenceEnrollment delete
   */
  export type SequenceEnrollmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceEnrollment
     */
    select?: SequenceEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceEnrollment
     */
    omit?: SequenceEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceEnrollmentInclude<ExtArgs> | null
    /**
     * Filter which SequenceEnrollment to delete.
     */
    where: SequenceEnrollmentWhereUniqueInput
  }

  /**
   * SequenceEnrollment deleteMany
   */
  export type SequenceEnrollmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SequenceEnrollments to delete
     */
    where?: SequenceEnrollmentWhereInput
    /**
     * Limit how many SequenceEnrollments to delete.
     */
    limit?: number
  }

  /**
   * SequenceEnrollment.activities
   */
  export type SequenceEnrollment$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceActivity
     */
    select?: SequenceActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceActivity
     */
    omit?: SequenceActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceActivityInclude<ExtArgs> | null
    where?: SequenceActivityWhereInput
    orderBy?: SequenceActivityOrderByWithRelationInput | SequenceActivityOrderByWithRelationInput[]
    cursor?: SequenceActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SequenceActivityScalarFieldEnum | SequenceActivityScalarFieldEnum[]
  }

  /**
   * SequenceEnrollment without action
   */
  export type SequenceEnrollmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceEnrollment
     */
    select?: SequenceEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceEnrollment
     */
    omit?: SequenceEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceEnrollmentInclude<ExtArgs> | null
  }


  /**
   * Model SequenceActivity
   */

  export type AggregateSequenceActivity = {
    _count: SequenceActivityCountAggregateOutputType | null
    _avg: SequenceActivityAvgAggregateOutputType | null
    _sum: SequenceActivitySumAggregateOutputType | null
    _min: SequenceActivityMinAggregateOutputType | null
    _max: SequenceActivityMaxAggregateOutputType | null
  }

  export type SequenceActivityAvgAggregateOutputType = {
    stepNumber: number | null
  }

  export type SequenceActivitySumAggregateOutputType = {
    stepNumber: number | null
  }

  export type SequenceActivityMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    enrollmentId: string | null
    stepNumber: number | null
    type: string | null
    status: string | null
    scheduledAt: Date | null
    sentAt: Date | null
    openedAt: Date | null
    clickedAt: Date | null
    errorMessage: string | null
  }

  export type SequenceActivityMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    enrollmentId: string | null
    stepNumber: number | null
    type: string | null
    status: string | null
    scheduledAt: Date | null
    sentAt: Date | null
    openedAt: Date | null
    clickedAt: Date | null
    errorMessage: string | null
  }

  export type SequenceActivityCountAggregateOutputType = {
    id: number
    orgId: number
    enrollmentId: number
    stepNumber: number
    type: number
    status: number
    scheduledAt: number
    sentAt: number
    openedAt: number
    clickedAt: number
    errorMessage: number
    _all: number
  }


  export type SequenceActivityAvgAggregateInputType = {
    stepNumber?: true
  }

  export type SequenceActivitySumAggregateInputType = {
    stepNumber?: true
  }

  export type SequenceActivityMinAggregateInputType = {
    id?: true
    orgId?: true
    enrollmentId?: true
    stepNumber?: true
    type?: true
    status?: true
    scheduledAt?: true
    sentAt?: true
    openedAt?: true
    clickedAt?: true
    errorMessage?: true
  }

  export type SequenceActivityMaxAggregateInputType = {
    id?: true
    orgId?: true
    enrollmentId?: true
    stepNumber?: true
    type?: true
    status?: true
    scheduledAt?: true
    sentAt?: true
    openedAt?: true
    clickedAt?: true
    errorMessage?: true
  }

  export type SequenceActivityCountAggregateInputType = {
    id?: true
    orgId?: true
    enrollmentId?: true
    stepNumber?: true
    type?: true
    status?: true
    scheduledAt?: true
    sentAt?: true
    openedAt?: true
    clickedAt?: true
    errorMessage?: true
    _all?: true
  }

  export type SequenceActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SequenceActivity to aggregate.
     */
    where?: SequenceActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SequenceActivities to fetch.
     */
    orderBy?: SequenceActivityOrderByWithRelationInput | SequenceActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SequenceActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SequenceActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SequenceActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SequenceActivities
    **/
    _count?: true | SequenceActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SequenceActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SequenceActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SequenceActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SequenceActivityMaxAggregateInputType
  }

  export type GetSequenceActivityAggregateType<T extends SequenceActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateSequenceActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSequenceActivity[P]>
      : GetScalarType<T[P], AggregateSequenceActivity[P]>
  }




  export type SequenceActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SequenceActivityWhereInput
    orderBy?: SequenceActivityOrderByWithAggregationInput | SequenceActivityOrderByWithAggregationInput[]
    by: SequenceActivityScalarFieldEnum[] | SequenceActivityScalarFieldEnum
    having?: SequenceActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SequenceActivityCountAggregateInputType | true
    _avg?: SequenceActivityAvgAggregateInputType
    _sum?: SequenceActivitySumAggregateInputType
    _min?: SequenceActivityMinAggregateInputType
    _max?: SequenceActivityMaxAggregateInputType
  }

  export type SequenceActivityGroupByOutputType = {
    id: string
    orgId: string
    enrollmentId: string
    stepNumber: number
    type: string
    status: string
    scheduledAt: Date
    sentAt: Date | null
    openedAt: Date | null
    clickedAt: Date | null
    errorMessage: string | null
    _count: SequenceActivityCountAggregateOutputType | null
    _avg: SequenceActivityAvgAggregateOutputType | null
    _sum: SequenceActivitySumAggregateOutputType | null
    _min: SequenceActivityMinAggregateOutputType | null
    _max: SequenceActivityMaxAggregateOutputType | null
  }

  type GetSequenceActivityGroupByPayload<T extends SequenceActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SequenceActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SequenceActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SequenceActivityGroupByOutputType[P]>
            : GetScalarType<T[P], SequenceActivityGroupByOutputType[P]>
        }
      >
    >


  export type SequenceActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    enrollmentId?: boolean
    stepNumber?: boolean
    type?: boolean
    status?: boolean
    scheduledAt?: boolean
    sentAt?: boolean
    openedAt?: boolean
    clickedAt?: boolean
    errorMessage?: boolean
    enrollment?: boolean | SequenceEnrollmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sequenceActivity"]>

  export type SequenceActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    enrollmentId?: boolean
    stepNumber?: boolean
    type?: boolean
    status?: boolean
    scheduledAt?: boolean
    sentAt?: boolean
    openedAt?: boolean
    clickedAt?: boolean
    errorMessage?: boolean
    enrollment?: boolean | SequenceEnrollmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sequenceActivity"]>

  export type SequenceActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    enrollmentId?: boolean
    stepNumber?: boolean
    type?: boolean
    status?: boolean
    scheduledAt?: boolean
    sentAt?: boolean
    openedAt?: boolean
    clickedAt?: boolean
    errorMessage?: boolean
    enrollment?: boolean | SequenceEnrollmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sequenceActivity"]>

  export type SequenceActivitySelectScalar = {
    id?: boolean
    orgId?: boolean
    enrollmentId?: boolean
    stepNumber?: boolean
    type?: boolean
    status?: boolean
    scheduledAt?: boolean
    sentAt?: boolean
    openedAt?: boolean
    clickedAt?: boolean
    errorMessage?: boolean
  }

  export type SequenceActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "enrollmentId" | "stepNumber" | "type" | "status" | "scheduledAt" | "sentAt" | "openedAt" | "clickedAt" | "errorMessage", ExtArgs["result"]["sequenceActivity"]>
  export type SequenceActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollment?: boolean | SequenceEnrollmentDefaultArgs<ExtArgs>
  }
  export type SequenceActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollment?: boolean | SequenceEnrollmentDefaultArgs<ExtArgs>
  }
  export type SequenceActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollment?: boolean | SequenceEnrollmentDefaultArgs<ExtArgs>
  }

  export type $SequenceActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SequenceActivity"
    objects: {
      enrollment: Prisma.$SequenceEnrollmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      enrollmentId: string
      stepNumber: number
      type: string
      status: string
      scheduledAt: Date
      sentAt: Date | null
      openedAt: Date | null
      clickedAt: Date | null
      errorMessage: string | null
    }, ExtArgs["result"]["sequenceActivity"]>
    composites: {}
  }

  type SequenceActivityGetPayload<S extends boolean | null | undefined | SequenceActivityDefaultArgs> = $Result.GetResult<Prisma.$SequenceActivityPayload, S>

  type SequenceActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SequenceActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SequenceActivityCountAggregateInputType | true
    }

  export interface SequenceActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SequenceActivity'], meta: { name: 'SequenceActivity' } }
    /**
     * Find zero or one SequenceActivity that matches the filter.
     * @param {SequenceActivityFindUniqueArgs} args - Arguments to find a SequenceActivity
     * @example
     * // Get one SequenceActivity
     * const sequenceActivity = await prisma.sequenceActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SequenceActivityFindUniqueArgs>(args: SelectSubset<T, SequenceActivityFindUniqueArgs<ExtArgs>>): Prisma__SequenceActivityClient<$Result.GetResult<Prisma.$SequenceActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SequenceActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SequenceActivityFindUniqueOrThrowArgs} args - Arguments to find a SequenceActivity
     * @example
     * // Get one SequenceActivity
     * const sequenceActivity = await prisma.sequenceActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SequenceActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, SequenceActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SequenceActivityClient<$Result.GetResult<Prisma.$SequenceActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SequenceActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceActivityFindFirstArgs} args - Arguments to find a SequenceActivity
     * @example
     * // Get one SequenceActivity
     * const sequenceActivity = await prisma.sequenceActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SequenceActivityFindFirstArgs>(args?: SelectSubset<T, SequenceActivityFindFirstArgs<ExtArgs>>): Prisma__SequenceActivityClient<$Result.GetResult<Prisma.$SequenceActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SequenceActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceActivityFindFirstOrThrowArgs} args - Arguments to find a SequenceActivity
     * @example
     * // Get one SequenceActivity
     * const sequenceActivity = await prisma.sequenceActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SequenceActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, SequenceActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__SequenceActivityClient<$Result.GetResult<Prisma.$SequenceActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SequenceActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SequenceActivities
     * const sequenceActivities = await prisma.sequenceActivity.findMany()
     * 
     * // Get first 10 SequenceActivities
     * const sequenceActivities = await prisma.sequenceActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sequenceActivityWithIdOnly = await prisma.sequenceActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SequenceActivityFindManyArgs>(args?: SelectSubset<T, SequenceActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SequenceActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SequenceActivity.
     * @param {SequenceActivityCreateArgs} args - Arguments to create a SequenceActivity.
     * @example
     * // Create one SequenceActivity
     * const SequenceActivity = await prisma.sequenceActivity.create({
     *   data: {
     *     // ... data to create a SequenceActivity
     *   }
     * })
     * 
     */
    create<T extends SequenceActivityCreateArgs>(args: SelectSubset<T, SequenceActivityCreateArgs<ExtArgs>>): Prisma__SequenceActivityClient<$Result.GetResult<Prisma.$SequenceActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SequenceActivities.
     * @param {SequenceActivityCreateManyArgs} args - Arguments to create many SequenceActivities.
     * @example
     * // Create many SequenceActivities
     * const sequenceActivity = await prisma.sequenceActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SequenceActivityCreateManyArgs>(args?: SelectSubset<T, SequenceActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SequenceActivities and returns the data saved in the database.
     * @param {SequenceActivityCreateManyAndReturnArgs} args - Arguments to create many SequenceActivities.
     * @example
     * // Create many SequenceActivities
     * const sequenceActivity = await prisma.sequenceActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SequenceActivities and only return the `id`
     * const sequenceActivityWithIdOnly = await prisma.sequenceActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SequenceActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, SequenceActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SequenceActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SequenceActivity.
     * @param {SequenceActivityDeleteArgs} args - Arguments to delete one SequenceActivity.
     * @example
     * // Delete one SequenceActivity
     * const SequenceActivity = await prisma.sequenceActivity.delete({
     *   where: {
     *     // ... filter to delete one SequenceActivity
     *   }
     * })
     * 
     */
    delete<T extends SequenceActivityDeleteArgs>(args: SelectSubset<T, SequenceActivityDeleteArgs<ExtArgs>>): Prisma__SequenceActivityClient<$Result.GetResult<Prisma.$SequenceActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SequenceActivity.
     * @param {SequenceActivityUpdateArgs} args - Arguments to update one SequenceActivity.
     * @example
     * // Update one SequenceActivity
     * const sequenceActivity = await prisma.sequenceActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SequenceActivityUpdateArgs>(args: SelectSubset<T, SequenceActivityUpdateArgs<ExtArgs>>): Prisma__SequenceActivityClient<$Result.GetResult<Prisma.$SequenceActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SequenceActivities.
     * @param {SequenceActivityDeleteManyArgs} args - Arguments to filter SequenceActivities to delete.
     * @example
     * // Delete a few SequenceActivities
     * const { count } = await prisma.sequenceActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SequenceActivityDeleteManyArgs>(args?: SelectSubset<T, SequenceActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SequenceActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SequenceActivities
     * const sequenceActivity = await prisma.sequenceActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SequenceActivityUpdateManyArgs>(args: SelectSubset<T, SequenceActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SequenceActivities and returns the data updated in the database.
     * @param {SequenceActivityUpdateManyAndReturnArgs} args - Arguments to update many SequenceActivities.
     * @example
     * // Update many SequenceActivities
     * const sequenceActivity = await prisma.sequenceActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SequenceActivities and only return the `id`
     * const sequenceActivityWithIdOnly = await prisma.sequenceActivity.updateManyAndReturn({
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
    updateManyAndReturn<T extends SequenceActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, SequenceActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SequenceActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SequenceActivity.
     * @param {SequenceActivityUpsertArgs} args - Arguments to update or create a SequenceActivity.
     * @example
     * // Update or create a SequenceActivity
     * const sequenceActivity = await prisma.sequenceActivity.upsert({
     *   create: {
     *     // ... data to create a SequenceActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SequenceActivity we want to update
     *   }
     * })
     */
    upsert<T extends SequenceActivityUpsertArgs>(args: SelectSubset<T, SequenceActivityUpsertArgs<ExtArgs>>): Prisma__SequenceActivityClient<$Result.GetResult<Prisma.$SequenceActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SequenceActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceActivityCountArgs} args - Arguments to filter SequenceActivities to count.
     * @example
     * // Count the number of SequenceActivities
     * const count = await prisma.sequenceActivity.count({
     *   where: {
     *     // ... the filter for the SequenceActivities we want to count
     *   }
     * })
    **/
    count<T extends SequenceActivityCountArgs>(
      args?: Subset<T, SequenceActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SequenceActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SequenceActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SequenceActivityAggregateArgs>(args: Subset<T, SequenceActivityAggregateArgs>): Prisma.PrismaPromise<GetSequenceActivityAggregateType<T>>

    /**
     * Group by SequenceActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceActivityGroupByArgs} args - Group by arguments.
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
      T extends SequenceActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SequenceActivityGroupByArgs['orderBy'] }
        : { orderBy?: SequenceActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SequenceActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSequenceActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SequenceActivity model
   */
  readonly fields: SequenceActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SequenceActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SequenceActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enrollment<T extends SequenceEnrollmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SequenceEnrollmentDefaultArgs<ExtArgs>>): Prisma__SequenceEnrollmentClient<$Result.GetResult<Prisma.$SequenceEnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SequenceActivity model
   */
  interface SequenceActivityFieldRefs {
    readonly id: FieldRef<"SequenceActivity", 'String'>
    readonly orgId: FieldRef<"SequenceActivity", 'String'>
    readonly enrollmentId: FieldRef<"SequenceActivity", 'String'>
    readonly stepNumber: FieldRef<"SequenceActivity", 'Int'>
    readonly type: FieldRef<"SequenceActivity", 'String'>
    readonly status: FieldRef<"SequenceActivity", 'String'>
    readonly scheduledAt: FieldRef<"SequenceActivity", 'DateTime'>
    readonly sentAt: FieldRef<"SequenceActivity", 'DateTime'>
    readonly openedAt: FieldRef<"SequenceActivity", 'DateTime'>
    readonly clickedAt: FieldRef<"SequenceActivity", 'DateTime'>
    readonly errorMessage: FieldRef<"SequenceActivity", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SequenceActivity findUnique
   */
  export type SequenceActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceActivity
     */
    select?: SequenceActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceActivity
     */
    omit?: SequenceActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceActivityInclude<ExtArgs> | null
    /**
     * Filter, which SequenceActivity to fetch.
     */
    where: SequenceActivityWhereUniqueInput
  }

  /**
   * SequenceActivity findUniqueOrThrow
   */
  export type SequenceActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceActivity
     */
    select?: SequenceActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceActivity
     */
    omit?: SequenceActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceActivityInclude<ExtArgs> | null
    /**
     * Filter, which SequenceActivity to fetch.
     */
    where: SequenceActivityWhereUniqueInput
  }

  /**
   * SequenceActivity findFirst
   */
  export type SequenceActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceActivity
     */
    select?: SequenceActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceActivity
     */
    omit?: SequenceActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceActivityInclude<ExtArgs> | null
    /**
     * Filter, which SequenceActivity to fetch.
     */
    where?: SequenceActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SequenceActivities to fetch.
     */
    orderBy?: SequenceActivityOrderByWithRelationInput | SequenceActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SequenceActivities.
     */
    cursor?: SequenceActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SequenceActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SequenceActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SequenceActivities.
     */
    distinct?: SequenceActivityScalarFieldEnum | SequenceActivityScalarFieldEnum[]
  }

  /**
   * SequenceActivity findFirstOrThrow
   */
  export type SequenceActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceActivity
     */
    select?: SequenceActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceActivity
     */
    omit?: SequenceActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceActivityInclude<ExtArgs> | null
    /**
     * Filter, which SequenceActivity to fetch.
     */
    where?: SequenceActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SequenceActivities to fetch.
     */
    orderBy?: SequenceActivityOrderByWithRelationInput | SequenceActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SequenceActivities.
     */
    cursor?: SequenceActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SequenceActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SequenceActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SequenceActivities.
     */
    distinct?: SequenceActivityScalarFieldEnum | SequenceActivityScalarFieldEnum[]
  }

  /**
   * SequenceActivity findMany
   */
  export type SequenceActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceActivity
     */
    select?: SequenceActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceActivity
     */
    omit?: SequenceActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceActivityInclude<ExtArgs> | null
    /**
     * Filter, which SequenceActivities to fetch.
     */
    where?: SequenceActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SequenceActivities to fetch.
     */
    orderBy?: SequenceActivityOrderByWithRelationInput | SequenceActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SequenceActivities.
     */
    cursor?: SequenceActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SequenceActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SequenceActivities.
     */
    skip?: number
    distinct?: SequenceActivityScalarFieldEnum | SequenceActivityScalarFieldEnum[]
  }

  /**
   * SequenceActivity create
   */
  export type SequenceActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceActivity
     */
    select?: SequenceActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceActivity
     */
    omit?: SequenceActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a SequenceActivity.
     */
    data: XOR<SequenceActivityCreateInput, SequenceActivityUncheckedCreateInput>
  }

  /**
   * SequenceActivity createMany
   */
  export type SequenceActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SequenceActivities.
     */
    data: SequenceActivityCreateManyInput | SequenceActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SequenceActivity createManyAndReturn
   */
  export type SequenceActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceActivity
     */
    select?: SequenceActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceActivity
     */
    omit?: SequenceActivityOmit<ExtArgs> | null
    /**
     * The data used to create many SequenceActivities.
     */
    data: SequenceActivityCreateManyInput | SequenceActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SequenceActivity update
   */
  export type SequenceActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceActivity
     */
    select?: SequenceActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceActivity
     */
    omit?: SequenceActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a SequenceActivity.
     */
    data: XOR<SequenceActivityUpdateInput, SequenceActivityUncheckedUpdateInput>
    /**
     * Choose, which SequenceActivity to update.
     */
    where: SequenceActivityWhereUniqueInput
  }

  /**
   * SequenceActivity updateMany
   */
  export type SequenceActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SequenceActivities.
     */
    data: XOR<SequenceActivityUpdateManyMutationInput, SequenceActivityUncheckedUpdateManyInput>
    /**
     * Filter which SequenceActivities to update
     */
    where?: SequenceActivityWhereInput
    /**
     * Limit how many SequenceActivities to update.
     */
    limit?: number
  }

  /**
   * SequenceActivity updateManyAndReturn
   */
  export type SequenceActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceActivity
     */
    select?: SequenceActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceActivity
     */
    omit?: SequenceActivityOmit<ExtArgs> | null
    /**
     * The data used to update SequenceActivities.
     */
    data: XOR<SequenceActivityUpdateManyMutationInput, SequenceActivityUncheckedUpdateManyInput>
    /**
     * Filter which SequenceActivities to update
     */
    where?: SequenceActivityWhereInput
    /**
     * Limit how many SequenceActivities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SequenceActivity upsert
   */
  export type SequenceActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceActivity
     */
    select?: SequenceActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceActivity
     */
    omit?: SequenceActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the SequenceActivity to update in case it exists.
     */
    where: SequenceActivityWhereUniqueInput
    /**
     * In case the SequenceActivity found by the `where` argument doesn't exist, create a new SequenceActivity with this data.
     */
    create: XOR<SequenceActivityCreateInput, SequenceActivityUncheckedCreateInput>
    /**
     * In case the SequenceActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SequenceActivityUpdateInput, SequenceActivityUncheckedUpdateInput>
  }

  /**
   * SequenceActivity delete
   */
  export type SequenceActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceActivity
     */
    select?: SequenceActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceActivity
     */
    omit?: SequenceActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceActivityInclude<ExtArgs> | null
    /**
     * Filter which SequenceActivity to delete.
     */
    where: SequenceActivityWhereUniqueInput
  }

  /**
   * SequenceActivity deleteMany
   */
  export type SequenceActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SequenceActivities to delete
     */
    where?: SequenceActivityWhereInput
    /**
     * Limit how many SequenceActivities to delete.
     */
    limit?: number
  }

  /**
   * SequenceActivity without action
   */
  export type SequenceActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SequenceActivity
     */
    select?: SequenceActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SequenceActivity
     */
    omit?: SequenceActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SequenceActivityInclude<ExtArgs> | null
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


  export const EmailAccountScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    userId: 'userId',
    email: 'email',
    provider: 'provider',
    isConnected: 'isConnected',
    lastSyncAt: 'lastSyncAt',
    syncStatus: 'syncStatus',
    errorMessage: 'errorMessage',
    settings: 'settings',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmailAccountScalarFieldEnum = (typeof EmailAccountScalarFieldEnum)[keyof typeof EmailAccountScalarFieldEnum]


  export const EmailScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    accountId: 'accountId',
    threadId: 'threadId',
    messageId: 'messageId',
    subject: 'subject',
    fromName: 'fromName',
    fromEmail: 'fromEmail',
    toEmails: 'toEmails',
    ccEmails: 'ccEmails',
    bccEmails: 'bccEmails',
    replyToEmails: 'replyToEmails',
    textBody: 'textBody',
    htmlBody: 'htmlBody',
    snippet: 'snippet',
    hasAttachments: 'hasAttachments',
    attachmentCount: 'attachmentCount',
    labels: 'labels',
    isRead: 'isRead',
    isStarred: 'isStarred',
    isImportant: 'isImportant',
    direction: 'direction',
    sentAt: 'sentAt',
    receivedAt: 'receivedAt',
    rawHeaders: 'rawHeaders',
    inReplyTo: 'inReplyTo',
    references: 'references',
    relatedDealId: 'relatedDealId',
    relatedContactId: 'relatedContactId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmailScalarFieldEnum = (typeof EmailScalarFieldEnum)[keyof typeof EmailScalarFieldEnum]


  export const EmailThreadScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    accountId: 'accountId',
    subject: 'subject',
    firstMessageId: 'firstMessageId',
    lastMessageId: 'lastMessageId',
    messageCount: 'messageCount',
    participants: 'participants',
    lastMessageAt: 'lastMessageAt',
    relatedDealId: 'relatedDealId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmailThreadScalarFieldEnum = (typeof EmailThreadScalarFieldEnum)[keyof typeof EmailThreadScalarFieldEnum]


  export const SyncLogScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    accountId: 'accountId',
    status: 'status',
    emailsSynced: 'emailsSynced',
    threadsSynced: 'threadsSynced',
    errors: 'errors',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    duration: 'duration'
  };

  export type SyncLogScalarFieldEnum = (typeof SyncLogScalarFieldEnum)[keyof typeof SyncLogScalarFieldEnum]


  export const EmailTemplateScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    name: 'name',
    subject: 'subject',
    body: 'body',
    category: 'category',
    variables: 'variables',
    isPublic: 'isPublic',
    usageCount: 'usageCount',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmailTemplateScalarFieldEnum = (typeof EmailTemplateScalarFieldEnum)[keyof typeof EmailTemplateScalarFieldEnum]


  export const EmailSequenceScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    name: 'name',
    description: 'description',
    isActive: 'isActive',
    steps: 'steps',
    totalDuration: 'totalDuration',
    enrollmentCount: 'enrollmentCount',
    completionRate: 'completionRate',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmailSequenceScalarFieldEnum = (typeof EmailSequenceScalarFieldEnum)[keyof typeof EmailSequenceScalarFieldEnum]


  export const SequenceEnrollmentScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    sequenceId: 'sequenceId',
    contactEmail: 'contactEmail',
    contactId: 'contactId',
    dealId: 'dealId',
    status: 'status',
    currentStep: 'currentStep',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    unsubscribedAt: 'unsubscribedAt'
  };

  export type SequenceEnrollmentScalarFieldEnum = (typeof SequenceEnrollmentScalarFieldEnum)[keyof typeof SequenceEnrollmentScalarFieldEnum]


  export const SequenceActivityScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    enrollmentId: 'enrollmentId',
    stepNumber: 'stepNumber',
    type: 'type',
    status: 'status',
    scheduledAt: 'scheduledAt',
    sentAt: 'sentAt',
    openedAt: 'openedAt',
    clickedAt: 'clickedAt',
    errorMessage: 'errorMessage'
  };

  export type SequenceActivityScalarFieldEnum = (typeof SequenceActivityScalarFieldEnum)[keyof typeof SequenceActivityScalarFieldEnum]


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


  export type EmailAccountWhereInput = {
    AND?: EmailAccountWhereInput | EmailAccountWhereInput[]
    OR?: EmailAccountWhereInput[]
    NOT?: EmailAccountWhereInput | EmailAccountWhereInput[]
    id?: StringFilter<"EmailAccount"> | string
    orgId?: StringFilter<"EmailAccount"> | string
    userId?: StringFilter<"EmailAccount"> | string
    email?: StringFilter<"EmailAccount"> | string
    provider?: StringFilter<"EmailAccount"> | string
    isConnected?: BoolFilter<"EmailAccount"> | boolean
    lastSyncAt?: DateTimeNullableFilter<"EmailAccount"> | Date | string | null
    syncStatus?: StringFilter<"EmailAccount"> | string
    errorMessage?: StringNullableFilter<"EmailAccount"> | string | null
    settings?: JsonNullableFilter<"EmailAccount">
    createdAt?: DateTimeFilter<"EmailAccount"> | Date | string
    updatedAt?: DateTimeFilter<"EmailAccount"> | Date | string
    emails?: EmailListRelationFilter
    threads?: EmailThreadListRelationFilter
    syncLogs?: SyncLogListRelationFilter
  }

  export type EmailAccountOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    isConnected?: SortOrder
    lastSyncAt?: SortOrderInput | SortOrder
    syncStatus?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    settings?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emails?: EmailOrderByRelationAggregateInput
    threads?: EmailThreadOrderByRelationAggregateInput
    syncLogs?: SyncLogOrderByRelationAggregateInput
  }

  export type EmailAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: EmailAccountWhereInput | EmailAccountWhereInput[]
    OR?: EmailAccountWhereInput[]
    NOT?: EmailAccountWhereInput | EmailAccountWhereInput[]
    orgId?: StringFilter<"EmailAccount"> | string
    userId?: StringFilter<"EmailAccount"> | string
    provider?: StringFilter<"EmailAccount"> | string
    isConnected?: BoolFilter<"EmailAccount"> | boolean
    lastSyncAt?: DateTimeNullableFilter<"EmailAccount"> | Date | string | null
    syncStatus?: StringFilter<"EmailAccount"> | string
    errorMessage?: StringNullableFilter<"EmailAccount"> | string | null
    settings?: JsonNullableFilter<"EmailAccount">
    createdAt?: DateTimeFilter<"EmailAccount"> | Date | string
    updatedAt?: DateTimeFilter<"EmailAccount"> | Date | string
    emails?: EmailListRelationFilter
    threads?: EmailThreadListRelationFilter
    syncLogs?: SyncLogListRelationFilter
  }, "id" | "email">

  export type EmailAccountOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    isConnected?: SortOrder
    lastSyncAt?: SortOrderInput | SortOrder
    syncStatus?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    settings?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmailAccountCountOrderByAggregateInput
    _max?: EmailAccountMaxOrderByAggregateInput
    _min?: EmailAccountMinOrderByAggregateInput
  }

  export type EmailAccountScalarWhereWithAggregatesInput = {
    AND?: EmailAccountScalarWhereWithAggregatesInput | EmailAccountScalarWhereWithAggregatesInput[]
    OR?: EmailAccountScalarWhereWithAggregatesInput[]
    NOT?: EmailAccountScalarWhereWithAggregatesInput | EmailAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailAccount"> | string
    orgId?: StringWithAggregatesFilter<"EmailAccount"> | string
    userId?: StringWithAggregatesFilter<"EmailAccount"> | string
    email?: StringWithAggregatesFilter<"EmailAccount"> | string
    provider?: StringWithAggregatesFilter<"EmailAccount"> | string
    isConnected?: BoolWithAggregatesFilter<"EmailAccount"> | boolean
    lastSyncAt?: DateTimeNullableWithAggregatesFilter<"EmailAccount"> | Date | string | null
    syncStatus?: StringWithAggregatesFilter<"EmailAccount"> | string
    errorMessage?: StringNullableWithAggregatesFilter<"EmailAccount"> | string | null
    settings?: JsonNullableWithAggregatesFilter<"EmailAccount">
    createdAt?: DateTimeWithAggregatesFilter<"EmailAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmailAccount"> | Date | string
  }

  export type EmailWhereInput = {
    AND?: EmailWhereInput | EmailWhereInput[]
    OR?: EmailWhereInput[]
    NOT?: EmailWhereInput | EmailWhereInput[]
    id?: StringFilter<"Email"> | string
    orgId?: StringFilter<"Email"> | string
    accountId?: StringFilter<"Email"> | string
    threadId?: StringNullableFilter<"Email"> | string | null
    messageId?: StringFilter<"Email"> | string
    subject?: StringNullableFilter<"Email"> | string | null
    fromName?: StringNullableFilter<"Email"> | string | null
    fromEmail?: StringFilter<"Email"> | string
    toEmails?: StringNullableListFilter<"Email">
    ccEmails?: StringNullableListFilter<"Email">
    bccEmails?: StringNullableListFilter<"Email">
    replyToEmails?: StringNullableListFilter<"Email">
    textBody?: StringNullableFilter<"Email"> | string | null
    htmlBody?: StringNullableFilter<"Email"> | string | null
    snippet?: StringNullableFilter<"Email"> | string | null
    hasAttachments?: BoolFilter<"Email"> | boolean
    attachmentCount?: IntFilter<"Email"> | number
    labels?: StringNullableListFilter<"Email">
    isRead?: BoolFilter<"Email"> | boolean
    isStarred?: BoolFilter<"Email"> | boolean
    isImportant?: BoolFilter<"Email"> | boolean
    direction?: StringFilter<"Email"> | string
    sentAt?: DateTimeFilter<"Email"> | Date | string
    receivedAt?: DateTimeFilter<"Email"> | Date | string
    rawHeaders?: JsonNullableFilter<"Email">
    inReplyTo?: StringNullableFilter<"Email"> | string | null
    references?: StringNullableListFilter<"Email">
    relatedDealId?: StringNullableFilter<"Email"> | string | null
    relatedContactId?: StringNullableFilter<"Email"> | string | null
    createdAt?: DateTimeFilter<"Email"> | Date | string
    updatedAt?: DateTimeFilter<"Email"> | Date | string
    account?: XOR<EmailAccountScalarRelationFilter, EmailAccountWhereInput>
    thread?: XOR<EmailThreadNullableScalarRelationFilter, EmailThreadWhereInput> | null
  }

  export type EmailOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    accountId?: SortOrder
    threadId?: SortOrderInput | SortOrder
    messageId?: SortOrder
    subject?: SortOrderInput | SortOrder
    fromName?: SortOrderInput | SortOrder
    fromEmail?: SortOrder
    toEmails?: SortOrder
    ccEmails?: SortOrder
    bccEmails?: SortOrder
    replyToEmails?: SortOrder
    textBody?: SortOrderInput | SortOrder
    htmlBody?: SortOrderInput | SortOrder
    snippet?: SortOrderInput | SortOrder
    hasAttachments?: SortOrder
    attachmentCount?: SortOrder
    labels?: SortOrder
    isRead?: SortOrder
    isStarred?: SortOrder
    isImportant?: SortOrder
    direction?: SortOrder
    sentAt?: SortOrder
    receivedAt?: SortOrder
    rawHeaders?: SortOrderInput | SortOrder
    inReplyTo?: SortOrderInput | SortOrder
    references?: SortOrder
    relatedDealId?: SortOrderInput | SortOrder
    relatedContactId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    account?: EmailAccountOrderByWithRelationInput
    thread?: EmailThreadOrderByWithRelationInput
  }

  export type EmailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    messageId?: string
    AND?: EmailWhereInput | EmailWhereInput[]
    OR?: EmailWhereInput[]
    NOT?: EmailWhereInput | EmailWhereInput[]
    orgId?: StringFilter<"Email"> | string
    accountId?: StringFilter<"Email"> | string
    threadId?: StringNullableFilter<"Email"> | string | null
    subject?: StringNullableFilter<"Email"> | string | null
    fromName?: StringNullableFilter<"Email"> | string | null
    fromEmail?: StringFilter<"Email"> | string
    toEmails?: StringNullableListFilter<"Email">
    ccEmails?: StringNullableListFilter<"Email">
    bccEmails?: StringNullableListFilter<"Email">
    replyToEmails?: StringNullableListFilter<"Email">
    textBody?: StringNullableFilter<"Email"> | string | null
    htmlBody?: StringNullableFilter<"Email"> | string | null
    snippet?: StringNullableFilter<"Email"> | string | null
    hasAttachments?: BoolFilter<"Email"> | boolean
    attachmentCount?: IntFilter<"Email"> | number
    labels?: StringNullableListFilter<"Email">
    isRead?: BoolFilter<"Email"> | boolean
    isStarred?: BoolFilter<"Email"> | boolean
    isImportant?: BoolFilter<"Email"> | boolean
    direction?: StringFilter<"Email"> | string
    sentAt?: DateTimeFilter<"Email"> | Date | string
    receivedAt?: DateTimeFilter<"Email"> | Date | string
    rawHeaders?: JsonNullableFilter<"Email">
    inReplyTo?: StringNullableFilter<"Email"> | string | null
    references?: StringNullableListFilter<"Email">
    relatedDealId?: StringNullableFilter<"Email"> | string | null
    relatedContactId?: StringNullableFilter<"Email"> | string | null
    createdAt?: DateTimeFilter<"Email"> | Date | string
    updatedAt?: DateTimeFilter<"Email"> | Date | string
    account?: XOR<EmailAccountScalarRelationFilter, EmailAccountWhereInput>
    thread?: XOR<EmailThreadNullableScalarRelationFilter, EmailThreadWhereInput> | null
  }, "id" | "messageId">

  export type EmailOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    accountId?: SortOrder
    threadId?: SortOrderInput | SortOrder
    messageId?: SortOrder
    subject?: SortOrderInput | SortOrder
    fromName?: SortOrderInput | SortOrder
    fromEmail?: SortOrder
    toEmails?: SortOrder
    ccEmails?: SortOrder
    bccEmails?: SortOrder
    replyToEmails?: SortOrder
    textBody?: SortOrderInput | SortOrder
    htmlBody?: SortOrderInput | SortOrder
    snippet?: SortOrderInput | SortOrder
    hasAttachments?: SortOrder
    attachmentCount?: SortOrder
    labels?: SortOrder
    isRead?: SortOrder
    isStarred?: SortOrder
    isImportant?: SortOrder
    direction?: SortOrder
    sentAt?: SortOrder
    receivedAt?: SortOrder
    rawHeaders?: SortOrderInput | SortOrder
    inReplyTo?: SortOrderInput | SortOrder
    references?: SortOrder
    relatedDealId?: SortOrderInput | SortOrder
    relatedContactId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmailCountOrderByAggregateInput
    _avg?: EmailAvgOrderByAggregateInput
    _max?: EmailMaxOrderByAggregateInput
    _min?: EmailMinOrderByAggregateInput
    _sum?: EmailSumOrderByAggregateInput
  }

  export type EmailScalarWhereWithAggregatesInput = {
    AND?: EmailScalarWhereWithAggregatesInput | EmailScalarWhereWithAggregatesInput[]
    OR?: EmailScalarWhereWithAggregatesInput[]
    NOT?: EmailScalarWhereWithAggregatesInput | EmailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Email"> | string
    orgId?: StringWithAggregatesFilter<"Email"> | string
    accountId?: StringWithAggregatesFilter<"Email"> | string
    threadId?: StringNullableWithAggregatesFilter<"Email"> | string | null
    messageId?: StringWithAggregatesFilter<"Email"> | string
    subject?: StringNullableWithAggregatesFilter<"Email"> | string | null
    fromName?: StringNullableWithAggregatesFilter<"Email"> | string | null
    fromEmail?: StringWithAggregatesFilter<"Email"> | string
    toEmails?: StringNullableListFilter<"Email">
    ccEmails?: StringNullableListFilter<"Email">
    bccEmails?: StringNullableListFilter<"Email">
    replyToEmails?: StringNullableListFilter<"Email">
    textBody?: StringNullableWithAggregatesFilter<"Email"> | string | null
    htmlBody?: StringNullableWithAggregatesFilter<"Email"> | string | null
    snippet?: StringNullableWithAggregatesFilter<"Email"> | string | null
    hasAttachments?: BoolWithAggregatesFilter<"Email"> | boolean
    attachmentCount?: IntWithAggregatesFilter<"Email"> | number
    labels?: StringNullableListFilter<"Email">
    isRead?: BoolWithAggregatesFilter<"Email"> | boolean
    isStarred?: BoolWithAggregatesFilter<"Email"> | boolean
    isImportant?: BoolWithAggregatesFilter<"Email"> | boolean
    direction?: StringWithAggregatesFilter<"Email"> | string
    sentAt?: DateTimeWithAggregatesFilter<"Email"> | Date | string
    receivedAt?: DateTimeWithAggregatesFilter<"Email"> | Date | string
    rawHeaders?: JsonNullableWithAggregatesFilter<"Email">
    inReplyTo?: StringNullableWithAggregatesFilter<"Email"> | string | null
    references?: StringNullableListFilter<"Email">
    relatedDealId?: StringNullableWithAggregatesFilter<"Email"> | string | null
    relatedContactId?: StringNullableWithAggregatesFilter<"Email"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Email"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Email"> | Date | string
  }

  export type EmailThreadWhereInput = {
    AND?: EmailThreadWhereInput | EmailThreadWhereInput[]
    OR?: EmailThreadWhereInput[]
    NOT?: EmailThreadWhereInput | EmailThreadWhereInput[]
    id?: StringFilter<"EmailThread"> | string
    orgId?: StringFilter<"EmailThread"> | string
    accountId?: StringFilter<"EmailThread"> | string
    subject?: StringNullableFilter<"EmailThread"> | string | null
    firstMessageId?: StringFilter<"EmailThread"> | string
    lastMessageId?: StringNullableFilter<"EmailThread"> | string | null
    messageCount?: IntFilter<"EmailThread"> | number
    participants?: StringNullableListFilter<"EmailThread">
    lastMessageAt?: DateTimeFilter<"EmailThread"> | Date | string
    relatedDealId?: StringNullableFilter<"EmailThread"> | string | null
    createdAt?: DateTimeFilter<"EmailThread"> | Date | string
    updatedAt?: DateTimeFilter<"EmailThread"> | Date | string
    emails?: EmailListRelationFilter
    account?: XOR<EmailAccountScalarRelationFilter, EmailAccountWhereInput>
  }

  export type EmailThreadOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    accountId?: SortOrder
    subject?: SortOrderInput | SortOrder
    firstMessageId?: SortOrder
    lastMessageId?: SortOrderInput | SortOrder
    messageCount?: SortOrder
    participants?: SortOrder
    lastMessageAt?: SortOrder
    relatedDealId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emails?: EmailOrderByRelationAggregateInput
    account?: EmailAccountOrderByWithRelationInput
  }

  export type EmailThreadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    firstMessageId?: string
    AND?: EmailThreadWhereInput | EmailThreadWhereInput[]
    OR?: EmailThreadWhereInput[]
    NOT?: EmailThreadWhereInput | EmailThreadWhereInput[]
    orgId?: StringFilter<"EmailThread"> | string
    accountId?: StringFilter<"EmailThread"> | string
    subject?: StringNullableFilter<"EmailThread"> | string | null
    lastMessageId?: StringNullableFilter<"EmailThread"> | string | null
    messageCount?: IntFilter<"EmailThread"> | number
    participants?: StringNullableListFilter<"EmailThread">
    lastMessageAt?: DateTimeFilter<"EmailThread"> | Date | string
    relatedDealId?: StringNullableFilter<"EmailThread"> | string | null
    createdAt?: DateTimeFilter<"EmailThread"> | Date | string
    updatedAt?: DateTimeFilter<"EmailThread"> | Date | string
    emails?: EmailListRelationFilter
    account?: XOR<EmailAccountScalarRelationFilter, EmailAccountWhereInput>
  }, "id" | "firstMessageId">

  export type EmailThreadOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    accountId?: SortOrder
    subject?: SortOrderInput | SortOrder
    firstMessageId?: SortOrder
    lastMessageId?: SortOrderInput | SortOrder
    messageCount?: SortOrder
    participants?: SortOrder
    lastMessageAt?: SortOrder
    relatedDealId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmailThreadCountOrderByAggregateInput
    _avg?: EmailThreadAvgOrderByAggregateInput
    _max?: EmailThreadMaxOrderByAggregateInput
    _min?: EmailThreadMinOrderByAggregateInput
    _sum?: EmailThreadSumOrderByAggregateInput
  }

  export type EmailThreadScalarWhereWithAggregatesInput = {
    AND?: EmailThreadScalarWhereWithAggregatesInput | EmailThreadScalarWhereWithAggregatesInput[]
    OR?: EmailThreadScalarWhereWithAggregatesInput[]
    NOT?: EmailThreadScalarWhereWithAggregatesInput | EmailThreadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailThread"> | string
    orgId?: StringWithAggregatesFilter<"EmailThread"> | string
    accountId?: StringWithAggregatesFilter<"EmailThread"> | string
    subject?: StringNullableWithAggregatesFilter<"EmailThread"> | string | null
    firstMessageId?: StringWithAggregatesFilter<"EmailThread"> | string
    lastMessageId?: StringNullableWithAggregatesFilter<"EmailThread"> | string | null
    messageCount?: IntWithAggregatesFilter<"EmailThread"> | number
    participants?: StringNullableListFilter<"EmailThread">
    lastMessageAt?: DateTimeWithAggregatesFilter<"EmailThread"> | Date | string
    relatedDealId?: StringNullableWithAggregatesFilter<"EmailThread"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EmailThread"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmailThread"> | Date | string
  }

  export type SyncLogWhereInput = {
    AND?: SyncLogWhereInput | SyncLogWhereInput[]
    OR?: SyncLogWhereInput[]
    NOT?: SyncLogWhereInput | SyncLogWhereInput[]
    id?: StringFilter<"SyncLog"> | string
    orgId?: StringFilter<"SyncLog"> | string
    accountId?: StringFilter<"SyncLog"> | string
    status?: StringFilter<"SyncLog"> | string
    emailsSynced?: IntFilter<"SyncLog"> | number
    threadsSynced?: IntFilter<"SyncLog"> | number
    errors?: StringNullableListFilter<"SyncLog">
    startedAt?: DateTimeFilter<"SyncLog"> | Date | string
    completedAt?: DateTimeNullableFilter<"SyncLog"> | Date | string | null
    duration?: IntNullableFilter<"SyncLog"> | number | null
    account?: XOR<EmailAccountScalarRelationFilter, EmailAccountWhereInput>
  }

  export type SyncLogOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    accountId?: SortOrder
    status?: SortOrder
    emailsSynced?: SortOrder
    threadsSynced?: SortOrder
    errors?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    account?: EmailAccountOrderByWithRelationInput
  }

  export type SyncLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SyncLogWhereInput | SyncLogWhereInput[]
    OR?: SyncLogWhereInput[]
    NOT?: SyncLogWhereInput | SyncLogWhereInput[]
    orgId?: StringFilter<"SyncLog"> | string
    accountId?: StringFilter<"SyncLog"> | string
    status?: StringFilter<"SyncLog"> | string
    emailsSynced?: IntFilter<"SyncLog"> | number
    threadsSynced?: IntFilter<"SyncLog"> | number
    errors?: StringNullableListFilter<"SyncLog">
    startedAt?: DateTimeFilter<"SyncLog"> | Date | string
    completedAt?: DateTimeNullableFilter<"SyncLog"> | Date | string | null
    duration?: IntNullableFilter<"SyncLog"> | number | null
    account?: XOR<EmailAccountScalarRelationFilter, EmailAccountWhereInput>
  }, "id">

  export type SyncLogOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    accountId?: SortOrder
    status?: SortOrder
    emailsSynced?: SortOrder
    threadsSynced?: SortOrder
    errors?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    _count?: SyncLogCountOrderByAggregateInput
    _avg?: SyncLogAvgOrderByAggregateInput
    _max?: SyncLogMaxOrderByAggregateInput
    _min?: SyncLogMinOrderByAggregateInput
    _sum?: SyncLogSumOrderByAggregateInput
  }

  export type SyncLogScalarWhereWithAggregatesInput = {
    AND?: SyncLogScalarWhereWithAggregatesInput | SyncLogScalarWhereWithAggregatesInput[]
    OR?: SyncLogScalarWhereWithAggregatesInput[]
    NOT?: SyncLogScalarWhereWithAggregatesInput | SyncLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SyncLog"> | string
    orgId?: StringWithAggregatesFilter<"SyncLog"> | string
    accountId?: StringWithAggregatesFilter<"SyncLog"> | string
    status?: StringWithAggregatesFilter<"SyncLog"> | string
    emailsSynced?: IntWithAggregatesFilter<"SyncLog"> | number
    threadsSynced?: IntWithAggregatesFilter<"SyncLog"> | number
    errors?: StringNullableListFilter<"SyncLog">
    startedAt?: DateTimeWithAggregatesFilter<"SyncLog"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"SyncLog"> | Date | string | null
    duration?: IntNullableWithAggregatesFilter<"SyncLog"> | number | null
  }

  export type EmailTemplateWhereInput = {
    AND?: EmailTemplateWhereInput | EmailTemplateWhereInput[]
    OR?: EmailTemplateWhereInput[]
    NOT?: EmailTemplateWhereInput | EmailTemplateWhereInput[]
    id?: StringFilter<"EmailTemplate"> | string
    orgId?: StringFilter<"EmailTemplate"> | string
    name?: StringFilter<"EmailTemplate"> | string
    subject?: StringFilter<"EmailTemplate"> | string
    body?: StringFilter<"EmailTemplate"> | string
    category?: StringNullableFilter<"EmailTemplate"> | string | null
    variables?: StringNullableListFilter<"EmailTemplate">
    isPublic?: BoolFilter<"EmailTemplate"> | boolean
    usageCount?: IntFilter<"EmailTemplate"> | number
    createdBy?: StringFilter<"EmailTemplate"> | string
    createdAt?: DateTimeFilter<"EmailTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"EmailTemplate"> | Date | string
  }

  export type EmailTemplateOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    category?: SortOrderInput | SortOrder
    variables?: SortOrder
    isPublic?: SortOrder
    usageCount?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmailTemplateWhereInput | EmailTemplateWhereInput[]
    OR?: EmailTemplateWhereInput[]
    NOT?: EmailTemplateWhereInput | EmailTemplateWhereInput[]
    orgId?: StringFilter<"EmailTemplate"> | string
    name?: StringFilter<"EmailTemplate"> | string
    subject?: StringFilter<"EmailTemplate"> | string
    body?: StringFilter<"EmailTemplate"> | string
    category?: StringNullableFilter<"EmailTemplate"> | string | null
    variables?: StringNullableListFilter<"EmailTemplate">
    isPublic?: BoolFilter<"EmailTemplate"> | boolean
    usageCount?: IntFilter<"EmailTemplate"> | number
    createdBy?: StringFilter<"EmailTemplate"> | string
    createdAt?: DateTimeFilter<"EmailTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"EmailTemplate"> | Date | string
  }, "id">

  export type EmailTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    category?: SortOrderInput | SortOrder
    variables?: SortOrder
    isPublic?: SortOrder
    usageCount?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmailTemplateCountOrderByAggregateInput
    _avg?: EmailTemplateAvgOrderByAggregateInput
    _max?: EmailTemplateMaxOrderByAggregateInput
    _min?: EmailTemplateMinOrderByAggregateInput
    _sum?: EmailTemplateSumOrderByAggregateInput
  }

  export type EmailTemplateScalarWhereWithAggregatesInput = {
    AND?: EmailTemplateScalarWhereWithAggregatesInput | EmailTemplateScalarWhereWithAggregatesInput[]
    OR?: EmailTemplateScalarWhereWithAggregatesInput[]
    NOT?: EmailTemplateScalarWhereWithAggregatesInput | EmailTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailTemplate"> | string
    orgId?: StringWithAggregatesFilter<"EmailTemplate"> | string
    name?: StringWithAggregatesFilter<"EmailTemplate"> | string
    subject?: StringWithAggregatesFilter<"EmailTemplate"> | string
    body?: StringWithAggregatesFilter<"EmailTemplate"> | string
    category?: StringNullableWithAggregatesFilter<"EmailTemplate"> | string | null
    variables?: StringNullableListFilter<"EmailTemplate">
    isPublic?: BoolWithAggregatesFilter<"EmailTemplate"> | boolean
    usageCount?: IntWithAggregatesFilter<"EmailTemplate"> | number
    createdBy?: StringWithAggregatesFilter<"EmailTemplate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EmailTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmailTemplate"> | Date | string
  }

  export type EmailSequenceWhereInput = {
    AND?: EmailSequenceWhereInput | EmailSequenceWhereInput[]
    OR?: EmailSequenceWhereInput[]
    NOT?: EmailSequenceWhereInput | EmailSequenceWhereInput[]
    id?: StringFilter<"EmailSequence"> | string
    orgId?: StringFilter<"EmailSequence"> | string
    name?: StringFilter<"EmailSequence"> | string
    description?: StringNullableFilter<"EmailSequence"> | string | null
    isActive?: BoolFilter<"EmailSequence"> | boolean
    steps?: JsonFilter<"EmailSequence">
    totalDuration?: IntFilter<"EmailSequence"> | number
    enrollmentCount?: IntFilter<"EmailSequence"> | number
    completionRate?: FloatFilter<"EmailSequence"> | number
    createdBy?: StringFilter<"EmailSequence"> | string
    createdAt?: DateTimeFilter<"EmailSequence"> | Date | string
    updatedAt?: DateTimeFilter<"EmailSequence"> | Date | string
    enrollments?: SequenceEnrollmentListRelationFilter
  }

  export type EmailSequenceOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    steps?: SortOrder
    totalDuration?: SortOrder
    enrollmentCount?: SortOrder
    completionRate?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    enrollments?: SequenceEnrollmentOrderByRelationAggregateInput
  }

  export type EmailSequenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmailSequenceWhereInput | EmailSequenceWhereInput[]
    OR?: EmailSequenceWhereInput[]
    NOT?: EmailSequenceWhereInput | EmailSequenceWhereInput[]
    orgId?: StringFilter<"EmailSequence"> | string
    name?: StringFilter<"EmailSequence"> | string
    description?: StringNullableFilter<"EmailSequence"> | string | null
    isActive?: BoolFilter<"EmailSequence"> | boolean
    steps?: JsonFilter<"EmailSequence">
    totalDuration?: IntFilter<"EmailSequence"> | number
    enrollmentCount?: IntFilter<"EmailSequence"> | number
    completionRate?: FloatFilter<"EmailSequence"> | number
    createdBy?: StringFilter<"EmailSequence"> | string
    createdAt?: DateTimeFilter<"EmailSequence"> | Date | string
    updatedAt?: DateTimeFilter<"EmailSequence"> | Date | string
    enrollments?: SequenceEnrollmentListRelationFilter
  }, "id">

  export type EmailSequenceOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    steps?: SortOrder
    totalDuration?: SortOrder
    enrollmentCount?: SortOrder
    completionRate?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmailSequenceCountOrderByAggregateInput
    _avg?: EmailSequenceAvgOrderByAggregateInput
    _max?: EmailSequenceMaxOrderByAggregateInput
    _min?: EmailSequenceMinOrderByAggregateInput
    _sum?: EmailSequenceSumOrderByAggregateInput
  }

  export type EmailSequenceScalarWhereWithAggregatesInput = {
    AND?: EmailSequenceScalarWhereWithAggregatesInput | EmailSequenceScalarWhereWithAggregatesInput[]
    OR?: EmailSequenceScalarWhereWithAggregatesInput[]
    NOT?: EmailSequenceScalarWhereWithAggregatesInput | EmailSequenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailSequence"> | string
    orgId?: StringWithAggregatesFilter<"EmailSequence"> | string
    name?: StringWithAggregatesFilter<"EmailSequence"> | string
    description?: StringNullableWithAggregatesFilter<"EmailSequence"> | string | null
    isActive?: BoolWithAggregatesFilter<"EmailSequence"> | boolean
    steps?: JsonWithAggregatesFilter<"EmailSequence">
    totalDuration?: IntWithAggregatesFilter<"EmailSequence"> | number
    enrollmentCount?: IntWithAggregatesFilter<"EmailSequence"> | number
    completionRate?: FloatWithAggregatesFilter<"EmailSequence"> | number
    createdBy?: StringWithAggregatesFilter<"EmailSequence"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EmailSequence"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmailSequence"> | Date | string
  }

  export type SequenceEnrollmentWhereInput = {
    AND?: SequenceEnrollmentWhereInput | SequenceEnrollmentWhereInput[]
    OR?: SequenceEnrollmentWhereInput[]
    NOT?: SequenceEnrollmentWhereInput | SequenceEnrollmentWhereInput[]
    id?: StringFilter<"SequenceEnrollment"> | string
    orgId?: StringFilter<"SequenceEnrollment"> | string
    sequenceId?: StringFilter<"SequenceEnrollment"> | string
    contactEmail?: StringFilter<"SequenceEnrollment"> | string
    contactId?: StringNullableFilter<"SequenceEnrollment"> | string | null
    dealId?: StringNullableFilter<"SequenceEnrollment"> | string | null
    status?: StringFilter<"SequenceEnrollment"> | string
    currentStep?: IntFilter<"SequenceEnrollment"> | number
    startedAt?: DateTimeFilter<"SequenceEnrollment"> | Date | string
    completedAt?: DateTimeNullableFilter<"SequenceEnrollment"> | Date | string | null
    unsubscribedAt?: DateTimeNullableFilter<"SequenceEnrollment"> | Date | string | null
    sequence?: XOR<EmailSequenceScalarRelationFilter, EmailSequenceWhereInput>
    activities?: SequenceActivityListRelationFilter
  }

  export type SequenceEnrollmentOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    sequenceId?: SortOrder
    contactEmail?: SortOrder
    contactId?: SortOrderInput | SortOrder
    dealId?: SortOrderInput | SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    unsubscribedAt?: SortOrderInput | SortOrder
    sequence?: EmailSequenceOrderByWithRelationInput
    activities?: SequenceActivityOrderByRelationAggregateInput
  }

  export type SequenceEnrollmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SequenceEnrollmentWhereInput | SequenceEnrollmentWhereInput[]
    OR?: SequenceEnrollmentWhereInput[]
    NOT?: SequenceEnrollmentWhereInput | SequenceEnrollmentWhereInput[]
    orgId?: StringFilter<"SequenceEnrollment"> | string
    sequenceId?: StringFilter<"SequenceEnrollment"> | string
    contactEmail?: StringFilter<"SequenceEnrollment"> | string
    contactId?: StringNullableFilter<"SequenceEnrollment"> | string | null
    dealId?: StringNullableFilter<"SequenceEnrollment"> | string | null
    status?: StringFilter<"SequenceEnrollment"> | string
    currentStep?: IntFilter<"SequenceEnrollment"> | number
    startedAt?: DateTimeFilter<"SequenceEnrollment"> | Date | string
    completedAt?: DateTimeNullableFilter<"SequenceEnrollment"> | Date | string | null
    unsubscribedAt?: DateTimeNullableFilter<"SequenceEnrollment"> | Date | string | null
    sequence?: XOR<EmailSequenceScalarRelationFilter, EmailSequenceWhereInput>
    activities?: SequenceActivityListRelationFilter
  }, "id">

  export type SequenceEnrollmentOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    sequenceId?: SortOrder
    contactEmail?: SortOrder
    contactId?: SortOrderInput | SortOrder
    dealId?: SortOrderInput | SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    unsubscribedAt?: SortOrderInput | SortOrder
    _count?: SequenceEnrollmentCountOrderByAggregateInput
    _avg?: SequenceEnrollmentAvgOrderByAggregateInput
    _max?: SequenceEnrollmentMaxOrderByAggregateInput
    _min?: SequenceEnrollmentMinOrderByAggregateInput
    _sum?: SequenceEnrollmentSumOrderByAggregateInput
  }

  export type SequenceEnrollmentScalarWhereWithAggregatesInput = {
    AND?: SequenceEnrollmentScalarWhereWithAggregatesInput | SequenceEnrollmentScalarWhereWithAggregatesInput[]
    OR?: SequenceEnrollmentScalarWhereWithAggregatesInput[]
    NOT?: SequenceEnrollmentScalarWhereWithAggregatesInput | SequenceEnrollmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SequenceEnrollment"> | string
    orgId?: StringWithAggregatesFilter<"SequenceEnrollment"> | string
    sequenceId?: StringWithAggregatesFilter<"SequenceEnrollment"> | string
    contactEmail?: StringWithAggregatesFilter<"SequenceEnrollment"> | string
    contactId?: StringNullableWithAggregatesFilter<"SequenceEnrollment"> | string | null
    dealId?: StringNullableWithAggregatesFilter<"SequenceEnrollment"> | string | null
    status?: StringWithAggregatesFilter<"SequenceEnrollment"> | string
    currentStep?: IntWithAggregatesFilter<"SequenceEnrollment"> | number
    startedAt?: DateTimeWithAggregatesFilter<"SequenceEnrollment"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"SequenceEnrollment"> | Date | string | null
    unsubscribedAt?: DateTimeNullableWithAggregatesFilter<"SequenceEnrollment"> | Date | string | null
  }

  export type SequenceActivityWhereInput = {
    AND?: SequenceActivityWhereInput | SequenceActivityWhereInput[]
    OR?: SequenceActivityWhereInput[]
    NOT?: SequenceActivityWhereInput | SequenceActivityWhereInput[]
    id?: StringFilter<"SequenceActivity"> | string
    orgId?: StringFilter<"SequenceActivity"> | string
    enrollmentId?: StringFilter<"SequenceActivity"> | string
    stepNumber?: IntFilter<"SequenceActivity"> | number
    type?: StringFilter<"SequenceActivity"> | string
    status?: StringFilter<"SequenceActivity"> | string
    scheduledAt?: DateTimeFilter<"SequenceActivity"> | Date | string
    sentAt?: DateTimeNullableFilter<"SequenceActivity"> | Date | string | null
    openedAt?: DateTimeNullableFilter<"SequenceActivity"> | Date | string | null
    clickedAt?: DateTimeNullableFilter<"SequenceActivity"> | Date | string | null
    errorMessage?: StringNullableFilter<"SequenceActivity"> | string | null
    enrollment?: XOR<SequenceEnrollmentScalarRelationFilter, SequenceEnrollmentWhereInput>
  }

  export type SequenceActivityOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    enrollmentId?: SortOrder
    stepNumber?: SortOrder
    type?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    openedAt?: SortOrderInput | SortOrder
    clickedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    enrollment?: SequenceEnrollmentOrderByWithRelationInput
  }

  export type SequenceActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SequenceActivityWhereInput | SequenceActivityWhereInput[]
    OR?: SequenceActivityWhereInput[]
    NOT?: SequenceActivityWhereInput | SequenceActivityWhereInput[]
    orgId?: StringFilter<"SequenceActivity"> | string
    enrollmentId?: StringFilter<"SequenceActivity"> | string
    stepNumber?: IntFilter<"SequenceActivity"> | number
    type?: StringFilter<"SequenceActivity"> | string
    status?: StringFilter<"SequenceActivity"> | string
    scheduledAt?: DateTimeFilter<"SequenceActivity"> | Date | string
    sentAt?: DateTimeNullableFilter<"SequenceActivity"> | Date | string | null
    openedAt?: DateTimeNullableFilter<"SequenceActivity"> | Date | string | null
    clickedAt?: DateTimeNullableFilter<"SequenceActivity"> | Date | string | null
    errorMessage?: StringNullableFilter<"SequenceActivity"> | string | null
    enrollment?: XOR<SequenceEnrollmentScalarRelationFilter, SequenceEnrollmentWhereInput>
  }, "id">

  export type SequenceActivityOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    enrollmentId?: SortOrder
    stepNumber?: SortOrder
    type?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    openedAt?: SortOrderInput | SortOrder
    clickedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    _count?: SequenceActivityCountOrderByAggregateInput
    _avg?: SequenceActivityAvgOrderByAggregateInput
    _max?: SequenceActivityMaxOrderByAggregateInput
    _min?: SequenceActivityMinOrderByAggregateInput
    _sum?: SequenceActivitySumOrderByAggregateInput
  }

  export type SequenceActivityScalarWhereWithAggregatesInput = {
    AND?: SequenceActivityScalarWhereWithAggregatesInput | SequenceActivityScalarWhereWithAggregatesInput[]
    OR?: SequenceActivityScalarWhereWithAggregatesInput[]
    NOT?: SequenceActivityScalarWhereWithAggregatesInput | SequenceActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SequenceActivity"> | string
    orgId?: StringWithAggregatesFilter<"SequenceActivity"> | string
    enrollmentId?: StringWithAggregatesFilter<"SequenceActivity"> | string
    stepNumber?: IntWithAggregatesFilter<"SequenceActivity"> | number
    type?: StringWithAggregatesFilter<"SequenceActivity"> | string
    status?: StringWithAggregatesFilter<"SequenceActivity"> | string
    scheduledAt?: DateTimeWithAggregatesFilter<"SequenceActivity"> | Date | string
    sentAt?: DateTimeNullableWithAggregatesFilter<"SequenceActivity"> | Date | string | null
    openedAt?: DateTimeNullableWithAggregatesFilter<"SequenceActivity"> | Date | string | null
    clickedAt?: DateTimeNullableWithAggregatesFilter<"SequenceActivity"> | Date | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"SequenceActivity"> | string | null
  }

  export type EmailAccountCreateInput = {
    id?: string
    orgId: string
    userId: string
    email: string
    provider: string
    isConnected?: boolean
    lastSyncAt?: Date | string | null
    syncStatus?: string
    errorMessage?: string | null
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    emails?: EmailCreateNestedManyWithoutAccountInput
    threads?: EmailThreadCreateNestedManyWithoutAccountInput
    syncLogs?: SyncLogCreateNestedManyWithoutAccountInput
  }

  export type EmailAccountUncheckedCreateInput = {
    id?: string
    orgId: string
    userId: string
    email: string
    provider: string
    isConnected?: boolean
    lastSyncAt?: Date | string | null
    syncStatus?: string
    errorMessage?: string | null
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    emails?: EmailUncheckedCreateNestedManyWithoutAccountInput
    threads?: EmailThreadUncheckedCreateNestedManyWithoutAccountInput
    syncLogs?: SyncLogUncheckedCreateNestedManyWithoutAccountInput
  }

  export type EmailAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncStatus?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailUpdateManyWithoutAccountNestedInput
    threads?: EmailThreadUpdateManyWithoutAccountNestedInput
    syncLogs?: SyncLogUpdateManyWithoutAccountNestedInput
  }

  export type EmailAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncStatus?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailUncheckedUpdateManyWithoutAccountNestedInput
    threads?: EmailThreadUncheckedUpdateManyWithoutAccountNestedInput
    syncLogs?: SyncLogUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type EmailAccountCreateManyInput = {
    id?: string
    orgId: string
    userId: string
    email: string
    provider: string
    isConnected?: boolean
    lastSyncAt?: Date | string | null
    syncStatus?: string
    errorMessage?: string | null
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncStatus?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncStatus?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailCreateInput = {
    id?: string
    orgId: string
    messageId: string
    subject?: string | null
    fromName?: string | null
    fromEmail: string
    toEmails?: EmailCreatetoEmailsInput | string[]
    ccEmails?: EmailCreateccEmailsInput | string[]
    bccEmails?: EmailCreatebccEmailsInput | string[]
    replyToEmails?: EmailCreatereplyToEmailsInput | string[]
    textBody?: string | null
    htmlBody?: string | null
    snippet?: string | null
    hasAttachments?: boolean
    attachmentCount?: number
    labels?: EmailCreatelabelsInput | string[]
    isRead?: boolean
    isStarred?: boolean
    isImportant?: boolean
    direction: string
    sentAt: Date | string
    receivedAt?: Date | string
    rawHeaders?: NullableJsonNullValueInput | InputJsonValue
    inReplyTo?: string | null
    references?: EmailCreatereferencesInput | string[]
    relatedDealId?: string | null
    relatedContactId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account: EmailAccountCreateNestedOneWithoutEmailsInput
    thread?: EmailThreadCreateNestedOneWithoutEmailsInput
  }

  export type EmailUncheckedCreateInput = {
    id?: string
    orgId: string
    accountId: string
    threadId?: string | null
    messageId: string
    subject?: string | null
    fromName?: string | null
    fromEmail: string
    toEmails?: EmailCreatetoEmailsInput | string[]
    ccEmails?: EmailCreateccEmailsInput | string[]
    bccEmails?: EmailCreatebccEmailsInput | string[]
    replyToEmails?: EmailCreatereplyToEmailsInput | string[]
    textBody?: string | null
    htmlBody?: string | null
    snippet?: string | null
    hasAttachments?: boolean
    attachmentCount?: number
    labels?: EmailCreatelabelsInput | string[]
    isRead?: boolean
    isStarred?: boolean
    isImportant?: boolean
    direction: string
    sentAt: Date | string
    receivedAt?: Date | string
    rawHeaders?: NullableJsonNullValueInput | InputJsonValue
    inReplyTo?: string | null
    references?: EmailCreatereferencesInput | string[]
    relatedDealId?: string | null
    relatedContactId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    fromName?: NullableStringFieldUpdateOperationsInput | string | null
    fromEmail?: StringFieldUpdateOperationsInput | string
    toEmails?: EmailUpdatetoEmailsInput | string[]
    ccEmails?: EmailUpdateccEmailsInput | string[]
    bccEmails?: EmailUpdatebccEmailsInput | string[]
    replyToEmails?: EmailUpdatereplyToEmailsInput | string[]
    textBody?: NullableStringFieldUpdateOperationsInput | string | null
    htmlBody?: NullableStringFieldUpdateOperationsInput | string | null
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    attachmentCount?: IntFieldUpdateOperationsInput | number
    labels?: EmailUpdatelabelsInput | string[]
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isStarred?: BoolFieldUpdateOperationsInput | boolean
    isImportant?: BoolFieldUpdateOperationsInput | boolean
    direction?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rawHeaders?: NullableJsonNullValueInput | InputJsonValue
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: EmailUpdatereferencesInput | string[]
    relatedDealId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedContactId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: EmailAccountUpdateOneRequiredWithoutEmailsNestedInput
    thread?: EmailThreadUpdateOneWithoutEmailsNestedInput
  }

  export type EmailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    threadId?: NullableStringFieldUpdateOperationsInput | string | null
    messageId?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    fromName?: NullableStringFieldUpdateOperationsInput | string | null
    fromEmail?: StringFieldUpdateOperationsInput | string
    toEmails?: EmailUpdatetoEmailsInput | string[]
    ccEmails?: EmailUpdateccEmailsInput | string[]
    bccEmails?: EmailUpdatebccEmailsInput | string[]
    replyToEmails?: EmailUpdatereplyToEmailsInput | string[]
    textBody?: NullableStringFieldUpdateOperationsInput | string | null
    htmlBody?: NullableStringFieldUpdateOperationsInput | string | null
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    attachmentCount?: IntFieldUpdateOperationsInput | number
    labels?: EmailUpdatelabelsInput | string[]
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isStarred?: BoolFieldUpdateOperationsInput | boolean
    isImportant?: BoolFieldUpdateOperationsInput | boolean
    direction?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rawHeaders?: NullableJsonNullValueInput | InputJsonValue
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: EmailUpdatereferencesInput | string[]
    relatedDealId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedContactId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailCreateManyInput = {
    id?: string
    orgId: string
    accountId: string
    threadId?: string | null
    messageId: string
    subject?: string | null
    fromName?: string | null
    fromEmail: string
    toEmails?: EmailCreatetoEmailsInput | string[]
    ccEmails?: EmailCreateccEmailsInput | string[]
    bccEmails?: EmailCreatebccEmailsInput | string[]
    replyToEmails?: EmailCreatereplyToEmailsInput | string[]
    textBody?: string | null
    htmlBody?: string | null
    snippet?: string | null
    hasAttachments?: boolean
    attachmentCount?: number
    labels?: EmailCreatelabelsInput | string[]
    isRead?: boolean
    isStarred?: boolean
    isImportant?: boolean
    direction: string
    sentAt: Date | string
    receivedAt?: Date | string
    rawHeaders?: NullableJsonNullValueInput | InputJsonValue
    inReplyTo?: string | null
    references?: EmailCreatereferencesInput | string[]
    relatedDealId?: string | null
    relatedContactId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    fromName?: NullableStringFieldUpdateOperationsInput | string | null
    fromEmail?: StringFieldUpdateOperationsInput | string
    toEmails?: EmailUpdatetoEmailsInput | string[]
    ccEmails?: EmailUpdateccEmailsInput | string[]
    bccEmails?: EmailUpdatebccEmailsInput | string[]
    replyToEmails?: EmailUpdatereplyToEmailsInput | string[]
    textBody?: NullableStringFieldUpdateOperationsInput | string | null
    htmlBody?: NullableStringFieldUpdateOperationsInput | string | null
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    attachmentCount?: IntFieldUpdateOperationsInput | number
    labels?: EmailUpdatelabelsInput | string[]
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isStarred?: BoolFieldUpdateOperationsInput | boolean
    isImportant?: BoolFieldUpdateOperationsInput | boolean
    direction?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rawHeaders?: NullableJsonNullValueInput | InputJsonValue
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: EmailUpdatereferencesInput | string[]
    relatedDealId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedContactId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    threadId?: NullableStringFieldUpdateOperationsInput | string | null
    messageId?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    fromName?: NullableStringFieldUpdateOperationsInput | string | null
    fromEmail?: StringFieldUpdateOperationsInput | string
    toEmails?: EmailUpdatetoEmailsInput | string[]
    ccEmails?: EmailUpdateccEmailsInput | string[]
    bccEmails?: EmailUpdatebccEmailsInput | string[]
    replyToEmails?: EmailUpdatereplyToEmailsInput | string[]
    textBody?: NullableStringFieldUpdateOperationsInput | string | null
    htmlBody?: NullableStringFieldUpdateOperationsInput | string | null
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    attachmentCount?: IntFieldUpdateOperationsInput | number
    labels?: EmailUpdatelabelsInput | string[]
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isStarred?: BoolFieldUpdateOperationsInput | boolean
    isImportant?: BoolFieldUpdateOperationsInput | boolean
    direction?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rawHeaders?: NullableJsonNullValueInput | InputJsonValue
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: EmailUpdatereferencesInput | string[]
    relatedDealId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedContactId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailThreadCreateInput = {
    id?: string
    orgId: string
    subject?: string | null
    firstMessageId: string
    lastMessageId?: string | null
    messageCount?: number
    participants?: EmailThreadCreateparticipantsInput | string[]
    lastMessageAt: Date | string
    relatedDealId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emails?: EmailCreateNestedManyWithoutThreadInput
    account: EmailAccountCreateNestedOneWithoutThreadsInput
  }

  export type EmailThreadUncheckedCreateInput = {
    id?: string
    orgId: string
    accountId: string
    subject?: string | null
    firstMessageId: string
    lastMessageId?: string | null
    messageCount?: number
    participants?: EmailThreadCreateparticipantsInput | string[]
    lastMessageAt: Date | string
    relatedDealId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emails?: EmailUncheckedCreateNestedManyWithoutThreadInput
  }

  export type EmailThreadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    firstMessageId?: StringFieldUpdateOperationsInput | string
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    messageCount?: IntFieldUpdateOperationsInput | number
    participants?: EmailThreadUpdateparticipantsInput | string[]
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedDealId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailUpdateManyWithoutThreadNestedInput
    account?: EmailAccountUpdateOneRequiredWithoutThreadsNestedInput
  }

  export type EmailThreadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    firstMessageId?: StringFieldUpdateOperationsInput | string
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    messageCount?: IntFieldUpdateOperationsInput | number
    participants?: EmailThreadUpdateparticipantsInput | string[]
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedDealId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailUncheckedUpdateManyWithoutThreadNestedInput
  }

  export type EmailThreadCreateManyInput = {
    id?: string
    orgId: string
    accountId: string
    subject?: string | null
    firstMessageId: string
    lastMessageId?: string | null
    messageCount?: number
    participants?: EmailThreadCreateparticipantsInput | string[]
    lastMessageAt: Date | string
    relatedDealId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailThreadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    firstMessageId?: StringFieldUpdateOperationsInput | string
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    messageCount?: IntFieldUpdateOperationsInput | number
    participants?: EmailThreadUpdateparticipantsInput | string[]
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedDealId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailThreadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    firstMessageId?: StringFieldUpdateOperationsInput | string
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    messageCount?: IntFieldUpdateOperationsInput | number
    participants?: EmailThreadUpdateparticipantsInput | string[]
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedDealId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncLogCreateInput = {
    id?: string
    orgId: string
    status: string
    emailsSynced?: number
    threadsSynced?: number
    errors?: SyncLogCreateerrorsInput | string[]
    startedAt?: Date | string
    completedAt?: Date | string | null
    duration?: number | null
    account: EmailAccountCreateNestedOneWithoutSyncLogsInput
  }

  export type SyncLogUncheckedCreateInput = {
    id?: string
    orgId: string
    accountId: string
    status: string
    emailsSynced?: number
    threadsSynced?: number
    errors?: SyncLogCreateerrorsInput | string[]
    startedAt?: Date | string
    completedAt?: Date | string | null
    duration?: number | null
  }

  export type SyncLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    emailsSynced?: IntFieldUpdateOperationsInput | number
    threadsSynced?: IntFieldUpdateOperationsInput | number
    errors?: SyncLogUpdateerrorsInput | string[]
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    account?: EmailAccountUpdateOneRequiredWithoutSyncLogsNestedInput
  }

  export type SyncLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    emailsSynced?: IntFieldUpdateOperationsInput | number
    threadsSynced?: IntFieldUpdateOperationsInput | number
    errors?: SyncLogUpdateerrorsInput | string[]
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SyncLogCreateManyInput = {
    id?: string
    orgId: string
    accountId: string
    status: string
    emailsSynced?: number
    threadsSynced?: number
    errors?: SyncLogCreateerrorsInput | string[]
    startedAt?: Date | string
    completedAt?: Date | string | null
    duration?: number | null
  }

  export type SyncLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    emailsSynced?: IntFieldUpdateOperationsInput | number
    threadsSynced?: IntFieldUpdateOperationsInput | number
    errors?: SyncLogUpdateerrorsInput | string[]
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SyncLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    emailsSynced?: IntFieldUpdateOperationsInput | number
    threadsSynced?: IntFieldUpdateOperationsInput | number
    errors?: SyncLogUpdateerrorsInput | string[]
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EmailTemplateCreateInput = {
    id?: string
    orgId: string
    name: string
    subject: string
    body: string
    category?: string | null
    variables?: EmailTemplateCreatevariablesInput | string[]
    isPublic?: boolean
    usageCount?: number
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailTemplateUncheckedCreateInput = {
    id?: string
    orgId: string
    name: string
    subject: string
    body: string
    category?: string | null
    variables?: EmailTemplateCreatevariablesInput | string[]
    isPublic?: boolean
    usageCount?: number
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    variables?: EmailTemplateUpdatevariablesInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    usageCount?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    variables?: EmailTemplateUpdatevariablesInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    usageCount?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailTemplateCreateManyInput = {
    id?: string
    orgId: string
    name: string
    subject: string
    body: string
    category?: string | null
    variables?: EmailTemplateCreatevariablesInput | string[]
    isPublic?: boolean
    usageCount?: number
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    variables?: EmailTemplateUpdatevariablesInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    usageCount?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    variables?: EmailTemplateUpdatevariablesInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    usageCount?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailSequenceCreateInput = {
    id?: string
    orgId: string
    name: string
    description?: string | null
    isActive?: boolean
    steps: JsonNullValueInput | InputJsonValue
    totalDuration: number
    enrollmentCount?: number
    completionRate?: number
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: SequenceEnrollmentCreateNestedManyWithoutSequenceInput
  }

  export type EmailSequenceUncheckedCreateInput = {
    id?: string
    orgId: string
    name: string
    description?: string | null
    isActive?: boolean
    steps: JsonNullValueInput | InputJsonValue
    totalDuration: number
    enrollmentCount?: number
    completionRate?: number
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: SequenceEnrollmentUncheckedCreateNestedManyWithoutSequenceInput
  }

  export type EmailSequenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    steps?: JsonNullValueInput | InputJsonValue
    totalDuration?: IntFieldUpdateOperationsInput | number
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    completionRate?: FloatFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: SequenceEnrollmentUpdateManyWithoutSequenceNestedInput
  }

  export type EmailSequenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    steps?: JsonNullValueInput | InputJsonValue
    totalDuration?: IntFieldUpdateOperationsInput | number
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    completionRate?: FloatFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: SequenceEnrollmentUncheckedUpdateManyWithoutSequenceNestedInput
  }

  export type EmailSequenceCreateManyInput = {
    id?: string
    orgId: string
    name: string
    description?: string | null
    isActive?: boolean
    steps: JsonNullValueInput | InputJsonValue
    totalDuration: number
    enrollmentCount?: number
    completionRate?: number
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailSequenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    steps?: JsonNullValueInput | InputJsonValue
    totalDuration?: IntFieldUpdateOperationsInput | number
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    completionRate?: FloatFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailSequenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    steps?: JsonNullValueInput | InputJsonValue
    totalDuration?: IntFieldUpdateOperationsInput | number
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    completionRate?: FloatFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SequenceEnrollmentCreateInput = {
    id?: string
    orgId: string
    contactEmail: string
    contactId?: string | null
    dealId?: string | null
    status?: string
    currentStep?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    unsubscribedAt?: Date | string | null
    sequence: EmailSequenceCreateNestedOneWithoutEnrollmentsInput
    activities?: SequenceActivityCreateNestedManyWithoutEnrollmentInput
  }

  export type SequenceEnrollmentUncheckedCreateInput = {
    id?: string
    orgId: string
    sequenceId: string
    contactEmail: string
    contactId?: string | null
    dealId?: string | null
    status?: string
    currentStep?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    unsubscribedAt?: Date | string | null
    activities?: SequenceActivityUncheckedCreateNestedManyWithoutEnrollmentInput
  }

  export type SequenceEnrollmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    dealId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unsubscribedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sequence?: EmailSequenceUpdateOneRequiredWithoutEnrollmentsNestedInput
    activities?: SequenceActivityUpdateManyWithoutEnrollmentNestedInput
  }

  export type SequenceEnrollmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    sequenceId?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    dealId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unsubscribedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activities?: SequenceActivityUncheckedUpdateManyWithoutEnrollmentNestedInput
  }

  export type SequenceEnrollmentCreateManyInput = {
    id?: string
    orgId: string
    sequenceId: string
    contactEmail: string
    contactId?: string | null
    dealId?: string | null
    status?: string
    currentStep?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    unsubscribedAt?: Date | string | null
  }

  export type SequenceEnrollmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    dealId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unsubscribedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SequenceEnrollmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    sequenceId?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    dealId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unsubscribedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SequenceActivityCreateInput = {
    id?: string
    orgId: string
    stepNumber: number
    type: string
    status?: string
    scheduledAt: Date | string
    sentAt?: Date | string | null
    openedAt?: Date | string | null
    clickedAt?: Date | string | null
    errorMessage?: string | null
    enrollment: SequenceEnrollmentCreateNestedOneWithoutActivitiesInput
  }

  export type SequenceActivityUncheckedCreateInput = {
    id?: string
    orgId: string
    enrollmentId: string
    stepNumber: number
    type: string
    status?: string
    scheduledAt: Date | string
    sentAt?: Date | string | null
    openedAt?: Date | string | null
    clickedAt?: Date | string | null
    errorMessage?: string | null
  }

  export type SequenceActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clickedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    enrollment?: SequenceEnrollmentUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type SequenceActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    enrollmentId?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clickedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SequenceActivityCreateManyInput = {
    id?: string
    orgId: string
    enrollmentId: string
    stepNumber: number
    type: string
    status?: string
    scheduledAt: Date | string
    sentAt?: Date | string | null
    openedAt?: Date | string | null
    clickedAt?: Date | string | null
    errorMessage?: string | null
  }

  export type SequenceActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clickedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SequenceActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    enrollmentId?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clickedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EmailListRelationFilter = {
    every?: EmailWhereInput
    some?: EmailWhereInput
    none?: EmailWhereInput
  }

  export type EmailThreadListRelationFilter = {
    every?: EmailThreadWhereInput
    some?: EmailThreadWhereInput
    none?: EmailThreadWhereInput
  }

  export type SyncLogListRelationFilter = {
    every?: SyncLogWhereInput
    some?: SyncLogWhereInput
    none?: SyncLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmailThreadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SyncLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmailAccountCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    isConnected?: SortOrder
    lastSyncAt?: SortOrder
    syncStatus?: SortOrder
    errorMessage?: SortOrder
    settings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    isConnected?: SortOrder
    lastSyncAt?: SortOrder
    syncStatus?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailAccountMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    isConnected?: SortOrder
    lastSyncAt?: SortOrder
    syncStatus?: SortOrder
    errorMessage?: SortOrder
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

  export type EmailAccountScalarRelationFilter = {
    is?: EmailAccountWhereInput
    isNot?: EmailAccountWhereInput
  }

  export type EmailThreadNullableScalarRelationFilter = {
    is?: EmailThreadWhereInput | null
    isNot?: EmailThreadWhereInput | null
  }

  export type EmailCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    accountId?: SortOrder
    threadId?: SortOrder
    messageId?: SortOrder
    subject?: SortOrder
    fromName?: SortOrder
    fromEmail?: SortOrder
    toEmails?: SortOrder
    ccEmails?: SortOrder
    bccEmails?: SortOrder
    replyToEmails?: SortOrder
    textBody?: SortOrder
    htmlBody?: SortOrder
    snippet?: SortOrder
    hasAttachments?: SortOrder
    attachmentCount?: SortOrder
    labels?: SortOrder
    isRead?: SortOrder
    isStarred?: SortOrder
    isImportant?: SortOrder
    direction?: SortOrder
    sentAt?: SortOrder
    receivedAt?: SortOrder
    rawHeaders?: SortOrder
    inReplyTo?: SortOrder
    references?: SortOrder
    relatedDealId?: SortOrder
    relatedContactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailAvgOrderByAggregateInput = {
    attachmentCount?: SortOrder
  }

  export type EmailMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    accountId?: SortOrder
    threadId?: SortOrder
    messageId?: SortOrder
    subject?: SortOrder
    fromName?: SortOrder
    fromEmail?: SortOrder
    textBody?: SortOrder
    htmlBody?: SortOrder
    snippet?: SortOrder
    hasAttachments?: SortOrder
    attachmentCount?: SortOrder
    isRead?: SortOrder
    isStarred?: SortOrder
    isImportant?: SortOrder
    direction?: SortOrder
    sentAt?: SortOrder
    receivedAt?: SortOrder
    inReplyTo?: SortOrder
    relatedDealId?: SortOrder
    relatedContactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    accountId?: SortOrder
    threadId?: SortOrder
    messageId?: SortOrder
    subject?: SortOrder
    fromName?: SortOrder
    fromEmail?: SortOrder
    textBody?: SortOrder
    htmlBody?: SortOrder
    snippet?: SortOrder
    hasAttachments?: SortOrder
    attachmentCount?: SortOrder
    isRead?: SortOrder
    isStarred?: SortOrder
    isImportant?: SortOrder
    direction?: SortOrder
    sentAt?: SortOrder
    receivedAt?: SortOrder
    inReplyTo?: SortOrder
    relatedDealId?: SortOrder
    relatedContactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailSumOrderByAggregateInput = {
    attachmentCount?: SortOrder
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

  export type EmailThreadCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    accountId?: SortOrder
    subject?: SortOrder
    firstMessageId?: SortOrder
    lastMessageId?: SortOrder
    messageCount?: SortOrder
    participants?: SortOrder
    lastMessageAt?: SortOrder
    relatedDealId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailThreadAvgOrderByAggregateInput = {
    messageCount?: SortOrder
  }

  export type EmailThreadMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    accountId?: SortOrder
    subject?: SortOrder
    firstMessageId?: SortOrder
    lastMessageId?: SortOrder
    messageCount?: SortOrder
    lastMessageAt?: SortOrder
    relatedDealId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailThreadMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    accountId?: SortOrder
    subject?: SortOrder
    firstMessageId?: SortOrder
    lastMessageId?: SortOrder
    messageCount?: SortOrder
    lastMessageAt?: SortOrder
    relatedDealId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailThreadSumOrderByAggregateInput = {
    messageCount?: SortOrder
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

  export type SyncLogCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    accountId?: SortOrder
    status?: SortOrder
    emailsSynced?: SortOrder
    threadsSynced?: SortOrder
    errors?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    duration?: SortOrder
  }

  export type SyncLogAvgOrderByAggregateInput = {
    emailsSynced?: SortOrder
    threadsSynced?: SortOrder
    duration?: SortOrder
  }

  export type SyncLogMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    accountId?: SortOrder
    status?: SortOrder
    emailsSynced?: SortOrder
    threadsSynced?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    duration?: SortOrder
  }

  export type SyncLogMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    accountId?: SortOrder
    status?: SortOrder
    emailsSynced?: SortOrder
    threadsSynced?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    duration?: SortOrder
  }

  export type SyncLogSumOrderByAggregateInput = {
    emailsSynced?: SortOrder
    threadsSynced?: SortOrder
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

  export type EmailTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    category?: SortOrder
    variables?: SortOrder
    isPublic?: SortOrder
    usageCount?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailTemplateAvgOrderByAggregateInput = {
    usageCount?: SortOrder
  }

  export type EmailTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    category?: SortOrder
    isPublic?: SortOrder
    usageCount?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    category?: SortOrder
    isPublic?: SortOrder
    usageCount?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailTemplateSumOrderByAggregateInput = {
    usageCount?: SortOrder
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

  export type SequenceEnrollmentListRelationFilter = {
    every?: SequenceEnrollmentWhereInput
    some?: SequenceEnrollmentWhereInput
    none?: SequenceEnrollmentWhereInput
  }

  export type SequenceEnrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmailSequenceCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    steps?: SortOrder
    totalDuration?: SortOrder
    enrollmentCount?: SortOrder
    completionRate?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailSequenceAvgOrderByAggregateInput = {
    totalDuration?: SortOrder
    enrollmentCount?: SortOrder
    completionRate?: SortOrder
  }

  export type EmailSequenceMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    totalDuration?: SortOrder
    enrollmentCount?: SortOrder
    completionRate?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailSequenceMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    totalDuration?: SortOrder
    enrollmentCount?: SortOrder
    completionRate?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailSequenceSumOrderByAggregateInput = {
    totalDuration?: SortOrder
    enrollmentCount?: SortOrder
    completionRate?: SortOrder
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

  export type EmailSequenceScalarRelationFilter = {
    is?: EmailSequenceWhereInput
    isNot?: EmailSequenceWhereInput
  }

  export type SequenceActivityListRelationFilter = {
    every?: SequenceActivityWhereInput
    some?: SequenceActivityWhereInput
    none?: SequenceActivityWhereInput
  }

  export type SequenceActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SequenceEnrollmentCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    sequenceId?: SortOrder
    contactEmail?: SortOrder
    contactId?: SortOrder
    dealId?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    unsubscribedAt?: SortOrder
  }

  export type SequenceEnrollmentAvgOrderByAggregateInput = {
    currentStep?: SortOrder
  }

  export type SequenceEnrollmentMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    sequenceId?: SortOrder
    contactEmail?: SortOrder
    contactId?: SortOrder
    dealId?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    unsubscribedAt?: SortOrder
  }

  export type SequenceEnrollmentMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    sequenceId?: SortOrder
    contactEmail?: SortOrder
    contactId?: SortOrder
    dealId?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    unsubscribedAt?: SortOrder
  }

  export type SequenceEnrollmentSumOrderByAggregateInput = {
    currentStep?: SortOrder
  }

  export type SequenceEnrollmentScalarRelationFilter = {
    is?: SequenceEnrollmentWhereInput
    isNot?: SequenceEnrollmentWhereInput
  }

  export type SequenceActivityCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    enrollmentId?: SortOrder
    stepNumber?: SortOrder
    type?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrder
    sentAt?: SortOrder
    openedAt?: SortOrder
    clickedAt?: SortOrder
    errorMessage?: SortOrder
  }

  export type SequenceActivityAvgOrderByAggregateInput = {
    stepNumber?: SortOrder
  }

  export type SequenceActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    enrollmentId?: SortOrder
    stepNumber?: SortOrder
    type?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrder
    sentAt?: SortOrder
    openedAt?: SortOrder
    clickedAt?: SortOrder
    errorMessage?: SortOrder
  }

  export type SequenceActivityMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    enrollmentId?: SortOrder
    stepNumber?: SortOrder
    type?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrder
    sentAt?: SortOrder
    openedAt?: SortOrder
    clickedAt?: SortOrder
    errorMessage?: SortOrder
  }

  export type SequenceActivitySumOrderByAggregateInput = {
    stepNumber?: SortOrder
  }

  export type EmailCreateNestedManyWithoutAccountInput = {
    create?: XOR<EmailCreateWithoutAccountInput, EmailUncheckedCreateWithoutAccountInput> | EmailCreateWithoutAccountInput[] | EmailUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutAccountInput | EmailCreateOrConnectWithoutAccountInput[]
    createMany?: EmailCreateManyAccountInputEnvelope
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
  }

  export type EmailThreadCreateNestedManyWithoutAccountInput = {
    create?: XOR<EmailThreadCreateWithoutAccountInput, EmailThreadUncheckedCreateWithoutAccountInput> | EmailThreadCreateWithoutAccountInput[] | EmailThreadUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: EmailThreadCreateOrConnectWithoutAccountInput | EmailThreadCreateOrConnectWithoutAccountInput[]
    createMany?: EmailThreadCreateManyAccountInputEnvelope
    connect?: EmailThreadWhereUniqueInput | EmailThreadWhereUniqueInput[]
  }

  export type SyncLogCreateNestedManyWithoutAccountInput = {
    create?: XOR<SyncLogCreateWithoutAccountInput, SyncLogUncheckedCreateWithoutAccountInput> | SyncLogCreateWithoutAccountInput[] | SyncLogUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: SyncLogCreateOrConnectWithoutAccountInput | SyncLogCreateOrConnectWithoutAccountInput[]
    createMany?: SyncLogCreateManyAccountInputEnvelope
    connect?: SyncLogWhereUniqueInput | SyncLogWhereUniqueInput[]
  }

  export type EmailUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<EmailCreateWithoutAccountInput, EmailUncheckedCreateWithoutAccountInput> | EmailCreateWithoutAccountInput[] | EmailUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutAccountInput | EmailCreateOrConnectWithoutAccountInput[]
    createMany?: EmailCreateManyAccountInputEnvelope
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
  }

  export type EmailThreadUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<EmailThreadCreateWithoutAccountInput, EmailThreadUncheckedCreateWithoutAccountInput> | EmailThreadCreateWithoutAccountInput[] | EmailThreadUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: EmailThreadCreateOrConnectWithoutAccountInput | EmailThreadCreateOrConnectWithoutAccountInput[]
    createMany?: EmailThreadCreateManyAccountInputEnvelope
    connect?: EmailThreadWhereUniqueInput | EmailThreadWhereUniqueInput[]
  }

  export type SyncLogUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<SyncLogCreateWithoutAccountInput, SyncLogUncheckedCreateWithoutAccountInput> | SyncLogCreateWithoutAccountInput[] | SyncLogUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: SyncLogCreateOrConnectWithoutAccountInput | SyncLogCreateOrConnectWithoutAccountInput[]
    createMany?: SyncLogCreateManyAccountInputEnvelope
    connect?: SyncLogWhereUniqueInput | SyncLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EmailUpdateManyWithoutAccountNestedInput = {
    create?: XOR<EmailCreateWithoutAccountInput, EmailUncheckedCreateWithoutAccountInput> | EmailCreateWithoutAccountInput[] | EmailUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutAccountInput | EmailCreateOrConnectWithoutAccountInput[]
    upsert?: EmailUpsertWithWhereUniqueWithoutAccountInput | EmailUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: EmailCreateManyAccountInputEnvelope
    set?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    disconnect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    delete?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    update?: EmailUpdateWithWhereUniqueWithoutAccountInput | EmailUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: EmailUpdateManyWithWhereWithoutAccountInput | EmailUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: EmailScalarWhereInput | EmailScalarWhereInput[]
  }

  export type EmailThreadUpdateManyWithoutAccountNestedInput = {
    create?: XOR<EmailThreadCreateWithoutAccountInput, EmailThreadUncheckedCreateWithoutAccountInput> | EmailThreadCreateWithoutAccountInput[] | EmailThreadUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: EmailThreadCreateOrConnectWithoutAccountInput | EmailThreadCreateOrConnectWithoutAccountInput[]
    upsert?: EmailThreadUpsertWithWhereUniqueWithoutAccountInput | EmailThreadUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: EmailThreadCreateManyAccountInputEnvelope
    set?: EmailThreadWhereUniqueInput | EmailThreadWhereUniqueInput[]
    disconnect?: EmailThreadWhereUniqueInput | EmailThreadWhereUniqueInput[]
    delete?: EmailThreadWhereUniqueInput | EmailThreadWhereUniqueInput[]
    connect?: EmailThreadWhereUniqueInput | EmailThreadWhereUniqueInput[]
    update?: EmailThreadUpdateWithWhereUniqueWithoutAccountInput | EmailThreadUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: EmailThreadUpdateManyWithWhereWithoutAccountInput | EmailThreadUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: EmailThreadScalarWhereInput | EmailThreadScalarWhereInput[]
  }

  export type SyncLogUpdateManyWithoutAccountNestedInput = {
    create?: XOR<SyncLogCreateWithoutAccountInput, SyncLogUncheckedCreateWithoutAccountInput> | SyncLogCreateWithoutAccountInput[] | SyncLogUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: SyncLogCreateOrConnectWithoutAccountInput | SyncLogCreateOrConnectWithoutAccountInput[]
    upsert?: SyncLogUpsertWithWhereUniqueWithoutAccountInput | SyncLogUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: SyncLogCreateManyAccountInputEnvelope
    set?: SyncLogWhereUniqueInput | SyncLogWhereUniqueInput[]
    disconnect?: SyncLogWhereUniqueInput | SyncLogWhereUniqueInput[]
    delete?: SyncLogWhereUniqueInput | SyncLogWhereUniqueInput[]
    connect?: SyncLogWhereUniqueInput | SyncLogWhereUniqueInput[]
    update?: SyncLogUpdateWithWhereUniqueWithoutAccountInput | SyncLogUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: SyncLogUpdateManyWithWhereWithoutAccountInput | SyncLogUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: SyncLogScalarWhereInput | SyncLogScalarWhereInput[]
  }

  export type EmailUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<EmailCreateWithoutAccountInput, EmailUncheckedCreateWithoutAccountInput> | EmailCreateWithoutAccountInput[] | EmailUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutAccountInput | EmailCreateOrConnectWithoutAccountInput[]
    upsert?: EmailUpsertWithWhereUniqueWithoutAccountInput | EmailUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: EmailCreateManyAccountInputEnvelope
    set?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    disconnect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    delete?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    update?: EmailUpdateWithWhereUniqueWithoutAccountInput | EmailUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: EmailUpdateManyWithWhereWithoutAccountInput | EmailUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: EmailScalarWhereInput | EmailScalarWhereInput[]
  }

  export type EmailThreadUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<EmailThreadCreateWithoutAccountInput, EmailThreadUncheckedCreateWithoutAccountInput> | EmailThreadCreateWithoutAccountInput[] | EmailThreadUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: EmailThreadCreateOrConnectWithoutAccountInput | EmailThreadCreateOrConnectWithoutAccountInput[]
    upsert?: EmailThreadUpsertWithWhereUniqueWithoutAccountInput | EmailThreadUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: EmailThreadCreateManyAccountInputEnvelope
    set?: EmailThreadWhereUniqueInput | EmailThreadWhereUniqueInput[]
    disconnect?: EmailThreadWhereUniqueInput | EmailThreadWhereUniqueInput[]
    delete?: EmailThreadWhereUniqueInput | EmailThreadWhereUniqueInput[]
    connect?: EmailThreadWhereUniqueInput | EmailThreadWhereUniqueInput[]
    update?: EmailThreadUpdateWithWhereUniqueWithoutAccountInput | EmailThreadUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: EmailThreadUpdateManyWithWhereWithoutAccountInput | EmailThreadUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: EmailThreadScalarWhereInput | EmailThreadScalarWhereInput[]
  }

  export type SyncLogUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<SyncLogCreateWithoutAccountInput, SyncLogUncheckedCreateWithoutAccountInput> | SyncLogCreateWithoutAccountInput[] | SyncLogUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: SyncLogCreateOrConnectWithoutAccountInput | SyncLogCreateOrConnectWithoutAccountInput[]
    upsert?: SyncLogUpsertWithWhereUniqueWithoutAccountInput | SyncLogUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: SyncLogCreateManyAccountInputEnvelope
    set?: SyncLogWhereUniqueInput | SyncLogWhereUniqueInput[]
    disconnect?: SyncLogWhereUniqueInput | SyncLogWhereUniqueInput[]
    delete?: SyncLogWhereUniqueInput | SyncLogWhereUniqueInput[]
    connect?: SyncLogWhereUniqueInput | SyncLogWhereUniqueInput[]
    update?: SyncLogUpdateWithWhereUniqueWithoutAccountInput | SyncLogUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: SyncLogUpdateManyWithWhereWithoutAccountInput | SyncLogUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: SyncLogScalarWhereInput | SyncLogScalarWhereInput[]
  }

  export type EmailCreatetoEmailsInput = {
    set: string[]
  }

  export type EmailCreateccEmailsInput = {
    set: string[]
  }

  export type EmailCreatebccEmailsInput = {
    set: string[]
  }

  export type EmailCreatereplyToEmailsInput = {
    set: string[]
  }

  export type EmailCreatelabelsInput = {
    set: string[]
  }

  export type EmailCreatereferencesInput = {
    set: string[]
  }

  export type EmailAccountCreateNestedOneWithoutEmailsInput = {
    create?: XOR<EmailAccountCreateWithoutEmailsInput, EmailAccountUncheckedCreateWithoutEmailsInput>
    connectOrCreate?: EmailAccountCreateOrConnectWithoutEmailsInput
    connect?: EmailAccountWhereUniqueInput
  }

  export type EmailThreadCreateNestedOneWithoutEmailsInput = {
    create?: XOR<EmailThreadCreateWithoutEmailsInput, EmailThreadUncheckedCreateWithoutEmailsInput>
    connectOrCreate?: EmailThreadCreateOrConnectWithoutEmailsInput
    connect?: EmailThreadWhereUniqueInput
  }

  export type EmailUpdatetoEmailsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EmailUpdateccEmailsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EmailUpdatebccEmailsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EmailUpdatereplyToEmailsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmailUpdatelabelsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EmailUpdatereferencesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EmailAccountUpdateOneRequiredWithoutEmailsNestedInput = {
    create?: XOR<EmailAccountCreateWithoutEmailsInput, EmailAccountUncheckedCreateWithoutEmailsInput>
    connectOrCreate?: EmailAccountCreateOrConnectWithoutEmailsInput
    upsert?: EmailAccountUpsertWithoutEmailsInput
    connect?: EmailAccountWhereUniqueInput
    update?: XOR<XOR<EmailAccountUpdateToOneWithWhereWithoutEmailsInput, EmailAccountUpdateWithoutEmailsInput>, EmailAccountUncheckedUpdateWithoutEmailsInput>
  }

  export type EmailThreadUpdateOneWithoutEmailsNestedInput = {
    create?: XOR<EmailThreadCreateWithoutEmailsInput, EmailThreadUncheckedCreateWithoutEmailsInput>
    connectOrCreate?: EmailThreadCreateOrConnectWithoutEmailsInput
    upsert?: EmailThreadUpsertWithoutEmailsInput
    disconnect?: EmailThreadWhereInput | boolean
    delete?: EmailThreadWhereInput | boolean
    connect?: EmailThreadWhereUniqueInput
    update?: XOR<XOR<EmailThreadUpdateToOneWithWhereWithoutEmailsInput, EmailThreadUpdateWithoutEmailsInput>, EmailThreadUncheckedUpdateWithoutEmailsInput>
  }

  export type EmailThreadCreateparticipantsInput = {
    set: string[]
  }

  export type EmailCreateNestedManyWithoutThreadInput = {
    create?: XOR<EmailCreateWithoutThreadInput, EmailUncheckedCreateWithoutThreadInput> | EmailCreateWithoutThreadInput[] | EmailUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutThreadInput | EmailCreateOrConnectWithoutThreadInput[]
    createMany?: EmailCreateManyThreadInputEnvelope
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
  }

  export type EmailAccountCreateNestedOneWithoutThreadsInput = {
    create?: XOR<EmailAccountCreateWithoutThreadsInput, EmailAccountUncheckedCreateWithoutThreadsInput>
    connectOrCreate?: EmailAccountCreateOrConnectWithoutThreadsInput
    connect?: EmailAccountWhereUniqueInput
  }

  export type EmailUncheckedCreateNestedManyWithoutThreadInput = {
    create?: XOR<EmailCreateWithoutThreadInput, EmailUncheckedCreateWithoutThreadInput> | EmailCreateWithoutThreadInput[] | EmailUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutThreadInput | EmailCreateOrConnectWithoutThreadInput[]
    createMany?: EmailCreateManyThreadInputEnvelope
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
  }

  export type EmailThreadUpdateparticipantsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EmailUpdateManyWithoutThreadNestedInput = {
    create?: XOR<EmailCreateWithoutThreadInput, EmailUncheckedCreateWithoutThreadInput> | EmailCreateWithoutThreadInput[] | EmailUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutThreadInput | EmailCreateOrConnectWithoutThreadInput[]
    upsert?: EmailUpsertWithWhereUniqueWithoutThreadInput | EmailUpsertWithWhereUniqueWithoutThreadInput[]
    createMany?: EmailCreateManyThreadInputEnvelope
    set?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    disconnect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    delete?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    update?: EmailUpdateWithWhereUniqueWithoutThreadInput | EmailUpdateWithWhereUniqueWithoutThreadInput[]
    updateMany?: EmailUpdateManyWithWhereWithoutThreadInput | EmailUpdateManyWithWhereWithoutThreadInput[]
    deleteMany?: EmailScalarWhereInput | EmailScalarWhereInput[]
  }

  export type EmailAccountUpdateOneRequiredWithoutThreadsNestedInput = {
    create?: XOR<EmailAccountCreateWithoutThreadsInput, EmailAccountUncheckedCreateWithoutThreadsInput>
    connectOrCreate?: EmailAccountCreateOrConnectWithoutThreadsInput
    upsert?: EmailAccountUpsertWithoutThreadsInput
    connect?: EmailAccountWhereUniqueInput
    update?: XOR<XOR<EmailAccountUpdateToOneWithWhereWithoutThreadsInput, EmailAccountUpdateWithoutThreadsInput>, EmailAccountUncheckedUpdateWithoutThreadsInput>
  }

  export type EmailUncheckedUpdateManyWithoutThreadNestedInput = {
    create?: XOR<EmailCreateWithoutThreadInput, EmailUncheckedCreateWithoutThreadInput> | EmailCreateWithoutThreadInput[] | EmailUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutThreadInput | EmailCreateOrConnectWithoutThreadInput[]
    upsert?: EmailUpsertWithWhereUniqueWithoutThreadInput | EmailUpsertWithWhereUniqueWithoutThreadInput[]
    createMany?: EmailCreateManyThreadInputEnvelope
    set?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    disconnect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    delete?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    update?: EmailUpdateWithWhereUniqueWithoutThreadInput | EmailUpdateWithWhereUniqueWithoutThreadInput[]
    updateMany?: EmailUpdateManyWithWhereWithoutThreadInput | EmailUpdateManyWithWhereWithoutThreadInput[]
    deleteMany?: EmailScalarWhereInput | EmailScalarWhereInput[]
  }

  export type SyncLogCreateerrorsInput = {
    set: string[]
  }

  export type EmailAccountCreateNestedOneWithoutSyncLogsInput = {
    create?: XOR<EmailAccountCreateWithoutSyncLogsInput, EmailAccountUncheckedCreateWithoutSyncLogsInput>
    connectOrCreate?: EmailAccountCreateOrConnectWithoutSyncLogsInput
    connect?: EmailAccountWhereUniqueInput
  }

  export type SyncLogUpdateerrorsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmailAccountUpdateOneRequiredWithoutSyncLogsNestedInput = {
    create?: XOR<EmailAccountCreateWithoutSyncLogsInput, EmailAccountUncheckedCreateWithoutSyncLogsInput>
    connectOrCreate?: EmailAccountCreateOrConnectWithoutSyncLogsInput
    upsert?: EmailAccountUpsertWithoutSyncLogsInput
    connect?: EmailAccountWhereUniqueInput
    update?: XOR<XOR<EmailAccountUpdateToOneWithWhereWithoutSyncLogsInput, EmailAccountUpdateWithoutSyncLogsInput>, EmailAccountUncheckedUpdateWithoutSyncLogsInput>
  }

  export type EmailTemplateCreatevariablesInput = {
    set: string[]
  }

  export type EmailTemplateUpdatevariablesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SequenceEnrollmentCreateNestedManyWithoutSequenceInput = {
    create?: XOR<SequenceEnrollmentCreateWithoutSequenceInput, SequenceEnrollmentUncheckedCreateWithoutSequenceInput> | SequenceEnrollmentCreateWithoutSequenceInput[] | SequenceEnrollmentUncheckedCreateWithoutSequenceInput[]
    connectOrCreate?: SequenceEnrollmentCreateOrConnectWithoutSequenceInput | SequenceEnrollmentCreateOrConnectWithoutSequenceInput[]
    createMany?: SequenceEnrollmentCreateManySequenceInputEnvelope
    connect?: SequenceEnrollmentWhereUniqueInput | SequenceEnrollmentWhereUniqueInput[]
  }

  export type SequenceEnrollmentUncheckedCreateNestedManyWithoutSequenceInput = {
    create?: XOR<SequenceEnrollmentCreateWithoutSequenceInput, SequenceEnrollmentUncheckedCreateWithoutSequenceInput> | SequenceEnrollmentCreateWithoutSequenceInput[] | SequenceEnrollmentUncheckedCreateWithoutSequenceInput[]
    connectOrCreate?: SequenceEnrollmentCreateOrConnectWithoutSequenceInput | SequenceEnrollmentCreateOrConnectWithoutSequenceInput[]
    createMany?: SequenceEnrollmentCreateManySequenceInputEnvelope
    connect?: SequenceEnrollmentWhereUniqueInput | SequenceEnrollmentWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SequenceEnrollmentUpdateManyWithoutSequenceNestedInput = {
    create?: XOR<SequenceEnrollmentCreateWithoutSequenceInput, SequenceEnrollmentUncheckedCreateWithoutSequenceInput> | SequenceEnrollmentCreateWithoutSequenceInput[] | SequenceEnrollmentUncheckedCreateWithoutSequenceInput[]
    connectOrCreate?: SequenceEnrollmentCreateOrConnectWithoutSequenceInput | SequenceEnrollmentCreateOrConnectWithoutSequenceInput[]
    upsert?: SequenceEnrollmentUpsertWithWhereUniqueWithoutSequenceInput | SequenceEnrollmentUpsertWithWhereUniqueWithoutSequenceInput[]
    createMany?: SequenceEnrollmentCreateManySequenceInputEnvelope
    set?: SequenceEnrollmentWhereUniqueInput | SequenceEnrollmentWhereUniqueInput[]
    disconnect?: SequenceEnrollmentWhereUniqueInput | SequenceEnrollmentWhereUniqueInput[]
    delete?: SequenceEnrollmentWhereUniqueInput | SequenceEnrollmentWhereUniqueInput[]
    connect?: SequenceEnrollmentWhereUniqueInput | SequenceEnrollmentWhereUniqueInput[]
    update?: SequenceEnrollmentUpdateWithWhereUniqueWithoutSequenceInput | SequenceEnrollmentUpdateWithWhereUniqueWithoutSequenceInput[]
    updateMany?: SequenceEnrollmentUpdateManyWithWhereWithoutSequenceInput | SequenceEnrollmentUpdateManyWithWhereWithoutSequenceInput[]
    deleteMany?: SequenceEnrollmentScalarWhereInput | SequenceEnrollmentScalarWhereInput[]
  }

  export type SequenceEnrollmentUncheckedUpdateManyWithoutSequenceNestedInput = {
    create?: XOR<SequenceEnrollmentCreateWithoutSequenceInput, SequenceEnrollmentUncheckedCreateWithoutSequenceInput> | SequenceEnrollmentCreateWithoutSequenceInput[] | SequenceEnrollmentUncheckedCreateWithoutSequenceInput[]
    connectOrCreate?: SequenceEnrollmentCreateOrConnectWithoutSequenceInput | SequenceEnrollmentCreateOrConnectWithoutSequenceInput[]
    upsert?: SequenceEnrollmentUpsertWithWhereUniqueWithoutSequenceInput | SequenceEnrollmentUpsertWithWhereUniqueWithoutSequenceInput[]
    createMany?: SequenceEnrollmentCreateManySequenceInputEnvelope
    set?: SequenceEnrollmentWhereUniqueInput | SequenceEnrollmentWhereUniqueInput[]
    disconnect?: SequenceEnrollmentWhereUniqueInput | SequenceEnrollmentWhereUniqueInput[]
    delete?: SequenceEnrollmentWhereUniqueInput | SequenceEnrollmentWhereUniqueInput[]
    connect?: SequenceEnrollmentWhereUniqueInput | SequenceEnrollmentWhereUniqueInput[]
    update?: SequenceEnrollmentUpdateWithWhereUniqueWithoutSequenceInput | SequenceEnrollmentUpdateWithWhereUniqueWithoutSequenceInput[]
    updateMany?: SequenceEnrollmentUpdateManyWithWhereWithoutSequenceInput | SequenceEnrollmentUpdateManyWithWhereWithoutSequenceInput[]
    deleteMany?: SequenceEnrollmentScalarWhereInput | SequenceEnrollmentScalarWhereInput[]
  }

  export type EmailSequenceCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<EmailSequenceCreateWithoutEnrollmentsInput, EmailSequenceUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: EmailSequenceCreateOrConnectWithoutEnrollmentsInput
    connect?: EmailSequenceWhereUniqueInput
  }

  export type SequenceActivityCreateNestedManyWithoutEnrollmentInput = {
    create?: XOR<SequenceActivityCreateWithoutEnrollmentInput, SequenceActivityUncheckedCreateWithoutEnrollmentInput> | SequenceActivityCreateWithoutEnrollmentInput[] | SequenceActivityUncheckedCreateWithoutEnrollmentInput[]
    connectOrCreate?: SequenceActivityCreateOrConnectWithoutEnrollmentInput | SequenceActivityCreateOrConnectWithoutEnrollmentInput[]
    createMany?: SequenceActivityCreateManyEnrollmentInputEnvelope
    connect?: SequenceActivityWhereUniqueInput | SequenceActivityWhereUniqueInput[]
  }

  export type SequenceActivityUncheckedCreateNestedManyWithoutEnrollmentInput = {
    create?: XOR<SequenceActivityCreateWithoutEnrollmentInput, SequenceActivityUncheckedCreateWithoutEnrollmentInput> | SequenceActivityCreateWithoutEnrollmentInput[] | SequenceActivityUncheckedCreateWithoutEnrollmentInput[]
    connectOrCreate?: SequenceActivityCreateOrConnectWithoutEnrollmentInput | SequenceActivityCreateOrConnectWithoutEnrollmentInput[]
    createMany?: SequenceActivityCreateManyEnrollmentInputEnvelope
    connect?: SequenceActivityWhereUniqueInput | SequenceActivityWhereUniqueInput[]
  }

  export type EmailSequenceUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<EmailSequenceCreateWithoutEnrollmentsInput, EmailSequenceUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: EmailSequenceCreateOrConnectWithoutEnrollmentsInput
    upsert?: EmailSequenceUpsertWithoutEnrollmentsInput
    connect?: EmailSequenceWhereUniqueInput
    update?: XOR<XOR<EmailSequenceUpdateToOneWithWhereWithoutEnrollmentsInput, EmailSequenceUpdateWithoutEnrollmentsInput>, EmailSequenceUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type SequenceActivityUpdateManyWithoutEnrollmentNestedInput = {
    create?: XOR<SequenceActivityCreateWithoutEnrollmentInput, SequenceActivityUncheckedCreateWithoutEnrollmentInput> | SequenceActivityCreateWithoutEnrollmentInput[] | SequenceActivityUncheckedCreateWithoutEnrollmentInput[]
    connectOrCreate?: SequenceActivityCreateOrConnectWithoutEnrollmentInput | SequenceActivityCreateOrConnectWithoutEnrollmentInput[]
    upsert?: SequenceActivityUpsertWithWhereUniqueWithoutEnrollmentInput | SequenceActivityUpsertWithWhereUniqueWithoutEnrollmentInput[]
    createMany?: SequenceActivityCreateManyEnrollmentInputEnvelope
    set?: SequenceActivityWhereUniqueInput | SequenceActivityWhereUniqueInput[]
    disconnect?: SequenceActivityWhereUniqueInput | SequenceActivityWhereUniqueInput[]
    delete?: SequenceActivityWhereUniqueInput | SequenceActivityWhereUniqueInput[]
    connect?: SequenceActivityWhereUniqueInput | SequenceActivityWhereUniqueInput[]
    update?: SequenceActivityUpdateWithWhereUniqueWithoutEnrollmentInput | SequenceActivityUpdateWithWhereUniqueWithoutEnrollmentInput[]
    updateMany?: SequenceActivityUpdateManyWithWhereWithoutEnrollmentInput | SequenceActivityUpdateManyWithWhereWithoutEnrollmentInput[]
    deleteMany?: SequenceActivityScalarWhereInput | SequenceActivityScalarWhereInput[]
  }

  export type SequenceActivityUncheckedUpdateManyWithoutEnrollmentNestedInput = {
    create?: XOR<SequenceActivityCreateWithoutEnrollmentInput, SequenceActivityUncheckedCreateWithoutEnrollmentInput> | SequenceActivityCreateWithoutEnrollmentInput[] | SequenceActivityUncheckedCreateWithoutEnrollmentInput[]
    connectOrCreate?: SequenceActivityCreateOrConnectWithoutEnrollmentInput | SequenceActivityCreateOrConnectWithoutEnrollmentInput[]
    upsert?: SequenceActivityUpsertWithWhereUniqueWithoutEnrollmentInput | SequenceActivityUpsertWithWhereUniqueWithoutEnrollmentInput[]
    createMany?: SequenceActivityCreateManyEnrollmentInputEnvelope
    set?: SequenceActivityWhereUniqueInput | SequenceActivityWhereUniqueInput[]
    disconnect?: SequenceActivityWhereUniqueInput | SequenceActivityWhereUniqueInput[]
    delete?: SequenceActivityWhereUniqueInput | SequenceActivityWhereUniqueInput[]
    connect?: SequenceActivityWhereUniqueInput | SequenceActivityWhereUniqueInput[]
    update?: SequenceActivityUpdateWithWhereUniqueWithoutEnrollmentInput | SequenceActivityUpdateWithWhereUniqueWithoutEnrollmentInput[]
    updateMany?: SequenceActivityUpdateManyWithWhereWithoutEnrollmentInput | SequenceActivityUpdateManyWithWhereWithoutEnrollmentInput[]
    deleteMany?: SequenceActivityScalarWhereInput | SequenceActivityScalarWhereInput[]
  }

  export type SequenceEnrollmentCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<SequenceEnrollmentCreateWithoutActivitiesInput, SequenceEnrollmentUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: SequenceEnrollmentCreateOrConnectWithoutActivitiesInput
    connect?: SequenceEnrollmentWhereUniqueInput
  }

  export type SequenceEnrollmentUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<SequenceEnrollmentCreateWithoutActivitiesInput, SequenceEnrollmentUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: SequenceEnrollmentCreateOrConnectWithoutActivitiesInput
    upsert?: SequenceEnrollmentUpsertWithoutActivitiesInput
    connect?: SequenceEnrollmentWhereUniqueInput
    update?: XOR<XOR<SequenceEnrollmentUpdateToOneWithWhereWithoutActivitiesInput, SequenceEnrollmentUpdateWithoutActivitiesInput>, SequenceEnrollmentUncheckedUpdateWithoutActivitiesInput>
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

  export type EmailCreateWithoutAccountInput = {
    id?: string
    orgId: string
    messageId: string
    subject?: string | null
    fromName?: string | null
    fromEmail: string
    toEmails?: EmailCreatetoEmailsInput | string[]
    ccEmails?: EmailCreateccEmailsInput | string[]
    bccEmails?: EmailCreatebccEmailsInput | string[]
    replyToEmails?: EmailCreatereplyToEmailsInput | string[]
    textBody?: string | null
    htmlBody?: string | null
    snippet?: string | null
    hasAttachments?: boolean
    attachmentCount?: number
    labels?: EmailCreatelabelsInput | string[]
    isRead?: boolean
    isStarred?: boolean
    isImportant?: boolean
    direction: string
    sentAt: Date | string
    receivedAt?: Date | string
    rawHeaders?: NullableJsonNullValueInput | InputJsonValue
    inReplyTo?: string | null
    references?: EmailCreatereferencesInput | string[]
    relatedDealId?: string | null
    relatedContactId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    thread?: EmailThreadCreateNestedOneWithoutEmailsInput
  }

  export type EmailUncheckedCreateWithoutAccountInput = {
    id?: string
    orgId: string
    threadId?: string | null
    messageId: string
    subject?: string | null
    fromName?: string | null
    fromEmail: string
    toEmails?: EmailCreatetoEmailsInput | string[]
    ccEmails?: EmailCreateccEmailsInput | string[]
    bccEmails?: EmailCreatebccEmailsInput | string[]
    replyToEmails?: EmailCreatereplyToEmailsInput | string[]
    textBody?: string | null
    htmlBody?: string | null
    snippet?: string | null
    hasAttachments?: boolean
    attachmentCount?: number
    labels?: EmailCreatelabelsInput | string[]
    isRead?: boolean
    isStarred?: boolean
    isImportant?: boolean
    direction: string
    sentAt: Date | string
    receivedAt?: Date | string
    rawHeaders?: NullableJsonNullValueInput | InputJsonValue
    inReplyTo?: string | null
    references?: EmailCreatereferencesInput | string[]
    relatedDealId?: string | null
    relatedContactId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailCreateOrConnectWithoutAccountInput = {
    where: EmailWhereUniqueInput
    create: XOR<EmailCreateWithoutAccountInput, EmailUncheckedCreateWithoutAccountInput>
  }

  export type EmailCreateManyAccountInputEnvelope = {
    data: EmailCreateManyAccountInput | EmailCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type EmailThreadCreateWithoutAccountInput = {
    id?: string
    orgId: string
    subject?: string | null
    firstMessageId: string
    lastMessageId?: string | null
    messageCount?: number
    participants?: EmailThreadCreateparticipantsInput | string[]
    lastMessageAt: Date | string
    relatedDealId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emails?: EmailCreateNestedManyWithoutThreadInput
  }

  export type EmailThreadUncheckedCreateWithoutAccountInput = {
    id?: string
    orgId: string
    subject?: string | null
    firstMessageId: string
    lastMessageId?: string | null
    messageCount?: number
    participants?: EmailThreadCreateparticipantsInput | string[]
    lastMessageAt: Date | string
    relatedDealId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emails?: EmailUncheckedCreateNestedManyWithoutThreadInput
  }

  export type EmailThreadCreateOrConnectWithoutAccountInput = {
    where: EmailThreadWhereUniqueInput
    create: XOR<EmailThreadCreateWithoutAccountInput, EmailThreadUncheckedCreateWithoutAccountInput>
  }

  export type EmailThreadCreateManyAccountInputEnvelope = {
    data: EmailThreadCreateManyAccountInput | EmailThreadCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type SyncLogCreateWithoutAccountInput = {
    id?: string
    orgId: string
    status: string
    emailsSynced?: number
    threadsSynced?: number
    errors?: SyncLogCreateerrorsInput | string[]
    startedAt?: Date | string
    completedAt?: Date | string | null
    duration?: number | null
  }

  export type SyncLogUncheckedCreateWithoutAccountInput = {
    id?: string
    orgId: string
    status: string
    emailsSynced?: number
    threadsSynced?: number
    errors?: SyncLogCreateerrorsInput | string[]
    startedAt?: Date | string
    completedAt?: Date | string | null
    duration?: number | null
  }

  export type SyncLogCreateOrConnectWithoutAccountInput = {
    where: SyncLogWhereUniqueInput
    create: XOR<SyncLogCreateWithoutAccountInput, SyncLogUncheckedCreateWithoutAccountInput>
  }

  export type SyncLogCreateManyAccountInputEnvelope = {
    data: SyncLogCreateManyAccountInput | SyncLogCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type EmailUpsertWithWhereUniqueWithoutAccountInput = {
    where: EmailWhereUniqueInput
    update: XOR<EmailUpdateWithoutAccountInput, EmailUncheckedUpdateWithoutAccountInput>
    create: XOR<EmailCreateWithoutAccountInput, EmailUncheckedCreateWithoutAccountInput>
  }

  export type EmailUpdateWithWhereUniqueWithoutAccountInput = {
    where: EmailWhereUniqueInput
    data: XOR<EmailUpdateWithoutAccountInput, EmailUncheckedUpdateWithoutAccountInput>
  }

  export type EmailUpdateManyWithWhereWithoutAccountInput = {
    where: EmailScalarWhereInput
    data: XOR<EmailUpdateManyMutationInput, EmailUncheckedUpdateManyWithoutAccountInput>
  }

  export type EmailScalarWhereInput = {
    AND?: EmailScalarWhereInput | EmailScalarWhereInput[]
    OR?: EmailScalarWhereInput[]
    NOT?: EmailScalarWhereInput | EmailScalarWhereInput[]
    id?: StringFilter<"Email"> | string
    orgId?: StringFilter<"Email"> | string
    accountId?: StringFilter<"Email"> | string
    threadId?: StringNullableFilter<"Email"> | string | null
    messageId?: StringFilter<"Email"> | string
    subject?: StringNullableFilter<"Email"> | string | null
    fromName?: StringNullableFilter<"Email"> | string | null
    fromEmail?: StringFilter<"Email"> | string
    toEmails?: StringNullableListFilter<"Email">
    ccEmails?: StringNullableListFilter<"Email">
    bccEmails?: StringNullableListFilter<"Email">
    replyToEmails?: StringNullableListFilter<"Email">
    textBody?: StringNullableFilter<"Email"> | string | null
    htmlBody?: StringNullableFilter<"Email"> | string | null
    snippet?: StringNullableFilter<"Email"> | string | null
    hasAttachments?: BoolFilter<"Email"> | boolean
    attachmentCount?: IntFilter<"Email"> | number
    labels?: StringNullableListFilter<"Email">
    isRead?: BoolFilter<"Email"> | boolean
    isStarred?: BoolFilter<"Email"> | boolean
    isImportant?: BoolFilter<"Email"> | boolean
    direction?: StringFilter<"Email"> | string
    sentAt?: DateTimeFilter<"Email"> | Date | string
    receivedAt?: DateTimeFilter<"Email"> | Date | string
    rawHeaders?: JsonNullableFilter<"Email">
    inReplyTo?: StringNullableFilter<"Email"> | string | null
    references?: StringNullableListFilter<"Email">
    relatedDealId?: StringNullableFilter<"Email"> | string | null
    relatedContactId?: StringNullableFilter<"Email"> | string | null
    createdAt?: DateTimeFilter<"Email"> | Date | string
    updatedAt?: DateTimeFilter<"Email"> | Date | string
  }

  export type EmailThreadUpsertWithWhereUniqueWithoutAccountInput = {
    where: EmailThreadWhereUniqueInput
    update: XOR<EmailThreadUpdateWithoutAccountInput, EmailThreadUncheckedUpdateWithoutAccountInput>
    create: XOR<EmailThreadCreateWithoutAccountInput, EmailThreadUncheckedCreateWithoutAccountInput>
  }

  export type EmailThreadUpdateWithWhereUniqueWithoutAccountInput = {
    where: EmailThreadWhereUniqueInput
    data: XOR<EmailThreadUpdateWithoutAccountInput, EmailThreadUncheckedUpdateWithoutAccountInput>
  }

  export type EmailThreadUpdateManyWithWhereWithoutAccountInput = {
    where: EmailThreadScalarWhereInput
    data: XOR<EmailThreadUpdateManyMutationInput, EmailThreadUncheckedUpdateManyWithoutAccountInput>
  }

  export type EmailThreadScalarWhereInput = {
    AND?: EmailThreadScalarWhereInput | EmailThreadScalarWhereInput[]
    OR?: EmailThreadScalarWhereInput[]
    NOT?: EmailThreadScalarWhereInput | EmailThreadScalarWhereInput[]
    id?: StringFilter<"EmailThread"> | string
    orgId?: StringFilter<"EmailThread"> | string
    accountId?: StringFilter<"EmailThread"> | string
    subject?: StringNullableFilter<"EmailThread"> | string | null
    firstMessageId?: StringFilter<"EmailThread"> | string
    lastMessageId?: StringNullableFilter<"EmailThread"> | string | null
    messageCount?: IntFilter<"EmailThread"> | number
    participants?: StringNullableListFilter<"EmailThread">
    lastMessageAt?: DateTimeFilter<"EmailThread"> | Date | string
    relatedDealId?: StringNullableFilter<"EmailThread"> | string | null
    createdAt?: DateTimeFilter<"EmailThread"> | Date | string
    updatedAt?: DateTimeFilter<"EmailThread"> | Date | string
  }

  export type SyncLogUpsertWithWhereUniqueWithoutAccountInput = {
    where: SyncLogWhereUniqueInput
    update: XOR<SyncLogUpdateWithoutAccountInput, SyncLogUncheckedUpdateWithoutAccountInput>
    create: XOR<SyncLogCreateWithoutAccountInput, SyncLogUncheckedCreateWithoutAccountInput>
  }

  export type SyncLogUpdateWithWhereUniqueWithoutAccountInput = {
    where: SyncLogWhereUniqueInput
    data: XOR<SyncLogUpdateWithoutAccountInput, SyncLogUncheckedUpdateWithoutAccountInput>
  }

  export type SyncLogUpdateManyWithWhereWithoutAccountInput = {
    where: SyncLogScalarWhereInput
    data: XOR<SyncLogUpdateManyMutationInput, SyncLogUncheckedUpdateManyWithoutAccountInput>
  }

  export type SyncLogScalarWhereInput = {
    AND?: SyncLogScalarWhereInput | SyncLogScalarWhereInput[]
    OR?: SyncLogScalarWhereInput[]
    NOT?: SyncLogScalarWhereInput | SyncLogScalarWhereInput[]
    id?: StringFilter<"SyncLog"> | string
    orgId?: StringFilter<"SyncLog"> | string
    accountId?: StringFilter<"SyncLog"> | string
    status?: StringFilter<"SyncLog"> | string
    emailsSynced?: IntFilter<"SyncLog"> | number
    threadsSynced?: IntFilter<"SyncLog"> | number
    errors?: StringNullableListFilter<"SyncLog">
    startedAt?: DateTimeFilter<"SyncLog"> | Date | string
    completedAt?: DateTimeNullableFilter<"SyncLog"> | Date | string | null
    duration?: IntNullableFilter<"SyncLog"> | number | null
  }

  export type EmailAccountCreateWithoutEmailsInput = {
    id?: string
    orgId: string
    userId: string
    email: string
    provider: string
    isConnected?: boolean
    lastSyncAt?: Date | string | null
    syncStatus?: string
    errorMessage?: string | null
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    threads?: EmailThreadCreateNestedManyWithoutAccountInput
    syncLogs?: SyncLogCreateNestedManyWithoutAccountInput
  }

  export type EmailAccountUncheckedCreateWithoutEmailsInput = {
    id?: string
    orgId: string
    userId: string
    email: string
    provider: string
    isConnected?: boolean
    lastSyncAt?: Date | string | null
    syncStatus?: string
    errorMessage?: string | null
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    threads?: EmailThreadUncheckedCreateNestedManyWithoutAccountInput
    syncLogs?: SyncLogUncheckedCreateNestedManyWithoutAccountInput
  }

  export type EmailAccountCreateOrConnectWithoutEmailsInput = {
    where: EmailAccountWhereUniqueInput
    create: XOR<EmailAccountCreateWithoutEmailsInput, EmailAccountUncheckedCreateWithoutEmailsInput>
  }

  export type EmailThreadCreateWithoutEmailsInput = {
    id?: string
    orgId: string
    subject?: string | null
    firstMessageId: string
    lastMessageId?: string | null
    messageCount?: number
    participants?: EmailThreadCreateparticipantsInput | string[]
    lastMessageAt: Date | string
    relatedDealId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account: EmailAccountCreateNestedOneWithoutThreadsInput
  }

  export type EmailThreadUncheckedCreateWithoutEmailsInput = {
    id?: string
    orgId: string
    accountId: string
    subject?: string | null
    firstMessageId: string
    lastMessageId?: string | null
    messageCount?: number
    participants?: EmailThreadCreateparticipantsInput | string[]
    lastMessageAt: Date | string
    relatedDealId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailThreadCreateOrConnectWithoutEmailsInput = {
    where: EmailThreadWhereUniqueInput
    create: XOR<EmailThreadCreateWithoutEmailsInput, EmailThreadUncheckedCreateWithoutEmailsInput>
  }

  export type EmailAccountUpsertWithoutEmailsInput = {
    update: XOR<EmailAccountUpdateWithoutEmailsInput, EmailAccountUncheckedUpdateWithoutEmailsInput>
    create: XOR<EmailAccountCreateWithoutEmailsInput, EmailAccountUncheckedCreateWithoutEmailsInput>
    where?: EmailAccountWhereInput
  }

  export type EmailAccountUpdateToOneWithWhereWithoutEmailsInput = {
    where?: EmailAccountWhereInput
    data: XOR<EmailAccountUpdateWithoutEmailsInput, EmailAccountUncheckedUpdateWithoutEmailsInput>
  }

  export type EmailAccountUpdateWithoutEmailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncStatus?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    threads?: EmailThreadUpdateManyWithoutAccountNestedInput
    syncLogs?: SyncLogUpdateManyWithoutAccountNestedInput
  }

  export type EmailAccountUncheckedUpdateWithoutEmailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncStatus?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    threads?: EmailThreadUncheckedUpdateManyWithoutAccountNestedInput
    syncLogs?: SyncLogUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type EmailThreadUpsertWithoutEmailsInput = {
    update: XOR<EmailThreadUpdateWithoutEmailsInput, EmailThreadUncheckedUpdateWithoutEmailsInput>
    create: XOR<EmailThreadCreateWithoutEmailsInput, EmailThreadUncheckedCreateWithoutEmailsInput>
    where?: EmailThreadWhereInput
  }

  export type EmailThreadUpdateToOneWithWhereWithoutEmailsInput = {
    where?: EmailThreadWhereInput
    data: XOR<EmailThreadUpdateWithoutEmailsInput, EmailThreadUncheckedUpdateWithoutEmailsInput>
  }

  export type EmailThreadUpdateWithoutEmailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    firstMessageId?: StringFieldUpdateOperationsInput | string
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    messageCount?: IntFieldUpdateOperationsInput | number
    participants?: EmailThreadUpdateparticipantsInput | string[]
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedDealId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: EmailAccountUpdateOneRequiredWithoutThreadsNestedInput
  }

  export type EmailThreadUncheckedUpdateWithoutEmailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    firstMessageId?: StringFieldUpdateOperationsInput | string
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    messageCount?: IntFieldUpdateOperationsInput | number
    participants?: EmailThreadUpdateparticipantsInput | string[]
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedDealId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailCreateWithoutThreadInput = {
    id?: string
    orgId: string
    messageId: string
    subject?: string | null
    fromName?: string | null
    fromEmail: string
    toEmails?: EmailCreatetoEmailsInput | string[]
    ccEmails?: EmailCreateccEmailsInput | string[]
    bccEmails?: EmailCreatebccEmailsInput | string[]
    replyToEmails?: EmailCreatereplyToEmailsInput | string[]
    textBody?: string | null
    htmlBody?: string | null
    snippet?: string | null
    hasAttachments?: boolean
    attachmentCount?: number
    labels?: EmailCreatelabelsInput | string[]
    isRead?: boolean
    isStarred?: boolean
    isImportant?: boolean
    direction: string
    sentAt: Date | string
    receivedAt?: Date | string
    rawHeaders?: NullableJsonNullValueInput | InputJsonValue
    inReplyTo?: string | null
    references?: EmailCreatereferencesInput | string[]
    relatedDealId?: string | null
    relatedContactId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account: EmailAccountCreateNestedOneWithoutEmailsInput
  }

  export type EmailUncheckedCreateWithoutThreadInput = {
    id?: string
    orgId: string
    accountId: string
    messageId: string
    subject?: string | null
    fromName?: string | null
    fromEmail: string
    toEmails?: EmailCreatetoEmailsInput | string[]
    ccEmails?: EmailCreateccEmailsInput | string[]
    bccEmails?: EmailCreatebccEmailsInput | string[]
    replyToEmails?: EmailCreatereplyToEmailsInput | string[]
    textBody?: string | null
    htmlBody?: string | null
    snippet?: string | null
    hasAttachments?: boolean
    attachmentCount?: number
    labels?: EmailCreatelabelsInput | string[]
    isRead?: boolean
    isStarred?: boolean
    isImportant?: boolean
    direction: string
    sentAt: Date | string
    receivedAt?: Date | string
    rawHeaders?: NullableJsonNullValueInput | InputJsonValue
    inReplyTo?: string | null
    references?: EmailCreatereferencesInput | string[]
    relatedDealId?: string | null
    relatedContactId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailCreateOrConnectWithoutThreadInput = {
    where: EmailWhereUniqueInput
    create: XOR<EmailCreateWithoutThreadInput, EmailUncheckedCreateWithoutThreadInput>
  }

  export type EmailCreateManyThreadInputEnvelope = {
    data: EmailCreateManyThreadInput | EmailCreateManyThreadInput[]
    skipDuplicates?: boolean
  }

  export type EmailAccountCreateWithoutThreadsInput = {
    id?: string
    orgId: string
    userId: string
    email: string
    provider: string
    isConnected?: boolean
    lastSyncAt?: Date | string | null
    syncStatus?: string
    errorMessage?: string | null
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    emails?: EmailCreateNestedManyWithoutAccountInput
    syncLogs?: SyncLogCreateNestedManyWithoutAccountInput
  }

  export type EmailAccountUncheckedCreateWithoutThreadsInput = {
    id?: string
    orgId: string
    userId: string
    email: string
    provider: string
    isConnected?: boolean
    lastSyncAt?: Date | string | null
    syncStatus?: string
    errorMessage?: string | null
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    emails?: EmailUncheckedCreateNestedManyWithoutAccountInput
    syncLogs?: SyncLogUncheckedCreateNestedManyWithoutAccountInput
  }

  export type EmailAccountCreateOrConnectWithoutThreadsInput = {
    where: EmailAccountWhereUniqueInput
    create: XOR<EmailAccountCreateWithoutThreadsInput, EmailAccountUncheckedCreateWithoutThreadsInput>
  }

  export type EmailUpsertWithWhereUniqueWithoutThreadInput = {
    where: EmailWhereUniqueInput
    update: XOR<EmailUpdateWithoutThreadInput, EmailUncheckedUpdateWithoutThreadInput>
    create: XOR<EmailCreateWithoutThreadInput, EmailUncheckedCreateWithoutThreadInput>
  }

  export type EmailUpdateWithWhereUniqueWithoutThreadInput = {
    where: EmailWhereUniqueInput
    data: XOR<EmailUpdateWithoutThreadInput, EmailUncheckedUpdateWithoutThreadInput>
  }

  export type EmailUpdateManyWithWhereWithoutThreadInput = {
    where: EmailScalarWhereInput
    data: XOR<EmailUpdateManyMutationInput, EmailUncheckedUpdateManyWithoutThreadInput>
  }

  export type EmailAccountUpsertWithoutThreadsInput = {
    update: XOR<EmailAccountUpdateWithoutThreadsInput, EmailAccountUncheckedUpdateWithoutThreadsInput>
    create: XOR<EmailAccountCreateWithoutThreadsInput, EmailAccountUncheckedCreateWithoutThreadsInput>
    where?: EmailAccountWhereInput
  }

  export type EmailAccountUpdateToOneWithWhereWithoutThreadsInput = {
    where?: EmailAccountWhereInput
    data: XOR<EmailAccountUpdateWithoutThreadsInput, EmailAccountUncheckedUpdateWithoutThreadsInput>
  }

  export type EmailAccountUpdateWithoutThreadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncStatus?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailUpdateManyWithoutAccountNestedInput
    syncLogs?: SyncLogUpdateManyWithoutAccountNestedInput
  }

  export type EmailAccountUncheckedUpdateWithoutThreadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncStatus?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailUncheckedUpdateManyWithoutAccountNestedInput
    syncLogs?: SyncLogUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type EmailAccountCreateWithoutSyncLogsInput = {
    id?: string
    orgId: string
    userId: string
    email: string
    provider: string
    isConnected?: boolean
    lastSyncAt?: Date | string | null
    syncStatus?: string
    errorMessage?: string | null
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    emails?: EmailCreateNestedManyWithoutAccountInput
    threads?: EmailThreadCreateNestedManyWithoutAccountInput
  }

  export type EmailAccountUncheckedCreateWithoutSyncLogsInput = {
    id?: string
    orgId: string
    userId: string
    email: string
    provider: string
    isConnected?: boolean
    lastSyncAt?: Date | string | null
    syncStatus?: string
    errorMessage?: string | null
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    emails?: EmailUncheckedCreateNestedManyWithoutAccountInput
    threads?: EmailThreadUncheckedCreateNestedManyWithoutAccountInput
  }

  export type EmailAccountCreateOrConnectWithoutSyncLogsInput = {
    where: EmailAccountWhereUniqueInput
    create: XOR<EmailAccountCreateWithoutSyncLogsInput, EmailAccountUncheckedCreateWithoutSyncLogsInput>
  }

  export type EmailAccountUpsertWithoutSyncLogsInput = {
    update: XOR<EmailAccountUpdateWithoutSyncLogsInput, EmailAccountUncheckedUpdateWithoutSyncLogsInput>
    create: XOR<EmailAccountCreateWithoutSyncLogsInput, EmailAccountUncheckedCreateWithoutSyncLogsInput>
    where?: EmailAccountWhereInput
  }

  export type EmailAccountUpdateToOneWithWhereWithoutSyncLogsInput = {
    where?: EmailAccountWhereInput
    data: XOR<EmailAccountUpdateWithoutSyncLogsInput, EmailAccountUncheckedUpdateWithoutSyncLogsInput>
  }

  export type EmailAccountUpdateWithoutSyncLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncStatus?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailUpdateManyWithoutAccountNestedInput
    threads?: EmailThreadUpdateManyWithoutAccountNestedInput
  }

  export type EmailAccountUncheckedUpdateWithoutSyncLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncStatus?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailUncheckedUpdateManyWithoutAccountNestedInput
    threads?: EmailThreadUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type SequenceEnrollmentCreateWithoutSequenceInput = {
    id?: string
    orgId: string
    contactEmail: string
    contactId?: string | null
    dealId?: string | null
    status?: string
    currentStep?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    unsubscribedAt?: Date | string | null
    activities?: SequenceActivityCreateNestedManyWithoutEnrollmentInput
  }

  export type SequenceEnrollmentUncheckedCreateWithoutSequenceInput = {
    id?: string
    orgId: string
    contactEmail: string
    contactId?: string | null
    dealId?: string | null
    status?: string
    currentStep?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    unsubscribedAt?: Date | string | null
    activities?: SequenceActivityUncheckedCreateNestedManyWithoutEnrollmentInput
  }

  export type SequenceEnrollmentCreateOrConnectWithoutSequenceInput = {
    where: SequenceEnrollmentWhereUniqueInput
    create: XOR<SequenceEnrollmentCreateWithoutSequenceInput, SequenceEnrollmentUncheckedCreateWithoutSequenceInput>
  }

  export type SequenceEnrollmentCreateManySequenceInputEnvelope = {
    data: SequenceEnrollmentCreateManySequenceInput | SequenceEnrollmentCreateManySequenceInput[]
    skipDuplicates?: boolean
  }

  export type SequenceEnrollmentUpsertWithWhereUniqueWithoutSequenceInput = {
    where: SequenceEnrollmentWhereUniqueInput
    update: XOR<SequenceEnrollmentUpdateWithoutSequenceInput, SequenceEnrollmentUncheckedUpdateWithoutSequenceInput>
    create: XOR<SequenceEnrollmentCreateWithoutSequenceInput, SequenceEnrollmentUncheckedCreateWithoutSequenceInput>
  }

  export type SequenceEnrollmentUpdateWithWhereUniqueWithoutSequenceInput = {
    where: SequenceEnrollmentWhereUniqueInput
    data: XOR<SequenceEnrollmentUpdateWithoutSequenceInput, SequenceEnrollmentUncheckedUpdateWithoutSequenceInput>
  }

  export type SequenceEnrollmentUpdateManyWithWhereWithoutSequenceInput = {
    where: SequenceEnrollmentScalarWhereInput
    data: XOR<SequenceEnrollmentUpdateManyMutationInput, SequenceEnrollmentUncheckedUpdateManyWithoutSequenceInput>
  }

  export type SequenceEnrollmentScalarWhereInput = {
    AND?: SequenceEnrollmentScalarWhereInput | SequenceEnrollmentScalarWhereInput[]
    OR?: SequenceEnrollmentScalarWhereInput[]
    NOT?: SequenceEnrollmentScalarWhereInput | SequenceEnrollmentScalarWhereInput[]
    id?: StringFilter<"SequenceEnrollment"> | string
    orgId?: StringFilter<"SequenceEnrollment"> | string
    sequenceId?: StringFilter<"SequenceEnrollment"> | string
    contactEmail?: StringFilter<"SequenceEnrollment"> | string
    contactId?: StringNullableFilter<"SequenceEnrollment"> | string | null
    dealId?: StringNullableFilter<"SequenceEnrollment"> | string | null
    status?: StringFilter<"SequenceEnrollment"> | string
    currentStep?: IntFilter<"SequenceEnrollment"> | number
    startedAt?: DateTimeFilter<"SequenceEnrollment"> | Date | string
    completedAt?: DateTimeNullableFilter<"SequenceEnrollment"> | Date | string | null
    unsubscribedAt?: DateTimeNullableFilter<"SequenceEnrollment"> | Date | string | null
  }

  export type EmailSequenceCreateWithoutEnrollmentsInput = {
    id?: string
    orgId: string
    name: string
    description?: string | null
    isActive?: boolean
    steps: JsonNullValueInput | InputJsonValue
    totalDuration: number
    enrollmentCount?: number
    completionRate?: number
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailSequenceUncheckedCreateWithoutEnrollmentsInput = {
    id?: string
    orgId: string
    name: string
    description?: string | null
    isActive?: boolean
    steps: JsonNullValueInput | InputJsonValue
    totalDuration: number
    enrollmentCount?: number
    completionRate?: number
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailSequenceCreateOrConnectWithoutEnrollmentsInput = {
    where: EmailSequenceWhereUniqueInput
    create: XOR<EmailSequenceCreateWithoutEnrollmentsInput, EmailSequenceUncheckedCreateWithoutEnrollmentsInput>
  }

  export type SequenceActivityCreateWithoutEnrollmentInput = {
    id?: string
    orgId: string
    stepNumber: number
    type: string
    status?: string
    scheduledAt: Date | string
    sentAt?: Date | string | null
    openedAt?: Date | string | null
    clickedAt?: Date | string | null
    errorMessage?: string | null
  }

  export type SequenceActivityUncheckedCreateWithoutEnrollmentInput = {
    id?: string
    orgId: string
    stepNumber: number
    type: string
    status?: string
    scheduledAt: Date | string
    sentAt?: Date | string | null
    openedAt?: Date | string | null
    clickedAt?: Date | string | null
    errorMessage?: string | null
  }

  export type SequenceActivityCreateOrConnectWithoutEnrollmentInput = {
    where: SequenceActivityWhereUniqueInput
    create: XOR<SequenceActivityCreateWithoutEnrollmentInput, SequenceActivityUncheckedCreateWithoutEnrollmentInput>
  }

  export type SequenceActivityCreateManyEnrollmentInputEnvelope = {
    data: SequenceActivityCreateManyEnrollmentInput | SequenceActivityCreateManyEnrollmentInput[]
    skipDuplicates?: boolean
  }

  export type EmailSequenceUpsertWithoutEnrollmentsInput = {
    update: XOR<EmailSequenceUpdateWithoutEnrollmentsInput, EmailSequenceUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<EmailSequenceCreateWithoutEnrollmentsInput, EmailSequenceUncheckedCreateWithoutEnrollmentsInput>
    where?: EmailSequenceWhereInput
  }

  export type EmailSequenceUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: EmailSequenceWhereInput
    data: XOR<EmailSequenceUpdateWithoutEnrollmentsInput, EmailSequenceUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type EmailSequenceUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    steps?: JsonNullValueInput | InputJsonValue
    totalDuration?: IntFieldUpdateOperationsInput | number
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    completionRate?: FloatFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailSequenceUncheckedUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    steps?: JsonNullValueInput | InputJsonValue
    totalDuration?: IntFieldUpdateOperationsInput | number
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    completionRate?: FloatFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SequenceActivityUpsertWithWhereUniqueWithoutEnrollmentInput = {
    where: SequenceActivityWhereUniqueInput
    update: XOR<SequenceActivityUpdateWithoutEnrollmentInput, SequenceActivityUncheckedUpdateWithoutEnrollmentInput>
    create: XOR<SequenceActivityCreateWithoutEnrollmentInput, SequenceActivityUncheckedCreateWithoutEnrollmentInput>
  }

  export type SequenceActivityUpdateWithWhereUniqueWithoutEnrollmentInput = {
    where: SequenceActivityWhereUniqueInput
    data: XOR<SequenceActivityUpdateWithoutEnrollmentInput, SequenceActivityUncheckedUpdateWithoutEnrollmentInput>
  }

  export type SequenceActivityUpdateManyWithWhereWithoutEnrollmentInput = {
    where: SequenceActivityScalarWhereInput
    data: XOR<SequenceActivityUpdateManyMutationInput, SequenceActivityUncheckedUpdateManyWithoutEnrollmentInput>
  }

  export type SequenceActivityScalarWhereInput = {
    AND?: SequenceActivityScalarWhereInput | SequenceActivityScalarWhereInput[]
    OR?: SequenceActivityScalarWhereInput[]
    NOT?: SequenceActivityScalarWhereInput | SequenceActivityScalarWhereInput[]
    id?: StringFilter<"SequenceActivity"> | string
    orgId?: StringFilter<"SequenceActivity"> | string
    enrollmentId?: StringFilter<"SequenceActivity"> | string
    stepNumber?: IntFilter<"SequenceActivity"> | number
    type?: StringFilter<"SequenceActivity"> | string
    status?: StringFilter<"SequenceActivity"> | string
    scheduledAt?: DateTimeFilter<"SequenceActivity"> | Date | string
    sentAt?: DateTimeNullableFilter<"SequenceActivity"> | Date | string | null
    openedAt?: DateTimeNullableFilter<"SequenceActivity"> | Date | string | null
    clickedAt?: DateTimeNullableFilter<"SequenceActivity"> | Date | string | null
    errorMessage?: StringNullableFilter<"SequenceActivity"> | string | null
  }

  export type SequenceEnrollmentCreateWithoutActivitiesInput = {
    id?: string
    orgId: string
    contactEmail: string
    contactId?: string | null
    dealId?: string | null
    status?: string
    currentStep?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    unsubscribedAt?: Date | string | null
    sequence: EmailSequenceCreateNestedOneWithoutEnrollmentsInput
  }

  export type SequenceEnrollmentUncheckedCreateWithoutActivitiesInput = {
    id?: string
    orgId: string
    sequenceId: string
    contactEmail: string
    contactId?: string | null
    dealId?: string | null
    status?: string
    currentStep?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    unsubscribedAt?: Date | string | null
  }

  export type SequenceEnrollmentCreateOrConnectWithoutActivitiesInput = {
    where: SequenceEnrollmentWhereUniqueInput
    create: XOR<SequenceEnrollmentCreateWithoutActivitiesInput, SequenceEnrollmentUncheckedCreateWithoutActivitiesInput>
  }

  export type SequenceEnrollmentUpsertWithoutActivitiesInput = {
    update: XOR<SequenceEnrollmentUpdateWithoutActivitiesInput, SequenceEnrollmentUncheckedUpdateWithoutActivitiesInput>
    create: XOR<SequenceEnrollmentCreateWithoutActivitiesInput, SequenceEnrollmentUncheckedCreateWithoutActivitiesInput>
    where?: SequenceEnrollmentWhereInput
  }

  export type SequenceEnrollmentUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: SequenceEnrollmentWhereInput
    data: XOR<SequenceEnrollmentUpdateWithoutActivitiesInput, SequenceEnrollmentUncheckedUpdateWithoutActivitiesInput>
  }

  export type SequenceEnrollmentUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    dealId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unsubscribedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sequence?: EmailSequenceUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type SequenceEnrollmentUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    sequenceId?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    dealId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unsubscribedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmailCreateManyAccountInput = {
    id?: string
    orgId: string
    threadId?: string | null
    messageId: string
    subject?: string | null
    fromName?: string | null
    fromEmail: string
    toEmails?: EmailCreatetoEmailsInput | string[]
    ccEmails?: EmailCreateccEmailsInput | string[]
    bccEmails?: EmailCreatebccEmailsInput | string[]
    replyToEmails?: EmailCreatereplyToEmailsInput | string[]
    textBody?: string | null
    htmlBody?: string | null
    snippet?: string | null
    hasAttachments?: boolean
    attachmentCount?: number
    labels?: EmailCreatelabelsInput | string[]
    isRead?: boolean
    isStarred?: boolean
    isImportant?: boolean
    direction: string
    sentAt: Date | string
    receivedAt?: Date | string
    rawHeaders?: NullableJsonNullValueInput | InputJsonValue
    inReplyTo?: string | null
    references?: EmailCreatereferencesInput | string[]
    relatedDealId?: string | null
    relatedContactId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailThreadCreateManyAccountInput = {
    id?: string
    orgId: string
    subject?: string | null
    firstMessageId: string
    lastMessageId?: string | null
    messageCount?: number
    participants?: EmailThreadCreateparticipantsInput | string[]
    lastMessageAt: Date | string
    relatedDealId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SyncLogCreateManyAccountInput = {
    id?: string
    orgId: string
    status: string
    emailsSynced?: number
    threadsSynced?: number
    errors?: SyncLogCreateerrorsInput | string[]
    startedAt?: Date | string
    completedAt?: Date | string | null
    duration?: number | null
  }

  export type EmailUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    fromName?: NullableStringFieldUpdateOperationsInput | string | null
    fromEmail?: StringFieldUpdateOperationsInput | string
    toEmails?: EmailUpdatetoEmailsInput | string[]
    ccEmails?: EmailUpdateccEmailsInput | string[]
    bccEmails?: EmailUpdatebccEmailsInput | string[]
    replyToEmails?: EmailUpdatereplyToEmailsInput | string[]
    textBody?: NullableStringFieldUpdateOperationsInput | string | null
    htmlBody?: NullableStringFieldUpdateOperationsInput | string | null
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    attachmentCount?: IntFieldUpdateOperationsInput | number
    labels?: EmailUpdatelabelsInput | string[]
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isStarred?: BoolFieldUpdateOperationsInput | boolean
    isImportant?: BoolFieldUpdateOperationsInput | boolean
    direction?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rawHeaders?: NullableJsonNullValueInput | InputJsonValue
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: EmailUpdatereferencesInput | string[]
    relatedDealId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedContactId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thread?: EmailThreadUpdateOneWithoutEmailsNestedInput
  }

  export type EmailUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    threadId?: NullableStringFieldUpdateOperationsInput | string | null
    messageId?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    fromName?: NullableStringFieldUpdateOperationsInput | string | null
    fromEmail?: StringFieldUpdateOperationsInput | string
    toEmails?: EmailUpdatetoEmailsInput | string[]
    ccEmails?: EmailUpdateccEmailsInput | string[]
    bccEmails?: EmailUpdatebccEmailsInput | string[]
    replyToEmails?: EmailUpdatereplyToEmailsInput | string[]
    textBody?: NullableStringFieldUpdateOperationsInput | string | null
    htmlBody?: NullableStringFieldUpdateOperationsInput | string | null
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    attachmentCount?: IntFieldUpdateOperationsInput | number
    labels?: EmailUpdatelabelsInput | string[]
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isStarred?: BoolFieldUpdateOperationsInput | boolean
    isImportant?: BoolFieldUpdateOperationsInput | boolean
    direction?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rawHeaders?: NullableJsonNullValueInput | InputJsonValue
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: EmailUpdatereferencesInput | string[]
    relatedDealId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedContactId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    threadId?: NullableStringFieldUpdateOperationsInput | string | null
    messageId?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    fromName?: NullableStringFieldUpdateOperationsInput | string | null
    fromEmail?: StringFieldUpdateOperationsInput | string
    toEmails?: EmailUpdatetoEmailsInput | string[]
    ccEmails?: EmailUpdateccEmailsInput | string[]
    bccEmails?: EmailUpdatebccEmailsInput | string[]
    replyToEmails?: EmailUpdatereplyToEmailsInput | string[]
    textBody?: NullableStringFieldUpdateOperationsInput | string | null
    htmlBody?: NullableStringFieldUpdateOperationsInput | string | null
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    attachmentCount?: IntFieldUpdateOperationsInput | number
    labels?: EmailUpdatelabelsInput | string[]
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isStarred?: BoolFieldUpdateOperationsInput | boolean
    isImportant?: BoolFieldUpdateOperationsInput | boolean
    direction?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rawHeaders?: NullableJsonNullValueInput | InputJsonValue
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: EmailUpdatereferencesInput | string[]
    relatedDealId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedContactId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailThreadUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    firstMessageId?: StringFieldUpdateOperationsInput | string
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    messageCount?: IntFieldUpdateOperationsInput | number
    participants?: EmailThreadUpdateparticipantsInput | string[]
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedDealId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailUpdateManyWithoutThreadNestedInput
  }

  export type EmailThreadUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    firstMessageId?: StringFieldUpdateOperationsInput | string
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    messageCount?: IntFieldUpdateOperationsInput | number
    participants?: EmailThreadUpdateparticipantsInput | string[]
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedDealId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailUncheckedUpdateManyWithoutThreadNestedInput
  }

  export type EmailThreadUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    firstMessageId?: StringFieldUpdateOperationsInput | string
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    messageCount?: IntFieldUpdateOperationsInput | number
    participants?: EmailThreadUpdateparticipantsInput | string[]
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedDealId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncLogUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    emailsSynced?: IntFieldUpdateOperationsInput | number
    threadsSynced?: IntFieldUpdateOperationsInput | number
    errors?: SyncLogUpdateerrorsInput | string[]
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SyncLogUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    emailsSynced?: IntFieldUpdateOperationsInput | number
    threadsSynced?: IntFieldUpdateOperationsInput | number
    errors?: SyncLogUpdateerrorsInput | string[]
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SyncLogUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    emailsSynced?: IntFieldUpdateOperationsInput | number
    threadsSynced?: IntFieldUpdateOperationsInput | number
    errors?: SyncLogUpdateerrorsInput | string[]
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EmailCreateManyThreadInput = {
    id?: string
    orgId: string
    accountId: string
    messageId: string
    subject?: string | null
    fromName?: string | null
    fromEmail: string
    toEmails?: EmailCreatetoEmailsInput | string[]
    ccEmails?: EmailCreateccEmailsInput | string[]
    bccEmails?: EmailCreatebccEmailsInput | string[]
    replyToEmails?: EmailCreatereplyToEmailsInput | string[]
    textBody?: string | null
    htmlBody?: string | null
    snippet?: string | null
    hasAttachments?: boolean
    attachmentCount?: number
    labels?: EmailCreatelabelsInput | string[]
    isRead?: boolean
    isStarred?: boolean
    isImportant?: boolean
    direction: string
    sentAt: Date | string
    receivedAt?: Date | string
    rawHeaders?: NullableJsonNullValueInput | InputJsonValue
    inReplyTo?: string | null
    references?: EmailCreatereferencesInput | string[]
    relatedDealId?: string | null
    relatedContactId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailUpdateWithoutThreadInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    fromName?: NullableStringFieldUpdateOperationsInput | string | null
    fromEmail?: StringFieldUpdateOperationsInput | string
    toEmails?: EmailUpdatetoEmailsInput | string[]
    ccEmails?: EmailUpdateccEmailsInput | string[]
    bccEmails?: EmailUpdatebccEmailsInput | string[]
    replyToEmails?: EmailUpdatereplyToEmailsInput | string[]
    textBody?: NullableStringFieldUpdateOperationsInput | string | null
    htmlBody?: NullableStringFieldUpdateOperationsInput | string | null
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    attachmentCount?: IntFieldUpdateOperationsInput | number
    labels?: EmailUpdatelabelsInput | string[]
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isStarred?: BoolFieldUpdateOperationsInput | boolean
    isImportant?: BoolFieldUpdateOperationsInput | boolean
    direction?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rawHeaders?: NullableJsonNullValueInput | InputJsonValue
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: EmailUpdatereferencesInput | string[]
    relatedDealId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedContactId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: EmailAccountUpdateOneRequiredWithoutEmailsNestedInput
  }

  export type EmailUncheckedUpdateWithoutThreadInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    fromName?: NullableStringFieldUpdateOperationsInput | string | null
    fromEmail?: StringFieldUpdateOperationsInput | string
    toEmails?: EmailUpdatetoEmailsInput | string[]
    ccEmails?: EmailUpdateccEmailsInput | string[]
    bccEmails?: EmailUpdatebccEmailsInput | string[]
    replyToEmails?: EmailUpdatereplyToEmailsInput | string[]
    textBody?: NullableStringFieldUpdateOperationsInput | string | null
    htmlBody?: NullableStringFieldUpdateOperationsInput | string | null
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    attachmentCount?: IntFieldUpdateOperationsInput | number
    labels?: EmailUpdatelabelsInput | string[]
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isStarred?: BoolFieldUpdateOperationsInput | boolean
    isImportant?: BoolFieldUpdateOperationsInput | boolean
    direction?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rawHeaders?: NullableJsonNullValueInput | InputJsonValue
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: EmailUpdatereferencesInput | string[]
    relatedDealId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedContactId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailUncheckedUpdateManyWithoutThreadInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    fromName?: NullableStringFieldUpdateOperationsInput | string | null
    fromEmail?: StringFieldUpdateOperationsInput | string
    toEmails?: EmailUpdatetoEmailsInput | string[]
    ccEmails?: EmailUpdateccEmailsInput | string[]
    bccEmails?: EmailUpdatebccEmailsInput | string[]
    replyToEmails?: EmailUpdatereplyToEmailsInput | string[]
    textBody?: NullableStringFieldUpdateOperationsInput | string | null
    htmlBody?: NullableStringFieldUpdateOperationsInput | string | null
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    attachmentCount?: IntFieldUpdateOperationsInput | number
    labels?: EmailUpdatelabelsInput | string[]
    isRead?: BoolFieldUpdateOperationsInput | boolean
    isStarred?: BoolFieldUpdateOperationsInput | boolean
    isImportant?: BoolFieldUpdateOperationsInput | boolean
    direction?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rawHeaders?: NullableJsonNullValueInput | InputJsonValue
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: EmailUpdatereferencesInput | string[]
    relatedDealId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedContactId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SequenceEnrollmentCreateManySequenceInput = {
    id?: string
    orgId: string
    contactEmail: string
    contactId?: string | null
    dealId?: string | null
    status?: string
    currentStep?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    unsubscribedAt?: Date | string | null
  }

  export type SequenceEnrollmentUpdateWithoutSequenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    dealId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unsubscribedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activities?: SequenceActivityUpdateManyWithoutEnrollmentNestedInput
  }

  export type SequenceEnrollmentUncheckedUpdateWithoutSequenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    dealId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unsubscribedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activities?: SequenceActivityUncheckedUpdateManyWithoutEnrollmentNestedInput
  }

  export type SequenceEnrollmentUncheckedUpdateManyWithoutSequenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    dealId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unsubscribedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SequenceActivityCreateManyEnrollmentInput = {
    id?: string
    orgId: string
    stepNumber: number
    type: string
    status?: string
    scheduledAt: Date | string
    sentAt?: Date | string | null
    openedAt?: Date | string | null
    clickedAt?: Date | string | null
    errorMessage?: string | null
  }

  export type SequenceActivityUpdateWithoutEnrollmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clickedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SequenceActivityUncheckedUpdateWithoutEnrollmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clickedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SequenceActivityUncheckedUpdateManyWithoutEnrollmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clickedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
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