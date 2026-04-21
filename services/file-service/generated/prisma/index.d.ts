
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
 * Model FileManager
 * 
 */
export type FileManager = $Result.DefaultSelection<Prisma.$FileManagerPayload>
/**
 * Model FileManagerActivity
 * 
 */
export type FileManagerActivity = $Result.DefaultSelection<Prisma.$FileManagerActivityPayload>
/**
 * Model ImageLibrary
 * 
 */
export type ImageLibrary = $Result.DefaultSelection<Prisma.$ImageLibraryPayload>
/**
 * Model FileUploadProgress
 * 
 */
export type FileUploadProgress = $Result.DefaultSelection<Prisma.$FileUploadProgressPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more FileManagers
 * const fileManagers = await prisma.fileManager.findMany()
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
   * // Fetch zero or more FileManagers
   * const fileManagers = await prisma.fileManager.findMany()
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
   * `prisma.fileManager`: Exposes CRUD operations for the **FileManager** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FileManagers
    * const fileManagers = await prisma.fileManager.findMany()
    * ```
    */
  get fileManager(): Prisma.FileManagerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fileManagerActivity`: Exposes CRUD operations for the **FileManagerActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FileManagerActivities
    * const fileManagerActivities = await prisma.fileManagerActivity.findMany()
    * ```
    */
  get fileManagerActivity(): Prisma.FileManagerActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imageLibrary`: Exposes CRUD operations for the **ImageLibrary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImageLibraries
    * const imageLibraries = await prisma.imageLibrary.findMany()
    * ```
    */
  get imageLibrary(): Prisma.ImageLibraryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fileUploadProgress`: Exposes CRUD operations for the **FileUploadProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FileUploadProgresses
    * const fileUploadProgresses = await prisma.fileUploadProgress.findMany()
    * ```
    */
  get fileUploadProgress(): Prisma.FileUploadProgressDelegate<ExtArgs, ClientOptions>;
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
    FileManager: 'FileManager',
    FileManagerActivity: 'FileManagerActivity',
    ImageLibrary: 'ImageLibrary',
    FileUploadProgress: 'FileUploadProgress'
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
      modelProps: "fileManager" | "fileManagerActivity" | "imageLibrary" | "fileUploadProgress"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      FileManager: {
        payload: Prisma.$FileManagerPayload<ExtArgs>
        fields: Prisma.FileManagerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileManagerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileManagerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileManagerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileManagerPayload>
          }
          findFirst: {
            args: Prisma.FileManagerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileManagerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileManagerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileManagerPayload>
          }
          findMany: {
            args: Prisma.FileManagerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileManagerPayload>[]
          }
          create: {
            args: Prisma.FileManagerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileManagerPayload>
          }
          createMany: {
            args: Prisma.FileManagerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileManagerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileManagerPayload>[]
          }
          delete: {
            args: Prisma.FileManagerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileManagerPayload>
          }
          update: {
            args: Prisma.FileManagerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileManagerPayload>
          }
          deleteMany: {
            args: Prisma.FileManagerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileManagerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileManagerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileManagerPayload>[]
          }
          upsert: {
            args: Prisma.FileManagerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileManagerPayload>
          }
          aggregate: {
            args: Prisma.FileManagerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFileManager>
          }
          groupBy: {
            args: Prisma.FileManagerGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileManagerGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileManagerCountArgs<ExtArgs>
            result: $Utils.Optional<FileManagerCountAggregateOutputType> | number
          }
        }
      }
      FileManagerActivity: {
        payload: Prisma.$FileManagerActivityPayload<ExtArgs>
        fields: Prisma.FileManagerActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileManagerActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileManagerActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileManagerActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileManagerActivityPayload>
          }
          findFirst: {
            args: Prisma.FileManagerActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileManagerActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileManagerActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileManagerActivityPayload>
          }
          findMany: {
            args: Prisma.FileManagerActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileManagerActivityPayload>[]
          }
          create: {
            args: Prisma.FileManagerActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileManagerActivityPayload>
          }
          createMany: {
            args: Prisma.FileManagerActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileManagerActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileManagerActivityPayload>[]
          }
          delete: {
            args: Prisma.FileManagerActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileManagerActivityPayload>
          }
          update: {
            args: Prisma.FileManagerActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileManagerActivityPayload>
          }
          deleteMany: {
            args: Prisma.FileManagerActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileManagerActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileManagerActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileManagerActivityPayload>[]
          }
          upsert: {
            args: Prisma.FileManagerActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileManagerActivityPayload>
          }
          aggregate: {
            args: Prisma.FileManagerActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFileManagerActivity>
          }
          groupBy: {
            args: Prisma.FileManagerActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileManagerActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileManagerActivityCountArgs<ExtArgs>
            result: $Utils.Optional<FileManagerActivityCountAggregateOutputType> | number
          }
        }
      }
      ImageLibrary: {
        payload: Prisma.$ImageLibraryPayload<ExtArgs>
        fields: Prisma.ImageLibraryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageLibraryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageLibraryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageLibraryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageLibraryPayload>
          }
          findFirst: {
            args: Prisma.ImageLibraryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageLibraryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageLibraryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageLibraryPayload>
          }
          findMany: {
            args: Prisma.ImageLibraryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageLibraryPayload>[]
          }
          create: {
            args: Prisma.ImageLibraryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageLibraryPayload>
          }
          createMany: {
            args: Prisma.ImageLibraryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageLibraryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageLibraryPayload>[]
          }
          delete: {
            args: Prisma.ImageLibraryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageLibraryPayload>
          }
          update: {
            args: Prisma.ImageLibraryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageLibraryPayload>
          }
          deleteMany: {
            args: Prisma.ImageLibraryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageLibraryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageLibraryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageLibraryPayload>[]
          }
          upsert: {
            args: Prisma.ImageLibraryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageLibraryPayload>
          }
          aggregate: {
            args: Prisma.ImageLibraryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImageLibrary>
          }
          groupBy: {
            args: Prisma.ImageLibraryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageLibraryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageLibraryCountArgs<ExtArgs>
            result: $Utils.Optional<ImageLibraryCountAggregateOutputType> | number
          }
        }
      }
      FileUploadProgress: {
        payload: Prisma.$FileUploadProgressPayload<ExtArgs>
        fields: Prisma.FileUploadProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileUploadProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileUploadProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadProgressPayload>
          }
          findFirst: {
            args: Prisma.FileUploadProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileUploadProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadProgressPayload>
          }
          findMany: {
            args: Prisma.FileUploadProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadProgressPayload>[]
          }
          create: {
            args: Prisma.FileUploadProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadProgressPayload>
          }
          createMany: {
            args: Prisma.FileUploadProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileUploadProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadProgressPayload>[]
          }
          delete: {
            args: Prisma.FileUploadProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadProgressPayload>
          }
          update: {
            args: Prisma.FileUploadProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadProgressPayload>
          }
          deleteMany: {
            args: Prisma.FileUploadProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileUploadProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileUploadProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadProgressPayload>[]
          }
          upsert: {
            args: Prisma.FileUploadProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileUploadProgressPayload>
          }
          aggregate: {
            args: Prisma.FileUploadProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFileUploadProgress>
          }
          groupBy: {
            args: Prisma.FileUploadProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileUploadProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileUploadProgressCountArgs<ExtArgs>
            result: $Utils.Optional<FileUploadProgressCountAggregateOutputType> | number
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
    fileManager?: FileManagerOmit
    fileManagerActivity?: FileManagerActivityOmit
    imageLibrary?: ImageLibraryOmit
    fileUploadProgress?: FileUploadProgressOmit
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
   * Model FileManager
   */

  export type AggregateFileManager = {
    _count: FileManagerCountAggregateOutputType | null
    _avg: FileManagerAvgAggregateOutputType | null
    _sum: FileManagerSumAggregateOutputType | null
    _min: FileManagerMinAggregateOutputType | null
    _max: FileManagerMaxAggregateOutputType | null
  }

  export type FileManagerAvgAggregateOutputType = {
    size: number | null
  }

  export type FileManagerSumAggregateOutputType = {
    size: number | null
  }

  export type FileManagerMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    parentId: string | null
    name: string | null
    type: string | null
    mimeType: string | null
    size: number | null
    path: string | null
    url: string | null
    thumbnail: string | null
    isStarred: boolean | null
    isShared: boolean | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileManagerMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    parentId: string | null
    name: string | null
    type: string | null
    mimeType: string | null
    size: number | null
    path: string | null
    url: string | null
    thumbnail: string | null
    isStarred: boolean | null
    isShared: boolean | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileManagerCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    parentId: number
    name: number
    type: number
    mimeType: number
    size: number
    path: number
    url: number
    thumbnail: number
    isStarred: number
    isShared: number
    sharedWith: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FileManagerAvgAggregateInputType = {
    size?: true
  }

  export type FileManagerSumAggregateInputType = {
    size?: true
  }

  export type FileManagerMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    parentId?: true
    name?: true
    type?: true
    mimeType?: true
    size?: true
    path?: true
    url?: true
    thumbnail?: true
    isStarred?: true
    isShared?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileManagerMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    parentId?: true
    name?: true
    type?: true
    mimeType?: true
    size?: true
    path?: true
    url?: true
    thumbnail?: true
    isStarred?: true
    isShared?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileManagerCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    parentId?: true
    name?: true
    type?: true
    mimeType?: true
    size?: true
    path?: true
    url?: true
    thumbnail?: true
    isStarred?: true
    isShared?: true
    sharedWith?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FileManagerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileManager to aggregate.
     */
    where?: FileManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileManagers to fetch.
     */
    orderBy?: FileManagerOrderByWithRelationInput | FileManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileManagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FileManagers
    **/
    _count?: true | FileManagerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileManagerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileManagerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileManagerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileManagerMaxAggregateInputType
  }

  export type GetFileManagerAggregateType<T extends FileManagerAggregateArgs> = {
        [P in keyof T & keyof AggregateFileManager]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFileManager[P]>
      : GetScalarType<T[P], AggregateFileManager[P]>
  }




  export type FileManagerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileManagerWhereInput
    orderBy?: FileManagerOrderByWithAggregationInput | FileManagerOrderByWithAggregationInput[]
    by: FileManagerScalarFieldEnum[] | FileManagerScalarFieldEnum
    having?: FileManagerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileManagerCountAggregateInputType | true
    _avg?: FileManagerAvgAggregateInputType
    _sum?: FileManagerSumAggregateInputType
    _min?: FileManagerMinAggregateInputType
    _max?: FileManagerMaxAggregateInputType
  }

  export type FileManagerGroupByOutputType = {
    id: string
    userId: string
    organizationId: string | null
    parentId: string | null
    name: string
    type: string
    mimeType: string | null
    size: number | null
    path: string | null
    url: string | null
    thumbnail: string | null
    isStarred: boolean
    isShared: boolean
    sharedWith: string[]
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: FileManagerCountAggregateOutputType | null
    _avg: FileManagerAvgAggregateOutputType | null
    _sum: FileManagerSumAggregateOutputType | null
    _min: FileManagerMinAggregateOutputType | null
    _max: FileManagerMaxAggregateOutputType | null
  }

  type GetFileManagerGroupByPayload<T extends FileManagerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileManagerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileManagerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileManagerGroupByOutputType[P]>
            : GetScalarType<T[P], FileManagerGroupByOutputType[P]>
        }
      >
    >


  export type FileManagerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    parentId?: boolean
    name?: boolean
    type?: boolean
    mimeType?: boolean
    size?: boolean
    path?: boolean
    url?: boolean
    thumbnail?: boolean
    isStarred?: boolean
    isShared?: boolean
    sharedWith?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fileManager"]>

  export type FileManagerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    parentId?: boolean
    name?: boolean
    type?: boolean
    mimeType?: boolean
    size?: boolean
    path?: boolean
    url?: boolean
    thumbnail?: boolean
    isStarred?: boolean
    isShared?: boolean
    sharedWith?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fileManager"]>

  export type FileManagerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    parentId?: boolean
    name?: boolean
    type?: boolean
    mimeType?: boolean
    size?: boolean
    path?: boolean
    url?: boolean
    thumbnail?: boolean
    isStarred?: boolean
    isShared?: boolean
    sharedWith?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fileManager"]>

  export type FileManagerSelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    parentId?: boolean
    name?: boolean
    type?: boolean
    mimeType?: boolean
    size?: boolean
    path?: boolean
    url?: boolean
    thumbnail?: boolean
    isStarred?: boolean
    isShared?: boolean
    sharedWith?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FileManagerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "parentId" | "name" | "type" | "mimeType" | "size" | "path" | "url" | "thumbnail" | "isStarred" | "isShared" | "sharedWith" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["fileManager"]>

  export type $FileManagerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FileManager"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organizationId: string | null
      parentId: string | null
      name: string
      type: string
      mimeType: string | null
      size: number | null
      path: string | null
      url: string | null
      thumbnail: string | null
      isStarred: boolean
      isShared: boolean
      sharedWith: string[]
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fileManager"]>
    composites: {}
  }

  type FileManagerGetPayload<S extends boolean | null | undefined | FileManagerDefaultArgs> = $Result.GetResult<Prisma.$FileManagerPayload, S>

  type FileManagerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileManagerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileManagerCountAggregateInputType | true
    }

  export interface FileManagerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FileManager'], meta: { name: 'FileManager' } }
    /**
     * Find zero or one FileManager that matches the filter.
     * @param {FileManagerFindUniqueArgs} args - Arguments to find a FileManager
     * @example
     * // Get one FileManager
     * const fileManager = await prisma.fileManager.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileManagerFindUniqueArgs>(args: SelectSubset<T, FileManagerFindUniqueArgs<ExtArgs>>): Prisma__FileManagerClient<$Result.GetResult<Prisma.$FileManagerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FileManager that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileManagerFindUniqueOrThrowArgs} args - Arguments to find a FileManager
     * @example
     * // Get one FileManager
     * const fileManager = await prisma.fileManager.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileManagerFindUniqueOrThrowArgs>(args: SelectSubset<T, FileManagerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileManagerClient<$Result.GetResult<Prisma.$FileManagerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileManager that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileManagerFindFirstArgs} args - Arguments to find a FileManager
     * @example
     * // Get one FileManager
     * const fileManager = await prisma.fileManager.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileManagerFindFirstArgs>(args?: SelectSubset<T, FileManagerFindFirstArgs<ExtArgs>>): Prisma__FileManagerClient<$Result.GetResult<Prisma.$FileManagerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileManager that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileManagerFindFirstOrThrowArgs} args - Arguments to find a FileManager
     * @example
     * // Get one FileManager
     * const fileManager = await prisma.fileManager.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileManagerFindFirstOrThrowArgs>(args?: SelectSubset<T, FileManagerFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileManagerClient<$Result.GetResult<Prisma.$FileManagerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FileManagers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileManagerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FileManagers
     * const fileManagers = await prisma.fileManager.findMany()
     * 
     * // Get first 10 FileManagers
     * const fileManagers = await prisma.fileManager.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileManagerWithIdOnly = await prisma.fileManager.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileManagerFindManyArgs>(args?: SelectSubset<T, FileManagerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileManagerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FileManager.
     * @param {FileManagerCreateArgs} args - Arguments to create a FileManager.
     * @example
     * // Create one FileManager
     * const FileManager = await prisma.fileManager.create({
     *   data: {
     *     // ... data to create a FileManager
     *   }
     * })
     * 
     */
    create<T extends FileManagerCreateArgs>(args: SelectSubset<T, FileManagerCreateArgs<ExtArgs>>): Prisma__FileManagerClient<$Result.GetResult<Prisma.$FileManagerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FileManagers.
     * @param {FileManagerCreateManyArgs} args - Arguments to create many FileManagers.
     * @example
     * // Create many FileManagers
     * const fileManager = await prisma.fileManager.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileManagerCreateManyArgs>(args?: SelectSubset<T, FileManagerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FileManagers and returns the data saved in the database.
     * @param {FileManagerCreateManyAndReturnArgs} args - Arguments to create many FileManagers.
     * @example
     * // Create many FileManagers
     * const fileManager = await prisma.fileManager.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FileManagers and only return the `id`
     * const fileManagerWithIdOnly = await prisma.fileManager.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileManagerCreateManyAndReturnArgs>(args?: SelectSubset<T, FileManagerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileManagerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FileManager.
     * @param {FileManagerDeleteArgs} args - Arguments to delete one FileManager.
     * @example
     * // Delete one FileManager
     * const FileManager = await prisma.fileManager.delete({
     *   where: {
     *     // ... filter to delete one FileManager
     *   }
     * })
     * 
     */
    delete<T extends FileManagerDeleteArgs>(args: SelectSubset<T, FileManagerDeleteArgs<ExtArgs>>): Prisma__FileManagerClient<$Result.GetResult<Prisma.$FileManagerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FileManager.
     * @param {FileManagerUpdateArgs} args - Arguments to update one FileManager.
     * @example
     * // Update one FileManager
     * const fileManager = await prisma.fileManager.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileManagerUpdateArgs>(args: SelectSubset<T, FileManagerUpdateArgs<ExtArgs>>): Prisma__FileManagerClient<$Result.GetResult<Prisma.$FileManagerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FileManagers.
     * @param {FileManagerDeleteManyArgs} args - Arguments to filter FileManagers to delete.
     * @example
     * // Delete a few FileManagers
     * const { count } = await prisma.fileManager.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileManagerDeleteManyArgs>(args?: SelectSubset<T, FileManagerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileManagers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileManagerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FileManagers
     * const fileManager = await prisma.fileManager.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileManagerUpdateManyArgs>(args: SelectSubset<T, FileManagerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileManagers and returns the data updated in the database.
     * @param {FileManagerUpdateManyAndReturnArgs} args - Arguments to update many FileManagers.
     * @example
     * // Update many FileManagers
     * const fileManager = await prisma.fileManager.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FileManagers and only return the `id`
     * const fileManagerWithIdOnly = await prisma.fileManager.updateManyAndReturn({
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
    updateManyAndReturn<T extends FileManagerUpdateManyAndReturnArgs>(args: SelectSubset<T, FileManagerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileManagerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FileManager.
     * @param {FileManagerUpsertArgs} args - Arguments to update or create a FileManager.
     * @example
     * // Update or create a FileManager
     * const fileManager = await prisma.fileManager.upsert({
     *   create: {
     *     // ... data to create a FileManager
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FileManager we want to update
     *   }
     * })
     */
    upsert<T extends FileManagerUpsertArgs>(args: SelectSubset<T, FileManagerUpsertArgs<ExtArgs>>): Prisma__FileManagerClient<$Result.GetResult<Prisma.$FileManagerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FileManagers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileManagerCountArgs} args - Arguments to filter FileManagers to count.
     * @example
     * // Count the number of FileManagers
     * const count = await prisma.fileManager.count({
     *   where: {
     *     // ... the filter for the FileManagers we want to count
     *   }
     * })
    **/
    count<T extends FileManagerCountArgs>(
      args?: Subset<T, FileManagerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileManagerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FileManager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileManagerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FileManagerAggregateArgs>(args: Subset<T, FileManagerAggregateArgs>): Prisma.PrismaPromise<GetFileManagerAggregateType<T>>

    /**
     * Group by FileManager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileManagerGroupByArgs} args - Group by arguments.
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
      T extends FileManagerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileManagerGroupByArgs['orderBy'] }
        : { orderBy?: FileManagerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FileManagerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileManagerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FileManager model
   */
  readonly fields: FileManagerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FileManager.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileManagerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FileManager model
   */
  interface FileManagerFieldRefs {
    readonly id: FieldRef<"FileManager", 'String'>
    readonly userId: FieldRef<"FileManager", 'String'>
    readonly organizationId: FieldRef<"FileManager", 'String'>
    readonly parentId: FieldRef<"FileManager", 'String'>
    readonly name: FieldRef<"FileManager", 'String'>
    readonly type: FieldRef<"FileManager", 'String'>
    readonly mimeType: FieldRef<"FileManager", 'String'>
    readonly size: FieldRef<"FileManager", 'Int'>
    readonly path: FieldRef<"FileManager", 'String'>
    readonly url: FieldRef<"FileManager", 'String'>
    readonly thumbnail: FieldRef<"FileManager", 'String'>
    readonly isStarred: FieldRef<"FileManager", 'Boolean'>
    readonly isShared: FieldRef<"FileManager", 'Boolean'>
    readonly sharedWith: FieldRef<"FileManager", 'String[]'>
    readonly isDeleted: FieldRef<"FileManager", 'Boolean'>
    readonly deletedAt: FieldRef<"FileManager", 'DateTime'>
    readonly createdAt: FieldRef<"FileManager", 'DateTime'>
    readonly updatedAt: FieldRef<"FileManager", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FileManager findUnique
   */
  export type FileManagerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileManager
     */
    select?: FileManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileManager
     */
    omit?: FileManagerOmit<ExtArgs> | null
    /**
     * Filter, which FileManager to fetch.
     */
    where: FileManagerWhereUniqueInput
  }

  /**
   * FileManager findUniqueOrThrow
   */
  export type FileManagerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileManager
     */
    select?: FileManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileManager
     */
    omit?: FileManagerOmit<ExtArgs> | null
    /**
     * Filter, which FileManager to fetch.
     */
    where: FileManagerWhereUniqueInput
  }

  /**
   * FileManager findFirst
   */
  export type FileManagerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileManager
     */
    select?: FileManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileManager
     */
    omit?: FileManagerOmit<ExtArgs> | null
    /**
     * Filter, which FileManager to fetch.
     */
    where?: FileManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileManagers to fetch.
     */
    orderBy?: FileManagerOrderByWithRelationInput | FileManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileManagers.
     */
    cursor?: FileManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileManagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileManagers.
     */
    distinct?: FileManagerScalarFieldEnum | FileManagerScalarFieldEnum[]
  }

  /**
   * FileManager findFirstOrThrow
   */
  export type FileManagerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileManager
     */
    select?: FileManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileManager
     */
    omit?: FileManagerOmit<ExtArgs> | null
    /**
     * Filter, which FileManager to fetch.
     */
    where?: FileManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileManagers to fetch.
     */
    orderBy?: FileManagerOrderByWithRelationInput | FileManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileManagers.
     */
    cursor?: FileManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileManagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileManagers.
     */
    distinct?: FileManagerScalarFieldEnum | FileManagerScalarFieldEnum[]
  }

  /**
   * FileManager findMany
   */
  export type FileManagerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileManager
     */
    select?: FileManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileManager
     */
    omit?: FileManagerOmit<ExtArgs> | null
    /**
     * Filter, which FileManagers to fetch.
     */
    where?: FileManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileManagers to fetch.
     */
    orderBy?: FileManagerOrderByWithRelationInput | FileManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FileManagers.
     */
    cursor?: FileManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileManagers.
     */
    skip?: number
    distinct?: FileManagerScalarFieldEnum | FileManagerScalarFieldEnum[]
  }

  /**
   * FileManager create
   */
  export type FileManagerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileManager
     */
    select?: FileManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileManager
     */
    omit?: FileManagerOmit<ExtArgs> | null
    /**
     * The data needed to create a FileManager.
     */
    data: XOR<FileManagerCreateInput, FileManagerUncheckedCreateInput>
  }

  /**
   * FileManager createMany
   */
  export type FileManagerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FileManagers.
     */
    data: FileManagerCreateManyInput | FileManagerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FileManager createManyAndReturn
   */
  export type FileManagerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileManager
     */
    select?: FileManagerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileManager
     */
    omit?: FileManagerOmit<ExtArgs> | null
    /**
     * The data used to create many FileManagers.
     */
    data: FileManagerCreateManyInput | FileManagerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FileManager update
   */
  export type FileManagerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileManager
     */
    select?: FileManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileManager
     */
    omit?: FileManagerOmit<ExtArgs> | null
    /**
     * The data needed to update a FileManager.
     */
    data: XOR<FileManagerUpdateInput, FileManagerUncheckedUpdateInput>
    /**
     * Choose, which FileManager to update.
     */
    where: FileManagerWhereUniqueInput
  }

  /**
   * FileManager updateMany
   */
  export type FileManagerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FileManagers.
     */
    data: XOR<FileManagerUpdateManyMutationInput, FileManagerUncheckedUpdateManyInput>
    /**
     * Filter which FileManagers to update
     */
    where?: FileManagerWhereInput
    /**
     * Limit how many FileManagers to update.
     */
    limit?: number
  }

  /**
   * FileManager updateManyAndReturn
   */
  export type FileManagerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileManager
     */
    select?: FileManagerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileManager
     */
    omit?: FileManagerOmit<ExtArgs> | null
    /**
     * The data used to update FileManagers.
     */
    data: XOR<FileManagerUpdateManyMutationInput, FileManagerUncheckedUpdateManyInput>
    /**
     * Filter which FileManagers to update
     */
    where?: FileManagerWhereInput
    /**
     * Limit how many FileManagers to update.
     */
    limit?: number
  }

  /**
   * FileManager upsert
   */
  export type FileManagerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileManager
     */
    select?: FileManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileManager
     */
    omit?: FileManagerOmit<ExtArgs> | null
    /**
     * The filter to search for the FileManager to update in case it exists.
     */
    where: FileManagerWhereUniqueInput
    /**
     * In case the FileManager found by the `where` argument doesn't exist, create a new FileManager with this data.
     */
    create: XOR<FileManagerCreateInput, FileManagerUncheckedCreateInput>
    /**
     * In case the FileManager was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileManagerUpdateInput, FileManagerUncheckedUpdateInput>
  }

  /**
   * FileManager delete
   */
  export type FileManagerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileManager
     */
    select?: FileManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileManager
     */
    omit?: FileManagerOmit<ExtArgs> | null
    /**
     * Filter which FileManager to delete.
     */
    where: FileManagerWhereUniqueInput
  }

  /**
   * FileManager deleteMany
   */
  export type FileManagerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileManagers to delete
     */
    where?: FileManagerWhereInput
    /**
     * Limit how many FileManagers to delete.
     */
    limit?: number
  }

  /**
   * FileManager without action
   */
  export type FileManagerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileManager
     */
    select?: FileManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileManager
     */
    omit?: FileManagerOmit<ExtArgs> | null
  }


  /**
   * Model FileManagerActivity
   */

  export type AggregateFileManagerActivity = {
    _count: FileManagerActivityCountAggregateOutputType | null
    _min: FileManagerActivityMinAggregateOutputType | null
    _max: FileManagerActivityMaxAggregateOutputType | null
  }

  export type FileManagerActivityMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    fileId: string | null
    action: string | null
    createdAt: Date | null
  }

  export type FileManagerActivityMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    fileId: string | null
    action: string | null
    createdAt: Date | null
  }

  export type FileManagerActivityCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    fileId: number
    action: number
    details: number
    createdAt: number
    _all: number
  }


  export type FileManagerActivityMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    fileId?: true
    action?: true
    createdAt?: true
  }

  export type FileManagerActivityMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    fileId?: true
    action?: true
    createdAt?: true
  }

  export type FileManagerActivityCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    fileId?: true
    action?: true
    details?: true
    createdAt?: true
    _all?: true
  }

  export type FileManagerActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileManagerActivity to aggregate.
     */
    where?: FileManagerActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileManagerActivities to fetch.
     */
    orderBy?: FileManagerActivityOrderByWithRelationInput | FileManagerActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileManagerActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileManagerActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileManagerActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FileManagerActivities
    **/
    _count?: true | FileManagerActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileManagerActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileManagerActivityMaxAggregateInputType
  }

  export type GetFileManagerActivityAggregateType<T extends FileManagerActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateFileManagerActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFileManagerActivity[P]>
      : GetScalarType<T[P], AggregateFileManagerActivity[P]>
  }




  export type FileManagerActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileManagerActivityWhereInput
    orderBy?: FileManagerActivityOrderByWithAggregationInput | FileManagerActivityOrderByWithAggregationInput[]
    by: FileManagerActivityScalarFieldEnum[] | FileManagerActivityScalarFieldEnum
    having?: FileManagerActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileManagerActivityCountAggregateInputType | true
    _min?: FileManagerActivityMinAggregateInputType
    _max?: FileManagerActivityMaxAggregateInputType
  }

  export type FileManagerActivityGroupByOutputType = {
    id: string
    userId: string
    organizationId: string | null
    fileId: string | null
    action: string
    details: JsonValue | null
    createdAt: Date
    _count: FileManagerActivityCountAggregateOutputType | null
    _min: FileManagerActivityMinAggregateOutputType | null
    _max: FileManagerActivityMaxAggregateOutputType | null
  }

  type GetFileManagerActivityGroupByPayload<T extends FileManagerActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileManagerActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileManagerActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileManagerActivityGroupByOutputType[P]>
            : GetScalarType<T[P], FileManagerActivityGroupByOutputType[P]>
        }
      >
    >


  export type FileManagerActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    fileId?: boolean
    action?: boolean
    details?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["fileManagerActivity"]>

  export type FileManagerActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    fileId?: boolean
    action?: boolean
    details?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["fileManagerActivity"]>

  export type FileManagerActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    fileId?: boolean
    action?: boolean
    details?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["fileManagerActivity"]>

  export type FileManagerActivitySelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    fileId?: boolean
    action?: boolean
    details?: boolean
    createdAt?: boolean
  }

  export type FileManagerActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "fileId" | "action" | "details" | "createdAt", ExtArgs["result"]["fileManagerActivity"]>

  export type $FileManagerActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FileManagerActivity"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organizationId: string | null
      fileId: string | null
      action: string
      details: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["fileManagerActivity"]>
    composites: {}
  }

  type FileManagerActivityGetPayload<S extends boolean | null | undefined | FileManagerActivityDefaultArgs> = $Result.GetResult<Prisma.$FileManagerActivityPayload, S>

  type FileManagerActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileManagerActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileManagerActivityCountAggregateInputType | true
    }

  export interface FileManagerActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FileManagerActivity'], meta: { name: 'FileManagerActivity' } }
    /**
     * Find zero or one FileManagerActivity that matches the filter.
     * @param {FileManagerActivityFindUniqueArgs} args - Arguments to find a FileManagerActivity
     * @example
     * // Get one FileManagerActivity
     * const fileManagerActivity = await prisma.fileManagerActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileManagerActivityFindUniqueArgs>(args: SelectSubset<T, FileManagerActivityFindUniqueArgs<ExtArgs>>): Prisma__FileManagerActivityClient<$Result.GetResult<Prisma.$FileManagerActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FileManagerActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileManagerActivityFindUniqueOrThrowArgs} args - Arguments to find a FileManagerActivity
     * @example
     * // Get one FileManagerActivity
     * const fileManagerActivity = await prisma.fileManagerActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileManagerActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, FileManagerActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileManagerActivityClient<$Result.GetResult<Prisma.$FileManagerActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileManagerActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileManagerActivityFindFirstArgs} args - Arguments to find a FileManagerActivity
     * @example
     * // Get one FileManagerActivity
     * const fileManagerActivity = await prisma.fileManagerActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileManagerActivityFindFirstArgs>(args?: SelectSubset<T, FileManagerActivityFindFirstArgs<ExtArgs>>): Prisma__FileManagerActivityClient<$Result.GetResult<Prisma.$FileManagerActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileManagerActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileManagerActivityFindFirstOrThrowArgs} args - Arguments to find a FileManagerActivity
     * @example
     * // Get one FileManagerActivity
     * const fileManagerActivity = await prisma.fileManagerActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileManagerActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, FileManagerActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileManagerActivityClient<$Result.GetResult<Prisma.$FileManagerActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FileManagerActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileManagerActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FileManagerActivities
     * const fileManagerActivities = await prisma.fileManagerActivity.findMany()
     * 
     * // Get first 10 FileManagerActivities
     * const fileManagerActivities = await prisma.fileManagerActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileManagerActivityWithIdOnly = await prisma.fileManagerActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileManagerActivityFindManyArgs>(args?: SelectSubset<T, FileManagerActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileManagerActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FileManagerActivity.
     * @param {FileManagerActivityCreateArgs} args - Arguments to create a FileManagerActivity.
     * @example
     * // Create one FileManagerActivity
     * const FileManagerActivity = await prisma.fileManagerActivity.create({
     *   data: {
     *     // ... data to create a FileManagerActivity
     *   }
     * })
     * 
     */
    create<T extends FileManagerActivityCreateArgs>(args: SelectSubset<T, FileManagerActivityCreateArgs<ExtArgs>>): Prisma__FileManagerActivityClient<$Result.GetResult<Prisma.$FileManagerActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FileManagerActivities.
     * @param {FileManagerActivityCreateManyArgs} args - Arguments to create many FileManagerActivities.
     * @example
     * // Create many FileManagerActivities
     * const fileManagerActivity = await prisma.fileManagerActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileManagerActivityCreateManyArgs>(args?: SelectSubset<T, FileManagerActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FileManagerActivities and returns the data saved in the database.
     * @param {FileManagerActivityCreateManyAndReturnArgs} args - Arguments to create many FileManagerActivities.
     * @example
     * // Create many FileManagerActivities
     * const fileManagerActivity = await prisma.fileManagerActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FileManagerActivities and only return the `id`
     * const fileManagerActivityWithIdOnly = await prisma.fileManagerActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileManagerActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, FileManagerActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileManagerActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FileManagerActivity.
     * @param {FileManagerActivityDeleteArgs} args - Arguments to delete one FileManagerActivity.
     * @example
     * // Delete one FileManagerActivity
     * const FileManagerActivity = await prisma.fileManagerActivity.delete({
     *   where: {
     *     // ... filter to delete one FileManagerActivity
     *   }
     * })
     * 
     */
    delete<T extends FileManagerActivityDeleteArgs>(args: SelectSubset<T, FileManagerActivityDeleteArgs<ExtArgs>>): Prisma__FileManagerActivityClient<$Result.GetResult<Prisma.$FileManagerActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FileManagerActivity.
     * @param {FileManagerActivityUpdateArgs} args - Arguments to update one FileManagerActivity.
     * @example
     * // Update one FileManagerActivity
     * const fileManagerActivity = await prisma.fileManagerActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileManagerActivityUpdateArgs>(args: SelectSubset<T, FileManagerActivityUpdateArgs<ExtArgs>>): Prisma__FileManagerActivityClient<$Result.GetResult<Prisma.$FileManagerActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FileManagerActivities.
     * @param {FileManagerActivityDeleteManyArgs} args - Arguments to filter FileManagerActivities to delete.
     * @example
     * // Delete a few FileManagerActivities
     * const { count } = await prisma.fileManagerActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileManagerActivityDeleteManyArgs>(args?: SelectSubset<T, FileManagerActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileManagerActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileManagerActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FileManagerActivities
     * const fileManagerActivity = await prisma.fileManagerActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileManagerActivityUpdateManyArgs>(args: SelectSubset<T, FileManagerActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileManagerActivities and returns the data updated in the database.
     * @param {FileManagerActivityUpdateManyAndReturnArgs} args - Arguments to update many FileManagerActivities.
     * @example
     * // Update many FileManagerActivities
     * const fileManagerActivity = await prisma.fileManagerActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FileManagerActivities and only return the `id`
     * const fileManagerActivityWithIdOnly = await prisma.fileManagerActivity.updateManyAndReturn({
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
    updateManyAndReturn<T extends FileManagerActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, FileManagerActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileManagerActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FileManagerActivity.
     * @param {FileManagerActivityUpsertArgs} args - Arguments to update or create a FileManagerActivity.
     * @example
     * // Update or create a FileManagerActivity
     * const fileManagerActivity = await prisma.fileManagerActivity.upsert({
     *   create: {
     *     // ... data to create a FileManagerActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FileManagerActivity we want to update
     *   }
     * })
     */
    upsert<T extends FileManagerActivityUpsertArgs>(args: SelectSubset<T, FileManagerActivityUpsertArgs<ExtArgs>>): Prisma__FileManagerActivityClient<$Result.GetResult<Prisma.$FileManagerActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FileManagerActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileManagerActivityCountArgs} args - Arguments to filter FileManagerActivities to count.
     * @example
     * // Count the number of FileManagerActivities
     * const count = await prisma.fileManagerActivity.count({
     *   where: {
     *     // ... the filter for the FileManagerActivities we want to count
     *   }
     * })
    **/
    count<T extends FileManagerActivityCountArgs>(
      args?: Subset<T, FileManagerActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileManagerActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FileManagerActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileManagerActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FileManagerActivityAggregateArgs>(args: Subset<T, FileManagerActivityAggregateArgs>): Prisma.PrismaPromise<GetFileManagerActivityAggregateType<T>>

    /**
     * Group by FileManagerActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileManagerActivityGroupByArgs} args - Group by arguments.
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
      T extends FileManagerActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileManagerActivityGroupByArgs['orderBy'] }
        : { orderBy?: FileManagerActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FileManagerActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileManagerActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FileManagerActivity model
   */
  readonly fields: FileManagerActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FileManagerActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileManagerActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FileManagerActivity model
   */
  interface FileManagerActivityFieldRefs {
    readonly id: FieldRef<"FileManagerActivity", 'String'>
    readonly userId: FieldRef<"FileManagerActivity", 'String'>
    readonly organizationId: FieldRef<"FileManagerActivity", 'String'>
    readonly fileId: FieldRef<"FileManagerActivity", 'String'>
    readonly action: FieldRef<"FileManagerActivity", 'String'>
    readonly details: FieldRef<"FileManagerActivity", 'Json'>
    readonly createdAt: FieldRef<"FileManagerActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FileManagerActivity findUnique
   */
  export type FileManagerActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileManagerActivity
     */
    select?: FileManagerActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileManagerActivity
     */
    omit?: FileManagerActivityOmit<ExtArgs> | null
    /**
     * Filter, which FileManagerActivity to fetch.
     */
    where: FileManagerActivityWhereUniqueInput
  }

  /**
   * FileManagerActivity findUniqueOrThrow
   */
  export type FileManagerActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileManagerActivity
     */
    select?: FileManagerActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileManagerActivity
     */
    omit?: FileManagerActivityOmit<ExtArgs> | null
    /**
     * Filter, which FileManagerActivity to fetch.
     */
    where: FileManagerActivityWhereUniqueInput
  }

  /**
   * FileManagerActivity findFirst
   */
  export type FileManagerActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileManagerActivity
     */
    select?: FileManagerActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileManagerActivity
     */
    omit?: FileManagerActivityOmit<ExtArgs> | null
    /**
     * Filter, which FileManagerActivity to fetch.
     */
    where?: FileManagerActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileManagerActivities to fetch.
     */
    orderBy?: FileManagerActivityOrderByWithRelationInput | FileManagerActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileManagerActivities.
     */
    cursor?: FileManagerActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileManagerActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileManagerActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileManagerActivities.
     */
    distinct?: FileManagerActivityScalarFieldEnum | FileManagerActivityScalarFieldEnum[]
  }

  /**
   * FileManagerActivity findFirstOrThrow
   */
  export type FileManagerActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileManagerActivity
     */
    select?: FileManagerActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileManagerActivity
     */
    omit?: FileManagerActivityOmit<ExtArgs> | null
    /**
     * Filter, which FileManagerActivity to fetch.
     */
    where?: FileManagerActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileManagerActivities to fetch.
     */
    orderBy?: FileManagerActivityOrderByWithRelationInput | FileManagerActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileManagerActivities.
     */
    cursor?: FileManagerActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileManagerActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileManagerActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileManagerActivities.
     */
    distinct?: FileManagerActivityScalarFieldEnum | FileManagerActivityScalarFieldEnum[]
  }

  /**
   * FileManagerActivity findMany
   */
  export type FileManagerActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileManagerActivity
     */
    select?: FileManagerActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileManagerActivity
     */
    omit?: FileManagerActivityOmit<ExtArgs> | null
    /**
     * Filter, which FileManagerActivities to fetch.
     */
    where?: FileManagerActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileManagerActivities to fetch.
     */
    orderBy?: FileManagerActivityOrderByWithRelationInput | FileManagerActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FileManagerActivities.
     */
    cursor?: FileManagerActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileManagerActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileManagerActivities.
     */
    skip?: number
    distinct?: FileManagerActivityScalarFieldEnum | FileManagerActivityScalarFieldEnum[]
  }

  /**
   * FileManagerActivity create
   */
  export type FileManagerActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileManagerActivity
     */
    select?: FileManagerActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileManagerActivity
     */
    omit?: FileManagerActivityOmit<ExtArgs> | null
    /**
     * The data needed to create a FileManagerActivity.
     */
    data: XOR<FileManagerActivityCreateInput, FileManagerActivityUncheckedCreateInput>
  }

  /**
   * FileManagerActivity createMany
   */
  export type FileManagerActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FileManagerActivities.
     */
    data: FileManagerActivityCreateManyInput | FileManagerActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FileManagerActivity createManyAndReturn
   */
  export type FileManagerActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileManagerActivity
     */
    select?: FileManagerActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileManagerActivity
     */
    omit?: FileManagerActivityOmit<ExtArgs> | null
    /**
     * The data used to create many FileManagerActivities.
     */
    data: FileManagerActivityCreateManyInput | FileManagerActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FileManagerActivity update
   */
  export type FileManagerActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileManagerActivity
     */
    select?: FileManagerActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileManagerActivity
     */
    omit?: FileManagerActivityOmit<ExtArgs> | null
    /**
     * The data needed to update a FileManagerActivity.
     */
    data: XOR<FileManagerActivityUpdateInput, FileManagerActivityUncheckedUpdateInput>
    /**
     * Choose, which FileManagerActivity to update.
     */
    where: FileManagerActivityWhereUniqueInput
  }

  /**
   * FileManagerActivity updateMany
   */
  export type FileManagerActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FileManagerActivities.
     */
    data: XOR<FileManagerActivityUpdateManyMutationInput, FileManagerActivityUncheckedUpdateManyInput>
    /**
     * Filter which FileManagerActivities to update
     */
    where?: FileManagerActivityWhereInput
    /**
     * Limit how many FileManagerActivities to update.
     */
    limit?: number
  }

  /**
   * FileManagerActivity updateManyAndReturn
   */
  export type FileManagerActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileManagerActivity
     */
    select?: FileManagerActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileManagerActivity
     */
    omit?: FileManagerActivityOmit<ExtArgs> | null
    /**
     * The data used to update FileManagerActivities.
     */
    data: XOR<FileManagerActivityUpdateManyMutationInput, FileManagerActivityUncheckedUpdateManyInput>
    /**
     * Filter which FileManagerActivities to update
     */
    where?: FileManagerActivityWhereInput
    /**
     * Limit how many FileManagerActivities to update.
     */
    limit?: number
  }

  /**
   * FileManagerActivity upsert
   */
  export type FileManagerActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileManagerActivity
     */
    select?: FileManagerActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileManagerActivity
     */
    omit?: FileManagerActivityOmit<ExtArgs> | null
    /**
     * The filter to search for the FileManagerActivity to update in case it exists.
     */
    where: FileManagerActivityWhereUniqueInput
    /**
     * In case the FileManagerActivity found by the `where` argument doesn't exist, create a new FileManagerActivity with this data.
     */
    create: XOR<FileManagerActivityCreateInput, FileManagerActivityUncheckedCreateInput>
    /**
     * In case the FileManagerActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileManagerActivityUpdateInput, FileManagerActivityUncheckedUpdateInput>
  }

  /**
   * FileManagerActivity delete
   */
  export type FileManagerActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileManagerActivity
     */
    select?: FileManagerActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileManagerActivity
     */
    omit?: FileManagerActivityOmit<ExtArgs> | null
    /**
     * Filter which FileManagerActivity to delete.
     */
    where: FileManagerActivityWhereUniqueInput
  }

  /**
   * FileManagerActivity deleteMany
   */
  export type FileManagerActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileManagerActivities to delete
     */
    where?: FileManagerActivityWhereInput
    /**
     * Limit how many FileManagerActivities to delete.
     */
    limit?: number
  }

  /**
   * FileManagerActivity without action
   */
  export type FileManagerActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileManagerActivity
     */
    select?: FileManagerActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileManagerActivity
     */
    omit?: FileManagerActivityOmit<ExtArgs> | null
  }


  /**
   * Model ImageLibrary
   */

  export type AggregateImageLibrary = {
    _count: ImageLibraryCountAggregateOutputType | null
    _avg: ImageLibraryAvgAggregateOutputType | null
    _sum: ImageLibrarySumAggregateOutputType | null
    _min: ImageLibraryMinAggregateOutputType | null
    _max: ImageLibraryMaxAggregateOutputType | null
  }

  export type ImageLibraryAvgAggregateOutputType = {
    width: number | null
    height: number | null
    size: number | null
  }

  export type ImageLibrarySumAggregateOutputType = {
    width: number | null
    height: number | null
    size: number | null
  }

  export type ImageLibraryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    name: string | null
    url: string | null
    thumbnail: string | null
    width: number | null
    height: number | null
    mimeType: string | null
    size: number | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageLibraryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    name: string | null
    url: string | null
    thumbnail: string | null
    width: number | null
    height: number | null
    mimeType: string | null
    size: number | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageLibraryCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    name: number
    url: number
    thumbnail: number
    width: number
    height: number
    mimeType: number
    size: number
    category: number
    tags: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ImageLibraryAvgAggregateInputType = {
    width?: true
    height?: true
    size?: true
  }

  export type ImageLibrarySumAggregateInputType = {
    width?: true
    height?: true
    size?: true
  }

  export type ImageLibraryMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    name?: true
    url?: true
    thumbnail?: true
    width?: true
    height?: true
    mimeType?: true
    size?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageLibraryMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    name?: true
    url?: true
    thumbnail?: true
    width?: true
    height?: true
    mimeType?: true
    size?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageLibraryCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    name?: true
    url?: true
    thumbnail?: true
    width?: true
    height?: true
    mimeType?: true
    size?: true
    category?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ImageLibraryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImageLibrary to aggregate.
     */
    where?: ImageLibraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageLibraries to fetch.
     */
    orderBy?: ImageLibraryOrderByWithRelationInput | ImageLibraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageLibraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageLibraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageLibraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImageLibraries
    **/
    _count?: true | ImageLibraryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageLibraryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageLibrarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageLibraryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageLibraryMaxAggregateInputType
  }

  export type GetImageLibraryAggregateType<T extends ImageLibraryAggregateArgs> = {
        [P in keyof T & keyof AggregateImageLibrary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImageLibrary[P]>
      : GetScalarType<T[P], AggregateImageLibrary[P]>
  }




  export type ImageLibraryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageLibraryWhereInput
    orderBy?: ImageLibraryOrderByWithAggregationInput | ImageLibraryOrderByWithAggregationInput[]
    by: ImageLibraryScalarFieldEnum[] | ImageLibraryScalarFieldEnum
    having?: ImageLibraryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageLibraryCountAggregateInputType | true
    _avg?: ImageLibraryAvgAggregateInputType
    _sum?: ImageLibrarySumAggregateInputType
    _min?: ImageLibraryMinAggregateInputType
    _max?: ImageLibraryMaxAggregateInputType
  }

  export type ImageLibraryGroupByOutputType = {
    id: string
    userId: string
    organizationId: string | null
    name: string
    url: string
    thumbnail: string | null
    width: number | null
    height: number | null
    mimeType: string | null
    size: number | null
    category: string | null
    tags: string[]
    createdAt: Date
    updatedAt: Date
    _count: ImageLibraryCountAggregateOutputType | null
    _avg: ImageLibraryAvgAggregateOutputType | null
    _sum: ImageLibrarySumAggregateOutputType | null
    _min: ImageLibraryMinAggregateOutputType | null
    _max: ImageLibraryMaxAggregateOutputType | null
  }

  type GetImageLibraryGroupByPayload<T extends ImageLibraryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageLibraryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageLibraryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageLibraryGroupByOutputType[P]>
            : GetScalarType<T[P], ImageLibraryGroupByOutputType[P]>
        }
      >
    >


  export type ImageLibrarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    name?: boolean
    url?: boolean
    thumbnail?: boolean
    width?: boolean
    height?: boolean
    mimeType?: boolean
    size?: boolean
    category?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["imageLibrary"]>

  export type ImageLibrarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    name?: boolean
    url?: boolean
    thumbnail?: boolean
    width?: boolean
    height?: boolean
    mimeType?: boolean
    size?: boolean
    category?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["imageLibrary"]>

  export type ImageLibrarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    name?: boolean
    url?: boolean
    thumbnail?: boolean
    width?: boolean
    height?: boolean
    mimeType?: boolean
    size?: boolean
    category?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["imageLibrary"]>

  export type ImageLibrarySelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    name?: boolean
    url?: boolean
    thumbnail?: boolean
    width?: boolean
    height?: boolean
    mimeType?: boolean
    size?: boolean
    category?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ImageLibraryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "name" | "url" | "thumbnail" | "width" | "height" | "mimeType" | "size" | "category" | "tags" | "createdAt" | "updatedAt", ExtArgs["result"]["imageLibrary"]>

  export type $ImageLibraryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImageLibrary"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organizationId: string | null
      name: string
      url: string
      thumbnail: string | null
      width: number | null
      height: number | null
      mimeType: string | null
      size: number | null
      category: string | null
      tags: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["imageLibrary"]>
    composites: {}
  }

  type ImageLibraryGetPayload<S extends boolean | null | undefined | ImageLibraryDefaultArgs> = $Result.GetResult<Prisma.$ImageLibraryPayload, S>

  type ImageLibraryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageLibraryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageLibraryCountAggregateInputType | true
    }

  export interface ImageLibraryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImageLibrary'], meta: { name: 'ImageLibrary' } }
    /**
     * Find zero or one ImageLibrary that matches the filter.
     * @param {ImageLibraryFindUniqueArgs} args - Arguments to find a ImageLibrary
     * @example
     * // Get one ImageLibrary
     * const imageLibrary = await prisma.imageLibrary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageLibraryFindUniqueArgs>(args: SelectSubset<T, ImageLibraryFindUniqueArgs<ExtArgs>>): Prisma__ImageLibraryClient<$Result.GetResult<Prisma.$ImageLibraryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImageLibrary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageLibraryFindUniqueOrThrowArgs} args - Arguments to find a ImageLibrary
     * @example
     * // Get one ImageLibrary
     * const imageLibrary = await prisma.imageLibrary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageLibraryFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageLibraryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageLibraryClient<$Result.GetResult<Prisma.$ImageLibraryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImageLibrary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageLibraryFindFirstArgs} args - Arguments to find a ImageLibrary
     * @example
     * // Get one ImageLibrary
     * const imageLibrary = await prisma.imageLibrary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageLibraryFindFirstArgs>(args?: SelectSubset<T, ImageLibraryFindFirstArgs<ExtArgs>>): Prisma__ImageLibraryClient<$Result.GetResult<Prisma.$ImageLibraryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImageLibrary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageLibraryFindFirstOrThrowArgs} args - Arguments to find a ImageLibrary
     * @example
     * // Get one ImageLibrary
     * const imageLibrary = await prisma.imageLibrary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageLibraryFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageLibraryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageLibraryClient<$Result.GetResult<Prisma.$ImageLibraryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImageLibraries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageLibraryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImageLibraries
     * const imageLibraries = await prisma.imageLibrary.findMany()
     * 
     * // Get first 10 ImageLibraries
     * const imageLibraries = await prisma.imageLibrary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageLibraryWithIdOnly = await prisma.imageLibrary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageLibraryFindManyArgs>(args?: SelectSubset<T, ImageLibraryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageLibraryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImageLibrary.
     * @param {ImageLibraryCreateArgs} args - Arguments to create a ImageLibrary.
     * @example
     * // Create one ImageLibrary
     * const ImageLibrary = await prisma.imageLibrary.create({
     *   data: {
     *     // ... data to create a ImageLibrary
     *   }
     * })
     * 
     */
    create<T extends ImageLibraryCreateArgs>(args: SelectSubset<T, ImageLibraryCreateArgs<ExtArgs>>): Prisma__ImageLibraryClient<$Result.GetResult<Prisma.$ImageLibraryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImageLibraries.
     * @param {ImageLibraryCreateManyArgs} args - Arguments to create many ImageLibraries.
     * @example
     * // Create many ImageLibraries
     * const imageLibrary = await prisma.imageLibrary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageLibraryCreateManyArgs>(args?: SelectSubset<T, ImageLibraryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImageLibraries and returns the data saved in the database.
     * @param {ImageLibraryCreateManyAndReturnArgs} args - Arguments to create many ImageLibraries.
     * @example
     * // Create many ImageLibraries
     * const imageLibrary = await prisma.imageLibrary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImageLibraries and only return the `id`
     * const imageLibraryWithIdOnly = await prisma.imageLibrary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageLibraryCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageLibraryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageLibraryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ImageLibrary.
     * @param {ImageLibraryDeleteArgs} args - Arguments to delete one ImageLibrary.
     * @example
     * // Delete one ImageLibrary
     * const ImageLibrary = await prisma.imageLibrary.delete({
     *   where: {
     *     // ... filter to delete one ImageLibrary
     *   }
     * })
     * 
     */
    delete<T extends ImageLibraryDeleteArgs>(args: SelectSubset<T, ImageLibraryDeleteArgs<ExtArgs>>): Prisma__ImageLibraryClient<$Result.GetResult<Prisma.$ImageLibraryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImageLibrary.
     * @param {ImageLibraryUpdateArgs} args - Arguments to update one ImageLibrary.
     * @example
     * // Update one ImageLibrary
     * const imageLibrary = await prisma.imageLibrary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageLibraryUpdateArgs>(args: SelectSubset<T, ImageLibraryUpdateArgs<ExtArgs>>): Prisma__ImageLibraryClient<$Result.GetResult<Prisma.$ImageLibraryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImageLibraries.
     * @param {ImageLibraryDeleteManyArgs} args - Arguments to filter ImageLibraries to delete.
     * @example
     * // Delete a few ImageLibraries
     * const { count } = await prisma.imageLibrary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageLibraryDeleteManyArgs>(args?: SelectSubset<T, ImageLibraryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImageLibraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageLibraryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImageLibraries
     * const imageLibrary = await prisma.imageLibrary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageLibraryUpdateManyArgs>(args: SelectSubset<T, ImageLibraryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImageLibraries and returns the data updated in the database.
     * @param {ImageLibraryUpdateManyAndReturnArgs} args - Arguments to update many ImageLibraries.
     * @example
     * // Update many ImageLibraries
     * const imageLibrary = await prisma.imageLibrary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ImageLibraries and only return the `id`
     * const imageLibraryWithIdOnly = await prisma.imageLibrary.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImageLibraryUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageLibraryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageLibraryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ImageLibrary.
     * @param {ImageLibraryUpsertArgs} args - Arguments to update or create a ImageLibrary.
     * @example
     * // Update or create a ImageLibrary
     * const imageLibrary = await prisma.imageLibrary.upsert({
     *   create: {
     *     // ... data to create a ImageLibrary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImageLibrary we want to update
     *   }
     * })
     */
    upsert<T extends ImageLibraryUpsertArgs>(args: SelectSubset<T, ImageLibraryUpsertArgs<ExtArgs>>): Prisma__ImageLibraryClient<$Result.GetResult<Prisma.$ImageLibraryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImageLibraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageLibraryCountArgs} args - Arguments to filter ImageLibraries to count.
     * @example
     * // Count the number of ImageLibraries
     * const count = await prisma.imageLibrary.count({
     *   where: {
     *     // ... the filter for the ImageLibraries we want to count
     *   }
     * })
    **/
    count<T extends ImageLibraryCountArgs>(
      args?: Subset<T, ImageLibraryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageLibraryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImageLibrary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageLibraryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageLibraryAggregateArgs>(args: Subset<T, ImageLibraryAggregateArgs>): Prisma.PrismaPromise<GetImageLibraryAggregateType<T>>

    /**
     * Group by ImageLibrary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageLibraryGroupByArgs} args - Group by arguments.
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
      T extends ImageLibraryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageLibraryGroupByArgs['orderBy'] }
        : { orderBy?: ImageLibraryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageLibraryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageLibraryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImageLibrary model
   */
  readonly fields: ImageLibraryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImageLibrary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageLibraryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ImageLibrary model
   */
  interface ImageLibraryFieldRefs {
    readonly id: FieldRef<"ImageLibrary", 'String'>
    readonly userId: FieldRef<"ImageLibrary", 'String'>
    readonly organizationId: FieldRef<"ImageLibrary", 'String'>
    readonly name: FieldRef<"ImageLibrary", 'String'>
    readonly url: FieldRef<"ImageLibrary", 'String'>
    readonly thumbnail: FieldRef<"ImageLibrary", 'String'>
    readonly width: FieldRef<"ImageLibrary", 'Int'>
    readonly height: FieldRef<"ImageLibrary", 'Int'>
    readonly mimeType: FieldRef<"ImageLibrary", 'String'>
    readonly size: FieldRef<"ImageLibrary", 'Int'>
    readonly category: FieldRef<"ImageLibrary", 'String'>
    readonly tags: FieldRef<"ImageLibrary", 'String[]'>
    readonly createdAt: FieldRef<"ImageLibrary", 'DateTime'>
    readonly updatedAt: FieldRef<"ImageLibrary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ImageLibrary findUnique
   */
  export type ImageLibraryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageLibrary
     */
    select?: ImageLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageLibrary
     */
    omit?: ImageLibraryOmit<ExtArgs> | null
    /**
     * Filter, which ImageLibrary to fetch.
     */
    where: ImageLibraryWhereUniqueInput
  }

  /**
   * ImageLibrary findUniqueOrThrow
   */
  export type ImageLibraryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageLibrary
     */
    select?: ImageLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageLibrary
     */
    omit?: ImageLibraryOmit<ExtArgs> | null
    /**
     * Filter, which ImageLibrary to fetch.
     */
    where: ImageLibraryWhereUniqueInput
  }

  /**
   * ImageLibrary findFirst
   */
  export type ImageLibraryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageLibrary
     */
    select?: ImageLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageLibrary
     */
    omit?: ImageLibraryOmit<ExtArgs> | null
    /**
     * Filter, which ImageLibrary to fetch.
     */
    where?: ImageLibraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageLibraries to fetch.
     */
    orderBy?: ImageLibraryOrderByWithRelationInput | ImageLibraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImageLibraries.
     */
    cursor?: ImageLibraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageLibraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageLibraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImageLibraries.
     */
    distinct?: ImageLibraryScalarFieldEnum | ImageLibraryScalarFieldEnum[]
  }

  /**
   * ImageLibrary findFirstOrThrow
   */
  export type ImageLibraryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageLibrary
     */
    select?: ImageLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageLibrary
     */
    omit?: ImageLibraryOmit<ExtArgs> | null
    /**
     * Filter, which ImageLibrary to fetch.
     */
    where?: ImageLibraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageLibraries to fetch.
     */
    orderBy?: ImageLibraryOrderByWithRelationInput | ImageLibraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImageLibraries.
     */
    cursor?: ImageLibraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageLibraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageLibraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImageLibraries.
     */
    distinct?: ImageLibraryScalarFieldEnum | ImageLibraryScalarFieldEnum[]
  }

  /**
   * ImageLibrary findMany
   */
  export type ImageLibraryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageLibrary
     */
    select?: ImageLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageLibrary
     */
    omit?: ImageLibraryOmit<ExtArgs> | null
    /**
     * Filter, which ImageLibraries to fetch.
     */
    where?: ImageLibraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageLibraries to fetch.
     */
    orderBy?: ImageLibraryOrderByWithRelationInput | ImageLibraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImageLibraries.
     */
    cursor?: ImageLibraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageLibraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageLibraries.
     */
    skip?: number
    distinct?: ImageLibraryScalarFieldEnum | ImageLibraryScalarFieldEnum[]
  }

  /**
   * ImageLibrary create
   */
  export type ImageLibraryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageLibrary
     */
    select?: ImageLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageLibrary
     */
    omit?: ImageLibraryOmit<ExtArgs> | null
    /**
     * The data needed to create a ImageLibrary.
     */
    data: XOR<ImageLibraryCreateInput, ImageLibraryUncheckedCreateInput>
  }

  /**
   * ImageLibrary createMany
   */
  export type ImageLibraryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImageLibraries.
     */
    data: ImageLibraryCreateManyInput | ImageLibraryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImageLibrary createManyAndReturn
   */
  export type ImageLibraryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageLibrary
     */
    select?: ImageLibrarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImageLibrary
     */
    omit?: ImageLibraryOmit<ExtArgs> | null
    /**
     * The data used to create many ImageLibraries.
     */
    data: ImageLibraryCreateManyInput | ImageLibraryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImageLibrary update
   */
  export type ImageLibraryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageLibrary
     */
    select?: ImageLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageLibrary
     */
    omit?: ImageLibraryOmit<ExtArgs> | null
    /**
     * The data needed to update a ImageLibrary.
     */
    data: XOR<ImageLibraryUpdateInput, ImageLibraryUncheckedUpdateInput>
    /**
     * Choose, which ImageLibrary to update.
     */
    where: ImageLibraryWhereUniqueInput
  }

  /**
   * ImageLibrary updateMany
   */
  export type ImageLibraryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImageLibraries.
     */
    data: XOR<ImageLibraryUpdateManyMutationInput, ImageLibraryUncheckedUpdateManyInput>
    /**
     * Filter which ImageLibraries to update
     */
    where?: ImageLibraryWhereInput
    /**
     * Limit how many ImageLibraries to update.
     */
    limit?: number
  }

  /**
   * ImageLibrary updateManyAndReturn
   */
  export type ImageLibraryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageLibrary
     */
    select?: ImageLibrarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImageLibrary
     */
    omit?: ImageLibraryOmit<ExtArgs> | null
    /**
     * The data used to update ImageLibraries.
     */
    data: XOR<ImageLibraryUpdateManyMutationInput, ImageLibraryUncheckedUpdateManyInput>
    /**
     * Filter which ImageLibraries to update
     */
    where?: ImageLibraryWhereInput
    /**
     * Limit how many ImageLibraries to update.
     */
    limit?: number
  }

  /**
   * ImageLibrary upsert
   */
  export type ImageLibraryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageLibrary
     */
    select?: ImageLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageLibrary
     */
    omit?: ImageLibraryOmit<ExtArgs> | null
    /**
     * The filter to search for the ImageLibrary to update in case it exists.
     */
    where: ImageLibraryWhereUniqueInput
    /**
     * In case the ImageLibrary found by the `where` argument doesn't exist, create a new ImageLibrary with this data.
     */
    create: XOR<ImageLibraryCreateInput, ImageLibraryUncheckedCreateInput>
    /**
     * In case the ImageLibrary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageLibraryUpdateInput, ImageLibraryUncheckedUpdateInput>
  }

  /**
   * ImageLibrary delete
   */
  export type ImageLibraryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageLibrary
     */
    select?: ImageLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageLibrary
     */
    omit?: ImageLibraryOmit<ExtArgs> | null
    /**
     * Filter which ImageLibrary to delete.
     */
    where: ImageLibraryWhereUniqueInput
  }

  /**
   * ImageLibrary deleteMany
   */
  export type ImageLibraryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImageLibraries to delete
     */
    where?: ImageLibraryWhereInput
    /**
     * Limit how many ImageLibraries to delete.
     */
    limit?: number
  }

  /**
   * ImageLibrary without action
   */
  export type ImageLibraryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageLibrary
     */
    select?: ImageLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageLibrary
     */
    omit?: ImageLibraryOmit<ExtArgs> | null
  }


  /**
   * Model FileUploadProgress
   */

  export type AggregateFileUploadProgress = {
    _count: FileUploadProgressCountAggregateOutputType | null
    _avg: FileUploadProgressAvgAggregateOutputType | null
    _sum: FileUploadProgressSumAggregateOutputType | null
    _min: FileUploadProgressMinAggregateOutputType | null
    _max: FileUploadProgressMaxAggregateOutputType | null
  }

  export type FileUploadProgressAvgAggregateOutputType = {
    totalSize: number | null
    uploadedSize: number | null
  }

  export type FileUploadProgressSumAggregateOutputType = {
    totalSize: number | null
    uploadedSize: number | null
  }

  export type FileUploadProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    fileName: string | null
    totalSize: number | null
    uploadedSize: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileUploadProgressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    fileName: string | null
    totalSize: number | null
    uploadedSize: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileUploadProgressCountAggregateOutputType = {
    id: number
    userId: number
    fileName: number
    totalSize: number
    uploadedSize: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FileUploadProgressAvgAggregateInputType = {
    totalSize?: true
    uploadedSize?: true
  }

  export type FileUploadProgressSumAggregateInputType = {
    totalSize?: true
    uploadedSize?: true
  }

  export type FileUploadProgressMinAggregateInputType = {
    id?: true
    userId?: true
    fileName?: true
    totalSize?: true
    uploadedSize?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileUploadProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    fileName?: true
    totalSize?: true
    uploadedSize?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileUploadProgressCountAggregateInputType = {
    id?: true
    userId?: true
    fileName?: true
    totalSize?: true
    uploadedSize?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FileUploadProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileUploadProgress to aggregate.
     */
    where?: FileUploadProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileUploadProgresses to fetch.
     */
    orderBy?: FileUploadProgressOrderByWithRelationInput | FileUploadProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileUploadProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileUploadProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileUploadProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FileUploadProgresses
    **/
    _count?: true | FileUploadProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileUploadProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileUploadProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileUploadProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileUploadProgressMaxAggregateInputType
  }

  export type GetFileUploadProgressAggregateType<T extends FileUploadProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateFileUploadProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFileUploadProgress[P]>
      : GetScalarType<T[P], AggregateFileUploadProgress[P]>
  }




  export type FileUploadProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileUploadProgressWhereInput
    orderBy?: FileUploadProgressOrderByWithAggregationInput | FileUploadProgressOrderByWithAggregationInput[]
    by: FileUploadProgressScalarFieldEnum[] | FileUploadProgressScalarFieldEnum
    having?: FileUploadProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileUploadProgressCountAggregateInputType | true
    _avg?: FileUploadProgressAvgAggregateInputType
    _sum?: FileUploadProgressSumAggregateInputType
    _min?: FileUploadProgressMinAggregateInputType
    _max?: FileUploadProgressMaxAggregateInputType
  }

  export type FileUploadProgressGroupByOutputType = {
    id: string
    userId: string
    fileName: string
    totalSize: number
    uploadedSize: number
    status: string
    createdAt: Date
    updatedAt: Date
    _count: FileUploadProgressCountAggregateOutputType | null
    _avg: FileUploadProgressAvgAggregateOutputType | null
    _sum: FileUploadProgressSumAggregateOutputType | null
    _min: FileUploadProgressMinAggregateOutputType | null
    _max: FileUploadProgressMaxAggregateOutputType | null
  }

  type GetFileUploadProgressGroupByPayload<T extends FileUploadProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileUploadProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileUploadProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileUploadProgressGroupByOutputType[P]>
            : GetScalarType<T[P], FileUploadProgressGroupByOutputType[P]>
        }
      >
    >


  export type FileUploadProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fileName?: boolean
    totalSize?: boolean
    uploadedSize?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fileUploadProgress"]>

  export type FileUploadProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fileName?: boolean
    totalSize?: boolean
    uploadedSize?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fileUploadProgress"]>

  export type FileUploadProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fileName?: boolean
    totalSize?: boolean
    uploadedSize?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fileUploadProgress"]>

  export type FileUploadProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    fileName?: boolean
    totalSize?: boolean
    uploadedSize?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FileUploadProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "fileName" | "totalSize" | "uploadedSize" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["fileUploadProgress"]>

  export type $FileUploadProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FileUploadProgress"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      fileName: string
      totalSize: number
      uploadedSize: number
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fileUploadProgress"]>
    composites: {}
  }

  type FileUploadProgressGetPayload<S extends boolean | null | undefined | FileUploadProgressDefaultArgs> = $Result.GetResult<Prisma.$FileUploadProgressPayload, S>

  type FileUploadProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileUploadProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileUploadProgressCountAggregateInputType | true
    }

  export interface FileUploadProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FileUploadProgress'], meta: { name: 'FileUploadProgress' } }
    /**
     * Find zero or one FileUploadProgress that matches the filter.
     * @param {FileUploadProgressFindUniqueArgs} args - Arguments to find a FileUploadProgress
     * @example
     * // Get one FileUploadProgress
     * const fileUploadProgress = await prisma.fileUploadProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileUploadProgressFindUniqueArgs>(args: SelectSubset<T, FileUploadProgressFindUniqueArgs<ExtArgs>>): Prisma__FileUploadProgressClient<$Result.GetResult<Prisma.$FileUploadProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FileUploadProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileUploadProgressFindUniqueOrThrowArgs} args - Arguments to find a FileUploadProgress
     * @example
     * // Get one FileUploadProgress
     * const fileUploadProgress = await prisma.fileUploadProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileUploadProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, FileUploadProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileUploadProgressClient<$Result.GetResult<Prisma.$FileUploadProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileUploadProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadProgressFindFirstArgs} args - Arguments to find a FileUploadProgress
     * @example
     * // Get one FileUploadProgress
     * const fileUploadProgress = await prisma.fileUploadProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileUploadProgressFindFirstArgs>(args?: SelectSubset<T, FileUploadProgressFindFirstArgs<ExtArgs>>): Prisma__FileUploadProgressClient<$Result.GetResult<Prisma.$FileUploadProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileUploadProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadProgressFindFirstOrThrowArgs} args - Arguments to find a FileUploadProgress
     * @example
     * // Get one FileUploadProgress
     * const fileUploadProgress = await prisma.fileUploadProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileUploadProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, FileUploadProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileUploadProgressClient<$Result.GetResult<Prisma.$FileUploadProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FileUploadProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FileUploadProgresses
     * const fileUploadProgresses = await prisma.fileUploadProgress.findMany()
     * 
     * // Get first 10 FileUploadProgresses
     * const fileUploadProgresses = await prisma.fileUploadProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileUploadProgressWithIdOnly = await prisma.fileUploadProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileUploadProgressFindManyArgs>(args?: SelectSubset<T, FileUploadProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileUploadProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FileUploadProgress.
     * @param {FileUploadProgressCreateArgs} args - Arguments to create a FileUploadProgress.
     * @example
     * // Create one FileUploadProgress
     * const FileUploadProgress = await prisma.fileUploadProgress.create({
     *   data: {
     *     // ... data to create a FileUploadProgress
     *   }
     * })
     * 
     */
    create<T extends FileUploadProgressCreateArgs>(args: SelectSubset<T, FileUploadProgressCreateArgs<ExtArgs>>): Prisma__FileUploadProgressClient<$Result.GetResult<Prisma.$FileUploadProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FileUploadProgresses.
     * @param {FileUploadProgressCreateManyArgs} args - Arguments to create many FileUploadProgresses.
     * @example
     * // Create many FileUploadProgresses
     * const fileUploadProgress = await prisma.fileUploadProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileUploadProgressCreateManyArgs>(args?: SelectSubset<T, FileUploadProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FileUploadProgresses and returns the data saved in the database.
     * @param {FileUploadProgressCreateManyAndReturnArgs} args - Arguments to create many FileUploadProgresses.
     * @example
     * // Create many FileUploadProgresses
     * const fileUploadProgress = await prisma.fileUploadProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FileUploadProgresses and only return the `id`
     * const fileUploadProgressWithIdOnly = await prisma.fileUploadProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileUploadProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, FileUploadProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileUploadProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FileUploadProgress.
     * @param {FileUploadProgressDeleteArgs} args - Arguments to delete one FileUploadProgress.
     * @example
     * // Delete one FileUploadProgress
     * const FileUploadProgress = await prisma.fileUploadProgress.delete({
     *   where: {
     *     // ... filter to delete one FileUploadProgress
     *   }
     * })
     * 
     */
    delete<T extends FileUploadProgressDeleteArgs>(args: SelectSubset<T, FileUploadProgressDeleteArgs<ExtArgs>>): Prisma__FileUploadProgressClient<$Result.GetResult<Prisma.$FileUploadProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FileUploadProgress.
     * @param {FileUploadProgressUpdateArgs} args - Arguments to update one FileUploadProgress.
     * @example
     * // Update one FileUploadProgress
     * const fileUploadProgress = await prisma.fileUploadProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileUploadProgressUpdateArgs>(args: SelectSubset<T, FileUploadProgressUpdateArgs<ExtArgs>>): Prisma__FileUploadProgressClient<$Result.GetResult<Prisma.$FileUploadProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FileUploadProgresses.
     * @param {FileUploadProgressDeleteManyArgs} args - Arguments to filter FileUploadProgresses to delete.
     * @example
     * // Delete a few FileUploadProgresses
     * const { count } = await prisma.fileUploadProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileUploadProgressDeleteManyArgs>(args?: SelectSubset<T, FileUploadProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileUploadProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FileUploadProgresses
     * const fileUploadProgress = await prisma.fileUploadProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileUploadProgressUpdateManyArgs>(args: SelectSubset<T, FileUploadProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileUploadProgresses and returns the data updated in the database.
     * @param {FileUploadProgressUpdateManyAndReturnArgs} args - Arguments to update many FileUploadProgresses.
     * @example
     * // Update many FileUploadProgresses
     * const fileUploadProgress = await prisma.fileUploadProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FileUploadProgresses and only return the `id`
     * const fileUploadProgressWithIdOnly = await prisma.fileUploadProgress.updateManyAndReturn({
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
    updateManyAndReturn<T extends FileUploadProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, FileUploadProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileUploadProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FileUploadProgress.
     * @param {FileUploadProgressUpsertArgs} args - Arguments to update or create a FileUploadProgress.
     * @example
     * // Update or create a FileUploadProgress
     * const fileUploadProgress = await prisma.fileUploadProgress.upsert({
     *   create: {
     *     // ... data to create a FileUploadProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FileUploadProgress we want to update
     *   }
     * })
     */
    upsert<T extends FileUploadProgressUpsertArgs>(args: SelectSubset<T, FileUploadProgressUpsertArgs<ExtArgs>>): Prisma__FileUploadProgressClient<$Result.GetResult<Prisma.$FileUploadProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FileUploadProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadProgressCountArgs} args - Arguments to filter FileUploadProgresses to count.
     * @example
     * // Count the number of FileUploadProgresses
     * const count = await prisma.fileUploadProgress.count({
     *   where: {
     *     // ... the filter for the FileUploadProgresses we want to count
     *   }
     * })
    **/
    count<T extends FileUploadProgressCountArgs>(
      args?: Subset<T, FileUploadProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileUploadProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FileUploadProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FileUploadProgressAggregateArgs>(args: Subset<T, FileUploadProgressAggregateArgs>): Prisma.PrismaPromise<GetFileUploadProgressAggregateType<T>>

    /**
     * Group by FileUploadProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadProgressGroupByArgs} args - Group by arguments.
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
      T extends FileUploadProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileUploadProgressGroupByArgs['orderBy'] }
        : { orderBy?: FileUploadProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FileUploadProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileUploadProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FileUploadProgress model
   */
  readonly fields: FileUploadProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FileUploadProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileUploadProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FileUploadProgress model
   */
  interface FileUploadProgressFieldRefs {
    readonly id: FieldRef<"FileUploadProgress", 'String'>
    readonly userId: FieldRef<"FileUploadProgress", 'String'>
    readonly fileName: FieldRef<"FileUploadProgress", 'String'>
    readonly totalSize: FieldRef<"FileUploadProgress", 'Int'>
    readonly uploadedSize: FieldRef<"FileUploadProgress", 'Int'>
    readonly status: FieldRef<"FileUploadProgress", 'String'>
    readonly createdAt: FieldRef<"FileUploadProgress", 'DateTime'>
    readonly updatedAt: FieldRef<"FileUploadProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FileUploadProgress findUnique
   */
  export type FileUploadProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUploadProgress
     */
    select?: FileUploadProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUploadProgress
     */
    omit?: FileUploadProgressOmit<ExtArgs> | null
    /**
     * Filter, which FileUploadProgress to fetch.
     */
    where: FileUploadProgressWhereUniqueInput
  }

  /**
   * FileUploadProgress findUniqueOrThrow
   */
  export type FileUploadProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUploadProgress
     */
    select?: FileUploadProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUploadProgress
     */
    omit?: FileUploadProgressOmit<ExtArgs> | null
    /**
     * Filter, which FileUploadProgress to fetch.
     */
    where: FileUploadProgressWhereUniqueInput
  }

  /**
   * FileUploadProgress findFirst
   */
  export type FileUploadProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUploadProgress
     */
    select?: FileUploadProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUploadProgress
     */
    omit?: FileUploadProgressOmit<ExtArgs> | null
    /**
     * Filter, which FileUploadProgress to fetch.
     */
    where?: FileUploadProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileUploadProgresses to fetch.
     */
    orderBy?: FileUploadProgressOrderByWithRelationInput | FileUploadProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileUploadProgresses.
     */
    cursor?: FileUploadProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileUploadProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileUploadProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileUploadProgresses.
     */
    distinct?: FileUploadProgressScalarFieldEnum | FileUploadProgressScalarFieldEnum[]
  }

  /**
   * FileUploadProgress findFirstOrThrow
   */
  export type FileUploadProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUploadProgress
     */
    select?: FileUploadProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUploadProgress
     */
    omit?: FileUploadProgressOmit<ExtArgs> | null
    /**
     * Filter, which FileUploadProgress to fetch.
     */
    where?: FileUploadProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileUploadProgresses to fetch.
     */
    orderBy?: FileUploadProgressOrderByWithRelationInput | FileUploadProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileUploadProgresses.
     */
    cursor?: FileUploadProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileUploadProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileUploadProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileUploadProgresses.
     */
    distinct?: FileUploadProgressScalarFieldEnum | FileUploadProgressScalarFieldEnum[]
  }

  /**
   * FileUploadProgress findMany
   */
  export type FileUploadProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUploadProgress
     */
    select?: FileUploadProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUploadProgress
     */
    omit?: FileUploadProgressOmit<ExtArgs> | null
    /**
     * Filter, which FileUploadProgresses to fetch.
     */
    where?: FileUploadProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileUploadProgresses to fetch.
     */
    orderBy?: FileUploadProgressOrderByWithRelationInput | FileUploadProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FileUploadProgresses.
     */
    cursor?: FileUploadProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileUploadProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileUploadProgresses.
     */
    skip?: number
    distinct?: FileUploadProgressScalarFieldEnum | FileUploadProgressScalarFieldEnum[]
  }

  /**
   * FileUploadProgress create
   */
  export type FileUploadProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUploadProgress
     */
    select?: FileUploadProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUploadProgress
     */
    omit?: FileUploadProgressOmit<ExtArgs> | null
    /**
     * The data needed to create a FileUploadProgress.
     */
    data: XOR<FileUploadProgressCreateInput, FileUploadProgressUncheckedCreateInput>
  }

  /**
   * FileUploadProgress createMany
   */
  export type FileUploadProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FileUploadProgresses.
     */
    data: FileUploadProgressCreateManyInput | FileUploadProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FileUploadProgress createManyAndReturn
   */
  export type FileUploadProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUploadProgress
     */
    select?: FileUploadProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileUploadProgress
     */
    omit?: FileUploadProgressOmit<ExtArgs> | null
    /**
     * The data used to create many FileUploadProgresses.
     */
    data: FileUploadProgressCreateManyInput | FileUploadProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FileUploadProgress update
   */
  export type FileUploadProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUploadProgress
     */
    select?: FileUploadProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUploadProgress
     */
    omit?: FileUploadProgressOmit<ExtArgs> | null
    /**
     * The data needed to update a FileUploadProgress.
     */
    data: XOR<FileUploadProgressUpdateInput, FileUploadProgressUncheckedUpdateInput>
    /**
     * Choose, which FileUploadProgress to update.
     */
    where: FileUploadProgressWhereUniqueInput
  }

  /**
   * FileUploadProgress updateMany
   */
  export type FileUploadProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FileUploadProgresses.
     */
    data: XOR<FileUploadProgressUpdateManyMutationInput, FileUploadProgressUncheckedUpdateManyInput>
    /**
     * Filter which FileUploadProgresses to update
     */
    where?: FileUploadProgressWhereInput
    /**
     * Limit how many FileUploadProgresses to update.
     */
    limit?: number
  }

  /**
   * FileUploadProgress updateManyAndReturn
   */
  export type FileUploadProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUploadProgress
     */
    select?: FileUploadProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileUploadProgress
     */
    omit?: FileUploadProgressOmit<ExtArgs> | null
    /**
     * The data used to update FileUploadProgresses.
     */
    data: XOR<FileUploadProgressUpdateManyMutationInput, FileUploadProgressUncheckedUpdateManyInput>
    /**
     * Filter which FileUploadProgresses to update
     */
    where?: FileUploadProgressWhereInput
    /**
     * Limit how many FileUploadProgresses to update.
     */
    limit?: number
  }

  /**
   * FileUploadProgress upsert
   */
  export type FileUploadProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUploadProgress
     */
    select?: FileUploadProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUploadProgress
     */
    omit?: FileUploadProgressOmit<ExtArgs> | null
    /**
     * The filter to search for the FileUploadProgress to update in case it exists.
     */
    where: FileUploadProgressWhereUniqueInput
    /**
     * In case the FileUploadProgress found by the `where` argument doesn't exist, create a new FileUploadProgress with this data.
     */
    create: XOR<FileUploadProgressCreateInput, FileUploadProgressUncheckedCreateInput>
    /**
     * In case the FileUploadProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUploadProgressUpdateInput, FileUploadProgressUncheckedUpdateInput>
  }

  /**
   * FileUploadProgress delete
   */
  export type FileUploadProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUploadProgress
     */
    select?: FileUploadProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUploadProgress
     */
    omit?: FileUploadProgressOmit<ExtArgs> | null
    /**
     * Filter which FileUploadProgress to delete.
     */
    where: FileUploadProgressWhereUniqueInput
  }

  /**
   * FileUploadProgress deleteMany
   */
  export type FileUploadProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileUploadProgresses to delete
     */
    where?: FileUploadProgressWhereInput
    /**
     * Limit how many FileUploadProgresses to delete.
     */
    limit?: number
  }

  /**
   * FileUploadProgress without action
   */
  export type FileUploadProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUploadProgress
     */
    select?: FileUploadProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileUploadProgress
     */
    omit?: FileUploadProgressOmit<ExtArgs> | null
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


  export const FileManagerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    parentId: 'parentId',
    name: 'name',
    type: 'type',
    mimeType: 'mimeType',
    size: 'size',
    path: 'path',
    url: 'url',
    thumbnail: 'thumbnail',
    isStarred: 'isStarred',
    isShared: 'isShared',
    sharedWith: 'sharedWith',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FileManagerScalarFieldEnum = (typeof FileManagerScalarFieldEnum)[keyof typeof FileManagerScalarFieldEnum]


  export const FileManagerActivityScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    fileId: 'fileId',
    action: 'action',
    details: 'details',
    createdAt: 'createdAt'
  };

  export type FileManagerActivityScalarFieldEnum = (typeof FileManagerActivityScalarFieldEnum)[keyof typeof FileManagerActivityScalarFieldEnum]


  export const ImageLibraryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    name: 'name',
    url: 'url',
    thumbnail: 'thumbnail',
    width: 'width',
    height: 'height',
    mimeType: 'mimeType',
    size: 'size',
    category: 'category',
    tags: 'tags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ImageLibraryScalarFieldEnum = (typeof ImageLibraryScalarFieldEnum)[keyof typeof ImageLibraryScalarFieldEnum]


  export const FileUploadProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fileName: 'fileName',
    totalSize: 'totalSize',
    uploadedSize: 'uploadedSize',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FileUploadProgressScalarFieldEnum = (typeof FileUploadProgressScalarFieldEnum)[keyof typeof FileUploadProgressScalarFieldEnum]


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


  export type FileManagerWhereInput = {
    AND?: FileManagerWhereInput | FileManagerWhereInput[]
    OR?: FileManagerWhereInput[]
    NOT?: FileManagerWhereInput | FileManagerWhereInput[]
    id?: UuidFilter<"FileManager"> | string
    userId?: UuidFilter<"FileManager"> | string
    organizationId?: UuidNullableFilter<"FileManager"> | string | null
    parentId?: UuidNullableFilter<"FileManager"> | string | null
    name?: StringFilter<"FileManager"> | string
    type?: StringFilter<"FileManager"> | string
    mimeType?: StringNullableFilter<"FileManager"> | string | null
    size?: IntNullableFilter<"FileManager"> | number | null
    path?: StringNullableFilter<"FileManager"> | string | null
    url?: StringNullableFilter<"FileManager"> | string | null
    thumbnail?: StringNullableFilter<"FileManager"> | string | null
    isStarred?: BoolFilter<"FileManager"> | boolean
    isShared?: BoolFilter<"FileManager"> | boolean
    sharedWith?: StringNullableListFilter<"FileManager">
    isDeleted?: BoolFilter<"FileManager"> | boolean
    deletedAt?: DateTimeNullableFilter<"FileManager"> | Date | string | null
    createdAt?: DateTimeFilter<"FileManager"> | Date | string
    updatedAt?: DateTimeFilter<"FileManager"> | Date | string
  }

  export type FileManagerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    name?: SortOrder
    type?: SortOrder
    mimeType?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    path?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    isStarred?: SortOrder
    isShared?: SortOrder
    sharedWith?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileManagerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FileManagerWhereInput | FileManagerWhereInput[]
    OR?: FileManagerWhereInput[]
    NOT?: FileManagerWhereInput | FileManagerWhereInput[]
    userId?: UuidFilter<"FileManager"> | string
    organizationId?: UuidNullableFilter<"FileManager"> | string | null
    parentId?: UuidNullableFilter<"FileManager"> | string | null
    name?: StringFilter<"FileManager"> | string
    type?: StringFilter<"FileManager"> | string
    mimeType?: StringNullableFilter<"FileManager"> | string | null
    size?: IntNullableFilter<"FileManager"> | number | null
    path?: StringNullableFilter<"FileManager"> | string | null
    url?: StringNullableFilter<"FileManager"> | string | null
    thumbnail?: StringNullableFilter<"FileManager"> | string | null
    isStarred?: BoolFilter<"FileManager"> | boolean
    isShared?: BoolFilter<"FileManager"> | boolean
    sharedWith?: StringNullableListFilter<"FileManager">
    isDeleted?: BoolFilter<"FileManager"> | boolean
    deletedAt?: DateTimeNullableFilter<"FileManager"> | Date | string | null
    createdAt?: DateTimeFilter<"FileManager"> | Date | string
    updatedAt?: DateTimeFilter<"FileManager"> | Date | string
  }, "id">

  export type FileManagerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    name?: SortOrder
    type?: SortOrder
    mimeType?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    path?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    isStarred?: SortOrder
    isShared?: SortOrder
    sharedWith?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FileManagerCountOrderByAggregateInput
    _avg?: FileManagerAvgOrderByAggregateInput
    _max?: FileManagerMaxOrderByAggregateInput
    _min?: FileManagerMinOrderByAggregateInput
    _sum?: FileManagerSumOrderByAggregateInput
  }

  export type FileManagerScalarWhereWithAggregatesInput = {
    AND?: FileManagerScalarWhereWithAggregatesInput | FileManagerScalarWhereWithAggregatesInput[]
    OR?: FileManagerScalarWhereWithAggregatesInput[]
    NOT?: FileManagerScalarWhereWithAggregatesInput | FileManagerScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"FileManager"> | string
    userId?: UuidWithAggregatesFilter<"FileManager"> | string
    organizationId?: UuidNullableWithAggregatesFilter<"FileManager"> | string | null
    parentId?: UuidNullableWithAggregatesFilter<"FileManager"> | string | null
    name?: StringWithAggregatesFilter<"FileManager"> | string
    type?: StringWithAggregatesFilter<"FileManager"> | string
    mimeType?: StringNullableWithAggregatesFilter<"FileManager"> | string | null
    size?: IntNullableWithAggregatesFilter<"FileManager"> | number | null
    path?: StringNullableWithAggregatesFilter<"FileManager"> | string | null
    url?: StringNullableWithAggregatesFilter<"FileManager"> | string | null
    thumbnail?: StringNullableWithAggregatesFilter<"FileManager"> | string | null
    isStarred?: BoolWithAggregatesFilter<"FileManager"> | boolean
    isShared?: BoolWithAggregatesFilter<"FileManager"> | boolean
    sharedWith?: StringNullableListFilter<"FileManager">
    isDeleted?: BoolWithAggregatesFilter<"FileManager"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"FileManager"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FileManager"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FileManager"> | Date | string
  }

  export type FileManagerActivityWhereInput = {
    AND?: FileManagerActivityWhereInput | FileManagerActivityWhereInput[]
    OR?: FileManagerActivityWhereInput[]
    NOT?: FileManagerActivityWhereInput | FileManagerActivityWhereInput[]
    id?: UuidFilter<"FileManagerActivity"> | string
    userId?: UuidFilter<"FileManagerActivity"> | string
    organizationId?: UuidNullableFilter<"FileManagerActivity"> | string | null
    fileId?: UuidNullableFilter<"FileManagerActivity"> | string | null
    action?: StringFilter<"FileManagerActivity"> | string
    details?: JsonNullableFilter<"FileManagerActivity">
    createdAt?: DateTimeFilter<"FileManagerActivity"> | Date | string
  }

  export type FileManagerActivityOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    fileId?: SortOrderInput | SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type FileManagerActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FileManagerActivityWhereInput | FileManagerActivityWhereInput[]
    OR?: FileManagerActivityWhereInput[]
    NOT?: FileManagerActivityWhereInput | FileManagerActivityWhereInput[]
    userId?: UuidFilter<"FileManagerActivity"> | string
    organizationId?: UuidNullableFilter<"FileManagerActivity"> | string | null
    fileId?: UuidNullableFilter<"FileManagerActivity"> | string | null
    action?: StringFilter<"FileManagerActivity"> | string
    details?: JsonNullableFilter<"FileManagerActivity">
    createdAt?: DateTimeFilter<"FileManagerActivity"> | Date | string
  }, "id">

  export type FileManagerActivityOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    fileId?: SortOrderInput | SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: FileManagerActivityCountOrderByAggregateInput
    _max?: FileManagerActivityMaxOrderByAggregateInput
    _min?: FileManagerActivityMinOrderByAggregateInput
  }

  export type FileManagerActivityScalarWhereWithAggregatesInput = {
    AND?: FileManagerActivityScalarWhereWithAggregatesInput | FileManagerActivityScalarWhereWithAggregatesInput[]
    OR?: FileManagerActivityScalarWhereWithAggregatesInput[]
    NOT?: FileManagerActivityScalarWhereWithAggregatesInput | FileManagerActivityScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"FileManagerActivity"> | string
    userId?: UuidWithAggregatesFilter<"FileManagerActivity"> | string
    organizationId?: UuidNullableWithAggregatesFilter<"FileManagerActivity"> | string | null
    fileId?: UuidNullableWithAggregatesFilter<"FileManagerActivity"> | string | null
    action?: StringWithAggregatesFilter<"FileManagerActivity"> | string
    details?: JsonNullableWithAggregatesFilter<"FileManagerActivity">
    createdAt?: DateTimeWithAggregatesFilter<"FileManagerActivity"> | Date | string
  }

  export type ImageLibraryWhereInput = {
    AND?: ImageLibraryWhereInput | ImageLibraryWhereInput[]
    OR?: ImageLibraryWhereInput[]
    NOT?: ImageLibraryWhereInput | ImageLibraryWhereInput[]
    id?: UuidFilter<"ImageLibrary"> | string
    userId?: UuidFilter<"ImageLibrary"> | string
    organizationId?: UuidNullableFilter<"ImageLibrary"> | string | null
    name?: StringFilter<"ImageLibrary"> | string
    url?: StringFilter<"ImageLibrary"> | string
    thumbnail?: StringNullableFilter<"ImageLibrary"> | string | null
    width?: IntNullableFilter<"ImageLibrary"> | number | null
    height?: IntNullableFilter<"ImageLibrary"> | number | null
    mimeType?: StringNullableFilter<"ImageLibrary"> | string | null
    size?: IntNullableFilter<"ImageLibrary"> | number | null
    category?: StringNullableFilter<"ImageLibrary"> | string | null
    tags?: StringNullableListFilter<"ImageLibrary">
    createdAt?: DateTimeFilter<"ImageLibrary"> | Date | string
    updatedAt?: DateTimeFilter<"ImageLibrary"> | Date | string
  }

  export type ImageLibraryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    name?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageLibraryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImageLibraryWhereInput | ImageLibraryWhereInput[]
    OR?: ImageLibraryWhereInput[]
    NOT?: ImageLibraryWhereInput | ImageLibraryWhereInput[]
    userId?: UuidFilter<"ImageLibrary"> | string
    organizationId?: UuidNullableFilter<"ImageLibrary"> | string | null
    name?: StringFilter<"ImageLibrary"> | string
    url?: StringFilter<"ImageLibrary"> | string
    thumbnail?: StringNullableFilter<"ImageLibrary"> | string | null
    width?: IntNullableFilter<"ImageLibrary"> | number | null
    height?: IntNullableFilter<"ImageLibrary"> | number | null
    mimeType?: StringNullableFilter<"ImageLibrary"> | string | null
    size?: IntNullableFilter<"ImageLibrary"> | number | null
    category?: StringNullableFilter<"ImageLibrary"> | string | null
    tags?: StringNullableListFilter<"ImageLibrary">
    createdAt?: DateTimeFilter<"ImageLibrary"> | Date | string
    updatedAt?: DateTimeFilter<"ImageLibrary"> | Date | string
  }, "id">

  export type ImageLibraryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    name?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ImageLibraryCountOrderByAggregateInput
    _avg?: ImageLibraryAvgOrderByAggregateInput
    _max?: ImageLibraryMaxOrderByAggregateInput
    _min?: ImageLibraryMinOrderByAggregateInput
    _sum?: ImageLibrarySumOrderByAggregateInput
  }

  export type ImageLibraryScalarWhereWithAggregatesInput = {
    AND?: ImageLibraryScalarWhereWithAggregatesInput | ImageLibraryScalarWhereWithAggregatesInput[]
    OR?: ImageLibraryScalarWhereWithAggregatesInput[]
    NOT?: ImageLibraryScalarWhereWithAggregatesInput | ImageLibraryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ImageLibrary"> | string
    userId?: UuidWithAggregatesFilter<"ImageLibrary"> | string
    organizationId?: UuidNullableWithAggregatesFilter<"ImageLibrary"> | string | null
    name?: StringWithAggregatesFilter<"ImageLibrary"> | string
    url?: StringWithAggregatesFilter<"ImageLibrary"> | string
    thumbnail?: StringNullableWithAggregatesFilter<"ImageLibrary"> | string | null
    width?: IntNullableWithAggregatesFilter<"ImageLibrary"> | number | null
    height?: IntNullableWithAggregatesFilter<"ImageLibrary"> | number | null
    mimeType?: StringNullableWithAggregatesFilter<"ImageLibrary"> | string | null
    size?: IntNullableWithAggregatesFilter<"ImageLibrary"> | number | null
    category?: StringNullableWithAggregatesFilter<"ImageLibrary"> | string | null
    tags?: StringNullableListFilter<"ImageLibrary">
    createdAt?: DateTimeWithAggregatesFilter<"ImageLibrary"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ImageLibrary"> | Date | string
  }

  export type FileUploadProgressWhereInput = {
    AND?: FileUploadProgressWhereInput | FileUploadProgressWhereInput[]
    OR?: FileUploadProgressWhereInput[]
    NOT?: FileUploadProgressWhereInput | FileUploadProgressWhereInput[]
    id?: UuidFilter<"FileUploadProgress"> | string
    userId?: UuidFilter<"FileUploadProgress"> | string
    fileName?: StringFilter<"FileUploadProgress"> | string
    totalSize?: IntFilter<"FileUploadProgress"> | number
    uploadedSize?: IntFilter<"FileUploadProgress"> | number
    status?: StringFilter<"FileUploadProgress"> | string
    createdAt?: DateTimeFilter<"FileUploadProgress"> | Date | string
    updatedAt?: DateTimeFilter<"FileUploadProgress"> | Date | string
  }

  export type FileUploadProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    totalSize?: SortOrder
    uploadedSize?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileUploadProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FileUploadProgressWhereInput | FileUploadProgressWhereInput[]
    OR?: FileUploadProgressWhereInput[]
    NOT?: FileUploadProgressWhereInput | FileUploadProgressWhereInput[]
    userId?: UuidFilter<"FileUploadProgress"> | string
    fileName?: StringFilter<"FileUploadProgress"> | string
    totalSize?: IntFilter<"FileUploadProgress"> | number
    uploadedSize?: IntFilter<"FileUploadProgress"> | number
    status?: StringFilter<"FileUploadProgress"> | string
    createdAt?: DateTimeFilter<"FileUploadProgress"> | Date | string
    updatedAt?: DateTimeFilter<"FileUploadProgress"> | Date | string
  }, "id">

  export type FileUploadProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    totalSize?: SortOrder
    uploadedSize?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FileUploadProgressCountOrderByAggregateInput
    _avg?: FileUploadProgressAvgOrderByAggregateInput
    _max?: FileUploadProgressMaxOrderByAggregateInput
    _min?: FileUploadProgressMinOrderByAggregateInput
    _sum?: FileUploadProgressSumOrderByAggregateInput
  }

  export type FileUploadProgressScalarWhereWithAggregatesInput = {
    AND?: FileUploadProgressScalarWhereWithAggregatesInput | FileUploadProgressScalarWhereWithAggregatesInput[]
    OR?: FileUploadProgressScalarWhereWithAggregatesInput[]
    NOT?: FileUploadProgressScalarWhereWithAggregatesInput | FileUploadProgressScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"FileUploadProgress"> | string
    userId?: UuidWithAggregatesFilter<"FileUploadProgress"> | string
    fileName?: StringWithAggregatesFilter<"FileUploadProgress"> | string
    totalSize?: IntWithAggregatesFilter<"FileUploadProgress"> | number
    uploadedSize?: IntWithAggregatesFilter<"FileUploadProgress"> | number
    status?: StringWithAggregatesFilter<"FileUploadProgress"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FileUploadProgress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FileUploadProgress"> | Date | string
  }

  export type FileManagerCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    parentId?: string | null
    name: string
    type?: string
    mimeType?: string | null
    size?: number | null
    path?: string | null
    url?: string | null
    thumbnail?: string | null
    isStarred?: boolean
    isShared?: boolean
    sharedWith?: FileManagerCreatesharedWithInput | string[]
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileManagerUncheckedCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    parentId?: string | null
    name: string
    type?: string
    mimeType?: string | null
    size?: number | null
    path?: string | null
    url?: string | null
    thumbnail?: string | null
    isStarred?: boolean
    isShared?: boolean
    sharedWith?: FileManagerCreatesharedWithInput | string[]
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileManagerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isStarred?: BoolFieldUpdateOperationsInput | boolean
    isShared?: BoolFieldUpdateOperationsInput | boolean
    sharedWith?: FileManagerUpdatesharedWithInput | string[]
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileManagerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isStarred?: BoolFieldUpdateOperationsInput | boolean
    isShared?: BoolFieldUpdateOperationsInput | boolean
    sharedWith?: FileManagerUpdatesharedWithInput | string[]
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileManagerCreateManyInput = {
    id?: string
    userId: string
    organizationId?: string | null
    parentId?: string | null
    name: string
    type?: string
    mimeType?: string | null
    size?: number | null
    path?: string | null
    url?: string | null
    thumbnail?: string | null
    isStarred?: boolean
    isShared?: boolean
    sharedWith?: FileManagerCreatesharedWithInput | string[]
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileManagerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isStarred?: BoolFieldUpdateOperationsInput | boolean
    isShared?: BoolFieldUpdateOperationsInput | boolean
    sharedWith?: FileManagerUpdatesharedWithInput | string[]
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileManagerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isStarred?: BoolFieldUpdateOperationsInput | boolean
    isShared?: BoolFieldUpdateOperationsInput | boolean
    sharedWith?: FileManagerUpdatesharedWithInput | string[]
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileManagerActivityCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    fileId?: string | null
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FileManagerActivityUncheckedCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    fileId?: string | null
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FileManagerActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    fileId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileManagerActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    fileId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileManagerActivityCreateManyInput = {
    id?: string
    userId: string
    organizationId?: string | null
    fileId?: string | null
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FileManagerActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    fileId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileManagerActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    fileId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageLibraryCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    name: string
    url: string
    thumbnail?: string | null
    width?: number | null
    height?: number | null
    mimeType?: string | null
    size?: number | null
    category?: string | null
    tags?: ImageLibraryCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageLibraryUncheckedCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    name: string
    url: string
    thumbnail?: string | null
    width?: number | null
    height?: number | null
    mimeType?: string | null
    size?: number | null
    category?: string | null
    tags?: ImageLibraryCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageLibraryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ImageLibraryUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageLibraryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ImageLibraryUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageLibraryCreateManyInput = {
    id?: string
    userId: string
    organizationId?: string | null
    name: string
    url: string
    thumbnail?: string | null
    width?: number | null
    height?: number | null
    mimeType?: string | null
    size?: number | null
    category?: string | null
    tags?: ImageLibraryCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageLibraryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ImageLibraryUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageLibraryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ImageLibraryUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadProgressCreateInput = {
    id?: string
    userId: string
    fileName: string
    totalSize: number
    uploadedSize?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUploadProgressUncheckedCreateInput = {
    id?: string
    userId: string
    fileName: string
    totalSize: number
    uploadedSize?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUploadProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    totalSize?: IntFieldUpdateOperationsInput | number
    uploadedSize?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    totalSize?: IntFieldUpdateOperationsInput | number
    uploadedSize?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadProgressCreateManyInput = {
    id?: string
    userId: string
    fileName: string
    totalSize: number
    uploadedSize?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUploadProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    totalSize?: IntFieldUpdateOperationsInput | number
    uploadedSize?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUploadProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    totalSize?: IntFieldUpdateOperationsInput | number
    uploadedSize?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type FileManagerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    parentId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    path?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    isStarred?: SortOrder
    isShared?: SortOrder
    sharedWith?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileManagerAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type FileManagerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    parentId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    path?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    isStarred?: SortOrder
    isShared?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileManagerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    parentId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    path?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    isStarred?: SortOrder
    isShared?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileManagerSumOrderByAggregateInput = {
    size?: SortOrder
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

  export type FileManagerActivityCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    fileId?: SortOrder
    action?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type FileManagerActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    fileId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type FileManagerActivityMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    fileId?: SortOrder
    action?: SortOrder
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

  export type ImageLibraryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    width?: SortOrder
    height?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageLibraryAvgOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
  }

  export type ImageLibraryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    width?: SortOrder
    height?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageLibraryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    width?: SortOrder
    height?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageLibrarySumOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
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

  export type FileUploadProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    totalSize?: SortOrder
    uploadedSize?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileUploadProgressAvgOrderByAggregateInput = {
    totalSize?: SortOrder
    uploadedSize?: SortOrder
  }

  export type FileUploadProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    totalSize?: SortOrder
    uploadedSize?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileUploadProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    totalSize?: SortOrder
    uploadedSize?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileUploadProgressSumOrderByAggregateInput = {
    totalSize?: SortOrder
    uploadedSize?: SortOrder
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

  export type FileManagerCreatesharedWithInput = {
    set: string[]
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

  export type FileManagerUpdatesharedWithInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ImageLibraryCreatetagsInput = {
    set: string[]
  }

  export type ImageLibraryUpdatetagsInput = {
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