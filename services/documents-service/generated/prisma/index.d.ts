
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
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model DocumentRecipient
 * 
 */
export type DocumentRecipient = $Result.DefaultSelection<Prisma.$DocumentRecipientPayload>
/**
 * Model DocumentActivity
 * 
 */
export type DocumentActivity = $Result.DefaultSelection<Prisma.$DocumentActivityPayload>
/**
 * Model ContactWaiver
 * 
 */
export type ContactWaiver = $Result.DefaultSelection<Prisma.$ContactWaiverPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Documents
 * const documents = await prisma.document.findMany()
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
   * // Fetch zero or more Documents
   * const documents = await prisma.document.findMany()
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
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentRecipient`: Exposes CRUD operations for the **DocumentRecipient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentRecipients
    * const documentRecipients = await prisma.documentRecipient.findMany()
    * ```
    */
  get documentRecipient(): Prisma.DocumentRecipientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentActivity`: Exposes CRUD operations for the **DocumentActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentActivities
    * const documentActivities = await prisma.documentActivity.findMany()
    * ```
    */
  get documentActivity(): Prisma.DocumentActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactWaiver`: Exposes CRUD operations for the **ContactWaiver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactWaivers
    * const contactWaivers = await prisma.contactWaiver.findMany()
    * ```
    */
  get contactWaiver(): Prisma.ContactWaiverDelegate<ExtArgs, ClientOptions>;
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
    Document: 'Document',
    DocumentRecipient: 'DocumentRecipient',
    DocumentActivity: 'DocumentActivity',
    ContactWaiver: 'ContactWaiver'
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
      modelProps: "document" | "documentRecipient" | "documentActivity" | "contactWaiver"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      DocumentRecipient: {
        payload: Prisma.$DocumentRecipientPayload<ExtArgs>
        fields: Prisma.DocumentRecipientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentRecipientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRecipientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentRecipientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRecipientPayload>
          }
          findFirst: {
            args: Prisma.DocumentRecipientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRecipientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentRecipientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRecipientPayload>
          }
          findMany: {
            args: Prisma.DocumentRecipientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRecipientPayload>[]
          }
          create: {
            args: Prisma.DocumentRecipientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRecipientPayload>
          }
          createMany: {
            args: Prisma.DocumentRecipientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentRecipientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRecipientPayload>[]
          }
          delete: {
            args: Prisma.DocumentRecipientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRecipientPayload>
          }
          update: {
            args: Prisma.DocumentRecipientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRecipientPayload>
          }
          deleteMany: {
            args: Prisma.DocumentRecipientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentRecipientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentRecipientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRecipientPayload>[]
          }
          upsert: {
            args: Prisma.DocumentRecipientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentRecipientPayload>
          }
          aggregate: {
            args: Prisma.DocumentRecipientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentRecipient>
          }
          groupBy: {
            args: Prisma.DocumentRecipientGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentRecipientGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentRecipientCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentRecipientCountAggregateOutputType> | number
          }
        }
      }
      DocumentActivity: {
        payload: Prisma.$DocumentActivityPayload<ExtArgs>
        fields: Prisma.DocumentActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentActivityPayload>
          }
          findFirst: {
            args: Prisma.DocumentActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentActivityPayload>
          }
          findMany: {
            args: Prisma.DocumentActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentActivityPayload>[]
          }
          create: {
            args: Prisma.DocumentActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentActivityPayload>
          }
          createMany: {
            args: Prisma.DocumentActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentActivityPayload>[]
          }
          delete: {
            args: Prisma.DocumentActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentActivityPayload>
          }
          update: {
            args: Prisma.DocumentActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentActivityPayload>
          }
          deleteMany: {
            args: Prisma.DocumentActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentActivityPayload>[]
          }
          upsert: {
            args: Prisma.DocumentActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentActivityPayload>
          }
          aggregate: {
            args: Prisma.DocumentActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentActivity>
          }
          groupBy: {
            args: Prisma.DocumentActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentActivityCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentActivityCountAggregateOutputType> | number
          }
        }
      }
      ContactWaiver: {
        payload: Prisma.$ContactWaiverPayload<ExtArgs>
        fields: Prisma.ContactWaiverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactWaiverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactWaiverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactWaiverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactWaiverPayload>
          }
          findFirst: {
            args: Prisma.ContactWaiverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactWaiverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactWaiverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactWaiverPayload>
          }
          findMany: {
            args: Prisma.ContactWaiverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactWaiverPayload>[]
          }
          create: {
            args: Prisma.ContactWaiverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactWaiverPayload>
          }
          createMany: {
            args: Prisma.ContactWaiverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactWaiverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactWaiverPayload>[]
          }
          delete: {
            args: Prisma.ContactWaiverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactWaiverPayload>
          }
          update: {
            args: Prisma.ContactWaiverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactWaiverPayload>
          }
          deleteMany: {
            args: Prisma.ContactWaiverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactWaiverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactWaiverUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactWaiverPayload>[]
          }
          upsert: {
            args: Prisma.ContactWaiverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactWaiverPayload>
          }
          aggregate: {
            args: Prisma.ContactWaiverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactWaiver>
          }
          groupBy: {
            args: Prisma.ContactWaiverGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactWaiverGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactWaiverCountArgs<ExtArgs>
            result: $Utils.Optional<ContactWaiverCountAggregateOutputType> | number
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
    document?: DocumentOmit
    documentRecipient?: DocumentRecipientOmit
    documentActivity?: DocumentActivityOmit
    contactWaiver?: ContactWaiverOmit
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
   * Count Type DocumentCountOutputType
   */

  export type DocumentCountOutputType = {
    recipients: number
    activities: number
  }

  export type DocumentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipients?: boolean | DocumentCountOutputTypeCountRecipientsArgs
    activities?: boolean | DocumentCountOutputTypeCountActivitiesArgs
  }

  // Custom InputTypes
  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCountOutputType
     */
    select?: DocumentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountRecipientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentRecipientWhereInput
  }

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentActivityWhereInput
  }


  /**
   * Count Type DocumentRecipientCountOutputType
   */

  export type DocumentRecipientCountOutputType = {
    activities: number
  }

  export type DocumentRecipientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | DocumentRecipientCountOutputTypeCountActivitiesArgs
  }

  // Custom InputTypes
  /**
   * DocumentRecipientCountOutputType without action
   */
  export type DocumentRecipientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRecipientCountOutputType
     */
    select?: DocumentRecipientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentRecipientCountOutputType without action
   */
  export type DocumentRecipientCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentActivityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    org_id: string | null
    created_by_user_id: string | null
    name: string | null
    cloud_url: string | null
    type: string | null
    status: string | null
    is_deleted: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    org_id: string | null
    created_by_user_id: string | null
    name: string | null
    cloud_url: string | null
    type: string | null
    status: string | null
    is_deleted: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    org_id: number
    created_by_user_id: number
    name: number
    cloud_url: number
    type: number
    status: number
    is_deleted: number
    metadata: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DocumentMinAggregateInputType = {
    id?: true
    org_id?: true
    created_by_user_id?: true
    name?: true
    cloud_url?: true
    type?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    org_id?: true
    created_by_user_id?: true
    name?: true
    cloud_url?: true
    type?: true
    status?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    org_id?: true
    created_by_user_id?: true
    name?: true
    cloud_url?: true
    type?: true
    status?: true
    is_deleted?: true
    metadata?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    org_id: string
    created_by_user_id: string
    name: string
    cloud_url: string
    type: string
    status: string
    is_deleted: boolean
    metadata: JsonValue
    created_at: Date
    updated_at: Date
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    created_by_user_id?: boolean
    name?: boolean
    cloud_url?: boolean
    type?: boolean
    status?: boolean
    is_deleted?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
    recipients?: boolean | Document$recipientsArgs<ExtArgs>
    activities?: boolean | Document$activitiesArgs<ExtArgs>
    _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    created_by_user_id?: boolean
    name?: boolean
    cloud_url?: boolean
    type?: boolean
    status?: boolean
    is_deleted?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    created_by_user_id?: boolean
    name?: boolean
    cloud_url?: boolean
    type?: boolean
    status?: boolean
    is_deleted?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    org_id?: boolean
    created_by_user_id?: boolean
    name?: boolean
    cloud_url?: boolean
    type?: boolean
    status?: boolean
    is_deleted?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "org_id" | "created_by_user_id" | "name" | "cloud_url" | "type" | "status" | "is_deleted" | "metadata" | "created_at" | "updated_at", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipients?: boolean | Document$recipientsArgs<ExtArgs>
    activities?: boolean | Document$activitiesArgs<ExtArgs>
    _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      recipients: Prisma.$DocumentRecipientPayload<ExtArgs>[]
      activities: Prisma.$DocumentActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      org_id: string
      created_by_user_id: string
      name: string
      cloud_url: string
      type: string
      status: string
      is_deleted: boolean
      metadata: Prisma.JsonValue
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
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
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
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
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipients<T extends Document$recipientsArgs<ExtArgs> = {}>(args?: Subset<T, Document$recipientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentRecipientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activities<T extends Document$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Document$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly org_id: FieldRef<"Document", 'String'>
    readonly created_by_user_id: FieldRef<"Document", 'String'>
    readonly name: FieldRef<"Document", 'String'>
    readonly cloud_url: FieldRef<"Document", 'String'>
    readonly type: FieldRef<"Document", 'String'>
    readonly status: FieldRef<"Document", 'String'>
    readonly is_deleted: FieldRef<"Document", 'Boolean'>
    readonly metadata: FieldRef<"Document", 'Json'>
    readonly created_at: FieldRef<"Document", 'DateTime'>
    readonly updated_at: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document.recipients
   */
  export type Document$recipientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRecipient
     */
    select?: DocumentRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRecipient
     */
    omit?: DocumentRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentRecipientInclude<ExtArgs> | null
    where?: DocumentRecipientWhereInput
    orderBy?: DocumentRecipientOrderByWithRelationInput | DocumentRecipientOrderByWithRelationInput[]
    cursor?: DocumentRecipientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentRecipientScalarFieldEnum | DocumentRecipientScalarFieldEnum[]
  }

  /**
   * Document.activities
   */
  export type Document$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentActivity
     */
    select?: DocumentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentActivity
     */
    omit?: DocumentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentActivityInclude<ExtArgs> | null
    where?: DocumentActivityWhereInput
    orderBy?: DocumentActivityOrderByWithRelationInput | DocumentActivityOrderByWithRelationInput[]
    cursor?: DocumentActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentActivityScalarFieldEnum | DocumentActivityScalarFieldEnum[]
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model DocumentRecipient
   */

  export type AggregateDocumentRecipient = {
    _count: DocumentRecipientCountAggregateOutputType | null
    _min: DocumentRecipientMinAggregateOutputType | null
    _max: DocumentRecipientMaxAggregateOutputType | null
  }

  export type DocumentRecipientMinAggregateOutputType = {
    id: string | null
    document_id: string | null
    org_id: string | null
    contact_id: string | null
    name: string | null
    email: string | null
    status: string | null
    hash_code: string | null
    signed_at: Date | null
    is_deleted: boolean | null
    otp: string | null
    otp_expires_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DocumentRecipientMaxAggregateOutputType = {
    id: string | null
    document_id: string | null
    org_id: string | null
    contact_id: string | null
    name: string | null
    email: string | null
    status: string | null
    hash_code: string | null
    signed_at: Date | null
    is_deleted: boolean | null
    otp: string | null
    otp_expires_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DocumentRecipientCountAggregateOutputType = {
    id: number
    document_id: number
    org_id: number
    contact_id: number
    name: number
    email: number
    status: number
    hash_code: number
    signed_at: number
    is_deleted: number
    otp: number
    otp_expires_at: number
    metadata: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DocumentRecipientMinAggregateInputType = {
    id?: true
    document_id?: true
    org_id?: true
    contact_id?: true
    name?: true
    email?: true
    status?: true
    hash_code?: true
    signed_at?: true
    is_deleted?: true
    otp?: true
    otp_expires_at?: true
    created_at?: true
    updated_at?: true
  }

  export type DocumentRecipientMaxAggregateInputType = {
    id?: true
    document_id?: true
    org_id?: true
    contact_id?: true
    name?: true
    email?: true
    status?: true
    hash_code?: true
    signed_at?: true
    is_deleted?: true
    otp?: true
    otp_expires_at?: true
    created_at?: true
    updated_at?: true
  }

  export type DocumentRecipientCountAggregateInputType = {
    id?: true
    document_id?: true
    org_id?: true
    contact_id?: true
    name?: true
    email?: true
    status?: true
    hash_code?: true
    signed_at?: true
    is_deleted?: true
    otp?: true
    otp_expires_at?: true
    metadata?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DocumentRecipientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentRecipient to aggregate.
     */
    where?: DocumentRecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentRecipients to fetch.
     */
    orderBy?: DocumentRecipientOrderByWithRelationInput | DocumentRecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentRecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentRecipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentRecipients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentRecipients
    **/
    _count?: true | DocumentRecipientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentRecipientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentRecipientMaxAggregateInputType
  }

  export type GetDocumentRecipientAggregateType<T extends DocumentRecipientAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentRecipient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentRecipient[P]>
      : GetScalarType<T[P], AggregateDocumentRecipient[P]>
  }




  export type DocumentRecipientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentRecipientWhereInput
    orderBy?: DocumentRecipientOrderByWithAggregationInput | DocumentRecipientOrderByWithAggregationInput[]
    by: DocumentRecipientScalarFieldEnum[] | DocumentRecipientScalarFieldEnum
    having?: DocumentRecipientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentRecipientCountAggregateInputType | true
    _min?: DocumentRecipientMinAggregateInputType
    _max?: DocumentRecipientMaxAggregateInputType
  }

  export type DocumentRecipientGroupByOutputType = {
    id: string
    document_id: string
    org_id: string
    contact_id: string | null
    name: string
    email: string
    status: string
    hash_code: string | null
    signed_at: Date | null
    is_deleted: boolean
    otp: string | null
    otp_expires_at: Date | null
    metadata: JsonValue
    created_at: Date
    updated_at: Date
    _count: DocumentRecipientCountAggregateOutputType | null
    _min: DocumentRecipientMinAggregateOutputType | null
    _max: DocumentRecipientMaxAggregateOutputType | null
  }

  type GetDocumentRecipientGroupByPayload<T extends DocumentRecipientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentRecipientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentRecipientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentRecipientGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentRecipientGroupByOutputType[P]>
        }
      >
    >


  export type DocumentRecipientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    document_id?: boolean
    org_id?: boolean
    contact_id?: boolean
    name?: boolean
    email?: boolean
    status?: boolean
    hash_code?: boolean
    signed_at?: boolean
    is_deleted?: boolean
    otp?: boolean
    otp_expires_at?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    activities?: boolean | DocumentRecipient$activitiesArgs<ExtArgs>
    _count?: boolean | DocumentRecipientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentRecipient"]>

  export type DocumentRecipientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    document_id?: boolean
    org_id?: boolean
    contact_id?: boolean
    name?: boolean
    email?: boolean
    status?: boolean
    hash_code?: boolean
    signed_at?: boolean
    is_deleted?: boolean
    otp?: boolean
    otp_expires_at?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentRecipient"]>

  export type DocumentRecipientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    document_id?: boolean
    org_id?: boolean
    contact_id?: boolean
    name?: boolean
    email?: boolean
    status?: boolean
    hash_code?: boolean
    signed_at?: boolean
    is_deleted?: boolean
    otp?: boolean
    otp_expires_at?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentRecipient"]>

  export type DocumentRecipientSelectScalar = {
    id?: boolean
    document_id?: boolean
    org_id?: boolean
    contact_id?: boolean
    name?: boolean
    email?: boolean
    status?: boolean
    hash_code?: boolean
    signed_at?: boolean
    is_deleted?: boolean
    otp?: boolean
    otp_expires_at?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type DocumentRecipientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "document_id" | "org_id" | "contact_id" | "name" | "email" | "status" | "hash_code" | "signed_at" | "is_deleted" | "otp" | "otp_expires_at" | "metadata" | "created_at" | "updated_at", ExtArgs["result"]["documentRecipient"]>
  export type DocumentRecipientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    activities?: boolean | DocumentRecipient$activitiesArgs<ExtArgs>
    _count?: boolean | DocumentRecipientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocumentRecipientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }
  export type DocumentRecipientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }

  export type $DocumentRecipientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentRecipient"
    objects: {
      document: Prisma.$DocumentPayload<ExtArgs>
      activities: Prisma.$DocumentActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      document_id: string
      org_id: string
      contact_id: string | null
      name: string
      email: string
      status: string
      hash_code: string | null
      signed_at: Date | null
      is_deleted: boolean
      otp: string | null
      otp_expires_at: Date | null
      metadata: Prisma.JsonValue
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["documentRecipient"]>
    composites: {}
  }

  type DocumentRecipientGetPayload<S extends boolean | null | undefined | DocumentRecipientDefaultArgs> = $Result.GetResult<Prisma.$DocumentRecipientPayload, S>

  type DocumentRecipientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentRecipientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentRecipientCountAggregateInputType | true
    }

  export interface DocumentRecipientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentRecipient'], meta: { name: 'DocumentRecipient' } }
    /**
     * Find zero or one DocumentRecipient that matches the filter.
     * @param {DocumentRecipientFindUniqueArgs} args - Arguments to find a DocumentRecipient
     * @example
     * // Get one DocumentRecipient
     * const documentRecipient = await prisma.documentRecipient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentRecipientFindUniqueArgs>(args: SelectSubset<T, DocumentRecipientFindUniqueArgs<ExtArgs>>): Prisma__DocumentRecipientClient<$Result.GetResult<Prisma.$DocumentRecipientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentRecipient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentRecipientFindUniqueOrThrowArgs} args - Arguments to find a DocumentRecipient
     * @example
     * // Get one DocumentRecipient
     * const documentRecipient = await prisma.documentRecipient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentRecipientFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentRecipientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentRecipientClient<$Result.GetResult<Prisma.$DocumentRecipientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentRecipient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentRecipientFindFirstArgs} args - Arguments to find a DocumentRecipient
     * @example
     * // Get one DocumentRecipient
     * const documentRecipient = await prisma.documentRecipient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentRecipientFindFirstArgs>(args?: SelectSubset<T, DocumentRecipientFindFirstArgs<ExtArgs>>): Prisma__DocumentRecipientClient<$Result.GetResult<Prisma.$DocumentRecipientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentRecipient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentRecipientFindFirstOrThrowArgs} args - Arguments to find a DocumentRecipient
     * @example
     * // Get one DocumentRecipient
     * const documentRecipient = await prisma.documentRecipient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentRecipientFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentRecipientFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentRecipientClient<$Result.GetResult<Prisma.$DocumentRecipientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentRecipients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentRecipientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentRecipients
     * const documentRecipients = await prisma.documentRecipient.findMany()
     * 
     * // Get first 10 DocumentRecipients
     * const documentRecipients = await prisma.documentRecipient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentRecipientWithIdOnly = await prisma.documentRecipient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentRecipientFindManyArgs>(args?: SelectSubset<T, DocumentRecipientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentRecipientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentRecipient.
     * @param {DocumentRecipientCreateArgs} args - Arguments to create a DocumentRecipient.
     * @example
     * // Create one DocumentRecipient
     * const DocumentRecipient = await prisma.documentRecipient.create({
     *   data: {
     *     // ... data to create a DocumentRecipient
     *   }
     * })
     * 
     */
    create<T extends DocumentRecipientCreateArgs>(args: SelectSubset<T, DocumentRecipientCreateArgs<ExtArgs>>): Prisma__DocumentRecipientClient<$Result.GetResult<Prisma.$DocumentRecipientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentRecipients.
     * @param {DocumentRecipientCreateManyArgs} args - Arguments to create many DocumentRecipients.
     * @example
     * // Create many DocumentRecipients
     * const documentRecipient = await prisma.documentRecipient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentRecipientCreateManyArgs>(args?: SelectSubset<T, DocumentRecipientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentRecipients and returns the data saved in the database.
     * @param {DocumentRecipientCreateManyAndReturnArgs} args - Arguments to create many DocumentRecipients.
     * @example
     * // Create many DocumentRecipients
     * const documentRecipient = await prisma.documentRecipient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentRecipients and only return the `id`
     * const documentRecipientWithIdOnly = await prisma.documentRecipient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentRecipientCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentRecipientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentRecipientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentRecipient.
     * @param {DocumentRecipientDeleteArgs} args - Arguments to delete one DocumentRecipient.
     * @example
     * // Delete one DocumentRecipient
     * const DocumentRecipient = await prisma.documentRecipient.delete({
     *   where: {
     *     // ... filter to delete one DocumentRecipient
     *   }
     * })
     * 
     */
    delete<T extends DocumentRecipientDeleteArgs>(args: SelectSubset<T, DocumentRecipientDeleteArgs<ExtArgs>>): Prisma__DocumentRecipientClient<$Result.GetResult<Prisma.$DocumentRecipientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentRecipient.
     * @param {DocumentRecipientUpdateArgs} args - Arguments to update one DocumentRecipient.
     * @example
     * // Update one DocumentRecipient
     * const documentRecipient = await prisma.documentRecipient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentRecipientUpdateArgs>(args: SelectSubset<T, DocumentRecipientUpdateArgs<ExtArgs>>): Prisma__DocumentRecipientClient<$Result.GetResult<Prisma.$DocumentRecipientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentRecipients.
     * @param {DocumentRecipientDeleteManyArgs} args - Arguments to filter DocumentRecipients to delete.
     * @example
     * // Delete a few DocumentRecipients
     * const { count } = await prisma.documentRecipient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentRecipientDeleteManyArgs>(args?: SelectSubset<T, DocumentRecipientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentRecipients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentRecipientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentRecipients
     * const documentRecipient = await prisma.documentRecipient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentRecipientUpdateManyArgs>(args: SelectSubset<T, DocumentRecipientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentRecipients and returns the data updated in the database.
     * @param {DocumentRecipientUpdateManyAndReturnArgs} args - Arguments to update many DocumentRecipients.
     * @example
     * // Update many DocumentRecipients
     * const documentRecipient = await prisma.documentRecipient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentRecipients and only return the `id`
     * const documentRecipientWithIdOnly = await prisma.documentRecipient.updateManyAndReturn({
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
    updateManyAndReturn<T extends DocumentRecipientUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentRecipientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentRecipientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentRecipient.
     * @param {DocumentRecipientUpsertArgs} args - Arguments to update or create a DocumentRecipient.
     * @example
     * // Update or create a DocumentRecipient
     * const documentRecipient = await prisma.documentRecipient.upsert({
     *   create: {
     *     // ... data to create a DocumentRecipient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentRecipient we want to update
     *   }
     * })
     */
    upsert<T extends DocumentRecipientUpsertArgs>(args: SelectSubset<T, DocumentRecipientUpsertArgs<ExtArgs>>): Prisma__DocumentRecipientClient<$Result.GetResult<Prisma.$DocumentRecipientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentRecipients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentRecipientCountArgs} args - Arguments to filter DocumentRecipients to count.
     * @example
     * // Count the number of DocumentRecipients
     * const count = await prisma.documentRecipient.count({
     *   where: {
     *     // ... the filter for the DocumentRecipients we want to count
     *   }
     * })
    **/
    count<T extends DocumentRecipientCountArgs>(
      args?: Subset<T, DocumentRecipientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentRecipientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentRecipient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentRecipientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentRecipientAggregateArgs>(args: Subset<T, DocumentRecipientAggregateArgs>): Prisma.PrismaPromise<GetDocumentRecipientAggregateType<T>>

    /**
     * Group by DocumentRecipient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentRecipientGroupByArgs} args - Group by arguments.
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
      T extends DocumentRecipientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentRecipientGroupByArgs['orderBy'] }
        : { orderBy?: DocumentRecipientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentRecipientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentRecipientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentRecipient model
   */
  readonly fields: DocumentRecipientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentRecipient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentRecipientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends DocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentDefaultArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    activities<T extends DocumentRecipient$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, DocumentRecipient$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DocumentRecipient model
   */
  interface DocumentRecipientFieldRefs {
    readonly id: FieldRef<"DocumentRecipient", 'String'>
    readonly document_id: FieldRef<"DocumentRecipient", 'String'>
    readonly org_id: FieldRef<"DocumentRecipient", 'String'>
    readonly contact_id: FieldRef<"DocumentRecipient", 'String'>
    readonly name: FieldRef<"DocumentRecipient", 'String'>
    readonly email: FieldRef<"DocumentRecipient", 'String'>
    readonly status: FieldRef<"DocumentRecipient", 'String'>
    readonly hash_code: FieldRef<"DocumentRecipient", 'String'>
    readonly signed_at: FieldRef<"DocumentRecipient", 'DateTime'>
    readonly is_deleted: FieldRef<"DocumentRecipient", 'Boolean'>
    readonly otp: FieldRef<"DocumentRecipient", 'String'>
    readonly otp_expires_at: FieldRef<"DocumentRecipient", 'DateTime'>
    readonly metadata: FieldRef<"DocumentRecipient", 'Json'>
    readonly created_at: FieldRef<"DocumentRecipient", 'DateTime'>
    readonly updated_at: FieldRef<"DocumentRecipient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DocumentRecipient findUnique
   */
  export type DocumentRecipientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRecipient
     */
    select?: DocumentRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRecipient
     */
    omit?: DocumentRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentRecipientInclude<ExtArgs> | null
    /**
     * Filter, which DocumentRecipient to fetch.
     */
    where: DocumentRecipientWhereUniqueInput
  }

  /**
   * DocumentRecipient findUniqueOrThrow
   */
  export type DocumentRecipientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRecipient
     */
    select?: DocumentRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRecipient
     */
    omit?: DocumentRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentRecipientInclude<ExtArgs> | null
    /**
     * Filter, which DocumentRecipient to fetch.
     */
    where: DocumentRecipientWhereUniqueInput
  }

  /**
   * DocumentRecipient findFirst
   */
  export type DocumentRecipientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRecipient
     */
    select?: DocumentRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRecipient
     */
    omit?: DocumentRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentRecipientInclude<ExtArgs> | null
    /**
     * Filter, which DocumentRecipient to fetch.
     */
    where?: DocumentRecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentRecipients to fetch.
     */
    orderBy?: DocumentRecipientOrderByWithRelationInput | DocumentRecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentRecipients.
     */
    cursor?: DocumentRecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentRecipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentRecipients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentRecipients.
     */
    distinct?: DocumentRecipientScalarFieldEnum | DocumentRecipientScalarFieldEnum[]
  }

  /**
   * DocumentRecipient findFirstOrThrow
   */
  export type DocumentRecipientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRecipient
     */
    select?: DocumentRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRecipient
     */
    omit?: DocumentRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentRecipientInclude<ExtArgs> | null
    /**
     * Filter, which DocumentRecipient to fetch.
     */
    where?: DocumentRecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentRecipients to fetch.
     */
    orderBy?: DocumentRecipientOrderByWithRelationInput | DocumentRecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentRecipients.
     */
    cursor?: DocumentRecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentRecipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentRecipients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentRecipients.
     */
    distinct?: DocumentRecipientScalarFieldEnum | DocumentRecipientScalarFieldEnum[]
  }

  /**
   * DocumentRecipient findMany
   */
  export type DocumentRecipientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRecipient
     */
    select?: DocumentRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRecipient
     */
    omit?: DocumentRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentRecipientInclude<ExtArgs> | null
    /**
     * Filter, which DocumentRecipients to fetch.
     */
    where?: DocumentRecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentRecipients to fetch.
     */
    orderBy?: DocumentRecipientOrderByWithRelationInput | DocumentRecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentRecipients.
     */
    cursor?: DocumentRecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentRecipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentRecipients.
     */
    skip?: number
    distinct?: DocumentRecipientScalarFieldEnum | DocumentRecipientScalarFieldEnum[]
  }

  /**
   * DocumentRecipient create
   */
  export type DocumentRecipientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRecipient
     */
    select?: DocumentRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRecipient
     */
    omit?: DocumentRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentRecipientInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentRecipient.
     */
    data: XOR<DocumentRecipientCreateInput, DocumentRecipientUncheckedCreateInput>
  }

  /**
   * DocumentRecipient createMany
   */
  export type DocumentRecipientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentRecipients.
     */
    data: DocumentRecipientCreateManyInput | DocumentRecipientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentRecipient createManyAndReturn
   */
  export type DocumentRecipientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRecipient
     */
    select?: DocumentRecipientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRecipient
     */
    omit?: DocumentRecipientOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentRecipients.
     */
    data: DocumentRecipientCreateManyInput | DocumentRecipientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentRecipientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentRecipient update
   */
  export type DocumentRecipientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRecipient
     */
    select?: DocumentRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRecipient
     */
    omit?: DocumentRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentRecipientInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentRecipient.
     */
    data: XOR<DocumentRecipientUpdateInput, DocumentRecipientUncheckedUpdateInput>
    /**
     * Choose, which DocumentRecipient to update.
     */
    where: DocumentRecipientWhereUniqueInput
  }

  /**
   * DocumentRecipient updateMany
   */
  export type DocumentRecipientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentRecipients.
     */
    data: XOR<DocumentRecipientUpdateManyMutationInput, DocumentRecipientUncheckedUpdateManyInput>
    /**
     * Filter which DocumentRecipients to update
     */
    where?: DocumentRecipientWhereInput
    /**
     * Limit how many DocumentRecipients to update.
     */
    limit?: number
  }

  /**
   * DocumentRecipient updateManyAndReturn
   */
  export type DocumentRecipientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRecipient
     */
    select?: DocumentRecipientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRecipient
     */
    omit?: DocumentRecipientOmit<ExtArgs> | null
    /**
     * The data used to update DocumentRecipients.
     */
    data: XOR<DocumentRecipientUpdateManyMutationInput, DocumentRecipientUncheckedUpdateManyInput>
    /**
     * Filter which DocumentRecipients to update
     */
    where?: DocumentRecipientWhereInput
    /**
     * Limit how many DocumentRecipients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentRecipientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentRecipient upsert
   */
  export type DocumentRecipientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRecipient
     */
    select?: DocumentRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRecipient
     */
    omit?: DocumentRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentRecipientInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentRecipient to update in case it exists.
     */
    where: DocumentRecipientWhereUniqueInput
    /**
     * In case the DocumentRecipient found by the `where` argument doesn't exist, create a new DocumentRecipient with this data.
     */
    create: XOR<DocumentRecipientCreateInput, DocumentRecipientUncheckedCreateInput>
    /**
     * In case the DocumentRecipient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentRecipientUpdateInput, DocumentRecipientUncheckedUpdateInput>
  }

  /**
   * DocumentRecipient delete
   */
  export type DocumentRecipientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRecipient
     */
    select?: DocumentRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRecipient
     */
    omit?: DocumentRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentRecipientInclude<ExtArgs> | null
    /**
     * Filter which DocumentRecipient to delete.
     */
    where: DocumentRecipientWhereUniqueInput
  }

  /**
   * DocumentRecipient deleteMany
   */
  export type DocumentRecipientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentRecipients to delete
     */
    where?: DocumentRecipientWhereInput
    /**
     * Limit how many DocumentRecipients to delete.
     */
    limit?: number
  }

  /**
   * DocumentRecipient.activities
   */
  export type DocumentRecipient$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentActivity
     */
    select?: DocumentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentActivity
     */
    omit?: DocumentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentActivityInclude<ExtArgs> | null
    where?: DocumentActivityWhereInput
    orderBy?: DocumentActivityOrderByWithRelationInput | DocumentActivityOrderByWithRelationInput[]
    cursor?: DocumentActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentActivityScalarFieldEnum | DocumentActivityScalarFieldEnum[]
  }

  /**
   * DocumentRecipient without action
   */
  export type DocumentRecipientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRecipient
     */
    select?: DocumentRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRecipient
     */
    omit?: DocumentRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentRecipientInclude<ExtArgs> | null
  }


  /**
   * Model DocumentActivity
   */

  export type AggregateDocumentActivity = {
    _count: DocumentActivityCountAggregateOutputType | null
    _min: DocumentActivityMinAggregateOutputType | null
    _max: DocumentActivityMaxAggregateOutputType | null
  }

  export type DocumentActivityMinAggregateOutputType = {
    id: string | null
    document_id: string | null
    document_recipient_id: string | null
    org_id: string | null
    action: string | null
    ip_address: string | null
    user_agent: string | null
    created_at: Date | null
  }

  export type DocumentActivityMaxAggregateOutputType = {
    id: string | null
    document_id: string | null
    document_recipient_id: string | null
    org_id: string | null
    action: string | null
    ip_address: string | null
    user_agent: string | null
    created_at: Date | null
  }

  export type DocumentActivityCountAggregateOutputType = {
    id: number
    document_id: number
    document_recipient_id: number
    org_id: number
    action: number
    ip_address: number
    user_agent: number
    metadata: number
    created_at: number
    _all: number
  }


  export type DocumentActivityMinAggregateInputType = {
    id?: true
    document_id?: true
    document_recipient_id?: true
    org_id?: true
    action?: true
    ip_address?: true
    user_agent?: true
    created_at?: true
  }

  export type DocumentActivityMaxAggregateInputType = {
    id?: true
    document_id?: true
    document_recipient_id?: true
    org_id?: true
    action?: true
    ip_address?: true
    user_agent?: true
    created_at?: true
  }

  export type DocumentActivityCountAggregateInputType = {
    id?: true
    document_id?: true
    document_recipient_id?: true
    org_id?: true
    action?: true
    ip_address?: true
    user_agent?: true
    metadata?: true
    created_at?: true
    _all?: true
  }

  export type DocumentActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentActivity to aggregate.
     */
    where?: DocumentActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentActivities to fetch.
     */
    orderBy?: DocumentActivityOrderByWithRelationInput | DocumentActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentActivities
    **/
    _count?: true | DocumentActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentActivityMaxAggregateInputType
  }

  export type GetDocumentActivityAggregateType<T extends DocumentActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentActivity[P]>
      : GetScalarType<T[P], AggregateDocumentActivity[P]>
  }




  export type DocumentActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentActivityWhereInput
    orderBy?: DocumentActivityOrderByWithAggregationInput | DocumentActivityOrderByWithAggregationInput[]
    by: DocumentActivityScalarFieldEnum[] | DocumentActivityScalarFieldEnum
    having?: DocumentActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentActivityCountAggregateInputType | true
    _min?: DocumentActivityMinAggregateInputType
    _max?: DocumentActivityMaxAggregateInputType
  }

  export type DocumentActivityGroupByOutputType = {
    id: string
    document_id: string
    document_recipient_id: string | null
    org_id: string
    action: string
    ip_address: string | null
    user_agent: string | null
    metadata: JsonValue
    created_at: Date
    _count: DocumentActivityCountAggregateOutputType | null
    _min: DocumentActivityMinAggregateOutputType | null
    _max: DocumentActivityMaxAggregateOutputType | null
  }

  type GetDocumentActivityGroupByPayload<T extends DocumentActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentActivityGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentActivityGroupByOutputType[P]>
        }
      >
    >


  export type DocumentActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    document_id?: boolean
    document_recipient_id?: boolean
    org_id?: boolean
    action?: boolean
    ip_address?: boolean
    user_agent?: boolean
    metadata?: boolean
    created_at?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    recipient?: boolean | DocumentActivity$recipientArgs<ExtArgs>
  }, ExtArgs["result"]["documentActivity"]>

  export type DocumentActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    document_id?: boolean
    document_recipient_id?: boolean
    org_id?: boolean
    action?: boolean
    ip_address?: boolean
    user_agent?: boolean
    metadata?: boolean
    created_at?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    recipient?: boolean | DocumentActivity$recipientArgs<ExtArgs>
  }, ExtArgs["result"]["documentActivity"]>

  export type DocumentActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    document_id?: boolean
    document_recipient_id?: boolean
    org_id?: boolean
    action?: boolean
    ip_address?: boolean
    user_agent?: boolean
    metadata?: boolean
    created_at?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    recipient?: boolean | DocumentActivity$recipientArgs<ExtArgs>
  }, ExtArgs["result"]["documentActivity"]>

  export type DocumentActivitySelectScalar = {
    id?: boolean
    document_id?: boolean
    document_recipient_id?: boolean
    org_id?: boolean
    action?: boolean
    ip_address?: boolean
    user_agent?: boolean
    metadata?: boolean
    created_at?: boolean
  }

  export type DocumentActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "document_id" | "document_recipient_id" | "org_id" | "action" | "ip_address" | "user_agent" | "metadata" | "created_at", ExtArgs["result"]["documentActivity"]>
  export type DocumentActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    recipient?: boolean | DocumentActivity$recipientArgs<ExtArgs>
  }
  export type DocumentActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    recipient?: boolean | DocumentActivity$recipientArgs<ExtArgs>
  }
  export type DocumentActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    recipient?: boolean | DocumentActivity$recipientArgs<ExtArgs>
  }

  export type $DocumentActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentActivity"
    objects: {
      document: Prisma.$DocumentPayload<ExtArgs>
      recipient: Prisma.$DocumentRecipientPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      document_id: string
      document_recipient_id: string | null
      org_id: string
      action: string
      ip_address: string | null
      user_agent: string | null
      metadata: Prisma.JsonValue
      created_at: Date
    }, ExtArgs["result"]["documentActivity"]>
    composites: {}
  }

  type DocumentActivityGetPayload<S extends boolean | null | undefined | DocumentActivityDefaultArgs> = $Result.GetResult<Prisma.$DocumentActivityPayload, S>

  type DocumentActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentActivityCountAggregateInputType | true
    }

  export interface DocumentActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentActivity'], meta: { name: 'DocumentActivity' } }
    /**
     * Find zero or one DocumentActivity that matches the filter.
     * @param {DocumentActivityFindUniqueArgs} args - Arguments to find a DocumentActivity
     * @example
     * // Get one DocumentActivity
     * const documentActivity = await prisma.documentActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentActivityFindUniqueArgs>(args: SelectSubset<T, DocumentActivityFindUniqueArgs<ExtArgs>>): Prisma__DocumentActivityClient<$Result.GetResult<Prisma.$DocumentActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentActivityFindUniqueOrThrowArgs} args - Arguments to find a DocumentActivity
     * @example
     * // Get one DocumentActivity
     * const documentActivity = await prisma.documentActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentActivityClient<$Result.GetResult<Prisma.$DocumentActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentActivityFindFirstArgs} args - Arguments to find a DocumentActivity
     * @example
     * // Get one DocumentActivity
     * const documentActivity = await prisma.documentActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentActivityFindFirstArgs>(args?: SelectSubset<T, DocumentActivityFindFirstArgs<ExtArgs>>): Prisma__DocumentActivityClient<$Result.GetResult<Prisma.$DocumentActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentActivityFindFirstOrThrowArgs} args - Arguments to find a DocumentActivity
     * @example
     * // Get one DocumentActivity
     * const documentActivity = await prisma.documentActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentActivityClient<$Result.GetResult<Prisma.$DocumentActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentActivities
     * const documentActivities = await prisma.documentActivity.findMany()
     * 
     * // Get first 10 DocumentActivities
     * const documentActivities = await prisma.documentActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentActivityWithIdOnly = await prisma.documentActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentActivityFindManyArgs>(args?: SelectSubset<T, DocumentActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentActivity.
     * @param {DocumentActivityCreateArgs} args - Arguments to create a DocumentActivity.
     * @example
     * // Create one DocumentActivity
     * const DocumentActivity = await prisma.documentActivity.create({
     *   data: {
     *     // ... data to create a DocumentActivity
     *   }
     * })
     * 
     */
    create<T extends DocumentActivityCreateArgs>(args: SelectSubset<T, DocumentActivityCreateArgs<ExtArgs>>): Prisma__DocumentActivityClient<$Result.GetResult<Prisma.$DocumentActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentActivities.
     * @param {DocumentActivityCreateManyArgs} args - Arguments to create many DocumentActivities.
     * @example
     * // Create many DocumentActivities
     * const documentActivity = await prisma.documentActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentActivityCreateManyArgs>(args?: SelectSubset<T, DocumentActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentActivities and returns the data saved in the database.
     * @param {DocumentActivityCreateManyAndReturnArgs} args - Arguments to create many DocumentActivities.
     * @example
     * // Create many DocumentActivities
     * const documentActivity = await prisma.documentActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentActivities and only return the `id`
     * const documentActivityWithIdOnly = await prisma.documentActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentActivity.
     * @param {DocumentActivityDeleteArgs} args - Arguments to delete one DocumentActivity.
     * @example
     * // Delete one DocumentActivity
     * const DocumentActivity = await prisma.documentActivity.delete({
     *   where: {
     *     // ... filter to delete one DocumentActivity
     *   }
     * })
     * 
     */
    delete<T extends DocumentActivityDeleteArgs>(args: SelectSubset<T, DocumentActivityDeleteArgs<ExtArgs>>): Prisma__DocumentActivityClient<$Result.GetResult<Prisma.$DocumentActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentActivity.
     * @param {DocumentActivityUpdateArgs} args - Arguments to update one DocumentActivity.
     * @example
     * // Update one DocumentActivity
     * const documentActivity = await prisma.documentActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentActivityUpdateArgs>(args: SelectSubset<T, DocumentActivityUpdateArgs<ExtArgs>>): Prisma__DocumentActivityClient<$Result.GetResult<Prisma.$DocumentActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentActivities.
     * @param {DocumentActivityDeleteManyArgs} args - Arguments to filter DocumentActivities to delete.
     * @example
     * // Delete a few DocumentActivities
     * const { count } = await prisma.documentActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentActivityDeleteManyArgs>(args?: SelectSubset<T, DocumentActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentActivities
     * const documentActivity = await prisma.documentActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentActivityUpdateManyArgs>(args: SelectSubset<T, DocumentActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentActivities and returns the data updated in the database.
     * @param {DocumentActivityUpdateManyAndReturnArgs} args - Arguments to update many DocumentActivities.
     * @example
     * // Update many DocumentActivities
     * const documentActivity = await prisma.documentActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentActivities and only return the `id`
     * const documentActivityWithIdOnly = await prisma.documentActivity.updateManyAndReturn({
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
    updateManyAndReturn<T extends DocumentActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentActivity.
     * @param {DocumentActivityUpsertArgs} args - Arguments to update or create a DocumentActivity.
     * @example
     * // Update or create a DocumentActivity
     * const documentActivity = await prisma.documentActivity.upsert({
     *   create: {
     *     // ... data to create a DocumentActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentActivity we want to update
     *   }
     * })
     */
    upsert<T extends DocumentActivityUpsertArgs>(args: SelectSubset<T, DocumentActivityUpsertArgs<ExtArgs>>): Prisma__DocumentActivityClient<$Result.GetResult<Prisma.$DocumentActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentActivityCountArgs} args - Arguments to filter DocumentActivities to count.
     * @example
     * // Count the number of DocumentActivities
     * const count = await prisma.documentActivity.count({
     *   where: {
     *     // ... the filter for the DocumentActivities we want to count
     *   }
     * })
    **/
    count<T extends DocumentActivityCountArgs>(
      args?: Subset<T, DocumentActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentActivityAggregateArgs>(args: Subset<T, DocumentActivityAggregateArgs>): Prisma.PrismaPromise<GetDocumentActivityAggregateType<T>>

    /**
     * Group by DocumentActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentActivityGroupByArgs} args - Group by arguments.
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
      T extends DocumentActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentActivityGroupByArgs['orderBy'] }
        : { orderBy?: DocumentActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentActivity model
   */
  readonly fields: DocumentActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends DocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentDefaultArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipient<T extends DocumentActivity$recipientArgs<ExtArgs> = {}>(args?: Subset<T, DocumentActivity$recipientArgs<ExtArgs>>): Prisma__DocumentRecipientClient<$Result.GetResult<Prisma.$DocumentRecipientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DocumentActivity model
   */
  interface DocumentActivityFieldRefs {
    readonly id: FieldRef<"DocumentActivity", 'String'>
    readonly document_id: FieldRef<"DocumentActivity", 'String'>
    readonly document_recipient_id: FieldRef<"DocumentActivity", 'String'>
    readonly org_id: FieldRef<"DocumentActivity", 'String'>
    readonly action: FieldRef<"DocumentActivity", 'String'>
    readonly ip_address: FieldRef<"DocumentActivity", 'String'>
    readonly user_agent: FieldRef<"DocumentActivity", 'String'>
    readonly metadata: FieldRef<"DocumentActivity", 'Json'>
    readonly created_at: FieldRef<"DocumentActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DocumentActivity findUnique
   */
  export type DocumentActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentActivity
     */
    select?: DocumentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentActivity
     */
    omit?: DocumentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentActivityInclude<ExtArgs> | null
    /**
     * Filter, which DocumentActivity to fetch.
     */
    where: DocumentActivityWhereUniqueInput
  }

  /**
   * DocumentActivity findUniqueOrThrow
   */
  export type DocumentActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentActivity
     */
    select?: DocumentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentActivity
     */
    omit?: DocumentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentActivityInclude<ExtArgs> | null
    /**
     * Filter, which DocumentActivity to fetch.
     */
    where: DocumentActivityWhereUniqueInput
  }

  /**
   * DocumentActivity findFirst
   */
  export type DocumentActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentActivity
     */
    select?: DocumentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentActivity
     */
    omit?: DocumentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentActivityInclude<ExtArgs> | null
    /**
     * Filter, which DocumentActivity to fetch.
     */
    where?: DocumentActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentActivities to fetch.
     */
    orderBy?: DocumentActivityOrderByWithRelationInput | DocumentActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentActivities.
     */
    cursor?: DocumentActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentActivities.
     */
    distinct?: DocumentActivityScalarFieldEnum | DocumentActivityScalarFieldEnum[]
  }

  /**
   * DocumentActivity findFirstOrThrow
   */
  export type DocumentActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentActivity
     */
    select?: DocumentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentActivity
     */
    omit?: DocumentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentActivityInclude<ExtArgs> | null
    /**
     * Filter, which DocumentActivity to fetch.
     */
    where?: DocumentActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentActivities to fetch.
     */
    orderBy?: DocumentActivityOrderByWithRelationInput | DocumentActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentActivities.
     */
    cursor?: DocumentActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentActivities.
     */
    distinct?: DocumentActivityScalarFieldEnum | DocumentActivityScalarFieldEnum[]
  }

  /**
   * DocumentActivity findMany
   */
  export type DocumentActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentActivity
     */
    select?: DocumentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentActivity
     */
    omit?: DocumentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentActivityInclude<ExtArgs> | null
    /**
     * Filter, which DocumentActivities to fetch.
     */
    where?: DocumentActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentActivities to fetch.
     */
    orderBy?: DocumentActivityOrderByWithRelationInput | DocumentActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentActivities.
     */
    cursor?: DocumentActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentActivities.
     */
    skip?: number
    distinct?: DocumentActivityScalarFieldEnum | DocumentActivityScalarFieldEnum[]
  }

  /**
   * DocumentActivity create
   */
  export type DocumentActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentActivity
     */
    select?: DocumentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentActivity
     */
    omit?: DocumentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentActivity.
     */
    data: XOR<DocumentActivityCreateInput, DocumentActivityUncheckedCreateInput>
  }

  /**
   * DocumentActivity createMany
   */
  export type DocumentActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentActivities.
     */
    data: DocumentActivityCreateManyInput | DocumentActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentActivity createManyAndReturn
   */
  export type DocumentActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentActivity
     */
    select?: DocumentActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentActivity
     */
    omit?: DocumentActivityOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentActivities.
     */
    data: DocumentActivityCreateManyInput | DocumentActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentActivity update
   */
  export type DocumentActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentActivity
     */
    select?: DocumentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentActivity
     */
    omit?: DocumentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentActivity.
     */
    data: XOR<DocumentActivityUpdateInput, DocumentActivityUncheckedUpdateInput>
    /**
     * Choose, which DocumentActivity to update.
     */
    where: DocumentActivityWhereUniqueInput
  }

  /**
   * DocumentActivity updateMany
   */
  export type DocumentActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentActivities.
     */
    data: XOR<DocumentActivityUpdateManyMutationInput, DocumentActivityUncheckedUpdateManyInput>
    /**
     * Filter which DocumentActivities to update
     */
    where?: DocumentActivityWhereInput
    /**
     * Limit how many DocumentActivities to update.
     */
    limit?: number
  }

  /**
   * DocumentActivity updateManyAndReturn
   */
  export type DocumentActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentActivity
     */
    select?: DocumentActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentActivity
     */
    omit?: DocumentActivityOmit<ExtArgs> | null
    /**
     * The data used to update DocumentActivities.
     */
    data: XOR<DocumentActivityUpdateManyMutationInput, DocumentActivityUncheckedUpdateManyInput>
    /**
     * Filter which DocumentActivities to update
     */
    where?: DocumentActivityWhereInput
    /**
     * Limit how many DocumentActivities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentActivity upsert
   */
  export type DocumentActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentActivity
     */
    select?: DocumentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentActivity
     */
    omit?: DocumentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentActivity to update in case it exists.
     */
    where: DocumentActivityWhereUniqueInput
    /**
     * In case the DocumentActivity found by the `where` argument doesn't exist, create a new DocumentActivity with this data.
     */
    create: XOR<DocumentActivityCreateInput, DocumentActivityUncheckedCreateInput>
    /**
     * In case the DocumentActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentActivityUpdateInput, DocumentActivityUncheckedUpdateInput>
  }

  /**
   * DocumentActivity delete
   */
  export type DocumentActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentActivity
     */
    select?: DocumentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentActivity
     */
    omit?: DocumentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentActivityInclude<ExtArgs> | null
    /**
     * Filter which DocumentActivity to delete.
     */
    where: DocumentActivityWhereUniqueInput
  }

  /**
   * DocumentActivity deleteMany
   */
  export type DocumentActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentActivities to delete
     */
    where?: DocumentActivityWhereInput
    /**
     * Limit how many DocumentActivities to delete.
     */
    limit?: number
  }

  /**
   * DocumentActivity.recipient
   */
  export type DocumentActivity$recipientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentRecipient
     */
    select?: DocumentRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentRecipient
     */
    omit?: DocumentRecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentRecipientInclude<ExtArgs> | null
    where?: DocumentRecipientWhereInput
  }

  /**
   * DocumentActivity without action
   */
  export type DocumentActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentActivity
     */
    select?: DocumentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentActivity
     */
    omit?: DocumentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentActivityInclude<ExtArgs> | null
  }


  /**
   * Model ContactWaiver
   */

  export type AggregateContactWaiver = {
    _count: ContactWaiverCountAggregateOutputType | null
    _min: ContactWaiverMinAggregateOutputType | null
    _max: ContactWaiverMaxAggregateOutputType | null
  }

  export type ContactWaiverMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    createdByUserId: string | null
    contactId: string | null
    name: string | null
    title: string | null
    content: string | null
    status: string | null
    signatureType: string | null
    templateLogo: string | null
    signerName: string | null
    signedAt: Date | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactWaiverMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    createdByUserId: string | null
    contactId: string | null
    name: string | null
    title: string | null
    content: string | null
    status: string | null
    signatureType: string | null
    templateLogo: string | null
    signerName: string | null
    signedAt: Date | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactWaiverCountAggregateOutputType = {
    id: number
    orgId: number
    createdByUserId: number
    contactId: number
    name: number
    title: number
    content: number
    status: number
    signatureType: number
    templateLogo: number
    signerName: number
    signedAt: number
    isDeleted: number
    waiver: number
    questions: number
    members: number
    guardian: number
    orgBranding: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactWaiverMinAggregateInputType = {
    id?: true
    orgId?: true
    createdByUserId?: true
    contactId?: true
    name?: true
    title?: true
    content?: true
    status?: true
    signatureType?: true
    templateLogo?: true
    signerName?: true
    signedAt?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactWaiverMaxAggregateInputType = {
    id?: true
    orgId?: true
    createdByUserId?: true
    contactId?: true
    name?: true
    title?: true
    content?: true
    status?: true
    signatureType?: true
    templateLogo?: true
    signerName?: true
    signedAt?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactWaiverCountAggregateInputType = {
    id?: true
    orgId?: true
    createdByUserId?: true
    contactId?: true
    name?: true
    title?: true
    content?: true
    status?: true
    signatureType?: true
    templateLogo?: true
    signerName?: true
    signedAt?: true
    isDeleted?: true
    waiver?: true
    questions?: true
    members?: true
    guardian?: true
    orgBranding?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactWaiverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactWaiver to aggregate.
     */
    where?: ContactWaiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactWaivers to fetch.
     */
    orderBy?: ContactWaiverOrderByWithRelationInput | ContactWaiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWaiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactWaivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactWaivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactWaivers
    **/
    _count?: true | ContactWaiverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactWaiverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactWaiverMaxAggregateInputType
  }

  export type GetContactWaiverAggregateType<T extends ContactWaiverAggregateArgs> = {
        [P in keyof T & keyof AggregateContactWaiver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactWaiver[P]>
      : GetScalarType<T[P], AggregateContactWaiver[P]>
  }




  export type ContactWaiverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWaiverWhereInput
    orderBy?: ContactWaiverOrderByWithAggregationInput | ContactWaiverOrderByWithAggregationInput[]
    by: ContactWaiverScalarFieldEnum[] | ContactWaiverScalarFieldEnum
    having?: ContactWaiverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactWaiverCountAggregateInputType | true
    _min?: ContactWaiverMinAggregateInputType
    _max?: ContactWaiverMaxAggregateInputType
  }

  export type ContactWaiverGroupByOutputType = {
    id: string
    orgId: string | null
    createdByUserId: string | null
    contactId: string | null
    name: string
    title: string | null
    content: string
    status: string
    signatureType: string | null
    templateLogo: string | null
    signerName: string | null
    signedAt: Date | null
    isDeleted: boolean
    waiver: JsonValue
    questions: JsonValue
    members: JsonValue
    guardian: JsonValue
    orgBranding: JsonValue
    metadata: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: ContactWaiverCountAggregateOutputType | null
    _min: ContactWaiverMinAggregateOutputType | null
    _max: ContactWaiverMaxAggregateOutputType | null
  }

  type GetContactWaiverGroupByPayload<T extends ContactWaiverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactWaiverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactWaiverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactWaiverGroupByOutputType[P]>
            : GetScalarType<T[P], ContactWaiverGroupByOutputType[P]>
        }
      >
    >


  export type ContactWaiverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    createdByUserId?: boolean
    contactId?: boolean
    name?: boolean
    title?: boolean
    content?: boolean
    status?: boolean
    signatureType?: boolean
    templateLogo?: boolean
    signerName?: boolean
    signedAt?: boolean
    isDeleted?: boolean
    waiver?: boolean
    questions?: boolean
    members?: boolean
    guardian?: boolean
    orgBranding?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactWaiver"]>

  export type ContactWaiverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    createdByUserId?: boolean
    contactId?: boolean
    name?: boolean
    title?: boolean
    content?: boolean
    status?: boolean
    signatureType?: boolean
    templateLogo?: boolean
    signerName?: boolean
    signedAt?: boolean
    isDeleted?: boolean
    waiver?: boolean
    questions?: boolean
    members?: boolean
    guardian?: boolean
    orgBranding?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactWaiver"]>

  export type ContactWaiverSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    createdByUserId?: boolean
    contactId?: boolean
    name?: boolean
    title?: boolean
    content?: boolean
    status?: boolean
    signatureType?: boolean
    templateLogo?: boolean
    signerName?: boolean
    signedAt?: boolean
    isDeleted?: boolean
    waiver?: boolean
    questions?: boolean
    members?: boolean
    guardian?: boolean
    orgBranding?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactWaiver"]>

  export type ContactWaiverSelectScalar = {
    id?: boolean
    orgId?: boolean
    createdByUserId?: boolean
    contactId?: boolean
    name?: boolean
    title?: boolean
    content?: boolean
    status?: boolean
    signatureType?: boolean
    templateLogo?: boolean
    signerName?: boolean
    signedAt?: boolean
    isDeleted?: boolean
    waiver?: boolean
    questions?: boolean
    members?: boolean
    guardian?: boolean
    orgBranding?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactWaiverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "createdByUserId" | "contactId" | "name" | "title" | "content" | "status" | "signatureType" | "templateLogo" | "signerName" | "signedAt" | "isDeleted" | "waiver" | "questions" | "members" | "guardian" | "orgBranding" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["contactWaiver"]>

  export type $ContactWaiverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactWaiver"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string | null
      createdByUserId: string | null
      contactId: string | null
      name: string
      title: string | null
      content: string
      status: string
      signatureType: string | null
      templateLogo: string | null
      signerName: string | null
      signedAt: Date | null
      isDeleted: boolean
      waiver: Prisma.JsonValue
      questions: Prisma.JsonValue
      members: Prisma.JsonValue
      guardian: Prisma.JsonValue
      orgBranding: Prisma.JsonValue
      metadata: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contactWaiver"]>
    composites: {}
  }

  type ContactWaiverGetPayload<S extends boolean | null | undefined | ContactWaiverDefaultArgs> = $Result.GetResult<Prisma.$ContactWaiverPayload, S>

  type ContactWaiverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactWaiverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactWaiverCountAggregateInputType | true
    }

  export interface ContactWaiverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactWaiver'], meta: { name: 'ContactWaiver' } }
    /**
     * Find zero or one ContactWaiver that matches the filter.
     * @param {ContactWaiverFindUniqueArgs} args - Arguments to find a ContactWaiver
     * @example
     * // Get one ContactWaiver
     * const contactWaiver = await prisma.contactWaiver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactWaiverFindUniqueArgs>(args: SelectSubset<T, ContactWaiverFindUniqueArgs<ExtArgs>>): Prisma__ContactWaiverClient<$Result.GetResult<Prisma.$ContactWaiverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactWaiver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactWaiverFindUniqueOrThrowArgs} args - Arguments to find a ContactWaiver
     * @example
     * // Get one ContactWaiver
     * const contactWaiver = await prisma.contactWaiver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactWaiverFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactWaiverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactWaiverClient<$Result.GetResult<Prisma.$ContactWaiverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactWaiver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactWaiverFindFirstArgs} args - Arguments to find a ContactWaiver
     * @example
     * // Get one ContactWaiver
     * const contactWaiver = await prisma.contactWaiver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactWaiverFindFirstArgs>(args?: SelectSubset<T, ContactWaiverFindFirstArgs<ExtArgs>>): Prisma__ContactWaiverClient<$Result.GetResult<Prisma.$ContactWaiverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactWaiver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactWaiverFindFirstOrThrowArgs} args - Arguments to find a ContactWaiver
     * @example
     * // Get one ContactWaiver
     * const contactWaiver = await prisma.contactWaiver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactWaiverFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactWaiverFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactWaiverClient<$Result.GetResult<Prisma.$ContactWaiverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactWaivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactWaiverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactWaivers
     * const contactWaivers = await prisma.contactWaiver.findMany()
     * 
     * // Get first 10 ContactWaivers
     * const contactWaivers = await prisma.contactWaiver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWaiverWithIdOnly = await prisma.contactWaiver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactWaiverFindManyArgs>(args?: SelectSubset<T, ContactWaiverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactWaiverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactWaiver.
     * @param {ContactWaiverCreateArgs} args - Arguments to create a ContactWaiver.
     * @example
     * // Create one ContactWaiver
     * const ContactWaiver = await prisma.contactWaiver.create({
     *   data: {
     *     // ... data to create a ContactWaiver
     *   }
     * })
     * 
     */
    create<T extends ContactWaiverCreateArgs>(args: SelectSubset<T, ContactWaiverCreateArgs<ExtArgs>>): Prisma__ContactWaiverClient<$Result.GetResult<Prisma.$ContactWaiverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactWaivers.
     * @param {ContactWaiverCreateManyArgs} args - Arguments to create many ContactWaivers.
     * @example
     * // Create many ContactWaivers
     * const contactWaiver = await prisma.contactWaiver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactWaiverCreateManyArgs>(args?: SelectSubset<T, ContactWaiverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactWaivers and returns the data saved in the database.
     * @param {ContactWaiverCreateManyAndReturnArgs} args - Arguments to create many ContactWaivers.
     * @example
     * // Create many ContactWaivers
     * const contactWaiver = await prisma.contactWaiver.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactWaivers and only return the `id`
     * const contactWaiverWithIdOnly = await prisma.contactWaiver.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactWaiverCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactWaiverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactWaiverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactWaiver.
     * @param {ContactWaiverDeleteArgs} args - Arguments to delete one ContactWaiver.
     * @example
     * // Delete one ContactWaiver
     * const ContactWaiver = await prisma.contactWaiver.delete({
     *   where: {
     *     // ... filter to delete one ContactWaiver
     *   }
     * })
     * 
     */
    delete<T extends ContactWaiverDeleteArgs>(args: SelectSubset<T, ContactWaiverDeleteArgs<ExtArgs>>): Prisma__ContactWaiverClient<$Result.GetResult<Prisma.$ContactWaiverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactWaiver.
     * @param {ContactWaiverUpdateArgs} args - Arguments to update one ContactWaiver.
     * @example
     * // Update one ContactWaiver
     * const contactWaiver = await prisma.contactWaiver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactWaiverUpdateArgs>(args: SelectSubset<T, ContactWaiverUpdateArgs<ExtArgs>>): Prisma__ContactWaiverClient<$Result.GetResult<Prisma.$ContactWaiverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactWaivers.
     * @param {ContactWaiverDeleteManyArgs} args - Arguments to filter ContactWaivers to delete.
     * @example
     * // Delete a few ContactWaivers
     * const { count } = await prisma.contactWaiver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactWaiverDeleteManyArgs>(args?: SelectSubset<T, ContactWaiverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactWaivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactWaiverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactWaivers
     * const contactWaiver = await prisma.contactWaiver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactWaiverUpdateManyArgs>(args: SelectSubset<T, ContactWaiverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactWaivers and returns the data updated in the database.
     * @param {ContactWaiverUpdateManyAndReturnArgs} args - Arguments to update many ContactWaivers.
     * @example
     * // Update many ContactWaivers
     * const contactWaiver = await prisma.contactWaiver.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactWaivers and only return the `id`
     * const contactWaiverWithIdOnly = await prisma.contactWaiver.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContactWaiverUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactWaiverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactWaiverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactWaiver.
     * @param {ContactWaiverUpsertArgs} args - Arguments to update or create a ContactWaiver.
     * @example
     * // Update or create a ContactWaiver
     * const contactWaiver = await prisma.contactWaiver.upsert({
     *   create: {
     *     // ... data to create a ContactWaiver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactWaiver we want to update
     *   }
     * })
     */
    upsert<T extends ContactWaiverUpsertArgs>(args: SelectSubset<T, ContactWaiverUpsertArgs<ExtArgs>>): Prisma__ContactWaiverClient<$Result.GetResult<Prisma.$ContactWaiverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactWaivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactWaiverCountArgs} args - Arguments to filter ContactWaivers to count.
     * @example
     * // Count the number of ContactWaivers
     * const count = await prisma.contactWaiver.count({
     *   where: {
     *     // ... the filter for the ContactWaivers we want to count
     *   }
     * })
    **/
    count<T extends ContactWaiverCountArgs>(
      args?: Subset<T, ContactWaiverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactWaiverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactWaiver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactWaiverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactWaiverAggregateArgs>(args: Subset<T, ContactWaiverAggregateArgs>): Prisma.PrismaPromise<GetContactWaiverAggregateType<T>>

    /**
     * Group by ContactWaiver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactWaiverGroupByArgs} args - Group by arguments.
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
      T extends ContactWaiverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactWaiverGroupByArgs['orderBy'] }
        : { orderBy?: ContactWaiverGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactWaiverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactWaiverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactWaiver model
   */
  readonly fields: ContactWaiverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactWaiver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactWaiverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ContactWaiver model
   */
  interface ContactWaiverFieldRefs {
    readonly id: FieldRef<"ContactWaiver", 'String'>
    readonly orgId: FieldRef<"ContactWaiver", 'String'>
    readonly createdByUserId: FieldRef<"ContactWaiver", 'String'>
    readonly contactId: FieldRef<"ContactWaiver", 'String'>
    readonly name: FieldRef<"ContactWaiver", 'String'>
    readonly title: FieldRef<"ContactWaiver", 'String'>
    readonly content: FieldRef<"ContactWaiver", 'String'>
    readonly status: FieldRef<"ContactWaiver", 'String'>
    readonly signatureType: FieldRef<"ContactWaiver", 'String'>
    readonly templateLogo: FieldRef<"ContactWaiver", 'String'>
    readonly signerName: FieldRef<"ContactWaiver", 'String'>
    readonly signedAt: FieldRef<"ContactWaiver", 'DateTime'>
    readonly isDeleted: FieldRef<"ContactWaiver", 'Boolean'>
    readonly waiver: FieldRef<"ContactWaiver", 'Json'>
    readonly questions: FieldRef<"ContactWaiver", 'Json'>
    readonly members: FieldRef<"ContactWaiver", 'Json'>
    readonly guardian: FieldRef<"ContactWaiver", 'Json'>
    readonly orgBranding: FieldRef<"ContactWaiver", 'Json'>
    readonly metadata: FieldRef<"ContactWaiver", 'Json'>
    readonly createdAt: FieldRef<"ContactWaiver", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactWaiver", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactWaiver findUnique
   */
  export type ContactWaiverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactWaiver
     */
    select?: ContactWaiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactWaiver
     */
    omit?: ContactWaiverOmit<ExtArgs> | null
    /**
     * Filter, which ContactWaiver to fetch.
     */
    where: ContactWaiverWhereUniqueInput
  }

  /**
   * ContactWaiver findUniqueOrThrow
   */
  export type ContactWaiverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactWaiver
     */
    select?: ContactWaiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactWaiver
     */
    omit?: ContactWaiverOmit<ExtArgs> | null
    /**
     * Filter, which ContactWaiver to fetch.
     */
    where: ContactWaiverWhereUniqueInput
  }

  /**
   * ContactWaiver findFirst
   */
  export type ContactWaiverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactWaiver
     */
    select?: ContactWaiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactWaiver
     */
    omit?: ContactWaiverOmit<ExtArgs> | null
    /**
     * Filter, which ContactWaiver to fetch.
     */
    where?: ContactWaiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactWaivers to fetch.
     */
    orderBy?: ContactWaiverOrderByWithRelationInput | ContactWaiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactWaivers.
     */
    cursor?: ContactWaiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactWaivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactWaivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactWaivers.
     */
    distinct?: ContactWaiverScalarFieldEnum | ContactWaiverScalarFieldEnum[]
  }

  /**
   * ContactWaiver findFirstOrThrow
   */
  export type ContactWaiverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactWaiver
     */
    select?: ContactWaiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactWaiver
     */
    omit?: ContactWaiverOmit<ExtArgs> | null
    /**
     * Filter, which ContactWaiver to fetch.
     */
    where?: ContactWaiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactWaivers to fetch.
     */
    orderBy?: ContactWaiverOrderByWithRelationInput | ContactWaiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactWaivers.
     */
    cursor?: ContactWaiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactWaivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactWaivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactWaivers.
     */
    distinct?: ContactWaiverScalarFieldEnum | ContactWaiverScalarFieldEnum[]
  }

  /**
   * ContactWaiver findMany
   */
  export type ContactWaiverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactWaiver
     */
    select?: ContactWaiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactWaiver
     */
    omit?: ContactWaiverOmit<ExtArgs> | null
    /**
     * Filter, which ContactWaivers to fetch.
     */
    where?: ContactWaiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactWaivers to fetch.
     */
    orderBy?: ContactWaiverOrderByWithRelationInput | ContactWaiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactWaivers.
     */
    cursor?: ContactWaiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactWaivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactWaivers.
     */
    skip?: number
    distinct?: ContactWaiverScalarFieldEnum | ContactWaiverScalarFieldEnum[]
  }

  /**
   * ContactWaiver create
   */
  export type ContactWaiverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactWaiver
     */
    select?: ContactWaiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactWaiver
     */
    omit?: ContactWaiverOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactWaiver.
     */
    data: XOR<ContactWaiverCreateInput, ContactWaiverUncheckedCreateInput>
  }

  /**
   * ContactWaiver createMany
   */
  export type ContactWaiverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactWaivers.
     */
    data: ContactWaiverCreateManyInput | ContactWaiverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactWaiver createManyAndReturn
   */
  export type ContactWaiverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactWaiver
     */
    select?: ContactWaiverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactWaiver
     */
    omit?: ContactWaiverOmit<ExtArgs> | null
    /**
     * The data used to create many ContactWaivers.
     */
    data: ContactWaiverCreateManyInput | ContactWaiverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactWaiver update
   */
  export type ContactWaiverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactWaiver
     */
    select?: ContactWaiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactWaiver
     */
    omit?: ContactWaiverOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactWaiver.
     */
    data: XOR<ContactWaiverUpdateInput, ContactWaiverUncheckedUpdateInput>
    /**
     * Choose, which ContactWaiver to update.
     */
    where: ContactWaiverWhereUniqueInput
  }

  /**
   * ContactWaiver updateMany
   */
  export type ContactWaiverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactWaivers.
     */
    data: XOR<ContactWaiverUpdateManyMutationInput, ContactWaiverUncheckedUpdateManyInput>
    /**
     * Filter which ContactWaivers to update
     */
    where?: ContactWaiverWhereInput
    /**
     * Limit how many ContactWaivers to update.
     */
    limit?: number
  }

  /**
   * ContactWaiver updateManyAndReturn
   */
  export type ContactWaiverUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactWaiver
     */
    select?: ContactWaiverSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactWaiver
     */
    omit?: ContactWaiverOmit<ExtArgs> | null
    /**
     * The data used to update ContactWaivers.
     */
    data: XOR<ContactWaiverUpdateManyMutationInput, ContactWaiverUncheckedUpdateManyInput>
    /**
     * Filter which ContactWaivers to update
     */
    where?: ContactWaiverWhereInput
    /**
     * Limit how many ContactWaivers to update.
     */
    limit?: number
  }

  /**
   * ContactWaiver upsert
   */
  export type ContactWaiverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactWaiver
     */
    select?: ContactWaiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactWaiver
     */
    omit?: ContactWaiverOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactWaiver to update in case it exists.
     */
    where: ContactWaiverWhereUniqueInput
    /**
     * In case the ContactWaiver found by the `where` argument doesn't exist, create a new ContactWaiver with this data.
     */
    create: XOR<ContactWaiverCreateInput, ContactWaiverUncheckedCreateInput>
    /**
     * In case the ContactWaiver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactWaiverUpdateInput, ContactWaiverUncheckedUpdateInput>
  }

  /**
   * ContactWaiver delete
   */
  export type ContactWaiverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactWaiver
     */
    select?: ContactWaiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactWaiver
     */
    omit?: ContactWaiverOmit<ExtArgs> | null
    /**
     * Filter which ContactWaiver to delete.
     */
    where: ContactWaiverWhereUniqueInput
  }

  /**
   * ContactWaiver deleteMany
   */
  export type ContactWaiverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactWaivers to delete
     */
    where?: ContactWaiverWhereInput
    /**
     * Limit how many ContactWaivers to delete.
     */
    limit?: number
  }

  /**
   * ContactWaiver without action
   */
  export type ContactWaiverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactWaiver
     */
    select?: ContactWaiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactWaiver
     */
    omit?: ContactWaiverOmit<ExtArgs> | null
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


  export const DocumentScalarFieldEnum: {
    id: 'id',
    org_id: 'org_id',
    created_by_user_id: 'created_by_user_id',
    name: 'name',
    cloud_url: 'cloud_url',
    type: 'type',
    status: 'status',
    is_deleted: 'is_deleted',
    metadata: 'metadata',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const DocumentRecipientScalarFieldEnum: {
    id: 'id',
    document_id: 'document_id',
    org_id: 'org_id',
    contact_id: 'contact_id',
    name: 'name',
    email: 'email',
    status: 'status',
    hash_code: 'hash_code',
    signed_at: 'signed_at',
    is_deleted: 'is_deleted',
    otp: 'otp',
    otp_expires_at: 'otp_expires_at',
    metadata: 'metadata',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DocumentRecipientScalarFieldEnum = (typeof DocumentRecipientScalarFieldEnum)[keyof typeof DocumentRecipientScalarFieldEnum]


  export const DocumentActivityScalarFieldEnum: {
    id: 'id',
    document_id: 'document_id',
    document_recipient_id: 'document_recipient_id',
    org_id: 'org_id',
    action: 'action',
    ip_address: 'ip_address',
    user_agent: 'user_agent',
    metadata: 'metadata',
    created_at: 'created_at'
  };

  export type DocumentActivityScalarFieldEnum = (typeof DocumentActivityScalarFieldEnum)[keyof typeof DocumentActivityScalarFieldEnum]


  export const ContactWaiverScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    createdByUserId: 'createdByUserId',
    contactId: 'contactId',
    name: 'name',
    title: 'title',
    content: 'content',
    status: 'status',
    signatureType: 'signatureType',
    templateLogo: 'templateLogo',
    signerName: 'signerName',
    signedAt: 'signedAt',
    isDeleted: 'isDeleted',
    waiver: 'waiver',
    questions: 'questions',
    members: 'members',
    guardian: 'guardian',
    orgBranding: 'orgBranding',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactWaiverScalarFieldEnum = (typeof ContactWaiverScalarFieldEnum)[keyof typeof ContactWaiverScalarFieldEnum]


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


  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: UuidFilter<"Document"> | string
    org_id?: UuidFilter<"Document"> | string
    created_by_user_id?: StringFilter<"Document"> | string
    name?: StringFilter<"Document"> | string
    cloud_url?: StringFilter<"Document"> | string
    type?: StringFilter<"Document"> | string
    status?: StringFilter<"Document"> | string
    is_deleted?: BoolFilter<"Document"> | boolean
    metadata?: JsonFilter<"Document">
    created_at?: DateTimeFilter<"Document"> | Date | string
    updated_at?: DateTimeFilter<"Document"> | Date | string
    recipients?: DocumentRecipientListRelationFilter
    activities?: DocumentActivityListRelationFilter
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by_user_id?: SortOrder
    name?: SortOrder
    cloud_url?: SortOrder
    type?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    recipients?: DocumentRecipientOrderByRelationAggregateInput
    activities?: DocumentActivityOrderByRelationAggregateInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    org_id?: UuidFilter<"Document"> | string
    created_by_user_id?: StringFilter<"Document"> | string
    name?: StringFilter<"Document"> | string
    cloud_url?: StringFilter<"Document"> | string
    type?: StringFilter<"Document"> | string
    status?: StringFilter<"Document"> | string
    is_deleted?: BoolFilter<"Document"> | boolean
    metadata?: JsonFilter<"Document">
    created_at?: DateTimeFilter<"Document"> | Date | string
    updated_at?: DateTimeFilter<"Document"> | Date | string
    recipients?: DocumentRecipientListRelationFilter
    activities?: DocumentActivityListRelationFilter
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by_user_id?: SortOrder
    name?: SortOrder
    cloud_url?: SortOrder
    type?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Document"> | string
    org_id?: UuidWithAggregatesFilter<"Document"> | string
    created_by_user_id?: StringWithAggregatesFilter<"Document"> | string
    name?: StringWithAggregatesFilter<"Document"> | string
    cloud_url?: StringWithAggregatesFilter<"Document"> | string
    type?: StringWithAggregatesFilter<"Document"> | string
    status?: StringWithAggregatesFilter<"Document"> | string
    is_deleted?: BoolWithAggregatesFilter<"Document"> | boolean
    metadata?: JsonWithAggregatesFilter<"Document">
    created_at?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Document"> | Date | string
  }

  export type DocumentRecipientWhereInput = {
    AND?: DocumentRecipientWhereInput | DocumentRecipientWhereInput[]
    OR?: DocumentRecipientWhereInput[]
    NOT?: DocumentRecipientWhereInput | DocumentRecipientWhereInput[]
    id?: UuidFilter<"DocumentRecipient"> | string
    document_id?: UuidFilter<"DocumentRecipient"> | string
    org_id?: UuidFilter<"DocumentRecipient"> | string
    contact_id?: UuidNullableFilter<"DocumentRecipient"> | string | null
    name?: StringFilter<"DocumentRecipient"> | string
    email?: StringFilter<"DocumentRecipient"> | string
    status?: StringFilter<"DocumentRecipient"> | string
    hash_code?: StringNullableFilter<"DocumentRecipient"> | string | null
    signed_at?: DateTimeNullableFilter<"DocumentRecipient"> | Date | string | null
    is_deleted?: BoolFilter<"DocumentRecipient"> | boolean
    otp?: StringNullableFilter<"DocumentRecipient"> | string | null
    otp_expires_at?: DateTimeNullableFilter<"DocumentRecipient"> | Date | string | null
    metadata?: JsonFilter<"DocumentRecipient">
    created_at?: DateTimeFilter<"DocumentRecipient"> | Date | string
    updated_at?: DateTimeFilter<"DocumentRecipient"> | Date | string
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    activities?: DocumentActivityListRelationFilter
  }

  export type DocumentRecipientOrderByWithRelationInput = {
    id?: SortOrder
    document_id?: SortOrder
    org_id?: SortOrder
    contact_id?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    status?: SortOrder
    hash_code?: SortOrderInput | SortOrder
    signed_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    otp?: SortOrderInput | SortOrder
    otp_expires_at?: SortOrderInput | SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    document?: DocumentOrderByWithRelationInput
    activities?: DocumentActivityOrderByRelationAggregateInput
  }

  export type DocumentRecipientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    hash_code?: string
    AND?: DocumentRecipientWhereInput | DocumentRecipientWhereInput[]
    OR?: DocumentRecipientWhereInput[]
    NOT?: DocumentRecipientWhereInput | DocumentRecipientWhereInput[]
    document_id?: UuidFilter<"DocumentRecipient"> | string
    org_id?: UuidFilter<"DocumentRecipient"> | string
    contact_id?: UuidNullableFilter<"DocumentRecipient"> | string | null
    name?: StringFilter<"DocumentRecipient"> | string
    email?: StringFilter<"DocumentRecipient"> | string
    status?: StringFilter<"DocumentRecipient"> | string
    signed_at?: DateTimeNullableFilter<"DocumentRecipient"> | Date | string | null
    is_deleted?: BoolFilter<"DocumentRecipient"> | boolean
    otp?: StringNullableFilter<"DocumentRecipient"> | string | null
    otp_expires_at?: DateTimeNullableFilter<"DocumentRecipient"> | Date | string | null
    metadata?: JsonFilter<"DocumentRecipient">
    created_at?: DateTimeFilter<"DocumentRecipient"> | Date | string
    updated_at?: DateTimeFilter<"DocumentRecipient"> | Date | string
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    activities?: DocumentActivityListRelationFilter
  }, "id" | "hash_code">

  export type DocumentRecipientOrderByWithAggregationInput = {
    id?: SortOrder
    document_id?: SortOrder
    org_id?: SortOrder
    contact_id?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    status?: SortOrder
    hash_code?: SortOrderInput | SortOrder
    signed_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    otp?: SortOrderInput | SortOrder
    otp_expires_at?: SortOrderInput | SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: DocumentRecipientCountOrderByAggregateInput
    _max?: DocumentRecipientMaxOrderByAggregateInput
    _min?: DocumentRecipientMinOrderByAggregateInput
  }

  export type DocumentRecipientScalarWhereWithAggregatesInput = {
    AND?: DocumentRecipientScalarWhereWithAggregatesInput | DocumentRecipientScalarWhereWithAggregatesInput[]
    OR?: DocumentRecipientScalarWhereWithAggregatesInput[]
    NOT?: DocumentRecipientScalarWhereWithAggregatesInput | DocumentRecipientScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"DocumentRecipient"> | string
    document_id?: UuidWithAggregatesFilter<"DocumentRecipient"> | string
    org_id?: UuidWithAggregatesFilter<"DocumentRecipient"> | string
    contact_id?: UuidNullableWithAggregatesFilter<"DocumentRecipient"> | string | null
    name?: StringWithAggregatesFilter<"DocumentRecipient"> | string
    email?: StringWithAggregatesFilter<"DocumentRecipient"> | string
    status?: StringWithAggregatesFilter<"DocumentRecipient"> | string
    hash_code?: StringNullableWithAggregatesFilter<"DocumentRecipient"> | string | null
    signed_at?: DateTimeNullableWithAggregatesFilter<"DocumentRecipient"> | Date | string | null
    is_deleted?: BoolWithAggregatesFilter<"DocumentRecipient"> | boolean
    otp?: StringNullableWithAggregatesFilter<"DocumentRecipient"> | string | null
    otp_expires_at?: DateTimeNullableWithAggregatesFilter<"DocumentRecipient"> | Date | string | null
    metadata?: JsonWithAggregatesFilter<"DocumentRecipient">
    created_at?: DateTimeWithAggregatesFilter<"DocumentRecipient"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"DocumentRecipient"> | Date | string
  }

  export type DocumentActivityWhereInput = {
    AND?: DocumentActivityWhereInput | DocumentActivityWhereInput[]
    OR?: DocumentActivityWhereInput[]
    NOT?: DocumentActivityWhereInput | DocumentActivityWhereInput[]
    id?: UuidFilter<"DocumentActivity"> | string
    document_id?: UuidFilter<"DocumentActivity"> | string
    document_recipient_id?: UuidNullableFilter<"DocumentActivity"> | string | null
    org_id?: UuidFilter<"DocumentActivity"> | string
    action?: StringFilter<"DocumentActivity"> | string
    ip_address?: StringNullableFilter<"DocumentActivity"> | string | null
    user_agent?: StringNullableFilter<"DocumentActivity"> | string | null
    metadata?: JsonFilter<"DocumentActivity">
    created_at?: DateTimeFilter<"DocumentActivity"> | Date | string
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    recipient?: XOR<DocumentRecipientNullableScalarRelationFilter, DocumentRecipientWhereInput> | null
  }

  export type DocumentActivityOrderByWithRelationInput = {
    id?: SortOrder
    document_id?: SortOrder
    document_recipient_id?: SortOrderInput | SortOrder
    org_id?: SortOrder
    action?: SortOrder
    ip_address?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    document?: DocumentOrderByWithRelationInput
    recipient?: DocumentRecipientOrderByWithRelationInput
  }

  export type DocumentActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentActivityWhereInput | DocumentActivityWhereInput[]
    OR?: DocumentActivityWhereInput[]
    NOT?: DocumentActivityWhereInput | DocumentActivityWhereInput[]
    document_id?: UuidFilter<"DocumentActivity"> | string
    document_recipient_id?: UuidNullableFilter<"DocumentActivity"> | string | null
    org_id?: UuidFilter<"DocumentActivity"> | string
    action?: StringFilter<"DocumentActivity"> | string
    ip_address?: StringNullableFilter<"DocumentActivity"> | string | null
    user_agent?: StringNullableFilter<"DocumentActivity"> | string | null
    metadata?: JsonFilter<"DocumentActivity">
    created_at?: DateTimeFilter<"DocumentActivity"> | Date | string
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    recipient?: XOR<DocumentRecipientNullableScalarRelationFilter, DocumentRecipientWhereInput> | null
  }, "id">

  export type DocumentActivityOrderByWithAggregationInput = {
    id?: SortOrder
    document_id?: SortOrder
    document_recipient_id?: SortOrderInput | SortOrder
    org_id?: SortOrder
    action?: SortOrder
    ip_address?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    _count?: DocumentActivityCountOrderByAggregateInput
    _max?: DocumentActivityMaxOrderByAggregateInput
    _min?: DocumentActivityMinOrderByAggregateInput
  }

  export type DocumentActivityScalarWhereWithAggregatesInput = {
    AND?: DocumentActivityScalarWhereWithAggregatesInput | DocumentActivityScalarWhereWithAggregatesInput[]
    OR?: DocumentActivityScalarWhereWithAggregatesInput[]
    NOT?: DocumentActivityScalarWhereWithAggregatesInput | DocumentActivityScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"DocumentActivity"> | string
    document_id?: UuidWithAggregatesFilter<"DocumentActivity"> | string
    document_recipient_id?: UuidNullableWithAggregatesFilter<"DocumentActivity"> | string | null
    org_id?: UuidWithAggregatesFilter<"DocumentActivity"> | string
    action?: StringWithAggregatesFilter<"DocumentActivity"> | string
    ip_address?: StringNullableWithAggregatesFilter<"DocumentActivity"> | string | null
    user_agent?: StringNullableWithAggregatesFilter<"DocumentActivity"> | string | null
    metadata?: JsonWithAggregatesFilter<"DocumentActivity">
    created_at?: DateTimeWithAggregatesFilter<"DocumentActivity"> | Date | string
  }

  export type ContactWaiverWhereInput = {
    AND?: ContactWaiverWhereInput | ContactWaiverWhereInput[]
    OR?: ContactWaiverWhereInput[]
    NOT?: ContactWaiverWhereInput | ContactWaiverWhereInput[]
    id?: UuidFilter<"ContactWaiver"> | string
    orgId?: UuidNullableFilter<"ContactWaiver"> | string | null
    createdByUserId?: StringNullableFilter<"ContactWaiver"> | string | null
    contactId?: UuidNullableFilter<"ContactWaiver"> | string | null
    name?: StringFilter<"ContactWaiver"> | string
    title?: StringNullableFilter<"ContactWaiver"> | string | null
    content?: StringFilter<"ContactWaiver"> | string
    status?: StringFilter<"ContactWaiver"> | string
    signatureType?: StringNullableFilter<"ContactWaiver"> | string | null
    templateLogo?: StringNullableFilter<"ContactWaiver"> | string | null
    signerName?: StringNullableFilter<"ContactWaiver"> | string | null
    signedAt?: DateTimeNullableFilter<"ContactWaiver"> | Date | string | null
    isDeleted?: BoolFilter<"ContactWaiver"> | boolean
    waiver?: JsonFilter<"ContactWaiver">
    questions?: JsonFilter<"ContactWaiver">
    members?: JsonFilter<"ContactWaiver">
    guardian?: JsonFilter<"ContactWaiver">
    orgBranding?: JsonFilter<"ContactWaiver">
    metadata?: JsonFilter<"ContactWaiver">
    createdAt?: DateTimeFilter<"ContactWaiver"> | Date | string
    updatedAt?: DateTimeFilter<"ContactWaiver"> | Date | string
  }

  export type ContactWaiverOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrderInput | SortOrder
    createdByUserId?: SortOrderInput | SortOrder
    contactId?: SortOrderInput | SortOrder
    name?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrder
    status?: SortOrder
    signatureType?: SortOrderInput | SortOrder
    templateLogo?: SortOrderInput | SortOrder
    signerName?: SortOrderInput | SortOrder
    signedAt?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    waiver?: SortOrder
    questions?: SortOrder
    members?: SortOrder
    guardian?: SortOrder
    orgBranding?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactWaiverWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactWaiverWhereInput | ContactWaiverWhereInput[]
    OR?: ContactWaiverWhereInput[]
    NOT?: ContactWaiverWhereInput | ContactWaiverWhereInput[]
    orgId?: UuidNullableFilter<"ContactWaiver"> | string | null
    createdByUserId?: StringNullableFilter<"ContactWaiver"> | string | null
    contactId?: UuidNullableFilter<"ContactWaiver"> | string | null
    name?: StringFilter<"ContactWaiver"> | string
    title?: StringNullableFilter<"ContactWaiver"> | string | null
    content?: StringFilter<"ContactWaiver"> | string
    status?: StringFilter<"ContactWaiver"> | string
    signatureType?: StringNullableFilter<"ContactWaiver"> | string | null
    templateLogo?: StringNullableFilter<"ContactWaiver"> | string | null
    signerName?: StringNullableFilter<"ContactWaiver"> | string | null
    signedAt?: DateTimeNullableFilter<"ContactWaiver"> | Date | string | null
    isDeleted?: BoolFilter<"ContactWaiver"> | boolean
    waiver?: JsonFilter<"ContactWaiver">
    questions?: JsonFilter<"ContactWaiver">
    members?: JsonFilter<"ContactWaiver">
    guardian?: JsonFilter<"ContactWaiver">
    orgBranding?: JsonFilter<"ContactWaiver">
    metadata?: JsonFilter<"ContactWaiver">
    createdAt?: DateTimeFilter<"ContactWaiver"> | Date | string
    updatedAt?: DateTimeFilter<"ContactWaiver"> | Date | string
  }, "id">

  export type ContactWaiverOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrderInput | SortOrder
    createdByUserId?: SortOrderInput | SortOrder
    contactId?: SortOrderInput | SortOrder
    name?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrder
    status?: SortOrder
    signatureType?: SortOrderInput | SortOrder
    templateLogo?: SortOrderInput | SortOrder
    signerName?: SortOrderInput | SortOrder
    signedAt?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    waiver?: SortOrder
    questions?: SortOrder
    members?: SortOrder
    guardian?: SortOrder
    orgBranding?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactWaiverCountOrderByAggregateInput
    _max?: ContactWaiverMaxOrderByAggregateInput
    _min?: ContactWaiverMinOrderByAggregateInput
  }

  export type ContactWaiverScalarWhereWithAggregatesInput = {
    AND?: ContactWaiverScalarWhereWithAggregatesInput | ContactWaiverScalarWhereWithAggregatesInput[]
    OR?: ContactWaiverScalarWhereWithAggregatesInput[]
    NOT?: ContactWaiverScalarWhereWithAggregatesInput | ContactWaiverScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ContactWaiver"> | string
    orgId?: UuidNullableWithAggregatesFilter<"ContactWaiver"> | string | null
    createdByUserId?: StringNullableWithAggregatesFilter<"ContactWaiver"> | string | null
    contactId?: UuidNullableWithAggregatesFilter<"ContactWaiver"> | string | null
    name?: StringWithAggregatesFilter<"ContactWaiver"> | string
    title?: StringNullableWithAggregatesFilter<"ContactWaiver"> | string | null
    content?: StringWithAggregatesFilter<"ContactWaiver"> | string
    status?: StringWithAggregatesFilter<"ContactWaiver"> | string
    signatureType?: StringNullableWithAggregatesFilter<"ContactWaiver"> | string | null
    templateLogo?: StringNullableWithAggregatesFilter<"ContactWaiver"> | string | null
    signerName?: StringNullableWithAggregatesFilter<"ContactWaiver"> | string | null
    signedAt?: DateTimeNullableWithAggregatesFilter<"ContactWaiver"> | Date | string | null
    isDeleted?: BoolWithAggregatesFilter<"ContactWaiver"> | boolean
    waiver?: JsonWithAggregatesFilter<"ContactWaiver">
    questions?: JsonWithAggregatesFilter<"ContactWaiver">
    members?: JsonWithAggregatesFilter<"ContactWaiver">
    guardian?: JsonWithAggregatesFilter<"ContactWaiver">
    orgBranding?: JsonWithAggregatesFilter<"ContactWaiver">
    metadata?: JsonWithAggregatesFilter<"ContactWaiver">
    createdAt?: DateTimeWithAggregatesFilter<"ContactWaiver"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContactWaiver"> | Date | string
  }

  export type DocumentCreateInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    name: string
    cloud_url: string
    type: string
    status?: string
    is_deleted?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    recipients?: DocumentRecipientCreateNestedManyWithoutDocumentInput
    activities?: DocumentActivityCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    name: string
    cloud_url: string
    type: string
    status?: string
    is_deleted?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    recipients?: DocumentRecipientUncheckedCreateNestedManyWithoutDocumentInput
    activities?: DocumentActivityUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cloud_url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipients?: DocumentRecipientUpdateManyWithoutDocumentNestedInput
    activities?: DocumentActivityUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cloud_url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipients?: DocumentRecipientUncheckedUpdateManyWithoutDocumentNestedInput
    activities?: DocumentActivityUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentCreateManyInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    name: string
    cloud_url: string
    type: string
    status?: string
    is_deleted?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cloud_url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cloud_url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentRecipientCreateInput = {
    id?: string
    org_id: string
    contact_id?: string | null
    name: string
    email: string
    status?: string
    hash_code?: string | null
    signed_at?: Date | string | null
    is_deleted?: boolean
    otp?: string | null
    otp_expires_at?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    document: DocumentCreateNestedOneWithoutRecipientsInput
    activities?: DocumentActivityCreateNestedManyWithoutRecipientInput
  }

  export type DocumentRecipientUncheckedCreateInput = {
    id?: string
    document_id: string
    org_id: string
    contact_id?: string | null
    name: string
    email: string
    status?: string
    hash_code?: string | null
    signed_at?: Date | string | null
    is_deleted?: boolean
    otp?: string | null
    otp_expires_at?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    activities?: DocumentActivityUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type DocumentRecipientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    contact_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    hash_code?: NullableStringFieldUpdateOperationsInput | string | null
    signed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: DocumentUpdateOneRequiredWithoutRecipientsNestedInput
    activities?: DocumentActivityUpdateManyWithoutRecipientNestedInput
  }

  export type DocumentRecipientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    contact_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    hash_code?: NullableStringFieldUpdateOperationsInput | string | null
    signed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: DocumentActivityUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type DocumentRecipientCreateManyInput = {
    id?: string
    document_id: string
    org_id: string
    contact_id?: string | null
    name: string
    email: string
    status?: string
    hash_code?: string | null
    signed_at?: Date | string | null
    is_deleted?: boolean
    otp?: string | null
    otp_expires_at?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DocumentRecipientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    contact_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    hash_code?: NullableStringFieldUpdateOperationsInput | string | null
    signed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentRecipientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    contact_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    hash_code?: NullableStringFieldUpdateOperationsInput | string | null
    signed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentActivityCreateInput = {
    id?: string
    org_id: string
    action: string
    ip_address?: string | null
    user_agent?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    document: DocumentCreateNestedOneWithoutActivitiesInput
    recipient?: DocumentRecipientCreateNestedOneWithoutActivitiesInput
  }

  export type DocumentActivityUncheckedCreateInput = {
    id?: string
    document_id: string
    document_recipient_id?: string | null
    org_id: string
    action: string
    ip_address?: string | null
    user_agent?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type DocumentActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: DocumentUpdateOneRequiredWithoutActivitiesNestedInput
    recipient?: DocumentRecipientUpdateOneWithoutActivitiesNestedInput
  }

  export type DocumentActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    document_recipient_id?: NullableStringFieldUpdateOperationsInput | string | null
    org_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentActivityCreateManyInput = {
    id?: string
    document_id: string
    document_recipient_id?: string | null
    org_id: string
    action: string
    ip_address?: string | null
    user_agent?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type DocumentActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    document_recipient_id?: NullableStringFieldUpdateOperationsInput | string | null
    org_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactWaiverCreateInput = {
    id?: string
    orgId?: string | null
    createdByUserId?: string | null
    contactId?: string | null
    name: string
    title?: string | null
    content: string
    status?: string
    signatureType?: string | null
    templateLogo?: string | null
    signerName?: string | null
    signedAt?: Date | string | null
    isDeleted?: boolean
    waiver?: JsonNullValueInput | InputJsonValue
    questions?: JsonNullValueInput | InputJsonValue
    members?: JsonNullValueInput | InputJsonValue
    guardian?: JsonNullValueInput | InputJsonValue
    orgBranding?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactWaiverUncheckedCreateInput = {
    id?: string
    orgId?: string | null
    createdByUserId?: string | null
    contactId?: string | null
    name: string
    title?: string | null
    content: string
    status?: string
    signatureType?: string | null
    templateLogo?: string | null
    signerName?: string | null
    signedAt?: Date | string | null
    isDeleted?: boolean
    waiver?: JsonNullValueInput | InputJsonValue
    questions?: JsonNullValueInput | InputJsonValue
    members?: JsonNullValueInput | InputJsonValue
    guardian?: JsonNullValueInput | InputJsonValue
    orgBranding?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactWaiverUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    signatureType?: NullableStringFieldUpdateOperationsInput | string | null
    templateLogo?: NullableStringFieldUpdateOperationsInput | string | null
    signerName?: NullableStringFieldUpdateOperationsInput | string | null
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    waiver?: JsonNullValueInput | InputJsonValue
    questions?: JsonNullValueInput | InputJsonValue
    members?: JsonNullValueInput | InputJsonValue
    guardian?: JsonNullValueInput | InputJsonValue
    orgBranding?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactWaiverUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    signatureType?: NullableStringFieldUpdateOperationsInput | string | null
    templateLogo?: NullableStringFieldUpdateOperationsInput | string | null
    signerName?: NullableStringFieldUpdateOperationsInput | string | null
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    waiver?: JsonNullValueInput | InputJsonValue
    questions?: JsonNullValueInput | InputJsonValue
    members?: JsonNullValueInput | InputJsonValue
    guardian?: JsonNullValueInput | InputJsonValue
    orgBranding?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactWaiverCreateManyInput = {
    id?: string
    orgId?: string | null
    createdByUserId?: string | null
    contactId?: string | null
    name: string
    title?: string | null
    content: string
    status?: string
    signatureType?: string | null
    templateLogo?: string | null
    signerName?: string | null
    signedAt?: Date | string | null
    isDeleted?: boolean
    waiver?: JsonNullValueInput | InputJsonValue
    questions?: JsonNullValueInput | InputJsonValue
    members?: JsonNullValueInput | InputJsonValue
    guardian?: JsonNullValueInput | InputJsonValue
    orgBranding?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactWaiverUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    signatureType?: NullableStringFieldUpdateOperationsInput | string | null
    templateLogo?: NullableStringFieldUpdateOperationsInput | string | null
    signerName?: NullableStringFieldUpdateOperationsInput | string | null
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    waiver?: JsonNullValueInput | InputJsonValue
    questions?: JsonNullValueInput | InputJsonValue
    members?: JsonNullValueInput | InputJsonValue
    guardian?: JsonNullValueInput | InputJsonValue
    orgBranding?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactWaiverUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    signatureType?: NullableStringFieldUpdateOperationsInput | string | null
    templateLogo?: NullableStringFieldUpdateOperationsInput | string | null
    signerName?: NullableStringFieldUpdateOperationsInput | string | null
    signedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    waiver?: JsonNullValueInput | InputJsonValue
    questions?: JsonNullValueInput | InputJsonValue
    members?: JsonNullValueInput | InputJsonValue
    guardian?: JsonNullValueInput | InputJsonValue
    orgBranding?: JsonNullValueInput | InputJsonValue
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type DocumentRecipientListRelationFilter = {
    every?: DocumentRecipientWhereInput
    some?: DocumentRecipientWhereInput
    none?: DocumentRecipientWhereInput
  }

  export type DocumentActivityListRelationFilter = {
    every?: DocumentActivityWhereInput
    some?: DocumentActivityWhereInput
    none?: DocumentActivityWhereInput
  }

  export type DocumentRecipientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by_user_id?: SortOrder
    name?: SortOrder
    cloud_url?: SortOrder
    type?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by_user_id?: SortOrder
    name?: SortOrder
    cloud_url?: SortOrder
    type?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by_user_id?: SortOrder
    name?: SortOrder
    cloud_url?: SortOrder
    type?: SortOrder
    status?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type DocumentScalarRelationFilter = {
    is?: DocumentWhereInput
    isNot?: DocumentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DocumentRecipientCountOrderByAggregateInput = {
    id?: SortOrder
    document_id?: SortOrder
    org_id?: SortOrder
    contact_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    status?: SortOrder
    hash_code?: SortOrder
    signed_at?: SortOrder
    is_deleted?: SortOrder
    otp?: SortOrder
    otp_expires_at?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DocumentRecipientMaxOrderByAggregateInput = {
    id?: SortOrder
    document_id?: SortOrder
    org_id?: SortOrder
    contact_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    status?: SortOrder
    hash_code?: SortOrder
    signed_at?: SortOrder
    is_deleted?: SortOrder
    otp?: SortOrder
    otp_expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DocumentRecipientMinOrderByAggregateInput = {
    id?: SortOrder
    document_id?: SortOrder
    org_id?: SortOrder
    contact_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    status?: SortOrder
    hash_code?: SortOrder
    signed_at?: SortOrder
    is_deleted?: SortOrder
    otp?: SortOrder
    otp_expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type DocumentRecipientNullableScalarRelationFilter = {
    is?: DocumentRecipientWhereInput | null
    isNot?: DocumentRecipientWhereInput | null
  }

  export type DocumentActivityCountOrderByAggregateInput = {
    id?: SortOrder
    document_id?: SortOrder
    document_recipient_id?: SortOrder
    org_id?: SortOrder
    action?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
  }

  export type DocumentActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    document_id?: SortOrder
    document_recipient_id?: SortOrder
    org_id?: SortOrder
    action?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    created_at?: SortOrder
  }

  export type DocumentActivityMinOrderByAggregateInput = {
    id?: SortOrder
    document_id?: SortOrder
    document_recipient_id?: SortOrder
    org_id?: SortOrder
    action?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    created_at?: SortOrder
  }

  export type ContactWaiverCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdByUserId?: SortOrder
    contactId?: SortOrder
    name?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    signatureType?: SortOrder
    templateLogo?: SortOrder
    signerName?: SortOrder
    signedAt?: SortOrder
    isDeleted?: SortOrder
    waiver?: SortOrder
    questions?: SortOrder
    members?: SortOrder
    guardian?: SortOrder
    orgBranding?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactWaiverMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdByUserId?: SortOrder
    contactId?: SortOrder
    name?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    signatureType?: SortOrder
    templateLogo?: SortOrder
    signerName?: SortOrder
    signedAt?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactWaiverMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdByUserId?: SortOrder
    contactId?: SortOrder
    name?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    signatureType?: SortOrder
    templateLogo?: SortOrder
    signerName?: SortOrder
    signedAt?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentRecipientCreateNestedManyWithoutDocumentInput = {
    create?: XOR<DocumentRecipientCreateWithoutDocumentInput, DocumentRecipientUncheckedCreateWithoutDocumentInput> | DocumentRecipientCreateWithoutDocumentInput[] | DocumentRecipientUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentRecipientCreateOrConnectWithoutDocumentInput | DocumentRecipientCreateOrConnectWithoutDocumentInput[]
    createMany?: DocumentRecipientCreateManyDocumentInputEnvelope
    connect?: DocumentRecipientWhereUniqueInput | DocumentRecipientWhereUniqueInput[]
  }

  export type DocumentActivityCreateNestedManyWithoutDocumentInput = {
    create?: XOR<DocumentActivityCreateWithoutDocumentInput, DocumentActivityUncheckedCreateWithoutDocumentInput> | DocumentActivityCreateWithoutDocumentInput[] | DocumentActivityUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentActivityCreateOrConnectWithoutDocumentInput | DocumentActivityCreateOrConnectWithoutDocumentInput[]
    createMany?: DocumentActivityCreateManyDocumentInputEnvelope
    connect?: DocumentActivityWhereUniqueInput | DocumentActivityWhereUniqueInput[]
  }

  export type DocumentRecipientUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<DocumentRecipientCreateWithoutDocumentInput, DocumentRecipientUncheckedCreateWithoutDocumentInput> | DocumentRecipientCreateWithoutDocumentInput[] | DocumentRecipientUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentRecipientCreateOrConnectWithoutDocumentInput | DocumentRecipientCreateOrConnectWithoutDocumentInput[]
    createMany?: DocumentRecipientCreateManyDocumentInputEnvelope
    connect?: DocumentRecipientWhereUniqueInput | DocumentRecipientWhereUniqueInput[]
  }

  export type DocumentActivityUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<DocumentActivityCreateWithoutDocumentInput, DocumentActivityUncheckedCreateWithoutDocumentInput> | DocumentActivityCreateWithoutDocumentInput[] | DocumentActivityUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentActivityCreateOrConnectWithoutDocumentInput | DocumentActivityCreateOrConnectWithoutDocumentInput[]
    createMany?: DocumentActivityCreateManyDocumentInputEnvelope
    connect?: DocumentActivityWhereUniqueInput | DocumentActivityWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DocumentRecipientUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<DocumentRecipientCreateWithoutDocumentInput, DocumentRecipientUncheckedCreateWithoutDocumentInput> | DocumentRecipientCreateWithoutDocumentInput[] | DocumentRecipientUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentRecipientCreateOrConnectWithoutDocumentInput | DocumentRecipientCreateOrConnectWithoutDocumentInput[]
    upsert?: DocumentRecipientUpsertWithWhereUniqueWithoutDocumentInput | DocumentRecipientUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: DocumentRecipientCreateManyDocumentInputEnvelope
    set?: DocumentRecipientWhereUniqueInput | DocumentRecipientWhereUniqueInput[]
    disconnect?: DocumentRecipientWhereUniqueInput | DocumentRecipientWhereUniqueInput[]
    delete?: DocumentRecipientWhereUniqueInput | DocumentRecipientWhereUniqueInput[]
    connect?: DocumentRecipientWhereUniqueInput | DocumentRecipientWhereUniqueInput[]
    update?: DocumentRecipientUpdateWithWhereUniqueWithoutDocumentInput | DocumentRecipientUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: DocumentRecipientUpdateManyWithWhereWithoutDocumentInput | DocumentRecipientUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: DocumentRecipientScalarWhereInput | DocumentRecipientScalarWhereInput[]
  }

  export type DocumentActivityUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<DocumentActivityCreateWithoutDocumentInput, DocumentActivityUncheckedCreateWithoutDocumentInput> | DocumentActivityCreateWithoutDocumentInput[] | DocumentActivityUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentActivityCreateOrConnectWithoutDocumentInput | DocumentActivityCreateOrConnectWithoutDocumentInput[]
    upsert?: DocumentActivityUpsertWithWhereUniqueWithoutDocumentInput | DocumentActivityUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: DocumentActivityCreateManyDocumentInputEnvelope
    set?: DocumentActivityWhereUniqueInput | DocumentActivityWhereUniqueInput[]
    disconnect?: DocumentActivityWhereUniqueInput | DocumentActivityWhereUniqueInput[]
    delete?: DocumentActivityWhereUniqueInput | DocumentActivityWhereUniqueInput[]
    connect?: DocumentActivityWhereUniqueInput | DocumentActivityWhereUniqueInput[]
    update?: DocumentActivityUpdateWithWhereUniqueWithoutDocumentInput | DocumentActivityUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: DocumentActivityUpdateManyWithWhereWithoutDocumentInput | DocumentActivityUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: DocumentActivityScalarWhereInput | DocumentActivityScalarWhereInput[]
  }

  export type DocumentRecipientUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<DocumentRecipientCreateWithoutDocumentInput, DocumentRecipientUncheckedCreateWithoutDocumentInput> | DocumentRecipientCreateWithoutDocumentInput[] | DocumentRecipientUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentRecipientCreateOrConnectWithoutDocumentInput | DocumentRecipientCreateOrConnectWithoutDocumentInput[]
    upsert?: DocumentRecipientUpsertWithWhereUniqueWithoutDocumentInput | DocumentRecipientUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: DocumentRecipientCreateManyDocumentInputEnvelope
    set?: DocumentRecipientWhereUniqueInput | DocumentRecipientWhereUniqueInput[]
    disconnect?: DocumentRecipientWhereUniqueInput | DocumentRecipientWhereUniqueInput[]
    delete?: DocumentRecipientWhereUniqueInput | DocumentRecipientWhereUniqueInput[]
    connect?: DocumentRecipientWhereUniqueInput | DocumentRecipientWhereUniqueInput[]
    update?: DocumentRecipientUpdateWithWhereUniqueWithoutDocumentInput | DocumentRecipientUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: DocumentRecipientUpdateManyWithWhereWithoutDocumentInput | DocumentRecipientUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: DocumentRecipientScalarWhereInput | DocumentRecipientScalarWhereInput[]
  }

  export type DocumentActivityUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<DocumentActivityCreateWithoutDocumentInput, DocumentActivityUncheckedCreateWithoutDocumentInput> | DocumentActivityCreateWithoutDocumentInput[] | DocumentActivityUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentActivityCreateOrConnectWithoutDocumentInput | DocumentActivityCreateOrConnectWithoutDocumentInput[]
    upsert?: DocumentActivityUpsertWithWhereUniqueWithoutDocumentInput | DocumentActivityUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: DocumentActivityCreateManyDocumentInputEnvelope
    set?: DocumentActivityWhereUniqueInput | DocumentActivityWhereUniqueInput[]
    disconnect?: DocumentActivityWhereUniqueInput | DocumentActivityWhereUniqueInput[]
    delete?: DocumentActivityWhereUniqueInput | DocumentActivityWhereUniqueInput[]
    connect?: DocumentActivityWhereUniqueInput | DocumentActivityWhereUniqueInput[]
    update?: DocumentActivityUpdateWithWhereUniqueWithoutDocumentInput | DocumentActivityUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: DocumentActivityUpdateManyWithWhereWithoutDocumentInput | DocumentActivityUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: DocumentActivityScalarWhereInput | DocumentActivityScalarWhereInput[]
  }

  export type DocumentCreateNestedOneWithoutRecipientsInput = {
    create?: XOR<DocumentCreateWithoutRecipientsInput, DocumentUncheckedCreateWithoutRecipientsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutRecipientsInput
    connect?: DocumentWhereUniqueInput
  }

  export type DocumentActivityCreateNestedManyWithoutRecipientInput = {
    create?: XOR<DocumentActivityCreateWithoutRecipientInput, DocumentActivityUncheckedCreateWithoutRecipientInput> | DocumentActivityCreateWithoutRecipientInput[] | DocumentActivityUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: DocumentActivityCreateOrConnectWithoutRecipientInput | DocumentActivityCreateOrConnectWithoutRecipientInput[]
    createMany?: DocumentActivityCreateManyRecipientInputEnvelope
    connect?: DocumentActivityWhereUniqueInput | DocumentActivityWhereUniqueInput[]
  }

  export type DocumentActivityUncheckedCreateNestedManyWithoutRecipientInput = {
    create?: XOR<DocumentActivityCreateWithoutRecipientInput, DocumentActivityUncheckedCreateWithoutRecipientInput> | DocumentActivityCreateWithoutRecipientInput[] | DocumentActivityUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: DocumentActivityCreateOrConnectWithoutRecipientInput | DocumentActivityCreateOrConnectWithoutRecipientInput[]
    createMany?: DocumentActivityCreateManyRecipientInputEnvelope
    connect?: DocumentActivityWhereUniqueInput | DocumentActivityWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DocumentUpdateOneRequiredWithoutRecipientsNestedInput = {
    create?: XOR<DocumentCreateWithoutRecipientsInput, DocumentUncheckedCreateWithoutRecipientsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutRecipientsInput
    upsert?: DocumentUpsertWithoutRecipientsInput
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutRecipientsInput, DocumentUpdateWithoutRecipientsInput>, DocumentUncheckedUpdateWithoutRecipientsInput>
  }

  export type DocumentActivityUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<DocumentActivityCreateWithoutRecipientInput, DocumentActivityUncheckedCreateWithoutRecipientInput> | DocumentActivityCreateWithoutRecipientInput[] | DocumentActivityUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: DocumentActivityCreateOrConnectWithoutRecipientInput | DocumentActivityCreateOrConnectWithoutRecipientInput[]
    upsert?: DocumentActivityUpsertWithWhereUniqueWithoutRecipientInput | DocumentActivityUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: DocumentActivityCreateManyRecipientInputEnvelope
    set?: DocumentActivityWhereUniqueInput | DocumentActivityWhereUniqueInput[]
    disconnect?: DocumentActivityWhereUniqueInput | DocumentActivityWhereUniqueInput[]
    delete?: DocumentActivityWhereUniqueInput | DocumentActivityWhereUniqueInput[]
    connect?: DocumentActivityWhereUniqueInput | DocumentActivityWhereUniqueInput[]
    update?: DocumentActivityUpdateWithWhereUniqueWithoutRecipientInput | DocumentActivityUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: DocumentActivityUpdateManyWithWhereWithoutRecipientInput | DocumentActivityUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: DocumentActivityScalarWhereInput | DocumentActivityScalarWhereInput[]
  }

  export type DocumentActivityUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<DocumentActivityCreateWithoutRecipientInput, DocumentActivityUncheckedCreateWithoutRecipientInput> | DocumentActivityCreateWithoutRecipientInput[] | DocumentActivityUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: DocumentActivityCreateOrConnectWithoutRecipientInput | DocumentActivityCreateOrConnectWithoutRecipientInput[]
    upsert?: DocumentActivityUpsertWithWhereUniqueWithoutRecipientInput | DocumentActivityUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: DocumentActivityCreateManyRecipientInputEnvelope
    set?: DocumentActivityWhereUniqueInput | DocumentActivityWhereUniqueInput[]
    disconnect?: DocumentActivityWhereUniqueInput | DocumentActivityWhereUniqueInput[]
    delete?: DocumentActivityWhereUniqueInput | DocumentActivityWhereUniqueInput[]
    connect?: DocumentActivityWhereUniqueInput | DocumentActivityWhereUniqueInput[]
    update?: DocumentActivityUpdateWithWhereUniqueWithoutRecipientInput | DocumentActivityUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: DocumentActivityUpdateManyWithWhereWithoutRecipientInput | DocumentActivityUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: DocumentActivityScalarWhereInput | DocumentActivityScalarWhereInput[]
  }

  export type DocumentCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<DocumentCreateWithoutActivitiesInput, DocumentUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutActivitiesInput
    connect?: DocumentWhereUniqueInput
  }

  export type DocumentRecipientCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<DocumentRecipientCreateWithoutActivitiesInput, DocumentRecipientUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: DocumentRecipientCreateOrConnectWithoutActivitiesInput
    connect?: DocumentRecipientWhereUniqueInput
  }

  export type DocumentUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<DocumentCreateWithoutActivitiesInput, DocumentUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutActivitiesInput
    upsert?: DocumentUpsertWithoutActivitiesInput
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutActivitiesInput, DocumentUpdateWithoutActivitiesInput>, DocumentUncheckedUpdateWithoutActivitiesInput>
  }

  export type DocumentRecipientUpdateOneWithoutActivitiesNestedInput = {
    create?: XOR<DocumentRecipientCreateWithoutActivitiesInput, DocumentRecipientUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: DocumentRecipientCreateOrConnectWithoutActivitiesInput
    upsert?: DocumentRecipientUpsertWithoutActivitiesInput
    disconnect?: DocumentRecipientWhereInput | boolean
    delete?: DocumentRecipientWhereInput | boolean
    connect?: DocumentRecipientWhereUniqueInput
    update?: XOR<XOR<DocumentRecipientUpdateToOneWithWhereWithoutActivitiesInput, DocumentRecipientUpdateWithoutActivitiesInput>, DocumentRecipientUncheckedUpdateWithoutActivitiesInput>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type DocumentRecipientCreateWithoutDocumentInput = {
    id?: string
    org_id: string
    contact_id?: string | null
    name: string
    email: string
    status?: string
    hash_code?: string | null
    signed_at?: Date | string | null
    is_deleted?: boolean
    otp?: string | null
    otp_expires_at?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    activities?: DocumentActivityCreateNestedManyWithoutRecipientInput
  }

  export type DocumentRecipientUncheckedCreateWithoutDocumentInput = {
    id?: string
    org_id: string
    contact_id?: string | null
    name: string
    email: string
    status?: string
    hash_code?: string | null
    signed_at?: Date | string | null
    is_deleted?: boolean
    otp?: string | null
    otp_expires_at?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    activities?: DocumentActivityUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type DocumentRecipientCreateOrConnectWithoutDocumentInput = {
    where: DocumentRecipientWhereUniqueInput
    create: XOR<DocumentRecipientCreateWithoutDocumentInput, DocumentRecipientUncheckedCreateWithoutDocumentInput>
  }

  export type DocumentRecipientCreateManyDocumentInputEnvelope = {
    data: DocumentRecipientCreateManyDocumentInput | DocumentRecipientCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type DocumentActivityCreateWithoutDocumentInput = {
    id?: string
    org_id: string
    action: string
    ip_address?: string | null
    user_agent?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    recipient?: DocumentRecipientCreateNestedOneWithoutActivitiesInput
  }

  export type DocumentActivityUncheckedCreateWithoutDocumentInput = {
    id?: string
    document_recipient_id?: string | null
    org_id: string
    action: string
    ip_address?: string | null
    user_agent?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type DocumentActivityCreateOrConnectWithoutDocumentInput = {
    where: DocumentActivityWhereUniqueInput
    create: XOR<DocumentActivityCreateWithoutDocumentInput, DocumentActivityUncheckedCreateWithoutDocumentInput>
  }

  export type DocumentActivityCreateManyDocumentInputEnvelope = {
    data: DocumentActivityCreateManyDocumentInput | DocumentActivityCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type DocumentRecipientUpsertWithWhereUniqueWithoutDocumentInput = {
    where: DocumentRecipientWhereUniqueInput
    update: XOR<DocumentRecipientUpdateWithoutDocumentInput, DocumentRecipientUncheckedUpdateWithoutDocumentInput>
    create: XOR<DocumentRecipientCreateWithoutDocumentInput, DocumentRecipientUncheckedCreateWithoutDocumentInput>
  }

  export type DocumentRecipientUpdateWithWhereUniqueWithoutDocumentInput = {
    where: DocumentRecipientWhereUniqueInput
    data: XOR<DocumentRecipientUpdateWithoutDocumentInput, DocumentRecipientUncheckedUpdateWithoutDocumentInput>
  }

  export type DocumentRecipientUpdateManyWithWhereWithoutDocumentInput = {
    where: DocumentRecipientScalarWhereInput
    data: XOR<DocumentRecipientUpdateManyMutationInput, DocumentRecipientUncheckedUpdateManyWithoutDocumentInput>
  }

  export type DocumentRecipientScalarWhereInput = {
    AND?: DocumentRecipientScalarWhereInput | DocumentRecipientScalarWhereInput[]
    OR?: DocumentRecipientScalarWhereInput[]
    NOT?: DocumentRecipientScalarWhereInput | DocumentRecipientScalarWhereInput[]
    id?: UuidFilter<"DocumentRecipient"> | string
    document_id?: UuidFilter<"DocumentRecipient"> | string
    org_id?: UuidFilter<"DocumentRecipient"> | string
    contact_id?: UuidNullableFilter<"DocumentRecipient"> | string | null
    name?: StringFilter<"DocumentRecipient"> | string
    email?: StringFilter<"DocumentRecipient"> | string
    status?: StringFilter<"DocumentRecipient"> | string
    hash_code?: StringNullableFilter<"DocumentRecipient"> | string | null
    signed_at?: DateTimeNullableFilter<"DocumentRecipient"> | Date | string | null
    is_deleted?: BoolFilter<"DocumentRecipient"> | boolean
    otp?: StringNullableFilter<"DocumentRecipient"> | string | null
    otp_expires_at?: DateTimeNullableFilter<"DocumentRecipient"> | Date | string | null
    metadata?: JsonFilter<"DocumentRecipient">
    created_at?: DateTimeFilter<"DocumentRecipient"> | Date | string
    updated_at?: DateTimeFilter<"DocumentRecipient"> | Date | string
  }

  export type DocumentActivityUpsertWithWhereUniqueWithoutDocumentInput = {
    where: DocumentActivityWhereUniqueInput
    update: XOR<DocumentActivityUpdateWithoutDocumentInput, DocumentActivityUncheckedUpdateWithoutDocumentInput>
    create: XOR<DocumentActivityCreateWithoutDocumentInput, DocumentActivityUncheckedCreateWithoutDocumentInput>
  }

  export type DocumentActivityUpdateWithWhereUniqueWithoutDocumentInput = {
    where: DocumentActivityWhereUniqueInput
    data: XOR<DocumentActivityUpdateWithoutDocumentInput, DocumentActivityUncheckedUpdateWithoutDocumentInput>
  }

  export type DocumentActivityUpdateManyWithWhereWithoutDocumentInput = {
    where: DocumentActivityScalarWhereInput
    data: XOR<DocumentActivityUpdateManyMutationInput, DocumentActivityUncheckedUpdateManyWithoutDocumentInput>
  }

  export type DocumentActivityScalarWhereInput = {
    AND?: DocumentActivityScalarWhereInput | DocumentActivityScalarWhereInput[]
    OR?: DocumentActivityScalarWhereInput[]
    NOT?: DocumentActivityScalarWhereInput | DocumentActivityScalarWhereInput[]
    id?: UuidFilter<"DocumentActivity"> | string
    document_id?: UuidFilter<"DocumentActivity"> | string
    document_recipient_id?: UuidNullableFilter<"DocumentActivity"> | string | null
    org_id?: UuidFilter<"DocumentActivity"> | string
    action?: StringFilter<"DocumentActivity"> | string
    ip_address?: StringNullableFilter<"DocumentActivity"> | string | null
    user_agent?: StringNullableFilter<"DocumentActivity"> | string | null
    metadata?: JsonFilter<"DocumentActivity">
    created_at?: DateTimeFilter<"DocumentActivity"> | Date | string
  }

  export type DocumentCreateWithoutRecipientsInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    name: string
    cloud_url: string
    type: string
    status?: string
    is_deleted?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    activities?: DocumentActivityCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutRecipientsInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    name: string
    cloud_url: string
    type: string
    status?: string
    is_deleted?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    activities?: DocumentActivityUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutRecipientsInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutRecipientsInput, DocumentUncheckedCreateWithoutRecipientsInput>
  }

  export type DocumentActivityCreateWithoutRecipientInput = {
    id?: string
    org_id: string
    action: string
    ip_address?: string | null
    user_agent?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    document: DocumentCreateNestedOneWithoutActivitiesInput
  }

  export type DocumentActivityUncheckedCreateWithoutRecipientInput = {
    id?: string
    document_id: string
    org_id: string
    action: string
    ip_address?: string | null
    user_agent?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type DocumentActivityCreateOrConnectWithoutRecipientInput = {
    where: DocumentActivityWhereUniqueInput
    create: XOR<DocumentActivityCreateWithoutRecipientInput, DocumentActivityUncheckedCreateWithoutRecipientInput>
  }

  export type DocumentActivityCreateManyRecipientInputEnvelope = {
    data: DocumentActivityCreateManyRecipientInput | DocumentActivityCreateManyRecipientInput[]
    skipDuplicates?: boolean
  }

  export type DocumentUpsertWithoutRecipientsInput = {
    update: XOR<DocumentUpdateWithoutRecipientsInput, DocumentUncheckedUpdateWithoutRecipientsInput>
    create: XOR<DocumentCreateWithoutRecipientsInput, DocumentUncheckedCreateWithoutRecipientsInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutRecipientsInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutRecipientsInput, DocumentUncheckedUpdateWithoutRecipientsInput>
  }

  export type DocumentUpdateWithoutRecipientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cloud_url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: DocumentActivityUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutRecipientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cloud_url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: DocumentActivityUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentActivityUpsertWithWhereUniqueWithoutRecipientInput = {
    where: DocumentActivityWhereUniqueInput
    update: XOR<DocumentActivityUpdateWithoutRecipientInput, DocumentActivityUncheckedUpdateWithoutRecipientInput>
    create: XOR<DocumentActivityCreateWithoutRecipientInput, DocumentActivityUncheckedCreateWithoutRecipientInput>
  }

  export type DocumentActivityUpdateWithWhereUniqueWithoutRecipientInput = {
    where: DocumentActivityWhereUniqueInput
    data: XOR<DocumentActivityUpdateWithoutRecipientInput, DocumentActivityUncheckedUpdateWithoutRecipientInput>
  }

  export type DocumentActivityUpdateManyWithWhereWithoutRecipientInput = {
    where: DocumentActivityScalarWhereInput
    data: XOR<DocumentActivityUpdateManyMutationInput, DocumentActivityUncheckedUpdateManyWithoutRecipientInput>
  }

  export type DocumentCreateWithoutActivitiesInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    name: string
    cloud_url: string
    type: string
    status?: string
    is_deleted?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    recipients?: DocumentRecipientCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutActivitiesInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    name: string
    cloud_url: string
    type: string
    status?: string
    is_deleted?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    recipients?: DocumentRecipientUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutActivitiesInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutActivitiesInput, DocumentUncheckedCreateWithoutActivitiesInput>
  }

  export type DocumentRecipientCreateWithoutActivitiesInput = {
    id?: string
    org_id: string
    contact_id?: string | null
    name: string
    email: string
    status?: string
    hash_code?: string | null
    signed_at?: Date | string | null
    is_deleted?: boolean
    otp?: string | null
    otp_expires_at?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    document: DocumentCreateNestedOneWithoutRecipientsInput
  }

  export type DocumentRecipientUncheckedCreateWithoutActivitiesInput = {
    id?: string
    document_id: string
    org_id: string
    contact_id?: string | null
    name: string
    email: string
    status?: string
    hash_code?: string | null
    signed_at?: Date | string | null
    is_deleted?: boolean
    otp?: string | null
    otp_expires_at?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DocumentRecipientCreateOrConnectWithoutActivitiesInput = {
    where: DocumentRecipientWhereUniqueInput
    create: XOR<DocumentRecipientCreateWithoutActivitiesInput, DocumentRecipientUncheckedCreateWithoutActivitiesInput>
  }

  export type DocumentUpsertWithoutActivitiesInput = {
    update: XOR<DocumentUpdateWithoutActivitiesInput, DocumentUncheckedUpdateWithoutActivitiesInput>
    create: XOR<DocumentCreateWithoutActivitiesInput, DocumentUncheckedCreateWithoutActivitiesInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutActivitiesInput, DocumentUncheckedUpdateWithoutActivitiesInput>
  }

  export type DocumentUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cloud_url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipients?: DocumentRecipientUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cloud_url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipients?: DocumentRecipientUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentRecipientUpsertWithoutActivitiesInput = {
    update: XOR<DocumentRecipientUpdateWithoutActivitiesInput, DocumentRecipientUncheckedUpdateWithoutActivitiesInput>
    create: XOR<DocumentRecipientCreateWithoutActivitiesInput, DocumentRecipientUncheckedCreateWithoutActivitiesInput>
    where?: DocumentRecipientWhereInput
  }

  export type DocumentRecipientUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: DocumentRecipientWhereInput
    data: XOR<DocumentRecipientUpdateWithoutActivitiesInput, DocumentRecipientUncheckedUpdateWithoutActivitiesInput>
  }

  export type DocumentRecipientUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    contact_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    hash_code?: NullableStringFieldUpdateOperationsInput | string | null
    signed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: DocumentUpdateOneRequiredWithoutRecipientsNestedInput
  }

  export type DocumentRecipientUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    contact_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    hash_code?: NullableStringFieldUpdateOperationsInput | string | null
    signed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentRecipientCreateManyDocumentInput = {
    id?: string
    org_id: string
    contact_id?: string | null
    name: string
    email: string
    status?: string
    hash_code?: string | null
    signed_at?: Date | string | null
    is_deleted?: boolean
    otp?: string | null
    otp_expires_at?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DocumentActivityCreateManyDocumentInput = {
    id?: string
    document_recipient_id?: string | null
    org_id: string
    action: string
    ip_address?: string | null
    user_agent?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type DocumentRecipientUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    contact_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    hash_code?: NullableStringFieldUpdateOperationsInput | string | null
    signed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: DocumentActivityUpdateManyWithoutRecipientNestedInput
  }

  export type DocumentRecipientUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    contact_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    hash_code?: NullableStringFieldUpdateOperationsInput | string | null
    signed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: DocumentActivityUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type DocumentRecipientUncheckedUpdateManyWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    contact_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    hash_code?: NullableStringFieldUpdateOperationsInput | string | null
    signed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentActivityUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipient?: DocumentRecipientUpdateOneWithoutActivitiesNestedInput
  }

  export type DocumentActivityUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_recipient_id?: NullableStringFieldUpdateOperationsInput | string | null
    org_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentActivityUncheckedUpdateManyWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_recipient_id?: NullableStringFieldUpdateOperationsInput | string | null
    org_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentActivityCreateManyRecipientInput = {
    id?: string
    document_id: string
    org_id: string
    action: string
    ip_address?: string | null
    user_agent?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type DocumentActivityUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: DocumentUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type DocumentActivityUncheckedUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentActivityUncheckedUpdateManyWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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